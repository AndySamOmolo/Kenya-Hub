// ============================================================
// Kisii (Ekegusii) Grammar Reference Guide
// Based on "A Practical Introduction to Gusii" (1956)
// and "The Tense System of Gusii" (1960) by Wilfred H. Whiteley
// (East African Literature Bureau).
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
    id: 'gusii-phonology',
    title: 'Phonology, Seven Vowels & Dahl\'s Law',
    summary: 'Ekegusii features a seven-vowel inventory, vowel harmony, and the famous Bantu consonant dissimilation known as Dahl\'s Law.',
    content: `Wilfred Whiteley (1956) established the systematic grammar of Ekegusii, noting several key phonological properties:
1. **Seven Vowel System**:
   - High vowels: /i/, /u/
   - Mid-high vowels: /e/, /o/
   - Open-mid vowels: /ɛ/, /ɔ/ (often written as *e* and *o* with diacritics or context)
   - Low vowel: /a/
2. **Dahl\'s Law (Consonant Dissimilation)**:
   - In Ekegusii, when two successive syllables each begin with a voiceless plosive (such as /k/ or /t/), the first consonant dissimilates and becomes voiced.
   - For instance, the class prefix *ke-* becomes *ge-* when the following root consonant is a voiceless stop (e.g., *gekoro* rather than *kekoro*).
3. **Prenasalization**:
   - Nasal prefixes assimilate to the place of articulation of following consonants: *n- + p → mb*, *n- + t → nd*, *n- + k → ng*.`,
    examples: [
      { kisii: 'omonto', english: 'person / human', explanation: 'Class 1 singular with prefix omo-' },
      { kisii: 'gekoro', english: 'thing / object', explanation: 'Dahl\'s Law: ke- becomes ge- before voiceless k' },
      { kisii: 'ebĩkoro', english: 'things / objects', explanation: 'Plural form with ebi- prefix' },
      { kisii: 'enyoni', english: 'bird', explanation: 'N-class singular' }
    ]
  },
  {
    id: 'gusii-noun-classes',
    title: 'Noun Class System & Agreement',
    summary: 'Ekegusii nouns are organized into distinct classes marked by prefixes that govern concord across adjectives, numerals, and verbs.',
    content: `The primary noun classes in Ekegusii:
1. **Class 1/2 (Omo- / Aba-)**: Human beings.
   - *omonto* (person) → *abanto* (people)
   - *omomura* (young man / youth) → *abamura* (youths)
   - *omoisiki* (girl) → *abaisiki* (girls)
2. **Class 3/4 (Omo- / Eme-)**: Trees, botanical species, non-human entities.
   - *omote* (tree) → *emete* (trees)
   - *omogondo* (farm / shamba) → *emegondo* (farms)
3. **Class 5/6 (Eri- / Ama-)**: Fruits, body parts, paired objects.
   - *eriso* (eye) → *amaiso* (eyes)
   - *eriino* (tooth) → *amaino* (teeth)
   - *eriko* (hearth / kitchen) → *amako* (hearths)
4. **Class 7/8 (Eke- or Ge- / Ebi-)**: Things, artifacts, diminutives.
   - *egetabu* (book) → *ebitabu* (books)
   - *ekero* (time / season) → *ebiro* (times)
5. **Class 9/10 (E- or En- / Chi-)**: Animals, domestic items.
   - *eng\'ombe* (cow) → *ching\'ombe* (cattle)
   - *enyomba* (house) → *chinyomba* (houses)
6. **Class 11 (Oro- / Chi-)**: Long thin objects.
   - *oroche* (river) → *chiche* (rivers)
7. **Class 14 (Obo-)**: Abstract qualities.
   - *obwate* (wisdom / understanding)
   - *obuya* (goodness / kindness)
8. **Class 15 (Oko-)**: Infinitives.
   - *ogokora* (to do / to make).`,
    examples: [
      { kisii: 'omonto omuya', english: 'a good person', explanation: 'Class 1 concord: omo- prefix + omuya adjective' },
      { kisii: 'abanto abaya', english: 'good people', explanation: 'Class 2 plural concord: aba-' },
      { kisii: 'egetabu geke', english: 'a small book', explanation: 'Class 7 concord: ge-' },
      { kisii: 'ebitabu bike', english: 'small books', explanation: 'Class 8 concord: bi-' }
    ]
  },
  {
    id: 'gusii-tenses',
    title: 'The Multi-Tiered Tense & Aspect System',
    summary: 'Whiteley (1960) documented the intricate temporal depth of Ekegusii verbs, which separate today\'s events from past days.',
    content: `Ekegusii verbs inflect for tense and aspect through pre-stem prefixes, infixes, and suffixes:
1. **Present Progressive / Habitual**:
   - Subject prefix + -ra- / -ko- + Stem:
   - *Ningokora* (I am doing / I do).
2. **Immediate Past (Events earlier today)**:
   - Prefixes with -a- and perfective suffix -ire:
   - *Naakora* or *Naakorire* (I did earlier today).
3. **Near Past (Yesterday)**:
   - Distinct morphological marker distinguishing yesterday from today:
   - *Nakorire igoro* (I did yesterday).
4. **Remote Past (Before yesterday)**:
   - Characterized by long vowel prefix or remote marker:
   - *Naakorire kare* (I did long ago / anciently).
5. **Immediate Future (Later today)**:
   - *Ninkore* (I will do today).
6. **Remote Future (Tomorrow onwards)**:
   - *Nindigokora mocho* (I will do tomorrow).`,
    examples: [
      { kisii: 'Ningosoma egetabu', english: 'I am reading a book', explanation: 'Present progressive tense' },
      { kisii: 'Naasomete igoro', english: 'I read yesterday', explanation: 'Near past tense' },
      { kisii: 'Nindigoche mocho', english: 'I will come tomorrow', explanation: 'Remote future tense' },
      { kisii: 'Mbaakora', english: 'They did / worked', explanation: '3rd person plural past' }
    ]
  },
  {
    id: 'gusii-verbal-extensions',
    title: 'Verbal Extensions (Applicative, Causative, Reciprocal)',
    summary: 'Ekegusii verbs expand their core meaning through suffixation to indicate causation, assistance, or mutual action.',
    content: `By inserting extensions into the verb root before the final vowel:
- **Applicative (-era / -ira)**: Doing an action *for* or *on behalf of* someone.
  - *ogokora* (to do) → *ogokorera* (to do for someone).
- **Causative (-ia / -sia)**: Causing an action to happen.
  - *ogosoma* (to read/learn) → *ogosomia* (to teach / cause to learn).
- **Reciprocal (-ana)**: Performing an action mutually.
  - *ogotagao* (to love) → *ogotagana* (to love one another).
- **Stative / Neuter (-eka / -ika)**: Expressing potential or state.
  - *ogotena* (to break) → *ogoteneka* (to be breakable / broken).`,
    examples: [
      { kisii: 'Nkorere obuya', english: 'Do good for me', explanation: 'Applicative extension -era' },
      { kisii: 'Togotagana', english: 'We love one another', explanation: 'Reciprocal extension -ana' },
      { kisii: 'Ogosomia abamura', english: 'To teach the youth', explanation: 'Causative extension -ia' }
    ]
  }
];
