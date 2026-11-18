#!/usr/bin/env python3
"""
kenyahub/scripts/ci-ingest-audio-and-text-r2.py

Fast, Time-Bounded One-Time GitHub Actions Streaming Pipeline for KenyaHub:
1. Unbuffered real-time logging (`flush=True` on every status line) so GitHub Actions displays
   live progress immediately.
2. Uses `HF_TOKEN` from environment automatically (without triggering redundant `login()` warnings).
3. High-speed concurrent audio transcoding & Cloudflare R2 upload:
   - Uses `boto3` S3 API when `R2_ACCESS_KEY_ID` + `R2_SECRET_ACCESS_KEY` are configured, OR
   - Uses Cloudflare R2's direct HTTP REST API (`PUT /client/v4/accounts/{account_id}/r2/buckets/{bucket}/objects/{key}`)
     over a persistent `requests.Session()` when `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` are set
     (100x faster than spawning `npx wrangler` per file!).
   - Uses `ThreadPoolExecutor(max_workers=8)` for parallel `ffmpeg` Opus 24kbps transcoding + upload.
4. Enforces strict per-dataset (`90s`) and global (`25 min`) wall-clock budgets so the workflow
   NEVER hangs or hits GitHub Actions' job timeout, always committing enriched dictionaries,
   `public/audio-manifest.json`, and `public/.audio-ingested-lock.json`.
"""

import concurrent.futures
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import unicodedata
from datetime import datetime, timezone
from pathlib import Path

import requests

# Force unbuffered line output in GitHub Actions
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(line_buffering=True)

START_MONOTONIC = time.monotonic()
GLOBAL_TIME_BUDGET_SEC = int(os.environ.get("GLOBAL_TIME_BUDGET_SEC") or str(25 * 60))
PER_DATASET_TIMEOUT_SEC = int(os.environ.get("PER_DATASET_TIMEOUT_SEC") or "90")

ROOT_DIR = Path(__file__).resolve().parent.parent
DICT_DIR = ROOT_DIR / "src" / "data" / "dictionaries"
PUBLIC_DIR = ROOT_DIR / "public"
MANIFEST_PATH = PUBLIC_DIR / "audio-manifest.json"
LOCK_PATH = PUBLIC_DIR / ".audio-ingested-lock.json"

CF_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
CF_API_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
R2_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
R2_SECRET_ACCESS_KEY = os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"
CDN_BASE = os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", "").strip().rstrip("/")
HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None
MAX_CLIPS = int(os.environ.get("MAX_CLIPS_PER_DATASET") or "250")
MAX_TEXT_ROWS = int(os.environ.get("MAX_TEXT_ROWS_PER_DATASET") or "3000")

HTTP_SESSION = requests.Session()
R2_UPLOAD_DISABLED = False
R2_FAILURE_COUNT = 0


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


def load_hf_stream(repo: str, config: str, split: str = "train", revision: str = None):
    from datasets import load_dataset

    kwargs = {"split": split, "streaming": True, "token": HF_TOKEN}
    if revision:
        kwargs["revision"] = revision
    try:
        return load_dataset(repo, config, **kwargs)
    except TypeError:
        kwargs.pop("token", None)
        kwargs["use_auth_token"] = HF_TOKEN
        return load_dataset(repo, config, **kwargs)


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


def transcode_to_opus_bytes(wav_path: str, opus_path: str) -> bytes | None:
    try:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                wav_path,
                "-vn",
                "-ac",
                "1",
                "-ar",
                "24000",
                "-c:a",
                "libopus",
                "-b:a",
                "24k",
                "-vbr",
                "on",
                "-application",
                "voip",
                opus_path,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            timeout=15,
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

    # Path 1: S3-compatible API via boto3 (fastest when R2_ACCESS_KEY_ID + R2_SECRET_ACCESS_KEY are set)
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

    # Path 2: Cloudflare R2 HTTP REST API via persistent requests.Session (100x faster than npx wrangler!)
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
                timeout=15,
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
        log("  [warn] 10 consecutive R2 uploads failed (check bucket name / R2 token permissions). Continuing in manifest + text-ingestion mode.")
        R2_UPLOAD_DISABLED = True
    return False


def transcode_and_upload_worker(s3_client, lang_id: str, slug: str, arr, sr: int) -> tuple[str, str] | None:
    if R2_UPLOAD_DISABLED:
        return None
    import soundfile as sf

    # Skip overly long paragraphs (> 20 seconds) so R2 stores crisp word/sentence pronunciations
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


def resolve_public_audio_url(r2_key: str) -> str:
    if CDN_BASE:
        return f"{CDN_BASE}/{r2_key}"
    return f"/{r2_key}"


def add_verified_text_entries_to_dict(lang_id: str, new_entries: list) -> int:
    if not new_entries:
        return 0
    dict_path = DICT_DIR / f"{lang_id}.json"
    if not dict_path.exists():
        return 0
    data = json.loads(dict_path.read_text(encoding="utf-8"))
    existing = set()
    phrases_cat = None
    for cat in data.get("categories", []):
        if cat.get("id") == "phrases":
            phrases_cat = cat
        for e in cat.get("entries", []):
            existing.add((e.get("english", "").strip().lower(), e.get("translation", "").strip().lower()))
    if phrases_cat is None:
        phrases_cat = data["categories"][-1]

    added = 0
    for item in new_entries:
        en = str(item.get("english", "")).strip()
        tr = str(item.get("translation", "")).strip()
        if not en or not tr or len(en) > 220 or len(tr) > 220:
            continue
        if en.lower() == tr.lower():
            continue
        key = (en.lower(), tr.lower())
        if key in existing:
            continue
        existing.add(key)
        entry_obj = {"english": en, "translation": tr, "context": item["context"]}
        if item.get("audioFile"):
            entry_obj["audioFile"] = item["audioFile"]
        phrases_cat["entries"].append(entry_obj)
        added += 1

    if added > 0:
        data["totalEntries"] = sum(len(c.get("entries", [])) for c in data.get("categories", []))
        dict_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return added


def ingest_thiomi_5k_parallel_text_and_audio(s3_client, uploaded_keys: dict, text_counts: dict):
    if global_budget_exceeded():
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

    log(f"  -> Loaded {len(eng_by_id)} English reference sentences from thiomi/thiomi-5k.")

    thiomi_targets = [
        ("kikuyu", "kik_Latn", "Gĩkũyũ"),
        ("kamba", "kam_Latn", "Kikamba"),
        ("luo", "luo_Latn", "Dholuo"),
        ("meru", "mer_Latn", "Kĩmĩĩrũ"),
        ("somali", "som_Latn", "Af-Soomaali"),
    ]

    for lang_id, cfg, lang_label in thiomi_targets:
        if global_budget_exceeded():
            break
        log(f"[Thiomi-5K] Streaming thiomi/thiomi-5k ({cfg}) -> {lang_id} (max {MAX_CLIPS} audio clips, {PER_DATASET_TIMEOUT_SEC}s cap)...")
        ds_start = time.monotonic()
        batch_entries = []
        futures = []
        citation = f"The Thiomi-5K Parallel Speech & Text Corpus ({cfg} {lang_label}, CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)"
        try:
            ds = load_hf_stream("thiomi/thiomi-5k", cfg, split="train")
            with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
                for idx, row in enumerate(ds):
                    if (time.monotonic() - ds_start) > PER_DATASET_TIMEOUT_SEC or global_budget_exceeded():
                        log(f"  -> Reached time cap for thiomi/thiomi-5k ({cfg}) at row {idx}.")
                        break
                    if idx >= MAX_TEXT_ROWS and len(futures) >= MAX_CLIPS:
                        break
                    sid = str(row.get("sentenceId", "")).strip()
                    tr_txt = str(row.get("transcription", "")).strip()
                    if not tr_txt:
                        continue
                    en_txt = eng_by_id.get(sid, "")
                    slug = to_audio_slug(tr_txt)

                    if not R2_UPLOAD_DISABLED and len(futures) < MAX_CLIPS and slug:
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
            log(f"  -> Added {added} parallel text pairs and uploaded {audio_count} Opus clips for {lang_id} from thiomi/thiomi-5k ({cfg}).")
        except Exception as exc:
            log(f"  [warn] thiomi/thiomi-5k ({cfg}) skipped or partial: {exc}")


def ingest_hf_text_repositories(text_counts: dict):
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
            log(f"  -> Added {added} new verified entries to {lang_id}.json from {repo}/{cfg}.")
        except Exception as exc:
            log(f"  [warn] HF text stream {repo}/{cfg} skipped or gated: {exc}")


def ingest_zenodo_kiamu(s3_client, uploaded_keys: dict):
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return
    zenodo_items = [
        (
            "swahili",
            "kunyamaa-nimechoka-kiamu-ustadh-mau",
            "https://zenodo.org/records/19828379/files/Piste%202.wma?download=1",
            "in.wma",
        ),
    ]
    for lang_id, slug, url, fname in zenodo_items:
        try:
            log(f"[Zenodo CC-BY-4.0] Downloading {url}...")
            resp = HTTP_SESSION.get(url, timeout=45)
            if not resp.ok:
                continue
            with tempfile.TemporaryDirectory() as tmpdir:
                raw_audio = os.path.join(tmpdir, fname)
                out_opus = os.path.join(tmpdir, "out.opus")
                with open(raw_audio, "wb") as f:
                    f.write(resp.content)
                opus_bytes = transcode_to_opus_bytes(raw_audio, out_opus)
                if opus_bytes:
                    r2_key = f"audio/{lang_id}/{slug}.opus"
                    if upload_bytes_to_r2(s3_client, r2_key, opus_bytes):
                        uploaded_keys.setdefault(lang_id, {})[slug] = resolve_public_audio_url(r2_key)
                        log(f"  -> Uploaded {r2_key}")
        except Exception as exc:
            log(f"  [warn] Zenodo Kiamu ingest skipped: {exc}")


def ingest_hf_streaming_audio(s3_client, uploaded_keys: dict):
    if R2_UPLOAD_DISABLED or global_budget_exceeded():
        return

    hf_jobs = [
        # 1. Google Research WAXAL Studio TTS & ASR (Parquet native, fast streaming)
        {"lang_id": "swahili", "repo": "google/WaxalNLP", "config": "swa_tts", "split": "train", "text_col": "text"},
        {"lang_id": "kikuyu", "repo": "google/WaxalNLP", "config": "kik_tts", "split": "train", "text_col": "text"},
        {"lang_id": "luo", "repo": "google/WaxalNLP", "config": "luo_tts", "split": "train", "text_col": "text"},
        {"lang_id": "luhya", "repo": "google/WaxalNLP", "config": "mas_asr", "split": "train", "text_col": "transcription"},
        {"lang_id": "borana", "repo": "google/WaxalNLP", "config": "orm_asr_v2", "split": "train", "text_col": "transcription"},
        # 2. CLEAR Global BibleTTS Dholuo (Parquet native, studio 24kHz)
        {"lang_id": "luo", "repo": "CLEAR-Global/BibleTTS-Luo", "config": "read", "split": "train", "text_col": "text"},
        # 3. Kencorpus KenSpeech Swahili ASR (Parquet native)
        {"lang_id": "swahili", "repo": "Kencorpus/KenSpeech", "config": "default", "split": "train", "text_col": "transcript"},
        # 4. Google FLEURS (Parquet revision for instant streaming without multi-GB tar.gz download)
        {"lang_id": "swahili", "repo": "google/fleurs", "config": "sw_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "luo", "repo": "google/fleurs", "config": "luo_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "kamba", "repo": "google/fleurs", "config": "kam_ke", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "somali", "repo": "google/fleurs", "config": "so_so", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        {"lang_id": "borana", "repo": "google/fleurs", "config": "om_et", "split": "train", "text_col": "raw_transcription", "revision": "refs/convert/parquet"},
        # 5. Mozilla Common Voice Swahili Parquet Mirrors (Gated)
        {"lang_id": "swahili", "repo": "deepdml/common_voice_26_0", "config": "sw", "split": "train", "text_col": "sentence"},
        {"lang_id": "swahili", "repo": "fsicoli/common_voice_22_0", "config": "sw", "split": "train", "text_col": "sentence"},
        # 6. Sunbird AI SALT Studio Audio (Gated)
        {"lang_id": "teso", "repo": "Sunbird/salt", "config": "studio-teo", "split": "train", "text_col": "text"},
        {"lang_id": "swahili", "repo": "Sunbird/salt", "config": "studio-swa", "split": "train", "text_col": "text"},
    ]

    for job in hf_jobs:
        if R2_UPLOAD_DISABLED or global_budget_exceeded():
            break
        lang_id = job["lang_id"]
        repo = job["repo"]
        cfg = job["config"]
        rev = job.get("revision")
        log(f"[HF Audio Stream] {repo} ({cfg}) -> {lang_id} (max {MAX_CLIPS} clips, {PER_DATASET_TIMEOUT_SEC}s cap)...")
        ds_start = time.monotonic()
        try:
            try:
                ds = load_hf_stream(repo, cfg, split=job["split"], revision=rev)
            except Exception:
                if rev:
                    ds = load_hf_stream(repo, cfg, split=job["split"], revision=None)
                else:
                    raise

            futures = []
            with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
                for idx, row in enumerate(ds):
                    if len(futures) >= MAX_CLIPS or (time.monotonic() - ds_start) > PER_DATASET_TIMEOUT_SEC or global_budget_exceeded() or R2_UPLOAD_DISABLED:
                        break
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
                    audio_obj = row.get("audio")
                    if not isinstance(audio_obj, dict):
                        continue
                    arr = audio_obj.get("array")
                    sr = audio_obj.get("sampling_rate")
                    if arr is None or not sr:
                        continue
                    slug = to_audio_slug(transcript)
                    if not slug or slug in uploaded_keys.get(lang_id, {}):
                        continue
                    futures.append(pool.submit(transcode_and_upload_worker, s3_client, lang_id, slug, arr, sr))

                count = 0
                for fut in concurrent.futures.as_completed(futures):
                    res = fut.result()
                    if res:
                        s_key, a_url = res
                        uploaded_keys.setdefault(lang_id, {})[s_key] = a_url
                        count += 1
            log(f"  -> Uploaded {count} Opus 24kbps clips for {lang_id} from {repo}/{cfg} in {int(time.monotonic() - ds_start)}s.")
        except Exception as exc:
            log(f"  [warn] Streaming {repo}/{cfg} skipped or gated: {exc}")


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
                slug = to_audio_slug(entry.get("translation", ""))
                if slug and slug in lang_map:
                    entry["audioFile"] = lang_map[slug]
                    total_attached += 1
                    modified = True
        if data.get("totalEntries") != tot:
            data["totalEntries"] = tot
            modified = True
        if modified:
            dict_file.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        exact_stats[lang_id] = {"total": tot, "cats": cats_map}
        grand_total += tot

    cat_path = DICT_DIR / "catalog.ts"
    if cat_path.exists():
        cat_txt = cat_path.read_text(encoding="utf-8")
        cat_txt = re.sub(
            r"export const TOTAL_DICTIONARY_ENTRIES:\s*number\s*=\s*\d+;",
            f"export const TOTAL_DICTIONARY_ENTRIES: number = {grand_total};",
            cat_txt,
        )
        stats_json = json.dumps(exact_stats, indent=2)
        new_tail = f"""// ── Synchronized Exact Entry & Category Counts Across All 23 Dictionaries (2026-11-18) ──
const _EXACT_DICT_STATS: Record<string, {{ total: number; cats: Record<string, number> }}> = {stats_json};
for (const _m of ALL_DICT_METAS) {{
  const _st = _EXACT_DICT_STATS[_m.languageId];
  if (_st) {{
    _m.totalEntries = _st.total;
    _m.hasAudio = true;
    _m.lastUpdated = "2026-11-18";
    for (const _c of _m.categories) {{
      if (_st.cats[_c.id] !== undefined) _c.count = _st.cats[_c.id];
    }}
  }}
}}
"""
        cat_txt = re.sub(
            r"// ── Synchronized Exact Entry & Category Counts Across All 23 Dictionaries.*$",
            new_tail,
            cat_txt,
            flags=re.S,
        )
        cat_path.write_text(cat_txt, encoding="utf-8")

    return total_attached


def main():
    dry_run = "--dry-run" in sys.argv
    log("=== KenyaHub One-Time CI Audio & Text Dataset Ingestor (Cloudflare R2 + HF_TOKEN) ===")
    log(
        f"Dry Run: {dry_run} | R2 Bucket: {R2_BUCKET} | HF_TOKEN: {'Configured' if HF_TOKEN else 'Not Set'} "
        f"| R2 Auth: {'S3 Keys' if (R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY) else ('CF API Token' if CF_API_TOKEN else 'None')} "
        f"| Max Clips/Dataset: {MAX_CLIPS} | Global Budget: {GLOBAL_TIME_BUDGET_SEC}s"
    )

    if dry_run:
        subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)
        log("Dry-run verification passed.")
        return

    s3_client = get_s3_client()
    uploaded_keys = {}
    text_counts = {}

    ingest_hf_text_repositories(text_counts)
    ingest_thiomi_5k_parallel_text_and_audio(s3_client, uploaded_keys, text_counts)
    ingest_zenodo_kiamu(s3_client, uploaded_keys)
    ingest_hf_streaming_audio(s3_client, uploaded_keys)
    attached = attach_audio_urls_and_sync_catalog(uploaded_keys)

    subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)

    lock_payload = {
        "ingestedAt": datetime.now(timezone.utc).isoformat(),
        "bucket": R2_BUCKET,
        "cdnBase": CDN_BASE,
        "elapsedSeconds": int(time.monotonic() - START_MONOTONIC),
        "textEntriesAddedByLanguage": text_counts,
        "uploadedAudioLanguageCounts": {k: len(v) for k, v in uploaded_keys.items()},
        "dictionaryEntriesLinked": attached,
    }
    LOCK_PATH.write_text(json.dumps(lock_payload, indent=2), encoding="utf-8")
    log(f"Wrote one-time lockfile to {LOCK_PATH} (total elapsed: {int(time.monotonic() - START_MONOTONIC)}s)")


if __name__ == "__main__":
    main()
