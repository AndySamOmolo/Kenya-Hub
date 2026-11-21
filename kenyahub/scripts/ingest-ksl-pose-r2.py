#!/usr/bin/env python3
"""
Ingests Maseno University's Open-Access Kenyan Sign Language (KSL, ISO xki) Pose Dataset
from Zenodo Record 14338329 (CC-BY-4.0, Pose Data.zip ~1.54 GB):
  - Downloads Pose Data.zip (no auth required)
  - Extracts MediaPipe Holistic .npy pose sequences per sign word gloss
  - Downsamples to compact 15 FPS normalized 2D upper-body + hand keypoint JSON (~5-12 KB/sign)
  - Uploads each sign animation JSON to Cloudflare R2 under ksl/signs/<slug>.json
  - Writes kenyahub/public/ksl-index.json with playable poseUrl entries for Web & Android
"""
from __future__ import annotations

import io
import json
import os
import re
import sys
import tempfile
import unicodedata
import zipfile
from datetime import datetime, timezone
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
KSL_INDEX_PATH = PUBLIC_DIR / "ksl-index.json"

ZENODO_RECORD_ID = "14338329"
ZENODO_API_URL = f"https://zenodo.org/api/records/{ZENODO_RECORD_ID}"
ZENODO_HTML_URL = f"https://zenodo.org/records/{ZENODO_RECORD_ID}"

CF_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
CF_API_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
R2_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
R2_SECRET_ACCESS_KEY = os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"
CDN_BASE = os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", "https://audio.kenyahub.me").strip().rstrip("/")
MAX_KSL_SIGNS = int(os.environ.get("MAX_KSL_SIGNS", "150"))

# Upper-body MediaPipe Pose landmark indices (0..24 cover head, shoulders, elbows, wrists, hands, hips)
UPPER_BODY_INDICES = [0, 2, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24]

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "KenyaHub-KSL-Ingestor/1.0 (https://kenyahub.me)"})


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
            config=Config(signature_version="s3v4", connect_timeout=10, read_timeout=20, retries={"max_attempts": 2}),
        )
    except Exception:
        return None


def upload_json_to_r2(s3_client, r2_key: str, payload: dict) -> str | None:
    body = json.dumps(payload, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
    if s3_client is not None:
        try:
            s3_client.put_object(
                Bucket=R2_BUCKET,
                Key=r2_key,
                Body=body,
                ContentType="application/json; charset=utf-8",
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
                    "Content-Type": "application/json; charset=utf-8",
                    "Cache-Control": "public, max-age=31536000, immutable",
                },
                timeout=15,
            )
            if resp.ok:
                return f"{CDN_BASE}/{r2_key}"
        except Exception as exc:
            print(f"  [warn] R2 REST upload notice for {r2_key}: {exc}")
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
        # Handle flattened (frames, 33*3) or (frames, 33*4) or (frames, 25*3)
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

    # Downsample to at most 45 frames for smooth lightweight playback (~15 fps)
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
            x = float(frame[idx, 0])
            y = float(frame[idx, 1])
            if not (0.0 <= x <= 1.5 and 0.0 <= y <= 1.5):
                x = max(0.0, min(1.0, x))
                y = max(0.0, min(1.0, y))
            pts.append([round(x, 4), round(y, 4)])
        frames_out.append(pts)
    return frames_out if len(frames_out) >= 2 else None


def clean_gloss_from_member(member_name: str) -> str:
    """Derive human-readable KSL word gloss from archive path (e.g. 'Pose Data/HELLO/hello_01.npy' -> 'Hello')."""
    p = Path(member_name)
    parent = p.parent.name.strip()
    stem = p.stem.strip()
    candidate = parent if parent and parent.lower() not in ("pose data", "poses", "npy", "data", "train", "test", "val", "videos") else stem
    candidate = re.sub(r"[_\-\d]+$", "", candidate).replace("_", " ").replace("-", " ").strip()
    candidate = re.sub(r"\s+", " ", candidate)
    return candidate.title() if candidate else stem.title()


def main() -> None:
    dry_run = "--dry-run" in sys.argv
    print(f"=== KenyaHub KSL (xki) Pose Extractor (Zenodo {ZENODO_RECORD_ID}, CC-BY-4.0) ===")
    if dry_run:
        print(f"DRY RUN: Would stream {ZENODO_API_URL} and extract up to {MAX_KSL_SIGNS} KSL pose JSON animations to R2.")
        return

    existing = {}
    if KSL_INDEX_PATH.exists():
        try:
            existing = json.loads(KSL_INDEX_PATH.read_text(encoding="utf-8"))
        except Exception:
            existing = {}

    if existing.get("signs") and len(existing["signs"]) >= 25 and os.environ.get("FORCE_REINGEST", "").lower() != "true":
        print(f"[skip-done] ksl-index.json already has {len(existing['signs'])} extracted KSL signs.")
        return

    r2_ready = bool(CF_ACCOUNT_ID and (CF_API_TOKEN or (R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY)))
    s3_client = get_s3_client() if r2_ready else None

    try:
        meta_resp = SESSION.get(ZENODO_API_URL, timeout=25)
        meta_resp.raise_for_status()
        z_files = meta_resp.json().get("files", [])
    except Exception as exc:
        print(f"[warn] Zenodo {ZENODO_RECORD_ID} metadata fetch failed: {exc}")
        return

    zip_entry = next((f for f in z_files if str(f.get("key", "")).lower().endswith(".zip")), None)
    if not zip_entry:
        print("[warn] No .zip file found in Zenodo record 14338329.")
        return

    dl_url = (zip_entry.get("links") or {}).get("self")
    if not dl_url or not r2_ready:
        print(f"[info] R2 upload {'disabled (no credentials)' if not r2_ready else 'missing URL'}; keeping metadata-only ksl-index.json.")
        return

    print(f"Downloading {zip_entry.get('key')} ({zip_entry.get('size', 0) / (1024**3):.2f} GB) from Zenodo {ZENODO_RECORD_ID}...")
    signs_out: list[dict] = []
    seen_slugs: set[str] = set()

    with tempfile.TemporaryDirectory() as tmpdir:
        zip_path = os.path.join(tmpdir, "pose_data.zip")
        try:
            with SESSION.get(dl_url, stream=True, timeout=180) as resp:
                resp.raise_for_status()
                with open(zip_path, "wb") as f:
                    for chunk in resp.iter_content(chunk_size=2 * 1024 * 1024):
                        f.write(chunk)
        except Exception as exc:
            print(f"[warn] Pose Data.zip download interrupted: {exc}")
            return

        with zipfile.ZipFile(zip_path, "r") as zf:
            npy_members = [m for m in zf.namelist() if m.lower().endswith(".npy") and not m.startswith("__MACOSX")]
            print(f"Found {len(npy_members)} .npy pose sequences inside Pose Data.zip; extracting up to {MAX_KSL_SIGNS} unique signs...")
            for m in npy_members:
                if len(signs_out) >= MAX_KSL_SIGNS:
                    break
                gloss = clean_gloss_from_member(m)
                slug = slugify(gloss)
                if not slug or slug in seen_slugs:
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
                pose_url = upload_json_to_r2(s3_client, f"ksl/signs/{slug}.json", pose_payload)
                if pose_url:
                    seen_slugs.add(slug)
                    signs_out.append({
                        "id": slug,
                        "gloss": gloss,
                        "frameCount": len(frames),
                        "fps": 15,
                        "poseUrl": pose_url,
                        "source": f"zenodo/{ZENODO_RECORD_ID}",
                    })

    if signs_out:
        existing["updatedAt"] = datetime.now(timezone.utc).isoformat()
        existing["signs"] = sorted(signs_out, key=lambda x: x["gloss"])
        existing["extractedSignCount"] = len(signs_out)
        KSL_INDEX_PATH.write_text(json.dumps(existing, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"[OK] Uploaded {len(signs_out)} KSL pose animations to R2 and updated {KSL_INDEX_PATH}.")
    else:
        print("[info] No new KSL signs extracted in this run.")


if __name__ == "__main__":
    main()
