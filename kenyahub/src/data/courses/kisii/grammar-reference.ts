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
    content: `As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 50–51, 86, 89–91 under *Kossova*), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, pp. 902–929 under *Igizii* & *Comparative Study of the Bantu Languages*, 1919, Vol. I, pp. 73–85 & Vol. II, pp. 24–25, 497–498 under *7. Ki-guzii & 7a. Ki-koria*), and modern Ekegusii linguistics (JE.42):
1. **Contrastive Seven-Vowel Inventory & Length**:
   - Ekegusii has seven vowel phonemes (/i, e, ɛ, a, ɔ, o, u/) and contrastive vowel length, where short vs. long vowels distinguish lexical meaning:
   - **bóra** (to miss) vs. **bóóra** (to say / tell).
2. **Consonant Realization & Prenasalization (Johnston 1919, Vol. I, pp. 73–85 & Vol. II, p. 498)**:
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
    content: `From C. W. Hobley (1902, pp. 50–51, 86, 89–91) and Sir Harry H. Johnston (1919, Vol. I, pp. 73–85, #7 Ki-guzii & #7a Ki-koria):
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
2. **Numeral System (1–100, Hobley 1902, p. 91 & Johnston 1919, Vol. I, p. 81)**:
   - **1–5**: *eyemo / -mo* (1), *ibere / -bere* (2), *isato / -sato* (3), *inye / -nye* (4), *isano / -tano* (5).
   - **6–8 (5 + n)**: *isano nemo* (6 = 5+1), *isano na ibere* (7 = 5+2), *isano na isato* (8 = 5+3).
   - **9–100**: *kianda* (9), *ikomi* (10), *emerongo ebere* (20), *emia / rigana* (100).`,
    examples: [
      { kisii: "omonto → abanto • egekombe → ebikombe • eng'ombe → chiombe • rigena → amagena", english: "person → people • cup → cups • cow → cows • stone → stones", explanation: "Singular and plural noun class pairings (Hobley 1902 & Johnston 1919)" },
      { kisii: "eyemo, ibere, isato, inye, isano, isano nemo, isano na ibere, isano na isato, kianda, ikomi", english: "1, 2, 3, 4, 5, 6 (5+1), 7 (5+2), 8 (5+3), 9, 10", explanation: "Ekegusii quinary-decimal cardinal numerals (Hobley 1902 & Johnston 1919)" },
      { kisii: "Engoro (Erioba) • omote → emete • amache • omorero", english: "God (the Sun) • tree → trees • water • fire", explanation: "Core Kossova/Igizii lexicon in Hobley (1902) & Johnston (1902, 1919)" }
    ]
   },
  {
    id: "kisii-johnston-1922-verb-paradigm",
    title: "Complete 15-Part Verb Paradigm of -rora ('See') in #7 Ki-guzii & #7a Ki-koria (Johnston 1922, Vol. II, pp. 497–498)",
    summary: "Sir Harry Johnston (1922, Vol. II, pp. 497–498) sets out the full conjugation of Oku-rora ('to see') in Ki-guzii and Ki-koria, illustrating n+r → nd, intervocalic r → z in the preterite (Ndozire), and Ti- / -ta- negation.",
    content: `In *A Comparative Study of the Bantu and Semi-Bantu Languages* (Vol. II, 1922, pp. 497–498), Sir Harry H. Johnston codifies the 15-part verbal paradigm of **Oku-rora** ("to see") for **#7 Ki-guzii** and **#7a Ki-koria**:
1. **Imperative & Infinitive**:
   - **Imperative**: 2s **Rora!** ("see!"), 2p **Rore!** ("see ye!" — no *-ni* suffix in the Nyanza Group); Negative Imperative: **O-ta-rora!** ("see not!").
   - **Infinitive**: **Oku-rora** ("to see"); Negative Infinitive: **Oku-ta-rora** ("not to see").
2. **Affirmative Present, Preterite, Pluperfect & Future Tenses**:
   - **Aorist Present**: 1s **N-dora** ("I see", with *n + r → nd*), 2s **O-rora**, 3s **A-rora**, 1p **Tu-rora**, 2p **Mu-rora**, 3p **Ba-rora** (also **N-a-rora, W-a-rora**).
   - **Imperfect / Literal Present**: **Ni-n-dora** ("I am seeing"), **N-o-rora** ("thou art seeing"); Relative/Participial: **N-duku-rora** ("I who am seeing"), **O-ruku-rora** ("thou who art seeing").
   - **Preterite (*-ire* with *r → z*)**: **Ndozire** (for *N-dorire*, "I saw"), **O-rozire** ("thou sawest").
   - **Imperfect Past**: **N-dozire-ge** ("I was seeing").
   - **Pluperfect / Distant Past & Habitual**: **Ṅ-ka-rora** ("I did see / had seen"), **Ṅ-a-rora** ("I used to see").
   - **Future Tenses**: **N-da-rora, O-ra-rora** ("I/thou shall see"); **N-di-rora, O-li-rora** ("I/thou shall be seeing").
3. **Subjunctive, Conditional, Negation & Derivative Extensions**:
   - **Subjunctive**: **N-dore** ("I may see"), **O-rore** ("thou mayest see").
   - **Conditional**: **Ṅ-ku-rozire** ("I might have seen"), **N-a-ku-rozire** ("I should see / have seen"), **N-a-ba-ni-n-dora** ("I should be seeing").
   - **Negative Conjugation (*Ti-* / *-ta-*)**: Present **Ti-n-dora** ("I see not"), **T-o-rora**, **T-a-rora**, **Ti-tu-rora**, **Ti-mu-rora**, **Ti-ba-rora**; Past **Ti-n-dozire** ("I have not seen"); Future **Ti-ndi-rora** ("I shall not see"); Relative Negative **N-ta-rora** ("I who see not"), **O-ta-rora**.
   - **Verbal Extensions**: Passive **-rorwa** ("to be seen"), Reflexive **Okw-i-rora** ("to see oneself"), Neuter/Stative **-roreka**, Applicative **-rorera**, Causative **-roria / -rorisia**, Reciprocal **-rorana**.
   - **Auxiliary 'To be'**: **Oku-ba, -li, -re, -du**.`,
    examples: [
      { kisii: "Rora! → Rore! | N-dora, O-rora, A-rora, Tu-rora, Mu-rora, Ba-rora | Ni-n-dora | N-duku-rora", english: "See! → See ye! | I, thou, he, we, ye, they see | I am seeing | I who am seeing", explanation: "Imperative & Present tenses with n+r → nd (Johnston 1922, Vol. II, pp. 497–498)" },
      { kisii: "Ndozire (N-dozire-ge) • Ṅ-ka-rora • N-da-rora / N-di-rora • Ṅ-ku-rozire", english: "I saw (I was seeing) • I had seen • I shall see / be seeing • I might have seen", explanation: "Preterite r → z mutation, Pluperfect, Future & Conditional (Johnston 1922, p. 498)" },
      { kisii: "O-ta-rora! • Ti-n-dora, T-o-rora, T-a-rora, Ti-tu-rora, Ti-mu-rora, Ti-ba-rora • Ti-n-dozire • N-ta-rora", english: "See not! | I, thou, he, we, ye, they see not | I have not seen | I who see not", explanation: "Negative conjugation in #7 Ki-guzii & #7a Ki-koria (Johnston 1922, p. 498)" }
    ]
  },
  {
    "id": "kisii-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Kisii (Ekegusii))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Kisii (Ekegusii).",
    "content": "1. **Archival & Open-Dataset Integration for Kisii (Ekegusii)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *o, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "kisii": "Ngotenga • Nangire",
        "english": "I dance • I come not",
        "explanation": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
      },
      {
        "kisii": "Emuamu • Aīya, Aiga",
        "english": "Black • Here",
        "explanation": "Igizii (Ekegusii) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 958–966)"
      }
    ]
  }
  ,
  {
    id: "kisii-hobley-1902-kossova-clans-grammar-lexicon",
    title: "C. W. Hobley (1902) Eastern Uganda: The 21 Kossova (Kisii) Clans & Chiefs, Kitoto's Kisii Origin, 6 Noun Plural Classes & Kossova Verb/Pronoun Paradigm",
    summary: "Hobley's 1902 survey (pp. 8–9, 51, 86, 89–91) records the earliest published list of 21 Kisii (Kossova) clans and chiefs, the November 1900 Mugusero embassy to Kisumu, the Kisii ancestry of Chief Kitoto in the Nyamoga clan, the 6 Kossova noun plural classes, and a 3-page vocabulary and sentence grammar.",
    content: `From C. W. Hobley (*Eastern Uganda: An Ethnological Survey*, Anthropological Institute Occasional Papers No. 1, London, 1902, pp. 8–9, 51, 86, 89–91):
1. **Northward Migration & the 21 Kossova (Kisii) Clans and Chiefs (pp. 8–9, 51)**:
   - **Chief Kitoto of the Kitoto Plain (pp. 8–9, 55)**: Hobley discovered that **Chief Kitoto** (head of the *Nyamoga* clan of Kanu/Kadibo), although wearing Nilotic ornaments and married to Ja-Luo wives, was a **pure-bred native of the Kisii (Kossova) nation** whose bands trekked northward along the narrow 10-mile lake corridor below the Nandi escarpment.
   - **All 21 Kossova (Kisii) Subdivisions & Chiefs (p. 51)**:
     1. **Ugirango** — *Yawanga* | 2. **Mukimusi** — *Kimaina* | 3. **Msasuri** — *Munari* | 4. **Magichana** — *Borura* | 5. **Manweni** — *Minyigo* | 6. **Mkanyimbo** — *Uturi, Mtaruki* | 7. **Nyaliwali** — *Yamombo* | 8. **Mowasi** — *Maina* | 9. **Umachogi** — *Kitubo* | 10. **Mukura** — *Maina, Ndieki* | 11. **Ukeiri** — *Mwesaba* | 12. **Wa Koma** — *Mwakwega* | 13. **Woyeki** — *Sianyo* | 14. **Mwachawi** — *Samevita* | 15. **Ukitaa** — *Morema* | 16. **Umwaliwa** — *Uroo* | 17. **Umulenda** — *Munyanja* | 18. **Mugika** — *Wato* | 19. **Yamugei** — *Sakawa* | 20. **Mugusero** — *Umbachi* (sent representatives to Kisumu in Nov. 1900 to ask for protection) | 21. **Matala** — *Siambe*.
2. **Six Noun Plural Classes of Bantu Kisii or Kossova (p. 86)**:
   - **Class I (*um- → aw-*)**: *umuntu → awantu* ('man/person → people').
   - **Class II (*o- → mi-*; *[m]u- → [m]i-*)**: *okuwoko → mikowoko* ('arm → arms'), *(m)umogwe → (m)imegwe* ('arrow → arrows').
   - **Class III (invariant in plural)**: *muriro* ('fire').
   - **Class IV (*iki- / ichi- → ivi-*)**: *ikisiri → ivisiri* ('axe → axes'), *ichiara → iviara* ('finger → fingers').
   - **Class V (*u- → ama-*; *li-/ili- → ma-*; *[li]ki- → mi-*; *[l]e- → ama-*)**: *uwusio → amasio* ('face'), *liliga → amaliga* ('tear'), *(li)kisimba → misimba* ('cat'), *(l)erino → amaino* ('ivory/tooth').
   - **Class VI (*e-/i- → chi-/achi-*; *e- → si-*)**: *imbandi → chimbandi* ('ground-nut'), *enjoka → chinjoka* ('snake'), *enzwi → sinzwi* ('fish').
3. **Kossova Pronouns, Numerals & Verb Sentences (pp. 89–91)**:
   - **Pronouns**: *ninchi* (I/me), *nururi* (thou), *nururio* (he), *nitwi* (we), *ninwi* (you), *embabu* (they); *wonzi, twenzi, vionzi* (all).
   - **Numerals**: *1 ejemo, 2 wa-wili/chi-wili, 3 wa-tatu/chi-tatu, 4 wa-nne/chi-nne, 5 tano, 6 tano na emo, 7 tano na eviri, 8 tano na etatu, 9 kienda, 10 ekumi, 11 ekumi na yemo, 20 makumiyawiri, 30 makumiyatatu, 40 makumiyanne, 50 makumiyatano, 100 emirongo ekumi*.
   - **Verbs & Sentences**: *ngochandi / sinkoja* ('I come / come not'), *kunyawandi / nanyaweti / njatinkunywa* ('I drink / drank / drank not'), *nkuliandi / tindalia* ('I eat / eat not'), *rogendandi / nagendeti* ('I go / went'), *namanyiti / tinkomanyi* ('I know / know not'), *nawaraleti? — inchitinkorora* ('can you see me? — no, I cannot').`,
    examples: [
      { kisii: "Ugirango (Yawanga) • Magichana (Borura) • Umachogi (Kitubo) • Mukura (Maina, Ndieki) • Yamugei (Sakawa) • Mugusero (Umbachi)", english: "Major Kisii (Kossova) clans and their 1902 chiefs recorded by C. W. Hobley", explanation: "Hobley (1902, Ch. V § 1, p. 51)" },
      { kisii: "umuntu → awantu • okuwoko → mikowoko • ikisiri → ivisiri • uwusio → amasio • enjoka → chinjoka • enzwi → sinzwi", english: "person → people • arm → arms • axe → axes • face → faces • snake → snakes • fish → fishes", explanation: "Hobley's (1902, p. 86) 6 Noun Plural Classes of Kossova/Kisii" },
      { kisii: "ngochandi / sinkoja • nkuliandi / tindalia • namanyiti / tinkomanyi • nawaraleti? — inchitinkorora", english: "I come / I come not • I eat / I eat not • I know / I know not • Can you see me? — No, I cannot", explanation: "Affirmative vs. negative verb pairs in Hobley (1902, p. 91)" }
    ]
  }
];
