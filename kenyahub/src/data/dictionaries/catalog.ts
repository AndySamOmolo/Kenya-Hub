import type {
  DictEntry,
  DictCategory,
  Dictionary,
  DictCategoryMeta,
  DictMeta,
} from "./types";

export type { DictEntry, DictCategory, Dictionary, DictCategoryMeta, DictMeta };

// ============================================================
// Dictionary Metadata Catalog & Category Index (23 Languages)
// ============================================================

export const ALL_DICT_METAS: DictMeta[] = [
  {
    "languageId": "swahili",
    "languageName": "Swahili (Kiswahili)",
    "family": "bantu",
    "nativeName": "Kiswahili",
    "script": "Latin",
    "speakerCount": 15000000,
    "counties": [
      "Mombasa",
      "Lamu",
      "Kilifi",
      "Kwale",
      "Tana River"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917 \"English-Swahili Vocabulary\", SPCK London, pp. 1–56 [PDF pp. 1–72]), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022 \"The pragmatics of Swahili relative clauses\", in Galen Sibanda, Deo Ngonyani, Jonathan Choti & Ann Biersteker, eds., Descriptive and theoretical approaches to African linguistics: Selected papers from the 49th Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 13, pp. 227–246, DOI: 10.5281/zenodo.6393758 — 440 RCs from the 25M-word Helsinki Corpus of Swahili 2.0, Examples 1–32, Figure 1 & Tables 1–2), and John Goldsmith & Fidèle Mpiranya (2022). Also integrates Thilo Schadeberg's World Loanword Database (WOLD) Swahili Vocabulary (1,815 entries with Loanword Typology codes and Arabic/Persian/Hindi-Urdu/Bantu borrowing provenance, CC-BY-4.0), Tatu Ylönen's Kaikki.org / Wiktextract English Wiktionary Swahili Dictionary (20,625 word forms, CC-BY-SA-4.0), The Thiomi Dataset (80,214 Swahili–English pairs, CC-BY-4.0), Google SMOL (en_swh, CC-BY-4.0), Kencorpus KenSwQuAD & KenSpeech pronunciation lexicon (CC-BY-4.0), FLORES+ (CC-BY-SA-4.0), TICO-19 (CC0-1.0), and PolitiKweli (CC-BY-4.0).",
    "totalEntries": 53051,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 183
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 1510
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 1207
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 1514
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 1060
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 1883
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 1481
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 2480
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 4835
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 410
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 1498
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 658
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 1099
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 416
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 20713
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 12104
      }
    ],
    "source": "Kencorpus (KenCorpus_text, KenPOS, KenTrans, KenSwQuAD, KenSpeech Lexicon, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (CC-BY-4.0), LughaGen (CC-BY-SA-4.0), Common Voice 25.0 (CC0-1.0), CLDF WOLD & Tsammalex (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0), Language Science Press (2016/2019/2022, CC-BY-4.0) & Public Domain & Peer-Reviewed Linguistic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Steere 1870/1894/1918, Taylor 1891, Bateman 1901, Madan 1903/1917, Hinde 1904, Burt 1910, Stigand 1915, Beech 1918, Werner 1918/1919/1933, Johnston 1919, Ngonyani & Ngowa 2016, Mwamzandi 2022 & Goldsmith/Mpiranya 2022)",
    "isoCode": "swh",
    "glottocode": "swah1253"
  },
  {
    "languageId": "kikuyu",
    "languageName": "Kikuyu (Gĩkũyũ)",
    "family": "bantu",
    "nativeName": "Gĩkũyũ",
    "script": "Latin",
    "speakerCount": 8100000,
    "counties": [
      "Kiambu",
      "Murang'a",
      "Nyeri",
      "Kirinyaga",
      "Nyandarua"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\", Vol. I, Chs. V–VI, pp. 220–221, 234–236, 286–309 [361], 362–375), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery, C.S.Sp. (1903 \"English-Kikuyu Hand-Book\", Zanzibar—Nairobi: Roman Catholic Mission, pp. 1–87 [PDF pp. 1–92]), Hildegarde Hinde (1904 \"Vocabularies of the Kamba and Kikuyu Languages of East Africa\"), Rev. A. W. McGregor (1904 \"English-Kikuyu Vocabulary: Compiled for the Use of the C.M.S. Missions in East Africa\", C.M.S. / SPCK London, printed by Richard Clay & Sons, Limited, London and Bungay, Fort Smith / Kabeti 1901–1902, Preface dated London, May 1903, pp. [i]–iv, 5–192 [PDF pp. 1–201, Stanford University Libraries Copy PL 8379.4 .M3 C.1, Dr. & Mrs. Robert A. Rennie bookplate] — audited 100% line-by-line across all 7,094 Markdown lines, Front Matter & Stanford provenance, Preface on Fort Smith/Kabeti, Uganda Railway miles 326–360, Mount Kenia = Kirinyaga/Kilinyatha/Kireira [4,000–18,000 ft] & 200,000–300,000 population, R.G.S. Note on Th for S/Z, L/R interchangeability, ng' vs. ng'g, 9 Abbreviations, Observe A–B across 10 noun classes, suppletive kinship, 7-day relative time sequence, agricultural seasons Kathano, Kehu, Njahi, Mweri, Mohea, customary law Chira, Magambo, Konyua muma, Oramati, and all 3 printing gaps, 9 printer's errata & 30 edge-reconstructed pages), W. Scoresby & Katherine Routledge (1910 \"With a Prehistoric People: The Akikúyu of British East Africa\", Edward Arnold London, pp. i–xxxii, 1–392, Plates I–CXXXVI), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921). Also integrates Tsammalex Kikuyu Ethnobiology Lexicon (CC-BY-4.0), Kaikki.org / Wiktextract Kikuyu Dictionary (1,497 word forms, CC-BY-SA-4.0), Google Research SMOL & GATITOS (en_kik: 130 SmolDoc documents, 863 SmolSent sentences & 3,994 GATITOS lexical items, CC-BY-4.0), The Thiomi Dataset (102,294 approved Kikuyu–English sentences, CC-BY-4.0), CGIAR/KikuyuEnglish_translation (Vineet Singh 2024, Apache-2.0), and FLORES+ / SIB-200 (kik_Latn, CC-BY-SA-4.0 / CC-BY-4.0).",
    "totalEntries": 23028,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 117
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 1704
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 377
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 641
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 366
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 643
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 448
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 3154
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 1088
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 588
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 308
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 150
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 210
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 272
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 11660
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 1302
      }
    ],
    "source": "The Thiomi Dataset (CC-BY-4.0), Google SMOL/GATITOS (en_kik, CC-BY-4.0), African Next Voices Kenya (5 Gikuyu dialects, CC-BY-4.0), CGIAR Kikuyu–English (Apache-2.0), LughaGen (CC-BY-SA-4.0), Mich-Seth Owusu Emotion & Parallel Corpora (MIT/CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0) & Public Domain & Peer-Reviewed Lexicons (Höhnel 1894, Hémery 1903, Hinde 1904, McGregor 1904/1905, Routledge 1910, Hobley 1910/1922, Barlow 1914/1951, Dundas 1915, Werner 1915, Johnston 1919, Beech 1920 & Kencorpus/ANV 2022–2026)",
    "isoCode": "kik",
    "glottocode": "kiku1240"
  },
  {
    "languageId": "luo",
    "languageName": "Dholuo (Luo)",
    "family": "nilotic",
    "nativeName": "Dholuo",
    "script": "Latin",
    "speakerCount": 5800000,
    "counties": [
      "Kisumu",
      "Siaya",
      "Homa Bay",
      "Migori"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Dholuo (Luo / Kavirondo) vocabulary compiled from Rev. Charles New (1873 \"Life, Wanderings, and Labours in Eastern Africa\"), Rev. Thomas Wakefield & Robert Needham Cust (1883 \"A Sketch of the Modern Languages of Africa\", Vol. I, Ch. XI.D \"Nile Sub-Group\", pp. 273–287: XXI. Kavirondo on Victoria Nyanza pp. 284–285, Wakefield's MS Kavirondo Vocabulary from a Swahíli caravan traveller, and comparative proof of marked affinity with I. Shilluk/Dyur [Luoh/Lwo, Bellanda & Dembo] pp. 275–276, XVIII. Lúr [Luoh] pp. 282–283 & XX. Shúli [Gani/Shefalu] pp. 283–284), C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96 & 1903 \"Anthropological Studies in Kavirondo and Nandi\"), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 \"The Northern Bantu\", Ch. XXV & Kinship Table pp. 275–293), Some Fathers of St. Joseph's Society / Mill-Hill Fathers (1920–1921 \"A Handbook of the Kavirondo Language\"), and BFBS (1921). Also integrates Google Research SMOL & GATITOS (en_luo: 342 SmolDoc documents, 863 SmolSent sentences & 3,941 GATITOS lexical items, CC-BY-4.0), The Thiomi Dataset (101,367 approved Dholuo–English sentences, CC-BY-4.0), Kencorpus/KenPOS (54.7k UD POS-tagged Dholuo tokens) & KenTrans (4,222 Dholuo–Swahili pairs, CC-BY-4.0), ThinkKenya / Waleghwa (29,308 Dholuo–Swahili pairs, CC-BY-4.0), and FLORES+ / SIB-200 (luo_Latn, CC-BY-SA-4.0 / CC-BY-4.0).",
    "totalEntries": 14960,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 19
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 103
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 223
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 160
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 195
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 183
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 147
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 523
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 468
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 76
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 112
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 36
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 61
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 104
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 11954
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 596
      }
    ],
    "source": "Kencorpus Dholuo (KenCorpus_text, KenPOS, KenTrans, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (en_luo, CC-BY-4.0), LughaGen Dholuo (CC-BY-SA-4.0), ThinkKenya/Waleghwa & Common Voice 25.0 (CC-BY-4.0/CC0-1.0), African Next Voices Dholuo (CC-BY-4.0), Sunbird SALT (CC-BY-4.0), Code-170k-luo (CC-BY-4.0), SDTC (CC-BY-4.0), CLDF ASJP v20 (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902/1903, Johnston 1902, Northcote 1907, Roscoe & Willis 1915, Mill-Hill Fathers 1920 & BFBS 1921)",
    "isoCode": "luo",
    "glottocode": "luoo1235"
  },
  {
    "languageId": "kalenjin",
    "languageName": "Kalenjin",
    "family": "nilotic",
    "nativeName": "Kalenjin",
    "script": "Latin",
    "speakerCount": 6400000,
    "counties": [
      "Uasin Gishu",
      "Nandi",
      "Kericho",
      "Bomet",
      "Baringo",
      "Elgeyo-Marakwet",
      "Trans Nzoia",
      "West Pokot"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Kalenjin (Nandi / Kipsigis [Lumbwa / Il Kakesan] / Keiyo / Tugen [Kamasia: Kapteberewa & Nderois] / Marakwet & Endo [Chebleng] / Cherang'any / Kabkamat [Olmo] / Sangwirr / Uasin Gishu [Moiven / Muttia / Il-Mokwan / I-Sirikwa] / Sabaot / Pökoot / Ogiek) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda: An Ethnological Survey\" pp. 1–96, 1903 \"Anthropological Studies in Kavirondo and Nandi\", 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–72 — audited 100% line-by-line across all 13 Maragwetta/Ndo sections, 14 Kapteberewa & 6 Nderois Kamasia clans & totems, 5 hill-tribe calendars, irrigation & land-sale laws, and Plate XVII), Mervyn W. H. Beech (1911), BFBS (1921), Franz Rottland (1982), Chet A. Creider & Jane Tapsubei Creider (1983, 1989), Taaitta Toweett (1979), Angelika Mietzner (2016), Prisca Jerono (2018), Dinah Jepkorir Sitienei Jepkoech (2018), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), Maria Kouneli (2021), and Joost Zwarts, Andrew Chelimo & Prisca Jerono (2023, 2024 \"The reflexive in Kalenjin: Its syntactic status and semantic functions\", in Yaqian Huang, Nina Hagen Kaldhol, Jun Jie Lim, Sharon Rose & Anthony Struthers-Young, eds., ACAL in SoCAL: Selected papers from the 53rd Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 21, pp. 539–556, DOI: 10.5281/zenodo.11210482 — 1,815 Endo-Marakwet NT occurrences of keey, Examples 1–24, Footnotes 1–12, 5 Abbreviations & 17 References). Expanded and cross-verified with Commercially Permissive Datasets (ThinkKenya/Waleghwa Kalenjin (35,127 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kalenjin (CC0-1.0), Thiomi Kipsigis (CC-BY-4.0), African Next Voices Nandi & Kipsigis (CC-BY-4.0), Language Science Press Kipsigis & Endo-Marakwet Corpora (2019/2024, CC-BY-4.0), CLDF ASJP v20 (CC-BY-4.0)).",
    "totalEntries": 7817,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 19
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 220
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 350
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 428
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 484
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 379
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 337
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 436
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 359
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 246
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 410
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 70
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 179
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 152
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 945
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 2803
      }
    ],
    "source": "ThinkKenya/Waleghwa Kalenjin (35,127 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kalenjin (CC0-1.0), Thiomi Kipsigis (CC-BY-4.0), African Next Voices Nandi & Kipsigis (CC-BY-4.0), Language Science Press Kipsigis & Endo-Marakwet Corpora (2019/2024, CC-BY-4.0), CLDF ASJP v20 (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Hobley 1902–1910, Johnston 1902, Hollis 1909, Dundas 1910, Landman 2019, Diercks & Rao 2019 & Zwarts et al. 2024)",
    "isoCode": "kln",
    "glottocode": "kale1246"
  },
  {
    "languageId": "luhya",
    "languageName": "Luhya (Luyia)",
    "family": "bantu",
    "nativeName": "Oluluyia",
    "script": "Latin",
    "speakerCount": 6800000,
    "counties": [
      "Kakamega",
      "Bungoma",
      "Vihiga",
      "Busia"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Luhya (Oluluyia: Luwanga, Lubukusu, Lumasaba, Lulogooli) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902, 1919 #5–6a), Rev. J. B. Purvis (1907, 1909 \"Through Uganda to Mount Elgon\"), Rev. John Roscoe (1915 \"The Northern Bantu\"), BFBS (1921), Rev. N. Stam (1929 \"The Bahanga\"), and Payne, Pacchiarotti & Bosire eds. (2016 \"Diversity in African Languages\", Chs. 9, 11, 12, 15). Expanded and cross-verified with Commercially Permissive Datasets (Kencorpus Lumarachi, Logooli & Lubukusu (KenCorpus_text, KenPOS, KenTrans, KenLumachiQuAD, CC-BY-4.0), Project Tafsiri v2.0 (9 Luhya dialects, CC-BY-4.0), Language Science Press Logoori & Lubukusu Corpora (2016/2019, CC-BY-4.0), Marconi Lumasaba (CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0)). Also integrates commercially free text entries from Dr. Moody Amakobe's Project Tafsiri v2.0 (2025 \"mamakobe/luhya-multilingual-dataset\", CC-BY-4.0: 20,271 commercial-safe Dictionary, Conversational & Proverb entries across Bukusu, Wanga, Maragoli, Marachi, Kisa, Marama, Tsotso, Isukha & Nyala, including Michael Marlo, Adrian Sifuna & Aggrey Wasike 2008 Lubukusu-English Dictionary [~6,200 words], Alfred Anangwe 2008 Wanga-English Dictionary [~4,000 words], Kevin Namatsi Okubo 2016 Collection of 100 Nyala Proverbs, and Tim Wambunya Luyia Proverbs from Kisa, Marama, Tsotso and Wanga, strictly excluding Bible rows) and Kencorpus/KenPOS, KenTrans & KenLumachiQuAD (Wanjawa et al. 2022/2023, CC-BY-4.0).",
    "totalEntries": 7170,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 41
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 352
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 377
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 664
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 712
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 518
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 355
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 1390
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 594
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 214
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 237
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 61
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 129
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 154
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 626
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 746
      }
    ],
    "source": "Kencorpus Lumarachi, Logooli & Lubukusu (KenCorpus_text, KenPOS, KenTrans, KenLumachiQuAD, CC-BY-4.0), Project Tafsiri v2.0 (9 Luhya dialects, CC-BY-4.0), Language Science Press Logoori & Lubukusu Corpora (2016/2019, CC-BY-4.0), Marconi Lumasaba (CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Hobley 1902/1903, Johnston 1902/1919, Purvis 1909, Roscoe 1915, Stam 1929 & Payne et al. 2016)",
    "isoCode": "luy",
    "glottocode": "luyi1234"
  },
  {
    "languageId": "kamba",
    "languageName": "Kamba (Kĩkamba)",
    "family": "bantu",
    "nativeName": "Kĩkamba",
    "script": "Latin",
    "speakerCount": 4600000,
    "counties": [
      "Machakos",
      "Makueni",
      "Kitui"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Kamba (Kĩkamba) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), Sir Harry H. Johnston (1919 #12), Gerhard Lindblom (1920), BFBS (1921), and Patrick Jones & Jeremy Freyer (2019). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Kikamba (CC-BY-4.0), Kikamba First Corpus (CC-BY-4.0), LughaGen Kikamba (CC-BY-SA-4.0), Mich-Seth Owusu Kamba Emotions & Kamba–Kikuyu Parallel Corpora (MIT/CC-BY-4.0), Language Science Press Kikamba Tone Corpus (2019, CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 9752,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 21
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 131
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 269
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 379
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 370
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 314
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 226
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 1546
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 388
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 159
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 201
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 102
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 142
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 129
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 4063
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 1312
      }
    ],
    "source": "The Thiomi Dataset Kikamba (CC-BY-4.0), Kikamba First Corpus (CC-BY-4.0), LughaGen Kikamba (CC-BY-SA-4.0), Mich-Seth Owusu Kamba Emotions & Kamba–Kikuyu Parallel Corpora (MIT/CC-BY-4.0), Language Science Press Kikamba Tone Corpus (2019, CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0) & Public Domain & Peer-Reviewed Lexicons (Krapf 1850, Last 1885, Krapf, Rebmann & Sparshott 1887, Hinde 1904, Hobley 1910/1922, Dundas 1915, Johnston 1919, Lindblom 1920 & Jones/Freyer 2019)",
    "isoCode": "kam",
    "glottocode": "kamb1297"
  },
  {
    "languageId": "meru",
    "languageName": "Meru (Kĩmĩĩrũ)",
    "family": "bantu",
    "nativeName": "Kĩmĩĩrũ",
    "script": "Latin",
    "speakerCount": 2000000,
    "counties": [
      "Meru",
      "Tharaka-Nithi"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Meru (Kĩmĩĩrũ / Kĩtharaka / Kĩcuka / Kĩmwimbi) vocabulary compiled from C. W. Hobley (1910), Arthur M. Champion (1912 \"The Atharaka\"), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11–11a), Prof. Kithaka wa Mberia (2004 \"The Phonology of Borrowed Words in Kitharaka\"), and Unicode CLDR (mer.xml). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Kimeru (CC-BY-4.0), Sunbird AI SALT-31 Kimeru (CC-BY-4.0), Open-Access Kitharaka Phonology Corpus (wa Mberia), CLDF ASJP v20 THARAKA & BantuBVD (CC-BY-4.0), SIL Bloom CC-BY-4.0).",
    "totalEntries": 1664,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 47
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 76
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 133
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 79
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 63
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 113
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 31
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 30
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 22
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 21
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 28
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 557
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 361
      }
    ],
    "source": "The Thiomi Dataset Kimeru (CC-BY-4.0), Sunbird AI SALT-31 Kimeru (CC-BY-4.0), Open-Access Kitharaka Phonology Corpus (wa Mberia), CLDF ASJP v20 THARAKA & BantuBVD (CC-BY-4.0), SIL Bloom CC-BY-4.0 & Public Domain & Peer-Reviewed Linguistic Lexicons (Hobley 1910, Champion 1912, Dundas 1915, Johnston 1919, Mberia 2004 & Unicode CLDR mer.xml)",
    "isoCode": "mer",
    "glottocode": "meru1245"
  },
  {
    "languageId": "maasai",
    "languageName": "Maasai (Maa)",
    "family": "nilotic",
    "nativeName": "ɔl Maa",
    "script": "Latin",
    "speakerCount": 1200000,
    "counties": [
      "Narok",
      "Kajiado",
      "Samburu"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Rev. Dr. J. L. Krapf (1854 \"Vocabulary of the Engútuk Eloikób, or the Language of the Khwáfi Tribe in East Africa\", Tübingen), Rev. J. Erhardt & Dr. L. Krapf (1857 \"Vocabulary of the Enguduk Iloigob\", Württemberg), Ven. J. P. Farler & Rev. T. Wakefield (1882), Robert Needham Cust (1883 \"A Sketch of the Modern Languages of Africa\", Vol. I, Ch. X.A.V–VI \"Kwáfi\" & \"Masai\", pp. 149–152: autonyms Loikób/Eloikób \"Men\", J. T. Last's 6,000-word Humba vocabulary at Mamboia, Arúsha & Ndorobo \"Helot Races\", Joseph Thomson's 1883 RGS expedition supplied by Cust, and Lepsius's 1880 6 structural features), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901 \"The Masai Language: Grammatical Notes Together with a Vocabulary\", Cambridge University Press, pp. i–xii, 1–75 [PDF pp. 1–98]), Sir Harry H. Johnston (1902), A. C. Hollis (1905 \"The Masai: Their Language and Folklore\", Oxford: Clarendon Press, pp. i–xxviii, 1–359), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–57), C. W. Hobley (1910, 1922), W. Scoresby & Katherine Routledge (1910, Appendix II pp. 344–349 & Plate CXXXVI), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Maa (CC-BY-4.0), African Next Voices Kenya Kimasaai (CC-BY-4.0), CLDF ASJP v20 MAASAI & Tsammalex (CC-BY-4.0), SIL Bloom Maa CC-BY-4.0).",
    "totalEntries": 3623,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 13
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 92
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 210
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 192
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 260
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 168
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 135
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 216
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 204
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 110
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 41
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 20
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 62
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 74
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 1162
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 664
      }
    ],
    "source": "The Thiomi Dataset Maa (CC-BY-4.0), African Next Voices Kenya Kimasaai (CC-BY-4.0), CLDF ASJP v20 MAASAI & Tsammalex (CC-BY-4.0), SIL Bloom Maa CC-BY-4.0 & Public Domain Historical Lexicons (Farler 1882, Cust 1883, Höhnel 1894, Hinde 1901, Johnston 1902, Hollis 1905, Dundas 1910, Hobley 1910/1922, Routledge 1910 & BFBS 1921)",
    "isoCode": "mas",
    "glottocode": "masa1300"
  },
  {
    "languageId": "kisii",
    "languageName": "Kisii (Ekegusii)",
    "family": "bantu",
    "nativeName": "Ekegusii",
    "script": "Latin",
    "speakerCount": 2700000,
    "counties": [
      "Kisii",
      "Nyamira"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Kisii (Ekegusii) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda\") and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\", 1919–1922 \"A Comparative Study of the Bantu and Semi-Bantu Languages\" #7 Ki-guzii & #7a Ki-koria). Expanded and cross-verified with Commercially Permissive Datasets (DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 1634,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 150
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 121
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 221
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 190
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 139
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 86
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 136
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 60
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 34
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 35
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 14
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 22
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 40
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 112
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 264
      }
    ],
    "source": "DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902 & Johnston 1902, 1919–1922)",
    "isoCode": "guz",
    "glottocode": "gusi1247"
  },
  {
    "languageId": "somali",
    "languageName": "Somali",
    "family": "cushitic",
    "nativeName": "Af-Soomaali",
    "script": "Latin",
    "speakerCount": 2400000,
    "counties": [
      "Garissa",
      "Wajir",
      "Mandera",
      "Isiolo"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from Robert Needham Cust (1883 \"A Sketch of the Modern Languages of Africa\", Vol. I, Ch. IX.C.I \"Somáli\", pp. 119, 121: Reinisch's First Hamitic Cluster [Bishári, Saho, Dankálí, Somáli, Galla], Regio Aromatifera from Bab el Mandal & Cape Guardafui to the Bantu frontier, Rigby 1850/1866, Burton 1856, Hunter 1880, Van der Decken, Prætorius, Revoil & Krapf), Rev. Fr. Evangelist de Larajasse (1897 \"Somali-English and English-Somali Dictionary\", Kegan Paul, Trench, Trübner & Co., London — audited 100% line-by-line across Front Matter, Preface pp. v–xiii, 44 Abbreviations, 20-row Kenya Reference Table [Swahili sawaheli/sawahili, Ogaden & Darod dialect wa debai, Galla daba galla, East African antelopes si‘g, garanug/lig, adéryo/adéryo ‘ari/godir, b‘e‘id/bi‘‘id, sagaro/sakaro, and rubiad/rubod/rubi currency], and Full Two-Column Page Transcriptions of Book pp. 26, 123, 127, 242, 266 & 293), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects\" — audited 100% line-by-line across §§ 1–289, Appendices I–III, Prose Stories I–XI, Songs I–XIV, and Yibir/Midgan Vocabularies), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Somali (CC-BY-4.0), Google SMOL/GATITOS (en_som, CC-BY-4.0), African Next Voices Maxatire Somali (CC-BY-4.0), DDD Kenyan Somali (CC-BY-4.0), Language Science Press Somali & Marka Corpora (2016/2019, CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org Somali (CC-BY-SA-4.0)).",
    "totalEntries": 12852,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 17
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 146
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 217
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 242
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 297
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 160
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 122
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 510
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 223
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 134
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 157
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 42
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 36
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 154
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 9599
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 796
      }
    ],
    "source": "The Thiomi Dataset Somali (CC-BY-4.0), Google SMOL/GATITOS (en_som, CC-BY-4.0), African Next Voices Maxatire Somali (CC-BY-4.0), DDD Kenyan Somali (CC-BY-4.0), Language Science Press Somali & Marka Corpora (2016/2019, CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org Somali (CC-BY-SA-4.0) & Public Domain & Peer-Reviewed Lexicons (de Larajasse 1897, Johnston 1902, Kirk 1903/1905, Nilsson 2016 & Kimper et al. 2019)",
    "isoCode": "som",
    "glottocode": "soma1255"
  },
  {
    "languageId": "turkana",
    "languageName": "Turkana",
    "family": "nilotic",
    "nativeName": "Ng'aturukana",
    "script": "Latin",
    "speakerCount": 1100000,
    "counties": [
      "Turkana"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Turkana (Ng'aturkana) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\", Ch. XIII), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 66–70, Plates XVI–XVII — audited 100% line-by-line across 16 principal tribes, 19 Ngoitunya/Ngolio attegir clans, 6 life stages, asavanissia ages, Nessegonn bush, marriage & slaughter customs, Agipie & nether-world god, and 12-month Nakiborror/Nakamou/Nait calendar), Mervyn W. H. Beech (1911), and Juxon Barton (1921). Expanded and cross-verified with Commercially Permissive Datasets (Sunbird AI SALT & SALT-31 Ng'aturkana (CC-BY-4.0), CLDF ASJP v20 TURKANA (Best 1983 / Brown, CC-BY-4.0), SIL Bloom Ng'aturkana CC-BY-4.0).",
    "totalEntries": 3232,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 34
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 205
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 269
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 329
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 253
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 115
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 227
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 298
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 175
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 28
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 13
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 60
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 105
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 904
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 205
      }
    ],
    "source": "Sunbird AI SALT & SALT-31 Ng'aturkana (CC-BY-4.0), CLDF ASJP v20 TURKANA (Best 1983 / Brown, CC-BY-4.0), SIL Bloom Ng'aturkana CC-BY-4.0 & Public Domain Historical Lexicons (Höhnel 1894, Johnston 1902, Purvis 1909, Dundas 1910, Beech 1911 & Juxon Barton 1921)",
    "isoCode": "tuv",
    "glottocode": "turk1308"
  },
  {
    "languageId": "mijikenda",
    "languageName": "Mijikenda (Giriama)",
    "family": "bantu",
    "nativeName": "Kigiriama",
    "script": "Latin",
    "speakerCount": 2500000,
    "counties": [
      "Kilifi",
      "Kwale",
      "Mombasa"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Mijikenda (Kigiryama, Chidigo, Chiduruma, Kirabai) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #16), BFBS (1921), and Steve Nicolle (2016). Expanded and cross-verified with Commercially Permissive Datasets (Lingua-Connect English–Giriama Dataset (CC-BY-4.0), Language Science Press Digo/Mijikenda Corpus (Nicolle 2016, CC-BY-4.0), CLDF ASJP v20 GIRYAMA/DIGO & BantuBVD (CC-BY-4.0), SIL Bloom Mijikenda CC-BY-4.0). Also integrates the curated agricultural and rural extension sentence corpus (~600 English ↔ Kigiryama farming sentence pairs, excluding Bible rows) from Lingua-Connect/English-Giriama-Dataset (2025, CC-BY-4.0).",
    "totalEntries": 18200,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 31
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 374
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 377
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 471
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 442
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 605
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 463
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 2788
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 1382
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 203
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 458
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 129
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 242
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 107
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 5865
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 4263
      }
    ],
    "source": "Lingua-Connect English–Giriama Dataset (CC-BY-4.0), Language Science Press Digo/Mijikenda Corpus (Nicolle 2016, CC-BY-4.0), CLDF ASJP v20 GIRYAMA/DIGO & BantuBVD (CC-BY-4.0), SIL Bloom Mijikenda CC-BY-4.0 & Public Domain & Academic Lexicons (Krapf 1850/1882, Krapf, Rebmann & Sparshott 1887, Taylor 1891, Werner 1915, Johnston 1919, BFBS 1921 & Nicolle 2016)",
    "isoCode": "nyf",
    "glottocode": "miji1238"
  },
  {
    "languageId": "teso",
    "languageName": "Teso (Ateso)",
    "family": "nilotic",
    "nativeName": "Ateso",
    "script": "Latin",
    "speakerCount": 468000,
    "counties": [
      "Busia"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Teso (Ateso / Elgumi) vocabulary compiled from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\"), Archdeacon A. L. Kitching (1915 \"A Handbook of the Ateso Language\"), Rev. John Roscoe (1915 \"The Northern Bantu\", Part V \"The Bateso\" & Kinship Table pp. 257–293), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (Sunbird AI SALT & SALT-31 Ateso (CC-BY-4.0), CLDF ASJP v20 TESO (Vossen 1982, CC-BY-4.0), Language Science Press Eastern Nilotic Corpus (2016, CC-BY-4.0)). Also integrates Sunbird AI SALT (25,000 English ↔ Ateso [teo] ↔ Swahili parallel sentences, CC-BY-SA-4.0 / CC-BY-4.0) and SALT-31 (multi-turn Ateso discourse dialogues).",
    "totalEntries": 713,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 9
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 28
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 49
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 58
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 59
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 46
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 35
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 20
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 57
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 17
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 8
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 6
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 11
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 24
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 109
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 177
      }
    ],
    "source": "Sunbird AI SALT & SALT-31 Ateso (CC-BY-4.0), CLDF ASJP v20 TESO (Vossen 1982, CC-BY-4.0), Language Science Press Eastern Nilotic Corpus (2016, CC-BY-4.0) & Public Domain Historical Lexicons (Hobley 1902, Johnston 1902, Purvis 1909, Kitching 1915, Roscoe 1915 & BFBS 1921)",
    "isoCode": "teo",
    "glottocode": "teso1247"
  },
  {
    "languageId": "embu",
    "languageName": "Embu (Kĩembu)",
    "family": "bantu",
    "nativeName": "Kĩembu",
    "script": "Latin",
    "speakerCount": 580000,
    "counties": [
      "Embu"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Embu & Mbeere (Kĩembu / Kĩmbeere) vocabulary compiled from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11), and Unicode CLDR (ebu.xml). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 EMBU & BantuBVD (CC-BY-4.0), Unicode CLDR ebu (MIT/Unicode), SIL Bloom Kiembu CC-BY-4.0).",
    "totalEntries": 947,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 42
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 70
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 104
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 86
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 116
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 47
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 32
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 59
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 16
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 9
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 16
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 36
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 197
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 95
      }
    ],
    "source": "CLDF ASJP v20 EMBU & BantuBVD (CC-BY-4.0), Unicode CLDR ebu (MIT/Unicode), SIL Bloom Kiembu CC-BY-4.0 & Public Domain Historical Lexicons (Hobley 1910/1922, Dundas 1915, Johnston 1919 & CLDR ebu.xml)",
    "isoCode": "ebu",
    "glottocode": "embu1242"
  },
  {
    "languageId": "taita",
    "languageName": "Taita (Kidawida)",
    "family": "bantu",
    "nativeName": "Kidaw'ida / Kisagala",
    "script": "Latin",
    "speakerCount": 410000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Taita (Kidawida / Kisagala / Kikasigau) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Rev. A. Downes Shaw (1885), Rev. W. E. Taylor (1891), Rev. J. Alfred Wray (1894 \"An Elementary Introduction to the Taita Language, Eastern Equatorial Africa: Sagalla Dialect\", SPCK London), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #14), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (ThinkKenya/Waleghwa Kidaw'ida Parallel Corpus (26,662 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kidaw'ida (CC0-1.0), CLDF ASJP v20 TAITA & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 7598,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 22
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 203
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 219
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 316
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 278
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 357
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 297
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 556
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 514
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 151
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 188
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 56
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 161
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 92
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 1324
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 2864
      }
    ],
    "source": "ThinkKenya/Waleghwa Kidaw'ida Parallel Corpus (26,662 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kidaw'ida (CC0-1.0), CLDF ASJP v20 TAITA & BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Krapf 1850, Shaw 1885, Taylor 1891, Wray 1894, Werner 1915, Johnston 1919 & BFBS 1921)",
    "isoCode": "dav",
    "glottocode": "tait1250"
  },
  {
    "languageId": "taveta",
    "languageName": "Taveta (Kitaveta)",
    "family": "bantu",
    "nativeName": "Kitaveta / Kituweta",
    "script": "Latin",
    "speakerCount": 25000,
    "counties": [
      "Taita-Taveta"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Taveta (Kitaveta / Kituweta) vocabulary compiled from Rev. A. R. Steggall (1892–1906), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), A. C. Hollis (1910–1911), Sir Harry H. Johnston (1919 #15), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 TAVETA, TAVETA_2 & TAVETA_3 (CC-BY-4.0), CLDF BantuBVD (CC-BY-4.0)).",
    "totalEntries": 727,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 44
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 57
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 101
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 63
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 42
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 55
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 64
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 33
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 29
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 8
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 13
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 16
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 52
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 64
      }
    ],
    "source": "CLDF ASJP v20 TAVETA, TAVETA_2 & TAVETA_3 (CC-BY-4.0), CLDF BantuBVD (CC-BY-4.0) & Public Domain Historical Lexicons (Steggall 1892–1906, Höhnel 1894, Hollis 1910–1911, Johnston 1919 & BFBS 1921)",
    "isoCode": "tvs",
    "glottocode": "tave1238"
  },
  {
    "languageId": "pokomo",
    "languageName": "Pokomo (Kipfokomo)",
    "family": "bantu",
    "nativeName": "Kipfokomo",
    "script": "Latin",
    "speakerCount": 120000,
    "counties": [
      "Tana River"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Pokomo (Kipfokomo / Kipokomo: Malachini [Kalindi, Buu, Yunda/Dzunza, Ngatana, Kulesa, Mwina] & Upper Pokomo [Ndera, Gwano, Kinakomba, Ndura, Zubaki, Malalulu]) dictionary compiled from Rev. Dr. J. L. Krapf (1850 \"Vocabulary of Six East-African Languages\"), Ferdinand Würtz (1895 \"Wörterbuch des Ki-Tikuu und des Ki-Pokomo\", 1896 \"Grammatik des Pokomo\"), Prof. Alice Werner (1913, 1915 \"The Bantu Coast Tribes of the East Africa Protectorate\", 1933 \"Myths and Legends of the Bantu\"), Sir Harry H. Johnston (1919–1922 #13 Pωkωmω), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 \"A History of the Pokomo by Mikael Samson — Continued, with an Introduction and Notes by R. G. Darroch\", Journal of the East Africa Natural History Society, Vol. XVII, Nos. 5 & 6 [79–80], pp. 370–394 & Full-Page Sketch Map — audited 100% line-by-line across all 14 map sections, Kalindi & Buu histories, the verbatim 8-line Chikovu lament song on p. 385, all 6 Upper Pokomo tribes and their Bantu/Oromo clan tables, the Abamogo greeting, Jilo Bune's war, Kirungu & Kadada battles, Ngaji/Kijo, Waganga, Muunguni, Missions 1884–1887, 1895 Government arrival & Notes 1–13). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 UPPER_POKOMO & BantuBVD (CC-BY-4.0), Language Science Press Northern Swahili/Pokomo Contact Corpus (Nurse 2019, CC-BY-4.0), SIL Bloom Kipokomo CC-BY-4.0).",
    "totalEntries": 3087,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 14
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 63
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 81
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 186
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 104
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 160
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 71
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 1188
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 223
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 76
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 83
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 39
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 56
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 46
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 229
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 468
      }
    ],
    "source": "CLDF ASJP v20 UPPER_POKOMO & BantuBVD (CC-BY-4.0), Language Science Press Northern Swahili/Pokomo Contact Corpus (Nurse 2019, CC-BY-4.0), SIL Bloom Kipokomo CC-BY-4.0 & Public Domain Historical Lexicons (Krapf 1850, Würtz 1895, Werner 1915/1933, Johnston 1919, BFBS 1921 & Mikael Samson 1944)",
    "isoCode": "pkb",
    "glottocode": "poko1261"
  },
  {
    "languageId": "borana",
    "languageName": "Borana (Oromo)",
    "family": "cushitic",
    "nativeName": "Afaan Borana / Afaan Oromoo",
    "script": "Latin",
    "speakerCount": 550000,
    "counties": [
      "Marsabit",
      "Isiolo",
      "Moyale",
      "Tana River (Orma)",
      "Garissa"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 \"An Imperfect Outline of the Elements of the Galla Language\", London: CMS / L. & G. Seeley / Richard Watts, pp. [i]–xiv, [1]–16 [Bodleian Library copy] — audited 100% line-by-line across Isenberg's Preface on the 50 Galla tribes, Queen Tshāmê of Moolofallada, Anko-ber, Wāk & Kalitshas, goat-intestine haruspicy, pit-and-lance oaths, 100-cattle homicide law, vegetating grave-wood, sacred tree Wodanābè on the Hawāsh in Soddo, informants Berkiè of Gelān, Aito Berkiè of Adaī & Aito Meretch on the Tchātchā, and Krapf's Sections I–XI covering pronouns, Gofta declension, 17 adverb classes, prepositions/conjunctions/interjections, Active/Passive/Causative [-sisse]/Negative verbs, cardinals & -fa ordinals, Small Syntax, and all 31 conversational expressions & sentences; 1842 \"Vocabulary of the Galla Language\" pp. i–ii, 1–42, Colophon p. [43]; 1850 \"Vocabulary of Six East-African Languages\" pp. i–x, 1–64), Charles & Lawrence Tutschek (1844 \"Dictionary of the Galla Language / Lexicon der Galla Sprache\" Part I pp. I–LIX, 1–205; 1845 Part II pp. 1–126 & \"A Grammar of the Galla Language\" pp. I–VIII, 1–107, with Akafed'e Dalle of Hambo, Otshu Aga of Sibu, Bilile of Guma, Aman Gonda of Goma, and Duke Paul William of Württemberg), Robert Needham Cust (1883 \"A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map\", Vol. I, London: Trübner & Co., pp. [i]–xvi, 1–287 [PDF pp. 1–340] — audited 100% line-by-line across Portrait Plates I–VI [31 portraits], Chs. I–XI, and Ch. IX.C.II \"Galla or Orómo\" pp. 122–125: 5–6 million speakers from 10° N to the Dana/Tana River mouth near Mombása, Huma royal dynasty of Uganda/Unyoro/Karagwe, 5 Chief Dialects incl. the Equatorial/Tana River dialect studied by Wakefield at Ribé & Krapf 1850, Charles New's Wata \"Helot Races\", Cust's hand-copied MS of Krapf's 1840 Elements sent to Wakefield at Ribé, Newman, Bleek, Massaia, Tutschek, Enaréa & Lango/Kidi), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), Mikael Samson & R. G. Darroch (1944, pp. 370–394), and Catherine Griefenow-Mewis (1996). Expanded and cross-verified with Commercially Permissive Datasets (Google Research SMOL/GATITOS Oromo/Borana (en_orm, CC-BY-4.0), Kaikki.org Oromo Machine-Readable Dictionary (1,245 headwords, CC-BY-SA-4.0), CLDF ASJP v20 BORANA_OROMO & WAATA (CC-BY-4.0), OLDI FLORES+ & SIB-200 (CC-BY-SA-4.0)).",
    "totalEntries": 26441,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 74
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 422
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 359
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 561
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 582
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 633
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 429
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 2205
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 1359
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 280
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 407
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 139
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 313
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 142
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 13749
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 4787
      }
    ],
    "source": "Google Research SMOL/GATITOS Oromo/Borana (en_orm, CC-BY-4.0), Kaikki.org Oromo Machine-Readable Dictionary (1,245 headwords, CC-BY-SA-4.0), CLDF ASJP v20 BORANA_OROMO & WAATA (CC-BY-4.0), OLDI FLORES+ & SIB-200 (CC-BY-SA-4.0) & Public Domain & Academic Lexicons (Krapf 1840, 1842, 1850, Tutschek 1844–1845 [Part I Galla–English–German & Part II English–Galla & Grammar], Foot 1913, BFBS 1921 & Griefenow-Mewis 1996)",
    "isoCode": "gax",
    "glottocode": "bora1271"
  },
  {
    "languageId": "rendille",
    "languageName": "Rendille (Afi Ren'dille)",
    "family": "cushitic",
    "nativeName": "Afi Ren'dille",
    "script": "Latin",
    "speakerCount": 96000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Rendille (Af-Rendille) vocabulary compiled from Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 51, 66), C. W. Hobley (1910 \"Ethnology of A-Kamba and Other East African Tribes\"), Harold C. Fleming (1964), and Bernd Heine (1976). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 RENDILLE & RENDILLE_2 (Bender 1971 / Wichmann et al., CC-BY-4.0), East Cushitic Comparative Lexicon (Blažek 2011 / Sasse 1979), SIL Bloom Rendille CC-BY-4.0).",
    "totalEntries": 297,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 9
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 16
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 20
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 36
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 27
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 32
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 15
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 11
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 33
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 9
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 6
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 8
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 16
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 7
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 37
      }
    ],
    "source": "CLDF ASJP v20 RENDILLE & RENDILLE_2 (Bender 1971 / Wichmann et al., CC-BY-4.0), East Cushitic Comparative Lexicon (Blažek 2011 / Sasse 1979), SIL Bloom Rendille CC-BY-4.0 & Public Domain & Academic Lexicons (Wakefield 1882, Höhnel 1894, Dundas 1910, Hobley 1910, Fleming 1964 & Heine 1976)",
    "isoCode": "rel",
    "glottocode": "rend1243"
  },
  {
    "languageId": "samburu",
    "languageName": "Samburu (Sampur)",
    "family": "nilotic",
    "nativeName": "Sampur / ɔl Maa",
    "script": "Latin",
    "speakerCount": 310000,
    "counties": [
      "Samburu",
      "Marsabit",
      "Isiolo",
      "Laikipia"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Samburu (Sampur / Northern Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55), C. W. Hobley (1910), and Rainer Vossen (1982). Expanded and cross-verified with Commercially Permissive Datasets (African Next Voices Kenya Kisamburu Dialect Corpus (MCAA1-MSU/anv_data_ke, CC-BY-4.0), CLDF ASJP v20 Maa-Samburu (CC-BY-4.0), SIL Bloom Samburu CC-BY-4.0).",
    "totalEntries": 803,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 25
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 22
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 46
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 52
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 18
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 10
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 81
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 51
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 7
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 6
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 6
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 35
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 20
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 334
      }
    ],
    "source": "African Next Voices Kenya Kisamburu Dialect Corpus (MCAA1-MSU/anv_data_ke, CC-BY-4.0), CLDF ASJP v20 Maa-Samburu (CC-BY-4.0), SIL Bloom Samburu CC-BY-4.0 & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Hobley 1910 & Vossen 1982)",
    "isoCode": "saq",
    "glottocode": "samb1315"
  },
  {
    "languageId": "ilchamus",
    "languageName": "Ilchamus (Njemps)",
    "family": "nilotic",
    "nativeName": "Ilchamus / Camus",
    "script": "Latin",
    "speakerCount": 35000,
    "counties": [
      "Baringo"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Ilchamus (Njemps / Njamus / Nyarusi / En-jemusi) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55 — audited 100% line-by-line across all 3 settlements, 16 clans from 6 tribes, irrigation ditch & crop-medicine ceremonies, and 12-month Lare/Ngolong calendar), Mervyn W. H. Beech (1911), and Bernd Heine (1980). Expanded and cross-verified with Commercially Permissive Datasets (African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0)).",
    "totalEntries": 463,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 21
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 18
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 35
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 47
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 50
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 18
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 9
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 80
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 50
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 6
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 6
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 6
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 19
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 19
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 71
      }
    ],
    "source": "African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0) & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911 & Heine 1980)",
    "isoCode": "saq-ilc",
    "glottocode": "samp1246"
  },
  {
    "languageId": "pokot",
    "languageName": "Pokot (Pökoot)",
    "family": "nilotic",
    "nativeName": "Pökoot / Kimukon",
    "script": "Latin",
    "speakerCount": 783000,
    "counties": [
      "West Pokot",
      "Baringo"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Pokot (Pökoot / Suk / Bawgott) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 56–65, 72, Plates XV–XVII — audited 100% line-by-line across 11 geographical divisions, 5 pastoral divisions, 3 Kasauria migrations, 11 Hill Suk sections, 24 orten clans & totems, Ellap/Ellat, Mt. Alongol & Kerial religion, verbatim sick prayer, and 12-month Kamei/Bengat calendar), Mervyn W. H. Beech (1911 \"The Suk: Their Language and Folklore\"), and Juxon Barton (1921). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 POKOT (Crazzolara 1978 / Wichmann et al., CC-BY-4.0), SIL Bloom Pökoot CC-BY-4.0).",
    "totalEntries": 5539,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 13
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 97
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 321
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 364
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 464
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 340
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 205
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 248
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 962
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 234
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 69
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 25
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 90
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 88
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 1779
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 240
      }
    ],
    "source": "CLDF ASJP v20 POKOT (Crazzolara 1978 / Wichmann et al., CC-BY-4.0), SIL Bloom Pökoot CC-BY-4.0 & Public Domain Historical Lexicons (Farler 1882, Johnston 1902, Dundas 1910, Beech 1911 & Barton 1921)",
    "isoCode": "pko",
    "glottocode": "poko1263"
  },
  {
    "languageId": "daasanach",
    "languageName": "Daasanach (Dhaasanac)",
    "family": "cushitic",
    "nativeName": "'Af Dhaasanac (d’áasannæc)",
    "script": "Latin",
    "speakerCount": 65000,
    "counties": [
      "Marsabit"
    ],
    "hasAudio": true,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-18",
    "contributorNote": "Daasanach ('Af Dhaasanac / d’áasannæc / Dasanech / Dasenech / Galab / Geleba / Reshiat) Lowland East Cushitic (Western Omo-Tana / Galaboid) dictionary compiled manually and audited 100% line-by-line from Václav Blažek (2011) 'Dasanech Language – State-of-the-Art' (Folia Orientalia, Vol. 48, 2011, Masaryk University, Brno, reviewing Mauro Tosco 2001 'The Dhaasanac Language. Grammar, Texts, Vocabulary of a Cushitic Language of Ethiopia', Kuschitische Sprachstudien Band 17, Rüdiger Köppe Verlag, Köln, xiv + 598 pp. + 20 photos, ISBN 3-89645-064-6, and comparing Gabriele da Trento 1941 [60 units], Eike Haberland 1966 [91], Harold C. Fleming 1965 [102] & 1971 [146], M. Lionel Bender 1971 [97], Hans-Jürgen Sasse 1973–1982 [ca. 11 studies], and Mauro Tosco 2001 [c. 1,400 units] across 101 Swadesh glosses, 48 Abbreviations & 50 References), Sumiyo Nishiguchi (2004) 'Consonant Assimilation and Sonority : A Case Study in Daasanach' (OUPEL: Osaka University Papers in English Linguistics, Vol. 9, pp. 39–51, Osaka University Knowledge Archive [OUKA], DOI: 10.18910/70792 — fieldwork carried out in New York State from September 2004 to May 2005 with a native Daasanach speaker from Kenya; audited 100% line-by-line across Sections 1–5, Examples 1–34, Tableaux 1–4, Footnotes 1–9, and all 13 References), and Lieut. Ludwig von Höhnel (1894) 'Discovery of Lakes Rudolf and Stefanie' (Reshiat / Buma / Marle on the northeastern shore of Lake Turkana). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 DAASANACH (Black 1974 / Wichmann et al., CC-BY-4.0), OUKA Daasanach Phonology & Morphology Corpus (Nishiguchi 2004, DOI:10.18910/70792), Dasanech Lexical Corpus (Tosco 2001 / Blažek 2011), SIL Bloom Daasanach CC-BY-4.0).",
    "totalEntries": 878,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "Hand",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "Hash",
        "count": 59
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "Users",
        "count": 37
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "Heart",
        "count": 150
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "PawPrint",
        "count": 65
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "Leaf",
        "count": 136
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "Utensils",
        "count": 41
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "Home",
        "count": 32
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "Activity",
        "count": 104
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "Sparkles",
        "count": 56
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "Compass",
        "count": 33
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "ShoppingCart",
        "count": 6
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "Siren",
        "count": 13
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 11
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "MessageCircle",
        "count": 22
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "BookOpen",
        "count": 106
      }
    ],
    "source": "CLDF ASJP v20 DAASANACH (Black 1974 / Wichmann et al., CC-BY-4.0), OUKA Daasanach Phonology & Morphology Corpus (Nishiguchi 2004, DOI:10.18910/70792), Dasanech Lexical Corpus (Tosco 2001 / Blažek 2011), SIL Bloom Daasanach CC-BY-4.0 & Public Domain Historical Lexicons",
    "isoCode": "dsh",
    "glottocode": "daas1238"
  }
];

export const DICT_META_MAP: Record<string, DictMeta> = Object.fromEntries(
  ALL_DICT_METAS.map((m) => [m.languageId, m])
);

export const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [
  {
    "id": "greetings",
    "name": "Greetings & Farewells",
    "icon": "Hand"
  },
  {
    "id": "numbers",
    "name": "Numbers & Counting",
    "icon": "Hash"
  },
  {
    "id": "family",
    "name": "Family, People & Kinship",
    "icon": "Users"
  },
  {
    "id": "body",
    "name": "Body Parts & Health",
    "icon": "Heart"
  },
  {
    "id": "animals",
    "name": "Animals, Livestock & Wildlife",
    "icon": "PawPrint"
  },
  {
    "id": "nature",
    "name": "Nature, Environment & Geography",
    "icon": "Leaf"
  },
  {
    "id": "food",
    "name": "Food, Drink & Agriculture",
    "icon": "Utensils"
  },
  {
    "id": "home",
    "name": "Home, Tools & Material Culture",
    "icon": "Home"
  },
  {
    "id": "verbs",
    "name": "Core Verbs & Actions",
    "icon": "Activity"
  },
  {
    "id": "adjectives",
    "name": "Adjectives, Qualities & Grammar",
    "icon": "Sparkles"
  },
  {
    "id": "travel",
    "name": "Travel, Directions & Navigation",
    "icon": "Compass"
  },
  {
    "id": "shopping",
    "name": "Trade, Money & Measures",
    "icon": "ShoppingCart"
  },
  {
    "id": "emergency",
    "name": "Health, Safety, Law & Conflict",
    "icon": "Siren"
  },
  {
    "id": "time",
    "name": "Time, Seasons & Calendar",
    "icon": "Clock"
  },
  {
    "id": "phrases",
    "name": "Common Expressions & Vocabulary",
    "icon": "MessageCircle"
  },
  {
    "id": "culture-history",
    "name": "Culture, Clans & Historical Corpus",
    "icon": "BookOpen"
  }
];

export const TOTAL_DICTIONARY_ENTRIES: number = 208776;
