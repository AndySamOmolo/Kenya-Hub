import type { GrammarSection } from "../types";

// ============================================================
// Samburu (Sampur / Loikop) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const SAMBURU_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "samburu-north-maa-grammar",
    "title": "Northern Maa Phonology (l- / n- Prefixes), Cushitic Numeral Borrowings (sapana, saal) & VSO Syntax",
    "summary": "Samburu is the primary Northern Maa variety of Eastern Nilotic, sharing VSO syntax and gender prefixes with Maasai while incorporating Cushitic numerals 7 (sapana) and 9 (saal).",
    "content": "As documented in Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902, Burkeneji/Sampuru), Hildegarde Hinde (1901), and Hon. K. R. Dundas (1910):\n- **Gender Prefixes**: Masculine **l-** (pl. **l-** / **il-**) vs. Feminine **n-** (pl. **n-** / **in-**): *l-murani* (warrior), *l-doinyo* (mountain), *nkare* (water), *nkishu* (cattle).\n- **Numerals**: *nabo / obo* (1), *are / aare* (2), *uni / okuni* (3), *ongwan* (4), *imiet* (5), *ile* (6), *sapana* (7), *isiet* (8), *saal* (9), *tomon* (10).",
    "examples": [
      {
        "samburu": "l-murani (sg.) → l-muran (pl.) • n-kiteng (sg.) → n-kishu (pl.)",
        "english": "warrior → warriors • cow → cattle",
        "explanation": "Northern Maa l-/n- gender prefixes"
      }
    ]
  },
  {
    "id": "samburu-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Samburu (Sampur))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Samburu (Sampur).",
    "content": "1. **Archival & Open-Dataset Integration for Samburu (Sampur)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "samburu": "artam • otomoni uni",
        "english": "Ninety • Eighty",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
      },
      {
        "samburu": "Ol-labanani • Lesuñgu",
        "english": "Diviner • Traveler",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (North Maa / Ngishu)"
      }
    ]
  },
  {
    "id": "samburu-hobley-1910-mogogodo-sambur-laikipiak",
    "title": "C. W. Hobley (1910) Part II Chapters V & VI: First Published Mogogodo (Il Mwesi / Yaaku) Vocabulary, Numerals & Verb Paradigms (pp. 146–155) and Sambur & Laikipiak Sub-Tribes, Gilat & Chiefs (pp. 159–160)",
    "summary": "Complete line-by-line documentation of C. W. Hobley's 1910 chapters on the Mogogodo (Il Mwesi) of the northern slopes of Mount Kenya (pp. 146–155) and the Sambur and Laikipiak Northern Maa sections (pp. 159–160).",
    "content": "From C. W. Hobley, C.M.G. (*Ethnology of A-Kamba and Other East African Tribes*, Cambridge University Press, 1910, Part II, Chapters V & VI, pp. 146–155, 159–160):\n1. **Part II, Chapter V — The Mogogodo (*Il Mwesi / Yaaku*) of Northern Mount Kenya (pp. 146–155)**:\n   - Hobley records the first linguistic and ethnographic study of the **Mogogodo** (called **Il Mwesi** by the Masai), a cave- and forest-dwelling community north of Mount Kenya between the Guaso Nyiro and Mountadon:\n   - **Chiefs & Laibon (p. 146)**: Principal chiefs **Parmashu** and **Matungi**, who consult the Mweru medicine-man (*laibon*) **Lakaibe**; they speak a distinct East Cushitic language (**Yaaku**) while using Maa as a trade lingua franca.\n   - **Mogogodo Numerals & Noun Phrases (pp. 152–153)**:\n     - **1**: *Kibwehet* • **2**: *Kechei* • **3**: *Khahaat* • **4**: *Ikwani* • **5**: *Imiet* (Masai loan) • **10**: *Tomon* • **100**: *Ipp*\n     - Noun + Numeral order: *Sogomei kibwehet* ('one elephant') → *Sogomedi kechei* ('two elephants'); *Hai kechei* ('two houses'); *Tor kechei / Tor khahaat* ('two / three spears'); *Sheou kechei / Sheou khahaat* ('two / three knives'); *Sungai khahaat* ('three lions'); *Damatuti khahaat* ('three women').\n   - **Mogogodo Pronouns, Adjectival Predicates & Verb Paradigms (pp. 153–155)**:\n     - **Good (*shoboshon*)**: *Kagu shoboshon* ('thou art good'), *Ke shoboshon* ('he is good'), *Kege shoboshonadi* ('we are good'), *Kabu shoboshonadi* ('ye are good'), *Ke shoboshonadi* ('they are good').\n     - **Come (*-lehe*)**: *Nalehe* ('I am coming'), *Alehe* ('he is coming'), *Nalehenu* ('we are coming'), *Lehei / keselehei* ('they are coming').\n     - **Sleep, Go, Drink, Know, See & Want**: *Nbomi* ('he sleeps') / *Nebomin* ('they sleep'); *Antu Khalkhani* ('I go to water') / *Niakhani* ('I do not go'); *Nukha antu* ('I drink water'); *Geheno* ('thou knowest') / *Ishahanu* ('I do not know'); *Ila teetei / Ngñen a waakan* ('I do not see'); *Kwi kijeji* ('he wants a thing') / *Ngjeji* ('I do not want').\n     - **Salutations (p. 151)**: *Keshoboshon!* (cf. Masai *Sobai*) and *Aishei!*\n2. **Part II, Chapter VI — The Sambur (*Burkeneji*) & Laikipiak Sub-Tribes, *Gilat* & Chiefs (pp. 159–160)**:\n   - **Nine Sambur Sub-Tribes & Their Chiefs (p. 159)**:\n     1. **L'masula** — Chief *L'elarok*\n     2. **L'pisikishu** — Chief *L'engesen*\n     3. **L'nyaparai** — Chief *L'erionka*\n     4. **L'ngwesi** — Chief *L'olmusa*\n     5. **L'orongwe** — Chief *L'ekulal*\n     6. **L'ukumai** — Chief *L'esarge*\n     7. **L'mosiat** — Chief *L'epetpet*\n     8. **L'oimisi** — Chief *L'etuluba*\n     9. **L'doigio** — Chief *L'ekinoi*\n   - **Three Sambur *Gilat* & Ritual Leader (p. 159)**: **(1) Sitat**, **(2) Ol Lesilali**, and **(3) Maletis**, with chief *laibon* **Ol Segeteti**.\n   - **Six Laikipiak Sub-Tribes, 3 *Gilat* & *El Keriet* (pp. 159–160)**:\n     - **6 Sub-Tribes**: **(1) L'ngwesi**, **(2) L'tikirri**, **(3) L'leleta**, **(4) L'purko**, **(5) L'oodokishu**, and **(6) L'momonyot** (extending to **Irimba**, the Lorian Swamp).\n     - **3 Laikipiak *Gilat***: **(1) Bartaolin**, **(2) Sioma**, and **(3) Kisengeni**, plus the **El Keriet** section of the Mariti Hills.",
    "examples": [
      {
        "samburu": "Mogogodo (Il Mwesi): Kibwehet (1), Kechei (2), Khahaat (3), Ikwani (4), Imiet (5), Ipp (100) • Sogomei kibwehet → Sogomedi kechei",
        "english": "Mogogodo numerals and plural noun concord ('one elephant' → 'two elephants')",
        "explanation": "Hobley (1910, Part II, Ch. V, pp. 152–153)"
      },
      {
        "samburu": "Keshoboshon! / Aishei! • Nalehe, Alehe, Nalehenu, Lehei • Antu Khalkhani • Nukha antu • Ishahanu",
        "english": "Greetings! • I, he, we, they are coming • I go to water • I drink water • I do not know (Mogogodo)",
        "explanation": "Hobley (1910, Part II, Ch. V, pp. 151, 153–155)"
      },
      {
        "samburu": "9 Sambur sub-tribes: L'masula, L'pisikishu, L'nyaparai, L'ngwesi, L'orongwe, L'ukumai, L'mosiat, L'oimisi, L'doigio • 3 Gilat: Sitat, Ol Lesilali, Maletis (Laibon: Ol Segeteti)",
        "english": "Complete 1910 registry of Sambur divisions, clans, and ritual leader",
        "explanation": "Hobley (1910, Part II, Ch. VI, p. 159)"
      }
    ]
  },
  {
    "id": "samburu-dundas-1910-doigio-lorogishu-lobbeyok-clans",
    "title": "Hon. K. R. Dundas (1910, pp. 49–53, 65–66): The Three Samburu Sections (Il Doigio, Lorogishu / Kwakituk on Angata e-'m-barta & Lobbeyok at Il Maruroi), Ngingyang ('Crocodile'), Moruanghakhulakh ('Hill of Thieves') & 9 Samburu/Doigio Clans at Njamus",
    "summary": "Complete line-by-line documentation of the Samburu historical migrations, toponyms, and clan branches recorded by Hon. K. R. Dundas (JRAI Vol. 40, 1910, pp. 49–53, 65–66).",
    "content": "From Hon. Kenneth R. Dundas (*Notes on the Tribes Inhabiting the Baringo District*, *JRAI* Vol. 40, 1910, pp. 49–53, 65–66):\n1. **Toponyms & Etymologies (pp. 49–52)**:\n   - **Ngingyang** (p. 49 & fn. 1): Dry river bed north of Lake Baringo; **Ngingyang** is the Samburu name for the **crocodile**, which abounds in the river during the rains and burrows beneath the sand in the dry season.\n   - **Konyek** (p. 50): Samburu/Doigio name for **Maji a Moto** at the southern end of Lake Baringo.\n   - **Angata e-'m-barta** (p. 50): 4,000-ft plateau north of Loroghi where the **Lorogishu** lived.\n   - **Il Maruroi** (p. 51): Samburu name for **Tiati**.\n   - **Moruanghakhulakh** (*\"Hill of Thieves\"*, p. 52) & **El Bogoi** (p. 51): Refuges of defeated Samburu/Doigio warriors after the Masai **Segellai** and Turkana/Suk wars.\n2. **The Three Samburu Sections & the Loroghi Horn Legend (pp. 50–52)**:\n   - **(1) Il Doigio**: Lived on the Loroghi Plateau 70–100 years before 1910. During a severe drought, an old man saw a bird carrying a green blade of grass in its beak, blew the village horn, and sent **40 young warriors** south past Naudo, the Ngingyang River, and Mount Paka to Lake Baringo, the River Tim, Molo, Tigrish, and **Konyek** (*Maji a Moto*).\n   - **(2) Lorogishu** (called **Kwakituk** by the Suk): Spread from **Angata e-'m-barta** across the Sogota and Lomello plains alongside the Rendille clan **Naroshon**.\n   - **(3) Lobbeyok** (*Lobbeyok* being the Suk name for the Samburu): Occupied Ngingyang, the plains from Sogota to Lomello, and **Tiati** (**Il Maruroi**).\n3. **The 4 Samburu & 5 Il Doigio Clans Settled at Njamus (p. 53)**:\n   - **Samburu (4 clans)**: **(1) Il Mayek** (first resided with the **Il Chabichab** section of Kamasia; hereditary priests of the Njamus irrigation furrow ceremony), **(2) Ol Barasaero**, **(3) Ol Ouara** (= **Lugumai** of the Masai), **(4) Loimüsse**.\n   - **Il Doigio (5 clans)**: **(1) Ol Doimal**, **(2) El Gungwan**, **(3) Ol Gesiani**, **(4) Ol Murtanat**, **(5) Ol Gessei** (plus the Nderois Kamasia clan **Kimwan** of Samburu origin, p. 65).",
    "examples": [
      {
        "samburu": "Ngingyang ('crocodile') • Konyek (Maji a Moto) • Angata e-'m-barta • Il Maruroi (Tiati) • Moruanghakhulakh ('Hill of Thieves') • El Bogoi",
        "english": "Samburu toponyms and etymologies in Baringo District",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, pp. 49–52)"
      },
      {
        "samburu": "Il Doigio (Loroghi to Baringo) • Lorogishu (Suk: Kwakituk, with Rendille Naroshon) • Lobbeyok (at Ngingyang, Sogota–Lomello & Il Maruroi/Tiati)",
        "english": "The three migrating Samburu sections in Dundas (1910, pp. 50–51)",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, pp. 50–51)"
      },
      {
        "samburu": "Samburu clans: Il Mayek, Ol Barasaero, Ol Ouara (= Lugumai), Loimüsse • Il Doigio clans: Ol Doimal, El Gungwan, Ol Gesiani, Ol Murtanat, Ol Gessei",
        "english": "All 9 Samburu and Il Doigio clans incorporated into the Njamus",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 53)"
      }
    ]
  },
  {
    "id": "samburu-johnston-1902-ngishu-burkeneji-complete",
    "title": "Sir Harry Johnston (1902) 'The Uganda Protectorate, Vol. II' (pp. 796–804, 913–924): Burkeneji (Samburu) & Gwas' Ngishu Classification, Roñata Nyuki Stone Kraals & Complete Set 2 Ngishu Maa Vocabulary & Tens 60–90 (pp. 913–924)",
    "summary": "Complete line-by-line documentation of Burkeneji (Samburu) and Gwas' Ngishu (North/Uasin Gishu Maa) in Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902, pp. 796–804, 913–924), including the full tens series 60–90 (Onnom otomon, Onnom obikitam, Onnom otomoni uni, Onnom artam).",
    "content": "From Sir Harry Johnston, G.C.M.G., K.C.B. (*The Uganda Protectorate*, Vol. II, London: Hutchinson & Co., 1902, Ch. XIX pp. 796–804 & Ch. XX Set 2 pp. 913–924):\n1. **Chapter XIX Classification of the Northern & Agricultural Maa (*Burkeneji, Gwas' Ngishu, Nyarusi / Enjámusi*, pp. 796–804)**:\n   - Documents the **Burkeneji** (Samburu) of the Lake Rudolf–Baringo corridor, the **Gwas' Ngishu** who built circular stone-walled kraals on the **Roñata Nyuki** (\"Red Plain\" = Uasin Gishu Plateau) before their dispersal to Kavirondo, Baringo, and Ravine, and the **Nyarusi (Enjámusi / Njemps)** settled on the Molo and Tigrish rivers south of Lake Baringo (Fig. 439).\n2. **Complete Set 2 *Ngishu* (North/Baringo Maa) Numerals & Vocabulary (pp. 913–924)**:\n   - **Verified Compound Tens 50–90 (p. 921)**: *Fifty* **Onnom**, *Sixty* **Onnom otomon** (50 + 10), *Seventy* **Onnom obikitam** (50 + 20), *Eighty* **Onnom otomoni uni** (50 + 30), *Ninety* **Onnom artam** (50 + 40), *Hundred* **Ip**, *Thousand* **Ip tomon** (correcting truncated forms *otomon, obikitam, otomoni uni, artam*).",
    "examples": [
      {
        "samburu": "Tigitam (20) • Tomoni uni (30) • Artam (40) • Onnom (50) • Onnom otomon (60) • Onnom obikitam (70) • Onnom otomoni uni (80) • Onnom artam (90) • Ip (100) • Ip tomon (1,000)",
        "english": "20, 30, 40, 50, 60, 70, 80, 90, 100, 1,000 in Johnston's Set 2 Ngishu Maa table",
        "explanation": "Sir Harry Johnston, The Uganda Protectorate, Vol. II (1902, p. 921)"
      }
    ]
  }
];
