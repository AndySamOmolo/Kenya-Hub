export interface TesoGrammarSection {
  id: string;
  title: string;
  summary: string;
  content: string;
  examples: { teso: string; english: string; explanation?: string }[];
}

export const TESO_GRAMMAR_SECTIONS: TesoGrammarSection[] = [
  {
    "id": "teso-phonology-orthography",
    "title": "ATR Vowel Contrast, Semi-Mute Shadow Vowels, Kenyan–Tororo K-Retention & 1902 Elgumi/Wamia Records (Hobley 1902 & Johnston 1902)",
    "summary": "Ateso contrasts close (+ATR) and open (-ATR) vowels, inserts shadow vowels to prevent consonant clusters, retains intervocalic /k/ in Kenya (Busia) and Tororo, and is documented historically as 'Elgumi / Wamia' by Hobley (1902) and Johnston (1902).",
    "content": "Key phonological, orthographic, and historical traits of Ateso (Teso–Turkana / Ateker cluster) as recorded in C. W. Hobley (*Eastern Uganda*, 1902, p. 57, pp. 92–95), Sir Harry H. Johnston (*The Uganda Protectorate*, 1902, Vol. II, pp. 842–852), and modern Ateso grammar:\n1. **Close (+ATR) vs. Open (-ATR) Vowels**:\n   - The five vowel letters (*a, e, i, o, u*) represent both close (+ATR) and open (-ATR) phonemes that distinguish verb roots and govern conjugation harmony:\n   - **aipet** [e] (to kick) vs. **aipet** [ɛ] (to lay out).\n   - **aimor** [o] (to insult) vs. **aimor** [ɔ] (to share).\n   - **aikut** [u] (to scoop earth) vs. **aikut** [ʊ] (to blow).\n   - Tone/pitch also distinguishes tense on identical spellings: *élípì* (I am praying) vs. *elìpǐ* (I was praying) vs. *elipí* (he/she was praying).\n2. **Semi-Mute \"Shadow\" Vowels & Cluster Avoidance**:\n   - Two consonants never stand together in Ateso; words ending in a consonant carry a semi-mute \"shadow\" vowel that surfaces when followed by another consonant or possessive suffix:\n   - Written *elosete aŋor togo* (the women go to the house), pronounced *elosete aŋoro togo*; with possessive: *elosete aŋoroke togo* (his women go to the house).\n   - *Elacet-kon* (your key) is written and pronounced **elacetekon**.\n3. **Kenyan (Busia / Wamia) Retention of /k/ (Hobley 1902 & Johnston 1902)**:\n   - Speakers in Busia County (Kenya) and Tororo retain the *k* prefix in infinitives and demonstratives (*akilip lok'asuban* 'to pray to the Creator', *akinyam atap* 'to eat millet bread', *akimat akile* 'to drink milk'), whereas central Ugandan varieties often elide *k* (*ailip*, *ainyam*, *aimat*).",
    "examples": [
      {
        "teso": "akilip lok'asuban • akinyam atap • akimat akile",
        "english": "to pray to the Creator • to eat bread • to drink milk",
        "explanation": "Kenyan Ateso retention of k- in infinitives (attested in Hobley 1902 & Johnston 1902)"
      },
      {
        "teso": "aimor [ɔ] (to share) vs. aimor [o] (to insult)",
        "english": "to share vs. to insult",
        "explanation": "Open (-ATR) vs. Close (+ATR) vowel contrast"
      },
      {
        "teso": "elacet + -kon → elacetekon",
        "english": "your key",
        "explanation": "Insertion of shadow vowel -e- between consonants"
      }
    ]
  },
  {
    "id": "teso-gender-plurals-numerals",
    "title": "Three Grammatical Genders (E-/O-, A-, I-), Agentive/Instrumental Plurals & Quinary Numerals (Hobley 1902 & Johnston 1902)",
    "summary": "Ateso divides all nouns into Masculine (e-/o-), Feminine (a-), and Neuter/Diminutive (i-) classes and counts via a gender-agreed base-5/base-10 system.",
    "content": "Grammatical gender, pluralization, and numerals in Ateso as documented in Hobley (1902, p. 57, p. 95), Johnston (1902, pp. 842–852), and Wikipedia:\n1. **Three Grammatical Genders (Singular → Plural Prefixes)**:\n   - **Masculine (*e-, o- → i-, o-, ngi-*)**: Male beings, most trees/fruits, insects, and non-indigenous liquids (*ekile → ikiliok* 'man → men', *etelepat → itelepai* 'boy → boys', *ekingok → ingokwo* 'dog → dogs', *emong → imongin* 'bull/ox → oxen', *ekitoi → ikito* 'tree → trees').\n   - **Feminine (*a- → a-, nga-*)**: Female beings, languages/countries, indigenous liquids, abstract nouns, and verbal nouns (*aberu → angor* 'woman → women', *apese → apesur* 'girl → girls', *akiteng → aatuk* 'cow → cattle', *akipi* 'water', *akile* 'milk', *akim* 'fire', *akolong* 'sun').\n   - **Neuter / Diminutive (*i- → i-*)**: Generic or small objects (*ikoku → idwe* 'child → children', *itunganan → itunga* 'person → people', *ikingok* 'puppy', *imoru* 'pebble').\n   - *Exceptions without gender prefix*: Kinship and cardinal directions (*toto* 'mother', *papa* 'father', *mamai* 'uncle', *inac* 'sister', *ija* 'aunt'; *kide* 'east', *too* 'west', *nyakoi* 'north', *agolitomei* 'south').\n2. **Productive Verbal Noun Plurals**:\n   - **Agentive Nouns (*-an/-on → -ak/-ok*)**: *ekamejan → ikamejak* (hunter → hunters), *ekecokon → ikecokok* (herdsman → herdsmen), *ekadukon → ikadukok* (builder → builders), *ekatubon → ikatubok* (judge → judges).\n3. **Gender-Agreed Quinary-Decimal Numerals (Hobley (1902, p. 95) & Johnston 1902)**:\n   - Numerals agree in gender (*i-* masc./neut. vs. *a-* fem.):\n   - **1–5**: *idiope / adiope (epei)* (1), *iyarei / aarei* (2), *iuni / auni* (3 — e.g. *itelepai iuni* 'three boys' vs. *apesur auni* 'three girls'), *ioŋon / aoŋon (omwon)* (4), *ikany / akany* (5, from *akan* 'hand').\n   - **6–10**: *ikany-kape* (6 = 5+1), *ikany-kaare* (7 = 5+2), *ikany-kauni* (8 = 5+3), *ikany-kaoŋon* (9 = 5+4), *itomon / atomon (tomon)* (10), *akais aare (tomon aare)* (20), *akwatat* (100).",
    "examples": [
      {
        "teso": "ekile → ikiliok • aberu → angor • ikoku → idwe • akiteng → aatuk",
        "english": "man → men • woman → women • child → children • cow → cattle",
        "explanation": "Masculine (e-→i-), Feminine (a-→a-), and Neuter (i-→i-) nouns (Hobley 1902 & Johnston 1902)"
      },
      {
        "teso": "ekadukon → ikadukok • ekatubon → ikatubok",
        "english": "builder → builders • judge → judges",
        "explanation": "Agentive singular -on to plural -ok"
      },
      {
        "teso": "idiope, iyarei, iuni, ioŋon, ikany, ikany-kape, ikany-kaare, ikany-kauni, ikany-kaoŋon, itomon",
        "english": "1, 2, 3, 4, 5, 6 (5+1), 7 (5+2), 8 (5+3), 9 (5+4), 10",
        "explanation": "Quinary-decimal cardinal numerals (Hobley (1902, p. 95) & Johnston 1902)"
      }
    ]
  },
  {
    "id": "teso-roscoe-kitching-1915-kinship-clans",
    "title": "Ateso Kinship Terminology, Exogamous Clans (Atekerin) & Customary Institutions (Purvis 1909 & Roscoe/Kitching 1915)",
    "summary": "Rev. John Roscoe (The Northern Bantu, 1915, Part V, pp. 257–293, with Archdeacon A. L. Kitching's kinship table) and Rev. J. B. Purvis (1909, Ch. XII) document the complete Bateso kinship system, clan totems, and rain-making ceremonies.",
    "content": "From Rev. John Roscoe (*The Northern Bantu*, Cambridge University Press, 1915, Part V \"The Bateso\", pp. 257–293) and Archdeacon A. L. Kitching's Ateso Kinship Table (pp. 291–293):\n1. **Complete Ateso Kinship System (Kitching & Roscoe 1915, pp. 291–293)**:\n   - **Parents & Grandparents**: **Papa** (my father), **Papakon** (your father), **Papake** (his/her father); **Toto** (my mother), **Totokon** (your mother), **Totoke** (his/her mother); **Papaa** (grandfather, pl. *ataak*), **Tata** (grandmother, pl. *ataak*).\n   - **Siblings & Cousins**: **Onac** (full/clan brother or male parallel cousin, pl. *iinacan*), **Inac** (full/clan sister or female parallel cousin, pl. *iinacan*), **Okookai** (maternal half-brother), **Ikookai** (maternal half-sister); **Ocen** (cross-cousin = mother's brother's son or father's sister's son, pl. *icen*), **Acen** (female cross-cousin, pl. *acen*).\n   - **Uncles, Aunts & In-Laws**: **Mamai** (maternal uncle = MB, pl. *imamain*), **Ejait / Ija** (paternal aunt = FZ, pl. *ijain*), **Totocici** (maternal aunt = MZ, lit. 'little mother'), **Ekamuran** (father-in-law / son-in-law / brother-in-law, pl. *ikamurak*), **Akamuran** (mother-in-law / daughter-in-law / sister-in-law, pl. *akamurak*), **Ekainacan** (co-husband / wife's sister's husband), **Akainacan** (co-wife).\n2. **Bateso Clans, Agriculture & Rain-Making (Purvis 1909, pp. 227–246 & Roscoe 1915, pp. 259–285)**:\n   - Exogamous clans (*atekerin*) include *Abwor, Atekok, Igoria, Irarak, Ikomolo, Ikatekok, Inomu*; strict clan exogamy forbids marrying into either one's father's or mother's clan.\n   - Communal granaries and millet cultivation with long-handled hoes (*emelait*), age-set initiation ceremonies (*asapan*), and rain-making rituals led by the *ekasuban akiru* invoking *Akuj / Lokasuban*.",
    "examples": [
      {
        "teso": "Papa / Papakon / Papake • Toto / Totokon / Totoke • Papaa (grandfather) • Tata (grandmother)",
        "english": "My/your/his father • My/your/his mother • Grandfather • Grandmother",
        "explanation": "Ateso generational kinship inflection (Kitching in Roscoe 1915, pp. 291–293)"
      },
      {
        "teso": "Onac / Inac • Mamai (MB) • Ejait / Ija (FZ) • Ocen / Acen • Ekamuran / Akamuran",
        "english": "Brother / Sister • Maternal uncle • Paternal aunt • Cross-cousin (m./f.) • In-law (m./f.)",
        "explanation": "Core Ateso kinship categories (Kitching in Roscoe 1915, pp. 291–293)"
      }
    ]
  },
  {
    "id": "teso-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Teso (Ateso))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Teso (Ateso).",
    "content": "1. **Archival & Open-Dataset Integration for Teso (Ateso)**:\n   - Combines primary historical documentation (Hobley 1902, Johnston 1902, Purvis 1909, Kitching 1915, Roscoe 1915, BFBS 1921, Moodie 2016) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "teso": "ateker (pl. atekerin) • Inyā",
        "english": "Clan / exogamous kinship group • Grass",
        "explanation": "Rev. A. L. Kitching, A Handbook of the Ateso Language (1915)"
      },
      {
        "teso": "Akoñ • Etom",
        "english": "Eye • Elephant",
        "explanation": "Elgumi (Ateso / Wamia) — Sir H. H. Johnston, The Uganda Protectorate Vol. II (1902, pp. 903–912)"
      }
    ]
  },
  {
    "id": "teso-hobley-1902-elgumi-wamia-clans-lexicon",
    "title": "C. W. Hobley (1902) Eastern Uganda: Wamia / Elgumi (Ba-Keddi) Clans & Chiefs (Telemo, Ngoma, Para), 10 West Elgon Tribes & Elgumi Vocabulary",
    "summary": "Hobley's 1902 monograph (pp. 9, 46–47, 57, 92–95) documents the Elgumi (Wamia / Ateso) southward migration to the Sio River, their 7 principal chiefs and 3 named subdivisions (Telemo, Ngoma, Para), 10 neighbouring West Elgon tribes, and a 4-page Elgumi vocabulary and numeral list.",
    "content": "From C. W. Hobley (*Eastern Uganda: An Ethnological Survey*, Anthropological Institute Occasional Papers No. 1, London, 1902, pp. 9, 46–47, 57, 92–95):\n1. **Elgumi / Wamia Territory, Migration & Chiefs (Ch. I p. 9 & Ch. V § 3 p. 57)**:\n   - Hobley notes that the irruption of the **Elgumi (Wamia)** people into the country south-west of Mount Elgon closed the corridor against further Nilotic movements from the north (p. 9), intermarried with the **Awa-Tindi (Khaiyo)** north of the Sio River (p. 46), and gave rise ~50 years earlier to the **Awa-Kikelelwa (Awa-Lewi)** (p. 47).\n   - Stretching from Tindi's on the north bank of the Sio River northward to Lake Kioga/Chioga (where the Baganda call them **Ba-Keddi**), the Elgumi are led by chiefs **Pakala, Lemugi, Mwenyikoi, Babukori, Eten, Oreddi, and Kuresi**, with three recorded subdivisions (p. 57):\n     1. **Telemo** — Chief **Nzoia**\n     2. **Ngoma** — Chiefs **Pakala** and **Kuresi**\n     3. **Para** — Chief **Kimi**.\n   - **Ten Miscellaneous Tribes West of Mount Elgon (p. 57)**: *Poto, Seguya, Brawa, Koko, Manguku (or Ngoko), Matanda (or Tanda), Mukonde (or Konde), Fumba, Mruma, and Wa-Muhasa*.\n2. **Elgumi Vocabulary, Pronouns, Interrogatives & Numerals (Ch. VII § II, pp. 92–95)**:\n   - **Pronouns & Possessives**: *ongo* ('I'), *iong* ('you'), *ungolo* ('he'); *borangi* ('my'), *langelo* ('your'), *elango* ('his'); *kajokisi* ('all').\n   - **Interrogatives & Salutations**: *inyanangoro?* ('what?'), *eborana?* ('where?'), *unguai?* ('who?'), *kanguai?* ('whose?'), *wa-mwasai?* ('how many?'); *mata* & *yoka yoka* ('salutation'), *ekinok* ('peace').\n   - **Numerals 1–10 (p. 95)**: *1 epe (apuru), 2 are, 3 auni (uni), 4 aungwen (ongwon), 5 ekan (akanyi), 6 kanyi kape (akanya kape), 7 kanyi-kare, 8 kanyi kauni, 9 kanyi-ki-ongwon (akanya kangwun), 10 atomon*.",
    "examples": [
      {
        "teso": "Telemo (Nzoia) • Ngoma (Pakala, Kuresi) • Para (Kimi) • Lemugi, Mwenyikoi, Babukori, Eten, Oreddi",
        "english": "Wamia / Elgumi subdivisions and principal chiefs recorded by C. W. Hobley in 1902",
        "explanation": "Hobley (1902, Ch. V § 3, p. 57)"
      },
      {
        "teso": "ongo, iong, ungolo • borangi, langelo, elango • inyanangoro?, eborana?, unguai?, kanguai?",
        "english": "I, you, he • my, your, his • what?, where?, who?, whose?",
        "explanation": "Elgumi pronouns, possessives, and interrogatives in Hobley (1902, pp. 93–95)"
      },
      {
        "teso": "epe (apuru), are, auni, aungwen, ekan (akanyi), kanyi kape, kanyi-kare, kanyi kauni, kanyi-ki-ongwon, atomon",
        "english": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
        "explanation": "Elgumi quinary-decimal numerals in Hobley (1902, p. 95)"
      }
    ]
  },
  {
    "id": "teso-johnston-1902-uganda-protectorate-elgumi-complete",
    "title": "Sir Harry Johnston (1902) 'The Uganda Protectorate, Vol. II' (pp. 713–714, 840, 852–855, 885–889, 903–913): Chapter XVI Busoga-Elgumi History, Chapter XIX Elgumi (Wamia) Ethnography (Figs. 478–479) & Complete Vocabulary Set 1 (Elgumi, pp. 903–913)",
    "summary": "Complete line-by-line documentation of all Elgumi (Wamia / Ateso) material in Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902): Chapter XVI Busoga substratum (pp. 713–714), Chapter XIX Elgumi ethnography & Illustrations 478–479 (pp. 852–855), and Chapter XX Vocabulary Set 1 (pp. 903–913).",
    "content": "From Sir Harry Johnston, G.C.M.G., K.C.B. (*The Uganda Protectorate*, Vol. II, London: Hutchinson & Co., 1902, pp. 713–714, 840, 852–855, 885–889, 903–913):\n1. **Chapter XVI Busoga Substratum & Chapter XIX Elgumi (*Wamia*) Ethnography (pp. 713–714, 852–855, Figs. 478–479)**:\n   - **Historical Territory (pp. 713–714, 852)**: Johnston records that northern Busoga was formerly inhabited by the **Lango, Elgumi, and Masaba**, and that the **Elgumi** (called **Wamia** by the Bantu Kavirondo and **Ba-kedi** by the Baganda) occupy the rolling plains from the south-western base of Mount Elgon and the Sio River northward to Lake Kioga.\n   - **Illustrations 478–479 (pp. xix, 853–854)**: *478. Elgumi People* and *479. Elgumi Warriors*.\n   - **Close Linguistic Unity with Turkana & Karamojo (pp. 852–855, 886)**: Demonstrates that Elgumi (Ateso) is mutually intelligible with Karamojo and Turkana, sharing the masculine/feminine/neuter prefixes (*E-/A-/I-*), quinary-decimal numerals, and agricultural-pastoral vocabulary while adopting settled granaries and iron hoe cultivation southwest of Mount Elgon.\n2. **Complete Vocabulary Set 1 — *Elgumi* (Ateso / Wamia, pp. 903–913)**:\n   - **Nouns, Kinship, Body & Nature (pp. 904–908)**: *Man* **Ekile (pl. Ikiliok) / Etuñanan (pl. Ituña)**, *Woman* **Aberu (pl. Añgor)**, *Child* **Ikoku (pl. Idwe)**, *Father* **Papa**, *Mother* **Toto**, *Chief* **Ekapolon**, *God* **Akuj**, *Head* **Akou**, *Eye* **Akoñ (pl. Akoñen)**, *Ear* **Akit (pl. Aki)**, *Nose* **Ekume**, *Mouth* **Akutuk**, *Tooth* **Ekelai (pl. Ikel)**, *Tongue* **Añajep**, *Arm/Hand* **Akan**, *Leg* **Akeju**, *Blood* **Aokot**, *Bone* **Akoit**, *Sun* **Akoloñ**, *Moon* **Elap**, *Star* **Ekacerit**, *Rain* **Akiru**, *Water* **Akipi**, *Fire* **Akima**, *Grass* **Inyā**, *Tree* **Ekitoi**, *House* **Akai (pl. Akais)**, *Spear* **Akwan**, *Shield* **Ebuku**, *Cow* **Akiteñ (pl. Aatuk)**, *Goat* **Akine**, *Sheep* **Amerekek**, *Dog* **Ekiñok**, *Elephant* **Etom**, *Lion* **Eñatuny**, *Leopard* **Eris**, *Fish* **Ekole**.\n   - **Numerals, Pronouns & Verbs (pp. 909–912)**: *1* **Epe / Idiope**, *2* **Are / Iyarei**, *3* **Auni / Iuni**, *4* **Oñwon**, *5* **Akany**, *6* **Akany kape**, *7* **Akany kaare**, *8* **Akany kauni**, *9* **Akany kaoñwon**, *10* **Atomon / Itomon**, *20* **Atomon are**, *100* **Pokol**; *I* **Eño / Eoñ**, *Thou* **Iyoñ**, *He* **Ñges**, *We* **Isio / Oni**, *Ye* **Iyes**, *They* **Kes**; *Good* **Ejok**, *Bad* **Erono**, *No/Not* **Mam**.",
    "examples": [
      {
        "teso": "Ekile (pl. Ikiliok) • Aberu (pl. Añgor) • Ikoku (pl. Idwe) • Akiteñ (pl. Aatuk) • Akoñ (pl. Akoñen) • Ekelai (pl. Ikel) • Añajep • Akipi • Akima • Inyā • Etom",
        "english": "Man • Woman • Child • Cow • Eye • Tooth • Tongue • Water • Fire • Grass • Elephant",
        "explanation": "Vocabulary Set 1 (Elgumi / Ateso), Sir Harry Johnston, The Uganda Protectorate, Vol. II (1902, pp. 904–908)"
      },
      {
        "teso": "Epe, Are, Auni, Oñwon, Akany, Akany kape, Akany kaare, Akany kauni, Akany kaoñwon, Atomon, Pokol • Ejok vs. Erono • Mam",
        "english": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100 • Good vs. Bad • No/Not",
        "explanation": "Vocabulary Set 1 (Elgumi / Ateso), Johnston (1902, pp. 908–912)"
      }
    ]
  },
  {
    "id": "teso-moodie-2016-eastern-nilotic-number-marking-complete",
    "title": "Jonathan Moodie (2016, Ch. 21, pp. 397–416, DOI: 10.17169/langsci.b121.492): 'Number marking in Lopit, an Eastern Nilotic language' — Teso Greater Plural (e-tunga-nan → i-tunga → i-tunga-sinei, Table 18), Tripartite Number Marking & Eastern Nilotic Comparisons",
    "summary": "Documents the Eastern Nilotic tripartite number-marking system, Greater Plural in Teso (e-tunga-nan → i-tunga → i-tunga-sinei 'mankind', Hilders & Lawrance 1956: 3), Maasai, Lopit, Lotuko, and Bari, and Greater Singular in Jonathan Moodie (2016, Ch. 21, pp. 397–416).",
    "content": "From Jonathan Moodie (*\"Number marking in Lopit, an Eastern Nilotic language\"*, in Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, eds., *Diversity in African languages*, Berlin: Language Science Press, 2016, Chapter 21, pp. 397–416, DOI: `10.17169/langsci.b121.492`):\n1. **Position of Teso (`Ateso`) in Eastern Nilotic & Tripartite Number Marking (§§ 1–3, pp. 397–405)**:\n   - Within Vossen's (1982) Eastern Nilotic classification, **Teso** belongs to the **Teso-Turkana** sub-branch (alongside Toposa, Karamojong, and Turkana), sister to the **Lotuko-Maa** sub-branch (Lotuko, Lopit, Lokoya, Ongamo, Maasai, Samburu).\n   - Like Teso and Turkana (Dimmendaal 1983; 2000), Lopit exhibits tripartite number marking across 446 nouns: **Plurative** (58%), **Singulative** (19%, preserving Nilo-Saharan `*-it`), and **Replacement** (18%, including agentive `-ni → -k` as in Ateso `-an/-on → -ak/-ok`, and Greenberg's 1981 movable `k-` prefix `*(V)kV-`).\n2. **The Teso Greater Plural (`e-tunga-nan → i-tunga → i-tunga-sinei`) & Eastern Nilotic Paradigm (§ 4.1, Tables 17–18, p. 412)**:\n   - Citing **Hilders & Lawrance (1956: 3)** and **Corbett (2000: 30)**, Moodie (Table 18, p. 412) compares the three-way **Singular → Plural → Greater Plural (Plural of Abundance / Diversity)** across Eastern Nilotic:\n     - **Teso**: **`e-tunga-nan`** ('person', singulative `-nan`) → **`i-tunga`** ('people', unmarked plural) → **`i-tunga-sinei`** ('mankind / vast multitudes of people', greater plural `-sinei`).\n     - **Maasai** (Tucker & Mpaayei 1955): `eng-ker` ('sheep') → `ing-kerr-a` ('sheep [pl.]') → `ing-kerr-ai` ('herds of sheep').\n     - **Lopit** (Table 17, p. 412): `tórú → tòrú-ò → tòrú-sèn` ('axe → axes → many types of axes'), `kérr → kèrr-á → kèrr-ítí` ('sheep → sheep [pl.] → herds of sheep'), `xìtéŋ → xísúŋ → xìsúŋ-í` ('cow → cows → herds of cattle').\n     - **Lotuko** (Muratori 1938: 44): `nenie → nedye → nedye-jin` ('goat → goats → herds of goats').\n     - **Bari** (Spagnolo 1933: 32): `nyomot-i → nyomot → nyomot-an` ('seed → seeds → very many seeds').",
    "examples": [
      {
        "teso": "e-tunga-nan ('person', sg.) → i-tunga ('people', pl.) → i-tunga-sinei ('mankind', greater plural)",
        "english": "Teso tripartite Singular / Plural / Greater Plural paradigm in Hilders & Lawrance (1956: 3) & Moodie (2016, Ch. 21, p. 412, Table 18)",
        "explanation": "Jonathan Moodie, 'Number marking in Lopit, an Eastern Nilotic language', in Diversity in African languages (2016, Ch. 21, p. 412)"
      },
      {
        "teso": "Teso -an/-on → -ak/-ok (ekadukon → ikadukok) ≈ Lopit -ni → -k (há-bárà-nì → há-bàrà-k 'cow farmer', há-itíyénà-nì → há-itíyénà-k 'teacher', Table 3)",
        "english": "Shared Eastern Nilotic agentive replacement plural in -k (< Nilo-Saharan *-k)",
        "explanation": "Jonathan Moodie (2016, Ch. 21, pp. 401–402, Table 3)"
      }
    ]
  }
];
