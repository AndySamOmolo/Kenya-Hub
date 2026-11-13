// ============================================================
// Turkana (Ng'aturkana) Grammar Reference Guide
// Based 100% on Public Domain Sources:
// 1. Lieut. Ludwig von Höhnel (1894) "Discovery of Lakes Rudolf and Stefanie" (1888 expedition through Turkana)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Turkana / Elgume comparative vocabulary)
// 3. Rev. J. B. Purvis (1909) "Through Uganda to Mount Elgon" (Ch. XIII "The Turkana, a Tribe of Giantari")
// 4. Hon. K. R. Dundas (1910) "Notes on the Tribes Inhabiting the Baringo District" (JRAI Vol. 40, pp. 66–70, Plates XVI–XVII)
// 5. Mervyn W. H. Beech (1911) "The Suk: Their Language and Folklore" (Turkana–Suk comparative notes)
// 6. Juxon Barton (1921) "Turkana Grammatical Notes and Vocabulary" (JRAI Vol. 51 — Public Domain)
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
    title: "Adverbs, Pastoral Greetings, Quinary Numerals, 12 Traditional Months & Purvis (1909) / Höhnel (1894) Ethnography",
    summary: "Turkana uses a base-5/base-10 counting system built on akhan ('five/hand'), a litany of pastoral blessings (Mata!), a 12-month ecological calendar, and distinctive material culture documented by Höhnel (1894) and Purvis (1909).",
    content: `Barton's (1921) grammatical sections, Lieut. Ludwig von Höhnel's (1894) Lake Rudolf expedition account, and Rev. J. B. Purvis's (*Through Uganda to Mount Elgon*, 1909, Ch. XIII, pp. 247–264) ethnography document everyday particles, ceremonial greetings, numerals, and pastoral material culture:
1. **Key Adverbs, Prepositions & Conjunctions**:
   - **Place & Direction**: *akuich* (above / God), *kwopa* (below), *ngarin* (before/in front), *kouū* (behind), *api* (near), *elwana* (far).
   - **Time**: *tokona* (now), *tokona-tokona* (instantly), *tete* (today), *mui* (tomorrow), *ngon* (yesterday), *ataparach* (early dawn), *ebon* (late/evening), *jui-jui* (time upon time).
   - **Affirmation & Negation**: *ii* / *erobo* / *kongena* (yes), *mam* / *mam ejik* (no, not at all).
2. **Pastoral Greeting Litany (*Mata*) & Material Culture (Purvis 1909, pp. 252–261 & Barton 1921)**:
   - Formal Elder Greeting: *Mata!* (Health!) → *Ii mata!* • *Mata ng'atuk!* (Health to your cattle!) → *Mata ouwi!* (Health to your homestead!) • *Mata ng'idwi!* (Health to your children!) → *Mata ariama!* (Health to our meetings!).
   - Purvis (1909, Ch. XIII) and Höhnel (1894) document the Turkana chignon headdress (*emedot*) felted with grey clay and ostrich plumes, the circular wrist-knife (**abarait**, protected with a leather sheath when not in action), the finger-hook (**ekoli**), the carved wooden headrest/stool (**ekicholong**), and the Ateker linguistic unity linking Turkana and Teso.
3. **Quinary-Decimal Numerals & 12 Traditional Months (Barton 1921)**:
   - **1–10**: *epei* (1), *ari* (2), *uni* (3), *omwon* (4), *akhan / ng'an* (5), *akhan ka pei* (6), *akhan ka ari* (7), *akhan ka uni* (8), *akhan ka omwon* (9), *tomon* (10), *tomon ari* (20), *tomon tomon* (100).
   - **Ageboro (Rainy Season)**: *Lodungi* (Jan), *Lomoruk* (Feb), *Loichoto* (Mar), *Titima* (Apr), *Yeliyel* (May), *Lopo* (Jun).
   - **Akamu (Dry Season)**: *Lotiak* (Jul), *Lolingachunu* (Aug), *Lothaban* (Sep), *Lolongu* (Oct), *Lorarrar* (Nov), *Lugwan* (Dec).`,
    examples: [
      { turkana: "Mata ng'atuk! — Mata ouwi! • abarait • ekicholong • emedot", english: "Health to your cattle! — Health to your village! • circular wrist-knife • neck-stool • clay-felted headdress", explanation: "Traditional pastoral greeting and material culture (Purvis 1909, Ch. XIII & Barton 1921)" },
      { turkana: "epei, ari, uni, omwon, akhan, akhan ka pei, tomon", english: "1, 2, 3, 4, 5, 6 (5+1), 10", explanation: "Quinary-decimal numeral system built on akhan (5)" },
      { turkana: "Ageboro (Lodungi–Lopo) & Akamu (Lotiak–Lugwan)", english: "Rainy Season (Jan–Jun) & Dry Season (Jul–Dec)", explanation: "Traditional 12-month Turkana ecological calendar" }
    ]
  },
  {
    id: "turkana-public-domain-dataset-synthesis",
    title: "Historical Orthography & Dialectal Reference Notes for Turkana",
    summary: "Reference guide to classical 19th- and early 20th-century transcriptions, tone/vowel markings, and regional dialectal forms in Turkana.",
    content: "1. **Archival & Open-Dataset Integration for Turkana**:\n   - Combines primary historical documentation (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911, Barton 1921) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    examples: [
      {
        turkana: "Kalωme • Ekiyω",
        english: "You weep • They laugh",
        explanation: "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
      },
      {
        turkana: "Nyayeni ao • Ayeni",
        english: "I know not • I know",
        explanation: "Turkana (Elgume) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
      }
    ]
  },
  {
    id: "tur-dundas-1910-ethnography-calendar",
    title: "Hon. K. R. Dundas (1910, pp. 66–70, Plates XVI–XVII): The 16 Principal Turkana Tribes, 19 Ngoitunya & Ngolio Attegir Clans, 6 Life Stages & 12-Month Nakiborror / Nakamou / Nait Calendar",
    summary: "Complete ethnographic, clan, life-stage, legal, religious, and 12-month ecological calendar record from Hon. K. R. Dundas (JRAI Vol. 40, 1910, pp. 66–70, Plates XVI–XVII).",
    content: `From Hon. Kenneth R. Dundas (*Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate*, *JRAI* Vol. 40, Jan.–Jun. 1910, pp. 66–70, Plates XVI–XVII):
1. **Physical Types, 16 Principal Tribes & 19 Exogamous *Attegir* Clans (pp. 66–67)**:
   - **Two Physical Types (p. 66)**: A tall, slender, dolichocephalic type with a strong admixture of Samburu and Rendile blood, and a shorter, thick-set, broad-headed pure Turkana type (average stature <= 5 ft 11 in; tallest measured by Dundas: 6 ft 6 in).
   - **16 Principal Turkana Tribes (p. 66)**: **1. Ngolio, 2. Ngoitunya, 3. Nittacha, 4. Nessetou, 5. Nbochoross, 6. Ngissir, 7. Nissikir, 8. Kamatak, 9. Lugumong, 10. Oiuaeguara, 11. Nijiye, 12. Ngirriomong, 13. Ngakumuk, 14. Ngalabong, 15. Ngorr, 16. Nikotomungwa** (*Ngolio* & *Ngoitunya* live south of Lake Rudolph around the Kerio, Sogota & Tirkwel).
   - **19 Exogamous Clans (*Attegir*, without totems) of *Ngoitunya* & *Ngolio* (p. 67)**: **1. Nitegorr, 2. Molereto, 3. Tuduya, 4. Ellelet, 5. Ebalang, 6. Kaleso, 7. Ngonom, 8. Ngatap** (#1–8 occur in all 16 tribes), **9. Moana, 10. Nittacha, 11. Egurerr, 12. Ngaruwo** (the rain-makers' clan), **13. Neturana, 14. Erarak, 15. Eraraket, 16. Abuchaw, 17. Ngattigo, 18. Ekkadenya, 19. Ogorok**.
2. **Six Life-Stage Terms, *Asavanissia* Ages, Customs & *Agipie* (pp. 67–69)**:
   - **Male Life Stages (p. 67)**: **nidue** (young boy; 4 lower incisors extracted) → **egile** (warrior; wears clay-dressed human-hair bag to the waist, ostrich feathers, and iron/zebra-tail neck rings, Plates XVI–XVII) → **kasikou / oppa** (old man; *oppa* wears a beaded cap headdress, Plate XVI Fig. 7).
   - **Female Life Stages (p. 67)**: **apesur** (unmarried girl; wears V-shaped bead-and-ostrich-eggshell apron in front, Plate XVI Fig. 2) → **aberu** (married woman/wife) → **agemat** (old woman).
   - **Age-Generations (*Asavanissia*, p. 67)**: A new warrior age is instituted every 4 or 5 years; total abstinence from fermented liquor; **Nessegonn** evergreen bush on the lower Sogota provides sweet berries and fodder leaves.
   - **Marriage, Slaughter & Deities (pp. 68–69)**: Bride-wealth of 20 cattle + 30 donkeys to the bride's mother, 30 cattle + camels/donkeys/sheep/goats to the father, 5 cattle to each co-wife, and 2 cattle to each brother and sister, followed by a mock-stormed 2-bullock feast; oxen/sheep are slaughtered by spearing through the lungs, cutting a circular piece out of the buttock first, and roasting the meat in the skin; benevolent sky god **Agipie** vs. malevolent nether-world/rock/river god.
3. **The 12-Month Calendar: *Nakiborror*, *Nakamou* & *Nait* (p. 70)**:
   - **Wet Season (*Nakiborror*, Mar–Aug)**: **1. Lomaruk, 2. Tetimaru, 3. Eliel, 4. Loichoto, 5. Loisoban, 6. Loitiak**.
   - **Dry Season (*Nakamou*, Sept–Feb)**: **7. Lolongo, 8. Lopo, 9. Lorara, 10. Lomuk, 11. Logwang, 12. Lodunge** (with Aug–Oct — **Loitiak, Lolongo, Lopo** — called **Nait** because the grass turns yellow).`,
    examples: [
      { turkana: "Nidue → Egile → Kasikou (Oppa) • Apesur → Aberu → Agemat • Asavanissia", english: "Boy → Warrior → Old Man • Girl → Married Woman → Old Woman • 4–5 year warrior age-generations", explanation: "Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 67)" },
      { turkana: "Nakiborror (Lomaruk, Tetimaru, Eliel, Loichoto, Loisoban, Loitiak) & Nakamou (Lolongo, Lopo, Lorara, Lomuk, Logwang, Lodunge) • Nait (Loitiak, Lolongo, Lopo)", english: "The 6 Wet-Season months, 6 Dry-Season months, and 3 yellow-grass Nait months of the Turkana year", explanation: "Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 70)" }
    ]
  }
];
