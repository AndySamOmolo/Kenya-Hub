// ============================================================
// Luhya (Oluluhya / Oluluyia) Grammar Reference Guide
// Based on "A First Luyia Grammar" by L.L. Appleby (Eagle Press, 1961)
// and "Wanga-English Dictionary" by Alfred Anangwe & Michael R. Marlo (2008).
// ============================================================

export interface LuhyaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { luhya: string; english: string; explanation?: string }[];
}

export const LUHYA_GRAMMAR_SECTIONS: LuhyaGrammarSection[] = [
  {
    id: 'luhya-noun-classes',
    title: 'Noun Classes & Initial Vowels (Pre-prefixes)',
    summary: 'Luhya dialects preserve the ancient Bantu augments (initial vowels) before noun class prefixes, which govern strict agreement.',
    content: `Appleby (1961) details the classical Luyia noun class system with its characteristic initial vowels (augments):
1. **Class 1/2 (Omu- / Aba-)**: Persons.
   - *omundu* (person) → *abandu* (people)
   - *omusiani* (boy) → *abasiani* (boys)
   - *omukhana* (girl) → *abakhana* (girls)
2. **Class 3/4 (Omu- / Emi-)**: Trees, inanimate forces, body parts.
   - *omusaala* (tree) → *emisaala* (trees)
   - *omuliro* (fire) → *emiliro* (fires)
3. **Class 5/6 (Eli- / Ama-)**: Paired body parts, fruits, natural objects.
   - *eliba* (stone) → *amaba* (stones)
   - *eliino* (tooth) → *ameeno* (teeth)
   - *eliso* (eye) → *ameeso* (eyes)
4. **Class 7/8 (Eshi- / Ebi-)**: Objects, tools, languages, customs.
   - *eshindu* (thing) → *ebindu* (things)
   - *eshitabu* (book) → *ebitabu* (books)
   - *Olwanga* / *Luluhya* (languages)
5. **Class 9/10 (In- / Tsin-)**: Animals, domestic articles.
   - *ing\'ombe* (cow) → *tsing\'ombe* (cattle)
   - *inzu* (house) → *tsinzu* (houses)
   - *imbusi* (goat) → *tsimbusi* (goats)
6. **Class 11/10 (Olu- / Tsin-)**: Long, slender items.
   - *olukuku* (fence) → *tsinguku* (fences)
   - *oluche* (river) → *tsinche* (rivers)
7. **Class 12/13 (Oka- / Utu-)**: Diminutives.
   - *okana* (small child) → *utwana* (small children)
8. **Class 15 (Okhu-)**: Infinitives and body parts.
   - *okhukola* (to do / to make)
   - *okhugulu* (leg) → *amagulu* (legs)
9. **Class 16/17/18 (Aha- / Okhu- / Omu-)**: Locatives.
   - *ahandu* (at a place), *okhundu* (towards a place), *omundu* (inside a place).`,
    examples: [
      { luhya: 'omundu mulahi', english: 'a good person', explanation: 'Class 1 concord on noun and adjective' },
      { luhya: 'abandu balahi', english: 'good people', explanation: 'Class 2 plural concord: ba-' },
      { luhya: 'eshitabu shianje', english: 'my book', explanation: 'Class 7 possessive concord: shi-' },
      { luhya: 'ebitabu bianje', english: 'my books', explanation: 'Class 8 plural possessive concord: bi-' }
    ]
  },
  {
    id: 'luhya-subject-prefixes',
    title: 'Subject Prefixes & Verb Conjugation',
    summary: 'Verbs are conjugated by attaching subjectival concords corresponding to person or noun class.',
    content: `Personal subject prefixes in Luyia/Wanga:
- 1st Sing (I): *e-* / *n-* (e.g., *ndola* - I see, *ekhola* - I do)
- 2nd Sing (You): *o-* (e.g., *okhola* - you do)
- 3rd Sing (He/She): *a-* (e.g., *akhola* - he/she does)
- 1st Plur (We): *khu-* (e.g., *khukhola* - we do)
- 2nd Plur (You pl.): *mu-* (e.g., *mukhola* - you all do)
- 3rd Plur (They): *ba-* (e.g., *bakhola* - they do)

The negative replaces the initial prefix with *shi-* or *kha-*:
- *shekhola ta* (I do not do).
- In Luyia, the post-verbal negative particle *ta* or *tawe* reinforces negation.`,
    examples: [
      { luhya: 'Ndekha omukati', english: 'I am cooking bread', explanation: '1st person singular prefix n-' },
      { luhya: 'Bakhola emirimo', english: 'They are working', explanation: '3rd person plural prefix ba-' },
      { luhya: 'Shetsia tawe', english: 'I am not going', explanation: 'Negative shi- with sentence-final tawe' }
    ]
  },
  {
    id: 'luhya-verbal-extensions',
    title: 'Verbal Extensions in Wanga & Central Luyia',
    summary: 'As documented by Anangwe & Marlo (2008), verbal derivation adds nuanced semantic extensions to the verb stem.',
    content: `Verbal extensions are suffixes added to verb roots before the final vowel:
1. **Applicative (-ela / -ila)**: Doing for or towards.
   - *okhusoma* (to read) → *okhusomela* (to read for).
2. **Causative (-ia / -isia)**: Causing an action.
   - *okhulola* (to see) → *okhulolesia* (to show / reveal).
   - *okhulia* (to eat) → *okhulisia* (to feed).
3. **Reciprocal (-ana)**: Mutual interaction.
   - *okhwenda* (to love) → *okwendana* (to love one another).
4. **Stative / Potential (-ikha / -ekha)**: Capability or resulting condition.
   - *okhukola* (to make) → *okhukolekha* (to be doable / possible).
5. **Reversive (-ula / -ulula)**: Undoing an action.
   - *okhuboho* (to tie) → *okhubohola* (to untie).`,
    examples: [
      { luhya: 'Somelanje ebaluwa', english: 'Read the letter for me', explanation: 'Applicative extension -ela' },
      { luhya: 'Bachekhana', english: 'They are laughing at one another', explanation: 'Reciprocal extension -ana' },
      { luhya: 'Lolesia amani ketsio', english: 'Show your strength', explanation: 'Causative extension -esia' }
    ]
  }
];
