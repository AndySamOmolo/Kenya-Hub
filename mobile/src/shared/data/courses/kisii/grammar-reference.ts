// ============================================================
// Kisii (Ekegusii) Grammar Reference Guide
// Based on Open-Web Linguistic Data (Wikipedia Gusii_language)
// ============================================================

export interface KisiiGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kisii: string; english: string; explanation?: string }[];
}

export const KISII_GRAMMAR_SECTIONS: KisiiGrammarSection[] = [
  {
    id: "kisii-phonology-dialects",
    title: "Seven-Vowel System, Bilabial Fricative /β/ & Rogoro–Maate Dialects",
    summary: "Ekegusii contrasts 7 vowel qualities with phonemic vowel length (bóra 'to miss' vs. bóóra 'to say') and comprises the Rogoro (upperside) and Maate (lowerside) dialects.",
    content: `As documented in the linguistic overview of Ekegusii (Guthrie code JE.42):
1. **Contrastive Seven-Vowel Inventory & Length**:
   - Ekegusii has seven vowel phonemes (/i, e, ɛ, a, ɔ, o, u/) and contrastive vowel length, where short vs. long vowels distinguish lexical meaning:
   - **bóra** (to miss) vs. **bóóra** (to say / tell).
2. **Consonant Realization & Prenasalization**:
   - Orthographic **b** represents a voiced bilabial fricative [β] rather than a plosive stop, as heard in *baba* (mother), *baminto* (our people), and *abana* (children).
   - Morphophonological nasal combinations yield prenasalized stops: *n+r → [ⁿd]*, *n+b → [ᵐb]*, *n+g → [ᵑɡ]*, *n+k → [ᵑk]*, *n+c → [ⁿtʃ]*.
3. **Rogoro & Maate Dialects**:
   - **Rogoro ("Upperside/Hillside")**: Standard northern/central dialect.
   - **Maate ("Lowerside")**: Spoken in Tabaka and South Mugirango (Bogirango), differing in the articulation of /t/ and select vocabulary (e.g., cat: *ekemoni* in Rogoro vs. *ekebusi* in Maate; sandals: *chisiripasi* in Rogoro vs. *chitaratara* from *-tara* 'walk' in Maate).`,
    examples: [
      { kisii: "bóra vs. bóóra", english: "to miss vs. to say", explanation: "Minimal pair distinguished solely by vowel length" },
      { kisii: "baba, baminto, abana", english: "mother, our people, children", explanation: "Realization of orthographic b as bilabial fricative [β]" },
      { kisii: "ekemoni (Rogoro) vs. ekebusi (Maate)", english: "cat", explanation: "Dialectal lexical contrast between Rogoro and Maate" }
    ]
  },
  {
    id: "kisii-noun-classes-numerals",
    title: "Ekegusii Noun Classes (Omo-/Aba-, Ege-/Ebi-, Ri-/Ama-) & Quinary-Decimal Numerals",
    summary: "Ekegusii nouns inflect via paired class prefixes and count from 1 to 20 using a hybrid base-5/base-10 numeral system.",
    content: `Core morphological paradigms of Ekegusii:
1. **Principal Noun Classes**:
   - **Class 1/2 (*omo- / aba-*)**: *omonto → abanto* (person → people), *omoiseke → abaiseke* (girl → girls).
   - **Class 3/4 (*omo- / eme-*)**: *omotwe → emetwe* (head → heads).
   - **Class 5/6 (*ri- / ama-*)**: *ritunda → amatunda* (fruit → fruits), *amabere* (milk), *amache* (water).
   - **Class 7/8 (*ege- / ebi-* or *eke- / ebi-*)**: *egekombe → ebikombe* (cup → cups), *Ekegusii* (the Gusii language).
   - **Class 9/10 (*e- / chi-*)**: *eng'ombe → chiombe* (cow → cows).
   - **Class 14 (*obo- / obw-*)**: *obwoba* (cowardice/fear), *obonto* (humanity/ubuntu), *obotuko* (night).
2. **Numeral System (1–20)**:
   - **1–5**: *eyemo* (1), *ibere* (2), *isato* (3), *inye* (4), *isano* (5).
   - **6–8 (5 + n)**: *isano nemo* (6 = 5+1), *isano na ibere* (7 = 5+2), *isano na isato* (8 = 5+3).
   - **9–10**: *kianda* (9), *ikomi* (10).
   - **11–20**: *ikomi nemo* (11), *ikomi na ibere* (12), ..., *emerongo ebere* (20).`,
    examples: [
      { kisii: "omonto → abanto • egekombe → ebikombe • eng'ombe → chiombe", english: "person → people • cup → cups • cow → cows", explanation: "Singular and plural noun class pairings" },
      { kisii: "eyemo, ibere, isato, inye, isano, isano nemo, kianda, ikomi", english: "1, 2, 3, 4, 5, 6 (5+1), 9, 10", explanation: "Ekegusii cardinal numerals" }
    ]
  }
];
