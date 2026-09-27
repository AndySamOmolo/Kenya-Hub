import gc
import io
import os
import sys
import re
import csv
import json
import glob
import time
import math
import types
import random
import hashlib
import difflib
import logging
import argparse
import datetime
import traceback
import unicodedata
from pathlib import Path

import numpy as np

try:
    import cv2
except Exception as e:
    raise SystemExit(f"OpenCV is required: {e}")

from PIL import Image
Image.MAX_IMAGE_PIXELS = None  # big scans are fine

try:
    import fitz  # PyMuPDF
except Exception as e:
    raise SystemExit(f"PyMuPDF (fitz) is required: {e}")

import torch
from transformers import AutoProcessor, BitsAndBytesConfig

# Qwen2.5-VL class name differs across transformers versions -> tolerate both.
_QwenClass = None
try:
    from transformers import Qwen2_5_VLForConditionalGeneration as _QwenClass
except Exception:
    try:
        from transformers import AutoModelForImageTextToText as _QwenClass
    except Exception:
        from transformers import AutoModelForVision2Seq as _QwenClass

try:
    from qwen_vl_utils import process_vision_info  # optional but nice
except Exception:
    process_vision_info = None

try:
    import pandas as pd
except Exception:
    pd = None

class CFG:
    # --- I/O -------------------------------------------------------------------
    INPUT_DIRS       = [p for p in ["/kaggle/input", "./pdfs"] if os.path.isdir(p)]
    OUTPUT_DIR       = "/kaggle/working" if os.path.isdir("/kaggle/working") else "./out"
    JSONL_PATH       = None   # filled in below
    CSV_PATH         = None
    ENTRIES_PATH     = None
    MARKDOWN_DIR     = None   # one .md per source PDF: the page-by-page transcription
    LOG_PATH         = None
    STATE_PATH       = None

    # --- model -----------------------------------------------------------------
    MODEL_7B         = "Qwen/Qwen2.5-VL-7B-Instruct"
    MODEL_3B         = "Qwen/Qwen2.5-VL-3B-Instruct"
    MODEL_PREFERENCE = os.environ.get("MODEL_PREFERENCE", "auto")  # "7b" | "3b" | "auto"
    # "auto": 7B if total pages <= AUTO_3B_PAGE_LIMIT * num_workers, else 3B.
    # num_workers = number of GPU processes running in parallel (see
    # choose_model_id / plan_shards) -- with two GPUs going at once the same
    # page count effectively takes half the wall-clock time, so the corpus size
    # at which 3B becomes the better trade-off scales up too.
    AUTO_3B_PAGE_LIMIT = 250
    LOAD_IN_4BIT     = True          # required for 7B on a single T4
    MAX_NEW_TOKENS   = 2048          # a dense book page ~ 700-1600 tokens

    # --- rendering / preprocessing ---------------------------------------------
    RENDER_DPI       = 300
    FALLBACK_DPI     = 200           # used for the independent self-check re-render
    MAX_RENDER_MP    = 40            # re-render smaller if a page explodes past this
    PIXEL_BUDGET     = 1_000_000     # pixels fed to the ViT (~1280*28*28 tokens)
    PIXEL_BUDGET_MIN = 380_000       # OOM fallback floor
    BLANK_INK_RATIO  = 0.0025        # < 0.25% dark pixels => treat as blank
    DUP_HAMMING      = 3             # dHash distance for duplicate pages
    HEADER_FRAC      = 0.10          # top strip searched for running heads
    FOOTER_FRAC      = 0.10          # bottom strip searched for folios/footnotes

    # --- self-check / QA ---------------------------------------------------------
    SELF_CHECK_MODE  = os.environ.get("SELF_CHECK_MODE", "auto")  # "always"|"auto"|"off"
    SELF_CHECK_RATE  = 0.12          # in "auto" mode, random audit fraction
    SELF_CHECK_MIN_SIM = 0.92        # below this -> needs_review

    # --- runtime ------------------------------------------------------------------
    MAX_RUNTIME_SEC  = float(os.environ.get("MAX_RUNTIME_SEC", 8.2 * 3600))  # < 9h
    CHECKPOINT_EVERY = 20            # pages between state dumps / loud progress
    MAX_PAGES        = int(os.environ.get("MAX_PAGES", "0"))  # 0 = no cap (debug aid); applied PER WORKER
    SEED             = 1234

    # --- multi-GPU sharding ------------------------------------------------------
    # Set by the launcher, one distinct value per subprocess, so every GPU
    # worker writes to its own files -- no two processes ever append to the
    # same JSONL/log/state file. Left empty (e.g. a manual, un-launched run)
    # this reduces to exactly the original single-process file layout.
    SHARD_TAG        = os.environ.get("OCR_SHARD_TAG", "").strip()


os.makedirs(CFG.OUTPUT_DIR, exist_ok=True)
_sfx = f".{CFG.SHARD_TAG}" if CFG.SHARD_TAG else ""
CFG.JSONL_PATH   = os.path.join(CFG.OUTPUT_DIR, f"extracted_data{_sfx}.jsonl")
CFG.CSV_PATH     = os.path.join(CFG.OUTPUT_DIR, "extracted_data.csv")             # unsuffixed: only the launcher writes this, once, after merging every shard
CFG.ENTRIES_PATH = os.path.join(CFG.OUTPUT_DIR, f"dictionary_entries{_sfx}.jsonl")
CFG.MARKDOWN_DIR = os.path.join(CFG.OUTPUT_DIR, "markdown")                      # unsuffixed: only the launcher writes this, once, after merging every shard
CFG.LOG_PATH     = os.path.join(CFG.OUTPUT_DIR, f"ocr_run{_sfx}.log")
CFG.STATE_PATH   = os.path.join(CFG.OUTPUT_DIR, f"run_state{_sfx}.json")
os.makedirs(CFG.MARKDOWN_DIR, exist_ok=True)

random.seed(CFG.SEED)
np.random.seed(CFG.SEED)
torch.manual_seed(CFG.SEED)

# UTF-8 everywhere, explicitly.
try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(message)s",
    handlers=[logging.FileHandler(CFG.LOG_PATH, encoding="utf-8"),
              logging.StreamHandler(sys.stdout)],
)
LOG = logging.getLogger("ocr." + CFG.SHARD_TAG if CFG.SHARD_TAG else "ocr")

# NOTE for notebook users: CFG reads a few settings from environment variables at
# class-definition time (MODEL_PREFERENCE, SELF_CHECK_MODE, MAX_RUNTIME_SEC,
# MAX_PAGES, OCR_SHARD_TAG). Because the actual OCR work now happens in
# subprocesses (one per GPU -- see "Launch" below), setting `CFG.MAX_PAGES = 5`
# in a later notebook cell no longer reaches those subprocesses. To smoke-test
# on a handful of pages, set the environment variable *before* running the
# Launch cell instead, e.g. `os.environ["MAX_PAGES"] = "5"` -- every worker
# inherits it and caps at 5 pages each, so a 2-GPU smoke test processes up to
# 10 pages total.

SYSTEM_PROMPT = (
    "You are a meticulous OCR transcription engine for photographed and scanned "
    "book pages in English and Kenyan languages (Kiswahili, Gikuyu, Dholuo, "
    "Kalenjin, Kikamba, Ekegusii, Luhya, Maa and others). You transcribe exactly "
    "what is printed, character for character. You never translate, never correct "
    "spelling, never summarise, and never invent text that is not visible."
)

STRUCTURE_SYSTEM_PROMPT = (
    "You are a precise information-extraction engine. You convert already-"
    "transcribed dictionary text into structured JSON, using only the exact words "
    "given to you. You never translate, invent, guess, or complete entries."
)

_COMMON_RULES = """
TRANSCRIPTION RULES (follow exactly):
1. Copy every character EXACTLY as printed. Preserve all diacritics and special
   characters, e.g. ĩ ũ ĩ̀ ũ̃ ŋ ẽ õ ā ọ ẹ ṣ é è ê á à â í ì ó ò ú ù ç ñ, the
   apostrophe in ng' / ny', curly quotes ' ' " ", and hyphens.
2. Do NOT translate. Do NOT modernise or "fix" spelling. Do NOT add commentary,
   notes, or explanations of any kind. Output only the requested sections.
3. Preserve the printed LINE STRUCTURE: one printed line = one output line.
4. If a word is broken across a line with a hyphen, keep the hyphen exactly where
   it is printed. Do not join the parts yourself.
5. Preserve italics/bold as plain text (no markdown), but keep any printed
   punctuation that marks them.
6. If a character or short run is genuinely illegible, write [?] in its place.
   If a whole line is illegible, write [illegible line]. Never guess wildly.
7. Running heads, page headers, footers, folio/page numbers, signature marks and
   catchwords must NOT be placed in the BODY section; report them separately.
8. Transcribe footnotes at the end of the BODY, in printed order.
"""

PROMPT_FULL_PAGE = """Transcribe this single scanned book page.
""" + _COMMON_RULES + """
COLUMN ORDER: if the page has more than one column, transcribe the complete left
column first, then the next column to its right. Never read straight across
columns.

Reply using EXACTLY this template and nothing else:

<<<PAGE_TYPE>>> one of: prose | dictionary | mixed | front_matter | index | table | blank | other
<<<LANGUAGES>>> comma-separated ISO-639-3 codes of languages actually visible, most frequent first (eng, swa, kik, luo, kln, kam, guz, luy, mas, und)
<<<HEADER>>> the running head / header text, or NONE
<<<FOOTER>>> the footer text (excluding a bare page number), or NONE
<<<PAGE_NUMBER>>> the printed page number, or NONE
<<<COLUMNS>>> the number of text columns you see (1, 2 or 3)
<<<BODY>>>
(the verbatim body text, line by line)
<<<END>>>"""

PROMPT_COLUMN = """This image is ONE column cropped from a scanned book page
(headers and footers have already been removed). Transcribe this column only.
""" + _COMMON_RULES + """
Reply using EXACTLY this template and nothing else:

<<<PAGE_TYPE>>> one of: prose | dictionary | mixed | front_matter | index | table | blank | other
<<<LANGUAGES>>> comma-separated ISO-639-3 codes, most frequent first
<<<BODY>>>
(the verbatim column text, line by line)
<<<END>>>"""

PROMPT_HEADER_FOOTER = """You are given two narrow strips cut from a scanned book
page. Image 1 is the strip from the TOP of the page. Image 2 is the strip from the
BOTTOM of the page. Transcribe only what is printed in them, exactly, preserving
diacritics. Ignore any partial body text lines that are cut off.

Reply using EXACTLY this template and nothing else:

<<<HEADER>>> text of the running head/header in image 1, or NONE
<<<FOOTER>>> text of the footer in image 2 (excluding a bare page number), or NONE
<<<PAGE_NUMBER>>> the printed page number seen in either strip, or NONE
<<<END>>>"""

PROMPT_STRUCTURE = """Below is the verbatim OCR transcription of one page of a
printed DICTIONARY (Kenyan languages / English). Convert it into structured data.

STRICT RULES:
- Use ONLY text that appears in the transcription. Never invent, translate or
  complete anything. Copy spelling and diacritics exactly.
- One JSON object per dictionary entry (per headword).
- If an entry is cut off at the top or bottom of the page, still emit it and set
  "truncated": true.
- If the page is not really a dictionary page, return [].
- Output ONLY a JSON array. No markdown fences, no prose before or after.

Each object must use exactly these keys:
{
  "headword": "string",
  "variants": ["alternative spellings printed with the headword"],
  "pronunciation": "IPA or respelling in [] or // if shown, else null",
  "part_of_speech": "as printed (n., v.t., adj., ...) or null",
  "language": "ISO-639-3 code of the headword language, or und",
  "senses": [
    {"sense_number": "1 or a or null",
     "definition": "definition text exactly as printed",
     "examples": [{"text": "example sentence as printed",
                   "translation": "its printed translation or null"}]}
  ],
  "cross_references": ["see/cf./compare targets as printed"],
  "notes": "etymology, usage or dialect notes as printed, or null",
  "truncated": false
}

TRANSCRIPTION:
<<<TEXT>>>
"""

def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def free_cuda():
    """Aggressively release VRAM between pages (failure-mode #5)."""
    gc.collect()
    if torch.cuda.is_available():
        torch.cuda.empty_cache()
        torch.cuda.ipc_collect()


def gpu_free_gb(idx=0):
    if not torch.cuda.is_available():
        return 0.0
    free, _total = torch.cuda.mem_get_info(idx)
    return free / (1024 ** 3)


def fit_pixels(pil_img, budget):
    """Downscale (never upscale past 1.0) so w*h <= budget -> bounds ViT tokens."""
    w, h = pil_img.size
    if w * h <= budget:
        return pil_img
    scale = math.sqrt(budget / float(w * h))
    nw, nh = max(28, int(w * scale)), max(28, int(h * scale))
    return pil_img.resize((nw, nh), Image.LANCZOS)


def sha1_of_file(path, chunk=1 << 20):
    h = hashlib.sha1()
    with open(path, "rb") as f:
        while True:
            b = f.read(chunk)
            if not b:
                break
            h.update(b)
    return h.hexdigest()[:16]


def dhash(gray, size=8):
    """64-bit difference hash for blank/duplicate detection (failure-mode #8)."""
    small = cv2.resize(gray, (size + 1, size), interpolation=cv2.INTER_AREA)
    diff = small[:, 1:] > small[:, :-1]
    bits = 0
    for b in diff.flatten():
        bits = (bits << 1) | int(b)
    return f"{bits:016x}"


def hamming_hex(a, b):
    try:
        return bin(int(a, 16) ^ int(b, 16)).count("1")
    except Exception:
        return 64


def norm_for_compare(t):
    t = unicodedata.normalize("NFKC", t or "").lower()
    t = re.sub(r"[^\w\s'’ʼ-]", " ", t, flags=re.UNICODE)
    t = re.sub(r"\s+", " ", t).strip()
    return t[:8000]


def similarity(a, b):
    a, b = norm_for_compare(a), norm_for_compare(b)
    if not a and not b:
        return 1.0
    if not a or not b:
        return 0.0
    return difflib.SequenceMatcher(None, a, b).ratio()


# --- Unicode / encoding validation (failure-mode #10) -------------------------
_CTRL_RE = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]")


def validate_text(text):
    """Return list of encoding/corruption problems found in a transcription."""
    problems = []
    if text is None:
        return ["empty_transcription"]
    if "\ufffd" in text:
        problems.append("replacement_character_U+FFFD")
    if _CTRL_RE.search(text):
        problems.append("control_characters")
    # Mojibake signature: latin-1 misread of UTF-8 (e.g. "Ã­", "Å©", "â€™")
    if re.search(r"(Ã.|Å.|â€.|Ä.){2,}", text):
        problems.append("possible_mojibake")
    try:
        text.encode("utf-8")
    except Exception:
        problems.append("not_utf8_encodable")
    return problems


def detect_repetition_loop(text, min_len=40, repeats=4):
    """Catch degenerate VLM loops (failure-mode #9)."""
    if not text or len(text) < min_len * repeats:
        return False
    lines = [l.strip() for l in text.split("\n") if l.strip()]
    if len(lines) >= 8:
        run, prev = 1, None
        for l in lines:
            if l == prev:
                run += 1
                if run >= 6:
                    return True
            else:
                run, prev = 1, l
    tail = text[-2000:]
    for L in (60, 120, 240):
        if len(tail) >= L * 3:
            chunk = tail[-L:]
            if tail.count(chunk) >= 3:
                return True
    return False


# --- Hyphenation rejoining (accuracy requirement) -----------------------------
_HYPHENS = ("-", "\u2010", "\u2011", "\u00ad", "\u00ac")
_WORDCHAR = r"[^\W\d_]"


def dehyphenate(text):
    """Rejoin words split by an end-of-line hyphen, keeping real compounds."""
    if not text:
        return text
    lines = text.split("\n")
    out = []
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        joined = False
        if i + 1 < len(lines) and line.endswith(_HYPHENS):
            stem = line[:-1]
            nxt = lines[i + 1].lstrip()
            m = re.match(r"^([^\W\d_][\w'’ʼĩũŋ\-]*)(.*)$", nxt, flags=re.UNICODE)
            if stem and re.search(_WORDCHAR + r"$", stem, flags=re.UNICODE) and m:
                first, rest = m.group(1), m.group(2)
                # don't merge into a proper noun / new sentence start
                if not (first[:1].isupper() and stem[-1:].islower() is False):
                    out.append(stem + first)
                    rest = rest.lstrip()
                    if rest:
                        lines[i + 1] = rest
                    else:
                        del lines[i + 1]
                    joined = True
        if not joined:
            out.append(line)
        i += 1
    return "\n".join(out)


# --- Lightweight language ID for Kenyan languages (failure-mode #4) -----------
LANG_NAMES = {
    "eng": "English", "swa": "Kiswahili", "kik": "Gikuyu", "luo": "Dholuo",
    "kln": "Kalenjin", "kam": "Kikamba", "guz": "Ekegusii", "luy": "Luhya",
    "mas": "Maa (Maasai)", "und": "undetermined",
}

_LANG_MARKERS = {
    "eng": {"the", "and", "of", "to", "in", "is", "that", "for", "with", "was",
            "his", "her", "not", "are", "this", "from", "which", "have", "been"},
    "swa": {"na", "ya", "wa", "kwa", "katika", "ni", "kwenye", "hii", "yake",
            "kuwa", "sana", "watu", "mtu", "hao", "kama", "lakini", "wake",
            "mwenye", "kila", "hivyo", "yangu", "nini", "ambao", "zaidi"},
    "kik": {"nĩ", "na", "wa", "ũrĩa", "mũndũ", "thĩinĩ", "rĩrĩa", "gũkũ", "aria",
            "mũno", "njĩra", "ũhoro", "mwana", "ciana", "kũrĩ", "nĩguo", "ithuĩ"},
    "luo": {"gi", "kod", "mondo", "ni", "en", "joma", "wach", "dhano", "nyathi",
            "ka", "gima", "tim", "kaka", "duto", "koth", "ler", "piny", "ng'ato"},
    "kln": {"ak", "ne", "ko", "che", "kobo", "chito", "ng'alek", "kot", "en",
            "tugul", "eng'", "kole", "kipsigis", "asi", "mising"},
    "kam": {"na", "wa", "ũla", "nĩ", "mũndũ", "syana", "nesa", "kĩla", "ũu",
            "mbee", "kwĩ", "ũsu", "ithe", "mũnyanya"},
    "guz": {"ase", "na", "omonto", "ng'a", "ekeng'usii", "abanto", "buna",
            "gose", "ime", "korende", "rituko"},
    "luy": {"nende", "omundu", "khu", "buli", "obulala", "ne", "shichero",
            "abandu", "mulala", "khuba", "nio"},
    "mas": {"ne", "ai", "enkai", "olng'atuny", "enkerai", "sidai", "papa",
            "ilo", "oreteti", "ake", "meeta", "inkera"},
}

_LANG_CHAR_HINTS = {
    "kik": ("ĩ", "ũ"), "kam": ("ĩ", "ũ"), "guz": ("ng'", "'"),
    "luo": ("ng'",), "kln": ("ng'",), "luy": ("kh",), "mas": ("ŋ", "ɔ", "ɛ"),
}


def detect_language_heuristic(text, topn=3):
    """Cheap token-overlap LID used to cross-check the model's own language tag."""
    if not text or len(text.strip()) < 20:
        return [("und", 1.0)]
    low = unicodedata.normalize("NFC", text.lower())
    toks = re.findall(r"[^\W\d_][\w'’ʼ]*", low, flags=re.UNICODE)
    if not toks:
        return [("und", 1.0)]
    tokset_counts = {}
    for t in toks:
        tokset_counts[t] = tokset_counts.get(t, 0) + 1
    total = float(len(toks))
    scores = {}
    for lang, markers in _LANG_MARKERS.items():
        hit = sum(tokset_counts.get(m, 0) for m in markers)
        scores[lang] = hit / total
    for lang, hints in _LANG_CHAR_HINTS.items():
        bonus = sum(low.count(h) for h in hints) / total
        scores[lang] = scores.get(lang, 0.0) + min(0.05, bonus * 0.5)
    ranked = sorted(scores.items(), key=lambda kv: kv[1], reverse=True)
    if ranked[0][1] < 0.012:
        return [("und", 0.0)]
    s = sum(max(0.0, v) for _, v in ranked[:topn]) or 1.0
    return [(k, round(v / s, 3)) for k, v in ranked[:topn] if v > 0]


def merge_languages(model_langs, text):
    """Combine the VLM's declared languages with the heuristic detector."""
    heur = [l for l, _ in detect_language_heuristic(text)]
    model_langs = [l for l in (model_langs or []) if l in LANG_NAMES]
    merged = []
    for l in model_langs + heur:
        if l != "und" and l not in merged:
            merged.append(l)
    if not merged:
        merged = ["und"]
    return merged

def render_page_image(page, dpi):
    """Render one PDF page to an RGB numpy array, streaming (never whole doc)."""
    rect = page.rect
    est_mp = (rect.width * dpi / 72.0) * (rect.height * dpi / 72.0) / 1e6
    if est_mp > CFG.MAX_RENDER_MP:  # gigantic page -> back off DPI
        dpi = max(120, int(dpi * math.sqrt(CFG.MAX_RENDER_MP / est_mp)))
    mat = fitz.Matrix(dpi / 72.0, dpi / 72.0)
    pix = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB, alpha=False)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, 3)
    return np.ascontiguousarray(img), dpi


def to_gray(rgb):
    return cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)


def binarize(gray, invert=True):
    """Adaptive-ish binarisation tolerant of uneven lighting."""
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    flag = cv2.THRESH_BINARY_INV if invert else cv2.THRESH_BINARY
    _, th = cv2.threshold(blur, 0, 255, flag + cv2.THRESH_OTSU)
    return th


def ink_ratio(gray):
    th = binarize(gray)
    return float((th > 0).mean())


def _row_profile_score(bin_img):
    """Variance of the horizontal projection: peaks when text lines are level."""
    prof = bin_img.sum(axis=1).astype(np.float64)
    if prof.size < 8:
        return 0.0
    prof = prof / (prof.max() + 1e-6)
    return float(np.var(np.diff(prof)) + np.var(prof))


def detect_orientation(gray):
    """Coarse 0/90/270 orientation guess by comparing projection sharpness."""
    small = cv2.resize(gray, (0, 0), fx=0.25, fy=0.25, interpolation=cv2.INTER_AREA)
    b = binarize(small)
    s0 = _row_profile_score(b)
    s90 = _row_profile_score(cv2.rotate(b, cv2.ROTATE_90_CLOCKWISE))
    if s90 > s0 * 1.35:
        # portrait text rotated sideways; pick the 90 direction with more
        # ascender mass in the upper half of each line band (Latin heuristic)
        cand = {}
        for name, rot in (("90cw", cv2.ROTATE_90_CLOCKWISE),
                          ("90ccw", cv2.ROTATE_90_COUNTERCLOCKWISE)):
            r = cv2.rotate(b, rot)
            h = r.shape[0]
            top = int(r[: h // 2].sum())
            bot = int(r[h // 2:].sum())
            cand[name] = top - bot
        return ("90cw" if cand["90cw"] >= cand["90ccw"] else "90ccw"), True
    return "0", False


def apply_orientation(rgb, orient):
    if orient == "90cw":
        return cv2.rotate(rgb, cv2.ROTATE_90_CLOCKWISE)
    if orient == "90ccw":
        return cv2.rotate(rgb, cv2.ROTATE_90_COUNTERCLOCKWISE)
    if orient == "180":
        return cv2.rotate(rgb, cv2.ROTATE_180)
    return rgb


def estimate_skew_angle(gray, coarse=6.0, coarse_step=0.5, fine_step=0.1):
    """Projection-profile skew search (robust for text pages), returns degrees."""
    h, w = gray.shape
    scale = 800.0 / max(w, 1)
    if scale < 1.0:
        small = cv2.resize(gray, (int(w * scale), int(h * scale)),
                           interpolation=cv2.INTER_AREA)
    else:
        small = gray
    b = binarize(small)
    if b.mean() < 1:  # basically empty
        return 0.0

    def score_at(angle):
        M = cv2.getRotationMatrix2D((b.shape[1] / 2, b.shape[0] / 2), angle, 1.0)
        rot = cv2.warpAffine(b, M, (b.shape[1], b.shape[0]),
                             flags=cv2.INTER_NEAREST, borderValue=0)
        return _row_profile_score(rot)

    angles = np.arange(-coarse, coarse + 1e-9, coarse_step)
    scores = [score_at(a) for a in angles]
    best = float(angles[int(np.argmax(scores))])
    fine = np.arange(best - coarse_step, best + coarse_step + 1e-9, fine_step)
    fscores = [score_at(a) for a in fine]
    best = float(fine[int(np.argmax(fscores))])
    return 0.0 if abs(best) < 0.15 else round(best, 2)


def deskew(rgb, angle):
    if abs(angle) < 0.15:
        return rgb
    h, w = rgb.shape[:2]
    M = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
    cos, sin = abs(M[0, 0]), abs(M[0, 1])
    nw, nh = int(h * sin + w * cos), int(h * cos + w * sin)
    M[0, 2] += (nw / 2) - w / 2
    M[1, 2] += (nh / 2) - h / 2
    return cv2.warpAffine(rgb, M, (nw, nh), flags=cv2.INTER_CUBIC,
                          borderMode=cv2.BORDER_REPLICATE)


def normalize_illumination(rgb):
    """Flatten uneven lighting + gentle CLAHE. Keeps grey levels (not binarised)
    so thin diacritics and tone marks survive."""
    gray = to_gray(rgb)
    # background estimate via large median blur -> divide out shadows/vignetting
    k = max(31, (min(gray.shape) // 20) | 1)
    bg = cv2.medianBlur(gray, k if k % 2 == 1 else k + 1)
    flat = cv2.divide(gray, bg, scale=255)
    contrast = float(flat.std())
    if contrast < 55:  # faded ink / low contrast scan
        flat = cv2.createCLAHE(clipLimit=2.5, tileGridSize=(8, 8)).apply(flat)
    # mild unsharp mask to firm up small marks
    blur = cv2.GaussianBlur(flat, (0, 0), 1.2)
    sharp = cv2.addWeighted(flat, 1.35, blur, -0.35, 0)
    out = cv2.cvtColor(sharp, cv2.COLOR_GRAY2RGB)
    return out, contrast


def detect_columns(gray):
    """Vertical-gutter detection so multi-column dictionary pages are read in
    the correct order (failure-mode #3). Returns list of (x0, x1)."""
    h, w = gray.shape
    core = gray[int(h * CFG.HEADER_FRAC): int(h * (1 - CFG.FOOTER_FRAC)), :]
    if core.size == 0:
        return [(0, w)]
    b = binarize(core)
    colsum = b.sum(axis=0).astype(np.float64) / 255.0
    if colsum.max() <= 0:
        return [(0, w)]
    kern = max(9, int(w * 0.012)) | 1
    smooth = np.convolve(colsum, np.ones(kern) / kern, mode="same")
    thr = 0.035 * smooth.max()
    low = smooth < thr

    # find low-ink runs that look like gutters (wide, not at the margins)
    runs, start = [], None
    for x in range(w):
        if low[x] and start is None:
            start = x
        elif not low[x] and start is not None:
            runs.append((start, x))
            start = None
    if start is not None:
        runs.append((start, w))

    min_gut = max(8, int(w * 0.018))
    splits = []
    for a, bb in runs:
        if (bb - a) >= min_gut and 0.18 * w < (a + bb) / 2 < 0.82 * w:
            splits.append(int((a + bb) / 2))
    # merge near-identical splits
    merged = []
    for s in sorted(splits):
        if not merged or s - merged[-1] > 0.08 * w:
            merged.append(s)
    if not merged or len(merged) > 2:
        return [(0, w)]

    bounds = [0] + merged + [w]
    cols = []
    total_ink = b.sum() + 1e-6
    for i in range(len(bounds) - 1):
        x0, x1 = bounds[i], bounds[i + 1]
        if (x1 - x0) < 0.12 * w:
            return [(0, w)]
        if b[:, x0:x1].sum() / total_ink < 0.12:  # near-empty "column" -> bail
            return [(0, w)]
        cols.append((x0, x1))
    return cols


def crop(rgb, x0, x1, y0=None, y1=None, pad=8):
    h, w = rgb.shape[:2]
    y0 = 0 if y0 is None else max(0, y0)
    y1 = h if y1 is None else min(h, y1)
    x0 = max(0, x0 - pad)
    x1 = min(w, x1 + pad)
    return rgb[y0:y1, x0:x1]


def to_pil(rgb):
    return Image.fromarray(rgb).convert("RGB")

class QwenVLOCR:
    def __init__(self, model_id, load_in_4bit=True):
        self.model_id = model_id
        LOG.info(f"[model] loading {model_id} (4bit={load_in_4bit}) ...")
        quant = None
        dtype = torch.float16  # T4 has no bf16; fp16 everywhere for safety
        if load_in_4bit:
            quant = BitsAndBytesConfig(
                load_in_4bit=True,
                bnb_4bit_quant_type="nf4",
                bnb_4bit_use_double_quant=True,
                bnb_4bit_compute_dtype=torch.float16,
            )
        kwargs = dict(torch_dtype=dtype, low_cpu_mem_usage=True,
                      attn_implementation="sdpa",
                      device_map={"": 0} if torch.cuda.is_available() else "cpu")
        if quant is not None:
            kwargs["quantization_config"] = quant
        try:
            self.model = _QwenClass.from_pretrained(model_id, **kwargs)
        except TypeError as e:
            # newer/older transformers renamed torch_dtype -> dtype; tolerate both.
            if "torch_dtype" in str(e) and "torch_dtype" in kwargs:
                kwargs["dtype"] = kwargs.pop("torch_dtype")
                self.model = _QwenClass.from_pretrained(model_id, **kwargs)
            else:
                raise
        self.model.eval()
        self.processor = AutoProcessor.from_pretrained(
            model_id,
            min_pixels=256 * 28 * 28,
            max_pixels=1280 * 28 * 28,
        )
        try:
            self.processor.tokenizer.padding_side = "left"
        except Exception:
            pass
        LOG.info(f"[model] ready. free VRAM: {gpu_free_gb():.1f} GB")

    # -- one generation call, with OOM back-off (failure-mode #5) --------------
    def generate(self, prompt, images=None, max_new_tokens=None,
                 pixel_budget=None, repetition_penalty=1.0, system_prompt=None):
        max_new_tokens = max_new_tokens or CFG.MAX_NEW_TOKENS
        budget = pixel_budget or CFG.PIXEL_BUDGET
        sys_prompt = system_prompt or SYSTEM_PROMPT
        attempts = [(budget, max_new_tokens),
                    (max(CFG.PIXEL_BUDGET_MIN, int(budget * 0.65)), max_new_tokens),
                    (CFG.PIXEL_BUDGET_MIN, int(max_new_tokens * 0.8))]
        last_exc = None
        for i, (bud, mnt) in enumerate(attempts):
            try:
                imgs = [fit_pixels(im, bud) for im in images] if images else None
                content = []
                if imgs:
                    for im in imgs:
                        content.append({"type": "image", "image": im})
                content.append({"type": "text", "text": prompt})
                messages = [{"role": "system", "content": sys_prompt},
                            {"role": "user", "content": content}]
                text = self.processor.apply_chat_template(
                    messages, tokenize=False, add_generation_prompt=True)
                if imgs and process_vision_info is not None:
                    vis_imgs, vis_vids = process_vision_info(messages)
                else:
                    vis_imgs, vis_vids = imgs, None
                inputs = self.processor(text=[text], images=vis_imgs,
                                        videos=vis_vids, padding=True,
                                        return_tensors="pt")
                inputs = {k: (v.to(self.model.device) if hasattr(v, "to") else v)
                          for k, v in inputs.items()}
                in_len = inputs["input_ids"].shape[1]
                with torch.inference_mode():
                    out = self.model.generate(
                        **inputs,
                        max_new_tokens=mnt,
                        do_sample=False,
                        num_beams=1,
                        repetition_penalty=repetition_penalty,
                        pad_token_id=self.processor.tokenizer.pad_token_id
                        or self.processor.tokenizer.eos_token_id,
                    )
                gen = out[0][in_len:]
                txt = self.processor.tokenizer.decode(gen, skip_special_tokens=True)
                meta = {"gen_tokens": int(gen.shape[0]),
                        "truncated": bool(gen.shape[0] >= mnt - 1),
                        "pixel_budget": bud, "oom_retries": i}
                del inputs, out, gen
                free_cuda()
                return txt.strip(), meta
            except Exception as e:  # noqa: BLE001
                is_oom = isinstance(e, torch.cuda.OutOfMemoryError) or \
                         ("out of memory" in str(e).lower())
                last_exc = e
                free_cuda()
                if not is_oom:
                    raise
                LOG.warning(f"[oom] retrying at lower resolution "
                            f"(attempt {i+1}/{len(attempts)})")
        raise last_exc

_SECTION_RE = re.compile(r"<<<([A-Z_]+)>>>")


def parse_sections(raw):
    """Parse the <<<SECTION>>> template; tolerant of small model deviations."""
    out = {}
    if not raw:
        return out
    raw = raw.replace("\r\n", "\n").strip()
    # strip accidental markdown code fences some VLMs wrap replies in
    raw = re.sub(r"^```[a-zA-Z]*\n?", "", raw)
    raw = re.sub(r"```$", "", raw).strip()
    matches = list(_SECTION_RE.finditer(raw))
    if not matches:
        # Model ignored the template entirely; treat everything as BODY so we
        # don't silently lose a whole page of transcription.
        out["BODY"] = raw.strip()
        return out
    for i, m in enumerate(matches):
        name = m.group(1)
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(raw)
        val = raw[start:end].strip("\n")
        if val.startswith(" "):
            val = val[1:] if "\n" not in val.split(" ", 1)[0] else val
        out[name] = val.strip()
    out.pop("END", None)
    return out


def _none_if_blank(v):
    """Normalise the model's textual NONE / N/A / '-' markers to Python None."""
    if v is None:
        return None
    vv = v.strip()
    if not vv or vv.upper() in ("NONE", "N/A", "NA", "NIL", "-"):
        return None
    return vv


def parse_structure_json(raw):
    """Best-effort parse of the PROMPT_STRUCTURE JSON-array reply. Tolerant of
    markdown fences and a trailing comma, the two most common small-model slips."""
    if not raw:
        return []
    s = raw.strip()
    s = re.sub(r"^```[a-zA-Z]*\n?", "", s)
    s = re.sub(r"```$", "", s).strip()
    start, end = s.find("["), s.rfind("]")
    if start == -1 or end == -1 or end < start:
        return []
    chunk = s[start:end + 1]
    try:
        data = json.loads(chunk)
    except Exception:
        try:
            data = json.loads(re.sub(r",\s*([\]}])", r"\1", chunk))
        except Exception:
            return []
    if not isinstance(data, list):
        return []
    return [item for item in data if isinstance(item, dict) and "headword" in item]

_PAGE_TYPE_PRIORITY = ["dictionary", "table", "index", "mixed", "front_matter",
                       "prose", "other", "blank"]


def _merge_page_type(types_seen):
    if not types_seen:
        return "other"
    return min(types_seen,
               key=lambda t: _PAGE_TYPE_PRIORITY.index(t)
               if t in _PAGE_TYPE_PRIORITY else len(_PAGE_TYPE_PRIORITY))


def _empty_gen_row(base, **overrides):
    """Full-schema row so every page (including blanks/dupes/errors) has the
    same columns -- keeps the CSV export from getting ragged."""
    row = dict(base,
               is_blank=False, is_duplicate=False, is_duplicate_of=None,
               orientation="0", skew_angle=0.0, contrast=None, columns_detected=0,
               page_type="other", languages=["und"], header=None, footer=None,
               page_number_printed=None, body_text="", n_chars=0,
               encoding_problems=[], repetition_loop_detected=False,
               self_checked=False, self_check_similarity=None, needs_review=False,
               n_dictionary_entries=0, model_id=None, gen_meta=[],
               page_hash=None, elapsed_sec=0.0, error=None)
    row.update(overrides)
    return row


def process_page(model, page, pdf_path, pdf_sha1, page_index, n_pages,
                  prev_hash, prev_row):
    """Returns (row_dict, dictionary_entries_list)."""
    t0 = time.time()
    rgb, used_dpi = render_page_image(page, CFG.RENDER_DPI)
    gray = to_gray(rgb)
    ir = ink_ratio(gray)

    base = dict(source_pdf=str(pdf_path), pdf_sha1=pdf_sha1, page_index=page_index,
                page_count=n_pages, timestamp=now_iso(), render_dpi=used_dpi,
                ink_ratio=round(ir, 5))

    # --- blank page: skip the model entirely ----------------------------------
    if ir < CFG.BLANK_INK_RATIO:
        row = _empty_gen_row(base, is_blank=True, page_type="blank",
                              model_id=model.model_id, page_hash=dhash(gray),
                              elapsed_sec=round(time.time() - t0, 3))
        return row, []

    # --- cheap geometric fixes, done before any model call --------------------
    orient, rotated = detect_orientation(gray)
    if rotated:
        rgb = apply_orientation(rgb, orient)
        gray = to_gray(rgb)

    angle = estimate_skew_angle(gray)
    if angle:
        rgb = deskew(rgb, angle)
        gray = to_gray(rgb)

    cur_hash = dhash(gray)
    is_dup = prev_hash is not None and hamming_hex(cur_hash, prev_hash) <= CFG.DUP_HAMMING

    # --- duplicate page: reuse the previous transcription, skip the model -----
    if is_dup and prev_row is not None and not prev_row.get("is_blank"):
        row = _empty_gen_row(
            base, is_duplicate=True, is_duplicate_of=page_index - 1,
            orientation=orient, skew_angle=angle, contrast=prev_row.get("contrast"),
            columns_detected=prev_row.get("columns_detected", 0),
            page_type=prev_row.get("page_type", "other"),
            languages=prev_row.get("languages", ["und"]),
            header=prev_row.get("header"), footer=prev_row.get("footer"),
            page_number_printed=prev_row.get("page_number_printed"),
            body_text=prev_row.get("body_text", ""), n_chars=prev_row.get("n_chars", 0),
            model_id=model.model_id, page_hash=cur_hash,
            elapsed_sec=round(time.time() - t0, 3))
        return row, []

    # --- full path: illumination cleanup + column-aware transcription ---------
    rgb, contrast = normalize_illumination(rgb)
    gray = to_gray(rgb)
    h, w = gray.shape
    cols = detect_columns(gray)

    gen_meta = []
    if len(cols) <= 1:
        raw, meta = model.generate(PROMPT_FULL_PAGE, images=[to_pil(rgb)])
        gen_meta.append(meta)
        sec = parse_sections(raw)
        page_type = (_none_if_blank(sec.get("PAGE_TYPE")) or "other").lower()
        languages_raw = [s.strip() for s in (sec.get("LANGUAGES") or "").split(",") if s.strip()]
        header = _none_if_blank(sec.get("HEADER"))
        footer = _none_if_blank(sec.get("FOOTER"))
        page_number = _none_if_blank(sec.get("PAGE_NUMBER"))
        body = dehyphenate(sec.get("BODY", "") or "")
        n_cols_seen = 1
    else:
        head_cut = int(h * CFG.HEADER_FRAC)
        foot_cut = int(h * (1 - CFG.FOOTER_FRAC))
        top_img = to_pil(crop(rgb, 0, w, 0, head_cut))
        bot_img = to_pil(crop(rgb, 0, w, foot_cut, h))
        raw_hf, meta_hf = model.generate(PROMPT_HEADER_FOOTER, images=[top_img, bot_img])
        gen_meta.append(meta_hf)
        sec_hf = parse_sections(raw_hf)
        header = _none_if_blank(sec_hf.get("HEADER"))
        footer = _none_if_blank(sec_hf.get("FOOTER"))
        page_number = _none_if_blank(sec_hf.get("PAGE_NUMBER"))

        col_bodies, col_types, col_langs = [], [], []
        for (x0, x1) in cols:
            col_img = to_pil(crop(rgb, x0, x1, head_cut, foot_cut))
            raw_c, meta_c = model.generate(PROMPT_COLUMN, images=[col_img])
            gen_meta.append(meta_c)
            sec_c = parse_sections(raw_c)
            col_types.append((_none_if_blank(sec_c.get("PAGE_TYPE")) or "other").lower())
            col_langs.append([s.strip() for s in (sec_c.get("LANGUAGES") or "").split(",") if s.strip()])
            # dehyphenate PER COLUMN, before joining -- otherwise a hyphenated
            # word at the bottom of column 1 can wrongly fuse with the first
            # word of column 2.
            col_bodies.append(dehyphenate(sec_c.get("BODY", "") or ""))

        body = "\n\n".join(b for b in col_bodies if b)
        page_type = _merge_page_type(col_types)
        languages_raw = []
        for ls in col_langs:
            for l in ls:
                if l not in languages_raw:
                    languages_raw.append(l)
        n_cols_seen = len(cols)

    languages = merge_languages(languages_raw, body)
    problems = validate_text(body)
    rep_loop = detect_repetition_loop(body)

    # --- dictionary-entry structuring -----------------------------------------
    entries = []
    if page_type in ("dictionary", "mixed") and body.strip():
        raw_struct, meta_struct = model.generate(
            PROMPT_STRUCTURE + body, images=None,
            max_new_tokens=max(CFG.MAX_NEW_TOKENS, 3072),
            system_prompt=STRUCTURE_SYSTEM_PROMPT)
        gen_meta.append(meta_struct)
        for e in parse_structure_json(raw_struct):
            e["source_pdf"] = str(pdf_path)
            e["pdf_sha1"] = pdf_sha1
            e["page_index"] = page_index
            e["extracted_at"] = now_iso()
            entries.append(e)

    # --- self-check: independent re-render at FALLBACK_DPI + compare ----------
    # NOTE: re-running the *same* image through greedy (do_sample=False) decoding
    # would just reproduce the identical output every time and never catch
    # anything. Instead we re-render the page from the PDF at a different DPI,
    # re-run the whole preprocessing + transcription path independently, and
    # compare the two transcriptions -- genuine disagreement is a real signal.
    self_checked, sim, needs_review = False, None, False
    do_check = (CFG.SELF_CHECK_MODE == "always") or \
               (CFG.SELF_CHECK_MODE == "auto" and
                (page_type == "dictionary" or random.random() < CFG.SELF_CHECK_RATE))
    if do_check and body.strip():
        try:
            rgb2, _ = render_page_image(page, CFG.FALLBACK_DPI)
            gray2 = to_gray(rgb2)
            o2, r2 = detect_orientation(gray2)
            if r2:
                rgb2 = apply_orientation(rgb2, o2)
                gray2 = to_gray(rgb2)
            a2 = estimate_skew_angle(gray2)
            if a2:
                rgb2 = deskew(rgb2, a2)
            rgb2, _ = normalize_illumination(rgb2)
            raw2, meta2 = model.generate(PROMPT_FULL_PAGE, images=[to_pil(rgb2)])
            gen_meta.append(meta2)
            body2 = dehyphenate(parse_sections(raw2).get("BODY", "") or "")
            sim = round(similarity(body, body2), 4)
            self_checked = True
            needs_review = sim < CFG.SELF_CHECK_MIN_SIM
        except Exception as e:
            LOG.warning(f"[self-check] p{page_index} of {Path(pdf_path).name} failed: {e}")

    if problems or rep_loop:
        needs_review = True

    row = dict(base, is_blank=False, is_duplicate=False, is_duplicate_of=None,
               orientation=orient, skew_angle=angle, contrast=round(contrast, 2),
               columns_detected=n_cols_seen, page_type=page_type, languages=languages,
               header=header, footer=footer, page_number_printed=page_number,
               body_text=body, n_chars=len(body), encoding_problems=problems,
               repetition_loop_detected=rep_loop, self_checked=self_checked,
               self_check_similarity=sim, needs_review=needs_review,
               n_dictionary_entries=len(entries), model_id=model.model_id,
               gen_meta=gen_meta, page_hash=cur_hash, error=None,
               elapsed_sec=round(time.time() - t0, 3))
    return row, entries

def discover_pdfs():
    pdfs, seen = [], set()
    for d in CFG.INPUT_DIRS:
        for p in sorted(Path(d).rglob("*.pdf")):
            rp = str(p.resolve())
            if rp not in seen:
                seen.add(rp)
                pdfs.append(p)
    return pdfs


def load_resume_state(jsonl_paths=None):
    """Returns (done_set, last_row_by_pdf_sha1) by reading whatever JSONL
    shard(s) already exist -- this is the whole resume mechanism, no separate
    state DB needed. By default this globs every `extracted_data*.jsonl` under
    OUTPUT_DIR, i.e. every GPU worker's shard plus any previously merged file,
    so resume is correct across GPU-count changes between runs."""
    if jsonl_paths is None:
        jsonl_paths = sorted(glob.glob(os.path.join(CFG.OUTPUT_DIR, "extracted_data*.jsonl")))
    done = set()
    last_by_pdf = {}
    for path in jsonl_paths:
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    row = json.loads(line)
                except Exception:
                    continue
                sha, idx = row.get("pdf_sha1"), row.get("page_index")
                done.add((sha, idx))
                if sha is not None:
                    prev = last_by_pdf.get(sha)
                    if prev is None or (idx is not None and idx > prev.get("page_index", -1)):
                        last_by_pdf[sha] = row
    return done, last_by_pdf


def append_jsonl(path, obj):
    with open(path, "a", encoding="utf-8") as f:
        f.write(json.dumps(obj, ensure_ascii=False, default=str) + "\n")
        f.flush()
        os.fsync(f.fileno())  # survive an abrupt Kaggle session kill


def dump_state(**kwargs):
    kwargs["updated_at"] = now_iso()
    tmp = CFG.STATE_PATH + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(kwargs, f, ensure_ascii=False, indent=2, default=str)
    os.replace(tmp, CFG.STATE_PATH)


def choose_model_id(pdfs, num_workers=1):
    """num_workers lets the 7B/3B threshold scale with however many GPUs will
    actually be running in parallel (see CFG.AUTO_3B_PAGE_LIMIT above)."""
    if CFG.MODEL_PREFERENCE == "7b":
        return CFG.MODEL_7B
    if CFG.MODEL_PREFERENCE == "3b":
        return CFG.MODEL_3B
    total = 0
    for p in pdfs:
        try:
            d = fitz.open(str(p))
            total += d.page_count
            d.close()
        except Exception as e:
            LOG.warning(f"[discover] could not open {p}: {e}")
    LOG.info(f"[model] total pages discovered: {total}")
    limit = CFG.AUTO_3B_PAGE_LIMIT * max(1, num_workers)
    return CFG.MODEL_7B if total <= limit else CFG.MODEL_3B


def plan_shards(pdf_infos, num_workers):
    """pdf_infos: list of {"path", "sha1", "pages"}. Returns (shards, loads):
    shards[i] is worker i's list of {"pdf_path","pdf_sha1","start","end","size"}
    chunks, loads[i] is its total page count -- for a quick balance check.

    With a single worker, every PDF is kept as one whole chunk (no reason to
    fragment it). With more than one, every PDF is cut into same-size chunks
    (small enough that ~8 chunks land on each worker on average) and the chunks
    are greedily assigned, largest first, to whichever worker currently has the
    fewest pages (longest-processing-time bin-packing) -- simple, and close to
    optimal for this kind of workload."""
    total_pages = sum(pi["pages"] for pi in pdf_infos)
    if num_workers <= 1 or total_pages == 0:
        chunk_target = max(total_pages, 1)
    else:
        chunk_target = max(10, math.ceil(total_pages / (num_workers * 8)))

    chunks = []
    for pi in pdf_infos:
        n = pi["pages"]
        s = 0
        while s < n:
            e = min(n, s + chunk_target)
            chunks.append({"pdf_path": pi["path"], "pdf_sha1": pi["sha1"],
                            "start": s, "end": e, "size": e - s})
            s = e

    chunks.sort(key=lambda c: -c["size"])
    loads = [0] * num_workers
    shards = [[] for _ in range(num_workers)]
    for c in chunks:
        i = min(range(num_workers), key=lambda k: loads[k])
        shards[i].append(c)
        loads[i] += c["size"]
    return shards, loads


def export_csv():
    """Flattens extracted_data.jsonl into extracted_data.csv. Uses pandas when
    available, otherwise falls back to csv.DictWriter so a plain-Python
    environment still gets a usable CSV."""
    if not os.path.exists(CFG.JSONL_PATH):
        return
    rows = []
    with open(CFG.JSONL_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except Exception:
                continue
    if not rows:
        return

    def _flatten(r):
        return {k: (json.dumps(v, ensure_ascii=False) if isinstance(v, (list, dict)) else v)
                for k, v in r.items()}

    if pd is not None:
        df = pd.DataFrame([_flatten(r) for r in rows])
        df.to_csv(CFG.CSV_PATH, index=False)
        LOG.info(f"[csv] wrote {len(df)} rows -> {CFG.CSV_PATH} (pandas)")
        return

    fieldnames = []
    for r in rows:
        for k in r.keys():
            if k not in fieldnames:
                fieldnames.append(k)
    with open(CFG.CSV_PATH, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore", restval="")
        w.writeheader()
        for r in rows:
            w.writerow(_flatten(r))
    LOG.info(f"[csv] wrote {len(rows)} rows -> {CFG.CSV_PATH} (csv fallback, no pandas)")


def _safe_stem(name):
    """Filesystem-safe filename stem derived from a source PDF's name."""
    stem = Path(str(name)).stem
    stem = re.sub(r"[^\w\-. ]+", "_", stem, flags=re.UNICODE).strip(" _") or "output"
    return stem[:150]


def export_markdown():
    """Writes one Markdown file per source PDF: just the transcribed text of that
    PDF, page by page, in reading order -- the document itself, not the
    structured JSON/CSV data. Body text is put in a fenced code block so the
    original line breaks and any diacritics/punctuation are reproduced exactly,
    with nothing reformatted or reflowed. Header/footer/running-head text (if
    any) is kept as an HTML comment above each page so it isn't lost, but stays
    out of the visible reading text since it's page furniture, not body content.
    """
    if not os.path.exists(CFG.JSONL_PATH):
        return []
    by_pdf = {}
    with open(CFG.JSONL_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                row = json.loads(line)
            except Exception:
                continue
            by_pdf.setdefault(row.get("source_pdf", "unknown"), []).append(row)

    os.makedirs(CFG.MARKDOWN_DIR, exist_ok=True)
    written = []
    for pdf_path, rows in by_pdf.items():
        rows = sorted(rows, key=lambda r: r.get("page_index") or 0)
        out_path = os.path.join(CFG.MARKDOWN_DIR, _safe_stem(pdf_path) + ".md")
        parts = [f"# {Path(pdf_path).name}", ""]
        for r in rows:
            pidx = r.get("page_index") or 0
            printed = r.get("page_number_printed")
            heading = f"## Page {pidx + 1}"
            if printed:
                heading += f" (printed: {printed})"
            parts.append(heading)
            parts.append("")
            if r.get("header"):
                parts.append(f"<!-- header: {r['header']} -->")
            if r.get("footer"):
                parts.append(f"<!-- footer: {r['footer']} -->")
            if r.get("is_blank"):
                parts.append("*[blank page]*")
            elif r.get("error"):
                parts.append(f"*[page could not be transcribed: {r['error']}]*")
            else:
                if r.get("is_duplicate"):
                    parts.append("*(duplicate scan -- text reused from the previous page)*")
                    parts.append("")
                body = (r.get("body_text") or "").strip("\n")
                parts.append("```text")
                parts.append(body if body else "[no text detected]")
                parts.append("```")
            parts.append("")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write("\n".join(parts).rstrip("\n") + "\n")
        written.append(out_path)
        LOG.info(f"[markdown] wrote {len(rows)} page(s) -> {out_path}")
    return written


def run_worker(manifest_path, worker_tag):
    """One GPU's worth of work: load this worker's manifest, load (just) the
    model, walk its assigned (pdf, page-range) chunks in order, append each
    page's row to this worker's own shard files. Mirrors the original
    process_pdf + main() loop, generalised to a manifest instead of "every page
    of every discovered PDF"."""
    start_time = time.time()
    LOG.info("=" * 80)
    LOG.info(f"[worker {worker_tag}] starting, manifest={manifest_path}")
    LOG.info(f"[worker {worker_tag}] CUDA_VISIBLE_DEVICES="
             f"{os.environ.get('CUDA_VISIBLE_DEVICES', '<unset>')}")
    LOG.info("=" * 80)

    with open(manifest_path, "r", encoding="utf-8") as f:
        chunks = json.load(f).get("chunks", [])
    if not chunks:
        LOG.warning(f"[worker {worker_tag}] manifest has no assigned work; exiting.")
        dump_state(pages_done=0, finished=True, elapsed_sec=0.0)
        return

    by_pdf, order = {}, []
    for c in chunks:
        key = c["pdf_path"]
        if key not in by_pdf:
            by_pdf[key] = []
            order.append(key)
        by_pdf[key].append(c)
    for key in by_pdf:
        by_pdf[key].sort(key=lambda c: c["start"])

    all_shards = sorted(glob.glob(os.path.join(CFG.OUTPUT_DIR, "extracted_data*.jsonl")))
    done_set, last_by_pdf = load_resume_state(all_shards)
    LOG.info(f"[worker {worker_tag}] {len(done_set)} page(s) already completed "
             f"(across all shards so far), will be skipped.")

    model_id = os.environ.get("FORCE_MODEL_ID") or choose_model_id([Path(p) for p in order])
    LOG.info(f"[worker {worker_tag}] model: {model_id}")
    model = QwenVLOCR(model_id, load_in_4bit=CFG.LOAD_IN_4BIT)

    stats = types.SimpleNamespace(pages_done=0)
    stop = False
    for pdf_path_str in order:
        if stop:
            break
        pdf_path = Path(pdf_path_str)
        pdf_sha1 = by_pdf[pdf_path_str][0]["pdf_sha1"]
        try:
            doc = fitz.open(pdf_path_str)
        except Exception as e:
            LOG.error(f"[worker {worker_tag}] cannot open {pdf_path_str}: {e}")
            continue
        n_pages = doc.page_count
        seed_row = last_by_pdf.get(pdf_sha1)
        prev_hash = seed_row.get("page_hash") if seed_row else None
        prev_row = seed_row

        for chunk in by_pdf[pdf_path_str]:
            if stop:
                break
            for page_index in range(chunk["start"], min(chunk["end"], n_pages)):
                if CFG.MAX_PAGES and stats.pages_done >= CFG.MAX_PAGES:
                    LOG.info(f"[worker {worker_tag}] MAX_PAGES reached.")
                    stop = True
                    break
                if time.time() - start_time > CFG.MAX_RUNTIME_SEC:
                    LOG.warning(f"[worker {worker_tag}] MAX_RUNTIME_SEC reached, stopping before the session dies.")
                    stop = True
                    break

                key = (pdf_sha1, page_index)
                if key in done_set:
                    continue

                page = doc.load_page(page_index)
                try:
                    row, entries = process_page(model, page, pdf_path, pdf_sha1,
                                                page_index, n_pages, prev_hash, prev_row)
                except Exception as e:
                    LOG.error(f"[worker {worker_tag}] {pdf_path.name} p{page_index}: "
                              f"{e}\n{traceback.format_exc()}")
                    row = _empty_gen_row(
                        dict(source_pdf=str(pdf_path), pdf_sha1=pdf_sha1, page_index=page_index,
                             page_count=n_pages, timestamp=now_iso(), render_dpi=None, ink_ratio=None),
                        needs_review=True, error=str(e), model_id=model_id)
                    entries = []

                append_jsonl(CFG.JSONL_PATH, row)
                for e in entries:
                    append_jsonl(CFG.ENTRIES_PATH, e)

                prev_hash = row.get("page_hash") or prev_hash
                if row.get("error") is None:
                    prev_row = row
                done_set.add(key)
                stats.pages_done += 1

                if stats.pages_done % CFG.CHECKPOINT_EVERY == 0:
                    elapsed = time.time() - start_time
                    LOG.info(f"[worker {worker_tag}] {stats.pages_done} page(s) | "
                             f"{pdf_path.name} p{page_index + 1}/{n_pages} | "
                             f"{elapsed / 3600:.2f}h elapsed | free VRAM {gpu_free_gb():.1f} GB")
                    dump_state(pages_done=stats.pages_done, current_pdf=str(pdf_path),
                               current_page=page_index, elapsed_sec=round(elapsed, 1))
        doc.close()

    elapsed = time.time() - start_time
    LOG.info("=" * 80)
    LOG.info(f"[worker {worker_tag}] finished: {stats.pages_done} page(s) processed this run in {elapsed / 3600:.2f}h")
    LOG.info("=" * 80)
    dump_state(pages_done=stats.pages_done, finished=True, elapsed_sec=round(elapsed, 1))


def _parse_args():
    ap = argparse.ArgumentParser(
        description="One data-parallel OCR worker, pinned to one GPU via CUDA_VISIBLE_DEVICES.")
    ap.add_argument("--manifest", required=True,
                     help="Path to this worker's shard manifest JSON (see plan_shards).")
    ap.add_argument("--worker-id", type=int, default=0,
                     help="Logical worker index, used only for the log tag gpu<N>.")
    return ap.parse_args()


if __name__ == "__main__":
    _args = _parse_args()
    _tag = f"gpu{_args.worker_id}"
    try:
        run_worker(_args.manifest, worker_tag=_tag)
    except Exception:
        LOG.error(f"[worker {_tag}] crashed:\n{traceback.format_exc()}")
        raise
