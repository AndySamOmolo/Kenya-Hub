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
  },
  {
    id: "kikuyu-hemery-1903-complete-handbook",
    title: "Rev. Fr. A. Hémery, C.S.Sp. (1903) English-Kikuyu Hand-Book: Exact 9 Noun Classes, Diminutives (ka-/to-) & Augmentatives (ke-), Qualifying (-ega), Cardinals (1–10,000), Pronouns, Kohora Paradigm, 5 Derived Verb Forms, Particles (pp. 13–14) & 5-Part Phrase-Book (pp. 77–87)",
    summary: "Complete line-by-line grammatical and conversational synthesis of Rev. Fr. A. Hémery's pioneering 1903 English-Kikuyu Hand-Book (Roman Catholic Mission, Zanzibar—Nairobi; Preface dated Nairobi, April 20th, 1902, Book pp. 1–87 [PDF pp. 1–92]).",
    content: `From The Rev. Father A. Hémery, C.S.Sp., Missionary Apostolic (*English-Kikuyu Hand-Book*, Zanzibar—Nairobi: Roman Catholic Mission, 1903; Preface dated Catholic Mission, Naïrobi, April 20th, 1902, citing Consul-General Sir Charles Eliot and the Uganda Railway, Book pp. 1–87 [PDF pp. 1–92]):
1. **The Alphabet & Five Confused Sound Pairs (PDF p. 5)**:
   - *ch, sh, w* as in English; *g* as in *gate*; *j* as in French *jour*; *s* as in *sun*; *t* as in *ten*; *y* as in *yes*; vowels as in Italian; **the letter *f* is not used**.
   - **Five Sound Pairs Frequently Confused by Speakers**: **(1)** *l* and *r*, **(2)** *g* and *k*, **(3)** *sh* and *ch*, **(4)** *o* and *u*, **(5)** *e* and *i*.
2. **Chapter I — Hémery's Exact Nine Classes of Nouns, Diminutives & Augmentatives (Book pp. 1–4)**:
   - **I. Class (*m-, mu-, mo- → a-*, rational beings)**: *Mundu → Andu* ('a Man'), *Mkikuyu → AKikuyu* ('a Kikuyu'), *Mzungu → Azungu* ('an European'), *Mnene → Anene* ('a Chief'), *Moireto → Aireto* ('a Girl').
   - **II. Class (*m-, mo- → me-*)**: *Mte / Mote → Mete* ('a Tree'), *Mweri → Meeri* ('the Moon'), *Motoe → Metoe* ('the Head'), *Mwere → Meere* ('the Body'), *Mkiha → Mekiha* ('the Vein'), *Mrigo → Merigo* ('a Load'), *Mwaka → Meaka* ('a Year'), *Mgunda → Megunda* ('a Field'), *Mtito → Metito* ('a Forest').
   - **III. Class (Invariable Nouns)**: *Nyumba* ('a House'), *Nyama* ('Meat'), *Ngombe* ('an Ox'), *Ngondu* ('a Sheep'), *Ndigiri* ('a Donkey'), *Nyoni* ('a Bird'), *Ndjogu* ('an Elephant'), *Ndjira* ('a Road'), *Mbura* ('the Rain').
   - **IV. Class (*ke- → i-*)**: *Kendo → Indo* ('a Thing'), *Kesaka → Isaka* ('a Field'), *Kekwa → Ikwa* ('a Yam'), *Kelima → Ilima* ('a Hill'), *Keroto → Iroto* ('a Dream').
   - **V. Class (*i- → ma-*, plus *koto* & *kogoro*)**: *Inyoro → Manyoro* ('the Nose'), *Igongona → Magongona* ('a Sacrifice'), *Ihiga → Mahiga* ('a Stone'), *Irima → Marima* ('a Hole'), *Itumbe → Matumbe* ('an Egg'), *Igego → Magego* ('a Tooth'), plus *koto → mato* ('the ear') and *kogoro → magoro* ('the foot').
   - **VI. Class (Nouns not beginning with *i-* prefixing *ma-* in the plural)**: *Letwa → Maletwa* ('a Name'), *Ondo → Maondo* ('a Cause'), *Taama → Mataama* ('Cloth').
   - **VII. Class (*l- / lo-* → *n-* before consonant, *ny-* before vowel; initial *l/r* + *n* → *d*)**: *Logito → Ngito* ('a Roof'), *Lwimbo → Nyimbo* ('a Song'), *Loleme → Ndeme* ('the Tongue'), *Lorigi → Ndigi* ('a String'), *Loara → Ndoara* ('a Nail'), *Loere → Ndoere* ('a String/Side').
   - **VIII. Class (*ki- → shi-*)**: *Kiombe → Shiombe* ('a Person'), *Kiongoyo → Shiongoyo* ('a Fish'), *Kiara → Shiara* ('a Finger'), *Kiuga → Shiuga* ('a Dish'), *Kiaro → Shiaro* ('a Caravan'), *Kiondo → Shiondo* ('a Basket'), *Kiura → Shiura* ('a Toad').
   - **IX. Class (Verbs used as nouns)**: *Kokwa* ('To die'), *Kosie* ('To go'), *Kooraga* ('To kill').
   - **Diminutives (\`ka-\` & \`to-\`) & Augmentatives (\`ke-\`, pp. 3–4)**: *Ngondu → Kangondu* ('a small sheep'), *Munyu → Kamunyu* ('a little salt'), *Ngombe → Kangombe* ('a little ox'), *Tomae* ('a little water'), *Toirio* ('a little food'); *Ngombe → Kengombe* ('a big ox'), *Munyu → Kemunyu* ('plenty of salt').
3. **Chapters II–IV — Qualifying \`-ega\`, Cardinals \`1–10,000\`, Ordinals & Complete Pronouns (Book pp. 4–8)**:
   - **Qualifying \`-ega\` across Classes I–IX (p. 4)**: I. *Mundu mwega / Andu aega*; II. *Mote mwega / Mete mega*; III. *Nyumba Njega*; IV. *Kendo kyega / Indo shyega*; V. *Ihiga ryega / Mahiga mega*; VI. *Taama mwega / Mataama mega*; VII. *Lwimbo lwega / Nyimbo djega*; VIII. *Kiara kiega / Shiara shiega*; IX. *Kokwa kwega*.
   - **Cardinals \`1–10,000\` & Ordinals (pp. 4–5)**: *1 Imwe/omwe, 2 Igere/ere, 3 Itato/isato, 4 Inya, 5 Isano, 6 Itandato, 7 Mgwandja, 8 Inyanya, 9 Kenda, 10 Ikumi, 11 Kumi na imwe ... 20 Merongo ere, 30 Merongo isato, 40 Merongo ena, 50 Merongo etano, 60 Merongo itandato, 70 Merongo mgwandja, 80 Merongo enana, 90 Merongo kenda, 100 Igana, 200 Magana mere, 300 Magana atato, 400 Magana ana, 500 Magana atano, 600 Magana atandato, 700 Magana mgwandja, 800 Magana anana, 900 Magana kenda, 1000 Ngiri ... 10000 Ngiri ikumi*; Ordinals *-a mbereirie* ('First') to *-a suza* ('The last').
   - **Genitive \`-a\` ('of') across Classes 1–9 (pp. 6–7)**: 1. *Mundu wa mzamaki / Andu a mzamaki*; 2. *Mte wa mzuri / Mete ya mwana*; 3. *Nyumba ya mzuri*; 4. *Kesaka kya baba / Isaka shya baba*; 5. *Ihiga rya nyumba / Mahiga ma nyumba*; 6. *Taama wa mundu / Mataama ma mundu*; 7. *Loleme lwa maito / Ndeme shya maito*; 8. *Kiara kya mundu / Shiara shya mundu*; 9. *Kokwa kwa baba*.
   - **Composite Pronouns & 3-Way Demonstratives (pp. 7–8)**: *niye mwene, we mwene, nake mwene, iswe ene, inywe ene, wao/ao ene*; Demonstratives (1 Near | 2 Distant | 3 Spoken of Beforehand): Cl. 1 *oyo | olya | oshio* (pl. *aya | alya | ashio*), Cl. 4 *geke | kelya | keo* (pl. *ishi | ilya | ishio*), Cl. 5 *rere | relya | reo* (pl. *maya | malya | mashio*).
4. **Chapter V — Adverbs, Enclitics (\`-le\` & \`-tya\`), Attention Call (\`Aderere!\`) & 5-Part Phrase-Book (Book pp. 13–14, 77–87)**:
   - **Particles & Time Adverbs (pp. 13–14)**: *Kolaya* ('far'), *Hange* ('elsewhere'), *Igoro / Logoro* ('above'), *Se / ze* ('below'), *Reu / reu-reu* ('now/to-day'), *Rochio* ('to-morrow'), *Oke* ('day after to-morrow'), *Ira* ('yesterday'), *Iyo* ('day before yesterday'), *Rochine tene* ('very early in the morning'), enclitic **-le** ('if/when/as': *Ndalutara werale negokwata rupia*), enclitic **-tya** ('how?': *Waekatya*), **Kana** ('if/when' & 'or/either'), **Aderere!** ('Listen to me!'), **Ne muhoro — Nde muhoro, muhoro mweg**, and **Tiguo uhoro / tigwoni uhoro** ('Good-bye').
   - **Five-Part Conversational Phrase-Book (pp. 77–87)**: **I. Usual** (pp. 77–78), **II. Servants, Meals, etc.** (pp. 79–81), **III. A Visit to a Village** (pp. 81–82), **IV. Working** (pp. 82–83), and **V. In Caravan** (pp. 84–87).`,
    examples: [
      { kikuyu: "Cl. VI Letwa → Maletwa, Ondo → Maondo, Taama → Mataama • Cl. VII Logito → Ngito, Lwimbo → Nyimbo, Loleme → Ndeme, Lorigi → Ndigi, Loara → Ndoara • Cl. VIII Kiombe → Shiombe, Kiongoyo → Shiongoyo", english: "name, cause, cloth (Ø → ma-) • roof, song, tongue, string, nail (l-/lo- → n-/ny-/nd-) • person, fish (ki- → shi-)", explanation: "Hémery's (1903, pp. 2–3) Classes VI, VII, and VIII" },
      { kikuyu: "Mundu oyo / olya / oshio (pl. Andu aya / alya / ashio) • Kendo geke / kelya / keo (pl. Indo ishi / ilya / ishio) • Ihiga rere / relya / reo (pl. Mahiga maya / malya / mashio)", english: "this / that (distant) / that (aforementioned) man, thing, and stone", explanation: "Hémery's (1903, p. 8) 3-way demonstrative system" },
      { kikuyu: "Ndalutara werale negokwata rupia • Waekatya? • Aderere! • Ne muhoro — Nde muhoro • Tiguo uhoro / tigwoni uhoro", english: "If I do work I shall get Rupees • What do you do? • Listen to me! • Good day — I am well • Good-bye (sg. / pl.)", explanation: "Enclitics -le and -tya, attention call, and salutations in Hémery (1903, pp. 13–14)" }
    ]
  },
  {
    id: "kikuyu-mcgregor-1904-complete-vocabulary",
    title: "Rev. A. W. McGregor (1904) English-Kikuyu Vocabulary (C.M.S. / SPCK, Fort Smith / Kabeti, 1901–1902): Preface, R.G.S. Orthography (Th for S/Z, Ng' vs. Ng'g), Plural Bracket Notation, Pronouns, Kinship, 7-Day Sequence, Seasons & Customary Law (pp. i–iv, 5–192)",
    summary: "Complete line-by-line synthesis of Rev. A. W. McGregor's 192-page English-Kikuyu Vocabulary (SPCK London, 1904; Preface dated London, May 1903; collected at Fort Smith / Kabeti in 1901–1902, PDF pp. 1–201).",
    content: `From Rev. A. W. McGregor of the Church Missionary Society (*English-Kikuyu Vocabulary: Compiled for the Use of the C.M.S. Missions in East Africa*, London: Society for Promoting Christian Knowledge, Northumberland Avenue, W.C., printed by Richard Clay & Sons, Limited, London and Bungay, 1904; Preface pp. iii–iv dated London, May 1903, Book pp. i–iv, 5–192 [PDF pp. 1–201]):
1. **Preface: Fort Smith (*Kabeti*), Uganda Railway (Miles 326–360), Mount Kenia (*Kirinyaga* / *Kilinyatha* / *Kireira*) & Population (pp. iii–iv, 95)**:
   - Collected in the district of Kikuyu called by Europeans **Fort Smith** (native name, **Kabeti**) during **1901 and 1902**.
   - **Geography & Altitude**: Situated practically on the Equator; the **Uganda Railway** from about **mile 326 to mile 360** runs through the SW portion and forms almost its boundary, while the Kikuyu-speaking district stretches NE to **Mount Kenia** (native name **Kirinyaga** on p. iv; **Kilinyatha. Kireira** on p. 95). Altitude varies from **4,000 feet to the 18,000 feet of Kenia**, with inhabited parts from **4,000 to 7,000 feet**.
   - **Population (1903)**: Estimated at **200,000 to 300,000**, with agricultural settlement expanding around the **Nairobi and Kikuyu stations** of the Uganda Railway.
2. **Orthographic Note, Abbreviations & Morphological Observations A–B (pp. 5–6)**:
   - **R.G.S. Orthography & Absence of \`S\`/\`Z\`**: Consonants pronounced as in English, vowels as in Italian; every letter is pronounced. In **Kabeti** (Fort Smith), ***S* and *Z* do not appear to be used, *Th* always taking their places** (e.g., *Muthungu* 'European', *Muthamaki* 'chief/king', *Muthuri* 'elder', *-theru* 'clean/holy', *kothie* 'to go', *Thetani* 'Devil', *Mathihi / Krithto* 'Messiah/Christ', *Mutha* 'Moses', *Kithwaeri* 'Coast language / Swahili'); ***L* and *R*** are often indistinguishable or used interchangeably.
   - **Velar Nasal \`ng'\` vs. Prenasalized \`ng'g\` (p. 5)**: Words with a point after *ng*, as **koteng'era** ('to abscond/run'), must be pronounced **koteng-era**, not *koten-gera* (also *ng'ombe, ng'ondu, ng'aragu, ng'ania, kong'orota, kong'athia, king'ang'aini*). Words having both nasal *ng* and hard *g* are written **ng'g**, as **kuing'gata** ('to accelerate/banish/conquer/drive away') and **ketung'guru (I-)** ('ball').
   - **Observe A & B (pp. 5–6)**: **(A)** The Infinitive of the verb is in all cases given (*Ko-, Ku-, Kw-*, p. 170). **(B)** Invariable nouns are marked ***s. & p.***; variable nouns give the full plural in brackets as *Servant, Mwetereri (Etereri)*, or the plural prefix in brackets as *Gechunji (I-)* (= sg. *Gechunji*, pl. *Ichunji*).
3. **Complete Pronouns, Demonstratives, Locatives (\`Kw-\` & \`-ini\`), Enclitics & Kinship System Across pp. 6–192**:
   - **Personal & Reflexive Pronouns**: *Nie / Ngoro yakwa* ('I'), *Nie nyiki / Nie mweni* ('I myself / alone'), *We / We mweni / Ngoro yaku* ('Thou / Thyself'), *Oria / We wiki* ('He/Her / Of himself'), *Ithui / Ithui eni / Ngoro chiitu / Ithui wiki* ('We / Ourselves / Only we'), *Inyui / Inyui eni / Ngoro yanyu* ('Ye / Yourselves'), *Aria / Iria / Maria / Haria* ('They'); Object infixes: *-nd-, -nj-, -ng-* ('me', p. 109), *-mu-, -mo-, -mw-* ('him', p. 82), *-tu-, -to-, -tw-* ('us', p. 179), *-ma-, -chia-* ('them', p. 167); Home locatives: *Kwangu, Kwaku, Kwake, Kwitu, Kwanyu, Kwao* (*Tuthie kwitu* 'Let us go along', p. 14) and noun locative suffix *-ini / -ni* (pp. 87, 92).
   - **Demonstratives & Interrogatives**: *Uyu, Keki, Roro, Haha* (pl. *Aya, Ichi, Maya, Haha*, p. 168) vs. *-ria* (*Oria, Aria, Iria, Maria, Haria, Koria*) and *Oria mweni / Okiriakiria* ('identical', p. 85); *No? Niweo?* ('Who? Who are you?', p. 187), *-ao?* ('Whose?'), *Nike? Niatea?* ('What? What is the matter?'), verb suffix **-atea** (*Akuugatea* 'How does he speak?', p. 84; *Kotariatea?* 'What kind of weather?', p. 185), *-riko* ('What kind / Which?'), *Niri?* ('When?'), *-ha / -ka* (*Meha?* 'Where are they?', p. 186), verb suffix **-ko** ('Whence/Whither?', pp. 186–187).
   - **Suppletive Kinship**: Father (p. 63): *Baba / Thoguo / Ithi* (pl. *Maithi*; *Baba watene / Maithiwa tene* 'forefather', p. 69; *Baba munyinyi / Babawa keri* 'uncle', p. 176); Mother (p. 114): *Maito / Nyukwa / Nyina* (pl. *Manyina*; *Tata* 'aunt', p. 17); *Mwana / Muru wa maito* ('brother', p. 27), *Mwari wa maito (Ari)* ('sister', p. 158), *Mwari wa nyina / Maramu (A-)* ('sister-in-law', p. 158), *Muthoni (A-)* ('brother-in-law / cousin / son-in-law', pp. 27, 40, 159), *Guka (Maguka) / Gukawe (Magukawe)* ('grandchild / grand-daughter', pp. 43, 76), *Chocho (Machocho)* ('grandmother', p. 76), *Rorachio (Marorachio)* ('gift to bride's father', p. 73), *Wathiomo* ('gift of a goat', pp. 73, 122, 137).
4. **7-Day Relative Time Sequence, Agricultural Seasons (\`Kathano\`, \`Kehu\`, \`Njahi\`, \`Mweri\`, \`Mohea\`) & Customary Law (pp. 36–192)**:
   - **7-Day Sequence**: *Iyo* ('day before yesterday') → *Ira* ('yesterday') → *Reu / Omothi / Muthenya uyu / Otuko uyu* ('to-day') → *Rochio* ('to-morrow') → *Oke* ('day after to-morrow') → *Matukwatatu* ('2 days after to-morrow') → *Matukwana* ('3 days after to-morrow').
   - **Seasons**: *Kathano* ('greater rainy season / winter', *Mwaka wa heho*, pp. 142, 188) and *Mwaka wa kehu* ('lesser rainy season', p. 142); crop seasons **Mwaka wa Njahi, Mweri, Mohea** ('last year: *Mwaka wa njahi or mweri as the case may be*', pp. 154, 191).
   - **Law, Ordeal & Religion**: *Chira (Ma-)* ('council/law/adjudication', *Muchiri* 'judge', *Muchirithia* 'plaintiff', *Muchirithio* 'defendant'), *Magambo / Mugambo (Mi-)* ('composition/fine for murder', pp. 36, 66), *Konyua muma* ('to take an oath / take ordeal cup', pp. 120, 124), *Muramati (A-) / Oramati* ('heir / inheritance'), *Mutaithorani (A-) / Kotaithorana* ('peacemaker / to make peace'), *Igongona (Magongona)* ('sacrifice') at the *Kegongaini (I-)* ('altar'), and *Thahu / Mugiru (Migiri) / Rehiya (Mehiya)* ('ceremonial sin/taboo', p. 157).`,
    examples: [
      { kikuyu: "koteng'era (velar ng') vs. kuing'gata & ketung'guru (ng' + hard g) • Mwetereri (Etereri) • Gechunji (I-) → Ichunji", english: "to run/abscond vs. to banish/conquer & ball • Servant (Servants) • Portion (Portions)", explanation: "McGregor's (1904, pp. 5–6) exact Kabeti orthographic & plural bracket notation" },
      { kikuyu: "Iyo → Ira → Reu / Omothi → Rochio → Oke → Matukwatatu → Matukwana • Kathano & Mwaka wa kehu • Mwaka wa Njahi, Mweri, Mohea", english: "Day before yesterday → Yesterday → To-day → To-morrow → Day after to-morrow → 2 & 3 days after to-morrow • Greater & lesser rainy seasons • Lablab, bulrush-millet & sorghum crop seasons", explanation: "McGregor's (1904, pp. 44, 114, 142, 154, 170, 191–192) 7-day sequence and seasonal calendar" },
      { kikuyu: "Akuugatea? • Kotariatea? — Kwena matu / Kwena heho / Kwena rugari (Ohiyo) • Tuthie kwitu! • Ndainuka / Ndaimuka — Thie na uhoro! • Ngai angienda", english: "How does he speak? • What kind of weather? — Cloudy / Cold / Hot • Let us go along! • I am going — Go in peace! • Probably (D.V., if God wills)", explanation: "Conversational idioms and enclitics across McGregor (1904, pp. 14, 63, 76, 84, 138, 185)" }
    ]
  },
  {
    id: "kikuyu-hobley-1910-thahu-kamiri-cattle-brands",
    title: "C. W. Hobley (1910) Part II Chapters II–IV: 87 A-Kikuyu Clan Cattle Brands (pp. 122–133), Ceremonial Uncleanness (Thahu, 7 Sacred Herbs, Ku'ringa-thengi & Kithathi, pp. 134–143) & Chief Medicine-Man Kamiri's Kutagura Ordeal (pp. 144–145)",
    summary: "Complete line-by-line documentation of C. W. Hobley's 1910 Kikuyu chapters: all 87 sub-clan (mbari) cattle brands across 13 clans (Figs. I–CXI), the 15 causes of Thahu and 7 purification herbs, the Ku'ringa-thengi and Kithathi oaths, and Chief Medicine-Man Kamiri's Kutagura notched-twig trial.",
    content: `From C. W. Hobley, C.M.G. (*Ethnology of A-Kamba and Other East African Tribes*, Cambridge University Press, 1910, Part II, Chapters II–IV, pp. 122–145):
1. **Part II, Chapter II — The 87 A-Kikuyu Clan & Sub-Clan (*Mbari*) Cattle Brands and Ear-Marks (pp. 122–133, Figs. I–CXI)**:
   - Hobley illustrates and catalogues **87 distinct Kikuyu cattle brands** across all **13 primary clans (*Mihiriga*)** alongside their ear-slit patterns:
   - **(1) Anjiru** (Figs. I–XIV, 14 *mbari*: *Mbari ya Mbaricho, Kithuma, Mwichuki, Njau, Muli, Checuki, Ngwaci, Mukolwe, Kimani, Njeru, Mbugu, Kanyoria, Munene, Gachii*), **(2) Ambui** (Figs. XV–XXV, 11 *mbari*), **(3) Agachiku** (Figs. XXVI–XXXI, 6 *mbari*), **(4) Eithaga / Aithaga** (Figs. XXXII–XXXVII, 6 *mbari*), **(5) Aitherandu** (Figs. XXXVIII–XLVII, 10 *mbari*), **(6)angari / Aithekahuno** (Figs. XLVIII–LIV, 7 *mbari*), **(7) Achera** (Figs. LV–LXIII, 9 *mbari*), **(8) Agathigia** (Figs. LXIV–LXIX, 6 *mbari*), **(9)akiuru / Mwesaga** (Figs. LXX–LXXV, 6 *mbari*), **(10) Angoi** (Figs. LXXVI–LXXIX, 4 *mbari*), **(11) Aichakamuyu** (Figs. LXXX–LXXXIII, 4 *mbari*), **(12) Airimu** (Figs. LXXXIV–LXXXV, 2 *mbari*), and **(13) Aiziegeni** (Figs. LXXXVI–LXXXVII, 2 *mbari*).
2. **Part II, Chapter III — Ceremonial Uncleanness Known as *Thahu*, 7 Sacred Herbs & Oaths (pp. 134–143)**:
   - **15 Specific Causes of *Thahu* (pp. 134–139)**: Stepping over a corpse; touching a woman's menstrual blood; a hyena defecating inside the homestead courtyard; a woman breaking a cooking pot on the hearthstones (*mahiga*); abedstead breaking while sleeping on it; an eagle or kite dropping meat in a village; a dog dying in a hut; a woman bearing twins on a bed; circumcision blood falling on another candidate; eating with a smith or touching his bellows; and violating clan dietary taboos.
   - **Purification by the *Mundu Mugo* & 7 Sacred Herbs (pp. 139–141)**: The *Mundu Mugo* purifies the patient (*ku-tahika thahu*) with sheep stomach-contents (**nduo / tatha**), white diatomite earth (**ira** from Mount Kenia), and a brush of **7 ceremonial plants**:
     1. **Mukengeria** (*Commelyna sp.*, wandering jew — coolness and peace)
     2. **Mugeri** (*Hibiscus / Solanum sp.* with hairy stems)
     3. **Munyururu** (*Vernonia sp.*)
     4. **Muhondu** (*Abutilon indicum*)
     5. **Matura thongu** (*Emilia sp.*)
     6. **Lujoi** (*Clerodendron sp.*)
     7. **Mutongu** (*Solanum incanum*, common Sodom apple)
   - **Solemn Oaths (*Ku'ringa-thengi*, *Muma* & *Kithathi*, pp. 141–143)**:
     - **Ku'ringa-thengi** ("Beating the He-Goat"): Litigants strike and break the limbs of a live male goat with a stone while pronouncing a conditional self-curse (*"If I lie, may I be broken like this goat"*).
     - **Kithathi** (borrowed from the Akamba *kithito*): A perforated clay or stone object (*githathi*) through whose seven apertures the swearer thrusts a grass stalk or twig while invoking destruction upon perjury.
     - **Rudioi & Muthumba**: Protective charms prepared by the *Mundu Mugo* against witchcraft (*urogi*).
3. **Part II, Chapter IV — Chief Medicine-Man Kamiri of Kiambu & the *Kutagura* Ordeal (pp. 144–145, Plates XXVI–XXVII)**:
   - Documents **Kamiri**, paramount *Mundu Mugo* of southern Kikuyu (Kiambu), his gourd rattle (**Mbuthu** or **Mwanu**), divination skin bag (**Kichuthu**), iron-tipped arrow shaft (**Mwarisa**) for applying medicine to the tongue, and boys' initiation shoulder-shield (**Ndomi**).
   - **The *Kutagura* Five-Twig Ordeal Table (p. 144)**: To detect a thief among five suspects from five clans, Kamiri cut five twigs from four sacred trees and marked each with notches before casting lots:
     - **1st Twig**: **Mugaga** tree — marked with **One notch**.
     - **2nd Twig**: **Muchatha** tree — marked with **Two notches**.
     - **3rd Twig**: **Murumbawe** tree — marked with **Three notches**.
     - **4th Twig**: **Muchatha** tree — marked with **Four notches**.
     - **5th Twig**: **Mutongo** tree — marked with **Five notches**.`,
    examples: [
      { kikuyu: "Thahu • ku-tahika thahu • nduo (tatha) • ira • Mukengeria, Mugeri, Munyururu, Muhondu, Matura thongu, Lujoi, Mutongu", english: "Ceremonial defilement • to purify/vomit thahu • sheep stomach contents • white sacred earth • the 7 sacred purification herbs", explanation: "Hobley (1910, Part II, Ch. III, pp. 134–141)" },
      { kikuyu: "Ku'ringa-thengi • Kithathi (Githathi) • Rudioi & Muthumba", english: "Beating the he-goat oath • perforated stone/clay oath-fetish • protective charms", explanation: "Kikuyu judicial oaths and charms in Hobley (1910, pp. 141–143)" },
      { kikuyu: "Kutagura: Mugaga (1 notch), Muchatha (2 notches), Murumbawe (3 notches), Muchatha (4 notches), Mutongo (5 notches) • Mbuthu / Mwanu • Kichuthu • Mwarisa • Ndomi", english: "Kamiri's 5 notched divination twigs • divining gourd • skin pouch • arrow shaft • initiation arm-shield", explanation: "Hobley (1910, Part II, Ch. IV, pp. 144–145, Plates XXVI–XXVII)" }
    ]
  }
  ,
  {
    id: "kikuyu-johnston-1919-1922-group-c-11",
    title: "Sir Harry H. Johnston (1919–1922) Group C #11 Kikuyu & Mount Kenya Bantu: 10 Dialect Markers (K., N. Dhaicω, Nd., E., C., Mw., M. 11a, Emb., Þ., Ig.), 16-Class Prefix/Concord Table (p. 111), Numerals, Pronouns, Noteworthy Roots (Vol. II, pp. 28–30) & Bibliography (p. 788)",
    summary: "Complete line-by-line documentation of Group C #11 Kikuyu and #11a Meru in Sir Harry H. Johnston's Comparative Study of the Bantu and Semi-Bantu Languages (Vol. I, 1919, pp. 98–112, 788 & Vol. II, 1922, pp. 28–30, 226, 261, 377–441, 463–491, 499–534).",
    content: `From Sir Harry H. Johnston, G.C.M.G., K.C.B., D.Sc. (*A Comparative Study of the Bantu and Semi-Bantu Languages*, Oxford: Clarendon Press, Vol. I [1919], pp. 98–112, 788 & Vol. II [1922], pp. 28–30, 226, 261, 377–441, 463–491, 499–534):
1. **Ten Mount Kenya & Highland Dialect Abbreviations in Column 11 (Vol. I, pp. 98, 111 & Vol. II, pp. 28–30)**:
   - **K.** = Kikuyu proper (Kabete / Fort Hall / Nyeri)
   - **N.** = North Kikuyu or *'Dhaicω'* (Thaichu)
   - **Nd.** = Ndia (Kirinyaga)
   - **E.** = Embu
   - **C.** = Cuka (Chuka)
   - **Mw.** = Mwimbe (Mwimbi)
   - **M.** = Meru (**11a**, north and north-east of Mt. Kenya across the Nyambeni Hills)
   - **Emb.** = Emberre (Mbeere)
   - **Þ.** = Þeraka (Tharaka, Upper Tana valley)
   - **Ig.** = Igωji (Igoji)
   - **Phonological Hallmarks (Vol. II, pp. 28–29, 226)**: Slurring of proto-Bantu *p* into *h*, *γ*, *w*, or zero (*-hīa* 'burn', *-hītūka* 'return'); frequent substitution of dental fricative **þ** (*th*) and **đ** (*dh*) for *s*, *z*, *f*, *v*, and *t* (*N-þē* 'country', *Mū-þēnya* 'day', *Þakame* 'blood', *Ma-iþω* 'eyes', *Mū-þūri* 'husband/elder', *-þatū* 'three', *-þanω* 'five', *-þanþatū* 'six'); and occasional loss of nasal in Class 9 before *g* (*Guī* for *Ṅ-guī* 'dog', *Gūkū* for *Ṅ-gūkū* 'fowl', *Gurūwe* 'pig', *Gari* 'leopard').
2. **Complete 16-Class Prefix & Concord Table for #11 Kikuyu & #11a Meru (Vol. I, p. 111 & Vol. II, p. 261)**:
   - **Class 1**: **Mu-, Mū-** (*u-, mū-, a-, wa-*) • **Class 2**: **A-** (**Ba-** in Meru 11a; *a-, ma-* / *ba-* in 11a)
   - **Class 3**: **Mu-, Mū-** (*mu-, u-, gu-*) • **Class 4**: **Mi-** (*mi-, i-, ī-*)
   - **Class 5**: **I-, Ri-, Rī-** (*ri-, rī-*) • **Class 6**: **Ma-** (*ma-, ga-*)
   - **Class 7**: **Ki-, Kī-, Gi-** (*ki-, gi-, c'-*) • **Class 8**: **I-, Ci-, C'-, Śi-** (**Bi-** in Meru 11a; *i-, ci-, śi-* / *bi-* in 11a)
   - **Class 9**: **N- (Ny-, M-), Ø-** (*i-, y'-*) • **Class 10**: **N- (Ny-, M-), Ø-, Tšū-** (*i-, zi-, c'-, tš'-*)
   - **Class 11**: **Ru-, Rū-** (*ru-, rū-*)
   - **Class 12**: **Tu-, Tū-** (plural of Class 13 *Ka-*; *tu-, tū-*) • **Class 13**: **Ka-** (diminutive singular; *ka-*)
   - **Class 14**: **U-, Ū-, W-** (*u-, ū-, gu-*) • **Class 15**: **Ku-, Gu-** (*ku-, gu-*) • **Class 16**: **Ha-** (*ha-*; locative suffix **-ini**).
3. **Noteworthy Roots & Dialect Comparisons in #11 Kikuyu & #11a Meru (Vol. I, pp. 98–110 & Vol. II, pp. 29–30)**:
   - **Cosmology & Nature**: **Ṅ-gai** (*Ngai*, Masai loanword for God alongside **Mū-rūṅgu**), **Ri-ūa** (sun; **I-rūa** in 11a), **M-weri** (moon), **N-jata** (star), **M-būra** (rain), **Ma-ī** (**Rū-ī** in 11a, water), **M-waki / M-wanki** (fire), **I-higa ; ma-** (**I-bia** in Embu/Tharaka, stone), **Kī-rīma ; i-** (mountain), **Mū-tītū** (forest).
   - **Kinship, Body & Animals**: **Baba, Þωgω ('Đωgω), Iþe** (my/thy/his father), **Maitω, Nyūkwa, Nyina** (my/thy/his mother), **Mū-rū wa nyina / Mū-rū wa maitω** (brother), **M-wari wa maitω** (sister), **Mū-þūri ; a-** (elder/husband), **Mū-ka / Mū-tūmia ; a-** (**Mū-gūrra** in 11a, woman/wife), **Mū-twe** (**Kī-oṅgω** in E./M., head), **Rī-iþω ; ma-iþω** (eye), **Kū-tū ; ma-tū** (ear), **I-gegω ; ma-** (tooth), **Rū-rīmī ; n-dīmī** (tongue), **Gu-ωkω ; m-ωkω** (arm), **Kū-gūrū ; ma-** (leg), **N-jωgū** (elephant), **M-bωgω** (buffalo), **Mū-rūþi / N-gatia** (lion), **N-gari** (leopard), **N-gūū / N-guō** (hippo), **Hiti** (**M-biti** in E./M., hyena), **N-jωka** (snake), **Kī-ūṅgūyū** (**N-þī** in 11a, fish).
4. **Bibliography for #11 Kikuyu & #11a Meru (Vol. I, p. 788)**:
   - Cites A. W. McGregor (*English-Kikuyu Vocabulary*, 1904; *Grammar of the Kikuyu Language*, 1905), Hildegarde Hinde (*Vocabularies of the Kamba and Kikuyu Languages*, 1904 — Kabete, Jogowini & Mathira dialects), Father A. Hémery (*English-Kikuyu Handbook*, 1902–1903), Père Bernhard (*Grammaire Kikuyu*, 1908), W. S. & K. Routledge (*With a Prehistoric People*, 1910), A. R. Barlow (*Tentative Studies in Kikuyu Grammar and Idiom*, 1914), and MS. vocabularies by C. W. Hobley (Kikuyu, Dhaicω, Embu, Cuka, Mwimbe) and E. B. Horne (Meru, Emberre, Þeraka, Igωji).`,
    examples: [
      { kikuyu: "K. (Kikuyu), N. (Dhaicω), Nd. (Ndia), E. (Embu), C. (Cuka), Mw. (Mwimbe), M. (11a Meru), Emb. (Emberre), Þ. (Þeraka), Ig. (Igωji)", english: "All 10 Mount Kenya & Highland dialect abbreviations in Johnston's Column 11", explanation: "Johnston (1919, Vol. I, pp. 98–112 & 1922, Vol. II, pp. 28–30)" },
      { kikuyu: "N-þē (country), Mū-þēnya (day), Þakame (blood), Ma-iþω (eyes), Mū-þūri (husband/elder), -þatū (3), -þanω (5), -þanþatū (6)", english: "Characteristic Kikuyu dental fricative þ (th) correspondences", explanation: "Johnston (1922, Vol. II, pp. 28–30, 226)" },
      { kikuyu: "Nie, We (Wee), We (Uyu), Iþui (Iþwe), Inyui (Inywe), Aω (Aria) • -akwa, -aku, -ake, -itu, -anyu, -aω", english: "Independent personal and possessive pronouns in #11 Kikuyu", explanation: "Johnston (1919, Vol. I, p. 108 & 1922, Vol. II, pp. 377–441)" }
    ]
  }
];
