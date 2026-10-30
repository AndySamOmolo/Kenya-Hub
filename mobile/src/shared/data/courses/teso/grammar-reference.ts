// ============================================================
// Teso (Ateso / Elgumi / Wamia) Grammar Reference Guide
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (Elgumi grammar, numerals & vocabulary)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Elgumi / Wamia comparative vocabulary & grammar)
// 3. Wikipedia Teso_language & Eastern_Nilotic_languages (Vossen 1982)
// ============================================================

export interface TesoGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { teso: string; english: string; explanation?: string }[];
}

export const TESO_GRAMMAR_SECTIONS: TesoGrammarSection[] = [
  {
    id: "teso-phonology-orthography",
    title: "ATR Vowel Contrast, Semi-Mute Shadow Vowels, Kenyan–Tororo K-Retention & 1902 Elgumi/Wamia Records (Hobley 1902 & Johnston 1902)",
    summary: "Ateso contrasts close (+ATR) and open (-ATR) vowels, inserts shadow vowels to prevent consonant clusters, retains intervocalic /k/ in Kenya (Busia) and Tororo, and is documented historically as 'Elgumi / Wamia' by Hobley (1902) and Johnston (1902).",
    content: `Key phonological, orthographic, and historical traits of Ateso (Teso–Turkana / Ateker cluster) as recorded in C. W. Hobley (*Eastern Uganda*, 1902, p. 57, pp. 92–95), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, Vol. II, pp. 842–852), and modern Ateso grammar:
1. **Close (+ATR) vs. Open (-ATR) Vowels**:
   - The five vowel letters (*a, e, i, o, u*) represent both close (+ATR) and open (-ATR) phonemes that distinguish verb roots and govern conjugation harmony:
   - **aipet** [e] (to kick) vs. **aipet** [ɛ] (to lay out).
   - **aimor** [o] (to insult) vs. **aimor** [ɔ] (to share).
   - **aikut** [u] (to scoop earth) vs. **aikut** [ʊ] (to blow).
   - Tone/pitch also distinguishes tense on identical spellings: *élípì* (I am praying) vs. *elìpǐ* (I was praying) vs. *elipí* (he/she was praying).
2. **Semi-Mute "Shadow" Vowels & Cluster Avoidance**:
   - Two consonants never stand together in Ateso; words ending in a consonant carry a semi-mute "shadow" vowel that surfaces when followed by another consonant or possessive suffix:
   - Written *elosete aŋor togo* (the women go to the house), pronounced *elosete aŋoro togo*; with possessive: *elosete aŋoroke togo* (his women go to the house).
   - *Elacet-kon* (your key) is written and pronounced **elacetekon**.
3. **Kenyan (Busia / Wamia) Retention of /k/ (Hobley 1902 & Johnston 1902)**:
   - Speakers in Busia County (Kenya) and Tororo retain the *k* prefix in infinitives and demonstratives (*akilip lok'asuban* 'to pray to the Creator', *akinyam atap* 'to eat millet bread', *akimat akile* 'to drink milk'), whereas central Ugandan varieties often elide *k* (*ailip*, *ainyam*, *aimat*).`,
    examples: [
      { teso: "akilip lok'asuban • akinyam atap • akimat akile", english: "to pray to the Creator • to eat bread • to drink milk", explanation: "Kenyan Ateso retention of k- in infinitives (attested in Hobley 1902 & Johnston 1902)" },
      { teso: "aimor [ɔ] (to share) vs. aimor [o] (to insult)", english: "to share vs. to insult", explanation: "Open (-ATR) vs. Close (+ATR) vowel contrast" },
      { teso: "elacet + -kon → elacetekon", english: "your key", explanation: "Insertion of shadow vowel -e- between consonants" }
    ]
  },
  {
    id: "teso-gender-plurals-numerals",
    title: "Three Grammatical Genders (E-/O-, A-, I-), Agentive/Instrumental Plurals & Quinary Numerals (Hobley 1902 & Johnston 1902)",
    summary: "Ateso divides all nouns into Masculine (e-/o-), Feminine (a-), and Neuter/Diminutive (i-) classes and counts via a gender-agreed base-5/base-10 system.",
    content: `Grammatical gender, pluralization, and numerals in Ateso as documented in Hobley (1902, p. 57, p. 95), Johnston (1902, pp. 842–852), and Wikipedia:
1. **Three Grammatical Genders (Singular → Plural Prefixes)**:
   - **Masculine (*e-, o- → i-, o-, ngi-*)**: Male beings, most trees/fruits, insects, and non-indigenous liquids (*ekile → ikiliok* 'man → men', *etelepat → itelepai* 'boy → boys', *ekingok → ingokwo* 'dog → dogs', *emong → imongin* 'bull/ox → oxen', *ekitoi → ikito* 'tree → trees').
   - **Feminine (*a- → a-, nga-*)**: Female beings, languages/countries, indigenous liquids, abstract nouns, and verbal nouns (*aberu → angor* 'woman → women', *apese → apesur* 'girl → girls', *akiteng → aatuk* 'cow → cattle', *akipi* 'water', *akile* 'milk', *akim* 'fire', *akolong* 'sun').
   - **Neuter / Diminutive (*i- → i-*)**: Generic or small objects (*ikoku → idwe* 'child → children', *itunganan → itunga* 'person → people', *ikingok* 'puppy', *imoru* 'pebble').
   - *Exceptions without gender prefix*: Kinship and cardinal directions (*toto* 'mother', *papa* 'father', *mamai* 'uncle', *inac* 'sister', *ija* 'aunt'; *kide* 'east', *too* 'west', *nyakoi* 'north', *agolitomei* 'south').
2. **Productive Verbal Noun Plurals**:
   - **Agentive Nouns (*-an/-on → -ak/-ok*)**: *ekamejan → ikamejak* (hunter → hunters), *ekecokon → ikecokok* (herdsman → herdsmen), *ekadukon → ikadukok* (builder → builders), *ekatubon → ikatubok* (judge → judges).
3. **Gender-Agreed Quinary-Decimal Numerals (Hobley (1902, p. 95) & Johnston 1902)**:
   - Numerals agree in gender (*i-* masc./neut. vs. *a-* fem.):
   - **1–5**: *idiope / adiope (epei)* (1), *iyarei / aarei* (2), *iuni / auni* (3 — e.g. *itelepai iuni* 'three boys' vs. *apesur auni* 'three girls'), *ioŋon / aoŋon (omwon)* (4), *ikany / akany* (5, from *akan* 'hand').
   - **6–10**: *ikany-kape* (6 = 5+1), *ikany-kaare* (7 = 5+2), *ikany-kauni* (8 = 5+3), *ikany-kaoŋon* (9 = 5+4), *itomon / atomon (tomon)* (10), *akais aare (tomon aare)* (20), *akwatat* (100).`,
    examples: [
      { teso: "ekile → ikiliok • aberu → angor • ikoku → idwe • akiteng → aatuk", english: "man → men • woman → women • child → children • cow → cattle", explanation: "Masculine (e-→i-), Feminine (a-→a-), and Neuter (i-→i-) nouns (Hobley 1902 & Johnston 1902)" },
      { teso: "ekadukon → ikadukok • ekatubon → ikatubok", english: "builder → builders • judge → judges", explanation: "Agentive singular -on to plural -ok" },
      { teso: "idiope, iyarei, iuni, ioŋon, ikany, ikany-kape, ikany-kaare, ikany-kauni, ikany-kaoŋon, itomon", english: "1, 2, 3, 4, 5, 6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10", explanation: "Quinary-decimal cardinal numerals (Hobley (1902, p. 95) & Johnston 1902)" }
    ]
  },
  {
    "id": "teso-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Teso (Ateso))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Teso (Ateso).",
    "content": "1. **Archival & Open-Dataset Integration for Teso (Ateso)**:
   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).
2. **Phonetic & Orthographic Normalization**:
   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "teso": "ateker (pl. atekerin) • Inyā",
        "english": "Clan / exogamous kinship group • Grass",
        "explanation": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)"
      },
      {
        "teso": "Akoñ • Etom",
        "english": "Eye • Elephant",
        "explanation": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912"
      }
    ]
  }
];
