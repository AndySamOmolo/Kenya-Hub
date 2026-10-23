// ============================================================
// Teso (Ateso) Grammar Reference Guide
// Based on Open-Web Linguistic Data (Wikipedia Teso_language & Eastern_Nilotic_languages / Vossen 1982)
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
    title: "ATR Vowel Contrast, Semi-Mute Shadow Vowels & Kenyan–Tororo K-Retention",
    summary: "Ateso contrasts close (+ATR) and open (-ATR) vowels, inserts shadow vowels to prevent consonant clusters, and retains intervocalic /k/ in Kenya (Busia) and Tororo.",
    content: `Key phonological and orthographic rules of Ateso (Teso–Turkana / Ateker cluster):
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
3. **Kenyan (Busia) & Tororo Retention of /k/**:
   - Speakers in Busia County (Kenya) and Tororo retain the *k* prefix in infinitives and demonstratives (*akilip lok'asuban* 'to pray to the Creator', *akinyam atap* 'to eat millet bread', *akimat akile* 'to drink milk'), whereas central Ugandan varieties often elide *k* (*ailip*, *ainyam*, *aimat*).`,
    examples: [
      { teso: "akilip lok'asuban • akinyam atap • akimat akile", english: "to pray to the Creator • to eat bread • to drink milk", explanation: "Kenyan Ateso retention of k- in infinitives" },
      { teso: "aimor [ɔ] (to share) vs. aimor [o] (to insult)", english: "to share vs. to insult", explanation: "Open (-ATR) vs. Close (+ATR) vowel contrast" },
      { teso: "elacet + -kon → elacetekon", english: "your key", explanation: "Insertion of shadow vowel -e- between consonants" }
    ]
  },
  {
    id: "teso-gender-plurals-numerals",
    title: "Three Grammatical Genders (E-/O-, A-, I-), Agentive/Instrumental Plurals & Quinary Numerals",
    summary: "Ateso divides all nouns into Masculine (e-/o-), Feminine (a-), and Neuter/Diminutive (i-) classes and counts via a gender-agreed base-5/base-10 system.",
    content: `Grammatical gender, pluralization, and numerals in Ateso:
1. **Three Grammatical Genders (Singular → Plural Prefixes)**:
   - **Masculine (*e-, o- → i-, o-*)**: Male beings, most trees/fruits, insects, and non-indigenous liquids (*etelepat → itelepai* 'boy → boys', *ekingok* 'dog', *emong* 'bull', *ekitoi* 'tree').
   - **Feminine (*a- → a-*)**: Female beings, languages/countries, indigenous liquids, abstract nouns, and verbal nouns (*apese → apesur* 'girl → girls', *aberu → aŋor* 'woman → women', *Ateso*, *akipi* 'water', *akile* 'milk', *amina* 'love').
   - **Neuter / Diminutive (*i- → i-*)**: Generic or small objects (*ikoku → idwe* 'child → children', *ituŋanan → ituŋa* 'person → people', *ikiŋok* 'puppy', *imoru* 'pebble').
   - *Exceptions without gender prefix*: Kinship and cardinal directions (*toto* 'mother', *papa* 'father', *mamai* 'uncle', *inac* 'sister', *ija* 'aunt'; *kide* 'east', *too* 'west', *nyakoi* 'north', *agolitomei* 'south').
2. **Productive Verbal Noun Plurals**:
   - **Agentive Nouns (*-an/-on → -ak/-ok*)**: *ekamejan → ikamejak* (hunter → hunters), *ekecokon → ikecokok* (herdsman → herdsmen), *ekadukon → ikadukok* (builder → builders), *ekatubon → ikatubok* (judge → judges).
   - **Instrumental Nouns (*-et/-etait → -eta*)**: *elacet → ilaceta* (key → keys), *arapetait → arapeta* (cover → covers).
   - **Generic Collective (*-sinei*)**: *ituŋa* (men/people) → *ituŋasinei* (mankind); *akwapin* (countries) → *akwapisinei* (the world).
3. **Gender-Agreed Quinary-Decimal Numerals**:
   - Numerals agree in gender (*i-* masc./neut. vs. *a-* fem.):
   - **1–5**: *idiope / adiope* (1), *iyarei / aarei* (2), *iuni / auni* (3 — e.g. *itelepai iuni* 'three boys' vs. *apesur auni* 'three girls'), *ioŋon / aoŋon* (4), *ikany / akany* (5).
   - **6–10**: *ikany-kape* (6 = 5+1), *ikany-kaare* (7 = 5+2), *ikany-kauni* (8 = 5+3), *ikany-kaoŋon* (9 = 5+4), *itomon / atomon* (10), *akais aare* (20), *akwatat* (100), *elukumit ediope* (1,000).`,
    examples: [
      { teso: "etelepat → itelepai (m.) • apese → apesur (f.) • ikoku → idwe (n.)", english: "boy → boys • girl → girls • child → children", explanation: "Masculine (e-→i-), Feminine (a-→a-), and Neuter (i-→i-) prefixes" },
      { teso: "ekadukon → ikadukok • ekatubon → ikatubok", english: "builder → builders • judge → judges", explanation: "Agentive singular -on to plural -ok" },
      { teso: "itelepai iuni vs. apesur auni", english: "three boys vs. three girls", explanation: "Gender agreement on cardinal numerals (iuni masc. vs. auni fem.)" }
    ]
  }
];
