// ============================================================
// Kikuyu (Gĩkũyũ) Grammar Reference Guide
// Based on "First Lessons in Kikuyu" by L.S.B. Leakey (1959, Eagle Press)
// and "A Short Kikuyu Grammar".
// ============================================================

export interface KikuyuGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kikuyu: string; english: string; explanation?: string }[];
}

export const KIKUYU_GRAMMAR_SECTIONS: KikuyuGrammarSection[] = [
  {
    id: 'kikuyu-vowels',
    title: 'The Seven-Vowel Phonology & Tildes (ĩ / ũ)',
    summary: 'Gĩkũyũ possesses seven distinct vowel phonemes represented in standard orthography by a, e, i, o, u, and the tilded vowels ĩ and ũ.',
    content: `Unlike languages with five vowels, Gĩkũyũ has seven vowel phonemes with close phonemic distinctions:
- **a**: pronounced as in *father* (e.g., *baba* - father).
- **e**: open 'e' as in *bed* (e.g., *kera* - cross over).
- **i**: closed 'i' as in *machine* (e.g., *hinya* - strength).
- **ĩ**: close-mid vowel, between 'e' and 'i', similar to English *bit* (e.g., *mũndũ mũrũmĩrĩri* - follower).
- **o**: open 'o' as in *law* or *order* (e.g., *moko* - arms).
- **u**: closed back vowel as in *rule* (e.g., *nguru* - tortoise).
- **ũ**: close-mid back vowel, between 'o' and 'u', similar to English *put* or German *und* (e.g., *mũndũ* - person).

Omitting tildes changes the meaning of words completely:
- *kũra* (grow up) vs *kora* (find) vs *kũũra* (uproot) vs *kĩra* (be quiet).`,
    examples: [
      { kikuyu: 'mũndũ', english: 'person / human', explanation: 'Vowel ũ (near-close back)' },
      { kikuyu: 'mĩtĩ', english: 'trees', explanation: 'Vowel ĩ (near-close front)' },
      { kikuyu: 'kũgũrũ', english: 'leg / foot', explanation: 'Singular noun of Class IV with ũ' },
      { kikuyu: 'nyũmba', english: 'house', explanation: 'N-class noun with ũ' }
    ]
  },
  {
    id: 'kikuyu-noun-classes',
    title: 'Noun Classes & Concordial Agreement',
    summary: 'Nouns are divided into pairs of singular and plural classes that govern all adjectives, pronouns, and verbs.',
    content: `Leakey (1959) outlines the classical Gĩkũyũ noun classes:
1. **Class 1 (Mũ- / A-)**: Human beings.
   - *mũndũ* (person) → *andũ* (people)
   - *mũthengi* (cleaner) → *athengi* (cleaners)
2. **Class 2 (Mũ- / Mĩ-)**: Plants, trees, and natural objects.
   - *mũtĩ* (tree) → *mĩtĩ* (trees)
   - *mũkore* (fig tree) → *mĩkore* (fig trees)
3. **Class 3 (Kĩ- / Ci-)**: Artifacts, tools, and characteristics.
   - *kĩndũ* (thing) → *ciĩndũ* (things)
   - *kĩara* (finger) → *ciara* (fingers)
4. **Class 4 (I- / Ma- or Gĩ- / Ma-)**: Fruits, body parts, and augmentatives.
   - *igwa* (sugar cane) → *magwa* (canes)
   - *ithanwa* (axe) → *mathanwa* (axes)
5. **Class 5 (Rũ- / N- or Ny-)**: Long, thin items, extensions.
   - *rũrĩmĩ* (tongue) → *nĩmĩ* (tongues)
   - *rũhĩ* (palm of hand) → *hĩ* (palms)
6. **Class 6 (Ka- / Tũ-)**: Diminutives.
   - *kamũndũ* (little person) → *tũmũndũ* (little people)
   - *kahĩĩ* (boy) → *tũhĩĩ* (boys)
7. **Class 7 (Ũ- / Ma-)**: Abstract qualities and states.
   - *ũhoro* (news / matters) → *mohoro* (matters)
   - *ũtugi* (generosity)
8. **Class 8 (Kũ-)**: Infinitives / gerunds.
   - *kũrĩma* (to cultivate / farming)
9. **Class 9 (Ha-) & Class 10 (Kũ-)**: Locatives.
   - *handũ* (a specific place) / *kũndũ* (general area/direction).`,
    examples: [
      { kikuyu: 'mũndũ mũkũrũ', english: 'an old person', explanation: 'Class 1 concord: mũ- concord on both noun and adjective' },
      { kikuyu: 'andũ akũrũ', english: 'old people', explanation: 'Class 1 plural concord: a- concord' },
      { kikuyu: 'mũtĩ mũraaya', english: 'a tall tree', explanation: 'Class 2 singular concord: mũ-' },
      { kikuyu: 'kĩndũ kĩega', english: 'a good thing', explanation: 'Class 3 concord: kĩ-' }
    ]
  },
  {
    id: 'kikuyu-verb-tenses',
    title: 'The Tense System: Today vs Past vs Remote Past',
    summary: 'Gĩkũyũ verbs inflect precisely according to temporal distance from the moment of speech.',
    content: `Gĩkũyũ distinguishes between recent past (today), near past (yesterday), and remote past (before yesterday):
1. **Present Continuous**: Subject Prefix + -ra- + Verb Root + -a:
   - *Nĩndĩrarĩma* (I am cultivating right now).
2. **Immediate Past (Today)**: Root + -ĩte:
   - *Nĩndĩrĩmĩte* (I cultivated earlier today).
3. **Near Past (Yesterday)**: Root + -ire / -ĩire:
   - *Nĩndarĩmire ira* (I cultivated yesterday).
4. **Remote Past (Before yesterday)**:
   - *Nĩndarĩmire tene* (I cultivated long ago).
5. **Immediate Future (Today)**:
   - *Nĩngũrĩma* (I will cultivate today).
6. **Remote Future (Tomorrow onwards)**:
   - *Nĩngaagũra* (I will buy tomorrow/later).`,
    examples: [
      { kikuyu: 'Nĩndĩrarora', english: 'I am looking (now)', explanation: 'Present continuous tense with nĩ- prefix' },
      { kikuyu: 'Nĩndĩrorete', english: 'I have looked (earlier today)', explanation: 'Recent today past with -ete suffix' },
      { kikuyu: 'Nĩndarorire ira', english: 'I looked yesterday', explanation: 'Yesterday past with -ire suffix' },
      { kikuyu: 'Nĩngarora rũciũ', english: 'I will look tomorrow', explanation: 'Remote future tense' }
    ]
  },
  {
    id: 'kikuyu-negation',
    title: 'Verbal Negation Prefixes',
    summary: 'Negation is expressed through negative subject prefixes prefixed directly to the verbal stem.',
    content: `Affirmative statements often begin with the focus particle **nĩ-**, whereas negative statements replace the subjective prefix:
- 1st sing (I): *ndĩ-* (e.g., *ndĩkũĩ* - I do not know).
- 2nd sing (You): *ndũ-* (e.g., *ndũkaathiĩ* - do not go).
- 3rd sing (He/She): *nda-* (e.g., *ndarĩma* - he is not cultivating).
- 1st plural (We): *tũti-* (e.g., *tũtionaga* - we do not see).
- 2nd plural (You pl.): *mũti-* (e.g., *mũtiathiĩ* - do not go pl.).
- 3rd plural (They): *mati-* (e.g., *matiũĩ* - they do not know).`,
    examples: [
      { kikuyu: 'Nĩnjũĩ', english: 'I know', explanation: 'Affirmative with nĩ-' },
      { kikuyu: 'Ndikũĩ', english: 'I do not know', explanation: 'Negative 1st person prefix ndĩ-' },
      { kikuyu: 'Nĩenda', english: 'He/she wants', explanation: 'Affirmative 3rd person' },
      { kikuyu: 'Ndaenda', english: 'He/she does not want', explanation: 'Negative 3rd person prefix nda-' }
    ]
  },
  // ── EXPANDED GRAMMAR SECTIONS ──
  {
    "id": "kikuyu-possessives-demonstratives",
    "title": "Possessive Pronouns & Three-Degree Demonstratives",
    "summary": "Gĩkũyũ possessives and demonstratives inflect with the concord prefix of the possessed noun class.",
    "content": "In Gĩkũyũ (Leakey 1959), possessive stems (**-akwa** my, **-aku** your, **-ake** his/her, **-itũ** our, **-anyu** your pl., **-ao** their) take the concordial prefix of the noun they modify:\n- **Class 1 (wa-)**: *mũrata wakwa* (my friend), *mũndũ wao* (their person).\n- **Class 1 pl. (a-)**: *arata akwa* (my friends), *ciana ciakwa* (my children — Class 3 pl. *cia-*).\n- **Class 2 (wa- / ya-)**: *mũgũnda wakwa* (my farm) → *mĩgũnda yakwa* (my farms).\n- **Class 3 (gĩa- / cia-)**: *kĩndũ gĩakwa* (my thing) → *ciĩndũ ciakwa* (my things).\n\nDemonstratives distinguish three spatial degrees:\n- **Proximal (this near me)**: *ũyũ* (Cl. 1), *aya* (Cl. 1 pl.), *ĩno* (nyũmba ĩno - this house).\n- **Referential / Near Listener (that near you or just mentioned)**: *ũcio* (mũndũ ũcio), *acio* (andũ acio), *ĩyo* (nyũmba ĩyo).\n- **Distal (that yonder)**: *ũrĩa* (mũndũ ũrĩa), *arĩa* (andũ arĩa), *ĩrĩa* (nyũmba ĩrĩa).",
    "examples": [
      {
        "kikuyu": "mũrata wakwa / arata akwa",
        "english": "my friend / my friends",
        "explanation": "Class 1 singular wa- vs. plural a-"
      },
      {
        "kikuyu": "nyũmba ĩno vs. nyũmba ĩrĩa",
        "english": "this house vs. that house yonder",
        "explanation": "Proximal vs. distal demonstrative"
      },
      {
        "kikuyu": "mũgũnda witũ",
        "english": "our farm / garden",
        "explanation": "1st person plural possessive -itũ"
      }
    ]
  },
  {
    "id": "kikuyu-locatives-prepositions",
    "title": "The Locative Suffix (-inĩ) & Spatial Prepositions",
    "summary": "The suffix -inĩ attaches to nouns to express 'in, at, on, or near', complemented by spatial nouns like igũrũ, thĩ, and gatagatĩ.",
    "content": "Rather than using standalone prepositions for 'in' or 'at', Gĩkũyũ suffixes **-inĩ** directly to the noun:\n- *nyũmba* (house) → **nyũmba-inĩ** (in/at the house)\n- *mũgũnda* (farm) → **mũgũnda-inĩ** (in the farm/garden)\n- *rũũĩ* (river) → **rũũĩ-inĩ** (at/in the river)\n- *njĩra* (path/road) → **njĩra-inĩ** (on the road)\n\nCompound spatial relations use associative **wa / cia / ya**:\n- **igũrũ rĩa** (on top of / above)\n- **rungũ rwa** (underneath / below)\n- **gatagatĩ ka** (in the middle of / between)\n- **mbere ya** (in front of / before) and **thutha wa** (behind / after).",
    "examples": [
      {
        "kikuyu": "Ciana irĩ nyũmba-inĩ.",
        "english": "The children are in the house.",
        "explanation": "Locative suffix -inĩ"
      },
      {
        "kikuyu": "Igũrũ rĩa kĩrĩma",
        "english": "On top of the mountain",
        "explanation": "Compound spatial phrase"
      },
      {
        "kikuyu": "Thutha wa nyũmba",
        "english": "Behind the house",
        "explanation": "Spatial noun thutha + wa"
      }
    ]
  },
  {
    "id": "kikuyu-verbal-extensions",
    "title": "Verbal Extensions: Applicative (-ĩra), Causative (-ithia) & Passive (-wo)",
    "summary": "Gĩkũyũ derives new verb meanings systematically by adding suffixes to the verb root before the final vowel.",
    "content": "As documented in *A Short Kikuyu Grammar* and Leakey (1959), verb roots take productive derivational suffixes:\n- **Applicative (-ĩra / -era)**: Do for, to, or on behalf of someone.\n  - *rũga* (cook) → **rũgĩra** (cook for); *handa* (plant) → **handĩra** (plant for).\n- **Causative (-ithia / -ia)**: Cause or help someone to do something.\n  - *rĩma* (cultivate) → **rĩmithia** (cause to cultivate); *menya* (know) → **menyithia** (inform / make known).\n- **Passive (-wo / -ĩrwo)**: Turns an active verb into the passive voice.\n  - *ona* (see) → **onwo** (be seen); *rũga* (cook) → **rũgwo** (be cooked).\n- **Reciprocal (-ana)**: Action done to one another.\n  - *enda* (love) → **endana** (love one another); *iguana* (agree / understand one another).",
    "examples": [
      {
        "kikuyu": "Nĩndĩrarũgĩra ciana irio.",
        "english": "I am cooking food for the children.",
        "explanation": "Applicative suffix -ĩra"
      },
      {
        "kikuyu": "Nĩtũkwendana mũno.",
        "english": "We love one another very much.",
        "explanation": "Reciprocal suffix -ana"
      },
      {
        "kikuyu": "Irio nĩ irũgĩtwo.",
        "english": "The food has been cooked.",
        "explanation": "Perfect passive -ĩtwo"
      }
    ]
  }
];
