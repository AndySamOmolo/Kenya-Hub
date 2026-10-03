// ============================================================
// Kamba (Kĩkamba) Grammar Reference Guide
// Based on "Grammar of the Kamba Language" by J.T. Last (CMS, 1885),
// "Vocabularies of the Kamba and Kikuyu Languages" by Hildegarde Hinde (1904),
// and "Bantu Beliefs and Magic" by C.W. Hobley (1922).
// ============================================================

export interface KambaGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { kamba: string; english: string; explanation?: string }[];
}

export const KAMBA_GRAMMAR_SECTIONS: KambaGrammarSection[] = [
  {
    id: 'kamba-phonology-lenition',
    title: 'Phonology, Intervocalic Lenition & R-Loss',
    summary: 'Kĩkamba is distinguished among Central Kenya Bantu languages by the widespread loss of Proto-Bantu *p, *t, *k in intervocalic positions and the complete absence of the rhotic /r/.',
    content: `Hildegarde Hinde (1904) and J.T. Last (1885) highlighted key phonological contrasts between Kĩkamba and neighboring Gĩkũyũ:
1. **Absence of /r/**:
   - Where Gĩkũyũ and other Bantu languages preserve an 'r', Kĩkamba typically elides it completely or substitutes a lateral /l/ or glide /y/:
   - Gĩkũyũ *kũrĩma* (to farm) → Kĩkamba *kũĩma*.
   - Gĩkũyũ *marĩgu* (bananas) → Kĩkamba *maiu*.
   - Gĩkũyũ *rũrĩmĩ* (tongue) → Kĩkamba *ũmĩ*.
   - Gĩkũyũ *kĩratũ* (shoe) → Kĩkamba *kĩlaato*.
2. **Intervocalic Consonant Elision**:
   - Consonants between vowels frequently drop, creating characteristic vowel sequences:
   - *mũsyĩ* (homestead, cf. Kikuyu *mũciĩ*).
   - *maanzi* (water, cf. Kikuyu *maaĩ*).
3. **Dialect Divisions**:
   - **Ulu (Western/Machakos)**: Widespread in Machakos and Makueni.
   - **Nganyawa / Kitui (Eastern)**: Exhibits distinct lexical variants noted by Hinde (1904) and closer intelligibility with southern Mt. Kenya groups.`,
    examples: [
      { kamba: 'kũĩma', english: 'to cultivate / farm', explanation: 'Cognate with Kikuyu kũrĩma; loss of intervocalic r' },
      { kamba: 'maiu', english: 'bananas', explanation: 'Cognate with Kikuyu marĩgu; loss of r and g' },
      { kamba: 'kĩlaato', english: 'sandal / shoe', explanation: 'Lateral l corresponds to Kikuyu r (kĩratũ)' },
      { kamba: 'maanzi', english: 'water', explanation: 'Distinctive Akamba term for water' }
    ]
  },
  {
    id: 'kamba-noun-classes',
    title: 'Noun Classes & Concordial Inflexion',
    summary: 'Kĩkamba organizes nouns into paired gender classes distinguished by prefixes that govern concord on adjectives, numerals, and verbs.',
    content: `The primary noun classes in Kĩkamba:
1. **Class 1/2 (Mũ- / A-)**: Animate beings / persons.
   - *mũndũ* (person) → *andũ* (people)
   - *mũndũũme* (man) → *aũme* (men)
   - *mũka* (woman / wife) → *aka* (women / wives)
2. **Class 3/4 (Mũ- / Mĩ-)**: Botanical life, natural inanimate entities.
   - *mũtĩ* (tree) → *mĩtĩ* (trees)
   - *mũsyĩ* (homestead) → *mĩsyĩ* (homesteads)
3. **Class 5/6 (Ĩ- / Ma-)**: Paired items, fruits, stones.
   - *ĩvia* (stone) → *mavia* (stones)
   - *ĩtumo* (spear) → *matumo* (spears)
   - *ithangu* (leaf) → *mathangu* (leaves)
4. **Class 7/8 (Kĩ- / I- or Syĩ-)**: Artifacts, tools, and qualities.
   - *kĩlaato* (sandal) → *ilaato* (sandals)
   - *kĩtĩ* (stool / chair) → *syĩtĩ* or *itĩ* (chairs)
5. **Class 9/10 (N- / N-)**: Animals and invariable nouns.
   - *nyũmba* (house) → *nyũmba* (houses)
   - *ng\'ombe* (cow) → *ng\'ombe* (cattle)
   - *mbũi* (goat) → *mbũi* (goats)
6. **Class 11 (Ũ- / Ma-)**: Abstract nouns and thin entities.
   - *ũvoo* (news / matters) → *moo* (tidings)
   - *ũseo* (goodness / peace)
7. **Class 12/13 (Ka- / Tũ-)**: Diminutives.
   - *kana* (child) → *twana* (children)
   - *kembũi* (small goat) → *tũmbũi* (small goats)
8. **Class 15 (Kũ-)**: Infinitives.
   - *kũthi* (to go), *kũka* (to come), *kũsoma* (to read).`,
    examples: [
      { kamba: 'mũndũ mũseo', english: 'a good person', explanation: 'Class 1 concord: mũ- concord on noun and adjective' },
      { kamba: 'andũ aseo', english: 'good people', explanation: 'Class 2 plural concord: a-' },
      { kamba: 'kĩtĩ kĩseo', english: 'a good chair', explanation: 'Class 7 concord: kĩ-' },
      { kamba: 'mũtĩ mũasa', english: 'a tall tree', explanation: 'Class 3 concord: mũ-' }
    ]
  },
  {
    id: 'kamba-verbal-system',
    title: 'The Tense-Aspect System & Negation',
    summary: 'Verbal prefixes encode person, tense, and aspect, with affirmative focus marked by nĩ- and negation by ndĩ- / ndũ- / nda-.',
    content: `Affirmative indicative sentences routinely introduce the predicate with the assertive particle **nĩ-**:
- *Nĩngũthi* = I will go / I am going
- *Nĩnĩkĩte* = I have arrived
- *Nĩwendaa* = You want

Subject Prefixes:
- 1st Sing (I): *nĩ-* / *ngũ-* (negative: *ndĩ-*)
- 2nd Sing (You): *ũ-* (negative: *ndũ-*)
- 3rd Sing (He/She): *a-* (negative: *nda-*)
- 1st Plur (We): *tũ-* (negative: *tũti-*)
- 2nd Plur (You pl.): *mũ-* (negative: *mũti-*)
- 3rd Plur (They): *ma-* (negative: *mati-*)

Example negatives:
- *Ndĩsĩ* = I do not know
- *Ndũkathi* = Do not go
- *Matikũka* = They will not come.`,
    examples: [
      { kamba: 'Nĩngwenda kũthi', english: 'I want to go', explanation: 'Assertive nĩ- with 1st person prefix' },
      { kamba: 'Ndĩsĩ ũvoo ũsu', english: 'I do not know that matter', explanation: 'Negative 1st person prefix ndĩ-' },
      { kamba: 'Nĩweethĩwa nzeo', english: 'It was good', explanation: 'Past affirmative construction' }
    ]
  },
  {
    id: 'kamba-historical-last',
    title: '1885 Historical Grammar: Reflexives of the Heart ("Ng\'o") & Surpassing Comparison',
    summary: 'J.T. Last\'s 1885 grammar records unique pre-colonial grammatical structures, including the metaphorical use of "ng\'o" (heart) for reflexives and "ku-kila" for comparative degrees.',
    content: `J.T. Last of the Church Missionary Society published the first standalone grammatical treatise on Kamba in 1885, capturing several classical morphological constructions:
1. **Reflexives of the Heart (*Ng\'o*)**:
   - In 19th-century Kĩkamba, reflexive identity ("myself", "ourselves") was formed using the substantive *ng\'o* (heart) with possessives:
   - *Ng\'o yakwa* = "My heart" → "Myself"
   - *Ng\'o zetu* = "Our hearts" → "Ourselves"
   - Alongside *mwēnyi* (himself/herself) and *aēnyi* (themselves).
2. **Comparison by Surpassing (*Ku-kila*)**:
   - Rather than comparative inflections, Kamba expresses degree through the verb *ku-kila* (to surpass):
   - *Mundu uyu mucheo, akilite uiya* = "This man is good, he surpasses that one in goodness (he is better)."
   - *Mundu yuyu mucheo, kuakila andu aondi* = "This man is good, surpassing all men (he is the best man)."
3. **Infix Pronominal Concord**:
   - Object concords are inserted directly before the verb stem:
   - *-ni-* (me), *-ku-* (thee), *-mu-* (him/her), *-tu-* (us), *-a-* (them).
   - Example: *Yu-ni-wenda* (He loves me), *Ni-ka-ku-taa* (I will sell/deliver to you).`,
    examples: [
      { kamba: 'Ng\'o yakwa', english: 'Myself (lit. my heart)', explanation: 'Classical 1885 reflexive construction' },
      { kamba: 'Mundu akilite ucheo', english: 'A man surpassing in goodness (the best man)', explanation: 'Superlative with auxiliary ku-kila' },
      { kamba: 'Yu-ni-wenda', english: 'He loves me', explanation: 'Subjective yu- + objective infix -ni- + verb stem wenda' }
    ]
  }
];
