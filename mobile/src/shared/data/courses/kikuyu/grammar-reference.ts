// ============================================================
// Kikuyu (Gĩkũyũ) Grammar Reference Guide
// Based 100% on Public Domain Sources:
// 1. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919) "Comparative Study of the Bantu Languages"
// 2. Rev. Fr. A. Hémery, C.S.Sp. (1903) "English-Kikuyu Handbook: A Short Grammar, Vocabulary, and Phrase-Book"
// 3. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 4. Rev. A. W. McGregor (1904) "English-Kikuyu Vocabulary" (SPCK, London)
// 5. W. Scoresby & Katherine Routledge (1910) "With a Prehistoric People: The Akikuyu of British East Africa" (London)
// 6. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Customary Institutions"
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
    title: "Classical Agĩkũyũ Social, Judicial, Seasonal, Clan & Ritual Terminology (McGregor 1904, Routledge 1910 & Hobley 1910, 1922)",
    summary: "W. S. & K. Routledge (1910) and C. W. Hobley (1910, 1922) preserve the complete terminology of the 13 Agĩkũyũ clans (Mĩhĩrĩga), 10 generation ages (Rĩĩka), council system (Kiama), sacred ecology (Mũgumo), and oral literature (Ngano & Guso).",
    content: `In *With a Prehistoric People: The Akikuyu of British East Africa* (1910) and *Bantu Beliefs and Customary Institutions* (1922, Glossary pp. 305–308), W. S. & K. Routledge and C. W. Hobley document the institutional vocabulary of Agĩkũyũ society:
1. **The 13 Clans (*I-ri-ka* / *Mĩhĩrĩga*, Routledge 1910, pp. 20–23)**:
   - **1. A-ché-ra** (Thomson’s gazelle totem), **2. A-ga-chí-ku** (forbidden to work iron or act as circumcisors; zebra totem), **3. A-ga-thi-gí-a** (warthog totem), **4. Ai-cha-ka-mú-yo**, **5. Ai-rí-mu**, **6. A-ki-ú-ru / M'we-sá-ga / M'bú-ru** (forbidden to work iron; males can see and stop rain, possess the evil eye cured with spittle-mud on temple, throat, and stomach, and preserve woodland; wild game totem), **7. Am-bú-i** (fish totem), **8. An-gá-ri / Ai-the-ka-hú-no** (sheep’s stomach totem), **9. An-jí-ru** (elephant & birds totem), **10. An-gó-i**, **11. E-thá-ga**, **12. Ai-ze-ran'-du** (hippo totem), and **13. Ai-zi-e-gé-ni** (impala totem).
2. **The 10 Chronological Ages (*Rĩĩka*), 17 Initiation Years (1891–1907) & Life Stages (Routledge 1910, pp. 8–11, 25, 141, 237–238)**:
   - **10 Ages Since Creation (p. 9)**: **1. Man-jí-ri** (God spoke to the first man **Mam'-ba**, who told his son **N'jí-ri** to dig channels and drain the land) → **2. Man-dó-ti** (evildoers) → **3. Chi-éra** (people multiplied) → **4. Masaí** (red earth became fashionable) → **5. Ma-thá-thi** (Akikúyu came from Akam'ba) → **6. N'dé-mi** ("to cut" forest trees) → **7. I-ré-gi** ("the revolters" against Somalis) → **8. Ma-í-na** → **9. Mwan'gi** → **10. Mu-i-run'-gu**, with the **Ai-twi-ka (Itwika)** ceremony held at the Mathioya River before the sacred river-creature **N'da-ma-thi-a** (pp. 237–238).
   - **17 Annual Circumcision Initiation Years (1891–1907, pp. 10–11)**: *1891 Ngan'do, 1892 Ngi'-ge, 1893 Nyon'go, 1894 Mutung'o, 1895 Thungu'-ya, 1896 Ka-gi'-cha, 1897 Ki-angwa'chi, 1898 Nu'-thi, 1899 Ki-en-je'ku, 1900 Ndi'-mu, 1901 Hit'-ti, 1902 Ka-man'di, 1903 Mo-chi'-ri, 1904 Ki-hur'i-a, 1905 Kan-yo'-to, 1906 Nga'-ra, 1907 Ka-ban'go*.
   - **10 Male & 7 Female Life Stages (pp. 25, 141)**: Male: *Ka'-he → Ki'-he (pl. i'-hee) → Mu'-mo → M'wa-na'-ke → Wa-ka-ny-u-ku → Mun'-du mu-ge'-ma → Ka-ra-bai' → M'zur'-i → M'zur'-i a ki-a-na → M'zur'-i a bou'i*; Female: *Ka-re'-go → Ki-ré-gu → Moi-re'-tu (pl. ai-) → Mu-hi'-ki → Wa-bai / M'wa-na-mú-ke → Mu-ti-mi'-a → I-he'-ti* ("filled with intelligence", p. 139).
3. **Governance (*Mo-ran'-ja, Ki-á-ma, N'já-ma*), Religion (*N'gaí / Mwi-nin-ya-ga*), *Thá-hu* & Oral Literature (Routledge 1910, pp. 109–116, 178–281)**:
   - **Three Ranks**: **Mo-ran'-ja** (or *N'dun'-du* / *Ke-thi-ga*, 1st rank, father of 2nd child), **Ki-á-ma** (council of elders/judges, father of initiated child), **N'já-ma** (co-opted warrior executive council; chief = *Mu-tha-má-ki*, spokesman = *Mo-chí-ri*); **Ki-tha-si** (14-holed curse stone with 7 holes per side held near Tú-su, pp. 273–275).
   - **N'gaí / Mwi-nin-ya-ga** ("Possessor of Whiteness") on **Ki-ri-nya-ga / Ki-re-í-ra** (Mt. Kenya) and **Ny-an-da-rou** (Mt. Kinangop); **Mu-gú-mu**: sacred wild fig tree (sacrificial responses: *"N'ga-na!"* 'Amen' & *"Sa-i! Sa-i!"* 'Hear, hear!', p. 235); **N'gor'o** (living soul/breath) vs. **N'góma** (ancestral spirits in the underworld **Mi-i-ri-ni-ya Mi-kon-go-i**, p. 240); **Mũndũ Mũgo**: diviner using the **m'wá-no** lot-gourd and 5 **m'boo-thu** medicine gourds (*ru-sú-ku, gon'-du, u'-mu, u-then'-gi, í-ra*, p. 253); **Thá-hu**: 29 ritual defilements purged with *"Ta-hí-ka thá-hu!"* ("Vomit the sin!") and *"Ni-da-ni-na thá-hu wa-ku"* ("I have purged your sin", pp. 256–263); **Gĩcandĩ (Ki-shan'-di)**: enigmatic poetic gourd rattle with 47/37 pictographs (pp. 109–112).
4. **Ecological Calendar, 7-Day Sequence, Marriage & Legal Lexicon (McGregor 1904, pp. 26, 36, 44, 66, 114, 142, 154, 170, 188)**:
   - **Three Agricultural Cropping Seasons (p. 154)**: **Mwaka wa Njahi** (*Dolichos lablab* season), **Mwaka wa Mweri** (bulrush millet season), and **Mwaka wa Muheha / Mohea** (sorghum season).
   - **Two Rainy Seasons (pp. 142, 188)**: Greater rainy/cold season = **Kathano** (*Mwaka wa heho*); Lesser rainy season = **Mwaka wa kehu**.
   - **7-Day Relative Time Span (pp. 44, 114, 170)**: *Iyo* (day before yesterday) → *Ira* (yesterday) → *Reu / Omothi* (today) → *Rochio* (tomorrow) → *Oke* (day after tomorrow) → **Matukwatatu** (two days after tomorrow) → **Matukwana** (three days after tomorrow); Sunrise/East = **Itherero**, Sunset/West = **Naruguru / Gothoa** (pp. 54, 186).
   - **Marriage, Inheritance & Law**: **Rorachio** (pl. *Marorachio*, bridewealth to bride's father), **Wathiomo** (ritual goat gift), **Kohikia / Kogurana** (to marry, of a man; *Mugurani* bridegroom) vs. **Kohika / Koguruo** (to marry, of a woman; *Muhiki / Muguruo* bride), **Magambo / Mugambo** (customary restitution fine for grave offence; general fine = **Irehi**, pl. *Ma-*), **Muramati** (heir; *Oramati* inheritance/birthright), **Mungu** (pl. *Miungu*, underground war refuge cavern, p. 146), **Kithigethi** (pl. *I-*, firesticks; *Kothigetha mwaki* 'twirl fire with sticks', p. 66).`,
    examples: [
      { kikuyu: "Kiama • Chira • Muma • Gĩthathi (Kĩthathi)", english: "Council of elders • Legal case • Solemn oath • Sacred 7-holed oath-stone", explanation: "Classical Agĩkũyũ judicial terminology (Routledge 1910, pp. 195–220 & Hobley 1922)" },
      { kikuyu: "Ndemi • Iregi • Maina • Mwangi • Itwika", english: "Historical ruling generations • Generational transfer ceremony", explanation: "Generational governance lexicon (Routledge 1910, p. 9 & Hobley 1922)" },
      { kikuyu: "Gĩcandĩ (Kishandi) • Rũgano (pl. Ngano) • Guso!", english: "Poetic gourd rattle • Folktale • Riddle challenge ('Guess!')", explanation: "Agĩkũyũ oral literature & music (Routledge 1910, pp. 109, 285)" }
    ]
  },
  {
    "id": "kikuyu-mcgregor-1905-barlow-1914-dahl",
    "title": "Dahl's Law (K→G Dissimilation), Hinde (1904) Aspect Suffixes & Locative Classes (McGregor 1905 & Barlow 1914)",
    "summary": "Rev. A. W. McGregor (1905), A. R. Barlow (1914), and H. Hinde (1904) document Gĩkũyũ velar dissimilation (k → g before voiceless consonants), aspect suffixes (-ĩte perfect, -ire past), and spatial demonstratives.",
    "content": "1. **Dahl's Law in Gĩkũyũ Prefixes (McGregor 1905 & Barlow 1914)**:
   - The prefixes *ka-* (Class 12), *kĩ-* (Class 7), and *kũ-* (Class 15/17) voice to **ga-**, **gĩ-**, and **gũ-** when the next syllable begins with a voiceless consonant (*k, t, th, c*): *gĩ-thaka* (bushland), *gũ-tindĩka* (to push), *gũ-tinia* (to cut), *ga-kĩrĩma* (small hill), vs. *kĩ-rĩma* (mountain), *kũ-menya* (to know), *kũ-nyua* (to drink).
2. **Completive vs. Preterite Suffixes (Hinde 1904, pp. xiii–xiv)**:
   - Present Perfect uses **-ĩte / -ete** (*nĩ-ndĩ-tind-ĩte* 'I have conquered/stayed'), whereas Past Perfect/Preterite uses **-ire / -ere** (*nĩ-ndĩ-tind-ire*).Locatives distinguish *haha/gũkũ* (here) from *harĩa/kũrĩa* (yonder).",
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
