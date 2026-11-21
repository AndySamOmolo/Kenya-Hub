#!/usr/bin/env python3
"""
Shared Commercial-License Guardrail for Kenya-Hub Dataset Ingestion Pipelines.

Enforces the 31-item Exclusion Watchlist from the Kenya-Hub Master Expansion Audit:
- Blocks all Non-Commercial (CC-BY-NC*, NC-SA, NC-ND), NOODL-1.0, unverified,
  and upstream-contaminated repositories across Speech, KSL, NLP, CLDF, and OER.
- Filters out copyrighted religious/Bible domains (jw.org, bible.com, etc.) and
  restricted storybook publishers (nalibali) from mixed-license corpora.
- Filters out NC/unclear constituent datasets (grollemundbantu, tls) from Lexibank 2
  and CLICS3.
"""

from __future__ import annotations

import re
from urllib.parse import urlparse

# Complete 31-item Exclusion Watchlist (normalized lowercase identifiers & domains)
BLOCKED_NON_COMMERCIAL_REPOS: frozenset[str] = frozenset({
    # Speech & KSL NC / NOODL / Unverified traps
    "neulab/africanvoices",                    # CMU Building African Voices (CC-BY-NC-SA-4.0)
    "intronhealth/afrispeech-200",             # AfriSpeech-200 (CC-BY-NC-SA-4.0)
    "intronhealth/afro-tts",                   # Afro-TTS (CC-BY-NC* / CPML)
    "facebook/mms-1b-all",                     # Meta MMS (CC-BY-NC-4.0)
    "mcaa1-msu/twb_luo_ke",                    # Utavu Dholuo (NOODL-1.0)
    "clear-global/kenyan-swahili-speech",      # CLEAR Kenyan Swahili (NC)
    "clear-global/luo-synthetic-asr-dataset",  # CLEAR Luo Synthetic (NC)
    "clear-global/twb-voice-1.0",              # TWB Voice 1.0 (NC)
    "chrisjay/crowd-speech-africa",            # Crowd Speech Africa (NC)
    "silencionetwork/swahili-speech",          # Silencio Swahili (NC)
    "speedykom-group/turkana-speech-dataset",  # Turkana Speech (NC)
    "ekitabu/kenyan-sign-language-videos",     # eKitabu KSL Kaggle (unverified license)
    "openslr.org/157",                         # OpenSLR Sagalee (CC-BY-NC*)
    # NLP / QA / Sentiment / MT NC & Contamination traps
    "intron-innovation/afrimed-qa",            # AfriMed-QA (CC-BY-NC-SA conflict)
    "intronhealth/afrimedqa_v2",               # AfriMed-QA v2 (CC-BY-NC-SA conflict)
    "masakhane/masakhaner2",                   # MasakhaNER 2.0 (CC-BY-NC)
    "masakhane/masakhanews",                   # MasakhaNEWS (CC-BY-NC)
    "masakhane/masakhapos",                    # MasakhaPOS (CC-BY-NC)
    "masakhane/afriqa",                        # AfriQA (CC-BY-NC)
    "masakhane/afriqa-gold-passages",          # AfriQA Gold Passages (CC-BY-NC)
    "masakhane/mafand",                        # MAFAND-MT (CC-BY-NC)
    "masakhane/afridocmt",                     # AfriDocMT (CC-BY-NC)
    "masakhane/afrisenti",                     # AfriSenti (CC-BY-NC)
    "hausanlp/afrisenti-twitter",              # AfriSenti Twitter (CC-BY-NC)
    "afrisenti-semeval/afrisent-semeval-2023", # AfriSenti SemEval (CC-BY-NC)
    "jacaranda/ulizallama3",                   # UlizaLlama3 (NC / Llama restricted)
    "lelapa/inkuba-instruct",                  # Inkuba-Instruct (NC)
    "regnant-io/swahili-instruction-22k",      # Upstream Alpaca + NLLB CC-BY-NC contamination
    "blakhasan/sheng-augmented-collection",    # Unverified / NC Sheng scrape
    "mbzuai/bactrian-x",                       # Bactrian-X (CC-BY-NC-4.0)
    "csebuetnlp/xlsum",                        # XL-Sum (CC-BY-NC-SA-4.0)
    # Lexicon / CLDF / Morph / Archive NC & Restricted traps
    "unimorph/orm",                            # UniMorph Oromo (CC-BY-NC)
    "lexibank/grollemundbantu",                # Grollemund Bantu v1.0 (CC-BY-NC-4.0)
    "lexibank/tls",                            # TLS constituent (Other / unclear open)
    "elar",                                    # ELAR Endangered Languages Archive (NC/restricted)
    "elarspeech",
    "reflex.clld.huma-num.fr",                 # RefLex (non-commercial)
    "webonary.org",                            # SIL Webonary (copyrighted / NC)
    "kamusi.org",                              # Kamusi Project (distinct from Kalebu/kamusi MIT)
    "glosbe.com",                              # Glosbe (scraped / mixed copyright)
    "ice-corpora.uzh.ch",                      # ICE-EA (academic / NC)
    "laws.africa",                             # Laws.Africa typeset PDFs (CC-BY-NC-SA-4.0)
    "kenyalaw.org",                            # Kenya Law typeset PDFs (use raw Parliament text)
    # Wave 2 — 13 Newly Caught NC & Provenance Traps (avoiding bare njas.fi / who.int / aporee_ collisions)
    "prota.prota4u.org",
    "prota4u.org",
    "tropical.theferns.info",
    "clearglobal.org/resources/dholuo-speech-dataset",
    "cmkh2stj6004mmj0751rn8vq6",
    "mozilladatacollective.com/datasets/cmkh2stj6004mmj0751rn8vq6",
    "davidrumsey.com",
    "archive.org/details/dr_",
    "dr_east-africa-philips-regional-wall-map-of-7119000",
    "ke.building.2009",
    "journals.flvc.org/sal",
    "afrikanistik-aegyptologie-online.de",
    "nflrc.hawaii.edu/ldc",
    "openbookpublishers.com/books/10.11647/obp.0405",
    "njas-pre-2023",
    "iris.who.int",
    "who.int/iris",
    "who.int/publications/i/item",
    "knbs-mini-dhs-2025",
    "openknowledge.fao.org",
    "fao.org/documents",
    "inaturalist.org",
    "gbif-inaturalist-unfiltered",
    "opus.nlpl.eu/datasets/qed",
    "opus.nlpl.eu/datasets/ted2020",
    "opus-qed",
    "opus-ted2020",
    "mamakobe/luhya-multilingual-dataset",
    "michsethowusu/swahili-words",
    "lughagen",
    "elararchive.org",
    "pangloss.cnrs.fr",
    "cocoon.huma-num.fr",
    "paradisec.org.au",
    "africamuseum.be/en/research/discover/human_sciences/culture_society/blr",
    "blr3",
    "aporee_31294",
    "aporee_31294_35978",
    "periscopefilm",
})

BLOCKED_WEB_DOMAINS: frozenset[str] = frozenset({
    "jw.org",
    "wol.jw.org",
    "bible.com",
    "bible.is",
    "biblegateway.com",
    "biblehub.com",
    "youversion.com",
    "stepbible.org",
    "nalibali.org",
    "laws.africa",
    "kenyalaw.org",
    "glosbe.com",
    "webonary.org",
    "kamusi.org",
})

EXCLUDED_CLDF_DATASETS: frozenset[str] = frozenset({
    "grollemundbantu",
    "lexibank/grollemundbantu",
    "tls",
    "lexibank/tls",
})

ALLOWED_OER_LICENSES: frozenset[str] = frozenset({
    "cc-by",
    "cc-by-3.0",
    "cc-by-4.0",
    "cc-by-sa",
    "cc-by-sa-3.0",
    "cc-by-sa-4.0",
    "cc0",
    "cc0-1.0",
    "public domain",
    "pd",
    "mit",
    "apache-2.0",
})

SECULAR_OPUS_SUBCORPORA: frozenset[str] = frozenset({
    "wikimedia",
    "tatoeba",
    "gnome",
    "ubuntu",
    "mozilla",
    "kde4",
    "globalvoices",
    "ccaligned",
})

_BIBLE_VERSE_RE = re.compile(
    r"(?:^\s*\d{1,3}\s*:\s*\d{1,3}\b|"
    r"\b(?:genesis|exodus|leviticus|deuteronomy|psalms?|proverbs|isaiah|jeremiah|"
    r"matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|hebrews|revelation|"
    r"mathayo|mariko|luka|johana|jo-roma|jo-korintho|chakruok|zaburi)\s+\d{1,3}\s*:\s*\d{1,3}\b)",
    re.IGNORECASE,
)


def assert_repo_allowed(repo_or_url: str) -> None:
    """Raise ValueError if a Hugging Face repo, GitHub repo, or URL hits the Exclusion Watchlist."""
    normalized = (repo_or_url or "").strip().lower()
    if not normalized:
        return
    if normalized in BLOCKED_NON_COMMERCIAL_REPOS:
        raise ValueError(f"Blocked non-commercial/excluded repository: {repo_or_url}")
    for blocked in BLOCKED_NON_COMMERCIAL_REPOS:
        if blocked in normalized:
            raise ValueError(
                f"Blocked non-commercial/excluded identifier '{blocked}' matched in: {repo_or_url}"
            )


def is_blocked_url(url: str | None) -> bool:
    """Return True if URL belongs to a blocked religious, NC, or scraped domain."""
    if not url:
        return False
    raw = str(url).strip().lower()
    if not raw:
        return False
    host = urlparse(raw).netloc.lower() if "://" in raw else raw.split("/")[0].lower()
    host = host.removeprefix("www.")
    for domain in BLOCKED_WEB_DOMAINS:
        if host == domain or host.endswith(f".{domain}") or domain in raw:
            return True
    return False


def is_permissive_oer_row(
    license_str: str | None,
    source_str: str | None = None,
    url_str: str | None = None,
) -> bool:
    """
    Strictly allow only CC-BY, CC-BY-SA, CC0, MIT, Apache-2.0, or Public Domain rows
    from mixed OER storybook corpora (SIL-AI Bloom, GlotStoryBook, African Storybook,
    Global ASP, StoryWeaver). Rejects all NC, ND, and Nal'ibali rows.
    """
    lic = (license_str or "").strip().lower().replace("_", "-").replace(" ", "-")
    src = (source_str or "").strip().lower()
    if "nalibali" in src or "nal'ibali" in src or "nalibali" in lic:
        return False
    if is_blocked_url(url_str):
        return False
    if not lic:
        return False
    if "nc" in lic or "nd" in lic or "noncommercial" in lic or "non-commercial" in lic:
        return False
    if "all-rights-reserved" in lic or "copyright" in lic:
        return False
    return (
        lic in ALLOWED_OER_LICENSES
        or lic.startswith("cc-by-4")
        or lic.startswith("cc-by-3")
        or lic.startswith("cc-by-sa")
        or lic.startswith("cc0")
        or lic == "cc-by"
    )


def is_secular_opus_luo_row(
    english: str,
    luo: str,
    source_corpus: str | None = None,
    url_str: str | None = None,
) -> bool:
    """
    Filter mixed OPUS English-Luo rows (e.g., BrianMwangi/english-to-luo-opus) to
    secular sub-corpora only, stripping Bible and JW300 rows.
    """
    if is_blocked_url(url_str):
        return False
    src = (source_corpus or "").strip().lower()
    if src:
        if any(bad in src for bad in ("jw300",
    "pmc7315313",
    "pmc12615033", "bible", "watchtower", "nt", "ot", "scripture")):
            return False
        if not any(ok in src for ok in SECULAR_OPUS_SUBCORPORA):
            # Unknown corpus tag: still apply text heuristics below
            pass
    combined = f"{english} {luo}"
    if _BIBLE_VERSE_RE.search(combined):
        return False
    lower_comb = combined.lower()
    if any(marker in lower_comb for marker in ("jw.org", "watchtower", "jehovah's witnesses", "joneno mag jehova")):
        return False
    return True


def is_allowed_cldf_constituent(dataset_id: str | None, license_str: str | None = None) -> bool:
    """Filter out NC/unclear Lexibank 2 & CLICS3 constituent datasets (e.g., grollemundbantu, tls)."""
    ds = (dataset_id or "").strip().lower()
    if ds in EXCLUDED_CLDF_DATASETS or any(bad in ds for bad in EXCLUDED_CLDF_DATASETS):
        return False
    if license_str:
        lic = license_str.strip().lower()
        if "nc" in lic or "noncommercial" in lic or "other" in lic:
            return False
    return True


_BIBLE_BOOK_EXTENDED_RE = re.compile(
    r"(?:^\s*\d{1,3}\s*:\s*\d{1,3}\b|"
    r"\b(?:genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|samuel|kings|chronicles|"
    r"psalms?|proverbs|ecclesiastes|isaiah|jeremiah|ezekiel|daniel|matthew|mark|luke|john|"
    r"acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|"
    r"timothy|titus|hebrews|james|peter|jude|revelation|"
    r"mwanzo|kutoka|zaburi|mithali|mathayo|mariko|luka|yohana|johana|matendo|warumi|"
    r"wakorintho|wagalatia|waefeso|waebrania|ufunuo|jo-roma|jo-korintho|chakruok)\s+\d{1,3}\s*:\s*\d{1,3}\b)",
    re.IGNORECASE,
)

BLOCKED_ROW_SOURCES: frozenset[str] = frozenset({
    "bible", "new testament", "old testament", "step bible", "stepbible",
    "scripture", "gospel", "jw300", "watchtower", "biblica", "bible society",
    "iba", "qed", "ted2020", "twitter", "x.com", "llama",
})


def is_secular_commercial_row(
    english: str,
    target: str,
    source: str | None = None,
    domain: str | None = None,
    url: str | None = None,
) -> bool:
    """Strip Bible/JW/QED/TED2020/Twitter/unverified provenance rows."""
    if url and is_blocked_url(url):
        return False
    meta = f"{source or ''} {domain or ''}".strip().lower()
    if meta and any(bad in meta for bad in BLOCKED_ROW_SOURCES):
        return False
    combined = f"{english} {target}"
    if _BIBLE_BOOK_EXTENDED_RE.search(combined):
        return False
    low = combined.lower()
    if any(m in low for m in ("jw.org", "watchtower", "step bible", "jehovah's witnesses", "joneno mag jehova")):
        return False
    return True
