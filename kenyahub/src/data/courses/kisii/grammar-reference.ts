// ============================================================
// Kisii (Ekegusii) Grammar Reference Guide
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Kossova / Kisii vocabulary & numerals)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Igizii / Kisii comparative table)
// 3. Sir Harry H. Johnston (1919–1922) "A Comparative Study of the Bantu and Semi-Bantu Languages" (#7 Ki-guzii & #7a Ki-koria)
// 4. Wikipedia Gusii_language
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
    title: "Seven-Vowel System, Bilabial Fricative /β/ & Historical Kossova / Igizii / Ki-guzii Records (Hobley 1902 & Johnston 1902, 1919)",
    summary: "Ekegusii contrasts 7 vowel qualities with phonemic vowel length (bóra 'to miss' vs. bóóra 'to say'), realizes orthographic b as [β] and g as [ɣ], and is documented historically in Hobley (1902) and Johnston (1902, 1919).",
    content: `As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 50–51, 61–79 under *Kossova*), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, pp. 902–929 under *Igizii* & *Comparative Study of the Bantu Languages*, 1919, Vol. I, pp. 56–60 under *7. Ki-guzii*), and modern Ekegusii linguistics (JE.42):
1. **Contrastive Seven-Vowel Inventory & Length**:
   - Ekegusii has seven vowel phonemes (/i, e, ɛ, a, ɔ, o, u/) and contrastive vowel length, where short vs. long vowels distinguish lexical meaning:
   - **bóra** (to miss) vs. **bóóra** (to say / tell).
2. **Consonant Realization & Prenasalization (Johnston 1919, p. 59)**:
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
    title: "Ekegusii Noun Classes (Omo-/Aba-, Ege-/Ebi-, Ri-/Ama-, E-/Chi-), Dahl's Law & Quinary-Decimal Numerals (Hobley 1902 & Johnston 1919)",
    summary: "Ekegusii nouns inflect via paired class prefixes with augment vowels (o-, a-, e-, ri-), exhibit Dahl's Law voicing (eke- vs. ege-, oko- vs. ogo-), and count from 1 to 100 using a hybrid base-5/base-10 numeral system.",
    content: `From C. W. Hobley (1902, pp. 50–51) and Sir Harry H. Johnston (1919, Vol. I, pp. 56–60, #7 Ki-guzii):
1. **Principal Noun Classes & Dahl's Law Voicing**:
   - **Class 1/2 (*omo- / aba-*)**: *omonto → abanto* (person → people), *omosacha → abasacha* (man → men), *omokungu → abakungu* (woman/wife → women), *omwana → abana* (child → children), *omogaka → abagaka* (elder → elders).
   - **Class 3/4 (*omo- / eme-*)**: *omotwe → emetwe* (head → heads), *omote → emete* (tree → trees), *omorro / omorero* (fire).
   - **Class 5/6 (*ri- / ama-*)**: *riiso → amaiso* (eye → eyes), *rigena → amagena* (stone → stones), *riino → amaino* (tooth → teeth), *amache* (water), *amabere* (milk), *amanyinga* (blood).
   - **Class 7/8 (*eke- [ege-] / ebi-*)**: By Dahl's Law, *eke-* voices to **ege-** before a voiceless consonant: *egekombe → ebikombe* (cup → cups), *ekerogo → ebirogo* (chair/stool → chairs), *Ekegusii* (the Gusii language).
   - **Class 9/10 (*e- [en-] / chi- [chin-]*)**: *eng'ombe → chiombe* (cow → cows), *embori → chimbori* (goat → goats), *enyomba → chinyomba* (house → houses), *enchera → chinchera* (road/path).
   - **Class 11/10 (*oro- / chin-*)**: *oromeme → chimeme* (tongue → tongues), *oroche → chinche* (river → rivers).
   - **Class 12/13 (*aka- [aga-] / ebi-*)**: Diminutives (*akana → ebiana*).
   - **Class 14 (*obo- / obw-*)**: *obwoba* (fear), *obonto* (humanity), *obotuko* (night).
   - **Class 15 (*oko- [ogo-]*)**: Infinitives (*okorora* 'to see', *okomanya* 'to know', *ogokama* 'to milk', *ogotara* 'to walk').
2. **Numeral System (1–100, Hobley 1902, p. 69 & Johnston 1919, p. 59)**:
   - **1–5**: *eyemo / -mo* (1), *ibere / -bere* (2), *isato / -sato* (3), *inye / -nye* (4), *isano / -tano* (5).
   - **6–8 (5 + n)**: *isano nemo* (6 = 5+1), *isano na ibere* (7 = 5+2), *isano na isato* (8 = 5+3).
   - **9–100**: *kianda* (9), *ikomi* (10), *emerongo ebere* (20), *emia / rigana* (100).`,
    examples: [
      { kisii: "omonto → abanto • egekombe → ebikombe • eng'ombe → chiombe • rigena → amagena", english: "person → people • cup → cups • cow → cows • stone → stones", explanation: "Singular and plural noun class pairings (Hobley 1902 & Johnston 1919)" },
      { kisii: "eyemo, ibere, isato, inye, isano, isano nemo, isano na ibere, isano na isato, kianda, ikomi", english: "1, 2, 3, 4, 5, 6 (5+1), 7 (5+2), 8 (5+3), 9, 10", explanation: "Ekegusii quinary-decimal cardinal numerals (Hobley 1902 & Johnston 1919)" },
      { kisii: "Engoro (Erioba) • omote → emete • amache • omorero", english: "God (the Sun) • tree → trees • water • fire", explanation: "Core Kossova/Igizii lexicon in Hobley (1902) & Johnston (1902, 1919)" }
    ]
  }
];
