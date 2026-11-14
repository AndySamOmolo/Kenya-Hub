import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Somali (Af-Soomaali) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const SOMALI_CONFIG: LanguageConfig = {
  "id": "somali",
  "name": "Somali",
  "nativeName": "Af-Soomaali",
  "family": "Cushitic",
  "counties": [
    "Garissa",
    "Wajir",
    "Mandera",
    "Isiolo",
    "Marsabit",
    "Nairobi"
  ],
  "speakers": "2.8M",
  "speechLocale": "so-KE",
  "description": "A Lowland East Cushitic language spoken across North-Eastern Kenya and the Horn of Africa, celebrated for its suffixed definite articles (-ka/-ta), focus grammar (waa/baa), and alliterative oral poetry (Gabay, Geeraar, Hees) and proverbs (Maahmaahyo). Grounded in de Larajasse (1897), Johnston (1902), and Kirk (1905).",
  "color": "#2563EB",
  "sources": [
    "larajasse-somali-dictionary-1897",
    "johnston-uganda-protectorate-1902",
    "kirk-somali-grammar-1905",
    "open-web-swadesh-comparative"
  ]
};

export const SOMALI_UNITS: CourseUnit[] = [
  {
    "id": "somali-unit-1",
    "title": "Unit 1: Greetings (Nabad!), Definite Articles (-ki/-ka/-ku & -ti/-ta/-tu), Pronouns & Cushitic Numerals",
    "description": "Master Af-Soomaali greetings, Kirk’s three suffixed article vowels (-i, -a, -u) and four demonstratives (kan, kèr, kas, kò), inclusive/exclusive pronouns, numerals, fractions, and classical Maahmaahyo.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "somali-greetings-nouns",
        "title": "Greetings, Three Article Vowels (-i, -a, -u) & Pastoral Life",
        "icon": "Tractor",
        "description": "Learn Af-Soomaali greetings, inclusive/exclusive pronouns, and definite nouns from Kirk (1905) and de Larajasse (1897).",
        "tips": "In Af-Soomaali (Kirk 1905, §§ 23, 28–29, 150–154, pp. 16–18, 79–81), the definite article is suffixed to the noun with masculine linking consonants -k-, -g-, -h-, -‘- (ninki, ninka, ninku) and feminine linking consonants -t-, -d-, -sh- (nàgti, nàgta, nàgtu; hal-ti → hashi 'the she-camel'). Kirk documents three article vowels: -i (general, past, or absent/remote), -a (present, proximate, or with possessive suffixes), and -u (well-known or aforementioned subject), distinct from the four demonstratives: kan/tan (this near), kèr/tèr (that near), kas/tas (that further), and kò/tò (that yonder, § 63, p. 33).",
        "words": [
          {
            "target": "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)",
            "source": "Peace! / Is it peace? / Have you passed the night well? (It is peace!)",
            "pronunciation": "na-bad / ma na-bad baa / ma ba-ri-den",
            "hint": "Kirk (1905, § 102, p. 51 & p. 113) morning & general greeting"
          },
          {
            "target": "Mahadsanid (Aad baad u mahadsan tahay)",
            "source": "Thank you (Thank you very much)",
            "pronunciation": "ma-hadsa-nid",
            "hint": "Gratitude"
          },
          {
            "target": "Soo dhawoow! / Nabad gelyo!",
            "source": "Welcome! / Goodbye!",
            "pronunciation": "soo dha-woow / na-bad gelyo",
            "hint": "Hospitality phrases"
          },
          {
            "target": "aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)",
            "source": "I / you (sg.) • we (inclusive vs. exclusive)",
            "pronunciation": "a-ni-ga / a-di-ga • inna-gu / anna-gu",
            "hint": "Kirk (1905, §§ 32, 53–55, pp. 19, 29–30) emphatic & clitic pronouns"
          },
          {
            "target": "isaga (u) / iyada (ai) / iyaga (ai)",
            "source": "he / she / they",
            "pronunciation": "i-sa-ga / i-ya-da / i-ya-ga",
            "hint": "Kirk (1905, § 53, p. 29) 3rd person pronouns"
          },
          {
            "target": "nin (ninki / ninka / ninku) • nàg (nàgti / nàgta / nàgtu)",
            "source": "man (the man: past/remote -i, present -a, known subject -u) • woman (the woman)",
            "pronunciation": "nin • nag",
            "hint": "Kirk (1905, §§ 23, 150–154) three definite article vowels"
          },
          {
            "target": "biyo (biyaha) / ‘àno (‘anaha)",
            "source": "water / milk",
            "pronunciation": "bi-yo / ‘a-no",
            "hint": "Kirk (1905) essential pastoral liquids"
          },
          {
            "target": "gèl (hal → hashi / aur → aurki) • lo‘ • fardo (sg. faras)",
            "source": "camels (she-camel / burden camel) • cattle • horses",
            "pronunciation": "gel • lo‘ • fardo",
            "hint": "Kirk (1905, § 29, p. 17) & de Larajasse (1897) pastoral livestock"
          },
          {
            "target": "garanug / godir / b‘e‘id / sagaro (Kirk 1905 & Larajasse 1897)",
            "source": "gerenuk / greater kudu / beisa oryx / dik-dik",
            "pronunciation": "ga-ra-nug / go-dir / b‘e-‘id / sa-ga-ro",
            "hint": "Kirk (1905, p. 194) & de Larajasse (1897) East African wildlife"
          },
          {
            "target": "Anas (Af-Yibir) & Alowa (Af-Midgan)",
            "source": "Yibir & Midgan guild registers documented in Kirk (1905, pp. 184–214)",
            "pronunciation": "a-nas & a-lo-wa",
            "hint": "Kirk (1905, pp. 184–214) comparative vocabularies"
          }
        ],
        "sentences": [
          {
            "target": "Ma bariden? Wa nabad, mahadsanid.",
            "source": "Have you passed the night well? It is peace, thank you (Kirk 1905, § 102, p. 51)."
          },
          {
            "target": "Hawl adun ma đamáto ninba wa intis.",
            "source": "The work of the world finishes not, each man has his share (Kirk 1905, § 227, p. 111)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)\" in Somali?",
            "correctAnswer": "Peace! / Is it peace? / Have you passed the night well? (It is peace!)",
            "options": [
              "Thank you (Thank you very much)",
              "Welcome! / Goodbye!",
              "I / you (sg.) • we (inclusive vs. exclusive)",
              "Peace! / Is it peace? / Have you passed the night well? (It is peace!)"
            ],
            "hint": "Kirk (1905, § 102, p. 51 & p. 113) morning & general greeting"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Mahadsanid (Aad baad u mahadsan tahay)\" in Somali?",
            "correctAnswer": "Thank you (Thank you very much)",
            "options": [
              "Welcome! / Goodbye!",
              "I / you (sg.) • we (inclusive vs. exclusive)",
              "Thank you (Thank you very much)",
              "Peace! / Is it peace? / Have you passed the night well? (It is peace!)"
            ],
            "hint": "Gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Soo dhawoow! / Nabad gelyo!\" in Somali?",
            "correctAnswer": "Welcome! / Goodbye!",
            "options": [
              "I / you (sg.) • we (inclusive vs. exclusive)",
              "Welcome! / Goodbye!",
              "Peace! / Is it peace? / Have you passed the night well? (It is peace!)",
              "Thank you (Thank you very much)"
            ],
            "hint": "Hospitality phrases"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Welcome! / Goodbye!\" in Somali?",
            "correctAnswer": "Soo dhawoow! / Nabad gelyo!",
            "options": [
              "Soo dhawoow! / Nabad gelyo!",
              "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)",
              "Mahadsanid (Aad baad u mahadsan tahay)",
              "aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)"
            ],
            "hint": "soh dhah-wow / nah-bahd gehl-yoh"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I / you (sg.) • we (inclusive vs. exclusive)\" in Somali?",
            "correctAnswer": "aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)",
            "options": [
              "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)",
              "Mahadsanid (Aad baad u mahadsan tahay)",
              "Soo dhawoow! / Nabad gelyo!",
              "aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)"
            ],
            "hint": "ah-nee-gah / een-nah-goo / ahn-nah-goo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali expression with its English meaning:",
            "correctAnswer": "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!): Peace! / Is it peace? / Have you passed the night well? (It is peace!)",
            "pairs": [
              {
                "left": "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)",
                "right": "Peace! / Is it peace? / Have you passed the night well? (It is peace!)"
              },
              {
                "left": "Mahadsanid (Aad baad u mahadsan tahay)",
                "right": "Thank you (Thank you very much)"
              },
              {
                "left": "Soo dhawoow! / Nabad gelyo!",
                "right": "Welcome! / Goodbye!"
              },
              {
                "left": "aniga (an) / adiga (ad) • ínnagu (-einu incl.) / ánnagu (-annu excl.)",
                "right": "I / you (sg.) • we (inclusive vs. exclusive)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"he / she / they\": ___",
            "correctAnswer": "isaga (u) / iyada (ai) / iyaga (ai)",
            "options": [
              "Nabad! / Ma nabad baa? / Ma bariden? (resp. Wa nabad!)",
              "Mahadsanid (Aad baad u mahadsan tahay)",
              "Soo dhawoow! / Nabad gelyo!",
              "isaga (u) / iyada (ai) / iyaga (ai)"
            ],
            "hint": "Kirk (1905, § 53, p. 29) 3rd person pronouns"
          }
        ]
      },
      {
        "id": "somali-numbers-maahmaahyo",
        "title": "Numerals, Fractions, 4 Seasons, 12 Lunar Months & Oral Poetry",
        "icon": "Megaphone",
        "description": "Count in Af-Soomaali, learn the 4 seasons and 12 lunar months from Kirk (1905 Appendix I), and study Gabei, Gerar, and Hes poetry.",
        "tips": "Lt. J. W. C. Kirk (1905, §§ 46–52, pp. 26–28; Appendix I, pp. 134–136; pp. 170–183) documents Somali cardinals, subtractive numerals (labàton midla = 19, 'twenty lacking one'), fractions (bađ 1/2, dalòl 1/3, wahh 1/4, fallad 1/8, rima 1/16), the 4 seasons (Jilal, Gù, Hagar/Karif, Dair, plus the windless Kalil interval), the 12 lunar months (Dago, Durahh hore, Durahh dambe, Rajal hore, Rajal dehhe, Rajal dambe, Sà buha, Wà barìs, Sòn/Soukad, Sòn fur, Sidatal, Arafo), and 14 traditional songs across Hes, Gerar, and Gabei.",
        "words": [
          {
            "target": "kô (mid), lába, sádehh, áfar, shan",
            "source": "1, 2, 3, 4, 5",
            "pronunciation": "ko la-ba sa-dehh a-far shan",
            "hint": "Kirk (1905, § 46, p. 26) cardinals 1–5"
          },
          {
            "target": "lehh, todòba, sidèd, sagàl, tòban",
            "source": "6, 7, 8, 9, 10",
            "pronunciation": "lehh to-do-ba si-ded sa-gal to-ban",
            "hint": "Kirk (1905, § 46, p. 26) cardinals 6–10"
          },
          {
            "target": "đig (verb-noun: đignin-ki)",
            "source": "Warn (verb-noun: warning) [corrected per Kirk 1905 Erratum, p. xii]",
            "pronunciation": "dhig / dhignin-ki",
            "hint": "Kirk (1905, Erratum p. xii & § 15b, p. 13)"
          },
          {
            "target": "rubiad-di (16a), rubi-gi (8a), bòlad-di (4a), antìn-ti (2a), gambo-di (1a), beisad-di (2p), ardi-di (1p)",
            "source": "Rupee (16 annas), 1/2 rupee, 4 annas, 2 annas, 1 anna, 2 pies, 1 pie",
            "pronunciation": "rubiad-di rubi-gi bolad-di antin-ti gambo-di beisad-di ardi-di",
            "hint": "Kirk (1905, Appendix II, p. 136) Somaliland currency table"
          },
          {
            "target": "wà beri / arorti, subahh-di, barghád-di, hađ-ki (gàdid-ki), duhur-ki, ásar-ki, makhrib-ki",
            "source": "Dawn, early morning, forenoon, midday, afternoon, late afternoon, sunset",
            "pronunciation": "wa beri a-rorti su-bahh-di barghad-di hadh-ki du-hur-ki a-sar-ki makhrib-ki",
            "hint": "Kirk (1905, Appendix I, p. 135) divisions of the day (‘asho-di)"
          },
          {
            "target": "fìdki, aweisin-ki, sakhdi hore, sakhđi dehh, sakhdi dambe, arorti hore (saladdi)",
            "source": "Twilight (6–7 p.m.), evening (7–10 p.m.), 1st watch (10–12), midnight (12–2), 3rd watch (2–4), before dawn (4–6 a.m.)",
            "pronunciation": "fidki a-weisin-ki sakhdi ho-re sakhdhi dehh sakhdi dambe sa-laddi",
            "hint": "Kirk (1905, Appendix I, p. 135) watches of the night (habèn-ki)"
          },
          {
            "target": "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
            "source": "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)",
            "pronunciation": "la-ba-ton soddon a-farton konton boghol kun",
            "hint": "Kirk (1905, § 46, pp. 26–27) tens & subtractive numerals"
          },
          {
            "target": "bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)",
            "source": "Fractions: 1/2, 1/3, 1/4, 1/8, 1/16",
            "pronunciation": "badh-ki dalol-ki wahh-di fallad-di rima-di",
            "hint": "Kirk (1905, § 52, p. 28) Somali fractions"
          },
          {
            "target": "Jilal (Jiilaal), Kalil, Gù (Gu'), Hagar (Xagaa / Karif), Dair (Dayr)",
            "source": "The 4 Somali pastoral seasons + Kalil calm interval before rains",
            "pronunciation": "ji-lal ka-lil gu ha-gar dair",
            "hint": "Kirk (1905, Appendix I, p. 134)"
          },
          {
            "target": "Dago, Durahh hore, Durahh dambe, Rajal (hore/dehhe/dambe), Sà buha, Wà barìs, Sòn (Soukad), Sòn fur, Sidatal, Arafo",
            "source": "The 12 traditional Somali lunar months (Muharram to Dhu al-Hijjah)",
            "pronunciation": "da-go du-rahh ho-re du-rahh dambe ra-jal sa bu-ha wa ba-ris son son fur si-da-tal a-ra-fo",
            "hint": "Kirk (1905, Appendix I, p. 135)"
          },
          {
            "target": "Gabei (Gabay), Gerar (Geeraar), Hes (Hees)",
            "source": "The 3 classical Somali poetic genres (Philosophical poem, Equestrian/war chant, Pastoral/dance song)",
            "pronunciation": "ga-bei ge-rar hes",
            "hint": "Kirk (1905, pp. 170–183, Songs I–XIV)"
          },
          {
            "target": "Far keliya fool ma dhaqdo",
            "source": "A single finger cannot wash a face (Unity is strength)",
            "pronunciation": "far ke-li-ya fool ma dhaqdo",
            "hint": "Classical Somali proverb"
          }
        ],
        "sentences": [
          {
            "target": "Gerar wa bogholal, wa bađwein iyo môjad, wa babùrki sidìsa.",
            "source": "Songs (Geeraar) are in hundreds, like the great sea and waves, like the ships (Kirk 1905, Song VIII, p. 178)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kô (mid), lába, sádehh, áfar, shan\" in Somali?",
            "correctAnswer": "1, 2, 3, 4, 5",
            "options": [
              "6, 7, 8, 9, 10",
              "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)",
              "Fractions: 1/2, 1/3, 1/4, 1/8, 1/16",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Kirk (1905, § 46, p. 26) cardinals 1–5"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lehh, todòba, sidèd, sagàl, tòban\" in Somali?",
            "correctAnswer": "6, 7, 8, 9, 10",
            "options": [
              "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)",
              "Fractions: 1/2, 1/3, 1/4, 1/8, 1/16",
              "6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Kirk (1905, § 46, p. 26) cardinals 6–10"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)\" in Somali?",
            "correctAnswer": "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)",
            "options": [
              "Fractions: 1/2, 1/3, 1/4, 1/8, 1/16",
              "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10"
            ],
            "hint": "Kirk (1905, § 46, pp. 26–27) tens & subtractive numerals"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"20, 30, 40, 50, 100, 1,000 (19 = labàton midla)\" in Somali?",
            "correctAnswer": "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
            "options": [
              "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
              "kô (mid), lába, sádehh, áfar, shan",
              "lehh, todòba, sidèd, sagàl, tòban",
              "bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)"
            ],
            "hint": "la-ba-ton, sod-don, a-far-ton, kon-ton, bo-ghol, kun"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fractions: 1/2, 1/3, 1/4, 1/8, 1/16\" in Somali?",
            "correctAnswer": "bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)",
            "options": [
              "kô (mid), lába, sádehh, áfar, shan",
              "lehh, todòba, sidèd, sagàl, tòban",
              "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
              "bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)"
            ],
            "hint": "badh-ki, da-lol-ki, wahh-di, fal-lad-di, ri-ma-di"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali expression with its English meaning:",
            "correctAnswer": "kô (mid), lába, sádehh, áfar, shan: 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "kô (mid), lába, sádehh, áfar, shan",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "lehh, todòba, sidèd, sagàl, tòban",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
                "right": "20, 30, 40, 50, 100, 1,000 (19 = labàton midla)"
              },
              {
                "left": "bađ-ki (1/2), dalòl-ki (1/3), wahh-di (1/4), fallad-di (1/8), rima-di (1/16)",
                "right": "Fractions: 1/2, 1/3, 1/4, 1/8, 1/16"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"The 4 Somali pastoral seasons + Kalil calm interval before rains\": ___",
            "correctAnswer": "Jilal (Jiilaal), Kalil, Gù (Gu'), Hagar (Xagaa / Karif), Dair (Dayr)",
            "options": [
              "kô (mid), lába, sádehh, áfar, shan",
              "lehh, todòba, sidèd, sagàl, tòban",
              "labàton (20), sóddon (30), afárton (40), kónton (50), bóghol (100), kun (1,000)",
              "Jilal (Jiilaal), Kalil, Gù (Gu'), Hagar (Xagaa / Karif), Dair (Dayr)"
            ],
            "hint": "Kirk (1905, Appendix I, p. 134)"
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-2",
    "title": "Unit 2: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Users",
    "skills": [
      {
        "id": "somali-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "Eebbe (Ilaah / Waaq)",
            "source": "God",
            "pronunciation": "eebbe",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "saaxiib (def. saaxiibka)",
            "source": "Friend",
            "pronunciation": "saa-xiib",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "naag / haween",
            "source": "Woman",
            "pronunciation": "naag / ha-ween",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "nin (def. ninka)",
            "source": "Man (adult male)",
            "pronunciation": "nin",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "cunug / ilmo",
            "source": "Child",
            "pronunciation": "cu-nug / ilmo",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "wiil (def. wiilka) / ínan",
            "source": "Boy / son",
            "pronunciation": "wiil / i-nan",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "nin-ki",
            "source": "Man",
            "pronunciation": "nin-ki"
          },
          {
            "target": "wil-ki (Yibir: weled-ki, Midgan: janakh-i)",
            "source": "Boy",
            "pronunciation": "wil-ki"
          },
          {
            "target": "Inăñke",
            "source": "Son",
            "pronunciation": "inanke"
          }
        ],
        "sentences": [
          {
            "target": "Eebbe — saaxiib",
            "source": "God — Friend"
          },
          {
            "target": "naag — nin",
            "source": "Woman — Man"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eebbe\" mean in English?",
            "correctAnswer": "God",
            "options": [
              "God",
              "Friend",
              "Woman",
              "Man (adult male)"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Friend\"",
            "correctAnswer": "saaxiib",
            "acceptedAnswers": [
              "saaxiib (def. saaxiibka)",
              "saaxiib"
            ],
            "hint": "Starts with \"sa\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"naag\"",
            "correctAnswer": "Woman",
            "acceptedAnswers": [
              "Woman",
              "Woman"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Eebbe",
                "right": "God"
              },
              {
                "left": "saaxiib",
                "right": "Friend"
              },
              {
                "left": "naag",
                "right": "Woman"
              },
              {
                "left": "nin",
                "right": "Man"
              },
              {
                "left": "cunug",
                "right": "Child"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "gabadh / inán",
            "source": "Girl / daughter",
            "pronunciation": "ga-badh / i-nan",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "xaas / afo",
            "source": "Wife",
            "pronunciation": "xaas / afo",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "say / nin",
            "source": "Husband",
            "pronunciation": "say / nin",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "hooyo",
            "source": "Mother",
            "pronunciation": "hoo-yo",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "aabbe",
            "source": "Father",
            "pronunciation": "aabbe",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "gabađ-di (Yibir: ilaghan-ti, Midgan: janakh-di)",
            "source": "Girl",
            "pronunciation": "gabađ-di"
          },
          {
            "target": "adèr",
            "source": "Uncle",
            "pronunciation": "a-der"
          },
          {
            "target": "nàg",
            "source": "Woman",
            "pronunciation": "nag"
          },
          {
            "target": "ínan (Yibir: ilaghan, Midgan: janakh)",
            "source": "Child",
            "pronunciation": "inan"
          }
        ],
        "sentences": [
          {
            "target": "gabadh — xaas",
            "source": "Girl — Wife"
          },
          {
            "target": "say — hooyo",
            "source": "Husband — Mother"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"gabadh\" mean in English?",
            "correctAnswer": "Girl / daughter",
            "options": [
              "Girl / daughter",
              "Wife",
              "Husband",
              "Mother"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Wife\"",
            "correctAnswer": "xaas",
            "acceptedAnswers": [
              "xaas / afo",
              "xaas"
            ],
            "hint": "Starts with \"xa\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"say\"",
            "correctAnswer": "Husband",
            "acceptedAnswers": [
              "Husband",
              "Husband"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "gabadh",
                "right": "Girl"
              },
              {
                "left": "xaas",
                "right": "Wife"
              },
              {
                "left": "say",
                "right": "Husband"
              },
              {
                "left": "hooyo",
                "right": "Mother"
              },
              {
                "left": "aabbe",
                "right": "Father"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-3",
    "title": "Unit 3: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Scale",
    "skills": [
      {
        "id": "somali-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "dhan / kulli",
            "source": "All",
            "pronunciation": "dhan / kulli",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "badan",
            "source": "Many / much",
            "pronunciation": "ba-dan",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "kow / hal",
            "source": "One",
            "pronunciation": "kow / hal",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "laba",
            "source": "Two",
            "pronunciation": "la-ba",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "saddex",
            "source": "Three",
            "pronunciation": "saddex",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "afar",
            "source": "Four",
            "pronunciation": "a-far",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "shan",
            "source": "Five",
            "pronunciation": "shan",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "lix",
            "source": "Six",
            "pronunciation": "lix",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "toddoba",
            "source": "Seven",
            "pronunciation": "toddo-ba",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dhan / kulli\" in Somali?",
            "correctAnswer": "All",
            "options": [
              "Many / much",
              "One",
              "Two",
              "All"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"badan\" in Somali?",
            "correctAnswer": "Many / much",
            "options": [
              "One",
              "Two",
              "Many / much",
              "All"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kow / hal\" in Somali?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "One",
              "All",
              "Many / much"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"One\" in Somali?",
            "correctAnswer": "kow / hal",
            "options": [
              "kow / hal",
              "dhan / kulli",
              "badan",
              "laba"
            ],
            "hint": "kow / hal"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Two\" in Somali?",
            "correctAnswer": "laba",
            "options": [
              "dhan / kulli",
              "badan",
              "kow / hal",
              "laba"
            ],
            "hint": "laba"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali expression with its English meaning:",
            "correctAnswer": "dhan / kulli: All",
            "pairs": [
              {
                "left": "dhan / kulli",
                "right": "All"
              },
              {
                "left": "badan",
                "right": "Many / much"
              },
              {
                "left": "kow / hal",
                "right": "One"
              },
              {
                "left": "laba",
                "right": "Two"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"Three\": ___",
            "correctAnswer": "saddex",
            "options": [
              "dhan / kulli",
              "badan",
              "kow / hal",
              "saddex"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          }
        ]
      },
      {
        "id": "somali-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "siddeed",
            "source": "Eight",
            "pronunciation": "siddeed",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "sagaal",
            "source": "Nine",
            "pronunciation": "sa-gaal",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "toban",
            "source": "Ten",
            "pronunciation": "to-ban",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "labaatan",
            "source": "Twenty",
            "pronunciation": "la-baa-tan",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "boqol",
            "source": "Hundred",
            "pronunciation": "bo-qol",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "kun",
            "source": "Thousand",
            "pronunciation": "kun",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "tirin",
            "source": "To count",
            "pronunciation": "ti-rin",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "ilbiriqsi",
            "source": "Second (time unit)",
            "pronunciation": "ilbi-riqsi",
            "hint": "Af-Soomaali — GitHub unicode-org/cldr (so_KE.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "sóddon (30), afárton (40), kónton (50)",
            "source": "Thirty (30), Forty (40), Fifty (50)",
            "pronunciation": "soddon a-farton konton",
            "hint": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language § 46, p. 26"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"siddeed\" in Somali?",
            "correctAnswer": "Eight",
            "options": [
              "Nine",
              "Ten",
              "Twenty",
              "Eight"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sagaal\" in Somali?",
            "correctAnswer": "Nine",
            "options": [
              "Ten",
              "Twenty",
              "Nine",
              "Eight"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"toban\" in Somali?",
            "correctAnswer": "Ten",
            "options": [
              "Twenty",
              "Ten",
              "Eight",
              "Nine"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Ten\" in Somali?",
            "correctAnswer": "toban",
            "options": [
              "toban",
              "siddeed",
              "sagaal",
              "labaatan"
            ],
            "hint": "toban"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Twenty\" in Somali?",
            "correctAnswer": "labaatan",
            "options": [
              "siddeed",
              "sagaal",
              "toban",
              "labaatan"
            ],
            "hint": "labaatan"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali expression with its English meaning:",
            "correctAnswer": "siddeed: Eight",
            "pairs": [
              {
                "left": "siddeed",
                "right": "Eight"
              },
              {
                "left": "sagaal",
                "right": "Nine"
              },
              {
                "left": "toban",
                "right": "Ten"
              },
              {
                "left": "labaatan",
                "right": "Twenty"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"Hundred\": ___",
            "correctAnswer": "boqol",
            "options": [
              "siddeed",
              "sagaal",
              "toban",
              "boqol"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-4",
    "title": "Unit 4: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "somali-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "kari (karin)",
            "source": "To cook",
            "pronunciation": "ka-ri",
            "hint": "Verified comparative entry across Kenyan cushitic corpus"
          },
          {
            "target": "beid",
            "source": "Egg",
            "pronunciation": "beid"
          },
          {
            "target": "‘un (Yibir: ‘ido, Midgan: kusho)",
            "source": "Eat",
            "pronunciation": "‘un"
          },
          {
            "target": "Subak",
            "source": "Fat",
            "pronunciation": "su-bak"
          },
          {
            "target": "fùd",
            "source": "Soup",
            "pronunciation": "fud"
          },
          {
            "target": "‘àno-hi",
            "source": "Milk",
            "pronunciation": "ano-hi"
          },
          {
            "target": "sor-ti (Yibir: manaho-di)",
            "source": "Food",
            "pronunciation": "sor-ti"
          },
          {
            "target": "hilib-ki (Yibir: gujin-ki, Midgan: rihin-ki)",
            "source": "Meat",
            "pronunciation": "hilib-ki"
          },
          {
            "target": "barìs-ki (Yibir: fil iftin, Midgan: langharomed-ki)",
            "source": "Rice",
            "pronunciation": "barìs-ki"
          }
        ],
        "sentences": [
          {
            "target": "kari — beid",
            "source": "To cook — Egg"
          },
          {
            "target": "‘un — Subak",
            "source": "Eat — Fat"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kari\" mean in English?",
            "correctAnswer": "To cook",
            "options": [
              "To cook",
              "Egg",
              "Eat",
              "Fat"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Egg\"",
            "correctAnswer": "beid",
            "acceptedAnswers": [
              "beid",
              "beid"
            ],
            "hint": "Starts with \"be\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"‘un\"",
            "correctAnswer": "Eat",
            "acceptedAnswers": [
              "Eat",
              "Eat"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kari",
                "right": "To cook"
              },
              {
                "left": "beid",
                "right": "Egg"
              },
              {
                "left": "‘un",
                "right": "Eat"
              },
              {
                "left": "Subak",
                "right": "Fat"
              },
              {
                "left": "fùd",
                "right": "Soup"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "Hilip",
            "source": "Meat",
            "pronunciation": "hi-lip"
          },
          {
            "target": "cunto (soor = cooked grain/food)",
            "source": "Food",
            "pronunciation": "oon-toh / sohr"
          },
          {
            "target": "caano",
            "source": "Milk",
            "pronunciation": "caa-no"
          },
          {
            "target": "cusbo",
            "source": "Salt",
            "pronunciation": "cusbo"
          },
          {
            "target": "buux",
            "source": "Full",
            "pronunciation": "buux"
          },
          {
            "target": "‘ab",
            "source": "Drink",
            "pronunciation": "‘ab"
          },
          {
            "target": "bìyo",
            "source": "Water",
            "pronunciation": "bi-yo"
          },
          {
            "target": "Mălăp",
            "source": "Honey",
            "pronunciation": "ma-lap"
          },
          {
            "target": "Hadūt",
            "source": "Maize",
            "pronunciation": "ha-doot"
          }
        ],
        "sentences": [
          {
            "target": "Hilip — cunto",
            "source": "Meat — Food"
          },
          {
            "target": "caano — cusbo",
            "source": "Milk — Salt"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Hilip\" mean in English?",
            "correctAnswer": "Meat",
            "options": [
              "Meat",
              "Food",
              "Milk",
              "Salt"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Food\"",
            "correctAnswer": "cunto",
            "acceptedAnswers": [
              "cunto (soor = cooked grain/food)",
              "cunto"
            ],
            "hint": "Starts with \"cu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"caano\"",
            "correctAnswer": "Milk",
            "acceptedAnswers": [
              "Milk",
              "Milk"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Hilip",
                "right": "Meat"
              },
              {
                "left": "cunto",
                "right": "Food"
              },
              {
                "left": "caano",
                "right": "Milk"
              },
              {
                "left": "cusbo",
                "right": "Salt"
              },
              {
                "left": "buux",
                "right": "Full"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-5",
    "title": "Unit 5: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "somali-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "sayah",
            "source": "Dew",
            "pronunciation": "sa-yah"
          },
          {
            "target": "ghorahh-di (Yibir: iftin-ti, Midgan: iftimowa-hi)",
            "source": "Sun",
            "pronunciation": "ghorahh-di"
          },
          {
            "target": "Dorūr",
            "source": "Sky",
            "pronunciation": "do-roor"
          },
          {
            "target": "gèd",
            "source": "Tree",
            "pronunciation": "ged"
          },
          {
            "target": "‘ìd",
            "source": "Sand",
            "pronunciation": "‘id"
          },
          {
            "target": "gèd-ki / đir-ti (Yibir: awas-ki, Midgan: ghoribirro-di)",
            "source": "Bush",
            "pronunciation": "ged-ki"
          },
          {
            "target": "bùr-ti (Yibir: tomàla-hi, Midgan: makabùr-ti)",
            "source": "Hill",
            "pronunciation": "bùr-ti"
          },
          {
            "target": "dayah-hi (Yibir: iftin-ki, Midgan: iftimowihi himirka)",
            "source": "Moon",
            "pronunciation": "dayah-hi"
          },
          {
            "target": "ròb-ki (Yibir: lawo-hi, Midgan: gomosímo-di)",
            "source": "Rain",
            "pronunciation": "ròb-ki"
          },
          {
            "target": "Dăb",
            "source": "Fire",
            "pronunciation": "dab"
          },
          {
            "target": "Webi / Dōh' (Lake/pond: balli / haro)",
            "source": "River (Lake / pond)",
            "pronunciation": "we-bi"
          }
        ],
        "sentences": [
          {
            "target": "sayah — ghorahh-di",
            "source": "Dew — Sun"
          },
          {
            "target": "Dorūr — gèd",
            "source": "Sky — Tree"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"sayah\" mean in English?",
            "correctAnswer": "Dew",
            "options": [
              "Dew",
              "Sun",
              "Sky",
              "Tree"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sun\"",
            "correctAnswer": "ghorahh-di",
            "acceptedAnswers": [
              "ghorahh-di (Yibir: iftin-ti, Midgan: iftimowa-hi)",
              "ghorahh-di"
            ],
            "hint": "Starts with \"gh\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Dorūr\"",
            "correctAnswer": "Sky",
            "acceptedAnswers": [
              "Sky",
              "Sky"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "sayah",
                "right": "Dew"
              },
              {
                "left": "ghorahh-di",
                "right": "Sun"
              },
              {
                "left": "Dorūr",
                "right": "Sky"
              },
              {
                "left": "gèd",
                "right": "Tree"
              },
              {
                "left": "‘ìd",
                "right": "Sand"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "bógholkaigi ađi",
            "source": "my hundred sheep",
            "pronunciation": "bogholkai-gi adhi",
            "hint": "Lt. J. W. C. Kirk (1905) A Grammar of the Somali Language"
          },
          {
            "target": "Dayah'",
            "source": "Moon",
            "pronunciation": "da-ya-h'"
          },
          {
            "target": "Rōp",
            "source": "Rain",
            "pronunciation": "roh"
          },
          {
            "target": "Hedig",
            "source": "Star",
            "pronunciation": "he-dig"
          },
          {
            "target": "Gēd, Gēdet",
            "source": "Tree",
            "pronunciation": "ged gedet"
          },
          {
            "target": "Dabēl",
            "source": "Wind",
            "pronunciation": "da-beh"
          },
          {
            "target": "ban",
            "source": "Plain",
            "pronunciation": "ban"
          },
          {
            "target": "iftin",
            "source": "Light",
            "pronunciation": "iftin"
          },
          {
            "target": "gèdo-hi",
            "source": "Grass",
            "pronunciation": "gedo-hi"
          }
        ],
        "sentences": [
          {
            "target": "bógholkaigi ađi — Dayah'",
            "source": "my hundred sheep — Moon"
          },
          {
            "target": "Rōp — Hedig",
            "source": "Rain — Star"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"bógholkaigi ađi\" mean in English?",
            "correctAnswer": "my hundred sheep",
            "options": [
              "my hundred sheep",
              "Moon",
              "Rain",
              "Star"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Moon\"",
            "correctAnswer": "Dayah'",
            "acceptedAnswers": [
              "Dayah'",
              "Dayah'"
            ],
            "hint": "Starts with \"Da\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Rōp\"",
            "correctAnswer": "Rain",
            "acceptedAnswers": [
              "Rain",
              "Rain"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "bógholkaigi ađi",
                "right": "my hundred sheep"
              },
              {
                "left": "Dayah'",
                "right": "Moon"
              },
              {
                "left": "Rōp",
                "right": "Rain"
              },
              {
                "left": "Hedig",
                "right": "Star"
              },
              {
                "left": "Gēd, Gēdet",
                "right": "Tree"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-6",
    "title": "Unit 6: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "User",
    "skills": [
      {
        "id": "somali-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "ga‘an-ti (Yibir: gànad-di, Midgan: farolahàto-di)",
            "source": "Arm",
            "pronunciation": "ga‘an-ti"
          },
          {
            "target": "đeg-ti (Yibir: makhali-di, Midgan: makhashin-ti)",
            "source": "Ear",
            "pronunciation": "đeg-ti"
          },
          {
            "target": "il-shi (pl. inđo) (Yibir: ain-ti, Midgan: indókhol-shi)",
            "source": "Eye",
            "pronunciation": "il-shi"
          },
          {
            "target": "lug-ti (Yibir: yal-shi, Midgan: yal-shi / uskin-ki)",
            "source": "Leg",
            "pronunciation": "lug-ti"
          },
          {
            "target": "Sūl",
            "source": "Toe",
            "pronunciation": "sool"
          },
          {
            "target": "sin",
            "source": "Hip",
            "pronunciation": "sin"
          },
          {
            "target": "‘iddi (finger nail); mismar (iron nail)",
            "source": "Nail",
            "pronunciation": "iddi"
          },
          {
            "target": "sàn",
            "source": "Skin",
            "pronunciation": "san"
          },
          {
            "target": "ga‘an",
            "source": "Hand",
            "pronunciation": "ga-‘an"
          }
        ],
        "sentences": [
          {
            "target": "ga‘an-ti — đeg-ti",
            "source": "Arm — Ear"
          },
          {
            "target": "il-shi — lug-ti",
            "source": "Eye — Leg"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ga‘an-ti\" mean in English?",
            "correctAnswer": "Arm",
            "options": [
              "Arm",
              "Ear",
              "Eye",
              "Leg"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Ear\"",
            "correctAnswer": "đeg-ti",
            "acceptedAnswers": [
              "đeg-ti (Yibir: makhali-di, Midgan: makhashin-ti)",
              "đeg-ti"
            ],
            "hint": "Starts with \"đe\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"il-shi\"",
            "correctAnswer": "Eye",
            "acceptedAnswers": [
              "Eye",
              "Eye"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ga‘an-ti",
                "right": "Arm"
              },
              {
                "left": "đeg-ti",
                "right": "Ear"
              },
              {
                "left": "il-shi",
                "right": "Eye"
              },
              {
                "left": "lug-ti",
                "right": "Leg"
              },
              {
                "left": "Sūl",
                "right": "Toe"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "timo-hi",
            "source": "Hair",
            "pronunciation": "timo-hi"
          },
          {
            "target": "madah-hi (Yibir/Midgan: bakhrin-ki)",
            "source": "Head",
            "pronunciation": "bakhrin"
          },
          {
            "target": "ga‘an-ti (Yibir: gànad-di)",
            "source": "Hand",
            "pronunciation": "ga-nad"
          },
          {
            "target": "ag-ti / lug-ti (Yibir/Midgan: yal-shi)",
            "source": "Foot",
            "pronunciation": "yal"
          },
          {
            "target": "laf-ti (Yibir: lafil-shi, Midgan: lafeiti-di)",
            "source": "Bone",
            "pronunciation": "laf-ti"
          },
          {
            "target": "san-ki (Yibir: saneg-gi, Midgan: ‘urshèn-ti)",
            "source": "Nose",
            "pronunciation": "san-ki"
          },
          {
            "target": "sàn-ti (Yibir: huwad-ki, Midgan: gađlahàto-di)",
            "source": "Skin",
            "pronunciation": "sàn-ti"
          },
          {
            "target": "Jitka, Jitkega",
            "source": "Body",
            "pronunciation": "jitka jitke-ga"
          },
          {
            "target": "Wej",
            "source": "Face",
            "pronunciation": "wej"
          }
        ],
        "sentences": [
          {
            "target": "timo-hi — bakhrin",
            "source": "Hair — Head"
          },
          {
            "target": "gànad — yal",
            "source": "Hand — Foot"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"timo-hi\" mean in English?",
            "correctAnswer": "Hair",
            "options": [
              "Hair",
              "Head",
              "Hand",
              "Foot"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Head\"",
            "correctAnswer": "bakhrin",
            "acceptedAnswers": [
              "bakhrin",
              "bakhrin"
            ],
            "hint": "Starts with \"ba\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"gànad\"",
            "correctAnswer": "Hand",
            "acceptedAnswers": [
              "Hand",
              "Hand"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "timo-hi",
                "right": "Hair"
              },
              {
                "left": "bakhrin",
                "right": "Head"
              },
              {
                "left": "gànad",
                "right": "Hand"
              },
              {
                "left": "yal",
                "right": "Foot"
              },
              {
                "left": "laf-ti",
                "right": "Bone"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-7",
    "title": "Unit 7: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Compass",
    "skills": [
      {
        "id": "somali-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "hadal (odhan / yidhi = say)",
            "source": "Speak",
            "pronunciation": "ha-dal",
            "hint": "Kirk 1905 p. 69 & Larajasse 1897"
          },
          {
            "target": "seexo (hurdo)",
            "source": "Sleep",
            "pronunciation": "see-xo",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "imow (kaalay! = come!)",
            "source": "Come",
            "pronunciation": "i-mow",
            "hint": "Kirk 1905 p. 71 & Larajasse 1897"
          },
          {
            "target": "tag (socdaal)",
            "source": "Go",
            "pronunciation": "tag",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "cab (dham)",
            "source": "Drink",
            "pronunciation": "cab",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "cun (quudo)",
            "source": "Eat",
            "pronunciation": "cun",
            "hint": "Kirk 1905 & Larajasse 1897"
          },
          {
            "target": "weidi",
            "source": "Ask",
            "pronunciation": "wei-di"
          },
          {
            "target": "bari (Yibir: gorbei)",
            "source": "Beg",
            "pronunciation": "bari"
          },
          {
            "target": "dil (Yibir: rùfi, Midgan: rôfi / orèmi)",
            "source": "Kill",
            "pronunciation": "dil"
          }
        ],
        "sentences": [
          {
            "target": "hadal — seexo",
            "source": "Speak — Sleep"
          },
          {
            "target": "imow — tag",
            "source": "Come — Go"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"hadal\" mean in English?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Come",
              "Go"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep\"",
            "correctAnswer": "seexo",
            "acceptedAnswers": [
              "seexo (hurdo)",
              "seexo"
            ],
            "hint": "Starts with \"se\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"imow\"",
            "correctAnswer": "Come",
            "acceptedAnswers": [
              "Come",
              "Come"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "hadal",
                "right": "Speak"
              },
              {
                "left": "seexo",
                "right": "Sleep"
              },
              {
                "left": "imow",
                "right": "Come"
              },
              {
                "left": "tag",
                "right": "Go"
              },
              {
                "left": "cab",
                "right": "Drink"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "ogòlo",
            "source": "Agree",
            "pronunciation": "o-go-lo"
          },
          {
            "target": "jìf (Yibir: midi, Midgan: limdi)",
            "source": "Lie down",
            "pronunciation": "jìf"
          },
          {
            "target": "so wada kahhai",
            "source": "Bring all",
            "pronunciation": "so wa-da kahhai"
          },
          {
            "target": "dabol",
            "source": "Cover, shut",
            "pronunciation": "da-bol"
          },
          {
            "target": "sid",
            "source": "Carry, bring",
            "pronunciation": "sid"
          },
          {
            "target": "đal (Yibir: jagh‘id, Midgan: finfin)",
            "source": "Bear (beget)",
            "pronunciation": "đal"
          },
          {
            "target": "iss dil",
            "source": "Kill yourself",
            "pronunciation": "iss dil"
          },
          {
            "target": "bein-ti (Yibir: hekho-di / aintoli-di)",
            "source": "Lie (untruth)",
            "pronunciation": "bein-ti"
          },
          {
            "target": "iss laya",
            "source": "Slay each other",
            "pronunciation": "iss la-ya"
          }
        ],
        "sentences": [
          {
            "target": "ogòlo — jìf",
            "source": "Agree — Lie down"
          },
          {
            "target": "so wada kahhai — dabol",
            "source": "Bring all — Cover, shut"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ogòlo\" mean in English?",
            "correctAnswer": "Agree",
            "options": [
              "Agree",
              "Lie down",
              "Bring all",
              "Cover, shut"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Lie down\"",
            "correctAnswer": "jìf",
            "acceptedAnswers": [
              "jìf (Yibir: midi, Midgan: limdi)",
              "jìf"
            ],
            "hint": "Starts with \"jì\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"so wada kahhai\"",
            "correctAnswer": "Bring all",
            "acceptedAnswers": [
              "Bring all",
              "Bring all"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ogòlo",
                "right": "Agree"
              },
              {
                "left": "jìf",
                "right": "Lie down"
              },
              {
                "left": "so wada kahhai",
                "right": "Bring all"
              },
              {
                "left": "dabol",
                "right": "Cover, shut"
              },
              {
                "left": "sid",
                "right": "Carry, bring"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-8",
    "title": "Unit 8: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Map",
    "skills": [
      {
        "id": "somali-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "màlin, ‘asho",
            "source": "Day",
            "pronunciation": "malin asho"
          },
          {
            "target": "kol",
            "source": "Time",
            "pronunciation": "kol"
          },
          {
            "target": "kolkas (Yibir: kulhidas, Midgan: naskas)",
            "source": "Then",
            "pronunciation": "kolkas"
          },
          {
            "target": "gù-gi (Yibir: lawo-hi, Midgan: erifogad-ki)",
            "source": "Year",
            "pronunciation": "gù-gi"
          },
          {
            "target": "kolki (Yibir: kulhídi)",
            "source": "When",
            "pronunciation": "kolki"
          },
          {
            "target": "daha",
            "source": "Often",
            "pronunciation": "da-ha"
          },
          {
            "target": "habèn",
            "source": "Night",
            "pronunciation": "ha-ben"
          },
          {
            "target": "Maanta",
            "source": "Today",
            "pronunciation": "maanta"
          },
          {
            "target": "gorma?",
            "source": "When?",
            "pronunciation": "gorma"
          }
        ],
        "sentences": [
          {
            "target": "màlin, ‘asho — kol",
            "source": "Day — Time"
          },
          {
            "target": "kolkas — gù-gi",
            "source": "Then — Year"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"màlin, ‘asho\" mean in English?",
            "correctAnswer": "Day",
            "options": [
              "Day",
              "Time",
              "Then",
              "Year"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Time\"",
            "correctAnswer": "kol",
            "acceptedAnswers": [
              "kol",
              "kol"
            ],
            "hint": "Starts with \"ko\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kolkas\"",
            "correctAnswer": "Then",
            "acceptedAnswers": [
              "Then",
              "Then"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "màlin, ‘asho",
                "right": "Day"
              },
              {
                "left": "kol",
                "right": "Time"
              },
              {
                "left": "kolkas",
                "right": "Then"
              },
              {
                "left": "gù-gi",
                "right": "Year"
              },
              {
                "left": "kolki",
                "right": "When"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "hor (Yibir: horyad, Midgan: horyalin)",
            "source": "Before",
            "pronunciation": "hor"
          },
          {
            "target": "Berri",
            "source": "Tomorrow",
            "pronunciation": "berri"
          },
          {
            "target": "shălei",
            "source": "Yesterday",
            "pronunciation": "sha-lei"
          },
          {
            "target": "wakhtiga aagga",
            "source": "Time zone",
            "pronunciation": "wakhti-ga aagga"
          },
          {
            "target": "gortas-u yiđi",
            "source": "Then-he said",
            "pronunciation": "gortas-u yidhi"
          },
          {
            "target": "gortasu yiđi",
            "source": "Then he said",
            "pronunciation": "gorta-su yidhi"
          },
          {
            "target": "May",
            "source": "May (Month 5)",
            "pronunciation": "may"
          },
          {
            "target": "Juun (Jun)",
            "source": "June (Month 6)",
            "pronunciation": "juun"
          },
          {
            "target": "Luuliyo (Lul)",
            "source": "July (Month 7)",
            "pronunciation": "luuliyo"
          }
        ],
        "sentences": [
          {
            "target": "hor — Berri",
            "source": "Before — Tomorrow"
          },
          {
            "target": "shălei — wakhtiga aagga",
            "source": "Yesterday — Time zone"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"hor\" mean in English?",
            "correctAnswer": "Before",
            "options": [
              "Before",
              "Tomorrow",
              "Yesterday",
              "Time zone"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Tomorrow\"",
            "correctAnswer": "Berri",
            "acceptedAnswers": [
              "Berri",
              "Berri"
            ],
            "hint": "Starts with \"Be\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"shălei\"",
            "correctAnswer": "Yesterday",
            "acceptedAnswers": [
              "Yesterday",
              "Yesterday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "hor",
                "right": "Before"
              },
              {
                "left": "Berri",
                "right": "Tomorrow"
              },
              {
                "left": "shălei",
                "right": "Yesterday"
              },
              {
                "left": "wakhtiga aagga",
                "right": "Time zone"
              },
              {
                "left": "gortas-u yiđi",
                "right": "Then-he said"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-9",
    "title": "Unit 9: Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "somali-phrases-idioms-everyday-dialogue-9",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "Nabad",
            "source": "Peace",
            "pronunciation": "nah-bahd"
          },
          {
            "target": "Nabad! / Ma nabad baa? (resp. Waa nabad!)",
            "source": "Hello",
            "pronunciation": "nah-bahd / mah nah-bahd bah"
          },
          {
            "target": "soo dhawoow (pl. soo dhawaada)",
            "source": "Welcome!",
            "pronunciation": "soo dhawoow"
          },
          {
            "target": "Mahadsanid (Aad baad u mahadsan tahay)",
            "source": "Thank you",
            "pronunciation": "mah-hahd-sah-need"
          },
          {
            "target": "Illàhhi maháddi",
            "source": "Thank God",
            "pronunciation": "illahhi ma-haddi"
          },
          {
            "target": "insha Allahh wa la hele",
            "source": "Please God, we may find it",
            "pronunciation": "insha allahh wa la he-le"
          },
          {
            "target": "nabad gelyo",
            "source": "Goodbye (lit. enter into peace)",
            "pronunciation": "na-bad gelyo"
          },
          {
            "target": "Nabad / Ma nabad baa?",
            "source": "Peace / Hello (traditional greeting)",
            "pronunciation": "na-bad / ma na-bad baa"
          },
          {
            "target": "yafnan-ti",
            "source": "Goodness, health, Peace (Yibir register)",
            "pronunciation": "yafnan-ti"
          }
        ],
        "sentences": [
          {
            "target": "Nabad — Nabad!",
            "source": "Peace — Hello"
          },
          {
            "target": "soo dhawoow — Mahadsanid",
            "source": "Welcome! — Thank you"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Nabad\" mean in English?",
            "correctAnswer": "Peace",
            "options": [
              "Peace",
              "Hello",
              "Welcome!",
              "Thank you"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Hello\"",
            "correctAnswer": "Nabad!",
            "acceptedAnswers": [
              "Nabad! / Ma nabad baa? (resp. Waa nabad!)",
              "Nabad!"
            ],
            "hint": "Starts with \"Na\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"soo dhawoow\"",
            "correctAnswer": "Welcome!",
            "acceptedAnswers": [
              "Welcome!",
              "Welcome!"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Nabad",
                "right": "Peace"
              },
              {
                "left": "Nabad!",
                "right": "Hello"
              },
              {
                "left": "soo dhawoow",
                "right": "Welcome!"
              },
              {
                "left": "Mahadsanid",
                "right": "Thank you"
              },
              {
                "left": "Illàhhi maháddi",
                "right": "Thank God"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-phrases-idioms-courtesy-discourse-9",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "madax",
            "source": "Head / leader",
            "pronunciation": "ma-dax",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "dheg (deg)",
            "source": "Ear",
            "pronunciation": "dheg",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "il (pl. indho)",
            "source": "Eye",
            "pronunciation": "il",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "san",
            "source": "Nose",
            "pronunciation": "san",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "af",
            "source": "Mouth / language",
            "pronunciation": "af",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "ilig (pl. ilkaha)",
            "source": "Tooth",
            "pronunciation": "i-lig",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "carrab",
            "source": "Tongue",
            "pronunciation": "carrab",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "ciddi",
            "source": "Fingernail",
            "pronunciation": "ciddi",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "target": "cag",
            "source": "Foot",
            "pronunciation": "cag",
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"madax\" in Somali?",
            "correctAnswer": "Head / leader",
            "options": [
              "Ear",
              "Eye",
              "Nose",
              "Head / leader"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"il (pl. indho)\" in Somali?",
            "correctAnswer": "Eye",
            "options": [
              "Nose",
              "Eye",
              "Head / leader",
              "Ear"
            ],
            "hint": "Wiktionary Appendix:Somali Swadesh list & Wikipedia Somali grammar"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali expression with its English meaning:",
            "correctAnswer": "madax: Head / leader",
            "pairs": [
              {
                "left": "madax",
                "right": "Head / leader"
              },
              {
                "left": "dheg (deg)",
                "right": "Ear"
              },
              {
                "left": "il (pl. indho)",
                "right": "Eye"
              },
              {
                "left": "san",
                "right": "Nose"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-10",
    "title": "Unit 10: Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Somali built directly from Rev. Fr. Evangelist de Larajasse (1897), Lt. J. W. C. Kirk (1903, 1905), and C. R. V. Bell (1953).",
    "icon": "Globe",
    "skills": [
      {
        "id": "somali-oral-wisdom-literature-proverbs-riddles-10",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "Far keliya fool ma dhaqdo.",
            "source": "A single finger cannot wash a face.",
            "hint": "Cooperation and unity are indispensable; no individual can succeed entirely alone."
          },
          {
            "target": "Aqoon la’aani waa iftiin la’aan.",
            "source": "Lack of knowledge is lack of light.",
            "hint": "Education and wisdom illuminate life like a lamp in the dark."
          },
          {
            "target": "Geel laba jir soo wada mar.",
            "source": "Every camel was once two years old.",
            "hint": "Every master or elder was once a beginner; be patient with learners and humble in success."
          },
          {
            "target": "Nin aan dhul marin dhaayo ma leh (Kirk 1905).",
            "source": "A man who has not travelled the land has no eyes (insight).",
            "hint": "Experience and observation of the wider world broaden human understanding (grounded in J. W. C. Kirk’s 1905 Somali prose & Gabei/Gerar oral poetry)."
          },
          {
            "target": "Hawl adun ma đamáto ninba wa intis.",
            "source": "The work of the world finishes not; each man has his share.",
            "hint": "Recorded verbatim by Lt. J. W. C. Kirk in \"A Grammar of the Somali Language\" (1905, § 227, p. 111): human labour is unending, so each person should faithfully fulfil their own portion."
          },
          {
            "target": "Tollimòno ka dòrne, o sàmir bannu dèdallei — O war, tollo, inna daya!",
            "source": "We must choose brotherhood as one tribe, and strive for peace — O ye tribes, desist from strife!",
            "hint": "Recorded verbatim by Lt. J. W. C. Kirk in \"A Grammar of the Somali Language\" (1905, Song IV, p. 176): classical Geeraar peace appeal urging clans to choose kinship (tollimòno) and patience/peace (sàmir) over feud."
          },
          {
            "target": "Gerar wa bogholal, wa bađwein iyo môjad, wa babùrki sidìsa.",
            "source": "Geeraar songs are in hundreds, like the great ocean and its waves, like the ships.",
            "hint": "Recorded verbatim by Lt. J. W. C. Kirk in \"A Grammar of the Somali Language\" (1905, Song VIII, p. 178): celebrates the boundless depth of Somali oral poetry."
          },
          {
            "target": "sirad",
            "source": "Lamp"
          },
          {
            "target": "bul",
            "source": "Nest"
          }
        ],
        "sentences": [
          {
            "target": "Far keliya fool ma dhaqdo. — Aqoon la’aani waa iftiin la’aan.",
            "source": "A single finger cannot wash a face. — Lack of knowledge is lack of light."
          },
          {
            "target": "Geel laba jir soo wada mar. — Nin aan dhul marin dhaayo ma leh.",
            "source": "Every camel was once two years old. — A man who has not travelled the land has no eyes."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Far keliya fool ma dhaqdo.\" mean in English?",
            "correctAnswer": "A single finger cannot wash a face.",
            "options": [
              "A single finger cannot wash a face.",
              "Lack of knowledge is lack of light.",
              "Every camel was once two years old.",
              "A man who has not travelled the land has no eyes (insight)."
            ],
            "hint": "Core vocabulary in Traditional Proverbs, Riddles & Aphorisms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Lack of knowledge is lack of light.\"",
            "correctAnswer": "Aqoon la’aani waa iftiin la’aan.",
            "acceptedAnswers": [
              "Aqoon la’aani waa iftiin la’aan.",
              "Aqoon la’aani waa iftiin la’aan."
            ],
            "hint": "Starts with \"Aq\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Geel laba jir soo wada mar.\"",
            "correctAnswer": "Every camel was once two years old.",
            "acceptedAnswers": [
              "Every camel was once two years old.",
              "Every camel was once two years old."
            ],
            "hint": "Review Traditional Proverbs, Riddles & Aphorisms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Traditional Proverbs, Riddles & Aphorisms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Far keliya fool ma dhaqdo.",
                "right": "A single finger cannot wash a face."
              },
              {
                "left": "Aqoon la’aani waa iftiin la’aan.",
                "right": "Lack of knowledge is lack of light."
              },
              {
                "left": "Geel laba jir soo wada mar.",
                "right": "Every camel was once two years old."
              },
              {
                "left": "Nin aan dhul marin dhaayo ma leh.",
                "right": "A man who has not travelled the land has no eyes."
              },
              {
                "left": "Hawl adun ma đamáto ninba wa intis.",
                "right": "The work of the world finishes not"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-oral-wisdom-literature-ethnographic-lexicon-10",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Somali (Af-Soomaali) in Rev. Fr. Evangelist de Larajasse (1897), Sir Harry Johnston (1902) & Lt. J. W. C. Kirk (1905) preserves pre-1930 phonological, grammatical, and ethnographic usage across Garissa, Wajir, Mandera.",
        "words": [
          {
            "target": "dādis",
            "source": "shedding",
            "pronunciation": "da-dis",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "daba hau",
            "source": "stomach ache",
            "pronunciation": "da-ba hau",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [f.n.]"
          },
          {
            "target": "dada‘",
            "source": "stride",
            "pronunciation": "da-da‘",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "daba halloh",
            "source": "scorpion",
            "pronunciation": "da-ba halloh",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "daba galla",
            "source": "squirrel.—hi (earth squirrel living in holes)",
            "pronunciation": "da-ba galla",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "dadab",
            "source": "dream",
            "pronunciation": "da-dab",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "dabagelis",
            "source": "crupper of a camel's saddle",
            "pronunciation": "da-ba-ge-lis",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "dabol",
            "source": "lid, cover (for anything)",
            "pronunciation": "da-bol",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "target": "dabolaw",
            "source": "be covered",
            "pronunciation": "da-bo-law",
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [v.tr.]"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dādis\" in Somali (Af-Soomaali)?",
            "correctAnswer": "shedding",
            "options": [
              "shedding",
              "stomach ache",
              "stride",
              "scorpion"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Somali (Af-Soomaali) term to its English meaning:",
            "correctAnswer": "dādis: shedding",
            "pairs": [
              {
                "left": "dādis",
                "right": "shedding"
              },
              {
                "left": "daba hau",
                "right": "stomach ache"
              },
              {
                "left": "dada‘",
                "right": "stride"
              },
              {
                "left": "daba halloh",
                "right": "scorpion"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali (Af-Soomaali) term for \"squirrel.—hi (earth squirrel living in holes)\": ___",
            "correctAnswer": "daba galla",
            "options": [
              "daba galla",
              "dādis",
              "daba hau",
              "dada‘"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse (1897) Somali-English and English-Somali Dictionary [m.n.]"
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-11-public-domain-corpus",
    "title": "Unit 11: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Somali vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "somali-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Somali headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Somali linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "dalo",
            "source": "top of the head",
            "pronunciation": "da-lo",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dalah",
            "source": "divorce (see fur)",
            "pronunciation": "da-lah",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dalan",
            "source": "children (m.n.pl)",
            "pronunciation": "da-lan",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "si derai",
            "source": "deepen (sink far below the surface)",
            "pronunciation": "si de-rai",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "an dal lahain",
            "source": "without limit (locution)",
            "pronunciation": "an dal la-hain",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dembabi",
            "source": "make him sin (v.c)",
            "pronunciation": "demba-bi",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "daha",
            "source": "often (ad)",
            "pronunciation": "da-ha",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "mid",
            "source": "One",
            "pronunciation": "mid"
          }
        ],
        "sentences": [
          {
            "target": "dalo — dalah",
            "source": "top of the head — divorce"
          },
          {
            "target": "dalan — si derai",
            "source": "children — deepen"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"dalo\" mean in English?",
            "correctAnswer": "top of the head",
            "options": [
              "top of the head",
              "divorce (see fur)",
              "children (m.n.pl)",
              "deepen (sink far below the surface)"
            ],
            "hint": "Core vocabulary in Classical Roots & Naming Traditions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"divorce (see fur)\"",
            "correctAnswer": "dalah",
            "acceptedAnswers": [
              "dalah",
              "dalah"
            ],
            "hint": "Starts with \"da\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dalan\"",
            "correctAnswer": "children",
            "acceptedAnswers": [
              "children (m.n.pl)",
              "children"
            ],
            "hint": "Review Classical Roots & Naming Traditions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Classical Roots & Naming Traditions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "dalo",
                "right": "top of the head"
              },
              {
                "left": "dalah",
                "right": "divorce"
              },
              {
                "left": "dalan",
                "right": "children"
              },
              {
                "left": "si derai",
                "right": "deepen"
              },
              {
                "left": "an dal lahain",
                "right": "without limit"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Somali ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Somali transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "dembab",
            "source": "sin, commit a sin",
            "pronunciation": "dembab",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dagihi",
            "source": "throw stones, stone",
            "pronunciation": "da-gi-hi",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "deman",
            "source": "diamond",
            "pronunciation": "de-man",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dadki dintai",
            "source": "the dead",
            "pronunciation": "dadki dintai",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dein ka tur",
            "source": "delator, denunciator",
            "pronunciation": "dein ka tur",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dad‘unah",
            "source": "fierce, wild",
            "pronunciation": "dad‘u-nah",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dein",
            "source": "omission, leaving",
            "pronunciation": "dein",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dabīhad",
            "source": "sacrifice, victim",
            "pronunciation": "da-bi-had",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          }
        ],
        "sentences": [],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dembab\" in Somali?",
            "correctAnswer": "sin, commit a sin",
            "options": [
              "sin, commit a sin",
              "throw stones, stone",
              "diamond",
              "the dead"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Somali term from the public-domain corpus to its English meaning:",
            "correctAnswer": "dembab: sin, commit a sin",
            "pairs": [
              {
                "left": "dembab",
                "right": "sin, commit a sin"
              },
              {
                "left": "dagihi",
                "right": "throw stones, stone"
              },
              {
                "left": "deman",
                "right": "diamond"
              },
              {
                "left": "dadki dintai",
                "right": "the dead"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"delator, denunciator\": ___",
            "correctAnswer": "dein ka tur",
            "options": [
              "dein ka tur",
              "dad‘unah",
              "dembab",
              "dagihi"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-12-open-datasets-modern",
    "title": "Unit 12: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Somali vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "somali-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Activity",
        "description": "Learn core Somali verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Somali dialects and everyday speech.",
        "words": [
          {
            "target": "degta dahasheda",
            "source": "the tip of the ear (locution)",
            "pronunciation": "degta da-hashe-da",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dabah",
            "source": "sacrifice",
            "pronunciation": "da-bah",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "ku dega, ku degta",
            "source": "adhesive",
            "pronunciation": "ku de-ga ku degta",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dabain",
            "source": "affirmation",
            "pronunciation": "da-bain",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dabai",
            "source": "affirm, assure; kaga —, make certain",
            "pronunciation": "da-bai",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dab",
            "source": "certainly",
            "pronunciation": "dab",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "daren",
            "source": "perception, sensation",
            "pronunciation": "da-ren",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "lehh (Yibir: gànad iyo deri)",
            "source": "Six",
            "pronunciation": "lehh"
          }
        ],
        "sentences": [
          {
            "target": "degta dahasheda — dabah",
            "source": "the tip of the ear — sacrifice"
          },
          {
            "target": "ku dega, ku degta — dabain",
            "source": "adhesive — affirmation"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"degta dahasheda\" mean in English?",
            "correctAnswer": "the tip of the ear (locution)",
            "options": [
              "the tip of the ear (locution)",
              "sacrifice",
              "adhesive",
              "affirmation"
            ],
            "hint": "Core vocabulary in Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"sacrifice\"",
            "correctAnswer": "dabah",
            "acceptedAnswers": [
              "dabah",
              "dabah"
            ],
            "hint": "Starts with \"da\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ku dega, ku degta\"",
            "correctAnswer": "adhesive",
            "acceptedAnswers": [
              "adhesive",
              "adhesive"
            ],
            "hint": "Review Core Swadesh & Cultural Vocabulary"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Core Swadesh & Cultural Vocabulary with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "degta dahasheda",
                "right": "the tip of the ear"
              },
              {
                "left": "dabah",
                "right": "sacrifice"
              },
              {
                "left": "ku dega, ku degta",
                "right": "adhesive"
              },
              {
                "left": "dabain",
                "right": "affirmation"
              },
              {
                "left": "dabai",
                "right": "affirm, assure"
              }
            ]
          }
        ]
      },
      {
        "id": "somali-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Somali terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Somali roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "da‘nin",
            "source": "sack (of a town), pillage",
            "pronunciation": "da‘nin",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "dardar",
            "source": "the three stones on which they put their boiler",
            "pronunciation": "dardar",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "burush",
            "source": "brush",
            "pronunciation": "bu-rush",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "damur",
            "source": "tar, pitch",
            "pronunciation": "da-mur",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "buro iss ku yal",
            "source": "a range of mountains; burihi iss ku yil plur",
            "pronunciation": "bu-ro iss ku yal",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "damoh",
            "source": "cataplasm, poultice",
            "pronunciation": "da-moh",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "buro‘",
            "source": "a mound of sand; bura‘ha",
            "pronunciation": "bu-ro‘",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "target": "burambur",
            "source": "sing (used only for women)",
            "pronunciation": "bu-rambur",
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          }
        ],
        "sentences": [
          {
            "target": "Wahha inđála, ninki an oghòn lahain, ya inđala.",
            "source": "He that is blind is the man who knows nothing, he is blind (Kirk 1905, Story X, p. 161)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"da‘nin\" in Somali?",
            "correctAnswer": "sack (of a town), pillage",
            "options": [
              "sack (of a town), pillage",
              "the three stones on which they put their boiler",
              "brush",
              "tar, pitch"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Somali term from the public-domain corpus to its English meaning:",
            "correctAnswer": "da‘nin: sack (of a town), pillage",
            "pairs": [
              {
                "left": "da‘nin",
                "right": "sack (of a town), pillage"
              },
              {
                "left": "dardar",
                "right": "the three stones on which they put their boiler"
              },
              {
                "left": "burush",
                "right": "brush"
              },
              {
                "left": "damur",
                "right": "tar, pitch"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Somali term for \"a range of mountains; burihi iss ku yil\": ___",
            "correctAnswer": "buro iss ku yal",
            "options": [
              "buro iss ku yal",
              "damoh",
              "da‘nin",
              "dardar"
            ],
            "hint": "Rev. Fr. Evangelist de Larajasse, Somali-English Dictionary (1897 — Public Domain)"
          }
        ]
      }
    ]
  },
  {
    "id": "somali-unit-larajasse-1897-dictionary-supplement",
    "title": "Unit 11: De Larajasse (1897) Phonetics, Ogaden/Darod Idioms, Fauna & Lexicon",
    "description": "Master Rev. Fr. Evangelist de Larajasse's 1897 Somali-English and English-Somali Dictionary: Preface minimal pairs, Ogaden/Darod dialect expressions, East African wildlife taxonomy, rupee currency, and conversational sentences from Book Pages 26, 123, 127, 242, 266 & 293.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "somali-larajasse-1897-preface-fauna-currency",
        "title": "Preface Minimal Pairs, East African Fauna, Currency & Clan Dialect Notes",
        "icon": "Compass",
        "description": "Learn the vowel-length minimal pairs in De Larajasse's 1897 Preface, East African antelope names, rupee currency, and Ogaden/Darod dialect idioms.",
        "tips": "De Larajasse (1897, pp. vii–viii) contrasts long vs. short vowels in sōr ('food') vs. kol ('time') and gūr ('marriage') vs. gur ('pick up'), and notes on p. 118 that rubiad ('rupee', pl. rubabi) contracts to rubod in counting.",
        "culturalNote": "Source attribution: Rev. Fr. Evangelist de Larajasse, 'Somali-English and English-Somali Dictionary' (London: Kegan Paul, Trench, Trübner & Co., 1897 — Public Domain).",
        "words": [
          {
            "target": "ader (ah-dare) • sōr vs. kol • gūr vs. gur • maya (matha)",
            "source": "Paternal uncle • Food vs. time • Marriage vs. pick up • No (Preface pp. vii–xii pronunciation examples)",
            "pronunciation": "ah-dare / sore vs koll / goore vs goor / matha",
            "hint": "De Larajasse (1897, Preface pp. vii–xii)"
          },
          {
            "target": "si‘g,—gi • garanug,—ti & lig,—gi • adéryo,—adi, adéryo ‘ari,—gi & godir,—ki • b‘e‘id / bi‘‘id,—ki • sagaro / sakaro,—adi • dabatag,—ti",
            "source": "Coke's hartebeest • Female & male gerenuk • Female, lesser & male greater kudu • Beisa oryx • Dik-dik • Clarke's roebuck",
            "pronunciation": "si‘g / ga-ra-nug / lig / a-der-yo ‘a-ri / go-dir / b‘e‘id / sa-ga-ro / da-ba-tag",
            "hint": "De Larajasse (1897, pp. 4, 19, 26, 54, 56, 100, 120, 127, 170, 194, 221, 231, 245)"
          },
          {
            "target": "rubiad,—di (pl. rubabi; counting: rubod) & rubi,—gi (1s. / 8 annas) • rubiadda i sarrif!",
            "source": "Rupee & half-rupee (1 shilling / 8 annas) • Change me the rupee!",
            "pronunciation": "ru-bi-ad / ru-ba-bi / ru-bod / ru-bi / sar-rif",
            "hint": "De Larajasse (1897, pp. 118, 123)"
          },
          {
            "target": "wa debai / wa i debai (Ogaden, Dulbanteh & Darod, p. 293) • daba galla,—hi vs. walo,—adi (pp. 26, 270) • sawaheli,—gi / sawahili,—gi (pp. 123, 242, 266)",
            "source": "Ogaden, Dulbanteh & Darod dialect locution • Earth squirrel ('Galla-tail') vs. rock squirrel • Swahili coast reference",
            "pronunciation": "wa de-bai / da-ba gal-la / wa-lo / sa-wa-he-li",
            "hint": "De Larajasse (1897, pp. 26, 123, 242, 266, 270, 293)"
          }
        ],
        "sentences": [
          {
            "target": "War san ban ku sida! Rubiadda i sarrif.",
            "source": "I bring to you good news! Change me the rupee (De Larajasse 1897, pp. 123, 127)."
          },
          {
            "target": "Wa dantisi; aya dan leh? — Ana dan leh.",
            "source": "It is his concern; who has anything to say? — I have something to say (De Larajasse 1897, Supplement p. 293)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Rev. Fr. Evangelist de Larajasse's Somali-English Dictionary (1897, pp. 4, 54, 56, 100, 231), how are male and female kudu and gerenuk antelopes distinguished?",
            "correctAnswer": "Female/general kudu is 'adéryo' (lesser kudu: 'adéryo ‘ari') and male kudu is 'godir'; female gerenuk is 'garanug' and male gerenuk is 'lig'",
            "options": [
              "Female/general kudu is 'adéryo' (lesser kudu: 'adéryo ‘ari') and male kudu is 'godir'; female gerenuk is 'garanug' and male gerenuk is 'lig'",
              "Male kudu is 'si‘g' and female kudu is 'sakaro'",
              "Male gerenuk is 'daba galla' and female gerenuk is 'walo'",
              "Male kudu is 'dabatag' and female kudu is 'b‘e‘id'"
            ],
            "hint": "See De Larajasse (1897, pp. 4, 54, 56, 100, 231)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Somali minimal pair or idiom from De Larajasse (1897) with its English meaning:",
            "correctAnswer": "gūr vs. gur: Marriage (long ū) vs. pick up (short u) (Preface p. viii)",
            "pairs": [
              {
                "left": "gūr vs. gur",
                "right": "Marriage (long ū) vs. pick up (short u) (Preface p. viii)"
              },
              {
                "left": "sōr vs. kol",
                "right": "Food (long ō) vs. time (short o) (Preface p. vii)"
              },
              {
                "left": "dereb, furad, weilalis, gibil",
                "right": "Skins sewn to carry children, make a couch, or cover a shed (p. 266)"
              },
              {
                "left": "dilimihi wa simanyihin",
                "right": "The lines are parallel (p. 127)"
              }
            ]
          }
        ]
      }
    ]
  }
];

// ── Unit 16: Complete Line-by-Line Integration of Morgan Nilsson (2016, Ch. 23, pp. 451–466, DOI: 10.17169/langsci.b121.494), "Somali gender polarity revisited", in Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, eds., Diversity in African languages ──
SOMALI_UNITS.push({
  "id": "somali-unit-16-nilsson-2016-gender-polarity-complete",
  "title": "Unit 16: Somali Gender Polarity Revisited (Nilsson 2016)",
  "description": "Master Morgan Nilsson's (2016, Ch. 23, pp. 451–466) complete analysis of Somali definite article allomorphy ({k} vs. {t}), penultimate vs. final tonal accent, Corbett's agreement criterion, stem-syllable plural article rules, 5th-declension collectives, Arabic broken plurals, and corporate/generic agreement.",
  "icon": "BookOpen",
  "number": 16,
  "color": "#0284C7",
  "skills": [
    {
      "id": "somali-nilsson-2016-16-1-articles-tone-syllables",
      "title": "Tonal Accent, Corbett's Agreement Criterion & Stem-Syllable Plural Article Rules (Tables 1–8 & 15, pp. 451–457, 465)",
      "icon": "BookOpen",
      "description": "Learn why Somali nouns have a single invariant gender and how the plural definite article {k} vs. {t} is predicted from singular gender and stem syllable count.",
      "tips": "In Nilsson (2016, Ch. 23, Table 5, p. 454), plural agreement targets have a single gender-neutral form: verb -aan/-een, pronoun ay/iyaga, demonstrative kuwan, possessive -ood. The plural definite article is {k} for all feminine nouns and for masculine nouns with monosyllabic stems before the plural suffix, and {t} for masculine nouns with polysyllabic stems (Tables 6 & 15).",
      "words": [
        {
          "target": "ínan → ínan-k-a (M) vs. inán → inán-t-a (F) • gámbar-k-a (M) vs. sabáb-t-a (F)",
          "source": "the boy (penultimate H tone + {k}) vs. the girl (final H tone + {t}) • the stool vs. the reason",
          "pronunciation": "í-nan-ka / i-nán-ta / gám-bar-ka / sa-báb-ta",
          "hint": "Nilsson (2016, Ch. 23, pp. 452–453, Tables 1–3)"
        },
        {
          "target": "Plural Agreement Targets (Table 5): -aan/-een (verbs) • ay / iyaga (pronouns) • kuwan (demonstrative) • -ood (possessive)",
          "source": "Single gender-neutral plural target forms proving that Somali has no gender distinction in the plural",
          "pronunciation": "-aan / -een / ay / i-ya-ga / ku-wan / -ood",
          "hint": "Nilsson (2016, Ch. 23, p. 454, Table 5)"
        },
        {
          "target": "Feminine Plurals with {k}: sabab-a-h-a • mindi-ya-h-a • hooyo-oyin-k-a",
          "source": "the reasons • the knives • the mothers (feminine nouns regularly take {k} in the plural)",
          "pronunciation": "sa-ba-ba-ha / min-di-ya-ha / hoo-yo-o-yin-ka",
          "hint": "Nilsson (2016, Ch. 23, pp. 455, 465, Tables 6 & 15)"
        },
        {
          "target": "Masculine Monosyllabic Stems with {k}: miis-as-k-a • geed-a-h-a • jilb-a-h-a (vs. wiil-a-sh-a & walaal-a-h-a, fn. 8)",
          "source": "the tables • the trees • the knees (masculine 1-syllable stems before the plural suffix take {k})",
          "pronunciation": "mii-sas-ka / gee-da-ha / jil-ba-ha / wii-la-sha",
          "hint": "Nilsson (2016, Ch. 23, pp. 455–456, 465, Tables 6 & 15, fn. 8)"
        },
        {
          "target": "Masculine Polysyllabic Stems with {t}: gambar-ra-d-a • derbi-ya-d-a • aabba-yaa-sh-a",
          "source": "the stools • the walls • the fathers (masculine polysyllabic stems take {t} in the plural)",
          "pronunciation": "gam-bar-ra-da / der-bi-ya-da / aab-ba-yaa-sha",
          "hint": "Nilsson (2016, Ch. 23, pp. 455, 465, Tables 6 & 15)"
        }
      ],
      "sentences": [
        {
          "target": "Sabab-t-a → sabab-a-h-a • Miis-k-a → miis-as-k-a • Gambar-k-a → gambar-ra-d-a.",
          "source": "The reason → the reasons (Fem. → {k}) • The table → the tables (Masc. 1-σ → {k}) • The stool → the stools (Masc. 2-σ → {t}) (Nilsson 2016, Ch. 23, p. 455, Table 6)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "According to Morgan Nilsson (2016, Ch. 23, pp. 454–457, Tables 5–8 & 15), why does Somali not have true plural gender polarity under Corbett's (1991) agreement criterion, and what determines whether a plural noun takes the {k} or {t} definite article?",
          "correctAnswer": "Plural agreement targets (-aan/-een, ay/iyaga, kuwan, -ood) never distinguish gender; {k} is used for feminine plurals and masculine monosyllabic-stem plurals (miis-as-k-a, jilb-a-h-a), while {t} is used for masculine polysyllabic-stem plurals (gambar-ra-d-a)",
          "options": [
            "Plural agreement targets (-aan/-een, ay/iyaga, kuwan, -ood) never distinguish gender; {k} is used for feminine plurals and masculine monosyllabic-stem plurals (miis-as-k-a, jilb-a-h-a), while {t} is used for masculine polysyllabic-stem plurals (gambar-ra-d-a)",
            "Every Somali noun takes {t} in the singular and {k} in the plural",
            "Only borrowed Arabic nouns take definite articles in Somali",
            "Plural verbs distinguish four genders in Somali"
          ],
          "hint": "See Nilsson (2016, Ch. 23, pp. 454–457, 465, Tables 5–6 & 15)"
        }
      ]
    },
    {
      "id": "somali-nilsson-2016-16-2-collectives-corporates-generics",
      "title": "5th-Declension Collectives, Arabic Broken Plurals, Corporate Nouns & Generic Singulars (Tables 9–14, Ex. 1–11, pp. 457–464)",
      "icon": "Users",
      "description": "Practice syntactic (3SG) vs. semantic (3PL) agreement across 5th-declension collectives, Arabic broken plurals, lexical collectives, corporate nouns, and generic singulars.",
      "tips": "In Nilsson (2016, Ch. 23, pp. 458–460, Ex. 4), 5th-declension collectives like dibí-d-u ('the oxen') allow both 3PL (daaq-ay-aan) and 3SG.F (daaq-ay-saa) agreement, whereas regular plurals like dibi-ya-d-u allow ONLY 3PL (*Dibi-ya-d-u w-ay daaq-ay-saa is ungrammatical).",
      "words": [
        {
          "target": "díbi-g-a → coll. dibí-d-a vs. pl. dibi-yá-d-a • báabuur-k-a → coll. baabuúr-t-a vs. pl. baabuur-rá-d-a • búug-g-a → coll. buúg-t-a vs. pl. buug-ág-g-a",
          "source": "the ox → collective vs. regular plural • the truck → collective vs. regular plural • the book → collective vs. regular plural",
          "pronunciation": "dí-bi-ga / di-bí-da / di-bi-yá-da / baa-buúr-ta / buúg-ta / buu-gág-ga",
          "hint": "Nilsson (2016, Ch. 23, pp. 457–458, Tables 9–10)"
        },
        {
          "target": "Dibí-d-u waa ay daaq-ay-aan / daaq-ay-saa vs. Dibi-ya-d-u w-ay daaq-ay-aan (*daaq-ay-saa)",
          "source": "The oxen (collective) are grazing [3PL or 3SG.F] vs. The oxen (true plural) are grazing [3PL only; *3SG.F ungrammatical]",
          "pronunciation": "di-bí-du waa ay daa-qa-yaan / daa-qay-saa / di-bi-ya-du",
          "hint": "Nilsson (2016, Ch. 23, pp. 458–460, Ex. 2 & 4)"
        },
        {
          "target": "kuraas-t-a (broken pl. coll.) vs. kursi-ya-d-a (regular pl.) • culima-d-a / culimo-d-a • macallimiin-t-a",
          "source": "the chairs (Arabic broken plural collective vs. regular suffixed plural) • the scholars • the teachers",
          "pronunciation": "ku-raas-ta / kur-si-ya-da / cu-li-ma-da / ma-cal-li-miin-ta",
          "hint": "Nilsson (2016, Ch. 23, p. 461, Table 12 & Ex. 5–7)"
        },
        {
          "target": "Lexical Collectives (Table 13): carruur-t-a (children) • lo’-d-a (dairy cattle) • dumar-k-a (women) • dad-k-a (people) • rag-g-a (men)",
          "source": "Underived singular collective nouns allowing syntactic 3SG or semantic 3PL agreement",
          "pronunciation": "car-ruur-ta / lo’-da / du-mar-ka / dad-ka / rag-ga",
          "hint": "Nilsson (2016, Ch. 23, pp. 459, 462, Ex. 3 & Table 13)"
        },
        {
          "target": "Corporate & Generic Nouns (Table 14, Ex. 8–11): qoys-k-a (family) • koox-d-a (group/team) • geel-a (camel herd) • Diin-k-u (the turtle)",
          "source": "Singular corporate and generic nouns allowing 3SG or 3PL agreement in Somali discourse",
          "pronunciation": "qoys-ka / koox-da / gee-la / diin-ku",
          "hint": "Nilsson (2016, Ch. 23, pp. 462–464, Table 14 & Ex. 8–11)"
        }
      ],
      "sentences": [
        {
          "target": "Carruur-t-u waa ay qayli-n-ay-aan • Carruur-t-u waa ay qayli-n-ay-saa.",
          "source": "The children are shouting [3PL semantic agreement vs. 3SG.F syntactic agreement] (Nilsson 2016, Ch. 23, p. 459, Ex. 3a–b)."
        }
      ],
      "authoredExercises": [
        {
          "type": "match_pairs",
          "prompt": "Match each Somali noun class in Morgan Nilsson (2016, Ch. 23, pp. 457–464) with its morphosyntactic agreement behavior:",
          "correctAnswer": "dibí-d-a vs. dibi-yá-d-a (Tables 9–10, Ex. 4): 5th-declension feminine singular collective (allows 3SG.F or 3PL) vs. true suffixed plural (allows 3PL only)",
          "pairs": [
            {
              "left": "dibí-d-a vs. dibi-yá-d-a (Tables 9–10, Ex. 4)",
              "right": "5th-declension feminine singular collective (allows 3SG.F or 3PL) vs. true suffixed plural (allows 3PL only)"
            },
            {
              "left": "kuraas-t-a & culima-d-a (Table 12, Ex. 5–7)",
              "right": "Borrowed Arabic broken plurals treated as feminine singular collectives taking 3SG.F or 3PL agreement"
            },
            {
              "left": "carruur-t-a, lo’-d-a, dumar-k-a, dad-k-a, rag-g-a (Table 13)",
              "right": "Lexical collective nouns without a plural morpheme that trigger either 3SG or 3PL agreement"
            },
            {
              "left": "qoys-k-a, koox-d-a, geel-a & Diin-k-u (Table 14, Ex. 8–11)",
              "right": "Corporate nouns and generic singulars that switch between 3SG and 3PL agreement in the same sentence"
            }
          ]
        }
      ]
    }
  ]
});
