#!/usr/bin/env python3
"""
One-time idempotent Appwrite schema setup for KenyaHub:
- Ensures `kenyahub-db` -> `contributions` collection has all core + audio/custom-language columns and indexes.
- Ensures `contribution-audio` storage bucket exists (5 MB max, audio formats).
Safe to re-run: HTTP 409 (already exists) is treated as OK.
"""

from __future__ import annotations

import os
import sys
import requests

ENDPOINT = "https://fra.cloud.appwrite.io/v1"
PROJECT_ID = "6a3290500003e21b7fe1"
DATABASE_ID = "kenyahub-db"
COLLECTION_ID = "contributions"
BUCKET_ID = "contribution-audio"

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
    print("=== Pushing Appwrite Contributions Schema & Audio Bucket ===")

    # 1. Database
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

    # 3. String attributes (core 11 + 5 new optional string columns)
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
        payload = {"key": key, "size": size, "required": required}
        ok &= post_idempotent(
            f"Attribute {COLLECTION_ID}.{key}",
            f"/databases/{DATABASE_ID}/collections/{COLLECTION_ID}/attributes/string",
            payload,
        )

    # 4. Boolean attribute: syncedToR2
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

    # 6. Storage bucket: contribution-audio
    ok &= post_idempotent(
        f"Storage bucket {BUCKET_ID}",
        "/storage/buckets",
        {
            "bucketId": BUCKET_ID,
            "name": "Contribution Audio",
            "permissions": [
                'create("any")',
                'read("any")',
                'delete("team:admins")',
                'delete("label:admin")',
            ],
            "fileSecurity": False,
            "enabled": True,
            "maximumFileSize": 5242880,
            "allowedFileExtensions": ["mp3", "wav", "m4a", "ogg", "opus", "webm", "aac"],
            "encryption": True,
            "antivirus": True,
        },
    )

    if not ok:
        print("\nCompleted with errors — verify your APPWRITE_API_KEY has databases.write, collections.write, attributes.write, and buckets.write scopes.")
        return 1

    print("\nAppwrite schema & contribution-audio bucket are ready!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
