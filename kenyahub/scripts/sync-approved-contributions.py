#!/usr/bin/env python3
"""
Sync Approved Appwrite Language Contributions -> Cloudflare R2 & Dictionaries.

Connects to Appwrite REST API, fetches all documents in `contributions` where
`status == "approved"`, transcodes any attached `blog-images` files to
24 kbps mono Opus, uploads them to Cloudflare R2 (boto3 S3 with retry/backoff
and Cloudflare v4 REST fallback), updates `kenyahub/public/r2-audio-index.json`,
merges entries into existing dictionaries (`kenyahub/src/data/dictionaries/<lang>.json`)
or creates/updates staging files (`kenyahub/src/data/dictionaries/staging/<lang>.json`)
for unlisted Kenyan languages, records synced document IDs in
`kenyahub/public/.contributions-synced-lock.json`, and patches Appwrite documents
with `syncedToR2` and `audioUrl`.

Gracefully logs a warning and exits 0 if APPWRITE_API_KEY is unset, Appwrite is
paused/unreachable, or the contributions collection is missing — never fails CI.
"""

from __future__ import annotations

import datetime as dt
import json
import os
from pathlib import Path
import random
import re
import subprocess
import sys
import tempfile
import time
import unicodedata

try:
    import requests
except ImportError:
    requests = None

# Paths (work whether invoked from repo root or kenyahub/)
SCRIPT_DIR = Path(__file__).resolve().parent
KENYAHUB_DIR = SCRIPT_DIR.parent
DICT_DIR = KENYAHUB_DIR / "src" / "data" / "dictionaries"
STAGING_DIR = DICT_DIR / "staging"
PUBLIC_DIR = KENYAHUB_DIR / "public"
LOCK_PATH = PUBLIC_DIR / ".contributions-synced-lock.json"
AUDIO_INDEX_PATH = PUBLIC_DIR / "r2-audio-index.json"

# Appwrite configuration
APPWRITE_ENDPOINT = os.environ.get("APPWRITE_ENDPOINT", "https://fra.cloud.appwrite.io/v1").rstrip("/")
APPWRITE_PROJECT_ID = os.environ.get("APPWRITE_PROJECT_ID", "6a3290500003e21b7fe1").strip()
APPWRITE_DATABASE_ID = os.environ.get("APPWRITE_DATABASE_ID", "kenyahub-db").strip()
APPWRITE_COLLECTION_ID = os.environ.get("APPWRITE_CONTRIBUTIONS_COLLECTION_ID", "contributions").strip()
APPWRITE_AUDIO_BUCKET_ID = os.environ.get("APPWRITE_AUDIO_BUCKET_ID", "blog-images").strip()
APPWRITE_API_KEY = os.environ.get("APPWRITE_API_KEY", "").strip()

# Cloudflare R2 configuration
CF_ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
CF_API_TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "").strip()
R2_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID", "").strip()
R2_SECRET_ACCESS_KEY = (
    os.environ.get("R2_SECRET_ACCESS_KEY", "").strip()
    or os.environ.get("R2_SECRET_KEY", "").strip()
)
R2_BUCKET = os.environ.get("R2_BUCKET_NAME", "kenyahub-audio").strip() or "kenyahub-audio"
AUDIO_CDN_URL = (
    os.environ.get("NEXT_PUBLIC_AUDIO_CDN_URL", "").strip().rstrip("/")
    or "https://audio.kenyahub.me"
)

CUSTOM_LANG_RE = re.compile(r"\[Custom Language:\s*([^\]]+)\]", re.IGNORECASE)
AUDIO_FILE_ID_RE = re.compile(r"\[AudioFileId:\s*([^\]]+)\]", re.IGNORECASE)

CATEGORY_DISPLAY = {
    "greetings": ("Greetings & Farewells", "👋"),
    "numbers": ("Numbers & Counting", "🔢"),
    "family": ("Family & Relationships", "👨‍👩‍👧‍👦"),
    "food": ("Food & Drink", "🍲"),
    "phrases": ("Everyday Phrases", "💬"),
    "nature": ("Nature & Environment", "🌿"),
    "body": ("Body & Health", "🩺"),
    "time": ("Time & Calendar", "⏰"),
    "proverbs": ("Proverbs & Sayings", "📜"),
    "community": ("Community Contributions", "🤝"),
}


def log(msg: str) -> None:
    print(f"[contributions-sync] {msg}", flush=True)


def warn(msg: str) -> None:
    print(f"::warning::[contributions-sync] {msg}", flush=True)


def normalize_lang_slug(lang: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", str(lang or "").lower()).strip("-")


def to_word_slug(text: str) -> str:
    cleaned = re.sub(r"\([^)]*\)", " ", str(text or ""))
    cleaned = re.split(r"[•/;]", cleaned)[0].strip().lower()
    norm = unicodedata.normalize("NFD", cleaned)
    norm = "".join(ch for ch in norm if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", norm).strip("-")
    return slug[:64]


def normalize_pair_key(english: str, translation: str) -> tuple[str, str]:
    e = re.sub(r"\s+", " ", str(english or "").strip().lower())
    t = re.sub(r"\s+", " ", str(translation or "").strip().lower())
    return (e, t)


def load_json_file(path: Path, default):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        warn(f"Failed to parse {path}: {exc}; using default.")
        return default


def save_json_file(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_suffix(path.suffix + ".tmp")
    tmp_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp_path.replace(path)


def load_lock() -> dict:
    raw = load_json_file(LOCK_PATH, {})
    if isinstance(raw, list):
        return {"syncedIds": {str(i): {"syncedAt": ""} for i in raw}, "lastRunAt": ""}
    if not isinstance(raw, dict):
        return {"syncedIds": {}, "lastRunAt": ""}
    synced = raw.get("syncedIds")
    if isinstance(synced, list):
        raw["syncedIds"] = {str(i): {"syncedAt": ""} for i in synced}
    elif not isinstance(synced, dict):
        raw["syncedIds"] = {}
    return raw


def appwrite_headers() -> dict[str, str]:
    return {
        "X-Appwrite-Project": APPWRITE_PROJECT_ID,
        "X-Appwrite-Key": APPWRITE_API_KEY,
        "Content-Type": "application/json",
    }


def fetch_approved_contributions(session: "requests.Session") -> list[dict] | None:
    url = f"{APPWRITE_ENDPOINT}/databases/{APPWRITE_DATABASE_ID}/collections/{APPWRITE_COLLECTION_ID}/documents"
    all_docs: list[dict] = []
    cursor: str | None = None
    page_size = 100

    while True:
        queries = [
            json.dumps({"method": "equal", "attribute": "status", "values": ["approved"]}),
            json.dumps({"method": "limit", "values": [page_size]}),
        ]
        if cursor:
            queries.append(json.dumps({"method": "cursorAfter", "values": [cursor]}))

        try:
            resp = session.get(
                url,
                headers=appwrite_headers(),
                params=[("queries[]", q) for q in queries],
                timeout=30,
            )
        except Exception as exc:
            warn(f"Appwrite unreachable while listing contributions: {exc}")
            return None

        if resp.status_code == 404:
            warn(f"Appwrite collection '{APPWRITE_COLLECTION_ID}' not found (HTTP 404) — skipping sync.")
            return None
        if resp.status_code in (401, 403):
            warn(f"Appwrite authentication/permission error (HTTP {resp.status_code}) — skipping sync.")
            return None
        if resp.status_code >= 500 or resp.status_code == 429:
            warn(f"Appwrite unavailable or paused (HTTP {resp.status_code}) — skipping sync.")
            return None
        if not resp.ok:
            warn(f"Unexpected Appwrite response (HTTP {resp.status_code}): {resp.text[:240]} — skipping sync.")
            return None

        try:
            payload = resp.json()
        except Exception as exc:
            warn(f"Invalid JSON from Appwrite documents endpoint: {exc}")
            return None

        docs = payload.get("documents", [])
        if not isinstance(docs, list) or not docs:
            break

        all_docs.extend(docs)
        if len(docs) < page_size:
            break

        last_id = docs[-1].get("$id")
        if not last_id or last_id == cursor:
            break
        cursor = last_id

    return all_docs


def r2_credentials_available() -> bool:
    return bool(CF_ACCOUNT_ID and ((R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY) or CF_API_TOKEN))


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
                connect_timeout=10,
                read_timeout=20,
                retries={"max_attempts": 2},
            ),
        )
    except Exception as exc:
        warn(f"Failed to initialize boto3 S3 R2 client: {exc}")
        return None


def download_appwrite_audio(session: "requests.Session", audio_file_id: str) -> bytes | None:
    url = f"{APPWRITE_ENDPOINT}/storage/buckets/{APPWRITE_AUDIO_BUCKET_ID}/files/{audio_file_id}/download"
    headers = {
        "X-Appwrite-Project": APPWRITE_PROJECT_ID,
        "X-Appwrite-Key": APPWRITE_API_KEY,
    }
    try:
        resp = session.get(url, headers=headers, timeout=45)
        if not resp.ok:
            warn(f"Failed to download audio file '{audio_file_id}' from Appwrite (HTTP {resp.status_code}).")
            return None
        return resp.content if resp.content else None
    except Exception as exc:
        warn(f"Error downloading audio file '{audio_file_id}' from Appwrite: {exc}")
        return None


def transcode_to_opus(raw_bytes: bytes, suffix: str = ".audio") -> bytes | None:
    if not raw_bytes:
        return None
    with tempfile.TemporaryDirectory(prefix="kh_contrib_audio_") as tmpdir:
        in_path = os.path.join(tmpdir, f"input{suffix}")
        out_path = os.path.join(tmpdir, "output.opus")
        with open(in_path, "wb") as f:
            f.write(raw_bytes)
        try:
            subprocess.run(
                [
                    "ffmpeg",
                    "-y",
                    "-threads",
                    "1",
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
                timeout=30,
            )
            if os.path.exists(out_path) and os.path.getsize(out_path) > 0:
                with open(out_path, "rb") as f:
                    return f.read()
        except FileNotFoundError:
            warn("ffmpeg not found in PATH — skipping audio transcoding.")
        except Exception as exc:
            warn(f"ffmpeg transcoding failed: {exc}")
    return None


def upload_bytes_to_r2(session: "requests.Session", s3_client, r2_key: str, opus_bytes: bytes) -> bool:
    if not opus_bytes:
        return False

    if s3_client is not None:
        for attempt in range(5):
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
                err_str = str(exc)
                err_low = err_str.lower()
                is_transient = any(
                    tok in err_str
                    for tok in (
                        "429",
                        "SlowDown",
                        "500",
                        "502",
                        "503",
                        "504",
                        "InternalError",
                        "RequestTimeout",
                        "ServiceUnavailable",
                        "Throttling",
                    )
                ) or any(tok in err_low for tok in ("timed out", "connection reset", "temporarily unavailable"))
                if is_transient and attempt < 4:
                    wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.1, 1.0))
                    time.sleep(wait_s)
                    continue
                warn(f"S3 R2 upload failed for {r2_key}: {exc}")
                break

    if CF_API_TOKEN and CF_ACCOUNT_ID:
        url = f"https://api.cloudflare.com/client/v4/accounts/{CF_ACCOUNT_ID}/r2/buckets/{R2_BUCKET}/objects/{r2_key}"
        for attempt in range(5):
            if attempt > 0:
                time.sleep(0.25)
            try:
                resp = session.put(
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
                if resp.status_code in (429, 500, 502, 503, 504) and attempt < 4:
                    retry_after = resp.headers.get("Retry-After")
                    if retry_after and retry_after.isdigit():
                        wait_s = min(30.0, float(int(retry_after)) + random.uniform(0.1, 0.8))
                    else:
                        wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.2, 1.2))
                    time.sleep(wait_s)
                    continue
                warn(f"Cloudflare v4 REST R2 upload HTTP {resp.status_code} for {r2_key}: {resp.text[:180]}")
                break
            except Exception as exc:
                if attempt < 4:
                    wait_s = min(30.0, (2 ** (attempt + 1)) + random.uniform(0.2, 1.2))
                    time.sleep(wait_s)
                    continue
                warn(f"Cloudflare v4 REST R2 upload error for {r2_key}: {exc}")
                break

    return False


def extract_contribution_fields(doc: dict) -> dict:
    raw_context = str(doc.get("context") or "").strip()

    custom_lang = str(doc.get("customLanguageName") or "").strip()
    if not custom_lang:
        m_lang = CUSTOM_LANG_RE.search(raw_context)
        if m_lang:
            custom_lang = m_lang.group(1).strip()

    base_lang = str(doc.get("language") or "").strip()
    if custom_lang and (not base_lang or base_lang.lower() in ("other", "custom", "unlisted", "new")):
        resolved_lang_name = custom_lang
    elif custom_lang:
        resolved_lang_name = custom_lang
    else:
        resolved_lang_name = base_lang

    audio_file_id = str(doc.get("audioFileId") or "").strip()
    if not audio_file_id:
        m_audio = AUDIO_FILE_ID_RE.search(raw_context)
        if m_audio:
            audio_file_id = m_audio.group(1).strip()

    cleaned_context = CUSTOM_LANG_RE.sub("", raw_context)
    cleaned_context = AUDIO_FILE_ID_RE.sub("", cleaned_context)
    cleaned_context = re.sub(r"\s{2,}", " ", cleaned_context).strip(" ·•|-")

    contributor_name = str(doc.get("contributorName") or "").strip() or "Community Contributor"
    if cleaned_context:
        entry_context = f"{cleaned_context} • Community contribution by {contributor_name}"
    else:
        entry_context = f"Community contribution by {contributor_name}"

    return {
        "id": str(doc.get("$id") or "").strip(),
        "languageName": resolved_lang_name,
        "languageSlug": normalize_lang_slug(resolved_lang_name),
        "english": str(doc.get("english") or "").strip(),
        "translation": str(doc.get("translation") or "").strip(),
        "pronunciation": str(doc.get("pronunciation") or "").strip(),
        "context": entry_context,
        "category": normalize_lang_slug(str(doc.get("category") or "phrases")) or "phrases",
        "contributorName": contributor_name,
        "submittedAt": str(doc.get("submittedAt") or "").strip(),
        "audioFileId": audio_file_id,
        "audioUrl": str(doc.get("audioUrl") or "").strip(),
        "audioMimeType": str(doc.get("audioMimeType") or "").strip(),
    }


def mime_to_suffix(mime: str) -> str:
    mapping = {
        "audio/mpeg": ".mp3",
        "audio/mp3": ".mp3",
        "audio/wav": ".wav",
        "audio/x-wav": ".wav",
        "audio/mp4": ".m4a",
        "audio/m4a": ".m4a",
        "audio/ogg": ".ogg",
        "audio/opus": ".opus",
        "audio/webm": ".webm",
        "audio/aac": ".aac",
    }
    return mapping.get((mime or "").split(";")[0].strip().lower(), ".audio")


def merge_into_existing_dictionary(dict_path: Path, fields: dict, cdn_url: str | None) -> bool:
    data = load_json_file(dict_path, None)
    if not isinstance(data, dict):
        warn(f"Dictionary {dict_path.name} is not a valid JSON object — skipping merge.")
        return False

    categories = data.get("categories")
    if not isinstance(categories, list):
        categories = []
        data["categories"] = categories

    target_key = normalize_pair_key(fields["english"], fields["translation"])
    today_iso = dt.date.today().isoformat()
    modified = False

    # Deduplicate across all categories
    for cat in categories:
        entries = cat.get("entries")
        if not isinstance(entries, list):
            continue
        for entry in entries:
            if not isinstance(entry, dict):
                continue
            if normalize_pair_key(entry.get("english", ""), entry.get("translation", "")) == target_key:
                if cdn_url and entry.get("audioFile") != cdn_url:
                    entry["audioFile"] = cdn_url
                    data["hasAudio"] = True
                    modified = True
                if fields["pronunciation"] and not str(entry.get("pronunciation") or "").strip():
                    entry["pronunciation"] = fields["pronunciation"]
                    modified = True
                if modified:
                    data["lastUpdated"] = today_iso
                    save_json_file(dict_path, data)
                return True

    # New entry: choose matching category or create one
    cat_id = fields["category"] or "phrases"
    target_cat = None
    for cat in categories:
        if isinstance(cat, dict) and str(cat.get("id") or "").lower() == cat_id:
            target_cat = cat
            break
    if target_cat is None:
        # Try phrases or community fallback if requested category doesn't exist
        for fallback_id in ("phrases", "community"):
            for cat in categories:
                if isinstance(cat, dict) and str(cat.get("id") or "").lower() == fallback_id:
                    target_cat = cat
                    break
            if target_cat is not None:
                break
    if target_cat is None:
        cat_name, cat_icon = CATEGORY_DISPLAY.get(
            cat_id,
            (cat_id.replace("-", " ").title(), "💬"),
        )
        target_cat = {"id": cat_id, "name": cat_name, "icon": cat_icon, "entries": []}
        categories.append(target_cat)

    new_entry: dict = {
        "english": fields["english"],
        "translation": fields["translation"],
        "pronunciation": fields["pronunciation"],
        "context": fields["context"],
    }
    if cdn_url:
        new_entry["audioFile"] = cdn_url
        data["hasAudio"] = True

    target_cat.setdefault("entries", []).append(new_entry)
    data["lastUpdated"] = today_iso
    data["totalEntries"] = sum(
        len(c.get("entries", [])) for c in categories if isinstance(c, dict) and isinstance(c.get("entries"), list)
    )
    save_json_file(dict_path, data)
    return True


def merge_into_staging_dictionary(lang_slug: str, fields: dict, cdn_url: str | None) -> bool:
    staging_path = STAGING_DIR / f"{lang_slug}.json"
    today_iso = dt.date.today().isoformat()

    data = load_json_file(staging_path, None)
    if not isinstance(data, dict):
        data = {
            "languageId": lang_slug,
            "languageName": fields["languageName"] or lang_slug.replace("-", " ").title(),
            "staging": True,
            "lastUpdated": today_iso,
            "totalEntries": 0,
            "entries": [],
        }

    entries = data.get("entries")
    if not isinstance(entries, list):
        entries = []
        data["entries"] = entries

    target_key = normalize_pair_key(fields["english"], fields["translation"])
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        if normalize_pair_key(entry.get("english", ""), entry.get("translation", "")) == target_key:
            modified = False
            if cdn_url and entry.get("audioFile") != cdn_url:
                entry["audioFile"] = cdn_url
                modified = True
            if fields["pronunciation"] and not str(entry.get("pronunciation") or "").strip():
                entry["pronunciation"] = fields["pronunciation"]
                modified = True
            if modified:
                data["lastUpdated"] = today_iso
                save_json_file(staging_path, data)
            return True

    new_entry: dict = {
        "english": fields["english"],
        "translation": fields["translation"],
        "pronunciation": fields["pronunciation"],
        "context": fields["context"],
        "category": fields["category"],
        "contributorName": fields["contributorName"],
        "submittedAt": fields["submittedAt"],
    }
    if cdn_url:
        new_entry["audioFile"] = cdn_url

    entries.append(new_entry)
    data["staging"] = True
    data["lastUpdated"] = today_iso
    data["totalEntries"] = len(entries)
    save_json_file(staging_path, data)
    return True


def patch_appwrite_contribution(session: "requests.Session", doc_id: str, cdn_url: str | None) -> None:
    url = f"{APPWRITE_ENDPOINT}/databases/{APPWRITE_DATABASE_ID}/collections/{APPWRITE_COLLECTION_ID}/documents/{doc_id}"
    patch_data: dict = {"syncedToR2": True}
    if cdn_url:
        patch_data["audioUrl"] = cdn_url
    try:
        resp = session.patch(
            url,
            headers=appwrite_headers(),
            json={"data": patch_data},
            timeout=20,
        )
        if resp.status_code == 400:
            # Expected if syncedToR2 / audioUrl columns have not yet been pushed to Appwrite
            log(f"  [info] Skipped Appwrite PATCH for {doc_id} (HTTP 400 — schema columns likely not pushed yet).")
        elif not resp.ok:
            warn(f"Appwrite PATCH for {doc_id} returned HTTP {resp.status_code}: {resp.text[:180]}")
    except Exception as exc:
        warn(f"Appwrite PATCH for {doc_id} failed: {exc}")


def main() -> int:
    if not APPWRITE_API_KEY:
        warn("APPWRITE_API_KEY is not set — skipping approved contributions sync.")
        return 0

    if requests is None:
        warn("Python 'requests' package is not installed — skipping approved contributions sync.")
        return 0

    session = requests.Session()
    docs = fetch_approved_contributions(session)
    if docs is None:
        return 0

    log(f"Fetched {len(docs)} approved contribution(s) from Appwrite.")
    if not docs:
        return 0

    lock_data = load_lock()
    synced_ids: dict = lock_data["syncedIds"]
    audio_index: dict = load_json_file(AUDIO_INDEX_PATH, {})
    if not isinstance(audio_index, dict):
        audio_index = {}

    r2_ready = r2_credentials_available()
    s3_client = get_s3_client() if r2_ready else None
    if not r2_ready:
        warn("Cloudflare R2 credentials not configured — audio uploads will be skipped while text merges still run.")

    synced_count = 0
    audio_uploaded_count = 0
    staging_count = 0
    audio_index_dirty = False
    lock_dirty = False

    for doc in docs:
        doc_id = str(doc.get("$id") or "").strip()
        if not doc_id:
            continue
        if doc_id in synced_ids:
            continue

        fields = extract_contribution_fields(doc)
        lang_slug = fields["languageSlug"]
        if not lang_slug or not fields["english"] or not fields["translation"]:
            warn(f"Skipping contribution {doc_id}: missing language, english, or translation.")
            continue

        cdn_url: str | None = fields["audioUrl"] or None
        audio_file_id = fields["audioFileId"]

        if audio_file_id and r2_ready:
            word_slug = to_word_slug(fields["translation"]) or to_word_slug(fields["english"]) or doc_id[:16]
            raw_audio = download_appwrite_audio(session, audio_file_id)
            if raw_audio:
                opus_bytes = transcode_to_opus(raw_audio, suffix=mime_to_suffix(fields["audioMimeType"]))
                if opus_bytes:
                    r2_key = f"audio/{lang_slug}/{word_slug}.opus"
                    if upload_bytes_to_r2(session, s3_client, r2_key, opus_bytes):
                        cdn_url = f"{AUDIO_CDN_URL}/{r2_key}"
                        lang_bucket = audio_index.setdefault(lang_slug, {})
                        if isinstance(lang_bucket, dict):
                            lang_bucket[word_slug] = cdn_url
                            audio_index_dirty = True
                        audio_uploaded_count += 1
                        log(f"  Uploaded R2 audio: {cdn_url}")

        dict_path = DICT_DIR / f"{lang_slug}.json"
        is_staging = False
        if dict_path.exists():
            merged = merge_into_existing_dictionary(dict_path, fields, cdn_url)
        else:
            is_staging = True
            merged = merge_into_staging_dictionary(lang_slug, fields, cdn_url)
            if merged:
                staging_count += 1

        if not merged:
            continue

        now_iso = dt.datetime.now(dt.timezone.utc).isoformat().replace("+00:00", "Z")
        synced_ids[doc_id] = {
            "syncedAt": now_iso,
            "languageSlug": lang_slug,
            "staging": is_staging,
            "audioUrl": cdn_url or "",
        }
        lock_dirty = True
        synced_count += 1

        patch_appwrite_contribution(session, doc_id, cdn_url)

    if audio_index_dirty:
        save_json_file(AUDIO_INDEX_PATH, audio_index)
        log(f"Updated {AUDIO_INDEX_PATH.relative_to(KENYAHUB_DIR.parent)}.")

    if lock_dirty:
        lock_data["lastRunAt"] = dt.datetime.now(dt.timezone.utc).isoformat().replace("+00:00", "Z")
        save_json_file(LOCK_PATH, lock_data)
        log(f"Updated {LOCK_PATH.relative_to(KENYAHUB_DIR.parent)} ({len(synced_ids)} total synced IDs).")

    log(
        f"Sync complete: {synced_count} new contribution(s) merged "
        f"({staging_count} staged for unlisted languages), {audio_uploaded_count} audio clip(s) uploaded to R2."
    )
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as exc:
        warn(f"Unhandled exception in sync-approved-contributions.py (non-fatal): {exc}")
        sys.exit(0)
