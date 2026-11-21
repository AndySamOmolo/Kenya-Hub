#!/usr/bin/env python3
"""
Compiles all open-access ingested corpora (CLDF typology, Unicode CLDR 49 locales,
Tatoeba/OER readers, web frequency lists, Wikimedia lexemes/incubator/wikisource,
NLP benchmarks, civic/agri datasets, staging dictionaries, KSL index, and R2 audio
clip counts) into a compact, frontend-ready JSON index:
  kenyahub/src/data/open-corpus-index.json

Run automatically in GitHub Actions after dataset ingestion so any newly added
or newly unlocked datasets are immediately utilized in both Web and Android UIs.
"""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src/data"
PUBLIC_DIR = ROOT / "public"
OUT_PATH = DATA_DIR / "open-corpus-index.json"

ISO_TO_LANG = {
    "sw": "swahili", "swa": "swahili", "swh": "swahili", "swc": "swahili", "sw-ke": "swahili",
    "ki": "kikuyu", "kik": "kikuyu",
    "luo": "luo",
    "luy": "luhya", "bxk": "luhya", "rag": "luhya",
    "kln": "kalenjin", "niq": "kalenjin",
    "kam": "kamba",
    "guz": "kisii",
    "mer": "meru",
    "nyf": "mijikenda", "dig": "mijikenda",
    "mas": "maasai",
    "tuv": "turkana",
    "so": "somali", "som": "somali", "so-ke": "somali",
    "om": "borana", "orm": "borana", "gax": "borana", "om-ke": "borana",
    "ebu": "embu",
    "dav": "taita",
    "pkb": "pokomo",
    "pko": "pokot",
    "saq": "samburu",
    "teo": "teso",
    "tvs": "taveta",
    "rel": "rendille",
    "dsh": "daasanach",
    "en-ke": "english-ke",
}


def load_json_safe(path: Path):
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def main() -> None:
    profiles_raw = load_json_safe(DATA_DIR / "language-typology/profiles.json") or {}
    cldr_raw = load_json_safe(DATA_DIR / "locales/cldr-49-kenya.json") or {}
    r2_raw = load_json_safe(PUBLIC_DIR / "r2-audio-index.json") or {}
    ksl_raw = load_json_safe(PUBLIC_DIR / "ksl-index.json") or {}
    lock_raw = load_json_safe(PUBLIC_DIR / ".audio-ingested-lock.json") or {}

    languages: dict[str, dict] = {}

    def ensure_lang(lid: str) -> dict:
        if lid not in languages:
            languages[lid] = {
                "languageId": lid,
                "r2AudioClips": 0,
                "cldr": None,
                "typology": None,
                "sampleReadings": [],
                "topFrequencyWords": [],
                "wikimedia": [],
                "benchmarks": [],
            }
        return languages[lid]

    # 1. Typology profiles (CLDF / Glottolog / PHOIBLE / Grambank)
    for lid, prof in (profiles_raw.get("languages") or {}).items():
        if prof.get("staging"):
            continue
        rec = ensure_lang(lid)
        rec["typology"] = {
            "iso639_3": prof.get("iso639_3", ""),
            "glottocode": prof.get("glottocode", ""),
            "familyPath": prof.get("familyPath", []),
            "cldrLocale": prof.get("cldrLocale"),
            "cldrCoverage": prof.get("cldrCoverage"),
            "cldfDatabases": prof.get("cldfDatabases", []),
            "commercialAudioSources": prof.get("commercialAudioSources", []),
            "phoibleSegments": prof.get("phoibleSegments"),
            "unimorphEntries": prof.get("unimorphEntries"),
        }

    # 2. Live R2 Audio counts per language (from r2-audio-index.json + lockfile)
    r2_langs = r2_raw.get("languages") if isinstance(r2_raw, dict) else {}
    if isinstance(r2_langs, dict):
        for lid, items in r2_langs.items():
            if isinstance(items, (dict, list)):
                ensure_lang(lid)["r2AudioClips"] = len(items)
    for lid, cnt in (lock_raw.get("uploadedAudioLanguageCounts") or {}).items():
        if isinstance(cnt, int) and cnt > ensure_lang(lid)["r2AudioClips"]:
            ensure_lang(lid)["r2AudioClips"] = cnt

    # 3. Unicode CLDR 49 Kenyan Locales (months & weekdays)
    for loc_key, loc_data in (cldr_raw.get("locales") or {}).items():
        lid = ISO_TO_LANG.get(loc_key.lower()) or (loc_data.get("languageId") if isinstance(loc_data, dict) else None)
        if not lid or not isinstance(loc_data, dict):
            continue
        raw_months = loc_data.get("months") or []
        raw_days = loc_data.get("days") or loc_data.get("weekdays") or []
        months = list(raw_months.values()) if isinstance(raw_months, dict) else list(raw_months)
        days = list(raw_days.values()) if isinstance(raw_days, dict) else list(raw_days)
        if months or days:
            ensure_lang(lid)["cldr"] = {
                "locale": loc_key,
                "months": months[:12],
                "days": days[:7],
                "license": cldr_raw.get("license", "Unicode-3.0"),
            }

    # 4. Readers (Tatoeba + any future OER Storybooks in src/data/readers/)
    readers_dir = DATA_DIR / "readers"
    total_reader_sentences = 0
    if readers_dir.is_dir():
        for rf in sorted(readers_dir.glob("*.json")):
            rd = load_json_safe(rf)
            if not isinstance(rd, dict):
                continue
            lid = rd.get("languageId")
            if not lid:
                for token in rf.stem.lower().split("-"):
                    if token in ISO_TO_LANG:
                        lid = ISO_TO_LANG[token]
                        break
            sents = rd.get("sentences") or rd.get("stories") or []
            if not lid or not isinstance(sents, list):
                continue
            total_reader_sentences += len(sents)
            rec = ensure_lang(lid)
            lic = rd.get("license", "CC-BY-4.0")
            src_name = rd.get("source") or rf.stem.replace("-", " ").title()
            for s in sents:
                if len(rec["sampleReadings"]) >= 8:
                    break
                if isinstance(s, str) and 8 <= len(s.strip()) <= 160:
                    rec["sampleReadings"].append({"text": s.strip(), "source": src_name, "license": lic})
                elif isinstance(s, dict):
                    txt = str(s.get("text") or s.get("indigenous") or s.get("sentence") or "").strip()
                    eng = str(s.get("english") or s.get("translation") or "").strip()
                    if 6 <= len(txt) <= 180:
                        item = {"text": txt, "source": src_name, "license": lic}
                        if eng:
                            item["english"] = eng[:180]
                        rec["sampleReadings"].append(item)

    # 5. Frequency Lists (FineWeb-2 + any future MADLAD/HPLT/WURA/CulturaX)
    freq_dir = DATA_DIR / "frequency-lists"
    if freq_dir.is_dir():
        for ff in sorted(freq_dir.glob("*.json")):
            fd = load_json_safe(ff)
            if not isinstance(fd, dict):
                continue
            cfg = str(fd.get("config") or ff.stem).lower()
            lid = None
            for iso, mapped in ISO_TO_LANG.items():
                if f"-{iso}" in ff.stem.lower() or cfg.startswith(f"{iso}_") or cfg == iso:
                    lid = mapped
                    break
            if not lid:
                continue
            top_words = fd.get("topWords") or []
            clean_words = []
            for w in top_words:
                word = w[0] if isinstance(w, list) and w else (w.get("word") if isinstance(w, dict) else str(w))
                cnt = w[1] if isinstance(w, list) and len(w) > 1 else (w.get("count") if isinstance(w, dict) else None)
                if isinstance(word, str) and len(word) >= 2 and word.isalpha():
                    clean_words.append({"word": word, "count": cnt})
                if len(clean_words) >= 24:
                    break
            if clean_words:
                rec = ensure_lang(lid)
                rec["topFrequencyWords"] = clean_words

    # 6. Wikimedia (Wikidata Lexemes, Incubator, Swahili Wikisource)
    wiki_dir = DATA_DIR / "wikimedia"
    wikimedia_summary: list[dict] = []
    if wiki_dir.is_dir():
        for wf in sorted(wiki_dir.glob("*.json")):
            wd = load_json_safe(wf)
            if not isinstance(wd, dict):
                continue
            cnt = wd.get("count") or len(wd.get("lexemes") or wd.get("pages") or wd.get("articles") or [])
            wikimedia_summary.append({
                "id": wf.stem,
                "license": wd.get("license", "CC-BY-SA-4.0"),
                "count": cnt,
            })
            if "luo" in wf.stem:
                ensure_lang("luo")["wikimedia"].append({"id": wf.stem, "count": cnt, "license": wd.get("license", "CC-BY-SA-4.0")})
            elif "niq" in wf.stem:
                ensure_lang("kalenjin")["wikimedia"].append({"id": wf.stem, "count": cnt, "license": wd.get("license", "CC-BY-SA-4.0")})
            elif "sw" in wf.stem:
                ensure_lang("swahili")["wikimedia"].append({"id": wf.stem, "count": cnt, "license": wd.get("license", "CC-BY-SA-4.0")})

    # 7. Benchmarks (count rows across all .jsonl files in src/data/benchmarks/)
    bench_dir = DATA_DIR / "benchmarks"
    benchmarks_summary: list[dict] = []
    if bench_dir.is_dir():
        for bf in sorted(bench_dir.glob("*.jsonl")):
            try:
                line_count = sum(1 for _ in bf.open("r", encoding="utf-8", errors="ignore"))
            except Exception:
                line_count = 0
            benchmarks_summary.append({"id": bf.stem, "rows": line_count})
            stem_l = bf.stem.lower()
            if "swa" in stem_l or "swahili" in stem_l:
                ensure_lang("swahili")["benchmarks"].append({"id": bf.stem, "rows": line_count})
            elif "orm" in stem_l:
                ensure_lang("borana")["benchmarks"].append({"id": bf.stem, "rows": line_count})
            elif "ke" in stem_l or "ea-" in stem_l or "injongo" in stem_l or "uhura" in stem_l:
                ensure_lang("swahili")["benchmarks"].append({"id": bf.stem, "rows": line_count})

    # 8. Emerging & Staged Kenyan Varieties (ALL dictionaries/staging/*.json)
    staging_dir = DATA_DIR / "dictionaries/staging"
    staged_varieties: list[dict] = []
    if staging_dir.is_dir():
        for sf in sorted(staging_dir.glob("*.json")):
            sd = load_json_safe(sf)
            if not isinstance(sd, dict):
                continue
            entries_preview: list[dict] = []
            total_entries = 0
            for cat in sd.get("categories", []):
                ents = cat.get("entries", [])
                total_entries += len(ents)
                for e in ents:
                    if len(entries_preview) < 18:
                        entries_preview.append({
                            "english": str(e.get("english", ""))[:80],
                            "translation": str(e.get("translation", ""))[:80],
                            "context": str(e.get("context", ""))[:120],
                            "category": cat.get("id", "phrases"),
                        })
            staged_varieties.append({
                "id": sd.get("languageId", sf.stem),
                "name": sd.get("languageName", sf.stem.title()),
                "nativeName": sd.get("nativeName", sf.stem.title()),
                "isoCode": sd.get("isoCode", ""),
                "family": sd.get("family", ""),
                "counties": sd.get("counties", []),
                "totalEntries": total_entries,
                "sampleEntries": entries_preview,
            })

    # 9. Civic & Agricultural Open Datasets (src/data/civic/)
    civic_dir = DATA_DIR / "civic"
    civic_summary: list[dict] = []
    if civic_dir.is_dir():
        for cf in sorted(civic_dir.glob("*.json")):
            if cf.name == "open-datasets-manifest.json":
                continue
            cd = load_json_safe(cf)
            if not isinstance(cd, dict):
                continue
            civic_summary.append({
                "id": cf.stem,
                "license": cd.get("license", "Open Access"),
                "source": cd.get("source") or cd.get("url") or "",
                "pageCount": cd.get("pageCount"),
            })

    # 10. KSL (xki) open index
    ksl_summary = {
        "languageId": "ksl",
        "iso639_3": "xki",
        "sources": ksl_raw.get("sources", []),
        "zenodoFiles": ksl_raw.get("zenodoFiles", []),
        "glossCount": len(ksl_raw.get("glosses", [])),
    }

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "cldrVersion": cldr_raw.get("version", "49.0.0"),
        "stats": {
            "totalR2AudioClips": sum(v["r2AudioClips"] for v in languages.values()),
            "totalStagedVarieties": len(staged_varieties),
            "totalStagedEntries": sum(v["totalEntries"] for v in staged_varieties),
            "totalBenchmarkRows": sum(b["rows"] for b in benchmarks_summary),
            "totalReaderSentences": total_reader_sentences,
            "totalCivicDatasets": len(civic_summary),
            "totalWikimediaDatasets": len(wikimedia_summary),
            "pendingGatedCount": len(lock_raw.get("pendingGatedDatasets") or []),
        },
        "languages": languages,
        "stagedVarieties": staged_varieties,
        "ksl": ksl_summary,
        "benchmarks": benchmarks_summary,
        "wikimedia": wikimedia_summary,
        "civic": civic_summary,
    }

    OUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"[OK] Built {OUT_PATH} ({OUT_PATH.stat().st_size / 1024:.1f} KB) | stats={json.dumps(payload['stats'])}")


if __name__ == "__main__":
    main()
