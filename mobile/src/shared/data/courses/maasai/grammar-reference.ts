// ============================================================
// Maasai (Maa) Grammar Reference Guide
// Based on "Maasai Dictionary" by Charles Richmond (circa 1940,
// Humboldt State University Press) and Hollis (1905).
// ============================================================

export interface MaasaiGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { maasai: string; english: string; explanation?: string }[];
}

export const MAASAI_GRAMMAR_SECTIONS: MaasaiGrammarSection[] = [
  {
    id: 'maasai-gender-articles',
    title: 'Grammatical Gender Articles & Concord',
    summary: 'Every Maa noun incorporates an initial gender article marking Masculine (Ol- / Il-) or Feminine (En- / In-), which also encodes size and diminutives.',
    content: `Charles Richmond (c. 1940) and Hollis (1905) documented the fundamental gender article system of Maa:
1. **Masculine Articles**:
   - Singular: **ol-**, **o-**, or **or-** before certain consonants.
   - Plural: **il-** or **i-**.
   - Examples:
     - *ol-tungani* (man) → *il-tungana* (men)
     - *ol-morani* (warrior) → *il-moran* (warriors)
     - *ol-ashe* (male calf) → *il-asho* (calves)
2. **Feminine Articles**:
   - Singular: **en-**, **eng-**, or **e-**.
   - Plural: **in-**, **ing-**, or **i-**.
   - Examples:
     - *en-gitok* (woman) → *in-gituak* (women)
     - *en-kerai* (child) → *in-kera* (children)
     - *eng-are* (water) → *ing-ariak* (waters)
3. **Semantic Shifts by Gender Alternation**:
   - Shifting a noun from feminine to masculine augments its scale (makes it larger or coarser), while shifting masculine to feminine imparts a diminutive or affectionate quality:
     - *ol-chani* (tree / large timber) vs *en-chani* (small shrub / medicinal herb).
     - *ol-dia* (large dog) vs *en-dia* (small dog / puppy).`,
    examples: [
      { maasai: 'ol-morani', english: 'the warrior (masculine singular)', explanation: 'Article ol-' },
      { maasai: 'il-moran', english: 'the warriors (masculine plural)', explanation: 'Article il-' },
      { maasai: 'en-kiteng', english: 'the cow (feminine singular)', explanation: 'Article en-' },
      { maasai: 'in-kishu', english: 'the cattle (feminine plural)', explanation: 'Suppletive plural with feminine article in-' }
    ]
  },
  {
    id: 'maasai-verb-conjugation',
    title: 'The Two Verb Classes & Person Prefixes',
    summary: 'Maa verbs belong to Class 1 (root verbs) or Class 2 (I-prefix verbs), taking person prefixes that indicate the subject.',
    content: `Maa divides verbs into two morphophonological classes:
1. **Class 1 (Primitive Verbs)**:
   - Stems without an inherent initial *i-*:
   - *a-lo* (to go), *a-lotu* (to come), *a-nya* (to eat), *a-ok* (to drink), *a-dol* (to see), *a-ning* (to hear).
2. **Class 2 (Derived / I-Verbs)**:
   - Stems with an inherent prefix *i-*:
   - *a-irrag* (to lie down / sleep), *a-iro* (to speak), *a-isoma* (to read), *a-itobir* (to fix / prepare).

Subject Prefixes (Indicative Present):
- 1st Sing (I): **a-** (*a-lo* = I go, *a-ning* = I hear)
- 2nd Sing (You): **i-** (*i-lo* = you go, *i-ning* = you hear)
- 3rd Sing (He/She/It): **e-** (*e-lo* = he/she goes, *e-ning* = he/she hears)
- 1st Plur (We): **ki-** (*ki-lo* = we go, *ki-ning* = we hear)
- 2nd Plur (You pl.): **i-...-te** (*i-lotu-tu* = you pl. come)
- 3rd Plur (They): **e-** (*e-lo* = they go, *e-ning* = they hear).`,
    examples: [
      { maasai: 'A-ramat in-kishu', english: 'I tend the cattle', explanation: 'Class 1 verb with 1st person prefix a-' },
      { maasai: 'E-sha en-chan', english: 'Rain is falling', explanation: '3rd person singular e-' },
      { maasai: 'Ki-ok kule', english: 'We drink milk', explanation: '1st person plural ki-' },
      { maasai: 'I-ning ol-aigwanani?', english: 'Do you hear the council speaker?', explanation: '2nd person singular i-' }
    ]
  },
  {
    id: 'maasai-word-order',
    title: 'VSO Syntax & Postposed Modifiers',
    summary: 'Maa is predominantly a Verb-Subject-Object (VSO) language, where modifying adjectives and numbers follow the noun.',
    content: `In standard declarative sentences, the verb appears at the beginning of the clause:
**Verb + Subject + Object**
- *E-nya ol-morani en-giringo.* = Eats the warrior the meat (The warrior is eating meat).
- *E-irrag ol-payian te ng-aji.* = Lies down the elder in the house (The elder sleeps in the house).

Post-nominal modifiers:
- Modifiers follow the noun:
  - *ol-tungani supat* = a good man
  - *in-kera sidain* = good children
  - *in-kishu tomon* = ten cows
  - *eng-ang ai* = my homestead.`,
    examples: [
      { maasai: 'E-nya ol-morani en-giringo', english: 'The warrior is eating meat', explanation: 'VSO: Verb (E-nya) + Subject (ol-morani) + Object (en-giringo)' },
      { maasai: 'ol-tungani supat', english: 'a good / upright person', explanation: 'Noun + qualifying adjective' },
      { maasai: 'in-kishu tomon', english: 'ten cattle', explanation: 'Noun + postposed numeral' }
    ]
  }
];
