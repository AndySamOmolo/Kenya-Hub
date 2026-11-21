#!/usr/bin/env python3
"""
KenyaHub Wave 2 — Open-Access PMC/JEET/MDPI/eCAM/BMC CC-BY Ethnobotany Lexicon Extractor.
Fetches JATS XML tables from Europe PMC (with NCBI E-utilities fallback) for 18 verified
commercially permissive (CC-BY-2.0 / CC-BY-4.0 / CC0-1.0) Kenyan ethnobotany articles,
verifies JATS <license> at runtime, and merges vernacular plant names into `nature` and
vernacular disease/medical terms into `emergency` across KenyaHub dictionaries.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import xml.etree.ElementTree as ET
from pathlib import Path

import requests

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.license_guard import assert_repo_allowed

ROOT = Path(__file__).resolve().parents[1]
DICT_DIR = ROOT / "src/data/dictionaries"
STAGING_DIR = DICT_DIR / "staging"

HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "KenyaHub-PMC-Ethnobotany-Ingestor/1.0 (https://kenyahub.me)"})

ETHNOBOTANY_PAPERS = [
    {"pmcid": "PMC1570449", "citation": "Bussmann (2006) Samburu Ethnobotany Mt. Nyiru", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1570449/", "default_lang": "samburu", "lang_map": {}},
    {"pmcid": "PMC2412850", "citation": "Nanyingi et al. (2008) Samburu Ethnopharmacology", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2412850/", "default_lang": "samburu", "lang_map": {"samburu": "samburu", "turkana": "turkana", "maasai": "maasai", "masai": "maasai"}},
    {"pmcid": "PMC4658748", "citation": "Bjorå et al. (2015) Uses of Kenyan Aloes", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4658748/", "default_lang": None, "lang_map": {"kamba": "kamba", "kikuyu": "kikuyu", "gusii": "kisii", "ekegusii": "kisii", "maasai": "maasai", "mbeere": "embu", "taita": "taita", "tugen": "kalenjin", "samburu": "samburu", "somali": "somali"}},
    {"pmcid": "PMC3974104", "citation": "Kipkore et al. (2014) Marakwet Medicinal Plants", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3974104/", "default_lang": "kalenjin", "lang_map": {}},
    {"pmcid": "PMC1397805", "citation": "Njoroge & Bussmann (2006a) Kikuyu Antimalarial Plants", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1397805/", "default_lang": "kikuyu", "lang_map": {}},
    {"pmcid": "PMC1770906", "citation": "Njoroge & Bussmann (2006b) Kikuyu ENT Medicinal Plants", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1770906/", "default_lang": "kikuyu", "lang_map": {}},
    {"pmcid": "PMC1409767", "citation": "Owuor & Kisangau (2006) Kenyan Antivenin Plants", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1409767/", "default_lang": None, "lang_map": {"kamba": "kamba", "luo": "luo", "dholuo": "luo"}},
    {"pmcid": "PMC3539861", "citation": "Gakuubi & Wanzala (2012) Buuri Meru Livestock Plants", "license": "CC-BY-2.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3539861/", "default_lang": "meru", "lang_map": {}},
    {"pmcid": "PMC7154930", "citation": "Mbuni et al. (2020) Cherangani Hills Medicinal Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7154930/", "default_lang": None, "lang_map": {"m": "kalenjin", "marakwet": "kalenjin", "p": "pokot", "pokot": "pokot", "l": "luhya", "luhya": "luhya"}},
    {"pmcid": "PMC7020225", "citation": "Nankaya et al. (2020) Maasai Medicinal Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7020225/", "default_lang": "maasai", "lang_map": {}},
    {"pmcid": "PMC7306085", "citation": "Omara (2020) Kenyan Antimalarial Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7306085/", "default_lang": None, "lang_map": {"digo": "mijikenda", "giriama": "mijikenda", "kamba": "kamba", "kikuyu": "kikuyu", "kipsigis": "kalenjin", "kuria": "staging:kuria", "luo": "luo", "marakwet": "kalenjin", "maasai": "maasai", "nandi": "kalenjin", "swahili": "swahili", "tugen": "kalenjin"}},
    {"pmcid": "PMC7315313", "citation": "Omara et al. (2020) Rural Kenya Antivenom Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7315313/", "default_lang": None, "lang_map": {"luo": "luo", "kamba": "kamba", "kikuyu": "kikuyu", "marakwet": "kalenjin", "maasai": "maasai", "swahili": "swahili"}},
    {"pmcid": "PMC7149339", "citation": "Wanjohi et al. (2020) Marakwet Medicinal Wild Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7149339/", "default_lang": "kalenjin", "lang_map": {}},
    {"pmcid": "PMC7103046", "citation": "Mutie et al. (2020) Mutomo Hill Kitui Kamba Survey", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7103046/", "default_lang": "kamba", "lang_map": {}},
    {"pmcid": "PMC7469313", "citation": "Mailu et al. (2020) Kisumu East Luo Respiratory Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7469313/", "default_lang": "luo", "lang_map": {"luo": "luo", "swahili": "swahili"}},
    {"pmcid": "PMC3954169", "citation": "Otieno & Analo (2012) Kakamega Forest Luhya Plants", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3954169/", "default_lang": "luhya", "lang_map": {}},
    {"pmcid": "PMC12615033", "citation": "Nyatike Migori Snakebite Medicinal Plants (2025)", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12615033/", "default_lang": "luo", "lang_map": {}},
    {"pmcid": None, "doi": "10.1186/1746-4269-2-22", "citation": "Bussmann et al. (2006) Sekenani Valley Maasai Plants", "license": "CC-BY-2.0", "url": "https://doi.org/10.1186/1746-4269-2-22", "default_lang": "maasai", "lang_map": {}},
]

SCIENTIFIC_COL_RE = re.compile(r"(botanical|scientific|species|taxon|plant\s*name|latin)", re.I)
VERNACULAR_COL_RE = re.compile(r"(local|vernacular|indigenous|common|samburu|maasai|marakwet|kikuyu|kamba|luo|luhya|meru|pokot|swahili)\s*name", re.I)
DISEASE_COL_RE = re.compile(r"(disease|ailment|condition|indication|therapeutic|uses?|treatment|symptom|ethnoveterinary)", re.I)
VOUCHER_RE = re.compile(r"\[[^\]]*\]|\(voucher[^)]*\)", re.I)


def clean_xml_text(elem: ET.Element) -> str:
    parts = []
    for node in elem.iter():
        tag = node.tag.split("}")[-1].lower()
        if tag in ("xref", "sup", "fn"):
            continue
        if node.text:
            parts.append(node.text)
        if node.tail and node is not elem:
            parts.append(node.tail)
    txt = VOUCHER_RE.sub("", " ".join(parts))
    return re.sub(r"\s+", " ", txt).strip(" .,;:")


def resolve_pmcid(doi: str) -> str | None:
    try:
        r = HTTP_SESSION.get(
            "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            params={"query": f"DOI:{doi}", "format": "json"},
            timeout=20,
        )
        if r.ok:
            results = (r.json().get("resultList") or {}).get("result") or []
            if results and results[0].get("pmcid"):
                return str(results[0]["pmcid"])
    except Exception:
        pass
    return None


def fetch_jats_xml(pmcid: str, cache_dir: Path | None) -> str | None:
    if cache_dir:
        cache_dir.mkdir(parents=True, exist_ok=True)
        cached = cache_dir / f"{pmcid}.xml"
        if cached.exists():
            return cached.read_text(encoding="utf-8", errors="ignore")

    for url in (
        f"https://www.ebi.ac.uk/europepmc/webservices/rest/{pmcid}/fullTextXML",
        f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id={re.sub(r'[^0-9]', '', pmcid)}&retmode=xml",
    ):
        try:
            r = HTTP_SESSION.get(url, timeout=30)
            if r.ok and "<table-wrap" in r.text:
                if cache_dir:
                    (cache_dir / f"{pmcid}.xml").write_text(r.text, encoding="utf-8")
                return r.text
        except Exception:
            continue
    return None


def verify_jats_commercial_license(root: ET.Element) -> bool:
    lic_blobs: list[str] = []
    for elem in root.iter():
        tag = elem.tag.split("}")[-1].lower()
        if tag in ("license", "license_ref", "license-p"):
            lic_blobs.append("".join(elem.itertext()).lower())
            for v in elem.attrib.values():
                lic_blobs.append(str(v).lower())
    blob = " ".join(lic_blobs)
    if not blob:
        return True  # Manifest-verified CC-BY when JATS omits <permissions>
    if any(bad in blob for bad in ("noncommercial", "non-commercial", "by-nc", "by-nd", "-nc-", "-nd-")):
        return False
    return any(ok in blob for ok in ("creativecommons.org/licenses/by", "cc-by", "cc by", "cc0", "publicdomain/zero"))


def extract_rows_from_xml(xml_text: str, paper: dict) -> list[tuple[str, str, dict]]:
    """Return list of (lang_id, category_id, DictEntry) tuples."""
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return []
    if not verify_jats_commercial_license(root):
        print(f"  [BLOCKED-NC] Runtime JATS license check rejected {paper.get('pmcid') or paper.get('doi')}")
        return []

    out: list[tuple[str, str, dict]] = []
    default_lang = paper.get("default_lang")
    lang_map = {k.lower(): v for k, v in (paper.get("lang_map") or {}).items()}
    ctx_base = f"{paper['citation']} ({paper.get('pmcid') or paper.get('doi')}, {paper['license']}, {paper['url']})"

    for tw in root.iter():
        if tw.tag.split("}")[-1].lower() != "table-wrap":
            continue
        thead = next((e for e in tw.iter() if e.tag.split("}")[-1].lower() == "thead"), None)
        tbody = next((e for e in tw.iter() if e.tag.split("}")[-1].lower() == "tbody"), None)
        if thead is None or tbody is None:
            continue
        header_rows = [e for e in thead if e.tag.split("}")[-1].lower() == "tr"]
        if not header_rows:
            continue
        headers = [clean_xml_text(th) for th in header_rows[-1]]
        sci_idx = next((i for i, h in enumerate(headers) if SCIENTIFIC_COL_RE.search(h)), None)
        vern_idx = next((i for i, h in enumerate(headers) if VERNACULAR_COL_RE.search(h)), None)
        use_idx = next((i for i, h in enumerate(headers) if DISEASE_COL_RE.search(h)), None)
        if vern_idx is None:
            continue

        for tr in tbody:
            if tr.tag.split("}")[-1].lower() != "tr":
                continue
            cells = [clean_xml_text(td) for td in tr]
            if vern_idx >= len(cells):
                continue
            vern_raw = cells[vern_idx]
            sci_raw = cells[sci_idx] if (sci_idx is not None and sci_idx < len(cells)) else ""
            use_raw = cells[use_idx] if (use_idx is not None and use_idx < len(cells)) else ""
            if not vern_raw or vern_raw.lower() in ("-", "—", "n/a", "none", "unknown"):
                continue

            # Split multi-synonym cells on comma/semicolon/slash
            for token in re.split(r"[;,/]+", vern_raw):
                token = token.strip()
                if len(token) < 2 or len(token) > 65:
                    continue
                target_lang = default_lang
                # Detect inline language tag like "Oloirien (Maasai)" or "M: Chepkomon"
                m_paren = re.search(r"\(([^()]{1,20})\)\s*$", token)
                if m_paren and m_paren.group(1).strip().lower() in lang_map:
                    target_lang = lang_map[m_paren.group(1).strip().lower()]
                    token = token[: m_paren.start()].strip()
                elif ":" in token:
                    prefix, rest = token.split(":", 1)
                    if prefix.strip().lower() in lang_map:
                        target_lang = lang_map[prefix.strip().lower()]
                        token = rest.strip()
                if not target_lang or len(token) < 2:
                    continue

                if sci_raw:
                    short_use = (use_raw[:75].rsplit(" ", 1)[0] if len(use_raw) > 75 else use_raw).strip()
                    eng = f"{sci_raw} ({short_use})" if short_use else sci_raw
                    cat = "nature"
                elif use_raw:
                    eng = use_raw[:120].strip()
                    cat = "emergency"
                else:
                    continue

                out.append((
                    target_lang,
                    cat,
                    {
                        "english": eng[:160],
                        "translation": token,
                        "pronunciation": "",
                        "context": f"{ctx_base} [Ethnobotany]",
                    },
                ))
    return out


def merge_entries(grouped: dict[str, dict[str, list[dict]]]) -> dict[str, int]:
    added_by_lang: dict[str, int] = {}
    for target_lang, by_cat in grouped.items():
        if target_lang.startswith("staging:"):
            path = STAGING_DIR / f"{target_lang.split(':', 1)[1]}.json"
        else:
            path = DICT_DIR / f"{target_lang}.json"
        if not path.exists():
            continue
        data = json.loads(path.read_text(encoding="utf-8"))
        existing = {
            (e.get("english", "").strip().lower(), e.get("translation", "").strip().lower())
            for c in data.get("categories", [])
            for e in c.get("entries", [])
        }
        added = 0
        for cat_id, entries in by_cat.items():
            cat_obj = next((c for c in data.get("categories", []) if c.get("id") == cat_id), None)
            if cat_obj is None:
                cat_obj = data["categories"][-1]
            for entry in entries:
                key = (entry["english"].lower(), entry["translation"].lower())
                if key in existing:
                    continue
                existing.add(key)
                cat_obj["entries"].append(entry)
                added += 1
        if added > 0:
            data["totalEntries"] = sum(len(c.get("entries", [])) for c in data.get("categories", []))
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            added_by_lang[target_lang] = added
    return added_by_lang


def main() -> None:
    parser = argparse.ArgumentParser(description="KenyaHub PMC CC-BY Ethnobotany Lexicon Extractor")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--cache-dir", default="")
    parser.add_argument("--max-per-paper", type=int, default=250)
    args = parser.parse_args()

    print(f"=== KenyaHub PMC CC-BY Ethnobotany Extractor ({len(ETHNOBOTANY_PAPERS)} verified papers) ===")
    for p in ETHNOBOTANY_PAPERS:
        assert_repo_allowed(p["url"])
    if args.dry_run:
        print(f"DRY RUN: Verified {len(ETHNOBOTANY_PAPERS)} CC-BY ethnobotany papers against license_guard.py.")
        return

    cache_dir = Path(args.cache_dir) if args.cache_dir else None
    grouped: dict[str, dict[str, list[dict]]] = {}
    for paper in ETHNOBOTANY_PAPERS:
        pmcid = paper.get("pmcid") or (resolve_pmcid(paper["doi"]) if paper.get("doi") else None)
        if not pmcid:
            continue
        xml_text = fetch_jats_xml(pmcid, cache_dir)
        time.sleep(0.35)
        if not xml_text:
            continue
        rows = extract_rows_from_xml(xml_text, paper)[: args.max_per_paper]
        for lang_id, cat_id, entry in rows:
            grouped.setdefault(lang_id, {}).setdefault(cat_id, []).append(entry)
        print(f"  [{pmcid}] Extracted {len(rows)} vernacular ethnobotany entries ({paper['citation']}).")

    added = merge_entries(grouped)
    print(f"Completed PMC ethnobotany ingestion: {json.dumps(added)}")


if __name__ == "__main__":
    main()
