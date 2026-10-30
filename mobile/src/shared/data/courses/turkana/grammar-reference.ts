// ============================================================
// Turkana (Ng'aturkana) Grammar Reference Guide
// Based 100% on "Turkana Grammatical Notes and Vocabulary"
// by Juxon Barton (Journal of the Royal Anthropological Institute, Vol. 51, 1921 — Public Domain)
// ============================================================

export interface GrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { turkana: string; english: string; explanation?: string }[];
}

export const TURKANA_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: "turkana-phonology-dialects",
    title: "Phonology, Consonants & Pastoral-Fishing Sections (Barton 1921)",
    summary: "Barton (1921) documents Turkana's guttural stops, interdental lisp (s ~ th), glottal clipping, and three socio-ecological dialect sections.",
    content: `In *Turkana Grammatical Notes and Vocabulary* (1921), Juxon Barton outlines the phonetic and dialectal character of Ng'aturkana:
1. **Consonant Interchange & Phonetics**:
   - **b and p** are frequently interchangeable in speech.
   - **c** represents the palato-alveolar affricate *ch* (as in English "church").
   - **g** is always hard; **k** and **g** vary with speaker age and voice timbre, and initial *k* often approaches the velar nasal **ng'** (as in "sing").
   - **ny** frequently appears before *e* and *i*, though slurred in rapid speech.
   - **s ~ th**: Practically every *s* is pronounced with a characteristic interdental lisp (*th*).
   - **Glottal Stop**: Turkana speakers "clip" final syllables with a distinct glottal stop, and words abound in onomatopoeic "sound pictures" (especially for birds and animal calls).
2. **Three Socio-Ecological Dialect Sections**:
   - Barton identifies three subtly differentiated speech varieties corresponding to livelihood: the **Pastoral**, **Agricultural**, and **Fishing** (Lake Rudolf/Turkana shore) sections.`,
    examples: [
      { turkana: "ededen kere", english: "very fierce", explanation: "Adverbial intensifier kere (= Swahili sana, Suk nyaman)" },
      { turkana: "kera kere", english: "understand / hear thoroughly", explanation: "Imperative/perfect stem with intensifier kere" },
      { turkana: "lodialo-ayon / lodialo-eth", english: "I say, you (sg. / pl.)", explanation: "Direct vocative address among men (cf. Suk werno / wer-chara)" }
    ]
  },
  {
    id: "turkana-gender-number-article",
    title: "Grammatical Articles, Gender Prefixation & Plural Suffixes (Barton 1921)",
    summary: "Every Turkana noun incorporates a prefixal article (singular e'-, a'-, i'-; plural ng'-, ny'-) while biological sex in animals is marked by e'manik (male) and a'bero (female).",
    content: `Barton (1921) details how Turkana nouns encode article, gender, and number:
1. **Prefixal Articles**:
   - The article forms an integral part of the noun and is slurred in rapid speech:
   - **Singular**: **e'-** (masculine), **a'-** (feminine), or **i'-** (neuter/diminutive).
   - **Plural**: **ng'-** (or **ny'-**), e.g., *ng'atuk* (cattle), *ng'itunga* (people), *ng'idwi* (children).
2. **Biological Sex Marking**:
   - In wildlife and livestock, sex is denoted by compounding **e'manik** (male/buck, pl. *ng'emaniko*) or **a'bero** (female/doe, pl. *ng'abero*):
   - *e'koloba-e'manik* (buck impala) vs. *e'koloba-a'bero* (doe impala).
   - For human beings, *e'manik* is never used; instead **e'kili** (man, pl. *ng'iliok*) and **a'bero** (woman/wife, pl. *ng'abero*) are used.
3. **Plural Suffixation**:
   - Nouns take diverse plural suffixes including **-a, -ya, -o, -yo, -e, -ae, -ai, -k, -t, -tha, -in, -syo, -is** (e.g., *akan* 'arm/hand' → *ng'akanin*; *akok* 'abdomen' → *akokis*; *a'kwara* 'spear' → *ng'akwarath*).`,
    examples: [
      { turkana: "e'kili (pl. ng'iliok) / a'bero (pl. ng'abero)", english: "man (pl. men) / woman (pl. women)", explanation: "Human gender nouns with singular e'-/a'- and plural ng'-" },
      { turkana: "e'koloba-e'manik / e'koloba-a'bero", english: "buck impala / doe impala", explanation: "Compound sex marking in wildlife (Barton 1921)" },
      { turkana: "akan (pl. ng'akanin) / a'kwara (pl. ng'akwarath)", english: "arm, hand / spear", explanation: "Plural suffixation in -in and -th with plural article ng'-" }
    ]
  },
  {
    id: "turkana-cases-vocative-genitive",
    title: "Vocative Affixes (-ne / -no) & Four Genitive Constructions (Barton 1921)",
    summary: "Turkana marks direct vocative address with -ne (singular) and -no (plural) and expresses possession through four distinct genitive strategies.",
    content: `While Turkana lacks morphological case declensions for subject and object, Barton (1921) documents explicit **Vocative** and **Genitive** constructions:
1. **Vocative Case Suffixes**:
   - **-ne** (singular) and **-no** (plural) are suffixed directly to the noun:
   - *e'kili-ne!* (O man!) → *ng'ilioko-no!* (O men!)
   - *a'bero-ne!* (O woman!) → *ng'abero-no!* (O women!)
2. **Four Ways to Express the Genitive ("of")**:
   - **(1) Relative/Genitive Pronoun (*ngolo* sg. / *ngulu* pl.)**: *e'tunganan ngolo Lorogumo* (a man of Lorogumo); *ng'itunga ngulu Lorogumo* (the people of Lorogumo).
   - **(2) Preposition *ken***: *baba ken Loburiomoi* (the father of Loburiomoi).
   - **(3) Preposition *a***: *e'sikiriya a toto ken Loburiomoi* (the donkey of the mother of Loburiomoi).
   - **(4) Direct Juxtaposition (most common)**: The possessor immediately follows the possessed noun, e.g., *ng'atuk Loburiomoi* (the cattle of Loburiomoi).`,
    examples: [
      { turkana: "e'kili-ne! / ng'ilioko-no!", english: "O man! / O men!", explanation: "Singular -ne and plural -no vocative suffixes" },
      { turkana: "e'tunganan ngolo Lorogumo", english: "a man of Lorogumo", explanation: "Singular genitive linker ngolo (plural ngulu)" },
      { turkana: "ng'atuk Loburiomoi", english: "the cattle of Loburiomoi", explanation: "Genitive by direct post-nominal juxtaposition" }
    ]
  },
  {
    id: "turkana-pronouns-system",
    title: "Personal, Possessive, Demonstrative, Reflexive, Relative & Interrogative Pronouns (Barton 1921)",
    summary: "Complete 7-class pronominal system recorded by Barton (1921), including singular/plural possessives and 3-tier spatial demonstratives.",
    content: `Barton (1921) classifies Turkana pronouns into seven paradigms:
1. **Personal Pronouns**:
   - **ayon** (I), **ion** (thou/you sg.), **ngeth** (he/she/it), **thowa** (we), **eth** (ye/you pl.), **keth** (they).
2. **Possessive Pronouns (Singular | Plural possessed item)**:
   - My: **akan | ngulu-kan** (*a'kwara-kan*, my spear).
   - Thy: **ekon | ngulu-kon**.
   - His/Her: **ekin | ngulu-kin**.
   - Ours: **ekothi | ngulu-kothi** (*ng'akwarath ngulu-kothi*, our spears).
   - Yours (pl.): **ekuth | ngulu-kuth**.
   - Theirs: **ekech | ngulu-kech**.
3. **Three-Tier Spatial Demonstratives (Singular | Plural)**:
   - **This (proximal)**: *-en, -lo, ngol | -elu, -ngul* (*a'kileng-en*, this knife).
   - **That (near)**: *-eya | -ekwa* (*ng'akilengya-kwa*, those knives; *lowai-ye*, that near place).
   - **That (remote yonder)**: *-yaga | -kwagwa*.
4. **Reflexive & Intensive Pronouns**:
   - "Myself / ourselves": **ayon-elopi, ion-elopi, ngeth-elopi | thowa-ngilipek, eth-ngilipek, keth-ngilipek**.
   - "By myself / alone": **ayon-bon, ion-bon, ngeth-bon**.
5. **Relative & Indefinite Pronouns**:
   - Relative "who": **una** (sg.), **ulu** (pl.) — *e'tunganan una ejok* (the man who is good); negative: *nye e'tunganan una nye ejok*.
   - Indefinite: **echi** (another/different), **dan** (each/every), **da dan** (all), **da dan mwari** (both).
6. **Interrogative Pronouns**:
   - **ngai?** (who?), **a-ngai?** (whose?), **nyo?** (what?), **ali? / aiū?** (which?), **eko-nyai?** (of what sort?), **ngayai?** (how many?).`,
    examples: [
      { turkana: "a'kwara-kan / ng'akwarath ngulu-kothi", english: "my spear / our spears", explanation: "Singular vs. plural possessive agreement" },
      { turkana: "a'kileng-en / ng'akilengya-kwa", english: "this knife / those (near) knives", explanation: "Proximal -en vs. near-distal -ekwa demonstrative suffixes" },
      { turkana: "e'tunganan una ejok", english: "the man who is good", explanation: "Singular relative pronoun una (plural ulu)" },
      { turkana: "esagin-nyo? / nyo-lo?", english: "what do you want? / what is this?", explanation: "Interrogative pronoun nyo (what?)" }
    ]
  },
  {
    id: "turkana-regular-verbs",
    title: "Regular Verb Conjugation: Active, Conditional, Infinitive & Imperative (Barton 1921)",
    summary: "Turkana verbs mark person via suffixed pronouns, form the infinitive in aki-...-i, negate with prefix nye-, and form conditionals with ani-.",
    content: `Barton (1921) illustrates regular active conjugation using the verb root **-rar-** ("to hear"):
1. **Present Indicative ("I hear")**:
   - 1s **erar-ayon**, 2s **erar-ion**, 3s **erari-ngeth**, 1p **kerari-thowa**, 2p **erar-eth**, 3p **erariti-keth**.
   - **Negative**: Prefix **nye-** (with vowel elision) → **ny-erar-ayon** (I do not hear).
2. **Future Expression**:
   - Expressed by combining the Present tense with a future time adverb such as **mui** (tomorrow): *alothi mui* (I will go tomorrow).
3. **Present Perfect ("I have heard")**:
   - 1s **ayra-ayon**, 2s **era-ion**, 3s **era-ngeth**, 1p **kera-thowa**, 2p **era-eth**, 3p **era-keth**.
4. **Imperfect ("I was hearing")**:
   - 1s **erarit-ayon**, 2s **erarit-ion**, 3s **erarit-ngeth**, 1p **kerarit-thowa**, 2p **erarit-eth**, 3p **erarit-keth**.
5. **Conditional Mood ("If I hear / If I had heard")**:
   - Formed by prefixing **ani-**: Present *ani-erar-ayon* (negative *ani-ny-erar-ayon*); Past *ani-kaira-ayon*, *ani-kera-ion*, etc.
6. **Infinitive & Imperative**:
   - **Infinitive**: Prefix **aki-** and suffix **-i**: *aki-tar-i* (to dig), *aki-gum-i* (to shoot), *aki-latar-i* (to wash), *aki-lar-i* (to walk).
   - **Imperative**: Singular uses the bare root; plural suffixes **-to**: *tolot!* (go!) → *tolot-to!* (go ye!); *kibirr!* (run!) → *kibirr-to!*; *ngolik!* (look out!) → *ngolik-to!*`,
    examples: [
      { turkana: "erar-ayon / ny-erar-ayon", english: "I hear / I do not hear", explanation: "1st person singular present affirmative and nye- negative" },
      { turkana: "aki-tar-i / aki-gum-i / aki-lar-i", english: "to dig / to shoot / to walk", explanation: "Circumfixal infinitive formation aki-...-i" },
      { turkana: "tolot! / tolot-to! • kibirr! / kibirr-to!", english: "go! (sg./pl.) • run! (sg./pl.)", explanation: "Singular bare imperative vs. plural -to suffix" }
    ]
  },
  {
    id: "turkana-passive-quasipassive-auxiliary",
    title: "Passive Voice (-itai-/-itita-), Quasi-Passive Adjectival Verbs & Auxiliaries (Barton 1921)",
    summary: "Passive voice is marked by the infixes -itai- (present) and -itita- (past), while adjectives become stative verbs by suffixing -i.",
    content: `Barton (1921) documents four specialized verbal constructions in Ng'aturkana:
1. **Passive Voice (-itai- / -itita-)**:
   - **Present Passive ("I am struck")**: *karam-itai-ayon, karam-itai-ion, karam-itai-ngeth, karam-itai-thowa, karam-itai-eth, karam-itai-keth* (Negative: *nye-karam-itai-ayon*).
   - **Past Passive ("I have been struck")**: *karam-itita-ayon, karam-itita-ion*, etc.
   - **Conditional Passive**: *ani-karam-itai-ayon* (If I am struck).
2. **Quasi-Passive (Inchoative) Verbs from Adjectives**:
   - Formed from adjectives by suffixing **-i** before the personal pronoun (e.g., from *elangir*, broad/big):
   - *elangir-ayon* (I become big), *elangir-i-ngeth* (he becomes big), *elangir-i-thowa* (we become big).
3. **Reduplicative Verbs (Frequentative/Intensive)**:
   - Repeating the verb stem indicates repeated or finer action:
   - *adungi* (I cut) → **adungi-dungi** (I cut into small pieces).
   - *abuki* (I shake) → **abuki-buki** (I churn).
   - **emudud-mududgiana** (I blink repeatedly).
4. **Modal Auxiliaries (anangi, atiri, mati)**:
   - **anangi** = general ability ("to be able"): *anangi akilari* (I am able to walk), *anangi akimugi* (I am able to eat).
   - **atiri** = physical strength/capability: *atiri akiari ngeth* (I have the strength to spear him), *atiri akidakari ngeth* (I can wrestle/throw him).
   - **mati** = obligation ("must"): *mati alothi mui* (I must go tomorrow).`,
    examples: [
      { turkana: "karam-itai-ayon / karam-itita-ayon", english: "I am struck / I have been struck", explanation: "Present passive infix -itai- vs. past passive infix -itita-" },
      { turkana: "adungi → adungi-dungi", english: "I cut → I cut into small pieces", explanation: "Reduplicative intensive verb stem" },
      { turkana: "anangi akilari vs. atiri akidakari ngeth", english: "I am able to walk vs. I am strong enough to throw him", explanation: "Contrast between general ability (anangi) and physical strength (atiri)" }
    ]
  },
  {
    id: "turkana-irregular-verbs",
    title: "High-Frequency Irregular Verbs: To Be, To Be Present, To See, To Go & To Come (Barton 1921)",
    summary: "Core irregular paradigms in Ng'aturkana exhibit suppletive stems between singular and plural (such as abuni 'I come' vs. ki-poti-thowa 'we come').",
    content: `Barton (1921) records full paradigms for the five principal irregular verbs:
1. **TO BE (Nominal Predication & Past *kerai-*)**:
   - Present: Expressed by juxtaposing noun + pronoun: *e'tunganan-ayon* ("a man I" = I am a man), pl. *ng'itunga-thowa* (we are people); negative *ny-etunganan-ayon*.
   - Past ("I was"): **kerai-ayon, kerai-ion, kerai-ngeth, kerai-thowa, kerai-eth, kerai-keth**.
2. **TO BE PRESENT (*eyey-* / *kaiyey-*)**:
   - Present: 1s *eyey-ayon*, 3s *eyeyi-ngeth*, 1p *keya-thowa* (neg. *ny-eyey-ayon*).
   - Perfect: 1s *kaiyey-ayon* (neg. *p-aiyey-ayon*, preserving the rare archaic negative prefix *p-*).
3. **TO SEE (*ainua-* / *t-ainu*)**:
   - Present: *ainua-ayon* (or *ain-ayon*); Past: *ainun-it-ayon*; Imperative: **t-ainu!** (sg.), **t-ainu-to!** (pl.).
4. **TO GO (*alothi-* / *kelot-* / *tolot*)**:
   - Present: 1s *alothi-ayon*, 1p *ki-lothi-thowa*; Past: *kelot-ayon*; Imperative: **tolot!** (sg.), **tolot-to!** (pl.).
5. **TO COME (Suppletive *abuni-* sg. vs. *ki-poti-* pl.)**:
   - Present: 1s *abuni-ayon*, 2s *abuni-ion*, 3s *abuni-ngeth*, 1p **ki-poti-thowa**, 2p **ki-poti-eth**, 3p **ki-poti-keth**.
   - Past: 1s *k-abunit-ayon*, 1p *ki-ki-bunit-thowa*.
   - Imperative: **bwa!** (come thou!) vs. **pot-to!** (come ye!).`,
    examples: [
      { turkana: "abuni-ayon / ki-poti-thowa", english: "I come / we come", explanation: "Suppletive singular root -buni vs. plural root -poti" },
      { turkana: "bwa! / pot-to!", english: "Come! (sg.) / Come ye! (pl.)", explanation: "Irregular singular and plural imperatives of 'to come'" },
      { turkana: "alothi-ayon / kelot-ayon / tolot!", english: "I go / I went / Go!", explanation: "Present, past perfect, and imperative of 'to go'" }
    ]
  },
  {
    id: "turkana-adverbs-greetings-numbers-calendar",
    title: "Adverbs, Pastoral Greetings, Quinary Numerals & The 12 Traditional Months (Barton 1921)",
    summary: "Turkana uses a base-5/base-10 counting system built on akhan ('five/hand'), a litany of pastoral blessings (Mata!), and a 12-month ecological calendar.",
    content: `Barton's concluding grammatical sections document everyday particles, ceremonial greetings, numerals, and the seasonal calendar:
1. **Key Adverbs, Prepositions & Conjunctions**:
   - **Place & Direction**: *akuich* (above / God), *kwopa* (below), *ngarin* (before/in front), *kouū* (behind), *api* (near), *elwana* (far).
   - **Time**: *tokona* (now), *tokona-tokona* (instantly), *tete* (today), *mui* (tomorrow), *ngon* (yesterday), *ataparach* (early dawn), *ebon* (late/evening), *jui-jui* (time upon time).
   - **Affirmation & Negation**: *ii* / *erobo* / *kongena* (yes), *mam* / *mam ejik* (no, not at all).
   - **Conjunctions & Prepositions**: *ka* (and/with), *anine* (but), *ani* (if), *aka* (of), *te* (with), *ta* (by).
2. **Pastoral Greeting Litany (*Mata*)**:
   - Casual: Q: *Na?* → A: *Baiya, baiya, baiya!*
   - Formal Elder Greeting:
     - Q: *Mata!* (Health!) → A: *Ii mata!*
     - Q: *Mata ng'atuk!* (Health to your cattle!) → A: *Mata ouwi!* (Health to your homestead!)
     - Q: *Mata ng'idwi!* (Health to your children!) → A: *Mata ariama!* (Health to our constant meetings!)
     - Q: *Mata ng'ebarin!* (Health to your stock!) → A: *Mata ng'abero!* (Health to your women!)
     - Together: *Mata ejik!* (Complete health!)
3. **Quinary-Decimal Numerals**:
   - **1–5**: *epei* (1), *ari* (2), *uni* (3), *omwon* (4), *akhan / ng'an* (5, from *akan* 'hand').
   - **6–9 (5 + n)**: *akhan ka pei* (6), *akhan ka ari* (7), *akhan ka uni* (8), *akhan ka omwon* (9).
   - **10–1000**: *tomon* (10), *tomon ka pei* (11), *tomon ari* (20), *tomon tomon* (100), *abungi* (250–300), *ouriman* (500–1000).
4. **The 12 Traditional Turkana Months**:
   - **Ageboro (Rainy Season)**: *Lodungi* (Jan), *Lomoruk* (Feb), *Loichoto* (Mar), *Titima* (Apr), *Yeliyel* (May), *Lopo* (Jun).
   - **Akamu (Dry Season)**: *Lotiak* (Jul), *Lolingachunu* (Aug), *Lothaban* (Sep), *Lolongu* (Oct), *Lorarrar* (Nov), *Lugwan* (Dec).`,
    examples: [
      { turkana: "Mata ng'atuk! — Mata ouwi!", english: "Health to your cattle! — Health to your village!", explanation: "Traditional pastoral greeting exchange (Barton 1921)" },
      { turkana: "epei, ari, uni, omwon, akhan, akhan ka pei, tomon", english: "1, 2, 3, 4, 5, 6 (5+1), 10", explanation: "Quinary-decimal numeral system built on akhan (5)" },
      { turkana: "Ageboro (Lodungi–Lopo) & Akamu (Lotiak–Lugwan)", english: "Rainy Season (Jan–Jun) & Dry Season (Jul–Dec)", explanation: "Traditional 12-month Turkana ecological calendar" }
    ]
  },
  {
    "id": "turkana-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Turkana)",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Turkana.",
    "content": "1. **Archival & Open-Dataset Integration for Turkana**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "turkana": "Kalωme • Ekiyω",
        "english": "You weep • They laugh",
        "explanation": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
      },
      {
        "turkana": "Nyayeni ao • Ayeni",
        "english": "I know not • I know",
        "explanation": "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
      }
    ]
  }
];
