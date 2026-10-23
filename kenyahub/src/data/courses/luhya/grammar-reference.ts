// ============================================================
// Luhya (Oluluyia) Grammar Reference Guide
// Based on Open-Web Comparative Linguistic Data (Wikipedia Luhya_language & Wiktionary Bantu Swadesh Lists — Zone J30)
// ============================================================

export interface LuhyaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { luhya: string; english: string; explanation?: string }[];
}

export const LUHYA_GRAMMAR_SECTIONS: LuhyaGrammarSection[] = [
  {
    id: "luhya-dialects-comparison",
    title: "The Luhya (Zone J30) Dialect Continuum & Core Mutual Intelligibility",
    summary: "Oluluyia comprises a continuum of Western Kenyan Bantu varieties (including Wanga, Kisa, Marama, Tsotso, Kabras, Nyole, Logoli, and Bukusu) sharing core Bantu noun-class morphology.",
    content: `As documented in comparative Bantu linguistics (Guthrie Zone JE.32 / J30):
1. **Core Central Varieties & Sister Languages**:
   - Central Luhya varieties (*OluWanga, OluShisa/Kisa, OluMarama, OluTsotso, LuKabarasi, LuNyala*) share high mutual intelligibility, while northern *Lubukusu* (Masaba cluster) and southern *Lulogooli* (Maragoli) display distinctive consonant correspondences.
2. **Cross-Dialect Lexical Correspondences**:
   - **1st Person Singular ("I / me")**: *eshie* (Kisa), *esie* (Wanga), *ise* (Nyole/Bukusu), *nzi / inze* (Logoli).
   - **Words / Matters**: *amakhuwa* (Kisa, Wanga, Nyole) vs. *makuva* (Logoli).
   - **Chair**: *eshifumbi* (Kisa), *eshisala* (Wanga), *indebe* (Nyole), *indeve* (Logoli).
   - **Head**: *omurwe / om'rwe* (Kisa, Nyole, Wanga) vs. *mutwi* (Logoli).`,
    examples: [
      { luhya: "esie / eshie / ise / inze", english: "I / me (1st person singular)", explanation: "Wanga/Kisa/Nyole/Logoli pronominal correspondence" },
      { luhya: "amakhuwa (Wanga/Kisa) vs. makuva (Logoli)", english: "words / matters", explanation: "Regular kh ~ v consonant correspondence across Luhya dialects" },
      { luhya: "omurwe (Wanga/Kisa/Nyole) vs. mutwi (Logoli)", english: "head", explanation: "Retention of preprefix o- in central Luhya" }
    ]
  },
  {
    id: "luhya-noun-classes-infinitives",
    title: "Preprefixal Noun Classes (Omu-/Aba-, Eshi-/Ebi-, Li-/Ama-) & Okhu- Infinitives",
    summary: "Oluluyia retains Bantu preprefixes (augment vowels o-, a-, e-, i-) on nouns and forms verbal infinitives with the prefix okhu-.",
    content: `Key morphological structures visible across the Zone J30 Luhya Swadesh lexicon:
1. **Preprefixal Noun Classes**:
   - **Class 1/2 (*omu- / aba-*)**: *omundu → abandu* (person → people), *omukhasi → abakhasi* (woman → women), *omusatsa → abasatsa* (man → men), *omwana → abana* (child → children).
   - **Class 3/4 (*omu- / emi-*)**: *omurwe → emirwe* (head → heads), *omukhono → emikhono* (hand/arm → hands), *omuliro* (fire).
   - **Class 5/6 (*li- / ama-*)**: *libuyu → amabuyu* (egg → eggs), *likumba → amakumba* (bone → bones), *libale / lichina* (stone), *amaatsi* (water).
   - **Class 7/8 (*eshi- / ebi-*)**: *eshiamo → ebiamo* (fruit → fruits), *eshimuli → ebimuli* (flower → flowers), *eshirwi* (ear).
   - **Class 9/10 (*in- / tsin-*)**: *imbwa → tsimbwa* (dog → dogs), *inzokha → tsinzokha* (snake → snakes), *inyeni* (fish).
   - **Class 11/10 (*olu- / tsin-*)**: *olulimi → tsinzimi* (tongue → tongues), *olukulu* (mountain).
2. **Verbal Infinitives (*okhu-* / *okhw-*)**:
   - Verbs take the Class 15 infinitive prefix **okhu-** (becoming **okhw-** before vowel-initial stems):
   - *okhunywa* (to drink), *okhuliira* (to eat), *okhulola* (to see), *okhuulira* (to hear), *okhumanya* (to know), *okhuchenda* (to walk), *okhwitsa* (to come), *okhwimba* (to sing).`,
    examples: [
      { luhya: "omundu → abandu • omwana → abana", english: "person → people • child → children", explanation: "Class 1/2 human noun prefixation omu-/aba-" },
      { luhya: "eshiamo → ebiamo • eshimuli → ebimuli", english: "fruit → fruits • flower → flowers", explanation: "Class 7/8 eshi-/ebi- noun prefixation" },
      { luhya: "okhunywa, okhuliira, okhulola, okhumanya", english: "to drink, to eat, to see, to know", explanation: "Class 15 infinitive prefix okhu-" }
    ]
  }
];
