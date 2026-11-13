import type { CourseUnit, LanguageConfig } from "../types";

// ============================================================
// Kiswahili (Kiswahili) Language Course Configuration & Units
// Declarative modular course definition (audit-ready, zero runtime mutations)
// ============================================================

export const SWAHILI_CONFIG: LanguageConfig = {
  "id": "swahili",
  "name": "Kiswahili",
  "nativeName": "Kiswahili",
  "family": "Bantu",
  "counties": [
    "Mombasa",
    "Kilifi",
    "Kwale",
    "Lamu",
    "Tana River",
    "Nairobi"
  ],
  "speakers": "15M+",
  "speechLocale": "sw-KE",
  "description": "Kenya's national and official language and East Africa's historic Sabaki Bantu lingua franca.",
  "color": "#0284C7",
  "sources": [
    "krapf-six-languages-1850",
    "steere-swahili-tales-1870",
    "krapf-suahili-dictionary-1882",
    "taylor-aphorisms-1891",
    "steere-madan-swahili-handbook-1894",
    "madan-english-swahili-dictionary-1902-grammar-1905",
    "madan-swahili-dictionary-1903",
    "kamba-kikuyu-vocabularies",
    "burt-swahili-grammar-1910",
    "madan-english-swahili-vocabulary-1917",
    "johnston-bantu-1919",
    "bantu-beliefs",
    "open-web-swadesh-comparative"
  ]
};

export const SWAHILI_UNITS: CourseUnit[] = [
  {
    "id": "swahili-unit-1",
    "title": "Unit 1: Greetings, Noun Classes (Ngeli) & Everyday Phrases",
    "description": "Master coastal (Ki-Mvita / Ki-Unguja) and standard Kiswahili greetings, M-/Wa- and Ki-/Vi- noun classes, and conversational phrases from Hinde (1904), Steere (1894), and Burt (1910).",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "swahili-greetings-nouns",
        "title": "Greetings, People & Noun Classes",
        "icon": "Users",
        "description": "Learn foundational Kiswahili greetings and noun singular/plural pairs.",
        "tips": "Kiswahili nouns change prefix in the plural: mtu → watu (person → people), mtoto → watoto (child → children), kitu → vitu (thing → things), jiwe → mawe (stone → stones).",
        "words": [
          {
            "target": "Hujambo! / Habari yako?",
            "source": "Hello! / How is your news?",
            "pronunciation": "hu-jambo / ha-ba-ri ya-ko",
            "hint": "Response: Sijambo! / Njema! (Steere 1894 & Burt 1910)"
          },
          {
            "target": "Asante sana",
            "source": "Thank you very much",
            "pronunciation": "a-sante sa-na",
            "hint": "Polite gratitude"
          },
          {
            "target": "mtu (pl. watu)",
            "source": "person (pl. people)",
            "pronunciation": "mtu",
            "hint": "Class 1/2 m-/wa- (Krapf 1882 & Hinde 1904)"
          },
          {
            "target": "mtoto (pl. watoto)",
            "source": "child (pl. children)",
            "pronunciation": "mto-to",
            "hint": "Class 1/2 m-/wa-"
          },
          {
            "target": "mgeni (pl. wageni)",
            "source": "guest / stranger",
            "pronunciation": "mge-ni",
            "hint": "Class 1/2 m-/wa- (Hinde 1904)"
          },
          {
            "target": "kitu (pl. vitu)",
            "source": "thing (pl. things)",
            "pronunciation": "ki-tu",
            "hint": "Class 7/8 ki-/vi- (Madan 1903 D 4)"
          },
          {
            "target": "maji / moto",
            "source": "water / fire",
            "pronunciation": "ma-ji / mo-to",
            "hint": "Core nature nouns (Krapf 1850 & Swadesh)"
          },
          {
            "target": "nyumba (pl. nyumba)",
            "source": "house (pl. houses)",
            "pronunciation": "nyumba",
            "hint": "Class 9/10 (Hinde 1904 & Hobley 1922)"
          },
          {
            "target": "chakula",
            "source": "food",
            "pronunciation": "cha-ku-la",
            "hint": "Class 7 noun (Steere 1894)"
          },
          {
            "target": "njia (Kimvita: ndia)",
            "source": "road / path / way",
            "pronunciation": "njia",
            "hint": "Class 9/10 (Burt 1910 & Hinde 1904)"
          }
        ],
        "sentences": [
          {
            "target": "Mgeni amefika nyumbani.",
            "source": "The guest has arrived at the house."
          },
          {
            "target": "Watu wanakunywa maji safi.",
            "source": "The people are drinking clean water."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Hujambo! / Habari yako?\" in Kiswahili?",
            "correctAnswer": "Hello! / How is your news?",
            "options": [
              "Thank you very much",
              "person (pl. people)",
              "child (pl. children)",
              "Hello! / How is your news?"
            ],
            "hint": "Response: Sijambo! / Njema! (Steere 1894 & Burt 1910)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Asante sana\" in Kiswahili?",
            "correctAnswer": "Thank you very much",
            "options": [
              "person (pl. people)",
              "child (pl. children)",
              "Thank you very much",
              "Hello! / How is your news?"
            ],
            "hint": "Polite gratitude"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu (pl. watu)\" in Kiswahili?",
            "correctAnswer": "person (pl. people)",
            "options": [
              "child (pl. children)",
              "person (pl. people)",
              "Hello! / How is your news?",
              "Thank you very much"
            ],
            "hint": "Class 1/2 m-/wa- (Krapf 1882 & Hinde 1904)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"person (pl. people)\" in Kiswahili?",
            "correctAnswer": "mtu (pl. watu)",
            "options": [
              "mtu (pl. watu)",
              "Hujambo! / Habari yako?",
              "Asante sana",
              "mtoto (pl. watoto)"
            ],
            "hint": "m-too / wah-too"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"child (pl. children)\" in Kiswahili?",
            "correctAnswer": "mtoto (pl. watoto)",
            "options": [
              "Hujambo! / Habari yako?",
              "Asante sana",
              "mtu (pl. watu)",
              "mtoto (pl. watoto)"
            ],
            "hint": "m-toh-toh / wah-toh-toh"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "Hujambo! / Habari yako?: Hello! / How is your news?",
            "pairs": [
              {
                "left": "Hujambo! / Habari yako?",
                "right": "Hello! / How is your news?"
              },
              {
                "left": "Asante sana",
                "right": "Thank you very much"
              },
              {
                "left": "mtu (pl. watu)",
                "right": "person (pl. people)"
              },
              {
                "left": "mtoto (pl. watoto)",
                "right": "child (pl. children)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"guest / stranger\": ___",
            "correctAnswer": "mgeni (pl. wageni)",
            "options": [
              "Hujambo! / Habari yako?",
              "Asante sana",
              "mtu (pl. watu)",
              "mgeni (pl. wageni)"
            ],
            "hint": "Class 1/2 m-/wa- (Hinde 1904)"
          }
        ]
      },
      {
        "id": "swahili-verbs-proverbs",
        "title": "Verb Tenses (Hinde 1904 & Burt 1910), Numerals 1–10 & Taylor (1891) / Steere (1870) Proverbs",
        "icon": "Zap",
        "description": "Conjugate Swahili verbs across Present, Past, and Future tenses and learn iconic coastal proverbs and riddles.",
        "tips": "In Kiswahili, ni- (I), u- (you), a- (s/he), tu- (we), m- (you pl.), wa- (they) combine with -na- (present), -li- (past), -me- (perfect), and -ta- (future).",
        "words": [
          {
            "target": "moja",
            "source": "One (1)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no",
            "hint": "Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)"
          },
          {
            "target": "mbili",
            "source": "Two (2)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no",
            "hint": "Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)"
          },
          {
            "target": "tatu",
            "source": "Three (3)",
            "pronunciation": "mo-ja mbi-li ta-tu nne ta-no",
            "hint": "Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)"
          },
          {
            "target": "sita",
            "source": "Six (6)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi",
            "hint": "Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)"
          },
          {
            "target": "saba (mfungate)",
            "source": "Seven (7)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi",
            "hint": "Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)"
          },
          {
            "target": "nane",
            "source": "Eight (8)",
            "pronunciation": "si-ta sa-ba na-ne kenda ku-mi",
            "hint": "Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)"
          },
          {
            "target": "ninashinda / nilishinda / nitashinda",
            "source": "I pass the day / I passed / I shall pass",
            "pronunciation": "ni-nashinda / ni-lishinda / ni-tashinda",
            "hint": "Hinde (1904) paradigm verb ku-shinda"
          },
          {
            "target": "sishindi / sikushinda / sijashinda",
            "source": "I do not / I did not / I have not yet passed the day",
            "pronunciation": "sishindi / si-kushinda / si-jashinda",
            "hint": "Negative tenses (Hinde 1904)"
          },
          {
            "target": "kula / kunywa / kuja / kwenda",
            "source": "to eat / to drink / to come / to go",
            "pronunciation": "ku-la / kunywa / ku-ja / kwenda",
            "hint": "Core infinitive verbs (Madan 1917)"
          },
          {
            "target": "Haraka haraka haina baraka",
            "source": "Hurry, hurry has no blessing",
            "pronunciation": "ha-ra-ka ha-ra-ka hai-na ba-ra-ka",
            "hint": "W. E. Taylor (1891, Proverb #86)"
          },
          {
            "target": "Mtaka cha mvunguni huinama (sharti ainame)",
            "source": "Whoever wants what is under the bed must stoop",
            "pronunciation": "mta-ka cha mvungu-ni hui-na-ma",
            "hint": "Steere (1870, p. 192) & Taylor (1891, p. 71 #316)"
          },
          {
            "target": "Haba na haba hujaza kibaba",
            "source": "Little by little fills the measure",
            "pronunciation": "ha-ba na ha-ba hu-ja-za ki-ba-ba",
            "hint": "Steere (1870, p. 192) & Taylor (1891, p. 13 #70)"
          }
        ],
        "sentences": [
          {
            "target": "Haba na haba hujaza kibaba.",
            "source": "Little by little fills the measure (Steere 1870 & Taylor 1891)."
          },
          {
            "target": "Mzee alitaja sita nyumbani.",
            "source": "The elder mentioned 6 at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moja, mbili, tatu, nne, tano\" in Kiswahili?",
            "correctAnswer": "1, 2, 3, 4, 5",
            "options": [
              "6, 7, 8, 9, 10",
              "I pass the day / I passed / I shall pass",
              "I do not / I did not / I have not yet passed the day",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Cardinal numbers 1–5 (Hinde 1904 & Steere 1894)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sita, saba (mfungate), nane, kenda (tisa), kumi\" in Kiswahili?",
            "correctAnswer": "6, 7, 8, 9, 10",
            "options": [
              "I pass the day / I passed / I shall pass",
              "I do not / I did not / I have not yet passed the day",
              "6, 7, 8, 9, 10",
              "1, 2, 3, 4, 5"
            ],
            "hint": "Krapf (1882) & Hinde (1904) preserve Bantu mfungate (7) & kenda (9)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ninashinda / nilishinda / nitashinda\" in Kiswahili?",
            "correctAnswer": "I pass the day / I passed / I shall pass",
            "options": [
              "I do not / I did not / I have not yet passed the day",
              "I pass the day / I passed / I shall pass",
              "1, 2, 3, 4, 5",
              "6, 7, 8, 9, 10"
            ],
            "hint": "Hinde (1904) paradigm verb ku-shinda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I pass the day / I passed / I shall pass\" in Kiswahili?",
            "correctAnswer": "ninashinda / nilishinda / nitashinda",
            "options": [
              "ninashinda / nilishinda / nitashinda",
              "moja, mbili, tatu, nne, tano",
              "sita, saba (mfungate), nane, kenda (tisa), kumi",
              "sishindi / sikushinda / sijashinda"
            ],
            "hint": "nee-nah-sheen-dah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I do not / I did not / I have not yet passed the day\" in Kiswahili?",
            "correctAnswer": "sishindi / sikushinda / sijashinda",
            "options": [
              "moja, mbili, tatu, nne, tano",
              "sita, saba (mfungate), nane, kenda (tisa), kumi",
              "ninashinda / nilishinda / nitashinda",
              "sishindi / sikushinda / sijashinda"
            ],
            "hint": "see-sheen-dee"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "moja, mbili, tatu, nne, tano: 1, 2, 3, 4, 5",
            "pairs": [
              {
                "left": "moja, mbili, tatu, nne, tano",
                "right": "1, 2, 3, 4, 5"
              },
              {
                "left": "sita, saba (mfungate), nane, kenda (tisa), kumi",
                "right": "6, 7, 8, 9, 10"
              },
              {
                "left": "ninashinda / nilishinda / nitashinda",
                "right": "I pass the day / I passed / I shall pass"
              },
              {
                "left": "sishindi / sikushinda / sijashinda",
                "right": "I do not / I did not / I have not yet passed the day"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"to eat / to drink / to come / to go\": ___",
            "correctAnswer": "kula / kunywa / kuja / kwenda",
            "options": [
              "moja, mbili, tatu, nne, tano",
              "sita, saba (mfungate), nane, kenda (tisa), kumi",
              "ninashinda / nilishinda / nitashinda",
              "kula / kunywa / kuja / kwenda"
            ],
            "hint": "Core infinitive verbs (Madan 1917)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-2",
    "title": "Unit 2: Classical Swahili Dialects, 8 Verb Stems (Madan 1903) & Steere (1870) Oral Literature",
    "description": "Explore Ki-Mvita vs. Ki-Unguja vs. Ki-Amu/Ki-Ngozi dialects, Madan’s 8 verbal derivative stems, and Steere’s 1870 Vitendawili & Hadithi ya Liongo.",
    "icon": "Lightbulb",
    "skills": [
      {
        "id": "swahili-verb-derivations-madan",
        "title": "Madan (1903) 8 Verbal Derivative Stems & Steere (1894) Kinyume",
        "icon": "RefreshCw",
        "description": "Master Applied (-ia/-ea), Causative (-isha/-eza), Stative (-ika/-eka), Reciprocal (-ana), and Reversive (-ua/-oa) verb stems.",
        "tips": "A. C. Madan (1903, pp. xiii–xv) classifies Swahili verbs into 8 productive stems: Simple (-a), Applied/Prepositional (-ia/-ea), Causative (-isha/-eza/-ya), Neuter/Quasi-passive (-ika/-eka), Partial (-ama), Reciprocal (-ana), Reversive (-ua/-oa), and Reduplicated.",
        "words": [
          {
            "target": "kupenda → kupendea → kupendeza → kupendana",
            "source": "to love → love for/by → please (cause to love) → love each other",
            "pronunciation": "ku-penda → ku-pendea → ku-pende-za → ku-penda-na",
            "hint": "Madan (1903) Simple, Applied, Causative, & Reciprocal stems"
          },
          {
            "target": "kufunga → kufungia → kufungua → kufunguka",
            "source": "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
            "pronunciation": "ku-funga → ku-fungia → ku-fungua → ku-fungu-ka",
            "hint": "Madan (1903) Reversive -ua & Stative -uka"
          },
          {
            "target": "kuvunja → kuvunjika",
            "source": "to break (trans.) → to be broken / breakable (stative)",
            "pronunciation": "ku-vunja → ku-vunji-ka",
            "hint": "Madan (1903) Neuter/Stative -ika"
          },
          {
            "target": "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)",
            "source": "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)",
            "pronunciation": "sho-kangwa / jembengwa / ki-tingwa",
            "hint": "W. E. Taylor (1891, Appendix B, pp. 166–167) altruistic possessive -ngwa"
          },
          {
            "target": "Kinyume (Steere 1894 Appendix I, pp. 425–426)",
            "source": "Syllable-inversion wordplay written out by Johari (e.g., nyumba → mbanyu, ng'ombe → mbeng'o, kitabu → bukita)",
            "pronunciation": "kinyu-me",
            "hint": "Steere & Madan (1894, pp. 425–426) 52 Merima-dialect Kinyume specimens"
          },
          {
            "target": "Kitendawili! — Tega!",
            "source": "A riddle! — Set your trap! (Riddle opening formula)",
            "pronunciation": "ki-tenda-wi-li — te-ga",
            "hint": "Steere (1870, p. 417) Vitendawili"
          },
          {
            "target": "Nyumba yangu kubwa, haina mlango. — Yai.",
            "source": "My house is large, it has no door. — An egg.",
            "pronunciation": "nyumba yangu kubwa hai-na mlango — yai",
            "hint": "Steere (1870, p. 418, Riddle #1)"
          },
          {
            "target": "Kuku wangu akazalia miibani. — Nanasi.",
            "source": "My hen has laid among thorns. — A pineapple.",
            "pronunciation": "ku-ku wangu a-ka-za-lia mii-ba-ni — na-na-si",
            "hint": "Steere (1870, p. 418, Riddle #2)"
          }
        ],
        "sentences": [
          {
            "target": "Watu wote wanapendana na kusaidiana.",
            "source": "All the people love one another and help one another."
          },
          {
            "target": "Mzee alitaja kufunga → kufungia → kufungua → kufunguka nyumbani.",
            "source": "The elder mentioned to fasten at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kupenda → kupendea → kupendeza → kupendana\" in Kiswahili?",
            "correctAnswer": "to love → love for/by → please (cause to love) → love each other",
            "options": [
              "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
              "to break (trans.) → to be broken / breakable (stative)",
              "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)",
              "to love → love for/by → please (cause to love) → love each other"
            ],
            "hint": "Madan (1903) Simple, Applied, Causative, & Reciprocal stems"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kufunga → kufungia → kufungua → kufunguka\" in Kiswahili?",
            "correctAnswer": "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
            "options": [
              "to break (trans.) → to be broken / breakable (stative)",
              "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)",
              "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened",
              "to love → love for/by → please (cause to love) → love each other"
            ],
            "hint": "Madan (1903) Reversive -ua & Stative -uka"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuvunja → kuvunjika\" in Kiswahili?",
            "correctAnswer": "to break (trans.) → to be broken / breakable (stative)",
            "options": [
              "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)",
              "to break (trans.) → to be broken / breakable (stative)",
              "to love → love for/by → please (cause to love) → love each other",
              "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened"
            ],
            "hint": "Madan (1903) Neuter/Stative -ika"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"to break (trans.) → to be broken / breakable (stative)\" in Kiswahili?",
            "correctAnswer": "kuvunja → kuvunjika",
            "options": [
              "kuvunja → kuvunjika",
              "kupenda → kupendea → kupendeza → kupendana",
              "kufunga → kufungia → kufungua → kufunguka",
              "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)"
            ],
            "hint": "koo-voon-jah / koo-voon-jee-kah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)\" in Kiswahili?",
            "correctAnswer": "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)",
            "options": [
              "kupenda → kupendea → kupendeza → kupendana",
              "kufunga → kufungia → kufungua → kufunguka",
              "kuvunja → kuvunjika",
              "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)"
            ],
            "hint": "sho-kan-gwa / jem-ben-gwa / ki-tin-gwa"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "kupenda → kupendea → kupendeza → kupendana: to love → love for/by → please (cause to love) → love each other",
            "pairs": [
              {
                "left": "kupenda → kupendea → kupendeza → kupendana",
                "right": "to love → love for/by → please (cause to love) → love each other"
              },
              {
                "left": "kufunga → kufungia → kufungua → kufunguka",
                "right": "to fasten/shut → fasten for/with → unfasten (reversive) → become unfastened"
              },
              {
                "left": "kuvunja → kuvunjika",
                "right": "to break (trans.) → to be broken / breakable (stative)"
              },
              {
                "left": "shokangwa / jembengwa / kitingwa (Taylor 1891 -ngwa)",
                "right": "someone else's axe / hoe / stool (possessive pronoun of alienation = -a wat'u)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Syllable-inversion wordplay written out by Johari (e.g., nyumba → mbanyu, ng'ombe → mbeng'o, kitabu → bukita)\": ___",
            "correctAnswer": "Kinyume (Steere 1894 Appendix I, pp. 425–426)",
            "options": [
              "kupenda → kupendea → kupendeza → kupendana",
              "kufunga → kufungia → kufungua → kufunguka",
              "kuvunja → kuvunjika",
              "Kinyume (Steere 1894 Appendix I, pp. 425–426)"
            ],
            "hint": "Steere & Madan (1894, pp. 425–426) 52 Merima-dialect Kinyume specimens"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization",
    "description": "Master family, kinship, clans & social organization in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Users",
    "skills": [
      {
        "id": "swahili-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mfalme (pl. wafalme) / jumbe / sultani",
            "source": "King / Chief",
            "pronunciation": "mfalme / jumbe / sulta-ni",
            "hint": "Steere 1870 & Krapf 1882"
          },
          {
            "target": "mtu, pl. watu",
            "source": "Man"
          },
          {
            "target": "mwana, mtoto, (mume)",
            "source": "Son"
          },
          {
            "target": "kijana, pl. vijana",
            "source": "Girl"
          },
          {
            "target": "Hujambo / Jambo (pl. Hamjambo)",
            "source": "Hello"
          },
          {
            "target": "hirim",
            "source": "boy (circumcised)",
            "pronunciation": "hi-rim",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "ndugu",
            "source": "brother",
            "pronunciation": "ndu-gu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "shemegi",
            "source": "brother in law",
            "pronunciation": "she-me-gi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mfalme, pl. wafalme",
            "source": "chief",
            "pronunciation": "mfalme",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ],
        "sentences": [
          {
            "target": "mfalme — mtu, pl. watu",
            "source": "King — Man"
          },
          {
            "target": "mwana, mtoto, — kijana, pl. vijana",
            "source": "Son — Girl"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mfalme\" mean in English?",
            "correctAnswer": "King / Chief",
            "options": [
              "King / Chief",
              "Man",
              "Son",
              "Girl"
            ],
            "hint": "Core vocabulary in Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Man\"",
            "correctAnswer": "mtu, pl. watu",
            "acceptedAnswers": [
              "mtu, pl. watu",
              "mtu, pl. watu"
            ],
            "hint": "Starts with \"mt\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mwana, mtoto,\"",
            "correctAnswer": "Son",
            "acceptedAnswers": [
              "Son",
              "Son"
            ],
            "hint": "Review Kinship Terms, Elders & Household Roles"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Kinship Terms, Elders & Household Roles with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mfalme",
                "right": "King"
              },
              {
                "left": "mtu, pl. watu",
                "right": "Man"
              },
              {
                "left": "mwana, mtoto,",
                "right": "Son"
              },
              {
                "left": "kijana, pl. vijana",
                "right": "Girl"
              },
              {
                "left": "kijana, pl. vijana",
                "right": "boy"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mtoto, pl. watoto",
            "source": "child",
            "pronunciation": "mto-to",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kutambaa",
            "source": "crawl (a man)",
            "pronunciation": "ku-tambaa",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mzee, pl. wazee",
            "source": "elder",
            "pronunciation": "mzee",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "baba",
            "source": "father",
            "pronunciation": "ba-ba",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mkwe, pl. wakwe",
            "source": "father-in-law",
            "pronunciation": "mkwe",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mume, pl. waume",
            "source": "husband",
            "pronunciation": "mu-me",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mtu, pl. watu",
            "source": "man",
            "pronunciation": "mtu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mganga, pl. waganga",
            "source": "medicine man",
            "pronunciation": "mganga",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mwana, mtoto, (mume)",
            "source": "Son",
            "pronunciation": "mwa-na mto-to"
          }
        ],
        "sentences": [
          {
            "target": "mtoto, pl. watoto — kutambaa",
            "source": "child — crawl"
          },
          {
            "target": "mzee, pl. wazee — baba",
            "source": "elder — father"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mtoto, pl. watoto\" mean in English?",
            "correctAnswer": "child",
            "options": [
              "child",
              "crawl (a man)",
              "elder",
              "father"
            ],
            "hint": "Core vocabulary in Clans, Marriage & Community Life"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"crawl (a man)\"",
            "correctAnswer": "kutambaa",
            "acceptedAnswers": [
              "kutambaa",
              "kutambaa"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"mzee, pl. wazee\"",
            "correctAnswer": "elder",
            "acceptedAnswers": [
              "elder",
              "elder"
            ],
            "hint": "Review Clans, Marriage & Community Life"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Clans, Marriage & Community Life with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mtoto, pl. watoto",
                "right": "child"
              },
              {
                "left": "kutambaa",
                "right": "crawl"
              },
              {
                "left": "mzee, pl. wazee",
                "right": "elder"
              },
              {
                "left": "baba",
                "right": "father"
              },
              {
                "left": "mkwe, pl. wakwe",
                "right": "father-in-law"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures",
    "description": "Master numbers, counting, currency & measures in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Scale",
    "skills": [
      {
        "id": "swahili-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "-ote",
            "source": "all",
            "pronunciation": "ote",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "sisi sote",
            "source": "all of us",
            "pronunciation": "si-si so-te",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "moja",
            "source": "One"
          },
          {
            "target": "sita",
            "source": "Six"
          },
          {
            "target": "wote wawili",
            "source": "both",
            "pronunciation": "wo-te wa-wi-li",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kuhesabu",
            "source": "count",
            "pronunciation": "ku-he-sa-bu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "nane",
            "source": "eight",
            "pronunciation": "na-ne",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mara nane",
            "source": "eight times",
            "pronunciation": "ma-ra na-ne",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kumi na moja",
            "source": "eleven",
            "pronunciation": "ku-mi na mo-ja",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ],
        "sentences": [
          {
            "target": "-ote — sisi sote",
            "source": "all — all of us"
          },
          {
            "target": "moja — sita",
            "source": "One — Six"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"-ote\" mean in English?",
            "correctAnswer": "all",
            "options": [
              "all",
              "all of us",
              "One",
              "Six"
            ],
            "hint": "Core vocabulary in Cardinal & Ordinal Numerals"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"all of us\"",
            "correctAnswer": "sisi sote",
            "acceptedAnswers": [
              "sisi sote",
              "sisi sote"
            ],
            "hint": "Starts with \"si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"moja\"",
            "correctAnswer": "One",
            "acceptedAnswers": [
              "One",
              "One"
            ],
            "hint": "Review Cardinal & Ordinal Numerals"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Cardinal & Ordinal Numerals with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "-ote",
                "right": "all"
              },
              {
                "left": "sisi sote",
                "right": "all of us"
              },
              {
                "left": "moja",
                "right": "One"
              },
              {
                "left": "sita",
                "right": "Six"
              },
              {
                "left": "wote wawili",
                "right": "both"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "hamsini",
            "source": "fifty",
            "pronunciation": "hamsi-ni",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kwanza",
            "source": "first",
            "pronunciation": "kwanza",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "tano",
            "source": "five",
            "pronunciation": "ta-no",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mara tano",
            "source": "five times",
            "pronunciation": "ma-ra ta-no",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "arobaini",
            "source": "forty",
            "pronunciation": "a-ro-bai-ni",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "'nne",
            "source": "four",
            "pronunciation": "'nne",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mara 'nne",
            "source": "four times",
            "pronunciation": "ma-ra 'nne",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "nusu",
            "source": "half",
            "pronunciation": "nu-su",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "ngapi",
            "source": "how many",
            "pronunciation": "nga-pi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja kwanza nyumbani.",
            "source": "The elder mentioned first at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"hamsini\" in Kiswahili?",
            "correctAnswer": "fifty",
            "options": [
              "first",
              "five",
              "five times",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kwanza\" in Kiswahili?",
            "correctAnswer": "first",
            "options": [
              "five",
              "five times",
              "first",
              "fifty"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tano\" in Kiswahili?",
            "correctAnswer": "five",
            "options": [
              "five times",
              "five",
              "fifty",
              "first"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"five\" in Kiswahili?",
            "correctAnswer": "tano",
            "options": [
              "tano",
              "hamsini",
              "kwanza",
              "mara tano"
            ],
            "hint": "tano"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"five times\" in Kiswahili?",
            "correctAnswer": "mara tano",
            "options": [
              "hamsini",
              "kwanza",
              "tano",
              "mara tano"
            ],
            "hint": "mara tano"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "hamsini: fifty",
            "pairs": [
              {
                "left": "hamsini",
                "right": "fifty"
              },
              {
                "left": "kwanza",
                "right": "first"
              },
              {
                "left": "tano",
                "right": "five"
              },
              {
                "left": "mara tano",
                "right": "five times"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"forty\": ___",
            "correctAnswer": "arobaini",
            "options": [
              "hamsini",
              "kwanza",
              "tano",
              "arobaini"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry",
    "description": "Master food, cuisine, crops & livestock husbandry in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Tractor",
    "skills": [
      {
        "id": "swahili-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Soup",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "ugali / uji / sima",
            "source": "Porridge / Ugali",
            "pronunciation": "u-ga-li / uji / si-ma",
            "hint": "Krapf 1882 & Madan 1903"
          },
          {
            "target": "ndizi",
            "source": "banana",
            "pronunciation": "ndi-zi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kuzaa",
            "source": "bear fruit (to)",
            "pronunciation": "ku-zaa",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "tembo",
            "source": "beer (native)",
            "pronunciation": "tembo",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "-chungu",
            "source": "bitter",
            "pronunciation": "chungu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "siagi",
            "source": "butter",
            "pronunciation": "sia-gi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "samli",
            "source": "butter (clarified)",
            "pronunciation": "samli",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mtindi",
            "source": "butter milk",
            "pronunciation": "mtindi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "matama",
            "source": "caffre corn",
            "pronunciation": "ma-ta-ma",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja ndizi nyumbani.",
            "source": "The elder mentioned banana at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ugali / uji / sima\" in Kiswahili?",
            "correctAnswer": "Porridge / Ugali",
            "options": [
              "banana",
              "bear fruit (to)",
              "beer (native)",
              "Porridge / Ugali"
            ],
            "hint": "Krapf 1882 & Madan 1903"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ndizi\" in Kiswahili?",
            "correctAnswer": "banana",
            "options": [
              "bear fruit (to)",
              "beer (native)",
              "banana",
              "Porridge / Ugali"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"kuzaa\" in Kiswahili?",
            "correctAnswer": "bear fruit (to)",
            "options": [
              "beer (native)",
              "bear fruit (to)",
              "Porridge / Ugali",
              "banana"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"bear fruit (to)\" in Kiswahili?",
            "correctAnswer": "kuzaa",
            "options": [
              "kuzaa",
              "ugali / uji / sima",
              "ndizi",
              "tembo"
            ],
            "hint": "kuzaa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"beer (native)\" in Kiswahili?",
            "correctAnswer": "tembo",
            "options": [
              "ugali / uji / sima",
              "ndizi",
              "kuzaa",
              "tembo"
            ],
            "hint": "tembo"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "ugali / uji / sima: Porridge / Ugali",
            "pairs": [
              {
                "left": "ugali / uji / sima",
                "right": "Porridge / Ugali"
              },
              {
                "left": "ndizi",
                "right": "banana"
              },
              {
                "left": "kuzaa",
                "right": "bear fruit (to)"
              },
              {
                "left": "tembo",
                "right": "beer (native)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"bitter\": ___",
            "correctAnswer": "-chungu",
            "options": [
              "ugali / uji / sima",
              "ndizi",
              "kuzaa",
              "-chungu"
            ],
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          }
        ]
      },
      {
        "id": "swahili-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Tractor",
        "description": "Study indigenous crops, planting seasons, and livestock terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mahogo, pl. hogo",
            "source": "cassava",
            "pronunciation": "ma-ho-go",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mbarika",
            "source": "castor-oil tree",
            "pronunciation": "mba-ri-ka",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kutafuna",
            "source": "chew (tobacco)",
            "pronunciation": "ku-ta-fu-na",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kupika",
            "source": "cook",
            "pronunciation": "ku-pi-ka",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kunwa",
            "source": "drink",
            "pronunciation": "kunwa",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kula",
            "source": "eat",
            "pronunciation": "ku-la",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "yayi, pl. mayayi",
            "source": "egg",
            "pronunciation": "ya-yi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mafuta",
            "source": "Oil",
            "pronunciation": "ma-fu-ta"
          },
          {
            "target": "-bichi",
            "source": "Raw",
            "pronunciation": "bichi"
          }
        ],
        "sentences": [
          {
            "target": "mahogo, pl. hogo — mbarika",
            "source": "cassava — castor-oil tree"
          },
          {
            "target": "kutafuna — kupika",
            "source": "chew — cook"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mahogo, pl. hogo\" mean in English?",
            "correctAnswer": "cassava",
            "options": [
              "cassava",
              "castor-oil tree",
              "chew (tobacco)",
              "cook"
            ],
            "hint": "Core vocabulary in Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"castor-oil tree\"",
            "correctAnswer": "mbarika",
            "acceptedAnswers": [
              "mbarika",
              "mbarika"
            ],
            "hint": "Starts with \"mb\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kutafuna\"",
            "correctAnswer": "chew",
            "acceptedAnswers": [
              "chew (tobacco)",
              "chew"
            ],
            "hint": "Review Crops, Cultivation & Pastoral Livestock"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Crops, Cultivation & Pastoral Livestock with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mahogo, pl. hogo",
                "right": "cassava"
              },
              {
                "left": "mbarika",
                "right": "castor-oil tree"
              },
              {
                "left": "kutafuna",
                "right": "chew"
              },
              {
                "left": "kupika",
                "right": "cook"
              },
              {
                "left": "kunwa",
                "right": "drink"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife",
    "description": "Master nature, landscape, flora & east african wildlife in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "PawPrint",
    "skills": [
      {
        "id": "swahili-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "CloudRain",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fisi",
            "source": "Hyena",
            "pronunciation": "fi-si",
            "hint": "Taylor 1891 Proverb #419 & Krapf 1882"
          },
          {
            "target": "popo",
            "source": "Bat"
          },
          {
            "target": "ngwiro",
            "source": "ant (large black)",
            "pronunciation": "ngwi-ro",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "chungu",
            "source": "ant (small black)",
            "pronunciation": "chungu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "siafu",
            "source": "ant (red)",
            "pronunciation": "sia-fu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mchwa",
            "source": "ant (white)",
            "pronunciation": "mchwa",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "swarra",
            "source": "antelope",
            "pronunciation": "swarra",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "jifu, pl. majifu; ivu, pl. maivu",
            "source": "ashes",
            "pronunciation": "ji-fu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "ng'ombe",
            "source": "Ox",
            "pronunciation": "ng'omb-e"
          }
        ],
        "sentences": [
          {
            "target": "fisi — popo",
            "source": "Hyena — Bat"
          },
          {
            "target": "ngwiro — chungu",
            "source": "ant — ant"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"fisi\" mean in English?",
            "correctAnswer": "Hyena",
            "options": [
              "Hyena",
              "Bat",
              "ant (large black)",
              "ant (small black)"
            ],
            "hint": "Core vocabulary in Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Bat\"",
            "correctAnswer": "popo",
            "acceptedAnswers": [
              "popo",
              "popo"
            ],
            "hint": "Starts with \"po\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"ngwiro\"",
            "correctAnswer": "ant",
            "acceptedAnswers": [
              "ant (large black)",
              "ant"
            ],
            "hint": "Review Sky, Weather, Rivers & Landforms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Sky, Weather, Rivers & Landforms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "fisi",
                "right": "Hyena"
              },
              {
                "left": "popo",
                "right": "Bat"
              },
              {
                "left": "ngwiro",
                "right": "ant"
              },
              {
                "left": "chungu",
                "right": "ant"
              },
              {
                "left": "siafu",
                "right": "ant"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "PawPrint",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "nyani",
            "source": "baboon",
            "pronunciation": "nya-ni",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "mbuyu, pl. mibuyu",
            "source": "baobab tree",
            "pronunciation": "mbu-yu",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kulia",
            "source": "bark",
            "pronunciation": "ku-lia",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "ganda (soft), gome (hard)",
            "source": "bark (of tree)",
            "pronunciation": "ganda go-me",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "baazi",
            "source": "beans (tree)",
            "pronunciation": "baa-zi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "nyuki",
            "source": "bee",
            "pronunciation": "nyu-ki",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "kivumanzi",
            "source": "bell (cow)",
            "pronunciation": "ki-vu-manzi",
            "hint": "Hildegarde Hinde (1904) — Zanzibar/Coast Swahili"
          },
          {
            "target": "hassi wa gnombe gnombe múme",
            "source": "Ox",
            "pronunciation": "hassi wa gnombe gnombe mume"
          },
          {
            "target": "paka",
            "source": "Cat",
            "pronunciation": "pa-ka"
          }
        ],
        "sentences": [
          {
            "target": "nyani — mbuyu, pl. mibuyu",
            "source": "baboon — baobab tree"
          },
          {
            "target": "kulia — ganda, gome",
            "source": "bark — bark"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"nyani\" mean in English?",
            "correctAnswer": "baboon",
            "options": [
              "baboon",
              "baobab tree",
              "bark",
              "bark (of tree)"
            ],
            "hint": "Core vocabulary in East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"baobab tree\"",
            "correctAnswer": "mbuyu, pl. mibuyu",
            "acceptedAnswers": [
              "mbuyu, pl. mibuyu",
              "mbuyu, pl. mibuyu"
            ],
            "hint": "Starts with \"mb\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kulia\"",
            "correctAnswer": "bark",
            "acceptedAnswers": [
              "bark",
              "bark"
            ],
            "hint": "Review East African Fauna, Birds & Sacred Trees"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from East African Fauna, Birds & Sacred Trees with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "nyani",
                "right": "baboon"
              },
              {
                "left": "mbuyu, pl. mibuyu",
                "right": "baobab tree"
              },
              {
                "left": "kulia",
                "right": "bark"
              },
              {
                "left": "ganda, gome",
                "right": "bark"
              },
              {
                "left": "baazi",
                "right": "beans"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety",
    "description": "Master the human body, health, medicine & safety in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "User",
    "skills": [
      {
        "id": "swahili-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "maumivu / uchungu",
            "source": "Pain / Ache",
            "pronunciation": "mau-mi-vu / uchungu",
            "hint": "Krapf 1882 & Madan 1903"
          },
          {
            "target": "ugonjwa / maradhi",
            "source": "Sickness / Illness",
            "pronunciation": "u-gonjwa / ma-radhi",
            "hint": "Steere 1894 & Madan 1903"
          },
          {
            "target": "dawa",
            "source": "Medicine / Remedy",
            "pronunciation": "da-wa",
            "hint": "Krapf 1882 & Steere 1894"
          },
          {
            "target": "mganga (pl. waganga) / tabibu",
            "source": "Healer / Physician",
            "pronunciation": "mganga / ta-bi-bu",
            "hint": "Krapf 1882 & Hobley 1922"
          },
          {
            "target": "msaada (Nisaidie! = Help me!)",
            "source": "Help / Assistance",
            "pronunciation": "msaa-da",
            "hint": "Steere 1894 & Madan 1903"
          },
          {
            "target": "hatari",
            "source": "Danger / Peril",
            "pronunciation": "ha-ta-ri",
            "hint": "Krapf 1882 & Madan 1903"
          },
          {
            "target": "jicho, pl. macho",
            "source": "Eye"
          },
          {
            "target": "mguu, pl. miguu",
            "source": "Leg"
          },
          {
            "target": "sikio, pl. masikio",
            "source": "Ear",
            "pronunciation": "sikio"
          }
        ],
        "sentences": [
          {
            "target": "maumivu — ugonjwa",
            "source": "Pain — Sickness"
          },
          {
            "target": "dawa — mganga",
            "source": "Medicine — Healer"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"maumivu\" mean in English?",
            "correctAnswer": "Pain / Ache",
            "options": [
              "Pain / Ache",
              "Sickness / Illness",
              "Medicine / Remedy",
              "Healer / Physician"
            ],
            "hint": "Core vocabulary in Parts of the Body & Physical Senses"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sickness / Illness\"",
            "correctAnswer": "ugonjwa",
            "acceptedAnswers": [
              "ugonjwa / maradhi",
              "ugonjwa"
            ],
            "hint": "Starts with \"ug\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"dawa\"",
            "correctAnswer": "Medicine",
            "acceptedAnswers": [
              "Medicine / Remedy",
              "Medicine"
            ],
            "hint": "Review Parts of the Body & Physical Senses"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Parts of the Body & Physical Senses with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "maumivu",
                "right": "Pain"
              },
              {
                "left": "ugonjwa",
                "right": "Sickness"
              },
              {
                "left": "dawa",
                "right": "Medicine"
              },
              {
                "left": "mganga",
                "right": "Healer"
              },
              {
                "left": "msaada",
                "right": "Help"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "Hospital",
        "description": "Master expressions for illness, healing remedies, protection, and safety.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tumbo, plur. ma-",
            "source": "Bowels",
            "pronunciation": "tumbo",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "fa",
            "source": "become Dead",
            "pronunciation": "fa",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "amekufa",
            "source": "He is dead",
            "pronunciation": "a-me-ku-fa",
            "hint": "Madan (1917) English-Swahili Vocabulary (under become Dead)"
          },
          {
            "target": "jicho, pl. macho",
            "source": "Eye",
            "pronunciation": "jicho"
          },
          {
            "target": "mguu, pl. miguu",
            "source": "Leg",
            "pronunciation": "mguu"
          },
          {
            "target": "ubavu, pl. mbavu",
            "source": "Rib",
            "pronunciation": "ubavu"
          },
          {
            "target": "kidole, pl. vidole",
            "source": "Toe",
            "pronunciation": "kidole"
          },
          {
            "target": "sikio (pl. masikio)",
            "source": "Ear",
            "pronunciation": "sikio"
          },
          {
            "target": "mkono",
            "source": "Arm",
            "pronunciation": "mko-no"
          }
        ],
        "sentences": [
          {
            "target": "tumbo, plur. ma- — fa",
            "source": "Bowels — become Dead"
          },
          {
            "target": "amekufa — jicho, pl. macho",
            "source": "He is dead — Eye"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tumbo, plur. ma-\" mean in English?",
            "correctAnswer": "Bowels",
            "options": [
              "Bowels",
              "become Dead",
              "He is dead",
              "Eye"
            ],
            "hint": "Core vocabulary in Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"become Dead\"",
            "correctAnswer": "fa",
            "acceptedAnswers": [
              "fa",
              "fa"
            ],
            "hint": "Starts with \"fa\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"amekufa\"",
            "correctAnswer": "He is dead",
            "acceptedAnswers": [
              "He is dead",
              "He is dead"
            ],
            "hint": "Review Health, Traditional Medicine & Emergency Terms"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Health, Traditional Medicine & Emergency Terms with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tumbo, plur. ma-",
                "right": "Bowels"
              },
              {
                "left": "fa",
                "right": "become Dead"
              },
              {
                "left": "amekufa",
                "right": "He is dead"
              },
              {
                "left": "jicho, pl. macho",
                "right": "Eye"
              },
              {
                "left": "mguu, pl. miguu",
                "right": "Leg"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions",
    "description": "Master core verbs, tenses, negation & verbal extensions in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Compass",
    "skills": [
      {
        "id": "swahili-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Zap",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "kusema / kunena",
            "source": "Speak",
            "pronunciation": "ku-se-ma / ku-ne-na",
            "hint": "Steere 1894, Burt 1910 & Madan 1917"
          },
          {
            "target": "kulala (-lala)",
            "source": "Sleep",
            "pronunciation": "ku-la-la",
            "hint": "Steere 1894 & Madan 1917"
          },
          {
            "target": "kwenda (-enda)",
            "source": "Go",
            "pronunciation": "kwenda",
            "hint": "Vowel-stem verb (Steere 1894 & Madan 1917)"
          },
          {
            "target": "tenda, fanya, (be of use) faa",
            "source": "Do",
            "pronunciation": "tend-a fany-a"
          },
          {
            "target": "kuuliza",
            "source": "Ask",
            "pronunciation": "kuu-li-za"
          },
          {
            "target": "kuomba",
            "source": "Beg",
            "pronunciation": "kuomba"
          },
          {
            "target": "lia, piga kelele",
            "source": "Cry",
            "pronunciation": "lia pi-ga ke-le-le"
          },
          {
            "target": "chimba",
            "source": "Dig",
            "pronunciation": "chimb-a"
          },
          {
            "target": "piga, chapa, menya, (with spear, arrow, etc.) fuma",
            "source": "Hit",
            "pronunciation": "pi-ga cha-pa meny-a"
          }
        ],
        "sentences": [
          {
            "target": "kusema — kulala",
            "source": "Speak — Sleep"
          },
          {
            "target": "kwenda — tenda, fanya, faa",
            "source": "Go — Do"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"kusema\" mean in English?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Go",
              "Do"
            ],
            "hint": "Core vocabulary in Essential Action & Motion Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Sleep\"",
            "correctAnswer": "kulala",
            "acceptedAnswers": [
              "kulala (-lala)",
              "kulala"
            ],
            "hint": "Starts with \"ku\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"kwenda\"",
            "correctAnswer": "Go",
            "acceptedAnswers": [
              "Go",
              "Go"
            ],
            "hint": "Review Essential Action & Motion Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Essential Action & Motion Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "kusema",
                "right": "Speak"
              },
              {
                "left": "kulala",
                "right": "Sleep"
              },
              {
                "left": "kwenda",
                "right": "Go"
              },
              {
                "left": "tenda, fanya, faa",
                "right": "Do"
              },
              {
                "left": "kuuliza",
                "right": "Ask"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "RefreshCw",
        "description": "Build complex meanings using verbal extensions and grammatical particles.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tia",
            "source": "Put",
            "pronunciation": "tia"
          },
          {
            "target": "oza",
            "source": "Rot",
            "pronunciation": "o-za"
          },
          {
            "target": "sugua",
            "source": "Rub",
            "pronunciation": "su-gua"
          },
          {
            "target": "piga mbio, kimbia, (run away, of a slave) toroka",
            "source": "Run",
            "pronunciation": "pi-ga mbio kimb-ia"
          },
          {
            "target": "sema",
            "source": "Say",
            "pronunciation": "se-ma"
          },
          {
            "target": "ona, tazama",
            "source": "See",
            "pronunciation": "o-na ta-za-ma"
          },
          {
            "target": "weka, tia, (of the sun) chwa",
            "source": "Set",
            "pronunciation": "we-ka tia"
          },
          {
            "target": "shona",
            "source": "Sew",
            "pronunciation": "sho-na"
          },
          {
            "target": "panda",
            "source": "Sow",
            "pronunciation": "pand-a"
          }
        ],
        "sentences": [
          {
            "target": "tia — oza",
            "source": "Put — Rot"
          },
          {
            "target": "sugua — piga mbio, kimbia, toroka",
            "source": "Rub — Run"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tia\" mean in English?",
            "correctAnswer": "Put",
            "options": [
              "Put",
              "Rot",
              "Rub",
              "Run"
            ],
            "hint": "Core vocabulary in Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Rot\"",
            "correctAnswer": "oza",
            "acceptedAnswers": [
              "oza",
              "oza"
            ],
            "hint": "Starts with \"oz\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"sugua\"",
            "correctAnswer": "Rub",
            "acceptedAnswers": [
              "Rub",
              "Rub"
            ],
            "hint": "Review Applied, Causative, Reciprocal & Stative Verbs"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Applied, Causative, Reciprocal & Stative Verbs with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tia",
                "right": "Put"
              },
              {
                "left": "oza",
                "right": "Rot"
              },
              {
                "left": "sugua",
                "right": "Rub"
              },
              {
                "left": "piga mbio, kimbia, toroka",
                "right": "Run"
              },
              {
                "left": "sema",
                "right": "Say"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-9",
    "title": "Unit 9: Time, Indigenous Calendar, Seasons & Navigation",
    "description": "Master time, indigenous calendar, seasons & navigation in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Map",
    "skills": [
      {
        "id": "swahili-time-calendar-seasons-months-9",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Clock",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "mwongo (pl. miongo)",
            "source": "Ten-Day Agricultural Decade",
            "pronunciation": "mwongo",
            "hint": "Krapf 1882 & Taylor 1891"
          },
          {
            "target": "Siku ya Mwaka (Nairuz)",
            "source": "Solar New Year Festival",
            "pronunciation": "si-ku ya mwa-ka",
            "hint": "Krapf 1882 & Taylor 1891 agricultural calendar"
          },
          {
            "target": "leo / jana / kesho",
            "source": "Today / Yesterday / Tomorrow",
            "pronunciation": "leo / ja-na / kesho",
            "hint": "Steere 1894 & Hinde 1904"
          },
          {
            "target": "jioni / magharibi",
            "source": "Evening / Sunset (6 p.m.)",
            "pronunciation": "jio-ni / magha-ri-bi",
            "hint": "Steere 1894 & Burt 1910"
          },
          {
            "target": "alasiri",
            "source": "Late Afternoon (3:30 p.m.)",
            "pronunciation": "a-la-si-ri",
            "hint": "Steere 1894 & Burt 1910"
          },
          {
            "target": "adhuhuri (mchana)",
            "source": "Noon / Midday",
            "pronunciation": "adhu-hu-ri",
            "hint": "Steere 1894 & Burt 1910"
          },
          {
            "target": "asubuhi",
            "source": "Morning (6 a.m. – noon)",
            "pronunciation": "a-su-bu-hi",
            "hint": "Steere 1894 & Hinde 1904"
          },
          {
            "target": "alfajiri / mapambazuko",
            "source": "Dawn / Daybreak",
            "pronunciation": "alfa-ji-ri / ma-pamba-zu-ko",
            "hint": "Steere 1894 & Burt 1910 Swahili hours"
          },
          {
            "target": "síku",
            "source": "Day",
            "pronunciation": "siku"
          }
        ],
        "sentences": [
          {
            "target": "mwongo — Siku ya Mwaka",
            "source": "Ten-Day Agricultural Decade — Solar New Year Festival"
          },
          {
            "target": "leo — jioni",
            "source": "Today — Evening"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"mwongo\" mean in English?",
            "correctAnswer": "Ten-Day Agricultural Decade",
            "options": [
              "Ten-Day Agricultural Decade",
              "Solar New Year Festival",
              "Today / Yesterday / Tomorrow",
              "Evening / Sunset (6 p.m.)"
            ],
            "hint": "Core vocabulary in Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Solar New Year Festival\"",
            "correctAnswer": "Siku ya Mwaka",
            "acceptedAnswers": [
              "Siku ya Mwaka (Nairuz)",
              "Siku ya Mwaka"
            ],
            "hint": "Starts with \"Si\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"leo\"",
            "correctAnswer": "Today",
            "acceptedAnswers": [
              "Today / Yesterday / Tomorrow",
              "Today"
            ],
            "hint": "Review Day Divisions, Lunar Months & Agricultural Seasons"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Day Divisions, Lunar Months & Agricultural Seasons with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "mwongo",
                "right": "Ten-Day Agricultural Decade"
              },
              {
                "left": "Siku ya Mwaka",
                "right": "Solar New Year Festival"
              },
              {
                "left": "leo",
                "right": "Today"
              },
              {
                "left": "jioni",
                "right": "Evening"
              },
              {
                "left": "alasiri",
                "right": "Late Afternoon"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-time-calendar-journey-navigation-9",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "Droplets",
        "description": "Navigate roads, river crossings, compass points, and caravan routes.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "tangu siku kumi, leo siku kumi",
            "source": "Ten days ago",
            "pronunciation": "tangu si-ku ku-mi leo si-ku ku-mi",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Ago)"
          },
          {
            "target": "mchana kuchwa",
            "source": "All day",
            "pronunciation": "mcha-na kuchwa",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Day)"
          },
          {
            "target": "Juma",
            "source": "Friday",
            "pronunciation": "ju-ma",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "baadaye, halafu yake",
            "source": "At a future time",
            "pronunciation": "baa-da-ye ha-la-fu ya-ke",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Future)"
          },
          {
            "target": "saa",
            "source": "Hour",
            "pronunciation": "saa",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "saa ngapi?",
            "source": "What is the hour?",
            "pronunciation": "saa nga-pi",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Hour)"
          },
          {
            "target": "sása",
            "source": "Now",
            "pronunciation": "sasa"
          },
          {
            "target": "Sīku. M-tsāna",
            "source": "Day",
            "pronunciation": "siku m-tsana"
          },
          {
            "target": "kisha",
            "source": "Then",
            "pronunciation": "kish-a"
          }
        ],
        "sentences": [
          {
            "target": "tangu siku kumi, leo siku kumi — mchana kuchwa",
            "source": "Ten days ago — All day"
          },
          {
            "target": "Juma — baadaye, halafu yake",
            "source": "Friday — At a future time"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tangu siku kumi, leo siku kumi\" mean in English?",
            "correctAnswer": "Ten days ago",
            "options": [
              "Ten days ago",
              "All day",
              "Friday",
              "At a future time"
            ],
            "hint": "Core vocabulary in Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"All day\"",
            "correctAnswer": "mchana kuchwa",
            "acceptedAnswers": [
              "mchana kuchwa",
              "mchana kuchwa"
            ],
            "hint": "Starts with \"mc\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Juma\"",
            "correctAnswer": "Friday",
            "acceptedAnswers": [
              "Friday",
              "Friday"
            ],
            "hint": "Review Travel, Directions, Paths & Landmarks"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Travel, Directions, Paths & Landmarks with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "tangu siku kumi, leo siku kumi",
                "right": "Ten days ago"
              },
              {
                "left": "mchana kuchwa",
                "right": "All day"
              },
              {
                "left": "Juma",
                "right": "Friday"
              },
              {
                "left": "baadaye, halafu yake",
                "right": "At a future time"
              },
              {
                "left": "saa",
                "right": "Hour"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-10",
    "title": "Unit 10: Conversational Phrases, Idioms & Daily Dialogue",
    "description": "Master conversational phrases, idioms & daily dialogue in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "MessageCircle",
    "skills": [
      {
        "id": "swahili-phrases-idioms-everyday-dialogue-10",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "CheckCircle2",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "Hujambo / Jambo (pl. Hamjambo)",
            "source": "Hello",
            "pronunciation": "hoo-jahm-boh"
          },
          {
            "target": "amani",
            "source": "Peace",
            "pronunciation": "a-ma-ni"
          },
          {
            "target": "shukuru",
            "source": "Thank",
            "pronunciation": "shu-ku-ru"
          },
          {
            "target": "salimía; sálimu",
            "source": "Greet",
            "pronunciation": "salimia"
          },
          {
            "target": "báriki",
            "source": "Bless",
            "pronunciation": "bariki"
          },
          {
            "target": "kupendeza",
            "source": "Please",
            "pronunciation": "ku-pende-za"
          },
          {
            "target": "salimia",
            "source": "Salute",
            "pronunciation": "sa-li-mia"
          },
          {
            "target": "samehe, achilia",
            "source": "Pardon"
          },
          {
            "target": "Kwaheri (pl. Kwaherini)",
            "source": "Goodbye"
          }
        ],
        "sentences": [
          {
            "target": "Hujambo — amani",
            "source": "Hello — Peace"
          },
          {
            "target": "shukuru — salimía",
            "source": "Thank — Greet"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Hujambo\" mean in English?",
            "correctAnswer": "Hello",
            "options": [
              "Hello",
              "Peace",
              "Thank",
              "Greet"
            ],
            "hint": "Core vocabulary in Everyday Conversational Phrases & Questions"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Peace\"",
            "correctAnswer": "amani",
            "acceptedAnswers": [
              "amani",
              "amani"
            ],
            "hint": "Starts with \"am\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"shukuru\"",
            "correctAnswer": "Thank",
            "acceptedAnswers": [
              "Thank",
              "Thank"
            ],
            "hint": "Review Everyday Conversational Phrases & Questions"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Everyday Conversational Phrases & Questions with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "Hujambo",
                "right": "Hello"
              },
              {
                "left": "amani",
                "right": "Peace"
              },
              {
                "left": "shukuru",
                "right": "Thank"
              },
              {
                "left": "salimía",
                "right": "Greet"
              },
              {
                "left": "báriki",
                "right": "Bless"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-phrases-idioms-courtesy-discourse-10",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Handshake",
        "description": "Converse naturally in home, village, market, and travel settings.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "pendeza, furahisha",
            "source": "Please",
            "pronunciation": "pend-e-za fu-ra-hish-a"
          },
          {
            "target": "ata; ondoléa gofiría",
            "source": "Pardon",
            "pronunciation": "a-ta"
          },
          {
            "target": "Kwaheri (pl. Kwaherini)",
            "source": "Goodbye",
            "pronunciation": "kwah-heh-ree"
          },
          {
            "target": "Karibu (pl. Karibuni)",
            "source": "Welcome",
            "pronunciation": "kah-ree-boo"
          },
          {
            "target": "samehe, achilia",
            "source": "Forgive",
            "pronunciation": "sa-me-he ach-i-lia"
          },
          {
            "target": "kua hẹri ya kuonána",
            "source": "Farewell",
            "pronunciation": "kua heri ya kuonana"
          },
          {
            "target": "Asante (Asante sana)",
            "source": "Thank you",
            "pronunciation": "ah-sahn-teh sah-nah"
          },
          {
            "target": "kua heri",
            "source": "Farewell!",
            "pronunciation": "kua he-ri"
          },
          {
            "target": "kunrathi, nipe hisa yangu",
            "source": "Pardon me",
            "pronunciation": "kun-rath-i ni-pe hi-sa yang-u"
          }
        ],
        "sentences": [
          {
            "target": "pendeza, furahisha — ata",
            "source": "Please — Pardon"
          },
          {
            "target": "Kwaheri — Karibu",
            "source": "Goodbye — Welcome"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"pendeza, furahisha\" mean in English?",
            "correctAnswer": "Please",
            "options": [
              "Please",
              "Pardon",
              "Goodbye",
              "Welcome"
            ],
            "hint": "Core vocabulary in Hospitality, Requests & Social Discourse"
          },
          {
            "type": "translate_to_target",
            "prompt": "Translate to the target language: \"Pardon\"",
            "correctAnswer": "ata",
            "acceptedAnswers": [
              "ata; ondoléa gofiría",
              "ata"
            ],
            "hint": "Starts with \"at\""
          },
          {
            "type": "translate_to_english",
            "prompt": "Translate to English: \"Kwaheri\"",
            "correctAnswer": "Goodbye",
            "acceptedAnswers": [
              "Goodbye",
              "Goodbye"
            ],
            "hint": "Review Hospitality, Requests & Social Discourse"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each expression from Hospitality, Requests & Social Discourse with its English meaning:",
            "correctAnswer": "all_matched",
            "pairs": [
              {
                "left": "pendeza, furahisha",
                "right": "Please"
              },
              {
                "left": "ata",
                "right": "Pardon"
              },
              {
                "left": "Kwaheri",
                "right": "Goodbye"
              },
              {
                "left": "Karibu",
                "right": "Welcome"
              },
              {
                "left": "samehe, achilia",
                "right": "Forgive"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-11",
    "title": "Unit 11: Classical Proverbs, Riddles & Ethnographic Heritage",
    "description": "Master classical proverbs, riddles & ethnographic heritage in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Globe",
    "skills": [
      {
        "id": "swahili-oral-wisdom-literature-proverbs-riddles-11",
        "title": "Traditional Proverbs, Riddles & Aphorisms",
        "icon": "Award",
        "description": "Study verbatim oral wisdom, riddles, and moral aphorisms from the historical collections.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "wingi, tele",
            "source": "Abundance",
            "pronunciation": "wingi te-le",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "talasimu, plur. ma-",
            "source": "Amulet",
            "pronunciation": "ta-la-si-mu",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "malaika",
            "source": "Angel",
            "pronunciation": "ma-lai-ka",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
            "source": "Breakfast",
            "pronunciation": "cha-ku-la cha assu-bu-hi cha amsha kinwa ki-fungua kinwa",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "(magic) talasimu, hirizi",
            "source": "Charm",
            "pronunciation": "ta-la-si-mu hi-ri-zi",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "kanisa, plur. ma-",
            "source": "Church",
            "pronunciation": "ka-ni-sa",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "baraza",
            "source": "Council",
            "pronunciation": "ba-ra-za",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "shetani, plur. ma-, pepo mbaya",
            "source": "Demon",
            "pronunciation": "she-ta-ni",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "tia utumwani",
            "source": "Enslave",
            "pronunciation": "tia u-tumwa-ni",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja talasimu nyumbani.",
            "source": "The elder mentioned amulet at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"wingi, tele\" in Kiswahili?",
            "correctAnswer": "Abundance",
            "options": [
              "Amulet",
              "Angel",
              "Breakfast",
              "Abundance"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"talasimu, plur. ma-\" in Kiswahili?",
            "correctAnswer": "Amulet",
            "options": [
              "Angel",
              "Breakfast",
              "Amulet",
              "Abundance"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"malaika\" in Kiswahili?",
            "correctAnswer": "Angel",
            "options": [
              "Breakfast",
              "Angel",
              "Abundance",
              "Amulet"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Angel\" in Kiswahili?",
            "correctAnswer": "malaika",
            "options": [
              "malaika",
              "wingi, tele",
              "talasimu, plur. ma-",
              "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa"
            ],
            "hint": "malaika"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Breakfast\" in Kiswahili?",
            "correctAnswer": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
            "options": [
              "wingi, tele",
              "talasimu, plur. ma-",
              "malaika",
              "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa"
            ],
            "hint": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "wingi, tele: Abundance",
            "pairs": [
              {
                "left": "wingi, tele",
                "right": "Abundance"
              },
              {
                "left": "talasimu, plur. ma-",
                "right": "Amulet"
              },
              {
                "left": "malaika",
                "right": "Angel"
              },
              {
                "left": "chakula cha assubuhi, cha amsha kinwa, kifungua kinwa",
                "right": "Breakfast"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Charm\": ___",
            "correctAnswer": "(magic) talasimu, hirizi",
            "options": [
              "wingi, tele",
              "talasimu, plur. ma-",
              "malaika",
              "(magic) talasimu, hirizi"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          }
        ]
      },
      {
        "id": "swahili-oral-wisdom-literature-ethnographic-lexicon-11",
        "title": "Customary Law, Rituals & Historical Lexicon",
        "icon": "ShieldCheck",
        "description": "Master specialized cultural, legal, musical, and historical vocabulary.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "upesi, hima",
            "source": "Fast",
            "pronunciation": "u-pe-si hi-ma",
            "hint": "Madan (1917) English-Swahili Vocabulary (adv.)"
          },
          {
            "target": "funga, kaza",
            "source": "Fasten",
            "pronunciation": "funga ka-za",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "mjoli",
            "source": "Fellow-slave",
            "pronunciation": "mjo-li",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "kuzika, kuzikani",
            "source": "Funeral",
            "pronunciation": "ku-zi-ka ku-zi-ka-ni",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "makokoto",
            "source": "Gravel",
            "pronunciation": "ma-ko-ko-to",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "leso",
            "source": "Handkerchief",
            "pronunciation": "le-so",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "urithi",
            "source": "Inheritance",
            "pronunciation": "u-rithi",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "mchawi, mganga",
            "source": "Magician",
            "pronunciation": "mcha-wi mganga",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "(harm) mathara, uharabu, (cunning) hila, ujanja",
            "source": "Mischief",
            "pronunciation": "matha-ra u-ha-ra-bu hi-la u-janja",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja funga nyumbani.",
            "source": "The elder mentioned fasten at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"upesi, hima\" in Kiswahili?",
            "correctAnswer": "Fast",
            "options": [
              "Fasten",
              "Fellow-slave",
              "Funeral",
              "Fast"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (adv.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"funga, kaza\" in Kiswahili?",
            "correctAnswer": "Fasten",
            "options": [
              "Fellow-slave",
              "Funeral",
              "Fasten",
              "Fast"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mjoli\" in Kiswahili?",
            "correctAnswer": "Fellow-slave",
            "options": [
              "Funeral",
              "Fellow-slave",
              "Fast",
              "Fasten"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Fellow-slave\" in Kiswahili?",
            "correctAnswer": "mjoli",
            "options": [
              "mjoli",
              "upesi, hima",
              "funga, kaza",
              "kuzika, kuzikani"
            ],
            "hint": "mjoli"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Funeral\" in Kiswahili?",
            "correctAnswer": "kuzika, kuzikani",
            "options": [
              "upesi, hima",
              "funga, kaza",
              "mjoli",
              "kuzika, kuzikani"
            ],
            "hint": "kuzika, kuzikani"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "upesi, hima: Fast",
            "pairs": [
              {
                "left": "upesi, hima",
                "right": "Fast"
              },
              {
                "left": "funga, kaza",
                "right": "Fasten"
              },
              {
                "left": "mjoli",
                "right": "Fellow-slave"
              },
              {
                "left": "kuzika, kuzikani",
                "right": "Funeral"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Gravel\": ___",
            "correctAnswer": "makokoto",
            "options": [
              "upesi, hima",
              "funga, kaza",
              "mjoli",
              "makokoto"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-12",
    "title": "Unit 12: Extended Historical Lexicon I: Crafts, Tools & Architecture",
    "description": "Master extended historical lexicon i: crafts, tools & architecture in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Layers",
    "skills": [
      {
        "id": "swahili-advanced-corpus-1-crafts-metallurgy-12",
        "title": "Ironworking, Pottery, Basketry & Ornaments",
        "icon": "Amphora",
        "description": "Learn terms for traditional smithing, pottery, weaving, and personal ornamentation.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "moskiti",
            "source": "Mosque",
            "pronunciation": "moski-ti",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "bora, -a daraja kuu",
            "source": "Noble",
            "pronunciation": "bo-ra a da-ra-ja kuu",
            "hint": "Madan (1917) English-Swahili Vocabulary (a.)"
          },
          {
            "target": "mtu mkubwa, jumbe",
            "source": "Nobleman",
            "pronunciation": "mtu mkubwa jumbe",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "omba, sali",
            "source": "Pray",
            "pronunciation": "omba sa-li",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "(ask) taka, (intercede) ombea",
            "source": "Pray for",
            "pronunciation": "ta-ka ombea",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "dini",
            "source": "Religion",
            "pronunciation": "di-ni",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "thabihu, kafara, sadaka",
            "source": "Sacrifice",
            "pronunciation": "tha-bi-hu ka-fa-ra sa-da-ka",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "utumwa",
            "source": "Slavery",
            "pronunciation": "u-tumwa",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "pepo, jini, plur. ma-",
            "source": "Spirit",
            "pronunciation": "pe-po ji-ni",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja bora nyumbani.",
            "source": "The elder mentioned noble at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"moskiti\" in Kiswahili?",
            "correctAnswer": "Mosque",
            "options": [
              "Noble",
              "Nobleman",
              "Pray",
              "Mosque"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"bora, -a daraja kuu\" in Kiswahili?",
            "correctAnswer": "Noble",
            "options": [
              "Nobleman",
              "Pray",
              "Noble",
              "Mosque"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (a.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu mkubwa, jumbe\" in Kiswahili?",
            "correctAnswer": "Nobleman",
            "options": [
              "Pray",
              "Nobleman",
              "Mosque",
              "Noble"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Nobleman\" in Kiswahili?",
            "correctAnswer": "mtu mkubwa, jumbe",
            "options": [
              "mtu mkubwa, jumbe",
              "moskiti",
              "bora, -a daraja kuu",
              "omba, sali"
            ],
            "hint": "mtu mkubwa, jumbe"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Pray\" in Kiswahili?",
            "correctAnswer": "omba, sali",
            "options": [
              "moskiti",
              "bora, -a daraja kuu",
              "mtu mkubwa, jumbe",
              "omba, sali"
            ],
            "hint": "omba, sali"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "moskiti: Mosque",
            "pairs": [
              {
                "left": "moskiti",
                "right": "Mosque"
              },
              {
                "left": "bora, -a daraja kuu",
                "right": "Noble"
              },
              {
                "left": "mtu mkubwa, jumbe",
                "right": "Nobleman"
              },
              {
                "left": "omba, sali",
                "right": "Pray"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-1-homestead-architecture-12",
        "title": "Homestead Layout, Building & Domestic Implements",
        "icon": "Home",
        "description": "Describe traditional house construction, hearthstones, granaries, and utensils.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "(liquor) mvinyo",
            "source": "Spirits",
            "pronunciation": "mvinyo",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "furahi, furahiwa moyo",
            "source": "be in good Spirits",
            "pronunciation": "fu-ra-hi fu-ra-hi-wa mo-yo",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "hadithi, habari, kisa, (lie) uwongo",
            "source": "Story",
            "pronunciation": "ha-dithi ha-ba-ri ki-sa u-wongo",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "sumulia hadithi",
            "source": "Tell a story",
            "pronunciation": "su-mu-lia ha-dithi",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Story)"
          },
          {
            "target": "sultani, seyidi, bwana",
            "source": "Sultan",
            "pronunciation": "sulta-ni se-yi-di bwa-na",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "hadithi, kisa, habari",
            "source": "Tale",
            "pronunciation": "ha-dithi ki-sa ha-ba-ri",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "chongea",
            "source": "Tell tales of",
            "pronunciation": "chongea",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Tale)"
          },
          {
            "target": "mtu gani wee?",
            "source": "Of what tribe are you?",
            "pronunciation": "mtu ga-ni wee",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Tribe)"
          },
          {
            "target": "Sultani Rum",
            "source": "Sultan of Turkey",
            "pronunciation": "sulta-ni rum",
            "hint": "Madan (1917) English-Swahili Vocabulary (under Turkey)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja furahi nyumbani.",
            "source": "The elder mentioned be in good spirits at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"(liquor) mvinyo\" in Kiswahili?",
            "correctAnswer": "Spirits",
            "options": [
              "be in good Spirits",
              "Story",
              "Tell a story",
              "Spirits"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"furahi, furahiwa moyo\" in Kiswahili?",
            "correctAnswer": "be in good Spirits",
            "options": [
              "Story",
              "Tell a story",
              "be in good Spirits",
              "Spirits"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "(liquor) mvinyo: Spirits",
            "pairs": [
              {
                "left": "(liquor) mvinyo",
                "right": "Spirits"
              },
              {
                "left": "furahi, furahiwa moyo",
                "right": "be in good Spirits"
              },
              {
                "left": "hadithi, habari, kisa, (lie) uwongo",
                "right": "Story"
              },
              {
                "left": "sumulia hadithi",
                "right": "Tell a story"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-13",
    "title": "Unit 13: Extended Historical Lexicon II: Governance, Law & Oral Narrative",
    "description": "Master extended historical lexicon ii: governance, law & oral narrative in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Crown",
    "skills": [
      {
        "id": "swahili-advanced-corpus-2-councils-justice-13",
        "title": "Elders' Councils, Oaths, Covenants & Customary Justice",
        "icon": "Handshake",
        "description": "Explore indigenous governance, peace ceremonies, and legal terminology.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fungua",
            "source": "Unfasten",
            "pronunciation": "fungua",
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "target": "mtu gani yeye?",
            "source": "Of what tribe is he?",
            "pronunciation": "mtu ga-ni ye-ye",
            "hint": "Madan (1917) English-Swahili Vocabulary (under What?)"
          },
          {
            "target": "mke mchawi",
            "source": "Diviner",
            "pronunciation": "mke mcha-wi",
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "target": "soéṣa; tía áda",
            "source": "Accustom",
            "pronunciation": "soe-sa",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. a.)"
          },
          {
            "target": "fánia utáwi",
            "source": "Bewitch",
            "pronunciation": "fa-nia u-ta-wi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. a.)"
          },
          {
            "target": "ada",
            "source": "Custom",
            "pronunciation": "ada",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "tésa kua ku rúka",
            "source": "Dance",
            "pronunciation": "te-sa kua ku ru-ka",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. n.)"
          },
          {
            "target": "ṣetáni",
            "source": "Devil",
            "pronunciation": "se-ta-ni",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "ngóma",
            "source": "Drum",
            "pronunciation": "ngo-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja mtu gani yeye? nyumbani.",
            "source": "The elder mentioned of what tribe is he? at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"fungua\" in Kiswahili?",
            "correctAnswer": "Unfasten",
            "options": [
              "Of what tribe is he?",
              "Diviner",
              "Accustom",
              "Unfasten"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (v.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mtu gani yeye?\" in Kiswahili?",
            "correctAnswer": "Of what tribe is he?",
            "options": [
              "Diviner",
              "Accustom",
              "Of what tribe is he?",
              "Unfasten"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (under What?)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"mke mchawi\" in Kiswahili?",
            "correctAnswer": "Diviner",
            "options": [
              "Accustom",
              "Diviner",
              "Unfasten",
              "Of what tribe is he?"
            ],
            "hint": "Madan (1917) English-Swahili Vocabulary (s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Diviner\" in Kiswahili?",
            "correctAnswer": "mke mchawi",
            "options": [
              "mke mchawi",
              "fungua",
              "mtu gani yeye?",
              "soéṣa; tía áda"
            ],
            "hint": "mke mchawi"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Accustom\" in Kiswahili?",
            "correctAnswer": "soéṣa; tía áda",
            "options": [
              "fungua",
              "mtu gani yeye?",
              "mke mchawi",
              "soéṣa; tía áda"
            ],
            "hint": "soéṣa; tía áda"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "fungua: Unfasten",
            "pairs": [
              {
                "left": "fungua",
                "right": "Unfasten"
              },
              {
                "left": "mtu gani yeye?",
                "right": "Of what tribe is he?"
              },
              {
                "left": "mke mchawi",
                "right": "Diviner"
              },
              {
                "left": "soéṣa; tía áda",
                "right": "Accustom"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Bewitch\": ___",
            "correctAnswer": "fánia utáwi",
            "options": [
              "fungua",
              "mtu gani yeye?",
              "mke mchawi",
              "fánia utáwi"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. a.)"
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-2-folktale-narrative-13",
        "title": "Folktale Discourse, Poetic Registers & Narrative Style",
        "icon": "ScrollText",
        "description": "Read and analyze classical narrative vocabulary and dialectal registers.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "fúnga (sc. kánoa)",
            "source": "Fast, vn",
            "pronunciation": "funga",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)"
          },
          {
            "target": "nóna; wánda",
            "source": "Fast, adj. to be-",
            "pronunciation": "no-na",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)"
          },
          {
            "target": "táric̣i; kissa",
            "source": "History",
            "pronunciation": "ta-rikhi",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "pémbe",
            "source": "Horn",
            "pronunciation": "pembe",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "salla",
            "source": "Prayer",
            "pronunciation": "salla",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "salli; omba",
            "source": "Pray",
            "pronunciation": "salli",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli v. a.)"
          },
          {
            "target": "kítjo ja Mungu",
            "source": "Religion",
            "pronunciation": "kitjo ja mungu",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "sádaka; kitíndo",
            "source": "Sacrifice",
            "pronunciation": "sa-da-ka",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "target": "mtúma",
            "source": "Slave",
            "pronunciation": "mtu-ma",
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja nóna nyumbani.",
            "source": "The elder mentioned fast at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"fúnga (sc. kánoa)\" in Kiswahili?",
            "correctAnswer": "Fast, vn",
            "options": [
              "Fast, adj. to be-",
              "History",
              "Horn",
              "Fast, vn"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"nóna; wánda\" in Kiswahili?",
            "correctAnswer": "Fast, adj. to be-",
            "options": [
              "History",
              "Horn",
              "Fast, adj. to be-",
              "Fast, vn"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"táric̣i; kissa\" in Kiswahili?",
            "correctAnswer": "History",
            "options": [
              "Horn",
              "History",
              "Fast, vn",
              "Fast, adj. to be-"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"History\" in Kiswahili?",
            "correctAnswer": "táric̣i; kissa",
            "options": [
              "táric̣i; kissa",
              "fúnga (sc. kánoa)",
              "nóna; wánda",
              "pémbe"
            ],
            "hint": "táric̣i; kissa"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"Horn\" in Kiswahili?",
            "correctAnswer": "pémbe",
            "options": [
              "fúnga (sc. kánoa)",
              "nóna; wánda",
              "táric̣i; kissa",
              "pémbe"
            ],
            "hint": "pémbe"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "fúnga (sc. kánoa): Fast, vn",
            "pairs": [
              {
                "left": "fúnga (sc. kánoa)",
                "right": "Fast, vn"
              },
              {
                "left": "nóna; wánda",
                "right": "Fast, adj. to be-"
              },
              {
                "left": "táric̣i; kissa",
                "right": "History"
              },
              {
                "left": "pémbe",
                "right": "Horn"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"Prayer\": ___",
            "correctAnswer": "salla",
            "options": [
              "fúnga (sc. kánoa)",
              "nóna; wánda",
              "táric̣i; kissa",
              "salla"
            ],
            "hint": "Krapf (1850) Vocabulary of Six East-African Languages (Kisuáheli s.)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-14",
    "title": "Unit 14: Extended Historical Lexicon III: Comparative Philology & Mastery",
    "description": "Master extended historical lexicon iii: comparative philology & mastery in Swahili (Kiswahili) built directly from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919).",
    "icon": "Award",
    "skills": [
      {
        "id": "swahili-advanced-corpus-3-comparative-roots-14",
        "title": "Comparative Roots, Sound Shifts & Dialectal Nuances",
        "icon": "Volume2",
        "description": "Compare dialectal forms and historical sound correspondences documented before 1930.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "u-shinde",
            "source": "that thou mayst conquer",
            "pronunciation": "u-shinde",
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "target": "a-shinde",
            "source": "that he or she may conquer",
            "pronunciation": "a-shinde",
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "target": "tu-shinde",
            "source": "that we may conquer",
            "pronunciation": "tu-shinde",
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "target": "m-shinde",
            "source": "that ye may conquer",
            "pronunciation": "m-shinde",
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "target": "wa-shinde",
            "source": "that they may conquer",
            "pronunciation": "wa-shinde",
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "target": "si-shindi",
            "source": "I do not conquer",
            "pronunciation": "si-shindi",
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "target": "hu-shindi",
            "source": "thou dost not conquer",
            "pronunciation": "hu-shindi",
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "target": "ha-shindi",
            "source": "he or she does not conquer",
            "pronunciation": "ha-shindi",
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "target": "hatu-shindi",
            "source": "we do not conquer",
            "pronunciation": "hatu-shindi",
            "hint": "Hinde (1904) — Negative Present"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja a-shinde nyumbani.",
            "source": "The elder mentioned that he or she may conquer at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"u-shinde\" in Kiswahili?",
            "correctAnswer": "that thou mayst conquer",
            "options": [
              "that he or she may conquer",
              "that we may conquer",
              "that ye may conquer",
              "that thou mayst conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"a-shinde\" in Kiswahili?",
            "correctAnswer": "that he or she may conquer",
            "options": [
              "that we may conquer",
              "that ye may conquer",
              "that he or she may conquer",
              "that thou mayst conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"tu-shinde\" in Kiswahili?",
            "correctAnswer": "that we may conquer",
            "options": [
              "that ye may conquer",
              "that we may conquer",
              "that thou mayst conquer",
              "that he or she may conquer"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"that we may conquer\" in Kiswahili?",
            "correctAnswer": "tu-shinde",
            "options": [
              "tu-shinde",
              "u-shinde",
              "a-shinde",
              "m-shinde"
            ],
            "hint": "tu-shinde"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"that ye may conquer\" in Kiswahili?",
            "correctAnswer": "m-shinde",
            "options": [
              "u-shinde",
              "a-shinde",
              "tu-shinde",
              "m-shinde"
            ],
            "hint": "m-shinde"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "u-shinde: that thou mayst conquer",
            "pairs": [
              {
                "left": "u-shinde",
                "right": "that thou mayst conquer"
              },
              {
                "left": "a-shinde",
                "right": "that he or she may conquer"
              },
              {
                "left": "tu-shinde",
                "right": "that we may conquer"
              },
              {
                "left": "m-shinde",
                "right": "that ye may conquer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"that they may conquer\": ___",
            "correctAnswer": "wa-shinde",
            "options": [
              "u-shinde",
              "a-shinde",
              "tu-shinde",
              "wa-shinde"
            ],
            "hint": "Hinde (1904) — The Subjunctive"
          }
        ]
      },
      {
        "id": "swahili-advanced-corpus-3-corpus-mastery-14",
        "title": "Comprehensive Corpus Mastery & Idiomatic Fluency",
        "icon": "ScrollText",
        "description": "Synthesize advanced vocabulary, idioms, and grammatical structures across all primary sources.",
        "tips": "Every lexical entry in this module is drawn verbatim from Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Swahili (Kiswahili) (Kiswahili) in Krapf (1850, 1882), Steere (1870, 1894), Taylor (1891), Madan (1903, 1917), Hinde (1904), Burt (1910) & Johnston (1919) preserves pre-1930 phonological, grammatical, and ethnographic usage across Mombasa, Lamu, Kilifi.",
        "words": [
          {
            "target": "ham-shindi",
            "source": "you do not conquer",
            "pronunciation": "ham-shindi",
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "target": "hawa-shindi",
            "source": "they do not conquer",
            "pronunciation": "hawa-shindi",
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "target": "si-ku-shinda",
            "source": "I did not conquer",
            "pronunciation": "si-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "hu-ku-shinda",
            "source": "thou didst not conquer",
            "pronunciation": "hu-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "ha-ku-shinda",
            "source": "he or she did not conquer",
            "pronunciation": "ha-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "hatu-ku-shinda",
            "source": "we did not conquer",
            "pronunciation": "hatu-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "ham-ku-shinda",
            "source": "you did not conquer",
            "pronunciation": "ham-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "hawa-ku-shinda",
            "source": "they did not conquer",
            "pronunciation": "hawa-ku-shinda",
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "target": "si-ta-shinda",
            "source": "I shall not conquer",
            "pronunciation": "si-ta-shinda",
            "hint": "Hinde (1904) — Negative Future"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja hawa-shindi nyumbani.",
            "source": "The elder mentioned they do not conquer at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ham-shindi\" in Kiswahili?",
            "correctAnswer": "you do not conquer",
            "options": [
              "they do not conquer",
              "I did not conquer",
              "thou didst not conquer",
              "you do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"hawa-shindi\" in Kiswahili?",
            "correctAnswer": "they do not conquer",
            "options": [
              "I did not conquer",
              "thou didst not conquer",
              "they do not conquer",
              "you do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Present"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"si-ku-shinda\" in Kiswahili?",
            "correctAnswer": "I did not conquer",
            "options": [
              "thou didst not conquer",
              "I did not conquer",
              "you do not conquer",
              "they do not conquer"
            ],
            "hint": "Hinde (1904) — Negative Past Perfect"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"I did not conquer\" in Kiswahili?",
            "correctAnswer": "si-ku-shinda",
            "options": [
              "si-ku-shinda",
              "ham-shindi",
              "hawa-shindi",
              "hu-ku-shinda"
            ],
            "hint": "si-ku-shinda"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"thou didst not conquer\" in Kiswahili?",
            "correctAnswer": "hu-ku-shinda",
            "options": [
              "ham-shindi",
              "hawa-shindi",
              "si-ku-shinda",
              "hu-ku-shinda"
            ],
            "hint": "hu-ku-shinda"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "ham-shindi: you do not conquer",
            "pairs": [
              {
                "left": "ham-shindi",
                "right": "you do not conquer"
              },
              {
                "left": "hawa-shindi",
                "right": "they do not conquer"
              },
              {
                "left": "si-ku-shinda",
                "right": "I did not conquer"
              },
              {
                "left": "hu-ku-shinda",
                "right": "thou didst not conquer"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"he or she did not conquer\": ___",
            "correctAnswer": "ha-ku-shinda",
            "options": [
              "ham-shindi",
              "hawa-shindi",
              "si-ku-shinda",
              "ha-ku-shinda"
            ],
            "hint": "Hinde (1904) — Negative Past Perfect"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-15-public-domain-corpus",
    "title": "Unit 15: Archival Monograph & Comparative Lexicon",
    "description": "Master newly extracted Swahili (Kiswahili) vocabulary, dialect forms, and grammatical roots from the historical public-domain monographs and comparative tables.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "swahili-pd-corpus-15-1",
        "title": "Classical Roots & Naming Traditions",
        "icon": "Baby",
        "description": "Study verified Swahili (Kiswahili) headwords and dialect forms extracted from primary public-domain monographs.",
        "tips": "Every item in this skill is grounded directly in the historical Swahili (Kiswahili) linguistic corpus with full phonetic pronunciation guides.",
        "words": [
          {
            "target": "Sezo / Šezo / Tezo",
            "source": "Adze (Standard / Kimvita / Kiamu-Kitikuu)",
            "pronunciation": "se-zo / she-zo / te-zo",
            "hint": "Johnston (1919 #21–21e) & Stigand (1915)"
          },
          {
            "target": "M-shale / M-tale / M-cale",
            "source": "Arrow (Kimvita / Kiamu / Kitikuu)",
            "pronunciation": "m-shale / m-tale / m-cale",
            "hint": "Johnston (1919 #21a–e) & Stigand (1915)"
          },
          {
            "target": "Ny-uni / N-dege",
            "source": "Bird (Classical Kingozi & Kimvita / Standard)",
            "pronunciation": "ny-uni / n-dege",
            "hint": "Steere (1870) & Johnston (1919 #21)"
          },
          {
            "target": "Mw-atzi / Dāmu",
            "source": "Blood (Archaic Kingozi / Standard Kiswahili)",
            "pronunciation": "mw-atzi / da-mu",
            "hint": "Krapf (1882) & Johnston (1919 #21)"
          },
          {
            "target": "I-zūzū / I-sīta / N-dizi",
            "source": "Banana (Kiamu / Kitikuu-Bajuni / Standard)",
            "pronunciation": "i-zuzu / i-sita / n-dizi",
            "hint": "Johnston (1919 #21b–e)"
          },
          {
            "target": "Bakuli (pl. mabakuli)",
            "source": "Large earthenware basin or deep dish",
            "pronunciation": "ba-ku-li",
            "hint": "Madan (1903, p. 21)"
          },
          {
            "target": "Balamwezi / Mbalamwezi",
            "source": "Moonlight / full moonshine",
            "pronunciation": "ba-lamwe-zi / mba-lamwe-zi",
            "hint": "Madan (1903, p. 21)"
          },
          {
            "target": "Bamvua (pl. mabamvua)",
            "source": "Spring tide (syn. maji makuu)",
            "pronunciation": "bamvua",
            "hint": "Madan (1903, p. 22)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja M-shale nyumbani.",
            "source": "The elder mentioned arrow at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Sezo / Šezo / Tezo\" in Kiswahili?",
            "correctAnswer": "Adze (Standard / Kimvita / Kiamu-Kitikuu)",
            "options": [
              "Adze (Standard / Kimvita / Kiamu-Kitikuu)",
              "Arrow (Kimvita / Kiamu / Kitikuu)",
              "Bird (Classical Kingozi & Kimvita / Standard)",
              "Blood (Archaic Kingozi / Standard Kiswahili)"
            ],
            "hint": "Johnston (1919 #21–21e) & Stigand (1915)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Swahili (Kiswahili) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "Sezo / Šezo / Tezo: Adze (Standard / Kimvita / Kiamu-Kitikuu)",
            "pairs": [
              {
                "left": "Sezo / Šezo / Tezo",
                "right": "Adze (Standard / Kimvita / Kiamu-Kitikuu)"
              },
              {
                "left": "M-shale / M-tale / M-cale",
                "right": "Arrow (Kimvita / Kiamu / Kitikuu)"
              },
              {
                "left": "Ny-uni / N-dege",
                "right": "Bird (Classical Kingozi & Kimvita / Standard)"
              },
              {
                "left": "Mw-atzi / Dāmu",
                "right": "Blood (Archaic Kingozi / Standard Kiswahili)"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Swahili (Kiswahili) term for \"Banana (Kiamu / Kitikuu-Bajuni / Standard)\": ___",
            "correctAnswer": "I-zūzū / I-sīta / N-dizi",
            "options": [
              "I-zūzū / I-sīta / N-dizi",
              "Bakuli (pl. mabakuli)",
              "Sezo / Šezo / Tezo",
              "M-shale / M-tale / M-cale"
            ],
            "hint": "Johnston (1919 #21b–e)"
          }
        ]
      },
      {
        "id": "swahili-pd-corpus-15-2",
        "title": "Homestead, Nature & Everyday Expressions",
        "icon": "Users",
        "description": "Expand your command of Swahili (Kiswahili) ecological, kinship, and action vocabulary from the archival corpus.",
        "tips": "Compare classical 19th- and early 20th-century Swahili (Kiswahili) transcriptions with modern standardized orthography.",
        "words": [
          {
            "target": "ku-tuma pesa kwa simu",
            "source": "To send money by mobile phone (M-Pesa)",
            "pronunciation": "ku-tuma pe-sa kwa si-mu",
            "hint": "Kencorpus & Modern Kiswahili Corpus"
          },
          {
            "target": "kituo cha afya cha jamii",
            "source": "Community health center / clinic",
            "pronunciation": "ki-tuo cha afya cha ja-mii",
            "hint": "Kencorpus & Public Health Domain"
          },
          {
            "target": "kilimo cha kisasa cha umwagiliaji",
            "source": "Modern irrigation agriculture",
            "pronunciation": "ki-li-mo cha ki-sa-sa cha umwa-gi-lia-ji",
            "hint": "Kencorpus Agriculture Domain"
          },
          {
            "target": "ku-tiririka / ku-elea",
            "source": "To flow / To float on water",
            "pronunciation": "ku-tiririka / ku-elea",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "ku-vuta / ku-sukuma",
            "source": "To pull / To push",
            "pronunciation": "ku-vuta / ku-sukuma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "ku-futa / ku-pangusa",
            "source": "To wipe / To dust off",
            "pronunciation": "ku-futa / ku-pangusa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "ku-pasua / ku-atua",
            "source": "To split / To cleave wood",
            "pronunciation": "ku-pasua / ku-atua",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          },
          {
            "target": "huduma za serikali mtandaoni",
            "source": "Online digital government services (eCitizen)",
            "pronunciation": "hu-du-ma za se-ri-ka-li mtandao-ni",
            "hint": "Kencorpus Civic Domain"
          }
        ],
        "sentences": [
          {
            "target": "ku-tuma pesa kwa simu",
            "source": "To send money by mobile phone (M-Pesa)"
          },
          {
            "target": "kituo cha afya cha jamii",
            "source": "Community health center / clinic"
          },
          {
            "target": "kilimo cha kisasa cha umwagiliaji",
            "source": "Modern irrigation agriculture"
          },
          {
            "target": "huduma za serikali mtandaoni",
            "source": "Online digital government services (eCitizen)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ku-tuma pesa kwa simu\" in Kiswahili?",
            "correctAnswer": "To send money by mobile phone (M-Pesa)",
            "options": [
              "To send money by mobile phone (M-Pesa)",
              "Community health center / clinic",
              "Modern irrigation agriculture",
              "To flow / To float on water"
            ],
            "hint": "Kencorpus & Modern Kiswahili Corpus"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each verified Swahili (Kiswahili) term from the public-domain corpus to its English meaning:",
            "correctAnswer": "ku-tuma pesa kwa simu: To send money by mobile phone (M-Pesa)",
            "pairs": [
              {
                "left": "ku-tuma pesa kwa simu",
                "right": "To send money by mobile phone (M-Pesa)"
              },
              {
                "left": "kituo cha afya cha jamii",
                "right": "Community health center / clinic"
              },
              {
                "left": "kilimo cha kisasa cha umwagiliaji",
                "right": "Modern irrigation agriculture"
              },
              {
                "left": "ku-tiririka / ku-elea",
                "right": "To flow / To float on water"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Swahili (Kiswahili) term for \"To pull / To push\": ___",
            "correctAnswer": "ku-vuta / ku-sukuma",
            "options": [
              "ku-vuta / ku-sukuma",
              "ku-futa / ku-pangusa",
              "ku-tuma pesa kwa simu",
              "kituo cha afya cha jamii"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-16-open-datasets-modern",
    "title": "Unit 16: Core Swadesh & Everyday Community Vocabulary",
    "description": "Master Swahili (Kiswahili) vocabulary and expressions from open-licensed datasets alongside deep archival lexicon.",
    "icon": "Landmark",
    "skills": [
      {
        "id": "swahili-open-dataset-16-1",
        "title": "Core Swadesh & Cultural Vocabulary",
        "icon": "Heart",
        "description": "Learn core Swahili (Kiswahili) verbs, nouns, and cultural terms integrated from open-web linguistic datasets.",
        "tips": "Focus on high-frequency roots shared across Swahili (Kiswahili) dialects and everyday speech.",
        "words": [
          {
            "target": "Ngoma",
            "source": "A dance. This word is also widely used by up-country natives",
            "pronunciation": "ngo-ma",
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "target": "īva",
            "source": "To steal",
            "pronunciation": "iva",
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "sūmāmā",
            "source": "To stand, stop, be erect",
            "pronunciation": "su-ma-ma",
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "yālā",
            "source": "To sleep",
            "pronunciation": "ya-la",
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "kāā",
            "source": "To sit, remain, abide",
            "pronunciation": "kaa",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "ōnā",
            "source": "To see",
            "pronunciation": "ona",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "pēndā, -tākā",
            "source": "To love, want",
            "pronunciation": "penda ta-ka",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "ācā",
            "source": "To leave off, cease",
            "pronunciation": "aca",
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja īva nyumbani.",
            "source": "The elder mentioned to steal at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"Ngoma\" in Kiswahili?",
            "correctAnswer": "A dance. This word is also widely used by up-country natives",
            "options": [
              "To steal",
              "To stand, stop, be erect",
              "To sleep",
              "A dance. This word is also widely used by up-country natives"
            ],
            "hint": "C. W. Hobley, Bantu Beliefs and Magic (London, 1922 — Public Domain, Glossary pp. 305–308)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"īva\" in Kiswahili?",
            "correctAnswer": "To steal",
            "options": [
              "To stand, stop, be erect",
              "To sleep",
              "To steal",
              "A dance. This word is also widely used by up-country natives"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"sūmāmā\" in Kiswahili?",
            "correctAnswer": "To stand, stop, be erect",
            "options": [
              "To sleep",
              "To stand, stop, be erect",
              "A dance. This word is also widely used by up-country natives",
              "To steal"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To stand, stop, be erect\" in Kiswahili?",
            "correctAnswer": "sūmāmā",
            "options": [
              "sūmāmā",
              "Ngoma",
              "īva",
              "yālā"
            ],
            "hint": "soo-mah-mah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To sleep\" in Kiswahili?",
            "correctAnswer": "yālā",
            "options": [
              "Ngoma",
              "īva",
              "sūmāmā",
              "yālā"
            ],
            "hint": "yah-lah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "Ngoma: A dance. This word is also widely used by up-country natives",
            "pairs": [
              {
                "left": "Ngoma",
                "right": "A dance. This word is also widely used by up-country natives"
              },
              {
                "left": "īva",
                "right": "To steal"
              },
              {
                "left": "sūmāmā",
                "right": "To stand, stop, be erect"
              },
              {
                "left": "yālā",
                "right": "To sleep"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"To sit, remain, abide\": ___",
            "correctAnswer": "kāā",
            "options": [
              "Ngoma",
              "īva",
              "sūmāmā",
              "kāā"
            ],
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ]
      },
      {
        "id": "swahili-open-dataset-16-2",
        "title": "Agriculture, Community & Everyday Life",
        "icon": "TreePine",
        "description": "Practice Swahili (Kiswahili) terms for agriculture, environment, social organization, and daily communication.",
        "tips": "Review how traditional Swahili (Kiswahili) roots extend naturally to modern community, farming, and civic contexts.",
        "words": [
          {
            "target": "cēkā",
            "source": "To laugh",
            "pronunciation": "ce-ka",
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "yūā",
            "source": "To know",
            "pronunciation": "yua",
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "ūlāgā, -ūā",
            "source": "To kill",
            "pronunciation": "u-la-ga ua",
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "ēndā",
            "source": "To go",
            "pronunciation": "enda",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "pā",
            "source": "To give",
            "pronunciation": "pa",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "lā",
            "source": "To eat",
            "pronunciation": "la",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "fā",
            "source": "To die",
            "pronunciation": "fa",
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "target": "cēzā",
            "source": "To dance",
            "pronunciation": "ce-za",
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ],
        "sentences": [
          {
            "target": "Mzee alitaja yūā nyumbani.",
            "source": "The elder mentioned to know at home."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"cēkā\" in Kiswahili?",
            "correctAnswer": "To laugh",
            "options": [
              "To know",
              "To kill",
              "To go",
              "To laugh"
            ],
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"yūā\" in Kiswahili?",
            "correctAnswer": "To know",
            "options": [
              "To kill",
              "To go",
              "To know",
              "To laugh"
            ],
            "hint": "21b–d. Ki-amu / Ki-siu / Ki-pate (Lamu Archipelago) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the English meaning of \"ūlāgā, -ūā\" in Kiswahili?",
            "correctAnswer": "To kill",
            "options": [
              "To go",
              "To kill",
              "To laugh",
              "To know"
            ],
            "hint": "21e. Ki-tikuu (Bajuni) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To kill\" in Kiswahili?",
            "correctAnswer": "ūlāgā, -ūā",
            "options": [
              "ūlāgā, -ūā",
              "cēkā",
              "yūā",
              "ēndā"
            ],
            "hint": "oo-lah-gah ooah"
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say \"To go\" in Kiswahili?",
            "correctAnswer": "ēndā",
            "options": [
              "cēkā",
              "yūā",
              "ūlāgā, -ūā",
              "ēndā"
            ],
            "hint": "eh-ndah"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Kiswahili expression with its English meaning:",
            "correctAnswer": "cēkā: To laugh",
            "pairs": [
              {
                "left": "cēkā",
                "right": "To laugh"
              },
              {
                "left": "yūā",
                "right": "To know"
              },
              {
                "left": "ūlāgā, -ūā",
                "right": "To kill"
              },
              {
                "left": "ēndā",
                "right": "To go"
              }
            ]
          },
          {
            "type": "fill_blank",
            "prompt": "Complete the Kiswahili term for \"To give\": ___",
            "correctAnswer": "pā",
            "options": [
              "cēkā",
              "yūā",
              "ūlāgā, -ūā",
              "pā"
            ],
            "hint": "21a. Ki-mvita (Mombasa) — Sir H. H. Johnston, Comparative Study of the Bantu Languages (1919, Vol. I, pp. 131–140)"
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-17-krapf-1882-complete",
    "title": "Unit 17: Krapf (1882) Suahili Dictionary — Outline of Grammar, 7 Salutations, Marine Songs, Calendar & Coastal Taxonomies",
    "description": "Master the complete grammatical, lexical, and ethnographic wealth of Rev. Dr. L. Krapf's 1882 'A Dictionary of the Suahili Language' (pp. i–xl, 1–431): the 7 Modes of Salutation (p. xx), 8 Noun Classes & Post-Prefixes, Kimvita verb paradigms & enclitic objects (-mi, -we, -e, -sui, -nui, -o), 12 Swahili & 12 Wanika Months, Siku ya Muaka (Nairuz), 24-hour time divisions, Marine & Lover's Songs, and coastal taxonomies.",
    "icon": "Compass",
    "skills": [
      {
        "id": "swahili-krapf-1882-salutations-grammar-calendar",
        "title": "Krapf (1882) 7 Salutations, Post-Prefixes, Enclitic Pronouns & Coastal Calendar",
        "icon": "MessageCircle",
        "description": "Learn the 7 hierarchical salutations (p. xx), Kimvita passive -oa and enclitic object suffixes (p. xxx), the 12 Swahili lunar months (pp. 223–224), 6 monsoon seasons (p. 248), and 24-hour time divisions (pp. 252–253, 318).",
        "words": [
          {
            "target": "Hu jambo? — Si jambo • U hali gani? — Njema / Mzima • Subalkheri! • Masalkheri! • Nashika miguu / Marahaba!",
            "source": "Seven Modes of Salutation (Krapf 1882, p. xx): How art thou? — I am well • What is thy state? — Good/Well • Good morning! • Good evening! • I clasp thy feet (inferior to superior) / Welcome!",
            "pronunciation": "hu ja-mbo — si ja-mbo / su-bal-khe-ri / ma-sal-khe-ri / na-shi-ka mi-guu — ma-ra-ha-ba",
            "partOfSpeech": "phrase",
            "example": "Kua heri ya ku onana! — Amani ya Mungu! (Farewell till we meet again! — Peace of God! p. xx)"
          },
          {
            "target": "ni-pá-mi • na-ku-pendá-we • na-m-pendá-e • a-tu-pendá-sui • na-wa-pendá-nui • na-wa-pendá-o",
            "source": "Kimvita enclitic personal pronouns suffixed to the verb (Krapf 1882, p. xxx): give to me • I love thee • I love him • he loves us • I love you (pl.) • I love them",
            "pronunciation": "ni-pa-mi / na-ku-pe-nda-we / na-m-pe-nda-e / a-tu-pe-nda-sui / na-wa-pe-nda-nui / na-wa-pe-nda-o",
            "partOfSpeech": "verb",
            "example": "Ambai kuamba apenda / ambao kuamba wapenda (Analytic relative 'who loves / who love', p. xxv)"
          },
          {
            "target": "Mfungúo wa mosi (Shaual) ... Mfungúo wa kenda (Rajab) • Mlisho / Shabani (10th) • Ramatháni (11th) • Hajji (12th)",
            "source": "Twelve Swahili/Arabic Lunar Months reckoned from the breaking of the Ramadan fast (Krapf 1882, pp. 223–224, 238)",
            "pronunciation": "m-fu-nguo wa mo-si ... m-fu-nguo wa ke-nda / m-li-sho / ra-ma-tha-ni / ha-jji",
            "partOfSpeech": "noun",
            "example": "Siku ya muaka / Neruz (Solar New Year ~Aug. 24 reckoned in 10-day muóngo decades, pp. 258, 338)"
          },
          {
            "target": "Musimi / Kazkazi (Nov–Feb) • Masíka (Mar–May) • Kipúpue (Jun–Aug) • Damani / Muaka (Aug–Oct) • Kussi • Tanga mbili / Malelezi",
            "source": "Six Coastal Seasons & Monsoons and Three Annual Harvests: kilimo ja muaka, kilimo ja mjō (July–Sept), kilimo ja fuli (Krapf 1882, pp. 230, 248)",
            "pronunciation": "mu-si-mi ka-zka-zi / ma-si-ka / ki-pu-pue / da-ma-ni / ku-ssi / ta-nga mbi-li ma-le-le-zi",
            "partOfSpeech": "noun",
            "example": "Wingu la kussi lajā na mvúa (A south-wind cloud comes with rain, p. 187)"
          },
          {
            "target": "elfágiri • subukhi mbitimbiti • mafungulia ngombe (8 AM) • athóhuri (12 PM) • elásiri (3:30 PM) • magháribi (6 PM) • esha (7–8 PM)",
            "source": "Swahili 24-Hour Daily Time Divisions & 12-Hour Sunset Clock (Krapf 1882, pp. 248, 252–253, 318)",
            "pronunciation": "el-fa-gi-ri / su-bu-khi mbi-ti-mbi-ti / ma-fu-ngu-lia ngo-mbe / a-tho-hu-ri / e-la-si-ri / ma-gha-ri-bi / e-sha",
            "partOfSpeech": "noun",
            "example": "Saa ya mosi (7 PM or 7 AM), saa ya sita (midnight or noon), saa ya ethnáshera (6 PM or 6 AM, p. 318)"
          }
        ],
        "sentences": [
          {
            "target": "Mombása kúlā kua ku papassa, hakuna teári kama Unguja.",
            "source": "At Mombasa you eat by groping (hard toil), nothing is ready-made like at Zanzibar. (Krapf 1882, p. 241)",
            "pronunciation": "Mombasa | to-eat | by | groping | there-is-not | ready | like | Zanzibar"
          },
          {
            "target": "Ndaulía si ulinzi, bora ni ku enda muegniéwe; Neno ukatálo ndílo Mungu afaniálo.",
            "source": "'Look out for me' is no watching, it is better to go yourself; the thing thou refusest is the very thing God brings about. (Krapf 1882, pp. 274, 277)",
            "pronunciation": "look-for-me | is-not | watching | better | is | to-go | yourself"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Krapf's Outline of Grammar (1882, p. xx), what salutation does an inferior address to a superior, and what is the reply?",
            "correctAnswer": "Nashika miguu ('I clasp thy feet') — Reply: Marahaba! or Ahsanta!",
            "options": [
              "Nashika miguu ('I clasp thy feet') — Reply: Marahaba! or Ahsanta!",
              "Hodi! hodi! — Reply: Karibu!",
              "Kua heri — Reply: Amani ya Mungu",
              "Sumile! — Reply: Similla!"
            ],
            "hint": "Literally 'I lay hold of thy feet' (Mode 5 of the 7 Salutations on p. xx)."
          },
          {
            "type": "fill_blank",
            "prompt": "In Krapf's Kimvita grammar (1882, p. xxx), the 1st person plural enclitic object suffix attached to the end of a verb ('he loves us' = a-tu-pendá-___) is ___.",
            "correctAnswer": "sui",
            "options": [
              "sui",
              "nui",
              "mi",
              "we"
            ],
            "hint": "Derived from suisui ('we/us'): -mi (1s), -we (2s), -e (3s), -sui (1p), -nui (2p), -o (3p)."
          }
        ]
      },
      {
        "id": "swahili-krapf-1882-songs-taxonomies-topography",
        "title": "Krapf (1882) Marine & Lover's Songs, Coastal Taxonomies & Mombasa Topography",
        "icon": "Compass",
        "description": "Explore the verbatim songs (Muakaje, Killefi, Mguáme, Simba ya Mungu), 5 coconut & 8 rice stages, 6 handful measures, 13 ornaments, and Mombasa/Rabai historical ethnography.",
        "words": [
          {
            "target": "1. kidáka • 2. kitále • 3. dafu • 4. kórŏma • 5. nasi (nazi)",
            "source": "Five Coconut Growth Stages from tiny bud on the pande stalk to fully ripe nut (Krapf 1882, p. 273 s.v. Nasi; 40–60 sold for 1/4 dollar at Mombasa)",
            "pronunciation": "ki-da-ka / ki-ta-le / da-fu / ko-ro-ma / na-zi",
            "partOfSpeech": "noun",
            "example": "Ajábu ni mtáūsi, ku taúa nazi mbófu (The wonder is the fastidious chooser who picks a rotten coconut, p. 254)"
          },
          {
            "target": "1. óya • 2. dópa (jópa / topa) • 3. koffi (2 makoffi = 1 kebába = 4 nióya) • 4. konsi • 5. mgnánda • 6. ngúmi",
            "source": "Six Handful & Fist Measures of Grain (Krapf 1882, p. 291 s.v. O'ya [2]; plus 1 farasila = 12 manni = 35 rotteli, p. 316)",
            "pronunciation": "o-ya / do-pa / ko-ffi / ko-nsi / m-gna-nda / ngu-mi",
            "partOfSpeech": "noun",
            "example": "1 pishi = 4 kebába; 12 pishi = 72 rotteli (p. 316)"
          },
          {
            "target": "jánga • kipini • ndónia • kikúku • fúja • kekée • mtóri • tuku • majáji • beléshi • furúngu • jóa • mbiu",
            "source": "Thirteen Traditional Swahili Ornaments (Krapf 1882, pp. 409–410 s.v. Urémbo) & Seven Bead Types (ushanga wa kike, ushanga wa kiume, kadunduguru, kiptingo, nili, murtutu, bubu, p. 410)",
            "pronunciation": "ja-nga / ki-pi-ni / ndo-nia / ki-ku-ku / fu-ja / ke-kee / m-to-ri / fu-ru-ngu",
            "partOfSpeech": "noun",
            "example": "Wakamba watungíwa wao ushanga (For the Wakamba their beads are strung, p. 231)"
          },
          {
            "target": "Mvita (Shehe Mvita) • Kongowéa (Makame iwe / Kiwemtu / Mku gnombe) • Kiziwáni (Kin.) • Kidiamóni (Kik.) • Ngoméni (Kisamb.) • Worra Mombása (Galla)",
            "source": "Names & Founding Legends of Mombasa (Krapf 1882, pp. 119, 240–241, 270, 365: Kiwialía cha Mwita native-born, Kikulía cha Mwita raised there, Teléa newcomer)",
            "pronunciation": "m-vi-ta / she-he m-vi-ta / ko-ngo-we-a / ki-zi-wa-ni / ki-dia-mo-ni / ngo-me-ni",
            "partOfSpeech": "noun",
            "example": "Takaúngu (Mazrui refuge after Imam of Muscat took Mombasa, p. 355) • Siyu (chief seat of ancient Suahili learning on Patta, p. 343)"
          },
          {
            "target": "Mjūkū (grandchild) → Mtūkū / Kitūkū (great-grandchild) → Mlikū (great-great-grandchild, 4th generation)",
            "source": "Four Generations of Descendants in Swahili Kinship (Krapf 1882, pp. 231, 237, 256)",
            "pronunciation": "m-ju-kuu / m-tu-kuu ki-tu-kuu / m-li-kuu",
            "partOfSpeech": "noun",
            "example": "Mjómba (maternal uncle; pl. Wajomba = the Swahili, p. 230)"
          }
        ],
        "sentences": [
          {
            "target": "Atáni ku takábari! muangalie Mguáme... ulimengu una hadáa: sasa mti wa mnázi huangúka ukiináma.",
            "source": "Cease from pride! Behold Mguáme... the world is full of deceit: now the tall coconut tree falls bowing low. (Krapf 1882, p. 256)",
            "pronunciation": "cease | to-be-proud | behold-him | Mguame | world | has | deceit | now | tree | of | coconut | falls | bowing"
          },
          {
            "target": "Killéfi mkáta jombo, mkata na mlingóte, azama na wátu wóte, hápŏni mtu mmója.",
            "source": "The Killefi breaker cuts up the vessel, cuts it up with the mast, and sinks with all hands, not a single person escapes. (Krapf 1882, p. 183)",
            "pronunciation": "Killefi | cutter-of | vessel | cutter | with | mast | sinks | with | people | all | escapes-not | person | one"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "According to Krapf (1882, pp. 229, 250, 271 s.v. Misúngu / Mzungu), why did the Swahili call Europeans 'Wazungu'?",
            "correctAnswer": "From mzungu ('understanding, cleverness, skill, strange/wondrous things'), because their minds and manufactures move round everything with skill — not from skin colour",
            "options": [
              "From mzungu ('understanding, cleverness, skill, strange/wondrous things'), because their minds and manufactures move round everything with skill — not from skin colour",
              "Because they arrived during the Kusi monsoon",
              "From the Arabic word for silver coins",
              "From the name of an island near Patta"
            ],
            "hint": "Krapf notes (p. 229): 'Hence the Suahili call the Europeans Wazungu from their sharpness of understanding, and not from the colour of their skin.'"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Mombasa inhabitant status or historical site in Krapf (1882) with its meaning:",
            "correctAnswer": "Kiwialía cha Mwita: Native-born citizen of Mombasa (p. 365)",
            "pairs": [
              {
                "left": "Kiwialía cha Mwita",
                "right": "Native-born citizen of Mombasa (p. 365)"
              },
              {
                "left": "Kikulía cha Mwita",
                "right": "Person brought up at Mombasa from youth (p. 365)"
              },
              {
                "left": "Teléa",
                "right": "Adult newcomer who settled at Mombasa later in life (p. 365)"
              },
              {
                "left": "Siyu (on Patta)",
                "right": "Chief seat of ancient Suahili learning (p. 343)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-madan-1902-1905",
    "title": "Unit 11: Madan (1902 & 1905) Zanzibar Swahili — Root Families, Dhow Navigation & Concord Mastery",
    "description": "Master Zanzibar Swahili morphological root families (-pend-, -shind-, -za-, -tu), Indian Ocean dhow navigation & tidal vocabulary, 4-generation kinship terms, and Nasal vs. Non-Nasal concords from A. C. Madan's 1902 Dictionary and 1905 Grammar.",
    "icon": "Compass",
    "skills": [
      {
        "id": "swahili-madan-roots-concords",
        "title": "Root Derivation Families (-pend-, -shind-, -za-) & Alliterative Concord",
        "icon": "BookOpen",
        "description": "Learn how Zanzibar Swahili builds entire families of nouns and verbs from a single root and distinguishes Nasal (adjective) from Non-Nasal (pronoun/verb) concords (Madan 1902, pp. vii–xv & 1905, §§ 23–65).",
        "tips": "Adjectives proper take Nasal (Noun-Set) prefixes (m-, wa-, mi-, ma-, ki-, vi-, n-, u-), while demonstratives, possessives, -a ('of'), and verbs take Non-Nasal (Pronoun-Set) prefixes (a-/yu-, wa-, u-, i-, li-, ya-, ki-, vi-, i-, zi-).",
        "words": [
          {
            "target": "mpenda • mpendaji • mpenzi • mpendwa • mapenzi • upendo • upendano",
            "source": "lover • habitual lover • darling/beloved • loved one • affection/desire • love • mutual love",
            "pronunciation": "m-pehn-dah • m-pehn-dah-jee • m-pehn-zee • m-pehn-dwah • mah-pehn-zee • oo-pehn-doh • oo-pehn-dah-noh",
            "hint": "Derived from the root -pend- ('love', Madan 1902, p. viii & 1905, § 63)"
          },
          {
            "target": "mshinda • mshinde • mshindani • ushindi • mashindano",
            "source": "conqueror • vanquished one • competitor/rival • victory • competition/race",
            "pronunciation": "m-sheen-dah • m-sheen-deh • m-sheen-dah-nee • oo-sheen-dee • mah-sheen-dah-noh",
            "hint": "Derived from the root -shind- ('overcome/conquer', Madan 1905, § 63)"
          },
          {
            "target": "mzazi (mzaa) • mzao (mazao) • kizazi • uzazi • mzalia",
            "source": "parent • offspring/produce • generation • parenthood • native-born resident",
            "pronunciation": "m-zah-zee • m-zah-oh • kee-zah-zee • oo-zah-zee • m-zah-lee-ah",
            "hint": "Derived from the root -za- ('bear/beget', Madan 1905, § 63)"
          },
          {
            "target": "viendavyo na visivyokwenda • bithaa zijazo na zitokazo",
            "source": "things movable and immovable (animate & inanimate) • imports and exports",
            "pronunciation": "vee-ehn-dah-vyoh nah vee-see-vyoh-kwehn-dah • bee-thah-ah zee-jah-zoh nah zee-toh-kah-zoh",
            "hint": "Relative verbal nouns in Zanzibar Swahili (Madan 1905, § 65 & 1902, p. 187)"
          },
          {
            "target": "mimi / miye / nami / ndimi • jinalo, nyumbaye, babazo",
            "source": "I / me / with me / it is I • thy name (jina lako), his/her house (nyumba yake), thy ancestors (baba zako)",
            "pronunciation": "mee-mee / mee-yeh / nah-mee / n-dee-mee • jee-nah-loh, nyoom-bah-yeh, bah-bah-zoh",
            "hint": "4-way personal pronouns & enclitic possessives (Madan 1905, §§ 79–83, 97)"
          },
          {
            "target": "kujienda • kujiendea • kujikalia • kujiona • kujigonjweza",
            "source": "go off by itself • walk for one's own pleasure • sit idle by oneself • be conceited • pretend to be ill",
            "pronunciation": "koo-jee-ehn-dah • koo-jee-ehn-deh-ah • koo-jee-kah-lee-ah • koo-jee-oh-nah • koo-jee-gohn-jweza",
            "hint": "Idiomatic reflexive verbs with ji- (Madan 1905, § 226)"
          }
        ],
        "sentences": [
          {
            "target": "Vitu vile vyangu vilivyo vizuri viwe vyako, vyote vinne.",
            "source": "All those four fine things of mine, let them be yours."
          },
          {
            "target": "Malezi halisi ni kumsitawisha killa mtu utu wake wote pamoja, akili, moyo, mwili, roho.",
            "source": "True education is to develop in every person their whole humanity together: intellect, heart, body, and spirit."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In A. C. Madan's Swahili (Zanzibar) Grammar (1905, § 63), which derived noun from -shind- ('conquer') means 'the vanquished/defeated person' (with passive suffix -e)?",
            "correctAnswer": "mshinde",
            "options": [
              "mshindaji",
              "mshinde",
              "mshindani",
              "ushindi"
            ],
            "hint": "Compare mpendwa / mshinde (passive derivative)"
          },
          {
            "type": "multiple_choice",
            "prompt": "What does the idiomatic reflexive verb 'kujigonjweza' mean in Madan's Grammar (1905, § 226)?",
            "correctAnswer": "To pretend to be ill / feign sickness",
            "options": [
              "To heal oneself",
              "To pretend to be ill / feign sickness",
              "To walk for one's own pleasure",
              "To cough unintentionally"
            ],
            "hint": "ji- (reflexive) + gonjw- (sick) + -eza (causal)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Zanzibar Swahili grammatical form from Madan (1902 & 1905) with its English meaning:",
            "correctAnswer": "viendavyo na visivyokwenda: Movables and immovables",
            "pairs": [
              {
                "left": "viendavyo na visivyokwenda",
                "right": "Movables and immovables"
              },
              {
                "left": "bithaa zijazo na zitokazo",
                "right": "Imports and exports"
              },
              {
                "left": "jinalo / nyumbaye",
                "right": "Thy name / his or her house"
              },
              {
                "left": "kujiendea",
                "right": "To walk for one's own pleasure"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-madan-maritime-kinship-customs",
        "title": "Zanzibar Dhow Navigation, Tidal Cycles, 4-Generation Kinship & Customary Life",
        "icon": "Anchor",
        "description": "Explore Indian Ocean dhow architecture, tacking & monsoon terms, spring vs. neap tides, four generations of descendants, and communal customs from Madan's 1902 English-Swahili Dictionary.",
        "tips": "In Zanzibar maritime Swahili (Madan 1902, pp. 402, 409, 452), goshi is the tack-rope at the prow (so upande wa goshini is the windward/weather side) and demani is the sheet-rope aft (so upande wa demani is the lee side).",
        "words": [
          {
            "target": "Gubeti (omo) • Shetri (tezi) • Feuli • Ngama • Farumi",
            "source": "Prow/bow • Stern • Poop-deck cabin • Hold/bilge • Ballast",
            "pronunciation": "goo-beh-tee • sheh-tree • feh-oo-lee • n-gah-mah • fah-roo-mee",
            "hint": "Parts of a Swahili trading dhow (Madan 1902, pp. 28, 33, 363, 390)"
          },
          {
            "target": "Upande wa goshini vs. Upande wa demani • Kupiga mbisho vs. Kukisi matanga",
            "source": "Weather (windward) side vs. Lee side • To tack against the wind vs. To wear ship / shift sail",
            "pronunciation": "oo-pahn-deh wah goh-shee-nee vs. deh-mah-nee • koo-pee-gah m-bee-shoh",
            "hint": "Dhow sailing maneuvers in Madan (1902, pp. 216, 402, 452)"
          },
          {
            "target": "Maji ya bamvua vs. Maji mafu (maji ya mbande)",
            "source": "High spring tides vs. Low neap tides ('dead waters')",
            "pronunciation": "mah-jee yah bahm-voo-ah vs. mah-jee mah-foo",
            "hint": "Zanzibar tidal cycle (Madan 1902, p. 409 s.v. Tide)"
          },
          {
            "target": "Mjukuu → Kijukuu → Kilembwe → Kining'ina",
            "source": "Grandchild → Great-grandchild → Great-great-grandchild → 5th-generation descendant",
            "pronunciation": "m-joo-koo-oo • kee-joo-koo-oo • kee-lehm-bweh • kee-neeng-ee-nah",
            "hint": "Four generations of descendants (Madan 1902, p. 160 s.v. Grandchild)"
          },
          {
            "target": "Ujima • Kula bia / Kula kikoa • Pukusa (mapukusa)",
            "source": "Neighbourly mutual-aid work bee • Cooperative potluck / rotating feast • Handsel / goodwill bonus gift in trade",
            "pronunciation": "oo-jee-mah • koo-lah bee-ah / kee-koh-ah • poo-koo-sah",
            "hint": "Zanzibar social and commercial customs (Madan 1902, pp. 59, 166, 283)"
          },
          {
            "target": "Mbirambi zako! — Binuru! • Barua ya tanzia • Hana",
            "source": "Condolence salutation & reply • Letter of condolence • Mourning gathering",
            "pronunciation": "mbee-rahm-bee zah-koh — bee-noo-roo • bah-roo-ah yah tahn-zee-ah",
            "hint": "Customary bereavement etiquette (Madan 1902, p. 69 s.v. Condolence)"
          }
        ],
        "sentences": [
          {
            "target": "Haba na haba hujaza kibaba; maji yaliyomwagika hayazoeleki.",
            "source": "Little by little fills the measure; spilt water cannot be gathered up."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Zanzibar maritime Swahili (Madan 1902, p. 409 s.v. Tide), what is the term for high spring tides as opposed to neap tides (maji mafu / maji ya mbande)?",
            "correctAnswer": "Maji ya bamvua",
            "options": [
              "Maji ya bamvua",
              "Maji ya rasharasha",
              "Upande wa demani",
              "Farumi ya ngama"
            ],
            "hint": "Bamvua = spring tide"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Zanzibar Swahili kinship or cultural term from Madan (1902) with its meaning:",
            "correctAnswer": "Kilembwe: Great-great-grandchild",
            "pairs": [
              {
                "left": "Kilembwe",
                "right": "Great-great-grandchild"
              },
              {
                "left": "Ndugu kunyonya",
                "right": "Foster-sibling (milk-brother/sister)"
              },
              {
                "left": "Pukusa",
                "right": "Goodwill bonus gift closing a bargain"
              },
              {
                "left": "Ujima",
                "right": "Neighbourly mutual-aid work bee"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-taylor-1891-aphorisms-appendix",
    "title": "Unit 17: Taylor (1891) African Aphorisms — Archaic Tenses (Appendix A), -ngwa Alienation (Appendix B), Poetic Lexicon & Historical Personages",
    "description": "Master the 6 classical Swahili tenses of Appendix A (-kali, Sime-, -ngwa-, -meze-, Old Preterites, -siku-), the -ngwa Possessive Pronoun of Alienation (Appendix B), the 5 monsoon seasons, the 10 marks of beauty, and rare Kingozi/Kimvita vocabulary from Rev. W. E. Taylor's 1891 monograph.",
    "icon": "ScrollText",
    "skills": [
      {
        "id": "swahili-taylor-1891-appendix-a-b",
        "title": "Appendix A (Six Classical Tenses) & Appendix B (-ngwa Alienation)",
        "icon": "BookOpen",
        "description": "Learn the six classical Swahili verb tenses (pp. 164–166) and the enclitic possessive pronoun -ngwa ('somebody else's', pp. 166–167) documented by Rev. W. E. Taylor.",
        "tips": "In Taylor (1891, Appendix B, pp. 166–167), suffixing -ngwa to a noun means '-a wat\\'u' ('belonging to somebody else'): shokangwa (somebody else's axe), jembengwa (somebody else's hoe), kitingwa (somebody else's stool), chanongwa (somebody else's wooden platter), kinungwa (somebody else's mortar).",
        "words": [
          {
            "target": "nikalikwenda • nikalipo (near/rest) • akaliko (far/goal) • nikalimo (within/upon)",
            "source": "I am still going • while I am still here • while he is still there • while I am still within (Appendix A.I: The 'Yet' Tense -kali)",
            "pronunciation": "ni-ka-li-kwen-da / ni-ka-li-po / a-ka-li-ko / ni-ka-li-mo",
            "hint": "Taylor (1891, Appendix A.I, p. 164; cf. Nyika -kari/-chere, Chaga -kere)"
          },
          {
            "target": "Mbona hukwenda? — Simekwenda? • Ngwakupa! (Ngwalizamisha!) • Bwana amezetwambia",
            "source": "Why did you not go? — Have I not gone? (= I have gone!) • May God give thee! • The Lord hath told us (Appendix A.II–IV)",
            "pronunciation": "si-me-kwen-da / ngwa-ku-pa / a-me-ze-twam-bi-a",
            "hint": "Negative Perfect Sime-, Precatory -ngwa-, and Poetical Perfect -meze- (Taylor 1891, p. 165)"
          },
          {
            "target": "zijile, yaanzile • nalilele, alijile • ijuziye, nizingiye • uumbushile, sikiziye • yasee, yuwene, p'ete, vyembete",
            "source": "they came, they began • I had slept, he had come • it behoved, I wandered • it was disfigured, heard • they remained, he has seen, I have got, they adhered",
            "pronunciation": "zi-ji-le / na-li-le-le / i-ju-zi-ye / si-ki-zi-ye / yu-we-ne / p'e-te",
            "hint": "Six morphological groups of Old and Poetic Preterites (Taylor 1891, Appendix A.V, p. 166)"
          },
          {
            "target": "Nalim'shauri mama asikunijibu neno",
            "source": "I consulted my mother without her answering me a word (Appendix A.VI: The -siku- Negative Subordinated Resultant)",
            "pronunciation": "na-lim-shau-ri ma-ma a-si-ku-ni-ji-bu ne-no",
            "hint": "Taylor (1891, § 186 & Appendix A.VI, p. 166)"
          },
          {
            "target": "shokangwa • jembengwa • kitingwa • chanongwa • kinungwa",
            "source": "some other person's axe (shoka la wat'u) • some one else's hoe • stool • wooden platter • mortar",
            "pronunciation": "sho-kang-wa / jem-beng-wa / ki-ting-wa / cha-nong-wa / ki-nung-wa",
            "hint": "Possessive Pronoun of Alienation -ngwa (Taylor 1891, Appendix B, pp. 166–167 & § 127)"
          }
        ],
        "sentences": [
          {
            "target": "K'ambiwa, 'Shokangwa ni shoka la wat'u: liate, lielekezwe.'",
            "source": "I was told, 'Shokangwa means somebody else's axe: leave it alone, let it be put away.' (Taylor 1891, § 127 & Appendix B, p. 167)"
          },
          {
            "target": "Usitukane wakunga na uzazi ungalipo.",
            "source": "Insult not the midwives while childbearing still continues here. (Taylor 1891, § 562 & Appendix A.I, p. 164)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Rev. W. E. Taylor's Appendix B (1891, pp. 166–167), what does the enclitic suffix '-ngwa' in 'shokangwa, jembengwa, kitingwa, chanongwa, kinungwa' signify?",
            "correctAnswer": "Possessive Pronoun of Alienation ('-a wat\\'u' — belonging to some other person)",
            "options": [
              "Possessive Pronoun of Alienation ('-a wat\\'u' — belonging to some other person)",
              "Diminutive plural prefix",
              "Future negative tense marker",
              "Passive instrumental suffix"
            ],
            "hint": "Shokangwa = shoka la wat'u ('somebody else's axe', § 127)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Swahili tense from Taylor (1891, Appendix A, pp. 164–166) with its grammatical function:",
            "correctAnswer": "-kali (nikalikwenda): The 'Yet' Tense (affirmative counterpart to -ja-)",
            "pairs": [
              {
                "left": "-kali (nikalikwenda)",
                "right": "The 'Yet' Tense (affirmative counterpart to -ja-)"
              },
              {
                "left": "Sime- (Simekwenda?)",
                "right": "Negative Perfect used in rhetorical retorts ('Have I not gone?')"
              },
              {
                "left": "-ngwa- (Ngwakupa!)",
                "right": "Precatory Tense ('May God give thee!')"
              },
              {
                "left": "-meze- (Bwana amezetwambia)",
                "right": "Poetical Perfect (< kumala) for octosyllabic metre"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-taylor-1891-rarer-words-history",
        "title": "Supplementary Indexes 1–3: Rare Kingozi/Kimvita Lexicon, Seasons, Beauty & Historical Personages",
        "icon": "Award",
        "description": "Explore the 145 rarer Swahili words (pp. 175–177), the 5 monsoon/rain seasons (§ 128), the 10 marks of Swahili beauty (§ 425), and the 66 historical figures and places (pp. 179–180) in Taylor (1891).",
        "tips": "Supplementary Index 3 (pp. 179–180) documents Mombasa poet Bwana Muyaka bin Mwinyi-Haji al Ghasâni (fl. 1796–1840), Mwalim Sikujua, Bwana Hemedi bin Muhammad, Queen Mwana Mkisi of Kongowea, Queen Mwana Aziza of Zanzibar/Lamu, Mwana Masuru and Bwana Mataka of Siu, and Mngwame of Vumba.",
        "words": [
          {
            "target": "Kaskazi (Nov.–Mar.) • Mwaka / Masika (Mar.–May) • Kusi (May–Oct.) • Mchoo (Sept.) • Vuli (Oct.–Nov.)",
            "source": "The 5 Swahili agricultural and maritime monsoon seasons",
            "pronunciation": "kas-ka-zi / mwa-ka ma-si-ka / ku-si / m-cho-o / vu-li",
            "hint": "Taylor (1891, § 128 fn., p. 28)"
          },
          {
            "target": "Shingo ya upanga • K'onde za mikono • Mawele ya k'ombe • Mato ya kikombe • P'ua ya upanga • Meno ya t'ende • Nywele za singa • Nyushi za mwezi mwandamo • Mivungu ya nyayo • Mwendo wa maringo",
            "source": "The 10 classical marks of Swahili female beauty (neck, forearms, breasts, eyes, nose, teeth, hair, eyebrows, insteps, gait)",
            "pronunciation": "shin-go ya u-pan-ga / ma-to ya ki-kom-be / nyu-shi za mwe-zi mwan-da-mo",
            "hint": "Taylor (1891, § 425 fn., p. 101)"
          },
          {
            "target": "wafalaguzi (sages) • sambo (vessel) • mwongo (company/guild) • kuola / maoleo (ordain destiny) • kuuya (return) • k'ondo (war/strife) • ago (camp) • kiselema (worn hoe)",
            "source": "Rare Kingozi, Kimvita & Kiamu words from Supplementary Index 1 (pp. 175–177)",
            "pronunciation": "wa-fa-la-gu-zi / sam-bo / mwon-go / ma-o-le-o / ku-u-ya / k'on-do / a-go / ki-se-le-ma",
            "hint": "Taylor (1891, Supplementary Index 1, pp. 175–177)"
          },
          {
            "target": "Bwana Muyaka bin Mwinyi-Haji al Ghasâni • Mwalim Sikujua • Bwana Hemedi bin Muhammad • Mwana Mkisi (Kongowea) • Mwana Aziza • Bwana Mataka (Siu)",
            "source": "Historical coastal poets, scholars, queens, and rulers documented in Taylor (1891, pp. ix–x, 179–180)",
            "pronunciation": "bwa-na mu-ya-ka / mwa-lim si-ku-ju-a / mwa-na m-ki-si / mwa-na a-zi-za / bwa-na ma-ta-ka",
            "hint": "Taylor (1891, Preface pp. ix–x & Supplementary Index 3, pp. 179–180)"
          }
        ],
        "sentences": [
          {
            "target": "Ahadi na miithaki, mwenyi kumpa mwenziwe, ni deni katika haki, na kulipa ijuziye.",
            "source": "A promise and a covenant, when one gives it to his fellow, is a debt in justice, and it behoves to pay it. (Bwana Muyaka in Taylor 1891, § 6, p. 2)"
          },
          {
            "target": "Kilimia kikizama kwa jua huzuka kwa mvua; kikizama kwa mvua huzuka kwa jua.",
            "source": "When the Pleiades set in sunny weather they rise in rain; when they set in rain they rise in sun. (Taylor 1891, § 149, p. 32)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In Taylor (1891, § 128 fn., p. 28), what are the five traditional Swahili agricultural and monsoon seasons?",
            "correctAnswer": "Kaskazi, Mwaka (Masika), Kusi, Mchoo, and Vuli",
            "options": [
              "Kaskazi, Mwaka (Masika), Kusi, Mchoo, and Vuli",
              "Jilal, Kalil, Gu, Hagar, and Dair",
              " Chululu, Lu, Pi, and Tse",
              "Shokangwa, Jembengwa, Kitingwa, and Kinungwa"
            ],
            "hint": "See footnote to Proverb § 128 (p. 28)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each rare classical Swahili term from Taylor (1891, Supplementary Index 1, pp. 175–177) with its meaning:",
            "correctAnswer": "sambo (samboye): Vessel / dhow (Kingozi poetic word for chombo)",
            "pairs": [
              {
                "left": "sambo (samboye)",
                "right": "Vessel / dhow (Kingozi poetic word for chombo)"
              },
              {
                "left": "kuola (maoleo / k'olewa)",
                "right": "To write / ordain destiny (by God)"
              },
              {
                "left": "kuuya (akauya)",
                "right": "To return / go back (= kurudi)"
              },
              {
                "left": "kiselema",
                "right": "A worn-down, sharp-tempered hoe that outworks a new hoe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swahili-unit-madan-1917-vocabulary",
    "title": "Unit 18: Madan (1917) English-Swahili Vocabulary — Bishop Steere's Sarufi Definitions, Reversive '-ua' Verbs, Maritime Dhows, Tides & Coastal Idioms",
    "description": "Master Bishop Steere's 13 bilingual Swahili grammatical definitions (Sarufi, p. 11), reversive -ua verbs, marriage voice derivations, dhow/tide/coral taxonomies, calico grades, arithmetic terms, and 120+ conversational idioms from A. C. Madan's 1917 English-Swahili Vocabulary.",
    "icon": "BookOpen",
    "skills": [
      {
        "id": "swahili-madan-1917-sarufi-grammar-idioms-18-1",
        "title": "Bishop Steere's 13 Sarufi Definitions, Reversive '-ua' Verbs & Idiomatic Clauses",
        "icon": "Sparkles",
        "description": "Study the 13 Swahili grammatical definitions from Steere's Grammar in Swahili (p. 11) and key morphological and syntactic idioms across Madan (1917, pp. 1–56).",
        "tips": "In Madan (1917, p. 11), Bishop Steere defines all 13 parts of speech in Swahili (e.g., conj. = Ungo la kuungia maneno; rel. = Rejeo, neno la kurejea kwa neno lingine, kama -ye, -o, -cho); on pp. 33 & 51–52, Madan contrasts specific reversive verbs in -ua (fungua, sindua, zibua, fumbua, funua, shonua, kunjua, fumua).",
        "words": [
          {
            "target": "Súrufi: Neno la kutenda (act.) ao kuwa na kutendeka (neut.) • Jina la kitu ao jambo • Ungo la kuungia maneno • Rejeo (-ye, -o, -cho) • Neno la kukana",
            "source": "Grammar: Verb (active or neuter/stative) • Substantive (noun) • Conjunction ('joint for joining words') • Relative pronoun ('referrer') • Negative",
            "pronunciation": "su-ru-fi / ku-te-nda / ku-te-nde-ka / u-ngo / re-je-o / ku-ka-na",
            "hint": "Madan (1917, Abbreviations p. 11 & p. 21, from Bishop Steere's Grammar in Swahili)"
          },
          {
            "target": "fungua (lock/tie) • sindua (door) • zibua (bottle) • fumbua (eyes/mouth) • funua (cover) • shonua (sew) • kunjua (fold) • fumua (unpick)",
            "source": "Eight specialized reversive '-ua' verbs for opening, unfastening, uncorking, uncovering, unsewing, unfolding, and unpicking",
            "pronunciation": "fu-ngu-a / si-ndu-a / zi-bu-a / fu-mbu-a / fu-nu-a / sho-nu-a / ku-nju-a / fu-mu-a",
            "hint": "Madan (1917, Book pp. 33, 51–52 s.v. Open, Un-, Undo)"
          },
          {
            "target": "oa (man) • olewa (woman) • oana (couple) • oza (parents) | jibwa & jitu (ji- augm.) | Ugalla & Uturuki (U- country)",
            "source": "To marry (man / woman / couple / parents) | A large dog & a giant | Country of the Gallas & Turkey",
            "pronunciation": "o-a o-le-wa o-a-na o-za / ji-bwa ji-tu / u-ga-lla u-tu-ru-ki",
            "hint": "Madan (1917, Book pp. 11, 26, 29, 51)"
          },
          {
            "target": "kabla sijafa • asijelala • alitafuta asimwone • sijui ninapokwenda • upendapo pote • killa nendako",
            "source": "Before I die • Before he goes to sleep • He searched without finding him • I don't know where I am going • Wherever you like • Wherever I go",
            "pronunciation": "kab-la si-ja-fa / a-si-je-la-la / a-li-ta-fu-ta a-si-mw-o-ne / u-pe-nda-po po-te",
            "hint": "Madan (1917, Book pp. 5, 54–55)"
          }
        ],
        "sentences": [
          {
            "target": "Ni kiasi changu, kama nalikatiwa mimi. — Kuaheri ya kuonana!",
            "source": "It fits, as if it was cut for me. — Good-bye till we meet again! (Madan 1917, Book pp. 18, 29)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In A. C. Madan's table of Abbreviations from Bishop Steere's 'Grammar in Swahili' (1917, PDF p. 11), what Swahili grammatical terms define 'conj.' (conjunction) and 'rel.' (relative pronoun)?",
            "correctAnswer": "'Ungo la kuungia maneno' (conjunction) and 'Rejeo, neno la kurejea kwa neno lingine, kama -ye, -o, -cho' (relative pronoun)",
            "options": [
              "'Ungo la kuungia maneno' (conjunction) and 'Rejeo, neno la kurejea kwa neno lingine, kama -ye, -o, -cho' (relative pronoun)",
              "'Kilio, kama Ah! Je! Loo! Kumbe' and 'Neno la Kukana'",
              "'Jina la kitu ao jambo' and 'Ginsi ya kitu ao ya jambo'",
              "'Mkasama' and 'Tháruba'"
            ],
            "hint": "See Madan (1917, PDF p. 11: conj. = Ungo la kuungia maneno; rel. = Rejeo, neno la kurejea kwa neno lingine)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each specialized Swahili reversive '-ua' verb from Madan (1917, Book pp. 33, 51–52) with its exact object/meaning:",
            "correctAnswer": "sindua: Open / unbar a door (p. 33)",
            "pairs": [
              {
                "left": "sindua",
                "right": "Open / unbar a door (p. 33)"
              },
              {
                "left": "zibua",
                "right": "Uncork / open a bottle (p. 33)"
              },
              {
                "left": "fumbua",
                "right": "Open the eyes or mouth (p. 33)"
              },
              {
                "left": "shonua / fumua",
                "right": "Unsew / unpick stitching (p. 52)"
              }
            ]
          }
        ]
      },
      {
        "id": "swahili-madan-1917-maritime-trade-arithmetic-18-2",
        "title": "Maritime Dhows, Tides, Coral, Trade Calicoes & Arithmetic (Jumla, Baki, Tháruba, Mkasama)",
        "icon": "Compass",
        "description": "Learn Madan's (1917, pp. 1–56) coastal vocabulary for Indian Ocean dhows, tides, coral, calico textiles, coconut/rice/citrus stages, and arithmetic.",
        "tips": "Madan (1917) distinguishes 5 dhow types under 'Dhow' (mtepe, betela, bágala, batili, bedeni, p. 13), 3 coral types under 'Coral' (mawe, matumbawi, marijani, p. 11), 5 calico grades (amerikano, ulayiti, kaniki, bafta, shiti, pp. 2, 7, 36), and 4 arithmetic operations (jumla, baki, tháruba/fi, mkasama).",
        "words": [
          {
            "target": "mtepe, betela, bágala, batili, bedeni & dau • maji yanajaa / maji yanakupwa / maji mafu • mawe, matumbawi & marijani",
            "source": "Six coastal dhow/vessel types • Flood tide / ebb tide / neap tides • Coral rock, fresh half-fossilized coral & growing coral",
            "pronunciation": "m-te-pe be-te-la ba-ga-la / ma-ji ma-fu / ma-tu-mba-wi ma-ri-ja-ni",
            "hint": "Madan (1917, Book pp. 11, 13, 49, 52)"
          },
          {
            "target": "amerikano, ulayiti, kaniki, bafta & shiti • mpunga → mchele → wali • mnazi, nazi, dafu, makumbi, kuti, pakacha & kifuu",
            "source": "American, English unbleached, blue, fine & printed calico • Growing, cleaned & cooked rice • Coconut tree, ripe nut, liquid nut, fibre, leaf, basket & shell",
            "pronunciation": "a-me-ri-ka-no u-la-yi-ti ka-ni-ki ba-f-ta shi-ti / m-pu-nga m-che-le wa-li",
            "hint": "Madan (1917, Book pp. 2, 4, 7, 10–11, 36, 40, 42)"
          },
          {
            "target": "jumla (jumlisha) • baki (kutoa) • tháruba (zidisha / saba fi saba) • mkasama • tarakimu & sifuru",
            "source": "Addition (sum up) • Subtraction (deduct) • Multiplication (multiply / 7 × 7) • Division • Figure/digit & cipher/zero",
            "pronunciation": "jum-la / ba-ki / tha-ru-ba / sa-ba fi sa-ba / m-ka-sa-ma / ta-ra-ki-mu si-fu-ru",
            "hint": "Madan (1917, Book pp. 2, 14, 18, 31–32, 47, 49)"
          },
          {
            "target": "Unguja, Mvita, Mafya, Mkuchyo, Anzwani & Bukini • Bahari ya Sham & Sultani Rum • mtani",
            "source": "Zanzibar, Mombasa, Mafia, Mogadishu, Anjouan (Johanna) & Madagascar • Red Sea & Sultan of Turkey • Fellow countryman of a kindred tribe",
            "pronunciation": "u-ngu-ja m-vi-ta ma-fya m-ku-chyo a-nzwa-ni bu-ki-ni / m-ta-ni",
            "hint": "Madan (1917, Book pp. 11, 25, 28, 30, 38, 50–51, 56)"
          }
        ],
        "sentences": [
          {
            "target": "Maji yanajaa; kung'oa nanga, tweka matanga!",
            "source": "The tide is coming in; weigh anchor, set sail! (Madan 1917, Book pp. 3, 41, 49)"
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "In A. C. Madan's English-Swahili Vocabulary (1917, Book pp. 2, 14, 31, 47, 49), how are the four arithmetic operations (Addition, Subtraction, Multiplication, Division) and 'seven times seven' expressed in Swahili?",
            "correctAnswer": "Addition = 'jumla', Subtraction = 'baki / kutoa', Multiplication = 'tháruba', Division = 'mkasama', and 'seven times seven' = 'saba fi saba'",
            "options": [
              "Addition = 'jumla', Subtraction = 'baki / kutoa', Multiplication = 'tháruba', Division = 'mkasama', and 'seven times seven' = 'saba fi saba'",
              "Addition = 'shibiri', Subtraction = 'thiraa', Multiplication = 'wari', Division = 'pima'",
              "Addition = 'amerikano', Subtraction = 'ulayiti', Multiplication = 'kaniki', Division = 'bafta'",
              "Addition = 'kaskazi', Subtraction = 'kusi', Multiplication = 'demani', Division = 'masika'"
            ],
            "hint": "See Madan (1917, p. 2 Addition, p. 14 Division, p. 31 Multiplication, p. 47 Subtraction, p. 49 Time: 'saba fi saba')"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each coastal Swahili textile, coral, or maritime term from Madan (1917) with its English definition:",
            "correctAnswer": "ulayiti vs. kaniki vs. bafta: English unbleached calico vs. blue calico vs. fine calico (p. 7)",
            "pairs": [
              {
                "left": "ulayiti vs. kaniki vs. bafta",
                "right": "English unbleached calico vs. blue calico vs. fine calico (p. 7)"
              },
              {
                "left": "mawe vs. matumbawi vs. marijani",
                "right": "Coral rock vs. fresh half-fossilized coral vs. growing red coral (p. 11)"
              },
              {
                "left": "mtepe, betela, bágala, batili, bedeni",
                "right": "Five traditional Indian Ocean dhow types (p. 13)"
              },
              {
                "left": "maji yanajaa / maji yanakupwa / maji mafu",
                "right": "Coming-in (flood) tide / ebbing tide / neap tides (p. 49)"
              }
            ]
          }
        ]
      }
    ]
  }
];
