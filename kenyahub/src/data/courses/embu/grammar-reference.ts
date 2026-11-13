import type { GrammarSection } from "../types";

// ============================================================
// Embu (Kîembu / Kîmbeere) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const EMBU_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "embu-noun-classes-dahls-law",
    "title": "Kîembu & Kîmbeere Noun Classes, Bilabial Fricative (v) & Dahl’s Law (Johnston 1919 #11)",
    "summary": "Kîembu preserves 15+ Bantu noun classes, retains the voiced bilabial fricative v (ĩvia \"stone\", kũve \"to give\"), and applies Dahl’s Law voicing dissimilation.",
    "content": "As documented by Sir Harry H. Johnston in *A Comparative Study of the Bantu and Semi-Bantu Languages* (1919, Vol. I, pp. 98–112 & Vol. II, pp. 28–30, Language #11 Kikuyu, Embu, Cuka, Mwimbe, Emberre, Þeraka & Igωji) and C. W. Hobley (1910):\n- **Class 1/2 (*mũ- / a-*)**: *mundũ → andũ* (person → people), *mũrũme → arũme* (man → men), *mũka → aka* (woman → women).\n- **Class 3/4 (*mũ- / mĩ-*)**: *mũtĩ → mĩtĩ* (tree → trees), *mũtitũ → mĩtitũ* (forest/sacred grove).\n- **Class 5/6 (*ĩ-, rĩ- / ma-*)**: *ĩvia → mavia* (stone → stones), *riitho → maitho* (eye → eyes), *maĩ / manjĩ* (water).\n- **Class 12/13 (*ka- / tũ-* Diminutives)**: *kaana → tũana* (small child → small children).\n- **Dahl's Law**: Voiceless prefix *kũ-* or *kĩ-* voices to *gũ-* or *gĩ-* before a voiceless consonant (*gũthiĩ* 'to go', *gĩtĩ* 'stool/chair').",
    "examples": [
      {
        "embu": "mundũ ũyũ mwega → andũ aya ega",
        "english": "this good person → these good people",
        "explanation": "Class 1/2 concord in Kîembu (Johnston 1919 #11)"
      },
      {
        "embu": "ĩvia (Kîembu) vs. ihiga (Gĩkũyũ)",
        "english": "stone",
        "explanation": "Retention of voiced fricative v in Kîembu/Kîmbeere"
      }
    ]
  },
  {
    "id": "embu-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Embu (Kĩembu))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Embu (Kĩembu).",
    "content": "1. **Archival & Open-Dataset Integration for Embu (Kĩembu)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "embu": "-īyā • -rūgāmā",
        "english": "To steal • To stand / stop",
        "explanation": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
      },
      {
        "embu": "-mēnyā • -ūragā",
        "english": "To know • To kill",
        "explanation": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Group C #11: Embu, Chuka, Mount Kenya Bantu, Vol. I, pp. 98–112)"
      }
    ]
  },
  {
    "id": "embu-johnston-1919-1922-group-c-11-embu-emberre",
    "title": "Sir Harry H. Johnston (1919–1922) Group C #11 Embu (E.), Emberre (Emb.) & Ndia (Nd.): Bilabial Fricative v (I-via / I-bia), 16-Class Concord Table (p. 111), Numerals, Pronouns & Noteworthy Roots (Vol. II, pp. 28–30)",
    "summary": "Complete line-by-line documentation of #11 Embu (E.), Emberre (Emb.), and Ndia (Nd.) in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I [1919], pp. 98–112, 788 & Vol. II [1922], pp. 28–30, 226, 261).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. 98–112, 788 & Vol. II [1922], pp. 28–30, 226, 261):\n1. **Embu (*E.*), Emberre (*Emb.*) & Ndia (*Nd.*) in Column 11 (Vol. I, pp. 98–112 & Vol. II, pp. 28–30)**:\n   - Recorded from manuscripts by **C. W. Hobley** (for *Embu, Cuka, Mwimbe*) and **E. B. Horne** (for *Emberre, Þeraka, Igωji, Meru*).\n   - **Phonological & Lexical Features**: Retains bilabial fricative **v / b** where Kabete Kikuyu has *h* (**I-via / I-bia ; ma-** 'stone', **M-biti** 'hyena', **-va / -ve** 'give'), uses **Kī-oṅgω ; i-oṅgω** ('head/skull') alongside *Mū-twe*, **M-būri** ('goat'), **N-jωka** ('snake'), **Mū-rūṅgu / Ṅ-gai** ('God'), **Ri-ūa** ('sun'), **M-weri** ('moon'), **M-būra** ('rain'), **Ma-ī** ('water'), and **M-waki** ('fire').",
    "examples": [
      {
        "embu": "E. (Embu), Emb. (Emberre), Nd. (Ndia): I-via / I-bia → ma-via (stone), M-biti (hyena), Kī-oṅgω (head), Mū-rūṅgu (God)",
        "english": "Characteristic Embu & Emberre forms in Johnston's Column 11",
        "explanation": "Johnston (1919, Vol. I, pp. 98–106 & 1922, Vol. II, pp. 28–30)"
      },
      {
        "embu": "-mwe (1), -gīrī (2), -þatū (3), -nya (4), -þanω (5), -þanþatū (6), Mū-gwanja (7), I-nyanya (8), Kenda (9), I-kūmi (10), I-gana (100)",
        "english": "Cardinal numerals 1–100 in #11 Embu & Emberre",
        "explanation": "Johnston (1919, Vol. I, p. 107 #11)"
      }
    ]
  }
];
