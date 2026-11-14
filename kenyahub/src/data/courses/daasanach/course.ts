import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Daasanach (Dhaasanac) ('Af Dhaasanac / d’áasannæc) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const DAASANACH_CONFIG: LanguageConfig = {
  "id": "daasanach",
  "name": "Daasanach (Dhaasanac)",
  "nativeName": "'Af Dhaasanac (d’áasannæc)",
  "family": "Cushitic",
  "counties": [
    "Marsabit"
  ],
  "speakers": "65K",
  "speechLocale": "om-KE",
  "description": "Lowland East Cushitic (Western Omo-Tana / Galaboid) language spoken by the Daasanach agropastoral and fishing community around Ileret on the northeastern shore of Lake Turkana and Southwest Ethiopia.",
  "color": "#991B1B",
  "sources": [
    "blazek-dasanech-2011",
    "nishiguchi-daasanach-2004",
    "hohnel-lakes-rudolf-stefanie-1894"
  ]
};

export const DAASANACH_UNITS: CourseUnit[] = [
  {
    "id": "daasanach-unit-1",
    "title": "Unit 1: Greetings, Clusivity Pronouns (p. 211) & Galaboid Numerals (1–1,000, pp. 105–110)",
    "description": "Master Daasanach ('Af Dhaasanac / d’áasannæc) greetings, the 4-column Personal Pronoun Table (Tosco 2001 p. 211), and Galaboid numerals (Tosco 2001 pp. 105–110) from Václav Blažek (Folia Orientalia Vol. 48, 2011).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "daasanach-greetings-pronouns",
        "title": "Greetings & the 4-Column Personal Pronoun Table (Tosco 2001, p. 211)",
        "icon": "Users",
        "description": "Learn essential Daasanach greetings and the complete absolute, subject, object, and possessive pronoun paradigm in Blažek (2011) & Tosco (2001: 211).",
        "tips": "In Tosco (2001, p. 211; cited in Blažek 2011), Daasanach distinguishes absolute, subject, object, and possessive pronouns across 1 sg. (yú / yáa / ye / cú ~ cu), 2 sg. (kúuni / kúo / ko / kú ~ ku), 1 pl. incl. (múuni / (ⁿé) ké ~ kí / — / kúnnu), 1 pl. excl. (ɲíini / ɲaaɲi / ɲí / kíɲɲu), and 2 pl. (ʔitíni / ʔití / ʔitíni / kíccu).",
        "culturalNote": "Spoken around Ileret on the northeastern shore of Lake Turkana (Marsabit County) and Southwest Ethiopia (32,029 in the 1994 Ethiopian census; 2,500 in the 1980 Kenyan estimate; 35,000–40,000 estimated by Tosco 2001), Dasanech (d’áasannæc, earlier Galab or Geleba, and called Reshiat by Lieut. Ludwig von Höhnel in 1888) shares the greeting 'Ma nagaa? — Nagaa' across the northern pastoral frontier.",
        "words": [
          {
            "target": "Ma nagaa? — Nagaa",
            "source": "Is it peace? (Are you well?) — It is peace",
            "pronunciation": "mah nah-gaa — nah-gaa",
            "hint": "Tosco (2001) & Kenyan Daasanach usage"
          },
          {
            "target": "yú (subj. yáa, obj. ye, poss. cú / cu)",
            "source": "I / me / my (1 sg. absolute, subject, object, possessive)",
            "pronunciation": "yuu / yaa / yeh / chuu",
            "hint": "Blažek (2011, p. 3 & Comparative Table: Arb yé, El yesé < ECu obj. *yi/*yu; Tosco 2001 p. 211)"
          },
          {
            "target": "kúuni (subj. kúo, obj. ko, poss. kú / ku)",
            "source": "Thou / you / thy (2 sg. absolute, subject, object, possessive)",
            "pronunciation": "kuu-ni / ku-oh / koh / kuu",
            "hint": "Blažek (2011, p. 3 & Comparative Table: Hb kuno, Fl kuˑni, Bd kuuni, Sa kúúni, To kúun-i; Tosco 2001 p. 211)"
          },
          {
            "target": "múuni (subj. (ⁿé) ké ~ kí, poss. kúnnu)",
            "source": "We (1 pl. inclusive: 'you and I' — absolute, subject, possessive)",
            "pronunciation": "muu-ni / keh ~ kee / kun-nu",
            "hint": "Blažek (2011, p. 3 & Comparative Table: AA *muni; Tosco 2001 p. 211)"
          },
          {
            "target": "ɲíini (subj. ɲaaɲi, obj. ɲí, poss. kíɲɲu)",
            "source": "We (1 pl. exclusive: 'we without you' — absolute, subject, object, possessive)",
            "pronunciation": "nyee-ni / nyaa-nyi / nyee / keen-nyu",
            "hint": "Blažek (2011, p. 3 & Comparative Table: Bd ńiina, Sa ɲíínì, To ɲiini excl., cf. Bu naanu, Ya nííni’, Dah ɲáɲi, *ʔinno; Tosco 2001 p. 211)"
          },
          {
            "target": "ʔitíni (subj. ʔití, obj. ʔitíni, poss. kíccu)",
            "source": "Ye / you all (2 pl. absolute, subject, object, possessive)",
            "pronunciation": "ee-tee-ni / ee-tee / keech-chu",
            "hint": "Blažek (2011, p. 3 & Comparative Table: Fl/Bd itini, Sa/To ʔitíni < *ʔatin- EC 11; Tosco 2001 p. 211)"
          }
        ],
        "sentences": [
          {
            "target": "Ma nagaa? — Nagaa",
            "source": "Is it peace? — It is peace"
          },
          {
            "target": "múuni (subj. [ⁿé] ké ~ kí, poss. kúnnu) vs. ɲíini (subj. ɲaaɲi, obj. ɲí, poss. kíɲɲu)",
            "source": "we (1 pl. inclusive) vs. we (1 pl. exclusive) (Tosco 2001, p. 211 / Blažek 2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mauro Tosco (2001, p. 211) and Václav Blažek (2011), which Daasanach pronoun set means 'we (1 pl. inclusive: you and I)'?",
            "correctAnswer": "múuni (subj. (ⁿé) ké ~ kí, poss. kúnnu)",
            "options": [
              "múuni (subj. (ⁿé) ké ~ kí, poss. kúnnu)",
              "ɲíini (subj. ɲaaɲi, obj. ɲí, poss. kíɲɲu)",
              "yú (subj. yáa, obj. ye, poss. cú / cu)",
              "ʔitíni (subj. ʔití, obj. ʔitíni, poss. kíccu)"
            ],
            "hint": "Blažek (2011) & Tosco (2001, p. 211)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach pronoun set from Tosco (2001, p. 211) with its English meaning:",
            "correctAnswer": "yú / yáa / ye / cú ~ cu: 1 sg. (I / me / my)",
            "pairs": [
              {
                "left": "yú / yáa / ye / cú ~ cu",
                "right": "1 sg. (I / me / my)"
              },
              {
                "left": "kúuni / kúo / ko / kú ~ ku",
                "right": "2 sg. (Thou / you / thy)"
              },
              {
                "left": "múuni / (ⁿé) ké ~ kí / kúnnu",
                "right": "1 pl. inclusive (We: you and I)"
              },
              {
                "left": "ɲíini / ɲaaɲi / ɲí / kíɲɲu",
                "right": "1 pl. exclusive (We: without you)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-numerals-counting",
        "title": "Galaboid Numerals & Counting (1–1,000, Tosco 2001 pp. 105–110)",
        "icon": "Hash",
        "description": "Count from 1 (tákac / tikiɗɗi) to 100 (kúɗ tikiɗɗi ~ tikilli) and 1,000 (ši tikiɗɗi ~ tikilli) in Daasanach.",
        "tips": "In Tosco (2001, pp. 105–110; cited in Blažek 2011), 1 is tákac in counting only and tikiɗɗi (~ tikilli) as a modifier; 100 is kúɗ tikiɗɗi ~ tikilli and 1,000 is ši tikiɗɗi ~ tikilli.",
        "culturalNote": "Václav Blažek (2011) presents the complete Galaboid numeral series from Tosco (2001, pp. 105–110) alongside comparative recordings by da Trento (1941), Haberland (1966), Fleming (1965, 1971), Bender (1971), and Sasse (1973–1982).",
        "words": [
          {
            "target": "tákac (in counting only) / tikiɗɗi (as a modifier)",
            "source": "One (1) — dT tacar, Hb tákkač & tíkkidə, Fl tɪgɪdi, Bd taqac, Sa tákàc, To takac / tikiɗ-ɗi",
            "pronunciation": "tah-kach / tee-keed-dee",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110: cf. Arb takká/tokkó, El tóko/taka, Or tokko/takka, Ko tákka)"
          },
          {
            "target": "naama",
            "source": "Two (2) — dT naama, Hb nắma, Fl nama, Bd naama, Sa nààmà, To naama (< *lam(m)- EC 21)",
            "pronunciation": "naa-mah",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110; cf. Om: She nam, Oyda naam’i, Sezo nombe)"
          },
          {
            "target": "seddi (sed-di)",
            "source": "Three (3) — dT sedde, Hb sédde, Bd sɛd(d)e, Sa seddi, To sed-di (< *s/šaz(z)iḥ- EC_Z 134, 138)",
            "pronunciation": "sed-dee",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          },
          {
            "target": "ʔaffur & cen",
            "source": "Four (4: ʔaffur) & Five (5: cen)",
            "pronunciation": "af-foor & chen",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          },
          {
            "target": "li & tiyya",
            "source": "Six (6: li) & Seven (7: tiyya)",
            "pronunciation": "lee & teey-yah",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          },
          {
            "target": "siet, saal & tommon",
            "source": "Eight (8: siet), Nine (9: saal) & Ten (10: tommon)",
            "pronunciation": "see-et, saal & tom-mon",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          },
          {
            "target": "kúɗ tikiɗɗi ~ tikilli",
            "source": "One hundred (100)",
            "pronunciation": "kood tee-keed-dee ~ tee-keel-lee",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          },
          {
            "target": "ši tikiɗɗi ~ tikilli",
            "source": "One thousand (1,000)",
            "pronunciation": "shee tee-keed-dee ~ tee-keel-lee",
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          }
        ],
        "sentences": [
          {
            "target": "1 tákac / tikiɗɗi, 2 naama, 3 seddi, 4 ʔaffur, 5 cen",
            "source": "One (counting / modifier), two, three, four, five (Tosco 2001 pp. 105–110)"
          },
          {
            "target": "6 li, 7 tiyya, 8 siet, 9 saal, 10 tommon, 100 kúɗ tikiɗɗi ~ tikilli, 1000 ši tikiɗɗi ~ tikilli",
            "source": "Six, seven, eight, nine, ten, one hundred, one thousand (Tosco 2001 pp. 105–110)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mauro Tosco (2001, pp. 105–110) and Václav Blažek (2011), how does Daasanach distinguish '1 (in counting only)' from '1 (as a modifier)', and how does it express '100' and '1,000'?",
            "correctAnswer": "1 tákac (counting) / tikiɗɗi (modifier); 100 kúɗ tikiɗɗi ~ tikilli; 1000 ši tikiɗɗi ~ tikilli",
            "options": [
              "1 tákac (counting) / tikiɗɗi (modifier); 100 kúɗ tikiɗɗi ~ tikilli; 1000 ši tikiɗɗi ~ tikilli",
              "1 naama; 100 tommon; 1000 saal",
              "1 seddi; 100 ʔaffur; 1000 cen",
              "1 li; 100 tiyya; 1000 siet"
            ],
            "hint": "Blažek (2011, citing Tosco 2001 pp. 105–110)"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-2",
    "title": "Unit 2: Head & Sense Organs, Pastoral Ecology & Sonority Assimilation",
    "description": "Explore Daasanach head/sensory nouns (ʔíl, nee, mé, sóon-o, lúut-i) from Blažek (2011) & Tosco (2001) and sonority-driven consonant assimilation from Nishiguchi (2004, OUPEL 9, pp. 39–51).",
    "icon": "Compass",
    "skills": [
      {
        "id": "daasanach-ecology-nouns-verbs",
        "title": "Head & Sensory Anatomy (ʔíl, nee, mé, sóon-o, lúut-i)",
        "icon": "TreePine",
        "description": "Master core Daasanach head and sensory nouns with their exact plural formations across Tosco (2001) and Sasse (1973–1982).",
        "tips": "Notice the irregular/archaic plurals recorded in Blažek (2011): ʔíl ('eye', Sasse pl. ʔinnù < *ʔil- / *ʔinḍ-), nee ('ear', Sasse neti, Bender nɛɛte, Haberland nēte < *nabh-), mé ('head', pl. met-u < *math-), sóon-o ('nose' < *san-), and lúut-i ('neck', pl. lug-u < *lukm-).",
        "culturalNote": "In Václav Blažek's (2011) comparative table, every anatomical noun is traced across six fieldwork sources (da Trento 1941, Haberland 1966, Fleming 1965/1971, Bender 1971, Sasse 1973–1982, and Tosco 2001).",
        "words": [
          {
            "target": "ʔíl (Sasse pl. ʔinnù)",
            "source": "Eye (Hb il, Fl il = ʔɪl, Bd iil, Sa ʔíl pl. ʔinnù, To ʔíl < *ʔil- EC_B 104 / *ʔinḍ- LEC 196)",
            "pronunciation": "eel / een-nuu"
          },
          {
            "target": "nee (Sasse neti, Bender nɛɛte, Fleming nɛte, Haberland nēte)",
            "source": "Ear (and 'leaf' in Bender/Sasse/Tosco < *nabh- EC 24)",
            "pronunciation": "neh / neh-tee"
          },
          {
            "target": "mé (pl. met-u; Sasse pl. mètù)",
            "source": "Head (Hb mē, Fl mɛ, Bd mɛɛ, Sa mé pl. mètù, To mé pl. met-u < *math- EC 10)",
            "pronunciation": "meh / meh-tuu"
          },
          {
            "target": "sóon-o (Sasse sòònò, Bender sɔɔno, Fleming sono)",
            "source": "Nose (< *san- EC_B 169)",
            "pronunciation": "soo-noh"
          },
          {
            "target": "lúut-i (pl. lug-u; Sasse/Fleming luuti, Bender luute)",
            "source": "Neck (< *lukm- EC 21)",
            "pronunciation": "luu-tee / luu-guu"
          }
        ],
        "sentences": [
          {
            "target": "ʔíl (pl. ʔinnù) — nee (neti)",
            "source": "Eye — Ear (Blažek 2011 / Tosco 2001)"
          },
          {
            "target": "mé (pl. met-u) — sóon-o — lúut-i (pl. lug-u)",
            "source": "Head — Nose — Neck (Blažek 2011 / Tosco 2001)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ʔíl (pl. ʔinnù)\" mean in English?",
            "correctAnswer": "Eye",
            "options": [
              "Eye",
              "Ear",
              "Head",
              "Nose"
            ],
            "hint": "Blažek (2011: *ʔil- / *ʔinḍ-)"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to Daasanach (Tosco 2001 / Sasse): \"Ear\"",
            "correctAnswer": "nee",
            "acceptedAnswers": [
              "nee",
              "neti",
              "nɛte",
              "nɛɛte"
            ],
            "hint": "Tosco: nee / Sasse: neti (< *nabh-)"
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mé (pl. met-u)\"",
            "correctAnswer": "Head",
            "acceptedAnswers": [
              "Head"
            ],
            "hint": "< East Cushitic *math- (EC 10)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach head/sensory noun from Blažek (2011) with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "ʔíl (pl. ʔinnù)",
                "right": "Eye"
              },
              {
                "left": "nee (neti)",
                "right": "Ear"
              },
              {
                "left": "mé (pl. met-u)",
                "right": "Head"
              },
              {
                "left": "sóon-o",
                "right": "Nose"
              },
              {
                "left": "lúut-i (pl. lug-u)",
                "right": "Neck"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-3",
    "title": "Unit 3: Family, Kinship & the Eight Territorial Sections (Shir)",
    "description": "Learn Daasanach kinship and human nouns (máa / gáal, mí ~ mu / yáb, min-ni / ɗég-i, karsic, kansic) from Blažek (2011), Tosco (2001), Nishiguchi (2004), and Almagor (1978).",
    "icon": "Users",
    "skills": [
      {
        "id": "daasanach-family-kinship",
        "title": "People, Men, Women, Elders & Chiefs",
        "icon": "Users",
        "description": "Master words for person (máa / pl. gáal), man/males (mí ~ mu / yáb), woman/women (min-ni / pl. ɗég-i), child, elder (karsic), and chief (kansic) in Daasanach.",
        "tips": "In Blažek (2011, citing Tosco 2001): 'person (homo)' is máa (Sasse mú; cf. Elmolo mố, Arbore mó(h)) with plural gáal ('people', Sasse gáál 'men'); 'man (vir)' is mí ~ mu (cf. maaðát 'somebody', Bender maaðət < *maa- & *-zat 'people', Sasse máá) with plural yáb ('males', Fleming mayɛp, Haberland māyop, da Trento maliab); and 'woman/wife' is min-ni (Sasse mìnnì, Haberland mínnə 'Ehefrau', da Trento minni) with plural ɗég-i ('women', Sasse ɗágì 'wifes' < *dazk-).",
        "culturalNote": "In Daasanach (d’áasannæc) community life around Ileret and Omorate, elders (karsic, Nishiguchi 2004: 41) and chiefs (kansic, Nishiguchi 2004: 41) preside over blessings while guests (koydo, pl. koyda, Tosco 2001) are welcomed with milk ('éèn), water (bie), and the peace greeting 'Ma nagaa?'.",
        "words": [
          {
            "target": "d’áasannæc (Dhaasanac)",
            "source": "Exact phonological autonym of the Daasanach language and people",
            "pronunciation": "daa-san-nach",
            "hint": "Blažek (2011, line 13) & Tosco (2001)"
          },
          {
            "target": "máa (Sasse mú) • pl. gáal ('people', Sasse gáál 'men', Fleming gal)",
            "source": "Person / Human being (homo) • People / Men",
            "pronunciation": "maa / gaal",
            "hint": "Blažek (2011, 'person = homo': cf. El mố, Arb mó(h), *megel- MS 220)"
          },
          {
            "target": "mí ~ mu (cf. maaðát 'somebody', Sasse máá, Bender maaðət) • pl. yáb ('males', Fl mayɛp, Hb māyop, dT maliab)",
            "source": "Man / Husband (vir) • Males",
            "pronunciation": "mee ~ muu / yaab",
            "hint": "Blažek (2011, 'man = vir': cf. El mɔ-lɛpa, So lab, Rd lábo, Af lab 'male', Om Sheko ya:b)"
          },
          {
            "target": "min-ni (Sasse mìnnì, Hb mínnə 'Ehefrau', dT minni) • pl. ɗég-i ('women', Sasse ɗágì 'wifes'; Fl sʌlle, Hb mādədət, Fl maḍeṭi, Bd maaḍIðit, Fl galyiɛt)",
            "source": "Woman / Wife • Women / Wives",
            "pronunciation": "min-nee / deh-gee",
            "hint": "Blažek (2011, 'woman': HEC *mento, Bu mand-ây, Iraqw amena, So min-ka weyn; pl. *dazk- EC 41 & EC_Z 139)"
          },
          {
            "target": "múù / 'íny (pl. 'íyyí)",
            "source": "Child / Offspring (pl. children)",
            "pronunciation": "muu / eeny / eey-yee",
            "hint": "Tosco (2001)"
          },
          {
            "target": "karsic & kansic",
            "source": "Old / Elder (karsic) & Chief (kansic)",
            "pronunciation": "kar-sich & kan-sich",
            "hint": "Nishiguchi (2004, OUPEL 9, p. 41, Examples 6a & 6c) & Tosco (2001, pp. 52–53)"
          }
        ],
        "sentences": [
          {
            "target": "mí ~ mu (pl. yáb) — min-ni (pl. ɗég-i) — máa (pl. gáal)",
            "source": "Man (males) — Woman/wife (women) — Person (people) (Blažek 2011)"
          },
          {
            "target": "karsic — kansic",
            "source": "Old / elder — Chief (Nishiguchi 2004, p. 41)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Václav Blažek (2011) and Mauro Tosco (2001), what are the singular and plural forms for 'Woman / Wife (pl. women/wives)'?",
            "correctAnswer": "min-ni (Sasse mìnnì, Hb mínnə 'Ehefrau', dT minni) • pl. ɗég-i ('women', Sasse ɗágì 'wifes'; Fl sʌlle, Hb mādədət, Fl maḍeṭi, Bd maaḍIðit, Fl galyiɛt)",
            "options": [
              "min-ni (Sasse mìnnì, Hb mínnə 'Ehefrau', dT minni) • pl. ɗég-i ('women', Sasse ɗágì 'wifes'; Fl sʌlle, Hb mādədət, Fl maḍeṭi, Bd maaḍIðit, Fl galyiɛt)",
              "mí ~ mu (cf. maaðát 'somebody', Sasse máá, Bender maaðət) • pl. yáb ('males', Fl mayɛp, Hb māyop, dT maliab)",
              "karsic & kansic",
              "múù / 'íny (pl. 'íyyí)"
            ],
            "hint": "Blažek (2011, 'woman': min-ni, pl. ɗég-i < *dazk-)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach human noun from Blažek (2011) and Nishiguchi (2004) with its English meaning:",
            "correctAnswer": "máa (pl. gáal): Person (pl. people)",
            "pairs": [
              {
                "left": "máa (pl. gáal)",
                "right": "Person (pl. people)"
              },
              {
                "left": "mí ~ mu (pl. yáb)",
                "right": "Man (pl. males)"
              },
              {
                "left": "min-ni (pl. ɗég-i)",
                "right": "Woman / Wife (pl. women)"
              },
              {
                "left": "kansic",
                "right": "Chief (Nishiguchi 2004, p. 41)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-shir-dimi-heritage",
        "title": "The Eight Tribal Sections (Shir) & Dimi Festival",
        "icon": "Crown",
        "description": "Explore the eight territorial sections (shir) of the Daasanach nation and the Dimi blessing ceremony.",
        "tips": "The Daasanach nation is organized into eight territorial sections (shir), each with its own settlement rights and age-set responsibilities along the Omo River delta and northeastern Lake Turkana.",
        "words": [
          {
            "target": "Dímì",
            "source": "Annual paternal blessing ceremony for daughters and age-set elders",
            "pronunciation": "dee-mee",
            "hint": "Almagor (1978) & Tosco (2001)"
          },
          {
            "target": "'Ínkoria & Nààríc",
            "source": "The two largest Daasanach territorial sections (Shir) along the Omo and Ileret shore",
            "pronunciation": "een-koh-ree-ah & naa-reech",
            "hint": "Tosco (2001)"
          },
          {
            "target": "Ràndál & Koro",
            "source": "Daasanach sections of historic Rendille and Samburu origin",
            "pronunciation": "rahn-dahl & koh-roh",
            "hint": "Almagor (1978) & Tosco (2001)"
          },
          {
            "target": "'Órò, Ríìlè, Ngólòbò & 'Éléle",
            "source": "Riverine and delta territorial sections of the Daasanach",
            "pronunciation": "oh-roh, ree-leh, ngoh-loh-boh, eh-leh-leh",
            "hint": "Tosco (2001)"
          },
          {
            "target": "Reshiat, Buma & Marle (marli = /mar + li/ 'Arbore Fem')",
            "source": "1888 historical names recorded by Lieut. Ludwig von Höhnel & Arbore feminine marli in Nishiguchi (2004, p. 40)",
            "pronunciation": "reh-shee-aht, boo-mah, mahr-leh / mar-li",
            "hint": "Höhnel (1894, Vol. I, pp. 161–175) & Nishiguchi (2004, p. 40, Ex. 5a)"
          },
          {
            "target": "géléb",
            "source": "Traditional Daasanach dome-hut village / pastoral kraal (cf. exonym Galab / Geleba in Blažek 2011, line 11)",
            "pronunciation": "geh-leb",
            "hint": "Höhnel (1894), Tosco (2001) & Blažek (2011, line 11)"
          }
        ],
        "sentences": [
          {
            "target": "Dímì: gáàl, sé, 'áyyì, sálab (buoddi), bún",
            "source": "The Dimi ceremony: camels, cattle, small stock, fat/butter, and coffee beans"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the name of the major annual Daasanach festival in which fathers bless their daughters for marriage and elders are anointed with butter?",
            "correctAnswer": "Dímì",
            "options": [
              "Dímì",
              "géléb",
              "karsic",
              "Reshiat"
            ],
            "hint": "Almagor (1978) & Tosco (2001)"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-4",
    "title": "Unit 4: Complete Anatomical Lexicon & Body Care (Blažek 2011 & Nishiguchi 2004)",
    "description": "Master Daasanach anatomical nouns from Václav Blažek's (2011) 101-gloss comparative table, Sumiyo Nishiguchi (2004, OUPEL 9, pp. 40–44), and Mauro Tosco (2001).",
    "icon": "Heart",
    "skills": [
      {
        "id": "daasanach-body-limbs-organs",
        "title": "Limbs, Organs & Internal Anatomy (gíl, ɠás, kur, láf-u, ⁿuoðin-ni, círa, fás)",
        "icon": "Heart",
        "description": "Learn Daasanach nouns for hand/arm (gíl), foot/leg (ɠás / beḍi), ankles (kuɗfu), bottom backbone (kernɲo), knee (kur, pl. kurram / duk), bone (láf-u), heart (ⁿuoðin-ni), liver (círa), blood (fás), breast (ʔóðu / ɠán), and chest (bál).",
        "tips": "Note the exact forms in Blažek (2011): ɠás ('foot', Sasse g’ás pl. g’àssu, Fleming beḍi), kur pl. kurram ('knee' < *kurs- 'round', Fleming duk), láf-u ('bone', Sasse láf-iti pl. láff-ù < *laf-), ⁿuoðin-ni ('heart', Sasse wòzinni < *wozin-ti < *wazn-), círa ('liver' < *tir-), fás ('blood'), ʔóðu ('human breast', Sasse pl. ʔòt-ù), ɠán ('animal breast/udder'), and bál ('chest').",
        "words": [
          {
            "target": "gíl (Hb/Fl/Bd gil, Sa/To gíl)",
            "source": "Hand / Arm (cf. Af gili 'thumb', Om: Zy gil’a, Ari gilla)",
            "pronunciation": "geel",
            "hint": "Blažek (2011, 'hand')"
          },
          {
            "target": "ɠás (Sa g’ás pl. g’àssu, Fl beḍi, Hb ḳas) & kuɗfu (/kuɗf + o/)",
            "source": "Foot / Leg (ɠás / beḍi) & Ankles (kuɗfu)",
            "pronunciation": "gahs & kudh-fu",
            "hint": "Blažek (2011, 'foot') & Nishiguchi (2004, p. 41, Ex. 8: kuɗfu < kuɗf + o 'ankles')"
          },
          {
            "target": "kur (pl. kurram; Sa kúr pl. kùrr-àm, Fl duk) & kernɲo",
            "source": "Knee (kur, pl. kurram < *kurs- 'round') & Bottom backbone (kernɲo)",
            "pronunciation": "kur / kur-ram & kern-nyo",
            "hint": "Blažek (2011, 'knee') & Nishiguchi (2004, p. 40, Ex. 5b: kernɲo 'bottom backbone')"
          },
          {
            "target": "láf-u (Sa láf-iti, pl. láff-ù, Bd lafite, Fl lɛfi-te)",
            "source": "Bone (< *laf- EC 21)",
            "pronunciation": "lah-fuu / lah-fee-tee",
            "hint": "Blažek (2011, 'bone')"
          },
          {
            "target": "ⁿuoðin-ni (Sa wòzinni < *wozin-ti, Bd wəðɔne, Fl woðini)",
            "source": "Heart (< *wazn- EC_B 187)",
            "pronunciation": "nwo-dhin-nee / woh-zeen-nee",
            "hint": "Blažek (2011, 'heart')"
          },
          {
            "target": "círa (Sa círá, Bd cira, Fl čira)",
            "source": "Liver (< *tir- EC 11)",
            "pronunciation": "chee-rah",
            "hint": "Blažek (2011, 'liver')"
          },
          {
            "target": "fás (Sa/To fás, Bd fəs, Fl fʌs) • ʔóðu (human breast, pl. ʔòt-ù), ɠán (animal udder) & bál (chest)",
            "source": "Blood (fás) • Human breast (ʔóðu), Animal breast/udder (ɠán) & Chest (bál)",
            "pronunciation": "fahs / oh-dhu / gahn / bahl",
            "hint": "Blažek (2011, 'blood' & 'breast')"
          }
        ],
        "sentences": [
          {
            "target": "gíl — ɠás (g’ás) — kuɗfu (/kuɗf + o/)",
            "source": "Hand/arm — Foot/leg — Ankles (Blažek 2011 & Nishiguchi 2004, p. 41)"
          },
          {
            "target": "ⁿuoðin-ni — círa — fás — láf-u — kernɲo",
            "source": "Heart — Liver — Blood — Bone — Bottom backbone (Blažek 2011 & Nishiguchi 2004)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Which Daasanach noun in Blažek (2011) means 'Heart' (< *wozin-ti < East Cushitic *wazn-)?",
            "correctAnswer": "ⁿuoðin-ni (Sa wòzinni < *wozin-ti, Bd wəðɔne, Fl woðini)",
            "options": [
              "ⁿuoðin-ni (Sa wòzinni < *wozin-ti, Bd wəðɔne, Fl woðini)",
              "círa (Sa círá, Bd cira, Fl čira)",
              "láf-u (Sa láf-iti, pl. láff-ù, Bd lafite, Fl lɛfi-te)",
              "gíl (Hb/Fl/Bd gil, Sa/To gíl)"
            ],
            "hint": "Blažek (2011, 'heart')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach anatomical term from Blažek (2011) & Nishiguchi (2004) with its English translation:",
            "correctAnswer": "gíl: Hand / Arm",
            "pairs": [
              {
                "left": "gíl",
                "right": "Hand / Arm"
              },
              {
                "left": "círa",
                "right": "Liver (< *tir-)"
              },
              {
                "left": "fás",
                "right": "Blood"
              },
              {
                "left": "láf-u (láf-iti)",
                "right": "Bone (< *laf-)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-mouth-skin-speech",
        "title": "Mouth, Tongue, Tooth, Skin, Hair/Feather, Belly & Claw",
        "icon": "BookOpen",
        "description": "Learn Daasanach terms for mouth/language (ʔaf-u), tongue (ʔére, pl. ʔerbu), tooth (kác-u, sg. kácìntì), skin (r/lokóɗ, pl. lòkòrù), hair (ðúur / ʕuurti), feather (bal-li), belly (geer-e), and fingernail/claw (ⁿáɗ / konof).",
        "tips": "In Blažek (2011): 'tooth' is kác-u (Sasse sg. kácìntì, pl. kacu, Bender qaco, Fleming kaço); 'tongue' is ʔére, pl. ʔerbu (< *ʕanrab-); 'skin' is r/lokóɗ (Sasse lòkóddi, pl. lòkòrù, Fleming ro’odi, Bender tuude); 'fingernail/claw' is ⁿáɗ (< *ʕiddi) and konof ('hoof, finger, claw').",
        "words": [
          {
            "target": "ʔaf-u (Sa ʔàfù, Bd af(o), Fl afu, Hb āf)",
            "source": "Mouth / Language (< *ʔaf- EC_B 23)",
            "pronunciation": "ah-fuu",
            "hint": "Blažek (2011, 'mouth')"
          },
          {
            "target": "ʔére (pl. ʔerbu; Sa ʔere, Bd ɛre, Fl ɛrre)",
            "source": "Tongue (< *ʕanrab- EC 23)",
            "pronunciation": "eh-reh / er-buu",
            "hint": "Blažek (2011, 'tongue')"
          },
          {
            "target": "kác-u (Sa sg. kácìntì, pl. kacu, Bd qaco, Fl kaço)",
            "source": "Tooth / Teeth (?Beja koos)",
            "pronunciation": "kah-chuu / kah-cheen-tee",
            "hint": "Blažek (2011, 'tooth')"
          },
          {
            "target": "r/lokóɗ (Sa lòkóddi, pl. lòkòrù, Fl ro’odi, Bd tuude)",
            "source": "Skin / Hide",
            "pronunciation": "loh-kod / loh-koh-ruu",
            "hint": "Blažek (2011, 'skin')"
          },
          {
            "target": "ðúur (Sa/Fl zur, Bd zurr, Hb zūra), bal-li (Sa bààlli 'feather' < *baal-) & ʕuurti (ʕuur + ti)",
            "source": "Hair (ðúur), Feather (bal-li / zur) & Shaved oneself (ʕuurti < ʕuur 'hair' + -ti Mid Perf)",
            "pronunciation": "dhuur / bahl-lee / uur-ti",
            "hint": "Blažek (2011, 'hair' & 'feather') & Nishiguchi (2004, p. 44, Ex. 20b)"
          },
          {
            "target": "geer-e (Sa/Bd geere, Fl gere)",
            "source": "Belly / Abdomen (< *garʕ- > Arb geréʔ, El gɛre)",
            "pronunciation": "gee-reh",
            "hint": "Blažek (2011, 'belly')"
          },
          {
            "target": "ⁿáɗ (fingernail < *ʕiddi) & konof (hoof, finger, claw; Sa kònòf, Fl gənif)",
            "source": "Fingernail / Claw (ⁿáɗ) & Hoof / Finger / Claw (konof, cf. Arb kunúf, El kúnuf, Rd góffan)",
            "pronunciation": "nahd & koh-nohf",
            "hint": "Blažek (2011, 'claw')"
          }
        ],
        "sentences": [
          {
            "target": "ʔaf-u • ʔére (pl. ʔerbu) • kác-u (sg. kácìntì) • r/lokóɗ (pl. lòkòrù)",
            "source": "mouth • tongue • tooth • skin (Blažek 2011 / Tosco 2001)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What are the Daasanach words for 'Tooth (sg. & pl.)' and 'Tongue (sg. & pl.)' in Blažek (2011)?",
            "correctAnswer": "kác-u (sg. kácìntì) & ʔére (pl. ʔerbu)",
            "options": [
              "kác-u (sg. kácìntì) & ʔére (pl. ʔerbu)",
              "geer-e & r/lokóɗ",
              "ⁿáɗ & konof",
              "ðúur & bal-li"
            ],
            "hint": "Blažek (2011, 'tooth' & 'tongue')"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-5",
    "title": "Unit 5: Pastoral Livestock, Lake Turkana Fisheries & Wildlife",
    "description": "Master the Daasanach pastoral lexicon and Lake Turkana / Omo delta fauna (bée / kāra, kimír-ri / ⁿurum, cér, cár, ʔiðír-ri, kiiðiɲ, wáas / dúm) from Blažek (2011), Nishiguchi (2004), and Tosco (2001).",
    "icon": "Compass",
    "skills": [
      {
        "id": "daasanach-pastoral-herds",
        "title": "Pastoral Herds, Dogs, Horns & Tails",
        "icon": "Star",
        "description": "Learn the core livestock and animal anatomy vocabulary of the Daasanach pastoral economy.",
        "tips": "In Blažek (2011): 'dog' is cér (Sasse cir, Bender cIIrr, Fleming čere, Haberland čer, da Trento cer < *ker- EC 13); 'horn' is gáas (< *gaas- EC 33, 44); 'tail' is wáas, while dúm is 'tip of the tail' (< *dub- EC 16) and Sasse sugu / Fleming sugo is 'back'.",
        "words": [
          {
            "target": "sé (pl. gùù)",
            "source": "Cow (pl. cattle)",
            "pronunciation": "seh / guu",
            "hint": "Tosco (2001)"
          },
          {
            "target": "gáàl (pl. gáàllí) & nirm",
            "source": "Camel (pl. camels) & Newborn camels (nirm)",
            "pronunciation": "gaal / gaal-lee & nirm",
            "hint": "Tosco (2001) & Nishiguchi (2004, p. 40, Ex. 5b: /rm/ nirm 'newborn camels')"
          },
          {
            "target": "'áyyì / rí (pl. ríddí)",
            "source": "Goat / Sheep and goats (small stock)",
            "pronunciation": "ahy-yee / ree / reed-dee",
            "hint": "Tosco (2001)"
          },
          {
            "target": "'ólò (pl. 'ólòddí)",
            "source": "Donkey (pl. donkeys)",
            "pronunciation": "oh-loh / oh-lod-dee",
            "hint": "Höhnel (1894, p. 166) & Tosco (2001)"
          },
          {
            "target": "cér (Sa cir, Bd cIIrr, Fl čere, Hb čer, dT cer)",
            "source": "Dog (< *ker- EC 13)",
            "pronunciation": "cher",
            "hint": "Blažek (2011, 'dog')"
          },
          {
            "target": "gáas (Sa gáás, Bd gaaso, Fl gas)",
            "source": "Horn (< *gaas- EC 33, 44)",
            "pronunciation": "gaas",
            "hint": "Blažek (2011, 'horn')"
          },
          {
            "target": "wáas (Sa wáás, Bd waas) • dúm ('tip of the tail' < *dub-) • sugu (Fl sugo 'back')",
            "source": "Tail (wáas) • Tip of the tail (dúm) • Back (sugu)",
            "pronunciation": "waas / duum / suu-guu",
            "hint": "Blažek (2011, 'tail')"
          }
        ],
        "sentences": [
          {
            "target": "sé (pl. gùù) — gáàl (pl. gáàllí) — nirm — cér",
            "source": "Cow (cattle) — Camel (camels) — Newborn camels — Dog"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What are the Daasanach words for 'Tail' and 'Tip of the tail' in Blažek (2011)?",
            "correctAnswer": "wáas (Sa wáás, Bd waas) • dúm ('tip of the tail' < *dub-) • sugu (Fl sugo 'back')",
            "options": [
              "wáas (Sa wáás, Bd waas) • dúm ('tip of the tail' < *dub-) • sugu (Fl sugo 'back')",
              "gáas (Sa gáás, Bd gaaso, Fl gas)",
              "cér (Sa cir, Bd cIIrr, Fl čere, Hb čer, dT cer)",
              "gáàl (pl. gáàllí) & nirm"
            ],
            "hint": "Blažek (2011, 'tail')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach animal/livestock term with its English meaning:",
            "correctAnswer": "sé: Cow (pl. cattle)",
            "pairs": [
              {
                "left": "sé",
                "right": "Cow (pl. cattle)"
              },
              {
                "left": "nirm",
                "right": "Newborn camels (Nishiguchi 2004, p. 40)"
              },
              {
                "left": "cér",
                "right": "Dog (< *ker-)"
              },
              {
                "left": "wáas / dúm",
                "right": "Tail / Tip of the tail"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-turkana-wildlife-fish",
        "title": "Fish (bée / kāra), Birds (kimír-ri / ⁿurum), Snakes (cár), Flies (kiiðiɲ), Lice (ʔiðír-ri) & Wildlife",
        "icon": "TreePine",
        "description": "Learn the exact Daasanach fauna forms from Blažek (2011), Nishiguchi (2004), and Tosco (2001).",
        "tips": "In Blažek (2011): 'fish' is bée (Sasse béé, coll. bèè-c, Bender bɛɛc, Fleming beič, Haberland bēč, da Trento bèc < *bahag- LEC 262) plus Haberland kāra; 'bird' is kimír-ri (Sasse kimiɗɗi, pl. kimírri 'small bird' < *kimbir- EC 13) plus Sasse ⁿurum ('big bird', Haberland húrum, da Trento urrin); 'snake' is cár (Sasse pl. cààrà); 'fly (n.)' is kiiðiɲ; and 'louse' is ʔiðír-ri (Sasse ʔìðiɗɗi, pl. ʔìðírè < *ʔingir-).",
        "words": [
          {
            "target": "bée (Sa béé, coll. bèè-c, Bd bɛɛc, Fl beič, Hb bēč, dT bèc < *bahag-) & Hb kāra",
            "source": "Fish (bée / coll. bèè-c; Hb kāra, cf. Dullay *xaar-, Banna kaara, Hamer kara)",
            "pronunciation": "bee / beeh-ch / kaa-rah",
            "hint": "Blažek (2011, 'fish')"
          },
          {
            "target": "kimír-ri (Sa sg. kimiɗɗi, pl. kimírri 'small bird' < *kimbir-) & ⁿurum ('big bird', Hb húrum, dT urrin)",
            "source": "Small bird (kimiɗɗi, pl. kimír-ri) & Big bird (ⁿurum)",
            "pronunciation": "kee-meer-ree / nuu-ruum",
            "hint": "Blažek (2011, 'bird')"
          },
          {
            "target": "inti (inti + e = 'the gazelle') & ɗuuninti (ɗuunin + ti = 'mosquito')",
            "source": "The gazelle (inti) & Mosquito (ɗuuninti, Fem. Sg.)",
            "pronunciation": "in-ti & dhuu-nin-ti",
            "hint": "Nishiguchi (2004, p. 41 Ex. 6d & p. 44 Ex. 20c)"
          },
          {
            "target": "kiiðiɲ (Sa kííðiɲ, Bd kiiðin)",
            "source": "Fly (insect — cf. Arbore keɗɗit, Elmolo kédit)",
            "pronunciation": "kee-dheeny",
            "hint": "Blažek (2011, 'fly n.')"
          },
          {
            "target": "cár (Sa cár, pl. cààrà, Bd carr)",
            "source": "Snake (cf. Arbore čáar 'leopard'?)",
            "pronunciation": "chaar / chaa-rah",
            "hint": "Blažek (2011, 'snake')"
          },
          {
            "target": "ʔiðír-ri (Sa sg. ʔìðiɗɗi, pl. ʔìðírè, Bd izIrr, Fl izire)",
            "source": "Louse (< *ʔingir- EC_B 103)",
            "pronunciation": "ee-dheer-ree / ee-dheed-dee",
            "hint": "Blažek (2011, 'louse')"
          },
          {
            "target": "nyáàng (crocodile), lúùb (lion) & 'árb (elephant)",
            "source": "Crocodile, Lion & Elephant",
            "pronunciation": "nyaang, luub, ahrb",
            "hint": "Tosco (2001)"
          }
        ],
        "sentences": [
          {
            "target": "bée (coll. bèè-c) • kimiɗɗi (pl. kimír-ri) • ⁿurum • cár (pl. cààrà) • kiiðiɲ • ʔiðír-ri",
            "source": "fish • small bird • big bird • snake • fly • louse (Blažek 2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Václav Blažek (2011), how does Daasanach distinguish 'small bird' from 'big bird', and what is the word for 'snake'?",
            "correctAnswer": "kimiɗɗi, pl. kimír-ri ('small bird' < *kimbir-), ⁿurum ('big bird'), and cár (pl. cààrà, 'snake')",
            "options": [
              "kimiɗɗi, pl. kimír-ri ('small bird' < *kimbir-), ⁿurum ('big bird'), and cár (pl. cààrà, 'snake')",
              "bée, kiiðiɲ, and ʔiðír-ri",
              "sé, gáàl, and nirm",
              "inti, ɗuuninti, and nyáàng"
            ],
            "hint": "Blažek (2011, 'bird' & 'snake')"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-6",
    "title": "Unit 6: Omo Delta & Lake Turkana Ecology, Sky & Elements (Blažek 2011)",
    "description": "Explore water (bie), sun (ʔáaðu), moon (ɠuí), star (ʔiðin), rain (ʔír), cloud (derri-c), night (cuur-i), tree (ɠór), bark (boort-i / ɓokot-i), leaf (ráš / nee), grass (ʔíiš / balsam), fire (ʄíet, pl. ʔéðe), smoke (ʔéer), and ashes (ʔége / ɗíl).",
    "icon": "Sun",
    "skills": [
      {
        "id": "daasanach-water-sky-weather",
        "title": "Water (bie), Sun (ʔáaðu), Moon (ɠuí), Star (ʔiðin), Rain (ʔír), Cloud (derri-c) & Night (cuur-i)",
        "icon": "Sun",
        "description": "Learn the exact environmental and celestial nouns from Blažek (2011) and Tosco (2001).",
        "tips": "In Blažek (2011): 'water' is bie (< *bik-ee EC 13); 'sun' is ʔáaðu (< *ʕaz-); 'moon' is ɠuí (Sasse g’úy, Haberland gúiyo, da Trento cui); 'star' is ʔiðin (Sasse ⁿizintti < *hizk-/*huzk-); 'rain' is ʔír (< *ʕír-); 'cloud' is Sasse derri-c (< *daruur-, Fleming ñʌdo = ñebo!); and 'night' is cuur-i.",
        "words": [
          {
            "target": "bie (dT/Sa/To bie, Fl biye, Bd biiyɛ, Hb bīya)",
            "source": "Water (< *bik-ee EC 13)",
            "pronunciation": "bee-eh",
            "hint": "Blažek (2011, 'water')"
          },
          {
            "target": "ʔáaðu (Sa ʔaaðu, Fl/Bd aazo, Hb ādo, dT azo)",
            "source": "Sun / Daytime (< *ʕaz- > El áote, Arb ʔawaté, So ʕadʕeed, Or aduu, Dah ʔaddo)",
            "pronunciation": "aa-dhuu",
            "hint": "Blažek (2011, 'sun')"
          },
          {
            "target": "ɠuí (Sa g’úy, Bd g’wi, Fl g’ui, Hb gúiyo, dT cui)",
            "source": "Moon / Month",
            "pronunciation": "gwee",
            "hint": "Blažek (2011, 'moon')"
          },
          {
            "target": "ʔiðin (Sa ⁿizintti, Bd izInte, Fl yizɛno, Hb yídəno, dT izinò)",
            "source": "Star (< *hizk- / *huzk- EC 35, 36, 37)",
            "pronunciation": "ee-dheen / nee-zeen-tee",
            "hint": "Blažek (2011, 'star')"
          },
          {
            "target": "ʔír (Sa ʔir, Bd Irr, Fl ir = ʔɪr)",
            "source": "Rain (< *ʕír- Sm₁ 200, Arb ʔirí, El íri)",
            "pronunciation": "eer",
            "hint": "Blažek (2011, 'rain n.')"
          },
          {
            "target": "derri-c (Sasse; Fl ñʌdo = ñebo!, Bd irr = rain)",
            "source": "Cloud (< *daruur- EC_HL 91)",
            "pronunciation": "der-reech",
            "hint": "Blažek (2011, 'cloud')"
          },
          {
            "target": "cuur-i (Sa cúúri, Bd cuuri, Fl čuri)",
            "source": "Night (? < *-kuari- TLM 401)",
            "pronunciation": "chuu-ree",
            "hint": "Blažek (2011, 'night')"
          }
        ],
        "sentences": [
          {
            "target": "bie — ʔáaðu — ɠuí — ʔiðin — ʔír — derri-c — cuur-i",
            "source": "Water — Sun — Moon — Star — Rain — Cloud — Night (Blažek 2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the Daasanach word for 'Moon' in Tosco (2001) and Sasse (cited in Blažek 2011)?",
            "correctAnswer": "ɠuí (Sa g’úy, Bd g’wi, Fl g’ui, Hb gúiyo, dT cui)",
            "options": [
              "ɠuí (Sa g’úy, Bd g’wi, Fl g’ui, Hb gúiyo, dT cui)",
              "ʔáaðu (Sa ʔaaðu, Fl/Bd aazo, Hb ādo, dT azo)",
              "bie (dT/Sa/To bie, Fl biye, Bd biiyɛ, Hb bīya)",
              "cuur-i (Sa cúúri, Bd cuuri, Fl čuri)"
            ],
            "hint": "Blažek (2011, 'moon')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach nature or sky word from Blažek (2011) with its English meaning:",
            "correctAnswer": "bie: Water",
            "pairs": [
              {
                "left": "bie",
                "right": "Water (< *bik-ee)"
              },
              {
                "left": "ʔáaðu",
                "right": "Sun (< *ʕaz-)"
              },
              {
                "left": "ɠuí (g’úy)",
                "right": "Moon"
              },
              {
                "left": "derri-c",
                "right": "Cloud (< *daruur-)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-trees-earth-fire",
        "title": "Trees (ɠór), Bark (boort-i / ɓokot-i), Leaf (ráš / nee), Grass (ʔíiš / balsam), Earth (lés / bii), Mountains & Fire (ʄíet)",
        "icon": "TreePine",
        "description": "Master botanical, geological, and fire/ash vocabulary from Blažek (2011) and Nishiguchi (2004).",
        "tips": "In Blažek (2011): 'tree' is ɠór (Sasse g’òr, pl. g’ùòrù < *ḳor-); 'bark' is boort-i and ɓokot-i; 'leaf' is ráš (plus iš = grass in Fleming, nee/neti = ear in Tosco/Sasse/Bender); 'grass' is ʔíiš (< *ʕawš-); 'seed' is ʔár (Bender rruba, Fleming fa’); 'root' is ⁿíð (< *hizz-); 'earth' is lés ('land, ground') and bii ('soil, ground'); 'mountain/hill' is gummuti (pl. gùmù), wār/wáar (also 'stone'), labur, and siri (pl. sirgam); 'sand' is yùoc; 'fire' is ʄíet, pl. ʔéðe; 'smoke' is ʔéer; and 'ashes' is ʔége plus ɗíl ('hot ashes').",
        "words": [
          {
            "target": "ɠór (Sa g’òr, pl. g’ùòrù, dT/Fl gor < *ḳor-) • boort-i & ɓokot-i ('bark')",
            "source": "Tree (ɠór) • Bark of tree (boort-i & ɓokot-i)",
            "pronunciation": "gohr / boor-tee & boh-koh-tee",
            "hint": "Blažek (2011, 'tree' & 'bark')"
          },
          {
            "target": "ráš (and nee / neti = 'ear', Fl iš = 'grass') • ʔíiš ('grass' < *ʕawš-) & balsam (balt + sam)",
            "source": "Leaf (ráš / nee) • Grass (ʔíiš) & Kind of grass (balsam < balt + sam)",
            "pronunciation": "rahsh / eesh / bahl-sahm",
            "hint": "Blažek (2011, 'leaf' & 'grass') & Nishiguchi (2004, p. 41, Ex. 6a)"
          },
          {
            "target": "ⁿíð (Sa ⁿìð, Bd (h)ið, Fl yiz < *hizz-) • ʔár (Bd rruba, Fl fa’ 'seed')",
            "source": "Root (ⁿíð) • Seed (ʔár / rruba / fa’)",
            "pronunciation": "needh / ahr",
            "hint": "Blažek (2011, 'root' & 'seed')"
          },
          {
            "target": "lés ('land, ground', Sa lès, Fl lɛs, dT/Hb les) • bii ('soil, ground' < *biy-) • yùoc ('sand', Bd yɔɔc, Fl yuč)",
            "source": "Earth / Land (lés) • Soil / Ground (bii) • Sand (yùoc, cf. Rendille yoóh)",
            "pronunciation": "lehs / bee / ywoch",
            "hint": "Blažek (2011, 'earth' & 'sand')"
          },
          {
            "target": "wáar ('stone' & 'mountain',Fl dʌb 'stone') • gummuti (Sa gùmìti, pl. gùmù 'hill') • siri (pl. sirgam 'hill') • dT/Hb labur",
            "source": "Stone / Mountain (wáar / dʌb) & Hill / Mountain (gummuti, siri pl. sirgam, labur)",
            "pronunciation": "waar / goom-muu-tee / see-ree",
            "hint": "Blažek (2011, 'stone' & 'mountain')"
          },
          {
            "target": "ʄíet (pl. ʔéðe; Sa g’íé-té, Bd g’iɛtɛ, Fl giete, Hb iyēta, dT iete)",
            "source": "Fire (pl. ʔéðe)",
            "pronunciation": "jeet / eh-dheh",
            "hint": "Blažek (2011, 'fire')"
          },
          {
            "target": "ʔéer ('smoke', Sa ʔeer, Bd ɛrr, Fl err) • ʔége ('ashes', Sa ʔege) & ɗíl ('hot ashes')",
            "source": "Smoke (ʔéer) • Ashes (ʔége) & Hot ashes (ɗíl < Dullay *ɗil- 'burn')",
            "pronunciation": "eer / eh-geh & deel",
            "hint": "Blažek (2011, 'smoke' & 'ashes')"
          }
        ],
        "sentences": [
          {
            "target": "ɠór — boort-i / ɓokot-i — ráš — ⁿíð — ʔár — ʔíiš — balsam (balt + sam)",
            "source": "tree — bark — leaf — root — seed — grass — kind of grass (Blažek 2011 & Nishiguchi 2004)"
          },
          {
            "target": "ʄíet (pl. ʔéðe) — ʔéer — ʔége — ɗíl",
            "source": "fire — smoke — ashes — hot ashes (Blažek 2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Václav Blažek (2011), what are the Daasanach words for 'Fire (sg. & pl.)', 'Ashes', and 'Hot ashes'?",
            "correctAnswer": "ʄíet (pl. ʔéðe) 'fire', ʔége 'ashes', and ɗíl 'hot ashes'",
            "options": [
              "ʄíet (pl. ʔéðe) 'fire', ʔége 'ashes', and ɗíl 'hot ashes'",
              "ɠór, boort-i, and ɓokot-i",
              "lés, bii, and yùoc",
              "wáar, gummuti, and siri"
            ],
            "hint": "Blažek (2011, 'fire' & 'ashes')"
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-7",
    "title": "Unit 7: Food, Tools, Roads & Core Action Verbs (Blažek 2011 & Nishiguchi 2004)",
    "description": "Learn Daasanach dietary staples (só pl. sogim, sálab / buoddi, ɠonɠ-o), calabashes (duɗmo), bows (bilo), circumcision knives (bilti), roads (ɠíeric), and verbs (including the 4 prefix-conjugated verbs ʔás, yaalla, yeeðe, yimii).",
    "icon": "Zap",
    "skills": [
      {
        "id": "daasanach-food-home-canoe",
        "title": "Meat (só pl. sogim), Fat (sálab / buoddi), Egg (ɠonɠ-o), Road (ɠíeric), Calabashes, Bows & Knives",
        "icon": "BookOpen",
        "description": "Master vocabulary for meat (só, pl. sogim), fat/butter (sálab / buoddi / giɛ), egg (ɠonɠ-o), milk ('éèn), round calabashes (duɗmo), bows (bilo), circumcision knives (bilti), houses (bíl), roads (ɠíeric, pl. g’íér-im), and canoes (góngò).",
        "tips": "In Blažek (2011): 'meat' is só, pl. sogim (< *soʔ- EC 50); 'fat (n.)' is Tosco sálab, Sasse buoddi (< *buor-ti, Bender b’ɔdo), and Fleming giɛ; 'egg' is ɠonɠ-o (Sasse g’òng’ó); and 'road' is ɠíeric (Sasse g’íér-ic, pl. g’íér-im).",
        "words": [
          {
            "target": "'éèn (pl. 'éènnú)",
            "source": "Milk",
            "pronunciation": "een / een-nuu",
            "hint": "Tosco (2001)"
          },
          {
            "target": "só (pl. sogim; Sa sú, Fl/Bd so)",
            "source": "Meat / Flesh (< *soʔ- EC 50)",
            "pronunciation": "soh / soh-geem",
            "hint": "Blažek (2011, 'meat')"
          },
          {
            "target": "sálab (To) • buoddi (< *buor-ti, Sa; Bd b’ɔdo) • giɛ (Fl)",
            "source": "Fat / Butter / Grease (cf. Somali bur, Sidamo bur-o, Arbore gehen 'fat meat')",
            "pronunciation": "sah-lahb / bwod-dee / gee-eh",
            "hint": "Blažek (2011, 'fat n.')"
          },
          {
            "target": "ɠonɠ-o (Sa g’òng’ó, Bd g’ong’o, Fl gòngo)",
            "source": "Egg (?Elmolo íníte MS_S 4)",
            "pronunciation": "gohn-goh",
            "hint": "Blažek (2011, 'egg')"
          },
          {
            "target": "duɗmo (/dudum + o/) & bilo (/bil + t + o/) & bilti (/bilt + e/)",
            "source": "Round calabashes (duɗmo), Bows (bilo < bil 'bow' + -to Pl) & The knife for circumcision (bilti < bilt + e Def)",
            "pronunciation": "dudh-mo & bi-lo & bil-ti",
            "hint": "Nishiguchi (2004, p. 41 Ex. 6b & 7, p. 47 Ex. 26c)"
          },
          {
            "target": "bíl (pl. bíllí) & ɠíeric (Sa g’íér-ic, pl. g’íér-im, Bd g’ʸeeric, Fl gerič)",
            "source": "House / Dome-hut (bíl) & Road / Path (ɠíeric, cf. Arbore gor, Elmolo gôr)",
            "pronunciation": "beel & gee-eh-reech",
            "hint": "Tosco (2001) & Blažek (2011, 'road')"
          },
          {
            "target": "góngò",
            "source": "Dugout canoe used for fishing on Lake Turkana and the Omo River",
            "pronunciation": "gohn-goh",
            "hint": "Höhnel (1894, p. 165) & Tosco (2001)"
          }
        ],
        "sentences": [
          {
            "target": "'éèn — só (pl. sogim) — sálab / buoddi — ɠonɠ-o — duɗmo (/dudum + o/)",
            "source": "Milk — Meat — Fat/butter — Egg — Round calabashes (Blažek 2011 & Nishiguchi 2004)"
          },
          {
            "target": "bilt + e → bilti • /bil + t + o/ → [bilo] • ɠíeric (pl. g’íér-im) • góngò",
            "source": "the knife for circumcision • bows • road • dugout canoe"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What are the Daasanach words for 'Meat (sg. & pl.)' and 'Egg' in Blažek (2011)?",
            "correctAnswer": "só (pl. sogim) 'meat' and ɠonɠ-o (Sasse g’òng’ó) 'egg'",
            "options": [
              "só (pl. sogim) 'meat' and ɠonɠ-o (Sasse g’òng’ó) 'egg'",
              "'éèn and góngò",
              "bíl and ɠíeric",
              "duɗmo and bilti"
            ],
            "hint": "Blažek (2011, 'meat' & 'egg')"
          }
        ]
      },
      {
        "id": "daasanach-verbs-assimilation",
        "title": "Core Action Verbs, the 4 Prefix Verbs (ʔás, yaalla, yeeðe, yimii) & Sonority Assimilation",
        "icon": "Zap",
        "description": "Practice Daasanach verbs from Blažek (2011) and Tosco (2001) alongside their morpheme-boundary consonant assimilation patterns from Nishiguchi (2004, OUPEL 9, pp. 39–51).",
        "tips": "In Blažek (2011, citing Tosco 2001 pp. 320–475), four verbs preserve the archaic Afroasiatic prefixal conjugation (3rd sg. m. impf.): ʔás ('kills', imp. ʔás!, Sasse 3sg. yeese), yaalla ('stands', inf./root yáal; also ɠeé 'get up/stand'), yeeðe ('says', imp. ʔát!), and yimii ('comes', Sasse 3sg. yimeðe, imp. káɗe / kári!).",
        "words": [
          {
            "target": "kóm (dT cocom, Hb/Fl kom-, Bd qʷɔye < *-akam-) & uolmosu / ololso",
            "source": "To eat (kóm) & To feed oneself (uolmosu / ololso)",
            "pronunciation": "kohm & u-ol-mo-su / o-lol-so",
            "hint": "Blažek (2011, 'eat') & Nishiguchi (2004, p. 44, Ex. 19 & 20a)"
          },
          {
            "target": "ʔík (Sa ʔik, Bd Ik, Hb/Fl ik-, dT igh < *ʕa/i/ug-) & ɠínin ('bite', Sa/Fl g’inin- < *kaniin-)",
            "source": "To drink (ʔík) & To bite (ɠínin)",
            "pronunciation": "eek & gee-neen",
            "hint": "Blažek (2011, 'drink' & 'bite')"
          },
          {
            "target": "máal (Hb yāmāl-, Bd maale; 2Sg /maal+t+a/ → [maala]) & həl (2Pl /həl+ta/ → [həlaa])",
            "source": "To hear (máal; (you) hear: [maala]) & To enter ((YOU) enter: [həlaa])",
            "pronunciation": "maal / maa-la & hal / ha-laa",
            "hint": "Blažek (2011, 'hear') & Nishiguchi (2004, p. 47, Ex. 26a–b & Tableau 4 p. 50)"
          },
          {
            "target": "ʔárik (Sa/Fl arg-, Bd argiiyɛ, Hb ilid- 'see'), ʔók ('know' < *ʔog-, dT iàarghe) & zaas (2Sg [zaasanna])",
            "source": "To see (ʔárik / zaas: 2Sg [zaasanna] 'you see') & To know (ʔók)",
            "pronunciation": "ah-reek, ohk & zaa-san-na",
            "hint": "Blažek (2011, 'see' & 'know') & Nishiguchi (2004, p. 47, Ex. 28b)"
          },
          {
            "target": "sí ('go', Sa se-eme, Bd seðe, dT sasen < Sam *soʕo) • káɗe! (Sa kári!) / 3sg. yimii (Sa yimeðe 'come') • maɗ ([maɗɗi])",
            "source": "To go (sí), Come! (káɗe! / 3sg. impf. yimii, Sasse yimeðe) & To go and buy (2Sg Perf [maɗɗi])",
            "pronunciation": "see / kah-deh / yee-mee / madh-dhi",
            "hint": "Blažek (2011, 'go' & 'come', line 118) & Nishiguchi (2004, p. 48, Ex. 31)"
          },
          {
            "target": "ráf ('sleep / spend the night' < *raf-), ɗínaʔ ('lie down', Sa ɗiin-ik) & yédik ('sit = live', Sa dik, Fl ledik-)",
            "source": "To sleep (ráf), To lie down (ɗínaʔ) & To sit / live (yédik)",
            "pronunciation": "rahf, dee-nah & yeh-deek",
            "hint": "Blažek (2011, 'sleep' & 'sit')"
          },
          {
            "target": "ʔás ('kills', Sa 3sg. yeese), yaalla ('stands', yáal / ɠeé 'get up'), yeeðe ('says', imp. ʔát!) & kúf ('die' < *kuf- 'fall', Fl dɛd)",
            "source": "Prefix verbs: kills (ʔás), stands (yaalla / yáal / ɠeé), says (yeeðe / ʔát!) & To die (kúf)",
            "pronunciation": "ahs, yaal-lah, yee-dheh, aht, kuuf",
            "hint": "Blažek (2011, line 118 & 'kill', 'stand', 'say', 'die')"
          },
          {
            "target": "šíiš ('give', Sa šii-š, Bd šiyɛ), bólob ('burn', Sa duun-ay-) & ðánu ('swim', Sa ðaanða, Bd aðaanða)",
            "source": "To give (šíiš), To burn (bólob / duun-ay-) & To swim (ðánu)",
            "pronunciation": "sheesh, boh-lohb & dhah-nuu",
            "hint": "Blažek (2011, 'give', 'burn' & 'swim')"
          },
          {
            "target": "fuur ([fuuDDA]), cir ([ciɗɗi]), tuun ([tuunna]), zaaby ([zaaya]), hees ([heeti]), ɗis ([ɗiti]), us ([ute]), fuus ([fuute]) & it ([isu])",
            "source": "Nishiguchi (2004) verbs: open ([fuuDDA]), hold ([ciɗɗi]), beat ([tuunna]), sew ([zaaya]), ask ([heeti]), build ([ɗiti]), scoop ([ute]), tear off ([fuute] / [isu])",
            "pronunciation": "fuu-dda, chidh-dhi, tuun-na, zaa-ya, hee-ti, dhi-ti, u-te, fuu-te, i-su",
            "hint": "Nishiguchi (2004, pp. 47–48, Ex. 25–30)"
          }
        ],
        "sentences": [
          {
            "target": "3rd sg. m. impf. prefix verbs: ʔás ('kills'), yaalla ('stands'), yeeðe ('says'), yimii ('comes')",
            "source": "The four Dasanech verbs preserving the archaic prefixal conjugation (Tosco 2001 pp. 320–475 / Blažek 2011 line 118)"
          },
          {
            "target": "/maal+t+a/ → [maala] • /tuun+t+a/ → [tuunna] • /cir+t+i/ → [ciɗɗi] • /hees+t+i/ → [heeti] • /it+su/ → [isu]",
            "source": "(you) hear • you beat • you held for yourself • you asked • to tear off (Nishiguchi 2004, pp. 47–50)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mauro Tosco (2001, pp. 320–475) and Václav Blažek (2011, line 118), which four Daasanach verbs preserve the archaic Cushitic prefixal conjugation (3rd sg. m. impf.)?",
            "correctAnswer": "ʔás ('kills'), yaalla ('stands'), yeeðe ('says'), and yimii ('comes')",
            "options": [
              "ʔás ('kills'), yaalla ('stands'), yeeðe ('says'), and yimii ('comes')",
              "kóm ('eat'), ʔík ('drink'), ráf ('sleep'), and ðánu ('swim')",
              "šíiš ('give'), bólob ('burn'), kúf ('die'), and ɠínin ('bite')",
              "fuur ('open'), tuun ('beat'), hees ('ask'), and ɗis ('build')"
            ],
            "hint": "Blažek (2011, line 118)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach verb from Blažek (2011) with its English meaning:",
            "correctAnswer": "ʔárik: To see (< *ʔarg-)",
            "pairs": [
              {
                "left": "ʔárik (arg-)",
                "right": "To see (< *ʔarg-)"
              },
              {
                "left": "ʔók",
                "right": "To know (< *ʔog-)"
              },
              {
                "left": "yédik (dik)",
                "right": "To sit / live"
              },
              {
                "left": "ðánu (ðaanða)",
                "right": "To swim"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-8",
    "title": "Unit 8: Adjectives, Reduplicated Plurals (p. 207), Colors & Interrogatives (Blažek 2011)",
    "description": "Master Daasanach adjectives, archaic Beja-type partial-reduplication plurals (búubur, ɗeeɗír, ðáaðat) vs. -gV- plurals (ráagar, niiginí, ʔéegeð) from Tosco (2001: 207) & Blažek (2011), demonstratives, and question words.",
    "icon": "Sparkles",
    "skills": [
      {
        "id": "daasanach-adjectives-colors",
        "title": "Adjectives, Reduplicated Plurals (Tosco 2001 p. 207) & Colors",
        "icon": "Sparkles",
        "description": "Learn Daasanach adjectives for good (miðáb / ɗabán), big (guddu), small (níni, pl. niiginí / nigginí), long/tall (ɗér, pl. ɗeeɗír), new (káana), dry (gogu), full (kóc), warm/hot (kulláʔ), cold (ɗéeɲ / ʔabbúnab), thin (dáɗab), and primary colors.",
        "tips": "In Tosco (2001, p. 207; cited in Blažek 2011, line 118), some Daasanach adjectives preserve an East Cushitic archaism shared with Beja—partial reduplication in the plural: búr → pl. búubur ('red'), ɗér → pl. ɗeeɗír ('long, tall'), ðát → pl. ðáaðat ('dark-skinned')—while a more general pattern inserts -gV-: ráar → pl. ráagar ('yellow'), niní → pl. niiginí / nigginí ('little/small'), ʔéð → pl. ʔéegeð ('white').",
        "words": [
          {
            "target": "miðáb (Hb midap, Fl miðup, Bd mIðəp) & ɗabán (Sa ɗabaan 'pretty')",
            "source": "Good / Fine (miðáb) & Pretty / Beautiful (ɗabán)",
            "pronunciation": "mee-dhahb & dah-bahn",
            "hint": "Blažek (2011, 'good')"
          },
          {
            "target": "guddu (Fl/Bd guddo, Hb gūdo, dT gudogà < *gudd-) vs. níni (pl. niiginí / nigginí)",
            "source": "Big / Large (guddu) vs. Small / Little (níni, pl. niiginí / nigginí)",
            "pronunciation": "good-duu vs. nee-nee / nee-gee-nee",
            "hint": "Blažek (2011, line 118 & 'big', 'small')"
          },
          {
            "target": "ɗér (pl. ɗeeɗír; Sa/Fl dir, Bd dIrr < *deer-) & dáɗab ('become thin' < Sam *duuban)",
            "source": "Long / Tall (ɗér, pl. ɗeeɗír) & Become thin (dáɗab)",
            "pronunciation": "dehr / dee-deer & dah-dahb",
            "hint": "Blažek (2011, line 118 & '(be) long', 'thin')"
          },
          {
            "target": "káana ('new'), gogu ('dry' < *angeg-) & kóc ('(be) full', Fl ḳoč)",
            "source": "New (káana), Dry (gogu) & (Be) Full (kóc)",
            "pronunciation": "kaa-nah, goh-guu & kohch",
            "hint": "Blažek (2011, 'new', 'dry', '(be) full')"
          },
          {
            "target": "kulláʔ ('hot', Sa kul, Bd mošoc) vs. ɗéeɲ ('cold', Sa deeɲ, Fl/Bd ḍen < *damh-) & ʔabbúnab ('be cold' < *ḳab(b)-)",
            "source": "Warm / Hot (kulláʔ / kul) vs. Cold (ɗéeɲ) & Be cold (ʔabbúnab)",
            "pronunciation": "kool-lah vs. deeny & ab-buu-nahb",
            "hint": "Blažek (2011, 'warm' & 'cold')"
          },
          {
            "target": "ʔéð (pl. ʔéegeð 'white' < *ʕazz-) • ʔoŋor ('black', Caus. ʔoʔorsis) • ðát (pl. ðáaðat 'dark-skinned') • búr (pl. búubur 'red' < *boʔr-)",
            "source": "White (ʔéð, pl. ʔéegeð), Black (ʔoŋor / make black ʔoʔorsis), Dark-skinned (ðát, pl. ðáaðat) & Red (búr, pl. búubur)",
            "pronunciation": "ehdh / ee-gehdh, oh-ngohr, dhaht / dhaa-dhaht, buur / buu-buur",
            "hint": "Blažek (2011, line 118 & 'white', 'black', 'red') & Nishiguchi (2004, p. 44, Ex. 20a)"
          },
          {
            "target": "ɲuru ('wet, weak', Bd nyuraan) & ráar (pl. ráagar 'yellow')",
            "source": "Wet / Weak (ɲuru) & Yellow (ráar, pl. ráagar)",
            "pronunciation": "nyuu-ruu & raar / raa-gahr",
            "hint": "Blažek (2011, line 118 & 'wet', 'yellow')"
          },
          {
            "target": "lulli ('all', Sa luulli, Fl/Bd luule) & búrnab ('be many', Bd burrnay, Hb burne < Sam *buur-)",
            "source": "All / Whole (lulli) & Be many / Much (búrnab)",
            "pronunciation": "lool-lee & buur-nahb",
            "hint": "Blažek (2011, 'all' & 'many')"
          }
        ],
        "sentences": [
          {
            "target": "búr → búubur ('red') • ɗér → ɗeeɗír ('long') • ðát → ðáaðat ('dark-skinned') • ráar → ráagar ('yellow') • niní → niiginí ('little') • ʔéð → ʔéegeð ('white')",
            "source": "Complete adjectival plural patterns in Tosco (2001, p. 207) & Blažek (2011, line 118)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Mauro Tosco (2001, p. 207) and Václav Blažek (2011, line 118), how do the Daasanach adjectives búr ('red'), ɗér ('long, tall'), and ðát ('dark-skinned') form their plurals, and how do ráar ('yellow'), niní ('little'), and ʔéð ('white') form theirs?",
            "correctAnswer": "Partial reduplication: búr → búubur, ɗér → ɗeeɗír, ðát → ðáaðat (shared with Beja); and -gV- pattern: ráar → ráagar, niní → niiginí, ʔéð → ʔéegeð",
            "options": [
              "Partial reduplication: búr → búubur, ɗér → ɗeeɗír, ðát → ðáaðat (shared with Beja); and -gV- pattern: ráar → ráagar, niní → niiginí, ʔéð → ʔéegeð",
              "By adding the suffix -ti to all adjectives",
              "By changing all vowels to uo",
              "Adjectives are invariable in Daasanach"
            ],
            "hint": "Blažek (2011, line 118, citing Tosco 2001 p. 207)"
          }
        ]
      },
      {
        "id": "daasanach-demonstratives-questions",
        "title": "Demonstratives (ⁿíé(é)-là / ello / yē, hē), Name (mée) & Question Words (máaya?, méete?)",
        "icon": "Lightbulb",
        "description": "Master proximal/distal demonstratives, yes/no particles, 'name' (mée), and interrogatives ('who?' máaya, 'what?' méete) from Blažek (2011).",
        "tips": "In Blažek (2011): 'who?' is máaya (Sasse mááyà, Bender maaya, Fleming maya < *maa ʔayy-a 'which man' EC_B 30); 'what?' is méete (Sasse méétè, Bender meyte, Fleming mete < *maʔ waha 'what thing' EC_B 146); 'name' is mée (Sasse mé, Bender maaya, Fleming mɛ < *magʕ- EC_B 139); and 'this' is Sasse ⁿíé(é)-là, Bender ela-, Fleming ello, Haberland yē/hē m./f. (cf. Arbore hálo m.).",
        "words": [
          {
            "target": "ⁿíé(é)-là (Sa), ela- (Bd), ello (Fl), yē / hē m./f. (Hb) & hé (fem. té, pl. kú)",
            "source": "This / These (proximal demonstrative — cf. Arbore hálo m.)",
            "pronunciation": "nyee-eh-lah / el-loh / yeh / heh",
            "hint": "Blažek (2011, 'this')"
          },
          {
            "target": "híl (fem. tíl)",
            "source": "That (distal demonstrative)",
            "pronunciation": "heel / teel",
            "hint": "Tosco (2001)"
          },
          {
            "target": "máaya? (Sa mááyà, Bd maaya, Fl maya)",
            "source": "Who? (< *maa ʔayy-a 'which man' EC_B 30)",
            "pronunciation": "maa-yah",
            "hint": "Blažek (2011, 'who')"
          },
          {
            "target": "méete? (Sa méétè, Bd meyte, Fl mete)",
            "source": "What? (< *maʔ waha 'what thing' EC_B 146)",
            "pronunciation": "mee-teh",
            "hint": "Blažek (2011, 'what')"
          },
          {
            "target": "ee / ii vs. ma / m'ning",
            "source": "Yes (affirmative) vs. No / Not (negative)",
            "pronunciation": "ee / ii vs. mah / m-ning",
            "hint": "Tosco (2001)"
          },
          {
            "target": "mée (Sa mé, Bd maaya, Fl mɛ)",
            "source": "Name (< *magʕ- EC_B 139)",
            "pronunciation": "mee / meh",
            "hint": "Blažek (2011, 'name')"
          }
        ],
        "sentences": [
          {
            "target": "máaya? ('who?' < *maa ʔayy-a) • méete? ('what?' < *maʔ waha) • mée ('name' < *magʕ-)",
            "source": "Interrogatives and 'name' with East Cushitic reconstructions in Blažek (2011)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Václav Blažek (2011), what are the Daasanach interrogative pronouns for 'Who?' and 'What?', and their Proto-East Cushitic etymologies?",
            "correctAnswer": "máaya ('who?' < *maa ʔayy-a 'which man') and méete ('what?' < *maʔ waha 'what thing')",
            "options": [
              "máaya ('who?' < *maa ʔayy-a 'which man') and méete ('what?' < *maʔ waha 'what thing')",
              "lulli ('all') and búrnab ('be many')",
              "káana ('new') and gogu ('dry')",
              "kulláʔ ('hot') and ɗéeɲ ('cold')"
            ],
            "hint": "Blažek (2011, 'who' & 'what')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach form from Blažek (2011) with its English meaning:",
            "correctAnswer": "máaya?: Who?",
            "pairs": [
              {
                "left": "máaya?",
                "right": "Who? (< *maa ʔayy-a)"
              },
              {
                "left": "méete?",
                "right": "What? (< *maʔ waha)"
              },
              {
                "left": "mée",
                "right": "Name (< *magʕ-)"
              },
              {
                "left": "ⁿíé(é)-là / ello / yē, hē",
                "right": "This (m./f.)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-9-nishiguchi-2004-sonority-ot",
    "title": "Unit 9: Consonant Assimilation, Syllable Contact & Optimality Theory (Sumiyo Nishiguchi 2004, OUPEL 9, pp. 39–51)",
    "description": "Complete line-by-line mastery of Sumiyo Nishiguchi's 'Consonant Assimilation and Sonority: A Case Study in Daasanach' (OUPEL Vol. 9, pp. 39–51, 2004, DOI: 10.18910/70792): Sections 1–5, all Examples (1)–(34), Tableaux 1–4, Footnotes 1–9, and 13 References.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "daasanach-nishiguchi-2004-clusters-sections-1-to-3",
        "title": "Morpheme-Internal vs. Cross-Boundary Clusters & Tableau 1–2 (Sects. 1–3, pp. 39–45)",
        "icon": "BookOpen",
        "description": "Master all 12 morpheme-internal CC cluster words (Examples 5–8), geminates (13), Syllable Contact Law (14–18 & Tableau 1), and all 8 cross-boundary CC cluster words (Examples 19–22 & Tableau 2).",
        "tips": "Within morphemes (Sect. 2, pp. 40–43), *Complex and Onset dominate SyllCon, allowing L > N, F, C (and even C+N duɗ.mo and C+F kuɗ.fu, while *N, F, C > L is banned). Across morpheme boundaries (Sect. 3, pp. 44–45), *C_ObsC_Obs bans any Obstruent + Obstruent sequence.",
        "culturalNote": "Carried out in New York State (Sept. 2004–May 2005) with a native Kenyan Daasanach speaker (acknowledging Ellen Broselow, Lori Repetti & Donka Steriade, fn. * p. 39), Sumiyo Nishiguchi's OUPEL 9 study corrects Tosco's (2001: 52–53) cluster table (noting in fn. 3 p. 42 that Tosco printed 'L' instead of 'F' after N) and confirms the informant's syllabification intuition (fn. 6 p. 43).",
        "words": [
          {
            "target": "marli (/mar + li/) • ɗolmisu (/ɗolis + miso/) • nirm • kernɲo",
            "source": "Sonorant + Sonorant within morphemes (Ex. 5a–b, p. 40): Arbore Fem ('Arbore') • to peep (Nasal-ext Intensive) • newborn camels (/rm/) • bottom backbone (/rn/)",
            "pronunciation": "mar-li / dhol-mi-su / nirm / kern-nyo",
            "hint": "Nishiguchi (2004, Sect. 2, Ex. 5a–b, p. 40)"
          },
          {
            "target": "karsic • balsam (balt + sam) • bilti (bilt + e) • kansic • inti (inti + e)",
            "source": "Sonorant + Obstruent within morphemes (Ex. 6a–d, p. 41): old, elder (/rs/) • kind of grass (/ls/) • the knife for circumcision (/lt/) • chief (/ns/) • the gazelle (/nt/)",
            "pronunciation": "kar-sich / bal-sam / bil-ti / kan-sich / in-ti",
            "hint": "Nishiguchi (2004, Sect. 2, Ex. 6a–d, p. 41 & Tableau 1 p. 43: kar.sic)"
          },
          {
            "target": "duɗmo (dudum + o) • koɗodnos (koɗodno + s) • kuɗfu (kuɗf + o)",
            "source": "Obstruent + Sonorant & Obstruent + Obstruent within morphemes (Ex. 7–8, p. 41): round calabashes (/ɗm/) • to make someone bend for himself (/dn/) • ankles (/df/)",
            "pronunciation": "dudh-mo / ko-dhod-nos / kudh-fu",
            "hint": "Nishiguchi (2004, Sect. 2, Ex. 7–8, p. 41 & Tableau 1 p. 43: duɗ.mo, kuɗ.fu)"
          },
          {
            "target": "GG: yy, ww • LL: ll, rr • NN: mm, nn • FF: ʃʃ • CC: gg, dd, bb, tt, ɟɟ",
            "source": "Geminate consonant inventory in Daasanach (Ex. 13, p. 42, citing Sasse 1974: 409; G = glides)",
            "pronunciation": "yy, ww / ll, rr / mm, nn / sh-sh / gg, dd, bb, tt, jj",
            "hint": "Nishiguchi (2004, Sect. 2, Ex. 13 & fn. 4, p. 42)"
          },
          {
            "target": "uolmosu (olol + mo + su) • ʔoʔorsis (ʔoʔor + sis) • ololso (olol + so) • ʕuurti (ʕuur + ti) • ɗuuninti (ɗuunin + ti)",
            "source": "Sonorant + Sonorant & Sonorant + Obstruent across morpheme boundaries (Ex. 19–20, p. 44): to feed oneself (Nasal Mid) • make black (Caus) • to feed oneself (Mid) • shaved oneself (Mid Perf) • mosquito (Fem Sg)",
            "pronunciation": "u-ol-mo-su / o-or-sis / o-lol-so / uur-ti / dhuu-nin-ti",
            "hint": "Nishiguchi (2004, Sect. 3, Ex. 19–20a–c, p. 44)"
          },
          {
            "target": "duusma (duus + m + a) • diiɗma (diit + m + a) • sʔuudmis (sʔuudis-)",
            "source": "Obstruent + Sonorant across morpheme boundaries (Ex. 21a–b, pp. 44–45): to fart (Impf /sm/) • to refuse (Impf /ɗm/) • to rub (Nasal Ext /dm/)",
            "pronunciation": "duus-ma / diidh-ma / suud-mis",
            "hint": "Nishiguchi (2004, Sect. 3, Ex. 21a–b & Tableau 2, pp. 44–45: duus.ma)"
          }
        ],
        "sentences": [
          {
            "target": "Tableau 1: *Complex, Onset >> SyllCon → kar.sic, duɗ.mo, kuɗ.fu",
            "source": "Morpheme-internal CV syllable structure preference over Syllable Contact (Nishiguchi 2004, p. 43)"
          },
          {
            "target": "Tableau 2: *C_ObsC_Obs, *Complex, Onset >> SyllCon → duus.ma (Obs-Obs banned)",
            "source": "Cross-boundary ban on Obstruent + Obstruent sequences (Nishiguchi 2004, p. 45)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Nishiguchi (2004, Sect. 2, p. 42, Examples 11–12), which consonant class strictly obeys the morpheme-internal cooccurrence restriction such that *N, F, C > L never occurs?",
            "correctAnswer": "Liquids (L > N, F, C; whereas *N, F, C > L is never found)",
            "options": [
              "Liquids (L > N, F, C; whereas *N, F, C > L is never found)",
              "Fricatives (F > L, N, C)",
              "Plain stops (C > L, N, F)",
              "Glides only"
            ],
            "hint": "Nishiguchi (2004, p. 42, Examples 11–12)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Daasanach word from Nishiguchi (2004, pp. 40–44) with its morphological decomposition and gloss:",
            "correctAnswer": "marli: /mar + li/ 'Arbore (Fem)'",
            "pairs": [
              {
                "left": "marli (/mar + li/)",
                "right": "Arbore (Fem)"
              },
              {
                "left": "ɗolmisu (/ɗolis + miso/)",
                "right": "To peep (Nasal-ext Intensive)"
              },
              {
                "left": "koɗodnos (koɗodno + s)",
                "right": "To make someone bend for himself (Caus Mid)"
              },
              {
                "left": "diiɗma (diit + m + a)",
                "right": "To refuse (Impf)"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-nishiguchi-2004-assimilation-ot-sections-4-to-5",
        "title": "Consonant Assimilation, Deletion & Tableaux 3–4 (Sects. 4–5, pp. 46–51)",
        "icon": "Sparkles",
        "description": "Master all 15 consonant assimilation/deletion derivations (Examples 25–31) and the Optimality Theory ranking *CC_Obs, Max-C_son-IO >> Faith-affix-IO (Examples 32–34 & Tableaux 3–4).",
        "tips": "Across morpheme boundaries (p. 48): (a) Son+Son -> Son+Son; (b) Son+Obs -> Son (preserving the sonorant via Max-C_son-IO); (c) Obs+Son -> Obs+Son; (d) Obs₁+Obs₂ -> Obs₂ (preserving the affix obstruent via Faith-affix-IO).",
        "culturalNote": "Nishiguchi (2004, pp. 48–50) shows why neither pure stem-faithfulness, pure affix-faithfulness, pure sonority maximization, nor Donka Steriade's (2001) P-map prevocalic onset salience alone can account for Daasanach: instead, the interaction of *CC_Obs ('Avoid a sequence of a consonant followed by an obstruent'), Max-C_son-IO, and Faith-affix-IO predicts both sonorant survival in (25)–(28) and affix-obstruent survival in (29)–(30).",
        "words": [
          {
            "target": "/zaaby + t + a/ → [zaaya] (G+C → G) • /maal + t + a/ → [maala] • /həl + ta/ → [həlaa] • /bil + t + o/ → [bilo] (L+C → L)",
            "source": "Glide/Liquid + Stop deletion of affix /t/ (Ex. 25–26a–c, p. 47): you sew (Sasse 1976) • (you) hear • (YOU) enter (2Pl) • bows (bow + Pl)",
            "pronunciation": "zaa-ya / maa-la / ha-laa / bi-lo",
            "hint": "Nishiguchi (2004, Sect. 4, Ex. 25–26, p. 47 & Tableau 4 p. 50)"
          },
          {
            "target": "/fuur + t + a/ → [fuuDDA] • /cir + t + i/ → [ciɗɗi] (r+t → ɗɗ) • /maɗ + t + i/ → [maɗɗi] (d+t → ɗɗ)",
            "source": "Coalescence to voiced implosive geminate ɗɗ / DD (Ex. 27a–b & 31, pp. 47–48, fn. 9 p. 50): you open (Sasse 1976) • you held for yourself (Tosco 2001: 187) • you went and bought (2Sg Perf)",
            "pronunciation": "fuu-dda / chidh-dhi / madh-dhi",
            "hint": "Nishiguchi (2004, Sect. 4, Ex. 27 & 31, pp. 47–48, fn. 9 p. 50)"
          },
          {
            "target": "/tuun + t + a/ → [tuunna] • /zaas + am + t + a/ → [zaasanna] ({m, n, l}+t → {nn, ll})",
            "source": "Nasal + Stop assimilation to geminate nn (Ex. 28a–b, p. 47): you beat (beat + 2Sg) • you see (see + 2Sg, Sasse 1976)",
            "pronunciation": "tuun-na / zaa-san-na",
            "hint": "Nishiguchi (2004, Sect. 4, Ex. 28a–b, p. 47 & Tableau 4 p. 50)"
          },
          {
            "target": "/us + te/ → [ute] • /fuus + te/ → [fuute] • /hees + t + i/ → [heeti] • /ɗis + t + i/ → [ɗiti] • /duus + t + i/ → [duuti] (s+t → t)",
            "source": "Fricative + Stop deletion of stem /s/ preserving affix /t/ (Ex. 3 & 29a–e, pp. 39, 47–48): scoop (Past Mid Sg) • tear off (Benefactive) • you asked (2Sg Perf) • you built for yourself (Tosco 2001: 187) • you farted (Tosco 2001: 128)",
            "pronunciation": "u-te / fuu-te / hee-ti / dhi-ti / duu-ti",
            "hint": "Nishiguchi (2004, Sect. 1 Ex. 3 p. 39 & Sect. 4 Ex. 29a–e pp. 47–48, Tableau 4 p. 50)"
          },
          {
            "target": "/it + su/ → [isu] (t+s → s)",
            "source": "Stop + Fricative deletion of stem /t/ preserving affix /s/ (Ex. 4 & 30, pp. 40, 48, Tosco 2001: 24): tear apart + Middle = 'to tear off (for oneself)'",
            "pronunciation": "i-su",
            "hint": "Nishiguchi (2004, Sect. 1 Ex. 4 p. 40 & Sect. 4 Ex. 30 p. 48, Tableau 4 p. 50)"
          },
          {
            "target": "(32) *CC_Obs • (33) Max-C_son-IO • (34) Faith-affix-IO",
            "source": "The 3 Optimality-Theoretic constraints governing Daasanach morpheme boundaries (pp. 48–50): Avoid C+Obstruent (*CC_Obs), Preserve input sonorants (Max-C_son-IO), Preserve input affix segments (Faith-affix-IO)",
            "pronunciation": "star-C-C-obs / max-C-son-I-O / faith-affix-I-O",
            "hint": "Nishiguchi (2004, Sect. 4, Examples 32–34 & Tableaux 3–4, pp. 48–50)"
          }
        ],
        "sentences": [
          {
            "target": "Son+Obs → Son (/maal+t+a/ → [maala]) vs. Obs₁+Obs₂ → Obs₂ (/dus+ti/ → [duti], /it+su/ → [isu])",
            "source": "Summary of Tableau 3 & Tableau 4 under *CC_Obs, Max-C_son-IO >> Faith-affix-IO (Nishiguchi 2004, pp. 49–50)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "Why does /duus + t + i/ surface as [duuti] (retaining affix /t/) and /it + su/ surface as [isu] (retaining affix /s/) in Nishiguchi's (2004, pp. 48–50) Optimality-Theoretic analysis?",
            "correctAnswer": "Because *CC_Obs eliminates the faithful Obstruent+Obstruent cluster, Max-C_son-IO is vacuous, and Faith-affix-IO preserves the consonant in the affix",
            "options": [
              "Because *CC_Obs eliminates the faithful Obstruent+Obstruent cluster, Max-C_son-IO is vacuous, and Faith-affix-IO preserves the consonant in the affix",
              "Because stem consonants are always preserved over affix consonants",
              "Because the more sonorous consonant is always preserved",
              "Because Complex Onsets are preferred in Daasanach"
            ],
            "hint": "Nishiguchi (2004, pp. 48–50, Tableaux 3–4)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each underlying Daasanach form in Nishiguchi (2004, pp. 47–48) with its surface realization and meaning:",
            "correctAnswer": "/us + te/ → [ute]: scoop (Past Mid Sg)",
            "pairs": [
              {
                "left": "/us + te/ → [ute]",
                "right": "scoop (Past Mid Sg)"
              },
              {
                "left": "/fuus + te/ → [fuute]",
                "right": "tear off (Benefactive)"
              },
              {
                "left": "/it + su/ → [isu]",
                "right": "to tear off for oneself (Middle)"
              },
              {
                "left": "/maɗ + t + i/ → [maɗɗi]",
                "right": "you went and bought (2Sg Perf)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daasanach-unit-10-blazek-2011-state-of-the-art-swadesh-etymologies",
    "title": "Unit 10: Dasanech Language – State-of-the-Art (Václav Blažek, Folia Orientalia Vol. 48, 2011 & Mauro Tosco 2001)",
    "description": "Complete line-by-line mastery of Václav Blažek (Folia Orientalia Vol. 48, 2011): Sasse (1975), Heine (1976/1978) & Blažek (1997) classification trees, 14-language cognate ranking, 24-consonant phonology, nominal/verbal morphology, and the 6-source 101-gloss comparative wordlist.",
    "icon": "Globe",
    "skills": [
      {
        "id": "daasanach-blazek-2011-classification-phonology-morphology",
        "title": "Classification Trees, Glottochronology, 24 Consonants & Morphology (Lines 1–120)",
        "icon": "Globe",
        "description": "Master the structure of Tosco (2001), the 3 genealogical trees, the 14-language cognate percentages, the 24 consonant phonemes, and nominal/verbal morphology.",
        "tips": "In Blažek's (1997: 173–74) glottochronological model, Galaboid (Elmolo–Arbore -180 BC / 68.5%; Dasaneč -1080 BC / 51.7%) is closer to Oromoid (-2050 BC / 37.7%) than to Somaloid (-2330 BC / 34.2%). Dasanech shares 53.3% of its 100-word list with Arbore, 50.0% with Elmolo, 38.9% with Oromo, 35.8% with Konso and Somali, and 35.6% with Rendille.",
        "culturalNote": "Published in Folia Orientalia Vol. 48 (2011) by Prof. Václav Blažek (Masaryk University, Brno, blazek@phil.muni.cz), 'Dasanech Language – State-of-the-Art' reviews Mauro Tosco's landmark monograph 'The Dhaasanac Language' (Kuschitische Sprachstudien Band 17, Rüdiger Köppe Verlag, Köln 2001, xiv + 598 pp. + 20 photos, € 65.45, ISBN 3-89645-064-6).",
        "words": [
          {
            "target": "Arbore 53.3% > Elmolo 50.0% > Oromo 38.9% > Konso 35.8% = Somali 35.8% > Rendille 35.6% > D’irayta 31.2% > Bayso 27.7% > Afar 25.0% > Yaaku 18.0% > Gollango 16.5% > Harso 16.1% > Sidamo 14.6% > Dahalo 11.9%",
            "source": "Complete 14-language ranking of common cognate percentages with Dasanech on the 100-word list (Blažek 2011, line 95)",
            "pronunciation": "cognate shares with Dasanech",
            "hint": "Blažek (2011, line 95, based on Blažek 1997: 173–74)"
          },
          {
            "target": "Oral plosives: b, d, t, j, c, g, k, ʔ • Implosives: ɓ, ɗ, ʄ, ɠ • Nasals: m, n, ɲ, ŋ • Fricatives: f, ð, s, š • Trill: r • Approximants: w, y, l",
            "source": "All 24 consonant phonemes of Dasanech + 5 short/long vowels (i, e, a, o, u) + 2 diphthongs (ie, uo) (Tosco 2001, pp. 16–18, 25–26)",
            "pronunciation": "24 consonant phonemes & 2 diphthongs",
            "hint": "Blažek (2011, lines 97–106, citing Tosco 2001 pp. 16–18, 25–26)"
          },
          {
            "target": "Singulative: m. -(i)c / -(i)ɲ, -(a)c / -(a)ɲ; f. -ti (pp. 75–82) • Plural: -u (with final C gemination), -a, -i, -V(V)m (m.) / -sV(V)m (f.), -anu, -ono, -s, -tu (pp. 83–93)",
            "source": "Complete inventory of Dasanech singulative and plural nominal suffixes (Tosco 2001, Ch. 3, pp. 75–93)",
            "pronunciation": "singulative and plural markers",
            "hint": "Blažek (2011, line 108)"
          },
          {
            "target": "3rd sg. m. impf. prefix verbs: ʔás ('kills'), yaalla ('stands'), yeeðe ('says'), yimii ('comes')",
            "source": "The 4 Dasanech verbs preserving the archaic Afroasiatic prefixal conjugation (Tosco 2001, Appendix 2, pp. 320–475)",
            "pronunciation": "ahs / yaal-lah / yee-dheh / yee-mee",
            "hint": "Blažek (2011, line 118)"
          }
        ],
        "sentences": [
          {
            "target": "Galaboid: Elmolo–Arbore (-180 BC / 68.5%) & Dasaneč (-1080 BC / 51.7%) • Galaboid–Oromoid (-2050 BC / 37.7%)",
            "source": "Glottochronological disintegration dates and cognate percentages in Blažek (1997: 173–74; 2011: lines 58–93)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "According to Václav Blažek (2011, line 95), which six languages share the highest percentage of common cognates with Dasanech on the standard 100-word list?",
            "correctAnswer": "Arbore (53.3%), Elmolo (50.0%), Oromo (38.9%), Konso (35.8%), Somali (35.8%), and Rendille (35.6%)",
            "options": [
              "Arbore (53.3%), Elmolo (50.0%), Oromo (38.9%), Konso (35.8%), Somali (35.8%), and Rendille (35.6%)",
              "Dahalo (11.9%), Sidamo (14.6%), Harso (16.1%), Gollango (16.5%), Yaaku (18.0%), and Afar (25.0%)",
              "Swahili, Kikuyu, Kamba, Luhya, Gusii, and Pokomo",
              "Maasai, Turkana, Samburu, Kalenjin, Pokot, and Luo"
            ],
            "hint": "Blažek (2011, line 95)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each grammatical category in Tosco (2001) & Blažek (2011) with its exact Dasanech forms:",
            "correctAnswer": "Implosive plosives: ɓ, ɗ, ʄ, ɠ",
            "pairs": [
              {
                "left": "Implosive plosives (pp. 16–18)",
                "right": "ɓ, ɗ, ʄ, ɠ"
              },
              {
                "left": "Diphthongs (pp. 25–26)",
                "right": "ie, uo"
              },
              {
                "left": "Singulative markers (pp. 75–82)",
                "right": "m. -(i)c / -(i)ɲ, -(a)c / -(a)ɲ; f. -ti"
              },
              {
                "left": "4 Prefix-conjugated verbs (3sg. m. impf.)",
                "right": "ʔás, yaalla, yeeðe, yimii"
              }
            ]
          }
        ]
      },
      {
        "id": "daasanach-blazek-2011-comparative-101-wordlist",
        "title": "The 6-Column Comparative Wordlist (da Trento 1941 to Tosco 2001) & 50 References (Lines 122–338)",
        "icon": "BookOpen",
        "description": "Compare lexical forms across da Trento 1941 (60 units), Haberland 1966 (91), Fleming 1965 (102) & 1971 (146), Bender 1971 (97), Sasse (1973–1982), and Tosco 2001 (c. 1,400) with East Cushitic reconstructions.",
        "tips": "Blažek's (2011) comparative table aligns 67 years of fieldwork on Galab / Geleba / Dasanech (1941–2001) with reconstructions from Sasse (1976, 1979, 1982), Heine (1978, 1980, 1981, 1982), Hayward (1979, 1984), Black (1974), and Pillinger & Galboran (1999).",
        "words": [
          {
            "target": "da Trento 1941 (60) • Haberland 1966 (91) • Fleming 1965 (102) & 1971 (146) • Bender 1971 (97) • Sasse 1973–1982 (ca. 11 studies) • Tosco 2001 (c. 1,400)",
            "source": "The six lexical authorities compared in Blažek's (2011, line 122) 101-gloss Swadesh table (with lexical unit counts in brackets)",
            "pronunciation": "six comparative Dasanech wordlists",
            "hint": "Blažek (2011, lines 122, 278)"
          },
          {
            "target": "lulli ('all') • ʔége ('ashes') & ɗíl ('hot ashes') • boort-i & ɓokot-i ('bark') • geer-e ('belly') • guddu ('big') • kimír-ri ('small bird') & ⁿurum ('big bird') • ɠínin ('bite') • ʔoŋor ('black') • fás ('blood') • láf-u ('bone')",
            "source": "Comparative Table Items 1–10 (Tosco 2001 forms with Sasse/Bender/Fleming/Haberland/da Trento variants & East Cushitic etymologies)",
            "pronunciation": "lool-lee / eh-geh / deel / boor-tee / gee-reh / good-duu / kee-meer-ree / gee-neen / oh-ngohr / fahs / lah-fuu",
            "hint": "Blažek (2011, lines 126–138)"
          },
          {
            "target": "ʔóðu ('human breast'), ɠán ('animal breast') & bál ('chest') • bólob & duun-ay- ('burn') • ⁿáɗ ('fingernail') & konof ('hoof, finger') • derri-c ('cloud') • ɗéeɲ & ʔabbúnab ('cold') • káɗe! & yimeðe ('come') • kúf & dɛd ('die') • cér ('dog') • ʔík ('drink') • gogu ('dry')",
            "source": "Comparative Table Items 11–20 (Tosco 2001 & Sasse/Fleming/Bender forms)",
            "pronunciation": "oh-dhu / gahn / bahl / boh-lohb / nahd / koh-nohf / der-reech / deeny / kah-deh / kuuf / cher / eek / goh-guu",
            "hint": "Blažek (2011, lines 139–158)"
          },
          {
            "target": "nee ('ear') • lés ('land') & bii ('soil') • kóm ('eat') • ɠonɠ-o ('egg') • ʔíl (pl. ʔinnù 'eye') • sálab, buoddi & giɛ ('fat') • bal-li ('feather') • ʄíet (pl. ʔéðe 'fire') • bée & kāra ('fish') • kiiðiɲ ('fly n.') • ɠás & beḍi ('foot') • kóc ('full') • šíiš ('give') • sí ('go') • miðáb & ɗabán ('good/pretty')",
            "source": "Comparative Table Items 21–35 (Tosco 2001 & Sasse/Fleming/Bender/Haberland forms)",
            "pronunciation": "neh / lehs / bee / kohm / gohn-goh / eel / sah-lahb / bahl-lee / jeet / bee / kee-dheeny / gahs / kohch / sheesh / see / mee-dhahb",
            "hint": "Blažek (2011, lines 159–180)"
          },
          {
            "target": "ʔíiš ('grass') • ðúur ('hair') • gíl ('hand') • mé (pl. met-u 'head') • máal ('hear') • ⁿuoðin-ni ('heart') • gáas ('horn') • yú ('I') • ʔás ('kill') • kur (pl. kurram) & duk ('knee') • ʔók & iàarghe ('know') • ráš & nee ('leaf') • círa ('liver') • ɗér ('long') • ʔiðír-ri ('louse')",
            "source": "Comparative Table Items 36–50 (Tosco 2001 & Sasse/Fleming/Bender/Haberland/da Trento forms)",
            "pronunciation": "eesh / dhuur / geel / meh / maal / nwo-dhin-nee / gaas / yuu / ahs / kur / ohk / rahsh / chee-rah / dehr / ee-dheer-ree",
            "hint": "Blažek (2011, lines 181–199)"
          },
          {
            "target": "mí ~ mu & yáb ('man/males') • búrnab ('be many') • só (pl. sogim 'meat') • ɠuí ('moon') • gummuti, wār, labur & siri ('mountain/hill') • ʔaf-u ('mouth') • mée ('name') • lúut-i (pl. lug-u 'neck') • káana ('new') • cuur-i ('night') • sóon-o ('nose') • takac / tikiɗ-ɗi ('one') • máa & gáal ('person/people') • ʔír ('rain') • búr ('red') • ɠíeric ('road') • ⁿíð ('root') • yùoc ('sand') • ʔát / yeeðe ('say') • ʔárik ('see') • ʔár / rruba / fa’ ('seed') • yédik ('sit=live') • r/lokóɗ ('skin') • ráf & ɗínaʔ ('sleep/lie down') • níni (pl. nigginí 'small') • ʔéer ('smoke') • cár ('snake') • yáal & ɠeé ('stand/get up') • ʔiðin ('star') • wáar & dʌb ('stone') • ʔáaðu ('sun') • ðánu ('swim') • wáas, dúm & sugu ('tail/tip/back') • dáɗab ('thin') • ⁿíé(é)-là / ello / yē, hē ('this') • kúun-i ('thou') • sed-di ('three') • ʔére (pl. ʔerbu 'tongue') • kác-u ('tooth') • ɠór ('tree') • naama ('two') • kulláʔ ('warm/hot') • bie ('water') • ɲiini (excl.) & múuni (incl. 'we') • ɲuru ('wet') • méete ('what') • ʔéð (pl. ʔéegeð 'white') • máaya ('who') • min-ni & ɗég-i ('woman/women') • ʔitíni ('ye') • ráar (pl. ráagar 'yellow')",
            "source": "Comparative Table Items 51–101 (Tosco 2001 & Sasse/Fleming/Bender/Haberland/da Trento forms)",
            "pronunciation": "complete 101-gloss Swadesh inventory",
            "hint": "Blažek (2011, lines 200–274)"
          }
        ],
        "sentences": [
          {
            "target": "da Trento 1941 (60) • Haberland 1966 (91) • Fleming 1965 (102) & 1971 (146) • Bender 1971 (97) • Sasse 1973–82 • Tosco 2001 (c. 1,400)",
            "source": "Chronological progression of Dasanech lexical documentation in Blažek (2011, lines 122, 278)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Václav Blažek (2011, line 122), how many lexical units were recorded in each of the historical wordlists compared against Mauro Tosco's (2001) c. 1,400-unit vocabulary?",
            "correctAnswer": "da Trento 1941 (60), Haberland 1966 (91), Fleming 1965 (102) & 1971 (146), Bender 1971 (97), and Sasse 1973–1982 (ca. 11 studies)",
            "options": [
              "da Trento 1941 (60), Haberland 1966 (91), Fleming 1965 (102) & 1971 (146), Bender 1971 (97), and Sasse 1973–1982 (ca. 11 studies)",
              "Höhnel 1894 (500) and Shackleton 1933 (800)",
              "Krapf 1840 (100) and Tutschek 1844 (2,000)",
              "Kirk 1905 (300) and De Larajasse 1897 (3,000)"
            ],
            "hint": "Blažek (2011, lines 122, 278)"
          }
        ]
      }
    ]
  }
];
