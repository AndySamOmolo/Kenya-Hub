#!/usr/bin/env python3
"""
Idempotent ingestion script for kenya-hub-verified-book-extractions (1).json
(Pass 1 + Pass 2 + Pass 3: 4,208 entries across 48 sections).
100% Commercially Permissive: Born-digital CC-BY-4.0 (APiCS, Language Science Press),
Pre-1931 US Public Domain, & US Federal Gov Public Domain (FSI 1963, Peace Corps 1995).
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
    bare = ARABIC_RE.findall(cleaned)
    if bare:
        arabic_parts.extend(bare)
        cleaned = ARABIC_RE.sub("", cleaned)
    cleaned = WS_RE.sub(" ", cleaned).strip(" .,;:-/")
    arabic_note = " ".join(arabic_parts).strip()
    return cleaned, arabic_note


def norm_str(x: str) -> str:
    x = unicodedata.normalize("NFKD", (x or "").lower())
    x = "".join(c for c in x if not unicodedata.combining(c))
    x = re.sub(r"[^a-z0-9]+", " ", x).strip()
    return x


def norm_key(translation: str, english: str) -> tuple[str, str]:
    return (norm_str(translation), norm_str(english))


def map_category(cat_text: str, english: str, translation: str, default: str = "phrases") -> str:
    c = f"{cat_text} {english}".lower()
    words = translation.split()
    if len(words) >= 4:
        if any(k in c for k in (
            "clan", "ceremon", "ritual", "magic", "spirit", "curse", "belief", "history",
            "chief", "elder", "age-set", "age grade", "circumcis", "sacrific", "myth",
            "tribe", "custom", "taboo", "proverb", "riddle", "enigma", "folklore", "totem",
        )):
            return "culture-history"
        return "phrases"

    if any(k in c for k in ("number", "numeral", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "hundred", "thousand")):
        if re.search(r"\b(numeral|number|counting|cardinal|ordinal|one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|hundred|thousand)\b", c):
            return "numbers"
    if any(k in c for k in ("greet", "salut", "hello", "goodbye", "welcome", "thank", "farewell")):
        return "greetings"
    if any(k in c for k in (
        "clan", "ceremon", "ritual", "magic", "spirit", "curse", "belief", "history",
        "taboo", "sacrific", "circumcis", "age-set", "age grade", "age-grade", "ethnog",
        "ethnonym", "ancestor", "toponym", "hydronym", "dialect", "argot", "yibir",
        "midgan", "totem", "proverb", "riddle", "enigma", "folklore", "omen", "social grade",
    )):
        return "culture-history"
    if any(k in c for k in ("month", "season", "calendar", "day", "night", "year", "time", "morning", "evening", "today", "tomorrow", "yesterday", "week", "hour", "dawn", "dusk")):
        return "time"
    if any(k in c for k in (
        "animal", "fauna", "livestock", "bird", "fish", "lion", "elephant", "cow", "cattle",
        "goat", "sheep", "dog", "hyena", "snake", "monkey", "giraffe", "zebra", "rhino",
        "hippo", "camel", "donkey", "horse", "insect", "bee", "ant", "leopard", "buffalo",
        "ostrich", "crocodile", "bull", "calf", "ox", "ram", "chicken", "fowl",
    )):
        return "animals"
    if any(k in c for k in (
        "body", "anatomy", "head", "eye", "ear", "nose", "mouth", "hand", "foot", "leg",
        "arm", "heart", "blood", "bone", "tooth", "teeth", "tongue", "hair", "skin",
        "belly", "stomach", "abdomen", "neck", "back", "finger", "knee", "chest", "liver",
    )):
        return "body"
    if any(k in c for k in (
        "family", "kinship", "father", "mother", "brother", "sister", "child", "son",
        "daughter", "husband", "wife", "man", "woman", "boy", "girl", "uncle", "aunt",
        "grandfather", "grandmother", "kin", "parent", "friend", "relationship",
    )):
        return "family"
    if any(k in c for k in (
        "food", "eat", "drink", "water", "milk", "meat", "bread", "maize", "millet",
        "sorghum", "honey", "salt", "beer", "banana", "bean", "grain", "flour", "fat",
        "butter", "sugar", "coffee", "tea", "fruit", "porridge", "crop",
    )):
        return "food"
    if any(k in c for k in (
        "tree", "plant", "flora", "rain", "sun", "moon", "star", "sky", "earth", "ground",
        "stone", "rock", "mountain", "hill", "river", "lake", "sea", "fire", "wind",
        "cloud", "forest", "grass", "wood", "sand", "dust", "flower", "leaf", "root", "nature",
    )):
        return "nature"
    if any(k in c for k in (
        "house", "hut", "home", "door", "bed", "pot", "knife", "spear", "shield", "bow",
        "arrow", "cloth", "garment", "dress", "ornament", "rope", "basket", "mat", "stool",
        "village", "kraal", "boma", "utensil", "weapon", "tool", "axe", "hoe",
    )):
        return "home"
    if any(k in c for k in ("road", "path", "journey", "travel", "boat", "canoe", "ship", "walk", "go", "come", "north", "south", "east", "west", "direction")):
        return "travel"
    if any(k in c for k in ("buy", "sell", "price", "money", "market", "trade", "coin", "measure", "pay", "debt", "rupee", "shilling")):
        return "shopping"
    if any(k in c for k in ("war", "fight", "sick", "disease", "medicine", "doctor", "wound", "pain", "kill", "die", "death", "law", "judge", "thief", "danger", "help", "fever", "poison", "homicide")):
        return "emergency"
    if re.search(r"\b(v\.|v\.t\.|v\.i\.|v\.tr\.|verb|to\s+[a-z]+)\b", c):
        return "verbs"
    if re.search(r"\b(adj\.|adjective|colour|color|big|small|good|bad|long|short|hot|cold|new|old|white|black|red|heavy|light|sweet|bitter|strong|weak)\b", c):
        return "adjectives"
    return default if default in VALID_CATEGORIES else "phrases"


def trim_english(raw_gloss: str) -> tuple[str, str]:
    """Return (concise_english, extra_note) so dictionary english stays crisp and game-safe."""
    g = clean_md(raw_gloss)
    extra_parts: list[str] = []
    m_pos = re.match(r"^(?:n\.|v\.|v\.t\.|v\.i\.|v\.n\.|v\.tr\.|adj\.|adv\.|prep\.|conj\.|pron\.|interj\.|gen\.\s*part\.)\s*", g, re.I)
    if m_pos:
        extra_parts.append(f"POS: {m_pos.group(0).strip()}")
        g = g[m_pos.end():].strip()
    m_tail_pos = re.search(r",\s*(v\.|v\.\s*n\.|v\.\s*a\.|n\.|adj\.|adv\.|prep\.|conj\.|pron\.|interj\.)$", g, re.I)
    if m_tail_pos:
        extra_parts.append(f"POS: {m_tail_pos.group(1)}")
        g = g[:m_tail_pos.start()].strip()

    if " — " in g:
        left, right = g.split(" — ", 1)
        right_clean = right.strip().strip("'\"“”")
        if right_clean:
            extra_parts.append(f"Gloss: {left.strip()}")
            g = right_clean

    if len(g) > 65:
        for sep in ("; ", " — ", " - ", " ("):
            if sep in g:
                head, _rest = g.split(sep, 1)
                if 2 <= len(head.strip()) <= 62:
                    extra_parts.append(g)
                    g = head.strip().rstrip(".,;:")
                    break
    if len(g) > 65:
        extra_parts.append(g)
        g = g[:60].rsplit(" ", 1)[0].rstrip(".,;:")

    return g.strip(), " | ".join(extra_parts)


def make_entry(
    english: str,
    translation: str,
    context: str,
    pronunciation: str = "",
) -> dict[str, str] | None:
    t = clean_md(translation)
    t, arabic_note = strip_arabic(t)
    t = t.strip(" .,;:")
    e, extra_e = trim_english(english)
    if (
        not t
        or not e
        or t.lower() in ("—", "-", "(blank)", "blank", "n/a", "(none given)", "none given")
        or e.lower() in ("—", "-", "(blank)", "blank", "n/a", "(none given)", "none given")
    ):
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
    total = sum(len(c.get("entries", [])) for c in data.get("categories", []))
    data["totalEntries"] = total
    data["lastUpdated"] = "2026-11-21"
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
    data["lastUpdated"] = "2026-11-21"
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    p = STAGING_DIR / f"{lang_id}.json"
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def section_num(sec_title: str) -> int:
    m = re.match(r"^\s*(\d+)\.", sec_title or "")
    return int(m.group(1)) if m else 0


def infer_proverb_theme(text: str) -> str:
    t = text.lower()
    if any(k in t for k in ("family", "mother", "father", "child", "son", "daughter", "brother", "kin", "wife", "husband")):
        return "family"
    if any(k in t for k in ("together", "unity", "friend", "neighbour", "neighbor", "clan", "village", "help")):
        return "unity"
    if any(k in t for k in ("patient", "wait", "slow", "time", "tomorrow", "endure")):
        return "patience"
    if any(k in t for k in ("work", "lazy", "diligen", "cultivat", "harvest", "effort", "sweat")):
        return "hard-work"
    if any(k in t for k in ("humble", "pride", "boast", "proud", "arrogant")):
        return "humility"
    if any(k in t for k in ("lion", "hyena", "cow", "cattle", "rain", "tree", "river", "sun", "moon", "bird", "snake", "elephant", "leopard", "goat", "dog")):
        return "nature"
    if any(k in t for k in ("brave", "courage", "warrior", "spear", "fear", "bold")):
        return "courage"
    if any(k in t for k in ("beware", "caution", "danger", "fool", "fire", "trap", "enemy", "thief", "warn")):
        return "caution"
    return "wisdom"


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
        "yaaku": ("Yaaku (Mogogodo)", "Yaakunte / Mogogodo", "muu", "Afro-Asiatic (East Cushitic)", ["Laikipia County (Mukogodo Forest)"]),
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

    def get_lang_field(row: dict) -> str:
        return (row.get("language_or_dialect") or row.get("language_dialect") or "").strip()

    def get_page_field(row: dict) -> str:
        return (row.get("source_and_page") or row.get("source_page") or "").strip()

    def source_tag(row: dict, label: str) -> str:
        pg = clean_md(get_page_field(row))
        notes = clean_md(row.get("category_or_notes", ""))
        url = (row.get("verified_url") or "").strip()
        parts = [label]
        if pg:
            parts.append(pg)
        if notes and notes not in ("—", "-"):
            parts.append(notes)
        if url:
            parts.append(url)
        return " · ".join(parts)

    proverb_rows_sw: list[dict] = []
    proverb_rows_nyika: list[dict] = []
    proverb_rows_taita: list[dict] = []
    proverb_rows_kalenjin: list[dict] = []
    proverb_rows_maasai: list[dict] = []

    for row in entries:
        sec = section_num(row.get("section", ""))
        sub = row.get("subsection", "") or ""
        term = row.get("indigenous_term", "") or ""
        lang = get_lang_field(row)
        gloss = row.get("english_gloss", "") or ""
        notes = row.get("category_or_notes", "") or ""
        pg = clean_md(get_page_field(row))
        url = (row.get("verified_url") or "").strip()

        # ================= PASS 1 & PASS 2 (Sections 1–25) =================
        if sec == 1:
            cat = "phrases" if "1B" in sub or len(clean_md(term).split()) >= 4 else map_category(notes, gloss, term, "phrases")
            add_to_dict("nubi", True, cat, make_entry(gloss, term, source_tag(row, "APiCS Online #63 Kinubi (CC-BY-4.0)")))

        elif sec == 2:
            if "2A" in sub or "kuria" in lang.lower():
                add_to_dict("kuria", True, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #120 ACAL 45 (2018) Kuria (CC-BY-4.0)")))
            else:
                add_to_dict("luhya", False, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #120 ACAL 45 (2018) Lubukusu (CC-BY-4.0)")))

        elif sec == 3:
            t_clean = clean_md(term).lstrip(".")
            add_to_dict("luhya", False, "phrases", make_entry(gloss, t_clean, source_tag(row, "LangSci #216 (2019) Logoori/Maragoli (CC-BY-4.0)")))

        elif sec == 4:
            add_to_dict("kisii", False, "phrases", make_entry(gloss, term, source_tag(row, "LangSci #306 ACAL 49 (2022) Ekegusii (CC-BY-4.0)")))

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

        elif sec == 6:
            d_tag = clean_md(lang)
            cat = map_category(notes, gloss, term, "culture-history")
            add_to_dict("swahili", False, cat, make_entry(gloss, term, source_tag(row, f"Stigand (1915) Swahili Dialects ({d_tag})")))

        elif sec in (7, 21):
            l_low = lang.lower()
            if "taita" in l_low:
                proverb_rows_taita.append(row)
            elif "giryama" in l_low or "nyika" in l_low or "digo" in l_low:
                proverb_rows_nyika.append(row)
            else:
                proverb_rows_sw.append(row)

        elif sec == 8:
            eng = clean_md(term)
            sw = clean_md(lang)
            so = clean_md(gloss)
            om = clean_md(notes)
            for target_lang, val, label in (
                ("swahili", sw, f"Smee (1844) East Coast Vocab (Swahili, 1844 orthography) · {pg} · {url}"),
                ("somali", so, f"Smee (1844) East Coast Vocab (Somali, 1844 orthography) · {pg} · {url}"),
                ("borana", om, f"Smee (1844) East Coast Vocab (Oromo/Galla, 1844 orthography) · {pg} · {url}"),
            ):
                if val and val not in ("—", "-"):
                    cat = map_category("", eng, val, "culture-history")
                    add_to_dict(target_lang, False, cat, make_entry(eng, val, label))

        elif sec == 9:
            t_c = clean_md(term)
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

        elif sec == 10:
            t_c = clean_md(term)
            t_parts = [x.strip() for x in t_c.split("/")] if "/" in t_c else [t_c]
            g_parts = [x.strip() for x in clean_md(gloss).split("/")] if "/" in gloss and len(t_parts) > 1 else [gloss]
            for idx, tp in enumerate(t_parts):
                gp = g_parts[idx] if idx < len(g_parts) else gloss
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

        elif sec == 11:
            l_low = lang.lower()
            target = "turkana"
            if "pokot" in l_low or "suk" in l_low:
                target = "pokot"
            elif "ilchamus" in l_low or "njemps" in l_low or "baringo" in l_low:
                target = "ilchamus"
            elif "maasai" in l_low or "masai" in l_low:
                target = "maasai"
            elif "ogiek" in l_low or "dorobo" in l_low:
                target = "kalenjin"
            add_to_dict(target, False, "culture-history", make_entry(gloss, term, source_tag(row, f"Hobley (1906) Baringo District ({clean_md(lang)})")))

        elif sec == 12:
            add_to_dict("kikuyu", False, "time", make_entry(gloss, term, source_tag(row, "K. R. Dundas (1909) Kikuyu Calendar")))

        elif sec == 13:
            add_to_dict("kamba", False, "culture-history", make_entry(gloss, term, source_tag(row, f"C. Dundas (1913) History of Kitui ({clean_md(lang)})")))

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

        elif sec == 15:
            if "galla" in lang.lower() or "orma" in lang.lower():
                add_to_dict("borana", False, "culture-history", make_entry(gloss, term, source_tag(row, "Phillipson (1916) Notes on the Galla (Tana River Orma)")))
            else:
                add_to_dict("mijikenda", False, "culture-history", make_entry(gloss, term, source_tag(row, "Johnstone (1902) Tribes of Mombasa Sub-District")))

        elif sec in (16, 24):
            t_c = clean_md(term)
            n_c = clean_md(notes)
            if "see limdi" in gloss.lower():
                continue
            if "16B" in sub or "24B" in sub:
                so_val = re.sub(r"^Somali:\s*", "", n_c, flags=re.I).strip()
                if so_val and so_val not in ("—", "-"):
                    cat = map_category("", gloss, so_val, "phrases")
                    add_to_dict("somali", False, cat, make_entry(gloss, so_val, source_tag(row, "Kirk (1905) Somali Grammar (Standard Somali)")))
                parts = [p.strip() for p in t_c.split("/")]
                for idx, p in enumerate(parts):
                    if not p or p in ("—", "-") or "uses yibir" in p.lower():
                        continue
                    argot = "Yibir" if idx == 0 else "Midgan"
                    add_to_dict("somali", False, "culture-history", make_entry(gloss, p, source_tag(row, f"Kirk (1905) Somali Grammar ({argot} argot)")))
            else:
                d_label = clean_md(lang)
                cat = "culture-history" if ("yibir" in d_label.lower() or "midgan" in d_label.lower()) else map_category(notes, gloss, t_c, "phrases")
                add_to_dict("somali", False, cat, make_entry(gloss, t_c, source_tag(row, f"Kirk (1905) Somali Grammar ({d_label})")))

        elif sec in (17, 22):
            t_c = clean_md(term)
            d_label = clean_md(lang)
            cat = map_category(notes, gloss, t_c, "phrases")
            add_to_dict("mijikenda", False, cat, make_entry(gloss, t_c, source_tag(row, f"Krapf & Rebmann (1887) Nika-English Dict ({d_label})")))

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

        elif sec in (19, 23):
            cat = "phrases" if "23E" in sub else map_category(notes, gloss, term, "phrases")
            add_to_dict("nubi", True, cat, make_entry(gloss, term, source_tag(row, "Amery (1905) Sudan Arabic (Kinubi lexical parent)")))

        elif sec == 25:
            t_c = clean_md(term)
            eng = clean_md(gloss)
            n_c = clean_md(notes)
            if "25A" in sub:
                parts = [p.strip() for p in t_c.split("/")]
                if len(parts) >= 1 and parts[0] and "blank" not in parts[0].lower():
                    add_to_dict("swahili", False, map_category("", eng, parts[0], "culture-history"), make_entry(eng, parts[0], f"Smee (1844, p. 55) Souallie (Swahili) · {pg} · {url}"))
                if len(parts) >= 2 and parts[1] and "blank" not in parts[1].lower():
                    add_to_dict("borana", False, map_category("", eng, parts[1], "culture-history"), make_entry(eng, parts[1], f"Smee (1844, p. 55) Galla (Oromo) · {pg} · {url}"))
                so = re.sub(r"^Soomallie:\s*", "", n_c, flags=re.I).strip()
                if so and "blank" not in so.lower() and so not in ("—", "-"):
                    add_to_dict("somali", False, map_category("", eng, so, "culture-history"), make_entry(eng, so, f"Smee (1844, p. 55) Soomallie (Somali) · {pg} · {url}"))
            else:
                parts = [p.strip() for p in t_c.split("/")]
                if len(parts) >= 3 and parts[2] and "blank" not in parts[2].lower() and parts[2] not in ("—", "-"):
                    add_to_dict("borana", False, map_category("", eng, parts[2], "culture-history"), make_entry(eng, parts[2], f"Rigby (1844, pp. 93–94) Galla (Oromo) · {pg} · {url}"))
                so = re.sub(r"^Somauli:\s*", "", n_c, flags=re.I).strip()
                if so and "blank" not in so.lower() and so not in ("—", "-"):
                    add_to_dict("somali", False, map_category("", eng, so, "culture-history"), make_entry(eng, so, f"Rigby (1844, pp. 93–94) Somauli (Somali) · {pg} · {url}"))

        # ================= PASS 3 (Sections 26–48) =================

        # Sec 26: W. E. Taylor (1891) Giryama Vocabulary and Collections -> mijikenda
        elif sec == 26:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("mijikenda", False, cat, make_entry(gloss, term, source_tag(row, "Taylor (1891) Giryama Vocabulary & Collections")))

        # Sec 27: J. A. Wray (1894) Taita (Sagalla) -> taita
        elif sec == 27:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("taita", False, cat, make_entry(gloss, term, source_tag(row, "Wray (1894) Elementary Introduction to Taita (Sagalla)")))

        # Sec 28: J. L. Krapf (1850) Six East-African Languages -> split into pokomo, kamba, mijikenda, borana, swahili
        elif sec == 28:
            t_c = clean_md(term)
            krapf_map = {
                "kipokomo": ("pokomo", "Kipokomo"),
                "kikamba": ("kamba", "Kikamba"),
                "kinika": ("mijikenda", "Kinika (Mijikenda)"),
                "kigalla": ("borana", "Kigalla (Oromo/Borana)"),
                "kisuaheli": ("swahili", "Kisuaheli (Kiswahili)"),
            }
            for seg in t_c.split(";"):
                seg = seg.strip()
                if ":" not in seg:
                    continue
                l_key, val = seg.split(":", 1)
                l_clean = l_key.strip().lower()
                val = val.strip()
                if l_clean in krapf_map and val and val not in ("—", "-"):
                    target_lang, label_lang = krapf_map[l_clean]
                    cat = map_category(notes, gloss, val, "phrases")
                    add_to_dict(target_lang, False, cat, make_entry(gloss, val, source_tag(row, f"Krapf (1850) Six East-African Languages ({label_lang})")))

        # Sec 29: Alice Werner (1915) Bantu Coast Tribes -> pokomo / mijikenda
        elif sec == 29:
            l_low = lang.lower()
            targets = []
            if "pokomo" in l_low or "buu" in l_low:
                targets.append("pokomo")
            if any(k in l_low for k in ("giryama", "nyika", "rabai", "kauma", "duruma", "chonyi", "kambe", "ribe", "mijikenda")):
                targets.append("mijikenda")
            if not targets:
                targets = ["pokomo"]
            cat = map_category(notes, gloss, term, "culture-history")
            for tg in targets:
                add_to_dict(tg, False, cat, make_entry(gloss, term, source_tag(row, f"Werner (1915) Bantu Coast Tribes ({clean_md(lang)})")))

        # Sec 30: A. C. Hollis (1909) The Nandi -> kalenjin + 30C/30D proverbs/riddles
        elif sec == 30:
            if sub.startswith("30C") or sub.startswith("30D"):
                proverb_rows_kalenjin.append(row)
                add_to_dict("kalenjin", False, "culture-history", make_entry(gloss, term, source_tag(row, "Hollis (1909) The Nandi (Proverb/Riddle)")))
            else:
                default_cat = "culture-history" if sub.startswith("30A") else ("family" if sub.startswith("30B") else ("numbers" if sub.startswith("30E") else "phrases"))
                cat = map_category(notes, gloss, term, default_cat)
                add_to_dict("kalenjin", False, cat, make_entry(gloss, term, source_tag(row, "Hollis (1909) The Nandi")))

        # Sec 31: M. W. H. Beech (1911) The Suk -> pokot
        elif sec == 31:
            default_cat = "numbers" if sub.startswith("31A") else ("family" if sub.startswith("31B") else "phrases")
            cat = map_category(notes, gloss, term, default_cat)
            add_to_dict("pokot", False, cat, make_entry(gloss, term, source_tag(row, "Beech (1911) The Suk (Pokot)")))

        # Sec 32: Juxon Barton (1923) Notes on the Kipsikis -> kalenjin
        elif sec == 32:
            cat = map_category(notes, gloss, term, "culture-history")
            add_to_dict("kalenjin", False, cat, make_entry(gloss, term, source_tag(row, f"Barton (1923) Kipsigis / Lumbwa ({clean_md(lang)})")))

        # Sec 33: A. C. Hollis (1905) The Masai -> maasai + 33A/33B proverbs/riddles
        elif sec == 33:
            if sub.startswith("33A") or sub.startswith("33B"):
                proverb_rows_maasai.append(row)
                add_to_dict("maasai", False, "culture-history", make_entry(gloss, term, source_tag(row, "Hollis (1905) The Masai (Proverb/Riddle)")))
            else:
                cat = map_category(notes, gloss, term, "phrases")
                add_to_dict("maasai", False, cat, make_entry(gloss, term, source_tag(row, "Hollis (1905) The Masai")))

        # Sec 34: Hildegarde Hinde (1901) The Masai Language -> maasai
        elif sec == 34:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("maasai", False, cat, make_entry(gloss, term, source_tag(row, "Hinde (1901) The Masai Language")))

        # Sec 35: C. W. Hobley (1902) Eastern Uganda -> luhya, luo, kalenjin, teso
        elif sec == 35:
            l_low = lang.lower()
            if "luo" in l_low or "nife" in l_low:
                target = "luo"
            elif "nandi" in l_low or "eldorobo" in l_low or "dorobo" in l_low:
                target = "kalenjin"
            elif "elgumi" in l_low or "iteso" in l_low or "teso" in l_low:
                target = "teso"
            else:
                target = "luhya"
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict(target, False, cat, make_entry(gloss, term, source_tag(row, f"Hobley (1902) Eastern Uganda ({clean_md(lang)})")))

        # Sec 36: Hildegarde Hinde (1904) Kamba / Kikuyu / Swahili -> split cleanly
        elif sec == 36:
            t_c = clean_md(term)
            segs = [s.strip() for s in t_c.split(";") if s.strip()]
            for seg in segs:
                seg_low = seg.lower()
                # Extract clean term without trailing dialect tag
                clean_seg = re.sub(r"\s*\((?:Ulu|Nganyawa|Ulu/Nganyawa|Kamba|Kik\.?|Kikuyu|Swa\.?|Swahili|Zanzibar)[^)]*\)\s*", "", seg, flags=re.I).strip()
                if not clean_seg:
                    clean_seg = seg
                if "(kik" in seg_low:
                    add_to_dict("kikuyu", False, map_category(notes, gloss, clean_seg, "phrases"), make_entry(gloss, clean_seg, source_tag(row, "Hinde (1904) Kamba & Kikuyu Vocabularies (Kikuyu Jogowini)")))
                elif "(swa" in seg_low or "(zanz" in seg_low:
                    add_to_dict("swahili", False, map_category(notes, gloss, clean_seg, "phrases"), make_entry(gloss, clean_seg, source_tag(row, "Hinde (1904) Kamba & Kikuyu Vocabularies (Swahili)")))
                else:
                    add_to_dict("kamba", False, map_category(notes, gloss, clean_seg, "phrases"), make_entry(gloss, clean_seg, source_tag(row, "Hinde (1904) Kamba & Kikuyu Vocabularies (Kamba)")))

        # Sec 37: A. W. McGregor (1904) English-Kikuyu Vocabulary -> kikuyu
        elif sec == 37:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("kikuyu", False, cat, make_entry(gloss, term, source_tag(row, "McGregor (1904) English-Kikuyu Vocabulary")))

        # Sec 38: C. W. Hobley (1910) Ethnology of A-Kamba & Yaaku -> kamba + staging/yaaku
        elif sec == 38:
            if "38B" in sub or "yaaku" in lang.lower() or "mogogodo" in lang.lower():
                cat = map_category(notes, gloss, term, "phrases")
                add_to_dict("yaaku", True, cat, make_entry(gloss, term, source_tag(row, "Hobley (1910) Yaaku / Mogogodo Vocabulary")))
            else:
                cat = map_category(notes, gloss, term, "culture-history")
                add_to_dict("kamba", False, cat, make_entry(gloss, term, source_tag(row, f"Hobley (1910) Ethnology of A-Kamba ({clean_md(lang)})")))

        # Sec 39: A. M. Champion (1912) The Atharaka -> meru
        elif sec == 39:
            cat = map_category(notes, gloss, term, "culture-history")
            add_to_dict("meru", False, cat, make_entry(gloss, term, source_tag(row, "Champion (1912) The Atharaka (Kitharaka)")))

        # Sec 40: Karl Tutschek (1844) Dictionary of the Galla Language -> borana
        elif sec == 40:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("borana", False, cat, make_entry(gloss, term, source_tag(row, f"Tutschek (1844) Dictionary of the Galla Language ({clean_md(lang)})")))

        # Sec 41: Larajasse (1897) Somali Dictionary -> somali
        elif sec == 41:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("somali", False, cat, make_entry(gloss, term, source_tag(row, "Larajasse (1897) Somali-English Dictionary (Berbera)")))

        # Sec 42: Gerhard Lindblom (1920) The Akamba -> kamba
        elif sec == 42:
            cat = map_category(notes, gloss, term, "culture-history")
            add_to_dict("kamba", False, cat, make_entry(gloss, term, source_tag(row, f"Lindblom (1920) The Akamba ({clean_md(lang)})")))

        # Sec 43: H. H. Johnston (1919) Comparative Study of Bantu & Semi-Bantu Languages
        elif sec == 43:
            l_low = lang.lower()
            cat = map_category(notes, gloss, term, "phrases")
            ctx = source_tag(row, f"Johnston (1919) Bantu Comparative Vol. I ({clean_md(lang)})")
            if "kikuyu" in l_low and "meru" in l_low:
                add_to_dict("kikuyu", False, cat, make_entry(gloss, term, ctx))
                add_to_dict("meru", False, cat, make_entry(gloss, term, ctx))
            elif "kamba" in l_low:
                add_to_dict("kamba", False, cat, make_entry(gloss, term, ctx))
            elif "pωkωmω" in l_low or "pokomo" in l_low:
                add_to_dict("pokomo", False, cat, make_entry(gloss, term, ctx))
            elif "taita" in l_low:
                add_to_dict("taita", False, cat, make_entry(gloss, term, ctx))
            elif "taveita" in l_low or "taveta" in l_low:
                add_to_dict("taveta", False, cat, make_entry(gloss, term, ctx))
            elif "nika" in l_low or "giryama" in l_low:
                add_to_dict("mijikenda", False, cat, make_entry(gloss, term, ctx))
            elif "guzii" in l_low or "ekegusii" in l_low:
                add_to_dict("kisii", False, cat, make_entry(gloss, term, ctx))
            elif "kωria" in l_low or "kuria" in l_low:
                add_to_dict("kuria", True, cat, make_entry(gloss, term, ctx))
            else:
                # 5. Lu-nyara, 5a. Lu-wanga, 6. Lu-masaba, 6a. Lu-konde -> luhya
                add_to_dict("luhya", False, cat, make_entry(gloss, term, ctx))

        # Sec 44: A. C. Hollis (1900) History of Vumba -> swahili / mijikenda
        elif sec == 44:
            l_low = lang.lower()
            targets = []
            if "digo" in l_low or "segeju" in l_low:
                targets.append("mijikenda")
            if "vumba" in l_low or "swahili" in l_low or not targets:
                targets.append("swahili")
            cat = map_category(notes, gloss, term, "culture-history")
            for tg in targets:
                add_to_dict(tg, False, cat, make_entry(gloss, term, source_tag(row, f"Hollis (1900) History of Vumba ({clean_md(lang)})")))

        # Sec 45: FSI (1963, US Gov PD) Swahili Basic Course -> swahili
        elif sec == 45:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("swahili", False, cat, make_entry(gloss, term, source_tag(row, "FSI (1963, US Gov PD) Swahili Basic Course")))

        # Sec 46: Peace Corps Kenya (1995, US Gov PD) Kiswahili Manual -> swahili
        elif sec == 46:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("swahili", False, cat, make_entry(gloss, term, source_tag(row, "Peace Corps Kenya (1995, US Gov PD) Kiswahili Manual")))

        # Sec 47: C. W. Hobley (1910) Yaaku / Mogogodo Complete Vocabulary -> staging/yaaku
        elif sec == 47:
            cat = map_category(notes, gloss, term, "phrases")
            add_to_dict("yaaku", True, cat, make_entry(gloss, term, source_tag(row, "Hobley (1910) Yaaku / Mogogodo Vocabulary")))

        # Sec 48: C. W. Hobley (1910) Mweru, Samburu, Laikipiak, Elgeyo & Uasingishu -> meru, samburu, maasai, kalenjin, borana, swahili
        elif sec == 48:
            l_low = lang.lower()
            eff_gloss = gloss
            if clean_md(eff_gloss).lower() in ("", "(none given)", "none given", "—", "-"):
                eff_gloss = notes
            targets = []
            if "mweru" in l_low or "meru" in l_low:
                targets.append("meru")
            if "sambur" in l_low:
                targets.append("samburu")
            if "laikipiak" in l_low or "uasingishu" in l_low or "masai" in l_low:
                targets.append("maasai")
            if "elgeyo" in l_low or "kamasia" in l_low or "nandi" in l_low or "lumbwa" in l_low:
                targets.append("kalenjin")
            if "bworana" in l_low or "borana" in l_low:
                targets.append("borana")
            if "swahili" in l_low:
                targets.append("swahili")
            if not targets:
                targets = ["meru"]
            cat = map_category(notes, eff_gloss, term, "culture-history")
            for tg in targets:
                add_to_dict(tg, False, cat, make_entry(eff_gloss, term, source_tag(row, f"Hobley (1910) Ethnology Appendix ({clean_md(lang)})")))

    # Save modified core & staging dictionaries
    for lang_id, data in core_dicts.items():
        save_core_dict(lang_id, data)
    for lang_id, data in staging_dicts.items():
        save_staging_dict(lang_id, data)

    # Update catalog.ts exact counts across all 23 core dictionaries & categories
    update_catalog_counts()

    # Merge net-new proverbs (deduplicated by both ID and normalized indigenous text)
    prov_added = merge_proverbs(
        proverb_rows_sw,
        proverb_rows_nyika,
        proverb_rows_taita,
        proverb_rows_kalenjin,
        proverb_rows_maasai,
    )
    added_counts.update(prov_added)

    # Register missing Pass 3 bibliographic sources (strict LanguageSource schema)
    sources_added = update_language_sources()
    added_counts["language_sources_registered"] = sources_added

    return added_counts


def update_catalog_counts() -> None:
    cat_text = CATALOG_FILE.read_text(encoding="utf-8")
    total_all = 0

    for dict_file in sorted(DICT_DIR.glob("*.json")):
        lang_id = dict_file.stem
        d = json.loads(dict_file.read_text(encoding="utf-8"))
        cat_counts = {c["id"]: len(c.get("entries", [])) for c in d.get("categories", [])}
        total = sum(cat_counts.values())
        total_all += total

        # Locate the block for this languageId inside ALL_DICT_METAS
        start_m = re.search(rf'"languageId":\s*"{re.escape(lang_id)}"', cat_text)
        if not start_m:
            continue
        start_pos = start_m.start()
        # Find the next languageId block or end of ALL_DICT_METAS
        next_m = re.search(r'"languageId":\s*"', cat_text[start_pos + 20:])
        end_pos = (start_pos + 20 + next_m.start()) if next_m else len(cat_text)

        block = cat_text[start_pos:end_pos]
        block = re.sub(r'("totalEntries":\s*)\d+', rf"\g<1>{total}", block, count=1)
        block = re.sub(r'("lastUpdated":\s*)"[^"]*"', r'\g<1>"2026-11-21"', block, count=1)
        for cid, cnt in cat_counts.items():
            block = re.sub(
                rf'("id":\s*"{re.escape(cid)}"[\s\S]{{0,180}}?"count":\s*)\d+',
                rf"\g<1>{cnt}",
                block,
                count=1,
            )
        cat_text = cat_text[:start_pos] + block + cat_text[end_pos:]

    cat_text = re.sub(
        r"(export const TOTAL_DICTIONARY_ENTRIES:\s*number\s*=\s*)\d+;",
        rf"\g<1>{total_all};",
        cat_text,
        count=1,
    )
    CATALOG_FILE.write_text(cat_text, encoding="utf-8")


def append_ts_array_items(ts_path: Path, items: list[dict]) -> int:
    if not items or not ts_path.exists():
        return 0
    text = ts_path.read_text(encoding="utf-8")
    # Collect existing normalized indigenous texts for strict semantic deduplication
    existing_ind = set()
    for m in re.finditer(r'"indigenous":\s*"((?:[^"\\]|\\.)*)"', text):
        try:
            existing_ind.add(norm_str(json.loads(f'"{m.group(1)}"')))
        except Exception:
            existing_ind.add(norm_str(m.group(1)))

    new_items = []
    seen_ids = set()
    for it in items:
        ind_norm = norm_str(it.get("indigenous", ""))
        if not ind_norm:
            continue
        if it["id"] in seen_ids or f'"{it["id"]}"' in text or f"'{it['id']}'" in text:
            continue
        if ind_norm in existing_ind:
            continue
        seen_ids.add(it["id"])
        existing_ind.add(ind_norm)
        new_items.append(it)

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


def merge_proverbs(
    sw_rows: list[dict],
    nyika_rows: list[dict],
    taita_rows: list[dict],
    kalenjin_rows: list[dict],
    maasai_rows: list[dict],
) -> dict[str, int]:
    res = {
        "proverbs_swahili": 0,
        "proverbs_mijikenda": 0,
        "proverbs_taita": 0,
        "proverbs_kalenjin": 0,
        "proverbs_maasai": 0,
    }

    def build_proverbs(rows: list[dict], lang_id: str, lang_name: str, id_prefix: str, default_citation: str) -> list[dict]:
        out = []
        for idx, r in enumerate(rows, 1):
            pg = clean_md(r.get("source_and_page") or r.get("source_page") or "")
            sec_m = re.search(r"§\s*(\d+[a-z]?)", pg)
            slug = sec_m.group(1) if sec_m else str(idx)
            ind = clean_md(r.get("indigenous_term", ""))
            gloss = clean_md(r.get("english_gloss", ""))
            notes = clean_md(r.get("category_or_notes", ""))
            if not ind or not gloss:
                continue
            meaning = notes if notes and notes not in ("—", "-", "Proverb", "Proverb / Idiom", "Proverb / Saying") else gloss
            item: dict[str, str] = {
                "id": f"{id_prefix}-{slug}",
                "languageId": lang_id,
                "languageName": lang_name,
                "indigenous": ind,
                "literalTranslation": gloss,
                "meaning": meaning,
                "theme": infer_proverb_theme(f"{gloss} {meaning}"),
                "sourceCitation": f"{default_citation} ({pg})" if pg else default_citation,
            }
            if notes and notes not in ("—", "-", "Proverb", "Proverb / Idiom", "Proverb / Saying") and len(notes) <= 120:
                item["englishEquivalent"] = notes
            out.append(item)
        return out

    res["proverbs_swahili"] = append_ts_array_items(
        PROVERBS_DIR / "swahili.ts",
        build_proverbs(sw_rows, "swahili", "Kiswahili", "taylor-1891-swahili-p12", "W. E. Taylor, African Aphorisms (1891)"),
    )
    res["proverbs_mijikenda"] = append_ts_array_items(
        PROVERBS_DIR / "mijikenda.ts",
        build_proverbs(nyika_rows, "mijikenda", "Mijikenda (Kinyika / Kigiriama)", "taylor-1891-mijikenda-p12", "W. E. Taylor, African Aphorisms (1891)"),
    )
    res["proverbs_taita"] = append_ts_array_items(
        PROVERBS_DIR / "taita.ts",
        build_proverbs(taita_rows, "taita", "Taita (Kidawida / Kisagala)", "taylor-1891-taita-p2", "W. E. Taylor, African Aphorisms (1891)"),
    )
    res["proverbs_kalenjin"] = append_ts_array_items(
        PROVERBS_DIR / "kalenjin.ts",
        build_proverbs(kalenjin_rows, "kalenjin", "Kalenjin (Nandi)", "hollis-1909-nandi-p3", "A. C. Hollis, The Nandi: Their Language and Folk-Lore (1909)"),
    )
    res["proverbs_maasai"] = append_ts_array_items(
        PROVERBS_DIR / "maasai.ts",
        build_proverbs(maasai_rows, "maasai", "Maasai (Maa)", "hollis-1905-masai-p3", "A. C. Hollis, The Masai: Their Language and Folklore (1905)"),
    )
    return res


def update_language_sources() -> int:
    text = LANG_SOURCES_FILE.read_text(encoding="utf-8")
    new_sources = [
        {
            "id": "barton-kipsikis-1923",
            "title": "Notes on the Kipsikis or Lumbwa Tribe of Kenya Colony (JRAI Vol. 53, 1923)",
            "fileName": "https://zenodo.org/records/2389051/files/article.pdf",
            "canonicalUrl": "https://zenodo.org/records/2389051/files/article.pdf",
            "languages": ["kalenjin"],
            "published": "1923 (Journal of the Royal Anthropological Institute, Vol. 53)",
            "license": "Public Domain (Pre-1931 US)",
            "category": "historical-pd",
            "contribution": "67 verified Kipsigis (Kipsikis) clan, warrior-division, age-set (Ipinda), and customary/ceremonial vocabulary entries by Juxon Barton.",
            "appUses": ["dictionary", "cultural reference"],
            "contentTypes": ["vocabulary", "cultural-reference"],
            "ingestionStatus": "integrated",
            "coverageNote": "67 verified Kipsigis entries ingested into kalenjin.json.",
        },
        {
            "id": "hollis-vumba-1900",
            "title": "Notes on the History of Vumba, East Africa (JRAI Vol. 30, 1900, pp. 275–297)",
            "fileName": "https://zenodo.org/records/2359283/files/article.pdf",
            "canonicalUrl": "https://zenodo.org/records/2359283/files/article.pdf",
            "languages": ["swahili", "mijikenda"],
            "published": "1900 (Journal of the Royal Anthropological Institute, Vol. 30)",
            "license": "Public Domain (Pre-1931 US)",
            "category": "historical-pd",
            "contribution": "33 verified Kivumba Swahili, Kidigo, and Kisegeju historical sultanate, toponym, and coastal vocabulary entries by A. C. Hollis.",
            "appUses": ["dictionary", "cultural reference"],
            "contentTypes": ["vocabulary", "cultural-reference"],
            "ingestionStatus": "integrated",
            "coverageNote": "33 verified Kivumba, Kidigo, and Kisegeju entries ingested into swahili.json and mijikenda.json.",
        },
        {
            "id": "fsi-swahili-basic-1963",
            "title": "Swahili Basic Course (Foreign Service Institute, U.S. Department of State, 1963)",
            "fileName": "https://archive.org/details/Fsi-SwahiliBasicCourse-StudentText",
            "canonicalUrl": "https://archive.org/details/Fsi-SwahiliBasicCourse-StudentText",
            "languages": ["swahili"],
            "published": "1963 (Foreign Service Institute — US Federal Gov Public Domain)",
            "license": "Public Domain (US Federal Government Work)",
            "category": "modern-monograph",
            "contribution": "32 verified Standard Swahili conversational dialogues, greeting sequences, and grammar drill phrases.",
            "appUses": ["dictionary", "course"],
            "contentTypes": ["vocabulary", "dialogue", "grammar"],
            "ingestionStatus": "integrated",
            "coverageNote": "32 verified FSI Swahili dialogue and phrase entries ingested into swahili.json.",
        },
        {
            "id": "peace-corps-kenya-kiswahili-1995",
            "title": "Kiswahili Competency Based Manual (Revised, Peace Corps Kenya, 1995)",
            "fileName": "https://files.eric.ed.gov/fulltext/ED401760.pdf",
            "canonicalUrl": "https://files.eric.ed.gov/fulltext/ED401760.pdf",
            "languages": ["swahili"],
            "published": "1995 (Peace Corps Kenya — US Federal Gov Public Domain)",
            "license": "Public Domain (US Federal Government Work)",
            "category": "modern-monograph",
            "contribution": "26 verified Kenyan Swahili everyday dialogues, social titles, and practical cultural usage notes.",
            "appUses": ["dictionary", "course", "cultural reference"],
            "contentTypes": ["vocabulary", "dialogue", "cultural-reference"],
            "ingestionStatus": "integrated",
            "coverageNote": "26 verified Peace Corps Kenya Kiswahili entries ingested into swahili.json.",
        },
        {
            "id": "hobley-yaaku-mogogodo-1910",
            "title": "Ethnology of A-Kamba and Other East African Tribes — Yaaku (Mogogodo) Vocabulary & Mweru/Samburu/Laikipiak/Elgeyo/Uasingishu Appendices (pp. 146–164)",
            "fileName": "https://archive.org/details/ethnologyofakamb00hobluoft/page/147/mode/1up",
            "canonicalUrl": "https://archive.org/details/ethnologyofakamb00hobluoft/page/147/mode/1up",
            "languages": ["yaaku", "meru", "samburu", "maasai", "kalenjin"],
            "published": "1910 (Cambridge University Press)",
            "license": "Public Domain (Pre-1931 US)",
            "category": "historical-pd",
            "contribution": "300 scan-verified Yaaku (Mogogodo, ISO muu) vocabulary/grammar entries plus 164 Mweru (Meru), Samburu, Laikipiak, Elgeyo, and Uasingishu ethnographic entries.",
            "appUses": ["Yaaku staging dictionary", "dictionary", "cultural reference"],
            "contentTypes": ["vocabulary", "grammar", "cultural-reference"],
            "ingestionStatus": "integrated",
            "coverageNote": "300 Yaaku/Mogogodo entries staged in dictionaries/staging/yaaku.json and 164 ethnographic entries integrated across meru, samburu, maasai, and kalenjin.",
        },
    ]

    to_add = [s for s in new_sources if f'"{s["id"]}"' not in text and f"'{s['id']}'" not in text]
    if not to_add:
        return 0

    anchor = "\nfor (const _src of _commercialTextDatasetSources) {"
    idx = text.find(anchor)
    assert idx != -1, "Could not find _commercialTextDatasetSources loop in language-sources/index.ts"
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
    parser = argparse.ArgumentParser(description="Ingest verified book extractions (Pass 1 + Pass 2 + Pass 3) into KenyaHub dictionaries, staging, proverbs, and sources.")
    parser.add_argument(
        "--input",
        default="/working_dir/c_1e65ded72617308c/user_uploaded_files/ttl=63d/user_uploaded/kenya-hub-verified-book-extractions (1).json",
        help="Path to kenya-hub-verified-book-extractions (1).json",
    )
    args = parser.parse_args()
    counts = ingest_books(Path(args.input))
    print("=== VERIFIED BOOK EXTRACTIONS INGESTION SUMMARY (PASS 1 + 2 + 3) ===")
    for k, v in sorted(counts.items()):
        print(f"  {k}: +{v}")
    print(f"  TOTAL NEW DICT/STAGING/PROVERB/SOURCE ITEMS: {sum(counts.values())}")


if __name__ == "__main__":
    main()
