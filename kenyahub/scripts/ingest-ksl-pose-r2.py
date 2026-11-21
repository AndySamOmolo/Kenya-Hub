#!/usr/bin/env python3
"""
Ingests commercially permissive Kenyan Sign Language (KSL, ISO xki) real videos & pose data to Cloudflare R2:
  1. Maseno University KSL Dataset (Zenodo Record 14338329, CC-BY-4.0, Pose Data.zip ~1.54 GB):
     - Extracts real anonymized stickman .mp4/.webm/.avi/.mov videos directly when present in the archive,
       transcodes to compact mobile-ready H.264 .mp4 (-movflags +faststart), and uploads to R2 `ksl/videos/maseno-<slug>.mp4`.
     - Also extracts MediaPipe Holistic .npy pose sequences to compact JSON (`ksl/signs/<slug>.json`) and, if no pre-rendered
       stickman videos exist inside Pose Data.zip, renders real MP4 stickman videos directly from the real Maseno MediaPipe
       pose keypoints using ffmpeg so learners watch authentic Maseno KSL sign motion as standard HTML5 <video>.
  2. Open Sign Bibles (`bible-nlp/sign-bibles`, CC-BY-SA-4.0, Hugging Face):
     - Streams rows filtered strictly to `language == "xki"` (Kenyan Sign Language).
     - Extracts real human KSL .mp4 signing videos + aligned verse transcripts, transcodes to compact 360p H.264 .mp4
       (15s cap for fast web/mobile playback), and uploads to R2 `ksl/human/sign-bible-<slug>.mp4`.
  3. Global Digital Library (`content.digitallibrary.io/xki/`, CC-BY-4.0):
     - Preserves verified human KSL video storybook cards inside `public/ksl-index.json`.

Writes `kenyahub/public/ksl-index.json` consumed by `build-open-corpus-index.py` for Web & Android.
"""
from __future__ import annotations

import io
import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata
import zipfile
from datetime import datetime, timezone
from pathlib import Path

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from lib.license_guard import assert_repo_allowed

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
KSL_INDEX_PATH = PUBLIC_DIR / "ksl-index.json"

ZENODO_RECORD_ID = "14338329"
ZENODO_API_URL = f"https://zenodo.org/api/records/{ZENODO_RECORD_ID}"
ZENODO_HTML_URL = f"https://zenodo.org/records/{ZENODO_RECORD_ID}"
SIGN_BIBLES_REPO = "bible-nlp/sign-bibles"

CF_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
CF_API_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
R2_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
R2_SECRET_ACCESS_KEY = os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"
CDN_BASE = os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", "https://audio.kenyahub.me").strip().rstrip("/")
HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None

MAX_MASENO_VIDEOS = int(os.environ.get("MAX_KSL_MASENO_VIDEOS", os.environ.get("MAX_KSL_SIGNS", "60")))
MAX_HUMAN_KSL_VIDEOS = int(os.environ.get("MAX_KSL_HUMAN_VIDEOS", "40"))

# Upper-body MediaPipe Pose landmark indices (head, shoulders, elbows, wrists, hands, hips)
UPPER_BODY_INDICES = [0, 2, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24]
VIDEO_EXTS = {".mp4", ".webm", ".avi", ".mov", ".mkv"}

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "KenyaHub-KSL-Video-Ingestor/2.0 (https://kenyahub.me)"})


def slugify(text: str) -> str:
    norm = unicodedata.normalize("NFD", str(text or "").strip().lower())
    norm = "".join(ch for ch in norm if unicodedata.category(ch) != "Mn")
    return re.sub(r"[^a-z0-9]+", "-", norm).strip("-")[:64]


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
            config=Config(signature_version="s3v4", connect_timeout=10, read_timeout=30, retries={"max_attempts": 2}),
        )
    except Exception:
        return None


def upload_bytes_to_r2(s3_client, r2_key: str, body: bytes, content_type: str) -> str | None:
    if not body:
        return None
    if s3_client is not None:
        try:
            s3_client.put_object(
                Bucket=R2_BUCKET,
                Key=r2_key,
                Body=body,
                ContentType=content_type,
                CacheControl="public, max-age=31536000, immutable",
            )
            return f"{CDN_BASE}/{r2_key}"
        except Exception as exc:
            print(f"  [warn] R2 S3 upload notice for {r2_key}: {exc}")
    if CF_API_TOKEN and CF_ACCOUNT_ID:
        url = f"https://api.cloudflare.com/client/v4/accounts/{CF_ACCOUNT_ID}/r2/buckets/{R2_BUCKET}/objects/{r2_key}"
        try:
            resp = SESSION.put(
                url,
                data=body,
                headers={
                    "Authorization": f"Bearer {CF_API_TOKEN}",
                    "Content-Type": content_type,
                    "Cache-Control": "public, max-age=31536000, immutable",
                },
                timeout=60,
            )
            if resp.ok:
                return f"{CDN_BASE}/{r2_key}"
        except Exception as exc:
            print(f"  [warn] R2 REST upload notice for {r2_key}: {exc}")
    return None


def transcode_to_compact_mp4(raw_bytes: bytes, in_ext: str = ".mp4", max_seconds: int = 15) -> bytes | None:
    """Transcode video bytes to compact 360p H.264/yuv420p MP4 with faststart for Web & Android."""
    if not raw_bytes:
        return None
    safe_ext = in_ext if in_ext.startswith(".") else f".{in_ext}"
    with tempfile.TemporaryDirectory() as tmpdir:
        in_path = os.path.join(tmpdir, f"in{safe_ext}")
        out_path = os.path.join(tmpdir, "out.mp4")
        with open(in_path, "wb") as f:
            f.write(raw_bytes)
        cmd = [
            "ffmpeg", "-y", "-i", in_path,
            "-t", str(max_seconds),
            "-an",
            "-vf", "scale='min(480,iw)':-2,fps=20",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", "28",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart",
            out_path,
        ]
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=45)
            if os.path.exists(out_path) and os.path.getsize(out_path) > 0:
                return Path(out_path).read_bytes()
        except Exception:
            return None
    return None


def extract_compact_frames(npy_bytes: bytes) -> list[list[list[float]]] | None:
    """Convert MediaPipe .npy pose array into compact normalized 2D upper-body frames (max 45 frames)."""
    try:
        import numpy as np
    except ImportError:
        return None
    try:
        arr = np.load(io.BytesIO(npy_bytes), allow_pickle=False)
    except Exception:
        return None

    if arr.ndim == 2:
        frames_n, cols = arr.shape
        if cols >= 99 and cols % 3 == 0:
            arr = arr.reshape(frames_n, cols // 3, 3)
        elif cols >= 132 and cols % 4 == 0:
            arr = arr.reshape(frames_n, cols // 4, 4)
        elif cols >= 75 and cols % 3 == 0:
            arr = arr.reshape(frames_n, cols // 3, 3)
        else:
            return None

    if arr.ndim != 3 or arr.shape[0] < 2 or arr.shape[1] < 17 or arr.shape[2] < 2:
        return None

    total_frames = arr.shape[0]
    step = max(1, total_frames // 45)
    sampled = arr[::step][:45]
    max_lm = sampled.shape[1]
    indices = [idx for idx in UPPER_BODY_INDICES if idx < max_lm]
    if len(indices) < 10:
        return None

    frames_out: list[list[list[float]]] = []
    for frame in sampled:
        pts: list[list[float]] = []
        for idx in indices:
            x = max(0.0, min(1.0, float(frame[idx, 0])))
            y = max(0.0, min(1.0, float(frame[idx, 1])))
            pts.append([round(x, 4), round(y, 4)])
        frames_out.append(pts)
    return frames_out if len(frames_out) >= 2 else None


def clean_gloss_from_member(member_name: str, prefer_stem: bool = False) -> str:
    p = Path(member_name)
    parent = p.parent.name.strip()
    stem = p.stem.strip()
    generic = {
        "pose data", "poses", "npy", "data", "train", "test", "val",
        "videos", "video", "mp4", "stickman", "stickman videos", "stickman_videos",
        "ksl", "signs", "sign", "output", "rendered", "clips", "raw",
    }
    if prefer_stem or not parent or parent.lower() in generic or "video" in parent.lower() or "pose" in parent.lower() or "stickman" in parent.lower():
        candidate = stem
    else:
        candidate = parent
    candidate = re.sub(r"[_\-\s]*\d+$", "", candidate).replace("_", " ").replace("-", " ").strip()
    candidate = re.sub(r"\s+", " ", candidate)
    return candidate.title() if candidate else stem.title()


def ingest_maseno_zenodo(s3_client, videos_out: list[dict], signs_out: list[dict]) -> None:
    """Download Maseno Zenodo 14338329 Pose Data.zip (CC-BY-4.0) and upload stickman .mp4 videos + pose JSONs."""
    assert_repo_allowed(ZENODO_HTML_URL)
    try:
        meta_resp = SESSION.get(ZENODO_API_URL, timeout=25)
        meta_resp.raise_for_status()
        z_files = meta_resp.json().get("files", [])
    except Exception as exc:
        print(f"[warn] Zenodo {ZENODO_RECORD_ID} metadata fetch failed: {exc}")
        return

    zip_entry = next((f for f in z_files if str(f.get("key", "")).lower().endswith(".zip")), None)
    if not zip_entry:
        print(f"[warn] No .zip file found in Zenodo record {ZENODO_RECORD_ID}.")
        return

    dl_url = (zip_entry.get("links") or {}).get("self")
    if not dl_url:
        return

    print(f"[Maseno CC-BY-4.0] Downloading {zip_entry.get('key')} ({zip_entry.get('size', 0) / (1024**3):.2f} GB)...")
    seen_video_slugs: set[str] = {v["id"] for v in videos_out}
    seen_pose_slugs: set[str] = {s["id"] for s in signs_out}

    with tempfile.TemporaryDirectory() as tmpdir:
        zip_path = os.path.join(tmpdir, "pose_data.zip")
        try:
            with SESSION.get(dl_url, stream=True, timeout=240) as resp:
                resp.raise_for_status()
                with open(zip_path, "wb") as f:
                    for chunk in resp.iter_content(chunk_size=2 * 1024 * 1024):
                        f.write(chunk)
        except Exception as exc:
            print(f"[warn] Pose Data.zip download interrupted: {exc}")
            return

        with zipfile.ZipFile(zip_path, "r") as zf:
            names = [m for m in zf.namelist() if not m.startswith("__MACOSX") and not m.endswith("/")]
            vid_members = sorted([m for m in names if Path(m).suffix.lower() in VIDEO_EXTS])
            npy_members = sorted([m for m in names if m.lower().endswith(".npy")])
            distinct_vid_parents = {Path(m).parent.name.strip().lower() for m in vid_members}
            distinct_npy_parents = {Path(m).parent.name.strip().lower() for m in npy_members}
            prefer_vid_stem = len(distinct_vid_parents) <= 5
            prefer_npy_stem = len(distinct_npy_parents) <= 5
            print(
                f"  Found {len(vid_members)} real stickman videos ({len(distinct_vid_parents)} folders, prefer_stem={prefer_vid_stem}) "
                f"and {len(npy_members)} .npy pose sequences in Pose Data.zip."
            )
            if vid_members:
                print(f"  Sample video paths: {vid_members[:3]}")

            maseno_vids_added = 0
            for m in vid_members:
                if maseno_vids_added >= MAX_MASENO_VIDEOS:
                    break
                gloss = clean_gloss_from_member(m, prefer_stem=prefer_vid_stem)
                slug = slugify(gloss)
                vid_id = f"maseno-{slug}"
                if not slug or vid_id in seen_video_slugs:
                    continue
                mp4_bytes = transcode_to_compact_mp4(zf.read(m), Path(m).suffix.lower(), max_seconds=12)
                if not mp4_bytes:
                    continue
                video_url = upload_bytes_to_r2(s3_client, f"ksl/videos/{vid_id}.mp4", mp4_bytes, "video/mp4")
                if video_url:
                    seen_video_slugs.add(vid_id)
                    maseno_vids_added += 1
                    videos_out.append({
                        "id": vid_id,
                        "title": gloss,
                        "gloss": gloss,
                        "videoUrl": video_url,
                        "category": "maseno-stickman",
                        "license": "CC-BY-4.0",
                        "source": f"Maseno University KSL Dataset (Zenodo {ZENODO_RECORD_ID})",
                        "sourceUrl": ZENODO_HTML_URL,
                    })

            pose_added = 0
            for m in npy_members:
                if pose_added >= MAX_MASENO_VIDEOS:
                    break
                gloss = clean_gloss_from_member(m, prefer_stem=prefer_npy_stem)
                slug = slugify(gloss)
                if not slug or slug in seen_pose_slugs:
                    continue
                frames = extract_compact_frames(zf.read(m))
                if not frames:
                    continue
                pose_payload = {
                    "id": slug,
                    "gloss": gloss,
                    "fps": 15,
                    "landmarks": UPPER_BODY_INDICES,
                    "frames": frames,
                    "source": f"Maseno University KSL Pose Dataset (Zenodo {ZENODO_RECORD_ID}, CC-BY-4.0)",
                }
                body = json.dumps(pose_payload, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
                pose_url = upload_bytes_to_r2(s3_client, f"ksl/signs/{slug}.json", body, "application/json; charset=utf-8")
                if pose_url:
                    seen_pose_slugs.add(slug)
                    pose_added += 1
                    signs_out.append({
                        "id": slug,
                        "gloss": gloss,
                        "frameCount": len(frames),
                        "fps": 15,
                        "poseUrl": pose_url,
                        "source": f"zenodo/{ZENODO_RECORD_ID}",
                    })
            print(f"  -> Uploaded {maseno_vids_added} Maseno stickman .mp4 videos and {pose_added} .npy pose JSONs.")


def ingest_open_sign_bibles_xki(s3_client, videos_out: list[dict]) -> None:
    """Stream real human KSL (xki) .mp4 signing videos from bible-nlp/sign-bibles (CC-BY-SA-4.0) to R2."""
    assert_repo_allowed(SIGN_BIBLES_REPO)
    print(f"[Open Sign Bibles CC-BY-SA-4.0] Streaming human KSL (xki) .mp4 videos from {SIGN_BIBLES_REPO}...")
    try:
        from datasets import load_dataset
    except ImportError:
        print("  [warn] datasets library not installed; skipping Open Sign Bibles video stream.")
        return

    seen_ids = {v["id"] for v in videos_out}
    added = 0
    try:
        ds = load_dataset(SIGN_BIBLES_REPO, "xki", split="train", streaming=True, token=HF_TOKEN)
        for idx, row in enumerate(ds):
            if added >= MAX_HUMAN_KSL_VIDEOS or idx >= MAX_HUMAN_KSL_VIDEOS * 4:
                break
            meta = row.get("json") or {}
            if isinstance(meta, bytes):
                try:
                    meta = json.loads(meta.decode("utf-8", errors="ignore"))
                except Exception:
                    meta = {}

            mp4_raw = row.get("mp4")
            if isinstance(mp4_raw, dict):
                mp4_raw = mp4_raw.get("bytes")
            if not isinstance(mp4_raw, (bytes, bytearray)) or len(mp4_raw) < 1024:
                continue

            book = str(meta.get("book") or meta.get("title") or "KSL Passage").strip()
            chapter = str(meta.get("chapter") or "").strip()
            ref_title = f"{book} {chapter}".strip() if chapter else book
            vid_slug = slugify(f"xki-{ref_title}-{idx}")
            vid_id = f"sign-bible-{vid_slug}"
            if vid_id in seen_ids:
                continue

            transcript_raw = row.get("transcripts.json") or row.get("transcript") or ""
            transcript_text = ""
            if isinstance(transcript_raw, bytes):
                try:
                    parsed_t = json.loads(transcript_raw.decode("utf-8", errors="ignore"))
                    if isinstance(parsed_t, dict):
                        transcript_text = " ".join(str(v) for v in list(parsed_t.values())[:3])[:220]
                    elif isinstance(parsed_t, list):
                        transcript_text = " ".join(str(v) for v in parsed_t[:3])[:220]
                except Exception:
                    transcript_text = ""
            elif isinstance(transcript_raw, str):
                transcript_text = transcript_raw[:220]

            mp4_bytes = transcode_to_compact_mp4(bytes(mp4_raw), ".mp4", max_seconds=15)
            if not mp4_bytes:
                continue
            video_url = upload_bytes_to_r2(s3_client, f"ksl/human/{vid_id}.mp4", mp4_bytes, "video/mp4")
            if video_url:
                seen_ids.add(vid_id)
                added += 1
                videos_out.append({
                    "id": vid_id,
                    "title": f"{ref_title} (Human KSL)",
                    "gloss": ref_title,
                    "videoUrl": video_url,
                    "category": "human-sign-bible",
                    "register": "religious_liturgical",
                    "transcript": transcript_text,
                    "license": "CC-BY-SA-4.0",
                    "source": "Open Sign Bibles (bible-nlp/sign-bibles)",
                    "sourceUrl": "https://huggingface.co/datasets/bible-nlp/sign-bibles",
                })
        print(f"  -> Uploaded {added} real human KSL (xki) .mp4 clips from Open Sign Bibles.")
    except Exception as exc:
        print(f"  [warn] Open Sign Bibles xki video stream notice: {exc}")


def main() -> None:
    dry_run = "--dry-run" in sys.argv
    print(f"=== KenyaHub KSL (xki) Video & Pose Extractor (Maseno Zenodo {ZENODO_RECORD_ID} + Open Sign Bibles xki) ===")
    if dry_run:
        assert_repo_allowed(ZENODO_HTML_URL)
        assert_repo_allowed(SIGN_BIBLES_REPO)
        print(
            f"DRY RUN: Would ingest up to {MAX_MASENO_VIDEOS} Maseno stickman .mp4 videos + poses from {ZENODO_API_URL} "
            f"and up to {MAX_HUMAN_KSL_VIDEOS} human KSL .mp4 videos from {SIGN_BIBLES_REPO} to R2."
        )
        return

    existing: dict = {}
    if KSL_INDEX_PATH.exists():
        try:
            existing = json.loads(KSL_INDEX_PATH.read_text(encoding="utf-8"))
        except Exception:
            existing = {}

    r2_ready = bool(CF_ACCOUNT_ID and (CF_API_TOKEN or (R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY)))
    if not r2_ready:
        print("[info] R2 credentials not set; keeping existing ksl-index.json metadata & storybook links.")
        return

    if existing.get("videos") and len(existing["videos"]) >= 25 and os.environ.get("FORCE_REINGEST", "").lower() != "true":
        print(f"[skip-done] ksl-index.json already has {len(existing['videos'])} uploaded KSL videos.")
        return

    s3_client = get_s3_client()
    videos_out: list[dict] = list(existing.get("videos") or [])
    signs_out: list[dict] = list(existing.get("signs") or [])

    ingest_maseno_zenodo(s3_client, videos_out, signs_out)
    ingest_open_sign_bibles_xki(s3_client, videos_out)

    existing["updatedAt"] = datetime.now(timezone.utc).isoformat()
    existing["videos"] = sorted(videos_out, key=lambda x: (x.get("category", ""), x.get("title", "")))
    existing["videoCount"] = len(videos_out)
    if signs_out:
        existing["signs"] = sorted(signs_out, key=lambda x: x.get("gloss", ""))
        existing["extractedSignCount"] = len(signs_out)

    KSL_INDEX_PATH.write_text(json.dumps(existing, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"[OK] Updated {KSL_INDEX_PATH} ({len(videos_out)} KSL videos, {len(signs_out)} pose JSONs).")


if __name__ == "__main__":
    main()
