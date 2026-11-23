#!/usr/bin/env python3
"""
kenyahub/scripts/ingest-permissive-text-datasets.py

Complete Commercially-Permissive-Only Text, Lexicon, PanLex CC0, Unicode CLDR 49,
Kaikki Raw Wiktextract, Parallel Corpora (OPUS Wikimedia, Mbogho Zenodo, Tatoeba text-only,
Strathmore Sheng), OER Storybooks & Benchmark Ingestion Pipeline for KenyaHub.

Zero `manifest_only` stubs: every dataset listed here actively streams or downloads
when executed with internet access, while strictly enforcing the 31-item Exclusion
Watchlist from `scripts/lib/license_guard.py`.
"""

from __future__ import annotations

import argparse
import bz2
import csv
import gzip
import io
import json
import os
import re
import sys
import time
import zipfile
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from lib.license_guard import (
    BLOCKED_NON_COMMERCIAL_REPOS,
    assert_repo_allowed,
    is_blocked_url,
    is_permissive_oer_row,
    is_secular_opus_luo_row,
)

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)

ROOT_DIR = SCRIPT_DIR.parent
DICT_DIR = ROOT_DIR / "src" / "data" / "dictionaries"
STAGING_DICT_DIR = DICT_DIR / "staging"
LOCALES_DIR = ROOT_DIR / "src" / "data" / "locales"
BENCHMARKS_DIR = ROOT_DIR / "src" / "data" / "benchmarks"
READERS_DIR = ROOT_DIR / "src" / "data" / "readers"
FREQ_DIR = ROOT_DIR / "src" / "data" / "frequency-lists"
TEXT_LOCK_PATH = ROOT_DIR / "public" / ".text-ingested-lock.json"
FORCE_REINGEST = os.environ.get("FORCE_REINGEST", "").strip().lower() in {"1", "true", "yes"}
RETRY_PENDING_ONLY = os.environ.get("RETRY_PENDING_ONLY", "true").strip().lower() in {"1", "true", "yes"}


def _norm_key(en: str, tr: str) -> tuple[str, str]:
    return (
        " ".join(str(en or "").strip().lower().split()).strip(".,;:!?"),
        " ".join(str(tr or "").strip().lower().split()).strip(".,;:!?"),
    )


def _is_gated_error(exc: Exception) -> bool:
    msg = str(exc).lower()
    return any(tok in msg for tok in ("gated", "401", "403", "forbidden", "access to dataset", "authorized", "must be authenticated"))


def load_text_lock() -> dict:
    if TEXT_LOCK_PATH.exists():
        try:
            return json.loads(TEXT_LOCK_PATH.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_text_lock(lock: dict) -> None:
    TEXT_LOCK_PATH.parent.mkdir(parents=True, exist_ok=True)
    lock["updatedAt"] = datetime.now(timezone.utc).isoformat()
    TEXT_LOCK_PATH.write_text(json.dumps(lock, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

HF_TOKEN = os.environ.get("HF_TOKEN", "").strip() or None
HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "KenyaHub-Permissive-Ingestor/3.1"})

def _stream_hf_parquet_fallback(repo: str, config: str | None = None, split: str = "train", columns: list[str] | None = None):
    """Direct pyarrow/huggingface_hub parquet row generator when datasets hits schema CastError across shards."""
    import pyarrow.parquet as pq
    from huggingface_hub import HfApi, hf_hub_download

    api = HfApi(token=HF_TOKEN)
    files = api.list_repo_files(repo_id=repo, repo_type="dataset")
    pq_files = [f for f in files if f.endswith(".parquet")]
    if config and config != "default":
        cfg_matches = [f for f in pq_files if f"/{config}/" in f or f.startswith(f"{config}/") or config in f]
        if cfg_matches:
            pq_files = cfg_matches
    split_matches = [f for f in pq_files if split in f.lower()]
    if split_matches:
        pq_files = split_matches
    for rel_path in pq_files[:3]:
        local_p = hf_hub_download(repo_id=repo, filename=rel_path, repo_type="dataset", token=HF_TOKEN)
        pf = pq.ParquetFile(local_p)
        avail = set(pf.schema_arrow.names)
        proj = [c for c in (columns or []) if c in avail] or None
        for batch in pf.iter_batches(batch_size=500, columns=proj):
            for row in batch.to_pylist():
                yield row


def load_hf_stream(repo: str, config: str | None = None, split: str = "train", columns: list[str] | None = None):
    """Load a Hugging Face dataset in streaming mode with trust_remote_code=True, optional column projection, and parquet CastError fallback."""
    assert_repo_allowed(repo)
    from datasets import load_dataset

    kwargs: dict[str, Any] = {"split": split, "streaming": True, "token": HF_TOKEN, "trust_remote_code": True}
    if columns:
        kwargs["columns"] = columns
    args = (repo, config) if config else (repo,)
    try:
        ds = load_dataset(*args, **kwargs)
    except (TypeError, ValueError):
        kwargs.pop("trust_remote_code", None)
        try:
            ds = load_dataset(*args, **kwargs)
        except (TypeError, ValueError):
            kwargs.pop("columns", None)
            ds = load_dataset(*args, **kwargs)
    except Exception as exc:
        if "CastError" in type(exc).__name__ or "Couldn't cast" in str(exc):
            return _stream_hf_parquet_fallback(repo, config, split, columns=columns)
        raise

    def _safe_iter():
        try:
            for item in ds:
                yield item
        except Exception as exc:
            if "CastError" in type(exc).__name__ or "Couldn't cast" in str(exc):
                yield from _stream_hf_parquet_fallback(repo, config, split, columns=columns)
            else:
                raise

    return _safe_iter()


ISO_TO_KENYAHUB_LANG: dict[str, str] = {
    "sw": "swahili", "swa": "swahili", "swh": "swahili",
    "dug": "mijikenda", "dig": "mijikenda", "nyf": "mijikenda",
    "thk": "meru", "enb": "kalenjin", "oki": "kalenjin", "sgc": "kalenjin",
    "lwg": "luhya", "pkb": "pokomo", "tvs": "taveta", "rel": "rendille",
    "saq": "samburu", "tuv": "turkana", "teo": "teso", "gaz": "borana",
    "ki": "kikuyu", "kik": "kikuyu",
    "luo": "luo",
    "kam": "kamba",
    "luy": "luhya", "bxk": "luhya", "rag": "luhya", "lkb": "luhya", "lko": "luhya", "lts": "luhya", "lsm": "luhya",
    "kln": "kalenjin", "niq": "kalenjin", "sgc": "kalenjin", "enb": "kalenjin",
    "mer": "meru", "thk": "meru", "cuh": "meru",
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
    "om": "borana", "gax": "borana", "gaz": "borana", "orm": "borana",
    "rel": "rendille",
    "pkb": "pokomo",
    "dsh": "daasanach",
}

PANLEX_STAGING_ISOS = frozenset({"bxk", "dhl", "kuj", "rag", "lsm", "thk", "cuh", "sxb", "kcn", "bji"})

HF_PERMISSIVE_TEXT_JOBS: list[dict[str, Any]] = [
    {
        "id": "kalenjin-parallel-eng-kln",
        "lang_id": "kalenjin",
        "repo": "Tonykip/kalenjin-parallel-corpus",
        "config": "eng_kln",
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
        "id": "en-so-parallel-clean-8k",
        "lang_id": "somali",
        "repo": "tufaax/en-so-parallel-clean-8k",
        "config": "default",
        "split": "train",
        "en_cols": ("en", "english", "source"),
        "tr_cols": ("so", "somali", "target"),
        "license": "CC-BY-4.0",
        "gated": False,
        "citation": "en-so Parallel Clean 8k (CC-BY-4.0, https://huggingface.co/datasets/tufaax/en-so-parallel-clean-8k)",
    },
    {
        "id": "english-to-luo-opus-secular",
        "lang_id": "luo",
        "repo": "BrianMwangi/english-to-luo-opus",
        "config": "v1.0",
        "split": "train",
        "en_cols": ("english_clean", "english", "en", "source", "src"),
        "tr_cols": ("luo_clean", "luo", "dholuo", "target", "tgt"),
        "license": "CC-BY-4.0",
        "gated": False,
        "secular_opus_luo_filter": True,
        "citation": "English-to-Luo OPUS Secular Subset (CC-BY-4.0, https://huggingface.co/datasets/BrianMwangi/english-to-luo-opus)",
    },
    {
        "id": "ai4agric-mt-eng-swa",
        "lang_id": "swahili",
        "repo": "AI4Agric/MT-Eng-Swa",
        "config": "default",
        "split": "train",
        "en_cols": ("english", "en", "source", "src"),
        "tr_cols": ("swahili", "swa", "sw", "target", "tgt"),
        "target_cat": "phrases",
        "license": "CC-BY-4.0",
        "gated": True,
        "citation": "AI4Agric MT-Eng-Swa Agronomy Parallel Corpus (CC-BY-4.0, https://huggingface.co/datasets/AI4Agric/MT-Eng-Swa)",
    },
    {
        "id": "ai4agric-mt-eng-kik",
        "lang_id": "kikuyu",
        "repo": "AI4Agric/MT-Eng-Kik",
        "config": "default",
        "split": "train",
        "en_cols": ("english", "en", "source", "src"),
        "tr_cols": ("kikuyu", "kik", "ki", "target", "tgt"),
        "target_cat": "phrases",
        "license": "CC-BY-4.0",
        "gated": True,
        "citation": "AI4Agric MT-Eng-Kik Agronomy Parallel Corpus (CC-BY-4.0, https://huggingface.co/datasets/AI4Agric/MT-Eng-Kik)",
    },
    {
        "id": "ai4agric-mt-eng-kln",
        "lang_id": "kalenjin",
        "repo": "AI4Agric/MT-Eng-Kln",
        "config": "default",
        "split": "train",
        "en_cols": ("english", "en", "source", "src"),
        "tr_cols": ("kalenjin", "kln", "target", "tgt"),
        "target_cat": "phrases",
        "license": "CC-BY-4.0",
        "gated": True,
        "citation": "AI4Agric MT-Eng-Kln Agronomy Parallel Corpus (CC-BY-4.0, https://huggingface.co/datasets/AI4Agric/MT-Eng-Kln)",
    },
    {
        "id": "google-wmt24pp-en-sw-ke",
        "lang_id": "swahili",
        "repo": "google/wmt24pp",
        "config": "en-sw_KE",
        "split": "train",
        "en_cols": ("source", "en", "english"),
        "tr_cols": ("target", "sw_KE", "sw", "swahili"),
        "target_cat": "phrases",
        "license": "Apache-2.0",
        "gated": False,
        "citation": "Google WMT24++ en-sw_KE (Apache-2.0, https://huggingface.co/datasets/google/wmt24pp)",
    },
    *[
        {
            "id": f"allenai-nllb-eng-{nc.split('_')[0]}",
            "lang_id": lid,
            "repo": "allenai/nllb",
            "config": f"eng_Latn-{nc}",
            "split": "train",
            "en_cols": ("eng_Latn", "en"),
            "tr_cols": (nc, lid),
            "target_cat": "phrases",
            "license": "ODC-By-1.0",
            "gated": False,
            "citation": f"OPUS NLLB Mined Bitext eng_Latn-{nc} (ODC-By-1.0, https://huggingface.co/datasets/allenai/nllb)",
        }
        for nc, lid in (("swh_Latn", "swahili"), ("som_Latn", "somali"), ("gaz_Latn", "borana"), ("kik_Latn", "kikuyu"), ("kam_Latn", "kamba"), ("luo_Latn", "luo"))
    ]
]

HF_BENCHMARK_JOBS: list[dict[str, Any]] = [
    {"id": "masakhane-afrixnli-swa", "repo": "masakhane/afrixnli", "config": "swa", "splits": ("validation", "test"), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "masakhane-afrixnli-orm", "repo": "masakhane/afrixnli", "config": "orm", "splits": ("validation", "test"), "license": "Apache-2.0", "langs": ["borana"]},
    {"id": "masakhane-afrimmlu-swa", "repo": "masakhane/afrimmlu", "config": "swa", "splits": ("test",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "masakhane-afrimmlu-orm", "repo": "masakhane/afrimmlu", "config": "orm", "splits": ("test",), "license": "Apache-2.0", "langs": ["borana"]},
    {"id": "masakhane-afrimgsm-swa", "repo": "masakhane/afrimgsm", "config": "swa", "splits": ("test",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "masakhane-afrimgsm-orm", "repo": "masakhane/afrimgsm", "config": "orm", "splits": ("test",), "license": "Apache-2.0", "langs": ["borana"]},
    {"id": "masakhane-injongointent", "repo": "masakhane/InjongoIntent", "config": "swa", "splits": ("test",), "license": "CC-BY-4.0", "langs": ["swahili"]},
    {"id": "masakhane-uhura-truthfulqa", "repo": "masakhane/uhura-truthfulqa", "config": "sw_multiple_choice", "splits": ("test",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "masakhane-uhura-arc-easy", "repo": "masakhane/uhura-arc-easy", "config": "sw_multiple_choice", "splits": ("test",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "cohere-aya-ke", "repo": "CohereLabs/aya_dataset", "config": "default", "splits": ("train",), "license": "Apache-2.0", "lang_col": "language_code", "allow_langs": {"swh", "som", "orm"}},
    {"id": "afrihate-ke", "repo": "afrihate/afrihate", "config": "swa", "splits": ("train",), "license": "Apache-2.0", "langs": ["swahili", "somali", "borana"]},
    {"id": "tabularis-swahili-sentiment", "repo": "tabularisai/swahili-sentiment-dataset", "config": "default", "splits": ("train",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "swahili-finetome-20k", "repo": "ngusadeep/Swahili-FineTome-20k", "config": "default", "splits": ("train",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "ea-mobile-money-safety-audit", "repo": "LeoCleinte/east-africa-mobile-money-safety-audit", "config": "default", "splits": ("validation",), "license": "CC-BY-4.0", "langs": ["swahili"]},
    {"id": "facebook-belebele-swh", "repo": "facebook/belebele", "config": "swh_Latn", "splits": ("test",), "license": "CC-BY-SA-4.0", "langs": ["swahili"]},
    {"id": "facebook-belebele-luo", "repo": "facebook/belebele", "config": "luo_Latn", "splits": ("test",), "license": "CC-BY-SA-4.0", "langs": ["luo"]},
    {"id": "facebook-belebele-som", "repo": "facebook/belebele", "config": "som_Latn", "splits": ("test",), "license": "CC-BY-SA-4.0", "langs": ["somali"]},
    {"id": "facebook-belebele-gaz", "repo": "facebook/belebele", "config": "gaz_Latn", "splits": ("test",), "license": "CC-BY-SA-4.0", "langs": ["borana"]},
    {"id": "bigscience-xp3-sw", "repo": "bigscience/xP3", "config": "sw", "splits": ("train",), "license": "Apache-2.0", "langs": ["swahili"]},
    {"id": "bigscience-xp3-ki", "repo": "bigscience/xP3", "config": "ki", "splits": ("train",), "license": "Apache-2.0", "langs": ["kikuyu"]}
]

OER_STORYBOOK_JOBS: list[dict[str, Any]] = [
    {"id": "sil-ai-bloom-lm-swh", "repo": "sil-ai/bloom-lm", "config": "swh", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-swa", "repo": "sil-ai/bloom-lm", "config": "swa", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-kik", "repo": "sil-ai/bloom-lm", "config": "kik", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-kam", "repo": "sil-ai/bloom-lm", "config": "kam", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-guz", "repo": "sil-ai/bloom-lm", "config": "guz", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-luy", "repo": "sil-ai/bloom-lm", "config": "luy", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-lkb", "repo": "sil-ai/bloom-lm", "config": "lkb", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-lts", "repo": "sil-ai/bloom-lm", "config": "lts", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-dig", "repo": "sil-ai/bloom-lm", "config": "dig", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-dug", "repo": "sil-ai/bloom-lm", "config": "dug", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-pkb", "repo": "sil-ai/bloom-lm", "config": "pkb", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-rel", "repo": "sil-ai/bloom-lm", "config": "rel", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-saq", "repo": "sil-ai/bloom-lm", "config": "saq", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-som", "repo": "sil-ai/bloom-lm", "config": "som", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-teo", "repo": "sil-ai/bloom-lm", "config": "teo", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-tuv", "repo": "sil-ai/bloom-lm", "config": "tuv", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-tvs", "repo": "sil-ai/bloom-lm", "config": "tvs", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-thk", "repo": "sil-ai/bloom-lm", "config": "thk", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-enb", "repo": "sil-ai/bloom-lm", "config": "enb", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "sil-ai-bloom-lm-oki", "repo": "sil-ai/bloom-lm", "config": "oki", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
    {"id": "glotstorybook", "repo": "cis-lmu/GlotStoryBook", "config": "default", "split": "train", "license": "Mixed (filtered to CC-BY/CC-BY-SA/CC0)"},
]

WEB_FREQ_CORPORA: list[dict[str, Any]] = [
    {"id": "fineweb-2", "repo": "HuggingFaceFW/fineweb-2", "configs": ["swh_Latn", "som_Latn", "gaz_Latn", "kik_Latn", "luo_Latn", "mer_Latn", "guz_Latn", "mas_Latn", "teo_Latn", "kam_Latn", "tuv_Latn"], "license": "ODC-By"},
    {"id": "wura", "repo": "castorini/wura", "configs": ["swa", "som", "orm"], "license": "Apache-2.0"},
    {"id": "culturax", "repo": "uonlp/CulturaX", "configs": ["sw", "so"], "license": "ODC-By"},
    {"id": "glotcc-v1", "repo": "cis-lmu/GlotCC-V1", "configs": ["swh-Latn", "som-Latn", "gaz-Latn", "luo-Latn", "teo-Latn", "kik-Latn", "guz-Latn", "mas-Latn", "kam-Latn", "sgc-Latn", "lwg-Latn"], "license": "CC0-1.0"}
]

DIRECT_PERMISSIVE_SOURCES: list[dict[str, Any]] = [
    {
        "id": "kamusi-swahili",
        "lang_id": "swahili",
        "url": "https://raw.githubusercontent.com/Kalebu/kamusi/main/data/swahili.json",
        "license": "MIT",
        "citation": "Kamusi Swahili Open Lexicon (MIT, https://github.com/Kalebu/kamusi)",
    },
    {
        "id": "opus-wikimedia-en-sw",
        "lang_id": "swahili",
        "url": "https://object.pouta.csc.fi/OPUS-wikimedia/v20230407/moses/en-sw.txt.zip",
        "license": "CC-BY-SA-4.0",
        "citation": "OPUS Wikimedia en-sw Parallel Corpus (CC-BY-SA-4.0, https://opus.nlpl.eu/datasets/wikimedia?pair=en&sw)",
    },
    {
        "id": "mbogho-zenodo-13355021",
        "lang_id": "all",
        "url": "https://zenodo.org/api/records/13355021",
        "license": "CC-BY-4.0",
        "citation": "Mbogho Kenyan Parallel Corpus (CC-BY-4.0, https://zenodo.org/records/13355021)",
    },
    {
        "id": "strathmore-sheng-mental-health-14637639",
        "lang_id": "swahili",
        "url": "https://zenodo.org/api/records/14637639",
        "license": "CC-BY-4.0",
        "citation": "Strathmore Sheng Mental Health Dataset 2025 (CC-BY-4.0, https://zenodo.org/records/14637639)",
    },
    {
        "id": "tatoeba-text-only",
        "lang_id": "all",
        "url": "https://downloads.tatoeba.org/exports/per_language/swh/swh_sentences.tsv.bz2",
        "license": "CC-BY-2.0",
        "citation": "Tatoeba Text-Only Exports (CC-BY-2.0, https://tatoeba.org/en/downloads; NC/ND audio excluded)",
    },
    {"id": "hornmt-orm-som", "lang_id": "all", "url": "https://raw.githubusercontent.com/asmelashteka/HornMT/main/data", "license": "CC-BY-4.0", "citation": "Lesan AI HornMT Parallel News Benchmark (CC-BY-4.0, https://github.com/asmelashteka/HornMT)"},
    {"id": "ai4d-zindi-swahili-news-4300294", "lang_id": "swahili", "url": "https://zenodo.org/api/records/4300294", "license": "CC-BY-4.0", "citation": "AI4D / Zindi Swahili News Classification (CC-BY-4.0, https://zenodo.org/records/4300294)"},
    {"id": "opus-globalvoices-en-sw", "lang_id": "swahili", "url": "https://object.pouta.csc.fi/OPUS-GlobalVoices/v2018q4/moses/en-sw.txt.zip", "license": "CC-BY-3.0 / CC-BY-4.0", "citation": "OPUS GlobalVoices en-sw Parallel Corpus (CC-BY-3.0/4.0, https://opus.nlpl.eu/)"}
]

CLDR_49_KENYAN_LOCALES: list[tuple[str, str]] = [
    ("en-KE", "english-ke"),
    ("sw-KE", "swahili"),
    ("sw", "swahili"),
    ("so-KE", "somali"),
    ("om-KE", "borana"),
    ("ki", "kikuyu"),
    ("dav", "taita"),
    ("ebu", "embu"),
    ("mas", "maasai"),
    ("luy", "luhya"),
    ("teo", "teso"),
    ("guz", "kisii"),
    ("kam", "kamba"),
    ("kln", "kalenjin"),
    ("luo", "luo"),
    ("mer", "meru"),
    ("saq", "samburu"),
]


def merge_entries_into_dictionary(lang_id: str, new_entries: list[dict[str, Any]], target_cat_id: str = "phrases") -> int:
    dict_path = DICT_DIR / f"{lang_id}.json"
    if not dict_path.exists() or not new_entries:
        return 0
    data = json.loads(dict_path.read_text(encoding="utf-8"))
    existing: dict[tuple[str, str], dict] = {}
    target_cat = None
    for cat in data.get("categories", []):
        if cat.get("id") == target_cat_id:
            target_cat = cat
        for e in cat.get("entries", []):
            existing[_norm_key(e.get("english", ""), e.get("translation", ""))] = e
    if target_cat is None:
        target_cat = data["categories"][-1]

    added = 0
    enriched = 0
    for item in new_entries:
        en = str(item.get("english", "")).strip()
        tr = str(item.get("translation", "")).strip()
        if not en or not tr or len(en) > 220 or len(tr) > 220 or en.lower() == tr.lower():
            continue
        key = _norm_key(en, tr)
        if not key[0] or not key[1]:
            continue
        if key in existing:
            pron = str(item.get("pronunciation") or "").strip()
            if pron and not existing[key].get("pronunciation"):
                existing[key]["pronunciation"] = pron
                enriched += 1
            continue
        entry_obj = {
            "english": en,
            "translation": tr,
            "pronunciation": str(item.get("pronunciation") or "").strip(),
            "context": item["context"],
        }
        existing[key] = entry_obj
        target_cat["entries"].append(entry_obj)
        added += 1

    if added > 0 or enriched > 0:
        data["totalEntries"] = sum(len(c.get("entries", [])) for c in data.get("categories", []))
        dict_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return added


def ingest_hf_jobs(lang_filter: str, max_rows: int, only_ungated: bool, dry_run: bool, lock: dict | None = None) -> dict[str, int]:
    added_by_lang: dict[str, int] = {}
    hf_status = (lock or {}).setdefault("hfText", {})
    for job in HF_PERMISSIVE_TEXT_JOBS:
        assert_repo_allowed(job["repo"])
        if lang_filter != "all" and job["lang_id"] != lang_filter:
            continue
        if only_ungated and job.get("gated"):
            print(f"[skip-gated] {job['repo']} ({job['config']})")
            continue
        job_id = job["id"]
        if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and hf_status.get(job_id, {}).get("status") == "completed":
            print(f"  [skip-done] HF Text {job['repo']} ({job['config']}) already ingested.")
            continue
        print(f"[HF Text] {job['repo']} ({job['config']}) [{job['license']}] -> {job['lang_id']}")
        if dry_run:
            continue
        try:
            ds = load_hf_stream(job["repo"], job["config"], split=job["split"])
            batch = []
            for idx, row in enumerate(ds):
                if idx >= max_rows:
                    break
                row_ci = {str(k).lower(): v for k, v in row.items()}
                tr_dict = row.get("translation") if isinstance(row.get("translation"), dict) else {}
                tr_dict_ci = {str(k).lower(): v for k, v in tr_dict.items()}
                en_val = next(
                    (v for c in job["en_cols"] for v in (row.get(c), row_ci.get(c.lower()), tr_dict.get(c), tr_dict_ci.get(c.lower())) if v),
                    None,
                )
                tr_val = next(
                    (v for c in job["tr_cols"] for v in (row.get(c), row_ci.get(c.lower()), tr_dict.get(c), tr_dict_ci.get(c.lower())) if v),
                    None,
                )
                if isinstance(tr_val, list):
                    tr_val = ", ".join(str(x) for x in tr_val if x)
                if not (en_val and tr_val):
                    continue
                if job.get("secular_opus_luo_filter"):
                    if not is_secular_opus_luo_row(str(en_val), str(tr_val), row.get("corpus") or row.get("source"), row.get("url")):
                        continue
                batch.append({"english": str(en_val), "translation": str(tr_val), "context": job["citation"]})
            added = merge_entries_into_dictionary(job["lang_id"], batch, target_cat_id=job.get("target_cat", "phrases"))
            added_by_lang[job["lang_id"]] = added_by_lang.get(job["lang_id"], 0) + added
            hf_status[job_id] = {"status": "completed", "scanned": len(batch), "added": added, "updatedAt": datetime.now(timezone.utc).isoformat()}
            print(f"  -> Added {added} verified entries to {job['lang_id']}.json")
        except Exception as exc:
            st = "pending_gated_approval" if (job.get("gated") or _is_gated_error(exc)) else "failed"
            hf_status[job_id] = {"status": st, "reason": str(exc)[:220], "updatedAt": datetime.now(timezone.utc).isoformat()}
            print(f"  [warn] Skipped {job['repo']} ({st}): {exc}")
    return added_by_lang


def ingest_panlex_cc0(lang_filter: str, max_rows: int, dry_run: bool, lock: dict | None = None) -> dict[str, int]:
    repo = "cointegrated/panlex-meanings"
    assert_repo_allowed(repo)
    stages = (lock or {}).setdefault("stages", {})
    if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and stages.get("panlex-cc0", {}).get("status") == "completed":
        print("  [skip-done] PanLex CC0-1.0 already ingested in prior run.")
        return {}
    print(f"[PanLex CC0-1.0] {repo} -> 23 core dictionaries + staging varieties")
    if dry_run:
        return {}
    added_by_lang: dict[str, int] = {}
    try:
        ds = load_hf_stream(repo, None, split="train")
        citation = "PanLex CC0 Lexicon (CC0-1.0, https://huggingface.co/datasets/cointegrated/panlex-meanings)"
        buckets: dict[str, list[dict[str, Any]]] = {}
        staging_buckets: dict[str, list[dict[str, Any]]] = {}
        for scanned, row in enumerate(ds):
            if scanned > max_rows * 25:
                break
            en = str(row.get("eng") or row.get("en") or "").strip()
            if not en:
                continue
            for iso, val in row.items():
                if not val or iso in ("eng", "en", "id"):
                    continue
                iso_clean = str(iso).split("-")[0].lower()
                tr = val[0] if isinstance(val, list) and val else str(val)
                tr = str(tr).strip()
                if not tr:
                    continue
                if iso_clean in ISO_TO_KENYAHUB_LANG:
                    lang_id = ISO_TO_KENYAHUB_LANG[iso_clean]
                    if lang_filter == "all" or lang_filter == lang_id:
                        buckets.setdefault(lang_id, []).append({"english": en, "translation": tr, "context": citation})
                if iso_clean in PANLEX_STAGING_ISOS:
                    staging_buckets.setdefault(iso_clean, []).append({"english": en, "translation": tr, "iso": iso_clean, "context": citation})

        for lang_id, entries in buckets.items():
            added_by_lang[lang_id] = added_by_lang.get(lang_id, 0) + merge_entries_into_dictionary(lang_id, entries[:max_rows])
        if staging_buckets:
            STAGING_DICT_DIR.mkdir(parents=True, exist_ok=True)
            iso_to_stage_file = {"kcn": "nubi", "kuj": "kuria", "ymm": "maay", "muu": "yaaku"}
            for iso, entries in staging_buckets.items():
                stage_slug = iso_to_stage_file.get(iso, iso)
                stage_path = STAGING_DICT_DIR / f"{stage_slug}.json"
                if stage_path.exists():
                    try:
                        existing_obj = json.loads(stage_path.read_text(encoding="utf-8"))
                        if isinstance(existing_obj, dict) and isinstance(existing_obj.get("categories"), list) and existing_obj["categories"]:
                            seen_pairs = {
                                (str(e.get("english", "")).strip().lower(), str(e.get("translation", "")).strip().lower())
                                for c in existing_obj["categories"] for e in c.get("entries", [])
                            }
                            target_cat = next((c for c in existing_obj["categories"] if c.get("id") == "phrases"), existing_obj["categories"][0])
                            for ent in entries[:max_rows]:
                                key = (ent["english"].strip().lower(), ent["translation"].strip().lower())
                                if key not in seen_pairs:
                                    seen_pairs.add(key)
                                    target_cat.setdefault("entries", []).append({"english": ent["english"], "translation": ent["translation"], "context": ent.get("context", citation)})
                            existing_obj["totalEntries"] = sum(len(c.get("entries", [])) for c in existing_obj["categories"])
                            stage_path.write_text(json.dumps(existing_obj, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
                            continue
                    except Exception:
                        pass
                stage_path.write_text(
                    json.dumps({"languageId": stage_slug, "isoCode": iso, "iso639_3": iso, "staging": True, "source": citation, "entries": entries[:max_rows]}, indent=2, ensure_ascii=False) + "\n",
                    encoding="utf-8",
                )
        stages["panlex-cc0"] = {"status": "completed", "added": sum(added_by_lang.values()), "updatedAt": datetime.now(timezone.utc).isoformat()}
    except Exception as exc:
        stages["panlex-cc0"] = {"status": "failed", "reason": str(exc)[:200]}
        print(f"  [warn] PanLex CC0 stream skipped: {exc}")
    return added_by_lang


KAIKKI_PER_LANG_TARGETS: list[tuple[str, str, str]] = [
    ("Swahili", "swahili", "Kaikki.org Wiktionary Swahili"),
    ("Somali", "somali", "Kaikki.org Wiktionary Somali"),
    ("Oromo", "borana", "Kaikki.org Wiktionary Oromo"),
    ("Kikuyu", "kikuyu", "Kaikki.org Wiktionary Kikuyu"),
    ("Luo", "luo", "Kaikki.org Wiktionary Luo"),
    ("Kamba", "kamba", "Kaikki.org Wiktionary Kamba"),
    ("Maasai", "maasai", "Kaikki.org Wiktionary Maasai"),
    ("Turkana", "turkana", "Kaikki.org Wiktionary Turkana"),
    ("Meru", "meru", "Kaikki.org Wiktionary Meru"),
    ("Taita", "taita", "Kaikki.org Wiktionary Taita"),
    ("Teso", "teso", "Kaikki.org Wiktionary Teso"),
    ("Kalenjin", "kalenjin", "Kaikki.org Wiktionary Kalenjin"),
    ("Luhya", "luhya", "Kaikki.org Wiktionary Luhya"),
    ("Gusii", "kisii", "Kaikki.org Wiktionary Gusii"),
    ("Embu", "embu", "Kaikki.org Wiktionary Embu"),
    ("Pokot", "pokot", "Kaikki.org Wiktionary Pokot"),
    ("Samburu", "samburu", "Kaikki.org Wiktionary Samburu"),
    ("Rendille", "rendille", "Kaikki.org Wiktionary Rendille"),
    ("Mijikenda", "mijikenda", "Kaikki.org Wiktionary Mijikenda"),
    ("Sheng", "swahili", "Kaikki.org Wiktionary Sheng"),
]


def ingest_kaikki_raw_dump(lang_filter: str, max_rows: int, dry_run: bool, max_seconds: int = 180, lock: dict | None = None) -> dict[str, int]:
    """Download Kaikki.org per-language Wiktionary JSONL extracts directly (fast, 100% Kenyan coverage, CC-BY-SA-4.0)."""
    print(f"[Kaikki Per-Language Wiktionary CC-BY-SA-4.0] Fetching {len(KAIKKI_PER_LANG_TARGETS)} Kenyan language JSONL dictionaries directly (cap {max_seconds}s)...")
    if dry_run:
        return {}
    kaikki_st = (lock or {}).setdefault("kaikki", {})
    added_by_lang: dict[str, int] = {}
    t0 = time.monotonic()

    for wiki_name, lang_id, label in KAIKKI_PER_LANG_TARGETS:
        if not FORCE_REINGEST and RETRY_PENDING_ONLY and kaikki_st.get(wiki_name, {}).get("status") == "completed":
            continue
        if (time.monotonic() - t0) > max_seconds:
            print("  [info] Kaikki wall-clock budget reached; stopping remaining languages.")
            break
        if lang_filter != "all" and lang_id != lang_filter:
            continue
        url = f"https://kaikki.org/dictionary/{wiki_name}/kaikki.org-dictionary-{wiki_name}.jsonl"
        citation = f"{label} (CC-BY-SA-4.0, {url})"
        batch: list[dict[str, Any]] = []
        try:
            with HTTP_SESSION.get(url, stream=True, timeout=30) as resp:
                if resp.status_code == 404:
                    continue
                if not resp.ok:
                    print(f"  [warn] Kaikki {wiki_name} HTTP {resp.status_code}")
                    continue
                for raw_line in resp.iter_lines(decode_unicode=True):
                    if not raw_line:
                        continue
                    if len(batch) >= max_rows:
                        break
                    try:
                        obj = json.loads(raw_line)
                    except Exception:
                        continue
                    word = str(obj.get("word") or "").strip()
                    senses = obj.get("senses") or []
                    glosses = [g for s in senses for g in (s.get("glosses") or []) if isinstance(g, str)]
                    tags = [t.lower() for s in senses for t in (s.get("tags") or []) if isinstance(t, str)]
                    if word and glosses:
                        ipa = next((snd["ipa"].strip("/[]") for snd in (obj.get("sounds") or []) if snd.get("ipa")), "")
                        ctx = f"{citation} [Sheng]" if (wiki_name == "Sheng" or ("sheng" in tags and lang_id == "swahili")) else citation
                        batch.append({
                            "english": glosses[0][:180],
                            "translation": word,
                            "pronunciation": ipa,
                            "context": ctx,
                        })
            if batch:
                added = merge_entries_into_dictionary(lang_id, batch)
                added_by_lang[lang_id] = added_by_lang.get(lang_id, 0) + added
                kaikki_st[wiki_name] = {"status": "completed", "parsed": len(batch), "added": added, "updatedAt": datetime.now(timezone.utc).isoformat()}
                print(f"  -> Kaikki {wiki_name} ({lang_id}): parsed {len(batch)} entries, added {added} new.")
            else:
                kaikki_st[wiki_name] = {"status": "completed", "parsed": 0, "added": 0, "updatedAt": datetime.now(timezone.utc).isoformat()}
        except Exception as exc:
            print(f"  [warn] Kaikki {wiki_name} notice: {exc}")

    return added_by_lang


def ingest_direct_sources(lang_filter: str, max_rows: int, dry_run: bool, lock: dict | None = None) -> dict[str, int]:
    """Actively download & parse Kamusi, OPUS Wikimedia en-sw, Mbogho Zenodo, Strathmore Sheng & Tatoeba text-only."""
    direct_st = (lock or {}).setdefault("directSources", {})
    added_by_lang: dict[str, int] = {}
    for src in DIRECT_PERMISSIVE_SOURCES:
        assert_repo_allowed(src["url"])
        if lang_filter != "all" and src["lang_id"] not in (lang_filter, "all"):
            continue
        if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and direct_st.get(src["id"], {}).get("status") == "completed":
            print(f"  [skip-done] Direct {src['id']} already ingested.")
            continue
        print(f"[Direct] {src['id']} [{src['license']}] -> {src['lang_id']}")
        if dry_run:
            continue
        try:
            if src["id"] == "kamusi-swahili":
                resp = HTTP_SESSION.get(src["url"], timeout=45)
                if resp.ok and isinstance(resp.json(), list):
                    batch = [
                        {"english": (r.get("english") or r.get("meaning") or "").strip(), "translation": (r.get("word") or r.get("swahili") or "").strip(), "context": src["citation"]}
                        for r in resp.json()[:max_rows]
                    ]
                    added_by_lang["swahili"] = added_by_lang.get("swahili", 0) + merge_entries_into_dictionary("swahili", batch)

            elif src["id"] == "opus-wikimedia-en-sw":
                resp = HTTP_SESSION.get(src["url"], timeout=60)
                if resp.ok:
                    with zipfile.ZipFile(io.BytesIO(resp.content)) as zf:
                        en_name = next((n for n in zf.namelist() if n.endswith(".en")), None)
                        sw_name = next((n for n in zf.namelist() if n.endswith(".sw")), None)
                        if en_name and sw_name:
                            en_lines = zf.read(en_name).decode("utf-8", errors="ignore").splitlines()
                            sw_lines = zf.read(sw_name).decode("utf-8", errors="ignore").splitlines()
                            batch = [{"english": e.strip(), "translation": s.strip(), "context": src["citation"]} for e, s in list(zip(en_lines, sw_lines))[:max_rows]]
                            added_by_lang["swahili"] = added_by_lang.get("swahili", 0) + merge_entries_into_dictionary("swahili", batch)

            elif src["id"] == "mbogho-zenodo-13355021":
                meta = HTTP_SESSION.get(src["url"], timeout=25)
                if meta.ok:
                    for f in meta.json().get("files", []):
                        fname = str(f.get("key", "")).lower()
                        dl = f.get("links", {}).get("self")
                        if not dl or not fname.endswith((".csv", ".tsv")):
                            continue
                        r = HTTP_SESSION.get(dl, timeout=45)
                        if not r.ok:
                            continue
                        target_lang = "taita" if ("daw" in fname or "taita" in fname) else ("kalenjin" if "kalenjin" in fname else ("luo" if "luo" in fname else "swahili"))
                        reader = csv.DictReader(io.StringIO(r.text), delimiter="\t" if fname.endswith(".tsv") else ",")
                        batch = []
                        for idx, row in enumerate(reader):
                            if idx >= max_rows:
                                break
                            vals = [str(v).strip() for v in row.values() if v]
                            if len(vals) >= 2:
                                batch.append({"english": vals[0], "translation": vals[1], "context": src["citation"]})
                        added_by_lang[target_lang] = added_by_lang.get(target_lang, 0) + merge_entries_into_dictionary(target_lang, batch)

            elif src["id"] == "strathmore-sheng-mental-health-14637639":
                meta = HTTP_SESSION.get(src["url"], timeout=25)
                if meta.ok:
                    BENCHMARKS_DIR.mkdir(parents=True, exist_ok=True)
                    sheng_out = []
                    for f in meta.json().get("files", []):
                        dl = f.get("links", {}).get("self")
                        if dl and str(f.get("key", "")).lower().endswith((".csv", ".json")):
                            r = HTTP_SESSION.get(dl, timeout=45)
                            if r.ok:
                                sheng_out.append({"file": f.get("key"), "preview": r.text[:20000]})
                    if sheng_out:
                        (BENCHMARKS_DIR / "strathmore-sheng-mental-health-14637639.json").write_text(json.dumps(sheng_out, indent=2, ensure_ascii=False), encoding="utf-8")

            elif src["id"] == "hornmt-orm-som":
                eng_lines = HTTP_SESSION.get(f"{src['url']}/eng.txt", timeout=30).text.splitlines()
                fetched_parallel: dict[str, list[str]] = {}
                for code, lid in (("orm", "borana"), ("som", "somali")):
                    tr_resp = HTTP_SESSION.get(f"{src['url']}/{code}.txt", timeout=30)
                    if not tr_resp.ok:
                        continue
                    tr_lines = tr_resp.text.splitlines()
                    fetched_parallel[code] = tr_lines
                    if lang_filter not in ("all", lid):
                        continue
                    batch = [
                        {"english": e.strip(), "translation": t.strip(), "context": src["citation"]}
                        for e, t in list(zip(eng_lines, tr_lines))[:max_rows]
                        if e.strip() and t.strip()
                    ]
                    added_by_lang[lid] = added_by_lang.get(lid, 0) + merge_entries_into_dictionary(lid, batch, "phrases")
                BENCHMARKS_DIR.mkdir(parents=True, exist_ok=True)
                orm_l = fetched_parallel.get("orm", [])
                som_l = fetched_parallel.get("som", [])
                rows_out = []
                for idx, e in enumerate(eng_lines[:max_rows]):
                    row_obj = {"eng": e.strip()}
                    if idx < len(orm_l) and orm_l[idx].strip():
                        row_obj["orm"] = orm_l[idx].strip()
                    if idx < len(som_l) and som_l[idx].strip():
                        row_obj["som"] = som_l[idx].strip()
                    rows_out.append(json.dumps(row_obj, ensure_ascii=False))
                (BENCHMARKS_DIR / "hornmt-orm-som.jsonl").write_text("\n".join(rows_out) + "\n", encoding="utf-8")
            elif src["id"] == "ai4d-zindi-swahili-news-4300294":
                r = HTTP_SESSION.get(src["url"], timeout=30)
                if r.ok:
                    zfiles = r.json().get("files", [])
                    csv_f = next((f for f in zfiles if str(f.get("key", "")).lower().endswith(".csv")), None)
                    if csv_f:
                        dl = (csv_f.get("links") or {}).get("self")
                        if dl:
                            import csv as _csv
                            BENCHMARKS_DIR.mkdir(parents=True, exist_ok=True)
                            out_rows = []
                            with HTTP_SESSION.get(dl, stream=True, timeout=60) as cr:
                                lines_iter = (ln.decode("utf-8", errors="ignore") for ln in cr.iter_lines())
                                for idx, row in enumerate(_csv.DictReader(lines_iter)):
                                    if idx >= max_rows:
                                        break
                                    out_rows.append(json.dumps(row, ensure_ascii=False))
                            if out_rows:
                                (BENCHMARKS_DIR / "ai4d-zindi-swahili-news-4300294.jsonl").write_text("\n".join(out_rows) + "\n", encoding="utf-8")
            elif src["id"] == "opus-globalvoices-en-sw":
                r = HTTP_SESSION.get(src["url"], timeout=45)
                if r.ok:
                    with zipfile.ZipFile(io.BytesIO(r.content)) as zf:
                        en_f = next((n for n in zf.namelist() if n.endswith(".en")), None)
                        sw_f = next((n for n in zf.namelist() if n.endswith(".sw")), None)
                        if en_f and sw_f:
                            en_l = zf.read(en_f).decode("utf-8", errors="ignore").splitlines()
                            sw_l = zf.read(sw_f).decode("utf-8", errors="ignore").splitlines()
                            batch = [
                                {"english": e.strip(), "translation": s.strip(), "context": src["citation"]}
                                for e, s in list(zip(en_l, sw_l))[:max_rows]
                                if e.strip() and s.strip()
                            ]
                            added_by_lang["swahili"] = added_by_lang.get("swahili", 0) + merge_entries_into_dictionary("swahili", batch, "phrases")
            elif src["id"] == "tatoeba-text-only":
                # Strictly text-only exports (never audio) for Swahili, Somali, Oromo, Rendille
                for iso, lang_id in (("swh", "swahili"), ("som", "somali"), ("orm", "borana"), ("rel", "rendille")):
                    t_url = f"https://downloads.tatoeba.org/exports/per_language/{iso}/{iso}_sentences.tsv.bz2"
                    r = HTTP_SESSION.get(t_url, timeout=45)
                    if r.ok:
                        lines = bz2.decompress(r.content).decode("utf-8", errors="ignore").splitlines()[:max_rows]
                        READERS_DIR.mkdir(parents=True, exist_ok=True)
                        (READERS_DIR / f"tatoeba-{iso}-text.json").write_text(
                            json.dumps({"license": "CC-BY-2.0", "languageId": lang_id, "sentences": [ln.split("\t")[-1] for ln in lines if "\t" in ln]}, indent=2, ensure_ascii=False),
                            encoding="utf-8",
                        )
            direct_st[src["id"]] = {"status": "completed", "updatedAt": datetime.now(timezone.utc).isoformat()}
        except Exception as exc:
            direct_st[src["id"]] = {"status": "failed", "reason": str(exc)[:200]}
            print(f"  [warn] Skipped {src['id']}: {exc}")
    return added_by_lang


def ingest_cldr_49_kenyan_locales(lang_filter: str, dry_run: bool, lock: dict | None = None) -> dict[str, int]:
    added_by_lang: dict[str, int] = {}
    if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and (LOCALES_DIR / "cldr-49-kenya.json").exists() and (LOCALES_DIR / "cldr-49-kenya.json").stat().st_size > 1000:
        print("  [skip-done] CLDR 49 Kenyan locales already ingested.")
        return added_by_lang
    en_days = {"sun": "Sunday", "mon": "Monday", "tue": "Tuesday", "wed": "Wednesday", "thu": "Thursday", "fri": "Friday", "sat": "Saturday"}
    en_months = {
        "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June",
        "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December",
    }
    citation = "Unicode CLDR 49 JSON (Unicode-3.0, https://github.com/unicode-org/cldr-json)"
    cldr_export: dict[str, Any] = {"version": "49.0.0", "license": "Unicode-3.0", "locales": {}}

    for locale, lang_id in CLDR_49_KENYAN_LOCALES:
        if lang_filter != "all" and lang_id != lang_filter:
            continue
        print(f"[CLDR 49 Unicode-3.0] {locale} -> {lang_id}")
        if dry_run:
            continue
        base = "https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json"
        loc_data: dict[str, Any] = {"languageId": lang_id, "locale": locale}
        try:
            cal_resp = HTTP_SESSION.get(f"{base}/cldr-dates-full/main/{locale}/ca-gregorian.json", timeout=20)
            if cal_resp.ok:
                cal = cal_resp.json()["main"][locale]["dates"]["calendars"]["gregorian"]
                days = cal.get("days", {}).get("format", {}).get("wide", {})
                months = cal.get("months", {}).get("format", {}).get("wide", {})
                loc_data["days"] = days
                loc_data["months"] = months
                if lang_id != "english-ke":
                    batch = [{"english": en, "translation": days[k], "context": citation} for k, en in en_days.items() if days.get(k)]
                    batch += [{"english": en, "translation": months[k], "context": citation} for k, en in en_months.items() if months.get(k)]
                    added_by_lang[lang_id] = added_by_lang.get(lang_id, 0) + merge_entries_into_dictionary(lang_id, batch, target_cat_id="time")
            char_resp = HTTP_SESSION.get(f"{base}/cldr-misc-full/main/{locale}/characters.json", timeout=20)
            if char_resp.ok:
                loc_data["exemplarCharacters"] = char_resp.json()["main"][locale]["characters"].get("exemplarCharacters")
            curr_resp = HTTP_SESSION.get(f"{base}/cldr-numbers-full/main/{locale}/currencies.json", timeout=20)
            if curr_resp.ok:
                loc_data["KES"] = curr_resp.json()["main"][locale]["numbers"]["currencies"].get("KES")
            cldr_export["locales"][locale] = loc_data
        except Exception as exc:
            print(f"  [warn] CLDR 49 {locale} skipped: {exc}")

    if not dry_run and cldr_export["locales"]:
        LOCALES_DIR.mkdir(parents=True, exist_ok=True)
        (LOCALES_DIR / "cldr-49-kenya.json").write_text(json.dumps(cldr_export, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return added_by_lang


def ingest_benchmarks(max_rows: int, dry_run: bool, lock: dict | None = None) -> None:
    for job in HF_BENCHMARK_JOBS:
        assert_repo_allowed(job["repo"])
        out_file = BENCHMARKS_DIR / f"{job['id']}.jsonl"
        if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and out_file.exists() and out_file.stat().st_size > 100:
            print(f"  [skip-done] Benchmark {job['id']} already ingested.")
            continue
        print(f"[HF Benchmark] {job['id']} ({job['repo']}) [{job['license']}]")
        if dry_run:
            continue
        try:
            BENCHMARKS_DIR.mkdir(parents=True, exist_ok=True)
            rows_out = []
            for split in job["splits"]:
                ds = load_hf_stream(job["repo"], job["config"], split=split)
                for idx, row in enumerate(ds):
                    if len(rows_out) >= max_rows or idx >= max_rows * 4:
                        break
                    if job.get("lang_col") and str(row.get(job["lang_col"]) or "").lower() not in job["allow_langs"]:
                        continue
                    rows_out.append(row)
            if rows_out:
                (BENCHMARKS_DIR / f"{job['id']}.jsonl").write_text(
                    "\n".join(json.dumps(r, ensure_ascii=False, default=str) for r in rows_out) + "\n", encoding="utf-8"
                )
        except Exception as exc:
            print(f"  [warn] Benchmark {job['id']} skipped: {exc}")


def ingest_oer_storybooks(max_rows: int, dry_run: bool, lock: dict | None = None) -> None:
    """Ingest SIL-AI Bloom & GlotStoryBook (CC-BY/CC-BY-SA/CC0 only)."""
    oer_st = (lock or {}).setdefault("oerStorybooks", {})
    for job in OER_STORYBOOK_JOBS:
        assert_repo_allowed(job["repo"])
        out_file = READERS_DIR / f"{job['id']}.json"
        needs_gsb_en = False
        if job["id"] == "glotstorybook":
            if not out_file.exists() or oer_st.get("glotstorybook", {}).get("englishAlignedV4") is not True:
                needs_gsb_en = True
            else:
                try:
                    needs_gsb_en = '"english"' not in out_file.read_text(encoding="utf-8", errors="ignore")
                except Exception:
                    needs_gsb_en = True
        if not dry_run and not FORCE_REINGEST and RETRY_PENDING_ONLY and not needs_gsb_en and (
            (out_file.exists() and out_file.stat().st_size > 100)
            or oer_st.get(job["id"], {}).get("status") == "completed"
        ):
            print(f"  [skip-done] OER Storybook {job['id']} already ingested.")
            continue
        print(f"[OER Storybook] {job['id']} ({job['repo']}) [{job['license']}]")
        if dry_run:
            continue
        try:
            READERS_DIR.mkdir(parents=True, exist_ok=True)
            ds = load_hf_stream(job["repo"], job["config"], split=job["split"])
            kept = []
            eng_by_story_id: dict[str, dict[str, Any]] = {}
            # GlotStoryBook is ordered alphabetically by ISO639-3 across ~79k rows; scan up to 100k rows
            scan_cap = 250000 if job["id"] == "glotstorybook" else max_rows * 10
            is_gsb = job["id"] == "glotstorybook"
            for idx, row in enumerate(ds):
                if (not is_gsb and len(kept) >= max_rows) or idx >= scan_cap:
                    break
                lic = row.get("license") or row.get("License") or row.get("copyright") or ""
                src = row.get("publisher") or row.get("source") or row.get("Source") or row.get("credits") or ""
                url = row.get("url") or row.get("book_url") or ""
                if not is_permissive_oer_row(str(lic), str(src), str(url)):
                    continue
                iso_raw = row.get("ISO639-3") or row.get("iso") or row.get("language") or row.get("Language") or row.get("lang") or job.get("config") or ""
                iso = str(iso_raw).strip().lower()
                body_txt = str(row.get("text") or row.get("Text") or "").strip()[:2000]
                if not body_txt:
                    continue
                title_val = str(row.get("title") or row.get("File Name") or row.get("Story Category") or job["id"]).strip()
                sid_m = re.match(r"^(\d{3,5})[_\-]", title_val)
                story_num = sid_m.group(1) if sid_m else ""
                src_norm = str(src).strip().lower()[:40]
                if is_gsb and iso in ("eng", "en", "english") and story_num:
                    # Keep EVERY distinct English story separate by (source, story_num, exact File Name) so two stories NEVER concatenate!
                    cands = eng_by_story_id.setdefault((src_norm, story_num), {})
                    eb = cands.setdefault(title_val, {"title": title_val, "pages": []})
                    if len(eb["pages"]) < 80:
                        eb["pages"].append(body_txt)
                    continue
                if iso not in ISO_TO_KENYAHUB_LANG:
                    continue
                item: dict[str, Any] = {"lang_id": ISO_TO_KENYAHUB_LANG[iso], "license": str(lic), "source_norm": src_norm, "title": title_val, "text": body_txt}
                if story_num:
                    item["story_id"] = story_num
                kept.append(item)
            if is_gsb and kept:
                # Group multi-page GlotStoryBook rows into COMPLETE stories (up to 80 pages / 25k chars) and pick the single best-matching English candidate!
                grouped: dict[tuple[str, str], dict[str, Any]] = {}
                for r in kept:
                    gk = (r["lang_id"], r["title"])
                    if gk not in grouped:
                        grouped[gk] = {"lang_id": r["lang_id"], "license": r["license"], "source_norm": r.get("source_norm", ""), "title": r["title"], "story_id": r.get("story_id", ""), "pages": []}
                    if len(grouped[gk]["pages"]) < 80:
                        grouped[gk]["pages"].append(r["text"])
                merged_stories = []
                for g in grouped.values():
                    local_full = "\n\n".join(g["pages"])[:25000]
                    local_words = {w.lower() for w in re.findall(r"[A-Za-z]{4,}", g["title"] + " " + local_full[:600])}
                    st_obj: dict[str, Any] = {
                        "lang_id": g["lang_id"],
                        "license": g["license"],
                        "title": g["title"],
                        "text": local_full,
                    }
                    cands_dict = eng_by_story_id.get((g["source_norm"], g["story_id"])) or {}
                    best_eng = None
                    best_score = -1.0
                    for cand in cands_dict.values():
                        if not cand.get("pages"):
                            continue
                        eng_full = "\n\n".join(cand["pages"])[:25000]
                        ratio = len(local_full) / max(1, len(eng_full))
                        if not (0.45 <= ratio <= 2.2):
                            continue
                        eng_words = {w.lower() for w in re.findall(r"[A-Za-z]{4,}", cand["title"] + " " + eng_full[:600])}
                        overlap = len(local_words & eng_words)
                        len_closeness = 1.0 - abs(1.0 - ratio)
                        score = overlap * 3.0 + len_closeness
                        if len(cands_dict) == 1 or overlap >= 1 or (0.65 <= ratio <= 1.55):
                            if score > best_score:
                                best_score = score
                                best_eng = (cand["title"], eng_full)
                    if best_eng:
                        st_obj["englishTitle"] = best_eng[0]
                        st_obj["english"] = best_eng[1]
                    merged_stories.append(st_obj)
                kept = merged_stories
            if kept:
                out_file.write_text(json.dumps(kept, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            with_en = sum(1 for x in kept if isinstance(x, dict) and x.get("english"))
            oer_st[job["id"]] = {
                "status": "completed",
                "count": len(kept),
                "withEnglish": with_en,
                "englishAlignedV4": True if job["id"] == "glotstorybook" else None,
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            if job["id"] == "glotstorybook":
                print(f"  -> Kept {len(kept)} complete merged stories for glotstorybook ({with_en} with English translations, {len(eng_by_story_id)} English reference stories indexed).")
            else:
                print(f"  -> Kept {len(kept)} permissive stories for {job['id']}.")
        except Exception as exc:
            st = "pending_gated_approval" if _is_gated_error(exc) else "failed"
            oer_st[job["id"]] = {"status": st, "reason": str(exc)[:200], "updatedAt": datetime.now(timezone.utc).isoformat()}
            print(f"  [warn] OER Storybook {job['id']} skipped ({st}): {exc}")

    # Global Digital Library KSL (xki) & Kenyan web storybooks are linked directly in public/ksl-index.json


def build_web_frequency_lists(max_rows: int, dry_run: bool, lock: dict | None = None) -> None:
    for corp in WEB_FREQ_CORPORA:
        assert_repo_allowed(corp["repo"])
        print(f"[Web Freq-Only] {corp['id']} ({corp['repo']}) [{corp['license']}] — strips jw.org/bible.com")
        if dry_run:
            continue
        FREQ_DIR.mkdir(parents=True, exist_ok=True)
        proj_cols = ["text", "url"] if corp["id"] == "fineweb-2" else None
        for cfg in corp["configs"]:
            out_file = FREQ_DIR / f"{corp['id']}-{cfg}.json"
            if not FORCE_REINGEST and RETRY_PENDING_ONLY and out_file.exists() and out_file.stat().st_size > 200:
                try:
                    existing_fd = json.loads(out_file.read_text(encoding="utf-8"))
                    if existing_fd.get("topWords"):
                        continue
                except Exception:
                    pass
            try:
                ds = load_hf_stream(corp["repo"], cfg, split="train", columns=proj_cols)
                counts: Counter[str] = Counter()
                for idx, row in enumerate(ds):
                    if idx >= max_rows:
                        break
                    row_url = row.get("url") or row.get("source_url") or row.get("warc-target-uri")
                    if is_blocked_url(row_url):
                        continue
                    cats = str(row.get("categories") or "").lower()
                    if "religious" in cats:
                        continue
                    raw_text = row.get("text") or row.get("content") or row.get("headline") or ""
                    tokens = re.findall(r"[A-Za-zÀ-ỹ']{2,32}", str(raw_text).lower())
                    counts.update(tokens)
                top_words = counts.most_common(2000)
                if top_words:
                    out_file.write_text(
                        json.dumps({"corpus": corp["repo"], "config": cfg, "license": corp["license"], "topWords": top_words}, indent=2, ensure_ascii=False) + "\n",
                        encoding="utf-8",
                    )
                    print(f"  -> Built {out_file.name} ({len(top_words)} unique words).")
                else:
                    print(f"  [warn] Freq corpus {corp['id']} ({cfg}) yielded 0 tokens; not writing empty file.")
            except Exception as exc:
                print(f"  [warn] Freq corpus {corp['id']} ({cfg}) skipped: {exc}")


def main() -> None:
    parser = argparse.ArgumentParser(description="KenyaHub Commercially-Permissive Text, PanLex, CLDR 49 & OER Ingestor")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--only-ungated", action="store_true")
    parser.add_argument("--lang", default="all")
    parser.add_argument("--max-rows", type=int, default=2000)
    parser.add_argument("--include-kaikki-raw", action="store_true")
    parser.add_argument("--include-benchmarks", action="store_true")
    parser.add_argument("--include-oer", action="store_true")
    parser.add_argument("--build-freq-lists", action="store_true")
    args = parser.parse_args()

    print("=== KenyaHub Commercially-Permissive Text, PanLex, CLDR 49 & OER Ingestor ===")
    print(f"Mode: {'DRY RUN' if args.dry_run else 'LIVE'} | Lang: {args.lang} | Max Rows: {args.max_rows} | Blocked Watchlist: {len(BLOCKED_NON_COMMERCIAL_REPOS)}")

    for job in HF_PERMISSIVE_TEXT_JOBS + HF_BENCHMARK_JOBS + OER_STORYBOOK_JOBS + WEB_FREQ_CORPORA:
        assert_repo_allowed(job["repo"])

    if args.dry_run:
        ingest_hf_jobs(args.lang, args.max_rows, args.only_ungated, dry_run=True)
        ingest_panlex_cc0(args.lang, args.max_rows, dry_run=True)
        ingest_direct_sources(args.lang, args.max_rows, dry_run=True)
        ingest_cldr_49_kenyan_locales(args.lang, dry_run=True)
        ingest_benchmarks(args.max_rows, dry_run=True)
        ingest_oer_storybooks(args.max_rows, dry_run=True)
        build_web_frequency_lists(args.max_rows, dry_run=True)
        print("Dry-run license & manifest verification PASSED.")
        return

    lock = load_text_lock()
    totals: dict[str, int] = {}
    stages = [
        ingest_hf_jobs(args.lang, args.max_rows, args.only_ungated, dry_run=False, lock=lock),
        ingest_panlex_cc0(args.lang, args.max_rows, dry_run=False, lock=lock),
        ingest_direct_sources(args.lang, args.max_rows, dry_run=False, lock=lock),
        ingest_cldr_49_kenyan_locales(args.lang, dry_run=False, lock=lock),
    ]
    if args.include_kaikki_raw:
        stages.append(ingest_kaikki_raw_dump(args.lang, args.max_rows, dry_run=False, lock=lock))
    for res in stages:
        for k, v in res.items():
            totals[k] = totals.get(k, 0) + v

    if args.include_benchmarks:
        ingest_benchmarks(args.max_rows, dry_run=False, lock=lock)
    if args.include_oer:
        ingest_oer_storybooks(args.max_rows, dry_run=False, lock=lock)
    if args.build_freq_lists:
        build_web_frequency_lists(args.max_rows, dry_run=False, lock=lock)
    save_text_lock(lock)

    print(f"Completed permissive text ingestion: {json.dumps(totals)}")


if __name__ == "__main__":
    main()
