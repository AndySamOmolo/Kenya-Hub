#!/usr/bin/env python3
"""
Ingests ALL commercially permissive Kenyan Sign Language (KSL, ISO xki) real videos & pose data to Cloudflare R2:
  1. Maseno University KSL Dataset (Zenodo Record 14338329, CC-BY-4.0, Pose Data.zip ~1.54 GB):
     - Extracts ALL real anonymized stickman .mp4/.webm/.avi/.mov videos directly when present in the archive,
       transcodes to compact mobile-ready H.264 .mp4 (-movflags +faststart), and uploads to R2 `ksl/videos/<vid_id>.mp4`.
     - Uses deterministic per-member unique IDs so multiple recordings of the same gloss are all ingested without
       overwriting or duplicating previously uploaded clips.
     - Also extracts MediaPipe Holistic .npy pose sequences to compact JSON (`ksl/signs/<slug>.json`).
  2. Open Sign Bibles (`bible-nlp/sign-bibles`, CC-BY-SA-4.0, Hugging Face):
     - Streams ALL rows for `language == "xki"` (Kenyan Sign Language).
     - Enriches existing `KSL Passage #N` metadata in place with USFM passage references & `transcripts.json`
       without re-uploading already-uploaded `.mp4` files, and uploads all remaining human KSL `.mp4` clips.

Features:
  - Per-source completion tracking (`ingestionState` in `public/ksl-index.json`) so already-completed sources
    are skipped cleanly on subsequent CI runs while incomplete sources resume right where they left off.
  - Incremental checkpoint saves every 25 uploads + graceful wall-clock budget (`KSL_TIME_BUDGET_SEC`) so
    large multi-thousand-video runs never lose progress.
  - Deduplication by both `id` and `videoUrl`.

Writes `kenyahub/public/ksl-index.json` consumed by `build-open-corpus-index.py` and fetched live by Web & Android.
"""
from __future__ import annotations

import hashlib
import io
import json
import os
import concurrent.futures
import random
import threading
import re
import subprocess
import sys
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

from lib.license_guard import assert_repo_allowed

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)

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
R2_SECRET_ACCESS_KEY = (os.environ.get("R2_SECRET_ACCESS_KEY") or os.environ.get("R2_SECRET_KEY") or "").strip()
KSL_UPLOAD_WORKERS = max(1, min(16, int(os.environ.get("KSL_UPLOAD_WORKERS", "8") or "8")))
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"


def sanitize_cdn_base(raw: str) -> str:
    val = (raw or "").strip()
    m = re.match(r"^\[[^\]]+\]\((https?://[^)]+)\)(.*)$", val)
    if m:
        val = f"{m.group(1).strip()}{m.group(2).strip()}"
    return (val or "https://audio.kenyahub.me").rstrip("/")


CDN_BASE = sanitize_cdn_base(os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", "https://audio.kenyahub.me"))
HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None
FORCE_REINGEST = os.environ.get("FORCE_REINGEST", "").strip().lower() in {"1", "true", "yes"}

# 0 means UNLIMITED (ingest ALL available KSL videos)
MAX_MASENO_VIDEOS = int(os.environ.get("MAX_KSL_MASENO_VIDEOS", os.environ.get("MAX_KSL_SIGNS", "0")) or "0")
MAX_HUMAN_KSL_VIDEOS = int(os.environ.get("MAX_KSL_HUMAN_VIDEOS", "0") or "0")
KSL_TIME_BUDGET_SEC = int(os.environ.get("KSL_TIME_BUDGET_SEC", "3600") or "3600")
START_MONOTONIC = time.monotonic()

# Upper-body MediaPipe Pose landmark indices (head, shoulders, elbows, wrists, hands, hips)
UPPER_BODY_INDICES = [0, 2, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24]
VIDEO_EXTS = {".mp4", ".webm", ".avi", ".mov", ".mkv"}

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "KenyaHub-KSL-Video-Ingestor/3.0 (https://kenyahub.me; contact@kenyahub.me)"})
_THREAD_LOCAL = threading.local()


def get_http_session() -> requests.Session:
    sess = getattr(_THREAD_LOCAL, "session", None)
    if sess is None:
        sess = requests.Session()
        sess.headers.update({"User-Agent": "KenyaHub-KSL-Video-Ingestor/3.0 (https://kenyahub.me; contact@kenyahub.me)"})
        _THREAD_LOCAL.session = sess
    return sess


def get_upload_workers(s3_client) -> int:
    return KSL_UPLOAD_WORKERS if s3_client is not None else min(KSL_UPLOAD_WORKERS, 4)


def hydrate_existing_ksl_keys_from_r2(s3_client) -> set[str]:
    keys: set[str] = set()
    if s3_client is None:
        return keys
    try:
        paginator = s3_client.get_paginator("list_objects_v2")
        for page in paginator.paginate(Bucket=R2_BUCKET, Prefix="ksl/"):
            for obj in page.get("Contents", []):
                k = obj.get("Key", "")
                if k:
                    keys.add(k)
        if keys:
            print(f"[R2 hydrate] Found {len(keys)} existing KSL objects in bucket {R2_BUCKET}.")
    except Exception as exc:
        print(f"  [warn] R2 KSL prefix hydration skipped: {exc}")
    return keys


def time_budget_exceeded() -> bool:
    return KSL_TIME_BUDGET_SEC > 0 and (time.monotonic() - START_MONOTONIC) >= KSL_TIME_BUDGET_SEC


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
            config=Config(signature_version="s3v4", max_pool_connections=max(24, KSL_UPLOAD_WORKERS * 2), connect_timeout=10, read_timeout=30, retries={"max_attempts": 2}),
        )
    except Exception:
        return None


def upload_bytes_to_r2(s3_client, r2_key: str, body: bytes, content_type: str) -> str | None:
    if not body:
        return None
    if s3_client is not None:
        for attempt in range(5):
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
                err_str = str(exc)
                err_low = err_str.lower()
                is_transient = any(
                    tok in err_str
                    for tok in ("429", "SlowDown", "500", "502", "503", "504", "InternalError", "RequestTimeout", "ServiceUnavailable", "Throttling")
                ) or any(tok in err_low for tok in ("timed out", "connection reset", "temporarily unavailable"))
                if is_transient and attempt < 4:
                    wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.1, 1.0))
                    print(f"  [retry] R2 S3 transient error for {r2_key} (attempt {attempt + 1}/5); backing off {wait_s:.1f}s: {exc}")
                    time.sleep(wait_s)
                    continue
                print(f"  [warn] R2 S3 upload notice for {r2_key}: {exc}")
                break
    if CF_API_TOKEN and CF_ACCOUNT_ID:
        url = f"https://api.cloudflare.com/client/v4/accounts/{CF_ACCOUNT_ID}/r2/buckets/{R2_BUCKET}/objects/{r2_key}"
        for attempt in range(5):
            try:
                resp = get_http_session().put(
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
                if resp.status_code in (429, 500, 502, 503, 504) and attempt < 4:
                    retry_after = resp.headers.get("Retry-After")
                    if retry_after and retry_after.isdigit():
                        wait_s = min(30.0, float(int(retry_after)) + random.uniform(0.1, 0.8))
                    else:
                        wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.2, 1.2))
                    print(f"  [retry] R2 REST HTTP {resp.status_code} for {r2_key} (attempt {attempt + 1}/5); backing off {wait_s:.1f}s...")
                    time.sleep(wait_s)
                    continue
                print(f"  [warn] R2 REST upload HTTP {resp.status_code} for {r2_key}: {resp.text[:180]}")
                break
            except Exception as exc:
                if attempt < 4:
                    wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.2, 1.2))
                    print(f"  [retry] R2 REST exception for {r2_key} (attempt {attempt + 1}/5); backing off {wait_s:.1f}s: {exc}")
                    time.sleep(wait_s)
                    continue
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
            "ffmpeg", "-y", "-threads", "1", "-i", in_path,
            *(["-t", str(max_seconds)] if max_seconds and max_seconds > 0 else []),
            "-an",
            "-vf", "scale='min(480,iw)':-2,fps=20",
            "-c:v", "libx264", "-preset", ("veryfast" if (max_seconds and max_seconds > 0) else "ultrafast"), "-crf", "28",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart",
            out_path,
        ]
        ffmpeg_timeout = 120 if (max_seconds and max_seconds > 0) else 900
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=ffmpeg_timeout)
            if os.path.exists(out_path) and os.path.getsize(out_path) > 0:
                return Path(out_path).read_bytes()
        except Exception as exc:
            print(f"  [warn] ffmpeg transcode failed (timeout={ffmpeg_timeout}s, max_seconds={max_seconds}): {exc}")
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


def deduplicate_videos(videos: list[dict]) -> list[dict]:
    """Deduplicate KSL videos by id and videoUrl, keeping the richer metadata entry."""
    by_id: dict[str, dict] = {}
    seen_urls: set[str] = set()
    result: list[dict] = []
    for v in videos:
        vid_id = str(v.get("id") or "").strip()
        url = str(v.get("videoUrl") or "").strip()
        if not vid_id or not url:
            continue
        if vid_id in by_id:
            prev = by_id[vid_id]
            if not prev.get("fullDurationV2") and v.get("fullDurationV2"):
                prev["fullDurationV2"] = True
                prev["videoUrl"] = url
            if not prev.get("transcript") and v.get("transcript"):
                prev["transcript"] = v["transcript"]
            if not prev.get("reference") and v.get("reference"):
                prev["reference"] = v["reference"]
            continue
        if url in seen_urls:
            continue
        by_id[vid_id] = v
        seen_urls.add(url)
        result.append(v)
    return result


def save_ksl_index(existing: dict, videos_out: list[dict], signs_out: list[dict], ingestion_state: dict) -> None:
    deduped_videos = deduplicate_videos(videos_out)
    existing["updatedAt"] = datetime.now(timezone.utc).isoformat()
    existing["videos"] = sorted(deduped_videos, key=lambda x: (x.get("category", ""), x.get("title", ""), x.get("id", "")))
    existing["videoCount"] = len(existing["videos"])
    existing["ingestionState"] = ingestion_state
    if signs_out:
        seen_signs: dict[str, dict] = {}
        for s in signs_out:
            sid = str(s.get("id") or "").strip()
            if sid and sid not in seen_signs:
                seen_signs[sid] = s
        existing["signs"] = sorted(seen_signs.values(), key=lambda x: (x.get("gloss", ""), x.get("id", "")))
        existing["extractedSignCount"] = len(existing["signs"])
    KSL_INDEX_PATH.write_text(json.dumps(existing, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def ingest_maseno_zenodo(s3_client, existing: dict, videos_out: list[dict], signs_out: list[dict], ingestion_state: dict, existing_r2_keys: set[str] | None = None) -> None:
    """Download Maseno Zenodo 14338329 Pose Data.zip (CC-BY-4.0) and upload ALL stickman .mp4 videos + pose JSONs."""
    assert_repo_allowed(ZENODO_HTML_URL)
    maseno_state = ingestion_state.get("maseno") or {}
    if maseno_state.get("completed") and not FORCE_REINGEST:
        print(
            f"[skip-done] Maseno Zenodo {ZENODO_RECORD_ID} already fully ingested "
            f"({maseno_state.get('uploadedVideos', 0)}/{maseno_state.get('totalVideosFound', 0)} videos, "
            f"{maseno_state.get('uploadedPoses', 0)}/{maseno_state.get('totalPosesFound', 0)} poses)."
        )
        return

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
    seen_video_ids: set[str] = {v["id"] for v in videos_out}
    seen_member_paths: set[str] = {str(v.get("archivePath") or "") for v in videos_out if v.get("archivePath")}
    seen_pose_ids: set[str] = {s["id"] for s in signs_out}
    # Count existing Maseno glosses so the first clip keeps clean `maseno-<slug>` and additional clips get unique IDs
    gloss_counts: dict[str, int] = {}
    for v in videos_out:
        if v.get("category") == "maseno-stickman":
            g_slug = slugify(v.get("gloss") or v.get("title") or "")
            if g_slug:
                gloss_counts[g_slug] = gloss_counts.get(g_slug, 0) + 1

    with tempfile.TemporaryDirectory() as tmpdir:
        zip_path = os.path.join(tmpdir, "pose_data.zip")
        expected_size = int(zip_entry.get("size") or 0)
        dl_ok = False
        for dl_attempt in range(8):
            existing_bytes = os.path.getsize(zip_path) if os.path.exists(zip_path) else 0
            if expected_size > 0 and existing_bytes >= expected_size:
                dl_ok = True
                break
            headers = {"Range": f"bytes={existing_bytes}-"} if existing_bytes > 0 else {}
            try:
                with SESSION.get(dl_url, stream=True, headers=headers, timeout=(30, 120)) as resp:
                    if resp.status_code == 416:
                        dl_ok = True
                        break
                    resp.raise_for_status()
                    mode = "ab" if (existing_bytes > 0 and resp.status_code == 206) else "wb"
                    with open(zip_path, mode) as f:
                        for chunk in resp.iter_content(chunk_size=2 * 1024 * 1024):
                            if chunk:
                                f.write(chunk)
                final_sz = os.path.getsize(zip_path) if os.path.exists(zip_path) else 0
                if expected_size == 0 or final_sz >= expected_size:
                    dl_ok = True
                    break
                print(f"  [resume] Pose Data.zip partial ({final_sz / (1024**2):.1f} MB / {expected_size / (1024**2):.1f} MB), resuming (attempt {dl_attempt + 2}/8)...")
            except Exception as exc:
                cur_sz = os.path.getsize(zip_path) if os.path.exists(zip_path) else 0
                print(f"  [resume] Pose Data.zip interrupted at {cur_sz / (1024**2):.1f} MB ({exc}); retrying in 5s...")
                time.sleep(5)
        if not dl_ok:
            print("[warn] Pose Data.zip could not finish downloading after 8 resumable attempts.")
            return

        with zipfile.ZipFile(zip_path, "r") as zf:
            names = [
                m for m in zf.namelist()
                if not m.startswith("__MACOSX")
                and not m.endswith("/")
                and not Path(m).name.startswith(".")
                and Path(m).stem.strip(". ").lower() not in ("", "mp4")
            ]
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
            hit_budget_or_cap = False
            first_seen_gloss_in_archive: set[str] = set()

            r2_keys = existing_r2_keys or set()
            workers = get_upload_workers(s3_client)
            max_in_flight = workers * 2

            def _process_maseno_video(vid_id: str, title: str, gloss: str, g_slug: str, member: str, raw_bytes: bytes | None, ext: str):
                r2_key = f"ksl/videos/{vid_id}.mp4"
                expected_url = f"{CDN_BASE}/{r2_key}"
                video_url = expected_url if r2_key in r2_keys else None
                if not video_url and raw_bytes is not None:
                    if not r2_keys:
                        try:
                            head_r = get_http_session().head(expected_url, timeout=8)
                            if head_r.status_code == 200:
                                video_url = expected_url
                        except Exception:
                            pass
                    if not video_url:
                        mp4_bytes = transcode_to_compact_mp4(raw_bytes, ext, max_seconds=12)
                        if not mp4_bytes:
                            return None
                        video_url = upload_bytes_to_r2(s3_client, r2_key, mp4_bytes, "video/mp4")
                if not video_url:
                    return None
                return (vid_id, title, gloss, g_slug, member, video_url)

            vid_in_flight: set = set()

            def _drain_vid_futures(wait_all: bool = False):
                nonlocal maseno_vids_added
                if not vid_in_flight:
                    return
                if wait_all:
                    done, pending = concurrent.futures.wait(vid_in_flight)
                else:
                    done, pending = concurrent.futures.wait(vid_in_flight, return_when=concurrent.futures.FIRST_COMPLETED)
                vid_in_flight.clear()
                vid_in_flight.update(pending)
                for fut in done:
                    try:
                        res = fut.result()
                    except Exception:
                        res = None
                    if not res:
                        continue
                    vid_id, title, gloss, g_slug, member, video_url = res
                    seen_video_ids.add(vid_id)
                    seen_member_paths.add(member)
                    maseno_vids_added += 1
                    videos_out.append({
                        "id": vid_id,
                        "title": title,
                        "gloss": gloss,
                        "videoUrl": video_url,
                        "archivePath": member,
                        "category": "maseno-stickman",
                        "license": "CC-BY-4.0",
                        "source": f"Maseno University KSL Dataset (Zenodo {ZENODO_RECORD_ID})",
                        "sourceUrl": ZENODO_HTML_URL,
                    })
                    if maseno_vids_added % 25 == 0:
                        ingestion_state["maseno"] = {
                            "completed": False,
                            "uploadedVideos": sum(1 for v in videos_out if v.get("category") == "maseno-stickman"),
                            "totalVideosFound": len(vid_members),
                            "uploadedPoses": len(signs_out),
                            "totalPosesFound": len(npy_members),
                            "updatedAt": datetime.now(timezone.utc).isoformat(),
                        }
                        save_ksl_index(existing, videos_out, signs_out, ingestion_state)
                        print(f"  [checkpoint] Maseno: +{maseno_vids_added} new videos uploaded ({ingestion_state['maseno']['uploadedVideos']}/{len(vid_members)} total).")

            with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
                for m in vid_members:
                    if time_budget_exceeded():
                        print("  [checkpoint] Time budget reached during Maseno video ingestion; saving progress to resume on next run.")
                        hit_budget_or_cap = True
                        break
                    if MAX_MASENO_VIDEOS > 0 and (maseno_vids_added + len(vid_in_flight)) >= MAX_MASENO_VIDEOS:
                        hit_budget_or_cap = True
                        break
                    if m in seen_member_paths:
                        continue

                    gloss = clean_gloss_from_member(m, prefer_stem=prefer_vid_stem)
                    g_slug = slugify(gloss)
                    if not g_slug:
                        continue

                    base_id = f"maseno-{g_slug}"
                    if g_slug not in first_seen_gloss_in_archive:
                        first_seen_gloss_in_archive.add(g_slug)
                        if base_id in seen_video_ids:
                            continue
                        vid_id = base_id
                        title = gloss
                    else:
                        member_hash = hashlib.sha1(m.encode("utf-8")).hexdigest()[:6]
                        vid_id = f"maseno-{g_slug}-{member_hash}"
                        if vid_id in seen_video_ids:
                            continue
                        variant_num = gloss_counts.get(g_slug, 1) + 1
                        title = f"{gloss} (Clip {variant_num})"
                    gloss_counts[g_slug] = gloss_counts.get(g_slug, 0) + 1
                    seen_video_ids.add(vid_id)
                    r2_key = f"ksl/videos/{vid_id}.mp4"
                    raw_bytes = None if r2_key in r2_keys else zf.read(m)
                    vid_in_flight.add(pool.submit(_process_maseno_video, vid_id, title, gloss, g_slug, m, raw_bytes, Path(m).suffix.lower()))
                    if len(vid_in_flight) >= max_in_flight:
                        _drain_vid_futures(wait_all=False)
                _drain_vid_futures(wait_all=True)

            pose_added = 0

            def _process_maseno_pose(pose_id: str, gloss: str, raw_npy: bytes):
                frames = extract_compact_frames(raw_npy)
                if not frames:
                    return None
                r2_key = f"ksl/signs/{pose_id}.json"
                if r2_key in r2_keys:
                    pose_url = f"{CDN_BASE}/{r2_key}"
                else:
                    pose_payload = {
                        "id": pose_id,
                        "gloss": gloss,
                        "fps": 15,
                        "landmarks": UPPER_BODY_INDICES,
                        "frames": frames,
                        "source": f"Maseno University KSL Pose Dataset (Zenodo {ZENODO_RECORD_ID}, CC-BY-4.0)",
                    }
                    body = json.dumps(pose_payload, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
                    pose_url = upload_bytes_to_r2(s3_client, r2_key, body, "application/json; charset=utf-8")
                if not pose_url:
                    return None
                return (pose_id, gloss, len(frames), pose_url)

            pose_in_flight: set = set()

            def _drain_pose_futures(wait_all: bool = False):
                nonlocal pose_added
                if not pose_in_flight:
                    return
                if wait_all:
                    done, pending = concurrent.futures.wait(pose_in_flight)
                else:
                    done, pending = concurrent.futures.wait(pose_in_flight, return_when=concurrent.futures.FIRST_COMPLETED)
                pose_in_flight.clear()
                pose_in_flight.update(pending)
                for fut in done:
                    try:
                        res = fut.result()
                    except Exception:
                        res = None
                    if not res:
                        continue
                    pose_id, gloss, frame_count, pose_url = res
                    seen_pose_ids.add(pose_id)
                    pose_added += 1
                    signs_out.append({
                        "id": pose_id,
                        "gloss": gloss,
                        "frameCount": frame_count,
                        "fps": 15,
                        "poseUrl": pose_url,
                        "source": f"zenodo/{ZENODO_RECORD_ID}",
                    })

            with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
                for m in npy_members:
                    if time_budget_exceeded():
                        hit_budget_or_cap = True
                        break
                    if MAX_MASENO_VIDEOS > 0 and (pose_added + len(pose_in_flight)) >= MAX_MASENO_VIDEOS:
                        hit_budget_or_cap = True
                        break
                    gloss = clean_gloss_from_member(m, prefer_stem=prefer_npy_stem)
                    slug = slugify(gloss)
                    if not slug:
                        continue
                    pose_id = slug if slug not in seen_pose_ids else f"{slug}-{hashlib.sha1(m.encode('utf-8')).hexdigest()[:6]}"
                    if pose_id in seen_pose_ids:
                        continue
                    seen_pose_ids.add(pose_id)
                    raw_npy = zf.read(m)
                    pose_in_flight.add(pool.submit(_process_maseno_pose, pose_id, gloss, raw_npy))
                    if len(pose_in_flight) >= max_in_flight:
                        _drain_pose_futures(wait_all=False)
                _drain_pose_futures(wait_all=True)

            total_maseno_vids = sum(1 for v in videos_out if v.get("category") == "maseno-stickman")
            uploaded_poses = len(signs_out)
            total_poses_found = len(npy_members)
            maseno_completed = (
                not hit_budget_or_cap
                and (uploaded_poses > 0 or total_poses_found == 0)
                and (total_maseno_vids > 0 or len(vid_members) == 0)
            )
            ingestion_state["maseno"] = {
                "completed": maseno_completed,
                "fullDurationV2": True,
                "uploadedVideos": total_maseno_vids,
                "totalVideosFound": len(vid_members),
                "uploadedPoses": uploaded_poses,
                "totalPosesFound": total_poses_found,
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            save_ksl_index(existing, videos_out, signs_out, ingestion_state)
            print(
                f"  -> Uploaded {maseno_vids_added} new Maseno stickman .mp4 videos ({total_maseno_vids}/{len(vid_members)} total) "
                f"and {pose_added} .npy pose JSONs (completed={maseno_completed})."
            )


USFM_BOOK_NAMES = {
    "GEN": "Genesis", "EXO": "Exodus", "LEV": "Leviticus", "NUM": "Numbers", "DEU": "Deuteronomy",
    "JOS": "Joshua", "JDG": "Judges", "RUT": "Ruth", "1SA": "1 Samuel", "2SA": "2 Samuel",
    "1KI": "1 Kings", "2KI": "2 Kings", "1CH": "1 Chronicles", "2CH": "2 Chronicles",
    "EZR": "Ezra", "NEH": "Nehemiah", "EST": "Esther", "JOB": "Job", "PSA": "Psalms",
    "PRO": "Proverbs", "ECC": "Ecclesiastes", "SNG": "Song of Solomon", "ISA": "Isaiah",
    "JER": "Jeremiah", "LAM": "Lamentations", "EZK": "Ezekiel", "DAN": "Daniel", "HOS": "Hosea",
    "JOL": "Joel", "AMO": "Amos", "OBA": "Obadiah", "JON": "Jonah", "MIC": "Micah",
    "NAM": "Nahum", "HAB": "Habakkuk", "ZEP": "Zephaniah", "HAG": "Haggai", "ZEC": "Zechariah",
    "MAL": "Malachi", "MAT": "Matthew", "MRK": "Mark", "LUK": "Luke", "JHN": "John",
    "ACT": "Acts", "ROM": "Romans", "1CO": "1 Corinthians", "2CO": "2 Corinthians",
    "GAL": "Galatians", "EPH": "Ephesians", "PHP": "Philippians", "COL": "Colossians",
    "1TH": "1 Thessalonians", "2TH": "2 Thessalonians", "1TI": "1 Timothy", "2TI": "2 Timothy",
    "TIT": "Titus", "PHM": "Philemon", "HEB": "Hebrews", "JAS": "James", "1PE": "1 Peter",
    "2PE": "2 Peter", "1JN": "1 John", "2JN": "2 John", "3JN": "3 John", "JUD": "Jude", "REV": "Revelation",
}


def _trim_clean_sentence(text: str, max_chars: int = 2400) -> str:
    txt = " ".join(str(text or "").split()).strip()
    if len(txt) <= max_chars:
        return txt
    cut = txt[:max_chars]
    last_sent = max(cut.rfind("."), cut.rfind("!"), cut.rfind("?"))
    if last_sent >= max_chars // 2:
        return cut[: last_sent + 1].strip()
    return cut.rsplit(" ", 1)[0].rstrip(",;:-") + "…"


def _strip_vtt_srt(raw_text: str) -> str:
    lines = []
    for ln in raw_text.splitlines():
        s = ln.strip()
        if not s or s.upper() == "WEBVTT" or "-->" in s or s.isdigit():
            continue
        s = re.sub(r"<[^>]+>", "", s).strip()
        if s:
            lines.append(s)
    return _trim_clean_sentence(" ".join(lines), 2400)


def _extract_clean_transcript_from_obj(obj) -> str:
    if isinstance(obj, str):
        cleaned = _strip_vtt_srt(obj)
        return "" if cleaned.startswith(("{", "[")) else cleaned
    if isinstance(obj, list):
        parts = []
        for item in obj[:60]:
            if isinstance(item, dict):
                t = str(item.get("text") or item.get("transcript") or item.get("english") or "").strip()
                if t and not t.startswith(("{", "[")):
                    parts.append(t)
            elif isinstance(item, str) and item.strip() and not item.strip().startswith(("{", "[")):
                parts.append(item.strip())
        return _trim_clean_sentence(" ".join(parts), 2400)
    if isinstance(obj, dict):
        # Prefer explicit English/Swahili text keys before falling back
        for k in ("eng", "en", "english", "text", "transcript", "swh", "swa", "sw", "segments"):
            if k in obj and obj[k]:
                res = _extract_clean_transcript_from_obj(obj[k])
                if res:
                    return res
        for v in obj.values():
            if isinstance(v, (str, list)):
                res = _extract_clean_transcript_from_obj(v)
                if res and len(res) >= 8:
                    return res
    return ""


def _extract_sign_bible_context(row: dict, meta: dict, idx: int) -> tuple[str, str, str]:
    """Return exact (title, reference, transcript) matched strictly to this WebDataset row's __key__."""
    key_str = str(row.get("__key__") or meta.get("id") or meta.get("name") or "").strip()
    book = str(meta.get("book") or meta.get("book_name") or meta.get("book_id") or "").strip()
    chapter = str(meta.get("chapter") or "").strip()
    verse = str(meta.get("verse") or meta.get("verses") or "").strip()
    meta_title = str(meta.get("title") or "").strip()

    # Check for explicit topic slug in __key__ (e.g. '...-topic _ man and woman disobey god')
    topic_title = ""
    topic_m = re.search(r"topic\s*[/_\-]+\s*(.+)$", key_str, flags=re.I)
    if topic_m:
        topic_title = re.sub(r"[_\-]+", " ", topic_m.group(1)).strip()
        topic_title = re.sub(r"\s+", " ", topic_title).title()

    # Strict token-bounded USFM book/chapter match so substrings inside normal words never false-match
    if not book and key_str:
        for m in re.finditer(r"(?:^|[/_\-\s])([1-3]?[A-Za-z]{3})[/_\-\s](\d{1,3})(?:[/_\-:](\d{1,3}))?(?:$|[/_\-\s])", key_str):
            code = m.group(1).upper()
            if code in USFM_BOOK_NAMES:
                book = USFM_BOOK_NAMES[code]
                chapter = chapter or str(int(m.group(2)))
                if m.group(3):
                    verse = verse or str(int(m.group(3)))
                break
    if book.upper() in USFM_BOOK_NAMES:
        book = USFM_BOOK_NAMES[book.upper()]

    ref = ""
    if book:
        ref = f"{book} {chapter}:{verse}".strip(": ") if (chapter and verse) else (f"{book} {chapter}".strip() if chapter else book)
    elif topic_title:
        ref = topic_title[:64]

    if topic_title:
        title_core = topic_title[:72]
    elif meta_title:
        title_core = meta_title[:72]
    elif ref:
        title_core = ref[:72]
    elif key_str:
        cleaned = re.sub(r"^(?:xki|ksl)[/_\-]+", "", key_str, flags=re.I)
        cleaned = re.sub(r"chronological[/_\-]+bible[/_\-]+translation[/_\-]+in[/_\-]+kenyan[/_\-]+sign[/_\-]+language[/_\-]*", "", cleaned, flags=re.I)
        cleaned = re.sub(r"[_\-]+", " ", cleaned).strip()
        title_core = cleaned[:72].title() if cleaned else f"KSL Signed Passage #{idx + 1}"
    else:
        title_core = f"KSL Signed Passage #{idx + 1}"

    transcript_text = ""
    for col in ("transcripts.json", "vtt", "srt", "txt", "transcript", "subtitles", "text", "captions"):
        val = row.get(col)
        if not val:
            continue
        if isinstance(val, (bytes, bytearray)):
            decoded = val.decode("utf-8", errors="ignore").strip()
            if col.endswith(".json") or decoded.startswith(("{", "[")):
                try:
                    transcript_text = _extract_clean_transcript_from_obj(json.loads(decoded))
                except Exception:
                    transcript_text = _strip_vtt_srt(decoded)
            else:
                transcript_text = _strip_vtt_srt(decoded)
        else:
            transcript_text = _extract_clean_transcript_from_obj(val)
        if transcript_text:
            break

    if not transcript_text:
        for mk in ("transcript", "text", "english", "description", "verses_text", "caption"):
            mv = meta.get(mk)
            if mv:
                transcript_text = _extract_clean_transcript_from_obj(mv)
                if transcript_text:
                    break

    return title_core, ref, transcript_text


def ingest_open_sign_bibles_xki(s3_client, existing: dict, videos_out: list[dict], signs_out: list[dict], ingestion_state: dict, existing_r2_keys: set[str] | None = None) -> None:
    """Stream ALL real human KSL (xki) .mp4 signing videos + passage context from bible-nlp/sign-bibles (CC-BY-SA-4.0) to R2."""
    assert_repo_allowed(SIGN_BIBLES_REPO)
    osb_state = ingestion_state.get("openSignBibles") or {}
    has_incomplete_context = any(
        v.get("category") == "human-sign-bible" and (
            str(v.get("title", "")).startswith("KSL Passage #")
            or "chronological bible translation" in str(v.get("title", "")).lower()
            or (315 <= len(str(v.get("transcript") or "")) <= 325 and not str(v.get("transcript") or "").endswith((".", "!", "?", "”", '"')))
        )
        for v in videos_out
    )
    has_unupgraded_duration = any(
        v.get("category") == "human-sign-bible" and not v.get("fullDurationV2")
        for v in videos_out
    )
    if osb_state.get("completed") and osb_state.get("fullDurationV2") and not has_incomplete_context and not has_unupgraded_duration and not FORCE_REINGEST:
        print(
            f"[skip-done] Open Sign Bibles (xki) already fully ingested "
            f"({osb_state.get('uploadedVideos', 0)} videos across {osb_state.get('totalScanned', 0)} rows)."
        )
        return

    print(f"[Open Sign Bibles CC-BY-SA-4.0] Streaming ALL human KSL (xki) .mp4 videos from {SIGN_BIBLES_REPO}...")
    try:
        from datasets import load_dataset
    except ImportError:
        print("  [warn] datasets library not installed; skipping Open Sign Bibles video stream.")
        return

    by_id = {v["id"]: v for v in videos_out}
    added = 0
    enriched = 0
    total_scanned = 0
    hit_budget_or_cap = False

    try:
        ds = load_dataset(SIGN_BIBLES_REPO, "xki", split="train", streaming=True, token=HF_TOKEN)
        osb_workers = min(4, get_upload_workers(s3_client))
        osb_max_in_flight = osb_workers * 2
        osb_in_flight: set = set()

        def _save_osb_checkpoint():
            ingestion_state["openSignBibles"] = {
                "completed": False,
                "fullDurationV2": False,
                "uploadedVideos": sum(1 for v in videos_out if v.get("category") == "human-sign-bible"),
                "totalScanned": total_scanned,
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            save_ksl_index(existing, videos_out, signs_out, ingestion_state)
            print(f"  [checkpoint] Open Sign Bibles xki: +{added} new, {enriched} full-duration upgraded / enriched (scanned {total_scanned} rows).")

        def _transcode_and_upload_osb(mode: str, existing_ref: dict | None, r2_key: str, raw_bytes: bytes, new_meta: dict | None):
            full_bytes = transcode_to_compact_mp4(raw_bytes, ".mp4", max_seconds=0)
            if not full_bytes:
                return None
            up_url = upload_bytes_to_r2(s3_client, r2_key, full_bytes, "video/mp4")
            if not up_url:
                return None
            return (mode, existing_ref, f"{up_url}?v=2", new_meta)

        def _drain_osb_futures(wait_all: bool = False):
            nonlocal added, enriched
            if not osb_in_flight:
                return
            if wait_all:
                done, pending = concurrent.futures.wait(osb_in_flight)
            else:
                done, pending = concurrent.futures.wait(osb_in_flight, return_when=concurrent.futures.FIRST_COMPLETED)
            osb_in_flight.clear()
            osb_in_flight.update(pending)
            for fut in done:
                try:
                    res = fut.result()
                except Exception:
                    res = None
                if not res:
                    continue
                mode, existing_ref, v2_url, new_meta = res
                if mode == "upgrade" and existing_ref is not None:
                    existing_ref["videoUrl"] = v2_url
                    existing_ref["fullDurationV2"] = True
                    enriched += 1
                    if enriched % 25 == 0:
                        _save_osb_checkpoint()
                elif mode == "new" and new_meta is not None:
                    new_meta["videoUrl"] = v2_url
                    videos_out.append(new_meta)
                    added += 1
                    if added % 25 == 0:
                        _save_osb_checkpoint()

        with concurrent.futures.ThreadPoolExecutor(max_workers=osb_workers) as osb_pool:
          for idx, row in enumerate(ds):
              total_scanned = idx + 1
              if time_budget_exceeded():
                  print("  [checkpoint] Time budget reached during Open Sign Bibles streaming; saving progress to resume on next run.")
                  hit_budget_or_cap = True
                  break
              if MAX_HUMAN_KSL_VIDEOS > 0 and added >= MAX_HUMAN_KSL_VIDEOS:
                  hit_budget_or_cap = True
                  break
              if idx == 0:
                  print(f"  Open Sign Bibles xki row[0] keys: {list(row.keys())} | __key__={row.get('__key__')!r}")
              meta = row.get("json") or {}
              if isinstance(meta, bytes):
                  try:
                      meta = json.loads(meta.decode("utf-8", errors="ignore"))
                  except Exception:
                      meta = {}
              if not isinstance(meta, dict):
                  meta = {}

              title_core, ref, transcript_text = _extract_sign_bible_context(row, meta, idx)
              key_raw = str(row.get("__key__") or f"row-{idx}").strip()
              key_hash = hashlib.sha1(key_raw.encode("utf-8")).hexdigest()[:10]
              vid_id = f"sign-bible-xki-{key_hash}"
              prev_slug_id = f"sign-bible-{slugify(f'xki-{title_core}-{idx}')}"
              old_passage_id = f"sign-bible-xki-ksl-passage-{idx}"
              old_cbt_id = (
                  f"sign-bible-xki-chronological-bible-translation-in-kenyan-sign-l-{idx}"
                  if "chronological_bible_translation_in_kenyan_sign_language" in key_raw.lower()
                  else ""
              )

              # Match by deterministic row key, exact previous slug, legacy ksl-passage-{idx} (0..39), or CBT row ID (40..568)
              existing_item = (
                  by_id.get(vid_id)
                  or by_id.get(prev_slug_id)
                  or by_id.get(old_passage_id)
                  or (by_id.get(old_cbt_id) if old_cbt_id else None)
              )
              if existing_item is not None:
                  updated = False
                  if existing_item.get("title") != title_core:
                      existing_item["title"] = title_core
                      existing_item["gloss"] = title_core
                      updated = True
                  if ref and existing_item.get("reference") != ref:
                      existing_item["reference"] = ref
                      updated = True
                  if transcript_text and existing_item.get("transcript") != transcript_text:
                      existing_item["transcript"] = transcript_text
                      updated = True
                  # Re-upload full-duration MP4 (max_seconds=0) if this clip was previously capped at 15s
                  if not existing_item.get("fullDurationV2") or FORCE_REINGEST:
                      mp4_raw_ex = row.get("mp4")
                      if isinstance(mp4_raw_ex, dict):
                          mp4_raw_ex = mp4_raw_ex.get("bytes")
                      if isinstance(mp4_raw_ex, (bytes, bytearray)) and len(mp4_raw_ex) >= 1024:
                          ex_key = f"ksl/human/{existing_item.get('id', vid_id)}.mp4"
                          osb_in_flight.add(
                              osb_pool.submit(_transcode_and_upload_osb, "upgrade", existing_item, ex_key, bytes(mp4_raw_ex), None)
                          )
                          if len(osb_in_flight) >= osb_max_in_flight:
                              _drain_osb_futures(wait_all=False)
                          continue
                  if updated:
                      enriched += 1
                      if enriched % 25 == 0:
                          _save_osb_checkpoint()
                  continue

              mp4_raw = row.get("mp4")
              if isinstance(mp4_raw, dict):
                  mp4_raw = mp4_raw.get("bytes")
              if not isinstance(mp4_raw, (bytes, bytearray)) or len(mp4_raw) < 1024:
                  continue

              # Always transcode full-duration (max_seconds=0) and overwrite any stale 15s object at ksl/human/{vid_id}.mp4
              r2_key = f"ksl/human/{vid_id}.mp4"
              new_item_meta = {
                  "id": vid_id,
                  "title": title_core,
                  "gloss": title_core,
                  "fullDurationV2": True,
                  "category": "human-sign-bible",
                  "register": "religious_liturgical",
                  "reference": ref,
                  "transcript": transcript_text,
                  "license": "CC-BY-SA-4.0",
                  "source": "Open Sign Bibles (bible-nlp/sign-bibles)",
                  "sourceUrl": "https://huggingface.co/datasets/bible-nlp/sign-bibles",
              }
              by_id[vid_id] = new_item_meta
              osb_in_flight.add(
                  osb_pool.submit(_transcode_and_upload_osb, "new", None, r2_key, bytes(mp4_raw), new_item_meta)
              )
              if len(osb_in_flight) >= osb_max_in_flight:
                  _drain_osb_futures(wait_all=False)
          _drain_osb_futures(wait_all=True)
        total_human = sum(1 for v in videos_out if v.get("category") == "human-sign-bible")
        ingestion_state["openSignBibles"] = {
            "completed": not hit_budget_or_cap,
            "fullDurationV2": not hit_budget_or_cap,
            "uploadedVideos": total_human,
            "totalScanned": total_scanned,
            "updatedAt": datetime.now(timezone.utc).isoformat(),
        }
        save_ksl_index(existing, videos_out, signs_out, ingestion_state)
        print(
            f"  -> Uploaded {added} new and enriched {enriched} existing human KSL (xki) .mp4 clips "
            f"({total_human} total, completed={not hit_budget_or_cap})."
        )
    except Exception as exc:
        print(f"  [warn] Open Sign Bibles xki video stream notice: {exc}")


def main() -> None:
    dry_run = "--dry-run" in sys.argv
    print(f"=== KenyaHub KSL (xki) Video & Pose Extractor (Maseno Zenodo {ZENODO_RECORD_ID} + Open Sign Bibles xki) ===")
    if dry_run:
        assert_repo_allowed(ZENODO_HTML_URL)
        assert_repo_allowed(SIGN_BIBLES_REPO)
        m_cap = "ALL" if MAX_MASENO_VIDEOS == 0 else str(MAX_MASENO_VIDEOS)
        h_cap = "ALL" if MAX_HUMAN_KSL_VIDEOS == 0 else str(MAX_HUMAN_KSL_VIDEOS)
        print(
            f"DRY RUN: Would ingest {m_cap} Maseno stickman .mp4 videos + poses from {ZENODO_API_URL} "
            f"and {h_cap} human KSL .mp4 videos from {SIGN_BIBLES_REPO} to R2."
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
        print("[info] R2 credentials not set; keeping existing ksl-index.json metadata & video links.")
        return

    ingestion_state: dict = dict(existing.get("ingestionState") or {})
    videos_out: list[dict] = deduplicate_videos(list(existing.get("videos") or []))
    signs_out: list[dict] = list(existing.get("signs") or [])

    s3_client = get_s3_client()
    print(
        f"[R2] Transport: {'S3 Data Plane (fast)' if s3_client is not None else 'Cloudflare v4 REST fallback (slower — check R2_ACCESS_KEY_ID / R2_SECRET_KEY)'} "
        f"| Upload workers: {get_upload_workers(s3_client)}"
    )
    existing_r2_keys = hydrate_existing_ksl_keys_from_r2(s3_client)

    ingest_maseno_zenodo(s3_client, existing, videos_out, signs_out, ingestion_state, existing_r2_keys)
    ingest_open_sign_bibles_xki(s3_client, existing, videos_out, signs_out, ingestion_state, existing_r2_keys)

    save_ksl_index(existing, videos_out, signs_out, ingestion_state)
    print(f"[OK] Updated {KSL_INDEX_PATH} ({existing['videoCount']} KSL videos, {len(signs_out)} pose JSONs).")


if __name__ == "__main__":
    main()
