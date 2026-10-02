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
  }
];
