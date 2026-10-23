// ============================================================
// Kikuyu (Gĩkũyũ) Grammar Reference Guide
// Based 100% on Public Domain Sources:
// 1. Hildegarde Hinde (1904) "Vocabularies of the Kamba and Kikuyu Languages of East Africa" (Cambridge Univ. Press)
// 2. C. W. Hobley (1922) "Bantu Beliefs and Magic" (H. F. & G. Witherby, London)
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
    title: "Phonology, Interchangeable Consonants & Penultimate Stress (Hinde 1904)",
    summary: "Hildegarde Hinde (1904) documents Kikuyu's vowel qualities, strong trilled /rr/, consonant alternations (B/V, G/K, R/L), and penultimate word stress.",
    content: `In the Preface and Alphabet sections of *Vocabularies of the Kamba and Kikuyu Languages of East Africa* (1904, pp. v–x), Hildegarde Hinde records the foundational phonological traits of Gĩkũyũ:
1. **Penultimate Stress & Trilled R**:
   - Word stress almost invariably falls on the **penultimate (second-to-last) syllable**.
   - In contrast to Kĩkamba (which drops *r*), Gĩkũyũ preserves a strongly trilled **r / rr** and frequent aspiration.
2. **Consonant Alternations**:
   - **B and V**, **G and K**, **Th and S/Z**, and **R and L** are phonetically interchangeable across regional varieties (such as Jogowini, southern Kenya Province, and Kiambu/Nairobi).
   - Prenasalized initial consonants (**mb-, nd-, ng-, nj-**) are pronounced as single unitary nasal-onset sounds.
3. **Infinitive PrefixAssimilation (Dahl's Law)**:
   - While the standard infinitive prefix is **ku-** (becoming **kw-** before vowels *a, e, i*), it voices to **gu- / gw-** before stems beginning with a voiceless consonant (*k, t, th, c*): e.g., *gu-tinda* (to conquer/spend time), *gw-ĩciria* (to think).`,
    examples: [
      { kikuyu: "mwohoro — mwohoro mwēga", english: "greeting (news) — good news / peace", explanation: "Standard Jogowini Kikuyu salutation recorded by Hinde (1904)" },
      { kikuyu: "ku-tinda / gu-tinda", english: "to conquer / to remain", explanation: "Infinitive prefix ku-/gu- alternation" },
      { kikuyu: "Mukikuyu (sg.) → Akikuyu (pl.)", english: "Kikuyu person → Kikuyu people", explanation: "Native endonym vs. Swahili Mkikuyu / Wakikuyu (Hinde 1904, p. vi)" }
    ]
  },
  {
    id: "kikuyu-six-noun-classes",
    title: "The Six Noun Plural Classes & Concordial Agreement (Hinde 1904)",
    summary: "Hinde (1904, pp. vi–vii) codifies the six primary noun pluralization rules of Gĩkũyũ and demonstrates prefixal concord across adjectives, possessives, and numerals.",
    content: `As Hildegarde Hinde (1904, pp. vi–vii) explains, Gĩkũyũ lacks grammatical sex gender or definite/indefinite articles; instead, all grammatical inflection takes place at the **beginning of the word** according to six core noun-class patterns:
1. **Class I — Animate *Mu-* → *A-***:
   - Nouns denoting human beings beginning with *mu-* form their plural by changing *mu-* to *a-*:
   - *muka* (woman/wife) → **aka** (women/wives)
   - *mundu* (person/man) → **andu** (people)
   - *mwanake* (warrior/youth) → **anake** (warriors)
   - *mutumia* (elder) → **atumia** (elders)
2. **Class II — Inanimate *Mu-* → *Mi-***:
   - Non-human nouns beginning with *mu-* change *mu-* to *mi-* in the plural:
   - *muti* (tree) → **miti** (trees)
   - *mwaki* (fire) → **miaki** (fires)
   - *mugunda* (cultivated farm) → **migunda** (farms)
3. **Class III — *I-* / *Ri-* → *Ma-***:
   - Nouns beginning with *i-* (or *ri-*) form their plural in *ma-*:
   - *ihiga* (stone) → **mahiga** (stones)
   - *itumbi* (egg) → **matumbi** (eggs)
   - *ithangu* (leaf) → **mathangu** (leaves)
   - *riitho* (eye) → **maitho** (eyes)
4. **Class IV — *Ki-* / *Gi-* → *I-* / *Ci- (Shi-)***:
   - Artifacts, tools, and body parts beginning with *ki-* change *ki-* to *i-* or *shi-* (*ci-*):
   - *kiratu* (sandal/shoe) → **iratu** (sandals)
   - *kiara* (finger) → **shiara / ciara** (fingers)
   - *kirima* (mountain/hill) → **irima** (mountains)
5. **Class V — Invariable *N-* Class**:
   - Nouns beginning with *n-* (*ny-, nd-, ng-, mb-, nj-*) remain identical in singular and plural, distinguished by concord on modifiers:
   - *nyumba* (house) → **nyumba** (houses)
   - *ngombe* (cow) → **ngombe** (cattle)
   - *mbura* (rain), *njira* (road/path).
6. **Class VI — Diminutive *Ka-* → *Twa-* / *Shiana***:
   - Diminutive and child nouns beginning with *ka-* form their plural in *twa-* (*tũ-*):
   - *kana* (child) → **twana** or **shiana / ciana** (children).`,
    examples: [
      { kikuyu: "mundu nimuwega → andu anega", english: "a good person → good people", explanation: "Class I animate singular mu- vs. plural a- concord (Hinde 1904, p. 66)" },
      { kikuyu: "mti unwega → miti moni mijega", english: "a good tree → good trees", explanation: "Class II inanimate mu-/mi- concord (Hinde 1904, p. 66)" },
      { kikuyu: "kana kani kiega → twana tuni twega", english: "a good child → good children", explanation: "Class VI diminutive ka-/twa- concord (Hinde 1904, p. 66)" },
      { kikuyu: "ruhiu rwega → huishiu enjega", english: "a good knife/sword → good knives", explanation: "Singular ru- vs. plural n-/nj- concord (Hinde 1904, p. 66)" }
    ]
  },
  {
    id: "kikuyu-affirmative-verb-tenses",
    title: "Affirmative Verb Conjugation: Present, Imperfect, Perfect, Past & Future (Hinde 1904)",
    summary: "Complete affirmative conjugation paradigms of gu-tinda ('to conquer/prevail') across five indicative tenses, imperative, and subjunctive from Hinde (1904, pp. xi–xv).",
    content: `Hildegarde Hinde (1904, pp. xi–xv) sets out the full affirmative conjugation of the regular verb **ku-tinda / gu-tinda** ("to conquer"):
1. **Present Tense (Prefix *-a-*)**:
   - 1s **n-a-tinda** (I conquer), 2s **w-a-tinda** (thou conquerest), 3s **a-tinda** (he/she conquers), 1p **tw-a-tinda** (we conquer), 2p **mw-a-tinda** (you conquer), 3p **m-a-tinda** (they conquer).
2. **Present Imperfect / Progressive (Prefix *-ki-*)**:
   - 1s **ni-ki-tinda** (I am conquering), 2s **wa-ki-tinda / u-ki-tinda**, 3s **a-ki-tinda**, 1p **tu-ki-tinda**, 2p **mu-ki-tinda**, 3p **me-ki-tinda / ma-ki-tinda**.
3. **Present Perfect (Suffix *-eti* / *-iti*)**:
   - Formed by changing final *-a* to **-eti** or **-iti**:
   - 1s **ni-tind-eti / ni-tind-iti** (I have conquered), 2s **u-tind-iti**, 3s **a-tind-iti**, 1p **tu-tind-iti**, 2p **mu-tind-iti**, 3p **ma-tind-iti**.
4. **Past Perfect (Suffix *-eri* / *-ire*)**:
   - Formed in Kikuyu by changing final *-a* to **-eri** (*-ire*):
   - 1s **ni-tind-eri** (I conquered), 2s **u-tind-eri**, 3s **a-tind-eri**, 1p **tu-tind-eri**, 2p **mu-tind-eri**, 3p **ma-tind-eri**.
5. **Future Tense (Prefix *-ka-* / *-ga-*)**:
   - 1s **nin-ka-tinda / ni-ga-tinda** (I shall conquer), 2s **u-ka-tinda**, 3s **a-ka-tinda**, 1p **tu-ka-tinda**, 2p **mu-ka-tinda**, 3p **ma-ka-tinda**.
   - Colloquial conversational future: *ningathi* (I will go), *ningashōka* (I will return).
6. **Imperative & Subjunctive**:
   - **Imperative**: Singular **tinda!** (conquer thou!); Plural **tindani! / tindai!** (conquer ye!).
   - **Subjunctive (final *-a* → *-e*)**: **ni-tinde** (that I may conquer), **u-tinde**, **a-tinde**, **tu-tinde**, **mu-tinde**, **ma-tinde**.`,
    examples: [
      { kikuyu: "n-a-tinda / ni-ki-tinda / ni-tind-iti", english: "I conquer / I am conquering / I have conquered", explanation: "Present (-a-), Progressive (-ki-), and Perfect (-iti) contrast (Hinde 1904)" },
      { kikuyu: "ni-tind-eri vs. nin-ka-tinda", english: "I conquered vs. I shall conquer", explanation: "Past suffix -eri vs. Future prefix -ka-/-ga-" },
      { kikuyu: "ningathi / ningashōka", english: "I will go / I will return", explanation: "Everyday future phrases (Hinde 1904, p. 64)" }
    ]
  },
  {
    id: "kikuyu-negative-conjugation-locatives",
    title: "Negative Verb Paradigms (-di- / -ndi-) & Locative Suffix (-ini / -eni) (Hinde 1904)",
    summary: "Kikuyu forms negative tenses with the prefix -di-/-ndi- (and negative copula ti-) and marks interior/spatial location with the suffix -ini / -eni.",
    content: `Hinde (1904, pp. xv–xviii, 64–67) details how negation and spatial location operate in Gĩkũyũ:
1. **Negative Present (Prefix *-di-* / *-ndi-*)**:
   - 1s **n-di-tinda** (I do not conquer), 2s **u-di-tinda / u-ndi-tinda**, 3s **a-di-tinda**, 1p **tu-di-tinda**, 2p **mu-di-tinda**, 3p **ma-di-tinda**.
   - Common conversational negatives: **ndiui / ndikumenya** (I do not know), **ndikwenda** (I do not want), **ndionna** (I do not see), **ndingihotta kuthi** (I cannot go).
2. **Negative Past Perfect (Prefix *-di-na-*)**:
   - 1s **n-di-na-tinda** (I did not conquer), 2s **u-di-na-tinda**, 3s **a-di-na-tinda**, 1p **tu-di-na-tinda**, 2p **mu-di-na-tinda**, 3p **ma-di-na-tinda**.
3. **Negative Future (Prefix *-di-ka-* / *-di-ga-*)**:
   - 1s **n-di-ka-tinda** (I shall not conquer), **ndikathie** (I will not go).
4. **Negative Imperative & Subjunctive**:
   - Negative Imperative: **di-tinda! / ndi-tinda!** (do not conquer!), **udikuka!** (do not come!).
   - Negative Subjunctive: **n-di-tinde** (that I may not conquer).
5. **Negative Copula (*ti-*)**:
   - **tiwe** (not you), **tinye** (not he), **tiithui** (not we).
6. **Locative Suffix (*-ini* / *-eni*)**:
   - Added to the end of a noun to express "in, at, on, inside":
   - *mutwe* (head) → **mtueni** (in the head)
   - *nda* (stomach) → **ndaeni** (in the stomach)
   - *miti* (trees) → **mitini** (in the trees)
   - *nyumba* (house) → **nyumbani** (in the house).`,
    examples: [
      { kikuyu: "ndiui / ndikumenya", english: "I do not know", explanation: "Negative 1st person singular (Hinde 1904, p. 64)" },
      { kikuyu: "ndingihotta kuthi", english: "I cannot go", explanation: "Negative potential construction (Hinde 1904, p. 64)" },
      { kikuyu: "mtueni / ndaeni / mitini / nyumbani", english: "in the head / in the stomach / in the trees / in the house", explanation: "Locative suffix -ini/-eni (Hinde 1904, p. 67)" }
    ]
  },
  {
    id: "kikuyu-numerals-possessives",
    title: "Decimal Numerals, Adverbial Multipliers (Ka-) & Possessive Concords (Hinde 1904)",
    summary: "Gĩkũyũ counts in tens (ikumi, mirongo iri, igana), prefixes ka-/kĩ- for 'times' (kirrimue, kēēri, kathatu), and inflects possessives to match the possessed noun.",
    content: `From Hildegarde Hinde's Numeral and Phrase tables (1904, pp. 62–66):
1. **Cardinal Numbers (1–100)**:
   - **1–10**: *imue / ĩmwe* (1), *igiri / igĩrĩ* (2), *ithatu / ithatũ* (3), *inya* (4), *ithanu / ithano* (5), *thanthatu* (6), *muguanja* (7), *inyanya* (8), *ikenda* (9), *ikumi* (10).
   - **11–90**: *ikumi na imwe* (11), *mirongoiri* (20), *mirongoiri na imue* (21), *mirongo itatu* (30), *mirongo inya* (40), *mirongo ithanu* (50), *mirongo ithanthatu* (60), *mirongo nguanja* (70), *mirongo inyanya* (80), *mirongo kenda* (90).
   - **100**: *igana* (100).
2. **Ordinals, Multipliers & Fractions**:
   - **First / Last**: *kuambirrira / ikinya* (first), *kurrigillia* (last).
   - **Adverbial Multipliers**: *kirrimue* (once), *kēēri* (twice), *kathatu* (thrice), *kanna* (four times), *kathanthatu* (five/six times).
   - **Half**: *kishuinji / kechuje / etigia*.
3. **Possessive Concords**:
   - Possessive stems (*-akwa / -akua* 'my', *-aku* 'your', *-ake* 'his/her', *-iitu* 'our') take the prefix of the possessed noun:
   - *mwana wakua* (my child), *siana siaku* (your children), *ngombe siake* (his cows), *uwoko wake* (his hand), *mwitzi wiitu* (our village), *baba wiitu* (our father), *nyina wiitu* (our mother).`,
    examples: [
      { kikuyu: "imue, igiri, ithatu, inya, ithanu, thanthatu, muguanja, inyanya, ikenda, ikumi", english: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10", explanation: "Cardinal numerals 1–10 (Hinde 1904, p. 62)" },
      { kikuyu: "kirrimue, kēēri, kathatu, kanna", english: "once, twice, thrice, four times", explanation: "Adverbial frequency prefixes (Hinde 1904, p. 63)" },
      { kikuyu: "mwana wakua / siana siaku / mwitzi wiitu", english: "my child / your children / our village", explanation: "Noun-class concord on possessives (Hinde 1904, p. 65)" }
    ]
  },
  {
    id: "kikuyu-cultural-lexicon-hobley",
    title: "Classical Agĩkũyũ Social, Judicial & Ritual Terminology (Hobley 1922)",
    summary: "C. W. Hobley's 1922 monograph and glossary preserve key terminology of the Agĩkũyũ council system (Kiama), age-sets (Riika, Itwika), lineage (Muhiriga, Mbari), and sacred ecology (Mugumo).",
    content: `In *Bantu Beliefs and Magic* (1922, Glossary pp. 305–308), C. W. Hobley documents the institutional vocabulary of pre-colonial Agĩkũyũ society:
1. **Kinship, Clan & Homestead Architecture**:
   - **Muhiriga**: Primary clan; **Mbari**: Sub-clan or ridge patrilineage; **Ahoi** (sing. *Muhoi*): Tenants-at-will cultivating land on another lineage's ridge.
   - **Thingira**: The husband's reception hut; **Nyumba**: The wife's dwelling house and matrilineal hearth; **Mwaitu**: Respectful address meaning "our mother".
2. **Life Stages, Age-Sets & The *Itwika* Cycle**:
   - **Kihe** (pl. *Ihe*): Uninitiated boy; **Muiritu** (pl. *Airitu*): Initiated maiden; **Mwanake** (pl. *Anake*): Warrior grade; **Mutumia** (pl. *Atumia*): Senior elder of the council.
   - **Rika (Riika)**: Circumcision age-set cohort; **Itwika**: The grand generational handing-over ceremony held every 30–35 years between the alternating **Maina** and **Mwangi** ruling generations.
3. **Governance, Law & Sacred Ecology**:
   - **Kiama**: Council of elders; **Chira**: Legal deliberation or case; **Muma**: Solemn peace or judicial oath; **Githathi** (pl. *Ithathi*): Sacred perforated oath-stone.
   - **Ngai**: The Supreme Creator; **Mugumo**: Sacred wild fig tree (*Ficus natalensis*) under which community sacrifices are offered; **Ngoma**: Ancestral spirits; **Mundu Mugo**: Traditional healer and diviner; **Murathi**: Seer/prophet; **Utheru**: Moral and ceremonial purity.`,
    examples: [
      { kikuyu: "Kiama / Chira / Muma / Githathi", english: "Council of elders / legal case / solemn oath / sacred oath-stone", explanation: "Classical Agĩkũyũ judicial terminology (Hobley 1922, pp. 305–306)" },
      { kikuyu: "Riika • Maina & Mwangi • Itwika", english: "Age-set • Alternating ruling generations • Generational transfer ceremony", explanation: "Generational governance lexicon (Hobley 1922, pp. 306–307)" },
      { kikuyu: "Muhiriga & Mbari • Thingira & Nyumba", english: "Clan & ridge lineage • Man's hut & wife's house", explanation: "Social and homestead organization (Hobley 1922, pp. 306–308)" }
    ]
  }
];
