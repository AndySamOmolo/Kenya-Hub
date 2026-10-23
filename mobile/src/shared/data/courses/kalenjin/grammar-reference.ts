// ============================================================
// Kalenjin (Nandi / Kipsigis / Pokot / Sabaot) Grammar Reference Guide
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folklore",
// van Otterloo (1979), Rottland (1982), and Gerrit J. Dimmendaal (1988) Proto-Nilotic
// ============================================================

export interface KalenjinGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kalenjin: string; english: string; explanation?: string }[];
}

export const KALENJIN_GRAMMAR_SECTIONS: KalenjinGrammarSection[] = [
  {
    id: "kalenjin-primary-secondary-nouns",
    title: "Primary (Indefinite) vs. Secondary (Definite Suffix) Noun Forms & Dialectal Unity",
    summary: "Kalenjin nouns inflect via suffixed definite articles (-it, -et, -ta, -to in singular; -ik, -ek, -ka in plural) rather than Bantu-style prefixes.",
    content: `As documented in A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folklore*, Rottland (1982), and van Otterloo (1979):
1. **Primary (Indefinite) vs. Secondary (Definite) Noun Suffixes**:
   - Southern Nilotic (Kalenjin) nouns take suffixed determiners for specificity:
   - **chii → chiito** (a person → the person); plural **piich → piik** (people → the people).
   - **tany → teta** (an ox/cow → the cow); plural **tuka / tuga** (the cattle).
   - **lakwa → lakwet** (a child → the child); plural **lagok** (the children).
   - **ket → keetit** (a tree → the tree); plural **keetik** (the trees).
   - **peei → beek** (water → the water, plural mass noun in *-k*).
2. **Cross-Dialectal Correspondences (van Otterloo 1979 & Rottland 1982)**:
   - Core vocabulary is shared across **Nandi, Kipsigis, Keiyo, Tugen, Terik, Sabaot, Marakwet (Endo), Cherang'any, Pokot, and Okiek**: e.g., *metit* (head), *koong'* (eye), *iitiit* (ear), *koot* (mouth), *korotiik* (blood), *maat* (fire), *Asiis / Asista* (sun).`,
    examples: [
      { kalenjin: "chii → chiito (sg.) | piich → piik (pl.)", english: "a person → the person | people → the people", explanation: "Primary indefinite vs. secondary definite suffixation" },
      { kalenjin: "tany → teta (sg.) | tuga (pl.)", english: "a cow/ox → the cow | the cattle", explanation: "Hollis (1909) pastoral noun declension" },
      { kalenjin: "beek • chego • mursik • kimyet", english: "water • fresh milk • fermented milk • cornmeal (ugali)", explanation: "Mass nouns with plural definite suffix -k / -t" }
    ]
  },
  {
    id: "kalenjin-numerals-hollis-proverbs",
    title: "Kalenjin Numerals (1–100), VSO Syntax & Hollis (1909) Oral Literature",
    summary: "Kalenjin uses VSO word order, subject prefixes (a-, i-, ko-, ki-, o-), and a base-10 numeral system (akeenge to taman and pokol).",
    content: `From A. C. Hollis & Sir Charles Eliot (1909) *The Nandi: Their Language and Folklore*:
1. **Cardinal Numerals (1–10 & Higher)**:
   - **1**: *akeenge* • **2**: *aeng'* • **3**: *somok* • **4**: *ang'wan* • **5**: *muut*
   - **6**: *lo* • **7**: *tisap* • **8**: *sisiit* • **9**: *sokol* • **10**: *taman*
   - **40**: *artam* • **50**: *konom* • **100**: *pokol*.
2. **Verb-Initial (VSO) Syntax & Pronominal Prefixes**:
   - Verbs precede the subject noun in neutral clauses:
   - **Ii-e ngetuny lel** = *Bears (ii-e) the-lion (ngetuny) a-hyena (lel)* ("The lion bears a hyena", Hollis 1909 Proverb #2).
   - **Iput-i tany aku pa-kelek angwan** = *Falls (iput-i) the-ox (tany) though having-legs (pa-kelek) four (angwan)* ("The ox falls in spite of its four legs", Hollis 1909, p. 231).`,
    examples: [
      { kalenjin: "akeenge, aeng', somok, ang'wan, muut, lo, tisap, sisiit, sokol, taman", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Kalenjin cardinal numerals 1–10" },
      { kalenjin: "Ii-e ngetuny lel.", english: "The lion bears a hyena.", explanation: "Hollis & Eliot (1909, p. 152, Proverb #2)" },
      { kalenjin: "Iput-i tany aku pa-kelek angwan.", english: "The ox falls in spite of its four legs.", explanation: "Hollis & Eliot (1909, p. 231)" }
    ]
  }
];
