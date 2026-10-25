// ============================================================
// Kamba (Kĩkamba) Grammar Reference Guide
// Based on:
// 1. Rev. Dr. J. L. Krapf (1850) "Vocabulary of Six East-African Languages" (Tübingen — Public Domain)
// 2. J. T. Last (1885) "Grammar of the Kamba Language" (SPCK, London — Public Domain)
// 3. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages" (Cambridge — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Magic"
// 5. Sir Harry H. Johnston (1919) "A Comparative Study of the Bantu and Semi-Bantu Languages" (#12 Kamba)
// 6. Gerhard Lindblom (1920) "The Akamba in British East Africa: An Ethnological Monograph" (Uppsala — Public Domain)
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
    title: 'Phonology, Intervocalic Lenition, R-Loss & Dialect Divisions (Krapf 1850, Last 1885, Hinde 1904 & Lindblom 1920)',
    summary: 'Kĩkamba is distinguished among Central Kenya Bantu languages by the widespread loss of Proto-Bantu *p, *t, *k in intervocalic positions, the absence of /r/, and regional dialects across Ulu (Machakos), Kitui (Nganyawa), and Mumoni.',
    content: `Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910), and Gerhard Lindblom (1920) document the phonological and dialectal structure of Kĩkamba:
1. **Absence of /r/ & Intervocalic Consonant Elision**:
   - Where Gĩkũyũ and coastal Bantu languages preserve *r*, Kĩkamba elides it or uses lateral /l/ or glide /y/:
   - Gĩkũyũ *kũrĩma* (to farm) → Kĩkamba **kũĩma**.
   - Gĩkũyũ *marĩgu* (bananas) → Kĩkamba **maiu**.
   - Gĩkũyũ *rũrĩmĩ* (tongue) → Kĩkamba **ũĩmĩ (pl. nĩmĩ)**.
   - Gĩkũyũ *kĩratũ* (shoe) → Kĩkamba **kĩlaato**.
   - Intervocalic consonants drop to create long vowel sequences: **mũsyĩ** (homestead), **maanzi / kĩw'ũ** (water).
2. **Regional Dialect Divisions (Hinde 1904, Hobley 1910 & Lindblom 1920, pp. 13–15)**:
   - **Ulu (Western / Machakos & Makueni)**: Standard western dialect.
   - **Kitui / Nganyawa (Eastern)** & **Mumoni / Tharaka borderland**: Documented in parallel columns by Hinde (1904) and Hobley (1910).`,
    examples: [
      { kamba: 'kũĩma • maiu • kĩlaato • ũĩmĩ', english: 'to cultivate • bananas • sandal • tongue', explanation: 'Regular loss of Proto-Bantu intervocalic r/g/k (Last 1885 & Hinde 1904)' },
      { kamba: 'nendu (Ulu) vs. mnyanya (Nganyawa/Kitui)', english: 'friend', explanation: 'Dialectal contrast documented by Hinde (1904)' },
      { kamba: 'maanzi / kĩw\'ũ', english: 'water', explanation: 'Classical Kamba terms for water (Krapf 1850, Last 1885, Lindblom 1920)' }
    ]
  },
  {
    id: 'kamba-noun-classes',
    title: 'Nine Noun Classes & Concordial Inflexion (Last 1885, Hinde 1904 & Johnston 1919)',
    summary: 'J. T. Last (1885, pp. 3–13) classifies Kĩkamba nouns into 9 gender classes distinguished by prefixes that govern concord on adjectives, numerals, pronouns, and verbs.',
    content: `The primary noun classes in Kĩkamba as codified by J. T. Last (1885, pp. 3–13) and Sir Harry Johnston (1919, #12 Kamba):
1. **Class 1/2 (*Mũ- / A-*)**: Animate beings / persons.
   - *mũndũ* (person) → **andũ** (people); *mũndũũme* (man) → **aũme** (men); *mũka* (woman/wife) → **aka** (women/wives); *mũtumĩa* (elder) → **atumĩa** (elders).
2. **Class 3/4 (*Mũ- / Mĩ-*)**: Botanical life & natural inanimate entities.
   - *mũtĩ* (tree) → **mĩtĩ** (trees); *mũsyĩ* (homestead) → **mĩsyĩ** (homesteads); *mũũnda* (garden) → **mĩũnda** (gardens); *mũthenya* (day) → **mĩthenya** (days).
3. **Class 5/6 (*Ĩ- / Ma-*)**: Paired items, fruits, stones & liquids.
   - *ĩvia* (stone) → **mavia** (stones); *ĩtumo* (spear) → **matumo** (spears); *ĩtumbĩ* (egg) → **matumbĩ** (eggs); *ĩthangũ* (leaf) → **mathangũ** (leaves); *ĩthó* (eye) → **methó** (eyes).
4. **Class 7/8 (*Kĩ- / I-* or *Syĩ-*)**: Artifacts, tools, and qualities.
   - *kĩndũ* (thing) → **syĩndũ** (things); *kĩlaato* (sandal) → **ilaato** (sandals); *kĩtĩ* (stool/chair) → **syĩtĩ / itĩ** (chairs); *kĩvalo* (district) → **ivalo** (districts).
5. **Class 9/10 (*N- / N-*)**: Animals and invariable nouns.
   - *nyũmba* (house/houses), *ng'ombe* (cow/cattle), *mbũi* (goat/goats), *nzĩa* (path/road).
6. **Class 11/10 (*Ũ- / N-* or *Ma-*)**: Slender objects and abstract nouns.
   - *ũta* (bow) → **mata** (bows); *ũĩmĩ* (tongue) → **nĩmĩ** (tongues); *ũvoo* (news/matters); *ũseo* (goodness/peace).
7. **Class 12/13 (*Ka- / Tũ-*)**: Diminutives.
   - *kana* (child) → **twana** (children); *kambũi* (kid/small goat) → **tũmbũi** (small goats); *kavĩsĩ* (little boy) → **tũvĩsĩ** (little boys).
8. **Class 15 & 16 (*Kũ-* Infinitives & *Va- / Kũ-* Locatives)**:
   - *kũthi* (to go), *kũka* (to come); *vandũ vaa* (this exact spot), *kũndũ kũũ* (this region).`,
    examples: [
      { kamba: 'mũndũ mũseo → andũ aseo', english: 'a good person → good people', explanation: 'Class 1/2 mũ-/a- concord (Last 1885)' },
      { kamba: 'kĩndũ kĩseo → syĩndũ nzeo | kĩtĩ kĩseo → syĩtĩ nzeo', english: 'a good thing → good things | a good stool → good stools', explanation: 'Class 7/8 kĩ-/syĩ- concord' },
      { kamba: 'kana kaseo → twana tũseo', english: 'a good child → good children', explanation: 'Class 12/13 diminutive ka-/tũ- concord' }
    ]
  },
  {
    id: 'kamba-verbal-system',
    title: 'Full Affirmative & Negative Verb Paradigms: Ku-thaima & Kw-enda (Last 1885 & Hinde 1904)',
    summary: 'J. T. Last (1885, pp. 42–92) and Hildegarde Hinde (1904) document the complete tense-aspect paradigms of Kĩkamba verbs.',
    content: `In *Grammar of the Kamba Language* (1885, pp. 42–92), J. T. Last sets out full conjugation tables for **ku-thaima** ("toplit/beg/entreat") and **kw-enda** ("to love/go"), alongside Hinde's (1904) paradigm of **ku-tinda**:
1. **Affirmative Indicative Tenses**:
   - **Assertive Focus (*Nĩ-*)**: *Nĩ-ngũ-thi* (I am going / shall go), *Nĩ-wendaa* (You want/love).
   - **Present Indefinite & Progressive**: 1s *nĩ-thaima / ngu-thaima*, 2s *u-thaima*, 3s *yu-thaima / a-thaima*, 1p *tu-thaima*, 2p *mu-thaima*, 3p *ma-thaima*.
   - **Present Perfect (*-ite / -ĩte*)**: 1s *nĩ-thaim-ite / nĩ-tind-ĩte*, 2s *u-thaim-ite*, 3s *a-thaim-ite*, 1p *tu-thaim-ite*, 2p *mu-thaim-ite*, 3p *ma-thaim-ite*.
   - **Past Narrative (*-ie / -na-*)**: *nĩ-na-thaimie* (I entreated).
   - **Future (*-ka-*)**: 1s *nĩ-ka-thaima*, 2s *u-ka-thaima*, 3s *a-ka-thaima*, 1p *tu-ka-thaima*, 2p *mu-ka-thaima*, 3p *ma-ka-thaima*.
2. **Negative Conjugation (*Ndĩ-, Ndũ-, Nda- | Tũti-, Mũti-, Mati-*)**:
   - **Present Negative**: *ndĩ-thaima* (I do not entreat), *ndũ-thaima*, *nda-thaima*, *tũti-thaima*, *mũti-thaima*, *mati-thaima*.
   - **Past Negative (*-na-*)**: *ndĩ-na-thaima* (I did not entreat).
   - **Future Negative (*-ka-*)**: *ndĩ-ka-thaima* (I shall not entreat), *ndũkathi* (do not go / you shall not go).`,
    examples: [
      { kamba: 'Nĩngwenda kũthi • Ndĩsĩ ũvoo ũsu', english: 'I want to go • I do not know that matter', explanation: 'Affirmative nĩ- vs. 1st person negative ndĩ-' },
      { kamba: 'nĩ-thaim-ite / nĩ-tind-ĩte vs. nĩ-ka-thaima / nĩ-ka-tinda', english: 'I have entreated/conquered vs. I shall entreat/conquer', explanation: 'Perfect -ite/-ĩte vs. Future -ka- (Last 1885 & Hinde 1904)' },
      { kamba: 'ndĩ-na-tinda • tũti-na-tinda', english: 'I did not conquer • we did not conquer', explanation: 'Negative past paradigm (Hinde 1904, p. xvi)' }
    ]
  },
  {
    id: 'kamba-historical-last',
    title: '1885 Historical Grammar: Reflexives of the Heart ("Ng\'o") & Surpassing Comparison ("Ku-kila")',
    summary: 'J. T. Last\'s 1885 grammar records unique pre-colonial grammatical structures, including the metaphorical use of "ng\'o" (heart) for reflexives and "ku-kila" for comparative degrees.',
    content: `J. T. Last of the Church Missionary Society published the first standalone grammatical treatise on Kamba in 1885, capturing several classical morphological constructions:
1. **Reflexives of the Heart (*Ng'o*, Last 1885, p. 25)**:
   - In 19th-century Kĩkamba, reflexive identity ("myself", "ourselves") was formed using the substantive *ng'o* (heart) with possessives:
   - **Ng'o yakwa** = "My heart" → "Myself"
   - **Ng'o yaku** = "Thy heart" → "Thyself"
   - **Ng'o yake** = "His/her heart" → "Himself/herself"
   - **Ng'o zetu** = "Our hearts" → "Ourselves"
   - Alongside **mwēnyi** (himself/herself) and **aēnyi** (themselves), and the verbal reflexive infix **-i-** (*ku-i-wenda*, to love oneself).
2. **Comparison by Surpassing (*Ku-kila*, Last 1885, p. 15)**:
   - Rather than comparative suffixes, Kamba expresses degree through the verb *ku-kila* (to surpass):
   - *Mundu uyu mucheo, akilite uiya* = "This man is good, he surpasses that one in goodness (he is better)."
   - *Mundu yuyu mucheo, kuakila andu aondi* = "This man is good, surpassing all men (he is the best man)."`,
    examples: [
      { kamba: "Ng'o yakwa • Ng'o zetu", english: 'Myself (lit. my heart) • Ourselves (lit. our hearts)', explanation: 'Classical 1885 reflexive construction (Last 1885, p. 25)' },
      { kamba: 'Mundu akilite ucheo', english: 'A man surpassing in goodness (the best man)', explanation: 'Superlative with auxiliary ku-kila (Last 1885, p. 15)' },
      { kamba: 'Yu-ni-wenda • Ni-ka-ku-taa', english: 'He loves me • I will sell/deliver to you', explanation: 'Object infixes -ni- (me) and -ku- (thee) (Last 1885)' }
    ]
  },
  {
    id: "kamba-possessives-demonstratives",
    title: "Possessive Pronouns & Three-Degree Demonstratives in Kĩkamba (Last 1885 & Hinde 1904)",
    summary: "Kĩkamba possessives (-akwa, -aku, -ake, -itũ, -enyu, -oo) and demonstratives take strict noun-class concord prefixes.",
    content: `As documented in J. T. Last (1885, pp. 24–36) *Grammar of the Kamba Language* and Hinde (1904):
1. **Possessive Stems**:
   - **-akwa** (my): *mũsyĩ wakwa* (my home), *syana syakwa* (my children).
   - **-aku** (your sg.): *ĩsyĩtwa yaku* (your name).
   - **-ake** (his/her): *mũũnda wake* (his/her farm).
   - **-itũ** (our): *nthĩ yitũ* (our land/country).
   - **-enyu** (your pl.): *mbũĩ syenyu* (your goats).
   - **-oo** (their): *nyũmba syoo* (their houses).
2. **Three Demonstrative Degrees**:
   - **Proximal (this)**: *ũũ / uyu* (mũndũ ũũ), *aa* (andũ aa), *ĩno* (nyũmba ĩno).
   - **Referential (that near you / aforementioned)**: *ũsu* (mũndũ ũsu), *asu* (andũ asu), *ĩsu* (nyũmba ĩsu).
   - **Distal (that yonder)**: *ũya* (mũndũ ũya), *aya* (andũ aya), *ĩya* (nyũmba ĩya).`,
    examples: [
      { kamba: "ĩsyĩtwa yaku / mũsyĩ wakwa", english: "your name / my homestead", explanation: "Class 5 ya- vs. Class 3 wa- concord" },
      { kamba: "mũndũ ũũ vs. mũndũ ũsu vs. mũndũ ũya", english: "this person vs. that person vs. that person yonder", explanation: "Three-way demonstrative contrast (Last 1885, p. 28)" },
      { kamba: "nthĩ yitũ nĩ nzeo", english: "our land is good", explanation: "Class 9 concord with -itũ" }
    ]
  },
  {
    id: "kamba-verbal-extensions-locatives",
    title: "Verbal Extensions (-ĩa, -ĩthya, -ana, -wa), Locative Suffix (-nĩ) & Lindblom (1920) / Hobley (1910) Ethnographic Lexicon",
    summary: "Kĩkamba suffixes -nĩ to mark location, uses productive verbal extensions, and preserves rich institutional terminology for the 25 mbai clans, nžama council, kīþītū oath, and nðonī avoidance register.",
    content: `Last (1885), Hobley (*Ethnology of A-Kamba*, 1910), and Gerhard Lindblom (*The Akamba in British East Africa*, 1920) document Kĩkamba verbal extensions and cultural terminology:
1. **Locative Suffix (*-nĩ*) & Verbal Extensions**:
   - *mũũnda* (farm) → **mũũndanĩ** (in the farm); *nyũmba* (house) → **nyũmbanĩ** (in the house).
   - **Applicative (*-ĩa / -ea*)**: *kũua* (cook) → **kũuĩa** (cook for); **Causative (*-ĩthya / -ya*)**: *kũsoma* → **kũsomethya** (teach); **Reciprocal (*-ana*)**: **kwendana** (love one another); **Passive (*-wa*)**: **kũonwa** (be seen).
2. **Institutional, Ritual & Ecological Lexicon (Hobley 1910 & Lindblom 1920)**:
   - **Mbai (25 Clans & Totems, Hobley 1910, pp. 6–10 & Lindblom 1920, pp. 113–136)**: Including *Atangwa, Amwei, Ambua, Akitutu, Amutei, Anziu, Akiporo, Aombe, Anzauni*, etc.
   - **Social & Judicial Grades (Lindblom 1920, pp. 143–175)**: **Anake** (warriors) → **Nthele** (young married men) → **Atumĩa ma kisuka** → **Atumĩa ma nžama** (council elders) → **Atumĩa ma kīvalo** (district judges) → **Atumĩa ma ītiŋo** (custodians of the sacred shrine).
   - **Oaths & Religion**: **Kīþītū (Kithito)** (supreme judicial oath) & **Muma** (peace/covenant oath); **Muluŋgu (Mulungu / Ngai)** (Supreme Creator); **Aīmu (Aiimu)** (ancestral spirits); **Ithembo (pl. Mathembo)** (sacred grove shrine); **Mundu muə (Mũndũ mũe)** (diviner/healer with divining gourd *ūtīwa*).
   - **Nðonī (Nthoni) & Kwiūa Avoidance Register (Lindblom 1920, pp. 90–102)**: Respectful avoidance speech used between in-laws (*athoni*) and women's special vocabulary.`,
    examples: [
      { kamba: "Atumĩa ma nžama • Atumĩa ma kīvalo • Kīþītū (Kithito) • Ithembo", english: "Council elders • District judges • Supreme oath • Sacred grove shrine", explanation: "Akamba governance and ritual lexicon (Hobley 1910 & Lindblom 1920)" },
      { kamba: "Muluŋgu • Aīmu (Aiimu) • Mundu muə (Mũndũ mũe)", english: "Supreme Creator • Ancestral spirits • Diviner / medicine man", explanation: "Lindblom (1920, pp. 213–254) & Hobley (1910, pp. 85–95)" },
      { kamba: "Nðonī (Nthoni) • Mbai • Mwethya", english: "In-law respect/avoidance custom • Clan • Communal mutual-aid work party", explanation: "Core Akamba social institutions (Lindblom 1920)" }
    ]
  }
];
