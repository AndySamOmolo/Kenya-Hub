// ============================================================
// Turkana Grammar Reference Guide
// Based on "A Classified Vocabulary of the Turkana in Northwestern Kenya"
// by Itaru Ohta (Kyoto University, 1989) & Dimmendaal (1983)
// ============================================================

export interface GrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { turkana: string; english: string; explanation?: string }[];
}

export const TURKANA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'noun-gender',
    title: 'Noun Gender & Class Prefixes',
    summary: 'Every Turkana noun is prefixed by an inherent grammatical gender marker: Masculine (e-), Feminine (a-), or Diminutive/Neuter (i-).',
    content: `In Turkana (Ng'aturukana), nouns belong to one of three grammatical genders, indicated by initial prefix vowels in the singular:
- **Masculine (e-)**: *ekile* (man), *emoru* (mountain), *ekaal* (camel), *ekume* (nose).
- **Feminine (a-)**: *aberu* (woman), *aite* (cow), *akou* (head), *angine* (goat).
- **Diminutive / Neuter (i-)**: *ikoku* (child), *itaok* (calf), *iingok* (dog).

When pluralized, the prefixes shift to plural markers:
- Masculine plurals take **ngi-**: *ngikilyok* (men), *ngimor* (mountains), *ngikaala* (camels).
- Feminine plurals take **nga-**: *ngaangorin* (women), *ngaatuk* (cattle), *nganginei* (goats).
- Diminutive plurals take **ngi-** or **nga-**: *ngidwe* (children), *ngitak* (calves).`,
    examples: [
      { turkana: 'ekile → ngikilyok', english: 'man → men', explanation: 'Masculine singular e- becomes ngi-' },
      { turkana: 'aite → ngaatuk', english: 'cow → cattle', explanation: 'Feminine singular a- becomes nga-' },
      { turkana: 'itaok → ngitak', english: 'calf → calves', explanation: 'Diminutive i- becomes ngi-' },
      { turkana: 'akou → ngakes', english: 'head → heads', explanation: 'Feminine singular a- with plural ngak-' }
    ]
  },
  {
    id: 'verb-classes',
    title: 'The Two Verb Classes: Class 1 (TO) and Class 2 (KI)',
    summary: 'Turkana verbs divide strictly into two morphophonological classes that determine their infinitive, imperative, and tense prefixes.',
    content: `Turkana verbs belong to two fundamental morphological classes:
1. **Class 1 (TO-verbs)**:
   - Infinitives start with *a-*: e.g. *akinyam* (to eat), *akimat* (to drink), *alosit* (to go), *aanyun* (to see).
   - Imperatives take the prefix *to-*, *ta-*, or *te-*: e.g. *Tolotu!* (Go!), *Tanyama!* (Eat!).
   - Subclassified into **/TA** (characteristic vowel 'a') and **/TO** (characteristic vowel 'o').

2. **Class 2 (KI-verbs)**:
   - Infinitives begin with *aki-*: e.g. *akilep* (to milk), *akiyok* (to herd), *akitia* (to work), *akitere* (to look at).
   - Imperatives take *ki-* or *ko-*: e.g. *Kilepu!* (Milk!), *Kiyoko!* (Herd!).
   - Subclassified into **/KA** and **/KO**.`,
    examples: [
      { turkana: 'akinyam (/TA)', english: 'to eat', explanation: 'Class 1 TO-verb, characteristic vowel a' },
      { turkana: 'alosit (/TO)', english: 'to go', explanation: 'Class 1 TO-verb, imperative: Tolotu!' },
      { turkana: 'akilep (/TO)', english: 'to milk', explanation: 'Class 2 verb, imperative: Kilepu!' },
      { turkana: 'akiyok (/KO)', english: 'to herd livestock', explanation: 'Class 2 KI-verb, characteristic vowel o' }
    ]
  },
  {
    id: 'sentence-order',
    title: 'Word Order: Verb-Subject-Object (VSO)',
    summary: 'Turkana is fundamentally a VSO language: sentences typically begin with the inflected verb, followed by the subject, then the object.',
    content: `Unlike English (SVO) or Bantu languages (SVO), Turkana typically places the inflected verb at the head of the clause:
**Verb + Subject + Object**
- *Enyami ekile akiring.* = Eats the-man meat (The man is eating meat).
- *Elepi aberu aite.* = Milks the-woman the-cow (The woman is milking the cow).
- *Eyoki esorokit ngaatuk.* = Herds the-youth the-cattle (The youth is grazing the cattle).

Adjectives and demonstratives follow the noun they modify:
- *ekile lokajokon* = a good man
- *aite na* = this cow
- *ngaatuk nguna* = those cattle`,
    examples: [
      { turkana: 'Enyami ekile akiring.', english: 'The man is eating meat.', explanation: 'VSO: Enyami (Verb) + ekile (Subject) + akiring (Object)' },
      { turkana: 'Elepi aberu ngakile.', english: 'The woman is milking milk.', explanation: 'VSO structure' },
      { turkana: 'Ejok akolong na.', english: 'This day is good.', explanation: 'Predicate adjective followed by noun + demonstrative' }
    ]
  },
  {
    id: 'pronouns-possessives',
    title: 'Pronouns & Inclusive/Exclusive "We"',
    summary: 'Turkana features personal pronouns with a crucial distinction between inclusive "we" (ngooni) and exclusive "we" (sua).',
    content: `Personal pronouns in Turkana:
- **Ayong**: I / me
- **Iyong**: You (singular)
- **Ngesi**: He / she / it
- **Ngooni**: We (inclusive — includes the speaker and listener: "you and I")
- **Sua**: We (exclusive — excludes the listener: "us, but not you")
- **Esi**: You (plural)
- **Kec**: They / them

Possession is attached as enclitics or following possessives:
- *kang* (my), *kon* (your sing.), *keng* (his/her)
- *yok* (our inclusive), *kosi* (our exclusive), *kusu* (your pl.), *kec* (their)
Example: *apa kang* (my father), *ito yok* (our mother - inclusive).`,
    examples: [
      { turkana: 'Ayong ekile.', english: 'I am a man.', explanation: 'Pronoun + noun predicate' },
      { turkana: 'Ngooni Ngiturukana.', english: 'We (all of us) are Turkana.', explanation: 'Inclusive we' },
      { turkana: 'apa kang', english: 'my father', explanation: 'Noun + 1st person possessive' },
      { turkana: 'ito yok', english: 'our mother (inclusive)', explanation: 'Inclusive plural possessive' }
    ]
  },
  {
    id: 'pastoral-system',
    title: 'Pastoral Livestock Taxonomy',
    summary: 'The Turkana pastoral vocabulary classifies animals by species, age, sex, coat color pattern, and horn configuration.',
    content: `Livestock (*ngibaren*) is central to the Turkana worldview. Specific terms identify the exact maturity and sex of each animal:
- **Bovine**: *aite* (cow), *emaanik* (breeding bull), *emong* (castrated ox), *itaok* (calf), *ataparait* (heifer).
- **Camel**: *ekaal* (camel), *eiteng* (young camel), *alepon* (milking camel).
- **Caprine / Ovine**: *angine* (she-goat), *ekoroi* (he-goat), *emeseek* (sheep), *ikale* (kid/lamb).
- **Coat colors**: *ekwaang* (white), *ekiryon* (black), *ereeng* (reddish-brown), *enyang* (yellow), *epus* (blue-gray).`,
    examples: [
      { turkana: 'ngibaren', english: 'livestock / wealth', explanation: 'Collective term for all domestic animals' },
      { turkana: 'ngakile nalepan', english: 'freshly milked milk', explanation: 'Specific condition of milk' },
      { turkana: 'anok a ngaatuk', english: 'cattle kraal', explanation: 'Thorn enclosure for cows' }
    ]
  }
];
