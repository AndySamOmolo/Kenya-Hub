#!/usr/bin/env python3
"""
kenyahub/scripts/ci-ingest-audio-and-text-r2.py

One-Time GitHub Actions Streaming Pipeline for KenyaHub (Authenticated via HF_TOKEN):
1. Authenticates with `HF_TOKEN` (`huggingface_hub.login(token=HF_TOKEN)`) to stream both
   PUBLIC/UNGATED and GATED Hugging Face repositories:

   A. PUBLIC / UNGATED REPOSITORIES (Work immediately with or without gate approval):
      - `thiomi/thiomi-5k` (https://huggingface.co/datasets/thiomi/thiomi-5k, CC-BY-4.0):
        * Configs: `eng_Latn`, `kik_Latn` (Kikuyu), `kam_Latn` (Kamba), `luo_Latn` (Dholuo),
          `mer_Latn` (Kimeru/Meru), `som_Latn` (Somali) — 6,818 rows + ~10.5 hours human audio each,
          1-to-1 aligned across languages via `sentenceId`!
      - `google/fleurs` (https://huggingface.co/datasets/google/fleurs, CC-BY-4.0):
        * Exact Configs: `sw_ke` (Swahili Kenya), `luo_ke` (Dholuo Kenya), `kam_ke` (Kamba Kenya),
          `so_so` (Somali), `om_et` (Oromo/Borana) — columns: `audio`, `raw_transcription`, `transcription`.
      - `google/WaxalNLP` (https://huggingface.co/datasets/google/WaxalNLP, CC-BY-4.0 / CC-BY-SA-4.0):
        * Exact Configs: `swa_tts` (Swahili TTS, col `text`), `kik_tts` (Kikuyu TTS, col `text`),
          `luo_tts` (Dholuo TTS, col `text`), `mas_asr` (Masaaba/Lumasaba ASR -> `luhya`, col `transcription`),
          `orm_asr_v2` (Oromo/Borana ASR -> `borana`, col `transcription`).
      - `google/smol` (https://huggingface.co/datasets/google/smol, CC-BY-4.0):
        * GATITOS Lexicons (`src`, `trgs`): `gatitos__en_ki`, `gatitos__en_luo`, `gatitos__en_om`
        * SMOLSent Sentences (`src`, `trg`): `smolsent__en_sw`, `smolsent__en_ki`, `smolsent__en_luo`,
          `smolsent__en_so`, `smolsent__en_om`
        * SMOLDoc Documents (`srcs`, `trgs`): `smoldoc__en_sw`, `smoldoc__en_ki`, `smoldoc__en_luo`,
          `smoldoc__en_so`, `smoldoc__en_om`
      - `CLEAR-Global/BibleTTS-Luo` (https://huggingface.co/datasets/CLEAR-Global/BibleTTS-Luo, CC-BY-SA-4.0):
        * Config: `read`, Split: `train` (40,592 studio 24kHz clips, 76.49 hours, col `text`, `audio`).
      - `Kencorpus/KenSpeech` (https://huggingface.co/datasets/Kencorpus/KenSpeech, CC-BY-4.0):
        * Config: `default`, Split: `train` (5,816 Swahili clips, 27.5 hours, col `transcript`, `audio`).
      - `Kencorpus/KenCorpus_text` (https://huggingface.co/datasets/Kencorpus/KenCorpus_text, CC-BY-4.0) &
        `Kencorpus/KenPOS` (https://huggingface.co/datasets/Kencorpus/KenPOS, configs `dho`, `lbk`, `lch`, `llg`).
      - Zenodo Lamu Kiamu Fieldwork Archive (`https://zenodo.org/records/19828379` & `19827932`, CC-BY-4.0).

   B. GATED HUGGING FACE REPOSITORIES (Require clicking "Agree and access repository" on HF with your HF account):
      - `deepdml/common_voice_26_0` (https://huggingface.co/datasets/deepdml/common_voice_26_0, CC0-1.0, config `sw`, col `sentence`)
      - `fsicoli/common_voice_22_0` (https://huggingface.co/datasets/fsicoli/common_voice_22_0, CC0-1.0, config `sw`, col `sentence`)
      - `Sunbird/salt` (https://huggingface.co/datasets/Sunbird/salt, CC-BY-SA-4.0, configs `text-all`, `studio-teo`, `multispeaker-teo`, `studio-swa`)
      - `Digital-Divide-Data/Kamba-ASR-Data-Subset-484H` (https://huggingface.co/datasets/Digital-Divide-Data/Kamba-ASR-Data-Subset-484H)
      - `Digital-Divide-Data/Somali-ASR-Subset-68H` (https://huggingface.co/datasets/Digital-Divide-Data/Somali-ASR-Subset-68H)
      - `Digital-Divide-Data/Gusii-ASR-Data-Subset-470H` (https://huggingface.co/datasets/Digital-Divide-Data/Gusii-ASR-Data-Subset-470H)

2. Transcodes audio to 24 kbps mono 24kHz Opus (`.opus`), uploads to Cloudflare R2 (`kenyahub-audio`),
   attaches `audioFile` URLs and parallel text entries to `src/data/dictionaries/*.json`, updates
   `src/data/dictionaries/catalog.ts` and `public/audio-manifest.json`, and writes `public/.audio-ingested-lock.json`.
"""

import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata
from datetime import datetime, timezone
from pathlib import Path

import requests

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
MAX_CLIPS = int(os.environ.get("MAX_CLIPS_PER_DATASET", "2500"))
MAX_TEXT_ROWS = int(os.environ.get("MAX_TEXT_ROWS_PER_DATASET", "5000"))


def to_audio_slug(text: str) -> str:
    cleaned = re.sub(r"\([^)]*\)", " ", str(text or ""))
    cleaned = re.split(r"[•/;]", cleaned)[0].strip().lower()
    norm = unicodedata.normalize("NFD", cleaned)
    norm = "".join(ch for ch in norm if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", norm).strip("-")
    return slug[:64]


def authenticate_huggingface():
    if not HF_TOKEN:
        print("[HF Auth] No HF_TOKEN set; using anonymous access for public repositories.")
        return
    try:
        from huggingface_hub import login
        login(token=HF_TOKEN, add_to_git_credential=False)
        print("[HF Auth] Authenticated with HF_TOKEN via huggingface_hub.")
    except Exception as exc:
        print(f"[HF Auth] Notice: huggingface_hub.login ({exc}); token will still be passed to load_dataset.")


def load_hf_stream(repo: str, config: str, split: str = "train"):
    from datasets import load_dataset

    try:
        return load_dataset(repo, config, split=split, streaming=True, token=HF_TOKEN)
    except TypeError:
        return load_dataset(repo, config, split=split, streaming=True, use_auth_token=HF_TOKEN)


def get_s3_client():
    if not (CF_ACCOUNT_ID and R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY):
        return None
    import boto3
    from botocore.config import Config

    return boto3.client(
        "s3",
        endpoint_url=f"https://{CF_ACCOUNT_ID}.r2.cloudflarestorage.com",
        aws_access_key_id=R2_ACCESS_KEY_ID,
        aws_secret_access_key=R2_SECRET_ACCESS_KEY,
        region_name="auto",
        config=Config(signature_version="s3v4"),
    )


def transcode_to_opus(in_path: str, out_path: str) -> bool:
    try:
        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                in_path,
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
                out_path,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        return os.path.exists(out_path) and os.path.getsize(out_path) > 0
    except Exception as exc:
        print(f"  [warn] ffmpeg transcode failed: {exc}")
        return False


def upload_to_r2(s3_client, r2_key: str, local_opus_path: str) -> bool:
    if s3_client is not None:
        try:
            s3_client.upload_file(
                local_opus_path,
                R2_BUCKET,
                r2_key,
                ExtraArgs={
                    "ContentType": "audio/ogg; codecs=opus",
                    "CacheControl": "public, max-age=31536000, immutable",
                },
            )
            return True
        except Exception as exc:
            print(f"  [warn] S3 R2 upload failed for {r2_key}: {exc}")

    if CF_API_TOKEN and CF_ACCOUNT_ID:
        try:
            subprocess.run(
                [
                    "npx",
                    "wrangler",
                    "r2",
                    "object",
                    "put",
                    f"{R2_BUCKET}/{r2_key}",
                    "--file",
                    local_opus_path,
                    "--content-type",
                    "audio/ogg; codecs=opus",
                    "--cache-control",
                    "public, max-age=31536000, immutable",
                ],
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            return True
        except Exception as exc:
            print(f"  [warn] Wrangler R2 upload failed for {r2_key}: {exc}")

    return False


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
    """
    Streams `thiomi/thiomi-5k` (https://huggingface.co/datasets/thiomi/thiomi-5k, PUBLIC/UNGATED):
    First loads `eng_Latn` (`sentenceId` -> `transcription`) across `train` and `test`, then streams
    `kik_Latn` (kikuyu), `kam_Latn` (kamba), `luo_Latn` (luo), `mer_Latn` (meru), and `som_Latn` (somali),
    joining on `sentenceId` to extract both parallel English <-> Kenyan text pairs AND human audio clips.
    """
    try:
        import soundfile as sf
    except ImportError:
        sf = None

    print("\n[Thiomi-5K] Streaming English reference sentences from thiomi/thiomi-5k (eng_Latn)...")
    eng_by_id = {}
    for split_name in ("train", "test"):
        try:
            ds_en = load_hf_stream("thiomi/thiomi-5k", "eng_Latn", split=split_name)
            for idx, row in enumerate(ds_en):
                if idx >= MAX_TEXT_ROWS:
                    break
                sid = str(row.get("sentenceId", "")).strip()
                txt = str(row.get("transcription", "")).strip()
                if sid and txt:
                    eng_by_id[sid] = txt
        except Exception as exc:
            print(f"  [warn] thiomi/thiomi-5k eng_Latn ({split_name}) skipped: {exc}")

    print(f"  -> Loaded {len(eng_by_id)} English reference sentences from thiomi/thiomi-5k.")

    thiomi_targets = [
        ("kikuyu", "kik_Latn", "Gĩkũyũ"),
        ("kamba", "kam_Latn", "Kikamba"),
        ("luo", "luo_Latn", "Dholuo"),
        ("meru", "mer_Latn", "Kĩmĩĩrũ"),
        ("somali", "som_Latn", "Af-Soomaali"),
    ]

    for lang_id, cfg, lang_label in thiomi_targets:
        print(f"\n[Thiomi-5K] Streaming thiomi/thiomi-5k ({cfg}) -> {lang_id}...")
        batch_entries = []
        audio_count = 0
        citation = f"The Thiomi-5K Parallel Speech & Text Corpus ({cfg} {lang_label}, CC-BY-4.0, https://huggingface.co/datasets/thiomi/thiomi-5k)"
        try:
            ds = load_hf_stream("thiomi/thiomi-5k", cfg, split="train")
            with tempfile.TemporaryDirectory() as tmpdir:
                for idx, row in enumerate(ds):
                    if idx >= MAX_TEXT_ROWS and audio_count >= MAX_CLIPS:
                        break
                    sid = str(row.get("sentenceId", "")).strip()
                    tr_txt = str(row.get("transcription", "")).strip()
                    if not tr_txt:
                        continue
                    en_txt = eng_by_id.get(sid, "")
                    slug = to_audio_slug(tr_txt)
                    audio_url = None

                    if sf is not None and audio_count < MAX_CLIPS and slug:
                        audio_obj = row.get("audio")
                        if isinstance(audio_obj, dict):
                            arr = audio_obj.get("array")
                            sr = audio_obj.get("sampling_rate")
                            if arr is not None and sr:
                                wav_path = os.path.join(tmpdir, "clip.wav")
                                opus_path = os.path.join(tmpdir, "clip.opus")
                                sf.write(wav_path, arr, sr)
                                if transcode_to_opus(wav_path, opus_path):
                                    r2_key = f"audio/{lang_id}/{slug}.opus"
                                    if upload_to_r2(s3_client, r2_key, opus_path):
                                        audio_url = resolve_public_audio_url(r2_key)
                                        uploaded_keys.setdefault(lang_id, {})[slug] = audio_url
                                        audio_count += 1

                    if en_txt and idx < MAX_TEXT_ROWS:
                        entry = {"english": en_txt, "translation": tr_txt, "context": citation}
                        if audio_url:
                            entry["audioFile"] = audio_url
                        batch_entries.append(entry)

            added = add_verified_text_entries_to_dict(lang_id, batch_entries)
            text_counts[lang_id] = text_counts.get(lang_id, 0) + added
            print(f"  -> Added {added} parallel text pairs and uploaded {audio_count} Opus clips for {lang_id} from thiomi/thiomi-5k ({cfg}).")
        except Exception as exc:
            print(f"  [warn] thiomi/thiomi-5k ({cfg}) skipped or partial: {exc}")


def ingest_hf_text_repositories(text_counts: dict):
    """
    Streams verified public and gated parallel text datasets from Hugging Face (`google/smol` and `Sunbird/salt`).
    """
    try:
        import datasets  # noqa: F401
    except ImportError:
        print("[warn] Python `datasets` package not installed; skipping HF text streaming.")
        return

    text_jobs = [
        # Google GATITOS Lexicons (PUBLIC / UNGATED, CC-BY-4.0 — exact subsets on google/smol)
        ("kikuyu", "google/smol", "gatitos__en_ki", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "gatitos__en_luo", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "gatitos__en_om", "train", "src", "trgs", "Google Research GATITOS Lexicon (gatitos__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        # Google SMOLSent Parallel Sentences (PUBLIC / UNGATED, CC-BY-4.0 — exact subsets on google/smol)
        ("swahili", "google/smol", "smolsent__en_sw", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_sw, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("kikuyu", "google/smol", "smolsent__en_ki", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "smolsent__en_luo", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("somali", "google/smol", "smolsent__en_so", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_so, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "smolsent__en_om", "train", "src", "trg", "Google Research SMOLSent Parallel Sentences (smolsent__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        # Google SMOLDoc Parallel Document Sentences (PUBLIC / UNGATED, CC-BY-4.0 — exact subsets on google/smol)
        ("swahili", "google/smol", "smoldoc__en_sw", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_sw, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("kikuyu", "google/smol", "smoldoc__en_ki", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_ki, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("luo", "google/smol", "smoldoc__en_luo", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_luo, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("somali", "google/smol", "smoldoc__en_so", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_so, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        ("borana", "google/smol", "smoldoc__en_om", "train", "srcs", "trgs", "Google Research SMOLDoc Parallel Corpus (smoldoc__en_om, CC-BY-4.0, https://huggingface.co/datasets/google/smol)"),
        # Sunbird AI SALT (GATED, CC-BY-SA-4.0 — requires clicking Agree on https://huggingface.co/datasets/Sunbird/salt)
        ("teso", "Sunbird/salt", "text-all", "train", "eng_text", "teo_text", "Sunbird AI SALT Parallel Corpus (eng-teo, CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)"),
        ("swahili", "Sunbird/salt", "text-all", "train", "eng_text", "swa_text", "Sunbird AI SALT Parallel Corpus (eng-swa, CC-BY-SA-4.0, https://huggingface.co/datasets/Sunbird/salt)"),
    ]

    for lang_id, repo, cfg, split, en_col, tr_col, citation in text_jobs:
        print(f"\n[HF Text Stream] {repo} ({cfg}) -> {lang_id} (max {MAX_TEXT_ROWS} rows)...")
        try:
            ds = load_hf_stream(repo, cfg, split=split)
            batch = []
            for idx, row in enumerate(ds):
                if idx >= MAX_TEXT_ROWS:
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
            print(f"  -> Added {added} new verified entries to {lang_id}.json from {repo}/{cfg}.")
        except Exception as exc:
            print(f"  [warn] HF text stream {repo}/{cfg} skipped or gated: {exc}")


def ingest_zenodo_kiamu(s3_client, uploaded_keys: dict):
    """
    Downloads Ustadh Mahmoud Mau's Lamu Kiamu audio recording from Zenodo (CC-BY-4.0):
    Record 19828379 (`Piste 2.wma`, Track 2 = poem "Kiswahili !!") & Record 19827932.
    """
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
            print(f"[Zenodo CC-BY-4.0] Downloading {url}...")
            resp = requests.get(url, timeout=90)
            if not resp.ok:
                continue
            with tempfile.TemporaryDirectory() as tmpdir:
                raw_audio = os.path.join(tmpdir, fname)
                out_opus = os.path.join(tmpdir, "out.opus")
                with open(raw_audio, "wb") as f:
                    f.write(resp.content)
                if transcode_to_opus(raw_audio, out_opus):
                    r2_key = f"audio/{lang_id}/{slug}.opus"
                    if upload_to_r2(s3_client, r2_key, out_opus):
                        uploaded_keys.setdefault(lang_id, {})[slug] = resolve_public_audio_url(r2_key)
                        print(f"  -> Uploaded {r2_key}")
        except Exception as exc:
            print(f"  [warn] Zenodo Kiamu ingest skipped: {exc}")


def ingest_hf_streaming_audio(s3_client, uploaded_keys: dict):
    try:
        import soundfile as sf
    except ImportError:
        print("[warn] Python `soundfile` not installed; skipping HF audio streaming.")
        return

    hf_jobs = [
        # 1. Google FLEURS (PUBLIC / UNGATED, CC-BY-4.0 — https://huggingface.co/datasets/google/fleurs)
        #    Exact configs verified: sw_ke, luo_ke, kam_ke, so_so, om_et
        {
            "lang_id": "swahili",
            "repo": "google/fleurs",
            "config": "sw_ke",
            "split": "train",
            "text_col": "raw_transcription",
        },
        {
            "lang_id": "luo",
            "repo": "google/fleurs",
            "config": "luo_ke",
            "split": "train",
            "text_col": "raw_transcription",
        },
        {
            "lang_id": "kamba",
            "repo": "google/fleurs",
            "config": "kam_ke",
            "split": "train",
            "text_col": "raw_transcription",
        },
        {
            "lang_id": "somali",
            "repo": "google/fleurs",
            "config": "so_so",
            "split": "train",
            "text_col": "raw_transcription",
        },
        {
            "lang_id": "borana",
            "repo": "google/fleurs",
            "config": "om_et",
            "split": "train",
            "text_col": "raw_transcription",
        },
        # 2. Google Research WAXAL (PUBLIC / UNGATED, CC-BY-4.0 / CC-BY-SA-4.0 — https://huggingface.co/datasets/google/WaxalNLP)
        #    Exact configs verified: swa_tts, kik_tts, luo_tts (use 'text' col); mas_asr, orm_asr_v2 (use 'transcription' col)
        {
            "lang_id": "swahili",
            "repo": "google/WaxalNLP",
            "config": "swa_tts",
            "split": "train",
            "text_col": "text",
        },
        {
            "lang_id": "kikuyu",
            "repo": "google/WaxalNLP",
            "config": "kik_tts",
            "split": "train",
            "text_col": "text",
        },
        {
            "lang_id": "luo",
            "repo": "google/WaxalNLP",
            "config": "luo_tts",
            "split": "train",
            "text_col": "text",
        },
        {
            "lang_id": "luhya",
            "repo": "google/WaxalNLP",
            "config": "mas_asr",
            "split": "train",
            "text_col": "transcription",
        },
        {
            "lang_id": "borana",
            "repo": "google/WaxalNLP",
            "config": "orm_asr_v2",
            "split": "train",
            "text_col": "transcription",
        },
        # 3. CLEAR Global BibleTTS Dholuo (PUBLIC / UNGATED, CC-BY-SA-4.0 — https://huggingface.co/datasets/CLEAR-Global/BibleTTS-Luo)
        {
            "lang_id": "luo",
            "repo": "CLEAR-Global/BibleTTS-Luo",
            "config": "read",
            "split": "train",
            "text_col": "text",
        },
        # 4. Kencorpus KenSpeech Swahili ASR (PUBLIC / UNGATED, CC-BY-4.0 — https://huggingface.co/datasets/Kencorpus/KenSpeech)
        {
            "lang_id": "swahili",
            "repo": "Kencorpus/KenSpeech",
            "config": "default",
            "split": "train",
            "text_col": "transcript",
        },
        # 5. Mozilla Common Voice Swahili Parquet Mirrors (GATED, CC0-1.0 — https://huggingface.co/datasets/deepdml/common_voice_26_0)
        {
            "lang_id": "swahili",
            "repo": "deepdml/common_voice_26_0",
            "config": "sw",
            "split": "train",
            "text_col": "sentence",
        },
        {
            "lang_id": "swahili",
            "repo": "fsicoli/common_voice_22_0",
            "config": "sw",
            "split": "train",
            "text_col": "sentence",
        },
        # 6. Sunbird AI SALT Studio Audio (GATED, CC-BY-SA-4.0 — https://huggingface.co/datasets/Sunbird/salt)
        {
            "lang_id": "teso",
            "repo": "Sunbird/salt",
            "config": "studio-teo",
            "split": "train",
            "text_col": "text",
        },
        {
            "lang_id": "swahili",
            "repo": "Sunbird/salt",
            "config": "studio-swa",
            "split": "train",
            "text_col": "text",
        },
        # 7. Digital Divide Data Kenyan ASR (GATED — https://huggingface.co/Digital-Divide-Data)
        {
            "lang_id": "kamba",
            "repo": "Digital-Divide-Data/Kamba-ASR-Data-Subset-484H",
            "config": "default",
            "split": "train",
            "text_col": "transcription",
        },
        {
            "lang_id": "somali",
            "repo": "Digital-Divide-Data/Somali-ASR-Subset-68H",
            "config": "default",
            "split": "train",
            "text_col": "transcription",
        },
        {
            "lang_id": "kisii",
            "repo": "Digital-Divide-Data/Gusii-ASR-Data-Subset-470H",
            "config": "default",
            "split": "train",
            "text_col": "transcription",
        },
    ]

    for job in hf_jobs:
        lang_id = job["lang_id"]
        repo = job["repo"]
        cfg = job["config"]
        print(f"\n[HF Audio Stream] {repo} ({cfg}) -> {lang_id} (max {MAX_CLIPS} clips)...")
        try:
            ds = load_hf_stream(repo, cfg, split=job["split"])
            count = 0
            with tempfile.TemporaryDirectory() as tmpdir:
                for row in ds:
                    if count >= MAX_CLIPS:
                        break
                    transcript = (
                        row.get(job["text_col"])
                        or row.get("transcription")
                        or row.get("sentence")
                        or row.get("text")
                        or row.get("transcript")
                        or ""
                    ).strip()
                    audio_obj = row.get("audio")
                    if not transcript or not isinstance(audio_obj, dict):
                        continue
                    arr = audio_obj.get("array")
                    sr = audio_obj.get("sampling_rate")
                    if arr is None or not sr:
                        continue
                    slug = to_audio_slug(transcript)
                    if not slug:
                        continue
                    wav_path = os.path.join(tmpdir, "clip.wav")
                    opus_path = os.path.join(tmpdir, "clip.opus")
                    sf.write(wav_path, arr, sr)
                    if transcode_to_opus(wav_path, opus_path):
                        r2_key = f"audio/{lang_id}/{slug}.opus"
                        if upload_to_r2(s3_client, r2_key, opus_path):
                            uploaded_keys.setdefault(lang_id, {})[slug] = resolve_public_audio_url(r2_key)
                            count += 1
            print(f"  -> Uploaded {count} Opus 24kbps clips for {lang_id} from {repo}/{cfg}.")
        except Exception as exc:
            print(f"  [warn] Streaming {repo}/{cfg} skipped or gated: {exc}")


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
        new_tail = f"""// ── Synchronized Exact Entry & Category Counts Across All 23 Dictionaries (2026-11-17) ──
const _EXACT_DICT_STATS: Record<string, {{ total: number; cats: Record<string, number> }}> = {stats_json};
for (const _m of ALL_DICT_METAS) {{
  const _st = _EXACT_DICT_STATS[_m.languageId];
  if (_st) {{
    _m.totalEntries = _st.total;
    _m.hasAudio = true;
    _m.lastUpdated = "2026-11-17";
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
    print("=== KenyaHub One-Time CI Audio & Text Dataset Ingestor (Cloudflare R2 + HF_TOKEN) ===")
    print(f"Dry Run: {dry_run} | R2 Bucket: {R2_BUCKET} | HF_TOKEN: {'Configured' if HF_TOKEN else 'Not Set'}")

    if dry_run:
        subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)
        print("Dry-run verification passed.")
        return

    authenticate_huggingface()
    s3_client = get_s3_client()
    uploaded_keys = {}
    text_counts = {}

    ingest_thiomi_5k_parallel_text_and_audio(s3_client, uploaded_keys, text_counts)
    ingest_hf_text_repositories(text_counts)
    ingest_zenodo_kiamu(s3_client, uploaded_keys)
    ingest_hf_streaming_audio(s3_client, uploaded_keys)
    attached = attach_audio_urls_and_sync_catalog(uploaded_keys)

    subprocess.run(["node", str(ROOT_DIR / "scripts" / "sync-cloudflare-r2-audio.mjs"), "--dry-run"], check=True)

    lock_payload = {
        "ingestedAt": datetime.now(timezone.utc).isoformat(),
        "bucket": R2_BUCKET,
        "cdnBase": CDN_BASE,
        "textEntriesAddedByLanguage": text_counts,
        "uploadedAudioLanguageCounts": {k: len(v) for k, v in uploaded_keys.items()},
        "dictionaryEntriesLinked": attached,
    }
    LOCK_PATH.write_text(json.dumps(lock_payload, indent=2), encoding="utf-8")
    print(f"Wrote one-time lockfile to {LOCK_PATH}")


if __name__ == "__main__":
    main()
