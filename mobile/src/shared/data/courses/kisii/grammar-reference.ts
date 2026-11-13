export interface KisiiGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kisii: string; english: string; explanation?: string }[];
}

export const KISII_GRAMMAR_SECTIONS: KisiiGrammarSection[] = [
  {
    "id": "kisii-phonology-dialects",
    "title": "Seven-Vowel System, Bilabial Fricative /β/ & Historical Kossova / Igizii / Ki-guzii Records (Hobley 1902 & Johnston 1902, 1919)",
    "summary": "Ekegusii contrasts 7 vowel qualities with phonemic vowel length (bóra 'to miss' vs. bóóra 'to say'), realizes orthographic b as [β] and g as [ɣ], and is documented historically in Hobley (1902) and Johnston (1902, 1919).",
    "content": "As documented in C. W. Hobley (*Eastern Uganda*, 1902, pp. 50–51, 86, 89–91 under *Kossova*), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, pp. 902–929 under *Igizii* & *Comparative Study of the Bantu Languages*, 1919, Vol. I, pp. 73–85 & Vol. II, pp. 24–25, 497–498 under *7. Ki-guzii & 7a. Ki-koria*), and modern Ekegusii linguistics (JE.42):\n1. **Contrastive Seven-Vowel Inventory & Length**:\n   - Ekegusii has seven vowel phonemes (/i, e, ɛ, a, ɔ, o, u/) and contrastive vowel length, where short vs. long vowels distinguish lexical meaning:\n   - **bóra** (to miss) vs. **bóóra** (to say / tell).\n2. **Consonant Realization & Prenasalization (Johnston 1919, Vol. I, pp. 73–85 & Vol. II, p. 498)**:\n   - Orthographic **b** represents a voiced bilabial fricative [β] rather than a plosive stop, as heard in *baba* (mother), *baminto* (our people), and *abana* (children).\n   - Morphophonological nasal combinations yield prenasalized stops: *n+r → [ⁿd]*, *n+b → [ᵐb]*, *n+g → [ᵑɡ]*, *n+k → [ᵑk]*, *n+c → [ⁿtʃ]*.\n3. **Rogoro & Maate Dialects**:\n   - **Rogoro (\"Upperside/Hillside\")**: Standard northern/central dialect.\n   - **Maate (\"Lowerside\")**: Spoken in Tabaka and South Mugirango (Bogirango), differing in the articulation of /t/ and select vocabulary (e.g., cat: *ekemoni* in Rogoro vs. *ekebusi* in Maate; sandals: *chisiripasi* in Rogoro vs. *chitaratara* from *-tara* 'walk' in Maate).",
    "examples": [
      {
        "kisii": "bóra vs. bóóra",
        "english": "to miss vs. to say",
        "explanation": "Minimal pair distinguished solely by vowel length"
      },
      {
        "kisii": "baba, baminto, abana",
        "english": "mother, our people, children",
        "explanation": "Realization of orthographic b as bilabial fricative [β]"
      },
      {
        "kisii": "ekemoni (Rogoro) vs. ekebusi (Maate)",
        "english": "cat",
        "explanation": "Dialectal lexical contrast between Rogoro and Maate"
      }
    ]
  },
  {
    "id": "kisii-noun-classes-numerals",
    "title": "Ekegusii Noun Classes (Omo-/Aba-, Ege-/Ebi-, Ri-/Ama-, E-/Chi-), Dahl's Law & Quinary-Decimal Numerals (Hobley 1902 & Johnston 1919)",
    "summary": "Ekegusii nouns inflect via paired class prefixes with augment vowels (o-, a-, e-, ri-), exhibit Dahl's Law voicing (eke- vs. ege-, oko- vs. ogo-), and count from 1 to 100 using a hybrid base-5/base-10 numeral system.",
    "content": "From C. W. Hobley (1902, pp. 50–51, 86, 89–91) and Sir Harry H. Johnston (1919, Vol. I, pp. 73–85, #7 Ki-guzii & #7a Ki-koria):\n1. **Principal Noun Classes & Dahl's Law Voicing**:\n   - **Class 1/2 (*omo- / aba-*)**: *omonto → abanto* (person → people), *omosacha → abasacha* (man → men), *omokungu → abakungu* (woman/wife → women), *omwana → abana* (child → children), *omogaka → abagaka* (elder → elders).\n   - **Class 3/4 (*omo- / eme-*)**: *omotwe → emetwe* (head → heads), *omote → emete* (tree → trees), *omorro / omorero* (fire).\n   - **Class 5/6 (*ri- / ama-*)**: *riiso → amaiso* (eye → eyes), *rigena → amagena* (stone → stones), *riino → amaino* (tooth → teeth), *amache* (water), *amabere* (milk), *amanyinga* (blood).\n   - **Class 7/8 (*eke- [ege-] / ebi-*)**: By Dahl's Law, *eke-* voices to **ege-** before a voiceless consonant: *egekombe → ebikombe* (cup → cups), *ekerogo → ebirogo* (chair/stool → chairs), *Ekegusii* (the Gusii language).\n   - **Class 9/10 (*e- [en-] / chi- [chin-]*)**: *eng'ombe → chiombe* (cow → cows), *embori → chimbori* (goat → goats), *enyomba → chinyomba* (house → houses), *enchera → chinchera* (road/path).\n   - **Class 11/10 (*oro- / chin-*)**: *oromeme → chimeme* (tongue → tongues), *oroche → chinche* (river → rivers).\n   - **Class 12/13 (*aka- [aga-] / ebi-*)**: Diminutives (*akana → ebiana*).\n   - **Class 14 (*obo- / obw-*)**: *obwoba* (fear), *obonto* (humanity), *obotuko* (night).\n   - **Class 15 (*oko- [ogo-]*)**: Infinitives (*okorora* 'to see', *okomanya* 'to know', *ogokama* 'to milk', *ogotara* 'to walk').\n2. **Numeral System (1–100, Hobley 1902, p. 91 & Johnston 1919, Vol. I, p. 81)**:\n   - **1–5**: *eyemo / -mo* (1), *ibere / -bere* (2), *isato / -sato* (3), *inye / -nye* (4), *isano / -tano* (5).\n   - **6–8 (5 + n)**: *isano nemo* (6 = 5+1), *isano na ibere* (7 = 5+2), *isano na isato* (8 = 5+3).\n   - **9–100**: *kianda* (9), *ikomi* (10), *emerongo ebere* (20), *emia / rigana* (100).",
    "examples": [
      {
        "kisii": "omonto → abanto • egekombe → ebikombe • eng'ombe → chiombe • rigena → amagena",
        "english": "person → people • cup → cups • cow → cows • stone → stones",
        "explanation": "Singular and plural noun class pairings (Hobley 1902 & Johnston 1919)"
      },
      {
        "kisii": "eyemo, ibere, isato, inye, isano, isano nemo, isano na ibere, isano na isato, kianda, ikomi",
        "english": "1, 2, 3, 4, 5, 6 (5+1), 7 (5+2), 8 (5+3), 9, 10",
        "explanation": "Ekegusii quinary-decimal cardinal numerals (Hobley 1902 & Johnston 1919)"
      },
      {
        "kisii": "Engoro (Erioba) • omote → emete • amache • omorero",
        "english": "God (the Sun) • tree → trees • water • fire",
        "explanation": "Core Kossova/Igizii lexicon in Hobley (1902) & Johnston (1902, 1919)"
      }
    ]
  },
  {
    "id": "kisii-johnston-1922-verb-paradigm",
    "title": "Complete 15-Part Verb Paradigm of -rora ('See') in #7 Ki-guzii & #7a Ki-koria (Johnston 1922, Vol. II, pp. 497–498)",
    "summary": "Sir Harry Johnston (1922, Vol. II, pp. 497–498) sets out the full conjugation of Oku-rora ('to see') in Ki-guzii and Ki-koria, illustrating n+r → nd, intervocalic r → z in the preterite (Ndozire), and Ti- / -ta- negation.",
    "content": "In *A Comparative Study of the Bantu and Semi-Bantu Languages* (Vol. II, 1922, pp. 497–498), Sir Harry H. Johnston codifies the 15-part verbal paradigm of **Oku-rora** (\"to see\") for **#7 Ki-guzii** and **#7a Ki-koria**:\n1. **Imperative & Infinitive**:\n   - **Imperative**: 2s **Rora!** (\"see!\"), 2p **Rore!** (\"see ye!\" — no *-ni* suffix in the Nyanza Group); Negative Imperative: **O-ta-rora!** (\"see not!\").\n   - **Infinitive**: **Oku-rora** (\"to see\"); Negative Infinitive: **Oku-ta-rora** (\"not to see\").\n2. **Affirmative Present, Preterite, Pluperfect & Future Tenses**:\n   - **Aorist Present**: 1s **N-dora** (\"I see\", with *n + r → nd*), 2s **O-rora**, 3s **A-rora**, 1p **Tu-rora**, 2p **Mu-rora**, 3p **Ba-rora** (also **N-a-rora, W-a-rora**).\n   - **Imperfect / Literal Present**: **Ni-n-dora** (\"I am seeing\"), **N-o-rora** (\"thou art seeing\"); Relative/Participial: **N-duku-rora** (\"I who am seeing\"), **O-ruku-rora** (\"thou who art seeing\").\n   - **Preterite (*-ire* with *r → z*)**: **Ndozire** (for *N-dorire*, \"I saw\"), **O-rozire** (\"thou sawest\").\n   - **Imperfect Past**: **N-dozire-ge** (\"I was seeing\").\n   - **Pluperfect / Distant Past & Habitual**: **Ṅ-ka-rora** (\"I did see / had seen\"), **Ṅ-a-rora** (\"I used to see\").\n   - **Future Tenses**: **N-da-rora, O-ra-rora** (\"I/thou shall see\"); **N-di-rora, O-li-rora** (\"I/thou shall be seeing\").\n3. **Subjunctive, Conditional, Negation & Derivative Extensions**:\n   - **Subjunctive**: **N-dore** (\"I may see\"), **O-rore** (\"thou mayest see\").\n   - **Conditional**: **Ṅ-ku-rozire** (\"I might have seen\"), **N-a-ku-rozire** (\"I should see / have seen\"), **N-a-ba-ni-n-dora** (\"I should be seeing\").\n   - **Negative Conjugation (*Ti-* / *-ta-*)**: Present **Ti-n-dora** (\"I see not\"), **T-o-rora**, **T-a-rora**, **Ti-tu-rora**, **Ti-mu-rora**, **Ti-ba-rora**; Past **Ti-n-dozire** (\"I have not seen\"); Future **Ti-ndi-rora** (\"I shall not see\"); Relative Negative **N-ta-rora** (\"I who see not\"), **O-ta-rora**.\n   - **Verbal Extensions**: Passive **-rorwa** (\"to be seen\"), Reflexive **Okw-i-rora** (\"to see oneself\"), Neuter/Stative **-roreka**, Applicative **-rorera**, Causative **-roria / -rorisia**, Reciprocal **-rorana**.\n   - **Auxiliary 'To be'**: **Oku-ba, -li, -re, -du**.",
    "examples": [
      {
        "kisii": "Rora! → Rore! | N-dora, O-rora, A-rora, Tu-rora, Mu-rora, Ba-rora | Ni-n-dora | N-duku-rora",
        "english": "See! → See ye! | I, thou, he, we, ye, they see | I am seeing | I who am seeing",
        "explanation": "Imperative & Present tenses with n+r → nd (Johnston 1922, Vol. II, pp. 497–498)"
      },
      {
        "kisii": "Ndozire (N-dozire-ge) • Ṅ-ka-rora • N-da-rora / N-di-rora • Ṅ-ku-rozire",
        "english": "I saw (I was seeing) • I had seen • I shall see / be seeing • I might have seen",
        "explanation": "Preterite r → z mutation, Pluperfect, Future & Conditional (Johnston 1922, p. 498)"
      },
      {
        "kisii": "O-ta-rora! • Ti-n-dora, T-o-rora, T-a-rora, Ti-tu-rora, Ti-mu-rora, Ti-ba-rora • Ti-n-dozire • N-ta-rora",
        "english": "See not! | I, thou, he, we, ye, they see not | I have not seen | I who see not",
        "explanation": "Negative conjugation in #7 Ki-guzii & #7a Ki-koria (Johnston 1922, p. 498)"
      }
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
  },
  {
    "id": "kisii-hobley-1902-kossova-clans-grammar-lexicon",
    "title": "C. W. Hobley (1902) Eastern Uganda: The 21 Kossova (Kisii) Clans & Chiefs, Kitoto's Kisii Origin, 6 Noun Plural Classes & Kossova Verb/Pronoun Paradigm",
    "summary": "Hobley's 1902 survey (pp. 8–9, 51, 86, 89–91) records the earliest published list of 21 Kisii (Kossova) clans and chiefs, the November 1900 Mugusero embassy to Kisumu, the Kisii ancestry of Chief Kitoto in the Nyamoga clan, the 6 Kossova noun plural classes, and a 3-page vocabulary and sentence grammar.",
    "content": "From C. W. Hobley (*Eastern Uganda: An Ethnological Survey*, Anthropological Institute Occasional Papers No. 1, London, 1902, pp. 8–9, 51, 86, 89–91):\n1. **Northward Migration & the 21 Kossova (Kisii) Clans and Chiefs (pp. 8–9, 51)**:\n   - **Chief Kitoto of the Kitoto Plain (pp. 8–9, 55)**: Hobley discovered that **Chief Kitoto** (head of the *Nyamoga* clan of Kanu/Kadibo), although wearing Nilotic ornaments and married to Ja-Luo wives, was a **pure-bred native of the Kisii (Kossova) nation** whose bands trekked northward along the narrow 10-mile lake corridor below the Nandi escarpment.\n   - **All 21 Kossova (Kisii) Subdivisions & Chiefs (p. 51)**:\n     1. **Ugirango** — *Yawanga* | 2. **Mukimusi** — *Kimaina* | 3. **Msasuri** — *Munari* | 4. **Magichana** — *Borura* | 5. **Manweni** — *Minyigo* | 6. **Mkanyimbo** — *Uturi, Mtaruki* | 7. **Nyaliwali** — *Yamombo* | 8. **Mowasi** — *Maina* | 9. **Umachogi** — *Kitubo* | 10. **Mukura** — *Maina, Ndieki* | 11. **Ukeiri** — *Mwesaba* | 12. **Wa Koma** — *Mwakwega* | 13. **Woyeki** — *Sianyo* | 14. **Mwachawi** — *Samevita* | 15. **Ukitaa** — *Morema* | 16. **Umwaliwa** — *Uroo* | 17. **Umulenda** — *Munyanja* | 18. **Mugika** — *Wato* | 19. **Yamugei** — *Sakawa* | 20. **Mugusero** — *Umbachi* (sent representatives to Kisumu in Nov. 1900 to ask for protection) | 21. **Matala** — *Siambe*.\n2. **Six Noun Plural Classes of Bantu Kisii or Kossova (p. 86)**:\n   - **Class I (*um- → aw-*)**: *umuntu → awantu* ('man/person → people').\n   - **Class II (*o- → mi-*; *[m]u- → [m]i-*)**: *okuwoko → mikowoko* ('arm → arms'), *(m)umogwe → (m)imegwe* ('arrow → arrows').\n   - **Class III (invariant in plural)**: *muriro* ('fire').\n   - **Class IV (*iki- / ichi- → ivi-*)**: *ikisiri → ivisiri* ('axe → axes'), *ichiara → iviara* ('finger → fingers').\n   - **Class V (*u- → ama-*; *li-/ili- → ma-*; *[li]ki- → mi-*; *[l]e- → ama-*)**: *uwusio → amasio* ('face'), *liliga → amaliga* ('tear'), *(li)kisimba → misimba* ('cat'), *(l)erino → amaino* ('ivory/tooth').\n   - **Class VI (*e-/i- → chi-/achi-*; *e- → si-*)**: *imbandi → chimbandi* ('ground-nut'), *enjoka → chinjoka* ('snake'), *enzwi → sinzwi* ('fish').\n3. **Kossova Pronouns, Numerals & Verb Sentences (pp. 89–91)**:\n   - **Pronouns**: *ninchi* (I/me), *nururi* (thou), *nururio* (he), *nitwi* (we), *ninwi* (you), *embabu* (they); *wonzi, twenzi, vionzi* (all).\n   - **Numerals**: *1 ejemo, 2 wa-wili/chi-wili, 3 wa-tatu/chi-tatu, 4 wa-nne/chi-nne, 5 tano, 6 tano na emo, 7 tano na eviri, 8 tano na etatu, 9 kienda, 10 ekumi, 11 ekumi na yemo, 20 makumiyawiri, 30 makumiyatatu, 40 makumiyanne, 50 makumiyatano, 100 emirongo ekumi*.\n   - **Verbs & Sentences**: *ngochandi / sinkoja* ('I come / come not'), *kunyawandi / nanyaweti / njatinkunywa* ('I drink / drank / drank not'), *nkuliandi / tindalia* ('I eat / eat not'), *rogendandi / nagendeti* ('I go / went'), *namanyiti / tinkomanyi* ('I know / know not'), *nawaraleti? — inchitinkorora* ('can you see me? — no, I cannot').",
    "examples": [
      {
        "kisii": "Ugirango (Yawanga) • Magichana (Borura) • Umachogi (Kitubo) • Mukura (Maina, Ndieki) • Yamugei (Sakawa) • Mugusero (Umbachi)",
        "english": "Major Kisii (Kossova) clans and their 1902 chiefs recorded by C. W. Hobley",
        "explanation": "Hobley (1902, Ch. V § 1, p. 51)"
      },
      {
        "kisii": "umuntu → awantu • okuwoko → mikowoko • ikisiri → ivisiri • uwusio → amasio • enjoka → chinjoka • enzwi → sinzwi",
        "english": "person → people • arm → arms • axe → axes • face → faces • snake → snakes • fish → fishes",
        "explanation": "Hobley's (1902, p. 86) 6 Noun Plural Classes of Kossova/Kisii"
      },
      {
        "kisii": "ngochandi / sinkoja • nkuliandi / tindalia • namanyiti / tinkomanyi • nawaraleti? — inchitinkorora",
        "english": "I come / I come not • I eat / I eat not • I know / I know not • Can you see me? — No, I cannot",
        "explanation": "Affirmative vs. negative verb pairs in Hobley (1902, p. 91)"
      }
    ]
  },
  {
    "id": "kisii-johnston-1919-1922-sub-group-a6-group-b8-woodward",
    "title": "Sir Harry H. Johnston (1919–1922) Sub-Group A 6 (#7 Ki-guzii & #7a Ki-kωria) & Group B (#8 Ki-šaši & #8a Ki-rōri): Complete Prefix/Concord Tables (pp. 85, 97), Archdeacon Woodward's 1920 Ki-šaši Vocabulary (Vol. II, p. 26) & Bibliography (p. 787)",
    "summary": "Complete line-by-line documentation of Sub-group A 6 (#7 Ki-guzii / Igi-zii / Ki-siṅgiri / Ki-suba / 'Kωsωva' & #7a Ki-kωria / Ki-suna / Ki-tende / 'Bakulia') and Group B (#8 Ki-šaši & #8a Ki-rōri) in Johnston (1919, Vol. I, pp. 73–97, 787 & 1922, Vol. II, pp. 24–26, 225, 259, 497–498).",
    "content": "From Sir Harry H. Johnston (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Vol. I [1919], pp. 73–97, 787 & Vol. II [1922], pp. 24–26, 225, 259, 497–498):\n1. **Sub-Group A 6 (#7 Ki-guzii & #7a Ki-kωria) 16-Class Prefix/Concord Table & Noteworthy Roots (Vol. I, pp. 73–85 & Vol. II, pp. 24–25, 259)**:\n   - **Varieties Included**: **7. Ki-guzii (*Igi-zii, Ki-siṅgiri, Ki-suba, 'Kωsωva'*)** in the Kisii highlands and along the south shore of the Kavirondo Gulf; **7a. Ki-kωria (*Ki-suna, Ki-tende, 'Bakulia'*)** across the Migori/Mara borderlands.\n   - **16-Class Prefixes & Concords (Vol. I, p. 85)**: Cl. 1 **Omu-, Omw-, Mu-** (*u-, o-*) • Cl. 2 **Aba-, Ba-** (*ba-*) • Cl. 3 **Omu-, Omω-** (*gu-, u-*) • Cl. 4 **Emi-, Imi-** (*gi-, i-*) • Cl. 5 **Eri-, Ili-, Ri-, Li-** (*li-, ri-*) • Cl. 6 **Ama-, Ma-** (*ga-, ma-*) • Cl. 7 **Eki-, Eke-, Iki-, Igi-** (*ki-, gi-*) • Cl. 8 **Ebi-, Ibi-** (*bi-*) • Cl. 9 **En-, In-, E-, I-** (*i-, yi-*) • Cl. 10 **Cin-, Tsin-, Ci-, Tsi-, Si-** (*tsi-, ci-, zi-*) • Cl. 11 **Olu-, Oru-, Orω-** (*lu-, ru-*) • Cl. 12 **Otu-, Tu-** (pl. of Cl. 13; *tu-*) • Cl. 13 **Aka-, Ka-** (dim. sg.; *ka-*) • Cl. 14 **Obu-, Obω-, Bu-** (*bu-*) • Cl. 15 **Oku-, Ogu-, Ku-** (*ku-, gu-*) • Cl. 16 **Aha-, Ha-, Pa-** (*ha-*).\n   - **Noteworthy Roots in #7 & #7a (Vol. II, pp. 24–25)**: **Eṅ-gωrω / Eri-ωba** (God / the Sun), **Omu-gwe ; emi-gwe** (arrow), **Eki-siri / Eke-nabω** (axe), **Obu-atω** (canoe), **Eṅ-gωma** (drum), **Oku-tū ; ama-tū** (ear), **Er-inω ; am-ainω** (tooth), **Olu-meme / Orω-meme** (tongue), **Eṅ-da** (belly), **Ama-nyiṅga** (blood), **Omu-rerω** (fire), **Ama-ce / Ama-nzi** (water), **En-zωgu** (elephant), **Eṅ-gω** (leopard), **Eṅ-gubu** (hippo), **En-sūi ; sin-zūi** (fish), **Ki-anda** (9, in #7) vs. **Kenda** (9, in #7a).\n2. **Group B: #8 Ki-šaši & #8a Ki-rōri (*Suba–Kuria–Jita Southern Border Continuum*, Vol. I, pp. 86–97 & Vol. II, pp. 25–26)**:\n   - Spoken immediately south of #7a Ki-kωria along the eastern shore of Lake Victoria (Mara–Speke Gulf):\n   - **Prefixes & Numerals (Vol. I, pp. 94, 97)**: Cl. 1/2 *Omu-/Aba-*, Cl. 3/4 *Omu-/Emi-*, Cl. 5/6 *Eri-, Li-/Ama-*, Cl. 7/8 *Eki-/Ebi-*, Cl. 9/10 *En-/In-, Jin-, Tsin-*, Cl. 11 *Olu-*, Cl. 12/13 *Otu-/Aka-*, Cl. 14 *Obu-*, Cl. 15 *Oku-*; Numerals: **1 -mwe, 2 -bili, 3 -satu, 4 -nne, 5 -tanω, 6 -tandatu / M-kaga, 7 M-fuṅgate, 8 M-nane, 9 Kenda, 10 I-kumi, 100 I-gana**.\n   - **Archdeacon H. W. Woodward's 1920 Supplementary Ki-šaši Vocabulary (Vol. II, p. 26)**: Johnston prints 46 additional Ki-šaši words supplied by Archdeacon H. W. Woodward in 1920, including **Mū-gūī ; mi-** (arrow), **Ki-tende** (buttocks), **I-kωṅgω** (country), **E-sωnω** (shame), **I-zωba** (sun/God), **M-būla** (rain), **Ma-nzi** (water), **Mū-līlω** (fire), **Obu-šū** (face), **Eri-nω ; ama-** (tooth), **Olu-līmī** (tongue), **Oku-bωkω** (arm), **Oku-gūlū** (leg), **Omu-karī ; aba-** (woman), **Omu-lūme ; aba-** (man/husband).\n3. **Bibliography for #7–8a (Vol. I, p. 787)**:\n   - Cites C. W. Hobley (*Eastern Uganda*, 1902 — *Kωsωva*), Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902 — *Igizii*), Franz Stuhlmann & Bernhard Struck (for *Ki-kωria / Bakulia* & *Ki-rōri*), Paul Kollmann (*The Victoria Nyanza*, 1899), and Archdeacon H. W. Woodward (1920 MS. for *Ki-šaši*).",
    "examples": [
      {
        "kisii": "7. Ki-guzii (Igi-zii, Ki-siṅgiri, Ki-suba, Kωsωva) & 7a. Ki-kωria (Ki-suna, Ki-tende, Bakulia)",
        "english": "Sub-group A 6 varieties and glossonyms in Johnston (1919, Vol. I, p. 73)",
        "explanation": "Johnston (1919, Vol. I, pp. 73–85 & 1922, Vol. II, pp. 24–25)"
      },
      {
        "kisii": "Eṅ-gωrω / Eri-ωba (God / Sun) • Olu-meme / Orω-meme (tongue) • Ama-nyiṅga (blood) • Ama-ce / Ama-nzi (water) • Ki-anda (9)",
        "english": "Distinctive Sub-group A 6 roots in Johnston (1919–1922)",
        "explanation": "Johnston (1919, Vol. I, pp. 73–81 & 1922, Vol. II, pp. 24–25)"
      },
      {
        "kisii": "8. Ki-šaši & 8a. Ki-rōri: Mū-gūī (arrow), I-zωba (sun/God), Obu-šū (face), Omu-karī (woman), Omu-lūme (husband), Jin-/Tsin- (Class 10)",
        "english": "Group B (#8–8a) & Archdeacon Woodward's 1920 supplementary vocabulary",
        "explanation": "Johnston (1919, Vol. I, pp. 86–97 & 1922, Vol. II, pp. 25–26)"
      }
    ]
  },
  {
    "id": "kisii-johnston-1902-uganda-protectorate-set9-complete",
    "title": "Sir Harry Johnston (1902) 'The Uganda Protectorate, Vol. II' (pp. 722, 743–744, 885–902, 993–1001): Chapter XVII Aba-kisii & Awa-kisingiri (Kósova) Classification & Complete Vocabulary Set 9 (Igizii & Lusinga, pp. 993–1001)",
    "summary": "Complete line-by-line documentation of Igizii (Ekegusii) and Lusinga (Rusinga Island Suba-Bantu) in Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902, pp. 722, 743–744, 885–902, 993–1001), correcting the Set 9 page citations to pp. 993–1001.",
    "content": "From Sir Harry Johnston, G.C.M.G., K.C.B. (*The Uganda Protectorate*, Vol. II, London: Hutchinson & Co., 1902, Ch. XVII pp. 722, 743–744 & Ch. XX pp. 885–902, 993–1001):\n1. **Chapter XVII Classification of the Southern Bantu Kavirondo (pp. 722, 743–744)**:\n   - Johnston classifies the Southern Bantu Kavirondo into **Group 4: The Aba-kisii and Awa-kisingiri (Kósova)** in the highlands south of Kavirondo Bay and **Group 5: The Awa-ware and Awa-singa** on Rusinga and Mfangano Islands, noting that their speech preserves archaic prefixes and links the north-eastern Lake Victoria Bantu (Luhya/Masaba) with the interior East African Bantu (Kikuyu/Kamba).\n2. **Complete Vocabulary Set 9 — *Igizii* (Ekegusii) & *Lusinga* on pp. 993–1001**:\n   - **Body, Kinship & People (pp. 993–998)**: *Man* **Omundu (pl. Abanto)**, *Woman* **Omukari (pl. Abakari)**, *Father* **Tata**, *Mother* **Baba**, *Brother* **Omwana witu**, *Sister* **Omwana witu omukari**, *Child* **Omwana (pl. Abana)**, *Chief* **Omugambi**, *Friend* **Omusani**, *God* **Engoro (Erioba = the sun)**, *Head* **Omutwe (pl. Emitwe)**, *Eye* **Eriso (pl. Amaso)**, *Ear* **Okutwi (pl. Amatwi)**, *Nose* **Emioro**, *Mouth* **Omunwa**, *Tooth* **Erino (pl. Amaino)**, *Tongue* **Olumeme**, *Arm* **Okuboko (pl. Amaboko)**, *Leg* **Okugulu (pl. Amagulu)**, *Blood* **Amanyinga**, *Bone* **Egikuba (pl. Ebikuba)**, *Heart* **Enkoro**.\n   - **Nature, Animals & Material Culture (pp. 993–998)**: *Sun* **Erioba**, *Moon* **Omwezi**, *Star* **Enjota**, *Rain* **Embura**, *Water* **Amace**, *Fire* **Omurero**, *Stone* **Eriogo (pl. Amaogo)**, *Mountain* **Erigongo**, *Tree* **Umute (pl. Emite)**, *House* **Enyumba**, *Spear* **Eritimo (pl. Amatimo)**, *Shield* **Enguba**, *Bow* **Obuta**, *Arrow* **Omugwe (pl. Emigwe)**, *Axe* **Ekisiri / Ekenabo**, *Canoe* **Obuatō**, *Cow* **Engombe (pl. Cingombe)**, *Goat* **Emburi**, *Sheep* **Engondi**, *Dog* **Esese**, *Elephant* **Enzogu**, *Lion* **Endu**, *Leopard* **Engo**, *Hippopotamus* **Engubu**, *Hyena* **Enyangau**, *Snake* **Enjoka**, *Fish* **Ensui (pl. Sinzui)**.\n   - **Adjectives, Numerals 1–1,000, Pronouns & Verbal Sentences (pp. 998–1001)**:\n     - **Adjectives (p. 998)**: *Good* **-iya (ngiya, etc.)**, *Bad* **-bi**, *Great* **-nene**, *Little* **-ke**, *White* **-rabu**, *Black* **-muamu (emuamu)**, *Red* **-bariri**, *All* **-onsi (bonsi, etc.)**.\n     - **Numerals (pp. 998–999)**: *1* **-mwe (eyemo)**, *2* **-biri (ibere)**, *3* **-tatu (isato)**, *4* **-nne (inye)**, *5* **-tano (isano)**, *6* **isano na emo (mutandatu)**, *7* **isano na ibere (muhunkate)**, *8* **isano na isato (munane)**, *9* **kianda**, *10* **ikumi**, *11* **ikumi na emo**, *20* **amirongo ibere (amakumi abiri)**, *30* **amirongo isato**, *40* **amirongo inye**, *50* **amirongo isano**, *100* **igana (emirongo ikumi)**, *1,000* **cihumbi**.\n     - **Pronouns & Sentences (pp. 999–1001)**: *I* **Ince**, *Thou* **Aiye**, *He* **Olia / Ere**, *We* **Iewi (Intwe)**, *Ye* **Inyue**, *They* **Abo**; *My/thy/his/our/your/their* **-ane, -ao, -ake (yake), -itu (uitu), -enu (rienu), -abo (babo)**; *This man* **Omuntu oyu**, *That person yonder* **uuria**, *This tree* **Umute uyu**, *Our town* **Omuji uitu**, *Your country* **Riroba rienu**, *Their children* **Abana babo**, *Here* **Aīya, Aiga**, *I dance* **Ngotenga**, *I come not* **Nangire / Sinkoja**.",
    "examples": [
      {
        "kisii": "Omundu (pl. Abanto) • Engoro / Erioba • Amace • Omurero • Eritimo (pl. Amatimo) • Enguba • Omugwe (pl. Emigwe) • Obuatō",
        "english": "Man/Person (pl. People) • God / Sun • Water • Fire • Spear (pl. Spears) • Shield • Arrow (pl. Arrows) • Canoe",
        "explanation": "Vocabulary Set 9 (Igizii / Ekegusii), Sir Harry Johnston, The Uganda Protectorate, Vol. II (1902, pp. 993–998)"
      },
      {
        "kisii": "-mwe (eyemo), -biri (ibere), -tatu (isato), -nne (inye), -tano (isano), kianda (9), ikumi (10), amirongo ibere (20), igana (100)",
        "english": "1, 2, 3, 4, 5, 9, 10, 20, 100 in 1902 Igizii",
        "explanation": "Vocabulary Set 9 (Igizii / Ekegusii), Johnston (1902, pp. 998–999)"
      },
      {
        "kisii": "Ince, Aiye, Olia, Iewi, Inyue, Abo • Omuntu oyu • Umute uyu • Omuji uitu • Riroba rienu • Abana babo • Ngotenga • Nangire",
        "english": "I, thou, he, we, ye, they • This man • This tree • Our town • Your country • Their children • I dance • I come not",
        "explanation": "Vocabulary Set 9 (Igizii / Ekegusii), Johnston (1902, pp. 999–1001)"
      }
    ]
  }
];
