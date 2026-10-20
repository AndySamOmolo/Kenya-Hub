// ============================================================
// Teso (Ateso) Grammar Reference Guide
// Based on "An Introduction to the Ateso Language"
// by J.H. Hilders & J.C.D. Lawrence (The Eagle Press, 1957).
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
    id: 'teso-gender-prefixes',
    title: 'The Tri-Gender Noun Prefix System',
    summary: 'Every noun in Ateso carries a morphological prefix indicating gender: Masculine (E-), Feminine (A-), or Neuter/Diminutive (I-).',
    content: `Hilders & Lawrence (1957) define the three inherent grammatical genders of Ateso:
1. **Masculine (E- / pl. I-)**:
   - *ekiliokit* (man) → *ikiliok* (men)
   - *edodia* (tree / pole) → *idodiai* (trees)
   - *etogo* (house) → *itogoi* (houses)
2. **Feminine (A- / pl. A-)**:
   - *aberu* (woman) → *angor* (women)
   - *akiteng* (cow) → *aatuk* (cattle)
   - *akipi* (water)
3. **Neuter / Diminutive (I- / pl. I-)**:
   - *ikoku* (child) → *idwe* (children)
   - *itaba* (tobacco)
   - *itout* (small calf) → *itaok* (calves)

Pluralization in Ateso combines prefix changes with varied suffix mutations:
- *-in / -an*: *akipi* (water), *alupok* (earth)
- *-ok / -ek*: *ikiliok* (men), *idodiai* (trees).`,
    examples: [
      { teso: 'ekiliokit', english: 'man', explanation: 'Masculine singular E-' },
      { teso: 'aberu', english: 'woman', explanation: 'Feminine singular A-' },
      { teso: 'ikoku', english: 'child', explanation: 'Neuter/Diminutive singular I-' },
      { teso: 'ikiliok', english: 'men', explanation: 'Masculine plural I-' }
    ]
  },
  {
    id: 'teso-verb-classes',
    title: 'Verb Classes (Ko- and Ki- Classes)',
    summary: 'Ateso verbs belong to two fundamental morphological conjugation groups: Ko-class and Ki-class.',
    content: `Like other Nilotic languages of the Teso-Turkana cluster, Ateso distinguishes between:
1. **Ko-Class (Class 1)**:
   - Infinitives prefixed with *ai-*: e.g., *ainyam* (to eat), *aimat* (to drink), *alosit* (to go).
   - Imperatives take *to-* or *ta-*: *Tanyama!* (Eat!), *Toloto!* (Go!).
2. **Ki-Class (Class 2)**:
   - Infinitives prefixed with *aki-*: e.g., *akilep* (to milk), *akisom* (to read).
   - Imperatives take *ki-* or *ko-*: *Kilepu!* (Milk!), *Koisomu!* (Read!).

Personal subject prefixes for the present tense:
- 1st sing (I): *e-* / *a-*
- 2nd sing (You): *i-*
- 3rd sing (He/She): *e-*
- 1st plur (We): *i-...-te*
- 2nd plur (You pl.): *i-...-te*
- 3rd plur (They): *e-...-te*`,
    examples: [
      { teso: 'Enami ekiliokit akiring', english: 'The man is eating meat', explanation: 'Ko-class verb with 3rd person prefix e-' },
      { teso: 'Elepi aberu aatuk', english: 'The woman is milking cattle', explanation: 'Ki-class verb' },
      { teso: 'Tanyama!', english: 'Eat! (Imperative)', explanation: 'Ko-class imperative prefix ta-' },
      { teso: 'Kilepu!', english: 'Milk! (Imperative)', explanation: 'Ki-class imperative prefix ki-' }
    ]
  },
  {
    id: 'teso-past-auxiliary',
    title: 'Past Tense Formation with the Auxiliary "Abu"',
    summary: 'The standard past tense in Ateso is constructed using the inflected auxiliary verb "abu" followed by the subjunctive.',
    content: `A distinctive characteristic of Ateso syntax is the pervasive use of the auxiliary *abu* to express completed past action:
- *Abu kanyam* = I ate
- *Abu inyam* = You ate
- *Abu kinyam* = He/she ate
- *Kabu kinyamutu* = We ate
- *Ibu inyamutu* = You (pl) ate
- *Kebu kinyamutu* = They ate

For negative past sentences, *mam* precedes the clause:
- *Mam abu kanyam* = I did not eat.`,
    examples: [
      { teso: 'Abu kalot ore', english: 'I went home', explanation: 'Past auxiliary abu + 1st person subjunctive' },
      { teso: 'Abu kiseseni', english: 'He saw it', explanation: 'Past auxiliary abu + 3rd person' },
      { teso: 'Mam abu kisese', english: 'He did not see it', explanation: 'Negative past with mam' }
    ]
  },
  {
    id: 'teso-syntax',
    title: 'Word Order & Post-Nominal Modifiers',
    summary: 'Ateso clauses exhibit basic Verb-Subject-Object (VSO) order, and all determiners and adjectives follow the noun.',
    content: `In declarative clauses without focal fronting, the inflected verb leads the sentence:
**Verb + Subject + Object**
- *Ebuni ekiliokit.* = Comes the man (The man is coming).
- *Emasi ekiliokit akipi.* = Drinks the man water (The man drinks water).

All adjectives, demonstratives, and possessive pronouns follow the noun they modify:
- *etogo lo* = this house (masculine demonstrative *lo*)
- *akiteng na* = this cow (feminine demonstrative *na*)
- *ikoku lo* = this child
- *etogo kang* = my house
- *akiteng ka* = my cow`,
    examples: [
      { teso: 'Ebuni ekiliokit', english: 'The man is coming', explanation: 'VSO order: Verb + Subject' },
      { teso: 'etogo lo', english: 'this house', explanation: 'Noun + masculine demonstrative lo' },
      { teso: 'akiteng na', english: 'this cow', explanation: 'Noun + feminine demonstrative na' }
    ]
  },
  // ── EXPANDED GRAMMAR SECTIONS ──
  {
    "id": "teso-pronouns-possessives",
    "title": "Personal Pronouns, Inclusive/Exclusive 'We' & Gendered Possessives",
    "summary": "Ateso distinguishes inclusive ('oni') vs. exclusive ('isyo') 1st person plural and inflects possessives for noun gender.",
    "content": "In Hilders & Lawrance (1957) *An Introduction to the Ateso Language*, independent personal pronouns are:\n- **1s**: *eong* (I / me)\n- **2s**: *ijo* (you sg.)\n- **3s**: *ngesi* (he / she / it)\n- **1p Inclusive**: *oni* (we — including the person addressed)\n- **1p Exclusive**: *isyo* (we — excluding the person addressed)\n- **2p**: *yes* (you pl.)\n- **3p**: *kes* (they / them)\n\nPossessive adjectives suffix to the gender linker (**lo-** masculine, **na-** feminine, **lu-** masc. pl., **nu-** fem. pl.):\n- *etogo loka* (my house — masc.), *aberu naka* (my wife — fem.), *idwe luka* (my children).",
    "examples": [
      {
        "teso": "Eong ka ijo — oni.",
        "english": "I and you — we (inclusive).",
        "explanation": "Inclusive pronoun oni"
      },
      {
        "teso": "etogo loka / aberu naka",
        "english": "my house (m.) / my wife (f.)",
        "explanation": "Gender-agreed possessive loka vs. naka"
      },
      {
        "teso": "Emina ngesi idwe luke.",
        "english": "He/she loves his/her children.",
        "explanation": "3s pronoun ngesi + plural possessive luke"
      }
    ]
  },
  {
    "id": "teso-negation-extensions",
    "title": "Negation with 'Mam' & Verbal Extensions (Applicative, Causative, Passive)",
    "summary": "Ateso negates declarative clauses with the particle 'mam' (or 'mere' for nouns) and derives verbs with suffixal extensions.",
    "content": "Hilders & Lawrance (1957) describe two primary negation strategies in Ateso:\n1. **Verbal Negation with 'mam'**: Placed before the conjugated verb:\n   - *Ajeni eong* (I know) → **Mam eong ajeni** (I do not know).\n   - *Elosi ngesi* (He goes) → **Mam ngesi elosi** (He does not go).\n2. **Nominal / Copular Negation with 'mere'**:\n   - *Mere eong ekokolak* (I am not a thief).\n3. **Verbal Extensions**:\n   - **Applicative (-ikin / -okin)**: Action done for or toward someone (*inyamikin* - eat for/at).\n   - **Causative (isi- / it-)**: Prefix added to the verb stem (*isinyam* - feed / cause to eat; *isisiaun* - teach).\n   - **Reflexive / Middle Voice (-ar / -or)**: Action directed upon oneself.",
    "examples": [
      {
        "teso": "Mam eong ajeni Ateso.",
        "english": "I do not know Ateso.",
        "explanation": "Negative auxiliary mam"
      },
      {
        "teso": "Isisiauni ekapolon idwe.",
        "english": "The teacher teaches the children.",
        "explanation": "Causative prefix isi-"
      },
      {
        "teso": "Mere ngol etogo loka.",
        "english": "That is not my house.",
        "explanation": "Nominal negator mere"
      }
    ]
  }
];
