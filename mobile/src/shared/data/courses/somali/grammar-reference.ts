// ============================================================
// Somali (Af-Soomaali) Grammar Reference Guide
// Grounded in Wikipedia Somali_grammar, Wiktionary 207-Word Somali Swadesh List,
// and M. Lionel Bender (2020) Proto-East Cushitic Comparative Linguistics
// ============================================================

export interface SomaliGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { somali: string; english: string; explanation?: string }[];
}

export const SOMALI_GRAMMAR_SECTIONS: SomaliGrammarSection[] = [
  {
    id: "somali-articles-gender-case",
    title: "Suffixed Definite Articles (-ka / -ta), Polar Gender & Nominative Case (-ku / -tu)",
    summary: "Af-Soomaali is an East Cushitic language where grammatical gender (Masculine -ka vs. Feminine -ta) and grammatical case (Absolutive -a vs. Nominative -u) are marked by suffixed articles.",
    content: `As documented in Wikipedia's *Somali grammar* and M. Lionel Bender (2020):
1. **Suffixed Definite Articles & Grammatical Gender**:
   - Masculine singular nouns take the definite suffix **-ka** (assimilating to **-ga, -ha, -a** after gutturals/vowels): **nin → ninka** (man → the man), **libaax → libaaxa** (lion → the lion), **guriga** (the house).
   - Feminine singular nouns take **-ta** (assimilating to **-da, -sha**): **naag → naagta** (woman → the woman), **shimbir → shimbirta** (bird → the bird), **magaalada** (the town).
   - **Gender Polarity in Plurals**: Many nouns invert their gender agreement in the plural!
2. **Absolutive vs. Nominative Case Marking**:
   - **Absolutive (citation/object form)** ends in **-a**: *nin-ka* (the man), *naag-ta* (the woman).
   - **Nominative (non-focused subject form)** replaces *-a* with **-u**: *nin-ku* (the man [subj.]), *naag-tu* (the woman [subj.]).`,
    examples: [
      { somali: "nin → ninka (abs.) / ninku (nom.)", english: "man → the man (object/citation vs. subject)", explanation: "Masculine article -ka and nominative subject -ku" },
      { somali: "naag → naagta (abs.) / naagtu (nom.)", english: "woman → the woman (object/citation vs. subject)", explanation: "Feminine article -ta and nominative subject -tu" },
      { somali: "biyo (biyaha) • caano (caanaha) • geel (geela)", english: "water • milk • camels", explanation: "Core Cushitic pastoral nouns" }
    ]
  },
  {
    id: "somali-focus-pronouns-numerals",
    title: "Mandatory Sentence Focus Markers (waa, baa, ayaa, waxaa), Dual Pronouns & Cushitic Numerals",
    summary: "Every declarative Somali sentence requires a focus particle (waa for verbs; baa, ayaa, or waxaa for nouns) and pairs emphatic independent pronouns with short verbal clitics.",
    content: `From Wikipedia's *Somali grammar*, Wiktionary's *Somali Swadesh list*, and Bender (2020):
1. **Focus Particles (*waa, baa, ayaa, waxaa*)**:
   - **waa**: Focuses the predicate/verb (*Waa macallin* = He is a teacher; *Waan imanayaa* = I am coming).
   - **baa / ayaa**: Focuses the preceding noun phrase (*Nin baa yimid* = A MAN came).
   - **waxaa**: Focuses a post-verbal noun phrase.
2. **Emphatic Independent vs. Short Subject Clitic Pronouns**:
   - 1s **aniga | aan**, 2s **adiga | aad**, 3s.m **isaga | uu**, 3s.f **iyada | ay**, 1p.incl **innaga | aynu**, 1p.excl **annaga | aannu**, 2p **idinka | aad**, 3p **iyaga | ay**.
3. **East Cushitic Cardinal Numerals (1–10, 100, 1000)**:
   - **1**: *kow*, **2**: *laba*, **3**: *saddex*, **4**: *afar*, **5**: *shan*, **6**: *lix*, **7**: *todoba*, **8**: *sideed*, **9**: *sagaal*, **10**: *toban*, **100**: *boqol*, **1000**: *kun*.`,
    examples: [
      { somali: "aniga (aan) • adiga (aad) • isaga (uu) • iyada (ay)", english: "I • you (sg.) • he • she", explanation: "Emphatic independent vs. short subject clitic pronouns" },
      { somali: "kow, laba, saddex, afar, shan, lix, todoba, sideed, sagaal, toban", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Af-Soomaali cardinal numerals (Bender 2020)" },
      { somali: "Far keliya fool ma dhaqdo.", english: "A single finger cannot wash a face.", explanation: "Classical alliterative Somali proverb (Maahmaah)" }
    ]
  }
];
