#!/usr/bin/env python3
"""
Compiles all ingested Kenyan language datasets (CLDF typology, Grambank, PHOIBLE, UniMorph,
Unicode CLDR 49 locales, Tatoeba/OER readers, web frequency lists, Wikimedia lexemes/
incubator/wikisource, reading-comprehension & knowledge quizzes, APiCS Kinubi, staging
dictionaries, KSL index, and R2 native-speaker audio clips) into:
  1. Compact static summary index: kenyahub/src/data/open-corpus-index.json
  2. Lazy-loaded per-language learner shards: kenyahub/public/data/learning/{audio,readers,quizzes,freq,grammar}/<langId>.json

Run automatically in GitHub Actions after dataset ingestion so any newly added
or newly unlocked datasets are immediately utilized in both Web and Android UIs.
"""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src/data"
PUBLIC_DIR = ROOT / "public"
OUT_PATH = DATA_DIR / "open-corpus-index.json"
SHARDS_DIR = PUBLIC_DIR / "data/learning"

ISO_TO_LANG = {
    "sw": "swahili", "swa": "swahili", "swh": "swahili", "swc": "swahili", "sw-ke": "swahili",
    "ki": "kikuyu", "kik": "kikuyu",
    "luo": "luo",
    "luy": "luhya", "bxk": "luhya", "rag": "luhya", "lwg": "luhya", "lkb": "luhya", "lts": "luhya",
    "kln": "kalenjin", "niq": "kalenjin", "sgc": "kalenjin", "enb": "kalenjin", "oki": "kalenjin",
    "kam": "kamba",
    "guz": "kisii",
    "mer": "meru", "thk": "meru",
    "nyf": "mijikenda", "dig": "mijikenda", "dug": "mijikenda",
    "mas": "maasai",
    "tuv": "turkana",
    "so": "somali", "som": "somali", "so-ke": "somali",
    "om": "borana", "orm": "borana", "gax": "borana", "gaz": "borana", "om-ke": "borana",
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
    # Emerging / staged varieties
    "kcn": "nubi",
    "kuj": "kuria",
    "ymm": "maay",
    "muu": "yaaku",
    "dal": "dahalo",
    "bji": "burji",
}

GLOTTO_TO_LANG = {
    "swah1253": "swahili", "kiku1240": "kikuyu", "luok1236": "luo", "luyi1234": "luhya",
    "kamb1297": "kamba", "kale1246": "kalenjin", "gusi1247": "kisii", "meru1245": "meru",
    "soma1255": "somali", "masa1300": "maasai", "turk1308": "turkana", "giry1241": "mijikenda",
    "teso1247": "teso", "embu1242": "embu", "tait1247": "taita", "tave1243": "taveta",
    "poko1261": "pokomo", "bora1271": "borana", "rend1243": "rendille", "samb1315": "samburu",
    "camu1236": "ilchamus", "poko1263": "pokot", "daas1238": "daasanach",
    "nubi1253": "nubi", "burj1242": "burji", "daha1245": "dahalo",
}

WIKIDATA_LANG_LABEL_MAP = {
    "swahili": "swahili", "kiswahili": "swahili",
    "somali": "somali",
    "oromo": "borana", "borana": "borana",
    "kikuyu": "kikuyu", "gikuyu": "kikuyu",
    "luo": "luo", "dholuo": "luo",
    "kamba": "kamba",
    "maasai": "maasai",
    "kalenjin": "kalenjin",
    "luhya": "luhya",
    "kenyan sign language": "ksl",
}

ENGLISH_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
ENGLISH_MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]

# Readable learner labels for common UniMorph feature codes
UNIMORPH_LABELS = {
    "V": "Verb", "N": "Noun", "ADJ": "Adjective",
    "PRS": "Present", "PST": "Past", "FUT": "Future", "PRF": "Perfect", "HAB": "Habitual",
    "IND": "Indicative", "SBJV": "Subjunctive", "IMP": "Imperative", "COND": "Conditional",
    "NEG": "Negative", "POS": "Positive", "PASS": "Passive", "CAUS": "Causative",
    "1": "1st person", "2": "2nd person", "3": "3rd person",
    "SG": "Singular", "PL": "Plural",
    "NOM(1)": "I", "NOM(2)": "You (sg)", "NOM(3)": "He/She",
    "NOM(1,PL)": "We", "NOM(2,PL)": "You (pl)", "NOM(3,PL)": "They",
}


def load_json_safe(path: Path):
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def _humanize_slug(slug: str) -> str:
    txt = str(slug or "").replace("-", " ").strip()
    if not txt:
        return ""
    return txt[0].upper() + txt[1:]


def _humanize_unimorph_features(feat_str: str) -> str:
    parts = [p.strip() for p in str(feat_str or "").split(";") if p.strip()]
    out = []
    for p in parts:
        if p in UNIMORPH_LABELS:
            out.append(UNIMORPH_LABELS[p])
        elif p.startswith("NOM("):
            out.append("Subject " + p[4:-1])
        elif p.startswith("ACC("):
            out.append("Object " + p[4:-1])
        elif p.startswith("ARG"):
            continue
        else:
            out.append(p)
    return " · ".join(out[:4]) if out else feat_str


def _parse_exemplar_letters(raw: str) -> list[str]:
    if not raw or not isinstance(raw, str):
        return []
    inner = raw.strip().lstrip("[").rstrip("]")
    tokens = re.findall(r"\{[^}]+\}|[^\s]", inner)
    cleaned = []
    for t in tokens:
        t = t.strip("{}").strip()
        if t and t not in cleaned and len(t) <= 4:
            cleaned.append(t)
    return cleaned[:48]


def _write_shard(subdir: str, lang_id: str, data: dict) -> None:
    target_dir = SHARDS_DIR / subdir
    target_dir.mkdir(parents=True, exist_ok=True)
    (target_dir / f"{lang_id}.json").write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )


def main() -> None:
    profiles_raw = load_json_safe(DATA_DIR / "language-typology/profiles.json") or {}
    cldr_raw = load_json_safe(DATA_DIR / "locales/cldr-49-kenya.json") or {}
    r2_raw = load_json_safe(PUBLIC_DIR / "r2-audio-index.json") or {}
    ksl_raw = load_json_safe(PUBLIC_DIR / "ksl-index.json") or {}
    dholuo_ch_raw = load_json_safe(PUBLIC_DIR / "dholuo-audio-chapters.json") or {}
    lock_raw = load_json_safe(PUBLIC_DIR / ".audio-ingested-lock.json") or {}

    languages: dict[str, dict] = {}
    audio_shards: dict[str, list[dict]] = {}
    reader_shards: dict[str, dict] = {}
    quiz_shards: dict[str, list[dict]] = {}
    freq_shards: dict[str, list[str]] = {}
    grammar_shards: dict[str, dict] = {}

    def ensure_lang(lid: str) -> dict:
        if lid not in languages:
            languages[lid] = {
                "languageId": lid,
                "r2AudioClips": 0,
                "nativeAudioSamples": [],
                "cldr": None,
                "typology": None,
                "grambankFeatures": 0,
                "sampleReadings": [],
                "topFrequencyWords": [],
                "wikimedia": [],
                "wikimediaArticles": [],
                "wikidataLexemes": [],
                "phonemes": [],
                "morphologySamples": [],
                "benchmarks": [],
                "audioChapters": [],
                "shards": {
                    "audioCount": 0,
                    "storiesCount": 0,
                    "sentencesCount": 0,
                    "articlesCount": 0,
                    "quizCount": 0,
                    "freqCount": 0,
                    "hasGrammarShard": False,
                },
            }
        return languages[lid]

    def ensure_reader_shard(lid: str) -> dict:
        return reader_shards.setdefault(lid, {
            "languageId": lid,
            "stories": [],
            "bilingualReadings": [],
            "sentences": [],
            "newsArticles": [],
            "externalLinks": [],
            "chapterTranscripts": {},
        })

    def ensure_grammar_shard(lid: str) -> dict:
        return grammar_shards.setdefault(lid, {
            "languageId": lid,
            "days": [],
            "months": [],
            "currencyName": None,
            "orthographyLetters": [],
            "phonology": {"consonants": [], "vowels": [], "tones": []},
            "conjugations": [],
        })

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

    # 1b. Grambank grammatical feature counts (including nubi, burji, dahalo)
    gb_raw = load_json_safe(DATA_DIR / "language-typology/grambank-kenya.json") or {}
    gb_counts: dict[str, int] = {}
    for row in gb_raw.get("rows") or []:
        gc = str(row.get("Language_ID") or "").strip().lower()
        lid = GLOTTO_TO_LANG.get(gc)
        if lid:
            gb_counts[lid] = gb_counts.get(lid, 0) + 1
    for lid, cnt in gb_counts.items():
        if lid in ("nubi", "burji", "dahalo"):
            continue
        ensure_lang(lid)["grambankFeatures"] = cnt

    # 2. Live R2 Audio counts, curated preview (24), AND full per-language audio shards (ALL 5,871 clips)
    r2_langs = r2_raw.get("languages") if (isinstance(r2_raw, dict) and isinstance(r2_raw.get("languages"), dict)) else (r2_raw if isinstance(r2_raw, dict) else {})
    for lid, items in r2_langs.items():
        if not isinstance(items, dict):
            continue
        rec = ensure_lang(lid)
        rec["r2AudioClips"] = len(items)
        all_clips = []
        preview_candidates = []
        for slug, url in items.items():
            if not isinstance(url, str) or not url.startswith("https://"):
                continue
            label = _humanize_slug(slug)
            if not label:
                continue
            all_clips.append({"slug": slug, "label": label, "audioUrl": url})
            if slug.startswith("handbook-kavirondo") or slug.startswith("aporee-"):
                continue
            if 3 <= len(label) <= 64:
                preview_candidates.append((len(label), slug, label, url))
        all_clips.sort(key=lambda x: (len(x["label"]), x["slug"]))
        preview_candidates.sort(key=lambda x: (x[0], x[1]))
        rec["nativeAudioSamples"] = [
            {"slug": slug, "label": label, "audioUrl": url}
            for _ln, slug, label, url in preview_candidates[:24]
        ]
        if all_clips:
            audio_shards[lid] = all_clips
            rec["shards"]["audioCount"] = len(all_clips)
    for lid, cnt in (lock_raw.get("uploadedAudioLanguageCounts") or {}).items():
        if isinstance(cnt, int) and cnt > ensure_lang(lid)["r2AudioClips"]:
            ensure_lang(lid)["r2AudioClips"] = cnt

    # 3. Unicode CLDR 49 Kenyan Locales (prefer *-KE locales over generic; capture days, months, orthography, KES)
    cldr_locales = cldr_raw.get("locales") or {}
    # Sort so generic locales ('sw') are processed first and regional ('sw-KE') overwrite/win
    sorted_cldr_items = sorted(cldr_locales.items(), key=lambda kv: (1 if "-ke" in kv[0].lower() else 0, kv[0]))
    for loc_key, loc_data in sorted_cldr_items:
        lid = ISO_TO_LANG.get(loc_key.lower()) or (loc_data.get("languageId") if isinstance(loc_data, dict) else None)
        if not lid or not isinstance(loc_data, dict):
            continue
        raw_months = loc_data.get("months") or []
        raw_days = loc_data.get("days") or loc_data.get("weekdays") or []
        months = list(raw_months.values()) if isinstance(raw_months, dict) else list(raw_months)
        days = list(raw_days.values()) if isinstance(raw_days, dict) else list(raw_days)
        kes_name = None
        kes_raw = loc_data.get("KES")
        if isinstance(kes_raw, dict):
            kes_name = kes_raw.get("displayName") or kes_raw.get("displayName-count-one") or kes_raw.get("symbol")
        elif isinstance(kes_raw, str) and kes_raw.strip():
            kes_name = kes_raw.strip()
        exemplar_letters = _parse_exemplar_letters(loc_data.get("exemplarCharacters") or "")
        if months or days or kes_name or exemplar_letters:
            ensure_lang(lid)["cldr"] = {
                "locale": loc_key,
                "months": months[:12],
                "days": days[:7],
                "currencyName": kes_name,
                "license": cldr_raw.get("license", "Unicode-3.0"),
            }
            gshard = ensure_grammar_shard(lid)
            if days:
                gshard["days"] = [
                    {"english": ENGLISH_DAYS[i] if i < len(ENGLISH_DAYS) else f"Day {i+1}", "local": str(d)}
                    for i, d in enumerate(days[:7])
                ]
            if months:
                gshard["months"] = [
                    {"english": ENGLISH_MONTHS[i] if i < len(ENGLISH_MONTHS) else f"Month {i+1}", "local": str(m)}
                    for i, m in enumerate(months[:12])
                ]
            if kes_name:
                gshard["currencyName"] = kes_name
            if exemplar_letters:
                gshard["orthographyLetters"] = exemplar_letters

    # 4. Readers (FULL untruncated SIL-AI Bloom stories + Tatoeba practice sentences)
    readers_dir = DATA_DIR / "readers"
    total_reader_sentences = 0
    if readers_dir.is_dir():
        for rf in sorted(readers_dir.glob("*.json")):
            rd = load_json_safe(rf)
            if isinstance(rd, list):
                total_reader_sentences += len(rd)
                src_name = rf.stem.replace("-", " ").title()
                for row in rd:
                    if not isinstance(row, dict):
                        continue
                    lid = row.get("lang_id") or row.get("languageId")
                    if not lid:
                        for token in rf.stem.lower().split("-"):
                            if token in ISO_TO_LANG:
                                lid = ISO_TO_LANG[token]
                                break
                    if not lid:
                        continue
                    rec = ensure_lang(lid)
                    full_text = str(row.get("text") or "").strip()
                    title = str(row.get("title") or src_name).strip()[:100]
                    if len(full_text) >= 40:
                        rshard = ensure_reader_shard(lid)
                        if not any(st["title"] == title and st["text"][:60] == full_text[:60] for st in rshard["stories"]):
                            rshard["stories"].append({
                                "title": title,
                                "text": full_text,
                                "wordCount": len(full_text.split()),
                            })
                    if len(rec["sampleReadings"]) < 12:
                        raw_t = " ".join(full_text.split())
                        if len(raw_t) > 180:
                            raw_t = raw_t[:175].rsplit(" ", 1)[0].rstrip(",;:") + "."
                        if len(raw_t) >= 12:
                            rec["sampleReadings"].append({
                                "text": raw_t,
                                "source": title[:80],
                                "license": str(row.get("license") or "CC-BY-4.0"),
                            })
                continue
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
            rshard = ensure_reader_shard(lid)
            lic = rd.get("license", "CC-BY-4.0")
            src_name = rd.get("source") or rf.stem.replace("-", " ").title()
            seen_s = {x["text"] for x in rshard["sentences"]}
            for s in sents:
                txt = s.strip() if isinstance(s, str) else str(s.get("text") or s.get("indigenous") or s.get("sentence") or "").strip()
                eng = "" if isinstance(s, str) else str(s.get("english") or s.get("translation") or "").strip()
                if 8 <= len(txt) <= 180 and txt not in seen_s and len(rshard["sentences"]) < 150:
                    seen_s.add(txt)
                    item = {"text": txt}
                    if eng:
                        item["english"] = eng[:180]
                    rshard["sentences"].append(item)
                if len(rec["sampleReadings"]) < 12 and 8 <= len(txt) <= 180:
                    item_p = {"text": txt, "source": src_name, "license": lic}
                    if eng:
                        item_p["english"] = eng[:180]
                    rec["sampleReadings"].append(item_p)

    # 5. Frequency Lists (merge FineWeb-2 + CulturaX cleanly; keep top 500 in shard, top 24 in static index)
    freq_dir = DATA_DIR / "frequency-lists"
    merged_freq: dict[str, dict[str, int]] = {}
    if freq_dir.is_dir():
        for ff in sorted(freq_dir.glob("*.json")):
            fd = load_json_safe(ff)
            if not isinstance(fd, dict):
                continue
            cfg = str(fd.get("config") or ff.stem).lower()
            lid = None
            for iso, mapped in ISO_TO_LANG.items():
                if f"-{iso}" in ff.stem.lower() or cfg.startswith(f"{iso}_") or cfg.startswith(f"{iso}-") or cfg == iso:
                    lid = mapped
                    break
            if not lid:
                continue
            bucket = merged_freq.setdefault(lid, {})
            for w in fd.get("topWords") or []:
                word = w[0] if isinstance(w, list) and w else (w.get("word") if isinstance(w, dict) else str(w))
                cnt = w[1] if isinstance(w, list) and len(w) > 1 else (w.get("count") if isinstance(w, dict) else 1)
                if isinstance(word, str) and len(word) >= 2 and word.isalpha():
                    wl = word.lower()
                    bucket[wl] = bucket.get(wl, 0) + (int(cnt) if isinstance(cnt, (int, float)) else 1)
    for lid, word_counts in merged_freq.items():
        ranked = sorted(word_counts.items(), key=lambda kv: (-kv[1], kv[0]))
        top500 = [w for w, _c in ranked[:500]]
        if top500:
            freq_shards[lid] = top500
            rec = ensure_lang(lid)
            rec["topFrequencyWords"] = [{"word": w, "count": c} for w, c in ranked[:24]]
            rec["shards"]["freqCount"] = len(top500)

    # 6. Wikimedia (Wikidata Lexemes incl. KSL, Incubator ALL pages incl. Kipsigis sgc, Swahili Wikisource)
    wiki_dir = DATA_DIR / "wikimedia"
    wikimedia_summary: list[dict] = []
    ksl_wikidata_lexemes: list[str] = []
    if wiki_dir.is_dir():
        for wf in sorted(wiki_dir.glob("*.json")):
            wd = load_json_safe(wf)
            if not isinstance(wd, dict):
                continue
            inner_data = wd.get("data") if isinstance(wd.get("data"), dict) else {}
            pages_list = (
                wd.get("lexemes")
                or wd.get("pages")
                or wd.get("articles")
                or inner_data.get("allpages")
                or inner_data.get("categorymembers")
                or []
            )
            cnt = wd.get("count") or len(pages_list)
            wikimedia_summary.append({
                "id": wf.stem,
                "license": wd.get("license", "CC-BY-SA-4.0"),
                "count": cnt,
            })

            if wf.stem == "wikidata-lexemes-kenya" and isinstance(wd.get("lexemes"), list):
                lex_by_lang: dict[str, list[str]] = {}
                lex_totals: dict[str, int] = {}
                for lx in wd["lexemes"]:
                    if not isinstance(lx, dict):
                        continue
                    lang_lbl = str(lx.get("language") or "").strip().lower()
                    lid = WIKIDATA_LANG_LABEL_MAP.get(lang_lbl)
                    lemma = str(lx.get("lemma") or "").strip()
                    if lid and lemma:
                        lex_totals[lid] = lex_totals.get(lid, 0) + 1
                        if lid == "ksl":
                            if lemma not in ksl_wikidata_lexemes:
                                ksl_wikidata_lexemes.append(lemma)
                        else:
                            bucket = lex_by_lang.setdefault(lid, [])
                            if lemma not in bucket and len(bucket) < 24:
                                bucket.append(lemma)
                for lid, lems in lex_by_lang.items():
                    rec = ensure_lang(lid)
                    rec["wikidataLexemes"] = lems
                    rec["wikimedia"].append({"id": "wikidata-lexemes-kenya", "count": lex_totals.get(lid, len(lems)), "license": "CC0-1.0"})
                continue

            wiki_lid = None
            base_url = "https://incubator.wikimedia.org/wiki/"
            src_name = "Community Encyclopedia"
            if "luo" in wf.stem:
                wiki_lid = "luo"
            elif "niq" in wf.stem:
                wiki_lid = "kalenjin"
                src_name = "Nandi Reading Archive"
            elif "sgc" in wf.stem:
                wiki_lid = "kalenjin"
                src_name = "Kipsigis Reading Archive"
            elif "pko" in wf.stem:
                wiki_lid = "pokot"
            elif "wikisource-sw" in wf.stem:
                wiki_lid = "swahili"
                base_url = "https://wikisource.org/wiki/"
                src_name = "Swahili Classic Texts"
            if wiki_lid:
                rec = ensure_lang(wiki_lid)
                rshard = ensure_reader_shard(wiki_lid)
                rec["wikimedia"].append({"id": wf.stem, "count": cnt, "license": wd.get("license", "CC-BY-SA-4.0")})
                added_preview = 0
                for pg in pages_list:
                    if isinstance(pg, dict) and pg.get("ns", 0) == 0 and pg.get("title"):
                        raw_t = str(pg["title"]).strip()
                        display_t = raw_t.split("/", 2)[-1] if raw_t.startswith("Wp/") and raw_t.count("/") >= 2 else raw_t
                        if display_t and not display_t.startswith("Main"):
                            link_obj = {
                                "title": display_t,
                                "url": base_url + raw_t.replace(" ", "_"),
                                "source": src_name,
                            }
                            rshard["externalLinks"].append(link_obj)
                            if added_preview < 6 and len(rec["wikimediaArticles"]) < 12:
                                rec["wikimediaArticles"].append(link_obj)
                                added_preview += 1

    # 7. Benchmarks -> Reading Comprehension Quizzes (Belebele), Knowledge MCQs (AfriMMLU, Uhura ARC-Easy), Swahili News
    bench_dir = DATA_DIR / "benchmarks"
    benchmarks_summary: list[dict] = []
    if bench_dir.is_dir():
        bench_files = sorted(list(bench_dir.glob("*.jsonl")) + list(bench_dir.glob("*.json")))
        for bf in bench_files:
            stem_l = bf.stem.lower()
            if bf.suffix == ".json":
                jd = load_json_safe(bf)
                line_count = len(jd) if isinstance(jd, list) else (1 if isinstance(jd, dict) else 0)
                benchmarks_summary.append({"id": bf.stem, "rows": line_count})
                continue
            try:
                line_count = sum(1 for _ in bf.open("r", encoding="utf-8", errors="ignore"))
            except Exception:
                line_count = 0
            benchmarks_summary.append({"id": bf.stem, "rows": line_count})

            # Skip non-learner model safety eval tables
            if "safety-audit" in stem_l:
                continue

            target_lid = None
            if "swa" in stem_l or "swahili" in stem_l or "swh" in stem_l or "xp3-sw" in stem_l:
                target_lid = "swahili"
            elif "orm" in stem_l or "gaz" in stem_l:
                target_lid = "borana"
            elif "luo" in stem_l:
                target_lid = "luo"
            elif "som" in stem_l:
                target_lid = "somali"
            elif "xp3-ki" in stem_l:
                target_lid = "kikuyu"
            elif "injongo" in stem_l or "uhura" in stem_l or "afrihate" in stem_l:
                target_lid = "swahili"

            # Handle cohere-aya-ke by inspecting language_code per row
            if "cohere-aya-ke" in stem_l:
                ensure_lang("somali")["benchmarks"].append({"id": bf.stem, "rows": line_count})
                ensure_lang("swahili")["benchmarks"].append({"id": bf.stem, "rows": line_count})
                continue

            if not target_lid:
                continue
            rec = ensure_lang(target_lid)
            rec["benchmarks"].append({"id": bf.stem, "rows": line_count})

            # Build real interactive quizzes from Belebele, AfriMMLU, Uhura ARC-Easy
            if "belebele" in stem_l:
                q_bucket = quiz_shards.setdefault(target_lid, [])
                added_q = 0
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if added_q >= 80:
                                break
                            obj = json.loads(line)
                            passage = " ".join(str(obj.get("flores_passage") or "").split())
                            question = " ".join(str(obj.get("question") or "").split())
                            choices = [
                                " ".join(str(obj.get(f"mc_answer{i}") or "").split())
                                for i in (1, 2, 3, 4)
                            ]
                            try:
                                ans_idx = int(obj.get("correct_answer_num", 0)) - 1
                            except Exception:
                                ans_idx = -1
                            if passage and question and all(choices) and 0 <= ans_idx <= 3 and len(passage) <= 900:
                                q_bucket.append({
                                    "type": "reading",
                                    "passage": passage,
                                    "question": question,
                                    "choices": choices,
                                    "correctIndex": ans_idx,
                                })
                                added_q += 1
                except Exception:
                    pass

            elif "afrimmlu" in stem_l:
                q_bucket = quiz_shards.setdefault(target_lid, [])
                added_q = 0
                letter_map = {"A": 0, "B": 1, "C": 2, "D": 3}
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if added_q >= 50:
                                break
                            obj = json.loads(line)
                            question = " ".join(str(obj.get("question") or "").split())
                            raw_choices = obj.get("choices")
                            if isinstance(raw_choices, str):
                                try:
                                    raw_choices = json.loads(raw_choices.replace("'", '"'))
                                except Exception:
                                    raw_choices = []
                            choices = [" ".join(str(c).split()) for c in (raw_choices or []) if str(c).strip()]
                            ans_raw = str(obj.get("answer") or "").strip().upper()
                            ans_idx = letter_map.get(ans_raw, -1)
                            if question and len(choices) == 4 and 0 <= ans_idx <= 3:
                                q_bucket.append({
                                    "type": "knowledge",
                                    "subject": str(obj.get("subject") or "General Knowledge").replace("_", " ").title(),
                                    "question": question,
                                    "choices": choices,
                                    "correctIndex": ans_idx,
                                })
                                added_q += 1
                except Exception:
                    pass

            elif "uhura-arc-easy" in stem_l:
                q_bucket = quiz_shards.setdefault(target_lid, [])
                added_q = 0
                letter_map = {"A": 0, "B": 1, "C": 2, "D": 3, "1": 0, "2": 1, "3": 2, "4": 3}
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if added_q >= 50:
                                break
                            obj = json.loads(line)
                            question = " ".join(str(obj.get("question") or "").split())
                            ch_obj = obj.get("choices") or {}
                            texts = ch_obj.get("text") if isinstance(ch_obj, dict) else []
                            labels = ch_obj.get("label") if isinstance(ch_obj, dict) else []
                            ans_key = str(obj.get("answerKey") or "").strip().upper()
                            ans_idx = labels.index(ans_key) if ans_key in labels else letter_map.get(ans_key, -1)
                            choices = [" ".join(str(t).split()) for t in (texts or []) if str(t).strip()]
                            if question and len(choices) >= 3 and 0 <= ans_idx < len(choices):
                                q_bucket.append({
                                    "type": "science",
                                    "subject": "Everyday Science",
                                    "question": question,
                                    "choices": choices[:4],
                                    "correctIndex": ans_idx,
                                })
                                added_q += 1
                except Exception:
                    pass

            elif "zindi-swahili-news" in stem_l:
                rshard = ensure_reader_shard(target_lid)
                added_n = 0
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if added_n >= 30:
                                break
                            obj = json.loads(line)
                            content = " ".join(str(obj.get("content") or "").split())
                            cat_n = str(obj.get("category") or "News").strip().title()
                            if 120 <= len(content) <= 1400:
                                first_sent = content.split(".", 1)[0][:72].strip()
                                rshard["newsArticles"].append({
                                    "title": first_sent + ("..." if len(first_sent) >= 70 else ""),
                                    "category": cat_n,
                                    "text": content,
                                })
                                added_n += 1
                except Exception:
                    pass

            elif "swahili-finetome" in stem_l:
                rshard = ensure_reader_shard(target_lid)
                added_bi = 0
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if added_bi >= 40:
                                break
                            obj = json.loads(line)
                            sw_q = " ".join(str(obj.get("instruction") or "").split())
                            en_q = " ".join(str(obj.get("instruction_en") or "").split())
                            sw_a = " ".join(str(obj.get("output") or "").split())
                            en_a = " ".join(str(obj.get("output_en") or "").split())
                            if 15 <= len(sw_q) <= 140 and 40 <= len(sw_a) <= 700 and en_a and "```" not in sw_a:
                                rshard["bilingualReadings"].append({
                                    "title": sw_q[:90],
                                    "englishTitle": en_q[:90],
                                    "text": sw_a,
                                    "english": en_a[:750],
                                })
                                added_bi += 1
                except Exception:
                    pass

            if len(rec["sampleReadings"]) < 12 and any(k in stem_l for k in ("belebele", "xp3-ki", "zindi-swahili-news")):
                seen_txt = {r["text"] for r in rec["sampleReadings"]}
                src_label = "Reading Passage" if "belebele" in stem_l else ("Practice Sentence" if "xp3" in stem_l else "Swahili News")
                lic_label = "CC-BY-SA-4.0" if "belebele" in stem_l else ("Apache-2.0" if "xp3" in stem_l else "CC-BY-4.0")
                try:
                    with bf.open("r", encoding="utf-8", errors="ignore") as fh:
                        for line in fh:
                            if len(rec["sampleReadings"]) >= 12:
                                break
                            obj = json.loads(line)
                            cand = str(obj.get("flores_passage") or obj.get("targets") or obj.get("content") or "").strip()
                            cand = " ".join(cand.split())
                            if len(cand) > 175:
                                cut = cand[:175].rsplit(" ", 1)[0].rstrip(",;:")
                                cand = cut + ("." if not cut.endswith((".", "!", "?")) else "")
                            if 25 <= len(cand) <= 185 and cand not in seen_txt:
                                seen_txt.add(cand)
                                rec["sampleReadings"].append({"text": cand, "source": src_label, "license": lic_label})
                except Exception:
                    pass

    # 8. Emerging & Staged Kenyan Varieties (ALL dictionaries/staging/*.json + APiCS Kinubi summary)
    apics_raw = load_json_safe(DATA_DIR / "language-typology/apics-kinubi-63.json") or {}
    apics_feature_count = len(apics_raw.get("rows") or [])
    staging_dir = DATA_DIR / "dictionaries/staging"
    staged_varieties: list[dict] = []
    if staging_dir.is_dir():
        for sf in sorted(staging_dir.glob("*.json")):
            sd = load_json_safe(sf)
            if not isinstance(sd, dict):
                continue
            entries_preview: list[dict] = []
            total_entries = 0
            if sd.get("categories"):
                for cat in sd.get("categories", []):
                    ents = cat.get("entries", [])
                    total_entries += len(ents)
                    for e in ents:
                        if len(entries_preview) < 400:
                            entries_preview.append({
                                "english": str(e.get("english", ""))[:80],
                                "translation": str(e.get("translation", ""))[:80],
                                "context": str(e.get("context", ""))[:120],
                                "category": cat.get("id", "phrases"),
                            })
            elif isinstance(sd.get("entries"), list):
                ents = sd.get("entries", [])
                total_entries += len(ents)
                for e in ents[:400]:
                    entries_preview.append({
                        "english": str(e.get("english", ""))[:80],
                        "translation": str(e.get("translation", ""))[:80],
                        "context": str(e.get("context", ""))[:120],
                        "category": "phrases",
                    })
            vid = sd.get("languageId", sf.stem)
            var_obj = {
                "id": vid,
                "name": sd.get("languageName", sf.stem.title()),
                "nativeName": sd.get("nativeName", sf.stem.title()),
                "isoCode": sd.get("isoCode") or sd.get("iso639_3", ""),
                "family": sd.get("family", ""),
                "counties": sd.get("counties", []),
                "totalEntries": total_entries,
                "sampleEntries": entries_preview,
            }
            if vid == "nubi" and apics_feature_count > 0:
                var_obj["grammarFeatureCount"] = apics_feature_count + gb_counts.get("nubi", 0)
            staged_varieties.append(var_obj)

    # 9. Civic & Agricultural Open Datasets (src/data/civic/)
    civic_dir = DATA_DIR / "civic"
    civic_summary: list[dict] = []
    if civic_dir.is_dir():
        for cf in sorted(civic_dir.glob("*.json")):
            if cf.name == "open-datasets-manifest.json":
                continue
            cd = load_json_safe(cf)
            if isinstance(cd, list):
                civic_summary.append({"id": cf.stem, "license": "Open Access", "source": "", "pageCount": len(cd)})
                continue
            if not isinstance(cd, dict):
                continue
            civic_summary.append({
                "id": cf.stem,
                "license": cd.get("license", "Open Access"),
                "source": cd.get("source") or cd.get("url") or "",
                "pageCount": cd.get("pageCount"),
            })

    # 10. Dholuo 1920 Kavirondo Phrase Book Spoken Chapters (keep compact metadata in index, full phrases in readers/luo.json)
    dholuo_chapters = dholuo_ch_raw.get("chapters") or []
    if dholuo_chapters:
        compact_chapters = []
        luo_rshard = ensure_reader_shard("luo")
        for ch in dholuo_chapters:
            ch_copy = {k: v for k, v in ch.items() if k != "phrases"}
            phrases = ch.get("phrases") or []
            if phrases:
                ch_copy["phraseCount"] = len(phrases)
                luo_rshard["chapterTranscripts"][ch.get("id", "")] = phrases
            compact_chapters.append(ch_copy)
        ensure_lang("luo")["audioChapters"] = compact_chapters

    # 11. KSL (xki) video, storybook & pose index
    ksl_videos = ksl_raw.get("videos") or []
    maseno_preview = [v for v in ksl_videos if v.get("category") == "maseno-stickman"][:80]
    human_preview = [v for v in ksl_videos if v.get("category") == "human-sign-bible"][:40]
    other_preview = [v for v in ksl_videos if v.get("category") not in ("maseno-stickman", "human-sign-bible")][:20]
    ksl_preview = maseno_preview + human_preview + other_preview
    ksl_storybooks = ksl_raw.get("storybooks") or []
    ksl_summary = {
        "languageId": "ksl",
        "iso639_3": "xki",
        "sources": ksl_raw.get("sources", []),
        "zenodoFiles": ksl_raw.get("zenodoFiles", []),
        "videos": ksl_preview,
        "storybooks": ksl_storybooks,
        "wikidataLexemes": ksl_wikidata_lexemes,
        "videoCount": len(ksl_videos),
        "extractedSignCount": int(ksl_raw.get("extractedSignCount") or len(ksl_raw.get("signs") or [])),
        "glossCount": len(ksl_raw.get("glosses", [])),
    }

    # 12. PHOIBLE 2.0 IPA Sound Inventories (full consonants/vowels/tones + allophones into grammar shards)
    phoible_raw = load_json_safe(DATA_DIR / "language-typology/phoible-kenya.json") or {}
    phoible_rows = phoible_raw.get("rows") or []
    phon_by_lang: dict[str, list[str]] = {}
    phon_grouped: dict[str, dict[str, dict[str, str]]] = {}
    for prow in phoible_rows:
        iso3 = str(prow.get("ISO6393") or "").strip().lower()
        lid = ISO_TO_LANG.get(iso3)
        seg = str(prow.get("Phoneme") or "").strip()
        seg_class = str(prow.get("SegmentClass") or "consonant").strip().lower()
        allophones = str(prow.get("Allophones") or "").strip()
        if allophones.upper() == "NA":
            allophones = ""
        if lid and seg:
            if lid not in ("nubi", "dahalo", "burji"):
                bucket = phon_by_lang.setdefault(lid, [])
                if seg not in bucket and len(bucket) < 36:
                    bucket.append(seg)
            grp = phon_grouped.setdefault(lid, {"consonants": {}, "vowels": {}, "tones": {}})
            key = "vowels" if "vowel" in seg_class else ("tones" if "tone" in seg_class else "consonants")
            if seg not in grp[key]:
                grp[key][seg] = allophones
    for lid, segs in phon_by_lang.items():
        ensure_lang(lid)["phonemes"] = segs
    for lid, grp in phon_grouped.items():
        if lid in ("nubi", "dahalo", "burji"):
            continue
        gshard = ensure_grammar_shard(lid)
        gshard["phonology"] = {
            "consonants": [{"symbol": k, "allophones": v} for k, v in grp["consonants"].items()],
            "vowels": [{"symbol": k, "allophones": v} for k, v in grp["vowels"].items()],
            "tones": [{"symbol": k, "allophones": v} for k, v in grp["tones"].items()],
        }

    # 13. UniMorph Swahili Verb Conjugation Paradigms (ALL 46 lemmas grouped into grammar shard!)
    unimorph_raw = load_json_safe(DATA_DIR / "language-typology/unimorph-swc.json") or {}
    unimorph_entries = unimorph_raw.get("entries") or []
    morph_samples: list[dict] = []
    seen_lemmas: set[str] = set()
    by_lemma: dict[str, list[dict]] = {}
    for urow in unimorph_entries:
        lem = str(urow.get("lemma") or "").strip()
        frm = str(urow.get("form") or "").strip()
        feat = str(urow.get("features") or "").strip()
        if not (lem and frm and feat and len(frm) <= 28):
            continue
        if lem != frm and lem not in seen_lemmas and len(morph_samples) < 16:
            seen_lemmas.add(lem)
            morph_samples.append({"lemma": lem, "form": frm, "features": _humanize_unimorph_features(feat)})
        l_list = by_lemma.setdefault(lem, [])
        if len(l_list) < 18 and not any(x["form"] == frm for x in l_list):
            l_list.append({"form": frm, "label": _humanize_unimorph_features(feat)})
    if morph_samples:
        ensure_lang("swahili")["morphologySamples"] = morph_samples
    if by_lemma:
        gshard = ensure_grammar_shard("swahili")
        gshard["conjugations"] = [
            {"lemma": lem, "forms": forms}
            for lem, forms in sorted(by_lemma.items())
            if len(forms) >= 3
        ]

    # Write all lazy-loaded per-language shards into public/data/learning/
    for lid, clips in audio_shards.items():
        _write_shard("audio", lid, {"languageId": lid, "total": len(clips), "clips": clips})

    for lid, rshard in reader_shards.items():
        if rshard["stories"] or rshard["bilingualReadings"] or rshard["sentences"] or rshard["newsArticles"] or rshard["externalLinks"] or rshard["chapterTranscripts"]:
            _write_shard("readers", lid, rshard)
            rec = ensure_lang(lid)
            rec["shards"]["storiesCount"] = len(rshard["stories"]) + len(rshard["bilingualReadings"])
            rec["shards"]["sentencesCount"] = len(rshard["sentences"])
            rec["shards"]["articlesCount"] = len(rshard["newsArticles"]) + len(rshard["externalLinks"])

    for lid, qlist in quiz_shards.items():
        if qlist:
            _write_shard("quizzes", lid, {"languageId": lid, "total": len(qlist), "questions": qlist})
            ensure_lang(lid)["shards"]["quizCount"] = len(qlist)

    for lid, words in freq_shards.items():
        if words:
            _write_shard("freq", lid, {"languageId": lid, "total": len(words), "words": words})

    for lid, gshard in grammar_shards.items():
        has_any = bool(
            gshard["days"] or gshard["months"] or gshard["orthographyLetters"]
            or gshard["phonology"]["consonants"] or gshard["phonology"]["vowels"]
            or gshard["conjugations"]
        )
        if has_any:
            _write_shard("grammar", lid, gshard)
            ensure_lang(lid)["shards"]["hasGrammarShard"] = True

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "cldrVersion": cldr_raw.get("version", "49.0.0"),
        "stats": {
            "totalR2AudioClips": sum(v["r2AudioClips"] for v in languages.values()),
            "totalAudioChapters": len(dholuo_chapters),
            "totalKslVideos": len(ksl_videos),
            "totalStagedVarieties": len(staged_varieties),
            "totalStagedEntries": sum(v["totalEntries"] for v in staged_varieties),
            "totalBenchmarkRows": sum(b["rows"] for b in benchmarks_summary),
            "totalReaderSentences": total_reader_sentences,
            "totalQuizQuestions": sum(len(q) for q in quiz_shards.values()),
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
    print(f"[OK] Built {OUT_PATH} ({OUT_PATH.stat().st_size / 1024:.1f} KB) + lazy shards in {SHARDS_DIR} | stats={json.dumps(payload['stats'])}")


if __name__ == "__main__":
    main()
