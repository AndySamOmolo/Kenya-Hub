import type { GrammarSection } from "../types";

// ============================================================
// Ilchamus (Njemps) (Ilchamus / Njemps) Grammar Reference Sections
// Declarative modular grammar reference (audit-ready, zero runtime mutations)
// ============================================================

export const ILCHAMUS_GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    "id": "ilchamus-dundas-1910-grammar",
    "title": "Ilchamus (Njamus / Nyarusi) Northern Maa Grammar, 16 Clans, Irrigation Rituals & Lare/Ngolong Calendar (Dundas 1910 & Johnston 1902)",
    "summary": "Ilchamus forms the Lake Baringo branch of Northern Maa (Eastern Nilotic), sharing l-/n- gender prefixes and VSO verb structure with Samburu and Maasai.",
    "content": "Documented by Sir Harry H. Johnston (*The Uganda Protectorate, Vol. II*, 1902, Njemps) and Hon. K. R. Dundas (*Notes on the Tribes Inhabiting the Baringo District*, JRAI Vol. 40, 1910, pp. 49–55):\n- **Gender Prefixes**: Masculine **l-** (*l-tungani* 'man/person', *l-kinos / ngingyang* 'crocodile', *l-makau* 'hippopotamus') and Feminine **n-** (*n-gitok* 'woman', *n-kare* 'water', *n-kishu* 'cattle').\n- **3 Settlements & 16 Clans (Dundas 1910, pp. 49–53)**: *Njemps Kubwa / Njemps Liabori* (\"Downstream\" on the Molo River), *Njemps Ndogo / Njemps Lekepir* (\"Upstream\" on the Tigrish River), and *Korvan* (founded on Lake Baringo islands by *Logogwa*); 16 clans across 6 ancestral groups: *Laikipiak* (*Il Kabes, Loiborgishu, Il Barsegir*), *Samburu* (*Il Mayek, Ol Barasaero, Ol Ouara, Loimüsse*), *Il Doigio* (*Ol Doimal, El Gungwan, Ol Gesiani, Ol Murtanat, Ol Gessei*), *Kamasia* (*Masari*), *Uasin Gishu / Moiven* (*Barsaina*), and aboriginal *Il Geroi* (*'Ngang Lessamagan, 'Ngang Ngissegir / Lebarkilenya*).\n- **Irrigation Furrow Ceremony & Calendar (pp. 54–55)**: 10 *Il Derito* elders assist 1 *Il Mayek* officiant in sacrificing a *sirwa* sheep at the furrow mouth (observing 6 game taboos: waterbuck, eland, oryx, zebra, rhino, hippo). Calendar divided into **Lare** (Wet season: *Oäni-oingok* [Mar], *Borgola* [Apr], *Loo-'n Gokwa* [May], *Lorigine* [Jun], *Lakodakol* [Jul], *Lekepirn* [Aug], *Lolrochorot* [Sep–Nov]) and **Ngolong** (Hot season: *Gulua* [Dec], *Rialbala* [Jan], *Arat* [Feb]).",
    "examples": [
      {
        "ilchamus": "Njemps Liabori (Molo) • Njemps Lekepir (Tigrish) • Korvan (Tim/Islands)",
        "english": "Downstream Njemps • Upstream Njemps • Korvan Island/Mainland settlement",
        "explanation": "Dundas (1910, pp. 49–50, 53)"
      },
      {
        "ilchamus": "Lare: Oäni-oingok, Borgola, Loo-'n Gokwa, Lorigine, Lakodakol, Lekepirn, Lolrochorot • Ngolong: Gulua, Rialbala, Arat",
        "english": "Wet season (Mar–Nov) & Hot season (Dec–Feb) months",
        "explanation": "Njamus 12-month calendar in Dundas (1910, p. 55)"
      }
    ]
  },
  {
    "id": "ilchamus-public-domain-dataset-synthesis",
    "title": "Comparative Phonology, Dialect Variation & Public-Domain Corpus Synthesis (Ilchamus (Njemps))",
    "summary": "Synthesizes phonological correspondences, morphological patterns, and lexical roots across the newly integrated public-domain monographs and open-web datasets for Ilchamus (Njemps).",
    "content": "1. **Archival & Open-Dataset Integration for Ilchamus (Njemps)**:\n   - Combines primary historical documentation (Johnston 1902/1919, Hobley 1902/1910/1922, Krapf 1842/1850/1882/1887, Hollis 1905/1909/1910, Beech 1911, Barton 1921, Lindblom 1920, Wray 1894, Kirk 1905, Tutschek 1844–1845) with open-licensed digital corpora (Unicode CLDR, Wiktionary Swadesh, Kencorpus, African Next Voices Anv-ke, and thinkKenya).\n2. **Phonetic & Orthographic Normalization**:\n   - Historical transcriptions preserve older consonant and vowel distinctions (such as Johnston's *ω, ṅ, γ, χ, š, þ, đ* and syllabic nasals), paired with standardized syllable-by-syllable pronunciation guides across every dictionary and course entry.",
    "examples": [
      {
        "ilchamus": "artam • otomoni uni",
        "english": "Ninety • Eighty",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
      },
      {
        "ilchamus": "Lesuñgu • Ol gūya",
        "english": "White man • Wart hog",
        "explanation": "Sir Harry H. Johnston (1902) The Uganda Protectorate, Vol. II (Baringo Maa / Ngishu)"
      }
    ]
  },
  {
    "id": "ilchamus-hohnel-1894-farler-1882-baringo",
    "title": "1887–1888 Njemps (En-jemusi) Irrigation Engineering, Ambatch Rafts & Lake Baringo Lexicon (Höhnel 1894 & Farler/Wakefield 1882)",
    "summary": "Lieut. Ludwig von Höhnel (1894, Vol. I, Ch. VI) and Ven. J. P. Farler & Rev. T. Wakefield (1882) provide the earliest detailed descriptions of the Ilchamus (En-jemusi) fortified villages Njemps Mkubwa and Njemps Ndogo, their Perkerra/Tigrish irrigation dams, and Lake Baringo ecology.",
    "content": "From Lieut. Ludwig von Höhnel (*Discovery of Lakes Rudolf and Stefanie*, Vol. I, 1894, pp. 388–425) and Ven. J. P. Farler & Rev. T. Wakefield (*\"Native Routes in East Africa\"*, PRGS Vol. 4, 1882, pp. 730–746):\n1. **Njemps Mkubwa & Njemps Ndogo on the Guaso Tigerish (Perkerra) and Molo Rivers (Höhnel 1894)**:\n   - Documents the two double-stockaded Maa-speaking settlements **Njemps Mkubwa** (*Njemps Liabori* on the Molo) and **Njemps Ndogo** (*Njemps Lekepir* on the *Guaso Tigerish* / Perkerra river) south of Lake Baringo.\n   - Describes the communal brushwood, pile, and boulder **irrigation dams** built across the Tigrish river with radiating main and secondary sluice-canals flooded prior to sowing **wimbi** (eleusine/finger millet), **mtama** (sorghum), melons, pumpkins, and beans.\n   - Records the use of light **ambatch-wood (*Aeschynomene elaphroxylon*) log rafts (*l-kadong'ot / oboro*)** to ferry people and livestock to **Ol Kokwa** island in the center of Lake Baringo.",
    "examples": [
      {
        "ilchamus": "En-jemusi (Njemps Liabori & Njemps Lekepir) • Guaso Tigerish • Ol Kokwa • l-kadong'ot",
        "english": "Lower & Upper Njemps • Perkerra River • Central island of Lake Baringo • Ambatch-wood canoe/raft",
        "explanation": "Lake Baringo Ilchamus geography and irrigation culture in Höhnel (1894, Vol. I, pp. 388–425) & Dundas (1910)"
      }
    ]
  },
  {
    "id": "ilchamus-dundas-1910-settlements-16-clans-furrow-calendar",
    "title": "Hon. K. R. Dundas (1910, pp. 49–55): The 3 Njamus (Nyarusi) Settlements, 16 Clans Across 6 Tribes, 11-Man Furrow-Opening & 4-Elder Crop-Medicine Ceremonies, and the 12-Month Lare / Ngolong Calendar",
    "summary": "Complete line-by-line synthesis of Hon. K. R. Dundas's 1910 section on the Njemps or Njamus (Laikipiak: Nyarusi) of Lake Baringo (JRAI Vol. 40, pp. 49–55).",
    "content": "From Hon. Kenneth R. Dundas (*Notes on the Tribes Inhabiting the Baringo District, East Africa Protectorate*, *Journal of the Royal Anthropological Institute*, Vol. 40, Jan.–Jun. 1910, pp. 49–55):\n1. **Ethnonym, Population & Three Settlements (pp. 49–50)**:\n   - The name **Njamus** (written *Njemps* on maps) is a Swahili corruption of **Nyarusi**, the Laikipiak name for the tribe. In 1910 they numbered no more than **1,500 souls** across **three settlements**:\n     1. **Njemps Kubwa** or **Njemps Liabori** (*Liabori* = \"down stream\", on the Molo River).\n     2. **Njemps Ndogo** or **Njemps Lekepir** (*Lekepir* = \"up stream\", on the Tigrish River).\n     3. **Korvan**: Formerly inhabited the islands in Lake Baringo (first settled by an old man named **Logogwa**, followed by an Uasin Gishu or **Il Moiven**, using rude canoes of crisis-crossed sticks and basketwork before obtaining cattle when a rich Njamus fled to the island with his herd during a Masai raid); by 1910 the bulk lived on the mainland near the River Tim.\n2. **Aboriginal *Il Geroi*, Migration of *Il Doigio* & the 16 Clans Across 6 Tribes (pp. 50–53)**:\n   - The earliest inhabitants of Baringo were the **Il Geroi** (hunters, fishers, and cultivators). After the Samburu **Il Doigio** migrated from the Loroghi Plateau and allied with the **Laikipiak**, they treacherously massacred the Geroi while out hunting (survivors fled to Nakuro and to the **Il Kakesan** [Lumbwa/Kipsikis]).\n   - **All 16 Njamus Clans Across 6 Tribes (pp. 52–53)**:\n     - **Laikipiak (3 clans)**: **(1) Il Kabes (*Il Kabess*)**, **(2) Loiborgishu (*'L-ooibor-kīshu*, branch of *'Ngang Elima*)**, **(3) Il Barsegir (branch of *Lornying*)**.\n     - **Samburu (4 clans)**: **(4) Il Mayek** (first resided with the **Il Chabichab** section of Kamasia), **(5) Ol Barasaero**, **(6) Ol Ouara** (= **Lugumai** of the Masai), **(7) Loimüsse**.\n     - **Il Doigio (5 clans)**: **(8) Ol Doimal**, **(9) El Gungwan**, **(10) Ol Gesiani**, **(11) Ol Murtanat**, **(12) Ol Gessei**.\n     - **Kamasia (1 clan)**: **(13) Masari** (from the **Owolell** section).\n     - **Uasin Gishu / Moiven (1 clan)**: **(14) Barsaina**.\n     - **Il Geroi (2 clans)**: **(15) 'Ngang Lessamagan**, **(16) 'Ngang Ngissegir (or *Lebarkilenya*)**.\n3. **The Two Irrigation & Crop-Medicine Ceremonies (pp. 54–55)**:\n   - **(a) Furrow-Opening Ceremony**: Before water is turned into the irrigation ditch, **10 elders** not younger than the **Il Derito** age (which precedes the **Il Merishu** warriors) assist **1 male member of the Il Mayek clan** (11 men present in all) to smother a **sirwa**-colored sheep, melt its tail fat, and sprinkle the fat, stomach dung, and blood at the mouth of the furrow and into the river. The Il Mayek wears a strip of sheep skin on his head for 2 days; the 10 elders sleep celibate in their grain huts until harvest; and **6 game animals** (waterbuck, eland, oryx, zebra, rhinoceros, hippopotamus) may neither be killed nor eaten while the water flows. Quarrelling with the Il Mayek priest stops the water (if he stays angry over 10 days, the river dries up for the season).\n   - **(b) Crop-Medicine Ceremony**: When the grain is nearly ripe, **2 elders of the officiating clan** (**'Ngang Lessamagan** near the Molo River, **'Ngang Ngissegir** towards Campi ya Samaki at the SW corner of the lake, and **Il Mayek** or substitute **Il Kabess** towards Njemps Dogo) plus **2 elders from any other two clans** (4 elders total) kill and eat a *sirwa* sheep, wear skin strips on their heads for 2 days, and walk in opposite directions around the plantations sprinkling fat, honey, and dung; no one may enter the plantations for 2 days.\n4. **The 12-Month Njamus Calendar (p. 55)**:\n   - **Wet Season (*Lare* — 9 months)**: March **Oäni-oingok** (*\"When the bulls have to be tied up\"*), April **Borgola** (*\"Much rain\"*), May **Loo-'n Gokwa** (*\"Pleiades disappear\"*), June **Lorigine** (*\"Pleiades reappear in the east in the early morning\"*), July **Lakodakol** (*\"Great rains\"*), August **Lekepirn** (*\"Great rains\"*), Sept–Nov **Lolrochorot** (*\"Little rains\"*, 3 months sharing one name).\n   - **Hot Season (*Ngolong* — 3 months)**: December **Gulua**, January **Rialbala**, February **Arat**.",
    "examples": [
      {
        "ilchamus": "Njemps Liabori ('down stream' on Molo) • Njemps Lekepir ('up stream' on Tigrish) • Korvan (Logogwa on Lake Baringo islands & River Tim)",
        "english": "The three Njamus (Nyarusi) settlements in Dundas (1910, pp. 49–50)",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, pp. 49–50)"
      },
      {
        "ilchamus": "Laikipiak: Il Kabes, Loiborgishu ('L-ooibor-kīshu), Il Barsegir • Samburu: Il Mayek, Ol Barasaero, Ol Ouara, Loimüsse • Il Doigio: Ol Doimal, El Gungwan, Ol Gesiani, Ol Murtanat, Ol Gessei • Kamasia: Masari • Uasin Gishu: Barsaina • Il Geroi: 'Ngang Lessamagan, 'Ngang Ngissegir (Lebarkilenya)",
        "english": "All 16 Njamus clans across 6 tribes",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, pp. 52–53)"
      },
      {
        "ilchamus": "Lare (Wet): Oäni-oingok, Borgola, Loo-'n Gokwa, Lorigine, Lakodakol, Lekepirn, Lolrochorot (×3) • Ngolong (Hot): Gulua, Rialbala, Arat",
        "english": "Complete 12-month Njamus calendar",
        "explanation": "Hon. K. R. Dundas, JRAI Vol. 40 (1910, p. 55)"
      }
    ]
  },
  {
    "id": "ilchamus-johnston-1902-enjamusi-ngishu-complete",
    "title": "Sir Harry Johnston (1902) 'The Uganda Protectorate, Vol. II' (pp. 796–804, Fig. 439, pp. 913–924): Enjámusi ('Njemps' / Nyarusi) Ethnography & Complete Set 2 Ngishu/Baringo Maa Lexicon & Tens 60–90",
    "summary": "Complete line-by-line documentation of Enjámusi (Ilchamus / Njemps) and Ngishu Maa in Sir Harry Johnston's The Uganda Protectorate, Vol. II (1902, pp. 796–804, Fig. 439, pp. 913–924).",
    "content": "From Sir Harry Johnston, G.C.M.G., K.C.B. (*The Uganda Protectorate*, Vol. II, London: Hutchinson & Co., 1902, Ch. XIX pp. 796–804, Fig. 439 & Ch. XX Set 2 pp. 913–924):\n1. **Enjámusi (*Nyarusi / Njemps*) at Lake Baringo (pp. 797–804, Fig. 439)**:\n   - Illustrated in **Fig. 439 (*Enjámusi or \"Njemps\" Masai*, p. 797)**; describes how the agricultural Enjámusi and dispersed Gwas' Ngishu refugees settled in two stockaded villages near the southern end of Lake Baringo, irrigating grain fields from the Molo and Tigrish rivers while preserving pure Maa speech.\n2. **Complete Set 2 *Ngishu / Baringo Maa* Compound Tens 50–90 & Verbal Sentences (pp. 921–924)**:\n   - **Compound Tens (p. 921)**: *50* **Onnom**, *60* **Onnom otomon**, *70* **Onnom obikitam**, *80* **Onnom otomoni uni**, *90* **Onnom artam**, *100* **Ip**, *1,000* **Ip tomon**.\n   - **Verbal Sentences (pp. 922–924)**: *I come* **Alotu**, *I come not* **Ma lotu**, *I go* **Aiṣomo**, *I eat* **Anosa**, *I drank* **Atogo**, *I give* **Aiṣo**, *I give you* **Aiṣo 'yé**, *I gave him* **Aiṣō elle**, *I bring* **Aiao**, *I kill them* **Atara ninje**, *We say* **Kedjo iyo**, *We sold not* **Etu gimirio**, *What do you say?* **Idja iye**, *Can you see me?* **Keñworeta nanu**, *He is taller than I* **Eado te nano**, *He steals* **Eburikho**, *He stinks* **Eñu**.",
    "examples": [
      {
        "ilchamus": "Onnom (50) • Onnom otomon (60) • Onnom obikitam (70) • Onnom otomoni uni (80) • Onnom artam (90) • Ip (100) • Ip tomon (1,000)",
        "english": "50, 60, 70, 80, 90, 100, 1,000 in Johnston's Set 2 Baringo/Ngishu Maa table",
        "explanation": "Sir Harry Johnston, The Uganda Protectorate, Vol. II (1902, p. 921)"
      },
      {
        "ilchamus": "Alotu / Ma lotu • Aiṣo 'yé / Aiṣō elle • Atara ninje • Etu gimirio • Keñworeta nanu • Eado te nano",
        "english": "I come / I come not • I give you / I gave him • I kill them • We sold not • Can you see me? • He is taller than I",
        "explanation": "Vocabulary Set 2 (Ngishu / Baringo Maa), Johnston (1902, pp. 922–924)"
      }
    ]
  },
  {
    "id": "ilchamus-beech-1911-enjemusi-engai-engop-launjali-law",
    "title": "Mervyn W. H. Beech (1911, pp. 4, 19 fn. 1, 27–37): En-jemusi Origin from Sambur Refugees, Worship of Sky-God En-Gai & Earth-God En-Gop, and Chief Launjali's Customary Law Code",
    "summary": "Complete line-by-line synthesis of all En-jemusi (Ilchamus / Njemps) historical, religious, and legal records in Mervyn W. H. Beech's The Suk: Their Language and Folklore (1911, pp. 4, 19 fn. 1, 27–37).",
    "content": "From Mervyn W. H. Beech (*The Suk: Their Language and Folklore*, Oxford: Clarendon Press, 1911, pp. 4, 19 fn. 1, 27–37):\n1. **Origin from Sambur Refugees & Suk–Turkana Raid (pp. 4–5)**:\n   - Beech records that when the Suk descended from the hills to **Tiati** and **Ka-ruwon** (6 miles W of **En-ginyañg**) and defeated the **Sambur**, the main body of the Sambur fled north-east while a smaller party fled south to Lake Baringo and became the **En-jemusi**. Around 50 years before 1911, the Suk and Turkana allied to raid the En-jemusi.\n2. **En-jemusi Cosmology: Sky-God *En-Gai* & Earth-God *En-Gop* (p. 19, fn. 1)**:\n   - In Footnote 1 on p. 19, Beech records that the **En-jemusi** believe in a **Sky-God (*En-Gai*)** and an **Earth-God (*En-Gop*)**, and hold the **Sun and Moon to be husband and wife**.\n3. **Chief Launjali's En-jemusi Customary Law Code (Chapter II, pp. 27–37)**:\n   - **Authority**: **Launjali**, chief and elder of En-jemusi (p. 27).\n   - **Homicide (p. 29)**: Blood-money is **10 to 20 cows** (for accidental homicide, 6 cows).\n   - **Theft (p. 32)**: Every thief must restore **3 times** the value of the stolen animal — so if **3 men join to steal 1 cow, each pays 3 cows (9 cows total)**.\n   - **Marriage & Divorce (p. 33)**: Bride-price is **6 goats**; a barren wife may be divorced and the bride-price reclaimed unless she has borne children.\n   - **Slander & Inheritance (pp. 34–36)**: Abusing an elder is fined **1 bullock** (eaten by the elders); property passes to the deceased's brothers and eldest son.",
    "examples": [
      {
        "ilchamus": "En-Gai (Sky-God) & En-Gop (Earth-God; Sun and Moon = husband and wife) • Chief Launjali • Homicide: 10–20 cows • Theft: 3× per thief (9 cows for 3 thieves stealing 1 cow) • Bride-price: 6 goats",
        "english": "En-jemusi religion and customary law recorded from Chief Launjali in Beech (1911)",
        "explanation": "Mervyn W. H. Beech, The Suk: Their Language and Folklore (1911, pp. 19 fn. 1, 27–37)"
      }
    ]
  }
];
