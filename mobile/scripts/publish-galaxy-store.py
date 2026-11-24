#!/usr/bin/env python3
"""
Publish a signed Android APK to the Samsung Galaxy Store using the
official Galaxy Store Developer API (Content Publish API).

Supports two authentication modes:
  1. Direct long-lived access token:
       GALAXY_STORE_SERVICE_ACCOUNT_ID + GALAXY_STORE_ACCESS_TOKEN
  2. Automatic RS256 JWT -> access token exchange:
       GALAXY_STORE_SERVICE_ACCOUNT_ID + GALAXY_STORE_PRIVATE_KEY (PEM string)

Required environment variables:
  GALAXY_STORE_SERVICE_ACCOUNT_ID : Service Account ID from Seller Portal
  GALAXY_STORE_CONTENT_ID         : 12-digit Content ID of the registered app
  GALAXY_STORE_ACCESS_TOKEN       : (optional if PRIVATE_KEY is provided)
  GALAXY_STORE_PRIVATE_KEY        : (optional if ACCESS_TOKEN is provided)
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path
from typing import Any

import requests

API_BASE = "https://devapi.samsungapps.com"
DEFAULT_UPLOAD_URL = "https://seller.samsungapps.com/galaxyapi/fileUpload"


def strip_emojis(text: str) -> str:
    """Samsung Content Publish API rejects emojis in release notes and metadata."""
    cleaned = re.sub(r"[^\x20-\x7E\n\r\t]", "", text or "")
    return cleaned.strip() or "Bug fixes, theme improvements, and updated Kenyan language content."


def obtain_access_token(service_account_id: str, access_token: str, private_key_pem: str) -> str:
    if access_token.strip():
        return access_token.strip()

    if not private_key_pem.strip():
        raise RuntimeError(
            "Provide either GALAXY_STORE_ACCESS_TOKEN or GALAXY_STORE_PRIVATE_KEY."
        )

    try:
        import jwt  # PyJWT
    except ImportError as exc:
        raise RuntimeError(
            "PyJWT + cryptography are required when using GALAXY_STORE_PRIVATE_KEY. "
            "Install with: pip install PyJWT cryptography requests"
        ) from exc

    now = int(time.time())
    payload = {
        "iss": service_account_id,
        "scopes": ["publishing"],
        "iat": now,
        "exp": now + 1200,  # 20 minutes (Samsung max)
    }
    pem = private_key_pem.replace("\\n", "\n").strip()
    assertion = jwt.encode(payload, pem, algorithm="RS256", headers={"alg": "RS256", "typ": "JWT"})
    if isinstance(assertion, bytes):
        assertion = assertion.decode("utf-8")

    resp = requests.post(
        f"{API_BASE}/auth/accessToken",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {assertion}",
        },
        timeout=30,
    )
    if not resp.ok:
        raise RuntimeError(f"Failed to obtain Galaxy Store access token (HTTP {resp.status_code}): {resp.text}")

    data = resp.json()
    token = data.get("createdItem", {}).get("accessToken") or data.get("accessToken")
    if not token:
        raise RuntimeError(f"Unexpected accessToken response: {json.dumps(data)}")
    return str(token)


def api_headers(access_token: str, service_account_id: str, json_body: bool = False) -> dict[str, str]:
    headers = {
        "Authorization": f"Bearer {access_token}",
        "service-account-id": service_account_id,
    }
    if json_body:
        headers["Content-Type"] = "application/json"
    return headers


def get_content_info(access_token: str, service_account_id: str, content_id: str) -> dict[str, Any]:
    resp = requests.get(
        f"{API_BASE}/seller/contentInfo",
        params={"contentId": content_id},
        headers=api_headers(access_token, service_account_id),
        timeout=30,
    )
    if not resp.ok:
        raise RuntimeError(f"contentInfo failed (HTTP {resp.status_code}): {resp.text}")
    data = resp.json()
    if isinstance(data, list) and data:
        return data[0]
    if isinstance(data, dict):
        return data
    raise RuntimeError(f"Unexpected contentInfo response: {resp.text}")


def create_upload_session(access_token: str, service_account_id: str) -> tuple[str, str]:
    resp = requests.post(
        f"{API_BASE}/seller/createUploadSessionId",
        headers=api_headers(access_token, service_account_id),
        timeout=30,
    )
    if not resp.ok:
        raise RuntimeError(f"createUploadSessionId failed (HTTP {resp.status_code}): {resp.text}")
    data = resp.json()
    session_id = data.get("sessionId")
    upload_url = data.get("url") or DEFAULT_UPLOAD_URL
    if not session_id:
        raise RuntimeError(f"No sessionId returned: {json.dumps(data)}")
    return str(session_id), str(upload_url)


def upload_apk(
    access_token: str,
    service_account_id: str,
    session_id: str,
    upload_url: str,
    apk_path: Path,
) -> str:
    size_mb = apk_path.stat().st_size / (1024 * 1024)
    print(f"Uploading {apk_path.name} ({size_mb:.1f} MB) to {upload_url} ...")
    with apk_path.open("rb") as fh:
        resp = requests.post(
            upload_url,
            headers=api_headers(access_token, service_account_id),
            data={"sessionId": session_id},
            files={"file": (apk_path.name, fh, "application/vnd.android.package-archive")},
            timeout=600,
        )
    if not resp.ok:
        raise RuntimeError(f"fileUpload failed (HTTP {resp.status_code}): {resp.text}")
    data = resp.json()
    file_key = data.get("fileKey")
    if not file_key:
        raise RuntimeError(f"No fileKey returned from fileUpload: {json.dumps(data)}")
    print(f"Upload complete. fileKey={file_key}")
    return str(file_key)


def register_binary_and_update(
    access_token: str,
    service_account_id: str,
    content_id: str,
    content_info: dict[str, Any],
    file_key: str,
    release_notes: str,
    replace_existing: bool,
) -> None:
    existing_binaries = content_info.get("binaryList") or []
    binary_list: list[dict[str, Any]] = []
    if not replace_existing:
        for b in existing_binaries:
            if isinstance(b, dict) and b.get("binarySeq"):
                binary_list.append(
                    {
                        "binarySeq": str(b["binarySeq"]),
                        "gms": b.get("gms", "N"),
                    }
                )
    binary_list.append(
        {
            "filekey": file_key,
            "gms": "Y",
        }
    )

    update_payload: dict[str, Any] = {
        "contentId": content_id,
        "defaultLanguageCode": content_info.get("defaultLanguageCode") or "ENG",
        "paid": content_info.get("paid") or "N",
        "publicationType": content_info.get("publicationType") or "03",
        "newFeature": strip_emojis(release_notes),
        "binaryList": binary_list,
    }
    if content_info.get("appTitle"):
        update_payload["appTitle"] = content_info["appTitle"]
    if content_info.get("standardPrice"):
        update_payload["standardPrice"] = content_info["standardPrice"]

    resp = requests.post(
        f"{API_BASE}/seller/contentUpdate",
        headers=api_headers(access_token, service_account_id, json_body=True),
        json=update_payload,
        timeout=60,
    )
    if not resp.ok:
        raise RuntimeError(f"contentUpdate failed (HTTP {resp.status_code}): {resp.text}")
    print(f"contentUpdate succeeded: {resp.text}")


def submit_content(access_token: str, service_account_id: str, content_id: str) -> None:
    resp = requests.post(
        f"{API_BASE}/seller/contentSubmit",
        headers=api_headers(access_token, service_account_id, json_body=True),
        json={"contentId": content_id},
        timeout=30,
    )
    if not resp.ok:
        raise RuntimeError(f"contentSubmit failed (HTTP {resp.status_code}): {resp.text}")
    print(f"contentSubmit succeeded: {resp.text}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Publish signed APK to Samsung Galaxy Store.")
    parser.add_argument("--apk", required=True, help="Path to signed release APK")
    parser.add_argument("--release-notes", default="", help="Plain-text release notes (no emojis)")
    parser.add_argument("--submit", action="store_true", help="Submit app for Samsung review after upload")
    parser.add_argument(
        "--keep-old-binaries",
        action="store_true",
        help="Keep existing binaries alongside the newly uploaded APK",
    )
    args = parser.parse_args()

    apk_path = Path(args.apk)
    if not apk_path.is_file():
        print(f"ERROR: APK not found at {apk_path}", file=sys.stderr)
        return 1

    service_account_id = os.environ.get("GALAXY_STORE_SERVICE_ACCOUNT_ID", "").strip()
    content_id = os.environ.get("GALAXY_STORE_CONTENT_ID", "").strip()
    access_token_env = os.environ.get("GALAXY_STORE_ACCESS_TOKEN", "").strip()
    private_key_pem = os.environ.get("GALAXY_STORE_PRIVATE_KEY", "").strip()

    if not service_account_id or not content_id:
        print(
            "ERROR: GALAXY_STORE_SERVICE_ACCOUNT_ID and GALAXY_STORE_CONTENT_ID must be set.",
            file=sys.stderr,
        )
        return 1

    token = obtain_access_token(service_account_id, access_token_env, private_key_pem)
    print(f"Authenticated with Samsung Galaxy Store API for contentId={content_id}")

    info = get_content_info(token, service_account_id, content_id)
    print(f"Current app status: {info.get('contentStatus', 'UNKNOWN')} | Title: {info.get('appTitle', 'KenyaHub')}")

    session_id, upload_url = create_upload_session(token, service_account_id)
    file_key = upload_apk(token, service_account_id, session_id, upload_url, apk_path)
    register_binary_and_update(
        token,
        service_account_id,
        content_id,
        info,
        file_key,
        args.release_notes,
        replace_existing=not args.keep_old_binaries,
    )

    if args.submit:
        submit_content(token, service_account_id, content_id)
        print("Submitted to Samsung Galaxy Store for review!")
    else:
        print("Uploaded as draft update (submit_for_review=false). Finish review in Seller Portal when ready.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
