#!/usr/bin/env python3
"""
Publish a signed Android APK to the Amazon Appstore using the
official Amazon App Submission API (v1).

Required environment variables:
  AMAZON_CLIENT_ID      : Login with Amazon Security Profile Client ID
  AMAZON_CLIENT_SECRET  : Login with Amazon Security Profile Client Secret
  AMAZON_APP_ID         : Amazon App ID (e.g. amzn1.devportal.mobileapp.xxxx)
"""

from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path
from typing import Any

import requests

LWA_TOKEN_URL = "https://api.amazon.com/auth/o2/token"
API_BASE = "https://developer.amazon.com/api/appstore/v1"


def get_lwa_token(client_id: str, client_secret: str) -> str:
    resp = requests.post(
        LWA_TOKEN_URL,
        data={
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret,
            "scope": "appstore::apps:readwrite",
        },
        timeout=30,
    )
    if not resp.ok:
        raise RuntimeError(f"LWA token request failed (HTTP {resp.status_code}): {resp.text}")
    token = resp.json().get("access_token")
    if not token:
        raise RuntimeError(f"No access_token in LWA response: {resp.text}")
    return str(token)


def auth_headers(token: str, extra: dict[str, str] | None = None) -> dict[str, str]:
    headers = {"Authorization": f"Bearer {token}"}
    if extra:
        headers.update(extra)
    return headers


def get_or_create_edit(token: str, app_root: str) -> tuple[str, str]:
    resp = requests.get(f"{app_root}/edits", headers=auth_headers(token), timeout=30)
    if resp.ok:
        data = resp.json() if resp.text.strip() else {}
        if isinstance(data, dict) and data.get("id"):
            etag = resp.headers.get("ETag", "").strip()
            print(f"Reusing active edit: {data['id']}")
            return str(data["id"]), etag

    resp = requests.post(f"{app_root}/edits", headers=auth_headers(token), timeout=30)
    if not resp.ok:
        raise RuntimeError(f"Failed to create edit (HTTP {resp.status_code}): {resp.text}")
    data = resp.json()
    edit_id = data.get("id")
    etag = resp.headers.get("ETag", "").strip()
    if not edit_id:
        raise RuntimeError(f"No edit id returned: {resp.text}")
    print(f"Created new edit: {edit_id}")
    return str(edit_id), etag


def fetch_edit_etag(token: str, app_root: str, edit_id: str) -> str:
    resp = requests.get(f"{app_root}/edits/{edit_id}", headers=auth_headers(token), timeout=30)
    if not resp.ok:
        raise RuntimeError(f"Failed to fetch edit ETag (HTTP {resp.status_code}): {resp.text}")
    return resp.headers.get("ETag", "").strip()


def upload_or_replace_apk(token: str, app_root: str, edit_id: str, apk_path: Path) -> None:
    size_mb = apk_path.stat().st_size / (1024 * 1024)
    apks_resp = requests.get(
        f"{app_root}/edits/{edit_id}/apks",
        headers=auth_headers(token),
        timeout=30,
    )
    existing_apks: list[dict[str, Any]] = apks_resp.json() if apks_resp.ok and apks_resp.text.strip() else []

    apk_bytes = apk_path.read_bytes()
    if isinstance(existing_apks, list) and existing_apks:
        apk_id = existing_apks[0].get("id")
        apk_detail = requests.get(
            f"{app_root}/edits/{edit_id}/apks/{apk_id}",
            headers=auth_headers(token),
            timeout=30,
        )
        apk_etag = apk_detail.headers.get("ETag", "").strip()
        print(f"Replacing existing APK {apk_id} with {apk_path.name} ({size_mb:.1f} MB)...")
        resp = requests.put(
            f"{app_root}/edits/{edit_id}/apks/{apk_id}/replace",
            headers=auth_headers(
                token,
                {
                    "Content-Type": "application/vnd.android.package-archive",
                    "fileName": apk_path.name,
                    **({"If-Match": apk_etag} if apk_etag else {}),
                },
            ),
            data=apk_bytes,
            timeout=600,
        )
    else:
        print(f"Uploading new APK {apk_path.name} ({size_mb:.1f} MB)...")
        resp = requests.post(
            f"{app_root}/edits/{edit_id}/apks/upload",
            headers=auth_headers(
                token,
                {
                    "Content-Type": "application/vnd.android.package-archive",
                    "fileName": apk_path.name,
                },
            ),
            data=apk_bytes,
            timeout=600,
        )

    if not resp.ok:
        raise RuntimeError(f"APK upload failed (HTTP {resp.status_code}): {resp.text}")
    print(f"APK uploaded successfully: {resp.text[:200]}")


def update_release_notes(token: str, app_root: str, edit_id: str, release_notes: str, locale: str = "en-US") -> None:
    if not release_notes.strip():
        return
    listing_url = f"{app_root}/edits/{edit_id}/listings/{locale}"
    get_resp = requests.get(listing_url, headers=auth_headers(token), timeout=30)
    if not get_resp.ok:
        print(f"Skipping release notes update (listing {locale} returned HTTP {get_resp.status_code}).")
        return
    listing = get_resp.json()
    etag = get_resp.headers.get("ETag", "").strip()
    listing["recentChanges"] = release_notes.strip()[:4000]
    put_resp = requests.put(
        listing_url,
        headers=auth_headers(
            token,
            {
                "Content-Type": "application/json",
                **({"If-Match": etag} if etag else {}),
            },
        ),
        json=listing,
        timeout=30,
    )
    if not put_resp.ok:
        print(f"Warning: could not update recentChanges (HTTP {put_resp.status_code}): {put_resp.text}")
    else:
        print(f"Updated {locale} recentChanges.")


def commit_edit(token: str, app_root: str, edit_id: str) -> None:
    etag = fetch_edit_etag(token, app_root, edit_id)
    resp = requests.post(
        f"{app_root}/edits/{edit_id}/commit",
        headers=auth_headers(token, {"If-Match": etag} if etag else None),
        timeout=60,
    )
    if not resp.ok:
        raise RuntimeError(f"Commit failed (HTTP {resp.status_code}): {resp.text}")
    print("Committed edit — app submitted to Amazon Appstore for review!")


def main() -> int:
    parser = argparse.ArgumentParser(description="Publish signed APK to Amazon Appstore.")
    parser.add_argument("--apk", required=True, help="Path to signed release APK")
    parser.add_argument("--release-notes", default="", help="Recent changes text")
    parser.add_argument("--commit", action="store_true", help="Commit edit and submit for Amazon review")
    args = parser.parse_args()

    apk_path = Path(args.apk)
    if not apk_path.is_file():
        print(f"ERROR: APK not found at {apk_path}", file=sys.stderr)
        return 1

    client_id = os.environ.get("AMAZON_CLIENT_ID", "").strip()
    client_secret = os.environ.get("AMAZON_CLIENT_SECRET", "").strip()
    app_id = os.environ.get("AMAZON_APP_ID", "").strip()

    if not client_id or not client_secret or not app_id:
        print(
            "ERROR: AMAZON_CLIENT_ID, AMAZON_CLIENT_SECRET, and AMAZON_APP_ID must be set.",
            file=sys.stderr,
        )
        return 1

    token = get_lwa_token(client_id, client_secret)
    app_root = f"{API_BASE}/applications/{app_id}"
    edit_id, _ = get_or_create_edit(token, app_root)
    upload_or_replace_apk(token, app_root, edit_id, apk_path)
    update_release_notes(token, app_root, edit_id, args.release_notes)

    if args.commit:
        commit_edit(token, app_root, edit_id)
    else:
        print("Uploaded APK to draft Edit (submit_for_review=false). Finish in Amazon Developer Console when ready.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
