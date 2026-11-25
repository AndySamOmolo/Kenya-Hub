// Teso (Ateso) Grammar Reference Sections
// Comprehensive grammatical overview based on Kitching (1915), Hilders & Lawrance (1956), and Barasa (2017)

export interface TesoGrammarSection {
  id: string;
  title: string;
  category: 'phonology' | 'morphology' | 'syntax' | 'pronouns' | 'verbs' | 'nouns';
  summary: string;
  content: string;
  examples: Array<{
    teso: string;
    english: string;
    gloss?: string;
  }>;
}

export type GrammarSection = TesoGrammarSection;

export const TESO_GRAMMAR_SECTIONS: TesoGrammarSection[] = [
  {
    id: 'teso-noun-genders',
    title: '1. Grammatical Gender & Number Prefixes (e-/a-/i-)',
    category: 'nouns',
    summary: 'Ateso categorizes every noun into Masculine (e-), Feminine (a-), or Neuter/Diminutive (i-) gender prefixes.',
    content: `Teso (Ateso) is an Eastern Nilotic language of the Ateker cluster (closely allied with Turkana and Karamojong). Every Ateso noun carries an obligatory gender-number prefix:

| Gender | Singular Prefix | Plural Prefix | Example | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Masculine** | **e-** | **i-** | *ekile* → *ikiliok* | Man → Men |
| **Feminine** | **a-** | **a-** (with suffix change) | *aberu* → *angor* | Woman → Women |
| **Diminutive / Neuter** | **i-** | **i-** | *ikoku* → *idwe* | Child → Children |

### Semantic Gender Shifts
Changing a noun's prefix changes its size or semantic classification:
* **ekitoi** (tree, masculine) → **akitoi** (piece of firewood, feminine) → **ikitoi** (small twig/stick, diminutive).
* Mass liquids take feminine plural agreement: **akipi** (water), **akile** (milk), **akoot** (blood), **ajon** (beer).`,
    examples: [
      {
        teso: 'ekile (pl. ikiliok) • aberu (pl. angor)',
        english: 'man (pl. men) • woman (pl. women)',
        gloss: 'Masc. e-/i- vs. Fem. a- nouns'
      },
      {
        teso: 'etogo (pl. itogoi) • akiteng (pl. aatuk)',
        english: 'house (pl. houses) • cow (pl. cattle)',
        gloss: 'Household and pastoral nouns'
      }
    ]
  },
  {
    id: 'teso-pronouns-demonstratives',
    title: '2. Personal Pronouns & Gender-Agreeing Demonstratives',
    category: 'pronouns',
    summary: 'Independent pronouns and demonstratives that agree in gender (lo, na, yen) with the head noun.',
    content: `### Independent Personal Pronouns
* **1st Sg.**: **eong / ayong** (I / me) — Possessive: **ka** (my)
* **2nd Sg.**: **ijo** (you) — Possessive: **kon** (your)
* **3rd Sg.**: **ngesi** (he / she / it) — Possessive: **ke** (his / her)
* **1st Pl.**: **oni** (we, inclusive) / **isio** (we, exclusive)
* **2nd Pl.**: **yes** (you all)
* **3rd Pl.**: **kes** (they / them)

### Gender-Agreeing Demonstratives & Relatives
Demonstratives and relative clauses must match the gender prefix of the noun they modify:
* **Masculine**: **lo** (this), **ngol** (that) — plural **lu / ngul**
* **Feminine**: **na** (this), **ngin** (that) — plural **nu / ngun**
* **Diminutive/Neuter**: **yen** (this), **ngin** (that)`,
    examples: [
      {
        teso: 'Ekile lo ejok. • Aberu na ejok.',
        english: 'This good man. • This good woman.',
        gloss: 'Masc. lo vs. Fem. na agreement'
      },
      {
        teso: 'Ngai bo ekonikiro? — Ekakiro erai Emong.',
        english: 'What is your name? — My name is Emong.',
        gloss: 'Who PRT 2SG.POSS-name? — 1SG.POSS-name is Emong.'
      }
    ]
  },
  {
    id: 'teso-verbs-vso',
    title: '3. VSO Clause Structure, Verb Classes & Negation (mam)',
    category: 'verbs',
    summary: 'Verb-initial syntax, Ko- vs. Ki- verb classes, and negation with mam.',
    content: `Ateso is a **Verb–Subject–Object (VSO)** language. Verbs are divided into two morphological classes named after their imperative/subjunctive prefixes:
1. **KO-Class Verbs** (infinitive in *a-*): e.g., **alosit** (to go) → Imperative **Kolot!** (Go!), **abunore** (to come) → **Bia ne!** (Come here!), **akinyam** (to eat) → **Konyam!** (Eat!).
2. **KI-Class Verbs** (infinitive in *ai-*): e.g., **ainakin** (to give) → Imperative **Kiinakin! / Kinak!** (Give!), **aanyun** (to see).

### Subject Agreement & Negation
* **1st Sg.**: **a-** (*alosi eong* = I go; *acamit eong* = I want/like)
* **2nd Sg.**: **i-** (*ilosi ijo* = you go; *icamit ijo* = you want)
* **3rd Sg.**: **e-** (*elosi ngesi* = he/she goes)
* **Negation**: Placed before the verb using **mam** ("not"): **Mam eong ajeni** (I do not know); **Mam eong alosi** (I am not going).`,
    examples: [
      {
        teso: 'Icamit ijo nyo? — Acamit eong akipi.',
        english: 'What do you want? — I want water.',
        gloss: '2SG-want you what? — 1SG-want I water.'
      },
      {
        teso: 'Alosi eong ore. • Mam eong ajeni.',
        english: 'I am going home. • I do not know.',
        gloss: 'VSO affirmative vs. mam negative'
      }
    ]
  },
  {
    id: 'teso-comparative-corpus',
    title: '4. Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Ateso)',
    category: 'phonology',
    summary: 'Cross-referenced phonological inventory, historical orthography mappings (Hobley 1902, Roscoe & Kitching 1915, Hilders & Lawrance 1958), and modern open-access corpus alignments.',
    content: `This reference section synthesizes the historical public-domain documentation (Hobley 1902, Roscoe & Kitching 1915, Hilders & Lawrance 1958) with contemporary open-access linguistic datasets (CLDF/ASJP, PHOIBLE 2.0, PanLex, Wiktionary, and Sunbird AI SALT / SALT-31 repositories).

### Orthographic & Phonological Correspondences
* **Vowel Quality & Length**: 9-vowel Advanced Tongue Root (+ATR / -ATR) harmony system (*a, e, i, o, u* with open/close counterparts) and contrastive tone on grammatical cases.
* **Velar Nasal (*ṅ / ñ / ng / ŋ*)**: Written as *ṅ* or *ñ* in early 20th-century sources, and standardized as *ng* or *ŋ* in modern Ateso orthography.
* **Dialect Continuity**: Covers Kenyan Ateso (Busia County / Teso North & Teso South) and Ugandan Ateso varieties.`,
    examples: [
      {
        teso: 'idiopet (ape) • iarei (aarei)',
        english: 'One (1) • Two (2)',
        gloss: 'Verified in Teso (Ateso) Dictionary & Corpus'
      },
      {
        teso: 'iuni (auni) • iongon (aongon)',
        english: 'Three (3) • Four (4)',
        gloss: 'Verified in Teso (Ateso) Dictionary & Corpus'
      },
      {
        teso: 'ikany (akany) • ikany-kape',
        english: 'Five (5) • Six (6)',
        gloss: 'Verified in Teso (Ateso) Dictionary & Corpus'
      }
    ]
  },
  {
    id: 'teso-numerals-directions-kinship',
    title: '5. Quinary-Decimal Numerals, Cardinal Directions & Kinship (Kitching 1915)',
    category: 'syntax',
    summary: 'Ateso base-5/base-10 counting, spatial cardinal directions, and Ateker clan kinship terminology.',
    content: `### 1. Quinary-Decimal Numeral System (1–100)
Ateso numerals agree in gender with the noun counted (neuter/masculine *i-* vs. feminine *a-*):
* **1–5**: **1** *idiopet / ape*, **2** *iarei / aarei*, **3** *iuni / auni*, **4** *iongon / aongon*, **5** *ikany / akany* (from *akan* 'hand').
* **6–9 (5 + n)**: **6** *ikany-kape* (5+1), **7** *ikany-kaare* (5+2), **8** *ikany-kauni* (5+3), **9** *ikany-kaongon* (5+4).
* **10, 20 & 100**: **10** *itomon*, **20** *akais-aarei* (two tens), **30** *akais-auni*, **100** *akwatat* (pl. *akwat*).

### 2. Cardinal Directions & Kinship
* **Cardinal Directions**: **Kide** (East), **Too** (West), **Nyakoi** (North), **Agolitomei** (South).
* **Core Kinship & Clan Terms**: **Papa** (Father), **Toto** (Mother), **Onac** (Brother), **Inac** (Sister), **Mamai** (Maternal uncle), **Ejait / Ija** (Paternal aunt), **Ocen** (Sister's child), **Ekamuran** (In-law), **Ateker** (pl. *Atekerin* — Clan / Nation), **Ejakait** (Chief / Lord), **Emuron** (Healer / Diviner).`,
    examples: [
      {
        teso: 'Idiopet, iarei, iuni, iongon, ikany — itomon',
        english: 'One, two, three, four, five — ten',
        gloss: 'Neuter/masculine counting series'
      },
      {
        teso: 'Kide (East) • Too (West) • Nyakoi (North) • Agolitomei (South)',
        english: 'Cardinal compass directions in Ateso',
        gloss: 'Spatial orientation nouns'
      },
      {
        teso: 'Yogama! — Yoga! • Eyalama noi!',
        english: 'Greetings! — Hello! • Thank you very much!',
        gloss: 'Daily Ateso greetings and gratitude'
      }
    ]
  }
];
