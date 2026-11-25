#!/usr/bin/env python3
"""
One-time idempotent Appwrite schema setup for KenyaHub (Free-Plan Friendly):
- Verifies existing `kenyahub-db` database without hitting the 1-database plan limit.
- Ensures `contributions` collection has all 17 columns & indexes.
- Updates existing `blog-images` storage bucket (Free plan = 1 bucket) to allow both images & contribution audio.
"""

from __future__ import annotations

import os
import sys
import requests

ENDPOINT = "https://fra.cloud.appwrite.io/v1"
PROJECT_ID = "6a3290500003e21b7fe1"
DATABASE_ID = "kenyahub-db"
COLLECTION_ID = "contributions"
BUCKET_ID = "blog-images"

API_KEY = os.environ.get("APPWRITE_API_KEY", "").strip()


def headers() -> dict[str, str]:
    return {
        "X-Appwrite-Project": PROJECT_ID,
        "X-Appwrite-Key": API_KEY,
        "Content-Type": "application/json",
    }


def post_idempotent(label: str, path: str, payload: dict) -> bool:
    url = f"{ENDPOINT}{path}"
    resp = requests.post(url, headers=headers(), json=payload, timeout=30)
    if resp.status_code in (200, 201, 202):
        print(f"  [created] {label}")
        return True
    if resp.status_code == 409:
        print(f"  [exists]  {label}")
        return True
    print(f"  [error]   {label}: HTTP {resp.status_code} — {resp.text[:300]}")
    return False


def main() -> int:
    if not API_KEY:
        print("Error: APPWRITE_API_KEY environment variable is not set.")
        return 1

    ok = True
    print("=== Pushing Appwrite Contributions Schema & Updating Media/Audio Bucket ===")

    # 1. Check Database first (avoids 403 max-databases limit when it already exists)
    db_check = requests.get(f"{ENDPOINT}/databases/{DATABASE_ID}", headers=headers(), timeout=30)
    if db_check.status_code == 200:
        print(f"  [exists]  Database {DATABASE_ID}")
    else:
        ok &= post_idempotent(
            f"Database {DATABASE_ID}",
            "/databases",
            {"databaseId": DATABASE_ID, "name": "KenyaHub Database", "enabled": True},
        )

    # 2. Collection
    ok &= post_idempotent(
        f"Collection {COLLECTION_ID}",
        f"/databases/{DATABASE_ID}/collections",
        {
            "collectionId": COLLECTION_ID,
            "name": "Language Contributions",
            "permissions": [
                'create("any")',
                'read("team:admins")',
                'update("team:admins")',
                'delete("team:admins")',
                'read("label:admin")',
                'update("label:admin")',
                'delete("label:admin")',
            ],
            "documentSecurity": False,
            "enabled": True,
        },
    )

    # 3. String attributes
    string_attrs = [
        ("language", 64, True),
        ("type", 32, True),
        ("english", 500, True),
        ("translation", 500, True),
        ("pronunciation", 255, False),
        ("context", 1000, False),
        ("category", 64, False),
        ("contributorName", 120, True),
        ("contributorEmail", 255, False),
        ("submittedAt", 50, True),
        ("status", 32, True),
        ("customLanguageName", 120, False),
        ("audioFileId", 120, False),
        ("audioUrl", 500, False),
        ("audioMimeType", 64, False),
        ("reviewNotes", 500, False),
    ]
    for key, size, required in string_attrs:
        ok &= post_idempotent(
            f"Attribute {COLLECTION_ID}.{key}",
            f"/databases/{DATABASE_ID}/collections/{COLLECTION_ID}/attributes/string",
            {"key": key, "size": size, "required": required},
        )

    # 4. Boolean attribute
    ok &= post_idempotent(
        f"Attribute {COLLECTION_ID}.syncedToR2",
        f"/databases/{DATABASE_ID}/collections/{COLLECTION_ID}/attributes/boolean",
        {"key": "syncedToR2", "required": False, "default": False},
    )

    # 5. Indexes
    for idx_key, attr in [("idx_status", "status"), ("idx_language", "language")]:
        post_idempotent(
            f"Index {COLLECTION_ID}.{idx_key}",
            f"/databases/{DATABASE_ID}/collections/{COLLECTION_ID}/indexes",
            {"key": idx_key, "type": "key", "attributes": [attr]},
        )

    # 6. Update existing free-tier bucket `blog-images` to allow both images & contribution audio
    bucket_payload = {
        "name": "KenyaHub Media & Contribution Audio",
        "permissions": [
            'create("any")',
            'read("any")',
            'delete("team:admins")',
            'delete("label:admin")',
        ],
        "fileSecurity": False,
        "enabled": True,
        "maximumFileSize": 5242880,
        "allowedFileExtensions": [
            "jpg", "jpeg", "png", "webp", "gif", "avif", "svg",
            "mp3", "wav", "m4a", "ogg", "opus", "webm", "aac",
        ],
        "encryption": True,
        "antivirus": True,
    }
    b_check = requests.get(f"{ENDPOINT}/storage/buckets/{BUCKET_ID}", headers=headers(), timeout=30)
    if b_check.status_code == 200:
        b_put = requests.put(
            f"{ENDPOINT}/storage/buckets/{BUCKET_ID}",
            headers=headers(),
            json=bucket_payload,
            timeout=30,
        )
        if b_put.status_code in (200, 201):
            print(f"  [updated] Storage bucket {BUCKET_ID} (now accepts images + contribution audio)")
        else:
            print(f"  [error]   Update bucket {BUCKET_ID}: HTTP {b_put.status_code} — {b_put.text[:300]}")
            ok = False
    else:
        ok &= post_idempotent(
            f"Storage bucket {BUCKET_ID}",
            "/storage/buckets",
            {"bucketId": BUCKET_ID, **bucket_payload},
        )

    if not ok:
        print("\nCompleted with errors — check APPWRITE_API_KEY scopes.")
        return 1

    print("\nAppwrite contributions schema & blog-images audio/media bucket are 100% ready!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
