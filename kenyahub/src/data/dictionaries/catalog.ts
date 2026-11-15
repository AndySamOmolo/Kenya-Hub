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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917 \"English-Swahili Vocabulary\", SPCK London, pp. 1–56 [PDF pp. 1–72]), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022), and John Goldsmith & Fidèle Mpiranya (2022). Expanded and cross-verified with Commercially Permissive Datasets (Kencorpus (KenCorpus_text, KenPOS, KenTrans, KenSwQuAD, KenSpeech Lexicon, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (CC-BY-4.0), LughaGen (CC-BY-SA-4.0), Common Voice 25.0 (CC0-1.0), CLDF WOLD & Tsammalex (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0), Language Science Press (2016/2019/2022, CC-BY-4.0)).",
    "totalEntries": 32056,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 76
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 237
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 512
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 623
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 477
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 1105
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 1418
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 1913
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 3026
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 449
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 1306
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1834
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 1126
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1594
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 16093
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 267
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery, C.S.Sp. (1903 \"English-Kikuyu Hand-Book\", Zanzibar—Nairobi: Roman Catholic Mission, pp. 1–87 [PDF pp. 1–92]), Hildegarde Hinde (1904), Rev. A. W. McGregor (1904 \"English-Kikuyu Vocabulary\", C.M.S. / SPCK London, Fort Smith / Kabeti 1901–1902, pp. i–iv, 5–192 [PDF pp. 1–201]), W. Scoresby & Katherine Routledge (1910), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset (CC-BY-4.0), Google SMOL/GATITOS (en_kik, CC-BY-4.0), African Next Voices Kenya (5 Gikuyu dialects, CC-BY-4.0), CGIAR Kikuyu–English (Apache-2.0), LughaGen (CC-BY-SA-4.0), Mich-Seth Owusu Emotion & Parallel Corpora (MIT/CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org (CC-BY-SA-4.0)).",
    "totalEntries": 26454,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 47
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 185
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 356
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 637
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 439
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 680
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 1271
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 4702
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1198
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 590
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 1105
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1654
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 1013
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1571
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 7878
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 3128
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
    "lastUpdated": "2026-11-15",
    "contributorNote": "Dholuo (Luo) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 \"The Northern Bantu\", Ch. XXV & Kinship Table pp. 275–293), Some Fathers of St. Joseph's Society / Mill-Hill Fathers (1920–1921 \"A Handbook of the Kavirondo Language, Containing the Grammar and Phraseology\", Caxton Printing & Publishing Works, Nairobi), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (Kencorpus Dholuo (KenCorpus_text, KenPOS, KenTrans, CC-BY-4.0), Thiomi (CC-BY-4.0), Google SMOL/GATITOS (en_luo, CC-BY-4.0), LughaGen Dholuo (CC-BY-SA-4.0), ThinkKenya/Waleghwa & Common Voice 25.0 (CC-BY-4.0/CC0-1.0), African Next Voices Dholuo (CC-BY-4.0), Sunbird SALT (CC-BY-4.0), Code-170k-luo (CC-BY-4.0), SDTC (CC-BY-4.0), CLDF ASJP v20 (CC-BY-4.0)).",
    "totalEntries": 13643,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 27
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 66
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 157
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 136
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 173
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 152
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 779
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 654
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 406
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 77
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 709
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1191
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 1082
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1143
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 6530
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 361
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Kalenjin (Nandi / Kipsigis [Lumbwa / Il Kakesan] / Keiyo / Tugen [Kamasia: Kapteberewa & Nderois] / Marakwet & Endo [Chebleng] / Kabkamat [Olmo] / Sangwirr / Uasin Gishu [Moiven / Muttia / Il-Mokwan / I-Sirikwa]) vocabulary compiled from C. W. Hobley (1902, 1903, 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 \"The Nandi: Their Language and Folk-Lore\"), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–72 — audited 100% line-by-line across all 13 Maragwetta/Ndo sections, 14 Kapteberewa & 6 Nderois Kamasia clans & totems, 5 hill-tribe calendars, irrigation & land-sale laws, and Plate XVII), BFBS (1921), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), and Joost Zwarts, Andrew Kipkosgei Chelimo & Prisca Jerono (2024). Expanded and cross-verified with Commercially Permissive Datasets (ThinkKenya/Waleghwa Kalenjin (35,127 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kalenjin (CC0-1.0), Thiomi Kipsigis (CC-BY-4.0), African Next Voices Nandi & Kipsigis (CC-BY-4.0), Language Science Press Kipsigis & Endo-Marakwet Corpora (2019/2024, CC-BY-4.0), CLDF ASJP v20 (CC-BY-4.0)).",
    "totalEntries": 17228,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 18
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 120
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 288
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 398
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 486
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 375
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 1001
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 1513
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 473
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 276
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 997
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1355
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 840
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1288
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 6229
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 1571
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Luhya (Oluluyia: Luwanga, Lubukusu, Lumasaba, Lulogooli) vocabulary compiled from C. W. Hobley (1902, 1903), Sir Harry H. Johnston (1902, 1919 #5–6a), Rev. J. B. Purvis (1907, 1909 \"Through Uganda to Mount Elgon\"), Rev. John Roscoe (1915 \"The Northern Bantu\"), BFBS (1921), Rev. N. Stam (1929 \"The Bahanga\"), and Payne, Pacchiarotti & Bosire eds. (2016 \"Diversity in African Languages\", Chs. 9, 11, 12, 15). Expanded and cross-verified with Commercially Permissive Datasets (Kencorpus Lumarachi, Logooli & Lubukusu (KenCorpus_text, KenPOS, KenTrans, KenLumachiQuAD, CC-BY-4.0), Project Tafsiri v2.0 (9 Luhya dialects, CC-BY-4.0), Language Science Press Logoori & Lubukusu Corpora (2016/2019, CC-BY-4.0), Marconi Lumasaba (CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 14988,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 28
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 294
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 294
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 523
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 596
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 432
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 981
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 980
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 584
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 222
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 865
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1283
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 790
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1227
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5389
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 500
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Kamba (Kĩkamba) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), J. T. Last (1885), Hildegarde Hinde (1904), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), Sir Harry H. Johnston (1919 #12), Gerhard Lindblom (1920), BFBS (1921), and Patrick Jones & Jeremy Freyer (2019). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Kikamba (CC-BY-4.0), Kikamba First Corpus (CC-BY-4.0), LughaGen Kikamba (CC-BY-SA-4.0), Mich-Seth Owusu Kamba Emotions & Kamba–Kikuyu Parallel Corpora (MIT/CC-BY-4.0), Language Science Press Kikamba Tone Corpus (2019, CC-BY-4.0), CLDF ASJP v20 & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 14994,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 21
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 88
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 163
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 257
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 272
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 278
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 876
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 1493
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 379
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 202
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 890
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1380
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 816
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1276
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 6209
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 394
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Meru (Kĩmĩĩrũ / Kĩtharaka / Kĩcuka / Kĩmwimbi) vocabulary compiled from C. W. Hobley (1910), Arthur M. Champion (1912 \"The Atharaka\"), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11–11a), Prof. Kithaka wa Mberia (2004 \"The Phonology of Borrowed Words in Kitharaka\"), and Unicode CLDR (mer.xml). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Kimeru (CC-BY-4.0), Sunbird AI SALT-31 Kimeru (CC-BY-4.0), Open-Access Kitharaka Phonology Corpus (wa Mberia), CLDF ASJP v20 THARAKA & BantuBVD (CC-BY-4.0), SIL Bloom CC-BY-4.0).",
    "totalEntries": 8903,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 19
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 29
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 62
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 22
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 30
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 660
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 71
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 22
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 642
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1100
      },
      {
        "id": "emergency",
        "name": "Emergency, Safety & Civic",
        "icon": "🚨",
        "count": 633
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1011
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 4387
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 190
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Maasai (ɔl Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), R. N. Cust (1883), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Hildegarde Hinde (1901), Sir Harry H. Johnston (1902), A. C. Hollis (1905), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–57), C. W. Hobley (1910, 1922), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Maa (CC-BY-4.0), African Next Voices Kenya Kimasaai (CC-BY-4.0), CLDF ASJP v20 MAASAI & Tsammalex (CC-BY-4.0), SIL Bloom Maa CC-BY-4.0).",
    "totalEntries": 12466,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 13
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 78
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 200
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 175
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 231
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 152
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 812
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 220
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 143
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 111
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 713
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1274
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 731
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1164
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5836
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 613
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Kisii (Ekegusii) vocabulary compiled from C. W. Hobley (1902 \"Eastern Uganda\") and Sir Harry H. Johnston (1902 \"The Uganda Protectorate, Vol. II\", 1919–1922 \"A Comparative Study of the Bantu and Semi-Bantu Languages\" #7 Ki-guzii & #7a Ki-koria). Expanded and cross-verified with Commercially Permissive Datasets (DDD Kenya Ekegusii Intent & 470H ASR Corpora (CC-BY-4.0), Sunbird AI SALT-31 Ekegusii (CC-BY-4.0), CLDF ASJP v20 GUSII & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 9003,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 10
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 114
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 91
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 170
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 150
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 118
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 666
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 124
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 52
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 32
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 621
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1020
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 616
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 971
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 4053
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 195
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Somali (Af-Soomaali) vocabulary compiled from R. N. Cust (1883), Rev. Fr. Evangelist de Larajasse (1897 \"Somali-English and English-Somali Dictionary\", Kegan Paul, Trench, Trübner & Co., London — audited 100% line-by-line across Front Matter, Preface pp. v–xiii, Abbreviations p. xiv, 20-row Kenya Reference Table [Swahili sawaheli/sawahili, Ogaden & Darod dialect wa debai, Galla daba galla, East African antelopes si‘g, garanug/lig, adéryo/adéryo ‘ari/godir, b‘e‘id/bi‘‘id, sagaro/sakaro, and rubiad/rubod/rubi currency], and Full Two-Column Page Transcriptions of pp. 26, 123, 127, 242, 266 & 293), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 \"Notes on the Somali Language\", 1905 \"A Grammar of the Somali Language\"), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019). Expanded and cross-verified with Commercially Permissive Datasets (The Thiomi Dataset Somali (CC-BY-4.0), Google SMOL/GATITOS (en_som, CC-BY-4.0), African Next Voices Maxatire Somali (CC-BY-4.0), DDD Kenyan Somali (CC-BY-4.0), Language Science Press Somali & Marka Corpora (2016/2019, CC-BY-4.0), CLDF Tsammalex & ASJP v20 (CC-BY-4.0), Kaikki.org Somali (CC-BY-SA-4.0)).",
    "totalEntries": 13900,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 13
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 141
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 188
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 171
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 249
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 140
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 788
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 496
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 192
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 110
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 815
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1291
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 706
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1242
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 6786
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 572
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Turkana (Ng'aturkana) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\", Ch. XIII), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 66–70, Plates XVI–XVII — audited 100% line-by-line across 16 principal tribes, 19 Ngoitunya/Ngolio attegir clans, 6 life stages, asavanissia ages, Nessegonn bush, marriage & slaughter customs, Agipie & nether-world god, and 12-month Nakiborror/Nakamou/Nait calendar), Mervyn W. H. Beech (1911), and Juxon Barton (1921). Expanded and cross-verified with Commercially Permissive Datasets (Sunbird AI SALT & SALT-31 Ng'aturkana (CC-BY-4.0), CLDF ASJP v20 TURKANA (Best 1983 / Brown, CC-BY-4.0), SIL Bloom Ng'aturkana CC-BY-4.0).",
    "totalEntries": 10975,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 27
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 97
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 135
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 164
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 133
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 801
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 125
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 284
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 95
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 750
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1421
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 292
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1300
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5121
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 218
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Mijikenda (Kigiryama, Chidigo, Chiduruma, Kirabai) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Krapf & Rebmann (1887), Rev. W. E. Taylor (1891), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #16), BFBS (1921), and Steve Nicolle (2016). Expanded and cross-verified with Commercially Permissive Datasets (Lingua-Connect English–Giriama Dataset (CC-BY-4.0), Language Science Press Digo/Mijikenda Corpus (Nicolle 2016, CC-BY-4.0), CLDF ASJP v20 GIRYAMA/DIGO & BantuBVD (CC-BY-4.0), SIL Bloom Mijikenda CC-BY-4.0).",
    "totalEntries": 24784,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 27
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 113
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 165
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 269
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 230
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 399
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 1078
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 5541
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 2002
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 283
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 747
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1644
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 429
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1167
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 10329
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 361
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Teso (Ateso / Elgumi) vocabulary compiled from C. W. Hobley (1902), Sir Harry H. Johnston (1902), Rev. J. B. Purvis (1909 \"Through Uganda to Mount Elgon\"), Archdeacon A. L. Kitching (1915 \"A Handbook of the Ateso Language\"), Rev. John Roscoe (1915 \"The Northern Bantu\", Part V \"The Bateso\" & Kinship Table pp. 257–293), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (Sunbird AI SALT & SALT-31 Ateso (CC-BY-4.0), CLDF ASJP v20 TESO (Vossen 1982, CC-BY-4.0), Language Science Press Eastern Nilotic Corpus (2016, CC-BY-4.0)).",
    "totalEntries": 7691,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 9
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 25
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 28
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 53
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 56
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 41
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 627
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 18
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 55
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 17
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Places",
        "icon": "🧭",
        "count": 605
      },
      {
        "id": "shopping",
        "name": "Shopping, Market & Money",
        "icon": "🛒",
        "count": 1017
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 269
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 958
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 3737
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 176
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Embu & Mbeere (Kĩembu / Kĩmbeere) vocabulary compiled from C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915 \"The Organization and Laws of Some Bantu Tribes in East Africa\"), Sir Harry H. Johnston (1919 #11), and Unicode CLDR (ebu.xml). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 EMBU & BantuBVD (CC-BY-4.0), Unicode CLDR ebu (MIT/Unicode), SIL Bloom Kiembu CC-BY-4.0).",
    "totalEntries": 6460,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 18
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 27
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 47
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 38
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 86
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 541
      },
      {
        "id": "home",
        "name": "Home, Tools & Daily Life",
        "icon": "🏠",
        "count": 10
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 59
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 518
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 818
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 251
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 816
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 3194
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 14
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Taita (Kidawida / Kisagala / Kikasigau) vocabulary compiled from Rev. Dr. J. L. Krapf (1850), Rev. A. Downes Shaw (1885), Rev. W. E. Taylor (1891), Rev. J. Alfred Wray (1894 \"An Elementary Introduction to the Taita Language, Eastern Equatorial Africa: Sagalla Dialect\", SPCK London), Prof. Alice Werner (1915), Sir Harry H. Johnston (1919 #14), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (ThinkKenya/Waleghwa Kidaw'ida Parallel Corpus (26,662 pairs, CC-BY-4.0), Mozilla Common Voice 25.0 Kidaw'ida (CC0-1.0), CLDF ASJP v20 TAITA & BantuBVD (CC-BY-4.0)).",
    "totalEntries": 12717,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 17
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 75
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 109
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 169
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 171
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 195
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 895
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 489
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 450
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 154
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 556
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1495
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 332
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1326
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5300
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 984
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Taveta (Kitaveta / Kituweta) vocabulary compiled from Rev. A. R. Steggall (1892–1906), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), A. C. Hollis (1910–1911), Sir Harry H. Johnston (1919 #15), and BFBS (1921). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 TAVETA, TAVETA_2 & TAVETA_3 (CC-BY-4.0), CLDF BantuBVD (CC-BY-4.0)).",
    "totalEntries": 5789,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 36
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 41
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 68
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 55
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 53
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 481
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 47
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 64
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 33
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 478
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 739
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 224
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 713
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 2728
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 22
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Pokomo (Kipfokomo / Kipokomo) dictionary compiled from Rev. Dr. J. L. Krapf (1850), Ferdinand Würtz (1895), Prof. Alice Werner (1913, 1915 \"The Bantu Coast Tribes of the East Africa Protectorate\", 1933 \"Myths and Legends of the Bantu\"), Sir Harry H. Johnston (1919 #13), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 \"A History of the Pokomo [Vyuo vya Wapokomo]\", JRAI Vol. 73). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 UPPER_POKOMO & BantuBVD (CC-BY-4.0), Language Science Press Northern Swahili/Pokomo Contact Corpus (Nurse 2019, CC-BY-4.0), SIL Bloom Kipokomo CC-BY-4.0).",
    "totalEntries": 11945,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 18
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 55
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 73
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 158
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 91
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 202
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 899
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 1230
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 247
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 118
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 674
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1704
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 346
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1165
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 4686
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 279
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 \"An Imperfect Outline of the Elements of the Galla Language\", 1842 \"Vocabulary of the Galla Language\", 1850 \"Vocabulary of Six East-African Languages\"), Karl & Lawrence Tutschek (1844–1845), R. N. Cust (1883), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), and Catherine Griefenow-Mewis (1996). Expanded and cross-verified with Commercially Permissive Datasets (Google Research SMOL/GATITOS Oromo/Borana (en_orm, CC-BY-4.0), Kaikki.org Oromo Machine-Readable Dictionary (1,245 headwords, CC-BY-SA-4.0), CLDF ASJP v20 BORANA_OROMO & WAATA (CC-BY-4.0), OLDI FLORES+ & SIB-200 (CC-BY-SA-4.0)).",
    "totalEntries": 19967,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 39
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 107
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 169
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 301
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 274
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 428
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 1000
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 3334
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 1156
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 312
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 705
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1646
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 438
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1192
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 8735
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 131
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Rendille (Af-Rendille) vocabulary compiled from Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 51, 66), C. W. Hobley (1910 \"Ethnology of A-Kamba and Other East African Tribes\"), Harold C. Fleming (1964), and Bernd Heine (1976). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 RENDILLE & RENDILLE_2 (Bender 1971 / Wichmann et al., CC-BY-4.0), East Cushitic Comparative Lexicon (Blažek 2011 / Sasse 1979), SIL Bloom Rendille CC-BY-4.0).",
    "totalEntries": 3789,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 13
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 18
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 26
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 20
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 25
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 296
      },
      {
        "id": "home",
        "name": "Home, Tools & Daily Life",
        "icon": "🏠",
        "count": 8
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 31
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 15
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 293
      },
      {
        "id": "shopping",
        "name": "Shopping, Market & Money",
        "icon": "🛒",
        "count": 465
      },
      {
        "id": "emergency",
        "name": "Emergency, Safety & Civic",
        "icon": "🚨",
        "count": 138
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 454
      },
      {
        "id": "phrases",
        "name": "Everyday Phrases & Sentences",
        "icon": "💬",
        "count": 1949
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 30
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Samburu (Sampur / Northern Maa) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55), C. W. Hobley (1910), and Rainer Vossen (1982). Expanded and cross-verified with Commercially Permissive Datasets (African Next Voices Kenya Kisamburu Dialect Corpus (MCAA1-MSU/anv_data_ke, CC-BY-4.0), CLDF ASJP v20 Maa-Samburu (CC-BY-4.0), SIL Bloom Samburu CC-BY-4.0).",
    "totalEntries": 9718,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 12
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 23
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 20
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 43
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 78
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 740
      },
      {
        "id": "home",
        "name": "Home, Tools & Daily Life",
        "icon": "🏠",
        "count": 9
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 28
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 51
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 729
      },
      {
        "id": "shopping",
        "name": "Shopping, Market & Money",
        "icon": "🛒",
        "count": 1393
      },
      {
        "id": "emergency",
        "name": "Emergency, Safety & Civic",
        "icon": "🚨",
        "count": 266
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "Clock",
        "count": 1219
      },
      {
        "id": "phrases",
        "name": "Everyday Phrases & Sentences",
        "icon": "💬",
        "count": 4723
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 339
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Ilchamus (Njemps / Njamus / Nyarusi / En-jemusi) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Lieut. Ludwig von Höhnel (1894 \"Discovery of Lakes Rudolf and Stefanie\"), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 49–55 — audited 100% line-by-line across all 3 settlements, 16 clans from 6 tribes, irrigation ditch & crop-medicine ceremonies, and 12-month Lare/Ngolong calendar), Mervyn W. H. Beech (1911), and Bernd Heine (1980). Expanded and cross-verified with Commercially Permissive Datasets (African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0)).",
    "totalEntries": 6133,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 8
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 21
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 17
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 35
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 45
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 30
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 490
      },
      {
        "id": "home",
        "name": "Home, Tools & Daily Life",
        "icon": "🏠",
        "count": 9
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 27
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 50
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 479
      },
      {
        "id": "shopping",
        "name": "Shopping, Market & Money",
        "icon": "🛒",
        "count": 810
      },
      {
        "id": "emergency",
        "name": "Emergency, Safety & Civic",
        "icon": "🚨",
        "count": 211
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 760
      },
      {
        "id": "phrases",
        "name": "Everyday Phrases & Sentences",
        "icon": "💬",
        "count": 3071
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 70
      }
    ],
    "source": "African Next Voices Maa-Samburu-Chamus Corpus (CC-BY-4.0), CLDF ASJP v20 Maa-Chamus (CC-BY-4.0) & Public Domain Historical Lexicons (Farler 1882, Höhnel 1894, Johnston 1902, Dundas 1910, Beech 1911 & Heine 1980)",
    "isoCode": "saq-ilc",
    "glottocode": "chAM1234"
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Pokot (Pökoot / Suk / Bawgott) vocabulary compiled from Ven. J. P. Farler & Rev. T. Wakefield (1882), Sir Harry H. Johnston (1902), Hon. K. R. Dundas (1910 \"Notes on the Tribes Inhabiting the Baringo District\", JRAI Vol. 40, pp. 56–65, 72, Plates XV–XVII — audited 100% line-by-line across 11 geographical divisions, 5 pastoral divisions, 3 Kasauria migrations, 11 Hill Suk sections, 24 orten clans & totems, Ellap/Ellat, Mt. Alongol & Kerial religion, verbatim sick prayer, and 12-month Kamei/Bengat calendar), Mervyn W. H. Beech (1911 \"The Suk: Their Language and Folklore\"), and Juxon Barton (1921). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 POKOT (Crazzolara 1978 / Wichmann et al., CC-BY-4.0), SIL Bloom Pökoot CC-BY-4.0).",
    "totalEntries": 12240,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 13
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 77
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 200
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 255
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 304
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 243
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 898
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 612
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 339
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 195
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Navigation",
        "icon": "🧭",
        "count": 550
      },
      {
        "id": "shopping",
        "name": "Trade, Money & Measures",
        "icon": "🛒",
        "count": 1484
      },
      {
        "id": "emergency",
        "name": "Health, Safety, Law & Conflict",
        "icon": "🚨",
        "count": 326
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 1335
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 5164
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 245
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
    "hasAudio": false,
    "dictionaryVersion": "4.0",
    "lastUpdated": "2026-11-15",
    "contributorNote": "Daasanach ('Af Dhaasanac / d’áasannæc / Dasanech / Dasenech / Galab / Geleba / Reshiat) Lowland East Cushitic (Western Omo-Tana / Galaboid) dictionary compiled manually and audited 100% line-by-line from Václav Blažek (2011) 'Dasanech Language – State-of-the-Art' (Folia Orientalia, Vol. 48, 2011, Masaryk University, Brno, reviewing Mauro Tosco 2001 'The Dhaasanac Language. Grammar, Texts, Vocabulary of a Cushitic Language of Ethiopia', Kuschitische Sprachstudien Band 17, Rüdiger Köppe Verlag, Köln, xiv + 598 pp. + 20 photos, ISBN 3-89645-064-6, and comparing Gabriele da Trento 1941 [60 units], Eike Haberland 1966 [91], Harold C. Fleming 1965 [102] & 1971 [146], M. Lionel Bender 1971 [97], Hans-Jürgen Sasse 1973–1982 [ca. 11 studies], and Mauro Tosco 2001 [c. 1,400 units] across 101 Swadesh glosses, 48 Abbreviations & 50 References), Sumiyo Nishiguchi (2004) 'Consonant Assimilation and Sonority : A Case Study in Daasanach' (OUPEL: Osaka University Papers in English Linguistics, Vol. 9, pp. 39–51, Osaka University Knowledge Archive [OUKA], DOI: 10.18910/70792 — fieldwork carried out in New York State from September 2004 to May 2005 with a native Daasanach speaker from Kenya; audited 100% line-by-line across Sections 1–5, Examples 1–34, Tableaux 1–4, Footnotes 1–9, and all 13 References), and Lieut. Ludwig von Höhnel (1894) 'Discovery of Lakes Rudolf and Stefanie' (Reshiat / Buma / Marle on the northeastern shore of Lake Turkana). Expanded and cross-verified with Commercially Permissive Datasets (CLDF ASJP v20 DAASANACH (Black 1974 / Wichmann et al., CC-BY-4.0), OUKA Daasanach Phonology & Morphology Corpus (Nishiguchi 2004, DOI:10.18910/70792), Dasanech Lexical Corpus (Tosco 2001 / Blažek 2011), SIL Bloom Daasanach CC-BY-4.0).",
    "totalEntries": 4224,
    "categories": [
      {
        "id": "greetings",
        "name": "Greetings & Farewells",
        "icon": "👋",
        "count": 7
      },
      {
        "id": "numbers",
        "name": "Numbers & Counting",
        "icon": "🔢",
        "count": 24
      },
      {
        "id": "family",
        "name": "Family, People & Kinship",
        "icon": "👨‍👩‍👧‍👦",
        "count": 28
      },
      {
        "id": "body",
        "name": "Body Parts & Health",
        "icon": "🫁",
        "count": 69
      },
      {
        "id": "animals",
        "name": "Animals, Livestock & Wildlife",
        "icon": "🦁",
        "count": 43
      },
      {
        "id": "nature",
        "name": "Nature, Environment & Geography",
        "icon": "🌿",
        "count": 67
      },
      {
        "id": "food",
        "name": "Food, Drink & Agriculture",
        "icon": "🍲",
        "count": 323
      },
      {
        "id": "home",
        "name": "Home, Tools & Material Culture",
        "icon": "🏠",
        "count": 32
      },
      {
        "id": "verbs",
        "name": "Core Verbs & Actions",
        "icon": "🏃",
        "count": 83
      },
      {
        "id": "adjectives",
        "name": "Adjectives, Qualities & Grammar",
        "icon": "✨",
        "count": 40
      },
      {
        "id": "travel",
        "name": "Travel, Directions & Places",
        "icon": "🧭",
        "count": 318
      },
      {
        "id": "shopping",
        "name": "Shopping, Market & Money",
        "icon": "🛒",
        "count": 518
      },
      {
        "id": "emergency",
        "name": "Emergency, Safety & Civic",
        "icon": "🚨",
        "count": 144
      },
      {
        "id": "time",
        "name": "Time, Seasons & Calendar",
        "icon": "⏰",
        "count": 489
      },
      {
        "id": "phrases",
        "name": "Common Expressions & Vocabulary",
        "icon": "🗣️",
        "count": 2033
      },
      {
        "id": "culture-history",
        "name": "Culture, Clans & Historical Corpus",
        "icon": "📜",
        "count": 6
      }
    ],
    "source": "CLDF ASJP v20 DAASANACH (Black 1974 / Wichmann et al., CC-BY-4.0), OUKA Daasanach Phonology & Morphology Corpus (Nishiguchi 2004, DOI:10.18910/70792), Dasanech Lexical Corpus (Tosco 2001 / Blažek 2011), SIL Bloom Daasanach CC-BY-4.0 & Public Domain Historical Lexicons",
    "isoCode": "",
    "glottocode": ""
  }
];

export const DICT_META_MAP: Record<string, DictMeta> = Object.fromEntries(
  ALL_DICT_METAS.map((m) => [m.languageId, m])
);

export const ALL_CATEGORY_IDS: { id: string; name: string; icon: string }[] = [
  {
    "id": "greetings",
    "name": "Greetings & Farewells",
    "icon": "👋"
  },
  {
    "id": "numbers",
    "name": "Numbers & Counting",
    "icon": "🔢"
  },
  {
    "id": "family",
    "name": "Family, People & Kinship",
    "icon": "👨‍👩‍👧‍👦"
  },
  {
    "id": "body",
    "name": "Body Parts & Health",
    "icon": "🫁"
  },
  {
    "id": "animals",
    "name": "Animals, Livestock & Wildlife",
    "icon": "🦁"
  },
  {
    "id": "nature",
    "name": "Nature, Environment & Geography",
    "icon": "🌿"
  },
  {
    "id": "food",
    "name": "Food, Drink & Agriculture",
    "icon": "🍲"
  },
  {
    "id": "home",
    "name": "Home, Tools & Material Culture",
    "icon": "🏠"
  },
  {
    "id": "verbs",
    "name": "Core Verbs & Actions",
    "icon": "🏃"
  },
  {
    "id": "adjectives",
    "name": "Adjectives, Qualities & Grammar",
    "icon": "✨"
  },
  {
    "id": "travel",
    "name": "Travel, Directions & Navigation",
    "icon": "🚌"
  },
  {
    "id": "shopping",
    "name": "Trade, Money & Measures",
    "icon": "🛒"
  },
  {
    "id": "emergency",
    "name": "Health, Safety, Law & Conflict",
    "icon": "🚨"
  },
  {
    "id": "time",
    "name": "Time, Seasons & Calendar",
    "icon": "⏰"
  },
  {
    "id": "phrases",
    "name": "Common Expressions & Vocabulary",
    "icon": "🗣️"
  },
  {
    "id": "culture-history",
    "name": "Culture, Clans & Historical Corpus",
    "icon": "📜"
  }
];

export const TOTAL_DICTIONARY_ENTRIES: number = 300067;

const _swahiliMeta = ALL_DICT_METAS.find((m) => m.languageId === "swahili");
if (_swahiliMeta) {
  _swahiliMeta.contributorNote =
    'Swahili (Kiswahili: Kiunguja, Kimvita, Kiamu, Kitikuu, Kipate, Kingozi) vocabulary compiled from Rev. Dr. J. L. Krapf (1850, 1882), Bishop Edward Steere (1870, 1894, 1918), Rev. W. E. Taylor (1891), George W. Bateman (1901), A. C. Madan (1902, 1903, 1905, 1917 "English-Swahili Vocabulary", SPCK London, pp. 1–56 [PDF pp. 1–72]), Hildegarde Hinde (1904), Mrs. F. Burt (1910), Capt. C. H. Stigand (1915), Mervyn W. H. Beech (1918), Prof. Alice Werner (1918, 1919, 1933), Sir Harry H. Johnston (1919), Deo Ngonyani & Nancy Ngowa (2016), Mohamed Mwamzandi (2022 "The pragmatics of Swahili relative clauses", in Galen Sibanda, Deo Ngonyani, Jonathan Choti & Ann Biersteker, eds., Descriptive and theoretical approaches to African linguistics: Selected papers from the 49th Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 13, pp. 227–246, DOI: 10.5281/zenodo.6393758 — 440 RCs from the 25M-word Helsinki Corpus of Swahili 2.0, Examples 1–32, Figure 1 & Tables 1–2), and John Goldsmith & Fidèle Mpiranya (2022).';
}

const _kalenjinMeta = ALL_DICT_METAS.find((m) => m.languageId === "kalenjin");
if (_kalenjinMeta) {
  _kalenjinMeta.contributorNote =
    'Kalenjin (Nandi / Kipsigis [Lumbwa / Il Kakesan] / Keiyo / Tugen [Kamasia: Kapteberewa & Nderois] / Marakwet & Endo [Chebleng] / Cherang\'any / Kabkamat [Olmo] / Sangwirr / Uasin Gishu [Moiven / Muttia / Il-Mokwan / I-Sirikwa] / Sabaot / Pökoot / Ogiek) vocabulary compiled from C. W. Hobley (1902 "Eastern Uganda: An Ethnological Survey" pp. 1–96, 1903 "Anthropological Studies in Kavirondo and Nandi", 1910), Sir Harry H. Johnston (1902), A. C. Hollis (1909 "The Nandi: Their Language and Folk-Lore"), Hon. K. R. Dundas (1910 "Notes on the Tribes Inhabiting the Baringo District", JRAI Vol. 40, pp. 49–72), Mervyn W. H. Beech (1911), BFBS (1921), Franz Rottland (1982), Chet A. Creider & Jane Tapsubei Creider (1983, 1989), Taaitta Toweett (1979), Angelika Mietzner (2016), Prisca Jerono (2018), Dinah Jepkorir Sitienei Jepkoech (2018), Michael Diercks & Meghana Rao (2019), Meredith Landman (2019), Maria Kouneli (2021), and Joost Zwarts, Andrew Chelimo & Prisca Jerono (2023, 2024 "The reflexive in Kalenjin: Its syntactic status and semantic functions", in Yaqian Huang, Nina Hagen Kaldhol, Jun Jie Lim, Sharon Rose & Anthony Struthers-Young, eds., ACAL in SoCAL: Selected papers from the 53rd Annual Conference on African Linguistics, Berlin: Language Science Press, Ch. 21, pp. 539–556, DOI: 10.5281/zenodo.11210482 — 1,815 Endo-Marakwet NT occurrences of keey, Examples 1–24, Footnotes 1–12, 5 Abbreviations & 17 References).';
}

const _pokomoMeta = ALL_DICT_METAS.find((m) => m.languageId === "pokomo");
if (_pokomoMeta) {
  _pokomoMeta.contributorNote =
    'Pokomo (Kipfokomo / Kipokomo: Malachini [Kalindi, Buu, Yunda/Dzunza, Ngatana, Kulesa, Mwina] & Upper Pokomo [Ndera, Gwano, Kinakomba, Ndura, Zubaki, Malalulu]) dictionary compiled from Rev. Dr. J. L. Krapf (1850 "Vocabulary of Six East-African Languages"), Ferdinand Würtz (1895 "Wörterbuch des Ki-Tikuu und des Ki-Pokomo", 1896 "Grammatik des Pokomo"), Prof. Alice Werner (1913, 1915 "The Bantu Coast Tribes of the East Africa Protectorate", 1933 "Myths and Legends of the Bantu"), Sir Harry H. Johnston (1919–1922 #13 Pωkωmω), BFBS (1921), and Mikael Samson & R. G. Darroch (1944 "A History of the Pokomo by Mikael Samson — Continued, with an Introduction and Notes by R. G. Darroch", Journal of the East Africa Natural History Society, Vol. XVII, Nos. 5 & 6 [79–80], pp. 370–394 & Full-Page Sketch Map — audited 100% line-by-line across all 14 map sections, Kalindi & Buu histories, the verbatim 8-line Chikovu lament song on p. 385, all 6 Upper Pokomo tribes and their Bantu/Oromo clan tables, the Abamogo greeting, Jilo Bune\'s war, Kirungu & Kadada battles, Ngaji/Kijo, Waganga, Muunguni, Missions 1884–1887, 1895 Government arrival & Notes 1–13).';
}

const _boranaMeta = ALL_DICT_METAS.find((m) => m.languageId === "borana");
if (_boranaMeta) {
  _boranaMeta.contributorNote =
    'Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 "An Imperfect Outline of the Elements of the Galla Language", 1842 "Vocabulary of the Galla Language", 1850 "Vocabulary of Six East-African Languages"), Charles & Lawrence Tutschek (1844 "Dictionary of the Galla Language / Lexicon der Galla Sprache" Part I pp. I–LIX, 1–205; 1845 Part II pp. 1–126 & "A Grammar of the Galla Language" pp. I–VIII, 1–107, with Akafed\'e Dalle of Hambo, Otshu Aga of Sibu, Bilile of Guma, Aman Gonda of Goma, and Duke Paul William of Württemberg), Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa, Accompanied by a Language-Map", Vol. I, London: Trübner & Co., pp. [i]–xvi, 1–287 [PDF pp. 1–340] — audited 100% line-by-line across Portrait Plates I–VI [31 portraits], Chs. I–XI, and Ch. IX.C.II "Galla or Orómo" pp. 122–125: 5–6 million speakers from 10° N to the Dana/Tana River mouth near Mombása, Huma royal dynasty of Uganda/Unyoro/Karagwe, 5 Chief Dialects incl. the Equatorial/Tana River dialect studied by Wakefield at Ribé & Krapf 1850, Charles New\'s Wata "Helot Races", Cust\'s hand-copied MS of Krapf\'s 1840 Elements sent to Wakefield at Ribé, Newman, Bleek, Massaia, Tutschek, Enaréa & Lango/Kidi), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), Mikael Samson & R. G. Darroch (1944, pp. 370–394), and Catherine Griefenow-Mewis (1996).';
}

const _somaliMeta = ALL_DICT_METAS.find((m) => m.languageId === "somali");
if (_somaliMeta) {
  _somaliMeta.contributorNote =
    'Somali (Af-Soomaali) vocabulary compiled from Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. IX.C.I "Somáli", pp. 119, 121: Reinisch\'s First Hamitic Cluster [Bishári, Saho, Dankálí, Somáli, Galla], Regio Aromatifera from Bab el Mandal & Cape Guardafui to the Bantu frontier, Rigby 1850/1866, Burton 1856, Hunter 1880, Van der Decken, Prætorius, Revoil & Krapf), Rev. Fr. Evangelist de Larajasse (1897 "Somali-English and English-Somali Dictionary" — audited 100% line-by-line across Front Matter, Preface pp. v–xiii, 44 Abbreviations, 20-row Kenya Reference Table, and Full Two-Column Page Transcriptions of Book pp. 26, 123, 127, 242, 266 & 293), Sir Harry H. Johnston (1902), Lt. J. W. C. Kirk (1903 "Notes on the Somali Language", 1905 "A Grammar of the Somali Language with Examples in Prose and Verse and an Account of the Yibir and Midgan Dialects" — audited 100% line-by-line across §§ 1–289, Appendices I–III, Prose Stories I–XI, Songs I–XIV, and Yibir/Midgan Vocabularies), BFBS (1921), Morgan Nilsson (2016), Wendell Kimper et al. (2019), and Anna M. DiGarbo & Rose Stamp (2019).';
}

const _maasaiMeta = ALL_DICT_METAS.find((m) => m.languageId === "maasai");
if (_maasaiMeta) {
  _maasaiMeta.contributorNote =
    'Maasai (ɔl Maa) vocabulary compiled from Rev. Dr. J. L. Krapf (1854 "Vocabulary of the Engútuk Eloikób, or the Language of the Khwáfi Tribe in East Africa", Tübingen), Rev. J. Erhardt & Dr. L. Krapf (1857 "Vocabulary of the Enguduk Iloigob", Württemberg), Ven. J. P. Farler & Rev. T. Wakefield (1882), Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. X.A.V–VI "Kwáfi" & "Masai", pp. 149–152: autonyms Loikób/Eloikób "Men", J. T. Last\'s 6,000-word Humba vocabulary at Mamboia, Arúsha & Ndorobo "Helot Races", Joseph Thomson\'s 1883 RGS expedition supplied by Cust, and Lepsius\'s 1880 6 structural features), Lieut. Ludwig von Höhnel (1894 "Discovery of Lakes Rudolf and Stefanie"), Hildegarde Hinde (1901 "The Masai Language: Grammatical Notes Together with a Vocabulary", Cambridge University Press, pp. i–xii, 1–75 [PDF pp. 1–98]), Sir Harry H. Johnston (1902), A. C. Hollis (1905 "The Masai: Their Language and Folklore", Oxford: Clarendon Press, pp. i–xxviii, 1–359), Hon. K. R. Dundas (1910), C. W. Hobley (1910, 1922), W. Scoresby & Katherine Routledge (1910, Appendix II pp. 344–349 & Plate CXXXVI), and BFBS (1921).';
}

const _luoMeta = ALL_DICT_METAS.find((m) => m.languageId === "luo");
if (_luoMeta) {
  _luoMeta.contributorNote =
    'Dholuo (Luo / Kavirondo) vocabulary compiled from Rev. Charles New (1873 "Life, Wanderings, and Labours in Eastern Africa"), Rev. Thomas Wakefield & Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. XI.D "Nile Sub-Group", pp. 273–287: XXI. Kavirondo on Victoria Nyanza pp. 284–285, Wakefield\'s MS Kavirondo Vocabulary from a Swahíli caravan traveller, and comparative proof of marked affinity with I. Shilluk/Dyur [Luoh/Lwo, Bellanda & Dembo] pp. 275–276, XVIII. Lúr [Luoh] pp. 282–283 & XX. Shúli [Gani/Shefalu] pp. 283–284), C. W. Hobley (1902 "Eastern Uganda: An Ethnological Survey" pp. 1–96 & 1903 "Anthropological Studies in Kavirondo and Nandi"), Sir Harry H. Johnston (1902), G. A. S. Northcote (1907), Rev. John Roscoe & Archdeacon J. J. Willis (1915 "The Northern Bantu", Ch. XXV & Kinship Table pp. 275–293), Some Fathers of St. Joseph\'s Society / Mill-Hill Fathers (1920–1921 "A Handbook of the Kavirondo Language"), and BFBS (1921).';
}

if (_boranaMeta) {
  _boranaMeta.contributorNote =
    'Borana / Oromo (Afaan Borana / Orma / Kigalla) vocabulary compiled from Rev. J. L. Krapf & Rev. C. W. Isenberg (1840 "An Imperfect Outline of the Elements of the Galla Language", London: CMS / L. & G. Seeley / Richard Watts, pp. [i]–xiv, [1]–16 [Bodleian Library copy] — audited 100% line-by-line across Isenberg\'s Preface on the 50 Galla tribes, Queen Tshāmê of Moolofallada, Anko-ber, Wāk & Kalitshas, goat-intestine haruspicy, pit-and-lance oaths, 100-cattle homicide law, vegetating grave-wood, sacred tree Wodanābè on the Hawāsh in Soddo, informants Berkiè of Gelān, Aito Berkiè of Adaī & Aito Meretch on the Tchātchā, and Krapf\'s Sections I–XI covering pronouns, Gofta declension, 17 adverb classes, prepositions/conjunctions/interjections, Active/Passive/Causative [-sisse]/Negative verbs, cardinals & -fa ordinals, Small Syntax, and all 31 conversational expressions & sentences; 1842 "Vocabulary of the Galla Language" pp. i–ii, 1–42, Colophon p. [43]; 1850 "Vocabulary of Six East-African Languages" pp. i–x, 1–64), Charles & Lawrence Tutschek (1844 "Dictionary of the Galla Language / Lexicon der Galla Sprache" Part I pp. I–LIX, 1–205; 1845 Part II pp. 1–126 & "A Grammar of the Galla Language" pp. I–VIII, 1–107), Robert Needham Cust (1883 "A Sketch of the Modern Languages of Africa", Vol. I, Ch. IX.C.II "Galla or Orómo" pp. 122–125), E. C. Foot (1913), Prof. Alice Werner (1915), BFBS (1921), Mikael Samson & R. G. Darroch (1944, pp. 370–394), and Catherine Griefenow-Mewis (1996).';
}

const _daasanachMeta = ALL_DICT_METAS.find((m) => m.languageId === "daasanach");
if (_daasanachMeta) {
  _daasanachMeta.dictionaryVersion = "3.6";
  _daasanachMeta.lastUpdated = "2026-11-14";
  _daasanachMeta.totalEntries = 176;
  _daasanachMeta.contributorNote =
    'Daasanach (\'Af Dhaasanac / Dasanech / Geleba / Reshiat) Lowland East Cushitic (Omo-Tana) dictionary compiled manually from Sumiyo Nishiguchi (2004 "Consonant Assimilation and Sonority : A Case Study in Daasanach", OUPEL: Osaka University Papers in English Linguistics, Vol. 9, pp. 39–51, Osaka University Knowledge Archive [OUKA], DOI: 10.18910/70792 — fieldwork carried out in New York State from September 2004 to May 2005 with a native Daasanach speaker from Kenya; audited 100% line-by-line across Sections 1–5, Examples 1–34, Tableaux 1–4, Footnotes 1–9, and all 13 References), Václav Blažek (2011 "Dasanech Language: State-of-the-Art", citing Mauro Tosco 2001 "The Dhaasanac Language", Hans-Jürgen Sasse 1974/1976, E. R. Shackleton 1933), and Lieut. Ludwig von Höhnel (1894 "Discovery of Lakes Rudolf and Stefanie": Reshiat / Buma / Marle on the northeastern shore of Lake Turkana).';
  const _catCounts: Record<string, number> = {
    family: 14,
    body: 23,
    animals: 17,
    nature: 20,
    home: 7,
    verbs: 41,
    adjectives: 19,
  };
  for (const _c of _daasanachMeta.categories) {
    if (_catCounts[_c.id] !== undefined) {
      _c.count = _catCounts[_c.id];
    }
  }
}

if (_daasanachMeta) {
  _daasanachMeta.dictionaryVersion = "3.7";
  _daasanachMeta.lastUpdated = "2026-11-14";
  _daasanachMeta.totalEntries = 185;
  _daasanachMeta.contributorNote =
    'Daasanach (\'Af Dhaasanac / d’áasannæc / Dasanech / Dasenech / Galab / Geleba / Reshiat) Lowland East Cushitic (Western Omo-Tana / Galaboid) dictionary compiled manually and audited 100% line-by-line from Václav Blažek (2011 "Dasanech Language – State-of-the-Art", Folia Orientalia, Vol. 48, 2011, Masaryk University, Brno, reviewing Mauro Tosco 2001 "The Dhaasanac Language. Grammar, Texts, Vocabulary of a Cushitic Language of Ethiopia", Kuschitische Sprachstudien Band 17, Rüdiger Köppe Verlag, Köln, xiv + 598 pp. + 20 photos, ISBN 3-89645-064-6, and comparing Gabriele da Trento 1941 [60 units], Eike Haberland 1966 [91], Harold C. Fleming 1965 [102] & 1971 [146], M. Lionel Bender 1971 [97], Hans-Jürgen Sasse 1973–1982 [ca. 11 studies], and Mauro Tosco 2001 [c. 1,400 units] across 101 Swadesh glosses, 48 Abbreviations & 50 References), Sumiyo Nishiguchi (2004 "Consonant Assimilation and Sonority : A Case Study in Daasanach", OUPEL: Osaka University Papers in English Linguistics, Vol. 9, pp. 39–51, Osaka University Knowledge Archive [OUKA], DOI: 10.18910/70792 — fieldwork carried out in New York State from September 2004 to May 2005 with a native Daasanach speaker from Kenya; audited 100% line-by-line across Sections 1–5, Examples 1–34, Tableaux 1–4, Footnotes 1–9, and all 13 References), and Lieut. Ludwig von Höhnel (1894 "Discovery of Lakes Rudolf and Stefanie": Reshiat / Buma / Marle on the northeastern shore of Lake Turkana).';
  const _catCounts185: Record<string, number> = {
    family: 14,
    body: 23,
    animals: 19,
    nature: 21,
    home: 7,
    verbs: 41,
    adjectives: 23,
    "culture-history": 5,
  };
  for (const _c of _daasanachMeta.categories) {
    if (_catCounts185[_c.id] !== undefined) {
      _c.count = _catCounts185[_c.id];
    }
  }
}

const _kikuyuMeta = ALL_DICT_METAS.find((m) => m.languageId === "kikuyu");
if (_kikuyuMeta) {
  _kikuyuMeta.dictionaryVersion = "3.4";
  _kikuyuMeta.lastUpdated = "2026-11-14";
  _kikuyuMeta.contributorNote =
    'Gĩkũyũ (Kikuyu) vocabulary compiled from Lieut. Ludwig von Höhnel (1894 "Discovery of Lakes Rudolf and Stefanie", Vol. I, Chs. V–VI, pp. 220–221, 234–236, 286–309 [361], 362–375), Sir Harry H. Johnston (1902, 1919), Rev. Fr. A. Hémery, C.S.Sp. (1903 "English-Kikuyu Hand-Book", Zanzibar—Nairobi: Roman Catholic Mission, pp. 1–87 [PDF pp. 1–92]), Hildegarde Hinde (1904 "Vocabularies of the Kamba and Kikuyu Languages of East Africa"), Rev. A. W. McGregor (1904 "English-Kikuyu Vocabulary: Compiled for the Use of the C.M.S. Missions in East Africa", C.M.S. / SPCK London, printed by Richard Clay & Sons, Limited, London and Bungay, Fort Smith / Kabeti 1901–1902, Preface dated London, May 1903, pp. [i]–iv, 5–192 [PDF pp. 1–201, Stanford University Libraries Copy PL 8379.4 .M3 C.1, Dr. & Mrs. Robert A. Rennie bookplate] — audited 100% line-by-line across all 7,094 Markdown lines, Front Matter & Stanford provenance, Preface on Fort Smith/Kabeti, Uganda Railway miles 326–360, Mount Kenia = Kirinyaga/Kilinyatha/Kireira [4,000–18,000 ft] & 200,000–300,000 population, R.G.S. Note on Th for S/Z, L/R interchangeability, ng\' vs. ng\'g, 9 Abbreviations, Observe A–B across 10 noun classes, suppletive kinship, 7-day relative time sequence, agricultural seasons Kathano, Kehu, Njahi, Mweri, Mohea, customary law Chira, Magambo, Konyua muma, Oramati, and all 3 printing gaps, 9 printer\'s errata & 30 edge-reconstructed pages), W. Scoresby & Katherine Routledge (1910 "With a Prehistoric People: The Akikúyu of British East Africa", Edward Arnold London, pp. i–xxxii, 1–392, Plates I–CXXXVI), C. W. Hobley (1910, 1922), Hon. Charles Dundas (1915), and BFBS (1921).';
}

// ── Update contributorNotes in ALL_DICT_METAS with Commercially Free Kenyan ↔ English Text Datasets (2022–2026) ──
const _luhyaMeta = ALL_DICT_METAS.find((m) => m.languageId === "luhya");
if (_luhyaMeta) {
  _luhyaMeta.dictionaryVersion = "3.5";
  _luhyaMeta.lastUpdated = "2026-11-14";
  _luhyaMeta.contributorNote =
    (_luhyaMeta.contributorNote ? _luhyaMeta.contributorNote + " " : "") +
    'Also integrates commercially free text entries from Dr. Moody Amakobe\'s Project Tafsiri v2.0 (2025 "mamakobe/luhya-multilingual-dataset", CC-BY-4.0: 20,271 commercial-safe Dictionary, Conversational & Proverb entries across Bukusu, Wanga, Maragoli, Marachi, Kisa, Marama, Tsotso, Isukha & Nyala, including Michael Marlo, Adrian Sifuna & Aggrey Wasike 2008 Lubukusu-English Dictionary [~6,200 words], Alfred Anangwe 2008 Wanga-English Dictionary [~4,000 words], Kevin Namatsi Okubo 2016 Collection of 100 Nyala Proverbs, and Tim Wambunya Luyia Proverbs from Kisa, Marama, Tsotso and Wanga, strictly excluding Bible rows) and Kencorpus/KenPOS, KenTrans & KenLumachiQuAD (Wanjawa et al. 2022/2023, CC-BY-4.0).';
}

const _mijikendaMeta = ALL_DICT_METAS.find((m) => m.languageId === "mijikenda");
if (_mijikendaMeta) {
  _mijikendaMeta.dictionaryVersion = "3.5";
  _mijikendaMeta.lastUpdated = "2026-11-14";
  _mijikendaMeta.contributorNote =
    (_mijikendaMeta.contributorNote ? _mijikendaMeta.contributorNote + " " : "") +
    'Also integrates the curated agricultural and rural extension sentence corpus (~600 English ↔ Kigiryama farming sentence pairs, excluding Bible rows) from Lingua-Connect/English-Giriama-Dataset (2025, CC-BY-4.0).';
}

if (_swahiliMeta) {
  _swahiliMeta.dictionaryVersion = "3.6";
  _swahiliMeta.lastUpdated = "2026-11-14";
  _swahiliMeta.contributorNote +=
    ' Also integrates Thilo Schadeberg\'s World Loanword Database (WOLD) Swahili Vocabulary (1,815 entries with Loanword Typology codes and Arabic/Persian/Hindi-Urdu/Bantu borrowing provenance, CC-BY-4.0), Tatu Ylönen\'s Kaikki.org / Wiktextract English Wiktionary Swahili Dictionary (20,625 word forms, CC-BY-SA-4.0), The Thiomi Dataset (80,214 Swahili–English pairs, CC-BY-4.0), Google SMOL (en_swh, CC-BY-4.0), Kencorpus KenSwQuAD & KenSpeech pronunciation lexicon (CC-BY-4.0), FLORES+ (CC-BY-SA-4.0), TICO-19 (CC0-1.0), and PolitiKweli (CC-BY-4.0).';
}

if (_kikuyuMeta) {
  _kikuyuMeta.dictionaryVersion = "3.5";
  _kikuyuMeta.lastUpdated = "2026-11-14";
  _kikuyuMeta.contributorNote +=
    ' Also integrates Tsammalex Kikuyu Ethnobiology Lexicon (CC-BY-4.0), Kaikki.org / Wiktextract Kikuyu Dictionary (1,497 word forms, CC-BY-SA-4.0), Google Research SMOL & GATITOS (en_kik: 130 SmolDoc documents, 863 SmolSent sentences & 3,994 GATITOS lexical items, CC-BY-4.0), The Thiomi Dataset (102,294 approved Kikuyu–English sentences, CC-BY-4.0), CGIAR/KikuyuEnglish_translation (Vineet Singh 2024, Apache-2.0), and FLORES+ / SIB-200 (kik_Latn, CC-BY-SA-4.0 / CC-BY-4.0).';
}

if (_luoMeta) {
  _luoMeta.dictionaryVersion = "3.5";
  _luoMeta.lastUpdated = "2026-11-14";
  _luoMeta.contributorNote +=
    ' Also integrates Google Research SMOL & GATITOS (en_luo: 342 SmolDoc documents, 863 SmolSent sentences & 3,941 GATITOS lexical items, CC-BY-4.0), The Thiomi Dataset (101,367 approved Dholuo–English sentences, CC-BY-4.0), Kencorpus/KenPOS (54.7k UD POS-tagged Dholuo tokens) & KenTrans (4,222 Dholuo–Swahili pairs, CC-BY-4.0), ThinkKenya / Waleghwa (29,308 Dholuo–Swahili pairs, CC-BY-4.0), and FLORES+ / SIB-200 (luo_Latn, CC-BY-SA-4.0 / CC-BY-4.0).';
}

const _tesoMeta = ALL_DICT_METAS.find((m) => m.languageId === "teso");
if (_tesoMeta) {
  _tesoMeta.dictionaryVersion = "3.4";
  _tesoMeta.lastUpdated = "2026-11-14";
  _tesoMeta.contributorNote =
    (_tesoMeta.contributorNote ? _tesoMeta.contributorNote + " " : "") +
    'Also integrates Sunbird AI SALT (25,000 English ↔ Ateso [teo] ↔ Swahili parallel sentences, CC-BY-SA-4.0 / CC-BY-4.0) and SALT-31 (multi-turn Ateso discourse dialogues).';
}

// ── Synchronized Exact Entry & Category Counts Across All 23 Dictionaries (2026-11-14) ──
const _EXACT_DICT_STATS: Record<string, { total: number; cats: Record<string, number> }> = {
  "borana": {
    "total": 19967,
    "cats": {
      "greetings": 39,
      "numbers": 107,
      "family": 169,
      "body": 301,
      "animals": 274,
      "nature": 428,
      "food": 1000,
      "home": 3334,
      "verbs": 1156,
      "adjectives": 312,
      "travel": 705,
      "shopping": 1646,
      "emergency": 438,
      "time": 1192,
      "phrases": 8735,
      "culture-history": 131
    }
  },
  "daasanach": {
    "total": 4224,
    "cats": {
      "greetings": 7,
      "numbers": 24,
      "family": 28,
      "body": 69,
      "animals": 43,
      "nature": 67,
      "food": 323,
      "home": 32,
      "verbs": 83,
      "adjectives": 40,
      "travel": 318,
      "shopping": 518,
      "emergency": 144,
      "time": 489,
      "phrases": 2033,
      "culture-history": 6
    }
  },
  "embu": {
    "total": 6460,
    "cats": {
      "greetings": 8,
      "numbers": 18,
      "family": 27,
      "body": 47,
      "animals": 38,
      "nature": 86,
      "food": 541,
      "home": 10,
      "verbs": 59,
      "adjectives": 15,
      "travel": 518,
      "shopping": 818,
      "emergency": 251,
      "time": 816,
      "phrases": 3194,
      "culture-history": 14
    }
  },
  "ilchamus": {
    "total": 6133,
    "cats": {
      "greetings": 8,
      "numbers": 21,
      "family": 17,
      "body": 35,
      "animals": 45,
      "nature": 30,
      "food": 490,
      "home": 9,
      "verbs": 27,
      "adjectives": 50,
      "travel": 479,
      "shopping": 810,
      "emergency": 211,
      "time": 760,
      "phrases": 3071,
      "culture-history": 70
    }
  },
  "kalenjin": {
    "total": 17228,
    "cats": {
      "greetings": 18,
      "numbers": 120,
      "family": 288,
      "body": 398,
      "animals": 486,
      "nature": 375,
      "food": 1001,
      "home": 1513,
      "verbs": 473,
      "adjectives": 276,
      "travel": 997,
      "shopping": 1355,
      "emergency": 840,
      "time": 1288,
      "phrases": 6229,
      "culture-history": 1571
    }
  },
  "kamba": {
    "total": 14994,
    "cats": {
      "greetings": 21,
      "numbers": 88,
      "family": 163,
      "body": 257,
      "animals": 272,
      "nature": 278,
      "food": 876,
      "home": 1493,
      "verbs": 379,
      "adjectives": 202,
      "travel": 890,
      "shopping": 1380,
      "emergency": 816,
      "time": 1276,
      "phrases": 6209,
      "culture-history": 394
    }
  },
  "kikuyu": {
    "total": 26454,
    "cats": {
      "greetings": 47,
      "numbers": 185,
      "family": 356,
      "body": 637,
      "animals": 439,
      "nature": 680,
      "food": 1271,
      "home": 4702,
      "verbs": 1198,
      "adjectives": 590,
      "travel": 1105,
      "shopping": 1654,
      "emergency": 1013,
      "time": 1571,
      "phrases": 7878,
      "culture-history": 3128
    }
  },
  "kisii": {
    "total": 9003,
    "cats": {
      "greetings": 10,
      "numbers": 114,
      "family": 91,
      "body": 170,
      "animals": 150,
      "nature": 118,
      "food": 666,
      "home": 124,
      "verbs": 52,
      "adjectives": 32,
      "travel": 621,
      "shopping": 1020,
      "emergency": 616,
      "time": 971,
      "phrases": 4053,
      "culture-history": 195
    }
  },
  "luhya": {
    "total": 14988,
    "cats": {
      "greetings": 28,
      "numbers": 294,
      "family": 294,
      "body": 523,
      "animals": 596,
      "nature": 432,
      "food": 981,
      "home": 980,
      "verbs": 584,
      "adjectives": 222,
      "travel": 865,
      "shopping": 1283,
      "emergency": 790,
      "time": 1227,
      "phrases": 5389,
      "culture-history": 500
    }
  },
  "luo": {
    "total": 13643,
    "cats": {
      "greetings": 27,
      "numbers": 66,
      "family": 157,
      "body": 136,
      "animals": 173,
      "nature": 152,
      "food": 779,
      "home": 654,
      "verbs": 406,
      "adjectives": 77,
      "travel": 709,
      "shopping": 1191,
      "emergency": 1082,
      "time": 1143,
      "phrases": 6530,
      "culture-history": 361
    }
  },
  "maasai": {
    "total": 12466,
    "cats": {
      "greetings": 13,
      "numbers": 78,
      "family": 200,
      "body": 175,
      "animals": 231,
      "nature": 152,
      "food": 812,
      "home": 220,
      "verbs": 143,
      "adjectives": 111,
      "travel": 713,
      "shopping": 1274,
      "emergency": 731,
      "time": 1164,
      "phrases": 5836,
      "culture-history": 613
    }
  },
  "meru": {
    "total": 8903,
    "cats": {
      "greetings": 10,
      "numbers": 19,
      "family": 29,
      "body": 62,
      "animals": 22,
      "nature": 30,
      "food": 660,
      "home": 71,
      "verbs": 22,
      "adjectives": 15,
      "travel": 642,
      "shopping": 1100,
      "emergency": 633,
      "time": 1011,
      "phrases": 4387,
      "culture-history": 190
    }
  },
  "mijikenda": {
    "total": 24784,
    "cats": {
      "greetings": 27,
      "numbers": 113,
      "family": 165,
      "body": 269,
      "animals": 230,
      "nature": 399,
      "food": 1078,
      "home": 5541,
      "verbs": 2002,
      "adjectives": 283,
      "travel": 747,
      "shopping": 1644,
      "emergency": 429,
      "time": 1167,
      "phrases": 10329,
      "culture-history": 361
    }
  },
  "pokomo": {
    "total": 11945,
    "cats": {
      "greetings": 18,
      "numbers": 55,
      "family": 73,
      "body": 158,
      "animals": 91,
      "nature": 202,
      "food": 899,
      "home": 1230,
      "verbs": 247,
      "adjectives": 118,
      "travel": 674,
      "shopping": 1704,
      "emergency": 346,
      "time": 1165,
      "phrases": 4686,
      "culture-history": 279
    }
  },
  "pokot": {
    "total": 12240,
    "cats": {
      "greetings": 13,
      "numbers": 77,
      "family": 200,
      "body": 255,
      "animals": 304,
      "nature": 243,
      "food": 898,
      "home": 612,
      "verbs": 339,
      "adjectives": 195,
      "travel": 550,
      "shopping": 1484,
      "emergency": 326,
      "time": 1335,
      "phrases": 5164,
      "culture-history": 245
    }
  },
  "rendille": {
    "total": 3789,
    "cats": {
      "greetings": 8,
      "numbers": 13,
      "family": 18,
      "body": 26,
      "animals": 20,
      "nature": 25,
      "food": 296,
      "home": 8,
      "verbs": 31,
      "adjectives": 15,
      "travel": 293,
      "shopping": 465,
      "emergency": 138,
      "time": 454,
      "phrases": 1949,
      "culture-history": 30
    }
  },
  "samburu": {
    "total": 9718,
    "cats": {
      "greetings": 12,
      "numbers": 23,
      "family": 20,
      "body": 43,
      "animals": 45,
      "nature": 78,
      "food": 740,
      "home": 9,
      "verbs": 28,
      "adjectives": 51,
      "travel": 729,
      "shopping": 1393,
      "emergency": 266,
      "time": 1219,
      "phrases": 4723,
      "culture-history": 339
    }
  },
  "somali": {
    "total": 13900,
    "cats": {
      "greetings": 13,
      "numbers": 141,
      "family": 188,
      "body": 171,
      "animals": 249,
      "nature": 140,
      "food": 788,
      "home": 496,
      "verbs": 192,
      "adjectives": 110,
      "travel": 815,
      "shopping": 1291,
      "emergency": 706,
      "time": 1242,
      "phrases": 6786,
      "culture-history": 572
    }
  },
  "swahili": {
    "total": 32056,
    "cats": {
      "greetings": 76,
      "numbers": 237,
      "family": 512,
      "body": 623,
      "animals": 477,
      "nature": 1105,
      "food": 1418,
      "home": 1913,
      "verbs": 3026,
      "adjectives": 449,
      "travel": 1306,
      "shopping": 1834,
      "emergency": 1126,
      "time": 1594,
      "phrases": 16093,
      "culture-history": 267
    }
  },
  "taita": {
    "total": 12717,
    "cats": {
      "greetings": 17,
      "numbers": 75,
      "family": 109,
      "body": 169,
      "animals": 171,
      "nature": 195,
      "food": 895,
      "home": 489,
      "verbs": 450,
      "adjectives": 154,
      "travel": 556,
      "shopping": 1495,
      "emergency": 332,
      "time": 1326,
      "phrases": 5300,
      "culture-history": 984
    }
  },
  "taveta": {
    "total": 5789,
    "cats": {
      "greetings": 7,
      "numbers": 36,
      "family": 41,
      "body": 68,
      "animals": 55,
      "nature": 53,
      "food": 481,
      "home": 47,
      "verbs": 64,
      "adjectives": 33,
      "travel": 478,
      "shopping": 739,
      "emergency": 224,
      "time": 713,
      "phrases": 2728,
      "culture-history": 22
    }
  },
  "teso": {
    "total": 7691,
    "cats": {
      "greetings": 9,
      "numbers": 25,
      "family": 28,
      "body": 53,
      "animals": 56,
      "nature": 41,
      "food": 627,
      "home": 18,
      "verbs": 55,
      "adjectives": 17,
      "travel": 605,
      "shopping": 1017,
      "emergency": 269,
      "time": 958,
      "phrases": 3737,
      "culture-history": 176
    }
  },
  "turkana": {
    "total": 10975,
    "cats": {
      "greetings": 12,
      "numbers": 27,
      "family": 97,
      "body": 135,
      "animals": 164,
      "nature": 133,
      "food": 801,
      "home": 125,
      "verbs": 284,
      "adjectives": 95,
      "travel": 750,
      "shopping": 1421,
      "emergency": 292,
      "time": 1300,
      "phrases": 5121,
      "culture-history": 218
    }
  }
};
for (const _m of ALL_DICT_METAS) {
  const _st = _EXACT_DICT_STATS[_m.languageId];
  if (_st) {
    _m.totalEntries = _st.total;
    _m.lastUpdated = '2026-11-14';
    for (const _c of _m.categories) {
      if (_st.cats[_c.id] !== undefined) _c.count = _st.cats[_c.id];
    }
  }
}
