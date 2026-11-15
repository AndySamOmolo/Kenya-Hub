import type { LanguageConfig, CourseUnit } from "../types";

export const BORANA_CONFIG: LanguageConfig = {
  "id": "borana",
  "name": "Borana (Oromo)",
  "nativeName": "Afaan Borana",
  "family": "Cushitic",
  "counties": [
    "Marsabit",
    "Isiolo",
    "Moyale",
    "Garissa",
    "Tana River"
  ],
  "speakers": "550K",
  "speechLocale": "om-KE",
  "description": "A major Lowland East Cushitic language spoken by the Borana, Gabra, Sakuye, and Orma communities of Northern and Eastern Kenya.",
  "color": "#B45309",
  "sources": [
    "krapf-isenberg-galla-outline-1840",
    "krapf-galla-vocab-1842",
    "tutschek-galla-oromo-1844",
    "tutschek-galla-grammar-1845",
    "krapf-six-languages-1850",
    "open-web-swadesh-comparative"
  ]
};

export const BORANA_UNITS: CourseUnit[] = [
  {
    "id": "borana-unit-1",
    "unitNumber": 1,
    "title": "Nagaa Borana Greetings, Cushitic Cases, Numerals, 3 Conjugations",
    "description": "Master Afaan Borana greetings (Akkam jirta? / Nagaa!), Nominative vs. Accusative cases, Cardinals/Ordinals (-tiana), Social Numerals (-anu), Amole salt-bar fractions, 8 Derived Verbal Forms, 3 Conjugations, 5 Particle Modes, 4 Negative Verbs, and Verbatim 1840–1845 Prayers & Letters.",
    "icon": "BookOpen",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-greetings-nouns",
        "title": "Greetings, Nagaa (Peace), Kinship, Cases & Tutschek Prayers &",
        "icon": "Handshake",
        "description": "Learn Afaan Borana greetings, pronouns, Nominative case formations (-n, -i, -fni, -ti, -ñi), and verbatim prayers and letters from the 1842–1845 corpus.",
        "tips": "In Afaan Borana (Tutschek 1845, §§ 177–195, pp. 54–57), collective nouns (dargago, mangudo, hatu, hidjole) govern a 3rd person feminine singular verb, and the Accusative/Absolutive is the citation form (nama 'person', lafa 'earth', muka 'tree', boka 'rain', kaniza 'bee', barziza 'teacher', gawa 'hole'), while grammatical subjects take Nominative suffixes (namni, lafti, mukni, bokeñi, kanifni, barzifni, gofni).",
        "culturalNote": "In Charles & Lawrence Tutschek's 1845 Grammar (pp. 84–91, translated by M. J. Smead), three native prayers (Akafed'e's 16-verse Prayer after the War of Hambo and Hamaya, Morning Prayer, and Evening Prayer) and two October 1840 Munich letters between Otshu Aga (of Sibu) and Akafed'e Dalle (of Hambo), alongside Aman Gonda (of Goma), preserve authentic 19th-century Oromo/Borana devotion to Waaqa (Wacayo) and Nagaa (Peace).",
        "words": [
          {
            "target": "Akkam jirta? / Naga, naga! Fayaketi! / Ati naga olte had'a?",
            "source": "How are you? / Peace, peace! Thy health! / Hast thou passed this day in peace?",
            "pronunciation": "akkam-jirta",
            "hint": "Tutschek (1845, p. 88, Otshu Aga’s Letter of Oct. 16, 1840) & Borana salutation"
          },
          {
            "target": "Galatoomi / Wacayon iza ha tolu / Nagaiti buli! / Nagan hafi hama nu",
            "source": "Thank you / May God do good to him / Good night! / Rest in peace until we meet again!",
            "pronunciation": "galatoomi",
            "hint": "Tutschek (1845, pp. 90–91, Aga’s & Akafed’e’s Letters)"
          },
          {
            "target": "nama (nom. namni) / dhiira (d'ira, nom. d'irri) / dubartii (niti) /",
            "source": "Person / Man / Woman, wife / Elders & Youth (collective fem. sg.)",
            "pronunciation": "na-ma / dhii-ra / du-bartii / man-gu-do / dar-ga-go",
            "hint": "Tutschek (1845, §§ 177–184, 191, 231) & Krapf (1842)"
          },
          {
            "target": "abbaa / haadha / mutsha (pl. hidjole)",
            "source": "Father (my/thy father) / Mother (my/thy mother) / Child (pl. collective children)",
            "pronunciation": "abbaa / haadha / mutsha / hi-djo-le",
            "hint": "Tutschek (1845, §§ 180, 184, 186, 230)"
          },
          {
            "target": "kaniza (nom. kanifni) / barziza (nom. barzifni) / gawa (nom. gofni) /",
            "source": "Bee / Teacher / Hole (-fni Nominative) / Earth (-ti) / Rain (-ñi)",
            "pronunciation": "ka-ni-if-ni / bar-zif-ni / gof-ni / laf-ti / bo-ke-nyi",
            "hint": "Tutschek (1845, § 184, pp. 55–56)"
          },
          {
            "target": "bishaan (biz'an) / ibidda (ibida) / aduu (biftu) / baatii (bati, nom.",
            "source": "Water / Fire / Sun / Moon",
            "pronunciation": "bishaan / i-bidda / a-duu / baa-tii",
            "hint": "Tutschek (1845, §§ 184, 254, Prayer 1)"
          },
          {
            "target": "loon (godiyo) / gaala / reeʿ (pl. rooda / rooni) / farda",
            "source": "Cattle / Camel / Goat / Horse (the horses graze — fem. sg. concord)",
            "pronunciation": "loon / gaa-la / ree' / farda / fa-ra-to-ni",
            "hint": "Tutschek (1845, §§ 179, 181–182, pp. 54–55, 86)"
          },
          {
            "target": "Ya Waca nagan na bultshite nagan na oltshi ... milkiko na gadyêlzi!",
            "source": "O God, thou hast let me pass the night in peace, let me pass the day in peace ...",
            "pronunciation": "ya wa-ca na-gan na bultshi-te na-gan na oltshi",
            "hint": "Tutschek (1845, pp. 87–88, Morning Prayer)"
          },
          {
            "target": "Wacayo laftana, goftako! Ho haman nati d'ufe, aka mukni adu narra cabu,",
            "source": "Good God of this earth, my Lord! When misfortune comes to me, as a tree keeps off the",
            "pronunciation": "wa-ca-yo laf-ta-na gof-ta-ko ... ga-di-za na tai",
            "hint": "Tutschek (1845, p. 84, Akafed'e's Prayer after the Hambo–Hamaya War)"
          },
          {
            "target": "D'ad'an ibidti bue hindebiu",
            "source": "Butter fallen into the fire comes not back",
            "pronunciation": "d'ad'an i-bidti bue hinde-biu",
            "hint": "Tutschek (1845, p. 90, Letter 5)"
          }
        ],
        "sentences": [
          {
            "target": "Ya Waca nagan na bultshite nagan na oltshi; ede inand'aca karakora kan naga naf god'te, ya Waca, milkiko na gadyêlzi.",
            "source": "O God, thou hast let me pass the night in peace, let me pass the day in peace; wherever I may go upon my way which thou madest peaceable for me,"
          },
          {
            "target": "Ya Waca nagan na oltshite, nagan na bultshi, gofta goftan cabne; harkake dyaladan ola, harkake dyaladan bula, had'ikozi, abankozi.",
            "source": "O God, thou hast let me pass the day in peace, let me pass the night in peace, O Lord who hast no Lord; under thy hand I pass the day, under thy"
          },
          {
            "target": "Wara Hambo fi wara Hamaya waliti ararzi, goftako! Lola biyakeña baza, naga biyakeñati debizi!",
            "source": "Reconcile the people of Hambo and the people of Hamaya with one another, my Lord! Drive war out of our country, bring peace back to our country!"
          },
          {
            "target": "D'ad'an ibidti bue hindebiu.",
            "source": "Butter fallen into the fire comes not back (Tutschek 1845, p. 90)."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Akkam jirta? / Naga, naga! Fayaketi!\" in Borana?",
            "correctAnswer": "How are you? / Peace, peace! Thy health!",
            "options": [
              "Thank you / May God do good to him",
              "Person / Man / Woman, wife",
              "Father / Mother / Child (pl. collective children)",
              "How are you? / Peace, peace! Thy health!"
            ],
            "hint": "Tutschek (1845, p. 88, Aga’s Letter) & Borana salutation"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Galatoomi / Wacayon iza ha tolu\" in Borana?",
            "correctAnswer": "Thank you / May God do good to him",
            "options": [
              "Person / Man / Woman, wife",
              "Father / Mother / Child (pl. collective children)",
              "Thank you / May God do good to him",
              "How are you? / Peace, peace! Thy health!"
            ],
            "hint": "Tutschek (1845, p. 90, Akafed’e’s Letter)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do nouns in -iza / -awa (such as kaniza 'bee', barziza 'teacher', gawa 'hole') form their Nominative in Tutschek (1845, § 184)?",
            "correctAnswer": "By changing the ending to -fni (kanifni, barzifni, gofni)",
            "options": [
              "By changing the ending to -fni (kanifni, barzifni, gofni)",
              "By prefixing m- to the root",
              "By dropping the first syllable",
              "By adding -tiana to the root"
            ],
            "hint": "Tutschek (1845, § 184.2, p. 55)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Person / Man / Woman, wife\" in Borana?",
            "correctAnswer": "nama (nom. namni) / dhiira (d'ira) / dubartii (niti)",
            "options": [
              "nama (nom. namni) / dhiira (d'ira) / dubartii (niti)",
              "Akkam jirta? / Naga, naga! Fayaketi!",
              "Galatoomi / Wacayon iza ha tolu",
              "abbaa (nom. aban) / haadha (had'a, nom. had'i) / mutsha (pl. hidjole)"
            ],
            "hint": "nah-mah / dhee-rah / doo-bahr-tee"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Father / Mother / Child (pl. collective children)\" in Borana?",
            "correctAnswer": "abbaa (nom. aban) / haadha (had'a, nom. had'i) / mutsha (pl. hidjole)",
            "options": [
              "Akkam jirta? / Naga, naga! Fayaketi!",
              "Galatoomi / Wacayon iza ha tolu",
              "nama (nom. namni) / dhiira (d'ira) / dubartii (niti)",
              "abbaa (nom. aban) / haadha (had'a, nom. had'i) / mutsha (pl. hidjole)"
            ],
            "hint": "ahb-bah / hah-dhah / moo-chah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "Akkam jirta? / Naga, naga! Fayaketi!: How are you? / Peace, peace! Thy health!",
            "pairs": [
              {
                "left": "Akkam jirta? / Naga, naga! Fayaketi!",
                "right": "How are you? / Peace, peace! Thy health!"
              },
              {
                "left": "Galatoomi / Wacayon iza ha tolu",
                "right": "Thank you / May God do good to him"
              },
              {
                "left": "nama (nom. namni) / dhiira (d'ira) / dubartii (niti)",
                "right": "Person / Man / Woman, wife"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Water / Fire / Sun / Moon\": ___",
            "correctAnswer": "bishaan (biz'an) / ibidda (ibida) / aduu (biftu) / baatii (bati)",
            "options": [
              "Akkam jirta? / Naga, naga! Fayaketi!",
              "Galatoomi / Wacayon iza ha tolu",
              "nama (nom. namni) / dhiira (d'ira) / dubartii (niti)",
              "bishaan (biz'an) / ibidda (ibida) / aduu (biftu) / baatii (bati)"
            ],
            "hint": "Tutschek (1845, §§ 184, 254, Prayer 1)"
          }
        ]
      },
      {
        "id": "borana-numbers-verbs",
        "title": "Numerals, Ordinals (-tiana), 21 Social Numbers (-anu), Amole",
        "icon": "Hash",
        "description": "Count in Afaan Borana and master Tutschek’s (1845) ordinals, 21 social numbers, 4 salt-bar fractions, 8 derived verb stems, 3 conjugations, 5 particle modes, and 4 negative verbs.",
        "tips": "Tutschek (1845, §§ 38–176, 201–215, pp. 9–53, 58–63) documents cardinals 1–100,000, ordinals in -tiana (tokotiana '2nd', lamatiana '3rd', while '1st' is ini dura or hangafa, opposed to gudiru 'youngest' & ini boda 'last'), 21 social numbers in -anu (latshanu '2 together' ... kumatanu '1,000 together' + ladz'u 'both'), 4 amole fractions: tchabnana (1/2), karmana (1/4), gimaz'i (3/4), gedele/gadele (1/8), 3 conjugations (adema, tshiza, tà/boa), 5 particle modes (-re, -mi, -ti, -yi, -ni), and 4 negative verbs (dida, bad'a, d'aba, ola).",
        "words": [
          {
            "target": "tokko (toko, 1), lama (2), sadii (zadi, 3), afur (afuri, 4), shan",
            "source": "Cardinals 1 to 5",
            "pronunciation": "tokko la-ma sa-dii a-fur shan",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "ja'a (dya, 6), torba (7; torban = week), saddeet (zadeta, 8), sagal",
            "source": "Cardinals 6 to 10 (plus 7-day week & 10-day decade)",
            "pronunciation": "ja'a torba saddeet sa-gal kudhan",
            "hint": "Tutschek (1845, §§ 201, 203, pp. 58–59)"
          },
          {
            "target": "kudatoko (11), kudalama (12) ... kudazadedᵃ (18), kudazagalᵃ (19)",
            "source": "Cardinals 11 to 19",
            "pronunciation": "ku-da-to-ko ... ku-da-za-gal",
            "hint": "Tutschek (1845, §§ 7, 202, pp. 3, 59)"
          },
          {
            "target": "digetama (20), zodoma (30), afurtama (40), z'antama (50), dyatama (60),",
            "source": "20 to 90, 100, 1,000, and 100,000 ('a fist-full of thousands')",
            "pronunciation": "digda-ma so-do-ma dhibba ku-ma kuntu-ma",
            "hint": "Tutschek (1845, §§ 203–204, pp. 59–60)"
          },
          {
            "target": "ini dura / hangafa, tokotiana (2nd), lamatiana (3rd), zaditiana (4th)",
            "source": "Ordinals 1st to 11th (-tiana = 'hanging on')",
            "pronunciation": "ini du-ra / hanga-fa to-ko-tia-na la-ma-tia-na za-di-tia-na",
            "hint": "Tutschek (1845, §§ 207–208, pp. 60–61)"
          },
          {
            "target": "ladz'u",
            "source": "both",
            "pronunciation": "ladz'u"
          },
          {
            "target": "amole: tchabnana (1/2), karmana (1/4), gimaz'i (3/4), gedele / gadele (1/8)",
            "source": "Salt-bar currency & its 4 fractions: 1/2, 1/4, 3/4, 1/8",
            "pronunciation": "a-mo-le tchabna-na karma-na gi-maz'i ge-de-le",
            "hint": "Tutschek (1845, § 212, p. 62)"
          },
          {
            "target": "gafatoko (once), gafalama (twice), gafazadi (thrice), irgataka (at",
            "source": "Numeral adverbs & numeral verbs (double; do for the 2nd, 3rd, 4th, 5th time)",
            "pronunciation": "ga-fa-to-ko / di-ri-ba / la-me-fad'a",
            "hint": "Tutschek (1845, §§ 213–215, pp. 62–63)"
          },
          {
            "target": "bâ → bad'a → baza → bafad'a → baziza → bazifad'a → baziziza → bazizifad'a",
            "source": "The 8 derived verbal forms of bâ",
            "pronunciation": "bâ-bad'a-baza-bafad'a",
            "hint": "Tutschek (1845, §§ 44–50, 98, 105, pp. 11–12, 28, 30)"
          },
          {
            "target": "Conj. I: adema, ademta, ademna",
            "source": "The 3 Verbal Conjugations (1s, 2s, 1p Present Indicative)",
            "pronunciation": "a-de-ma / tshi-za tshif-ta / ta te-za te-nya",
            "hint": "Tutschek (1845, §§ 132–135, pp. 38–42)"
          },
          {
            "target": "Modes: -u (subj.), -re (interrog.), -mi (nonne), -ti (until), -yi",
            "source": "Subjunctive in -u & the 5 affixed particle modes",
            "pronunciation": "-u / -re / -mi / -ti / -yi / -ni",
            "hint": "Tutschek (1845, §§ 113–119, pp. 32–34)"
          },
          {
            "target": "dida (refuse: oad'z'udide) / bad'a / d'aba / ola (pass by / fail)",
            "source": "The 4 negative auxiliary verbs in Galla/Borana",
            "pronunciation": "di-da / bad'a / d'a-ba / ola",
            "hint": "Tutschek (1845, § 176, pp. 52–53)"
          }
        ],
        "sentences": [
          {
            "target": "Nu arfanu teñeti walwadjin kana hazofna.",
            "source": "There are four of us sitting and conversing together (Tutschek 1845, p. 91)."
          },
          {
            "target": "Wacayo mid'an magarziza.",
            "source": "God causes the grain to grow (Tutschek 1845, § 84, p. 22)."
          },
          {
            "target": "Oto izan homa hiñad'ini galani.",
            "source": "They went home without having eaten anything (Tutschek 1845, § 119, p. 34)."
          },
          {
            "target": "Muca Djulule boe hinrafne, malif aannan obaftani, aka ini rafufi? — Muca Gadiyo hud'eti kan ini boe; gara d'ukubeti, kan ini boe.",
            "source": "Why do you not give Djulule's child milk to drink that it may sleep, as it weeps and does not sleep? — Gadiyo's child has a cough, therefore it"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What are the 4 fractions of the amole salt-bar currency in Tutschek (1845, § 212, p. 62)?",
            "correctAnswer": "tchabnana (1/2), karmana (1/4), gimaz'i (3/4), gedele / gadele (1/8)",
            "options": [
              "tchabnana (1/2), karmana (1/4), gimaz'i (3/4), gedele / gadele (1/8)",
              "toko (1), lama (2), zadi (3), afuri (4)",
              "dida, bad'a, d'aba, ola",
              "-re, -mi, -ti, -yi, -ni"
            ],
            "hint": "Tutschek (1845, § 212, p. 62)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"digetama (20), zodoma (30), d'iba (100), kuma (1,000), kuntuma (100,000)\" in Borana?",
            "correctAnswer": "20, 30, 100, 1,000, 100,000",
            "options": [
              "First (first-born), Second, Third, Fourth",
              "20, 30, 100, 1,000, 100,000",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10"
            ],
            "hint": "Tutschek (1845, §§ 203–204, pp. 59–60)"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-2",
    "unitNumber": 2,
    "title": "Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Users",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-family-kinship-kinship-elders-2",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "ilma (pl. ilmaan / ilman)",
            "source": "Son",
            "pronunciation": "ilma",
            "hint": "Tutschek (1845, § 182, p. 55)"
          },
          {
            "target": "obboleettii / oboleti (nom. oboletin)",
            "source": "Sister",
            "pronunciation": "obbo-leettii / o-bo-le-ti",
            "hint": "Tutschek (1845, §§ 200, 228, 239)"
          },
          {
            "target": "dubartii / niitii (niti) / haadha warraa",
            "source": "Woman / Wife",
            "pronunciation": "du-bartii / nii-tii / haadha warraa",
            "hint": "Tutschek (1845, § 191, p. 56) & Borana / Oromo"
          },
          {
            "target": "barsiisaa / barziza (nom. barzifni, pl. barsiisota)",
            "source": "Teacher",
            "pronunciation": "barsii-saa / barzi-za",
            "hint": "Tutschek (1845, § 184.2, p. 55)"
          },
          {
            "target": "maqaa / maca (nom. maqaan / macan)",
            "source": "Name",
            "pronunciation": "ma-qaa / ma-ca",
            "hint": "Tutschek (1845, §§ 245, 250.1, pp. 73, 80)"
          },
          {
            "target": "obolesa ayoáti; soda",
            "source": "Aunt",
            "pronunciation": "o-bo-le-sa a-yoa-ti",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "gúrba",
            "source": "Boy",
            "pronunciation": "gurba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "ntála ka kádatu dira",
            "source": "Bride",
            "pronunciation": "nta-la ka ka-da-tu di-ra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "obolésa",
            "source": "Brother",
            "pronunciation": "o-bo-le-sa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ilma (pl. ilmaan / ilman)\" in Borana?",
            "correctAnswer": "Son",
            "options": [
              "Sister",
              "Woman / Wife",
              "Teacher",
              "Son"
            ],
            "hint": "Tutschek (1845, § 182, p. 55)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"obboleettii / oboleti (nom. oboletin)\" in Borana?",
            "correctAnswer": "Sister",
            "options": [
              "Woman / Wife",
              "Teacher",
              "Sister",
              "Son"
            ],
            "hint": "Tutschek (1845, §§ 200, 228, 239)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dubartii / niitii (niti) / haadha warraa\" in Borana?",
            "correctAnswer": "Woman / Wife",
            "options": [
              "Teacher",
              "Woman / Wife",
              "Son",
              "Sister"
            ],
            "hint": "Tutschek (1845, § 191, p. 56) & Borana / Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Woman / Wife\" in Borana?",
            "correctAnswer": "dubartii / niitii (niti) / haadha warraa",
            "options": [
              "dubartii / niitii (niti) / haadha warraa",
              "ilma (pl. ilmaan / ilman)",
              "obboleettii / oboleti (nom. oboletin)",
              "barsiisaa / barziza (nom. barzifni, pl. barsiisota)"
            ],
            "hint": "du-bar-tii / nii-tii"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Teacher\" in Borana?",
            "correctAnswer": "barsiisaa / barziza (nom. barzifni, pl. barsiisota)",
            "options": [
              "ilma (pl. ilmaan / ilman)",
              "obboleettii / oboleti (nom. oboletin)",
              "dubartii / niitii (niti) / haadha warraa",
              "barsiisaa / barziza (nom. barzifni, pl. barsiisota)"
            ],
            "hint": "bar-sii-saa / bar-zif-ni"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "ilma (pl. ilmaan / ilman): Son",
            "pairs": [
              {
                "left": "ilma (pl. ilmaan / ilman)",
                "right": "Son"
              },
              {
                "left": "obboleettii / oboleti (nom. oboletin)",
                "right": "Sister"
              },
              {
                "left": "dubartii / niitii (niti) / haadha warraa",
                "right": "Woman / Wife"
              },
              {
                "left": "barsiisaa / barziza (nom. barzifni, pl. barsiisota)",
                "right": "Teacher"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Name\": ___",
            "correctAnswer": "maqaa / maca (nom. maqaan / macan)",
            "options": [
              "ilma (pl. ilmaan / ilman)",
              "obboleettii / oboleti (nom. oboletin)",
              "dubartii / niitii (niti) / haadha warraa",
              "maqaa / maca (nom. maqaan / macan)"
            ],
            "hint": "Tutschek (1845, §§ 245, 250.1, pp. 73, 80)"
          }
        ]
      },
      {
        "id": "borana-family-kinship-clans-community-2",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "ílma",
            "source": "Child",
            "pronunciation": "ilma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "worra",
            "source": "Family",
            "pronunciation": "worra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "aba",
            "source": "Father",
            "pronunciation": "aba",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "oboleza / oboleti",
            "source": "Brother / Sister",
            "pronunciation": "o-bo-le-za / o-bo-le-ti",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "dúbra; entála",
            "source": "Girl",
            "pronunciation": "dubra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "akakáyo",
            "source": "Grandfather",
            "pronunciation": "a-ka-ka-yo",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "ako",
            "source": "Grandmother",
            "pronunciation": "ako",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "odjolle ka ilma",
            "source": "Grandson / Grandchild",
            "pronunciation": "odjolle ka ilma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "dirsa",
            "source": "Husband",
            "pronunciation": "dirsa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ílma\" in Borana (Afaan Borana)?",
            "correctAnswer": "Child",
            "options": [
              "Child",
              "Family",
              "Father",
              "Brother / Sister"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Borana (Afaan Borana) term to its English meaning:",
            "correctAnswer": "ílma: Child",
            "pairs": [
              {
                "left": "ílma",
                "right": "Child"
              },
              {
                "left": "worra",
                "right": "Family"
              },
              {
                "left": "aba",
                "right": "Father"
              },
              {
                "left": "oboleza / oboleti",
                "right": "Brother / Sister"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana (Afaan Borana) term for \"Girl\": ___",
            "correctAnswer": "dúbra; entála",
            "options": [
              "dúbra; entála",
              "ílma",
              "worra",
              "aba"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-3",
    "unitNumber": 3,
    "title": "Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Scale",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-numbers-measures-cardinals-ordinals-3",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "tokko (toko, tak)",
            "source": "One",
            "pronunciation": "tokko",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "lama",
            "source": "Two",
            "pronunciation": "la-ma",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "sadii (zadi)",
            "source": "Three",
            "pronunciation": "sa-dii",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "afur (afuri)",
            "source": "Four",
            "pronunciation": "a-fur",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "shan (z'ani)",
            "source": "Five",
            "pronunciation": "shan",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "jaha / ja'a (dya)",
            "source": "Six",
            "pronunciation": "ja-ha / ja'a",
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "target": "torba (torbani; torban = week of 7 days)",
            "source": "Seven (and 7-day Week)",
            "pronunciation": "torba",
            "hint": "Tutschek (1845, §§ 7, 201, 203, pp. 3, 58–59)"
          },
          {
            "target": "saddeet (zadeta)",
            "source": "Eight",
            "pronunciation": "saddeet",
            "hint": "Tutschek (1845, § 201, p. 58)"
          },
          {
            "target": "sagal (zagala)",
            "source": "Nine",
            "pronunciation": "sa-gal",
            "hint": "Tutschek (1845, § 201, p. 58)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tokko (toko, tak)\" in Borana?",
            "correctAnswer": "One",
            "options": [
              "Two",
              "Three",
              "Four",
              "One"
            ],
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"lama\" in Borana?",
            "correctAnswer": "Two",
            "options": [
              "Three",
              "Four",
              "Two",
              "One"
            ],
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sadii (zadi)\" in Borana?",
            "correctAnswer": "Three",
            "options": [
              "Four",
              "Three",
              "One",
              "Two"
            ],
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Three\" in Borana?",
            "correctAnswer": "sadii (zadi)",
            "options": [
              "sadii (zadi)",
              "tokko (toko, tak)",
              "lama",
              "afur (afuri)"
            ],
            "hint": "sa-dii"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Four\" in Borana?",
            "correctAnswer": "afur (afuri)",
            "options": [
              "tokko (toko, tak)",
              "lama",
              "sadii (zadi)",
              "afur (afuri)"
            ],
            "hint": "a-fur"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "tokko (toko, tak): One",
            "pairs": [
              {
                "left": "tokko (toko, tak)",
                "right": "One"
              },
              {
                "left": "lama",
                "right": "Two"
              },
              {
                "left": "sadii (zadi)",
                "right": "Three"
              },
              {
                "left": "afur (afuri)",
                "right": "Four"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Five\": ___",
            "correctAnswer": "shan (z'ani)",
            "options": [
              "tokko (toko, tak)",
              "lama",
              "sadii (zadi)",
              "shan (z'ani)"
            ],
            "hint": "Tutschek (1845, § 201, p. 58) & Krapf (1842)"
          }
        ]
      },
      {
        "id": "borana-numbers-measures-trade-measures-3",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "kudhan (kudani; kurna = set of ten / 10-day period)",
            "source": "Ten (and 10-day Period / Decade)",
            "pronunciation": "kudhan",
            "hint": "Tutschek (1845, §§ 201, 203, pp. 58–59)"
          },
          {
            "target": "digdama (digetama, digtama = 20) / sodoma (zodoma = 30)",
            "source": "Twenty & Thirty",
            "pronunciation": "digda-ma / so-do-ma",
            "hint": "Tutschek (1845, §§ 203–204, pp. 59–60)"
          },
          {
            "target": "dhibba (d'iba = 100) / kuma (1,000) / kuntuma (100,000)",
            "source": "Hundred, Thousand & Hundred Thousand",
            "pronunciation": "dhibba / ku-ma / kuntu-ma",
            "hint": "Tutschek (1845, §§ 203–204, pp. 59–60)"
          },
          {
            "target": "tokko (toko, tak)",
            "source": "One",
            "pronunciation": "tok-ko"
          },
          {
            "target": "lamma",
            "source": "Two",
            "pronunciation": "lam-ma"
          },
          {
            "target": "dya",
            "source": "Six",
            "pronunciation": "dya"
          },
          {
            "target": "kudan",
            "source": "Ten",
            "pronunciation": "ku-dan"
          },
          {
            "target": "ṣān",
            "source": "Five",
            "pronunciation": "san"
          },
          {
            "target": "afur",
            "source": "Four",
            "pronunciation": "a-fur"
          }
        ],
        "sentences": [
          {
            "target": "kudhan — digdama",
            "source": "Ten — Twenty & Thirty"
          },
          {
            "target": "dhibba — tokko",
            "source": "Hundred, Thousand & Hundred Thousand — One"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kudhan\" mean in English?",
            "correctAnswer": "Ten (and 10-day Period / Decade)",
            "options": [
              "Ten (and 10-day Period / Decade)",
              "Twenty & Thirty",
              "Hundred, Thousand & Hundred Thousand",
              "One"
            ],
            "hint": "Core vocabulary in Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Twenty & Thirty\"",
            "correctAnswer": "digdama",
            "acceptedAnswers": [
              "digdama (digetama, digtama = 20) / sodoma (zodoma = 30)",
              "digdama"
            ],
            "hint": "Starts with \"di\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dhibba\"",
            "correctAnswer": "Hundred, Thousand & Hundred Thousand",
            "acceptedAnswers": [
              "Hundred, Thousand & Hundred Thousand",
              "Hundred, Thousand & Hundred Thousand"
            ],
            "hint": "Review Trade, Barter, Currency & Traditional Measures"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Trade, Barter, Currency & Traditional Measures with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kudhan",
                "right": "Ten"
              },
              {
                "left": "digdama",
                "right": "Twenty & Thirty"
              },
              {
                "left": "dhibba",
                "right": "Hundred, Thousand & Hundred Thousand"
              },
              {
                "left": "tokko",
                "right": "One"
              },
              {
                "left": "lamma",
                "right": "Two"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-4",
    "unitNumber": 4,
    "title": "Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Tractor",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-food-agriculture-staple-foods-cookery-4",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "buna (mana bunaa = coffee house)",
            "source": "Coffee",
            "pronunciation": "bu-na",
            "hint": "Wikipedia Oromo_language"
          },
          {
            "target": "foon (fon = meat) / dêca (sacrificial flesh)",
            "source": "Meat (and Sacrificial Meat)",
            "pronunciation": "foon / de-ca",
            "hint": "Tutschek (1845, §§ 150.3, 174, pp. 45, 52)"
          },
          {
            "target": "damma / dagma (nom. dagmi — Sibu dialect damma)",
            "source": "Honey",
            "pronunciation": "damma / dagma",
            "hint": "Tutschek (1845, §§ 14, 249.3, pp. 5, 78)"
          },
          {
            "target": "soogidda (zogita) / amole (rock-salt bar currency)",
            "source": "Salt (and Amole Salt-Bar)",
            "pronunciation": "soo-gidda / a-mo-le",
            "hint": "Tutschek (1845, §§ 6, 212, pp. 3, 62)"
          },
          {
            "target": "sórate; lékemse",
            "source": "Eat",
            "pronunciation": "sorate"
          },
          {
            "target": "hókōka",
            "source": "Egg",
            "pronunciation": "hokoka"
          },
          {
            "target": "dádătja",
            "source": "Oil",
            "pronunciation": "dadatja"
          },
          {
            "target": "tshōma",
            "source": "Fat",
            "pronunciation": "tsho-ma"
          },
          {
            "target": "guma wato",
            "source": "Fig",
            "pronunciation": "gu-ma wa-to"
          }
        ],
        "sentences": [
          {
            "target": "buna — foon",
            "source": "Coffee — Meat"
          },
          {
            "target": "damma — soogidda",
            "source": "Honey — Salt"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"buna\" mean in English?",
            "correctAnswer": "Coffee",
            "options": [
              "Coffee",
              "Meat (and Sacrificial Meat)",
              "Honey",
              "Salt (and Amole Salt-Bar)"
            ],
            "hint": "Core vocabulary in Staple Foods, Cookery & Beverages"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Meat (and Sacrificial Meat)\"",
            "correctAnswer": "foon",
            "acceptedAnswers": [
              "foon (fon = meat) / dêca (sacrificial flesh)",
              "foon"
            ],
            "hint": "Starts with \"fo\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"damma\"",
            "correctAnswer": "Honey",
            "acceptedAnswers": [
              "Honey",
              "Honey"
            ],
            "hint": "Review Staple Foods, Cookery & Beverages"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Staple Foods, Cookery & Beverages with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "buna",
                "right": "Coffee"
              },
              {
                "left": "foon",
                "right": "Meat"
              },
              {
                "left": "damma",
                "right": "Honey"
              },
              {
                "left": "soogidda",
                "right": "Salt"
              },
              {
                "left": "sórate",
                "right": "Eat"
              }
            ]
          }
        ]
      },
      {
        "id": "borana-food-agriculture-crops-livestock-4",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "kurkurio mideise",
            "source": "Bake, v. a. -bread",
            "pronunciation": "kurku-rio mi-dei-se",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "sórate; lékemse",
            "source": "Eat",
            "pronunciation": "sórate"
          },
          {
            "target": "damfe",
            "source": "Boil",
            "pronunciation": "damfe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "korkorío",
            "source": "Bread",
            "pronunciation": "korko-rio",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "cabad'u",
            "source": "Fat",
            "pronunciation": "ca-bad'u"
          },
          {
            "target": "mizira",
            "source": "Pea",
            "pronunciation": "mi-zi-ra"
          },
          {
            "target": "harbu",
            "source": "Fig",
            "pronunciation": "harbu"
          },
          {
            "target": "bákse",
            "source": "Fry",
            "pronunciation": "bakse"
          },
          {
            "target": "bubba. To lay eggs, bubba bafte",
            "source": "Egg",
            "pronunciation": "bub-ba to lay eg bub-ba baf-te"
          }
        ],
        "sentences": [
          {
            "target": "kurkurio mideise — sórate",
            "source": "Bake, v. a. -bread — Eat"
          },
          {
            "target": "damfe — korkorío",
            "source": "Boil — Bread"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kurkurio mideise\" mean in English?",
            "correctAnswer": "Bake, v. a. -bread",
            "options": [
              "Bake, v. a. -bread",
              "Eat",
              "Boil",
              "Bread"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Eat\"",
            "correctAnswer": "sórate",
            "acceptedAnswers": [
              "sórate; lékemse",
              "sórate"
            ],
            "hint": "Starts with \"só\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"damfe\"",
            "correctAnswer": "Boil",
            "acceptedAnswers": [
              "Boil",
              "Boil"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kurkurio mideise",
                "right": "Bake, v. a. -bread"
              },
              {
                "left": "sórate",
                "right": "Eat"
              },
              {
                "left": "damfe",
                "right": "Boil"
              },
              {
                "left": "korkorío",
                "right": "Bread"
              },
              {
                "left": "cabad'u",
                "right": "Fat"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-5",
    "unitNumber": 5,
    "title": "Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "PawPrint",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-nature-wildlife-land-sky-water-5",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "bishaan (biz'an / bisaan)",
            "source": "Water",
            "pronunciation": "bishaan",
            "hint": "Tutschek (1845, § 254, p. 82) & Wikipedia Oromo_language"
          },
          {
            "target": "urjii",
            "source": "Star",
            "pronunciation": "urjii",
            "hint": "Wikipedia Oromo_language"
          },
          {
            "target": "Waaqa (Waca / Wacayo)",
            "source": "Sky / God",
            "pronunciation": "waa-qa",
            "hint": "Tutschek (1845, § 6, p. 3)"
          },
          {
            "target": "duumessa",
            "source": "Cloud",
            "pronunciation": "duu-messa",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "rooba (roba, verb; III robziza) / bokkaa (boka, nom. bokeñi)",
            "source": "Rain",
            "pronunciation": "roo-ba / bokkaa",
            "hint": "Tutschek (1845, §§ 66, 163, 184, pp. 18, 49, 56)"
          },
          {
            "target": "qilleensa (qilenza / qile˜za)",
            "source": "Wind",
            "pronunciation": "qilleensa",
            "hint": "Tutschek (1845, § 4, p. 2)"
          },
          {
            "target": "ibidda (ibida) / bobaa / giimii",
            "source": "Fire",
            "pronunciation": "i-bidda / bo-baa / gii-mii",
            "hint": "Tutschek (1845, § 249.2, p. 76 & p. 90)"
          },
          {
            "target": "aara (ara = steam, smoke; III arza) / caca (soot)",
            "source": "Smoke / Soot",
            "pronunciation": "aa-ra / ca-ca",
            "hint": "Tutschek (1845, §§ 12, 75, pp. 4, 20)"
          },
          {
            "target": "barbadaa / daaraa",
            "source": "Ash",
            "pronunciation": "barba-daa / daa-raa",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bishaan (biz'an / bisaan)\" in Borana?",
            "correctAnswer": "Water",
            "options": [
              "Star",
              "Sky / God",
              "Cloud",
              "Water"
            ],
            "hint": "Tutschek (1845, § 254, p. 82) & Wikipedia Oromo_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"urjii\" in Borana?",
            "correctAnswer": "Star",
            "options": [
              "Sky / God",
              "Cloud",
              "Star",
              "Water"
            ],
            "hint": "Wikipedia Oromo_language"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Waaqa (Waca / Wacayo)\" in Borana?",
            "correctAnswer": "Sky / God",
            "options": [
              "Cloud",
              "Sky / God",
              "Water",
              "Star"
            ],
            "hint": "Tutschek (1845, § 6, p. 3)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Sky / God\" in Borana?",
            "correctAnswer": "Waaqa (Waca / Wacayo)",
            "options": [
              "Waaqa (Waca / Wacayo)",
              "bishaan (biz'an / bisaan)",
              "urjii",
              "duumessa"
            ],
            "hint": "waa-qa / wa-ca-yo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Cloud\" in Borana?",
            "correctAnswer": "duumessa",
            "options": [
              "bishaan (biz'an / bisaan)",
              "urjii",
              "Waaqa (Waca / Wacayo)",
              "duumessa"
            ],
            "hint": "duu-mes-sa"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "bishaan (biz'an / bisaan): Water",
            "pairs": [
              {
                "left": "bishaan (biz'an / bisaan)",
                "right": "Water"
              },
              {
                "left": "urjii",
                "right": "Star"
              },
              {
                "left": "Waaqa (Waca / Wacayo)",
                "right": "Sky / God"
              },
              {
                "left": "duumessa",
                "right": "Cloud"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Rain\": ___",
            "correctAnswer": "rooba (roba, verb; III robziza) / bokkaa (boka, nom. bokeñi)",
            "options": [
              "bishaan (biz'an / bisaan)",
              "urjii",
              "Waaqa (Waca / Wacayo)",
              "rooba (roba, verb; III robziza) / bokkaa (boka, nom. bokeñi)"
            ],
            "hint": "Tutschek (1845, §§ 66, 163, 184, pp. 18, 49, 56)"
          }
        ]
      },
      {
        "id": "borana-nature-wildlife-wildlife-flora-5",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "laga (pl. laggeen)",
            "source": "River",
            "pronunciation": "la-ga",
            "hint": "Wikipedia Oromo_language"
          },
          {
            "target": "haroo (def. harittii) / hara",
            "source": "Lake",
            "pronunciation": "ha-roo / ha-ra",
            "hint": "Wikipedia Oromo_language"
          },
          {
            "target": "baala",
            "source": "Leaf",
            "pronunciation": "baa-la",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "sanyii (saññii) / garii",
            "source": "Seed",
            "pronunciation": "sanyii / ga-rii",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "ganama (morning; ganamfad'a = to dawn)",
            "source": "Morning / Dawn",
            "pronunciation": "ga-na-ma",
            "hint": "Tutschek (1845, § 97, p. 27)"
          },
          {
            "target": "sánga; korma lóniti",
            "source": "Ox",
            "pronunciation": "sanga"
          },
          {
            "target": "kénnissa",
            "source": "Bee",
            "pronunciation": "kennissa"
          },
          {
            "target": "makállaṣo",
            "source": "Cat",
            "pronunciation": "makallaso"
          },
          {
            "target": "loni",
            "source": "Cow",
            "pronunciation": "lo-ni"
          }
        ],
        "sentences": [
          {
            "target": "laga — haroo",
            "source": "River — Lake"
          },
          {
            "target": "baala — sanyii",
            "source": "Leaf — Seed"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"laga\" mean in English?",
            "correctAnswer": "River",
            "options": [
              "River",
              "Lake",
              "Leaf",
              "Seed"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Lake\"",
            "correctAnswer": "haroo",
            "acceptedAnswers": [
              "haroo (def. harittii) / hara",
              "haroo"
            ],
            "hint": "Starts with \"ha\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"baala\"",
            "correctAnswer": "Leaf",
            "acceptedAnswers": [
              "Leaf",
              "Leaf"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "laga",
                "right": "River"
              },
              {
                "left": "haroo",
                "right": "Lake"
              },
              {
                "left": "baala",
                "right": "Leaf"
              },
              {
                "left": "sanyii",
                "right": "Seed"
              },
              {
                "left": "ganama",
                "right": "Morning"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-6",
    "unitNumber": 6,
    "title": "The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "User",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-body-health-anatomy-senses-6",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "gurra",
            "source": "Ear",
            "pronunciation": "gurra",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)",
            "source": "Mouth / Language / Jaw",
            "pronunciation": "a-faan / manga-ga",
            "hint": "Tutschek (1845, § 4, p. 2 & p. 85)"
          },
          {
            "target": "ilkaan",
            "source": "Tooth",
            "pronunciation": "ilkaan",
            "hint": "Borana / Oromo"
          },
          {
            "target": "arraba (araba; arabza = to insult)",
            "source": "Tongue",
            "pronunciation": "arra-ba",
            "hint": "Tutschek (1845, § 97, p. 27)"
          },
          {
            "target": "qeensa",
            "source": "Fingernail / Claw",
            "pronunciation": "qeensa",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "jilba (dyilba; dyilbefad'a = to kneel)",
            "source": "Knee",
            "pronunciation": "jilba",
            "hint": "Tutschek (1845, §§ 52, 97, pp. 13, 27)"
          },
          {
            "target": "harka (instr. harkaan; harkiza / harkifad'a = drag, pull)",
            "source": "Hand / Arm",
            "pronunciation": "harka",
            "hint": "Tutschek (1845, § 97, p. 28)"
          },
          {
            "target": "garaa (gara, nom. garan = belly, heart, mind, interior)",
            "source": "Belly / Heart / Mind",
            "pronunciation": "ga-raa",
            "hint": "Tutschek (1845, p. 87: 'garakotinan zi kad'ad'a' = I entreat thee from my heart)"
          },
          {
            "target": "mar'umaan",
            "source": "Guts / Intestines",
            "pronunciation": "mar'u-maan",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gurra\" in Borana?",
            "correctAnswer": "Ear",
            "options": [
              "Mouth / Language / Jaw",
              "Tooth",
              "Tongue",
              "Ear"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)\" in Borana?",
            "correctAnswer": "Mouth / Language / Jaw",
            "options": [
              "Tooth",
              "Tongue",
              "Mouth / Language / Jaw",
              "Ear"
            ],
            "hint": "Tutschek (1845, § 4, p. 2 & p. 85)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ilkaan\" in Borana?",
            "correctAnswer": "Tooth",
            "options": [
              "Tongue",
              "Tooth",
              "Ear",
              "Mouth / Language / Jaw"
            ],
            "hint": "Borana / Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tooth\" in Borana?",
            "correctAnswer": "ilkaan",
            "options": [
              "ilkaan",
              "gurra",
              "afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)",
              "arraba (araba; arabza = to insult)"
            ],
            "hint": "il-kaan"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Tongue\" in Borana?",
            "correctAnswer": "arraba (araba; arabza = to insult)",
            "options": [
              "gurra",
              "afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)",
              "ilkaan",
              "arraba (araba; arabza = to insult)"
            ],
            "hint": "ar-ra-ba"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "gurra: Ear",
            "pairs": [
              {
                "left": "gurra",
                "right": "Ear"
              },
              {
                "left": "afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)",
                "right": "Mouth / Language / Jaw"
              },
              {
                "left": "ilkaan",
                "right": "Tooth"
              },
              {
                "left": "arraba (araba; arabza = to insult)",
                "right": "Tongue"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Fingernail / Claw\": ___",
            "correctAnswer": "qeensa",
            "options": [
              "gurra",
              "afaan (afan, mouth, language) / mangaga (ma˜gaga, jaw)",
              "ilkaan",
              "qeensa"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          }
        ]
      },
      {
        "id": "borana-body-health-healing-safety-6",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "qoosee / morma",
            "source": "Neck / Throat",
            "pronunciation": "qoo-see / morma",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "dugda",
            "source": "Back",
            "pronunciation": "dugda",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "harma",
            "source": "Breast",
            "pronunciation": "harma",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "onnee / garaa",
            "source": "Heart",
            "pronunciation": "onnee / ga-raa",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "tiruu",
            "source": "Liver",
            "pronunciation": "ti-ruu",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "dhiiga (d'iiga)",
            "source": "Blood",
            "pronunciation": "dhii-ga",
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "target": "gogaa / ittillee (lucã / luqiza = prepare raw hides)",
            "source": "Skin / Hide",
            "pronunciation": "go-gaa / ittillee",
            "hint": "Tutschek (1845, § 74, p. 20) & Swadesh list"
          },
          {
            "target": "bertshuma irko",
            "source": "Arm-chair",
            "pronunciation": "bertshu-ma irko",
            "hint": "Rev. J. L. Krapf (1842) Vocabulary of the Galla Language [s.]"
          },
          {
            "target": "mōlo",
            "source": "Bald-head",
            "pronunciation": "mo-lo",
            "hint": "Rev. J. L. Krapf (1842) Vocabulary of the Galla Language [s.]"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"qoosee / morma\" in Borana?",
            "correctAnswer": "Neck / Throat",
            "options": [
              "Back",
              "Breast",
              "Heart",
              "Neck / Throat"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dugda\" in Borana?",
            "correctAnswer": "Back",
            "options": [
              "Breast",
              "Heart",
              "Back",
              "Neck / Throat"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"harma\" in Borana?",
            "correctAnswer": "Breast",
            "options": [
              "Heart",
              "Breast",
              "Neck / Throat",
              "Back"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breast\" in Borana?",
            "correctAnswer": "harma",
            "options": [
              "harma",
              "qoosee / morma",
              "dugda",
              "onnee / garaa"
            ],
            "hint": "har-ma"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Heart\" in Borana?",
            "correctAnswer": "onnee / garaa",
            "options": [
              "qoosee / morma",
              "dugda",
              "harma",
              "onnee / garaa"
            ],
            "hint": "on-nee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "qoosee / morma: Neck / Throat",
            "pairs": [
              {
                "left": "qoosee / morma",
                "right": "Neck / Throat"
              },
              {
                "left": "dugda",
                "right": "Back"
              },
              {
                "left": "harma",
                "right": "Breast"
              },
              {
                "left": "onnee / garaa",
                "right": "Heart"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Liver\": ___",
            "correctAnswer": "tiruu",
            "options": [
              "qoosee / morma",
              "dugda",
              "harma",
              "tiruu"
            ],
            "hint": "Wiktionary Afroasiatic Swadesh list — Oromo"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-7",
    "unitNumber": 7,
    "title": "Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Compass",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-verbs-grammar-action-verbs-7",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "baruu / bara (learn; III barziza = teach)",
            "source": "Learn / Teach",
            "pronunciation": "ba-ruu / ba-ra",
            "hint": "Tutschek (1845, § 76, p. 20 & Prayer 1 v. 7, p. 85)"
          },
          {
            "target": "bieksíse",
            "source": "Known, to make-",
            "pronunciation": "bieksi-se",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "dese, harka baie",
            "source": "Escape",
            "pronunciation": "de-se harka baie",
            "hint": "Rev. J. L. Krapf (1842) Vocabulary of the Galla Language [v.]"
          },
          {
            "target": "I should —, enantshalate",
            "source": "Like",
            "pronunciation": "i should — e-nantsha-la-te",
            "hint": "Rev. J. L. Krapf (1842) Vocabulary of the Galla Language [v.]"
          },
          {
            "target": "dekame",
            "source": "Upbraid, find fault with",
            "pronunciation": "de-ka-me",
            "hint": "Rev. J. L. Krapf (1842) Vocabulary of the Galla Language [v.]"
          },
          {
            "target": "agad'a",
            "source": "to threaten, menace",
            "pronunciation": "a-gad'a",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "gode",
            "source": "Do",
            "pronunciation": "go-de"
          },
          {
            "target": "adema",
            "source": "Go",
            "pronunciation": "a-de-ma"
          },
          {
            "target": "ñad'a",
            "source": "Eat",
            "pronunciation": "nad'a"
          }
        ],
        "sentences": [
          {
            "target": "baruu — bieksíse",
            "source": "Learn — Known, to make-"
          },
          {
            "target": "dese, harka baie — I should —, enantshalate",
            "source": "Escape — Like"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"baruu\" mean in English?",
            "correctAnswer": "Learn / Teach",
            "options": [
              "Learn / Teach",
              "Known, to make-",
              "Escape",
              "Like"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Known, to make-\"",
            "correctAnswer": "bieksíse",
            "acceptedAnswers": [
              "bieksíse",
              "bieksíse"
            ],
            "hint": "Starts with \"bi\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dese, harka baie\"",
            "correctAnswer": "Escape",
            "acceptedAnswers": [
              "Escape",
              "Escape"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "baruu",
                "right": "Learn"
              },
              {
                "left": "bieksíse",
                "right": "Known, to make-"
              },
              {
                "left": "dese, harka baie",
                "right": "Escape"
              },
              {
                "left": "I should —, enantshalate",
                "right": "Like"
              },
              {
                "left": "dekame",
                "right": "Upbraid, find fault with"
              }
            ]
          }
        ]
      },
      {
        "id": "borana-verbs-grammar-verbal-derivatives-7",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "agama",
            "source": "to stoop, bow to the side",
            "pronunciation": "a-ga-ma",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "ageza",
            "source": "to scoff, deride, mock",
            "pronunciation": "a-ge-za",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "adjeza",
            "source": "to kill",
            "pronunciation": "adje-za",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "adyera",
            "source": "to make a roof upon a house",
            "pronunciation": "adye-ra",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "ada",
            "source": "to groan, sigh, esp",
            "pronunciation": "ada",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "adema",
            "source": "to go, walk",
            "pronunciation": "a-de-ma",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "ad'aba",
            "source": "to educate, bring up",
            "pronunciation": "ad'a-ba",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "afa",
            "source": "to spread, extent, partic",
            "pronunciation": "afa",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "djed'a",
            "source": "Say",
            "pronunciation": "djed'a"
          }
        ],
        "sentences": [
          {
            "target": "agama — ageza",
            "source": "to stoop, bow to the side — to scoff, deride, mock"
          },
          {
            "target": "adjeza — adyera",
            "source": "to kill — to make a roof upon a house"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"agama\" mean in English?",
            "correctAnswer": "to stoop, bow to the side",
            "options": [
              "to stoop, bow to the side",
              "to scoff, deride, mock",
              "to kill",
              "to make a roof upon a house"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"to scoff, deride, mock\"",
            "correctAnswer": "ageza",
            "acceptedAnswers": [
              "ageza",
              "ageza"
            ],
            "hint": "Starts with \"ag\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"adjeza\"",
            "correctAnswer": "to kill",
            "acceptedAnswers": [
              "to kill",
              "to kill"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "agama",
                "right": "to stoop, bow to the side"
              },
              {
                "left": "ageza",
                "right": "to scoff, deride, mock"
              },
              {
                "left": "adjeza",
                "right": "to kill"
              },
              {
                "left": "adyera",
                "right": "to make a roof upon a house"
              },
              {
                "left": "ada",
                "right": "to groan, sigh, esp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-8",
    "unitNumber": 8,
    "title": "Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Map",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-time-calendar-seasons-months-8",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "dirama",
            "source": "Dawn",
            "pronunciation": "di-ra-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "gúiya",
            "source": "Day",
            "pronunciation": "gui-ya",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "arda",
            "source": "to-day",
            "pronunciation": "arda",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "dirāma",
            "source": "Early",
            "pronunciation": "di-ra-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adv.)"
          },
          {
            "target": "barii / ganama",
            "source": "Morning / Dawn",
            "pronunciation": "ba-rii / ga-na-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "gélgela",
            "source": "Eve, Evening",
            "pronunciation": "gelge-la",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "ama",
            "source": "Now",
            "pronunciation": "a-ma"
          },
          {
            "target": "sawani",
            "source": "Age",
            "pronunciation": "sawani"
          },
          {
            "target": "safaia",
            "source": "Noon",
            "pronunciation": "sa-faia"
          }
        ],
        "sentences": [
          {
            "target": "dirama — gúiya",
            "source": "Dawn — Day"
          },
          {
            "target": "arda — dirāma",
            "source": "to-day — Early"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"dirama\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Dawn",
              "Day",
              "to-day",
              "Early"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Day\"",
            "correctAnswer": "gúiya",
            "acceptedAnswers": [
              "gúiya",
              "gúiya"
            ],
            "hint": "Starts with \"gú\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"arda\"",
            "correctAnswer": "to-day",
            "acceptedAnswers": [
              "to-day",
              "to-day"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "dirama",
                "right": "Dawn"
              },
              {
                "left": "gúiya",
                "right": "Day"
              },
              {
                "left": "arda",
                "right": "to-day"
              },
              {
                "left": "dirāma",
                "right": "Early"
              },
              {
                "left": "barii",
                "right": "Morning"
              }
            ]
          }
        ]
      },
      {
        "id": "borana-time-calendar-journey-navigation-8",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "bóru ága; laffa berídi",
            "source": "Dawn",
            "pronunciation": "bo-ru aga",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. n.)"
          },
          {
            "target": "guiya rawanuáti",
            "source": "Last day",
            "pronunciation": "gui-ya ra-wa-nua-ti",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "waggasía hadabre",
            "source": "Late",
            "pronunciation": "wagga-sia ha-dabre",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adv.)"
          },
          {
            "target": "hálkani tjiddua",
            "source": "Midnight",
            "pronunciation": "halka-ni tjiddua",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "adésa; tjía",
            "source": "Month",
            "pronunciation": "a-de-sa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "dírama",
            "source": "Morning",
            "pronunciation": "di-ra-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "guya; zawani",
            "source": "Time",
            "pronunciation": "gu-ya"
          },
          {
            "target": "torbo",
            "source": "Week",
            "pronunciation": "tor-bo"
          },
          {
            "target": "ama",
            "source": "Soon",
            "pronunciation": "a-ma"
          }
        ],
        "sentences": [
          {
            "target": "bóru ága — guiya rawanuáti",
            "source": "Dawn — Last day"
          },
          {
            "target": "waggasía hadabre — hálkani tjiddua",
            "source": "Late — Midnight"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"bóru ága\" mean in English?",
            "correctAnswer": "Dawn",
            "options": [
              "Dawn",
              "Last day",
              "Late",
              "Midnight"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Last day\"",
            "correctAnswer": "guiya rawanuáti",
            "acceptedAnswers": [
              "guiya rawanuáti",
              "guiya rawanuáti"
            ],
            "hint": "Starts with \"gu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"waggasía hadabre\"",
            "correctAnswer": "Late",
            "acceptedAnswers": [
              "Late",
              "Late"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "bóru ága",
                "right": "Dawn"
              },
              {
                "left": "guiya rawanuáti",
                "right": "Last day"
              },
              {
                "left": "waggasía hadabre",
                "right": "Late"
              },
              {
                "left": "hálkani tjiddua",
                "right": "Midnight"
              },
              {
                "left": "adésa",
                "right": "Month"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-9",
    "unitNumber": 9,
    "title": "Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "MessageCircle",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-phrases-idioms-everyday-dialogue-9",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "tāe",
            "source": "Abide",
            "pronunciation": "tae",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. n.)"
          },
          {
            "target": "gubba or irra",
            "source": "Above",
            "pronunciation": "gubba or irra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla prep.)"
          },
          {
            "target": "fúde; fúdate",
            "source": "Accept",
            "pronunciation": "fu-de",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "ráwăte; leisse",
            "source": "Accomplish",
            "pronunciation": "ra-wa-te",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "aka",
            "source": "According",
            "pronunciation": "aka",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla prep.)"
          },
          {
            "target": "ada berre",
            "source": "To accustom oneself",
            "pronunciation": "ada berre",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "hófu; iti hime",
            "source": "Greet",
            "pronunciation": "hofu"
          },
          {
            "target": "nágaia; arára",
            "source": "Peace",
            "pronunciation": "nagaia"
          },
          {
            "target": "gelatéfate",
            "source": "Thank",
            "pronunciation": "gelatefate"
          }
        ],
        "sentences": [
          {
            "target": "tāe — gubba or irra",
            "source": "Abide — Above"
          },
          {
            "target": "fúde — ráwăte",
            "source": "Accept — Accomplish"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tāe\" mean in English?",
            "correctAnswer": "Abide",
            "options": [
              "Abide",
              "Above",
              "Accept",
              "Accomplish"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Above\"",
            "correctAnswer": "gubba or irra",
            "acceptedAnswers": [
              "gubba or irra",
              "gubba or irra"
            ],
            "hint": "Starts with \"gu\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"fúde\"",
            "correctAnswer": "Accept",
            "acceptedAnswers": [
              "Accept",
              "Accept"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tāe",
                "right": "Abide"
              },
              {
                "left": "gubba or irra",
                "right": "Above"
              },
              {
                "left": "fúde",
                "right": "Accept"
              },
              {
                "left": "ráwăte",
                "right": "Accomplish"
              },
              {
                "left": "aka",
                "right": "According"
              }
            ]
          }
        ]
      },
      {
        "id": "borana-phrases-idioms-courtesy-discourse-9",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "oddu or gurri oddese",
            "source": "Acquaint",
            "pronunciation": "oddu or gurri odde-se",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "hútji",
            "source": "Act, action",
            "pronunciation": "hutji",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "hútji mideise",
            "source": "Act",
            "pronunciation": "hutji mi-dei-se",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "mbókoksa",
            "source": "Acute",
            "pronunciation": "mbo-koksa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adj.)"
          },
          {
            "target": "idee",
            "source": "Add",
            "pronunciation": "i-dee",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "hángarta mideise",
            "source": "Adorn",
            "pronunciation": "hangarta mi-dei-se",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "dirétu; háma",
            "source": "Adversary",
            "pronunciation": "di-re-tu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "ébise",
            "source": "Bless",
            "pronunciation": "ebise"
          },
          {
            "target": "feiuma tshedde; salamata tshedde",
            "source": "Greet",
            "pronunciation": "feiu-ma tshed-de"
          }
        ],
        "sentences": [
          {
            "target": "oddu or gurri oddese — hútji",
            "source": "Acquaint — Act, action"
          },
          {
            "target": "hútji mideise — mbókoksa",
            "source": "Act — Acute"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"oddu or gurri oddese\" mean in English?",
            "correctAnswer": "Acquaint",
            "options": [
              "Acquaint",
              "Act, action",
              "Act",
              "Acute"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Act, action\"",
            "correctAnswer": "hútji",
            "acceptedAnswers": [
              "hútji",
              "hútji"
            ],
            "hint": "Starts with \"hú\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"hútji mideise\"",
            "correctAnswer": "Act",
            "acceptedAnswers": [
              "Act",
              "Act"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "oddu or gurri oddese",
                "right": "Acquaint"
              },
              {
                "left": "hútji",
                "right": "Act, action"
              },
              {
                "left": "hútji mideise",
                "right": "Act"
              },
              {
                "left": "mbókoksa",
                "right": "Acute"
              },
              {
                "left": "idee",
                "right": "Add"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-10",
    "unitNumber": 10,
    "title": "Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Borana (Oromo) built directly from Rev. Dr. J. L. Krapf (1842, 1850), Karl & Lawrence Tutschek (1844, 1845), and E. C. Foot (1913).",
    "icon": "Globe",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-oral-wisdom-literature-proverbs-riddles-10",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "Gadaa (Lubba) & Jila (Abbaa Muudaa)",
            "source": "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim",
            "pronunciation": "ga-daa & ji-la",
            "hint": "Tutschek (1844) 'Dictionary of the Galla Language' & Krapf (1842)"
          },
          {
            "target": "damma (dagma) / daadhii / farsoo / buna qalaa",
            "source": "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies",
            "pronunciation": "damma / daadhii / farsoo / bu-na qa-laa",
            "hint": "Tutschek (1844–1845) & Krapf (1842)"
          },
          {
            "target": "odaa / qilt'u",
            "source": "Wild fig tree (Sacred assembly shade tree)",
            "pronunciation": "o-daa / qilt'u",
            "hint": "Tutschek (1844–1845) & Krapf (1842)"
          },
          {
            "target": "Waaqa / Wacayo (Yaa Waaqa! = O God!)",
            "source": "Supreme Creator / Sky God",
            "pronunciation": "waa-qa / wa-ca-yo",
            "hint": "Krapf 1842 & Tutschek 1844–1845 Oromo/Borana"
          },
          {
            "target": "Nagaa (Nagaa Borana)",
            "source": "Peace of the Borana",
            "pronunciation": "na-gaa",
            "hint": "Tutschek 1844–1845"
          },
          {
            "target": "Gadaa (Abbaa Gadaa = elected leader)",
            "source": "Traditional Generation System",
            "pronunciation": "ga-daa",
            "hint": "Borana/Oromo governance"
          },
          {
            "target": "waraabessa",
            "source": "Hyena",
            "pronunciation": "wa-raa-bessa",
            "hint": "Krapf 1842 & Tutschek 1844"
          },
          {
            "target": "garbuu / midhaan (mid'an)",
            "source": "Barley / Grain",
            "pronunciation": "garbuu / midhaan",
            "hint": "Tutschek 1844 & 1845"
          },
          {
            "target": "moti (Abbaa Boku)",
            "source": "King / Leader",
            "pronunciation": "mo-ti",
            "hint": "Krapf 1842 & Tutschek 1844"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Gadaa (Lubba) & Jila (Abbaa Muudaa)\" in Borana?",
            "correctAnswer": "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim",
            "options": [
              "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies",
              "Wild fig tree (Sacred assembly shade tree)",
              "Supreme Creator / Sky God",
              "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim"
            ],
            "hint": "Tutschek (1844) 'Dictionary of the Galla Language' & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"damma (dagma) / daadhii / farsoo / buna qalaa\" in Borana?",
            "correctAnswer": "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies",
            "options": [
              "Wild fig tree (Sacred assembly shade tree)",
              "Supreme Creator / Sky God",
              "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies",
              "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim"
            ],
            "hint": "Tutschek (1844–1845) & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"odaa / qilt'u\" in Borana?",
            "correctAnswer": "Wild fig tree (Sacred assembly shade tree)",
            "options": [
              "Supreme Creator / Sky God",
              "Wild fig tree (Sacred assembly shade tree)",
              "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim",
              "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies"
            ],
            "hint": "Tutschek (1844–1845) & Krapf (1842)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Wild fig tree (Sacred assembly shade tree)\" in Borana?",
            "correctAnswer": "odaa / qilt'u",
            "options": [
              "odaa / qilt'u",
              "Gadaa (Lubba) & Jila (Abbaa Muudaa)",
              "damma (dagma) / daadhii / farsoo / buna qalaa",
              "Waaqa / Wacayo (Yaa Waaqa! = O God!)"
            ],
            "hint": "o-daa / qil-tu"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Supreme Creator / Sky God\" in Borana?",
            "correctAnswer": "Waaqa / Wacayo (Yaa Waaqa! = O God!)",
            "options": [
              "Gadaa (Lubba) & Jila (Abbaa Muudaa)",
              "damma (dagma) / daadhii / farsoo / buna qalaa",
              "odaa / qilt'u",
              "Waaqa / Wacayo (Yaa Waaqa! = O God!)"
            ],
            "hint": "wah-qah / wa-ca-yo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "Gadaa (Lubba) & Jila (Abbaa Muudaa): Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim",
            "pairs": [
              {
                "left": "Gadaa (Lubba) & Jila (Abbaa Muudaa)",
                "right": "Sovereign Assembly / Age-Grade Democratic System & Ritual Pilgrim"
              },
              {
                "left": "damma (dagma) / daadhii / farsoo / buna qalaa",
                "right": "Honey / Hydromel (Honey-wine) / Barley beer / Coffee ceremonies"
              },
              {
                "left": "odaa / qilt'u",
                "right": "Wild fig tree (Sacred assembly shade tree)"
              },
              {
                "left": "Waaqa / Wacayo (Yaa Waaqa! = O God!)",
                "right": "Supreme Creator / Sky God"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Peace of the Borana\": ___",
            "correctAnswer": "Nagaa (Nagaa Borana)",
            "options": [
              "Gadaa (Lubba) & Jila (Abbaa Muudaa)",
              "damma (dagma) / daadhii / farsoo / buna qalaa",
              "odaa / qilt'u",
              "Nagaa (Nagaa Borana)"
            ],
            "hint": "Tutschek 1844–1845"
          }
        ]
      },
      {
        "id": "borana-oral-wisdom-literature-ethnographic-lexicon-10",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "tips": "Every lexical entry in this module is drawn verbatim from Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Borana (Oromo) (Afaan Borana / Afaan Oromoo) in Rev. J. L. Krapf (1842, 1850) & Karl and Lawrence Tutschek (1844–1845 Dictionary & Grammar of the Galla Language) preserves pre-1930 phonological, grammatical, and ethnographic usage across Marsabit, Isiolo, Moyale.",
        "words": [
          {
            "target": "bersíse ada",
            "source": "Accustom",
            "pronunciation": "bersi-se ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "dére",
            "source": "Bewitch",
            "pronunciation": "de-re",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "awále",
            "source": "Bury",
            "pronunciation": "a-wa-le",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "target": "ada; duri duri",
            "source": "Custom",
            "pronunciation": "ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "sírbe",
            "source": "Dance",
            "pronunciation": "sirbe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. n.)"
          },
          {
            "target": "ókĕra",
            "source": "Devil",
            "pronunciation": "o-ke-ra",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "díbbe",
            "source": "Drum",
            "pronunciation": "dibbe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla s.)"
          },
          {
            "target": "ságale waniádu",
            "source": "Fast, vn",
            "pronunciation": "sa-ga-le wa-nia-du",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          },
          {
            "target": "fúrdate",
            "source": "Fast, adj. to be-",
            "pronunciation": "furda-te",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bersíse ada\" in Borana?",
            "correctAnswer": "Accustom",
            "options": [
              "Bewitch",
              "Bury",
              "Custom",
              "Accustom"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dére\" in Borana?",
            "correctAnswer": "Bewitch",
            "options": [
              "Bury",
              "Custom",
              "Bewitch",
              "Accustom"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"awále\" in Borana?",
            "correctAnswer": "Bury",
            "options": [
              "Custom",
              "Bury",
              "Accustom",
              "Bewitch"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Bury\" in Borana?",
            "correctAnswer": "awále",
            "options": [
              "awále",
              "bersíse ada",
              "dére",
              "ada; duri duri"
            ],
            "hint": "awále"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Custom\" in Borana?",
            "correctAnswer": "ada; duri duri",
            "options": [
              "bersíse ada",
              "dére",
              "awále",
              "ada; duri duri"
            ],
            "hint": "ada; duri duri"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Borana expression with its English meaning:",
            "correctAnswer": "bersíse ada: Accustom",
            "pairs": [
              {
                "left": "bersíse ada",
                "right": "Accustom"
              },
              {
                "left": "dére",
                "right": "Bewitch"
              },
              {
                "left": "awále",
                "right": "Bury"
              },
              {
                "left": "ada; duri duri",
                "right": "Custom"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana term for \"Dance\": ___",
            "correctAnswer": "sírbe",
            "options": [
              "bersíse ada",
              "dére",
              "awále",
              "sírbe"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla v. n.)"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-11",
    "unitNumber": 11,
    "title": "Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Borana (Oromo) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-pd-corpus-11-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Borana (Oromo) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Borana (Oromo) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "dúlatja",
            "source": "Old",
            "pronunciation": "du-latja",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adj.)"
          },
          {
            "target": "harreisa; harréti",
            "source": "New",
            "pronunciation": "harrei-sa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adj.)"
          },
          {
            "target": "duri duri",
            "source": "Ancient",
            "pronunciation": "du-ri du-ri",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adj.)"
          },
          {
            "target": "dargago",
            "source": "Youth",
            "pronunciation": "darga-go",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "ot'a",
            "source": "Yelk",
            "pronunciation": "ot'a",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "d'und'uma",
            "source": "Yard",
            "pronunciation": "d'und'u-ma",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "roga",
            "source": "Wry / Oblique",
            "pronunciation": "ro-ga",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "walanzo",
            "source": "Wrestling",
            "pronunciation": "wa-lanzo",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"dúlatja\" in Borana (Afaan Borana)?",
            "correctAnswer": "Old",
            "options": [
              "Old",
              "New",
              "Ancient",
              "Youth"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kigálla adj.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Borana (Afaan Borana) term to its English meaning:",
            "correctAnswer": "dúlatja: Old",
            "pairs": [
              {
                "left": "dúlatja",
                "right": "Old"
              },
              {
                "left": "harreisa; harréti",
                "right": "New"
              },
              {
                "left": "duri duri",
                "right": "Ancient"
              },
              {
                "left": "dargago",
                "right": "Youth"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana (Afaan Borana) term for \"Yelk\": ___",
            "correctAnswer": "ot'a",
            "options": [
              "ot'a",
              "dúlatja",
              "harreisa; harréti",
              "duri duri"
            ],
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          }
        ]
      },
      {
        "id": "borana-pd-corpus-11-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Borana (Oromo) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Borana (Oromo) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "gingo",
            "source": "Wreath / Garland",
            "pronunciation": "gingo",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "dilbe",
            "source": "Witty",
            "pronunciation": "dilbe",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adj.]"
          },
          {
            "target": "hadari",
            "source": "Wit",
            "pronunciation": "ha-da-ri",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "como",
            "source": "Wish",
            "pronunciation": "co-mo",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "darba",
            "source": "Winnowing-shovel",
            "pronunciation": "darba",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "habube",
            "source": "Windy",
            "pronunciation": "ha-bu-be",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adj.]"
          },
          {
            "target": "halaltu",
            "source": "Willow",
            "pronunciation": "ha-laltu",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "tira",
            "source": "Wild",
            "pronunciation": "ti-ra",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adj.]"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"gingo\" in Borana (Afaan Borana)?",
            "correctAnswer": "Wreath / Garland",
            "options": [
              "Wreath / Garland",
              "Witty",
              "Wit",
              "Wish"
            ],
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Borana (Afaan Borana) term to its English meaning:",
            "correctAnswer": "gingo: Wreath / Garland",
            "pairs": [
              {
                "left": "gingo",
                "right": "Wreath / Garland"
              },
              {
                "left": "dilbe",
                "right": "Witty"
              },
              {
                "left": "hadari",
                "right": "Wit"
              },
              {
                "left": "como",
                "right": "Wish"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana (Afaan Borana) term for \"Winnowing-shovel\": ___",
            "correctAnswer": "darba",
            "options": [
              "darba",
              "gingo",
              "dilbe",
              "hadari"
            ],
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-12",
    "unitNumber": 12,
    "title": "Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Borana (Oromo) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-open-dataset-12-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "BookOpen",
        "description": "Learn core Borana (Oromo) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Borana (Oromo) dialects and everyday speech.",
        "words": [
          {
            "target": "kan",
            "source": "Why",
            "pronunciation": "kan",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adv.]"
          },
          {
            "target": "faya",
            "source": "Wholesomeness",
            "pronunciation": "fa-ya",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "eñu (rel. kan)",
            "source": "Who?",
            "pronunciation": "enyu",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "eza (ezati)",
            "source": "Whither? (Where to?)",
            "pronunciation": "eza",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "coroganda",
            "source": "Whisk",
            "pronunciation": "co-ro-ganda",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "hama",
            "source": "Whilst",
            "pronunciation": "ha-ma",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adv.]"
          },
          {
            "target": "bidiru",
            "source": "Wherry",
            "pronunciation": "bi-di-ru",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "eza",
            "source": "Where",
            "pronunciation": "eza",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adv.]"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kan\" in Borana (Afaan Borana)?",
            "correctAnswer": "Why",
            "options": [
              "Why",
              "Wholesomeness",
              "Who?",
              "Whither? (Where to?)"
            ],
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adv.]"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Borana (Afaan Borana) term to its English meaning:",
            "correctAnswer": "kan: Why",
            "pairs": [
              {
                "left": "kan",
                "right": "Why"
              },
              {
                "left": "faya",
                "right": "Wholesomeness"
              },
              {
                "left": "eñu (rel. kan)",
                "right": "Who?"
              },
              {
                "left": "eza (ezati)",
                "right": "Whither? (Where to?)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana (Afaan Borana) term for \"Whisk\": ___",
            "correctAnswer": "coroganda",
            "options": [
              "coroganda",
              "kan",
              "faya",
              "eñu (rel. kan)"
            ],
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          }
        ]
      },
      {
        "id": "borana-open-dataset-12-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Borana (Oromo) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Borana (Oromo) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "ezayi",
            "source": "Whence? (From where?)",
            "pronunciation": "e-za-yi",
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "target": "ho",
            "source": "When",
            "pronunciation": "ho",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adv.]"
          },
          {
            "target": "arama",
            "source": "Weeding",
            "pronunciation": "a-ra-ma",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "warra-lami",
            "source": "Weapons",
            "pronunciation": "warra-lami",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "cabeza",
            "source": "Wealthy",
            "pronunciation": "ca-be-za",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adj.]"
          },
          {
            "target": "cotoma",
            "source": "Watch-cottage",
            "pronunciation": "co-to-ma",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "kaniza faqi",
            "source": "Wasp",
            "pronunciation": "ka-ni-za fa-qi",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          },
          {
            "target": "mitchitu",
            "source": "Washer-woman",
            "pronunciation": "mitchi-tu",
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [s.]"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ezayi\" in Borana (Afaan Borana)?",
            "correctAnswer": "Whence? (From where?)",
            "options": [
              "Whence? (From where?)",
              "When",
              "Weeding",
              "Weapons"
            ],
            "hint": "Karl & Lawrence Tutschek (1844) Dictionary of the Galla Language, Part I"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Borana (Afaan Borana) term to its English meaning:",
            "correctAnswer": "ezayi: Whence? (From where?)",
            "pairs": [
              {
                "left": "ezayi",
                "right": "Whence? (From where?)"
              },
              {
                "left": "ho",
                "right": "When"
              },
              {
                "left": "arama",
                "right": "Weeding"
              },
              {
                "left": "warra-lami",
                "right": "Weapons"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Borana (Afaan Borana) term for \"Wealthy\": ___",
            "correctAnswer": "cabeza",
            "options": [
              "cabeza",
              "ezayi",
              "ho",
              "arama"
            ],
            "hint": "Karl & Lawrence Tutschek (1845) Dictionary of the Galla Language, Part II [adj.]"
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-13",
    "unitNumber": 13,
    "title": "Tutschek Dictionary Parts I & II",
    "description": "Master the complete 1844–1845 Galla Dictionary of Charles & Lawrence Tutschek: the 4 redeemed youths and 3 Galla authorities, the daily solar clock (ganama aboro to oba lamuti–z'aniti), the kalatcha and tili oaths, amole & biri currency, het'o/d'ogonu ethnomedicine, and all 23 Magm. proverbs and 9 Wetu songs.",
    "icon": "BookOpen",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-tutschek-1844-clock-currency-law-13-1",
        "title": "Daily Timekeeping (Oba), Amole & Biri Currency, Land Law & Oaths",
        "icon": "Clock",
        "description": "Learn the 10 divisions of the Oromo/Borana day and night, the amole salt-bar and biri silver dollar system, sharecropping vs. wage labour, and the kalatcha oath (Tutschek 1844, Part I).",
        "tips": "In Tutschek (1844, Part I, p. 23 s.v. oba), noon (12 o'clock) is 'oba' (or 'adun guba keza'), and the afternoon hours are counted from noon using cardinal numerals in the locative (-ti): oba lamuti (2 o'clock), oba zaditi (3 o'clock), oba afuriti (4 o'clock), oba z'aniti (5 o'clock).",
        "words": [
          {
            "target": "ganama aboro → ganama → dirama → ware → ware korate → oba (oba dyabi)",
            "source": "Very early dawn → Morning (to ~8 a.m.) → Forenoon (~8–9 a.m.) → ~9–10 a.m. → Late",
            "pronunciation": "ganama-aboro-ganama-dirama",
            "hint": "Tutschek (1844, Part I, pp. 23, 59, 100, 148–149)"
          },
          {
            "target": "oba lamuti",
            "source": "2nd hour after noon",
            "pronunciation": "oba-lamuti"
          },
          {
            "target": "oba zaditi",
            "source": "3rd hour",
            "pronunciation": "oba-zaditi"
          },
          {
            "target": "oba afuriti",
            "source": "4th hour",
            "pronunciation": "oba-afuriti"
          },
          {
            "target": "oba z'aniti",
            "source": "5th hour",
            "pronunciation": "oba-z'aniti"
          },
          {
            "target": "galgala dimemeza",
            "source": "Midnight",
            "pronunciation": "galgala-dimemeza"
          },
          {
            "target": "amole",
            "source": "Rock-salt bar currency & its fractions",
            "pronunciation": "amole"
          },
          {
            "target": "biri",
            "source": "Austrian Maria Theresa silver dollar with initials S. F.",
            "pronunciation": "biri"
          },
          {
            "target": "gubziza (vassal)",
            "source": "Settled vassal",
            "pronunciation": "gubziza"
          },
          {
            "target": "findja Lali",
            "source": "Cascade in Hambo where capital sentences were executed",
            "pronunciation": "findja-lali"
          },
          {
            "target": "kalatcha",
            "source": "Oath staff wreathed with meeça twigs licked under the lafto Michaila tree",
            "pronunciation": "kalatcha"
          },
          {
            "target": "'t'wu — aki — t'wu — tili!'",
            "source": "Grass-spitting oath",
            "pronunciation": "t'wu-aki-t'wu-tili"
          },
          {
            "target": "mora wal cabad'a",
            "source": "Holding sacrificial fat together for peace",
            "pronunciation": "mora-wal-cabad'a"
          },
          {
            "target": "cote wal cabad'u",
            "source": "Hooking little fingers to wager",
            "pronunciation": "cote-wal-cabad'u"
          }
        ],
        "sentences": [
          {
            "target": "Gadyo lafto Michaila dyalati kalatchan kakad'e; ini kalatcha mut'ad'a: 'Hori ani cabu Wacayo géekoti ha mut'ad'u ha balʿezu!' djed'eti.",
            "source": "Under the lafto Michaila before the priest Gadyo he swore by the kalatcha staff, licking it and saying: 'May Wacayo lick up and destroy all the"
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each economic or legal term from Tutschek (1844, Part I) with its definition:",
            "correctAnswer": "qit'e: Sharecropper who supplies seed and receives half the harvest (p. 46)",
            "pairs": [
              {
                "left": "yagudo / yaguto",
                "right": "Day-labourer paid a fixed wage without harvest share (p. 145)"
              },
              {
                "left": "biri (with S. F.)",
                "right": "Maria Theresa silver dollar worth 20–23 amole salt bars (p. 135)"
              },
              {
                "left": "findja Lali",
                "right": "Cascade in Hambo where capital punishment was executed (p. 122)"
              }
            ]
          }
        ]
      },
      {
        "id": "borana-tutschek-1844-medicine-songs-proverbs-13-2",
        "title": "Ethnomedicine (Het'o & D'ogonu), Botanical Lore, 23 Magm.",
        "icon": "Sparkles",
        "description": "Study Akafed'e Dalle's treatise on curing tapeworm (mini/d'uma) with het'o and d'ogonu, Duke Paul of Württemberg's plant identifications, and the complete Magm. proverbs and Wetu songs.",
        "tips": "Akafed'e Dalle (from Botchi in Hambo, province of Liban), Otshu Aga (from Urgeza in Sibu), Bilile (from Guma), and Aman Gonda (from Hibi in Goma) contributed the 23 proverbs (Magm.) and 9 rhyming songs (Wetu) in Part I (1844).",
        "words": [
          {
            "target": "het'o + d'ogonu (mallow bark) → mini & d'uma",
            "source": "Dried, pounded het'o flowers drunk fasting in d'ogonu bark infusion to expel tapeworm",
            "pronunciation": "he-t'o / d'o-go-nu / mi-ni / d'u-ma",
            "hint": "Tutschek (1844, Part I, pp. 101, 110, 170, 196–197)"
          },
          {
            "target": "kelo",
            "source": "Yellow flower heralding spring (birra) and the Magzala New Year feast",
            "pronunciation": "kelo"
          },
          {
            "target": "wandabiu & nadaduda",
            "source": "Pterocarpus tree yielding sweet white manna",
            "pronunciation": "wandabiu-nadaduda"
          },
          {
            "target": "handode",
            "source": "Soap-berry plant for washing clothes",
            "pronunciation": "handode"
          },
          {
            "target": "Hodjadz'u wayo mo tau wai?",
            "source": "Is it better to work or to sit idle?",
            "pronunciation": "hodjadz'u-wayo-mo-tau"
          },
          {
            "target": "Lubun lamaṅ dyirtu",
            "source": "There are not two lives",
            "pronunciation": "lubun-laman-dyirtu"
          },
          {
            "target": "Madirati hinkolfini",
            "source": "Laugh not at a scar!",
            "pronunciation": "madirati-hinkolfini"
          },
          {
            "target": "Bokeṅi mit'ileṅ adjezu, zi adjeza?",
            "source": "The rain kills not an ant; will it kill thee?",
            "pronunciation": "bokeni-mit'ilen-adjezu"
          },
          {
            "target": "Zila zimalan yaba, Zimali dameṅ cabu;",
            "source": "Were I to climb the bamboo, the bamboo has no branches; were I to go home through the",
            "pronunciation": "zi-la zi-ma-lan ya-ba / co-ta-ni co-ta-ni yaa ba-ba-za-ni",
            "hint": "Tutschek (1844, Part I, pp. 127, 148 — Wetu songs)"
          }
        ],
        "sentences": [
          {
            "target": "Hodjadz'u wayo mo tau wai? — Bokeṅi mit'ileṅ adjezu, zi adjeza?",
            "source": "Is it better to work or to sit idle? — The rain kills not an ant; will it kill thee? (Tutschek 1844, Part I, pp. 146, 170, 201)"
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each verbatim Galla proverb (Magm.) or song (Wetu) from Tutschek (1844, Part I) with its English translation:",
            "correctAnswer": "Hodjadz'u wayo mo tau wai?: Is it better to work or to sit idle? (pp. 146, 201)",
            "pairs": [
              {
                "left": "Hodjadz'u wayo mo tau wai?",
                "right": "Is it better to work or to sit idle? (pp. 146, 201)"
              },
              {
                "left": "Bokeṅi mit'ileṅ adjezu, zi adjeza?",
                "right": "The rain kills not an ant; will it kill thee? (p. 170)"
              },
              {
                "left": "Madirati hinkolfini!",
                "right": "Laugh not at a scar/wound! (p. 163)"
              },
              {
                "left": "Ini aka kozi tȧ",
                "right": "He is as clear/transparent as the bottom of a beaker (p. 37)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-14",
    "unitNumber": 14,
    "title": "Krapf & Isenberg Vocabulary of the Galla Language",
    "description": "Explore the first English–Oromo dictionary compiled by Rev. J. L. Krapf in Shoa (1841) and edited by Rev. C. W. Isenberg in London (1842, pp. i–ii, 1–42): the 7-day week, relative day and year expressions, East Cushitic (Dankali & Somali) cognates, and conversational idioms.",
    "icon": "Book",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-krapf-1842-week-calendar-cognates-14-1",
        "title": "The 1842 7-Day Week, Relative Years & East Cushitic Cognates",
        "icon": "Calendar",
        "description": "Learn the 7 days of the week, relative day/year markers, and Dankali/Somali/Amharic cognates from Krapf & Isenberg (1842).",
        "tips": "In Krapf (1842), Monday and Tuesday are named after work ('hutshi dura' = first work-day, 'hutshi lamafa' = second work-day), Wednesday through Friday use Arabic/Ethio-Semitic names (rōbi, kāmis, tshimāta), and Saturday and Sunday distinguish the 'little Sabbath' (sanbata tenna) from the 'great Sabbath' (sanbata gudda).",
        "words": [
          {
            "target": "hutshi dura",
            "source": "Monday",
            "pronunciation": "hutshi-dura"
          },
          {
            "target": "hutshi lamafa",
            "source": "Tuesday",
            "pronunciation": "hutshi-lamafa"
          },
          {
            "target": "rōbi",
            "source": "Wednesday",
            "pronunciation": "rōbi"
          },
          {
            "target": "kāmis",
            "source": "Thursday",
            "pronunciation": "kāmis"
          },
          {
            "target": "tshimāta",
            "source": "Friday",
            "pronunciation": "tshimāta"
          },
          {
            "target": "sanbata tenna",
            "source": "Saturday",
            "pronunciation": "sanbata-tenna"
          },
          {
            "target": "sanbata gudda",
            "source": "Sunday",
            "pronunciation": "sanbata-gudda"
          },
          {
            "target": "arda",
            "source": "To-day",
            "pronunciation": "arda"
          },
          {
            "target": "borumti",
            "source": "On the following day",
            "pronunciation": "borumti"
          },
          {
            "target": "iftān",
            "source": "After to-morrow",
            "pronunciation": "iftān"
          },
          {
            "target": "kallēsa",
            "source": "Yesterday",
            "pronunciation": "kallēsa"
          },
          {
            "target": "dengādda",
            "source": "Day before yesterday",
            "pronunciation": "dengādda"
          },
          {
            "target": "yogga",
            "source": "Year",
            "pronunciation": "yogga"
          },
          {
            "target": "berdingata",
            "source": "Last year",
            "pronunciation": "berdingata"
          },
          {
            "target": "berekan",
            "source": "The year before last",
            "pronunciation": "berekan"
          },
          {
            "target": "Waka",
            "source": "God / heaven",
            "pronunciation": "waka"
          },
          {
            "target": "mukabe / mukaba",
            "source": "To pray / prayer (to God)",
            "pronunciation": "mukabe"
          },
          {
            "target": "kaletsha vs. kêsi sidāma & Iltshāma",
            "source": "Galla priest vs. Priest of Christians & Mohammedan",
            "pronunciation": "kaletsha-vs-kêsi-sidāma"
          },
          {
            "target": "Wak' nagaia si kakennu!",
            "source": "Farewell!",
            "pronunciation": "wak'-nagaia-si-kakennu"
          },
          {
            "target": "Nagaia hafu tshedde",
            "source": "To bid farewell",
            "pronunciation": "nagaia-hafu-tshedde"
          },
          {
            "target": "Naga ambulte!",
            "source": "Good morning!",
            "pronunciation": "naga-ambulte"
          },
          {
            "target": "Mali odu harraia duffe?",
            "source": "What is the news?",
            "pronunciation": "mali-odu-harraia-duffe"
          }
        ],
        "sentences": [
          {
            "target": "Wak' nagaia si kakennu! Naga ambulte! Mali odu harraia duffe?",
            "source": "May God give thee peace! Good morning! What is the news? (Krapf & Isenberg 1842, pp. 13, 24, 25)."
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-15",
    "unitNumber": 15,
    "title": "Robert Needham Cust",
    "description": "Explore Robert Needham Cust's 1883 Volume I (pp. [i]–xvi, 1–287, Portrait Plates I–VI & Trübner Catalogue): the 5 Chief Dialects of Galla/Orómo (pp. 122–125, including the Equatorial/Tana River dialect studied by Krapf & Wakefield at Ribé), Huma royal lineages, Wata 'Helot Races', Somáli (p. 121), Kwáfi & Masai (pp. 149–152), and Kavirondo/Luoh (pp. 275–285).",
    "icon": "Globe",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-cust-1883-five-dialects-huma-wata-15-1",
        "title": "The 5 Chief Galla/Orómo Dialects, Equatorial Orma, Huma & Wata",
        "icon": "Map",
        "description": "Master Cust's (1883, Vol. I, Ch. IX.C.II, pp. 122–125) classification of the 5 Oromo dialects, the Huma royal dynasty of Uganda/Unyoro/Karagwe, Charles New's Wata hunter tributaries, and Reinisch's Lowland East Cushitic cluster.",
        "tips": "In Chapter IX.C.II (pp. 122–125), Cust records that while in war the Galla call themselves 'Sons of Galla' (per D'Abbadie), their national autonym is Orma or Oromo ('men', p. 12 & p. 122), stretching from 10° N. Lat. to the mouth of the Dana (Tana) River near Mombása.",
        "words": [
          {
            "target": "Orma / Oromo ('men', pp. 12, 122) vs. 'Sons of Galla'",
            "source": "Indigenous Oromo self-designation vs. wartime title in Cust",
            "pronunciation": "or-ma / o-ro-mo",
            "hint": "Cust (1883, Vol. I, Ch. I p. 12 & Ch. IX.C.II p. 122)"
          },
          {
            "target": "1. North of Shoa",
            "source": "The 5 Chief Galla/Orómo Dialects enumerated by Krapf, Schmidt & Cust",
            "pronunciation": "sho-a / ha-wash / go-djeb / da-na / ri-be",
            "hint": "Cust (1883, Vol. I, Ch. IX.C.II, pp. 122–123)"
          },
          {
            "target": "Huma",
            "source": "Great Lakes royal dynasty of Galla origin and King Mtesa's 7-language polyglottism",
            "pronunciation": "hu-ma / m-te-sa",
            "hint": "Cust (1883, Vol. I, Ch. I p. 16 & Ch. IX.C.II pp. 122–123)"
          },
          {
            "target": "Lango or Kidi",
            "source": "Somerset Nile, p. 125",
            "pronunciation": "lango-or-kidi"
          },
          {
            "target": "Reinisch Cluster I (p. 119): A. Bishári (To'bedauie)",
            "source": "Prof. Leo Reinisch's 5-language Lowland East Cushitic cluster in the Ethiopic",
            "pronunciation": "bi-sha-ri / sa-ho / dan-ka-li / so-ma-li / gal-la",
            "hint": "Cust (1883, Vol. I, Ch. IX.C, pp. 119–125)"
          },
          {
            "target": "Enguduk Iloigob",
            "source": "Masai — Erhardt 1857 & Thomson 1883, pp. 149–152",
            "pronunciation": "enguduk-iloigob"
          }
        ],
        "sentences": [
          {
            "target": "Orma (Oromo = 'men') stretches from 10° N. Lat. to the mouth of the Dana (Tana) River near Mombása across 5 chief dialects.",
            "source": "Cust (1883, Vol. I, Ch. IX.C.II, pp. 122–125) on the geographic extent and 5 dialects of Galla or Orómo."
          }
        ]
      }
    ]
  },
  {
    "id": "borana-unit-16",
    "unitNumber": 16,
    "title": "Krapf & Isenberg",
    "description": "Master the first printed Oromo/Galla grammar (London: CMS / L. & G. Seeley / Richard Watts, 1840, pp. [i]–xiv, [1]–16): Isenberg's 50-tribe geographic table, Queen Tshāmê of Moolofallada, Anko-ber, Wāk & Kalitshas, pit-and-lance oaths, Wodanābè tree, Berkiè of Gelān, Aito Berkiè & Aito Meretch, and Krapf's Sections I–XI.",
    "icon": "BookOpen",
    "color": "#B45309",
    "skills": [
      {
        "id": "borana-krapf-isenberg-1840-preface-50-tribes-16-1",
        "title": "Isenberg's 1840 Preface",
        "icon": "Compass",
        "description": "Explore Rev. C. W. Isenberg's June–Nov. 1839 Shoa ethnography (pp. [iii]–xiv): the 50 Galla tribes across 6 regions, Queen Tshāmê, Anko-ber, Wāk & Kalitshas, haruspicy, pit-and-lance oaths, 100-cattle homicide law, vegetating grave-wood, Wodanābè tree, and informants Berkiè, Aito Berkiè & Aito Meretch.",
        "tips": "In Isenberg's 1840 Preface (pp. iv–v), 50 Galla tribes are grouped into 6 geographical regions around Tigrè, Shoa, the Hawāsh, and the Abyssinian Nile (Abaÿ), including #5 Karraīo, #16 Ittoo, #17 Aroosi, #20 Alla, #22 Adāī, #23 Soddo, #25 Lēbān, #29 Yerrer, #30 Gelān, #31 Mêta, #32 Moolofallada, #33 Mughir, #44 Mêtcha, #45 Gooderoo, #48 Borenna, and #50 Anko.",
        "words": [
          {
            "target": "1–2 Dob'a, Assebo (SE of Tigrè)",
            "source": "Tribes 1–20 in Isenberg's 1840 Table",
            "pronunciation": "12-dob'a",
            "hint": "Isenberg in Krapf (1840, pp. iv–v)"
          },
          {
            "target": "21–24 Abedjoo, Adāī, Soddo, Abbo (S/SW on Hawāsh)",
            "source": "Tribes 21–50 in Isenberg's 1840 Table",
            "pronunciation": "2124-abedjoo",
            "hint": "Isenberg in Krapf (1840, p. v)"
          },
          {
            "target": "Queen Tshāmê of Moolofallada",
            "source": "and her son",
            "pronunciation": "queen-tshāmê-of-moolofallada"
          },
          {
            "target": "Wāk",
            "source": "Supreme Being",
            "pronunciation": "wāk"
          },
          {
            "target": "Goat-intestine fat war haruspicy",
            "source": "red blood-distended veins = victory",
            "pronunciation": "goat-intestine-fat-war-haruspicy"
          },
          {
            "target": "Pit-and-Lance Oath covered with an animal's hide",
            "source": "Oaths, homicide law-suits, peace ratification, burial customs, and afterlife beliefs",
            "pronunciation": "wak / ka-lit-shas / wo-da-na-be",
            "hint": "Isenberg in Krapf (1840, pp. vii–viii)"
          },
          {
            "target": "Commander-in-chief Aito Meretch",
            "source": "on the river Tchātchā, treated by Isenberg & M. Rochet",
            "pronunciation": "commander-in-chief-aito-meretch"
          }
        ],
        "sentences": [
          {
            "target": "Anko-ber, or bar, signifies the Gate of the Anko, having been the residence of their queen.",
            "source": "Isenberg's footnote on the etymology of Ankober from the Galla Anko tribe and its queen (1840, p. vi fn. *)."
          },
          {
            "target": "Berkiè, Mr. Krapf's Galla servant, could converse with Dankali people, both parties speaking their own language and yet understanding",
            "source": "Isenberg on the close East Cushitic affinity between Galla, Dankali (Afar), and Somāl (1840, p. xiii)."
          }
        ]
      },
      {
        "id": "borana-krapf-1840-grammar-sections-1-to-11-16-2",
        "title": "Krapf's 1840 Grammatical Outline",
        "icon": "Languages",
        "description": "Master all 11 sections of Krapf's 1840 Outline (pp. [1]–16): 4 origin traditions (Abaÿ & Jidda), Roman script, 6 pronoun classes, Gofta declension, 17 adverb classes, prepositions/conjunctions/interjections, verb paradigms (Active, Passive -ame, Causative -sisse, Negative), cardinals & -fa ordinals, Small Syntax, and all 31 expressions & sentences.",
        "tips": "In Section V (p. 4), Krapf declines 'Gofta' (Lord/Master): Sing. N. Gofta, G. Goftāda, D. Goftafi, Ac. Goftan, V. Goftako!; Plur. N. Goftawon, G. Goftawōni, D. Goftawonifi, Ac. Goftawon, V. Goftawonko! In Section IX (p. 11), ordinals are formed with '-fa' (toko, lamafa, sadīfa, afrafa, shanafa, tshaifa, torbafa, sadēfa, sagalafa, kudanifa... dibbafa, kumafa).",
        "words": [
          {
            "target": "isi",
            "source": "isifi",
            "pronunciation": "isi"
          },
          {
            "target": "nu",
            "source": "nufi, garra kenin, nu irra",
            "pronunciation": "nu"
          },
          {
            "target": "issini",
            "source": "issinifi, garra kesani, issin irra",
            "pronunciation": "issini"
          },
          {
            "target": "isan",
            "source": "isanifi, garra isani, isan irra",
            "pronunciation": "isan"
          },
          {
            "target": "manakiya (manako, manakoti), manaka / manakanketi, manasa, manisita,",
            "source": "Inseparable pronouns affixed to Mana ('house') and joined to verbs ('beat' & 'give')",
            "pronunciation": "manakiya",
            "hint": "Krapf (1840, Sect. IV.VI, pp. 3–4)"
          },
          {
            "target": "Sing. N. Gofta, G. Goftāda, D. Goftafi, Ac. Goftan, V. Goftako!",
            "source": "Declension of Noun Substantives in Krapf (1840, Sect. V, p. 4)",
            "pronunciation": "sing-n-gofta",
            "hint": "Krapf (1840, Sect. V, p. 4)"
          },
          {
            "target": "Suni mana kana woya",
            "source": "That house is better than this",
            "pronunciation": "suni-mana-kana-woya"
          },
          {
            "target": "atombekin",
            "source": "Unless he know",
            "pronunciation": "atombekin"
          },
          {
            "target": "ani tshira / ana tā / tai (hentain) / ani tae",
            "source": "Auxiliary, Active, Passive (-ame), and Causative (-sisse) verb paradigms in Krapf",
            "pronunciation": "ani-tshira",
            "hint": "Krapf (1840, Sect. VIII, pp. 8–9)"
          },
          {
            "target": "Cardinals: tok. (fem. tak.), lama, sadi, afur, shani, tshā, torba,",
            "source": "Complete Cardinal (1–2,000) and Ordinal (-fa, 1st–1,000th) numeral tables in Krapf",
            "pronunciation": "cardinals-tok",
            "hint": "Krapf (1840, Sect. IX, p. 11)"
          },
          {
            "target": "Eni kankennu tua",
            "source": "He will give",
            "pronunciation": "eni-kankennu-tua"
          },
          {
            "target": "Gofta regariti dau tshalate",
            "source": "The king likes the beating of the drum",
            "pronunciation": "gofta-regariti-dau-tshalate"
          },
          {
            "target": "Naga ambulte",
            "source": "All 31 Galla conversational expressions, salutations, and sentences in Krapf (1840,",
            "pronunciation": "naga-ambulte",
            "hint": "Krapf (1840, Sect. XI, p. 16)"
          }
        ],
        "sentences": [
          {
            "target": "Gofta regariti dau tshalate. — Nama kan manna henkabna. — Workef meti; Dagaf maka; Kan duef kan tshira.",
            "source": "The king likes the beating of the drum. — A man who has no house. — Gold and silver; Stone and wood; The living and the dead (Krapf 1840, Sect."
          },
          {
            "target": "Naga ambulte! — Bulla bulte naguma! — Gondi kuni mekan eniu? — Metātit tsheddan. — Anda atam tshirte?",
            "source": "Good morning! — Thanks to God! — How do they call this village? — It is called Metātit. — How are you to-day? (Krapf 1840, Sect. XI, p. 16)."
          }
        ],
        "authoredExercises": [
          {
            "type": "match_pairs",
            "prompt": "Match each Galla sentence from Krapf's 1840 Outline (Sects. X & XI, pp. 12–16) with its exact English translation:",
            "correctAnswer": "Gofta regariti dau tshalate: The king likes the beating of the drum (p. 12)",
            "pairs": [
              {
                "left": "Gofta regariti dau tshalate",
                "right": "The king likes the beating of the drum (p. 12)"
              },
              {
                "left": "Gondi kuni mekan eniu? — Metātit tsheddan",
                "right": "How do they call this village? — It is called Metātit (p. 16)"
              },
              {
                "left": "Sonna egi aka henbāne",
                "right": "Make that it may not perish (p. 15)"
              }
            ]
          }
        ]
      },
{
        "id": "borana-peace-wells-environment",
        "title": "Deep Wells (Tulaa), Peacebuilding & Ecology",
        "icon": "Droplets",
        "description": "Practice Borana expressions for traditional well stewardship, environmental conservation, and peaceful coexistence.",
        "culturalNote": "In Borana custom across Marsabit and Isiolo, the administration of the nine deep singing wells (Tulaa Saglan) and protection of dry-season pastures are governed by consensus and peace (nagaa).",
        "grammarTip": "In Borana/Oromo, verbal nouns (infinitives) end in -uu (e.g., nagaa buusuu 'to establish peace', eeguu 'to protect', jiraachuun 'living').",
        "words": [
                {
                        "target": "Nagaa buusuu",
                        "source": "To establish peace",
                        "pronunciation": "nah-gaa boo-soo"
                },
                {
                        "target": "Qabeenya uumamaa",
                        "source": "Natural resources",
                        "pronunciation": "kah-bee-nyah oo-mah-maa"
                },
                {
                        "target": "Eeguu",
                        "source": "To protect / conserve",
                        "pronunciation": "ee-goo"
                },
                {
                        "target": "Eela tulaa",
                        "source": "Deep traditional singing well",
                        "pronunciation": "ee-lah too-laa"
                },
                {
                        "target": "Bishaan loonii",
                        "source": "Water for cattle",
                        "pronunciation": "bee-shaan loo-nee"
                },
                {
                        "target": "Ollaa",
                        "source": "Neighbor / Encampment",
                        "pronunciation": "ohl-laa"
                },
                {
                        "target": "Badhaadhina",
                        "source": "Prosperity / Well-being",
                        "pronunciation": "bah-dhaa-dhee-nah"
                },
                {
                        "target": "Aadaa ganamaa",
                        "source": "Ancestral heritage",
                        "pronunciation": "aa-daa gah-nah-maa"
                }
        ],
        "sentences": [
                {
                        "target": "Bulchiinsi eela tulaa bona keessa bishaan looniif mirkaneessa.",
                        "source": "Traditional well management ensures water for cattle in dry seasons."
                },
                {
                        "target": "Ollaa waliin nagaan jiraachuun badhaadhina fida.",
                        "source": "Living in peace with neighbors brings prosperity."
                }
        ]
},
        {
        "id": "borana-corpus-sentences-skill-1",
        "title": "Dataset Parallel Sentences: Everyday, Market & Agriculture",
        "icon": "MessageSquare",
        "description": "Practice verified Borana (Oromo) parallel sentences and vocabulary from commercially permissive corpora.",
        "culturalNote": "Google Research SMOL/GATITOS Oromo/Borana (en_orm, CC-BY-4.0), Kaikki.org Oromo Machine-Readable Dictionary (1,245 headwords, CC-BY-SA-4.0), CLDF ASJP v20 BORANA_OROMO & WAATA (CC-BY-4.0), OLDI FLORES+ & SIB-200 (CC-BY-SA-4.0) & Public Domain & Academic Lexicons (Krapf 1840, 1842, 1850, Tutschek 1844–1845 [Part I Galla–English–German & Part II English–Galla & Grammar], Foot 1913, BFBS 1921 & Griefenow-Mewis 1996)",
        "words": [
                {
                        "target": "Oolte nagaa? / Akkam oolte? / Ati naga olte har'a?",
                        "source": "Good afternoon / Hast thou passed this day in peace?",
                        "pronunciation": "ool-te na-gaa / a-ti na-ga ol-te har-a"
                },
                {
                        "target": "Naga ambulte.",
                        "source": "Good morning . . . . . . . . . . . . . . .",
                        "pronunciation": "naga-ambulte"
                },
                {
                        "target": "Bulla bulte naguma.",
                        "source": "Thanks to God! . . . . . . . . . . . . .",
                        "pronunciation": "bulla-bulte-naguma"
                },
                {
                        "target": "Anda atam tshirte ?",
                        "source": "How are you to-day ? . . . . . . . . .",
                        "pronunciation": "anda-atam-tshirte"
                },
                {
                        "target": "lakíse; kase; gate",
                        "source": "Pardon, v. a",
                        "pronunciation": "lakíse"
                },
                {
                        "target": "kasa",
                        "source": "Pardon, s",
                        "pronunciation": "kasa"
                },
                {
                        "target": "nágaia; arára",
                        "source": "Peace, s",
                        "pronunciation": "nágaia"
                },
                {
                        "target": "gelatéfate",
                        "source": "Thank, v. a",
                        "pronunciation": "gelatéfate"
                }
        ],
        "sentences": [
                {
                        "target": "Nuti waliin bafad'a barbaanna",
                        "source": "We want to pluck together"
                },
                {
                        "target": "Nuti waliin d'abad'a barbaanna",
                        "source": "We want to stand together"
                },
                {
                        "target": "Nuti waliin gonogona barbaanna",
                        "source": "We want to twist together"
                },
                {
                        "target": "Nuti waliin furra barbaanna",
                        "source": "We want to untie together"
                },
                {
                        "target": "Nuti waliin hoqiza barbaanna",
                        "source": "We want to vomit together"
                },
                {
                        "target": "Nuti waliin woltaie barbaanna",
                        "source": "We want to agree together"
                },
                {
                        "target": "Nuti waliin hirriba kaie barbaanna",
                        "source": "We want to awake together"
                },
                {
                        "target": "Nuti waliin mitshe. refl. dikate barbaanna",
                        "source": "We want to bathe together"
                },
                {
                        "target": "Nuti waliin itshare barbaanna",
                        "source": "We want to build together"
                },
                {
                        "target": "Nuti waliin kabe barbaanna",
                        "source": "We want to catch together"
                },
                {
                        "target": "Nuti waliin kufae barbaanna",
                        "source": "We want to cough together"
                },
                {
                        "target": "Nuti waliin lakăie barbaanna",
                        "source": "We want to count together"
                }
        ]
},
        {
        "id": "borana-corpus-sentences-skill-2",
        "title": "Dataset Parallel Sentences: Health, Travel & Civic Life",
        "icon": "Globe",
        "description": "Master multi-domain Borana (Oromo) sentences for healthcare, transport, and community safety.",
        "culturalNote": "Google Research SMOL/GATITOS Oromo/Borana (en_orm, CC-BY-4.0), Kaikki.org Oromo Machine-Readable Dictionary (1,245 headwords, CC-BY-SA-4.0), CLDF ASJP v20 BORANA_OROMO & WAATA (CC-BY-4.0), OLDI FLORES+ & SIB-200 (CC-BY-SA-4.0) & Public Domain & Academic Lexicons (Krapf 1840, 1842, 1850, Tutschek 1844–1845 [Part I Galla–English–German & Part II English–Galla & Grammar], Foot 1913, BFBS 1921 & Griefenow-Mewis 1996)",
        "words": [
                {
                        "target": "sagal (zagala)",
                        "source": "Nine",
                        "pronunciation": "sa-gal"
                },
                {
                        "target": "ṣān",
                        "source": "Five",
                        "pronunciation": "san"
                },
                {
                        "target": "afur",
                        "source": "Four",
                        "pronunciation": "a-fur"
                },
                {
                        "target": "takáti; guia tóko",
                        "source": "Once",
                        "pronunciation": "takati"
                },
                {
                        "target": "tchabnana",
                        "source": "Half",
                        "pronunciation": "tchabna-na"
                },
                {
                        "target": "lamma",
                        "source": "Both",
                        "pronunciation": "lam-ma"
                }
        ],
        "sentences": [
                {
                        "target": "Nuti waliin dokse barbaanna",
                        "source": "We want to cover together"
                },
                {
                        "target": "Nuti waliin sirbe barbaanna",
                        "source": "We want to dance together"
                },
                {
                        "target": "Nuti waliin duge barbaanna",
                        "source": "We want to drink together"
                },
                {
                        "target": "sagal (zagala)",
                        "source": "Nine"
                }
        ]
}
    ]
  }
];
