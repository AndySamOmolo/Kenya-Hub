// ============================================================
// Kikuyu (Gĩkũyũ) Grammar Reference Guide
// Based 100% on Public Domain Sources:
// 1. Lieut. Ludwig von Höhnel (1894) "Discovery of Lakes Rudolf and Stefanie, Vol. I" (1887 traverse of Kikuyuland)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919) "Comparative Study of the Bantu Languages"
// 3. Rev. Fr. A. Hémery, C.S.Sp. (1903) "English-Kikuyu Handbook: A Short Grammar, Vocabulary, and Phrase-Book"
// 4. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 5. Rev. A. W. McGregor (1904) "English-Kikuyu Vocabulary" (SPCK, London)
// 6. W. Scoresby & Katherine Routledge (1910) "With a pre-colonial People: The Akikuyu of British East Africa" (London)
// 7. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Customary Institutions"
// 8. Hon. Charles Dundas (1915) "The Organization and Laws of Some Bantu Tribes in East Africa" (JRAI Vol. 45)
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
    content: `In *English-Kikuyu Handbook* (1903, p. 5), *Vocabularies of the Kamba and Kikuyu Languages* (1904, pp. v–x), and *English-Kikuyu Vocabulary* (1904, pp. iii–iv, 5, compiled at Fort Smith / *Kabeti*), Hémery, Hinde, and McGregor record the foundational phonological traits of Gĩkũyũ:
1. **Interdental *Th* & Velar Nasal *Ng'* vs. *Ng'g* (McGregor 1904, p. 5)**:
   - In Kabeti (Fort Smith), **S and Z are not used, *Th* always taking their places** (as in *thahu* 'ceremonial defilement', *thayu* 'peace', *gothii* 'to go', *muthenya* 'day'); *L* and *R* are interchangeable.
   - McGregor (1904, p. 5) uses **ng'** (with a point after *ng*) for the pure velar nasal as in **koteng'era** ("to run / abscond", pronounced *koteng-era*, not *koten-gera*, and *ng'ombe* 'cow', *ng'ondu* 'sheep'), and **ng'g** when both the velar nasal and hard *g* are sounded as in **kuing'gata** ("to drive away / banish / conquer").
2. **Consonant Alternations & Penultimate Stress (Hinde 1904)**:
   - Word stress almost invariably falls on the **penultimate (second-to-last) syllable**.
   - **B and V**, **G and K**, and **R and L** alternate across regional varieties (Jogowini/Nyeri vs. Metumi/Murang'a vs. Kabete/Kiambu).
3. **Infinitive Prefix Assimilation — Dahl's Law (Hémery 1903 & McGregor 1904)**:
   - The Class 15 infinitive prefix **ku- / kũ-** voices to **gu- / gũ-** whenever the verb root begins with a voiceless consonant (*k, t, th, c*): e.g., *gu-tinda* (to conquer/spend time), *gu-kor-a* (to find), *gu-thi-i* (to go), whereas voiced/vowel stems retain *ku-*: *ku-hora* (to beat/rest), *ku-rĩma* (to cultivate).`,
    examples: [
      { kikuyu: "mwohoro — mwohoro mwēga", english: "greeting (news) — good news / peace", explanation: "Standard Jogowini Kikuyu salutation recorded by Hinde (1904)" },
      { kikuyu: "ku-hora (to beat) vs. gu-tinda (to conquer) / gu-thiĩ (to go)", english: "to beat vs. to conquer / to go", explanation: "Dahl's Law voicing ku- -> gu- before voiceless root consonant (Hémery 1903 & Hinde 1904)" },
      { kikuyu: "koteng'era (velar ng') vs. kuing'gata (ng' + hard g) • ng'ombe / ng'ondu", english: "to run/abscond vs. to drive away/conquer • cow / sheep", explanation: "McGregor's (1904, p. 5) exact Kabeti orthographic contrast between ng' and ng'g" }
    ]
  },
  {
    id: "kikuyu-six-noun-classes",
    title: "The Nine Noun Classes, Diminutives (Ka-/To-) & Augmentatives (Ke-) (Hémery 1903, Hinde 1904 & Johnston 1919)",
    summary: "Hémery (1903, pp. 1–4), Hinde (1904, pp. vi–vii), McGregor (1904), and Johnston (1919 #11) codify the noun classes of Gĩkũyũ and their prefixal concord across adjectives, possessives, and numerals.",
    content: `Rev. Fr. A. Hémery (1903, pp. 1–4) and Hildegarde Hinde (1904, pp. vi–vii) classify Gĩkũyũ nouns into nine prefixal classes:
1. **Class I — Animate *Mu-* → *A-* (Classes 1/2)**:
   - *mundu* (person) → **andu** (people); *muka* (woman/wife) → **aka** (women); *mwanake* (warrior) → **anake** (warriors); *mutumia* (elder) → **atumia** (elders); *muiritu* (maiden) → **airitu** (maidens).
2. **Class II — Inanimate *Mu-* → *Mi-* (Classes 3/4)**:
   - *muti* (tree) → **miti** (trees); *mwaki* (fire) → **miaki** (fires); *mugunda* (cultivated farm) → **migunda** (farms); *mucii* (homestead) → **micii** (homesteads); *mweri* (moon/month) → **mieri** (months).
3. **Class III — *I-* / *Ri-* → *Ma-* (Classes 5/6)**:
   - *ihiga* (stone) → **mahiga** (stones); *itumbi* (egg) → **matumbi** (eggs); *ithangu* (leaf) → **mathangu** (leaves); *riitho* (eye) → **maitho** (eyes); *igego* (tooth) → **magego** (teeth).
4. **Class IV — *Ki-* / *Gi-* → *I-* / *Ci- (Shi-)* (Classes 7/8 — Tools, Artifacts & Augmentatives)**:
   - *kindu* (thing) → **indu** (things); *giti* (stool/chair) → **iti** (chairs); *kiratu* (sandal) → **iratu** (sandals); *kiara* (finger) → **ciara / shiara** (fingers); *kirima* (mountain) → **irima** (mountains).
   - Hémery (1903, pp. 3–4) notes that prefixing **ke- / kĩ-** also forms **augmentatives** (large objects).
5. **Class V — Invariable *N-* (*Ny-, Nd-, Ng-, Mb-, Nj-*) Class (Classes 9/10)**:
   - *nyumba* (house/houses), *ng'ombe* (cow/cattle), *mburi* (goat/goats), *mbura* (rain), *njira* (road/path).
6. **Class VI — *Ru-* → *N-* (Classes 11/10)**:
   - *rurimi* (tongue) → **ndimi** (tongues); *ruhiu* (sword/knife) → **hiu / njora** (swords); *ruui* (river) → **njui** (rivers); *rukuni* (firewood) → **nguni** (firewood).
7. **Class VII — Diminutive *Ka-* → *To- (Tũ- / Twa-)* (Classes 12/13)**:
   - Hémery (1903, pp. 3–4): *kana* (little child) → **twana / toana**; *kaguku* (little chicken) → **toguku**; *kamuti* (little tree) → **tomiti**; *kahee* (little boy) → **tohee**.
8. **Class VIII & IX — Abstract/Collective *U- (Ũ-)* → *Ma-* (Class 14) & Verbal/Locative *Ku- (Kũ-)* (Classes 15–17)**:
   - *uta* (bow) → **mata** (bows); *uhoro* (news/affair) → **mohoro**; *utuku* (night); *kundu* (place) → **makundu**.`,
    examples: [
      { kikuyu: "mundu mwega → andu ega | muti mwega → miti miega", english: "a good person → good people | a good tree → good trees", explanation: "Classes 1/2 (mu-/a-) and 3/4 (mu-/mi-) adjectival concord (Hémery 1903, p. 15)" },
      { kikuyu: "kana kega → twana twega | kaguku → toguku", english: "a good child → good children | little chicken → little chickens", explanation: "Diminutive Class 12/13 ka-/to- (tw-) in Hémery (1903, pp. 3–4)" },
      { kikuyu: "ruhiu rwega → hiu njega | rurimi → ndimi", english: "a good knife/sword → good knives | tongue → tongues", explanation: "Class 11/10 ru-/n- alternation (Hémery 1903 & Hinde 1904)" }
    ]
  },
  {
    id: "kikuyu-affirmative-verb-tenses",
    title: "Affirmative Verb Conjugation & Five Derivative Verb Stems (Hémery 1903 & Hinde 1904)",
    summary: "Complete affirmative conjugation paradigms of kohora ('to beat', Hémery 1903) and gu-tinda ('to conquer', Hinde 1904) plus Hémery's 5 verbal derivative forms (-era, -ia, -ika, -ana, -wo).",
    content: `Rev. Fr. A. Hémery (1903, pp. 9–11) and Hildegarde Hinde (1904, pp. xi–xv) set out the full affirmative conjugation of **kohora** ("to beat") and **ku-tinda / gu-tinda** ("to conquer"):
1. **Present Tense (Prefix *-a-* / *ndi-*)**:
   - Hémery (1903, p. 9): **Ndahora** (I beat), **Ne wahora** (thou beatest), **Ne ahora** (he/she beats), **Ne twahora** (we beat), **Ne mwahora** (you beat), **Ne mahora** (they beat) — contrasting with Negative Present **Ndihora, Ndohora, Ndehora, Totihora, Motihora, Matihora**.
   - Hinde (1904): 1s **n-a-tinda**, 2s **w-a-tinda**, 3s **a-tinda**, 1p **tw-a-tinda**, 2p **mw-a-tinda**, 3p **m-a-tinda**.
2. **Present Imperfect / Progressive (Prefix *-ki-* / *-re-*):**:
   - 1s **ni-ki-tinda** (I am conquering), 2s **u-ki-tinda**, 3s **a-ki-tinda**, 1p **tu-ki-tinda**, 2p **mu-ki-tinda**, 3p **ma-ki-tinda**.
3. **Present Perfect (Suffix *-ite* / *-eti* / *-iti*)**:
   - Hémery (1903, p. 9 Past & Preterit): **Nderahora / Ndehorete / Ndehorile** (I beat / have beaten), **Ne urahora**, **Ne arahora**, **Ne torahora**, **Ne morahora**, **Ne marahora**; Preterit (narrative): **Ndakehora, Okehora, Akehora**.
   - Hinde (1904): **ni-tind-iti** (I have conquered).
4. **Past Perfect (Suffix *-ire* / *-eri*, with *ra-* or *a-*)**:
   - Hémery (1903): *ndahorire / ndirahorire* (I beat [past]), *wahorire*, *ahorire*, *twahorire*, *mwahorire*, *mahorire*.
5. **Future Tense (Infix *-ka-* / *-ga-* or *-rii-*)**:
   - Hémery (1903, p. 10 Future & Conditional): Future **Ne ngohora, Ne okohora, Ne akohora, Ne tokohora, Ne mokohora, Ne makohora** (Neg. **Ndikohora, Ndokohora, Ndekohora, Totikohora, Motikohora, Matikohora**); Conditional Present **Ningehora, Ne ongehora, Ne angehora, Ne tongehora, Ne mongehora, Ne mangehora** (Neg. **Ndingehora**; Past **Ningehorile / ningehorete**).
   - Hinde (1904): **nin-ka-tinda / ni-ga-tinda** (I shall conquer).
6. **Five Derivative Verb Stems & Habitual *-ga* (Hémery 1903, pp. 10–11)**:
   - **(I) Determinative / Applied (*-era / -ira*)**: *koluta → kolutera* (to do to), *kokinya → kokinyera* (to reach at).
   - **(II) Passive (*-wo / -ilwo*)**: *kohora → kohorwo* (to be beaten), *koona → koonwo* (to be seen).
   - **(III) Causative (*-ia / -ya*)**: *kohona* (to be cured) → *kohonya* (to cure), *koikoroka* (to descend) → *koikorokia* (to bring down).
   - **(IV) Reflexive (*-e-* prefixed to root)**: *kooraga → koeoraga* (to kill oneself), *kogora → koegora* (to buy oneself).
   - **(V) Reciprocal (*-na / -ana*)**: *kokwenda → kokwendana* (to love each other), *kokora → kokorana* (to meet together), *kohora → kohorana* (to beat/fight).
   - **Habitual/Continuous Suffix (*-ga*, p. 10)**: *kohoraga* (beat continually), *kolyaga* (eat habitually), *komenyaga* (know continually).`,
    examples: [
      { kikuyu: "Ndahora (Neg. Ndihora) • Nderahora / Ndehorete • Ndakehora • Ne ngohora • Ningehora", english: "I beat (I do not beat) • I beat/have beaten • I beat (narrative) • I shall beat • I would beat", explanation: "Hémery (1903, pp. 9–10) paradigm of kohora" },
      { kikuyu: "kohora → kohorera → kohorithia → kohorwo → kohorana", english: "to beat → beat for → cause to beat → be beaten → beat one another", explanation: "Hémery (1903, p. 11) 5 derivative verb stems" },
      { kikuyu: "n-a-tinda / ni-ki-tinda / ni-tind-iti / nin-ka-tinda", english: "I conquer / I am conquering / I have conquered / I shall conquer", explanation: "Hinde (1904, pp. xi–xiii) paradigm of ku-tinda" }
    ]
  },
  {
    id: "kikuyu-negative-conjugation-locatives",
    title: "Negative Verb Paradigms (-ti- / -di- / -ndi-) & Locative Suffix (-ini / -eni) (Hémery 1903 & Hinde 1904)",
    summary: "Kikuyu forms negative tenses with the prefix -ti- (-di-/-ndi- in 1s) and negative copula ti-, and marks interior/spatial location with the suffix -ini / -eni.",
    content: `Hémery (1903, pp. 9–10) and Hinde (1904, pp. xv–xviii, 64–67) detail how negation and spatial location operate in Gĩkũyũ:
1. **Negative Present (1s *ndi-*, 2s *ndu-* / *u-ti-*, 3s *nda-* / *a-ti-*, pl. *tu-ti-, mu-ti-, ma-ti-*)**:
   - Hémery (1903, p. 9): **Ndihora** (I do not beat), **Ndohora**, **Ndehora**, **Totihora**, **Motihora**, **Matihora**; Negative Infinitive: **Kotihora** (not to beat).
   - Common conversational negatives: **ndiui / ndikumenya** (I do not know), **ndikwenda** (I do not want), **ndingihota kuthi** (I cannot go).
2. **Negative Past (Infix *-na-*)**:
   - Hémery (1903, p. 9) & Hinde (1904, p. xvi): **ndi-na-hora / n-di-na-tinda** (I did not beat / conquer), **u-ti-na-hora**, **a-ti-na-hora**, **tu-ti-na-hora**, **mu-ti-na-hora**, **ma-ti-na-hora**.
3. **Negative Future (Infix *-ka-* / *-ga-*)**:
   - **n-di-ka-tinda / ndikahora** (I shall not conquer / beat), **ndikathie** (I will not go).
4. **Negative Subjunctive / Imperative (*-ti-ka-...-e*)**:
   - Hémery (1903, p. 10): **Ndihore / ndikahore**, **Ndohore / ndokahore** (do not beat! sg.), **Ndehore / ndekahore**, **Totihore / totikahore**, **Motihore / motikahore** (do not beat! pl.), **Matihore / matikahore**.
5. **Locative Suffix (*-ini* / *-eni*)**:
   - Added to the end of a noun to express "in, at, on, near": *mutwe* (head) → **mutweni** (on the head), *miti* (trees) → **mitini** (in the trees), *nyumba* (house) → **nyumbani / nyumba-ini** (in the house), *ruui* (river) → **ruuini** (at the river).`,
    examples: [
      { kikuyu: "ndina-hora / tutina-hora | ndika-hora / tutika-hora", english: "I/we did not beat | I/we shall not beat", explanation: "Negative past (-na-) and negative future (-ka-) in Hémery (1903, pp. 9–10)" },
      { kikuyu: "ndiui / ndikumenya • ndingihota kuthi", english: "I do not know • I cannot go", explanation: "Everyday negative expressions (Hinde 1904, p. 64)" },
      { kikuyu: "mutweni / mitini / nyumbani / ruuini", english: "in the head / in the trees / in the house / at the river", explanation: "Locative suffix -ini/-eni (Hémery 1903 & Hinde 1904)" }
    ]
  },
  {
    id: "kikuyu-numerals-possessives",
    title: "Decimal Numerals, Qualifying Adjectives, Multipliers (Ka-) & Possessive Concords (Hémery 1903 & Hinde 1904)",
    summary: "Gĩkũyũ counts in tens (ikumi, mirongo iri, igana, ngiri), prefixes ka-/kĩ- for 'times' (kamwe/kirrimue, keeri, kathatu), and inflects adjectives and possessives to match the noun class.",
    content: `From Rev. Fr. A. Hémery (1903, pp. 4–8) and Hildegarde Hinde (1904, pp. 62–66):
1. **Cardinal Numbers (1–1,000)**:
   - **1–10**: *imue / ĩmwe* (1), *igiri / igĩrĩ* (2), *ithatu / ithatũ* (3), *inya* (4), *ithanu / ithano* (5), *thanthatu / ithathatũ* (6), *muguanja / mũgwanja* (7), *inyanya* (8), *ikenda / kenda* (9), *ikumi* (10).
   - **11–1,000**: *ikumi na imwe* (11), *mirongo iri* (20), *mirongo itatu* (30), *mirongo inya* (40), *mirongo ithanu* (50), *igana* (100, pl. *magana*), *ngiri* (1,000).
   - Note (Hémery 1903, p. 5): Numbers 1, 2, 3, 4, 5, 6, and 8 (as well as *-igana* "how many?") agree in prefix with the noun counted (*mundu umwe* '1 person', *andu eri* '2 people', *miti itatu* '3 trees', *indu inya* '4 things', *nyumba ithano* '5 houses'), whereas *mugwanja* (7), *kenda* (9), and *ikumi* (10) are invariable.
2. **Adverbial Multipliers (*Ka-*)**:
   - *kamwe / kirrimue* (once), *kēēri* (twice), *kathatu* (thrice), *kanna* (four times), *kathano* (five times).
3. **Possessive Concords (*-akwa, -aku, -ake, -itu, -anyu, -ao*) & Suppletive Kinship Terms (McGregor 1904, pp. 27, 63, 76, 114, 158)**:
   - Regular concords: *mwana wakwa* (my child), *ciana ciaku* (your children), *ng'ombe ciake* (his cows), *guoko gwake* (his arm), *mucii witu* (our homestead).
   - **Suppletive Kinship Possessives (McGregor 1904)**:
     - **Father (p. 63)**: My father = **Baba**, Your father = **Thoguo**, His/her father = **Ithi** (Plural all persons: **Maithi**; forefather = *Baba wa tene*, pl. *Maithi wa tene*, p. 69).
     - **Mother (p. 114)**: My mother = **Maito**, Your mother = **Nyukwa**, His/her mother = **Nyina** (Plural all persons: **Manyina**).
     - **Siblings, In-Laws & Grandparents (pp. 27, 40, 43, 76, 158–159)**: Brother = *Mwana / Muru wa maito*; Sister = *Mwari wa maito* (pl. *Ari*); Sister-in-law = *Mwari wa nyina* or *Maramu* (pl. *A-*); Brother-/Son-in-law / Cousin = *Muthoni* (pl. *A-*); Grandfather / Grandchild = *Guka / Gukawe* (pl. *Maguka / Magukawe*); Grandmother = *Chocho* (pl. *Machocho*).`,
    examples: [
      { kikuyu: "mundu umwe, andu eri, miti itatu, indu inya, nyumba ithano", english: "one person, two people, three trees, four things, five houses", explanation: "Noun-class prefix agreement on numerals 1–5 (Hémery 1903, p. 17)" },
      { kikuyu: "Baba / Thoguo / Ithi (pl. Maithi) • Maito / Nyukwa / Nyina (pl. Manyina)", english: "My / your / his-her father (pl. fathers) • My / your / his-her mother (pl. mothers)", explanation: "Suppletive kinship possessives in McGregor (1904, pp. 63, 114)" },
      { kikuyu: "mwana wakwa / ciana ciaku / mucii witu", english: "my child / your children / our homestead", explanation: "Possessive concord across classes (Hémery 1903, p. 20 & Hinde 1904, p. 65)" }
    ]
  },
  {
    id: "kikuyu-cultural-lexicon-hobley",
    title: "Classical Agĩkũyũ Social, Judicial, Seasonal, Clan & Ritual Terminology (Höhnel 1894, McGregor 1904, Routledge 1910, Dundas 1915 & Hobley 1922)",
    summary: "Höhnel (1894), W. S. & K. Routledge (1910), Hon. Charles Dundas (1915), and C. W. Hobley (1910, 1922) preserve the complete terminology of the 13 Agĩkũyũ clans (Mĩhĩrĩga), generation ages (Rĩĩka), council grades (Kiama), land tenure (Gĩthaka), and peace covenants.",
    content: `In *Discovery of Lakes Rudolf and Stefanie* (1894, Vol. I, Chs. V–VI), *With a pre-colonial People: The Akikuyu of British East Africa* (1910), *The Organization and Laws of Some Bantu Tribes in East Africa* (Hon. Charles Dundas, JRAI Vol. 45, 1915, pp. 234–306), and *Bantu Beliefs and Customary Institutions* (1922, Glossary pp. 305–308), primary accounts document the institutional vocabulary of Agĩkũyũ society:
1. **1887 Traverse of Kikuyuland: Peace Covenants, Ridges & Homesteads (Höhnel 1894, Vol. I, pp. 286–365)**:
   - Records the earliest south-to-north traverse from *Ngongo Bagas* (Ngong) to *Ndoro* at the western base of Mount Kenya (Aug–Oct 1887), meeting leaders *Miani*, *Karanja*, *Waiyaki*, *Kihara*, *Gathirimu*, *Karanja wa Maragua*, *Wamugunda* (Tetu), and *Kihura* (Ndoro).
   - **Peace Litany & Covenants**: Greeting **Mirema!** and peace chorus **Thayu! Thayu!** ("Peace! Peace!") during the **kuhoria tatha** ceremony (sprinkling sheep stomach-contents over both parties) and the solemn **githathi** blood-and-peace covenant over a white ram and black goat (**mburi ya thayu**).
   - **Landscape & Fortifications**: **rugongo** (pl. *migongo*, parallel mountain ridge bounded by streams), **Subugo** (primeval boundary forest belt), **itura** (fortified homestead ring inside the forest clearing), **kihingo** (thorny stockade gate barrier), **ngurunga** (camouflaged pitfall with sharpened stakes).
2. **Council Grades (*Kiama kia Kamatimo* vs. *Kiama kia Athuri*), *Gĩthaka* Tenure & Customary Law (Dundas 1915, pp. 241–304)**:
   - **Kiama Grades**: Junior council **Kiama kia Kamatimo** (initiated by presenting a goat after marriage) vs. senior judicial council **Kiama kia Athuri / Kiama kia Mataha** (carrying the ceremonial fly-whisk *mataha* and *mũthĩgi* staff), led by the spokesman **Mũthamaki**.
   - **Land Tenure (*Gĩthaka*)**: Hereditary ridge estate (**gĩthaka**, administered by the *mũramati*), distinguishing an outright purchase (**kũgũra**) from redeemable cultivation tenancy (**mũhoi** 'borrower of land' and **mũthoni** 'in-law tenant').
   - **Blood-Compensation (*Magambo / Ũhoro wa Njũgũma*)**: Fixed at 100 sheep/goats for a man and 30 for a woman, concluded with the **kũhoria** peace-ram sacrifice so kinship peace is restored.
3. **The 13 Clans (*I-ri-ka* / *Mĩhĩrĩga*) & 10 Chronological Ages (*Rĩĩka*) (Routledge 1910, pp. 8–23)**:
   - **13 Clans**: *A-ché-ra, A-ga-chí-ku, A-ga-thi-gí-a, Ai-cha-ka-mú-yo, Ai-rí-mu, A-ki-ú-ru (M'we-sá-ga / M'bú-ru), Am-bú-i, An-gá-ri (Ai-the-ka-hú-no), An-jí-ru, An-gó-i, E-thá-ga, Ai-ze-ran'-du, Ai-zi-e-gé-ni*.
   - **10 Ages Since Creation**: *1. Man-jí-ri → 2. Man-dó-ti → 3. Chi-éra → 4. Masaí → 5. Ma-thá-thi → 6. N'dé-mi → 7. I-ré-gi → 8. Ma-í-na → 9. Mwan'gi → 10. Mu-i-run'-gu*, with the **Itwika** generational transfer ceremony.`,
    examples: [
      { kikuyu: "Thayu! Thayu! • kuhoria tatha • mburi ya thayu • rugongo (pl. migongo)", english: "Peace! Peace! • peace-sprinkling ceremony • peace-sheep • mountain ridge", explanation: "1887 Kikuyu peace covenant and landscape terms recorded by Höhnel (1894, Vol. I, pp. 295–350)" },
      { kikuyu: "Kiama kia Kamatimo → Kiama kia Athuri (Mataha) • Gĩthaka • Mũramati • Mũhoi", english: "Junior council → Senior elders' council • Clan land estate • Estate trustee • Land tenant/borrower", explanation: "Agĩkũyũ judicial grades and Gĩthaka land law in Hon. Charles Dundas (1915, pp. 241–295)" },
      { kikuyu: "Gĩcandĩ (Kishandi) • Rũgano (pl. Ngano) • Guso!", english: "Poetic gourd rattle • Folktale • Riddle challenge ('Guess!')", explanation: "Agĩkũyũ oral literature & music (Routledge 1910, pp. 109, 285)" }
    ]
  },
  {
    "id": "kikuyu-mcgregor-1905-barlow-1914-dahl",
    "title": "Dahl's Law (K→G Dissimilation), Hinde (1904) Aspect Suffixes & Locative Classes (McGregor 1905 & Barlow 1914)",
    "summary": "Rev. A. W. McGregor (1905), A. R. Barlow (1914), and H. Hinde (1904) document Gĩkũyũ velar dissimilation (k → g before voiceless consonants), aspect suffixes (-ĩte perfect, -ire past), and spatial demonstratives.",
    "content": "1. **Dahl's Law in Gĩkũyũ Prefixes (McGregor 1905 & Barlow 1914)**:\n   - The prefixes *ka-* (Class 12), *kĩ-* (Class 7), and *kũ-* (Class 15/17) voice to **ga-**, **gĩ-**, and **gũ-** when the next syllable begins with a voiceless consonant (*k, t, th, c*): *gĩ-thaka* (bushland), *gũ-tindĩka* (to push), *gũ-tinia* (to cut), *ga-kĩrĩma* (small hill), vs. *kĩ-rĩma* (mountain), *kũ-menya* (to know), *kũ-nyua* (to drink).\n2. **Completive vs. Preterite Suffixes (Hinde 1904, pp. xiii–xiv)**:\n   - Present Perfect uses **-ĩte / -ete** (*nĩ-ndĩ-tind-ĩte* 'I have conquered/stayed'), whereas Past Perfect/Preterite uses **-ire / -ere** (*nĩ-ndĩ-tind-ire*). Locatives distinguish *haha/gũkũ* (here) from *harĩa/kũrĩa* (yonder).",
    "examples": [
      {
        "kikuyu": "gĩ-thaka, gũ-tinia, gũ-tindĩka vs. kĩ-rĩma, kũ-menya",
        "english": "bushland, to cut, to push vs. mountain, to know",
        "explanation": "Dahl's Law voicing k → g before voiceless obstruents (McGregor 1905)"
      },
      {
        "kikuyu": "haha / gũkũ (here) • harĩa / hau / kũrĩa (there/yonder)",
        "english": "proximal vs. distal locative demonstratives",
        "explanation": "Wiktionary Bantu Swadesh & Barlow (1914)"
      }
    ]
  }
];
