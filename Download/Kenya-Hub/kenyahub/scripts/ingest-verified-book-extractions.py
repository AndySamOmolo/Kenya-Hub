#!/usr/bin/env python3
"""
Idempotent ingestion script for kenya-hub-verified-book-extractions.json (2,026 entries, 25 sections).
100% Commercially Permissive: Born-digital CC-BY-4.0 (APiCS, Language Science Press) & Pre-1931 US Public Domain.
"""
from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DICT_DIR = ROOT / "src/data/dictionaries"
STAGING_DIR = DICT_DIR / "staging"
PROVERBS_DIR = ROOT / "src/data/courses/proverbs"
LANG_SOURCES_FILE = ROOT / "src/data/language-sources/index.ts"
CATALOG_FILE = DICT_DIR / "catalog.ts"

VALID_CATEGORIES = {
    "greetings",
    "numbers",
    "family",
    "food",
    "travel",
    "time",
    "body",
    "animals",
    "nature",
    "home",
    "verbs",
    "adjectives",
    "shopping",
    "emergency",
    "phrases",
    "culture-history",
}

ARABIC_RE = re.compile(r"[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+")
MD_BOLD_RE = re.compile(r"\*\*(.+?)\*\*")
MD_ITAL_RE = re.compile(r"\*(.+?)\*")
WS_RE = re.compile(r"\s+")


def clean_md(text: str) -> str:
    if not text:
        return ""
    s = str(text)
    s = s.replace("`", "")
    s = MD_BOLD_RE.sub(r"\1", s)
    s = MD_ITAL_RE.sub(r"\1", s)
    s = s.replace("*", "")
    s = WS_RE.sub(" ", s).strip()
    return s


def strip_arabic(text: str) -> tuple[str, str]:
    """Remove parenthesized or inline Arabic script from Latin headword and return (latin, arabic_note)."""
    if not ARABIC_RE.search(text):
        return text.strip(), ""
    arabic_parts: list[str] = []

    def _capture_paren(m: re.Match[str]) -> str:
        inner = m.group(1).strip()
        if ARABIC_RE.search(inner):
            arabic_parts.append(inner)
            return ""
        return m.group(0)

    cleaned = re.sub(r"\(([^()]+)\)", _capture_paren, text)
    # Any remaining bare Arabic tokens
    bare = ARABIC_RE.findall(cleaned)
    if bare:
        arabic_parts.extend(bare)
        cleaned = ARABIC_RE.sub("", cleaned)
    cleaned = WS_RE.sub(" ", cleaned).strip(" .,;:-/")
    arabic_note = " ".join(arabic_parts).strip()
    return cleaned, arabic_note


def norm_key(translation: str, english: str) -> tuple[str, str]:
    def _n(x: str) -> str:
        x = unicodedata.normalize("NFKD", x.lower())
        x = "".join(c for c in x if not unicodedata.combining(c))
        x = re.sub(r"[^a-z0-9]+", " ", x).strip()
        return x

    return (_n(translation), _n(english))


def map_category(cat_text: str, english: str, translation: str, default: str = "phrases") -> str:
    c = f"{cat_text} {english}".lower()
    # Multi-word clauses/sentences always go to phrases or culture-history to protect single-word game pools
    words = translation.split()
    if len(words) >= 4:
        if any(k in c for k in ("clan", "ceremon", "ritual", "magic", "spirit", "curse", "belief", "history", "chief", "elder", "age-set", "circumcis", "sacrific", "myth", "tribe", "custom", "taboo")):
            return "culture-history"
        return "phrases"

    if any(k in c for k in ("number", "numeral", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "hundred", "thousand")):
        if re.search(r"\b(numeral|number|counting|one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|hundred|thousand)\b", c):
            return "numbers"
    if any(k in c for k in ("greet", "salut", "hello", "goodbye", "welcome", "thank")):
        return "greetings"
    if any(k in c for k in ("clan", "ceremon", "ritual", "magic", "spirit", "curse", "belief", "history", "taboo", "sacrific", "circumcis", "age-set", "ethnog", "ancestor", "toponym", "dialect", "argot", "yibir", "midgan")):
        return "culture-history"
    if any(k in c for k in ("month", "season", "calendar", "day", "night", "year", "time", "morning", "evening", "today", "tomorrow", "yesterday", "week", "hour", "dawn", "dusk")):
        return "time"
    if any(k in c for k in ("animal", "bird", "fish", "lion", "elephant", "cow", "cattle", "goat", "sheep", "dog", "hyena", "snake", "monkey", "giraffe", "zebra", "rhino", "hippo", "camel", "donkey", "horse", "insect", "bee", "ant", "leopard", "buffalo", "ostrich", "crocodile")):
        return "animals"
    if any(k in c for k in ("body", "head", "eye", "ear", "nose", "mouth", "hand", "foot", "leg", "arm", "heart", "blood", "bone", "tooth", "teeth", "tongue", "hair", "skin", "belly", "stomach", "neck", "back", "finger", "knee")):
        return "body"
    if any(k in c for k in ("family", "father", "mother", "brother", "sister", "child", "son", "daughter", "husband", "wife", "man", "woman", "boy", "girl", "uncle", "aunt", "grandfather", "grandmother", "kin", "parent", "friend")):
        return "family"
    if any(k in c for k in ("food", "eat", "drink", "water", "milk", "meat", "bread", "maize", "millet", "sorghum", "honey", "salt", "beer", "banana", "bean", "grain", "flour", "fat", "butter", "sugar", "coffee", "tea", "fruit")):
        return "food"
    if any(k in c for k in ("tree", "rain", "sun", "moon", "star", "sky", "earth", "ground", "stone", "rock", "mountain", "hill", "river", "lake", "sea", "fire", "wind", "cloud", "forest", "grass", "wood", "sand", "dust", "plant", "flower", "leaf", "root", "nature")):
        return "nature"
    if any(k in c for k in ("house", "hut", "home", "door", "bed", "pot", "knife", "spear", "shield", "bow", "arrow", "cloth", "garment", "rope", "basket", "mat", "stool", "village", "kraal", "boma")):
        return "home"
    if any(k in c for k in ("road", "path", "journey", "travel", "boat", "canoe", "ship", "walk", "go", "come", "north", "south", "east", "west")):
        return "travel"
    if any(k in c for k in ("buy", "sell", "price", "money", "market", "trade", "coin", "measure", "pay", "debt", "rupee", "shilling")):
        return "shopping"
    if any(k in c for k in ("war", "fight", "sick", "disease", "medicine", "doctor", "wound", "pain", "kill", "die", "death", "law", "judge", "thief", "danger", "help", "fever", "poison")):
        return "emergency"
    if re.search(r"\b(v\.|verb|to\s+[a-z]+)\b", c):
        return "verbs"
    if re.search(r"\b(adj\.|adjective|big|small|good|bad|long|short|hot|cold|new|old|white|black|red|heavy|light|sweet|bitter|strong|weak)\b", c):
        return "adjectives"
    return default if default in VALID_CATEGORIES else "phrases"


def trim_english(raw_gloss: str) -> tuple[str, str]:
    """Return (concise_english, extra_note) so dictionary english stays crisp and game-safe."""
    g = clean_md(raw_gloss)
    # Strip leading POS markers like "n.", "v.", "adj.", "gen. part."
    extra_parts: list[str] = []
    m_pos = re.match(r"^(?:n\.|v\.|v\.t\.|v\.i\.|adj\.|adv\.|prep\.|conj\.|pron\.|interj\.|gen\.\s*part\.)\s*", g, re.I)
    if m_pos:
        extra_parts.append(f"POS: {m_pos.group(0).strip()}")
        g = g[m_pos.end():].strip()
    # Strip trailing ", v." or ", n." (Amery style)
    m_tail_pos = re.search(r",\s*(v\.|n\.|adj\.|adv\.|prep\.|conj\.|pron\.|interj\.)$", g, re.I)
    if m_tail_pos:
        extra_parts.append(f"POS: {m_tail_pos.group(1)}")
        g = g[:m_tail_pos.start()].strip()

    # If interlinear gloss with em-dash "GLOSS — 'Idiomatic English'"
    if " — " in g:
        left, right = g.split(" — ", 1)
        right_clean = right.strip().strip("'\"“”")
        if right_clean:
            extra_parts.append(f"Gloss: {left.strip()}")
            g = right_clean

    # If still long (> 60 chars), split on first semicolon or parenthetical
    if len(g) > 60:
        for sep in ("; ", " — ", " - ", " ("):
            if sep in g:
                head, rest = g.split(sep, 1)
                if 2 <= len(head.strip()) <= 58:
                    extra_parts.append(g)
                    g = head.strip().rstrip(".,;:")
                    break
    if len(g) > 60:
        extra_parts.append(g)
        g = g[:55].rsplit(" ", 1)[0].rstrip(".,;:")

    return g.strip(), " | ".join(extra_parts)


def make_entry(
    english: str,
    translation: str,
    context: str,
    pronunciation: str = "",
) -> dict[str, str] | None:
    t = clean_md(translation)
    t, arabic_note = strip_arabic(t)
    # Remove trailing stray punctuation or markdown artifacts
    t = t.strip(" .,;:")
    e, extra_e = trim_english(english)
    if not t or not e or t.lower() in ("—", "-", "(blank)", "blank", "n/a") or e.lower() in ("—", "-", "(blank)", "blank"):
        return None
    ctx_parts = [clean_md(context)]
    if arabic_note:
        ctx_parts.append(f"Arabic: {arabic_note}")
    if extra_e:
        ctx_parts.append(extra_e)
    ctx = " · ".join(p for p in ctx_parts if p)
    return {
        "english": e,
        "translation": t,
        "pronunciation": clean_md(pronunciation),
        "context": ctx,
    }


def load_core_dict(lang_id: str) -> dict:
    p = DICT_DIR / f"{lang_id}.json"
    return json.loads(p.read_text(encoding="utf-8"))


def save_core_dict(lang_id: str, data: dict) -> None:
    p = DICT_DIR / f"{lang_id}.json"
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


CATEGORY_META = [
    ("greetings", "Greetings & Farewells", "👋"),
    ("numbers", "Numbers & Counting", "🔢"),
    ("family", "Family & Relationships", "👨‍👩‍👧‍👦"),
    ("food", "Food & Dining", "🍲"),
    ("travel", "Travel & Directions", "🧭"),
    ("time", "Time, Seasons & Calendar", "⏰"),
    ("body", "Body & Health", "🫀"),
    ("animals", "Animals & Wildlife", "🦁"),
    ("nature", "Nature & Environment", "🌿"),
    ("home", "Home & Everyday Objects", "🏠"),
    ("verbs", "Common Verbs & Actions", "🏃"),
    ("adjectives", "Descriptive Adjectives", "✨"),
    ("shopping", "Trade, Money & Measures", "🛒"),
    ("emergency", "Health, Safety, Law & Conflict", "🚨"),
    ("phrases", "Common Expressions & Vocabulary", "💬"),
    ("culture-history", "Culture, Clans & Historical Corpus", "📖"),
]


def ensure_staging_dict(lang_id: str, name: str, native_name: str, iso: str, family: str, regions: list[str]) -> dict:
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    p = STAGING_DIR / f"{lang_id}.json"
    if p.exists():
        return json.loads(p.read_text(encoding="utf-8"))
    return {
        "languageId": lang_id,
        "languageName": name,
        "nativeName": native_name,
        "isoCode": iso,
        "family": family,
        "script": "Latin",
        "counties": regions,
        "staging": True,
        "dictionaryVersion": "1.0",
        "lastUpdated": "2026-11-21",
        "categories": [
            {"id": cid, "name": cname, "icon": cicon, "entries": []}
            for cid, cname, cicon in CATEGORY_META
        ],
    }


def save_staging_dict(lang_id: str, data: dict) -> None:
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    p = STAGING_DIR / f"{lang_id}.json"
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def section_num(sec_title: str) -> int:
    m = re.match(r"^\s*(\d+)\.", sec_title or "")
    return int(m.group(1)) if m else 0


def ingest_books(json_path: Path) -> dict[str, int]:
    raw = json.loads(json_path.read_text(encoding="utf-8"))
    entries = raw["entries"]

    core_dicts: dict[str, dict] = {}
    core_keys: dict[str, set[tuple[str, str]]] = {}

    def get_core(lang_id: str) -> tuple[dict, set[tuple[str, str]]]:
        if lang_id not in core_dicts:
            d = load_core_dict(lang_id)
            keys: set[tuple[str, str]] = set()
            for cat_obj in d.get("categories", []):
                for item in cat_obj.get("entries", []):
                    keys.add(norm_key(item.get("translation", ""), item.get("english", "")))
            core_dicts[lang_id] = d
            core_keys[lang_id] = keys
        return core_dicts[lang_id], core_keys[lang_id]

    staging_meta = {
        "nubi": ("Kinubi (Nubi)", "Ki-Nubi", "kcn", "Arabic-based Creole", ["Kibera (Nairobi)", "Mombasa", "Kibos", "Bombo"]),
        "kuria": ("Kuria", "Igikuria", "kuj", "Niger-Congo (Bantu)", ["Migori County (Kuria East & West)"]),
        "maay": ("Kenyan Maay (Af-Maay)", "Af-Maay", "ymm", "Afro-Asiatic (Cushitic)", ["Dadaab (Garissa County)", "Mandera", "Wajir"]),
    }
    staging_dicts: dict[str, dict] = {}
    staging_keys: dict[str, set[tuple[str, str]]] = {}

    def get_staging(lang_id: str) -> tuple[dict, set[tuple[str, str]]]:
        if lang_id not in staging_dicts:
            d = ensure_staging_dict(lang_id, *staging_meta[lang_id])
            keys: set[tuple[str, str]] = set()
            for cat_obj in d.get("categories", []):
                for item in cat_obj.get("entries", []):
                    keys.add(norm_key(item.get("translation", ""), item.get("english", "")))
            staging_dicts[lang_id] = d
            staging_keys[lang_id] = keys
        return staging_dicts[lang_id], staging_keys[lang_id]

    added_counts: dict[str, int] = {}

    def add_to_dict(target: str, is_staging: bool, cat: str, entry: dict[str, str] | None) -> bool:
        if not entry:
            return False
        d, keys = get_staging(target) if is_staging else get_core(target)
        k = norm_key(entry["translation"], entry["english"])
        if not k[0] or not k[1] or k in keys:
            return False
        target_cat = next((c for c in d["categories"] if c.get("id") == cat), None)
        if target_cat is None:
            target_cat = next((c for c in d["categories"] if c.get("id") == "phrases"), d["categories"][-1])
        target_cat["entries"].append(entry)
        keys.add(k)
        label = f"staging/{target}" if is_staging else target
        added_counts[label] = added_counts.get(label, 0) + 1
        return True

    def source_tag(row: dict, label: str) -> str:
        pg = clean_md(row.get("source_page", ""))
        notes = clean_md(row.get("category_or_notes", ""))
        parts = [label]
        if pg:
            parts.append(pg)
        if notes and notes != "—":
            parts.append(notes)
        return " · ".join(parts)

    proverb_rows_sw: list[dict] = []
    proverb_rows_nyika: list[dict] = []
    proverb_rows_kisii: list[dict] = []

    for row in entries:
        sec = section_num(row.get("section", ""))
        sub = row.get("subsection", "") or ""
        term = row.get("indigenous_term", "") or ""
        lang = row.get("language_dialect", "") or ""
        gloss = row.get("english_gloss", "") or ""
        notes = row.get("category_or_notes", "") or ""
        rid = row.get("id")

        # Sec 1: APiCS Kinubi -> staging/nubi
        if sec == 1:
            cat = "phrases" if "1B" in sub or len(clean_md(term).split()) >= 4 else map_category(notes, gloss, term, "phrases")
            add_to_dict("nubi", True, cat, make_entry(gloss, term, source_tag(row, "APiCS Online #63 Kinubi (CC-BY-4.0)")))

        # Sec 2: LangSci #120 -> 2A Kuria (staging/kuria), 2B Lubukusu (luhya)
        elif sec == 2:
            if "2A" in sub or "kuria" in lang.lower():
                add_to_dict("kuria", True, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #120 ACAL 45 (2018) Kuria (CC-BY-4.0)")))
            else:
                add_to_dict("luhya", False, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #120 ACAL 45 (2018) Lubukusu (CC-BY-4.0)")))

        # Sec 3: LangSci #216 -> Logoori (luhya)
        elif sec == 3:
            t_clean = clean_md(term).lstrip(".")
            add_to_dict("luhya", False, "phrases", make_entry(gloss, t_clean, source_tag(row, "LangSci #216 (2019) Logoori/Maragoli (CC-BY-4.0)")))

        # Sec 4: LangSci #306 -> Ekegusii (kisii) + id=136 proverbs
        elif sec == 4:
            if rid == 136:
                proverb_rows_kisii.append(row)
            else:
                add_to_dict("kisii", False, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #306 ACAL 49 (2022) Ekegusii (CC-BY-4.0)")))

        # Sec 5: LangSci #427 -> Kenyan Maay (staging/maay)
        elif sec == 5:
            t_c = clean_md(term)
            if " vs. " in t_c:
                parts = [p.strip() for p in t_c.split(" vs. ")]
                g_parts = [p.strip() for p in clean_md(gloss).split(" vs. ")]
                for idx, p in enumerate(parts):
                    g_sub = g_parts[idx] if idx < len(g_parts) else gloss
                    p_word = re.sub(r"\s*\([^)]*\)", "", p).strip()
                    add_to_dict("maay", True, map_category(notes, g_sub, p_word, "phrases"), make_entry(g_sub, p_word, source_tag(row, f"LangSci #427 (2024) Kenyan Maay (CC-BY-4.0) · Pair: {t_c}")))
            else:
                add_to_dict("maay", True, map_category(notes, gloss, t_c, "phrases"), make_entry(gloss, t_c, source_tag(row, "LangSci #427 (2024) Kenyan Maay (CC-BY-4.0)")))

        # Sec 6: Stigand (1915) Swahili Dialects
        elif sec == 6:
            d_tag = clean_md(lang)
            cat = map_category(notes, gloss, term, "culture-history")
            add_to_dict("swahili", False, cat, make_entry(gloss, term, source_tag(row, f"Stigand (1915) Swahili Dialects ({d_tag})")))

        # Sec 7 & 21: Taylor (1891) Proverbs (collect specific net-new / misaligned entries)
        elif sec in (7, 21):
            if rid in {360, 374, 859, 884, 896, 898, 901, 912, 921, 949}:
                proverb_rows_sw.append(row)
            elif rid == 1057:
                proverb_rows_nyika.append(row)

        # Sec 8: Smee (1844) PIVOTED: indigenous_term=English, language_dialect=Swahili, english_gloss=Somali, category_or_notes=Oromo/Galla
        elif sec == 8:
            eng = clean_md(term)
            sw = clean_md(lang)
            so = clean_md(gloss)
            om = clean_md(notes)
            pg = clean_md(row.get("source_page", ""))
            for target_lang, val, label in (
                ("swahili", sw, f"Smee (1844) East Coast Vocab (Swahili, 1844 orthography) · {pg}"),
                ("somali", so, f"Smee (1844) East Coast Vocab (Somali, 1844 orthography) · {pg}"),
                ("borana", om, f"Smee (1844) East Coast Vocab (Oromo/Galla, 1844 orthography) · {pg}"),
            ):
                if val and val not in ("—", "-"):
                    cat = map_category("", eng, val, "culture-history")
                    add_to_dict(target_lang, False, cat, make_entry(eng, val, label))

        # Sec 9: Kitching (1915) Ateso
        elif sec == 9:
            t_c = clean_md(term)
            # Move parenthetical (pl. ...) out of translation into context
            pl_note = ""
            m_pl = re.search(r"\(([^)]+)\)", t_c)
            if m_pl:
                pl_note = f"Note: {m_pl.group(1)}"
                t_c = (t_c[: m_pl.start()] + t_c[m_pl.end() :]).strip()
            ctx = source_tag(row, "Kitching (1915) Handbook of Ateso")
            if pl_note:
                ctx = f"{ctx} · {pl_note}"
            cat = map_category(notes, gloss, t_c, "phrases")
            add_to_dict("teso", False, cat, make_entry(gloss, t_c, ctx))

        # Sec 10: Erhardt & Krapf (1857) Maasai
        elif sec == 10:
            t_c = clean_md(term)
            # Split "/" bundles if gloss also has "/"
            t_parts = [x.strip() for x in t_c.split("/")] if "/" in t_c else [t_c]
            g_parts = [x.strip() for x in clean_md(gloss).split("/")] if "/" in gloss and len(t_parts) > 1 else [gloss]
            for idx, tp in enumerate(t_parts):
                gp = g_parts[idx] if idx < len(g_parts) else gloss
                # Normalize inverted article "ukuo, eng." -> "eng-ukuo" (keep original in context)
                art_note = ""
                m_inv = re.match(r"^([^,]+),\s*(ol|en|eng|em|e|il|in|ing)\.?$", tp, re.I)
                if m_inv:
                    art_note = f"1857 form: {tp}"
                    tp = f"{m_inv.group(2)}-{m_inv.group(1).strip()}"
                ctx = source_tag(row, "Erhardt & Krapf (1857) Enguduk Iloigob (Maasai)")
                if art_note:
                    ctx = f"{ctx} · {art_note}"
                cat = map_category(notes, gp, tp, "phrases")
                add_to_dict("maasai", False, cat, make_entry(gp, tp, ctx))

        # Sec 11: Hobley (1906) Baringo District
        elif sec == 11:
            l_low = lang.lower()
            target = "turkana"
            if "pokot" in l_low or "suk" in l_low:
                target = "pokot"
            elif "ilchamus" in l_low or "njemps" in l_low:
                target = "ilchamus"
            elif "maasai" in l_low or "masai" in l_low:
                target = "maasai"
            elif "ogiek" in l_low or "dorobo" in l_low:
                target = "kalenjin"
            elif "baringo" in l_low:
                target = "ilchamus"
            add_to_dict(target, False, "culture-history", make_entry(gloss, term, source_tag(row, f"Hobley (1906) Baringo District ({clean_md(lang)})")))

        # Sec 12: K. R. Dundas (1909) Kikuyu Calendar
        elif sec == 12:
            add_to_dict("kikuyu", False, "time", make_entry(gloss, term, source_tag(row, "K. R. Dundas (1909) Kikuyu Calendar")))

        # Sec 13: Hon. Charles Dundas (1913) History of Kitui (Kamba)
        elif sec == 13:
            add_to_dict("kamba", False, "culture-history", make_entry(gloss, term, source_tag(row, f"C. Dundas (1913) History of Kitui ({clean_md(lang)})")))

        # Sec 14 & 20: Hobley (1922) Bantu Beliefs and Magic
        elif sec in (14, 20):
            l_low = lang.lower()
            targets = []
            if "kikuyu" in l_low:
                targets.append("kikuyu")
            if "kamba" in l_low:
                targets.append("kamba")
            if "swahili" in l_low:
                targets.append("swahili")
            if "masai" in l_low or "maasai" in l_low:
                targets.append("maasai")
            if not targets:
                targets = ["kikuyu"]
            cat = map_category(notes, gloss, term, "culture-history")
            for tg in targets:
                add_to_dict(tg, False, cat, make_entry(gloss, term, source_tag(row, f"Hobley (1922) Bantu Beliefs & Magic ({clean_md(lang)})")))

        # Sec 15: Johnstone (1902) Mombasa & Phillipson (1916) Galla
        elif sec == 15:
            if rid is not None and rid >= 712 or "galla" in lang.lower() or "orma" in lang.lower():
                add_to_dict("borana", False, "culture-history", make_entry(gloss, term, source_tag(row, "Phillipson (1916) Notes on the Galla (Tana River Orma)")))
            else:
                add_to_dict("mijikenda", False, "culture-history", make_entry(gloss, term, source_tag(row, "Johnstone (1902) Tribes of Mombasa Sub-District")))

        # Sec 16 & 24: Kirk (1905) Somali Grammar + Yibir & Midgan
        elif sec in (16, 24):
            if rid == 1655:
                continue  # cross-ref only "(see limdi)"
            t_c = clean_md(term)
            n_c = clean_md(notes)
            # Pivoted 16B / 24B: Yibir / Midgan in term, Somali in category_or_notes
            if "16B" in sub or "24B" in sub:
                # Extract standard Somali from notes
                so_val = re.sub(r"^Somali:\s*", "", n_c, flags=re.I).strip()
                if so_val and so_val not in ("—", "-"):
                    cat = map_category("", gloss, so_val, "phrases")
                    add_to_dict("somali", False, cat, make_entry(gloss, so_val, source_tag(row, "Kirk (1905) Somali Grammar (Standard Somali)")))
                # Split Y / M in indigenous_term
                parts = [p.strip() for p in t_c.split("/")]
                for idx, p in enumerate(parts):
                    if not p or p in ("—", "-") or "uses yibir" in p.lower():
                        continue
                    argot = "Yibir" if idx == 0 else "Midgan"
                    add_to_dict("somali", False, "culture-history", make_entry(gloss, p, source_tag(row, f"Kirk (1905) Somali Grammar ({argot} argot)")))
            else:
                # 16A or 24A standard
                d_label = clean_md(lang)
                cat = "culture-history" if ("yibir" in d_label.lower() or "midgan" in d_label.lower()) else map_category(notes, gloss, t_c, "phrases")
                add_to_dict("somali", False, cat, make_entry(gloss, t_c, source_tag(row, f"Kirk (1905) Somali Grammar ({d_label})")))

        # Sec 17 & 22: Krapf & Rebmann (1887) Nika-English Dictionary
        elif sec in (17, 22):
            t_c = clean_md(term)
            d_label = clean_md(lang)
            cat = map_category(notes, gloss, t_c, "phrases")
            add_to_dict("mijikenda", False, cat, make_entry(gloss, t_c, source_tag(row, f"Krapf & Rebmann (1887) Nika-English Dict ({d_label})")))

        # Sec 18: Arkell-Hardwick (1903) & Höhnel (1894) Vol. II
        elif sec == 18:
            l_low = lang.lower()
            target = "rendille"
            if "samburu" in l_low or "burkeneji" in l_low:
                target = "samburu"
            elif "ilchamus" in l_low or "njemps" in l_low:
                target = "ilchamus"
            elif "daasanach" in l_low or "reschiat" in l_low:
                target = "daasanach"
            elif "pokot" in l_low or "suk" in l_low:
                target = "pokot"
            elif "borana" in l_low or "galla" in l_low:
                target = "borana"
            elif "maasai" in l_low or "masai" in l_low:
                target = "maasai"
            add_to_dict(target, False, "culture-history", make_entry(gloss, term, source_tag(row, f"Arkell-Hardwick (1903) / Höhnel (1894) ({clean_md(lang)})")))

        # Sec 19 & 23: Amery (1905) Sudan Arabic (Ki-Nubi parent -> staging/nubi)
        elif sec in (19, 23):
            cat = "phrases" if ("23E" in sub or rid == 771) else map_category(notes, gloss, term, "phrases")
            add_to_dict("nubi", True, cat, make_entry(gloss, term, source_tag(row, "Amery (1905) Sudan Arabic (Kinubi lexical parent)")))

        # Sec 25: Smee (1844, p. 55) & Rigby (1844, pp. 93–94) PIVOTED
        elif sec == 25:
            t_c = clean_md(term)
            eng = clean_md(gloss)
            n_c = clean_md(notes)
            pg = clean_md(row.get("source_page", ""))
            if "25A" in sub:
                # Souallie / Galla + Soomallie in notes
                parts = [p.strip() for p in t_c.split("/")]
                if len(parts) >= 1 and parts[0] and "blank" not in parts[0].lower():
                    add_to_dict("swahili", False, map_category("", eng, parts[0], "culture-history"), make_entry(eng, parts[0], f"Smee (1844, p. 55) Souallie (Swahili) · {pg}"))
                if len(parts) >= 2 and parts[1] and "blank" not in parts[1].lower():
                    add_to_dict("borana", False, map_category("", eng, parts[1], "culture-history"), make_entry(eng, parts[1], f"Smee (1844, p. 55) Galla (Oromo) · {pg}"))
                so = re.sub(r"^Soomallie:\s*", "", n_c, flags=re.I).strip()
                if so and "blank" not in so.lower() and so not in ("—", "-"):
                    add_to_dict("somali", False, map_category("", eng, so, "culture-history"), make_entry(eng, so, f"Smee (1844, p. 55) Soomallie (Somali) · {pg}"))
            else:
                # 25B Rigby: Dankalli / Amharic / Galla + Somauli in notes
                parts = [p.strip() for p in t_c.split("/")]
                if len(parts) >= 3 and parts[2] and "blank" not in parts[2].lower() and parts[2] not in ("—", "-"):
                    add_to_dict("borana", False, map_category("", eng, parts[2], "culture-history"), make_entry(eng, parts[2], f"Rigby (1844, pp. 93–94) Galla (Oromo) · {pg}"))
                so = re.sub(r"^Somauli:\s*", "", n_c, flags=re.I).strip()
                if so and "blank" not in so.lower() and so not in ("—", "-"):
                    add_to_dict("somali", False, map_category("", eng, so, "culture-history"), make_entry(eng, so, f"Rigby (1844, pp. 93–94) Somauli (Somali) · {pg}"))

    # Save modified core & staging dictionaries
    for lang_id, data in core_dicts.items():
        save_core_dict(lang_id, data)
    for lang_id, data in staging_dicts.items():
        save_staging_dict(lang_id, data)

    # Update catalog.ts exact counts across all 23 core dictionaries
    update_catalog_counts()

    # Merge net-new proverbs
    prov_added = merge_proverbs(proverb_rows_sw, proverb_rows_nyika, proverb_rows_kisii)
    added_counts.update(prov_added)

    # Register missing & expanded bibliographic sources
    sources_added = update_language_sources()
    added_counts["language_sources_registered"] = sources_added

    return added_counts


def update_catalog_counts() -> None:
    cat_text = CATALOG_FILE.read_text(encoding="utf-8")
    total_all = 0
    for dict_file in sorted(DICT_DIR.glob("*.json")):
        lang_id = dict_file.stem
        d = json.loads(dict_file.read_text(encoding="utf-8"))
        total = sum(len(c.get("entries", [])) for c in d.get("categories", []))
        total_all += total
        # Update entryCount for this language id in catalog.ts
        pattern = re.compile(
            rf'("id":\s*"{re.escape(lang_id)}"[\s\S]{{0,500}}?"entryCount":\s*)\d+'
        )
        cat_text, n = pattern.subn(rf"\g<1>{total}", cat_text, count=1)
        if n == 0:
            # Try unquoted id:
            pattern2 = re.compile(
                rf'(id:\s*"{re.escape(lang_id)}"[\s\S]{{0,500}}?entryCount:\s*)\d+'
            )
            cat_text = pattern2.sub(rf"\g<1>{total}", cat_text, count=1)
    cat_text = re.sub(
        r"(export const TOTAL_DICTIONARY_ENTRIES:\s*number\s*=\s*)\d+;",
        rf"\g<1>{total_all};",
        cat_text,
        count=1,
    )
    CATALOG_FILE.write_text(cat_text, encoding="utf-8")


def append_ts_array_items(ts_path: Path, items: list[dict]) -> int:
    if not items:
        return 0
    text = ts_path.read_text(encoding="utf-8")
    new_items = [it for it in items if f'"{it["id"]}"' not in text and f"'{it['id']}'" not in text]
    if not new_items:
        return 0
    idx = text.rfind("];")
    assert idx != -1, f"Could not find closing ]; in {ts_path}"
    before = text[:idx].rstrip()
    if not before.endswith(","):
        before += ","
    serialized = ",\n".join(
        "  " + json.dumps(it, ensure_ascii=False, indent=2).replace("\n", "\n  ")
        for it in new_items
    )
    updated = before + "\n" + serialized + "\n" + text[idx:]
    ts_path.write_text(updated, encoding="utf-8")
    return len(new_items)


def merge_proverbs(sw_rows: list[dict], nyika_rows: list[dict], kisii_rows: list[dict]) -> dict[str, int]:
    res = {"proverbs_swahili": 0, "proverbs_mijikenda": 0, "proverbs_kisii": 0}

    sw_items = []
    for r in sw_rows:
        pg = clean_md(r.get("source_page", ""))
        sec_m = re.search(r"§\s*(\d+[a-z]?)", pg)
        sec_label = sec_m.group(1) if sec_m else str(r["id"])
        gloss = clean_md(r.get("english_gloss", ""))
        notes = clean_md(r.get("category_or_notes", ""))
        sw_items.append(
            {
                "id": f"taylor-1891-swahili-verified-{sec_label}",
                "languageId": "swahili",
                "languageName": "Kiswahili",
                "indigenous": clean_md(r.get("indigenous_term", "")),
                "literalTranslation": gloss,
                "meaning": notes if notes and notes != "—" else gloss,
                "englishEquivalent": gloss,
                "theme": "wisdom",
                "sourceCitation": f"W. E. Taylor, African Aphorisms, or Saws from Swahili-land (1891, {pg})",
            }
        )
    res["proverbs_swahili"] = append_ts_array_items(PROVERBS_DIR / "swahili.ts", sw_items)

    ny_items = []
    for r in nyika_rows:
        gloss = clean_md(r.get("english_gloss", ""))
        notes = clean_md(r.get("category_or_notes", ""))
        ny_items.append(
            {
                "id": "taylor-1891-mijikenda-651a-b",
                "languageId": "mijikenda",
                "languageName": "Mijikenda (Kinyika / Kigiriama)",
                "indigenous": clean_md(r.get("indigenous_term", "")),
                "literalTranslation": gloss,
                "meaning": notes if notes and notes != "—" else gloss,
                "englishEquivalent": gloss,
                "theme": "wisdom",
                "sourceCitation": f"W. E. Taylor, African Aphorisms (1891, {clean_md(r.get('source_page', '§651a'))})",
            }
        )
    res["proverbs_mijikenda"] = append_ts_array_items(PROVERBS_DIR / "mijikenda.ts", ny_items)

    # Ekegusii id=136 -> 2 net-new proverbs
    ki_items = [
        {
            "id": "langsci-306-kisii-prov-1",
            "languageId": "kisii",
            "languageName": "Kisii (Ekegusii)",
            "indigenous": "Mominchoria imi tang'ana mosera ibu.",
            "literalTranslation": "The one who stirs up trouble is no better than one who eats ashes.",
            "meaning": "Provoking conflict brings nothing nourishing; recklessness leaves only ruin.",
            "englishEquivalent": "He who sows the wind reaps the whirlwind.",
            "theme": "wisdom",
            "sourceCitation": "Language Science Press #306 (ACAL 49, 2022) — Sibanda et al., Ch. 4 Ekegusii (CC-BY-4.0)",
        },
        {
            "id": "langsci-306-kisii-prov-2",
            "languageId": "kisii",
            "languageName": "Kisii (Ekegusii)",
            "indigenous": "Mwana obande mmamiria makendu.",
            "literalTranslation": "Another person's child does not stay to finish cold porridge.",
            "meaning": "True belonging and patience come from deep kinship and care rather than obligation.",
            "englishEquivalent": "Blood is thicker than water.",
            "theme": "family",
            "sourceCitation": "Language Science Press #306 (ACAL 49, 2022) — Sibanda et al., Ch. 4 Ekegusii (CC-BY-4.0)",
        },
    ]
    res["proverbs_kisii"] = append_ts_array_items(PROVERBS_DIR / "kisii.ts", ki_items)
    return res


def update_language_sources() -> int:
    text = LANG_SOURCES_FILE.read_text(encoding="utf-8")
    new_sources = [
        {
            "id": "langsci-120-kuria-lubukusu-2018",
            "title": "African Linguistics on the Prairie: Selected Papers from ACAL 45 (Kuria & Lubukusu Chapters)",
            "author": "Jason Kandybowicz, Travis Major, Harold Torrence & Philip T. Duncan (eds.)",
            "year": 2018,
            "publisher": "Language Science Press (Contemporary African Linguistics #3 / #120)",
            "languages": ["luhya", "kuria"],
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "commercialUseAllowed": True,
            "sourceUrl": "https://langsci-press.org/catalog/book/120",
            "archiveUrl": "https://langsci-press.org/LangSci-Press/catalog/view/120/1333/1111",
            "dataTypes": ["grammar", "phrases", "morphology"],
            "ingestionStatus": "integrated",
            "coverageNote": "52 verified Kuria (kuj, staged) and Lubukusu (bxk -> luhya) focus and tense-aspect entries ingested.",
        },
        {
            "id": "langsci-216-logoori-2019",
            "title": "Theory and Description in African Linguistics: Selected Papers from ACAL 47 (Logoori / Maragoli Chapter)",
            "author": "Emily Clem, Peter Jenks & Hannah Sande (eds.)",
            "year": 2019,
            "publisher": "Language Science Press (#216)",
            "languages": ["luhya"],
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "commercialUseAllowed": True,
            "sourceUrl": "https://langsci-press.org/LangSci-Press/catalog/view/216/1765/1386-1",
            "dataTypes": ["grammar", "phrases", "phonology"],
            "ingestionStatus": "integrated",
            "coverageNote": "20 verified Logoori/Maragoli (rag) clause and narrative entries ingested into luhya.json.",
        },
        {
            "id": "langsci-306-ekegusii-2022",
            "title": "Descriptive and Theoretical Approaches to African Linguistics: Selected Papers from ACAL 49 (Ch. 4 Ekegusii)",
            "author": "Galen Sibanda, Deo Ngonyani, Jonathan Choti & Ann Biersteker (eds.)",
            "year": 2022,
            "publisher": "Language Science Press (#306)",
            "languages": ["kisii"],
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/record/6393740/files/306-Sibanda-2022-4.pdf?download=1",
            "dataTypes": ["grammar", "phrases", "proverbs"],
            "ingestionStatus": "integrated",
            "coverageNote": "23 verified Ekegusii (guz) noun-class, gerund, and proverb entries ingested into kisii.json and proverbs/kisii.ts.",
        },
        {
            "id": "langsci-427-kenyan-maay-2024",
            "title": "Prosodic and Tonal Features of Kenyan Maay (Dadaab Variety) — Language Science Press #427",
            "author": "Christopher R. Green & Samson Lotven",
            "year": 2024,
            "publisher": "Language Science Press (#427)",
            "languages": ["maay", "somali"],
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/records/11091843/files/427-GreenLotven-2024-13.pdf?download=1",
            "dataTypes": ["vocabulary", "phonology"],
            "ingestionStatus": "integrated",
            "coverageNote": "17 verified Dadaab Kenyan Maay (ymm) lexical and tonal minimal-pair entries staged in dictionaries/staging/maay.json.",
        },
        {
            "id": "smee-east-coast-vocab-1844",
            "title": "Specimens of Different Languages Used on the East Coast of Africa (Souallie, Soomallie & Galla)",
            "author": "Capt. Thomas Smee",
            "year": 1844,
            "publisher": "Transactions of the Bombay Geographical Society, Vol. VI (pp. 51–55)",
            "languages": ["swahili", "somali", "borana"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://archive.org/details/transactionsofbo1841bomb/page/51/mode/1up",
            "dataTypes": ["vocabulary", "historical"],
            "ingestionStatus": "integrated",
            "coverageNote": "156 comparative rows (pp. 51–55) unpivoted into Swahili, Somali, and Borana/Oromo historical entries.",
        },
        {
            "id": "rigby-red-sea-gulf-aden-1844",
            "title": "Specimen of the Languages Spoken on the Western Shore of the Red Sea and Gulf of Aden",
            "author": "Lt. C. P. Rigby",
            "year": 1844,
            "publisher": "Transactions of the Bombay Geographical Society, Vol. VI (pp. 93–94)",
            "languages": ["somali", "borana"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://archive.org/details/transactionsofbo1841bomb/page/93/mode/1up",
            "dataTypes": ["vocabulary", "historical"],
            "ingestionStatus": "integrated",
            "coverageNote": "86 comparative rows unpivoted for Somauli (Somali) and Galla (Oromo/Borana) non-blank slots.",
        },
        {
            "id": "hobley-baringo-district-1906",
            "title": "Notes on the Geography and People of the Baringo District of the East Africa Protectorate",
            "author": "C. W. Hobley",
            "year": 1906,
            "publisher": "The Geographical Journal, Vol. 28, No. 5 (pp. 471–481)",
            "languages": ["turkana", "pokot", "ilchamus", "maasai", "kalenjin"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/records/1793399/files/article.pdf",
            "dataTypes": ["culture-history", "vocabulary"],
            "ingestionStatus": "integrated",
            "coverageNote": "13 verified Baringo District ethnographic and toponym entries across Turkana, Pokot, Ilchamus, Maasai, and Ogiek.",
        },
        {
            "id": "kr-dundas-kikuyu-calendar-1909",
            "title": "19. Kikuyu Calendar",
            "author": "K. R. Dundas",
            "year": 1909,
            "publisher": "Man, Vol. 9 (Royal Anthropological Institute)",
            "languages": ["kikuyu"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/records/2359285/files/article.pdf",
            "dataTypes": ["time", "culture-history"],
            "ingestionStatus": "integrated",
            "coverageNote": "13 verified traditional Kikuyu seasonal and lunar-calendar entries ingested into kikuyu.json.",
        },
        {
            "id": "c-dundas-history-of-kitui-1913",
            "title": "History of Kitui",
            "author": "Hon. Charles Dundas",
            "year": 1913,
            "publisher": "Journal of the Royal Anthropological Institute, Vol. 43",
            "languages": ["kamba"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/records/2389049/files/article.pdf",
            "dataTypes": ["culture-history", "vocabulary"],
            "ingestionStatus": "integrated",
            "coverageNote": "21 verified Kitui and Machakos Kamba ethnographic and historical terms ingested into kamba.json.",
        },
        {
            "id": "johnstone-mombasa-tribes-1902",
            "title": "Notes on the Customs of the Tribes Occupying Mombasa Sub-District, British East Africa",
            "author": "H. B. Johnstone",
            "year": 1902,
            "publisher": "Journal of the Royal Anthropological Institute, Vol. 32",
            "languages": ["mijikenda"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/record/2252150/files/article.pdf",
            "dataTypes": ["culture-history"],
            "ingestionStatus": "integrated",
            "coverageNote": "7 verified Mombasa sub-district Mijikenda (Duruma, Digo, Rabai) ethnographic entries ingested.",
        },
        {
            "id": "phillipson-notes-on-galla-1916",
            "title": "Notes on the Galla",
            "author": "J. H. Phillipson",
            "year": 1916,
            "publisher": "Man, Vol. 16 (Royal Anthropological Institute)",
            "languages": ["borana"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://zenodo.org/records/2463127/files/article.pdf",
            "dataTypes": ["culture-history"],
            "ingestionStatus": "integrated",
            "coverageNote": "3 verified Tana River Orma / Galla cultural entries ingested into borana.json.",
        },
        {
            "id": "arkell-hardwick-north-kenia-1903",
            "title": "An Ivory Trader in North Kenia: The Record of an Expedition Through Kikuyu to Galla-Land",
            "author": "A. Arkell-Hardwick",
            "year": 1903,
            "publisher": "Longmans, Green, and Co. (London)",
            "languages": ["rendille", "samburu", "borana"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://archive.org/stream/anivorytraderin00hardgoog/anivorytraderin00hardgoog_djvu.txt",
            "dataTypes": ["culture-history", "vocabulary"],
            "ingestionStatus": "integrated",
            "coverageNote": "Northern Kenya Rendille, Samburu, and Borana lexical/ethnographic records ingested.",
        },
        {
            "id": "hohnel-lakes-rudolf-stefanie-1894-vol2",
            "title": "Discovery of Lakes Rudolf and Stefanie, Vol. II",
            "author": "Lieut. Ludwig von Höhnel",
            "year": 1894,
            "publisher": "Longmans, Green, and Co. (London)",
            "languages": ["rendille", "samburu", "ilchamus", "daasanach", "pokot"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://archive.org/stream/discoveryoflakes02hhne/discoveryoflakes02hhne_djvu.txt",
            "dataTypes": ["culture-history", "vocabulary"],
            "ingestionStatus": "integrated",
            "coverageNote": "Vol. II Northern Kenya expedition lexical notes across Rendille, Samburu, Ilchamus, Daasanach, and Pokot.",
        },
        {
            "id": "amery-sudan-arabic-1905",
            "title": "English-Arabic Vocabulary for the Use of Officials in the Anglo-Egyptian Sudan (Kinubi Lexical Parent)",
            "author": "Capt. H. F. S. Amery",
            "year": 1905,
            "publisher": "Al-Mokattam Printing Office (Cairo)",
            "languages": ["nubi"],
            "license": "Public Domain (Pre-1931 US)",
            "commercialUseAllowed": True,
            "sourceUrl": "https://archive.org/stream/englisharabicvoc00ameriala/englisharabicvoc00ameriala_djvu.txt",
            "dataTypes": ["vocabulary", "phrases", "historical"],
            "ingestionStatus": "integrated",
            "coverageNote": "221 verified Sudan Arabic (Kinubi parent) entries staged in dictionaries/staging/nubi.json with Arabic script preserved in context.",
        },
    ]

    to_add = [s for s in new_sources if f'"{s["id"]}"' not in text and f"'{s['id']}'" not in text]
    if not to_add:
        return 0

    anchor = "\nfor (const _src of _commercialTextDatasetSources) {"
    idx = text.find(anchor)
    assert idx != -1, "Could not find _commercialTextDatasetSources loop in language-sources/index.ts"
    # Insert into _commercialTextDatasetSources array right before the closing "];" preceding the loop
    arr_end = text.rfind("];", 0, idx)
    assert arr_end != -1, "Could not find closing ]; of _commercialTextDatasetSources"
    before = text[:arr_end].rstrip()
    if not before.endswith(","):
        before += ","
    serialized = ",\n".join(
        "  " + json.dumps(s, ensure_ascii=False, indent=2).replace("\n", "\n  ")
        for s in to_add
    )
    updated = before + "\n" + serialized + "\n" + text[arr_end:]
    LANG_SOURCES_FILE.write_text(updated, encoding="utf-8")
    return len(to_add)


def main() -> None:
    parser = argparse.ArgumentParser(description="Ingest verified book extractions into KenyaHub dictionaries, staging, proverbs, and sources.")
    parser.add_argument(
        "--input",
        default="/working_dir/c_08f51470d3c36868/user_uploaded_files/ttl=63d/user_uploaded/kenya-hub-verified-book-extractions.json",
        help="Path to kenya-hub-verified-book-extractions.json",
    )
    args = parser.parse_args()
    counts = ingest_books(Path(args.input))
    print("=== VERIFIED BOOK EXTRACTIONS INGESTION SUMMARY ===")
    for k, v in sorted(counts.items()):
        print(f"  {k}: +{v}")
    print(f"  TOTAL NEW DICT/STAGING/PROVERB/SOURCE ITEMS: {sum(counts.values())}")


if __name__ == "__main__":
    main()
