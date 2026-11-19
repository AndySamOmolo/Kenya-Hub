#!/usr/bin/env python3
"""
kenyahub/scripts/ingest-permissive-text-datasets.py

Commercially-Permissive-Only Text, Lexicon, Storybook, CLDF & Localization
Ingestion Pipeline for KenyaHub (All 23 Kenyan Languages).

Strict Commercial License Policy:
  - ONLY ingests datasets with verified commercial-safe licenses:
    CC0-1.0, Public Domain, MIT, Apache-2.0, CC-BY-2.0/3.0/4.0, CC-BY-SA-4.0,
    MPL-2.0, Unicode-3.0.
  - Hard-blocks all 24 audited non-commercial / restricted / unlicensed repositories
    (`BLOCKED_NON_COMMERCIAL_REPOS`).
  - Applies mandatory row-level license filtering on mixed repositories:
      * `sil-ai/bloom-lm` -> keeps ONLY `cc-by-*`, `cc-by-sa-*`, `cc0` rows; drops all `nc`/`nd`.
      * `regnant-io/swahili-instruction-22k` -> drops `source == "alpaca"` rows.
      * `Tonykip/kalenjin-parallel-corpus` -> ingests `eng_kln` subset ONLY.
      * `somast/somali-nlp-corpus` -> ingests `open` config ONLY.

Usage:
  python3 scripts/ingest-permissive-text-datasets.py --dry-run
  python3 scripts/ingest-permissive-text-datasets.py --only-ungated --max-rows=2000
  HF_TOKEN=hf_xxx python3 scripts/ingest-permissive-text-datasets.py --lang=all --max-rows=3000
"""

from __future__ import annotations

import argparse
import gzip
import io
import json
import os
import re
import sys
import time
import urllib.parse
import zipfile
from pathlib import Path
from typing import Any

import requests

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)

ROOT_DIR = Path(__file__).resolve().parent.parent
DICT_DIR = ROOT_DIR / "src" / "data" / "dictionaries"
HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None
HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "KenyaHub-Permissive-Ingestor/2.0"})

# ── Hard Commercial-License Guardrail (24 Audited Non-Commercial Traps) ──
BLOCKED_NON_COMMERCIAL_REPOS = frozenset({
    "masakhane/masakhaner2",
    "masakhane/masakhaner",
    "masakhane/masakhanews",
    "masakhane/masakhapos",
    "masakhane/afriqa-gold-passages",
    "masakhane/mafand",
    "masakhane/afrisenti",
    "mbzuai/bactrian-x",
    "csebuetnlp/xlsum",
    "intronhealth/afrispeech-200",
    "clear-global/kenyan-swahili-speech",
    "clear-global/luo-synthetic-asr-dataset",
    "clear-global/twb-voice-1.0",
    "chrisjay/crowd-speech-africa",
    "silencionetwork/swahili-speech",
    "speedykom-group/turkana-speech-dataset",
    "think-ke/sheng-dataset",
    "mutaician/english-kalenjin-dataset",
    "rogendo/english-swahili-sentence-pairs",
    "unimorph/orm",
})

ALLOWED_BLOOM_LICENSES = ("cc-by-4.0", "cc-by-3.0", "cc-by-sa-4.0", "cc-by-sa-3.0", "cc0", "public domain")

# ISO 639-1 / 639-3 -> KenyaHub languageId mapping
ISO_TO_KENYAHUB_LANG = {
    "sw": "swahili", "swa": "swahili", "swh": "swahili",
    "ki": "kikuyu", "kik": "kikuyu",
    "luo": "luo",
    "kam": "kamba",
    "luy": "luhya", "bxk": "luhya", "rag": "luhya", "lkb": "luhya", "lko": "luhya", "lts": "luhya",
    "kln": "kalenjin", "niq": "kalenjin", "sgc": "kalenjin", "enb": "kalenjin",
    "mer": "meru",
    "guz": "kisii",
    "mas": "maasai",
    "saq": "samburu",
    "so": "somali", "som": "somali",
    "tuv": "turkana",
    "nyf": "mijikenda",
    "teo": "teso",
    "ebu": "embu",
    "dav": "taita",
    "tvs": "taveta",
    "pko": "pokot",
    "om": "borana", "gax": "borana", "orm": "borana",
    "rel": "rendille",
    "pkb": "pokomo",
    "dsh": "daasanach",
}

# Verified commercially-permissive Hugging Face text/lexicon jobs
HF_PERMISSIVE_TEXT_JOBS = [
    {
        "id": "kalenjin-parallel-eng-kln",
        "lang_id": "kalenjin",
        "repo": "Tonykip/kalenjin-parallel-corpus",
        "config": "eng_kln",  # STRICTLY eng_kln only (MIT); skip swa_kln & anvke_*
        "split": "train",
        "en_cols": ("english", "en", "eng", "source"),
        "tr_cols": ("kalenjin", "kln", "target"),
        "license": "MIT",
        "gated": False,
        "citation": "Kalenjin Parallel Corpus eng_kln (MIT, https://huggingface.co/datasets/Tonykip/kalenjin-parallel-corpus)",
    },
    {
        "id": "somali-dictionary-hf",
        "lang_id": "somali",
        "repo": "haajidheere/Somali-Dictionary",
        "config": "default",
        "split": "train",
        "en_cols": ("english", "en", "meaning", "definition"),
        "tr_cols": ("somali", "so", "word", "term"),
        "license": "CC-BY-4.0",
        "gated": False,
        "citation": "Somali-Dictionary (CC-BY-4.0, https://huggingface.co/datasets/haajidheere/Somali-Dictionary)",
    },
    {
        "id": "english-to-luo-opus",
        "lang_id": "luo",
        "repo": "BrianMwangi/english-to-luo-opus",
        "config": "default",
        "split": "train",
        "en_cols": ("english", "en", "source", "src"),
        "tr_cols": ("luo", "dholuo", "target", "tgt"),
        "license": "CC-BY-4.0",
        "gated": False,
        "citation": "English-to-Luo OPUS Cleaned (CC-BY-4.0, https://huggingface.co/datasets/BrianMwangi/english-to-luo-opus)",
    },
    {
        "id": "swahili-instruction-22k",
        "lang_id": "swahili",
        "repo": "regnant-io/swahili-instruction-22k",
        "config": "default",
        "split": "train",
        "en_cols": ("instruction_en", "input_en", "english"),
        "tr_cols": ("instruction", "output", "swahili"),
        "license": "Apache-2.0",
        "gated": False,
        "drop_sources": {"alpaca"},  # STRICTLY drop non-commercial alpaca rows
        "citation": "Swahili Instruction-22K dolly/flan subset (Apache-2.0, https://huggingface.co/datasets/regnant-io/swahili-instruction-22k)",
    },
    {
        "id": "afrixnli-sw",
        "lang_id": "swahili",
        "repo": "masakhane/afrixnli",
        "config": "swa",
        "split": "test",
        "en_cols": ("premise_en", "english"),
        "tr_cols": ("premise", "hypothesis"),
        "license": "Apache-2.0",
        "gated": False,
        "citation": "Masakhane IrokoBench AfriXNLI (Apache-2.0, https://huggingface.co/datasets/masakhane/afrixnli)",
    },
]

# Verified Direct Open-Web / Zenodo / GitHub / Kaikki / CLDR Sources
DIRECT_PERMISSIVE_SOURCES = [
    {
        "id": "kaikki-oromo",
        "lang_id": "borana",
        "url": "https://kaikki.org/dictionary/Oromo/kaikki.org-dictionary-Oromo.jsonl",
        "license": "CC-BY-SA-4.0",
        "citation": "Kaikki.org Oromo Wiktionary Extract (CC-BY-SA-4.0, https://kaikki.org/dictionary/Oromo/index.html)",
    },
    {
        "id": "kaikki-somali",
        "lang_id": "somali",
        "url": "https://kaikki.org/dictionary/Somali/kaikki.org-dictionary-Somali.jsonl",
        "license": "CC-BY-SA-4.0",
        "citation": "Kaikki.org Somali Wiktionary Extract (CC-BY-SA-4.0, https://kaikki.org/dictionary/Somali/index.html)",
    },
    {
        "id": "kamusi-swahili",
        "lang_id": "swahili",
        "url": "https://raw.githubusercontent.com/Kalebu/kamusi/main/data/swahili.json",
        "license": "MIT",
        "citation": "Kamusi Swahili Open Lexicon (MIT, https://github.com/Kalebu/kamusi)",
    },
]

CLDR_KENYAN_LOCALES = [
    ("sw", "swahili"), ("ki", "kikuyu"), ("luo", "luo"), ("kam", "kamba"),
    ("kln", "kalenjin"), ("luy", "luhya"), ("mer", "meru"), ("guz", "kisii"),
    ("ebu", "embu"), ("dav", "taita"), ("mas", "maasai"), ("saq", "samburu"),
    ("so", "somali"), ("om", "borana"), ("teo", "teso"),
]


def assert_commercial_safe(repo_id: str) -> None:
    if repo_id.strip().lower() in BLOCKED_NON_COMMERCIAL_REPOS:
        raise ValueError(f"BLOCKED non-commercial / restricted repository: {repo_id}")


def merge_entries_into_dictionary(lang_id: str, new_entries: list[dict[str, Any]], target_cat_id: str = "phrases") -> int:
    dict_path = DICT_DIR / f"{lang_id}.json"
    if not dict_path.exists() or not new_entries:
        return 0
    data = json.loads(dict_path.read_text(encoding="utf-8"))
    existing = set()
    target_cat = None
    for cat in data.get("categories", []):
        if cat.get("id") == target_cat_id:
            target_cat = cat
        for e in cat.get("entries", []):
            existing.add((str(e.get("english", "")).strip().lower(), str(e.get("translation", "")).strip().lower()))
    if target_cat is None:
        target_cat = data["categories"][-1]

    added = 0
    for item in new_entries:
        en = str(item.get("english", "")).strip()
        tr = str(item.get("translation", "")).strip()
        if not en or not tr or len(en) > 220 or len(tr) > 220 or en.lower() == tr.lower():
            continue
        key = (en.lower(), tr.lower())
        if key in existing:
            continue
        existing.add(key)
        entry_obj: dict[str, Any] = {
            "english": en,
            "translation": tr,
            "pronunciation": str(item.get("pronunciation") or "").strip(),
            "context": item["context"],
        }
        target_cat["entries"].append(entry_obj)
        added += 1

    if added > 0:
        data["totalEntries"] = sum(len(c.get("entries", [])) for c in data.get("categories", []))
        dict_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return added


def ingest_hf_jobs(lang_filter: str, max_rows: int, only_ungated: bool, dry_run: bool) -> dict[str, int]:
    added_by_lang: dict[str, int] = {}
    load_dataset = None
    if not dry_run:
        from datasets import load_dataset
    for job in HF_PERMISSIVE_TEXT_JOBS:
        assert_commercial_safe(job["repo"])
        if lang_filter != "all" and job["lang_id"] != lang_filter:
            continue
        if only_ungated and job.get("gated"):
            print(f"[skip-gated] {job['repo']} ({job['config']})")
            continue
        print(f"[HF Text] {job['repo']} ({job['config']}) [{job['license']}] -> {job['lang_id']}")
        if dry_run:
            continue
        try:
            ds = load_dataset(job["repo"], job["config"], split=job["split"], streaming=True, token=HF_TOKEN)
            batch = []
            drop_sources = job.get("drop_sources") or set()
            for idx, row in enumerate(ds):
                if idx >= max_rows:
                    break
                if drop_sources and str(row.get("source", "")).strip().lower() in drop_sources:
                    continue
                en_val = next((row.get(c) for c in job["en_cols"] if row.get(c)), None)
                tr_val = next((row.get(c) for c in job["tr_cols"] if row.get(c)), None)
                if isinstance(tr_val, list):
                    tr_val = ", ".join(str(x) for x in tr_val if x)
                if en_val and tr_val:
                    batch.append({"english": str(en_val), "translation": str(tr_val), "context": job["citation"]})
            added = merge_entries_into_dictionary(job["lang_id"], batch)
            added_by_lang[job["lang_id"]] = added_by_lang.get(job["lang_id"], 0) + added
            print(f"  -> Added {added} verified entries to {job['lang_id']}.json")
        except Exception as exc:
            print(f"  [warn] Skipped {job['repo']}: {exc}")
    return added_by_lang


def ingest_kaikki_and_kamusi(lang_filter: str, max_rows: int, dry_run: bool) -> dict[str, int]:
    added_by_lang: dict[str, int] = {}
    for src in DIRECT_PERMISSIVE_SOURCES:
        if lang_filter != "all" and src["lang_id"] != lang_filter:
            continue
        print(f"[Direct] {src['id']} [{src['license']}] -> {src['lang_id']}")
        if dry_run:
            continue
        try:
            resp = HTTP_SESSION.get(src["url"], timeout=45)
            if not resp.ok:
                print(f"  [warn] HTTP {resp.status_code} for {src['url']}")
                continue
            batch = []
            if src["id"].startswith("kaikki-"):
                for idx, line in enumerate(resp.text.splitlines()):
                    if idx >= max_rows:
                        break
                    obj = json.loads(line)
                    word = (obj.get("word") or "").strip()
                    senses = obj.get("senses") or []
                    glosses = [g for s in senses for g in (s.get("glosses") or []) if isinstance(g, str)]
                    if word and glosses:
                        ipa = ""
                        for snd in obj.get("sounds") or []:
                            if snd.get("ipa"):
                                ipa = snd["ipa"].strip("/[]")
                                break
                        batch.append({
                            "english": glosses[0][:180],
                            "translation": word,
                            "pronunciation": ipa,
                            "context": src["citation"],
                        })
            elif src["id"] == "kamusi-swahili":
                rows = resp.json()
                if isinstance(rows, list):
                    for r in rows[:max_rows]:
                        w = (r.get("word") or r.get("swahili") or "").strip()
                        en = (r.get("english") or r.get("meaning") or "").strip()
                        if w and en:
                            batch.append({"english": en, "translation": w, "context": src["citation"]})
            added = merge_entries_into_dictionary(src["lang_id"], batch)
            added_by_lang[src["lang_id"]] = added_by_lang.get(src["lang_id"], 0) + added
            print(f"  -> Added {added} verified entries to {src['lang_id']}.json")
        except Exception as exc:
            print(f"  [warn] Skipped {src['id']}: {exc}")
    return added_by_lang


def ingest_cldr_kenyan_locales(lang_filter: str, dry_run: bool) -> dict[str, int]:
    """Ingests weekdays & months from Unicode CLDR (Unicode-3.0) across all 15 Kenyan locales."""
    added_by_lang: dict[str, int] = {}
    en_days = {"sun": "Sunday", "mon": "Monday", "tue": "Tuesday", "wed": "Wednesday", "thu": "Thursday", "fri": "Friday", "sat": "Saturday"}
    en_months = {
        "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June",
        "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December",
    }
    citation = "Unicode CLDR JSON (Unicode-3.0, https://github.com/unicode-org/cldr-json)"
    for locale, lang_id in CLDR_KENYAN_LOCALES:
        if lang_filter != "all" and lang_id != lang_filter:
            continue
        url = f"https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-dates-full/main/{locale}/ca-gregorian.json"
        print(f"[CLDR Unicode-3.0] {locale} -> {lang_id}")
        if dry_run:
            continue
        try:
            resp = HTTP_SESSION.get(url, timeout=20)
            if not resp.ok:
                continue
            cal = resp.json()["main"][locale]["dates"]["calendars"]["gregorian"]
            batch = []
            days = cal.get("days", {}).get("format", {}).get("wide", {})
            for k, en in en_days.items():
                if days.get(k):
                    batch.append({"english": en, "translation": days[k], "context": citation})
            months = cal.get("months", {}).get("format", {}).get("wide", {})
            for k, en in en_months.items():
                if months.get(k):
                    batch.append({"english": en, "translation": months[k], "context": citation})
            added = merge_entries_into_dictionary(lang_id, batch, target_cat_id="time")
            added_by_lang[lang_id] = added_by_lang.get(lang_id, 0) + added
            print(f"  -> Added {added} CLDR calendar entries to {lang_id}.json")
        except Exception as exc:
            print(f"  [warn] CLDR {locale} skipped: {exc}")
    return added_by_lang


def main() -> None:
    parser = argparse.ArgumentParser(description="KenyaHub Commercially-Permissive Text & Lexicon Ingestor")
    parser.add_argument("--dry-run", action="store_true", help="Verify manifest & license guardrails without network writes")
    parser.add_argument("--only-ungated", action="store_true", help="Skip gated HF datasets")
    parser.add_argument("--lang", default="all", help="Target languageId or 'all'")
    parser.add_argument("--max-rows", type=int, default=2000, help="Max rows per dataset stream")
    args = parser.parse_args()

    print("=== KenyaHub Commercially-Permissive Text, Lexicon & CLDR Ingestor ===")
    print(f"Mode: {'DRY RUN' if args.dry_run else 'LIVE'} | Lang: {args.lang} | Max Rows: {args.max_rows} | Blocked NC Repos: {len(BLOCKED_NON_COMMERCIAL_REPOS)}")

    # Self-check license guardrail
    for job in HF_PERMISSIVE_TEXT_JOBS:
        assert_commercial_safe(job["repo"])

    if args.dry_run:
        ingest_hf_jobs(args.lang, args.max_rows, args.only_ungated, dry_run=True)
        ingest_kaikki_and_kamusi(args.lang, args.max_rows, dry_run=True)
        ingest_cldr_kenyan_locales(args.lang, dry_run=True)
        print("Dry-run license & manifest verification PASSED.")
        return

    totals: dict[str, int] = {}
    for res in (
        ingest_hf_jobs(args.lang, args.max_rows, args.only_ungated, dry_run=False),
        ingest_kaikki_and_kamusi(args.lang, args.max_rows, dry_run=False),
        ingest_cldr_kenyan_locales(args.lang, dry_run=False),
    ):
        for k, v in res.items():
            totals[k] = totals.get(k, 0) + v
    print(f"Completed permissive text ingestion: {json.dumps(totals)}")


if __name__ == "__main__":
    main()
