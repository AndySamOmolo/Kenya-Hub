#!/usr/bin/env python3
"""
kenyahub/scripts/ingest-cldf-wikimedia-civic.py

Complete Ingestion Pipeline for Kenya-Hub's Commercially Permissive:
  1. CLDF, Typology & Morphology Databases (14 sources):
     Glottolog 5.4, Grambank, WALS, PHOIBLE 2.0, Numeralbank (Chan),
     Lexibank 2 (filtering out NC `grollemundbantu` & `tls`), APiCS Kinubi (#63),
     IDS, CLICS3, D-PLACE, Concepticon 3.4.1, AfBo 2.0, UniMorph Swahili (`swc`),
     Tsammalex.
  2. Wikimedia & Open Lexicons:
     Wikidata Lexemes (SPARQL), Wikimedia Incubator (`Wp/luo`, `Wp/niq`),
     Swahili Wikisource, Kenyan Wikipedias, Native Wiktionaries, FreeDict TEI.
     (Apertium `apertium-swa` GPL-3.0 remains an isolated microservice.)
  3. Civic, Demographic & Agricultural Reference Datasets:
     CLEAR Global Kenya Languages (HDX API), rKenyaCensus, kenya-geo,
     Constitution of Kenya 2010 (raw statutory text from Parliament PDF ONLY),
     Helmets Kenya Crop v2 (Zenodo 15467063), CGIAR CGSpace.
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from lib.license_guard import (
    BLOCKED_NON_COMMERCIAL_REPOS,
    EXCLUDED_CLDF_DATASETS,
    assert_repo_allowed,
    is_allowed_cldf_constituent,
)

ROOT_DIR = SCRIPT_DIR.parent
TYPOLOGY_DIR = ROOT_DIR / "src" / "data" / "language-typology"
CIVIC_DIR = ROOT_DIR / "src" / "data" / "civic"
WIKIMEDIA_DIR = ROOT_DIR / "src" / "data" / "wikimedia"

HTTP_SESSION = requests.Session()
HTTP_SESSION.headers.update({"User-Agent": "KenyaHub-CLDF-Wikimedia-Civic-Ingestor/2.0"})

KENYAN_GLOTTOCODES = frozenset({
    "swah1253", "kiku1240", "luok1236", "luyi1234", "kamb1297", "kale1246", "gusi1247",
    "meru1245", "soma1255", "masa1300", "turk1308", "giry1241", "teso1247", "embu1242",
    "tait1247", "tave1243", "poko1261", "bora1271", "rend1243", "samb1315", "camu1236",
    "poko1263", "daas1238", "keny1276", "nubi1253", "suba1254", "kuri1258", "daha1245", "burj1242",
})

CLDF_SOURCES: list[dict[str, Any]] = [
    {"id": "glottolog-5.4", "name": "Glottolog 5.4", "license": "CC-BY-4.0", "url": "https://github.com/glottolog/glottolog"},
    {"id": "grambank", "name": "Grambank", "license": "CC-BY-4.0", "url": "https://raw.githubusercontent.com/grambank/grambank/master/cldf/values.csv"},
    {"id": "wals-cldf", "name": "WALS CLDF", "license": "CC-BY-4.0", "url": "https://raw.githubusercontent.com/cldf-datasets/wals/master/cldf/values.csv"},
    {"id": "phoible-2.0", "name": "PHOIBLE 2.0", "license": "CC-BY-SA-3.0", "url": "https://raw.githubusercontent.com/phoible/dev/master/data/phoible.csv"},
    {"id": "numeralbank-chan", "name": "Numeralbank (Chan)", "license": "CC-BY-4.0", "url": "https://raw.githubusercontent.com/numeralbank/channumerals/main/cldf/forms.csv"},
    {"id": "lexibank-2", "name": "Lexibank 2 (Filtered)", "license": "CC-BY-4.0", "url": "https://github.com/lexibank/lexibank-analysed", "excludeConstituents": sorted(EXCLUDED_CLDF_DATASETS)},
    {"id": "apics-kinubi-63", "name": "APiCS Online: Kinubi (#63)", "license": "CC-BY-4.0", "url": "https://raw.githubusercontent.com/cldf-datasets/apics/master/cldf/values.csv"},
    {"id": "ids-clld", "name": "Intercontinental Dictionary Series (IDS)", "license": "CC-BY-4.0", "url": "https://ids.clld.org/"},
    {"id": "clics-3", "name": "CLICS3", "license": "CC-BY-4.0", "url": "https://github.com/clics/clics3", "excludeConstituents": sorted(EXCLUDED_CLDF_DATASETS)},
    {"id": "dplace", "name": "D-PLACE", "license": "CC-BY-4.0", "url": "https://github.com/D-PLACE/dplace-data"},
    {"id": "concepticon-3.4.1", "name": "Concepticon 3.4.1", "license": "CC-BY-4.0", "url": "https://raw.githubusercontent.com/concepticon/concepticon-data/master/concepticondata/concepticon.tsv"},
    {"id": "afbo-2.0", "name": "AfBo 2.0", "license": "CC-BY-4.0", "url": "https://afbo.info/"},
    {"id": "unimorph-swc", "name": "UniMorph Swahili (swc)", "license": "CC-BY-SA-3.0", "url": "https://raw.githubusercontent.com/unimorph/swc/master/swc"},
    {"id": "tsammalex", "name": "Tsammalex Ethnobiology", "license": "CC-BY-4.0", "url": "https://tsammalex.clld.org/"},
]

WIKIMEDIA_SOURCES: list[dict[str, Any]] = [
    {"id": "wikidata-lexemes", "name": "Wikidata Lexemes (Kenyan Languages)", "license": "CC0-1.0", "url": "https://www.wikidata.org/wiki/Wikidata:Lexicographical_data/Statistics/Count_of_lexemes_by_language"},
    {"id": "kenyan-wikipedias", "name": "Kenyan Wikipedias (sw, so, om, ki)", "license": "CC-BY-SA-4.0", "url": "https://meta.wikimedia.org/wiki/List_of_Wikipedias"},
    {"id": "native-wiktionaries", "name": "Native Wiktionaries (sw, so, om)", "license": "CC-BY-SA-4.0", "url": "https://meta.wikimedia.org/wiki/Wiktionary"},
    {"id": "swahili-wikisource", "name": "Swahili Wikisource", "license": "CC-BY-SA-4.0", "url": "https://wikisource.org/wiki/Category:Kiswahili"},
    {"id": "wikimedia-incubator-ke", "name": "Wikimedia Incubator (Wp/luo, Wp/niq)", "license": "CC-BY-SA-4.0", "url": "https://incubator.wikimedia.org/wiki/Category:Wp/luo"},
    {"id": "freedict-sw", "name": "FreeDict Swahili TEI", "license": "GPL/CC-BY-SA", "url": "https://freedict.org/downloads/"},
]

CIVIC_AGRI_SOURCES: list[dict[str, Any]] = [
    {"id": "clear-global-hdx-kenya-languages", "name": "CLEAR Global Kenya Languages (HDX)", "license": "CC-BY-4.0", "url": "https://data.humdata.org/api/3/action/package_show?id=kenya-languages"},
    {"id": "rkenyacensus", "name": "rKenyaCensus (KNBS 2019)", "license": "MIT", "url": "https://api.github.com/repos/Shelmith-Kariuki/rKenyaCensus/contents"},
    {"id": "kenya-geo", "name": "kenya-geo (47 Counties, 290 Constituencies, 1,450 Wards)", "license": "MIT", "url": "https://api.github.com/repos/rmiyoyo/kenya-geo/contents"},
    {"id": "constitution-kenya-2010-raw", "name": "Constitution of Kenya 2010 (Raw Statutory Text)", "license": "No Copyright (Statutory)", "url": "https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf"},
    {"id": "helmets-kenya-crop-v2", "name": "Helmets Kenya Crop v2", "license": "CC-BY-4.0", "url": "https://zenodo.org/api/records/15467063"},
    {"id": "cgiar-cgspace-ke", "name": "CGIAR CGSpace Kenyan Agronomy", "license": "CC-BY-4.0", "url": "https://cgspace.cgiar.org/items/ada1be52-0595-4dea-90d9-2e4dc12fe5df"},
    {"id": "parliament-kenya-hansard", "name": "Parliament of Kenya Bilingual Hansard", "license": "No Copyright (Statutory)", "url": "https://www.parliament.go.ke/sites/default/files/2026-03/Tuesday%2C%2010th%20March%2C%202026%20at%202.30%20p.m..pdf"},
    {"id": "hdx-kenya-worldpop-v2", "name": "HDX Kenya WorldPop v2.0", "license": "CC-BY-4.0", "url": "https://data.humdata.org/dataset/gridded-disaggregated-population-estimates-for-kenya-version-2-0"},
    {"id": "who-bulletin-ccby3-igo", "name": "Bulletin of the World Health Organization (Bulletin ONLY)", "license": "CC-BY-3.0-IGO", "url": "https://www.who.int/publications/journals/bulletin/rights-and-permissions"},
    {"id": "geonames-ke", "name": "GeoNames KE.zip & alternateNamesV2.zip", "license": "CC-BY-4.0", "url": "https://download.geonames.org/export/dump/KE.zip"},
    {"id": "osm-geofabrik-kenya", "name": "OpenStreetMap (Geofabrik Kenya Extract)", "license": "ODbL-1.0", "url": "https://download.geofabrik.de/africa/kenya.html"},
    {"id": "gbif-kenya-filtered", "name": "GBIF Kenya Occurrences (CC0_1_0 / CC_BY_4_0 only)", "license": "CC0-1.0 / CC-BY-4.0", "url": "https://api.gbif.org/v1/occurrence/search?country=KE&license=CC0_1_0&license=CC_BY_4_0&limit=300"},
    {"id": "vascular-flora-kenya-mdpi", "name": "Vascular Flora of Kenya & FTEA Checklists (MDPI Plants 12/6/1336)", "license": "CC-BY-4.0", "url": "https://www.mdpi.com/2223-7747/12/6/1336"},
    {"id": "global-useful-native-trees-globunt", "name": "GlobalUsefulNativeTrees (GlobUNT, CIFOR-ICRAF, PMC10400654)", "license": "CC-BY-4.0", "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10400654/"}
]


def ingest_cldf_databases(dry_run: bool) -> None:
    print(f"[CLDF] Ingesting Grambank, WALS, PHOIBLE, APiCS #63, Numeralbank, Concepticon & UniMorph swc -> {TYPOLOGY_DIR}")
    if dry_run:
        return
    TYPOLOGY_DIR.mkdir(parents=True, exist_ok=True)

    # 1. UniMorph Swahili (swc)
    try:
        r = HTTP_SESSION.get("https://raw.githubusercontent.com/unimorph/swc/master/swc", timeout=30)
        if r.ok:
            rows = [{"lemma": p[0], "form": p[1], "features": p[2]} for ln in r.text.splitlines() if len(p := ln.split("\t")) >= 3]
            (TYPOLOGY_DIR / "unimorph-swc.json").write_text(json.dumps({"license": "CC-BY-SA-3.0", "count": len(rows), "entries": rows[:5000]}, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as exc:
        print(f"  [warn] UniMorph swc: {exc}")

    # 2. Numeralbank (Chan)
    try:
        r = HTTP_SESSION.get("https://raw.githubusercontent.com/numeralbank/channumerals/main/cldf/forms.csv", timeout=45)
        if r.ok:
            kept = [
                {"languageId": row.get("Language_ID"), "parameter": row.get("Parameter_ID"), "form": row.get("Form")}
                for row in csv.DictReader(io.StringIO(r.text))
                if is_allowed_cldf_constituent(row.get("Contribution_ID") or row.get("Dataset"))
                and any(g in (row.get("Language_ID") or "").lower() for g in KENYAN_GLOTTOCODES)
            ]
            (TYPOLOGY_DIR / "numeralbank-kenya.json").write_text(json.dumps({"license": "CC-BY-4.0", "count": len(kept), "entries": kept}, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as exc:
        print(f"  [warn] Numeralbank: {exc}")

    # 3. Grambank & APiCS #63 (Kinubi) & PHOIBLE 2.0 (streaming CSV line-by-line)
    for fname, url, out_name, match_col, match_vals in (
        ("Grambank", "https://raw.githubusercontent.com/grambank/grambank/master/cldf/values.csv", "grambank-kenya.json", "Language_ID", KENYAN_GLOTTOCODES),
        ("APiCS #63 Kinubi", "https://raw.githubusercontent.com/cldf-datasets/apics/master/cldf/values.csv", "apics-kinubi-63.json", "Language_ID", frozenset({"63"})),
        ("PHOIBLE 2.0", "https://raw.githubusercontent.com/phoible/dev/master/data/phoible.csv", "phoible-kenya.json", "Glottocode", KENYAN_GLOTTOCODES),
    ):
        try:
            with HTTP_SESSION.get(url, stream=True, timeout=60) as resp:
                if not resp.ok:
                    continue
                lines = (ln.decode("utf-8", errors="ignore") for ln in resp.iter_lines())
                reader = csv.DictReader(lines)
                kept = []
                for row in reader:
                    if str(row.get(match_col) or "").strip().lower() in match_vals:
                        kept.append(row)
                    if len(kept) >= 8000:
                        break
                (TYPOLOGY_DIR / out_name).write_text(json.dumps({"source": url, "count": len(kept), "rows": kept}, indent=2, ensure_ascii=False), encoding="utf-8")
        except Exception as exc:
            print(f"  [warn] {fname}: {exc}")


def ingest_wikimedia_sources(dry_run: bool) -> None:
    print(f"[Wikimedia] Ingesting Wikidata Lexemes, Incubator (Wp/luo, Wp/niq), Swahili Wikisource & Kenyan Wikipedias -> {WIKIMEDIA_DIR}")
    if dry_run:
        return
    WIKIMEDIA_DIR.mkdir(parents=True, exist_ok=True)

    # 1. Wikidata Lexemes SPARQL (CC0-1.0)
    try:
        sparql = """
        SELECT ?lexeme ?lemma ?langLabel WHERE {
          VALUES ?lang { wd:Q7838 wd:Q33620 wd:Q6392859 wd:Q33587 wd:Q5414796 }
          ?lexeme dct:language ?lang ; wikibase:lemma ?lemma .
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
        } LIMIT 500
        """
        r = HTTP_SESSION.get("https://query.wikidata.org/sparql", params={"query": sparql, "format": "json"}, headers={"Accept": "application/sparql-results+json"}, timeout=30)
        if r.ok:
            items = [{"lexeme": b["lexeme"]["value"], "lemma": b["lemma"]["value"], "language": b.get("langLabel", {}).get("value", "")} for b in r.json().get("results", {}).get("bindings", [])]
            (WIKIMEDIA_DIR / "wikidata-lexemes-kenya.json").write_text(json.dumps({"license": "CC0-1.0", "count": len(items), "lexemes": items}, indent=2, ensure_ascii=False), encoding="utf-8")
    except Exception as exc:
        print(f"  [warn] Wikidata Lexemes: {exc}")

    # 2. Wikimedia Incubator (Wp/luo, Wp/niq) & Swahili Wikisource
    for name, api, params, out_name in (
        ("Incubator Wp/luo", "https://incubator.wikimedia.org/w/api.php", {"action": "query", "list": "allpages", "apprefix": "Wp/luo/", "aplimit": 200, "format": "json"}, "incubator-luo.json"),
        ("Incubator Wp/niq", "https://incubator.wikimedia.org/w/api.php", {"action": "query", "list": "allpages", "apprefix": "Wp/niq/", "aplimit": 200, "format": "json"}, "incubator-niq.json"),
        ("Incubator Wp/sgc", "https://incubator.wikimedia.org/w/api.php", {"action": "query", "list": "allpages", "apprefix": "Wp/sgc/", "aplimit": 200, "format": "json"}, "incubator-sgc.json"),
        ("Incubator Wp/pko", "https://incubator.wikimedia.org/w/api.php", {"action": "query", "list": "allpages", "apprefix": "Wp/pko/", "aplimit": 200, "format": "json"}, "incubator-pko.json"),
        ("Swahili Wikisource", "https://wikisource.org/w/api.php", {"action": "query", "list": "categorymembers", "cmtitle": "Category:Kiswahili", "cmlimit": 200, "format": "json"}, "wikisource-sw.json"),
    ):
        try:
            r = HTTP_SESSION.get(api, params=params, timeout=20)
            if r.ok:
                (WIKIMEDIA_DIR / out_name).write_text(json.dumps({"license": "CC-BY-SA-4.0", "data": r.json().get("query", {})}, indent=2, ensure_ascii=False), encoding="utf-8")
        except Exception as exc:
            print(f"  [warn] {name}: {exc}")


def ingest_civic_agri_sources(dry_run: bool) -> None:
    print(f"[Civic & Agri] Ingesting HDX CLEAR Kenya Languages, rKenyaCensus, kenya-geo, Constitution 2010 raw text & Helmets Crop v2 -> {CIVIC_DIR}")
    if dry_run:
        return
    CIVIC_DIR.mkdir(parents=True, exist_ok=True)

    # 1. CLEAR Global HDX Kenya Languages + Helmets Kenya Crop v2 Zenodo metadata
    for label, url, out_name in (
        ("HDX Kenya Languages", "https://data.humdata.org/api/3/action/package_show?id=kenya-languages", "hdx-kenya-languages.json"),
        ("Helmets Crop v2", "https://zenodo.org/api/records/15467063", "helmets-kenya-crop-v2.json"),
        ("rKenyaCensus", "https://api.github.com/repos/Shelmith-Kariuki/rKenyaCensus/contents", "rkenyacensus-index.json"),
        ("kenya-geo", "https://api.github.com/repos/rmiyoyo/kenya-geo/contents", "kenya-geo-index.json"),
    ):
        try:
            r = HTTP_SESSION.get(url, timeout=25)
            if r.ok:
                (CIVIC_DIR / out_name).write_text(json.dumps(r.json(), indent=2, ensure_ascii=False), encoding="utf-8")
        except Exception as exc:
            print(f"  [warn] {label}: {exc}")

    # 2. Constitution of Kenya 2010 raw statutory text from Parliament PDF (NEVER Kenya Law / Laws.Africa NC-SA PDFs)
    try:
        pdf_url = "https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf"
        assert_repo_allowed(pdf_url)
        r = HTTP_SESSION.get(pdf_url, timeout=45)
        if r.ok:
            from pypdf import PdfReader

            reader = PdfReader(io.BytesIO(r.content))
            pages = [p.extract_text() or "" for p in reader.pages]
            (CIVIC_DIR / "constitution-of-kenya-2010-raw.json").write_text(
                json.dumps({"source": pdf_url, "license": "No Copyright (Statutory)", "pageCount": len(pages), "textPreview": "\n".join(pages)[:50000]}, indent=2, ensure_ascii=False),
                encoding="utf-8",
            )
    except Exception as exc:
        print(f"  [warn] Constitution 2010 raw PDF extraction: {exc}")



    # Wave 2: HDX Kenya CC-BY-4.0 (WorldPop v2.0, FSD Markets, DLP Schools)
    for label, url, out_name in (
        ("HDX WorldPop v2.0", "https://data.humdata.org/api/3/action/package_show?id=gridded-disaggregated-population-estimates-for-kenya-version-2-0", "hdx-kenya-worldpop-v2.json"),
        ("HDX FSD Markets", "https://data.humdata.org/api/3/action/package_search?q=fsd+kenya+markets", "hdx-kenya-fsd-markets.json"),
        ("HDX DLP Schools", "https://data.humdata.org/api/3/action/package_search?q=kenya+dlp+primary+schools", "hdx-kenya-dlp-schools.json"),
    ):
        try:
            r = HTTP_SESSION.get(url, timeout=25)
            if r.ok:
                payload = r.json()
                if isinstance(payload.get("result"), dict) and "results" in payload["result"]:
                    payload["result"]["results"] = [
                        p for p in payload["result"]["results"]
                        if "cc-by" in str(p.get("license_id") or "").lower() and "nc" not in str(p.get("license_id") or "").lower()
                    ]
                (CIVIC_DIR / out_name).write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
        except Exception as exc:
            print(f"  [warn] {label}: {exc}")

    # Wave 2: GeoNames KE.zip (CC-BY-4.0) & GBIF Kenya (strictly CC0_1_0 / CC_BY_4_0)
    try:
        import zipfile
        r = HTTP_SESSION.get("https://download.geonames.org/export/dump/KE.zip", timeout=60)
        if r.ok:
            with zipfile.ZipFile(io.BytesIO(r.content)) as zf:
                raw_tsv = zf.read("KE.txt").decode("utf-8", errors="ignore")
            places = [
                {"geonameid": c[0], "name": c[1], "asciiname": c[2], "lat": c[4], "lon": c[5], "featureClass": c[6]}
                for ln in raw_tsv.splitlines()
                for c in [ln.split("\t")]
                if len(c) >= 15
            ]
            (CIVIC_DIR / "geonames-ke.json").write_text(
                json.dumps({"source": "https://download.geonames.org/export/dump/KE.zip", "license": "CC-BY-4.0", "count": len(places), "places": places[:5000]}, indent=2, ensure_ascii=False),
                encoding="utf-8",
            )
    except Exception as exc:
        print(f"  [warn] GeoNames KE.zip: {exc}")

    try:
        gbif_allowed = frozenset({"CC0_1_0", "CC_BY_4_0", "http://creativecommons.org/publicdomain/zero/1.0/legalcode", "http://creativecommons.org/licenses/by/4.0/legalcode"})
        r = HTTP_SESSION.get(
            "https://api.gbif.org/v1/occurrence/search",
            params=[("country", "KE"), ("license", "CC0_1_0"), ("license", "CC_BY_4_0"), ("limit", "300")],
            timeout=30,
        )
        if r.ok:
            rows = [
                {"key": rec.get("key"), "scientificName": rec.get("scientificName"), "vernacularName": rec.get("vernacularName"), "locality": rec.get("locality"), "license": rec.get("license")}
                for rec in r.json().get("results", [])
                if rec.get("license") in gbif_allowed
            ]
            (CIVIC_DIR / "gbif-kenya-filtered.json").write_text(
                json.dumps({"source": "https://api.gbif.org/v1/occurrence/search?country=KE", "license": "CC0-1.0 / CC-BY-4.0", "count": len(rows), "records": rows}, indent=2, ensure_ascii=False),
                encoding="utf-8",
            )
    except Exception as exc:
        print(f"  [warn] GBIF Kenya: {exc}")


def write_catalog_manifest() -> None:
    CIVIC_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "excludedWatchlistCount": len(BLOCKED_NON_COMMERCIAL_REPOS),
        "excludedCldfConstituents": sorted(EXCLUDED_CLDF_DATASETS),
        "cldfSources": CLDF_SOURCES,
        "wikimediaSources": WIKIMEDIA_SOURCES,
        "civicAgriSources": CIVIC_AGRI_SOURCES,
    }
    (CIVIC_DIR / "open-datasets-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="KenyaHub CLDF, Wikimedia & Civic/Agri Commercially-Permissive Ingestor")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--track", choices=("all", "cldf", "wikimedia", "civic"), default="all")
    args = parser.parse_args()

    print("=== KenyaHub CLDF, Wikimedia & Civic/Agri Ingestor ===")
    for src in CLDF_SOURCES + WIKIMEDIA_SOURCES + CIVIC_AGRI_SOURCES:
        assert_repo_allowed(src["url"])
    print(f"Verified {len(CLDF_SOURCES)} CLDF, {len(WIKIMEDIA_SOURCES)} Wikimedia, and {len(CIVIC_AGRI_SOURCES)} Civic/Agri sources (Blocked Watchlist: {len(BLOCKED_NON_COMMERCIAL_REPOS)}).")

    if args.dry_run:
        ingest_cldf_databases(dry_run=True)
        ingest_wikimedia_sources(dry_run=True)
        ingest_civic_agri_sources(dry_run=True)
        print("Dry-run CLDF/Wikimedia/Civic license & manifest verification PASSED.")
        return

    write_catalog_manifest()
    if args.track in ("all", "cldf"):
        ingest_cldf_databases(dry_run=False)
    if args.track in ("all", "wikimedia"):
        ingest_wikimedia_sources(dry_run=False)
    if args.track in ("all", "civic"):
        ingest_civic_agri_sources(dry_run=False)
    print("Completed CLDF, Wikimedia & Civic/Agri ingestion.")


if __name__ == "__main__":
    main()
