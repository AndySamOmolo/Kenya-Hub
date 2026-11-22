#!/usr/bin/env python3
"""
kenyahub/scripts/ci-ingest-audio-and-text-r2.py

Complete Time-Bounded GitHub Actions Streaming Pipeline for KenyaHub:
1. Enforces the 31-item Exclusion Watchlist from `scripts/lib/license_guard.py`.
2. Ingests ALL 17 verified commercial Speech/Audio/KSL datasets:
   - HF Streaming Audio: Google WAXAL v2.0.0 (`mas_asr` -> luhya), CLEAR BibleTTS Dholuo,
     KenCorpus Audio (Swahili/Dholuo/Luhya) & KenSpeech (raw-bytes ffmpeg decode),
     Google FLEURS, Sunbird AI SALT (`studio-teo`, `multispeaker-teo`, `studio-swa`),
     African Next Voices Kenya (`kikuyu`, `luo`, `kalenjin`, `maasai`, `samburu`, `somali`),
     EdAcc (`english-ke`), Thiomi-5K (`kik`, `kam`, `luo`, `mer`, `som`).
   - Mozilla Common Voice 27.0 (MDC CC0-1.0): `sw`, `luo`, `kln`, `dav` (Taita), `om` (Borana).
   - Wikimedia Commons Lingua Libre Swahili (`swa`, CC-BY-SA-4.0).
   - Direct Archives: OpenSLR SLR25 (ALFFA Swahili tarball), BibleTTS Kikuyu,
     Makerere Swahili TTS (Mendeley API), Rono Swahili TTS (Mendeley API).
   - KSL (`xki`) Pose/Sign Index (`public/ksl-index.json`): Open Sign Bibles (`xki`) +
     Maseno KSL Pose Dataset (Zenodo `14338329` (open access) API).
"""

from __future__ import annotations

import concurrent.futures
import json
import os
import re
import subprocess
import sys
import tarfile
import tempfile
import time
import unicodedata
import zipfile
from datetime import datetime, timezone
from pathlib import Path

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from lib.license_guard import BLOCKED_NON_COMMERCIAL_REPOS, assert_repo_allowed

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(line_buffering=True)

START_MONOTONIC = time.monotonic()
GLOBAL_TIME_BUDGET_SEC = int(os.environ.get("GLOBAL_TIME_BUDGET_SEC") or str(45 * 60))
PER_DATASET_TIMEOUT_SEC = int(os.environ.get("PER_DATASET_TIMEOUT_SEC") or "120")

ROOT_DIR = SCRIPT_DIR.parent
DICT_DIR = ROOT_DIR / "src" / "data" / "dictionaries"
PUBLIC_DIR = ROOT_DIR / "public"
MANIFEST_PATH = PUBLIC_DIR / "audio-manifest.json"
LOCK_PATH = PUBLIC_DIR / ".audio-ingested-lock.json"
AUDIO_INDEX_PATH = PUBLIC_DIR / "r2-audio-index.json"
KSL_INDEX_PATH = PUBLIC_DIR / "ksl-index.json"

CF_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
CF_API_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
R2_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
R2_SECRET_ACCESS_KEY = os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"


def sanitize_cdn_base(raw: str) -> str:
    val = (raw or "").strip()
    md = re.match(r"^\[[^\]]*\]\((https?://[^)\s]+)\)(.*)$", val)
    if md:
        val = f"{md.group(1).strip()}{md.group(2).strip()}"
    return (val or "https://audio.kenyahub.me").rstrip("/")


CDN_BASE = sanitize_cdn_base(os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", ""))
ONLY_UNGATED = os.environ.get("ONLY_UNGATED", "").strip().lower() in {"1", "true", "yes"}
FORCE_REINGEST = os.environ.get("FORCE_REINGEST", "").strip().lower() in {"1", "true", "yes"}
RETRY_PENDING_ONLY = os.environ.get("RETRY_PENDING_ONLY", "true").strip().lower() in {"1", "true", "yes"}
INCLUDE_MDC_COMMON_VOICE = os.environ.get("INCLUDE_MDC_COMMON_VOICE", "true").strip().lower() in {"1", "true", "yes"}
INCLUDE_LINGUA_LIBRE = os.environ.get("INCLUDE_LINGUA_LIBRE", "true").strip().lower() in {"1", "true", "yes"}
INCLUDE_KSL_METADATA = os.environ.get("INCLUDE_KSL_METADATA", "true").strip().lower() in {"1", "true", "yes"}

HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None
MDC_API_KEY = os.environ.get("MDC_API_KEY", "").strip() or None
ZENODO_TOKEN = os.environ.get("ZENODO_TOKEN", "").strip() or None
MAX_CLIPS = int(os.environ.get("MAX_CLIPS_PER_DATASET") or "250")
MAX_TEXT_ROWS = int(os.environ.get("MAX_TEXT_ROWS_PER_DATASET") or "3000")

HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "KenyaHubBot/2.3 (https://kenyahub.me; contact@kenyahub.me)"})
R2_UPLOAD_DISABLED = os.environ.get("R2_READY", "true").strip().lower() in {"0", "false", "no"}
R2_FAILURE_COUNT = 0


def load_existing_dataset_status() -> dict:
    if not LOCK_PATH.exists():
        return {}
    try:
        return json.loads(LOCK_PATH.read_text(encoding="utf-8")).get("datasetStatus", {}) or {}
    except Exception:
        return {}


def load_existing_audio_index() -> dict:
    if not AUDIO_INDEX_PATH.exists():
        return {}
    try:
        return json.loads(AUDIO_INDEX_PATH.read_text(encoding="utf-8"))
    except Exception:
        return {}


def is_gated_error(exc: Exception) -> bool:
    msg = str(exc).lower()
    return any(tok in msg for tok in ("gated", "401", "403", "forbidden", "access to dataset", "authorized", "must be authenticated"))


def log(msg: str):
    elapsed = int(time.monotonic() - START_MONOTONIC)
    print(f"[{elapsed:4d}s] {msg}", flush=True)


def global_budget_exceeded() -> bool:
    return (time.monotonic() - START_MONOTONIC) >= GLOBAL_TIME_BUDGET_SEC


def to_audio_slug(text: str) -> str:
    cleaned = re.sub(r"\([^)]*\)", " ", str(text or ""))
    cleaned = re.split(r"[•/;]", cleaned)[0].strip().lower()
    norm = unicodedata.normalize("NFD", cleaned)
    norm = "".join(ch for ch in norm if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", norm).strip("-")
    return slug[:64]


def load_hf_stream(repo: str, config: str, split: str = "train", revision: str = None, decode_audio: bool = True):
    assert_repo_allowed(repo)
    from datasets import Audio, load_dataset

    kwargs = {"split": split, "streaming": True, "token": HF_TOKEN, "trust_remote_code": True}
    if revision:
        kwargs["revision"] = revision
    try:
        ds = load_dataset(repo, config, **kwargs)
    except (TypeError, ValueError):
        kwargs.pop("trust_remote_code", None)
        try:
            ds = load_dataset(repo, config, **kwargs)
        except TypeError:
            kwargs.pop("token", None)
            kwargs["use_auth_token"] = HF_TOKEN
            ds = load_dataset(repo, config, **kwargs)
    if not decode_audio:
        try:
            ds = ds.cast_column("audio", Audio(decode=False))
        except Exception:
            pass
    return ds


def get_s3_client():
    if not (CF_ACCOUNT_ID and R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY):
        return None
    try:
        import boto3
        from botocore.config import Config

        return boto3.client(
            "s3",
            endpoint_url=f"https://{CF_ACCOUNT_ID}.r2.cloudflarestorage.com",
            aws_access_key_id=R2_ACCESS_KEY_ID,
            aws_secret_access_key=R2_SECRET_ACCESS_KEY,
            region_name="auto",
            config=Config(
                signature_version="s3v4",
                max_pool_connections=16,
                connect_timeout=10,
                read_timeout=20,
                retries={"max_attempts": 2},
            ),
        )
    except Exception as exc:
        log(f"[warn] Failed to initialize boto3 S3 R2 client: {exc}")
        return None


def transcode_to_opus_bytes(input_path: str, opus_path: str, timeout_sec: int = 15) -> bytes | None:
    try:
        subprocess.run(
            [
                "ffmpeg", "-y", "-i", input_path,
                "-vn", "-ac", "1", "-ar", "24000",
                "-c:a", "libopus", "-b:a", "24k", "-vbr", "on", "-application", "voip",
                opus_path,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            timeout=timeout_sec,
        )
        if os.path.exists(opus_path) and os.path.getsize(opus_path) > 0:
            with open(opus_path, "rb") as f:
                return f.read()
        return None
    except Exception:
        return None


def upload_bytes_to_r2(s3_client, r2_key: str, opus_bytes: bytes) -> bool:
    global R2_UPLOAD_DISABLED, R2_FAILURE_COUNT
    if R2_UPLOAD_DISABLED or not opus_bytes:
        return False

    if s3_client is not None:
        try:
            s3_client.put_object(
                Bucket=R2_BUCKET,
                Key=r2_key,
                Body=opus_bytes,
                ContentType="audio/ogg; codecs=opus",
                CacheControl="public, max-age=31536000, immutable",
            )
            return True
        except Exception as exc:
            R2_FAILURE_COUNT += 1
            if R2_FAILURE_COUNT <= 3:
                log(f"  [warn] S3 R2 put_object notice for {r2_key}: {exc}")

    if CF_API_TOKEN and CF_ACCOUNT_ID:
        url = f"https://api.cloudflare.com/client/v4/accounts/{CF_ACCOUNT_ID}/r2/buckets/{R2_BUCKET}/objects/{r2_key}"
        try:
            resp = HTTP_SESSION.put(
                url,
                data=opus_bytes,
                headers={
                    "Authorization": f"Bearer {CF_API_TOKEN}",
                    "Content-Type": "audio/ogg; codecs=opus",
                    "Cache-Control": "public, max-age=31536000, immutable",
                },
                timeout=60,
            )
            if resp.ok:
                return True
            R2_FAILURE_COUNT += 1
            if R2_FAILURE_COUNT <= 3:
                log(f"  [warn] Cloudflare REST R2 upload HTTP {resp.status_code} for {r2_key}: {resp.text[:180]}")
        except Exception as exc:
            R2_FAILURE_COUNT += 1
            if R2_FAILURE_COUNT <= 3:
                log(f"  [warn] Cloudflare REST R2 upload failed for {r2_key}: {exc}")

    if R2_FAILURE_COUNT >= 10:
        log("  [warn] 10 consecutive R2 uploads failed. Continuing in manifest + text-ingestion mode.")
        R2_UPLOAD_DISABLED = True
    return False


def resolve_public_audio_url(r2_key: str) -> str:
    if CDN_BASE:
        return f"{CDN_BASE}/{r2_key}"
    return f"/{r2_key}"


def transcode_and_upload_worker(s3_client, lang_id: str, slug: str, arr, sr: int) -> tuple[str, str] | None:
    if R2_UPLOAD_DISABLED:
        return None
    import soundfile as sf

    try:
        if len(arr) / float(sr) > 20.0:
            return None
    except Exception:
        pass

    with tempfile.TemporaryDirectory() as tmpdir:
        wav_path = os.path.join(tmpdir, "clip.wav")
        opus_path = os.path.join(tmpdir, "clip.opus")
        sf.write(wav_path, arr, sr)
        opus_bytes = transcode_to_opus_bytes(wav_path, opus_path)
        if not opus_bytes:
            return None
        r2_key = f"audio/{lang_id}/{slug}.opus"
        if upload_bytes_to_r2(s3_client, r2_key, opus_bytes):
            return slug, resolve_public_audio_url(r2_key)
    return None


def transcode_raw_bytes_and_upload_worker(s3_client, lang_id: str, slug: str, raw_bytes: bytes, ext: str = ".mp3", timeout_sec: int = 15) -> tuple[str, str] | None:
    if R2_UPLOAD_DISABLED or not raw_bytes:
        return None
    safe_ext = ext if ext.startswith(".") else f".{ext}"
    with tempfile.TemporaryDirectory() as tmpdir:
        in_path = os.path.join(tmpdir, f"clip{safe_ext}")
        opus_path = os.path.join(tmpdir, "clip.opus")
        with open(in_path, "wb") as f:
            f.write(raw_bytes)
        opus_bytes = transcode_to_opus_bytes(in_path, opus_path, timeout_sec=timeout_sec)
        if not opus_bytes:
            return None
        r2_key = f"audio/{lang_id}/{slug}.opus"
        if upload_bytes_to_r2(s3_client, r2_key, opus_bytes):
            return slug, resolve_public_audio_url(r2_key)
    return None


def add_verified_text_entries_to_dict(lang_id: str, new_entries: list) -> int:
    if not new_entries:
        return 0
    dict_path = DICT_DIR / f"{lang_id}.json"
    if not dict_path.exists():
        return 0
    data = json.loads(dict_path.read_text(encoding="utf-8"))
    def _nk(a: str, b: str) -> tuple[str, str]:
        return (
            " ".join(str(a or "").strip().lower().split()).strip(".,;:!?"),
            " ".join(str(b or "").strip().lower().split()).strip(".,;:!?"),
        )

    existing: dict[tuple[str, str], dict] = {}
    phrases_cat = None
    for cat in data.get("categories", []):
        if cat.get("id") == "phrases":
            phrases_cat = cat
        for e in cat.get("entries", []):
            existing[_nk(e.get("english", ""), e.get("translation", ""))] = e
    if phrases_cat is None:
        phrases_cat = data["categories"][-1]

    added = 0
    enriched = 0
    for item in new_entries:
        en = str(item.get("english", "")).strip()
        tr = str(item.get("translation", "")).strip()
        if not en or not tr or len(en) > 220 or len(tr) > 220 or en.lower() == tr.lower():
            continue
        key = _nk(en, tr)
        if not key[0] or not key[1]:
            continue
        if key in existing:
            if item.get("audioFile") and not existing[key].get("audioFile"):
                existing[key]["audioFile"] = item["audioFile"]
                enriched += 1
            continue
        entry_obj = {"english": en, "translation": tr, "context": item["context"]}
        if item.get("audioFile"):
            entry_obj["audioFile"] = item["audioFile"]
        existing[key] = entry_obj
        phrases_cat["entries"].append(entry_obj)
        added += 1

    if added > 0 or enriched > 0:
        data["totalEntries"] = sum(len(c.get("entries", [])) for c in data.get("categories", []))
        dict_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return added


def ingest_thiomi_5k_parallel_text_and_audio(s3_client, uploaded_keys: dict, text_counts: dict, dataset_status: dict):
    if global_budget_exceeded():
        return
    thiomi_targets = [
        ("kikuyu", "kik_Latn", "Gĩkũyũ"),
        ("kamba", "kam_Latn", "Kikamba"),
        ("luo", "luo_Latn", "Dholuo"),
        ("meru", "mer_Latn", "Kĩmĩĩrũ"),
        ("somali", "som_Latn", "Af-Soomaali"),
    ]
    pending_targets = [
        t for t in thiomi_targets
        if FORCE_REINGEST or not RETRY_PENDING_ONLY or dataset_status.get(f"thiomi/thiomi-5k::{t[1]}::{t[0]}", {}).get("status") != "completed"
    ]
    if not pending_targets:
        log("  [skip-done] All 5 Thiomi-5K speech/text targets already ingested in prior run.")
        return
    log("[Thiomi-5K] Streaming English reference sentences from thiomi/thiomi-5k (eng_Latn)...")
    eng_by_id = {}
    t0 = time.monotonic()
    for split_name in ("train", "test"):
        if (time.monotonic() - t0) > PER_DATASET_TIMEOUT_SEC:
            break
        try:
            ds_en = load_hf_stream("thiomi/thiomi-5k", "eng_Latn", split=split_name)
            for idx, row in enumerate(ds_en):
                if idx >= MAX_TEXT_ROWS or (time.monotonic() - t0) > PER_DATASET_TIMEOUT_SEC:
                    break
                sid = str(row.get("sentenceId", "")).strip()
                txt = str(row.get("transcription", "")).strip()
                if sid and txt:
                    eng_by_id[sid] = txt
        except Exception as exc:
            log(f"  [warn] thiomi/thiomi-5k eng_Latn ({split_name}) skipped: {exc}")

    for lang_id, cfg, lang_label in pending_targets:
        if global_budget_exceeded():
            break
        log(f"[Thiomi-5K] Streaming thiomi/thiomi-5k ({cfg}) -> {lang_id} (max {MAX_CLIPS} audio clips)...")
        ds_start = time.monotonic()
        batch_entries = []
        futures = []
        citation = f"The Thiomi-5K Parallel Speech & Text Corpus ({cfg} {lang_label}, CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)"
        try:
            ds = load_hf_stream("thiomi/thiomi-5k", cfg, split="train")
            with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
                for idx, row in enumerate(ds):
                    if (time.monotonic() - ds_start) > PER_DATASET_TIMEOUT_SEC or global_budget_exceeded():
                        break
                    if idx >= MAX_TEXT_ROWS and len(futures) >= MAX_CLIPS:
                        break
                    sid = str(row.get("sentenceId", "")).strip()
                    tr_txt = str(row.get("transcription", "")).strip()
                    if not tr_txt:
                        continue
                    en_txt = eng_by_id.get(sid, "")
                    slug = to_audio_slug(tr_txt)

                    if not R2_UPLOAD_DISABLED and len(futures) < MAX_CLIPS and slug and slug not in uploaded_keys.get(lang_id, {}):
                        audio_obj = row.get("audio")
                        if isinstance(audio_obj, dict):
                            arr = audio_obj.get("array")
                            sr = audio_obj.get("sampling_rate")
                            if arr is not None and sr:
                                futures.append(pool.submit(transcode_and_upload_worker, s3_client, lang_id, slug, arr, sr))

                    if en_txt and idx < MAX_TEXT_ROWS:
                        batch_entries.append({"english": en_txt, "translation": tr_txt, "context": citation, "_slug": slug})

                audio_count = 0
                for fut in concurrent.futures.as_completed(futures):
                    res = fut.result()
                    if res:
                        s_key, a_url = res
                        uploaded_keys.setdefault(lang_id, {})[s_key] = a_url
                        audio_count += 1

            for item in batch_entries:
                s_key = item.pop("_slug", "")
                if s_key and s_key in uploaded_keys.get(lang_id, {}):
                    item["audioFile"] = uploaded_keys[lang_id][s_key]

            added = add_verified_text_entries_to_dict(lang_id, batch_entries)
            text_counts[lang_id] = text_counts.get(lang_id, 0) + added
            dataset_status[f"thiomi/thiomi-5k::{cfg}::{lang_id}"] = {
                "status": "completed",
                "clipsUploaded": audio_count,
                "textAdded": added,
                "gated": False,
                "lang_id": lang_id,
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            log(f"  -> Added {added} parallel text pairs and uploaded {audio_count} Opus clips for {lang_id} from thiomi/thiomi-5k ({cfg}).")
        except Exception as exc:
            log(f"  [warn] thiomi/thiomi-5k ({cfg}) skipped or partial: {exc}")


def ingest_hf_text_repositories(text_counts: dict, dataset_status: dict):
    text_jobs = [
        ("kikuyu", "google/smol", "gatitos__en_ki", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "gatitos__en_luo", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "gatitos__en_om", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("swahili", "google/smol", "smolsent__en_sw", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_sw, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("kikuyu", "google/smol", "smolsent__en_ki", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "smolsent__en_luo", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("somali", "google/smol", "smolsent__en_so", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_so, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "smolsent__en_om", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("swahili", "google/smol", "smoldoc__en_sw", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_sw, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("kikuyu", "google/smol", "smoldoc__en_ki", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "smoldoc__en_luo", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("somali", "google/smol", "smoldoc__en_so", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_so, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "smoldoc__en_om", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("teso", "Sunbird/salt", "text-all", "train", "eng_text", "teo_text", "Sunbird AI SALT Parallel Corpus (eng-teo, CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)"),
        ("swahili", "Sunbird/salt", "text-all", "train", "eng_text", "swa_text", "Sunbird AI SALT Parallel Corpus (eng-swa, CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)"),
    ]

    for lang_id, repo, cfg, split, en_col, tr_col, citation in text_jobs:
        if global_budget_exceeded():
            break
        job_key = f"text::{repo}::{cfg}::{lang_id}"
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
            log(f"  [skip-done] Already ingested {job_key} in prior run.")
            continue
        log(f"[HF Text Stream] {repo} ({cfg}) -> {lang_id} (max {MAX_TEXT_ROWS} rows)...")
        ds_start = time.monotonic()
        try:
            ds = load_hf_stream(repo, cfg, split=split)
            batch = []
            for idx, row in enumerate(ds):
                if idx >= MAX_TEXT_ROWS or (time.monotonic() - ds_start) > 45:
                    break
                en_val = row.get(en_col)
                tr_val = row.get(tr_col)
                if en_col == "srcs" and isinstance(en_val, list) and isinstance(tr_val, list):
                    for s_en, s_tr in zip(en_val, tr_val):
                        if s_en and s_tr:
                            batch.append({"english": str(s_en), "translation": str(s_tr), "context": citation})
                    continue
                if isinstance(tr_val, list):
                    tr_val = ", ".join(str(x) for x in tr_val if x)
                if en_val and tr_val:
                    batch.append({"english": str(en_val), "translation": str(tr_val), "context": citation})
            added = add_verified_text_entries_to_dict(lang_id, batch)
            text_counts[lang_id] = text_counts.get(lang_id, 0) + added
            dataset_status[job_key] = {"status": "completed", "textAdded": added, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  -> Added {added} new verified entries to {lang_id}.json from {repo}/{cfg}.")
        except Exception as exc:
            st = "pending_gated_approval" if is_gated_error(exc) else "failed"
            dataset_status[job_key] = {"status": st, "lang_id": lang_id, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  [warn] HF text stream {repo}/{cfg} skipped ({st}): {exc}")


def ingest_hf_streaming_audio(s3_client, uploaded_keys: dict, dataset_status: dict, text_counts: dict):
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return

    hf_jobs = [
        {"lang_id": "swahili", "repo": "google/WaxalNLP", "config": "swa_tts", "split": "train", "text_col": "text"},
        {"lang_id": "kikuyu", "repo": "google/WaxalNLP", "config": "kik_tts", "split": "train", "text_col": "text"},
        {"lang_id": "luo", "repo": "google/WaxalNLP", "config": "luo_tts", "split": "train", "text_col": "text"},
        {"lang_id": "luhya", "repo": "google/WaxalNLP", "config": "mas_asr", "split": "train", "text_col": "transcription"},
        {"lang_id": "borana", "repo": "google/WaxalNLP", "config": "orm_asr_v2", "split": "train", "text_col": "transcription"},
        {"lang_id": "luo", "repo": "CLEAR-Global/BibleTTS-Luo", "config": "read", "split": "train", "text_col": "text"},
        {"lang_id": "swahili", "repo": "Kencorpus/KenSpeech", "config": "default", "split": "train", "text_col": "transcript", "decode_audio": False},
        {"lang_id": "swahili", "repo": "Kencorpus/KenCorpus_audio", "config": "default", "split": "train", "text_col": "title", "decode_audio": False, "row_filter": ("language", "swahili")},
        {"lang_id": "luo", "repo": "Kencorpus/KenCorpus_audio", "config": "default", "split": "train", "text_col": "title", "decode_audio": False, "row_filter": ("language", "dholuo")},
        {"lang_id": "luhya", "repo": "Kencorpus/KenCorpus_audio", "config": "default", "split": "train", "text_col": "title", "decode_audio": False, "row_filter": ("language", "luhya")},
        {"lang_id": "swahili", "repo": "google/fleurs", "config": "sw_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "luo", "repo": "google/fleurs", "config": "luo_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "kamba", "repo": "google/fleurs", "config": "kam_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "somali", "repo": "google/fleurs", "config": "so_so", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "borana", "repo": "google/fleurs", "config": "om_et", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "teso", "repo": "Sunbird/salt", "config": "studio-teo", "split": "train", "text_col": "text", "gated": True},
        {"lang_id": "teso", "repo": "Sunbird/salt", "config": "multispeaker-teo", "split": "train", "text_col": "text", "gated": True},
        {"lang_id": "swahili", "repo": "Sunbird/salt", "config": "studio-swa", "split": "train", "text_col": "text", "gated": True},
        {"lang_id": "kikuyu", "repo": "MCAA1-MSU/anv_data_ke", "config": "kikuyu", "split": "train", "text_col": "transcription", "gated": True},
        {"lang_id": "luo", "repo": "MCAA1-MSU/anv_data_ke", "config": "luo", "split": "train", "text_col": "transcription", "gated": True},
        {"lang_id": "kalenjin", "repo": "MCAA1-MSU/anv_data_ke", "config": "kalenjin", "split": "train", "text_col": "transcription", "gated": True},
        {"lang_id": "maasai", "repo": "MCAA1-MSU/anv_data_ke", "config": "maasai", "split": "train", "text_col": "transcription", "gated": True},
        {"lang_id": "samburu", "repo": "MCAA1-MSU/anv_data_ke", "config": "maasai", "split": "train", "text_col": "transcription", "gated": True, "row_filter": ("dialect", "samburu")},
        {"lang_id": "somali", "repo": "MCAA1-MSU/anv_data_ke", "config": "somali", "split": "train", "text_col": "transcription", "gated": True},
        {"lang_id": "swahili", "repo": "stem-content-ai-project/swahili-speech", "config": "default", "split": "train", "text_col": "sentence", "decode_audio": False},
        {"lang_id": "somali", "repo": "skydheere/soomali-asr-dataset", "config": "default", "split": "train", "text_col": "sentence", "decode_audio": False},
        {"lang_id": "kalenjin", "repo": "kln001/kalenjin-asr-data", "config": "default", "split": "train", "text_col": "text", "gated": True, "decode_audio": False},
        {"lang_id": "luhya", "repo": "Digital-Divide-Data/Luhya-ASR-Data-subset-642H", "config": "default", "split": "train", "text_col": "transcription", "gated": True, "decode_audio": False},
        {"lang_id": "kamba", "repo": "Digital-Divide-Data/Kamba-ASR-Data-Subset-484H", "config": "default", "split": "train", "text_col": "transcription", "gated": True, "decode_audio": False},
        {"lang_id": "kisii", "repo": "Digital-Divide-Data/Gusii-ASR-Data-Subset-470H", "config": "default", "split": "train", "text_col": "transcription", "gated": True, "decode_audio": False},
        {"lang_id": "english-ke", "repo": "edinburghcstr/edacc", "config": "default", "split": "validation", "text_col": "text", "row_filter": (("accent", "raw_accent", "l1"), "kenyan"), "decode_audio": False},
        {"lang_id": "english-ke", "repo": "edinburghcstr/edacc", "config": "default", "split": "test", "text_col": "text", "row_filter": (("accent", "raw_accent", "l1"), "kenyan"), "decode_audio": False},
    ]

    for job in hf_jobs:
        lang_id = job["lang_id"]
        repo = job["repo"]
        cfg = job["config"]
        job_key = f"{repo}::{cfg}::{lang_id}"
        if R2_UPLOAD_DISABLED or global_budget_exceeded():
            if dataset_status.get(job_key, {}).get("status") != "completed":
                dataset_status[job_key] = {"status": "skipped_budget", "gated": bool(job.get("gated")), "lang_id": lang_id}
            continue
        if repo.strip().lower() in BLOCKED_NON_COMMERCIAL_REPOS:
            log(f"  [BLOCKED-NC] Refusing non-commercial repo: {repo}")
            continue
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
            log(f"  [skip-done] Already ingested {job_key} in prior run.")
            continue
        if ONLY_UNGATED and job.get("gated"):
            log(f"  [skip-gated] Skipping gated repo {repo} (ONLY_UNGATED=true)")
            dataset_status[job_key] = {"status": "pending_gated_approval", "gated": True, "lang_id": lang_id}
            continue

        rev = job.get("revision")
        decode_audio = job.get("decode_audio", False)
        row_filter = job.get("row_filter")
        log(f"[HF Audio Stream] {repo} ({cfg}) -> {lang_id} (decode={decode_audio}, max {MAX_CLIPS} clips)...")
        ds_start = time.monotonic()
        try:
            try:
                ds = load_hf_stream(repo, cfg, split=job["split"], revision=rev, decode_audio=decode_audio)
            except Exception:
                if rev:
                    ds = load_hf_stream(repo, cfg, split=job["split"], revision=None, decode_audio=decode_audio)
                else:
                    raise

            futures = []
            with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
                for idx, row in enumerate(ds):
                    if len(futures) >= MAX_CLIPS or (time.monotonic() - ds_start) > PER_DATASET_TIMEOUT_SEC or global_budget_exceeded() or R2_UPLOAD_DISABLED:
                        break
                    if row_filter:
                        col, expected = row_filter
                        cols_to_check = col if isinstance(col, (tuple, list)) else (col,)
                        matched = any(expected.lower() in str(row.get(c) or "").strip().lower() for c in cols_to_check)
                        if not matched:
                            continue
                    transcript = (
                        row.get(job["text_col"])
                        or row.get("raw_transcription")
                        or row.get("transcription")
                        or row.get("sentence")
                        or row.get("text")
                        or row.get("transcript")
                        or ""
                    ).strip()
                    if not transcript:
                        if idx == 0:
                            log(f"  [skip] {repo}/{cfg} has no transcript column (columns: {list(row.keys())}).")
                            break
                        continue
                    audio_obj = row.get("audio") or row.get("audio_filepath")
                    if not isinstance(audio_obj, dict):
                        if idx == 0:
                            log(f"  [info] {repo}/{cfg} audio column is {type(audio_obj).__name__} (columns: {list(row.keys())}).")
                        continue
                    slug = to_audio_slug(transcript)
                    if not slug or slug in uploaded_keys.get(lang_id, {}):
                        continue
                    raw_bytes = audio_obj.get("bytes")
                    if raw_bytes:
                        ext = Path(str(audio_obj.get("path") or "clip.mp3")).suffix or ".mp3"
                        futures.append(pool.submit(transcode_raw_bytes_and_upload_worker, s3_client, lang_id, slug, raw_bytes, ext))
                    else:
                        arr = audio_obj.get("array")
                        sr = audio_obj.get("sampling_rate")
                        if arr is not None and sr:
                            futures.append(pool.submit(transcode_and_upload_worker, s3_client, lang_id, slug, arr, sr))

                count = 0
                for fut in concurrent.futures.as_completed(futures):
                    res = fut.result()
                    if res:
                        s_key, a_url = res
                        uploaded_keys.setdefault(lang_id, {})[s_key] = a_url
                        count += 1

            dataset_status[job_key] = {
                "status": "completed" if count > 0 else "completed_no_new_clips",
                "clipsUploaded": count,
                "gated": bool(job.get("gated")),
                "lang_id": lang_id,
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            log(f"  -> Uploaded {count} Opus 24kbps clips for {lang_id} from {repo}/{cfg} in {int(time.monotonic() - ds_start)}s.")
        except Exception as exc:
            st = "pending_gated_approval" if (job.get("gated") or is_gated_error(exc)) else "failed"
            dataset_status[job_key] = {
                "status": st,
                "gated": bool(job.get("gated") or is_gated_error(exc)),
                "lang_id": lang_id,
                "reason": str(exc)[:220],
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            log(f"  [{st}] Streaming {repo}/{cfg}: {exc}")


def ingest_common_voice_27_mdc(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest Mozilla Common Voice 27.0 (CC0-1.0, Sept 2026) from Mozilla Data Collective."""
    if not INCLUDE_MDC_COMMON_VOICE or R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    mdc_targets = [
        ("swahili", "sw", "cmu5sgles002zo1071nphgtby"),
        ("luo", "luo", "cmu5wfvfn00bso107clj45iop"),
        ("kalenjin", "kln", "cmu5webje00bgo1079qb3nubj"),
        ("taita", "dav", "cmu5w2bh700aso107ffpduqpp"),
        ("borana", "om", "cmu5vkzvd009po10727n12m9h"),
    ]
    for lang_id, iso, mdc_id in mdc_targets:
        job_key = f"mozilla-data-collective/cv-27.0::{iso}::{lang_id}"
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") in ("completed", "completed_no_new_clips"):
            continue

        if not MDC_API_KEY:
            dataset_status[job_key] = {
                "status": "pending_mdc_api_key",
                "gated": True,
                "lang_id": lang_id,
                "url": f"https://mozilladatacollective.com/datasets/{mdc_id}",
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            continue
        log(f"[Common Voice 27.0 MDC CC0] Fetching {iso} ({mdc_id}) -> {lang_id}...")
        try:
            count = 0
            with tempfile.TemporaryDirectory() as tmpdir:
                tar_path = os.path.join(tmpdir, f"cv27-{iso}.tar.gz")
                downloaded_via_sdk = False
                try:
                    from datacollective import download_dataset as mdc_download_dataset
                    os.environ["MDC_API_KEY"] = MDC_API_KEY
                    os.environ["MDC_DOWNLOAD_PATH"] = tmpdir
                    sdk_path = mdc_download_dataset(mdc_id)
                    if sdk_path and os.path.exists(str(sdk_path)):
                        tar_path = str(sdk_path)
                        downloaded_via_sdk = True
                except Exception as sdk_exc:
                    log(f"  [info] datacollective SDK fallback for {mdc_id}: {sdk_exc}")

                if not downloaded_via_sdk:
                    # Fallback: POST create-download to get presigned URL
                    dl_url = f"https://mozilladatacollective.com/api/datasets/{mdc_id}/download"
                    resp = HTTP_SESSION.post(dl_url, headers={"Authorization": f"Bearer {MDC_API_KEY}"}, timeout=60)
                    if not resp.ok:
                        st = "pending_rate_limited" if resp.status_code == 429 else "failed"
                        dataset_status[job_key] = {"status": st, "lang_id": lang_id, "reason": f"MDC HTTP {resp.status_code} (ensure terms accepted / daily 7-download quota on mozilladatacollective.com)", "updatedAt": datetime.now(timezone.utc).isoformat()}
                        if resp.status_code == 429:
                            log("  [rate-limit] MDC daily quota reached; pausing remaining MDC downloads until next UTC day.")
                            break
                        continue
                    presigned = (resp.json() or {}).get("downloadUrl") or (resp.json() or {}).get("url")
                    if not presigned:
                        dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": "No presigned downloadUrl returned by MDC API", "updatedAt": datetime.now(timezone.utc).isoformat()}
                        continue
                    with HTTP_SESSION.get(presigned, stream=True, timeout=120) as file_resp:
                        file_resp.raise_for_status()
                        with open(tar_path, "wb") as f:
                            for chunk in file_resp.iter_content(chunk_size=1024 * 1024):
                                f.write(chunk)
                with tarfile.open(tar_path, "r:gz") as tf:
                    tsv_members = [m for m in tf.getmembers() if m.name.endswith("validated.tsv")]
                    if tsv_members:
                        tsv_lines = tf.extractfile(tsv_members[0]).read().decode("utf-8", errors="ignore").splitlines()
                        header = tsv_lines[0].split("\t") if tsv_lines else []
                        p_idx = header.index("path") if "path" in header else 1
                        s_idx = header.index("sentence") if "sentence" in header else 2
                        clip_map = {}
                        for line in tsv_lines[1:]:
                            parts = line.split("\t")
                            if len(parts) > max(p_idx, s_idx):
                                clip_map[parts[p_idx].strip()] = parts[s_idx].strip()
                            if len(clip_map) >= MAX_CLIPS * 2:
                                break
                        for m in tf.getmembers():
                            if count >= MAX_CLIPS or global_budget_exceeded():
                                break
                            base = os.path.basename(m.name)
                            if base in clip_map:
                                slug = to_audio_slug(clip_map[base])
                                if not slug or slug in uploaded_keys.get(lang_id, {}):
                                    continue
                                raw_b = tf.extractfile(m).read()
                                res = transcode_raw_bytes_and_upload_worker(s3_client, lang_id, slug, raw_b, Path(base).suffix or ".mp3")
                                if res:
                                    uploaded_keys.setdefault(lang_id, {})[res[0]] = res[1]
                                    count += 1
            dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  -> Uploaded {count} Common Voice 27.0 clips for {lang_id}.")
        except Exception as exc:
            dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}


def ingest_lingua_libre_commons(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest single-word Swahili pronunciations from Wikimedia Commons Lingua Libre (CC-BY-SA-4.0)."""
    if not INCLUDE_LINGUA_LIBRE or R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    job_key = "wikimedia-commons/lingua-libre::swa::swahili"
    if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
        return
    log("[Lingua Libre CC-BY-SA-4.0] Querying Wikimedia Commons Category:Lingua_Libre_pronunciation-swa...")
    try:
        api_url = "https://commons.wikimedia.org/w/api.php"
        params = {
            "action": "query", "list": "categorymembers",
            "cmtitle": "Category:Lingua_Libre_pronunciation-swa",
            "cmtype": "file", "cmlimit": min(MAX_CLIPS, 250), "format": "json",
        }
        resp = HTTP_SESSION.get(api_url, params=params, timeout=20)
        if not resp.ok or "json" not in (resp.headers.get("content-type") or "").lower():
            return
        members = resp.json().get("query", {}).get("categorymembers", [])
        count = 0
        for item in members:
            if count >= MAX_CLIPS or global_budget_exceeded():
                break
            title = item.get("title", "")
            m = re.search(r"LL-Q\d+[\s_]\(swa\)-[^-]+-(.+)\.(wav|ogg|flac|mp3)$", title, re.IGNORECASE)
            if not m:
                continue
            word = m.group(1).replace("_", " ").strip()
            ext = f".{m.group(2).lower()}"
            slug = to_audio_slug(word)
            if not slug or slug in uploaded_keys.get("swahili", {}):
                continue
            time.sleep(0.15)
            info_resp = HTTP_SESSION.get(api_url, params={"action": "query", "titles": title, "prop": "imageinfo", "iiprop": "url", "format": "json"}, timeout=15)
            if info_resp.status_code in (429, 503):
                log(f"  [rate-limit] Wikimedia Commons HTTP {info_resp.status_code}; stopping Lingua Libre batch cleanly.")
                break
            if not info_resp.ok or "json" not in (info_resp.headers.get("content-type") or "").lower():
                continue
            pages = info_resp.json().get("query", {}).get("pages", {})
            file_url = next((p["imageinfo"][0]["url"] for p in pages.values() if p.get("imageinfo")), None)
            if not file_url:
                continue
            audio_resp = HTTP_SESSION.get(file_url, timeout=20)
            if audio_resp.ok:
                res = transcode_raw_bytes_and_upload_worker(s3_client, "swahili", slug, audio_resp.content, ext)
                if res:
                    uploaded_keys.setdefault("swahili", {})[res[0]] = res[1]
                    count += 1
        dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": "swahili", "updatedAt": datetime.now(timezone.utc).isoformat()}
        log(f"  -> Uploaded {count} Lingua Libre Swahili pronunciations.")
    except Exception as exc:
        dataset_status[job_key] = {"status": "failed", "lang_id": "swahili", "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}


def _ingest_tar_or_zip_audio(s3_client, uploaded_keys: dict, lang_id: str, archive_path: str) -> int:
    """Extract transcript + audio clips from tar/zip archives and upload up to MAX_CLIPS to R2."""
    count = 0
    transcripts: dict[str, str] = {}
    audio_exts = {".wav", ".mp3", ".flac", ".ogg", ".m4a"}

    if archive_path.endswith(".zip"):
        with zipfile.ZipFile(archive_path, "r") as zf:
            for name in zf.namelist():
                if name.lower().endswith((".txt", ".tsv", ".csv")) and "license" not in name.lower():
                    raw = zf.read(name).decode("utf-8", errors="ignore")
                    for line in raw.splitlines():
                        parts = re.split(r"[\t|,]", line, maxsplit=2)
                        if len(parts) >= 2:
                            transcripts[Path(parts[0].strip()).stem] = parts[-1].strip()
            for name in zf.namelist():
                if count >= MAX_CLIPS or global_budget_exceeded():
                    break
                ext = Path(name).suffix.lower()
                if ext not in audio_exts:
                    continue
                stem = Path(name).stem
                text = transcripts.get(stem) or stem.replace("_", " ")
                slug = to_audio_slug(text)
                if not slug or slug in uploaded_keys.get(lang_id, {}):
                    continue
                res = transcode_raw_bytes_and_upload_worker(s3_client, lang_id, slug, zf.read(name), ext)
                if res:
                    uploaded_keys.setdefault(lang_id, {})[res[0]] = res[1]
                    count += 1
    else:
        with tarfile.open(archive_path, "r:*") as tf:
            members = tf.getmembers()
            for m in members:
                if m.isfile() and (Path(m.name).name.lower() == "text" or (m.name.lower().endswith((".txt", ".tsv", ".csv")) and ("text" in m.name.lower() or "metadata" in m.name.lower() or "transcript" in m.name.lower()))):
                    raw = tf.extractfile(m).read().decode("utf-8", errors="ignore")
                    for line in raw.splitlines():
                        parts = line.strip().split(None, 1)
                        if len(parts) == 2:
                            transcripts[Path(parts[0]).stem] = parts[1].strip()
            for m in members:
                if count >= MAX_CLIPS or global_budget_exceeded():
                    break
                if not m.isfile():
                    continue
                ext = Path(m.name).suffix.lower()
                if ext not in audio_exts:
                    continue
                stem = Path(m.name).stem
                text = transcripts.get(stem)
                if not text:
                    continue
                slug = to_audio_slug(text)
                if not slug or slug in uploaded_keys.get(lang_id, {}):
                    continue
                res = transcode_raw_bytes_and_upload_worker(s3_client, lang_id, slug, tf.extractfile(m).read(), ext)
                if res:
                    uploaded_keys.setdefault(lang_id, {})[res[0]] = res[1]
                    count += 1
    return count


def ingest_direct_archive_audio(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Download, extract, transcode & upload OpenSLR SLR25, BibleTTS Kikuyu, Makerere & Rono Swahili TTS."""
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    direct_archives = [
        {
            "job_key": "openslr/slr25-alffa::sw::swahili",
            "lang_id": "swahili",
            "license": "MIT",
            "kind": "tar",
            "url": "https://www.openslr.org/resources/25/data_broadcastnews_sw.tar.bz2",
        },
        {
            "job_key": "mendeley/makerere-swahili-tts::sw::swahili",
            "lang_id": "swahili",
            "license": "CC-BY-4.0",
            "kind": "mendeley",
            "dataset_id": "nb8b25h9nj",
            "version": 3,
            "url": "https://data.mendeley.com/public-api/datasets/nb8b25h9nj/files?version=3",
        },
        {
            "job_key": "mendeley/rono-swahili-tts::sw::swahili",
            "lang_id": "swahili",
            "license": "CC-BY-4.0",
            "kind": "mendeley",
            "dataset_id": "rbn6nmygcn",
            "version": 1,
            "url": "https://data.mendeley.com/public-api/datasets/rbn6nmygcn/files?version=1",
        },
    ]
    for item in direct_archives:
        assert_repo_allowed(item["url"])
        job_key = item["job_key"]
        lang_id = item["lang_id"]
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
            continue
        log(f"[Direct Archive {item['license']}] Downloading & extracting {job_key}...")
        try:
            dl_url = item["url"]
            ext = ".tar.bz2" if dl_url.endswith(".bz2") else (".tgz" if dl_url.endswith(".tgz") else ".zip")
            if item["kind"] == "mendeley":
                meta = HTTP_SESSION.get(dl_url, timeout=20)
                if not meta.ok:
                    dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": f"Mendeley API HTTP {meta.status_code}", "updatedAt": datetime.now(timezone.utc).isoformat()}
                    continue
                files = meta.json() if isinstance(meta.json(), list) else meta.json().get("data", [])
                # Recurse into Mendeley subfolders (e.g. Kiswahili/wavs.zip) if no root archive found
                zip_file = next((f for f in files if str(f.get("filename", "")).lower().endswith((".zip", ".tar.gz", ".tgz"))), None)
                if not zip_file:
                    base_files_url = f"https://data.mendeley.com/public-api/datasets/{item['dataset_id']}/files"
                    for entry in files:
                        fid = entry.get("id")
                        fname = str(entry.get("filename") or entry.get("name") or "").lower()
                        if fid and (not entry.get("content_details")) and ("swahili" in fname or "kiswahili" in fname or "." not in fname):
                            sub_r = HTTP_SESSION.get(base_files_url, params={"version": item["version"], "folder_id": fid}, timeout=20)
                            if sub_r.ok:
                                sub_files = sub_r.json() if isinstance(sub_r.json(), list) else sub_r.json().get("data", [])
                                zip_file = next((sf for sf in sub_files if str(sf.get("filename", "")).lower().endswith((".zip", ".tar.gz", ".tgz"))), None)
                                if zip_file:
                                    break
                if not zip_file:
                    dataset_status[job_key] = {"status": "completed_no_new_clips", "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
                    continue
                dl_url = zip_file.get("content_details", {}).get("download_url") or zip_file.get("download_url")
                ext = Path(zip_file["filename"]).suffix.lower() or ".zip"

            with tempfile.TemporaryDirectory() as tmpdir:
                arch_path = os.path.join(tmpdir, f"archive{ext}")
                with HTTP_SESSION.get(dl_url, stream=True, timeout=60) as resp:
                    if not resp.ok:
                        dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": f"HTTP {resp.status_code}", "updatedAt": datetime.now(timezone.utc).isoformat()}
                        continue
                    downloaded = 0
                    with open(arch_path, "wb") as f:
                        for chunk in resp.iter_content(chunk_size=1024 * 1024):
                            f.write(chunk)
                            downloaded += len(chunk)
                            if downloaded > 2500 * 1024 * 1024:
                                break
                count = _ingest_tar_or_zip_audio(s3_client, uploaded_keys, lang_id, arch_path)
            dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  -> Uploaded {count} clips from direct archive {job_key}.")
        except Exception as exc:
            dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}




def ingest_mdc_aligned_speech(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest non-Common-Voice MDC speech corpora (CLEAR Global BibleTTS Luo CC-BY-SA-4.0)."""
    if not INCLUDE_MDC_COMMON_VOICE or R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    mdc_aligned_targets = [
        ("luo", "bibletts-luo-mdc", "cmvi269po002607mi7oaodk1z", "CC-BY-SA-4.0"),
    ]
    for lang_id, slug_id, mdc_id, lic in mdc_aligned_targets:
        job_key = f"mozilla-data-collective/{slug_id}::{mdc_id}::{lang_id}"
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
            continue
        if not MDC_API_KEY:
            dataset_status[job_key] = {
                "status": "pending_mdc_api_key",
                "gated": True,
                "lang_id": lang_id,
                "license": lic,
                "url": f"https://mozilladatacollective.com/datasets/{mdc_id}",
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            continue
        log(f"[MDC Aligned {lic}] Fetching {slug_id} ({mdc_id}) -> {lang_id}...")
        try:
            with tempfile.TemporaryDirectory() as tmpdir:
                arch_path = os.path.join(tmpdir, f"{slug_id}.tar.gz")
                downloaded_via_sdk = False
                try:
                    from datacollective import download_dataset as mdc_download_dataset
                    os.environ["MDC_API_KEY"] = MDC_API_KEY
                    os.environ["MDC_DOWNLOAD_PATH"] = tmpdir
                    sdk_path = mdc_download_dataset(mdc_id)
                    if sdk_path and os.path.exists(str(sdk_path)):
                        arch_path = str(sdk_path)
                        downloaded_via_sdk = True
                except Exception as sdk_exc:
                    log(f"  [info] datacollective SDK fallback for {mdc_id}: {sdk_exc}")
                if not downloaded_via_sdk:
                    dl_url = f"https://mozilladatacollective.com/api/datasets/{mdc_id}/download"
                    resp = HTTP_SESSION.post(dl_url, headers={"Authorization": f"Bearer {MDC_API_KEY}"}, timeout=60)
                    if not resp.ok:
                        dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": f"MDC HTTP {resp.status_code}", "updatedAt": datetime.now(timezone.utc).isoformat()}
                        continue
                    presigned = (resp.json() or {}).get("downloadUrl") or (resp.json() or {}).get("url")
                    if not presigned:
                        continue
                    with HTTP_SESSION.get(presigned, stream=True, timeout=180) as file_resp:
                        file_resp.raise_for_status()
                        with open(arch_path, "wb") as f:
                            for chunk in file_resp.iter_content(chunk_size=1024 * 1024):
                                f.write(chunk)
                count = _ingest_tar_or_zip_audio(s3_client, uploaded_keys, lang_id, arch_path)
            dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  -> Uploaded {count} clips for {lang_id} from MDC {mdc_id}.")
        except Exception as exc:
            dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}


def ingest_wikimedia_oromo_pronunciation(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest Oromo pronunciation OGG/WAV files from Wikimedia Commons (per-file CC-BY-SA / CC0 check)."""
    if not INCLUDE_LINGUA_LIBRE or R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    job_key = "wikimedia-commons/oromo-pronunciation::orm::borana"
    if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
        return
    log("[Wikimedia Commons Oromo] Querying Category:Oromo_pronunciation (strict CC-BY-SA / CC0 filter)...")
    try:
        api_url = "https://commons.wikimedia.org/w/api.php"
        resp = HTTP_SESSION.get(
            api_url,
            params={"action": "query", "list": "categorymembers", "cmtitle": "Category:Oromo_pronunciation", "cmtype": "file", "cmlimit": min(MAX_CLIPS, 250), "format": "json"},
            timeout=20,
        )
        if not resp.ok:
            return
        members = resp.json().get("query", {}).get("categorymembers", [])
        count = 0
        for item in members:
            if count >= MAX_CLIPS or global_budget_exceeded():
                break
            title = item.get("title", "")
            m = re.search(r"File:(?:Om-|LL-Q\d+_\(orm\)-[^-]+-)?(.+)\.(ogg|wav|flac|mp3)$", title, re.IGNORECASE)
            if not m:
                continue
            word = m.group(1).replace("_", " ").strip()
            ext = f".{m.group(2).lower()}"
            slug = to_audio_slug(word)
            if not slug or slug in uploaded_keys.get("borana", {}):
                continue
            time.sleep(0.15)
            info_resp = HTTP_SESSION.get(api_url, params={"action": "query", "titles": title, "prop": "imageinfo", "iiprop": "url|extmetadata", "format": "json"}, timeout=15)
            if info_resp.status_code in (429, 503):
                log(f"  [rate-limit] Wikimedia Commons HTTP {info_resp.status_code}; stopping Oromo batch cleanly.")
                break
            if not info_resp.ok or "json" not in (info_resp.headers.get("content-type") or "").lower():
                continue
            pages = info_resp.json().get("query", {}).get("pages", {})
            ii = next((p["imageinfo"][0] for p in pages.values() if p.get("imageinfo")), None)
            if not ii:
                continue
            lic_short = str(((ii.get("extmetadata") or {}).get("LicenseShortName") or {}).get("value") or "").lower()
            if not any(ok in lic_short for ok in ("cc by-sa", "cc-by-sa", "cc0", "public domain", "cc by 4", "cc-by-4")) or "nc" in lic_short or "nd" in lic_short:
                continue
            audio_resp = HTTP_SESSION.get(ii["url"], timeout=20)
            if audio_resp.ok:
                res = transcode_raw_bytes_and_upload_worker(s3_client, "borana", slug, audio_resp.content, ext)
                if res:
                    uploaded_keys.setdefault("borana", {})[res[0]] = res[1]
                    count += 1
        dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": "borana", "updatedAt": datetime.now(timezone.utc).isoformat()}
        log(f"  -> Uploaded {count} Wikimedia Commons Oromo pronunciations.")
    except Exception as exc:
        dataset_status[job_key] = {"status": "failed", "lang_id": "borana", "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}


def ingest_tatoeba_filtered_audio(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest Tatoeba sentence audio for som & swh, strictly filtered to CC-BY-2.0-FR / CC0-1.0 contributors."""
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    tatoeba_targets = [("swahili", "swh"), ("somali", "som")]
    pending = [t for t in tatoeba_targets if FORCE_REINGEST or not RETRY_PENDING_ONLY or dataset_status.get(f"tatoeba/audio::{t[1]}::{t[0]}", {}).get("status") != "completed"]
    if not pending:
        return
    log("[Tatoeba Audio CC-BY-2.0-FR/CC0] Fetching contributor-licensed audio index for swh & som...")
    allowed_lics = {"cc-by 2.0 fr", "cc-by-2.0-fr", "cc0 1.0", "cc0-1.0", "cc-by 2.0", "cc-by 4.0"}
    try:
        import bz2
        with tempfile.TemporaryDirectory() as tmpdir:
            idx_path = os.path.join(tmpdir, "sentences_with_audio.tar.bz2")
            with HTTP_SESSION.get("https://downloads.tatoeba.org/exports/sentences_with_audio.tar.bz2", stream=True, timeout=60) as r:
                r.raise_for_status()
                with open(idx_path, "wb") as f:
                    for chunk in r.iter_content(chunk_size=512 * 1024):
                        f.write(chunk)
            permissive_audio: dict[str, tuple[str, str]] = {}
            with tarfile.open(idx_path, "r:bz2") as tf:
                member = next((m for m in tf.getmembers() if m.name.endswith(".csv")), None)
                if member:
                    for raw_line in tf.extractfile(member).read().decode("utf-8", errors="ignore").splitlines():
                        parts = raw_line.split("\t")
                        if len(parts) < 4:
                            continue
                        sid, audio_id, _user, lic = parts[0].strip(), parts[1].strip(), parts[2].strip(), parts[3].strip().lower()
                        if lic in allowed_lics and "nc" not in lic and "nd" not in lic:
                            permissive_audio[sid] = (audio_id, lic)
            for lang_id, iso3 in pending:
                job_key = f"tatoeba/audio::{iso3}::{lang_id}"
                count = 0
                s_resp = HTTP_SESSION.get(f"https://downloads.tatoeba.org/exports/per_language/{iso3}/{iso3}_sentences.tsv.bz2", timeout=60)
                if not s_resp.ok:
                    dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": f"HTTP {s_resp.status_code}", "updatedAt": datetime.now(timezone.utc).isoformat()}
                    continue
                for line in bz2.decompress(s_resp.content).decode("utf-8", errors="ignore").splitlines():
                    if count >= MAX_CLIPS or global_budget_exceeded():
                        break
                    parts = line.split("\t")
                    if len(parts) < 3 or parts[0] not in permissive_audio:
                        continue
                    audio_id, _lic = permissive_audio[parts[0]]
                    slug = to_audio_slug(parts[2])
                    if not slug or slug in uploaded_keys.get(lang_id, {}):
                        continue
                    mp3_resp = HTTP_SESSION.get(f"https://tatoeba.org/audio/download/{audio_id}", timeout=20)
                    if mp3_resp.ok and mp3_resp.content:
                        res = transcode_raw_bytes_and_upload_worker(s3_client, lang_id, slug, mp3_resp.content, ".mp3")
                        if res:
                            uploaded_keys.setdefault(lang_id, {})[res[0]] = res[1]
                            count += 1
                dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
                log(f"  -> Uploaded {count} permissive Tatoeba audio clips for {lang_id} ({iso3}).")
    except Exception as exc:
        log(f"  [warn] Tatoeba filtered audio skipped: {exc}")


def ingest_archive_org_audio(s3_client, uploaded_keys: dict, dataset_status: dict):
    """Ingest verified commercial-safe non-book Internet Archive audio items (PDM 1.0 & CC-BY-SA-3.0)."""
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    ia_items = [
        {"job_key": "archive.org/handbook_kavirondo3_1203::luo::luo", "identifier": "handbook_kavirondo3_1203", "lang_id": "luo", "license": "Public Domain Mark 1.0"},
        {"job_key": "archive.org/aporee_22438_26032::en-KE::english-ke", "identifier": "aporee_22438_26032", "lang_id": "english-ke", "license": "CC-BY-SA-3.0"},
    ]
    for item in ia_items:
        job_key, lang_id, ident = item["job_key"], item["lang_id"], item["identifier"]
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and dataset_status.get(job_key, {}).get("status") == "completed":
            continue
        assert_repo_allowed(f"https://archive.org/details/{ident}")
        log(f"[Archive.org {item['license']}] Fetching metadata for {ident} -> {lang_id}...")
        try:
            meta_resp = HTTP_SESSION.get(f"https://archive.org/metadata/{ident}", timeout=20)
            if not meta_resp.ok:
                continue
            all_files = meta_resp.json().get("files", [])
            if ident == "handbook_kavirondo3_1203":
                audio_files = sorted(
                    [f for f in all_files if str(f.get("name", "")).lower().endswith("_64kb.mp3")],
                    key=lambda x: str(x.get("name", "")),
                )
            else:
                audio_files = [
                    f for f in all_files
                    if str(f.get("name", "")).lower().endswith((".mp3", ".ogg", ".wav", ".flac")) and "_64kb" not in str(f.get("name", "")).lower()
                ]
            count = 0
            chapter_r2_map: dict[str, str] = {}
            for af in audio_files[:MAX_CLIPS]:
                if global_budget_exceeded():
                    break
                fname = af["name"]
                clean_stem = re.sub(r"_64kb$", "", Path(fname).stem, flags=re.IGNORECASE)
                slug = to_audio_slug(f"{ident}-{clean_stem}")
                if not slug:
                    continue
                if slug in uploaded_keys.get(lang_id, {}):
                    chapter_r2_map[slug] = uploaded_keys[lang_id][slug]
                    continue
                a_resp = HTTP_SESSION.get(f"https://archive.org/download/{ident}/{fname}", timeout=120)
                if a_resp.ok and a_resp.content:
                    res = transcode_raw_bytes_and_upload_worker(
                        s3_client, lang_id, slug, a_resp.content, Path(fname).suffix.lower() or ".mp3", timeout_sec=120
                    )
                    if res:
                        uploaded_keys.setdefault(lang_id, {})[res[0]] = res[1]
                        chapter_r2_map[res[0]] = res[1]
                        count += 1
            if ident == "handbook_kavirondo3_1203" and chapter_r2_map:
                ch_path = PUBLIC_DIR / "dholuo-audio-chapters.json"
                if ch_path.exists():
                    try:
                        ch_data = json.loads(ch_path.read_text(encoding="utf-8"))
                        updated_ch = False
                        for ch in ch_data.get("chapters", []):
                            r2_url = chapter_r2_map.get(ch.get("slug", ""))
                            if r2_url and ch.get("audioUrl") != r2_url:
                                ch["audioUrl"] = r2_url
                                updated_ch = True
                        if updated_ch:
                            ch_data["updatedAt"] = datetime.now(timezone.utc).isoformat()
                            ch_path.write_text(json.dumps(ch_data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
                            log(f"  -> Updated {ch_path.name} with {len(chapter_r2_map)} Cloudflare R2 chapter URLs.")
                    except Exception as ch_exc:
                        log(f"  [warn] Could not update dholuo-audio-chapters.json: {ch_exc}")
            dataset_status[job_key] = {"status": "completed" if count > 0 else "completed_no_new_clips", "clipsUploaded": count, "lang_id": lang_id, "updatedAt": datetime.now(timezone.utc).isoformat()}
            log(f"  -> Uploaded {count} Archive.org audio clips from {ident} for {lang_id}.")
        except Exception as exc:
            dataset_status[job_key] = {"status": "failed", "lang_id": lang_id, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}


def ingest_ksl_pose_metadata(dataset_status: dict):
    """Build Kenyan Sign Language (xki) visual/pose metadata index (`public/ksl-index.json`) separate from audio."""
    if not INCLUDE_KSL_METADATA or global_budget_exceeded():
        return
    log("[KSL xki] Syncing Kenyan Sign Language (xki) metadata index (Open Sign Bibles + Maseno Zenodo 14338329 Open Access)...")
    ksl_payload = {
        "languageId": "ksl",
        "iso639_3": "xki",
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "sources": [
            {
                "id": "maseno-ksl-pose-14338329",
                "title": "Maseno KSL Pose Dataset (Open Access CC-BY-4.0, MediaPipe Pose Data.zip 1.5 GB)",
                "license": "CC-BY-4.0",
                "url": "https://zenodo.org/records/14338329",
                "access": "public_zenodo",
                "status": "ready",
            },
            {
                "id": "open-sign-bibles-xki",
                "title": "Open Sign Bibles — Kenyan Sign Language (xki)",
                "license": "CC-BY-SA-4.0",
                "url": "https://huggingface.co/datasets/bible-nlp/sign-bibles",
                "access": "public_hf",
                "register": "religious_liturgical",
            },
            {
                "id": "ishara-ksl-hand-landmarks",
                "title": "Ishara KSL Open Hand-Landmark Collection (21-point hand landmarks, no face PII)",
                "license": "CC-BY-4.0",
                "url": "https://www.ishara.io/collect",
                "access": "public_portal",
                "status": "active_collection",
            },
        ],
        "zenodoFiles": [],
        "glosses": [],
    }
    try:
        headers = {"Authorization": f"Bearer {ZENODO_TOKEN}"} if ZENODO_TOKEN else {}
        z_resp = HTTP_SESSION.get("https://zenodo.org/api/records/14338329", headers=headers, timeout=45)
        if z_resp.ok:
            z_files = z_resp.json().get("files", [])
            ksl_payload["zenodoFiles"] = [
                {
                    "key": f.get("key"),
                    "size": f.get("size"),
                    "checksum": f.get("checksum"),
                    "downloadUrl": (f.get("links") or {}).get("self", ""),
                }
                for f in z_files[:200]
            ]
    except Exception as exc:
        log(f"  [warn] Maseno Zenodo 14338329 API notice: {exc}")

    # Note: Open Sign Bibles (bible-nlp/sign-bibles) xki video & passage-context streaming is
    # handled directly in scripts/ingest-ksl-pose-r2.py so we do not download gigabytes of .mp4
    # bytes twice during the metadata sync step.
    if KSL_INDEX_PATH.exists():
        try:
            prev_ksl = json.loads(KSL_INDEX_PATH.read_text(encoding="utf-8"))
            for keep_key in ("videos", "videoCount", "storybooks", "signs", "extractedSignCount", "ingestionState"):
                if keep_key in prev_ksl and prev_ksl[keep_key]:
                    ksl_payload[keep_key] = prev_ksl[keep_key]
            existing_src_ids = {s.get("id") for s in ksl_payload.get("sources", [])}
            for s in prev_ksl.get("sources", []):
                if s.get("id") and s["id"] not in existing_src_ids:
                    ksl_payload["sources"].append(s)
        except Exception:
            pass
    KSL_INDEX_PATH.write_text(json.dumps(ksl_payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    dataset_status["ksl/xki::metadata::ksl"] = {
        "status": "completed",
        "glossCount": len(ksl_payload["glosses"]),
        "zenodoFileCount": len(ksl_payload["zenodoFiles"]),
        "lang_id": "ksl",
        "updatedAt": datetime.now(timezone.utc).isoformat(),
    }


def attach_audio_urls_and_sync_catalog(uploaded_keys: dict) -> int:
    total_attached = 0
    exact_stats = {}
    grand_total = 0

    for dict_file in sorted(DICT_DIR.glob("*.json")):
        if dict_file.name == "kenya-languages.json":
            continue
        data = json.loads(dict_file.read_text(encoding="utf-8"))
        lang_id = data.get("languageId")
        lang_map = uploaded_keys.get(lang_id, {})
        modified = False
        cats_map = {}
        tot = 0
        for cat in data.get("categories", []):
            entries = cat.get("entries", [])
            cats_map[cat["id"]] = len(entries)
            tot += len(entries)
            for entry in entries:
                tr_raw = entry.get("translation", "")
                matched_url = None
                slug = to_audio_slug(tr_raw)
                if slug and slug in lang_map:
                    matched_url = lang_map[slug]
                else:
                    for part in re.split(r"[,;/|]", str(tr_raw or "")):
                        ps = to_audio_slug(part)
                        if ps and ps in lang_map:
                            matched_url = lang_map[ps]
                            break
                if matched_url:
                    if entry.get("audioFile") != matched_url:
                        entry["audioFile"] = matched_url
                        modified = True
                    total_attached += 1
        audio_cnt = sum(1 for c in data.get("categories", []) for e in c.get("entries", []) if (e.get("audioFile") or "").strip())
        lang_has_audio = audio_cnt > 0 or len(lang_map) > 0
        if data.get("totalEntries") != tot:
            data["totalEntries"] = tot
            modified = True
        if data.get("hasAudio") != lang_has_audio:
            data["hasAudio"] = lang_has_audio
            modified = True
        if modified:
            dict_file.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        exact_stats[lang_id] = {"total": tot, "cats": cats_map, "audio": audio_cnt, "hasAudio": lang_has_audio}
        grand_total += tot

    cat_path = DICT_DIR / "catalog.ts"
    if cat_path.exists():
        cat_txt = cat_path.read_text(encoding="utf-8")
        today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        cat_txt = re.sub(
            r"export const TOTAL_DICTIONARY_ENTRIES:\s*number\s*=\s*\d+;",
            f"export const TOTAL_DICTIONARY_ENTRIES: number = {grand_total};",
            cat_txt,
        )
        # Update each language block directly inside ALL_DICT_METAS
        for lid, st in exact_stats.items():
            if not lid:
                continue
            has_aud = "true" if st.get("hasAudio") else "false"
            # Update totalEntries & hasAudio & lastUpdated inside the matching languageId block
            def _update_lang_block(m: re.Match) -> str:
                blk = m.group(0)
                blk = re.sub(r'("totalEntries":\s*)\d+', rf"\g<1>{st['total']}", blk, count=1)
                blk = re.sub(r'("hasAudio":\s*)(?:true|false)', rf"\g<1>{has_aud}", blk, count=1)
                blk = re.sub(r'("lastUpdated":\s*")[^"]+(")', rf'\g<1>{today_str}\g<2>', blk, count=1)
                for cid, cnt in st.get("cats", {}).items():
                    blk = re.sub(
                        rf'("id":\s*"{re.escape(cid)}"[\s\S]{{0,180}}?"count":\s*)\d+',
                        rf"\g<1>{cnt}",
                        blk,
                        count=1,
                    )
                return blk
            cat_txt = re.sub(
                rf'\{{\s*"languageId":\s*"{re.escape(lid)}"[\s\S]*?"categories":\s*\[[\s\S]*?\]\s*(?:,[\s\S]*?)?\n  \}}',
                _update_lang_block,
                cat_txt,
                count=1,
            )
        cat_path.write_text(cat_txt, encoding="utf-8")

    return total_attached


def main():
    dry_run = "--dry-run" in sys.argv
    sync_only = "--sync-only" in sys.argv
    log("=== KenyaHub CI Audio, KSL & Text Dataset Ingestor (Cloudflare R2 + HF_TOKEN + MDC + Zenodo) ===")
    log(
        f"Dry Run: {dry_run} | R2 Bucket: {R2_BUCKET} | Blocked Watchlist Entries: {len(BLOCKED_NON_COMMERCIAL_REPOS)} "
        f"| HF_TOKEN: {'Set' if HF_TOKEN else 'Unset'} | MDC_API_KEY: {'Set' if MDC_API_KEY else 'Unset'} | ZENODO_TOKEN: {'Set' if ZENODO_TOKEN else 'Unset'}"
    )

    if sync_only:
        uploaded_keys = load_existing_audio_index()
        attached = attach_audio_urls_and_sync_catalog(uploaded_keys)
        subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)
        log(f"Sync-only completed: {attached} dictionary entries linked to verified audio and catalog.ts synced.")
        return

    if dry_run:
        subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)
        log("Dry-run verification passed.")
        return

    s3_client = get_s3_client()
    uploaded_keys = load_existing_audio_index()
    dataset_status = load_existing_dataset_status()
    text_counts = {}

    ingest_hf_text_repositories(text_counts, dataset_status)
    ingest_thiomi_5k_parallel_text_and_audio(s3_client, uploaded_keys, text_counts, dataset_status)
    ingest_hf_streaming_audio(s3_client, uploaded_keys, dataset_status, text_counts)
    ingest_common_voice_27_mdc(s3_client, uploaded_keys, dataset_status)
    ingest_lingua_libre_commons(s3_client, uploaded_keys, dataset_status)
    ingest_direct_archive_audio(s3_client, uploaded_keys, dataset_status)
    ingest_mdc_aligned_speech(s3_client, uploaded_keys, dataset_status)
    ingest_wikimedia_oromo_pronunciation(s3_client, uploaded_keys, dataset_status)
    ingest_tatoeba_filtered_audio(s3_client, uploaded_keys, dataset_status)
    ingest_archive_org_audio(s3_client, uploaded_keys, dataset_status)
    ingest_ksl_pose_metadata(dataset_status)

    AUDIO_INDEX_PATH.write_text(json.dumps(uploaded_keys, ensure_ascii=False, indent=2), encoding="utf-8")
    attached = attach_audio_urls_and_sync_catalog(uploaded_keys)

    subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)

    pending_gated = sorted([k for k, v in dataset_status.items() if str(v.get("status", "")).startswith("pending_")])
    lock_payload = {
        "ingestedAt": datetime.now(timezone.utc).isoformat(),
        "scriptsHash": os.environ.get("INGESTION_SCRIPTS_HASH", "").strip(),
        "bucket": R2_BUCKET,
        "cdnBase": CDN_BASE,
        "elapsedSeconds": int(time.monotonic() - START_MONOTONIC),
        "textEntriesAddedByLanguage": text_counts,
        "uploadedAudioLanguageCounts": {k: len(v) for k, v in uploaded_keys.items()},
        "dictionaryEntriesLinked": attached,
        "pendingGatedDatasets": pending_gated,
        "datasetStatus": dataset_status,
    }
    LOCK_PATH.write_text(json.dumps(lock_payload, indent=2), encoding="utf-8")
    log(f"Wrote lockfile to {LOCK_PATH} (total elapsed: {int(time.monotonic() - START_MONOTONIC)}s)")


if __name__ == "__main__":
    main()
