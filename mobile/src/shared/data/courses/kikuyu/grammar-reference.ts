// ============================================================
// Kikuyu (Gĩkũyũ) Grammar Reference Guide
// Based 100% on Public Domain Sources:
// 1. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919) "Comparative Study of the Bantu Languages"
// 2. Rev. Fr. A. Hémery, C.S.Sp. (1903) "English-Kikuyu Handbook: A Short Grammar, Vocabulary, and Phrase-Book"
// 3. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 4. Rev. A. W. McGregor (1904) "English-Kikuyu Vocabulary" (SPCK, London)
// 5. W. Scoresby & Katherine Routledge (1910) "With a Prehistoric People: The Akikuyu of British East Africa" (London)
// 6. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Magic"
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
    id: "kikuyu-phonology-orthography",
    title: "Phonology, Orthography & Penultimate Stress (Hémery 1903, Hinde 1904 & McGregor 1904)",
    summary: "Rev. Fr. A. Hémery (1903), Hildegarde Hinde (1904), and Rev. A. W. McGregor (1904) document Kikuyu's vowel qualities, interdental th, velar nasal ng' vs. prenasalized ng'g, consonant alternations (B/V, G/K, R/L), and Dahl's Law.",
    content: `In *English-Kikuyu Handbook* (1903, pp. 5–7), *Vocabularies of the Kamba and Kikuyu Languages* (1904, pp. v–x), and *English-Kikuyu Vocabulary* (1904, p. iv), Hémery, Hinde, and McGregor record the foundational phonological traits of Gĩkũyũ:
1. **Interdental *Th* & Velar Nasal *Ng'* vs. *Ng'g* (McGregor 1904, p. iv)**:
   - Where coastal Swahili has *s* or *z*, Gĩkũyũ systematically uses the voiced/voiceless interdental fricative **th** (as in *thahu* 'ceremonial defilement', *thayũ* 'peace', *gũthiĩ* 'to go', *mũthenya* 'day').
   - McGregor (1904) distinguishes pure velar nasal **ng'** (as in English *singing*, e.g., *ng'ombe* 'cow', *ng'ondu* 'sheep') from prenasalized velar plosive **ng** (as in English *finger*, e.g., *nguku* 'chicken', *ngoro* 'heart').
2. **Consonant Alternations & Penultimate Stress (Hinde 1904)**:
   - Word stress almost invariably falls on the **penultimate (second-to-last) syllable**.
   - **B and V**, **G and K**, and **R and L** alternate across regional varieties (Jogowini/Nyeri vs. Metumi/Murang'a vs. Kabete/Kiambu).
3. **Infinitive Prefix Assimilation — Dahl's Law (Hémery 1903 & McGregor 1904)**:
   - The Class 15 infinitive prefix **ku- / kũ-** voices to **gu- / gũ-** whenever the verb root begins with a voiceless consonant (*k, t, th, c*): e.g., *gu-tinda* (to conquer/spend time), *gu-kor-a* (to find), *gu-thi-i* (to go), whereas voiced/vowel stems retain *ku-*: *ku-hora* (to beat/rest), *ku-rĩma* (to cultivate).`,
    examples: [
      { kikuyu: "mwohoro — mwohoro mwēga", english: "greeting (news) — good news / peace", explanation: "Standard Jogowini Kikuyu salutation recorded by Hinde (1904)" },
      { kikuyu: "ku-hora (to beat) vs. gu-tinda (to conquer) / gu-thiĩ (to go)", english: "to beat vs. to conquer / to go", explanation: "Dahl's Law voicing ku- -> gu- before voiceless root consonant (Hémery 1903 & Hinde 1904)" },
      { kikuyu: "ng'ombe / ng'ondu vs. ngoro / nguku", english: "cow / sheep vs. heart / fowl", explanation: "Velar nasal ng' vs. prenasalized stop ng (McGregor 1904, p. iv)" }
    ]
  },
  {
    id: "kikuyu-six-noun-classes",
    title: "The Nine Noun Classes, Diminutives (Ka-/To-) & Augmentatives (Ke-) (Hémery 1903, Hinde 1904 & Johnston 1919)",
    summary: "Hémery (1903, pp. 7–14), Hinde (1904, pp. vi–vii), McGregor (1904), and Johnston (1919 #11) codify the noun classes of Gĩkũyũ and their prefixal concord across adjectives, possessives, and numerals.",
    content: `Rev. Fr. A. Hémery (1903, pp. 7–14) and Hildegarde Hinde (1904, pp. vi–vii) classify Gĩkũyũ nouns into nine prefixal classes:
1. **Class I — Animate *Mu-* → *A-* (Classes 1/2)**:
   - *mundu* (person) → **andu** (people); *muka* (woman/wife) → **aka** (women); *mwanake* (warrior) → **anake** (warriors); *mutumia* (elder) → **atumia** (elders); *muiritu* (maiden) → **airitu** (maidens).
2. **Class II — Inanimate *Mu-* → *Mi-* (Classes 3/4)**:
   - *muti* (tree) → **miti** (trees); *mwaki* (fire) → **miaki** (fires); *mugunda* (cultivated farm) → **migunda** (farms); *mucii* (homestead) → **micii** (homesteads); *mweri* (moon/month) → **mieri** (months).
3. **Class III — *I-* / *Ri-* → *Ma-* (Classes 5/6)**:
   - *ihiga* (stone) → **mahiga** (stones); *itumbi* (egg) → **matumbi** (eggs); *ithangu* (leaf) → **mathangu** (leaves); *riitho* (eye) → **maitho** (eyes); *igego* (tooth) → **magego** (teeth).
4. **Class IV — *Ki-* / *Gi-* → *I-* / *Ci- (Shi-)* (Classes 7/8 — Tools, Artifacts & Augmentatives)**:
   - *kindu* (thing) → **indu** (things); *giti* (stool/chair) → **iti** (chairs); *kiratu* (sandal) → **iratu** (sandals); *kiara* (finger) → **ciara / shiara** (fingers); *kirima* (mountain) → **irima** (mountains).
   - Hémery (1903, p. 11) notes that prefixing **ke- / kĩ-** also forms **augmentatives** (large objects).
5. **Class V — Invariable *N-* (*Ny-, Nd-, Ng-, Mb-, Nj-*) Class (Classes 9/10)**:
   - *nyumba* (house/houses), *ng'ombe* (cow/cattle), *mburi* (goat/goats), *mbura* (rain), *njira* (road/path).
6. **Class VI — *Ru-* → *N-* (Classes 11/10)**:
   - *rurimi* (tongue) → **ndimi** (tongues); *ruhiu* (sword/knife) → **hiu / njora** (swords); *ruui* (river) → **njui** (rivers); *rukuni* (firewood) → **nguni** (firewood).
7. **Class VII — Diminutive *Ka-* → *To- (Tũ- / Twa-)* (Classes 12/13)**:
   - Hémery (1903, p. 11): *kana* (little child) → **twana / toana**; *kaguku* (little chicken) → **toguku**; *kamuti* (little tree) → **tomiti**; *kahee* (little boy) → **tohee**.
8. **Class VIII & IX — Abstract/Collective *U- (Ũ-)* → *Ma-* (Class 14) & Verbal/Locative *Ku- (Kũ-)* (Classes 15–17)**:
   - *uta* (bow) → **mata** (bows); *uhoro* (news/affair) → **mohoro**; *utuku* (night); *kundu* (place) → **makundu**.`,
    examples: [
      { kikuyu: "mundu mwega → andu ega | muti mwega → miti miega", english: "a good person → good people | a good tree → good trees", explanation: "Classes 1/2 (mu-/a-) and 3/4 (mu-/mi-) adjectival concord (Hémery 1903, p. 15)" },
      { kikuyu: "kana kega → twana twega | kaguku → toguku", english: "a good child → good children | little chicken → little chickens", explanation: "Diminutive Class 12/13 ka-/to- (tw-) in Hémery (1903, p. 11)" },
      { kikuyu: "ruhiu rwega → hiu njega | rurimi → ndimi", english: "a good knife/sword → good knives | tongue → tongues", explanation: "Class 11/10 ru-/n- alternation (Hémery 1903 & Hinde 1904)" }
    ]
  },
  {
    id: "kikuyu-affirmative-verb-tenses",
    title: "Affirmative Verb Conjugation & Five Derivative Verb Stems (Hémery 1903 & Hinde 1904)",
    summary: "Complete affirmative conjugation paradigms of kohora ('to beat', Hémery 1903) and gu-tinda ('to conquer', Hinde 1904) plus Hémery's 5 verbal derivative forms (-era, -ia, -ika, -ana, -wo).",
    content: `Rev. Fr. A. Hémery (1903, pp. 24–36) and Hildegarde Hinde (1904, pp. xi–xv) set out the full affirmative conjugation of **kohora** ("to beat") and **ku-tinda / gu-tinda** ("to conquer"):
1. **Present Tense (Prefix *-a-* / *ndi-*)**:
   - Hémery (1903, p. 25): *ndihora* (I beat), *ohora* (thou beatest), *ahora* (he beats), *tuhora* (we beat), *muhora* (you beat), *mahora* (they beat).
   - Hinde (1904): 1s **n-a-tinda**, 2s **w-a-tinda**, 3s **a-tinda**, 1p **tw-a-tinda**, 2p **mw-a-tinda**, 3p **m-a-tinda**.
2. **Present Imperfect / Progressive (Prefix *-ki-* / *-re-*):**:
   - 1s **ni-ki-tinda** (I am conquering), 2s **u-ki-tinda**, 3s **a-ki-tinda**, 1p **tu-ki-tinda**, 2p **mu-ki-tinda**, 3p **ma-ki-tinda**.
3. **Present Perfect (Suffix *-ite* / *-eti* / *-iti*)**:
   - Hémery (1903): *ndihorite* (I have beaten), *ohorite*, *ahorite*, *tuhorite*, *muhorite*, *mahorite*.
   - Hinde (1904): **ni-tind-iti** (I have conquered).
4. **Past Perfect (Suffix *-ire* / *-eri*, with *ra-* or *a-*)**:
   - Hémery (1903): *ndahorire / ndirahorire* (I beat [past]), *wahorire*, *ahorire*, *twahorire*, *mwahorire*, *mahorire*.
5. **Future Tense (Infix *-ka-* / *-ga-* or *-rii-*)**:
   - Hémery (1903): *ngahora / ndiriihora* (I shall beat), *okahora*, *akahora*, *tukahora*, *mukahora*, *makahora*.
   - Hinde (1904): **nin-ka-tinda / ni-ga-tinda** (I shall conquer).
6. **Five Derivative Verb Stems (Hémery 1903, pp. 34–36)**:
   - **(1) Prepositional / Applied (*-era / -ira*)**: *kohorera* (to beat for/with), *kurehera* (to bring to).
   - **(2) Causative (*-ia / -ithia*)**: *kohoria / kohorithia* (to cause to beat; *kũhoria thahu* 'to cool/purify ritual defilement', Routledge 1910).
   - **(3) Passive (*-wo / -o*)**: *kohorwo* (to be beaten), *kuonwo* (to be seen).
   - **(4) Neuter / Stative (*-eka / -ika*)**: *kohoreka* (to be beatable), *kuoneka* (to be visible).
   - **(5) Reciprocal (*-ana*)**: *kohorana* (to beat each other), *kwendana* (to love each other).`,
    examples: [
      { kikuyu: "ndihora / ndihorite / ndahorire / ngahora", english: "I beat / I have beaten / I beat (past) / I shall beat", explanation: "Hémery (1903, pp. 25–27) paradigm of kohora" },
      { kikuyu: "kohora → kohorera → kohorithia → kohorwo → kohorana", english: "to beat → beat for → cause to beat → be beaten → beat one another", explanation: "Hémery (1903, pp. 34–36) 5 derivative verb stems" },
      { kikuyu: "n-a-tinda / ni-ki-tinda / ni-tind-iti / nin-ka-tinda", english: "I conquer / I am conquering / I have conquered / I shall conquer", explanation: "Hinde (1904, pp. xi–xiii) paradigm of ku-tinda" }
    ]
  },
  {
    id: "kikuyu-negative-conjugation-locatives",
    title: "Negative Verb Paradigms (-ti- / -di- / -ndi-) & Locative Suffix (-ini / -eni) (Hémery 1903 & Hinde 1904)",
    summary: "Kikuyu forms negative tenses with the prefix -ti- (-di-/-ndi- in 1s) and negative copula ti-, and marks interior/spatial location with the suffix -ini / -eni.",
    content: `Hémery (1903, pp. 29–33) and Hinde (1904, pp. xv–xviii, 64–67) detail how negation and spatial location operate in Gĩkũyũ:
1. **Negative Present (1s *ndi-*, 2s *ndu-* / *u-ti-*, 3s *nda-* / *a-ti-*, pl. *tu-ti-, mu-ti-, ma-ti-*)**:
   - Hémery (1903, p. 29): *ndihora* (I do not beat), *nduhora*, *ndahora*, *tutihora*, *mutihora*, *matihora*.
   - Common conversational negatives: **ndiui / ndikumenya** (I do not know), **ndikwenda** (I do not want), **ndingihota kuthi** (I cannot go).
2. **Negative Past (Infix *-na-*)**:
   - Hémery (1903, p. 30) & Hinde (1904, p. xvi): **ndi-na-hora / n-di-na-tinda** (I did not beat / conquer), **u-ti-na-hora**, **a-ti-na-hora**, **tu-ti-na-hora**, **mu-ti-na-hora**, **ma-ti-na-hora**.
3. **Negative Future (Infix *-ka-* / *-ga-*)**:
   - **n-di-ka-tinda / ndikahora** (I shall not conquer / beat), **ndikathie** (I will not go).
4. **Negative Subjunctive / Imperative (*-ti-ka-...-e*)**:
   - Hémery (1903, p. 31): *utikahore!* (do not beat! sg.), *mutikahore!* (do not beat! pl.).
5. **Locative Suffix (*-ini* / *-eni*)**:
   - Added to the end of a noun to express "in, at, on, near": *mutwe* (head) → **mutweni** (on the head), *miti* (trees) → **mitini** (in the trees), *nyumba* (house) → **nyumbani / nyumba-ini** (in the house), *ruui* (river) → **ruuini** (at the river).`,
    examples: [
      { kikuyu: "ndina-hora / tutina-hora | ndika-hora / tutika-hora", english: "I/we did not beat | I/we shall not beat", explanation: "Negative past (-na-) and negative future (-ka-) in Hémery (1903, p. 30)" },
      { kikuyu: "ndiui / ndikumenya • ndingihota kuthi", english: "I do not know • I cannot go", explanation: "Everyday negative expressions (Hinde 1904, p. 64)" },
      { kikuyu: "mutweni / mitini / nyumbani / ruuini", english: "in the head / in the trees / in the house / at the river", explanation: "Locative suffix -ini/-eni (Hémery 1903 & Hinde 1904)" }
    ]
  },
  {
    id: "kikuyu-numerals-possessives",
    title: "Decimal Numerals, Qualifying Adjectives, Multipliers (Ka-) & Possessive Concords (Hémery 1903 & Hinde 1904)",
    summary: "Gĩkũyũ counts in tens (ikumi, mirongo iri, igana, ngiri), prefixes ka-/kĩ- for 'times' (kamwe/kirrimue, keeri, kathatu), and inflects adjectives and possessives to match the noun class.",
    content: `From Rev. Fr. A. Hémery (1903, pp. 14–23) and Hildegarde Hinde (1904, pp. 62–66):
1. **Cardinal Numbers (1–1,000)**:
   - **1–10**: *imue / ĩmwe* (1), *igiri / igĩrĩ* (2), *ithatu / ithatũ* (3), *inya* (4), *ithanu / ithano* (5), *thanthatu / ithathatũ* (6), *muguanja / mũgwanja* (7), *inyanya* (8), *ikenda / kenda* (9), *ikumi* (10).
   - **11–1,000**: *ikumi na imwe* (11), *mirongo iri* (20), *mirongo itatu* (30), *mirongo inya* (40), *mirongo ithanu* (50), *igana* (100, pl. *magana*), *ngiri* (1,000).
   - Note (Hémery 1903, p. 17): Numbers 1–5 and 8 agree in prefix with the noun counted (*mundu umwe* '1 person', *andu eri* '2 people', *miti itatu* '3 trees', *indu inya* '4 things', *nyumba ithano* '5 houses'), whereas *mugwanja* (7), *kenda* (9), and *ikumi* (10) are invariable.
2. **Adverbial Multipliers (*Ka-*)**:
   - *kamwe / kirrimue* (once), *kēēri* (twice), *kathatu* (thrice), *kanna* (four times), *kathano* (five times).
3. **Possessive Concords (*-akwa, -aku, -ake, -itu, -anyu, -ao*)**:
   - *mwana wakwa* (my child), *ciana ciaku* (your children), *ng'ombe ciake* (his cows), *guoko gwake* (his arm), *mucii witu* (our homestead), *baba witu* (our father), *nyina witu / mwaitu* (our mother).`,
    examples: [
      { kikuyu: "mundu umwe, andu eri, miti itatu, indu inya, nyumba ithano", english: "one person, two people, three trees, four things, five houses", explanation: "Noun-class prefix agreement on numerals 1–5 (Hémery 1903, p. 17)" },
      { kikuyu: "kamwe (kirrimue), kēēri, kathatu, kanna, kathano", english: "once, twice, thrice, four times, five times", explanation: "Adverbial frequency prefix ka- (Hémery 1903, p. 18 & Hinde 1904, p. 63)" },
      { kikuyu: "mwana wakwa / ciana ciaku / mucii witu", english: "my child / your children / our homestead", explanation: "Possessive concord across classes (Hémery 1903, p. 20 & Hinde 1904, p. 65)" }
    ]
  },
  {
    id: "kikuyu-cultural-lexicon-hobley",
    title: "Classical Agĩkũyũ Social, Judicial, Clan & Ritual Terminology (Routledge 1910 & Hobley 1910, 1922)",
    summary: "W. S. & K. Routledge (1910) and C. W. Hobley (1910, 1922) preserve the complete terminology of the 13 Agĩkũyũ clans (Mĩhĩrĩga), 10 generation ages (Rĩĩka), council system (Kiama), sacred ecology (Mũgumo), and oral literature (Ngano & Guso).",
    content: `In *With a Prehistoric People: The Akikuyu of British East Africa* (1910) and *Bantu Beliefs and Magic* (1922, Glossary pp. 305–308), W. S. & K. Routledge and C. W. Hobley document the institutional vocabulary of Agĩkũyũ society:
1. **The 13 Clans (*Mĩhĩrĩga* / *Irika*, Routledge 1910, p. 20)**:
   - **Anjiru**, **Agachiku**, **Achera**, **Ambui**, **Angari (Aithekahuno)**, **Akiuru (Ethaga)**, **Agathigia (Aicakamuyu)**, **Abaura (Angechi)**, **Aregi**, **Athinuri**, **Agetunu**, **Amboi**, and **ini / Aca**.
2. **Generation Ages (*Rĩĩka*) & The *Itwika* Cycle (Routledge 1910, pp. 8–11 & Hobley 1922)**:
   - Routledge (1910, p. 9) records the sequence of ruling generations: **Tene → Agu → Manduti → Chuma → Ciira → Mathathi → Ndemi → Iregi → Maina → Mwangi**, culminating in the **Itwika** generational transfer ceremony.
   - Life stages: **Kĩhĩĩ** (uninitiated boy) / **Kĩrĩgũ** (uninitiated girl) → **Mũirĩtu** (initiated maiden) / **Mwanake** (warrior) → **Mũtumia wa Kiama** (council elder) & **Nyakinyua** (senior matron).
3. **Governance, Law, Craft & Sacred Ecology**:
   - **Kiama**: Council of elders; **Njama**: Warrior/executive council; **Chira**: Legal deliberation or court case (settled with goat-counts using sticks *mĩtĩ*); **Muma**: Solemn peace or judicial oath; **Gĩthathi / Kĩthathi**: Sacred 7-holed oath-stone.
   - **Ngai**: The Supreme Creator dwelling on **Kĩrĩnyaga** (Mount Kenya); **Mũgumo**: Sacred wild fig tree; **Ngoma**: Ancestral spirits; **Mũndũ Mũgo**: Traditional healer and diviner; **Thahu**: Ritual defilement purified by *kũhoria thahu* ("cooling the thahu"); **Gĩcandĩ (Kishandi)**: Enigmatic poetic gourd rattle (Routledge 1910, pp. 109–112).`,
    examples: [
      { kikuyu: "Kiama • Chira • Muma • Gĩthathi (Kĩthathi)", english: "Council of elders • Legal case • Solemn oath • Sacred 7-holed oath-stone", explanation: "Classical Agĩkũyũ judicial terminology (Routledge 1910, pp. 195–220 & Hobley 1922)" },
      { kikuyu: "Ndemi • Iregi • Maina • Mwangi • Itwika", english: "Historical ruling generations • Generational transfer ceremony", explanation: "Generational governance lexicon (Routledge 1910, p. 9 & Hobley 1922)" },
      { kikuyu: "Gĩcandĩ (Kishandi) • Rũgano (pl. Ngano) • Guso!", english: "Poetic gourd rattle • Folktale • Riddle challenge ('Guess!')", explanation: "Agĩkũyũ oral literature & music (Routledge 1910, pp. 109, 285)" }
    ]
  }
];
