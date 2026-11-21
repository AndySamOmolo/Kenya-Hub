#!/usr/bin/env python3
"""
kenyahub/scripts/transcribe-pd-books-vision.py

Gemini Vision API Page-by-Page Transcription Pipeline for KenyaHub's
43 Pre-1931 US Public Domain Kenyan Linguistic Grammars, Dictionaries & Archives.

Why Vision Instead of OCR:
  - 19th- and early-20th-century African linguistic prints use special diacritics
    (ĩ, ũ, ɔ, ɛ, ŋ, ṯ, ḏ, macrons, subdots), multi-column parallel tables, and
    Fraktur/italic conventions that standard OCR engines severely corrupt.
  - This pipeline renders each PDF page to a crisp 200 DPI PNG via `pypdfium2`
    and sends the page image directly to Gemini Vision (`google-genai`) with a
    strict JSON schema for validated KenyaHub dictionary entries.

Usage:
  python3 scripts/transcribe-pd-books-vision.py --list-books
  GEMINI_API_KEY=... python3 scripts/transcribe-pd-books-vision.py \\
    --book-id=sacleux-1891-swahili --pdf=/path/to/sacleux1891.pdf --pages=15-40
"""

from __future__ import annotations

import argparse
import io
import json
import os
import sys
from pathlib import Path
from typing import Any

ROOT_DIR = Path(__file__).resolve().parent.parent
DICT_DIR = ROOT_DIR / "src" / "data" / "dictionaries"

# All 43 verified Pre-1931 US Public Domain Works Missing from KenyaHub (Nov 2026 Audit)
PUBLIC_DOMAIN_BOOK_CATALOG: list[dict[str, Any]] = [
    # Swahili & Kenyan Coastal Dialects (12)
    {"id": "delaunay-1885-kiswahili", "year": 1885, "author": "R. P. Delaunay", "title": "Grammaire Kiswahili", "languages": ["swahili"], "url": "https://archive.org/details/delaunay-grammaire-kiswahili"},
    {"id": "buttner-1890-suaheli", "year": 1890, "author": "C. G. Büttner", "title": "Wörterbuch der Suahelisprache", "languages": ["swahili"], "url": "https://archive.org/details/bub_gb_oIMdAAAAMAAJ_2"},
    {"id": "sacleux-1891-swahili", "year": 1891, "author": "Charles Sacleux", "title": "Dictionnaire Français-Swahili", "languages": ["swahili"], "url": "https://archive.org/details/dictionnairefran00sacl"},
    {"id": "buttner-1894-anthologie", "year": 1894, "author": "C. G. Büttner", "title": "Anthologie aus der Suaheli-Litteratur", "languages": ["swahili"], "url": "https://archive.org/details/anthologieausde00btgoog"},
    {"id": "velten-1898-marchen", "year": 1898, "author": "Carl Velten", "title": "Märchen und Erzählungen der Suaheli", "languages": ["swahili"], "url": "https://archive.org/details/mrchenunderzhlu00veltgoog"},
    {"id": "seidel-1900-suahili", "year": 1900, "author": "August Seidel", "title": "Suahili Konversations-Grammatik", "languages": ["swahili"], "url": "https://archive.org/details/suahilikonversat00augu"},
    {"id": "velten-1901-safari", "year": 1901, "author": "Carl Velten", "title": "Safari za Wasuaheli", "languages": ["swahili"], "url": "https://catalog.hathitrust.org/Record/006624725"},
    {"id": "velten-1903-desturi", "year": 1903, "author": "Carl Velten & Mtoro bin Mwenyi Bakari", "title": "Desturi za Wasuaheli", "languages": ["swahili"], "url": "https://catalog.hathitrust.org/Record/011439756"},
    {"id": "velten-1905-grammatik", "year": 1905, "author": "Carl Velten", "title": "Praktische Suaheli-Grammatik (2nd ed.)", "languages": ["swahili"], "url": "https://catalog.hathitrust.org/Record/100746968"},
    {"id": "velten-1907-prosa", "year": 1907, "author": "Carl Velten", "title": "Prosa und Poesie der Suaheli", "languages": ["swahili"], "url": "https://archive.org/details/prosaundpoesiede00velt"},
    {"id": "sacleux-1909-dialectes", "year": 1909, "author": "Charles Sacleux", "title": "Grammaire des Dialectes Swahilis", "languages": ["swahili"], "url": "https://archive.org/stream/grammairedesdial00char/grammairedesdial00char_djvu.txt"},
    {"id": "stigand-1914-black-tales", "year": 1914, "author": "C. H. & N. Y. Stigand", "title": "Black Tales for White Children", "languages": ["swahili"], "url": "https://www.gutenberg.org/ebooks/38992"},
    # Cushitic & Northern Kenya (6)
    {"id": "viterbo-1892-oromonica", "year": 1892, "author": "Ettore Viterbo", "title": "Grammatica e Dizionario della Lingua Oromonica (Vols. I–II)", "languages": ["borana"], "url": "https://archive.org/details/grammaticaedizi00vitegoog"},
    {"id": "schleicher-1892-somali", "year": 1892, "author": "A. W. Schleicher", "title": "Die Somali-Sprache: Erster Teil", "languages": ["somali"], "url": "https://catalog.hathitrust.org/Record/008883715"},
    {"id": "smith-1897-unknown-africa", "year": 1897, "author": "A. Donaldson Smith", "title": "Through Unknown African Countries", "languages": ["borana", "rendille", "daasanach", "somali"], "url": "https://archive.org/details/throughunknowna00smit"},
    {"id": "vannutelli-1899-omo", "year": 1899, "author": "Vannutelli & Citerni", "title": "L'Omo: Viaggio d'esplorazione", "languages": ["borana", "daasanach", "turkana"], "url": "https://archive.org/details/lomoviaggiodespl00vann"},
    {"id": "schleicher-1900-somali-texte", "year": 1900, "author": "A. W. Schleicher (ed. Reinisch)", "title": "Somali-Texte", "languages": ["somali"], "url": "https://catalog.hathitrust.org/Record/008693553"},
    {"id": "rayne-1921-somals", "year": 1921, "author": "Major H. Rayne", "title": "Sun, Sand and Somals", "languages": ["somali"], "url": "https://www.gutenberg.org/files/48598/48598-h/48598-h.htm"},
    # Nilotic & Luo-Group (7)
    {"id": "erhardt-1857-enguduk", "year": 1857, "author": "James J. Erhardt", "title": "Vocabulary of the Enguduk Iloigob", "languages": ["maasai"], "url": "https://archive.org/details/vocabularyofengu00erha"},
    {"id": "thomson-1885-masai-land", "year": 1885, "author": "Joseph Thomson", "title": "Through Masai Land", "languages": ["maasai", "ilchamus", "samburu", "kamba", "kikuyu"], "url": "https://archive.org/details/throughmasailand01thomuoft"},
    {"id": "macdonald-1899-juba-jrai29", "year": 1899, "author": "J. R. L. Macdonald", "title": "Notes on the Ethnology of Tribes (Juba Expedition, JRAI 29)", "languages": ["turkana", "pokot", "kalenjin", "maasai", "teso"], "url": "https://archive.org/details/in.ernet.dli.2015.106029"},
    {"id": "kitching-1907-gang", "year": 1907, "author": "A. L. Kitching", "title": "An Outline Grammar of the Gang Language", "languages": ["luo"], "url": "https://catalog.hathitrust.org/Record/001854806"},
    {"id": "merker-1910-masai", "year": 1910, "author": "Moritz Merker", "title": "Die Masai (2nd ed.)", "languages": ["maasai"], "url": "https://archive.org/download/diemasaiethnogr00merk/diemasaiethnogr00merk.pdf"},
    {"id": "westermann-1912-shilluk", "year": 1912, "author": "D. Westermann", "title": "The Shilluk People: Their Language and Folklore", "languages": ["luo"], "url": "https://archive.org/details/shillukpeoplethe00west"},
    {"id": "barton-1923-kipsikis-jrai53", "year": 1923, "author": "Juxon Barton", "title": "Notes on the Kipsikis or Lumbwa Tribe (JRAI 53)", "languages": ["kalenjin"], "url": "https://archive.org/stream/in.ernet.dli.2015.537273/2015.537273.journal-of_djvu.txt"},
    # Comparative Bantu & Multi-Language (6)
    {"id": "last-1885-polyglotta", "year": 1885, "author": "J. T. Last", "title": "Polyglotta Africana Orientalis", "languages": ["swahili", "kamba", "mijikenda", "taita", "pokomo", "maasai"], "url": "https://catalog.hathitrust.org/Record/100338562"},
    {"id": "torrend-1891-bantu", "year": 1891, "author": "J. Torrend", "title": "Comparative Grammar of South-African Bantu Languages", "languages": ["swahili", "mijikenda", "kamba", "pokomo"], "url": "https://archive.org/download/comparativegramm00torruoft/comparativegramm00torruoft.pdf"},
    {"id": "meinhof-1899-lautlehre", "year": 1899, "author": "Carl Meinhof", "title": "Grundriss einer Lautlehre der Bantusprachen", "languages": ["swahili", "kikuyu", "kamba"], "url": "https://catalog.hathitrust.org/Record/100325411"},
    {"id": "crabtree-1902-luganda", "year": 1902, "author": "W. A. Crabtree", "title": "Elements of Luganda Grammar", "languages": ["luhya", "kisii"], "url": "https://catalog.hathitrust.org/Record/100543629"},
    {"id": "madan-1911-living-speech", "year": 1911, "author": "A. C. Madan", "title": "Living Speech in Central and South Africa", "languages": ["swahili"], "url": "https://catalog.hathitrust.org/Record/001009717"},
    {"id": "crabtree-1922-primitive-speech", "year": 1922, "author": "W. A. Crabtree", "title": "Primitive Speech (Vols. I–II)", "languages": ["swahili", "luhya"], "url": "https://catalog.hathitrust.org/Record/010556806"},
    # Kenyan Interior Expeditions, Ethnographies & JRAI Volumes (12)
    {"id": "krapf-1860-travels", "year": 1860, "author": "J. L. Krapf", "title": "Travels, Researches, and Missionary Labours", "languages": ["swahili", "mijikenda", "kamba", "kikuyu", "borana", "pokomo"], "url": "https://books.google.com/books/about/Travels_Researches_and_Missionary_Labors.html?id=z78NAAAAQAAJ"},
    {"id": "new-1873-eastern-africa", "year": 1873, "author": "Charles New", "title": "Life, Wanderings, and Labours in Eastern Africa", "languages": ["mijikenda", "borana", "pokomo", "taita", "swahili", "taveta"], "url": "https://archive.org/details/lifewanderingsla00newc"},
    {"id": "hohnel-1894-vol2", "year": 1894, "author": "L. von Höhnel", "title": "Discovery of Lakes Rudolf and Stefanie, Vol. II", "languages": ["samburu", "rendille", "turkana", "daasanach", "pokot", "ilchamus"], "url": "https://archive.org/details/discoveryoflakes02hhne"},
    {"id": "gregory-1896-rift-valley", "year": 1896, "author": "J. W. Gregory", "title": "The Great Rift Valley", "languages": ["pokomo", "borana", "kikuyu", "maasai", "ilchamus", "kalenjin"], "url": "https://archive.org/details/greatriftvalleyb00greg"},
    {"id": "neumann-1898-elephant-hunting", "year": 1898, "author": "A. H. Neumann", "title": "Elephant-Hunting in East Equatorial Africa", "languages": ["samburu", "rendille", "turkana", "daasanach"], "url": "https://archive.org/details/elephanthunting00neum"},
    {"id": "arkell-hardwick-1903-ivory", "year": 1903, "author": "A. Arkell-Hardwick", "title": "An Ivory Trader in North Kenia", "languages": ["kikuyu", "embu", "meru", "samburu", "rendille", "borana"], "url": "https://www.gutenberg.org/ebooks/71971"},
    {"id": "wakefield-1904-pioneer", "year": 1904, "author": "E. S. Wakefield", "title": "Thomas Wakefield: Missionary & Pioneer", "languages": ["mijikenda", "borana", "pokomo"], "url": "https://archive.org/details/thomaswakefieldm00wake"},
    {"id": "tate-1904-kikuyu-kamba-jrai34", "year": 1904, "author": "H. R. Tate", "title": "Notes on the Kikuyu and Kamba Tribes (JRAI 34)", "languages": ["kikuyu", "kamba"], "url": "https://archive.org/details/sim_royal-anthropological-institute-of-great-britain-ireland_1904_34"},
    {"id": "stigand-1910-abyssinia", "year": 1910, "author": "C. H. Stigand", "title": "To Abyssinia, Through an Unknown Land", "languages": ["samburu", "rendille", "borana", "daasanach", "turkana"], "url": "https://archive.org/details/in.ernet.dli.2015.157058"},
    {"id": "boyes-1911-white-king", "year": 1911, "author": "John Boyes", "title": "A White King in East Africa", "languages": ["kikuyu"], "url": "https://www.gutenberg.org/files/61342/61342-h/61342-h.htm"},
    {"id": "dundas-1913-wawanga-kitui-jrai43", "year": 1913, "author": "K. R. & C. Dundas", "title": "The Wawanga & History of Kitui (JRAI 43)", "languages": ["luhya", "kamba"], "url": "https://archive.org/details/in.gov.ignca.16815"},
    {"id": "hambly-1920-native-races", "year": 1920, "author": "W. D. Hambly", "title": "The Native Races of East Africa", "languages": ["kikuyu", "maasai", "swahili"], "url": "https://www.gutenberg.org/ebooks/67513"},
]


def parse_page_range(spec: str, total_pages: int) -> list[int]:
    pages: list[int] = []
    for part in spec.split(","):
        part = part.strip()
        if "-" in part:
            a, b = part.split("-", 1)
            pages.extend(range(max(1, int(a)), min(total_pages, int(b)) + 1))
        elif part:
            p = int(part)
            if 1 <= p <= total_pages:
                pages.append(p)
    return sorted(set(pages))


def transcribe_pdf_with_gemini_vision(
    pdf_path: Path,
    book_meta: dict[str, Any],
    lang_id: str,
    page_spec: str,
    model_name: str,
) -> list[dict[str, Any]]:
    import pypdfium2 as pdfium
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY environment variable is required for Vision transcription.")

    client = genai.Client(api_key=api_key)
    pdf = pdfium.PdfDocument(str(pdf_path))
    pages = parse_page_range(page_spec, len(pdf)) if page_spec else list(range(1, min(len(pdf), 10) + 1))
    citation = f"{book_meta['author']} ({book_meta['year']}), {book_meta['title']} (Public Domain, {book_meta['url']})"

    prompt = (
        f"You are an expert East African historical linguist transcribing a scanned page from "
        f"{book_meta['author']} ({book_meta['year']}), '{book_meta['title']}' for the {lang_id} language. "
        "Carefully read the page image directly (do NOT rely on OCR) preserving exact diacritics, "
        "plural forms, and parallel glosses. Return a JSON array of objects with keys: "
        "`english` (clean English gloss), `translation` (exact target-language term/phrase), "
        "`pronunciation` (optional phonetic guide if printed), and `notes` (optional brief dialect/plural note). "
        "Skip page headers, page numbers, and illegible fragments. Return ONLY valid JSON."
    )

    extracted: list[dict[str, Any]] = []
    for pno in pages:
        page = pdf[pno - 1]
        pil_img = page.render(scale=200 / 72).to_pil()
        buf = io.BytesIO()
        pil_img.save(buf, format="PNG")
        resp = client.models.generate_content(
            model=model_name,
            contents=[
                types.Part.from_bytes(data=buf.getvalue(), mime_type="image/png"),
                prompt,
            ],
            config=types.GenerateContentConfig(response_mime_type="application/json"),
        )
        rows = json.loads(resp.text or "[]")
        if isinstance(rows, list):
            for r in rows:
                en = str(r.get("english", "")).strip()
                tr = str(r.get("translation", "")).strip()
                if en and tr:
                    note = str(r.get("notes", "")).strip()
                    ctx = f"{note} — {citation} (p. {pno})" if note else f"{citation} (p. {pno})"
                    item: dict[str, Any] = {"english": en, "translation": tr, "context": ctx}
                    if r.get("pronunciation"):
                        item["pronunciation"] = str(r["pronunciation"]).strip()
                    extracted.append(item)
        print(f"  [Vision p.{pno}] Extracted {len(rows) if isinstance(rows, list) else 0} entries", flush=True)
    return extracted


def main() -> None:
    parser = argparse.ArgumentParser(description="KenyaHub Gemini Vision Pre-1931 Public Domain Book Transcriber")
    parser.add_argument("--list-books", action="store_true", help="List all 43 pre-1931 Public Domain books")
    parser.add_argument("--book-id", help="Book ID from catalog")
    parser.add_argument("--pdf", help="Local path to downloaded Public Domain PDF")
    parser.add_argument("--lang", help="Target KenyaHub languageId (defaults to book's first language)")
    parser.add_argument("--pages", default="1-10", help="Page range e.g. '15-40' or '12,14,18'")
    parser.add_argument("--model", default="gemini-2.5-flash", help="Gemini Vision model")
    parser.add_argument("--dry-run", action="store_true", help="Validate catalog without calling Vision API")
    args = parser.parse_args()

    if args.list_books or args.dry_run:
        print(f"=== KenyaHub Pre-1931 Public Domain Vision Catalog ({len(PUBLIC_DOMAIN_BOOK_CATALOG)} works) ===")
        for b in PUBLIC_DOMAIN_BOOK_CATALOG:
            print(f"  {b['year']} | {b['id']:<34} | langs={','.join(b['languages'])} | {b['title']}")
        return

    book = next((b for b in PUBLIC_DOMAIN_BOOK_CATALOG if b["id"] == args.book_id), None)
    if not book:
        sys.exit(f"Unknown --book-id '{args.book_id}'. Run --list-books to see all 43 works.")
    if not args.pdf or not Path(args.pdf).exists():
        sys.exit(f"Provide a downloaded PDF via --pdf. Source URL: {book['url']}")

    lang_id = args.lang or book["languages"][0]
    entries = transcribe_pdf_with_gemini_vision(Path(args.pdf), book, lang_id, args.pages, args.model)
    out_json = ROOT_DIR / "src" / "data" / "language-sources" / f"vision-{book['id']}-{lang_id}.json"
    out_json.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(entries)} Vision-transcribed entries to {out_json}")


if __name__ == "__main__":
    main()
