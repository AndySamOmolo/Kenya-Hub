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

// ============================================================
// Complete Unit 19 & Unit 1/2 Verification for Bishop Edward Steere (1870)
// "Swahili Tales, as Told by Natives of Zanzibar" (pp. i–xvi, 1–504)
// ============================================================
const _unit1 = SWAHILI_UNITS.find((u) => u.id === "swahili-unit-1");
if (_unit1) {
  for (const sk of _unit1.skills) {
    for (const w of sk.words) {
      if (w.target === "Haraka haraka haina baraka") {
        w.hint = "Steere (1870, p. 192, Mifano #1) & W. E. Taylor (1891, Proverb #86)";
      } else if (w.target.startsWith("Mtaka cha mvunguni")) {
        w.hint = "W. E. Taylor (1891, p. 71 #316) & Steere & Madan (1894)";
      } else if (w.target === "Haba na haba hujaza kibaba") {
        w.hint = "W. E. Taylor (1891, p. 13 #70) & Steere & Madan (1894)";
      }
    }
    for (const s of sk.sentences) {
      if (s.target === "Haba na haba hujaza kibaba.") {
        s.source = "Little by little fills the measure (Taylor 1891 #70 & Steere 1894).";
      }
    }
  }
}

SWAHILI_UNITS.push({
  "id": "swahili-unit-19",
  "title": "Unit 19: Bishop Edward Steere's (1870) 'Swahili Tales, as Told by Natives of Zanzibar' — 18 Tales, 20 Mifano, 14 Vitendawili, Liongo & Gungu Poetics, and 103 Notes",
  "description": "Master the complete oral narratives, 20 verbatim Mifano proverbs (pp. 191–195), 14 Vitendawili riddles (pp. 417–421 & p. 492), Kimvita vs. Kiunguja vs. Kingozi/Kiamu poetics, 37 italicized terms (p. 490), 103 ethnographic notes (pp. 490–503), and 12 corrigenda (p. 504) of Steere (1870).",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "swahili-steere-1870-mifano-vitendawili-19-1",
      "title": "All 20 Verbatim Mifano (pp. 191–195) & 14 Vitendawili (pp. 417–421, Note 6 p. 492)",
      "icon": "Sparkles",
      "description": "Learn all 20 proverbs (Mifano #1–#20) and 14 riddles (Vitendawili #1–#14) dictated by Hamisi wa Kayi in Steere (1870).",
      "tips": "In Steere (1870, pp. 191–195), Mifano #1–#20 include Haraka, haraka, haina baraka (#1), Ulimi hauna mfupa (#2, Note 62), Mvunda nti mwana nti, mgeni mzo mpima (#3), Kipya kinyemi, kigawa kionda (#4, Note 63), Mbio za sakafuni hwisha ukingoni (#5, Note 64), Kazi mbi si mtezo mwema? (#6), Kilimia kikizama kwa jua... (#8, Corrigenda p. 504), Abadi, abadi, ukambaa watinda jiwe (#13, Note 65), Ndovu wawili wakisongana ziumiazo nyika (#14), Kikulacho kinguoni mwako (#17), and Ametumbukia kisimani (#20, Note 66).",
      "words": [
        {
          "target": "(1) Haraka, haraka, haina baraka • (2) Ulimi hauna mfupa • (3) Mvunda nti mwana nti, mgeni mzo mpima • (4) Kipya kinyemi, kigawa kionda • (5) Mbio za sakafuni hwisha ukingoni",
          "source": "(1) Hurrying has no blessing • (2) The tongue has no bone • (3) The destroyer of the country is a child of the country; a stranger does not weigh two hundred-weight • (4) A new thing is good, though it be a sore • (5) Running on a flat stone roof ends at the edge",
          "pronunciation": "ha-ra-ka ha-ra-ka / u-li-mi / m-vu-nda n-ti / ki-pya ki-nye-mi / m-bi-o za sa-ka-fu-ni",
          "hint": "Steere (1870, pp. 192–193, Mifano #1–#5 & Notes 62–64, p. 499)"
        },
        {
          "target": "(6) Kazi mbi si mtezo mwema? • (8) Kilimia kikizama kwa jua, huzuka kwa mvua • (11) Angurumapo simba, mteza nani? • (12) Saburi ni ufunguo wa faraja • (13) Abadi, abadi, ukambaa watinda jiwe",
          "source": "(6) Is not poor work good play? • (8) If the Pleiades set in sun, they rise in rain (Corrigenda p. 504) • (11) Who will dance to a lion's roaring? • (12) Patience is the key of consolation • (13) Continually, the well-cord cuts the stone",
          "pronunciation": "ka-zi m-bi / ki-li-mi-a / a-ngu-ru-ma-po si-mba / sa-bu-ri / a-ba-di u-ka-mba-a",
          "hint": "Steere (1870, pp. 192–195, Mifano #6, #8, #11–#13, Note 65 p. 499 & Corrigenda p. 504)"
        },
        {
          "target": "(14) Ndovu wawili wakisongana ziumiazo nyika • (15) Udongo upate uli maji • (16) Mlevi wa mvinyo hulevuka, mlevi wa mali halevuki • (17) Kikulacho kinguoni mwako • (19) Usubi aweza kupenya mote • (20) Ametumbukia kisimani",
          "source": "(14) When two elephants struggle it is the grass that suffers • (15) Use your clay while it is wet • (16) Drunk with wine gets sober; drunk with wealth does not • (17) What bites is in your own clothes • (19) A sand-fly can get through anything • (20) He has fallen into a well (got into a scrape)",
          "pronunciation": "ndo-vu wa-wi-li / u-do-ngo / m-le-vi wa ma-li / ki-ku-la-cho / u-su-bi / ki-si-ma-ni",
          "hint": "Steere (1870, pp. 194–195, Mifano #14–#20 & Note 66, p. 499)"
        },
        {
          "target": "Kitendawili! — Tega! • Nipe mji! — Unguja / Mvita / Kilwa • (1) Yayi • (2) Nanasi • (3) Nyota • (4) Kitanda • (5) Kisima • (6) Fuu • (7) Jua • (8) Kata • (9–10) Mkufu • (11) Nyele • (12) Utelezi • (13) Macho • (14) Kisuto / Mate ya tambuu",
          "source": "Riddle challenge & prize-town protocol + all 14 riddle solutions: (1) Egg, (2) Pineapple, (3) Stars, (4) Bedstead, (5) Well, (6) Fuu fruit, (7) Sun, (8) Coconut ladle, (9–10) Chain, (11) Hair, (12) Slipping, (13) Eyes, (14) Red betel spittle",
          "pronunciation": "ki-te-nda-wi-li te-ga / ni-pe m-ji / ya-yi / na-na-si / nyo-ta / ki-su-to",
          "hint": "Steere (1870, pp. 417–421, Enigmas #1–#13 & Note 6, p. 492)"
        }
      ],
      "sentences": [
        {
          "target": "Ndovu wawili wakisongana ziumiazo nyika; abadi, abadi, ukambaa watinda jiwe.",
          "source": "When two elephants struggle it is the grass that suffers; continually, continually, the well-cord cuts the stone (Steere 1870, pp. 194–195, Mifano #13–#14)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Bishop Edward Steere's 'Swahili Tales' (1870, pp. 192–195 & Notes 64–66, p. 499), what are the exact Swahili texts and meanings of Mifano #5, #13, and #14?",
          "correctAnswer": "#5 'Mbio za sakafuni hwisha ukingoni' (Running on a flat stone roof ends at the edge); #13 'Abadi, abadi, ukambaa watinda jiwe' (Continually, the well-cord cuts the stone); #14 'Ndovu wawili wakisongana ziumiazo nyika' (When two elephants struggle it is the grass that suffers)",
          "options": [
            "#5 'Mbio za sakafuni hwisha ukingoni' (Running on a flat stone roof ends at the edge); #13 'Abadi, abadi, ukambaa watinda jiwe' (Continually, the well-cord cuts the stone); #14 'Ndovu wawili wakisongana ziumiazo nyika' (When two elephants struggle it is the grass that suffers)",
            "#5 'Mpanda farasi wawili'; #13 'Usipoziba ufa'; #14 'Ahadi ni deni'",
            "#5 'Kidole kimoja'; #13 'Kimya kingi'; #14 'Akili mali'",
            "#5 'Maji yakimwagika'; #13 'Kikulacho'; #14 'Mtu ni watu'"
          ],
          "hint": "See Steere (1870, pp. 192–195 & Notes 64–65, p. 499)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Swahili riddle (Kitendawili) from Steere (1870, pp. 417–421 & Note 6, p. 492) with its exact solution:",
          "correctAnswer": "Tandika kitanga, tule kunazi: Nyota (The stars — Riddle #3, p. 418)",
          "pairs": [
            {
              "left": "Tandika kitanga, tule kunazi",
              "right": "Nyota (The stars — Riddle #3, p. 418)"
            },
            {
              "left": "Watoto wangu wana vilemba, asio kilemba si mwanangu",
              "right": "Fuu (Fuu fruit in its calyx cup — Riddle #6, p. 418)"
            },
            {
              "left": "Parra hatta Maka / Ntipo mbili zavuka mto",
              "right": "Utelezi (Slipping) / Macho (The eyes — Riddles #12–#13, p. 420)"
            },
            {
              "left": "Nimekwenda njiani, nimeona kisuto; mwenyi kisuto sikumwona",
              "right": "Mate ya tambuu (Red betel-nut spittle — Note 6, p. 492)"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-steere-1870-tales-liongo-gungu-notes-19-2",
      "title": "18 Prose Tales, Liongo Fumo & Gungu Poetics, 37 Italicized Words & 103 Notes (pp. 1–504)",
      "icon": "Award",
      "description": "Explore the 6 informants, Kimvita 'Kititi, na Fisi, na Simba', 'Hadithi ya Liongo', Kingozi–Kiunguja poetry, wedding/culinary/plantation notes, and 12 corrigenda.",
      "tips": "Steere (1870) contrasts Kiunguja, Kimvita (pp. 325–329: kititi = sungura, tinyango = chinyango, kitoka = shoka, mtanga = mchanga, mato = macho, tini = chini), and archaic Kingozi/Kiamu (pp. 455–483: mja = mtumwa, mbasi = rafiki, mwana = bibi, mbwene = nimeona, tima = moyo, mawi = mavi, zema = njema).",
      "words": [
        {
          "target": "Kititi (Kimvita) = Sungura (Kiunguja) • tinyango = chinyango • kitoka = shoka • mtanga = mchanga • mato = macho • tini = chini",
          "source": "Hare/rabbit • small piece of meat • small axe • sand • eyes • below/down (Mombasa Kimvita vs. Zanzibar Kiunguja in 'Kititi, na Fisi, na Simba', pp. 325–329 & Notes 82–88)",
          "pronunciation": "ki-ti-ti / ti-nya-ngo / ki-to-ka / m-ta-nga / ma-to / ti-ni",
          "hint": "Steere (1870, pp. 325–329 & Notes 82–88, pp. 501–502, narrated by Kathi Mohammed bin Abd en Nuri)"
        },
        {
          "target": "Liongo Fumo (Shanga / Ozi) • Kijakazi Saa • tupa & chachu • pingu & minyororo • kikoa • sindano ya shaba kitovuni • Mashairi ya Liongo (Muyuweni)",
          "source": "Hero of the Kenyan coast • Slave-girl Saa • Steel file & millet bran • Fetters & chains • Rotational feast • Copper needle in the navel • 29 five-line takhmisi stanzas + 7-stanza Epilogue",
          "pronunciation": "li-o-ngo fu-mo / ki-ja-ka-zi sa-a / tu-pa / cha-chu / ki-ko-a / si-nda-no ya sha-ba",
          "hint": "Steere (1870, pp. 439–471 & Notes 99–103, p. 503)"
        },
        {
          "target": "Kingozi / Kiamu → Kiunguja: Mja → Mtumwa • Mbasi → Rafiki • Mwana → Bibi • Mbwene → Nimeona • Tima → Moyo • Mawi → Mavi • Zema → Njema • Mewaza → Nimefikiri",
          "source": "Servant/bondsman • Friend • Lady/mistress • I have seen (archaic -ene perfect) • Heart • Dung/refuse • Good things • I have pondered ('Mashairi ya Liongo' & 'Utumbuizo wa Gungu', pp. 455–483)",
          "pronunciation": "m-ja / m-ba-si / mwa-na / m-bwe-ne / ti-ma / ma-wi / ze-ma / me-wa-za",
          "hint": "Steere (1870, pp. 455–483, transcribed and glossed by Hassan bin Yusuf)"
        },
        {
          "target": "Mahari, Kilemba, Mkaja & Ubeleko (Note 16) • Kungwi, Kifungua mlango, Kiosha miguu & Kipa mkono (Note 17) • Fungate (Note 1) • Msimamizi, Nokoa & Kadamu (Note 68) • Bumunda (Note 76) & Ladu (Note 77)",
          "source": "Bride's dower, father's turban, mother's belt & baby-sling gifts • Bridal matron & 3 groom fees • 7-day wedding feast • Arab plantation overlooker, 1st & 2nd slave foremen • Soft mtama meal dumpling & spiced sesame-treacle ball",
          "pronunciation": "ma-ha-ri ki-le-mba m-ka-ja u-be-le-ko / ku-ngwi / fu-nga-te / m-si-ma-mi-zi no-ko-a ka-da-mu / bu-mu-nda la-du",
          "hint": "Steere (1870, Notes #1, #16, #17, #68, #76, #77, pp. 490–501)"
        }
      ],
      "sentences": [
        {
          "target": "Ewe kijakazi nakutuma, ukatumike: kamwambie mama, mwana muinga amelimuka, afanye mkate, katikati tupa aike.",
          "source": "O slave-girl, I send you to be sent: go tell my mother her simple son has grown wise; let her make a loaf and put a file in the middle (Steere 1870, Hadithi ya Liongo, p. 442)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Bishop Edward Steere's Ethnographic Notes (1870, Notes #68, #76, and #77, pp. 500–501), what are the exact definitions of 'Msimamizi / Nokoa / Kadamu' (Note 68), 'Bumunda' (Note 76), and 'Ladu' (Note 77)?",
          "correctAnswer": "Note 68: Msimamizi = Arab plantation overlooker, Nokoa = chief slave foreman, Kadamu = second head slave; Note 76: Bumunda = soft cake/dumpling of mtama meal; Note 77: Ladu = round balls (1–2 in.) of semsem seed, treacle, and spice",
          "options": [
            "Note 68: Msimamizi = Arab plantation overlooker, Nokoa = chief slave foreman, Kadamu = second head slave; Note 76: Bumunda = soft cake/dumpling of mtama meal; Note 77: Ladu = round balls (1–2 in.) of semsem seed, treacle, and spice",
            "Note 68: Three types of dhow sails; Note 76: Coconut grater; Note 77: Betel pouch",
            "Note 68: Three wedding gifts; Note 76: Roasted fish; Note 77: Clove measure",
            "Note 68: Three board games; Note 76: Earthenware pot; Note 77: Woven mat"
          ],
          "hint": "See Steere (1870, Note 68 p. 500 & Notes 76–77 p. 501)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each archaic Kingozi/Kiamu or Kimvita term in Steere (1870, pp. 325–329, 455–483) with its Kiunguja equivalent and meaning:",
          "correctAnswer": "Kititi (Kimvita, p. 325): Sungura (Hare / rabbit)",
          "pairs": [
            {
              "left": "Kititi (Kimvita, p. 325)",
              "right": "Sungura (Hare / rabbit)"
            },
            {
              "left": "Mbwene (Kingozi, pp. 456, 474)",
              "right": "Nimeona (I have seen — archaic -ene perfect)"
            },
            {
              "left": "Tima & Mbasi (Kingozi, pp. 458, 474)",
              "right": "Moyo (Heart) & Rafiki (Friend)"
            },
            {
              "left": "Mja & Mwana (Kingozi, pp. 456, 474)",
              "right": "Mtumwa (Servant/bondsman) & Bibi (Noble lady)"
            }
          ]
        }
      ]
    }
  ]
});

// ── Complete Line-by-Line Verification & Unit 20 Integration of Bishop Edward Steere & A. C. Madan's "A Handbook of the Swahili Language, as Spoken at Zanzibar" (4th Ed., SPCK London, 1894, pp. i–xxii, 1–458 [PDF pp. 1–488]) ──
const _unit2Steere1894 = SWAHILI_UNITS.find((u) => u.id === "swahili-unit-2");
const _madanDerivSkill = _unit2Steere1894?.skills.find((s) => s.id === "swahili-verb-derivations-madan");
if (_madanDerivSkill) {
  const _kinyumeWord = _madanDerivSkill.words.find((w) => w.target.startsWith("Kinyume"));
  if (_kinyumeWord) {
    _kinyumeWord.source =
      "Syllable-inversion wordplay written out by Johari in Merima dialect (all 52 pairs on pp. 425–426, e.g., Ng'ombe → Mbeng'o, Nyumba → Mbanyu, Mguru → Rumgu ['A leg'], Mwanamuke → Kemwanamu ['A woman'], Kitabu → Bukita)";
  }
}

SWAHILI_UNITS.push({
  "id": "swahili-unit-20",
  "title": "Unit 20: Steere & Madan (1894) — Complete Swahili Handbook (Taxonomies, 18 Kanzu Parts, 41 Zanzibar Mita & Appendices I–V)",
  "description": "Master the complete grammatical, lexical, comparative, epistolary, interlinear, phraseological, and metrological corpus of Bishop Edward Steere & A. C. Madan's 'A Handbook of the Swahili Language, as Spoken at Zanzibar' (4th Ed., SPCK London, 1894, pp. i–xxii, 1–458 [PDF pp. 1–488]).",
  "icon": "Compass",
  "skills": [
    {
      "id": "swahili-steere-1894-part1-taxonomies",
      "title": "Part I Taxonomies: 26 Coconut Terms, 8 Dhows, 10 Rice Varieties, Calendar & 16 Dollar Fractions (pp. 1–101)",
      "icon": "Layers",
      "description": "Study the specialized cultural and technical vocabularies of Part I: the 26 coconut terms, 8 dhow types, 10 rice varieties, 7 evil spirits, lunar/solar calendars, and 16 dollar fractions.",
      "tips": "In Part I (pp. 1–101), Bishop Steere & A. C. Madan organize Zanzibari nouns and numerals into exhaustive domain taxonomies, including 26 terms for the coconut palm and nut (pp. 33–34), 8 dhow types (p. 38), 10 rice varieties (p. 65), 12 lunar months & 365-day solar miongo decades (pp. 75–77), and 16 fractions of the silver dollar (p. 93).",
      "culturalNote": "Digitized from the University of Toronto Library copy (PL 8702 S724 1894, inscribed 'CHUO CHA KISWAHILI'), the 1894 Fourth Edition preserves manuscript marginalia on p. 6 (Arabic ligature امغزف for the Kilwa letter amekufa vs. amevuka), p. 429, and p. 453.",
      "words": [
        {
          "target": "upunga → kidaka → kitale → dafu → koroma → nazi → joya → mbata (pp. 33–34)",
          "source": "The 8 maturation stages of the coconut: flower-embryo → tiny nut → half-grown → milk-drinking stage → nutty-lined → ripe nut → spongy-kernel nut → dried copra",
          "pronunciation": "u-pu-nga / ki-da-ka / ki-ta-le / da-fu / ko-ro-ma / na-zi / jo-ya / m-ba-ta",
          "hint": "Steere & Madan (1894, pp. 33–34, plus kichilema/shaha, kilifu, makuti, pakacha, karara, makumbi, usumba, kifuo, mbuzi, tui, kifumbu & chicha)"
        },
        {
          "target": "Dau • Mtepe • Betela • Bágala (mlingote wa kalmi) • Ghangi • Batili • Bedeni • Awesia (p. 38)",
          "source": "The 8 named coastal dhow vessels: sharp-sterned flat-bottomed dau, sewn square-rigged mtepe, ordinary boat-sterned betela, high-pooped two-masted bágala, ghangi, long sharp-prowed batili, upright-prowed bedeni & awesia",
          "pronunciation": "da-u / m-te-pe / be-te-la / ba-ga-la / gha-ngi / ba-ti-li / be-de-ni / a-we-si-a",
          "hint": "Steere & Madan (1894, p. 38, with duumi, gubeti, shetri, makanadili, darumeti, deheni & feuli)"
        },
        {
          "target": "Bungala • Kapwai • Madevu • Uchukwi • Kimoto • Sifara • Kichooko • Shindano • Sena • Bora kupata (p. 65)",
          "source": "The 10 named varieties of rice (mpunga / mchele / wali / ukoko / masalufu) cultivated on the Zanzibar coast",
          "pronunciation": "bu-nga-la / ka-pwa-i / ma-de-vu / u-chu-kwi / ki-mo-to / si-fa-ra / ki-cho-o-ko / shi-nda-no / se-na / bo-ra ku-pa-ta",
          "hint": "Steere & Madan (1894, p. 65)"
        },
        {
          "target": "Siku a mwaka (Kigunzi) • Mwongo mosi (10 days) to Mwongo miamoja wa sitini • Daakuu (2:30 A.M.) • Mafungulia ng'ombe makuu (8 A.M.) & madogo (9 A.M., pp. 75–77)",
          "source": "New Year's Day (day before the 1st of the 365-day solar/nautical year) • 10-day decades • 2:30 A.M. Ramathan meal gun • Major (8 A.M.) & minor (9 A.M.) cattle-unloosing hours",
          "pronunciation": "si-ku a mwa-ka / ki-gu-nzi / mwo-ngo mo-si / da-a-ku-u / ma-fu-ngu-li-a ng'o-mbe",
          "hint": "Steere & Madan (1894, pp. 75–77, alongside the 12 Arab/Swahili lunar months Mfunguo wa mosi to Ramathani)"
        },
        {
          "target": "Nuss ya themuni (1/16) • Themuni / Ze'mni (1/8) • Zerenge (1/5) • Robo (1/4) • Nuss (1/2) • Kassa robo (3/4) • Kassa themuni (7/8) • Kassa nuss ya themuni (15/16, p. 93)",
          "source": "The 16 fractions of a silver dollar (reale) in Zanzibari accounting, plus the 5 coin types: reale ya mizinga (Pillar dollar), reale ya Sham, reale ya thahabu ($20 gold), reale ya kifransa / bwara (5-franc piece, p. 39)",
          "pronunciation": "nuss ya the-mu-ni / the-mu-ni / ze-re-nge / ro-bo / nuss / ka-ssa ro-bo / ka-ssa the-mu-ni",
          "hint": "Steere & Madan (1894, pp. 39, 93)"
        }
      ],
      "sentences": [
        {
          "target": "Kesho na kesho ni madanganya, ao ni makatazanya. — Si madanganya wala si makatazanya, ni mazuizanya.",
          "source": "To-morrow and to-morrow are deceivers, or are they forbidders? — They are not deceivers nor forbidders, they are hinderers (Dr. Krapf's Delay Proverb, Steere & Madan 1894, p. 48)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Bishop Edward Steere & A. C. Madan's 'A Handbook of the Swahili Language' (1894, pp. 33–34), what is the exact chronological order of the 8 maturation stages of the coconut fruit?",
          "correctAnswer": "upunga (flower-embryo) → kidaka (tiny nut) → kitale (half-grown) → dafu (full size with milk, no nutty rind) → koroma (nutty lining formed) → nazi (full ripe nut) → joya (filled with spongy substance) → mbata (dried copra)",
          "options": [
            "upunga (flower-embryo) → kidaka (tiny nut) → kitale (half-grown) → dafu (full size with milk, no nutty rind) → koroma (nutty lining formed) → nazi (full ripe nut) → joya (filled with spongy substance) → mbata (dried copra)",
            "nazi → dafu → kitale → kidaka → upunga → koroma → mbata → joya",
            "makumbi → usumba → kifuo → kifuu → tui → chicha → pakacha → karara",
            "bungala → kapwai → madevu → uchukwi → kimoto → sifara → shindano → sena"
          ],
          "hint": "See Steere & Madan (1894, Part I Substantives, s.v. Coco-nut, pp. 33–34)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each dollar fraction or time division in Steere & Madan (1894, pp. 75–77, 93) with its exact meaning:",
          "correctAnswer": "Nuss ya themuni & Kassa nuss ya themuni (p. 93): 1/16 of a dollar & 15/16 of a dollar ('less 1/16')",
          "pairs": [
            {
              "left": "Nuss ya themuni & Kassa nuss ya themuni (p. 93)",
              "right": "1/16 of a dollar & 15/16 of a dollar ('less 1/16')"
            },
            {
              "left": "Themuni (Ze'mni) & Zerenge (p. 93)",
              "right": "1/8 of a dollar & 1/5 of a dollar"
            },
            {
              "left": "Daakuu & Mafungulia ng'ombe makuu / madogo (p. 77)",
              "right": "2:30 A.M. Ramathan meal gun & 8 A.M. / 9 A.M. cattle-unloosing hours"
            },
            {
              "left": "Siku a mwaka (Kigunzi) & Miongo (pp. 75–76)",
              "right": "New Year's Day of the 365-day solar/nautical year & 10-day decades"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-steere-1894-part2-kanzu-mita",
      "title": "Part II Lexicon & Comparative Tables: 18 Kanzu Parts, 41 Zanzibar Mita & 9 Bantu Languages (pp. 234–421)",
      "icon": "MapPin",
      "description": "Master the 9-language Bantu prefix table (p. 234), dialect sound correspondences (p. 243), the 18 named parts of a man's Kanzu (p. 299), and all 41 named Mita of Zanzibar Town (pp. 346–347).",
      "tips": "Part II (pp. 239–421) opens with 12 morphological stripping rules and the Coastal Dialect Sound-Correspondence Table (p. 243), followed by ~5,500 Swahili–English entries including the 18 tailoring parts of a Kanzu (p. 299) and all 41 quarters (Mita) of Zanzibar Town (pp. 346–347).",
      "words": [
        {
          "target": "Tao la kanzu • Magongo nene • Badani (Kimo) • Taharizi • Sijafu • Vikwapa • Lisani • Jabali • Mhalbori • Kaaba • Shada • Kitanzi • Kazi ya shingo (Tiki, Mrera, Viboko, Vinara) • Darizi • Mjuzi (shararaji) • Mkia wa mjuzi • Vipaji (viguu) • Kanzu ya ziki (p. 299)",
          "source": "All 18 named parts of a Zanzibari man's Kanzu tunic: bottom hem, broad/narrow seams, body strip, side gores, breast linings, gussets, under-flap, neck stitching, red silk braid, back piece, tassel, loop, 4 neck embroidery rows, chest line, point & tail, side eyelets, and white cotton embroidery",
          "pronunciation": "ta-o la ka-nzu / ba-da-ni / ta-ha-ri-zi / si-ja-fu / vi-kwa-pa / li-sa-ni / ka-zi ya shi-ngo / ti-ki m-re-ra vi-bo-ko vi-na-ra / m-ju-zi / vi-pa-ji",
          "hint": "Steere & Madan (1894, Part II, s.v. Kanzu, p. 299)"
        },
        {
          "target": "30 Peninsula Mita of Zanzibar Town: Shangani, Baghani, Gerezani, Forthani, Mita ya pwani, Kiponda, Mbuyuni, Malindi, Funguni, Jungiani, Kokoni, Mkunazini, Kibokoni, Kidutani, Mzambarauni, Kijukakuni, Vuga, Mnazimoja, Mji mpya, Mtakuja, Jumea, Soko la Mahogo, Kajificheni, Mfuuni, Migomboni, Tiuyani, Sham, Hurumzi, Kutani, Mwavi (pp. 346–347)",
          "source": "All 30 named quarters (Mita) on the Stone Town peninsula of Zanzibar documented in Steere & Madan (1894, pp. 346–347)",
          "pronunciation": "sha-nga-ni / ba-gha-ni / ge-re-za-ni / fo-rtha-ni / ki-po-nda / ma-li-ndi / fu-ngu-ni / m-ku-na-zi-ni / vu-ga / ka-ji-fi-che-ni / hu-ru-mzi",
          "hint": "Steere & Madan (1894, Part II, s.v. Mta, pp. 346–347)"
        },
        {
          "target": "11 Ng'ambo Mita Across the Creek: Ng'ambo, Mchangani, Gulioni, Kwa Buki, Vikokotoni, Kisimani kwa kema, Mchinjani, Mwembe mjugu, Kikwajuni, Mkadini, Mnazi moja (p. 347)",
          "source": "All 11 named quarters (Mita) on the other side of the creek at Ng'ambo in Zanzibar Town",
          "pronunciation": "ng'a-mbo / m-cha-nga-ni / gu-li-o-ni / kwa bu-ki / vi-ko-ko-to-ni / ki-si-ma-ni kwa ke-ma / m-chi-nja-ni / mwe-mbe m-ju-gu / ki-kwa-ju-ni / m-ka-di-ni",
          "hint": "Steere & Madan (1894, Part II, s.v. Mta, p. 347)"
        },
        {
          "target": "Zanzibar ch = t (M.) • e = a (M.) • h = kh (Ar.) • j = d (M.) / y (A., N.) • t = ch (Ozi.) • v = z (A.) • z = v (Mer.) / th (Patta & Ozi.) / j (vulgar, p. 243)",
          "source": "Steere's Coastal Dialect Sound-Correspondence Table linking Zanzibar (Kiunguja), Mombasa (M.), Lamu (A.), Merima (Mer.), and Patta/Ozi",
          "pronunciation": "za-nzi-bar / mo-mba-sa / la-mu / me-ri-ma / pa-tta / o-zi",
          "hint": "Steere & Madan (1894, Part II Preliminary Observations, p. 243)"
        }
      ],
      "sentences": [
        {
          "target": "Kooo! — Mwigo! — Kooo! — Niagulie! — Kooo! — Kwema nendako? — Kooo!",
          "source": "Kooo! — You mwigo! — Kooo! — Prophesy for me! — Kooo! — Is it good where I am going? — Kooo! (Traveler's omen-bird dialogue, Steere & Madan 1894, s.v. Mwigo, p. 352)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Steere & Madan (1894, Part II, s.v. Kanzu, p. 299), what are the four named varieties of red-silk stitching that make up the 'Kazi ya shingo' (neck-work) of a Zanzibari man's Kanzu?",
          "correctAnswer": "Tiki (innermost pattern closest to the neck), Mrera (first pattern beyond tiki), Viboko (zigzags beyond mrera), and Vinara (little spots beyond the zigzags)",
          "options": [
            "Tiki (innermost pattern closest to the neck), Mrera (first pattern beyond tiki), Viboko (zigzags beyond mrera), and Vinara (little spots beyond the zigzags)",
            "Shangani, Baghani, Gerezani, and Forthani",
            "Wakia, Rattel, Mani, and Frasila",
            "Jaa, Kutubu, Matlai, and Magaribi"
          ],
          "hint": "See Steere & Madan (1894, p. 299, s.v. Kanzu #13)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each item from Part II of Steere & Madan (1894, pp. 243, 287, 346–349) with its exact description:",
          "correctAnswer": "Shangani, Baghani, Vuga, Kajificheni & Hurumzi (pp. 346–347): Named Mita (quarters) on the Stone Town peninsula of Zanzibar",
          "pairs": [
            {
              "left": "Shangani, Baghani, Vuga, Kajificheni & Hurumzi (pp. 346–347)",
              "right": "Named Mita (quarters) on the Stone Town peninsula of Zanzibar"
            },
            {
              "left": "Mchangani, Gulioni, Kwa Buki, Vikokotoni & Kikwajuni (p. 347)",
              "right": "Named Mita (quarters) across the creek at Ng'ambo in Zanzibar Town"
            },
            {
              "left": "Wahadimu & Munyi mkuu at Dunga (pp. 82, 349)",
              "right": "Original inhabitants of Zanzibar paying $2 per house shared between Seyed Majid and their royal family"
            },
            {
              "left": "Hua dove calls (s.v. Hua, p. 287)",
              "right": "'Mama akafa, Baba akafa, nimesalia mimi, tu, tu, tu, tu, tu' & 'Kuku mfupa mtupu, mimi nyama tele tele tele'"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-steere-1894-appendices-1-to-5",
      "title": "Appendices I–V: 52 Kinyume Pairs, 4 Letters/Poems, Interlinear Tale, 197 Phrases & 32-Point Compass (pp. 423–458)",
      "icon": "Compass",
      "description": "Master Johari's 52 Merima Kinyume specimens (pp. 425–426), the 4 letters/poems (pp. 427–429), the interlinear tale of Sinébar (pp. 431–442), the 197 phrases (pp. 443–453), and Appendix V's weights, measures, and 32-Point Compass (pp. 455–458).",
      "tips": "In Appendix I (pp. 425–426), Johari's 52 Merima-dialect Kinyume pairs move only the single last syllable to the front (e.g., Mguru → Rumgu 'A leg', Mwanamuke → Kemwanamu 'A woman', Njara inaniuma → Ranja mainaniu 'I ache with hunger'). Appendix V (pp. 455–458) records the 47 dollars = 100 rupees scale, regional kanda capacities, and all 32 points of the Zanzibar compass.",
      "words": [
        {
          "target": "Ng'ombe → Mbeng'o • Mbuzi → Zimbu • Punda → Ndapu • Nyamiya → Yangami • Nyumba → Mbanyu • Mwanamuke → Kemwanamu • Mguru → Rumgu • Njara inaniuma → Ranja mainaniu • Twende zetu → Tutwendeze • Senendi → Ndisene • Mutu → Tumu • Msahafu → Fumsaha (Appendix I, pp. 425–426)",
          "source": "Johari's 52 verbatim Merima-dialect Kinyume syllable-inversion pairs (ox, goat, donkey, camel, house, woman, leg, 'I ache with hunger', 'Let us be off', 'I am not going', man, Koran)",
          "pronunciation": "mbe-ng'o / zi-mbu / nda-pu / ya-nga-mi / mba-nyu / ke-mwa-na-mu / ru-mgu / ra-nja ma-i-na-ni-u / tu-twe-nde-ze / ndi-se-ne",
          "hint": "Steere & Madan (1894, Appendix I, pp. 425–426)"
        },
        {
          "target": "Risala enda kwa hima / Kwa Edward Istira... (16 lines, p. 428) • Hatukiati kisiwa kwa uvambume na upembe... (Pemba–Mombasa quatrain, p. 429) • Hadithi ya Waridi, na Ureda, na Jindi, na Sinébar (kofia mbovu & taa mbovumbovu ya chuma, pp. 431–442)",
          "source": "16-line poetic epistle to Edward Steere & Pemba–Mombasa quatrain (Appendix II) • Interlinear tale of Sinébar with the 7-headed snake, magic invisibility cap & magic iron lamp (Appendix III)",
          "pronunciation": "ri-sa-la e-nda kwa hi-ma / ha-tu-ki-a-ti ki-si-wa / wa-ri-di u-re-da ji-ndi si-ne-bar / ko-fi-a m-bo-vu / ta-a m-bo-vu-m-bo-vu ya chu-ma",
          "hint": "Steere & Madan (1894, Appendices II & III, pp. 427–442)"
        },
        {
          "target": "47 dollars (reale) = 100 rupees (rupia) • 3 robo pesa = 1 pesa • Dunga = saa 'nne (4 hrs) & Kokotoni = saa sita (6 hrs) • Kanda at Kwale/Mgao/Mvita (rice 10–12 pishi, maize 10 pishi) vs. Pangani/Tanga/Mtang'ata (rice 15–17 pishi, maize 13–13½ pishi, pp. 455–457)",
          "source": "Appendix V currency scale, walking-hour distances in Zanzibar, and regional matting-bag (kanda) grain capacities furnished to Rev. P. L. Jones-Bateman",
          "pronunciation": "re-a-le / ru-pi-a / ro-bo pe-sa / du-nga sa-a 'nne / ko-ko-to-ni sa-a si-ta / ka-nda / pi-shi",
          "hint": "Steere & Madan (1894, Appendix V, pp. 455–457)"
        },
        {
          "target": "32-Point Compass (p. 458): North = Jaa • South = Kutubu • East = Matlai • West = Magaribi • N. to E./W.: Faragadi, Nash, Nagr, Luagr, Dayabu, Semak, Seria • S. of E./W.: Sosa, Tiri, Lakadiri, Lakarabu, Hamareni, Seheli, Sonoobari (Matlai / Magaribi)",
          "source": "All 32 points of the Zanzibar mariner's star-compass in Appendix V (p. 458; cf. pp. 329, 334 Matlaa/Maghrib ayuk & akrab)",
          "pronunciation": "ja-a / ku-tu-bu / ma-tla-i / ma-ga-ri-bi / fa-ra-ga-di / na-sh / na-gr / lu-a-gr / da-ya-bu / se-ma-k / se-ri-a / so-sa / ti-ri / la-ka-di-ri / la-ka-ra-bu / ha-ma-re-ni / se-he-li / so-no-o-ba-ri",
          "hint": "Steere & Madan (1894, Appendix V, p. 458)"
        }
      ],
      "sentences": [
        {
          "target": "Unayo haja tena? — Sina haja ila haja yangu uwe na afya. / Haja yangu ya kuishi wewe sana na furaha.",
          "source": "Is there anything else you want? — I want nothing save that I wish you health. / What I want is that you may live long and happily (Phrase #197, Steere & Madan 1894, p. 453, with reader's vocalized Ajami transcription)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Appendix I of Steere & Madan (1894, pp. 425–426, written out by Johari in the Merima dialect), how are 'A woman' and 'A leg' actually inverted into Kinyume?",
          "correctAnswer": "'Mwanamuke' → 'Kemwanamu' (A woman) and 'Mguru' → 'Rumgu' (A leg)",
          "options": [
            "'Mwanamuke' → 'Kemwanamu' (A woman) and 'Mguru' → 'Rumgu' (A leg)",
            "'mwanamke' → 'mkemwana' and 'mguu' → 'umgu'",
            "'mkono' → 'nomko' and 'kisu' → 'suki'",
            "'mtoto' → 'tomto' and 'chakula' → 'kulacha'"
          ],
          "hint": "Johari's Merima-dialect list moves only the single final syllable to the front (pp. 425–426 #15 & #24)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each bearing from the 32-Point Compass on p. 458 of Steere & Madan (1894) with its exact Swahili star-name:",
          "correctAnswer": "N. by E. / N.N.E. / N.E. by N. / N.E. (p. 458): Faragadi Matlai / Nash Matlai / Nagr Matlai / Luagr Matlai",
          "pairs": [
            {
              "left": "N. by E. / N.N.E. / N.E. by N. / N.E. (p. 458)",
              "right": "Faragadi Matlai / Nash Matlai / Nagr Matlai / Luagr Matlai"
            },
            {
              "left": "N.E. by E. / E.N.E. / E. by N. (p. 458)",
              "right": "Dayabu Matlai / Semak Matlai / Seria Matlai"
            },
            {
              "left": "E. by S. / E.S.E. / S.E. by E. / S.E. (p. 458)",
              "right": "Sosa Matlai / Tiri Matlai / Lakadiri Matlai / Lakarabu Matlai"
            },
            {
              "left": "S.E. by S. / S.S.E. / S. by E. / South (p. 458)",
              "right": "Hamareni Matlai / Seheli Matlai / Sonoobari Matlai / Kutubu"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 21: Complete Line-by-Line Integration of Mrs. F. Burt & Rev. W. E. Taylor's "Swahili Grammar and Vocabulary" (SPCK London, 1910, Book pp. 1–252 [PDF pp. 1–260]) ──
SWAHILI_UNITS.push({
  "id": "swahili-unit-21",
  "title": "Unit 21: Mrs. F. Burt & Rev. W. E. Taylor (1910) — Mombasa (Ki-Mvita) Dialect Tables I–IV, Phonetic Exercises 1–21, 21 Studies, 3 Mombasa Letters (A.H. 1324), Synonyms & All 44 Homonym Groups",
  "description": "Master the complete Mombasa (Ki-Mvita) Swahili grammar, Rev. W. E. Taylor's Dialect Tables I–IV & Phonetic Exercises 1–21, all 21 Daily-Life Studies, 10 Noun Classes (including Class VI Monster Class), the 23-form kufunga derivative table, Mombasa Money/Weights/Measures, the 3 Mombasa Letters of A.H. 1324 (1906 CE), Synonym Groups, and all 44 Aspirated/Dental Homonym Groups from Mrs. F. Burt's 'Swahili Grammar and Vocabulary' (SPCK London, 1910).",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "swahili-burt-1910-taylor-dialects-phonetics-21",
      "title": "Rev. W. E. Taylor's Dialect Tables I–IV, Phonetic Exercises 1–21 & Complete Syllabary (Part I, pp. 7–23)",
      "icon": "Volume2",
      "description": "Compare Southern (Ki-Unguja, Ki-P'emba, Ki-Mrima), Central (Ki-Mvita), and Northern (Ki-Amu, Ki-Pate, Ki-Gunya, Ki-ti-kuu) Swahili across Tables I–IV and master Taylor's 21 graded ear/voice exercises.",
      "tips": "In Part I (pp. 7–23), Rev. W. E. Taylor introduces the 'Sandwiching' pronunciation drill (10 repetitions by the native teacher, 1 by the student, 1 by the teacher, then 1 by the student between 2 teacher repetitions, p. 11) and contrasts cerebral t/d against dental *t*/*d*, sonant m'/n', and aspirated ch'/p'/k'/t'/*t*'.",
      "culturalNote": "Drawn up by Mrs. F. Burt (signed A. E. B., Bourne End Parsonage, Boxmoor, 1910) on the Berlitz method, with Part I and the Syllabary contributed by Rev. W. E. Taylor, M.A. (author of African Aphorisms, 1891, and Giryama Vocabulary and Collections, 1891).",
      "words": [
        {
          "target": "ninakuja (Southern: Ki-Unguja) / naja (Central: Ki-Mvita) / niyao (Northern: Ki-Amu)",
          "source": "I am coming (Table III Three-Way Dialect Divergence, p. 9)",
          "pronunciation": "ni-na-ku-ja / na-ja / ni-ya-o",
          "hint": "Burt & Taylor (1910, Part I, Table III, p. 9)"
        },
        {
          "target": "nawapenda (Central & Northern) vs. ninakupendani (Southern 'barbarous' form, p. 9)",
          "source": "I love you [plural] (Table II Central & Northern vs. Southern, p. 9)",
          "pronunciation": "na-wa-pe-nda / ni-na-ku-pe-nda-ni",
          "hint": "Burt & Taylor (1910, Part I, Table II, p. 9)"
        },
        {
          "target": "-akwe (Central: Ki-Mvita) vs. -ake (Southern & Northern, p. 9)",
          "source": "His / Her / Its (Table IV Central advantage avoiding ambiguity with wake 'females', p. 9)",
          "pronunciation": "a-kwe / a-ke",
          "hint": "Burt & Taylor (1910, Part I, Table IV, p. 9)"
        },
        {
          "target": "au, ai!, oa, ua, aoa, aua, aoe, aue, aoae, uuao, uuae, auuae, uuuao, auae, auuao, aiuae",
          "source": "Exercise 4 All-Vowel Swahili Words (marry, kill, flower, backyard, he who marries/kills..., p. 13)",
          "pronunciation": "a-u / o-a / u-a / a-o-a / a-u-a / a-u-u-a-e",
          "hint": "Burt & Taylor (1910, Part I, Exercise 4, p. 13)"
        },
        {
          "target": "’a ’a ('No!') • ’a ’a ’a ('Not at all!') • ’ee (woman's 'Yes!') • Haa’! ('No indeed!')",
          "source": "Glottal Hamza & Laryngeal Interjections (Exercises 5 & 7, pp. 14–15)",
          "pronunciation": "’a-’a / ’e-e / ha-a’",
          "hint": "Burt & Taylor (1910, Part I, Exercises 5 & 7, pp. 14–15)"
        },
        {
          "target": "Ham’, hamu, hamo, ham’muui, m’memuua... hm’ (Ex. 8, p. 16) • Mng’wpe (Ex. 21, p. 21 fn. 1)",
          "source": "Sonant m’ (suppressing u) vs. open m, and the vocal gymnastic 'Mng’wpe' (African Aphorisms § 396)",
          "pronunciation": "ha-m’ / ha-mu / m-ng’w-pe",
          "hint": "Burt & Taylor (1910, Part I, Exercises 8 & 21, pp. 16, 21)"
        }
      ],
      "sentences": [
        {
          "target": "Tua mto wako mtoni; mti huu utue na tini. Namtuma kutuma; natumia atumacho. (Exercises 19–20, p. 20)",
          "source": "Set down your pillow (mto, dental) by the river (mtoni, cerebral); let this tree settle down below. I send him to earn; I use what he earns."
        },
        {
          "target": "Kuthani, -dhani, dhambi, thalatha (Central Ki-Mvita) vs. kuzani, ramazani, zambi, selasa (Southern & Northern, Table IV, p. 9)",
          "source": "Central Swahili preserves true Arabic interdentals whereas Southern and Northern replace them with Z and S."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Rev. W. E. Taylor's Table III (Part I, p. 9 of Burt 1910), how is 'I am coming' expressed across the Southern, Central, and Northern dialect-groups?",
          "correctAnswer": "'ninakuja' (Southern: Ki-Unguja) / 'naja' (Central: Ki-Mvita) / 'niyao' (Northern: Ki-Amu)",
          "options": [
            "'ninakuja' (Southern: Ki-Unguja) / 'naja' (Central: Ki-Mvita) / 'niyao' (Northern: Ki-Amu)",
            "'naja' (Southern) / 'ninakuja' (Central) / 'nakuya' (Northern)",
            "'niyao' (Southern) / 'ninakuja' (Central) / 'naja' (Northern)",
            "'nakwenda' (Southern) / 'nenda' (Central) / 'niendao' (Northern)"
          ],
          "hint": "See Table III on p. 9 of Part I"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each item from Rev. W. E. Taylor's Part I (pp. 7–21) with its exact description:",
          "correctAnswer": "Ki-P'emba on the Emerald Isle (pp. 7–8): Supplies half the clove crop and substitutes 'fy' for 'sh'",
          "pairs": [
            {
              "left": "Ki-P'emba on the Emerald Isle (pp. 7–8)",
              "right": "Supplies half the clove crop and substitutes 'fy' for 'sh'"
            },
            {
              "left": "Exercise 4 All-Vowel Words (p. 13)",
              "right": "au, ai!, oa, ua, aoa, aua, aoe, aue, aoae, uuao, uuae, auuae, uuuao, auae, auuao, aiuae"
            },
            {
              "left": "4 Arabic Words with Double 'll' (Exercise 12, p. 17)",
              "right": "Allahu, illa, illi, killa (or kulla)"
            },
            {
              "left": "Exercise 21 Vocal Gymnastic (p. 21 fn. 1)",
              "right": "Mng’wpe (African Aphorisms § 396) & women's closed-lip click assentive"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-burt-1910-studies-grammar-paradigms-21",
      "title": "Studies I–XXI, 10 Noun Classes (incl. Class VI Monster Class), Kwisha Perfect & 23-Form kufunga Table (Part II, pp. 24–151)",
      "icon": "Layers",
      "description": "Master the 21 thematic studies of daily Mombasa life, the 10-class concord system, contracted possessives, nasal-aspiration sound laws, and the 23 derivative forms of kufunga.",
      "tips": "Pay special attention to Class VI '(JI) or Monster Class' (jit'u / mijit'u, nyonge / minyonge, pp. 26–27), the contracted kwisha perfect (nsha, unsha, ansha, tunsha, mnsha, wansha, p. 39 fn. 1), and the phonological chain nik → nk → k' → h (ha-, hi-, hu-; nita → n'ta → t'; mbwa = ni wa; nda = ni ya, p. 93).",
      "culturalNote": "Studies I–XXI (pp. 24–131) and their complete bidirectional Exercise Keys (pp. 132–151) cover greetings, servants, teachers, house, table, kitchen, town, friendship, dress, market, shop, body, river/shore, plantation, safari, weather/time, up-country, animals, hospital, school, and religion.",
      "words": [
        {
          "target": "Class VI (JI) or Monster Class: jit’u lote lile (pl. mijit’u yote ile) • nyonge (pl. minyonge, pp. 26–27)",
          "source": "Augmentative 'Monster Class' taking Class V concords in the singular and Class II (mi-) concords in the plural",
          "pronunciation": "ji-t’u lo-te li-le / mi-ji-t’u yo-te i-le",
          "hint": "Burt (1910, Study I Table of Concords, pp. 26–27)"
        },
        {
          "target": "nsha, unsha, ansha, tunsha, mnsha, wansha (p. 39 fn. 1)",
          "source": "Idiomatic Mombasa contracted perfect of kwisha ('I have already...', e.g., Nsha kukuambia mara nyingi)",
          "pronunciation": "n-sha / u-n-sha / a-n-sha / tu-n-sha / m-n-sha / wa-n-sha",
          "hint": "Burt (1910, Study IV, p. 39 fn. 1)"
        },
        {
          "target": "kupiga mstari, k’engele, ch’apa, k’elele, t’eke, fundo, magot’i, pasi, mbinja, k’ura, yowe (p. 43 fn. 3)",
          "source": "12 Idioms with kupiga (draw a line, ring a bell, print, shout, kick, tie a knot, kneel, iron clothes, whistle, cast lots, halloo)",
          "pronunciation": "ku-pi-ga m-sta-ri / k’e-nge-le / ma-go-t’i / pa-si / m-bi-nja",
          "hint": "Burt (1910, Study V, p. 43 fn. 3)"
        },
        {
          "target": "shambani pa (near) / shambani kwa (to/at) / shambani mwa (inside) / mashambani mwa (in the country, p. 81 fn. 4)",
          "source": "Four-Way Locative Concord Distinction (Classes VIII PA, IX KU, and X MU)",
          "pronunciation": "sha-mba-ni pa / kwa / mwa / ma-sha-mba-ni mwa",
          "hint": "Burt (1910, Study XIV, p. 81 fn. 4)"
        },
        {
          "target": "kit’uche, jambole, vituvye, kufakwe, watumwaze • mwanangu, mwenetu, mwenenu • babangu/babako/babazo/babakwe/babae/babaze (p. 92)",
          "source": "Contracted Enclitic Possessive Suffixes across Classes I–X",
          "pronunciation": "ki-t’u-che / ja-mbo-le / vi-tu-vye / ku-fa-kwe / wa-tu-mwa-ze",
          "hint": "Burt (1910, Study XVI, p. 92)"
        },
        {
          "target": "nik → nk → k’ → h (ha-, hi-, hu-) • nita → n’ta → t’ • mbwa (< ni wa) • nda (< ni ya, p. 93)",
          "source": "Mombasa Nasal-Aspiration Sound Law explaining 1st sg. ha-/hi-/hu-/t’a- and copular mbwa/nda",
          "pronunciation": "ha / hi / hu / t’a / m-bwa / n-da",
          "hint": "Burt (1910, Study XVI, p. 93)"
        }
      ],
      "sentences": [
        {
          "target": "Zina Salehe [funguo]! (Study VII, p. 58 Note III) • Mji unangia maradhi (Study XVI, p. 91 fn. 9) • Ukiumwa ni siafu (Study XV, p. 87 fn. 3)",
          "source": "Salehe has the keys! (emphatic subject-object inversion) • Sickness is entering the town • If you are bitten by biting ants ('ni' = 'by' after passive)"
        },
        {
          "target": "Mwana umleavyo, ndivyo akuavyo! (p. 116) • Kafiri akufaae si Muisilamu asiyekufaa (p. 122) • Adhabu ya kaburi ajua maiti (pp. 124, 151)",
          "source": "As you bring up a child, so he grows! • An infidel who helps you is better than a Muslim who does not • The torment of the grave only the corpse knows"
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Study XIV (p. 81 fn. 5–6 of Burt 1910), what is noted as the sole lexical exception to the rule that a fruit's name is formed from its tree by changing Class II prefix 'm-' to Class V '(ma-)'?",
          "correctAnswer": "'mgomba' (banana tree) → 'ndizi' (banana fruit, instead of a regular Class V form)",
          "options": [
            "'mgomba' (banana tree) → 'ndizi' (banana fruit, instead of a regular Class V form)",
            "'mnazi' (coconut palm) → 'nazi' (coconut)",
            "'mtende' (date palm) → 't'ende' (date)",
            "'mwembe' (mango tree) → 'embe' (mango)"
          ],
          "hint": "See Study XIV, p. 81 fn. 5–6"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each grammatical feature in Part II of Burt (1910) with its exact Mombasa (Ki-Mvita) rule:",
          "correctAnswer": "Only 2 Irregular Imperatives in Swahili (p. 29 fn. 2): ndoo (< kuja, pl. ndooni) and lete (< kuleta, pl. leteni)",
          "pairs": [
            {
              "left": "Only 2 Irregular Imperatives in Swahili (p. 29 fn. 2)",
              "right": "ndoo (< kuja, pl. ndooni) and lete (< kuleta, pl. leteni)"
            },
            {
              "left": "1st Person Sg. Object Imperative Rule (p. 34 fn. 7)",
              "right": "Retains final '-a' (Nipeleka! Nambia!) whereas other objects change '-a' to '-e' (Mpeleke!)"
            },
            {
              "left": "23-Form Derivative Table of kufunga (p. 102)",
              "right": "7 Derivative Stems (Causative, Neuter, Applied, Reciprocal, Reflexive, Subtractive -ua, Reduplicated)"
            },
            {
              "left": "Nouns in '-ni' Taking No Second '-ni' (p. 78 fn. 1)",
              "right": "p’wani (on the coast), jioni (in the evening), mizani (scales), roshani (balcony)"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-burt-1910-letters-measures-synonyms-homonyms-21",
      "title": "Mombasa Money & Measures, 3 Letters (A.H. 1324), Calendar, Synonyms, All 44 Homonym Groups & Part III Vocabulary (pp. 152–252)",
      "icon": "FileText",
      "description": "Master Mombasa coinage & capacity tables, the 3 letters of Rabiu l-Awwal 1324 A.H. (1906 CE), monsoon seasons, 14 synonym groups, and all 44 minimal-pair homonym groups.",
      "tips": "Notice the historical currency distinction on p. 152 between 'Roboo ya zamani' (32 pice = 8 annas = ¼ riale) and 'Roboo rupia' (16 pice = ¼ rupee), and between 'Thumuni' (16 pice = ⅛ riale) and 'Thumuni rupia' (8 pice = ⅛ rupee).",
      "culturalNote": "Pages 154–161 preserve three authentic Mombasa letters dated Rabiu l-Awwal 1324 A.H. (1906 CE), the coastal monsoon calendar, 14 classified synonym groups, and 44 homonym groups contrasting aspiration and dental vs. cerebral stops.",
      "words": [
        {
          "target": "Roboo ya zamani (32 pice = ¼ riale) vs. Roboo rupia (16 pice) • Thumuni (16 pice = ⅛ riale) vs. Thumuni rupia (8 pice, p. 152)",
          "source": "Mombasa Riale vs. Rupee Quarter and Eighth Coinage Distinctions (1 Silver Rupee = 16 annas = 64 pice)",
          "pronunciation": "ro-bo-o ya za-ma-ni / ro-bo-o ru-pi-a / thu-mu-ni",
          "hint": "Burt (1910, Tables of Money, Weights and Measures, p. 152)"
        },
        {
          "target": "1 Kibaba • 1 Kisaga (2 vibaba) • 1 Pishi (2 visaga = 4 vibaba) • 1 Jizila (60 pishi) • 1 Ratili (1 lb.) • 1 Mani (3 ratili) • 1 Farasila (36 ratili, pp. 152–153)",
          "source": "Mombasa Corn Capacity and Weight Hierarchy",
          "pronunciation": "ki-ba-ba / ki-sa-ga / pi-shi / ji-zi-la / ra-ti-li / ma-ni / fa-ra-si-la",
          "hint": "Burt (1910, Tables of Money, Weights and Measures, pp. 152–153)"
        },
        {
          "target": "Walio mbali huonana kwa barua, na barua ni nusu ya kuonana (Letter No. 1, p. 154)",
          "source": "Those who are far apart see each other by letter, and a letter is half of meeting face to face (Muhammad bin Maalim bin Bwana Kombo to Hamis bin Shaibu il Kilifi, 8 Rabiu l-Awwal 1324 A.H.)",
          "pronunciation": "wa-li-o m-ba-li hu-o-na-na kwa ba-ru-a",
          "hint": "Burt (1910, Specimens of Swahili Letter-Writing, Letter No. 1, p. 154)"
        },
        {
          "target": "Kasikazi/Musimu (Nov.–Mar.), Maleleji (calms), Kusi (Apr.–Sept.), Kipupwe (June–July), Demani (Aug.–Sept.), T’anga Mbili (Sept.–Oct.) • Mwaka, Mchoo, Vuli (pp. 157–158)",
          "source": "Mombasa Monsoon Winds and Three Rainy Seasons (Swahili Calendar, pp. 157–158)",
          "pronunciation": "ka-si-ka-zi / ma-le-le-ji / ku-si / ki-pu-pwe / de-ma-ni / t’a-nga m-bi-li",
          "hint": "Burt (1910, Swahili Calendar, pp. 157–158)"
        },
        {
          "target": "k’aa (crab) / kaa (ember) / kukaa (stay) • k’ofi (clap hands) / kofi (box ears) • mt’u (man) / mtu (tamarisk tree) • nt’i (earth) / nt’i (earrings) / nti (chart, pp. 159–161)",
          "source": "Minimal Pairs from the 44 Aspirated and Dental/Cerebral Homonym Groups (pp. 159–161)",
          "pronunciation": "k’a-a / ka-a / k’o-fi / ko-fi / m-t’u / m-tu / n-t’i / n-ti",
          "hint": "Burt (1910, A List of Homonyms, pp. 159–161)"
        },
        {
          "target": "Fungat’o haiumizi mkono (s.v. Ufungat’o, p. 236) • Kulia juu tini ku moto (s.v. Kulia, p. 191) • Kisiwani (= Mombasa, p. 77) • Kisauni (= Frere Town, p. 77) • Ughaibu (betel mixture, p. 241)",
          "source": "Proverbs and Cultural Glosses Embedded in Part III Swahili–English Vocabulary (pp. 163–252)",
          "pronunciation": "fu-nga-t’o ha-i-u-mi-zi m-ko-no / ki-si-wa-ni / ki-sa-u-ni / u-gha-i-bu",
          "hint": "Burt (1910, Part III Vocabulary, pp. 77, 191, 236, 241)"
        }
      ],
      "sentences": [
        {
          "target": "Kulla neno aletalo Mngu ndiyo kheri (Letter No. 2, p. 155, on the earthquake in Ulaya ya Paris killing watu alifu tano) • Kodi ya majumba itazidi mwaka huu (Letter No. 3, p. 156)",
          "source": "Every matter that God sends is for the best (Letter 2, 12 Rabii Liawal 1324) • The house tax will be increased this year (Letter 3 to a lady)"
        },
        {
          "target": "Ko*t*o (mason's trowel) • koto (curved) • k’oto (hook/crook) • k’o*t*o (ground-nuts) • kiko*t*o (whip, p. 160)",
          "source": "Five-way minimal set contrasting aspiration (k' vs. k) and dental (*t*) vs. cerebral (t) articulation in Mombasa Swahili."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In the Tables of Money, Weights and Measures on p. 152 of Burt (1910), what is the difference between 'Roboo ya zamani' and 'Roboo rupia'?",
          "correctAnswer": "'Roboo ya zamani' is 32 pice (8 annas = ¼ riale/dollar), whereas 'Roboo rupia' is 16 pice (4 annas = ¼ rupee)",
          "options": [
            "'Roboo ya zamani' is 32 pice (8 annas = ¼ riale/dollar), whereas 'Roboo rupia' is 16 pice (4 annas = ¼ rupee)",
            "'Roboo ya zamani' is 16 pice, whereas 'Roboo rupia' is 32 pice",
            "'Roboo ya zamani' is 64 pice, whereas 'Roboo rupia' is 8 pice",
            "Both equal 24 pice"
          ],
          "hint": "See Coinage on p. 152 of Burt (1910)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each item from pp. 154–241 of Burt (1910) with its exact meaning:",
          "correctAnswer": "Letter No. 1 (8 Rabiu l-Awwal 1324 A.H., p. 154): Muhammad bin Maalim bin Bwana Kombo to Hamis bin Shaibu il Kilifi ('barua ni nusu ya kuonana', 1 doz. kanzus, ½ doz. kofias, 3 vikois)",
          "pairs": [
            {
              "left": "Letter No. 1 (8 Rabiu l-Awwal 1324 A.H., p. 154)",
              "right": "Muhammad bin Maalim bin Bwana Kombo to Hamis bin Shaibu il Kilifi ('barua ni nusu ya kuonana', 1 doz. kanzus, ½ doz. kofias, 3 vikois)"
            },
            {
              "left": "Letter No. 2 & Letter No. 3 (12 Rabii Liawal 1324 A.H., pp. 155–156)",
              "right": "Mula Alii bin Abdirrahaman on the earthquake in Ulaya ya Paris (~5,000 dead) and the increased house tax (kodi ya majumba)"
            },
            {
              "left": "mt’u vs. m*t*u & n*t*’i vs. nt’i vs. n*t*i (pp. 160–161)",
              "right": "'man' vs. 'tamarisk tree' & 'earth/country' vs. 'earrings' vs. 'chart'"
            },
            {
              "left": "Fungat’o haiumizi mkono (p. 236) & Ughaibu (p. 241)",
              "right": "'Grasping does not hurt the hand' & mixture chewed with betel-leaf (nutmeg, cloves, lime, tobacco)"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 22: Complete Line-by-Line Integration of A. C. Madan's "Swahili-English Dictionary" (Clarendon Press Oxford, 1903, Book pp. i–xix, 1–238, 442 [PDF pp. 1–260 & 464–478]) ──
SWAHILI_UNITS.push({
  "id": "swahili-unit-22",
  "title": "Unit 22: A. C. Madan (1903) — Swahili-English Dictionary (8 Verb-Stem Forms, Conspectus II, Encyclopedic Taxonomies & 65+ Proverbs)",
  "description": "Master the complete grammatical, morphological, etymological, and ethnographic corpus of A. C. Madan's 'Swahili-English Dictionary' (Clarendon Press Oxford, 1903, pp. i–xix, 1–442): the 'Bantize rather than Arabize' principle & asterisk (*) loanword system, the 8 Principal Verb-Stem Forms (including 6 Causal & 5 Reciprocal varieties), Conspectus II of the 8 Noun Declensions (D 1–D 8), encyclopedic cultural taxonomies, and 65+ embedded proverbs and riddles.",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "swahili-madan-1903-verb-stems-conspectus-22",
      "title": "Preface, 8 Principal Verb-Stem Forms (6 Causal & 5 Reciprocal Varieties) & Conspectus II (pp. iii–xix)",
      "icon": "Layers",
      "description": "Master Madan's 'Bantize rather than Arabize' principle, the asterisk (*) loanword convention, the 8 Principal Forms of Verb-Stem, and Conspectus II of the 8 Noun Declensions.",
      "tips": "In his Introduction (pp. ix–xiii), Madan classifies all Swahili verb derivations into 8 Principal Forms—Primary (Pr., with Passive Ps. -w- & Neuter Nt. -k-/-ik-/-ek-), Applied (Ap. -i-/-e-), Causal (Cs. -z-/-sh-/-s-/-y- in 6 varieties), Reciprocal (Rp. -an- in 5 aspects + -kana), Reflexive (Rf. ji-), Reduplicated (Rd.), Reversive (Rv. -u-/-o-), and Stative (St. -am-/-aman-).",
      "culturalNote": "Published at the Clarendon Press, Oxford in July 1903 by Arthur Cornwallis Madan, M.A., Student of Christ Church, Oxford (UC Berkeley copy PL 8703 / M33 / 1903 / MAIN), this dictionary ranks Swahili among the twelve great languages of the modern world.",
      "words": [
        {
          "target": "1. Primary (Pr.) • 2. Applied (Ap. -i-/-e-) • 3. Causal (Cs. -z-/-sh-/-s-/-y-) • 4. Reciprocal (Rp. -an-) • 5. Reflexive (Rf. ji-) • 6. Reduplicated (Rd.) • 7. Reversive (Rv. -u-/-o-) • 8. Stative (St. -am-/-aman-, pp. xi–xiii)",
          "source": "The 8 Principal Forms of Verb-Stem in Madan (1903, Introduction, pp. xi–xiii)",
          "pronunciation": "pri-ma-ry / a-ppli-ed / cau-sal / re-ci-pro-cal / re-fle-xi-ve / re-ver-si-ve / sta-ti-ve",
          "hint": "Madan (1903, Introduction, pp. xi–xiii)"
        },
        {
          "target": "6 Varieties of Causal (Cs., pp. xii–xiii): 1. Simple (tazamisha) • 2. Compulsive (lipisha) • 3. Permissive (poteza) • 4. Suasive (fanyiza) • 5. Passive/non-interfering (limisha) • 6. Consequential (chukiza)",
          "source": "Make look • Force to pay • Let get lost • Induce/persuade to make • Allow hoeing • Cause to hate / be hateful",
          "pronunciation": "ta-za-mi-sha / li-pi-sha / po-te-za / fa-nyi-za / li-mi-sha / chu-ki-za",
          "hint": "Madan (1903, Introduction, pp. xii–xiii)"
        },
        {
          "target": "5 Aspects of Reciprocal (Rp. -an-, p. xiii): 1. Reciprocal (pigana) • 2. Connected (tokana na, fuatana na) • 3. Combined (endana, liana) • 4. Internal interaction (shikana, kazana) • 5. Practicability with -ka (-kana: onekana, wezekana)",
          "source": "Fight each other • Part from / accompany • Go / weep together • Hold together / be compact • Be visible / be possible",
          "pronunciation": "pi-ga-na / to-ka-na na / e-nda-na / shi-ka-na / o-ne-ka-na",
          "hint": "Madan (1903, Introduction, p. xiii)"
        },
        {
          "target": "Decl. 1 (m/wa): mtu mwema huyu ampenda • Decl. 2 (m/mi): mti mdogo huu waota • Decl. 3 (ki/vi): kitu kizuri hiki chapendeza • Decl. 4 (u, w/ny): uimbo mbaya huu wachukiza • Decl. 5 (—/ma): kasha kubwa hili latosha • Decl. 6 (—/—): kazi ngumu hii yachosha • Decl. 7 (pa, p): mahali pembamba hapa pafaa • Decl. 8 (ku, kw): kufa kutukufu huku kwasifiwa (pp. xvi–xvii)",
          "source": "Conspectus II: Complete 8-Declension Concord Table of the Zanzibar Swahili Noun",
          "pronunciation": "m-tu mwe-ma / m-ti m-do-go / ki-tu ki-zu-ri / u-i-mbo m-ba-ya / ka-sha ku-bwa / ka-zi ngu-mu / ma-ha-li pe-mba-mba / ku-fa ku-tu-ku-fu",
          "hint": "Madan (1903, Conspectus II, pp. xvi–xvii)"
        },
        {
          "target": "A-aa (rising pitch = yes, assent) vs. Aa-a (falling pitch = no, dissent, p. 1) • akaenda e-e-e, kule-e-e, peupe-e-e (rising pitch = remoteness, p. 57) • Only 3 Simple Colour Adjectives: -ekundu, -eupe, -eusi (p. 58)",
          "source": "Intonation & pitch-lengthening rules and the three primary Bantu colour roots in Zanzibar Swahili",
          "pronunciation": "a-aa / aa-a / ku-le-e-e / e-ku-ndu / e-u-pe / e-u-si",
          "hint": "Madan (1903, pp. 1, 57, 58)"
        }
      ],
      "sentences": [
        {
          "target": "Njia hii yaendeka / yaendekana (Introduction, p. xii) • Pinda → pindua, kama → kamua, zima → zimua (Reversive Rv., p. xiii)",
          "source": "This road is passable / practicable (Neuter -ka / -kana) • Bend → reverse/turn, squeeze → wring out, extinguish → quench heat."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In A. C. Madan's Introduction (1903, pp. xi–xiii), what are the 8 Principal Forms of Verb-Stem and how many varieties of the Causal (Cs.) form does he distinguish?",
          "correctAnswer": "Primary (Pr.), Applied (Ap.), Causal (Cs. — with 6 varieties: simple, compulsive, permissive, suasive, passive/non-interfering, consequential), Reciprocal (Rp. — with 5 aspects), Reflexive (Rf.), Reduplicated (Rd.), Reversive (Rv.), and Stative (St.)",
          "options": [
            "Primary (Pr.), Applied (Ap.), Causal (Cs. — with 6 varieties: simple, compulsive, permissive, suasive, passive/non-interfering, consequential), Reciprocal (Rp. — with 5 aspects), Reflexive (Rf.), Reduplicated (Rd.), Reversive (Rv.), and Stative (St.)",
            "Only 4 forms: Simple, Passive, Causative, and Reciprocal",
            "Only 5 forms without Reversive or Stative",
            "10 forms without Causal varieties"
          ],
          "hint": "See Madan (1903, Introduction, pp. xi–xiii)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Declension in Madan's Conspectus II (1903, pp. xvi–xvii) with its exact model concord sentence:",
          "correctAnswer": "Decl. 1 (Living beings, m/wa) & Decl. 2 (Plants, m/mi): mtu mwema huyu ampenda & mti mdogo huu waota",
          "pairs": [
            {
              "left": "Decl. 1 (Living beings, m/wa) & Decl. 2 (Plants, m/mi)",
              "right": "mtu mwema huyu ampenda & mti mdogo huu waota"
            },
            {
              "left": "Decl. 3 (Diminutives, ki/vi) & Decl. 4 (Abstracts, u, w/ny)",
              "right": "kitu kizuri hiki chapendeza & uimbo mbaya huu wachukiza"
            },
            {
              "left": "Decl. 5 (Amplificatives, —/ma) & Decl. 6 (Foreign/N-class, —/—)",
              "right": "kasha kubwa hili latosha & kazi ngumu hii yachosha"
            },
            {
              "left": "Decl. 7 (Local mahali, pa) & Decl. 8 (Verbal, ku, kw)",
              "right": "mahali pembamba hapa pafaa & kufa kutukufu huku kwasifiwa"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-madan-1903-taxonomies-culture-22",
      "title": "Encyclopedic Cultural Taxonomies: 29 Gift Terms, 6 Guns, 11 Dhows, 10 Ropes, 6 Ordeals, Loom/Door Anatomy & 19 English Loans (pp. 1–238)",
      "icon": "Compass",
      "description": "Explore Madan's classified articles on gifts/bribes (*Bakshishi), sticks (Bakora), guns (*Bunduki), dhows (Chombo), ropes (Kamba), ordeals (Kiapo), looms (Kitanda cha mfumi), doors (Mlango), and English loans (Manowari).",
      "tips": "Madan (1903) groups entire semantic fields under key headwords: 29 gift/bribe/fee terms under *Bakshishi (p. 21), 11 sticks under Bakora (p. 21), 6 gun types under *Bunduki (pp. 31–32), 10 dhow ropes & 6 fibres under Kamba (p. 128), 6 ordeal types under Kiapo (p. 139), 19 English loanwords under Manowari (p. 207), and 18 perfumes under Manukato (p. 208).",
      "words": [
        {
          "target": "29 Gift/Present/Bribe/Fee Terms under *Bakshishi (p. 21): zawadi, tunu, hiba, atia, karama, kipaji, hidaya, takrima, ikiramu, sadaka, daka, nadhiri, kafara, mchango, ada, kilemba, ufito, kinyosha mgongo, kifungua mlango, kipa mkono, kiokozi, kiongozi, mlungula, rushwa, chichiri/kijiri, hongo, ubani, ubani waayarabu, jalidi",
          "source": "Complete classification of gifts, keepsakes, hospitality offerings, wedding/work fees, salvage/guide fees, bribes, and toll tribute",
          "pronunciation": "ba-kshi-shi / za-wa-di / tu-nu / ka-ra-ma / ki-pa-ji / ki-le-mba / m-lu-ngu-la / ru-shwa / ho-ngo",
          "hint": "Madan (1903, s.v. *Ada p. 3 & *Bakshishi p. 21)"
        },
        {
          "target": "6 Gun Types under *Bunduki (pp. 31–32): ya jiwe/gumegume (flintlock) • ya mrao (matchlock) • ya kushindiliwa/fataki (muzzle-loader) • ya kuvunja/kukunja (breech-loader) • ya viasi (cartridge gun) • ya midomo miwili/kasiba mbili (double-barrelled) • ya kindoro/makoa",
          "source": "Zanzibar firearms taxonomy in Madan (1903, pp. 31–32), plus 11 sticks under Bakora (p. 21: fimbo, ufito, gongo, mbarango, rungu, mkongojo, mpiko, mpweke, kipigi, mtobwe)",
          "pronunciation": "bu-ndu-ki ya ji-we / gu-me-gu-me / ya m-ra-o / ya fa-ta-ki / ya ku-vu-nja / ya vi-a-si",
          "hint": "Madan (1903, s.v. Bakora p. 21 & *Bunduki pp. 31–32)"
        },
        {
          "target": "10 Dhow Ropes & 6 Binding Fibres under Kamba (p. 128): amari, baraji, hamarawi, dasi, henza, jarari, demani, goshi, dakawa, mjiari/ujari • Fibres: ubugu, ugomba, ung'ong'o, ununu, ukindu, miwaa",
          "source": "Cable, sheet, tie, bolt-rope, halyard, tackle, lee-sheet, tack-rope, tow-rope & tiller-rope, plus 6 plant cordage fibres",
          "pronunciation": "a-ma-ri / ba-ra-ji / ha-ma-ra-wi / da-si / he-nza / ja-ra-ri / de-ma-ni / go-shi / da-ka-wa / m-ji-a-ri",
          "hint": "Madan (1903, s.v. Kamba, p. 128)"
        },
        {
          "target": "6 Ordeal Types under Kiapo (p. 139): kiapo cha moto (red-hot iron) • cha mkate (dry bread) • cha sindano (red-hot needle through lip/ear) • cha mibano (wooden splints on temples) • cha mchele (chewing dry rice) • cha kibao (bread with Koran ink)",
          "source": "The six judicial trials by ordeal (Kula kiapo) documented in Madan (1903, s.v. Kiapo, p. 139)",
          "pronunciation": "ki-a-po cha mo-to / cha m-ka-te / cha si-nda-no / cha mi-ba-no / cha m-che-le / cha ki-ba-o",
          "hint": "Madan (1903, s.v. Kiapo, p. 139)"
        },
        {
          "target": "Kitanda cha mfumi (Loom, pp. 165–166): mdoshi (treadle), faraka/mfariki (comb divider), marufaa (warp boards), kashabu (web rod), mladi/upanga (woof batten), mtande (warp), mshindio (woof) • Mlango (Door, p. 236): mwale vs. ubau, mfaa, mwimo, kizingiti, kimandu",
          "source": "Complete technical anatomy of the Zanzibari weaver's loom, bow-drill (Keke: kekee, msuka, jivu, uta, p. 136), water-pipe (Kiko: digali, bori, shilamu, p. 149), and carved double doors",
          "pronunciation": "m-do-shi / fa-ra-ka / ma-ru-fa-a / ka-sha-bu / m-la-di / m-fa-a / mwi-mo / ki-zi-ngi-ti",
          "hint": "Madan (1903, pp. 136, 149, 165–166, 236)"
        },
        {
          "target": "19 English Loanwords under Manowari (p. 207): manowari, boi, kala, shati, koti, fulana, sitoki, kabati, bira, burashi, daktari, stima, meli, afsa, dazin, inche, spitali, posta, afisi",
          "source": "Early English loanwords established in Zanzibar Swahili by 1903 (man-of-war, boy, collar, shirt, coat, flannel, stocking, cupboard, beer, brush, doctor, steamer, mail-steamer, officer, dozen, inch, hospital, post, office)",
          "pronunciation": "ma-no-wa-ri / bo-i / sha-ti / ko-ti / fu-la-na / si-to-ki / ka-ba-ti / da-kta-ri / sti-ma / me-li",
          "hint": "Madan (1903, s.v. Manowari, p. 207)"
        }
      ],
      "sentences": [
        {
          "target": "Kimbunga kikaangusha minazi na majumba yote (s.v. Kimbunga, pp. 153–154) • Mtu ni kiumbe; mti si kiumbe, na nyama si kiumbe (s.v. Kiumbe, p. 169)",
          "source": "The typhoon (of April 15, 1872 at Zanzibar) threw down all the coconut trees and houses • Only man is strictly a 'kiumbe' (rational creature), not a tree or an animal."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "Under 'Kiapo' (p. 139) and 'Kitanda cha mfumi' (pp. 165–166) in A. C. Madan's Swahili-English Dictionary (1903), what are the 6 judicial ordeal types and the 5 named parts of a native weaver's loom?",
          "correctAnswer": "6 Ordeals: kiapo cha moto, cha mkate, cha sindano, cha mibano, cha mchele, cha kibao; 5 Loom parts: mdoshi (treadle), faraka/mfariki (comb divider), marufaa (warp boards), kashabu (web rod), mladi/upanga (woof batten)",
          "options": [
            "6 Ordeals: kiapo cha moto, cha mkate, cha sindano, cha mibano, cha mchele, cha kibao; 5 Loom parts: mdoshi (treadle), faraka/mfariki (comb divider), marufaa (warp boards), kashabu (web rod), mladi/upanga (woof batten)",
            "Only water and poison ordeals; loom has no named parts",
            "6 wedding fees; 5 dhow mast parts",
            "6 coconut stages; 5 fishing traps"
          ],
          "hint": "See Madan (1903, s.v. Kiapo p. 139 & Kitanda pp. 165–166)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each specialized Zanzibari cultural or technical term in Madan (1903) with its exact definition:",
          "correctAnswer": "Kasimele / Tui la kasimele vs. Tui la nyuma (p. 132): Thick first-press coconut cream before adding water vs. second-press milk with water",
          "pairs": [
            {
              "left": "Kasimele / Tui la kasimele vs. Tui la nyuma (p. 132)",
              "right": "Thick first-press coconut cream before adding water vs. second-press milk with water"
            },
            {
              "left": "Keke bow-drill parts (p. 136)",
              "right": "kekee (steel bit), msuka/msukano (wooden handle), jivu (socket), uta (bow & string)"
            },
            {
              "left": "Kiko water-pipe parts (p. 149)",
              "right": "kiko (coconut water-shell), digali/mdakali (tubes), bori (clay bowl), shilamu (mouthpiece tube), malio ya kiko (bubbling)"
            },
            {
              "left": "Mgonjwa vs. Mwele (s.v. Mgonjwa, p. 226)",
              "right": "Mgonjwa can still move about a little, whereas Mwele is bedridden/crippled by malady"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-madan-1903-proverbs-riddles-22",
      "title": "65+ Embedded Proverbs, Riddles & Semantic Contrasts in Madan (1903, pp. 1–238, 442)",
      "icon": "Award",
      "description": "Study the 65+ Swahili proverbs, riddles (Vitendawili), and semantic distinctions (-kuu vs. -kubwa, *Badili vs. Geuza, *Maisha vs. Umri vs. Uzima vs. Roho) embedded across Madan (1903).",
      "tips": "Madan (1903) illustrates headwords with authentic Zanzibari proverbs, riddles (such as 'Kitendawili! — Tega! Nyumba yangu kubwa, haina taa. — Kaburi' on p. 167 and 'Marra chako, marra changu — mali' on p. 210), and precise semantic contrasts.",
      "words": [
        {
          "target": "Baa pia hutokana na vijana na watumwa (p. 18) • Mchea mwana kulia, hulia yeye & Mchelea bahari si msafiri (p. 34) • Mchagua jembe si mkulima & Mwana wa kuku hafunzwi kuchakura (p. 36) • Kidole kimoja hakivunji chawa (p. 40) • Mtu huchongewa na ulimi wake (p. 45) • Hukushiba mikundeni, utashiba michorokoni? & Mchovya asali hachovyi marra moja (p. 46)",
          "source": "Proverbs in Sections B and CH of Madan (1903, pp. 18–46)",
          "pronunciation": "ba-a pi-a / m-che-a mwa-na / m-cha-gu-a je-mbe / ki-do-le ki-mo-ja / m-cho-vya a-sa-li",
          "hint": "Madan (1903, pp. 18, 34, 36, 40, 45, 46)"
        },
        {
          "target": "Elimu ndio mwanga uongozao (p. 59) • Nakimbia pafiwapo, nakimbilia paliwapo & Mafahali wawili hawakai zizi moja (p. 64) • Kufarakana hakuvunji kujuana (p. 66) • Fumbo humfumba mjinga (p. 73) • Konzi ya maji haifumbatiki (p. 74) • Liandikwalo halifutiki (p. 78) • Kaa akiinua gando mambo yamekatika (p. 80) • Nazi mbovu harabu ya nzima (p. 93) • Mwenyi ghathabu mbele yake amesimama shetani (p. 95)",
          "source": "Proverbs in Sections E, F, G, and H of Madan (1903, pp. 59–95)",
          "pronunciation": "e-li-mu ndi-o mwa-nga / ma-fa-ha-li wa-wi-li / ko-nzi ya ma-ji / li-a-ndi-kwa-lo",
          "hint": "Madan (1903, pp. 59, 64, 66, 73, 74, 78, 80, 93, 95)"
        },
        {
          "target": "Lijaliwalo kuwa, halina uzuio (p. 112) • Jawabu la kesho huandaa leo (p. 114) • Jitahidi haiondoi amri ya Muungu (p. 118) • Majogoo ndio saa la shamba, Johari za mtu ni mbili, akili na haya & Mtupa jongoo hutupa na mti wake (p. 119) • Juhudi si pato (p. 120) • Majuto ni mjukuu, mwishowe huja kinyume & Aliyoko juu, mngojee chini (p. 121)",
          "source": "Proverbs in Section J of Madan (1903, pp. 112–121)",
          "pronunciation": "li-ja-li-wa-lo / ja-wa-bu la ke-sho / ma-jo-go-o / jo-ha-ri za m-tu / ma-ju-to ni m-ju-ku-u",
          "hint": "Madan (1903, pp. 112, 114, 118, 119, 120, 121)"
        },
        {
          "target": "Ukukuu wa kamba si upya wa ukambaa & Mkamia maji hayanywi (p. 128) • Aliye kando, haangukiwi na mti (p. 129) • Maji mafu, mvuvi mkafu (p. 135) • Kufa kikondoo ndiko kufa kiungwana (p. 150) • Kimya kingi kina mshindo mkuu (p. 154) • Kinga na kinga, ndipo moto uwakapo (p. 156) • Mtu wa kikoa asilipe ana kipara cheupe (p. 159) • Ganda la mua chungu kaona kivuno (p. 170) • Mwana wa mtu ni kizushi, akizuka zuka naye (p. 173) • Kuzima koleo si mwisho wa uhunzi & Lisilo mkoma, hujikoma lilo (p. 175) • Asiosikia mkubwa, huona makubwa (p. 181) • Wa kuume haukati wa kushoto (p. 187) • Mkwaia nyoka, aonapo ukuti hushituka (p. 188) • Kweli iliyo uchungu si uwongo ulio tamu (p. 190)",
          "source": "Proverbs in Section K of Madan (1903, pp. 128–190)",
          "pronunciation": "u-ku-ku-u wa ka-mba / ku-fa ki-ko-ndo-o / ki-mya ki-ngi / ku-zi-ma ko-le-o / kwe-li i-li-yo u-chu-ngu",
          "hint": "Madan (1903, pp. 128, 129, 135, 150, 154, 156, 159, 170, 173, 175, 181, 187, 188, 190)"
        },
        {
          "target": "Mlaji ni mla leo, mla jana kalani? (p. 191) • Haulambwi mkono mtupu (p. 193) • Mambo ni maarifa, si nguvu (p. 201) • Mama ni Muungu wa pili (p. 207) • Mapenzi hayana macho (p. 209) • Siogopi unene wa mbuyu (p. 218) • Mchuzi ni maji (p. 221) • Mfinyanzi hulia gae (p. 224) • Mgemi akisifiwa tembo hulitia maji & Mgeni na aje mwenyeji apone (p. 226) • Ada ya mja, hunena; mngwana ni kitendo & Kwenyi miti hakuna mjenzi (p. 229) • Mjinga ni mtu, usinene ni ng'ombe & Mjumbe hauawi (p. 230) • Mkata hana kinyongo (p. 231) • Penyi wimbi na mlango ni papo (p. 236) • Mlimwengu ni mwanawe (p. 237)",
          "source": "Proverbs in Sections L and M of Madan (1903, pp. 191–237)",
          "pronunciation": "m-la-ji ni m-la le-o / ma-mbo ni ma-a-ri-fa / ma-ma ni mu-u-ngu wa pi-li / m-fi-nya-nzi hu-li-a ga-e / m-ju-mbe ha-u-a-wi",
          "hint": "Madan (1903, pp. 191, 193, 201, 207, 209, 218, 221, 224, 226, 229, 230, 231, 236, 237)"
        }
      ],
      "sentences": [
        {
          "target": "Kitendawili! — Tega! Nyumba yangu kubwa, haina taa. — Kaburi (p. 167) • Marra chako, marra changu. — Mali (pp. 210–211)",
          "source": "Here's a riddle! — Out with it! My house is large, but has no lamp. — The grave • Now yours, now mine. — Wealth/property."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In A. C. Madan's Swahili-English Dictionary (1903), how does Madan distinguish '-kuu' from '-kubwa' (p. 187) and '*Maisha' from 'Umri', 'Uzima', and 'Roho' (p. 203)?",
          "correctAnswer": "'-kuu' denotes moral/social pre-eminence (so the rabbit sungura is 'mkuu wa nyama', king of beasts), whereas '-kubwa' denotes physical size (so the elephant tembo is 'nyama mkubwa'); '*Maisha' is life in duration/mode of living, 'Umri' is age/time of life, 'Uzima' is living health/vitality, and 'Roho' is the soul/life-principle",
          "options": [
            "'-kuu' denotes moral/social pre-eminence (so the rabbit sungura is 'mkuu wa nyama', king of beasts), whereas '-kubwa' denotes physical size (so the elephant tembo is 'nyama mkubwa'); '*Maisha' is life in duration/mode of living, 'Umri' is age/time of life, 'Uzima' is living health/vitality, and 'Roho' is the soul/life-principle",
            "'-kuu' and '-kubwa' are identical; '*Maisha' means only wealth",
            "'-kuu' is used only of trees; '-kubwa' is used only of water",
            "'-kuu' is Arabic; '-kubwa' is Portuguese"
          ],
          "hint": "See Madan (1903, s.v. -kuu p. 187 & *Maisha p. 203)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Swahili proverb in Madan (1903) with its exact English translation and explanation:",
          "correctAnswer": "Kufa kikondoo ndiko kufa kiungwana (p. 150) & Kuzima koleo si mwisho wa uhunzi (p. 175): 'To die like a sheep (unresistingly) is to die like a hero/gentleman' & 'Cooling the tongs is not the end of the smith's job'",
          "pairs": [
            {
              "left": "Kufa kikondoo ndiko kufa kiungwana (p. 150) & Kuzima koleo si mwisho wa uhunzi (p. 175)",
              "right": "'To die like a sheep (unresistingly) is to die like a hero/gentleman' & 'Cooling the tongs is not the end of the smith's job'"
            },
            {
              "left": "Mfinyanzi hulia gae (p. 224) & Mgemi akisifiwa tembo hulitia maji (p. 226)",
              "right": "'A potter eats off a potsherd' & 'If the palm-tapper hears his palm-wine praised, he waters it'"
            },
            {
              "left": "Ada ya mja, hunena; mngwana ni kitendo (p. 229) & Mjumbe hauawi (p. 230)",
              "right": "'A slave talks, a free man acts' & 'A messenger's person is sacred (is not killed)'"
            },
            {
              "left": "Kitendawili: Nyumba yangu kubwa, haina taa (p. 167) & Marra chako, marra changu (p. 210)",
              "right": "Kaburi (The grave) & Mali (Wealth/property)"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 23: Complete Line-by-Line Integration of Mohamed Mwamzandi's "The pragmatics of Swahili relative clauses" (Language Science Press, 2022, Ch. 13, pp. 227–246, DOI: 10.5281/zenodo.6393758) ──
if (SWAHILI_CONFIG.sources && !SWAHILI_CONFIG.sources.includes("mwamzandi-swahili-relative-clauses-2022")) {
  SWAHILI_CONFIG.sources.push("mwamzandi-swahili-relative-clauses-2022");
}

SWAHILI_UNITS.push({
  "id": "swahili-unit-23",
  "title": "Unit 23: Mohamed Mwamzandi (2022) — The Pragmatics of Swahili Relative Clauses (Helsinki Corpus 440 RCs, Examples 1–32, Figure 1 & Tables 1–2)",
  "description": "Master all 20 pages (pp. 227–246) of Mohamed Mwamzandi's 2022 study 'The pragmatics of Swahili relative clauses' (in Sibanda, Ngonyani, Choti & Biersteker, eds., Language Science Press): the 3 RC strategies (tensed, amba, general), TAM & subject-postposing rules, Russell's (1992) disambiguation test, the 440-RC Helsinki Corpus of Swahili study, Figure 1 (restrictiveness), Table 1 (word length & adverbial fronting), Table 2 (grammatical role & continue vs. shift topic transitions), all 32 interlinear examples, 20 abbreviations, and 27 references.",
  "icon": "BookOpen",
  "skills": [
    {
      "id": "swahili-mwamzandi-2022-three-relatives-morphosyntax-23",
      "title": "Three RC Strategies, Subject Postposing, Disambiguation & Complexity (pp. 227–233, Examples 1–13)",
      "icon": "Layers",
      "description": "Learn the morphosyntactic structure of Swahili tensed, amba, and general relative clauses, TAM constraints (Keach 1985), subject postposing in object RCs, Russell's (1992) disambiguation account, and Keenan & Comrie's (1977) Accessibility Hierarchy across Examples (1)–(13).",
      "tips": "In tensed RCs, the relative marker (SRM/ORM) is prefixed to the verb right after the tense marker (li-, na-, taka-, or negative si-), and nothing may intervene between the head noun and the verb—forcing lexical subjects in object RCs to be postposed (Kikosi [a-li-cho-ki-ongoza Kisaka], Ex. 7). In amba RCs, the RM is suffixed to amba, allowing all TAM markers and preverbal subjects (Kikosi [amba-cho Kisaka a-li-ki-ongoza], Ex. 6).",
      "words": [
        {
          "target": "(1) Askari [a-li-ye-ki-ongoza kikosi] (Tensed RC) • (2) Askari [amba-ye a-li-ki-ongoza kikosi] (amba RC) • (3) Askari a-ki-ongoz-a-ye kikosi (General relative, p. 228)",
          "source": "The policeman who led the squad (Tensed & amba RCs) • The policeman who is leading the squad (General relative, time unspecified/present/habitual per Ashton 1944)",
          "pronunciation": "a-ska-ri a-li-ye-ki-o-ngo-za ki-ko-si / a-mba-ye a-li-ki-o-ngo-za / a-ki-o-ngo-za-ye",
          "hint": "Mwamzandi (2022, §1, p. 228, Examples 1–3: 1.SM = a- [Class 1 askari], PST = -li-, 1.SRM = -ye-, 7.OM = -ki- [Class 7 kikosi])"
        },
        {
          "target": "TAM Restriction (Keach 1985, p. 230): Tensed RCs only with past li-, present na-, future taka-, and negation si- • amba RCs with all TAM markers",
          "source": "Morphosyntactic distribution of tensed vs. amba relative markers across Swahili tense-aspect-mood prefixes",
          "pronunciation": "li / na / ta-ka / si / a-mba",
          "hint": "Mwamzandi (2022, §2, p. 230)"
        },
        {
          "target": "(6) Kikosi [amba-cho Kisaka a-li-ki-ongoza] (preverbal subject) vs. (7) Kikosi [a-li-cho-ki-ongoza Kisaka] (postverbal subject, p. 230)",
          "source": "The squad which Kisaka led (amba object RC with preverbal lexical subject Kisaka vs. tensed object RC with postposed subject Kisaka)",
          "pronunciation": "ki-ko-si a-mba-cho ki-sa-ka a-li-ki-o-ngo-za / a-li-cho-ki-o-ngo-za ki-sa-ka",
          "hint": "Mwamzandi (2022, §2, p. 230, Examples 6–7; citing Vitale 1981, Keach 1985, Demuth & Harford 1999, Ngonyani 2001, 2006)"
        },
        {
          "target": "(8) Mwivi [a-li-ye-mw-ona mtoto] (ambiguous SVO/OVS) • (9) Mwivi [amba-ye mtoto a-li-mw-ona] • (10) Mwivi wa-li-ye-mu-ona watoto (Class 2 SM wa-) • (11) Mwivi [amba-ye a-li-mw-ona mtoto] (pp. 231–232)",
          "source": "The thief who saw the child / whom the child saw (Ex. 8) • The thief whom the child saw (Ex. 9 & 11) • The thief who the children saw (Ex. 10)",
          "pronunciation": "mwi-vi a-li-ye-mwo-na m-to-to / a-mba-ye m-to-to a-li-mwo-na / wa-li-ye-mu-o-na wa-to-to",
          "hint": "Mwamzandi (2022, §2, pp. 231–232, Examples 8–11: critique of Russell 1992: 125–126 & Centering Theory per Grosz et al. 1995, Grosz & Sidner 1998)"
        },
        {
          "target": "(12) Masanduku [amba-yo sisi watu wa-wili au wa-tatu ha-tu-wez-i]₁ [ku-ya-enua]₂ vs. (13) Masanduku [tu-si-yo-weza sisi watu wa-wili au watatu] ku-ya-enua]₂ (p. 232)",
          "source": "Boxes which two or three of us cannot lift (8-word, 2-clause complex RC with amba-yo vs. tensed negative tu-si-yo-weza)",
          "pronunciation": "ma-sa-ndu-ku a-mba-yo si-si wa-tu wa-wi-li au wa-ta-tu ha-tu-we-zi ku-ya-e-nu-a",
          "hint": "Mwamzandi (2022, §2, p. 232, Examples 12–13; citing Ashton 1944: 310, Keenan & Comrie 1977, Green 1996: 133)"
        },
        {
          "target": "20 Glossing Abbreviations (p. 244): 1, 2, 3... (Noun classes), AGR, APPL, AUX, FUT, FV, INF, OM, ORM, PASS, PFV, PROG, PRS, PST, RECP, REFL, SBJV, SM, SRM, STV",
          "source": "Complete morphological glossing conventions used across Examples (1)–(32) in Mwamzandi (2022, p. 244)",
          "pronunciation": "s-r-m / o-r-m / s-m / o-m / a-p-p-l / p-a-s-s / p-f-v / r-e-c-p / s-t-v",
          "hint": "Mwamzandi (2022, Abbreviations, p. 244)"
        }
      ],
      "sentences": [
        {
          "target": "Askari [a-li-ye-ki-ongoza kikosi] • Kikosi [amba-cho Kisaka a-li-ki-ongoza] vs. Kikosi [a-li-cho-ki-ongoza Kisaka] (pp. 228, 230)",
          "source": "The policeman who led the squad • The squad which Kisaka led (preverbal subject with amba-cho vs. postposed subject with a-li-cho-ki-ongoza)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Mohamed Mwamzandi (2022, pp. 230–232), why does he argue that Russell's (1992: 125–126) disambiguation account of 'amba' relative clauses is insufficient?",
          "correctAnswer": "Because (1) when subject and object belong to different noun classes (e.g., Ex. 10 'Mwivi wa-li-ye-mu-ona watoto'), the subject marker 'wa-' already disambiguates the tensed RC, and (2) an 'amba' RC with a postverbal subject (Ex. 11 'Mwivi [amba-ye a-li-mw-ona mtoto]') remains structurally ambiguous and is resolved pragmatically via discourse salience / Centering Theory",
          "options": [
            "Because (1) when subject and object belong to different noun classes (e.g., Ex. 10 'Mwivi wa-li-ye-mu-ona watoto'), the subject marker 'wa-' already disambiguates the tensed RC, and (2) an 'amba' RC with a postverbal subject (Ex. 11 'Mwivi [amba-ye a-li-mw-ona mtoto]') remains structurally ambiguous and is resolved pragmatically via discourse salience / Centering Theory",
            "Because Swahili does not allow OVS word order in any clause type",
            "Because 'amba' can only be used with inanimate noun classes",
            "Because tensed relative clauses never take object markers"
          ],
          "hint": "See Mwamzandi (2022, §2, pp. 231–232, Examples 8–11)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each verbatim Swahili relative clause example from Mwamzandi (2022, pp. 228–232) with its exact grammatical characterization:",
          "correctAnswer": "(1) Askari [a-li-ye-ki-ongoza kikosi] (p. 228): Tensed subject RC with SRM -ye- prefixed after past tense -li-",
          "pairs": [
            {
              "left": "(1) Askari [a-li-ye-ki-ongoza kikosi] (p. 228)",
              "right": "Tensed subject RC with SRM -ye- prefixed after past tense -li-"
            },
            {
              "left": "(3) Askari a-ki-ongoz-a-ye kikosi (p. 228)",
              "right": "General tenseless relative with SRM -ye suffixed after final vowel -a"
            },
            {
              "left": "(6) Kikosi [amba-cho Kisaka a-li-ki-ongoza] vs. (7) Kikosi [a-li-cho-ki-ongoza Kisaka] (p. 230)",
              "right": "Preverbal subject Kisaka in amba object RC vs. postposed subject Kisaka in tensed object RC"
            },
            {
              "left": "(12) Masanduku [amba-yo sisi watu wa-wili au wa-tatu ha-tu-wez-i]₁ [ku-ya-enua]₂ (p. 232)",
              "right": "Complex 2-clause, 8-word object RC from Ashton (1944: 310)"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-mwamzandi-2022-corpus-restrictiveness-length-23",
      "title": "Helsinki Corpus Methodology, Restrictiveness (Figure 1) & RC Length / Adverbial Fronting (Table 1 & Examples 14–24)",
      "icon": "BarChart2",
      "description": "Study Mwamzandi's (2022, pp. 233–238) methodology using the 25M-word Helsinki Corpus of Swahili (HCS 2.0) and Korp, the Chi-squared distribution of restrictive vs. non-restrictive RCs (Figure 1), ANOVA word-length results (Table 1), and fronted adverbial phrases across Examples (14)–(24).",
      "tips": "In the 440-RC sample from HCS 2.0 (285 tensed + 155 amba), 86.0% of tensed RCs are restrictive (245 vs. 40 non-restrictive), whereas 79.4% of amba RCs are non-restrictive (123 vs. 32 restrictive; χ² = 180.89, p < 0.001). Mean RC length is ~7 words for amba (6.34 restrictive, 7.21 non-restrictive) vs. ~4 words for tensed RCs (3.09 restrictive, 4.25 non-restrictive; F = 197.49, p < 0.001).",
      "words": [
        {
          "target": "Helsinki Corpus of Swahili 2.0 (HCS 2.0, 25M words, Korp concordance, p. 233 & p. 244): N = 440 RCs (285 Tensed RCs + 155 amba RCs)",
          "source": "Primary corpus dataset of mid-20th-century to 2015 Swahili newspaper, literary, educational & scientific texts (http://urn.fi/urn:nbn:fi:lb-2014032624)",
          "pronunciation": "he-lsi-nki co-rpus / ko-rp",
          "hint": "Mwamzandi (2022, §3 p. 233 & Source p. 244)"
        },
        {
          "target": "Figure 1 (p. 234): amba RCs (N=155): 32 Restrictive (20.6%), 123 Non-restrictive (79.4%) • Tensed RCs (N=285): 245 Restrictive (86.0%), 40 Non-restrictive (14.0%) • χ²(1, N = 440) = 180.89, p < 0.001",
          "source": "Distribution of restrictive and non-restrictive relative clauses in the 440-RC Helsinki Corpus sample",
          "pronunciation": "a-mba / te-nsed",
          "hint": "Mwamzandi (2022, §4.1, Figure 1, p. 234)"
        },
        {
          "target": "(14) Bwana yule [a-na-ye-sinzia] (p. 234) • (15) A-li-m-rud-i-a Adili [a-li-ye-kuwa a-na-pata fahamu] (p. 235) • (16) Krapf [a-li-ye-li-tumikia dhehebu la C.M.S] (p. 235)",
          "source": "That man (over there) who is dozing (tensed restrictive) • He got back to Adili, who was regaining his consciousness (tensed non-restrictive) • Krapf, who served the C.M.S Christian denomination (tensed non-restrictive)",
          "pronunciation": "bwa-na yu-le a-na-ye-si-nzi-a / a-li-m-ru-di-a a-di-li / kra-pf a-li-ye-li-tu-mi-ki-a dhe-he-bu la c-m-s",
          "hint": "Mwamzandi (2022, §4.1, pp. 234–235, Examples 14–16)"
        },
        {
          "target": "(17) A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza weupe wake] (p. 235) • (18) Mambo muhimu [[amba-yo ya-na-fanya]₁ [shairi li-it-w-e la Ki-swahili]₂] (p. 236)",
          "source": "He was wearing a white cloak that had started to lose its whiteness (amba non-restrictive) • Important things that make a poem be called a Swahili poem (6-word, 2-clause amba restrictive)",
          "pronunciation": "ru-be-ga nye-u-pe a-mba-yo i-li-a-nza ku-po-te-za we-u-pe wa-ke / ma-mbo mu-hi-mu a-mba-yo ya-na-fa-nya sha-i-ri li-i-twe la ki-swa-hi-li",
          "hint": "Mwamzandi (2022, §4.1, pp. 235–236, Examples 17–18)"
        },
        {
          "target": "Table 1 (p. 237): amba Restrictive Mean = 6.34 (SD 3.25), Non-restrictive Mean = 7.21 (SD 3.71) • Tensed Restrictive Mean = 3.09 (SD 2.34), Non-restrictive Mean = 4.25 (SD 2.61) • ANOVA: RM F(1, 440) = 197.49, p < 0.001; Type F(1, 440) = 11.11, p < 0.001",
          "source": "Mean and standard deviation of RC word length across restrictive and non-restrictive clauses, plus Examples (19a–b) & (20a–b) Mwanamke mjane amba-ye / a-li-ye-kuwa jirani yao (hapo zamani)",
          "pronunciation": "mwa-na-mke m-ja-ne a-mba-ye a-li-ku-wa ji-ra-ni ya-o ha-po za-ma-ni",
          "hint": "Mwamzandi (2022, §4.2, pp. 236–237, Examples 19–20 & Table 1)"
        },
        {
          "target": "(21) Wa-po wananchi [amba-o kwa makusudi wa-na-ziba mifereji] vs. (22) *Wa-po wananchi kwa makusudi [wa-na-o-ziba mifereji] • (23–24) Wa-po wananchi [amba-o / wa-na-o-ziba mifereji kwa makusudi] (pp. 237–238)",
          "source": "There are some citizens who deliberately block taps (grammatical with fronted AP kwa makusudi after amba-o in Ex. 21, ungrammatical before a tensed RC in Ex. 22, and grammatical postverbally in Ex. 23–24)",
          "pronunciation": "wa-po wa-na-nchi a-mba-o kwa ma-ku-su-di wa-na-zi-ba mi-fe-re-ji",
          "hint": "Mwamzandi (2022, §4.2, pp. 237–238, Examples 21–24)"
        }
      ],
      "sentences": [
        {
          "target": "A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza weupe wake] (p. 235) • Wa-po wananchi [amba-o kwa makusudi wa-na-ziba mifereji] (p. 237)",
          "source": "He was wearing a white cloak that had started to lose its whiteness • There are some citizens who deliberately block taps."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "According to Figure 1 (p. 234) and Table 1 (p. 237) in Mohamed Mwamzandi (2022), what are the exact restrictive vs. non-restrictive counts and mean word lengths (with SDs) for 'amba' and tensed RCs across the 440 tokens in the Helsinki Corpus of Swahili?",
          "correctAnswer": "Figure 1: amba RCs (N=155) = 32 restrictive, 123 non-restrictive; Tensed RCs (N=285) = 245 restrictive, 40 non-restrictive (χ² = 180.89, p < 0.001) • Table 1 Mean (SD) length: amba restrictive 6.34 (3.25), amba non-restrictive 7.21 (3.71); Tensed restrictive 3.09 (2.34), Tensed non-restrictive 4.25 (2.61) (F = 197.49, p < 0.001)",
          "options": [
            "Figure 1: amba RCs (N=155) = 32 restrictive, 123 non-restrictive; Tensed RCs (N=285) = 245 restrictive, 40 non-restrictive (χ² = 180.89, p < 0.001) • Table 1 Mean (SD) length: amba restrictive 6.34 (3.25), amba non-restrictive 7.21 (3.71); Tensed restrictive 3.09 (2.34), Tensed non-restrictive 4.25 (2.61) (F = 197.49, p < 0.001)",
            "Both amba and tensed RCs have 220 tokens and an identical mean length of 5.00 words",
            "Tensed RCs are longer than amba RCs and mostly non-restrictive",
            "Only 100 RCs were sampled and length had no statistically significant effect"
          ],
          "hint": "See Mwamzandi (2022, Figure 1 p. 234 & Table 1 p. 237)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each corpus example from Section 4.1–4.2 of Mwamzandi (2022, pp. 234–238) with its exact English translation and syntactic property:",
          "correctAnswer": "(14) Bwana yule [a-na-ye-sinzia] (p. 234): 'That man (over there) who is dozing' — 1-word tensed restrictive RC",
          "pairs": [
            {
              "left": "(14) Bwana yule [a-na-ye-sinzia] (p. 234)",
              "right": "'That man (over there) who is dozing' — 1-word tensed restrictive RC"
            },
            {
              "left": "(16) Krapf [a-li-ye-li-tumikia dhehebu la C.M.S] (p. 235)",
              "right": "'Krapf, who served the C.M.S Christian denomination' — tensed non-restrictive RC on a proper noun"
            },
            {
              "left": "(17) A-li-kuwa a-me-va-li-a rubega nyeupe [amba-yo i-li-anza ku-poteza weupe wake] (p. 235)",
              "right": "'He was wearing a white cloak that had started to lose its whiteness' — amba non-restrictive topic-comment RC"
            },
            {
              "left": "(21) Wa-po wananchi [amba-o kwa makusudi wa-na-ziba mifereji] (p. 237)",
              "right": "'There are some citizens who deliberately block taps' — fronted adverbial phrase kwa makusudi licensed by amba-o"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-mwamzandi-2022-topic-transitions-table2-23",
      "title": "Information Structure, Grammatical Role & Continue vs. Shift Topic Transitions (Table 2 & Examples 25–32, pp. 238–246)",
      "icon": "Compass",
      "description": "Master Section 4.3 and Section 5 of Mwamzandi (2022, pp. 238–246): Table 2 (Head Noun grammatical role × topic status), continue transitions (HN = Subj, topic) vs. shift transitions (HN = Obj/PP, topic), Examples (25a–c)–(32), and all 27 scholarly references.",
      "tips": "When the Head Noun (HN) is the matrix subject and discourse topic (continue transition, Table 2 Row 1), tensed RCs dominate (70 tensed [62 restr., 8 non-restr.] vs. 28 amba; χ² = 18, p < 0.001). When the HN is a matrix object that becomes the new topic of the RC and subsequent clauses (shift transition, Table 2 Row 3), amba RCs dominate (65 amba [10 restr., 55 non-restr.] vs. 36 tensed).",
      "words": [
        {
          "target": "(25a) Nyumba [a-li-yo-kaa Beneti]. (25b) I-li-kuwa ya Kiswahili kabisa, (25c) I-li-on-ek-an-a kuukuu (pp. 238–239) • (26) Adili a-li-vunja amri [a-li-yo-p-ew-a] (p. 239)",
          "source": "The house which Beneti stayed. It was a typical Swahili house, it looked old (postposed Beneti keeps nyumba as sole preverbal topic) • Adili broke the command he was given (amri is non-topic object; Adili is topic)",
          "pronunciation": "nyu-mba a-li-yo-ka-a be-ne-ti / i-li-o-ne-ka-na ku-u-ku-u / a-di-li a-li-vu-nja a-mri a-li-yo-pe-wa",
          "hint": "Mwamzandi (2022, §4.3, pp. 238–239, Examples 25a–c & 26)"
        },
        {
          "target": "Table 2 (p. 240, N=440): HN = Subj, topic (7 amba restr., 21 non-restr. [28] vs. 62 tensed restr., 8 non-restr. [70], Total 98, χ²=18, p<0.001) • HN = Subj, non-topic (1, 0 vs. 4, 1, Total 6) • HN = Obj, topic (10, 55 [65] vs. 21, 15 [36], Total 101) • HN = Obj, non-topic (3, 24 [27] vs. 94, 5 [99], Total 126) • HN = PP, topic (5, 18 [23] vs. 9, 9 [18], Total 41, p>0.05) • HN = PP, non-topic (6, 5 [11] vs. 55, 2 [57], Total 68, χ²=31, p<0.001)",
          "source": "Complete 6-row contingency table of Head Noun grammatical role (Subject, Object, PP complement) and topic status across all 440 HCS relative clauses",
          "pronunciation": "su-bje-ct / o-bje-ct / t-o-p-i-c",
          "hint": "Mwamzandi (2022, §4.3, Table 2, p. 240)"
        },
        {
          "target": "(27) Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu (Continue transition, p. 240) • (28) [Waandamanaji wa-li-kaidi amri hiyo]₁ [na ku-wa-rush-i-a mawe polisi]₂ [amba-o wa-li-jibu mapigo]₃ [kwa ku-fyatua risasi za moto]₄ (Shift transition, p. 241)",
          "source": "The writers who followed have abandoned this style (of writing) • The demonstrators disobeyed the command and threw stones to the policemen who responded to the beatings (of stones) by shooting live bullets",
          "pronunciation": "wa-a-ndi-shi wa-li-o-fu-a-ta wa-me-a-cha-na na m-ti-ndo hu-u / wa-a-nda-ma-na-ji wa-li-ka-i-di a-mri hi-yo",
          "hint": "Mwamzandi (2022, §4.3, pp. 240–241, Examples 27–28)"
        },
        {
          "target": "(29) Bali Rehema a-li-po-nyanyua macho ku-m-tazama Bikiza [a-li-ye-leta taarifa ya kifo]... (p. 241) • (30) A-li-anza ku-safiri ili ku-epuka ghadhabu ya ndugu yake amba-ye a-li-u-kosa u-rithi huo (p. 242)",
          "source": "But when Rehema raised her eyes to look at Bikiza who brought the message of death... (tensed shift on proper noun Bikiza) • He started traveling to avoid the anger of his sibling who had missed the inheritance (amba shift on PP complement)",
          "pronunciation": "ba-li re-he-ma a-li-po-nya-nyu-a ma-cho ku-m-ta-za-ma bi-ki-za / gha-dha-bu ya ndu-gu ya-ke a-mba-ye a-li-u-ko-sa u-ri-thi hu-o",
          "hint": "Mwamzandi (2022, §4.3, pp. 241–242, Examples 29–30)"
        },
        {
          "target": "(31) A-li-ji-ona katika nyumba kubwa sana i-li-yo-kuwa n-zuri ajabu (p. 242) • (32) Katika hukumu i-li-yo-to-lew-a jana na Jaji Bernard Luand (p. 242)",
          "source": "He found himself in a very big house that was surprisingly beautiful (tensed RC on PP complement with intransitive kuwa) • In a ruling that was given yesterday by Judge Bernard Luand (tensed RC on PP complement with passivized to-lew-a)",
          "pronunciation": "a-li-ji-o-na ka-ti-ka nyu-mba ku-bwa sa-na i-li-yo-ku-wa n-zu-ri a-ja-bu / ka-ti-ka hu-ku-mu i-li-yo-to-le-wa ja-na na ja-ji be-rna-rd lu-a-nd",
          "hint": "Mwamzandi (2022, §4.3, p. 242, Examples 31–32)"
        }
      ],
      "sentences": [
        {
          "target": "Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu (p. 240) • Katika hukumu i-li-yo-to-lew-a jana na Jaji Bernard Luand (p. 242)",
          "source": "The writers who followed have abandoned this style (of writing) • In a ruling that was given yesterday by Judge Bernard Luand."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Table 2 ('Effect of grammatical role and topic on Swahili RC variation', p. 240) of Mohamed Mwamzandi (2022), how do 'continue transitions' (HN = Subj, topic) contrast with 'shift transitions' (HN = Obj, topic)?",
          "correctAnswer": "In continue transitions (HN = Subj, topic, Total = 98), tensed RCs are strongly preferred (70 tensed [62 restrictive, 8 non-restrictive] vs. 28 amba [7 restrictive, 21 non-restrictive], χ² = 18, p < 0.001); in shift transitions (HN = Obj, topic, Total = 101), amba RCs are preferred (65 amba [10 restrictive, 55 non-restrictive] vs. 36 tensed [21 restrictive, 15 non-restrictive])",
          "options": [
            "In continue transitions (HN = Subj, topic, Total = 98), tensed RCs are strongly preferred (70 tensed [62 restrictive, 8 non-restrictive] vs. 28 amba [7 restrictive, 21 non-restrictive], χ² = 18, p < 0.001); in shift transitions (HN = Obj, topic, Total = 101), amba RCs are preferred (65 amba [10 restrictive, 55 non-restrictive] vs. 36 tensed [21 restrictive, 15 non-restrictive])",
            "amba RCs are preferred in continue transitions and tensed RCs are preferred in shift transitions",
            "Grammatical role and topic status have no effect on relative marker choice",
            "Prepositional phrase complements (HN = PP) never take tensed relative clauses"
          ],
          "hint": "See Mwamzandi (2022, §4.3, Table 2, p. 240)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each discourse example from Section 4.3 of Mwamzandi (2022, pp. 240–242) with its exact translation and information-structure transition:",
          "correctAnswer": "(27) Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu (p. 240): 'The writers who followed have abandoned this style' — Continue transition (HN = Subj, topic) with tensed RC",
          "pairs": [
            {
              "left": "(27) Waandishi [wa-li-o-fuata] wa-me-ach-an-a na m-tindo huu (p. 240)",
              "right": "'The writers who followed have abandoned this style' — Continue transition (HN = Subj, topic) with tensed RC"
            },
            {
              "left": "(28) [Waandamanaji wa-li-kaidi amri hiyo]₁ [na ku-wa-rush-i-a mawe polisi]₂ [amba-o wa-li-jibu mapigo]₃ [kwa ku-fyatua risasi za moto]₄ (p. 241)",
              "right": "'The demonstrators disobeyed the command and threw stones to the policemen who responded...' — Shift transition (HN = Obj, topic) with amba-o"
            },
            {
              "left": "(30) A-li-anza ku-safiri ili ku-epuka ghadhabu ya ndugu yake amba-ye a-li-u-kosa u-rithi huo (p. 242)",
              "right": "'He started traveling to avoid the anger of his sibling who had missed the inheritance' — Shift transition on PP complement with amba-ye"
            },
            {
              "left": "(32) Katika hukumu i-li-yo-to-lew-a jana na Jaji Bernard Luand (p. 242)",
              "right": "'In a ruling that was given yesterday by Judge Bernard Luand' — Tensed RC on PP complement with passivized verb to-lew-a"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 24: Complete Line-by-Line Integration of Mervyn W. H. Beech's "Aids to the Study of Ki-Swahili: Four Studies Compiled and Annotated" (London: Kegan Paul, Trench, Trübner & Co., Ltd., [1918], Book pp. v–xvi, 1–159 [PDF pp. 1–184]) ──
if (SWAHILI_CONFIG.sources && !SWAHILI_CONFIG.sources.includes("beech-aids-study-kiswahili-1918")) {
  SWAHILI_CONFIG.sources.push("beech-aids-study-kiswahili-1918");
}

SWAHILI_UNITS.push({
  "id": "swahili-unit-24-beech-1918-complete",
  "number": 24,
  "title": "Unit 24: Beech (1918) 'Aids to the Study of Ki-Swahili' — Swahili Traditions (pp. xi–xvi) & Studies I–IV (pp. 1–159)",
  "description": "Master Mervyn W. H. Beech's 1918 'Aids to the Study of Ki-Swahili' line by line: Preface & Three Stages of Swahili Traditions (Thelatha Taifa, Tissa Taifa, Ki-Jezirati, Wa-ungwana vs. Mzalia), Study I (28-Letter Ajami Alphabet, 16 Letters, 6 Ki-Amu terms & the 4-stream Ki-Jizirat story), Study II (Banawasi, 8-Point Wind Compass, 7 Uses of -ka-, Past Tense Note & Fathili za Punda ni Mashuzi), Study III (67 Mafumbo, 4 Enigmas/Tambo & 30 Kitendawili), and Study IV (Magic in Pemba: Ngoma ya Pepo, Kikoa kia Wachawi & Sihiri).",
  "icon": "BookOpen",
  "color": "#0F766E",
  "skills": [
    {
      "id": "swahili-u24-m1-traditions-and-study1-ajami-letters",
      "title": "Swahili Traditions (pp. xi–xvi) & Study I: Ki-Swahili Writing, 16 Letters & 4-Stream Story (pp. 1–55)",
      "icon": "FileText",
      "description": "Learn the Three Stages of Swahili ethnogenesis, Mombasa's Thelatha & Tissa Taifa, the 28-letter Ajami alphabet, Letters 1–16 (incl. 6 Ki-Amu coconut-toddy terms), and 'Asiye hurumiwa ni Mngu usimhurumie'.",
      "tips": "In Study I (pp. 3–7), Beech shows that Arabic script lacks p (written ب ba or beginner پ), ch (written ش shin or Lamu/Bajun چ), v (written ف fa or beginner ڤ), hard g (written غ ghain), ñg, and ny, drops n before consonants (ku-andika كُودِكَ, ñgombe غُمْبِ / غُوبِ, nyumba يُمْبَ), and uses hamzah (ء) to distinguish uli-o-pata (أُلِوْبَاتَ) from uli-yo-pata (أُلِيَبَاتَ) and Mombasa baada-e (بَعَدائ) from Zanzibar baada-ye (بَعَدايَ).",
      "words": [
        {
          "target": "Preface (pp. v–vii, M. W. H. B., MOMBASA): Higher Standard Exam (~1 in 6 native letters legible) • 5 Authorities: Sheikh Muhamad bin Salim bin Hamis 'l-Mazarui (Liwali of Takaungu), Sharif Ahmad bin Uusuf (Kadhi of Fort Smith), Sharif Said Hasan bin Aloï (Pemba), Muhamad bin Salim & Shaaban bin Muhamad (Mombasa) + Rev. John Hamshere (H.)",
          "source": "Compiler's Preface, examination context, Ovid quotation ('Video meliora proboque deteriora sequor', p. vi), and five named Arab/Swahili authorities",
          "pronunciation": "mu-ha-mad bin sa-lim / sha-rif ah-mad bin yu-suf / sha-rif sa-id ha-san bin a-loi",
          "hint": "Beech (1918, Preface, pp. v–vii)"
        },
        {
          "target": "First Stage (pp. xi–xiv): sahil → suahil → Swahiliyi ('of the coasts') • 500-yr Persian rice-paper MS (fn. xii-1) • Thelatha Taifa (Miji mitatu): Wa-Kilindini (Jilindan-iyi / Ki-lindi-ni), Wa-Changamwe (Taghamaw-iyi / ku-changanya), Wa-Tangana (Shiraz / ku-tangamana) • Tissa Taifa & Towns: Wa-Jomvu (Jauf), Wa-Kilifi (Kulfah bin Hanthalah), Wa-Mtwapa (Tabia), Wa-Pate ('Ajam), Wa-Siyu, Wa-Gunia (Kangoni & Muüli of Bana), Wa-Malindi (Muludh; 5th town destroyed 1017 A.H. with Gedi/Kilifi/Ngomeni; 6th town 1271 A.H.), Wa-Shimazi, Wa-Faza (Halab), Wa-Pemba (1771 A.D., Ki-Jezirati)",
          "source": "First Stage of Swahili Traditions: Arabic etymology, Mombasa's Three Tribes and Nine Tribes, Pate/Siyu subdivisions, Malindi's 6 towns, and Pemba's Ki-Jezirati dialect",
          "pronunciation": "swa-hi-li-yi / the-la-tha tai-fa / tis-sa tai-fa / ki-je-zi-ra-ti",
          "hint": "Beech (1918, 'Swahili Traditions as to Themselves', pp. xi–xiv)"
        },
        {
          "target": "Second & Third Stages (pp. xiv–xvi): Wa-Shambara (Nyassa slaves at Kilwa & Zanzibar, fn. xiv-2) • Suria (slave-concubine; Arab's son = 'Arab') vs. Mzalia (pl. wa-zalia, child of hybrid female + native, or of two slaves) • masikini (freed in expiation of sins) • Wa-ungwana (sg. Mu-ungwana < ku-ungana) • Ma-Haji (Islamized Africans; Ngombeni & Kidutani, fn. xv-2) • Mazrui ('children of their mothers') & Mambrui",
          "source": "Second and Third Stages of Swahili social stratification and patrilineal genealogy",
          "pronunciation": "wa-sha-mba-ra / su-ri-a / m-za-li-a / wa-u-ngwa-na / ma-ha-ji",
          "hint": "Beech (1918, 'Swahili Traditions as to Themselves', pp. xiv–xvi)"
        },
        {
          "target": "28-Letter Alphabet (p. 5): Alifu, Bei, Tei, Thei, Jîmu, Hhei, Khei, Dâli, Thâli, Rei, Zei, Sîni, Shîni, Sâdi, Thâdi, Twei, Thwei, 'Aini, Ghaini, Fei, Kāfu, Kiáfu, Lamu, Mimu, Nunu, Hei, Wau, Ya • Addition Sum (p. 6): 479 + 123 + 647 = 1249 • 10 Compliments (pp. 8–9): 'l-Hathwarat, 'l-Jenab, 'l-Moheb, 'l-akaram, 'l-muhtaram, 'l-aziz, 'l-mukaram, 'l-afham, 'l-heshim, 'l-maatham • sanat 1332 h. (Hegeira) vs. sanat 1914 m. (Miladia)",
          "source": "Ki-Swahili 28-letter Ajami alphabet, left-to-right Arabic numerals, 10 epistolary compliments, and Islamic vs. Christian dating",
          "pronunciation": "a-li-fu bei tei thei ji-mu / l-ha-thwa-rat l-je-nab l-mo-heb",
          "hint": "Beech (1918, Study I, pp. 5–10)"
        },
        {
          "target": "Letters 1–16 (pp. 12–43) & 6 Ki-Amu Terms in Letter 16 (pp. 42–43, with پ چ ڤ): 1. Kishinda (scraped half coconut shell) • 2. Shinda (plugged half shell for measuring tembo = Ki-Mvita upawa/kasi) • 3. Inda (cotton wool soaked in mafuta ya ucho [Ki-Mvita uto]) • 4. Ufucho / infucho (skimming stick for toddy) • 5. Kitunguu (ladle for tembo) • 6. Mai tini (maji chini = scum of oil) | 4-Stream Story (pp. 44–55): 'Asiye hurumiwa ni Mngu usimhurumie' (Ramadhan 5 sanat 1330)",
          "source": "All 16 original administrative/legal/personal letters (Takaungu, Mombasa, Dagoreti, Fort Smith, Naivasha, Ngongo), the 6 Lamu coconut-toddy terms, and the 4-stream Ki-Jizirat story",
          "pronunciation": "ki-shi-nda / shi-nda / i-nda / u-fu-cho / ki-tu-ngu-u / ma-i ti-ni",
          "hint": "Beech (1918, Study I, pp. 12–55)"
        }
      ],
      "sentences": [
        {
          "target": "Barua ni nussu ya kuonana (Letter 7, p. 25) • Barua ni adaabu zaidi kama kukabiliana kwa midomo (Letter 9, p. 28) • Asiye hurumiwa ni Mngu usimhurumie (pp. 44–55)",
          "source": "A letter is half of meeting face to face • A letter is more polite than confronting one another by word of mouth • For whom God has no pity, have no pity."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Mervyn W. H. Beech's 'Swahili Traditions as to Themselves' (1918, pp. xii–xiv), which tribes compose Mombasa's 'Thelatha Taifa' (Miji mitatu = Three Tribes), and what happened to the 5th town of Malindi (Muludh)?",
          "correctAnswer": "The Thelatha Taifa are the Wa-Kilindini (from Arab Jilindan-iyi near Maskat or Bantu Ki-lindi-ni), Wa-Changamwe (from Syrian Taghamaw-iyi or ku-changanya), and Wa-Tangana (from Shiraz or ku-tangamana); the 5th town of Malindi—along with Gedi, Kilifi, and Ngomeni—was destroyed in 1017 A.H. after attempting to enslave the Galla and being overwhelmed by the people of Witu, and the 6th (present) town dates from 1271 A.H.",
          "options": [
            "The Thelatha Taifa are the Wa-Kilindini (from Arab Jilindan-iyi near Maskat or Bantu Ki-lindi-ni), Wa-Changamwe (from Syrian Taghamaw-iyi or ku-changanya), and Wa-Tangana (from Shiraz or ku-tangamana); the 5th town of Malindi—along with Gedi, Kilifi, and Ngomeni—was destroyed in 1017 A.H. after attempting to enslave the Galla and being overwhelmed by the people of Witu, and the 6th (present) town dates from 1271 A.H.",
            "The Thelatha Taifa are the Wa-Pemba, Wa-Zanzibar, and Wa-Kilwa, founded in 1850 A.D.",
            "Malindi has never been rebuilt since the Portuguese era",
            "The Thelatha Taifa are subdivisions of the Masai"
          ],
          "hint": "See Beech (1918, pp. xii–xiii & fn. xiii-2)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each Ki-Amu (Lamu dialect) term from Letter 16 (written by Muhamad bin Muhedin bin Ali bin Ahmad-l-Bajuni, Beech 1918, pp. 42–43) with its exact definition:",
          "correctAnswer": "Shinda: Half a coconut shell with its 3 holes plugged with wood, used as a measure for tembo toddy (= Ki-Mvita upawa or kasi)",
          "pairs": [
            {
              "left": "Shinda (vs. Kishinda)",
              "right": "Half a coconut shell with its 3 holes plugged with wood, used as a measure for tembo toddy (= Ki-Mvita upawa or kasi; kishinda = empty scraped half-shell)"
            },
            {
              "left": "Inda",
              "right": "Cotton wool (pamba) soaked in coconut oil (mafuta ya ucho = Ki-Mvita uto) and wrung out"
            },
            {
              "left": "Ufucho (or infucho)",
              "right": "Piece of wood sharpened at the end like an msuaki toothbrush, used to skim the scum off palm toddy"
            },
            {
              "left": "Mai tini (= maji chini) & Kitunguu",
              "right": "The scum of oil/fat (mafuta) & the ladle for putting tembo into the shinda"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-u24-m2-study2-banawasi-compass-fathili-za-punda",
      "title": "Study II: 'Banawasi', 8-Point Wind Compass, 7 Uses of -ka- & 'Fathili za Punda ni Mashuzi' (pp. 57–113)",
      "icon": "Compass",
      "description": "Master the two Ki-Jizirat folktales told by Sharif Hasan bin Aloi of Pemba, their 145 footnotes, the 8-point wind compass (p. 69), the 7 uses of -ka- (p. 59), the Note on Past Tense Infixes (p. 85), and the smithy & time-of-day lexicons (pp. 93–95).",
      "tips": "On p. 85 ('Note on Past Tense Infixes'), Beech contrasts Ki-Unguja—where -na- is Present Progressive (n'nakwenda 'I am going'), -me- is Perfect, and -li- is Past—with Mombasa (Ki-Mvita), where -na- and -me- are both Perfect (n'nakwenda = n'mekwenda 'I have gone'; n'nampenda = n'mempenda 'I have loved him') while Present Progressive is expressed by n'nakwenda sasa hivi or ni katika kwenda.",
      "words": [
        {
          "target": "Banawasi (< Abu-nawasi: 'ni mtu mwenyi akili nyingi na maarifa, asiyeshindika kwa neno', fn. 59-1) • kichinja-mimba ('last-born child after whom the mother bears no more', fn. 61-7) • mwikanga ('dappled ox', p. 65) • maturuma & vifundo ('boat ribs & seat-knots', p. 71) • fumba ('sleeping-mat bag', p. 76) • ughaibu (betel mixture: timbaku, chokaa, katu, tambuu/mjengo, popoo in a Jaluba box; kuvuata = chewing lime & tobacco only, fn. 81-7)",
          "source": "Key vocabulary and idioms from Story 1 ('Banawasi', pp. 58–85)",
          "pronunciation": "ba-na-wa-si / ki-chi-nja mi-mba / mwi-ka-nga / ma-tu-ru-ma / u-ghai-bu / ja-lu-ba",
          "hint": "Beech (1918, Study II, Story 1 'Banawasi', pp. 58–85)"
        },
        {
          "target": "8-Point Swahili Wind Compass (p. 69): N Kasikazi • NE Maṯalai Kasikazi • E Maṯalai (Mashariki / maawio / Mawao / Matokeo) • SE Maṯalai Kusi • S Kusi • SW Mmande Kusi • W Mmande (Mangaribi / kutwa maiwio / matweo; westerly morning creek breeze) • NW Mmande Kasikazi",
          "source": "Complete 8-Point Swahili Wind Compass diagram on p. 69 of Beech (1918)",
          "pronunciation": "ka-si-ka-zi / ma-ta-la-i ka-si-ka-zi / ma-ta-la-i / ma-ta-la-i ku-si / ku-si / m-ma-nde ku-si / m-ma-nde / m-ma-nde ka-si-ka-zi",
          "hint": "Beech (1918, Study II, p. 69)"
        },
        {
          "target": "7 Uses of Connective -ka- (fn. 59-9): (a) Narrative (akaondoka akaenda) • (b) Final = ili (n'nakwenda 'kamwambia) • (c) Subjunctive connective after haifai (haifai mkaenda nyote) • (d) Future connective after akitaka (akitaka akaenda = atakwenda) • (e) Infinitival after naona vyema (naona vyema akaenda) • (f) Consecutive (nimekuja hapa n'kaona) • (g) With Imperative (enenda 'kamwambie) | Note on Past Tense Infixes (p. 85): Mombasa n'nakwenda = n'mekwenda ('I have gone') & Waungwana women's kana for kama",
          "source": "Seven grammatical functions of the connective -ka- tense (fn. 59-9) and the Note on Past Tense Infixes (p. 85)",
          "pronunciation": "a-ka-o-ndo-ka / n-na-kwe-nda / n-me-kwe-nda / ka-na",
          "hint": "Beech (1918, Study II, p. 59 fn. 9 & p. 85)"
        },
        {
          "target": "8 Daily Time-Divisions (fn. 93-6): alafagiri (5:30 a.m.) • sabahe (6:30 a.m.) • adhuhuri / mtanakati / mtikati (12 noon) • alasiri (3 p.m.) • ahurubu shems (5:30 p.m.) • mangaribi (6 p.m.) • liisha (7:30 p.m.) • leli / usiku makungu (12 midnight; usiku wa manane = 2 a.m.)",
          "source": "Complete schedule of Swahili and Islamic daily time divisions in Story 2 ('Fathili za Punda ni Mashuzi', p. 93 fn. 6)",
          "pronunciation": "a-la-fa-gi-ri / sa-ba-he / a-dhu-hu-ri / m-ta-na-ka-ti / a-la-si-ri / a-hu-ru-bu she-ms / ma-nga-ri-bi / li-i-sha",
          "hint": "Beech (1918, Study II, p. 93 fn. 6)"
        },
        {
          "target": "Blacksmith & Goldsmith Lexicon (fn. 95-3): sonara (worker in gold/silver) vs. mjua chuma / mfuaji (blacksmith) • kiwanda (workshop) • kweleo (tongs) • nyundo (hammer) • kiriba (skin bellows) • fuawe (anvil) • kalibu (clay nozzle) • ruwao (iron stirrup) • tindo (chisel) • kuvukuta (blow bellows) • mkando (bar of iron/copper) • chomwe (red-hot iron) • macheche (sparks) | 7 Mosque Thieves' Vows (pp. 98–99): 1. dinari (sword), 2. fetha (kiti cha enzi), 3. thahabu (ring), 4. mbuzi (kilemba), 5. almasi (jembia), 6. kondoo na mwanawe (viatu), 7. nundu ya ngamia (mwanamwali)",
          "source": "Complete smithy terminology (fn. 95-3) and the 7 thieves' vows at the Mosque in 'Fathili za Punda ni Mashuzi' (pp. 86–113)",
          "pronunciation": "so-na-ra / m-fu-a-ji / ki-wa-nda / kwe-le-o / ki-ri-ba / fu-a-we / ka-li-bu / ru-wa-o / ti-ndo / cho-mwe",
          "hint": "Beech (1918, Study II, pp. 95 fn. 3, 98–99)"
        }
      ],
      "sentences": [
        {
          "target": "Hiyari hushinda utumwa (p. 82) • Mtenda wema halipwi wema (p. 111) • Fathili za punda ni mashuzi (pp. 86, 111)",
          "source": "Freewill overcomes slavery (voluntary service beats forced labour) • The doer of good is not repaid with good • The gratitude of a donkey is flatulence ('Don't cast your pearls before swine')."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In the 8-Point Swahili Wind Compass diagram on p. 69 of Beech (1918), what are the exact Swahili names for North, East, South, West, and the four intercardinal points?",
          "correctAnswer": "N = Kasikazi, NE = Maṯalai Kasikazi, E = Maṯalai (also Mashariki / maawio / Mawao / Matokeo), SE = Maṯalai Kusi, S = Kusi, SW = Mmande Kusi, W = Mmande (also Mangaribi / kutwa maiwio / matweo), and NW = Mmande Kasikazi",
          "options": [
            "N = Kasikazi, NE = Maṯalai Kasikazi, E = Maṯalai (also Mashariki / maawio / Mawao / Matokeo), SE = Maṯalai Kusi, S = Kusi, SW = Mmande Kusi, W = Mmande (also Mangaribi / kutwa maiwio / matweo), and NW = Mmande Kasikazi",
            "N = Kusi, S = Kasikazi, E = Mmande, W = Maṯalai",
            "Swahili has only four wind points and no intercardinal terms",
            "Mmande means the midday southerly gale"
          ],
          "hint": "See the Wind Compass diagram on p. 69 of Beech (1918)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each metallurgical term from Footnote 95-3 of Beech (1918, p. 95) with its exact English meaning:",
          "correctAnswer": "fuawe & kalibu: Anvil & the clay nozzle/tuyere into which the skin bellows (kiriba) are fitted",
          "pairs": [
            {
              "left": "sonara vs. mjua chuma (or mfuaji)",
              "right": "Worker in gold and silver vs. blacksmith (worker in iron)"
            },
            {
              "left": "fuawe & kalibu",
              "right": "Anvil & the clay nozzle/tuyere into which the skin bellows (kiriba) are fitted"
            },
            {
              "left": "kweleo, tindo & ruwao",
              "right": "Pincers/tongs, cold chisel & the iron stirrup through which the blacksmith puts his foot"
            },
            {
              "left": "mkando, chomwe & macheche",
              "right": "Long bar of iron/copper, red-hot iron & flying sparks"
            }
          ]
        }
      ]
    },
    {
      "id": "swahili-u24-m3-study3-aphorisms-riddles-and-study4-pemba-magic",
      "title": "Study III: 67 Aphorisms, 4 Enigmas & 30 Kitendawili (pp. 115–132) & Study IV: Magic in Pemba (pp. 133–159)",
      "icon": "Sparkles",
      "description": "Master all 67 Mafumbo, 4 Enigmas/Tambo, 30 Kitendawili, and the bilingual Ki-Jizirat treatise on Ngoma ya Pepo, Kikoa kia Wachawi, and Sihiri charms in Pemba.",
      "tips": "In Ki-Jizirat (Pemba dialect, Studies II–IV), Class 7 prefix ki- before vowels remains ki- rather than palatalizing to ch- (e.g., kikoa kia wachawi 'banquet of the wizards' p. 145, kitambaa kia sanda 'cloth of a shroud' p. 151, kiungu 'cooking pot' p. 117 #3, kiombo 'vessel' p. 122 #37, kiakula 'food' p. 139).",
      "words": [
        {
          "target": "Study III Aphorisms (Mafumbo #1–#67, pp. 117–126): (1) Mpiga la kuanza hunyamaziwa / Mpiga la pili huitwa akambiwa / Mpiga la tatu huonguliwa • (4) Wema hauozi • (13) Kuagiza kufikile • (14) Kuambiana kuko kusikilizana hapana • (35) Hiyari ya mtu ni mwenyewe • (54) Ndugu mbaya killa siku hukukumbusha killa jambo • (58) Wa mbili havai moja: mja wa sitara hasumbuki • (59) Akutwekae ndiye akutuae • (61) Tissia mkononi bora kuliko kumi nenda, uje • (65) Kuinamako ndiko kuinukako • (67) Liharibikalo hufanywa",
          "source": "Representative aphorisms across the 67 numbered Mafumbo in Ki-Jizirat and Ki-Mvita (pp. 117–126)",
          "pronunciation": "m-pi-ga la ku-a-nza / we-ma ha-u-o-zi / a-ku-twe-ka-e ndi-ye a-ku-tu-a-e",
          "hint": "Beech (1918, Study III, pp. 117–126)"
        },
        {
          "target": "4 Enigmas / Tambo in Ki-Mvita (pp. 126–128): (1) Kinyume: Mbarakita pecheu waju kalikito nasa = Kitambara cheupe juwa likitoka sana • (2) Ughaibu Riddle: Tambuu (Ntampiga), popoo, tumbaku (mtumba wangu), tokaa (ntakaa), katu (kaa tu) • (3) River-Crossing Tambo: tui (leopard), mbuzi (goat) & mzigo wa nyasi (bundle of grass) in a 2-seat kidau • (4) Sour Lime & Jinn Tambo: 15 doctors throw a stone at the Jinn so he throws back the sour lime (ndimu moja ya kali)",
          "source": "All four Ki-Mvita Enigmas and Tambo puzzles in Study III (pp. 126–128)",
          "pronunciation": "m-ba-ra-ki-ta pe-che-u / ki-ta-mba-ra che-u-pe / tu-i m-bu-zi m-zi-go wa nya-si",
          "hint": "Beech (1918, Study III, pp. 126–128)"
        },
        {
          "target": "7 Ki-Jizirat & 23 Ki-Mvita Kitendawili (pp. 129–132): Ki-Jizirat (1) Kifa kifanana → Maziwa na tui la nazi • (2) Li papo; hulioni? → Juvuli • (3) Hango lifunika hango: jihango linafunika nini? → Nazi • (6) Mtoto wangu anyelea mbavani → Jiwe la kusagia mtama | Ki-Mvita (1) Juni linajifunika utaji → Tanga la Jehazi • (2) Asikari wangu hamtuma harudi → Rasasi • (14) Nyumba yangu ina milango mingi → Ema (lobster-pot) • (22) Banyani anapiga ubinda → Sindano na uzi • (23) Ni papo hunioni → Kishogo",
          "source": "Representative riddles across the 7 Ki-Jizirat and 23 Ki-Mvita Kitendawili in Study III (pp. 129–132)",
          "pronunciation": "ki-fa ki-fa-na-na / ha-ngo li-fu-ni-ka ha-ngo / ju-ni li-na-ji-fu-ni-ka u-ta-ji / ki-sho-go",
          "hint": "Beech (1918, Study III, pp. 129–132)"
        },
        {
          "target": "Study IV §1–§2 (pp. 134–149): Ngoma ya Pepo — bau / Furukani ('Ewe Ramli we nibainia haki usibaine batili'), 3 yungi (water-lilies), tumba ya mkadi, utanga (white mat), kiti ('chair' = possessed patient), cheo (heirloom wand), Pepo wa Tari (sea-spirits), vishuka (day feast) vs. kijio (night feast), hupasua ulimi ('splitting the tongue'), mchomozi ('Finder' spirit incised with chale), 27 Mwerisho (Shaaban) kufunga with vue & mafusho, post-Ramadhan kiano ('Plate') feast • Kikoa kia Wachawi — 3,000 naked wachawi at midnight Wed./Sat. in Mava / Uchanjaa, chango (Ki-Mvita tango) rotating family victim called ñgombe beaten with human shin-bones (miundi that hutebanya), ransom with pweza (cuttle-fish), emetic vuo (Mpacha & Mwenyika nguu), and 3 Arabic grimoires (Babu, Mjarabati, Shems-l-maarifa)",
          "source": "Complete terminology of the Pemba Spirit-Dance (Ngoma ya Pepo) and Witches' Sabbath (Kikoa kia Wachawi) in Study IV (pp. 134–149)",
          "pronunciation": "ngo-ma ya pe-po / u-ta-nga / che-o / vi-shu-ka / ki-ji-o / m-cho-mo-zi / ki-a-no / ki-ko-a ki-a wa-cha-wi / mi-u-ndi / vu-o",
          "hint": "Beech (1918, Study IV, §§ 1–2, pp. 134–149)"
        },
        {
          "target": "Study IV §3–§5 (pp. 150–159): Sihiri Charms — 1. Footprint sand + Mviru root in a grave; 2. Spittle/hair + shroud (kitambaa kia sanda) + corpse-water (maji ya ufuo) at the red-flowered Mvunja huruma tree at star-hour Kamari or Shemshi; 3. Body grime (nongo = Malay daki) at river/crossroads; 4. Talisman on a pigeon (njiwa) that drove Sharif Hasan bin Said Aloi from his 3,000 Mikirafu clove trees in Pemba to Baghdad for 4 months (fn. 153-1) • Mviza Tree Charm ('Ewe Mviza uvizae jua na mvua na simba...', pp. 154–155) • Separation & Kunge Charms (pp. 156–159): Mvuma nyuki (Mnamia kumbweni), Msasa (Mcheka wanawake), Mwinga Jinni, and burying luck under the dead kunge ('Blasted One') tree (case of Mariamu binti Saidi Ahmad Sharifu bewitched by Mwalimu Jafari)",
          "source": "All botanical, astrological, and talismanic Sihiri charms and true Pemba case histories in Study IV (pp. 150–159)",
          "pronunciation": "si-hi-ri / m-vi-ru / m-vu-nja hu-ru-ma / ka-ma-ri / no-ngo / m-vi-za / m-vu-ma nyu-ki / m-sa-sa / ku-nge",
          "hint": "Beech (1918, Study IV, §§ 3–5, pp. 150–159)"
        }
      ],
      "sentences": [
        {
          "target": "Ewe Ramli we nibainia haki usibaine batili (p. 135) • Ewe Mviza uvizae jua na mvua na simba, mimi n'nataka unipatie haja yangu (p. 155)",
          "source": "O Thou Oracle, show me the truth and do not show me falsehood! • O Mviza tree who keepest off sun and rain and lion, I want thee to obtain for me my desire!"
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Study IV ('Magic in Pemba', Beech 1918, pp. 141–143 & 152–153), what happens to possessed spirits on the 27th of Mwerisho (Shaaban), and what true case illustrates the fourth Sihiri charm with a pigeon (njiwa)?",
          "correctAnswer": "On 27 Mwerisho (Shaaban), every Pemba medicine-man binds/fasts (kufunga) his spirits for Ramadhan using vue (vumbani & Mrihani pate grass) and mafusho incense, releasing them after Ramadhan with the kiano ('Plate') feast; the pigeon charm is illustrated by Sharif Hasan bin Said Aloi, whose uncle Sharif Said Ahmad bin Ali coveted his 3,000 clove trees (Mikirafu) and cast the spell on a pigeon, driving him in a fugue from Pemba via Zanzibar and Mombasa to Baghdad for 4 months",
          "options": [
            "On 27 Mwerisho (Shaaban), every Pemba medicine-man binds/fasts (kufunga) his spirits for Ramadhan using vue (vumbani & Mrihani pate grass) and mafusho incense, releasing them after Ramadhan with the kiano ('Plate') feast; the pigeon charm is illustrated by Sharif Hasan bin Said Aloi, whose uncle Sharif Said Ahmad bin Ali coveted his 3,000 clove trees (Mikirafu) and cast the spell on a pigeon, driving him in a fugue from Pemba via Zanzibar and Mombasa to Baghdad for 4 months",
            "Spirits are only active during Ramadhan and never bound",
            "The pigeon charm is used only for finding lost cattle in Kikuyu",
            "Kiano is the name of the iron anvil in a blacksmith's shop"
          ],
          "hint": "See Beech (1918, Study IV, pp. 141–143 & p. 153 fn. 1)"
        },
        {
          "type": "match_pairs",
          "prompt": "Match each ritual plant or object in Study IV of Beech (1918, pp. 137–159) with its exact Pemba magical role:",
          "correctAnswer": "Kunge ('Blasted One', pp. 158–159): Ancient hollow, barkless dead tree deserted by birds, under which a victim's hair, nails, spittle, nongo, and Mjarabati talisman are buried naked to destroy their luck (as Mwalimu Jafari did to Mariamu binti Saidi Ahmad Sharifu)",
          "pairs": [
            {
              "left": "Kiti & Cheo (pp. 137, 139)",
              "right": "The possessed patient (the spirit's 'chair') & the mganga's heirloom iron/brass/ivory wand"
            },
            {
              "left": "Miundi & Vuo (Mpacha & Mwenyika nguu, pp. 147–149)",
              "right": "Enchanted human shin-bones that fracture invisibly (hutebanya) at the Witches' Sabbath & the emetic decoction that expels bewitched food"
            },
            {
              "left": "Mviza, Mvuma nyuki (Mnamia kumbweni) & Msasa (Mcheka wanawake, pp. 154–157)",
              "right": "Evergreen lion-repelling tree for winning a suit/bride, heliotropic plant, and sandpaper-leaf plant used in marriage-separating charms"
            },
            {
              "left": "Kunge ('Blasted One', pp. 158–159)",
              "right": "Ancient hollow, barkless dead tree deserted by birds, under which a victim's hair, nails, spittle, nongo, and Mjarabati talisman are buried naked to destroy their luck (as Mwalimu Jafari did to Mariamu binti Saidi Ahmad Sharifu)"
            }
          ]
        }
      ]
    }
  ]
});

// ── Unit 26: Complete Line-by-Line Integration of Chapters 14 (Ngonyani & Ngowa, pp. 255–271) & 28 (Michieka & Muaka, pp. 559–576) in Doris L. Payne, Sara Pacchiarotti & Mokaya Bosire, eds., "Diversity in African languages" (Berlin: Language Science Press, 2016) ──
SWAHILI_UNITS.push({
  "id": "swahili-unit-26-payne-2016-reversive-and-kenyan-comedy-complete",
  "title": "Unit 26: Swahili Reversives & Kenyan Comedy Discourse (Payne et al. 2016)",
  "description": "Master Deo Ngonyani & Nancy Jumwa Ngowa's (2016, Ch. 14, pp. 255–271) study of Standard Swahili reversives (-u/-o/-ul/-ol & -uk/-ok) at Pwani University (Kilifi) and Martha Michieka & Leonard Muaka's (2016, Ch. 28, pp. 559–576) linguistic analysis of Kenyan comedy from Vitimbi and Redykyulass to Churchill Show.",
  "order": 26,
  "color": "#7C3AED",
  "lessons": [
    {
      "id": "swahili-payne-2016-26-1-ngonyani-ngowa-reversive",
      "title": "Productivity of the Reversive Extension in Standard Swahili (Ngonyani & Ngowa 2016, Ch. 14, pp. 255–271)",
      "icon": "RefreshCw",
      "description": "Learn the 4 reversive allomorphs (-u, -o, -ul, -ol), fused stative -uk/-ok, semantic subclasses, and the Pwani University nonce-word and Helsinki Corpus acceptability experiments.",
      "tips": "In Ngonyani & Ngowa (2016, Ch. 14, pp. 255–271), mid back /o/ in the verb root selects -o/-ol (chom-a → chom-o-a / chom-ol-e-a / chom-ok-a), while /i, e, a, u/ select -u/-ul (zib-a → zib-u-a / zib-ul-i-a / zib-uk-a). In the Pwani University acceptability test on the top 20 SALAMA / Helsinki Corpus verbs, 10 of 16 speakers accepted innovative kufanyua ('to undo' < kufanya)!",
      "words": [
        {
          "target": "ziba → zibua (zibulia, zibulisha, zibuliwa, zibuka) • tega → tegua (tegulia, teguka) • panga → pangua (pangulia, pangulisha, panguka) • funga → fungua",
          "source": "block/plug → unblock • set trap → disarm trap • arrange → disarrange • tie/shut → untie/open (high-vowel reversive -u / -ul- and stative -uk-)",
          "pronunciation": "zi-bu-a / zi-bu-li-a / zi-bu-ka / te-gu-a / pa-ngu-a / fu-ngu-a",
          "hint": "Ngonyani & Ngowa (2016, Ch. 14, pp. 256–259, Ex. 2–8)"
        },
        {
          "target": "choma → chomoa (chomolea, chomolewa, chomoka) • songa → songoa • kosa → kosoa • koma → komoa",
          "source": "stick in → pull out • press together → wring • err → criticize/correct • come to an end → lock up (mid-vowel harmony -o / -ol- and stative -ok- after root /o/)",
          "pronunciation": "cho-mo-a / cho-mo-le-a / cho-mo-ka / so-ngo-a / ko-so-a / ko-mo-a",
          "hint": "Ngonyani & Ngowa (2016, Ch. 14, pp. 258–260, Ex. 7, 9, 10)"
        },
        {
          "target": "simba → simbua • tanza → tanzua • tata → tatua • vaa → vua | Intensive: kama → kamua • mega → megua",
          "source": "dig → dig up • tangle → untangle • tangle/complicate → untangle/solve • dress → undress | squeeze → squeeze/wring out • break off piece",
          "pronunciation": "si-mbu-a / ta-nzu-a / ta-tu-a / vu-a / ka-mu-a / me-gu-a",
          "hint": "Ngonyani & Ngowa (2016, Ch. 14, pp. 258–260, Ex. 5 & 9)"
        },
        {
          "target": "Idiosyncratic & Fossilized: tamba → tambua • remba → rembua • enga → engua | kagua, fufua, kwangua, zindua, chukua, nyofoa",
          "source": "recognize, deface, skim | inspect, resurrect, scrape, inaugurate, take/carry, strip off flesh (fossilized verbs with no synchronic base)",
          "pronunciation": "ta-mbu-a / re-mbu-a / e-ngu-a / ka-gu-a / fu-fu-a / kwa-ngu-a / zi-ndu-a",
          "hint": "Ngonyani & Ngowa (2016, Ch. 14, pp. 260–261, Ex. 10–11)"
        },
        {
          "target": "Pwani Univ. Tests (Tables 1–4): kugola → kugoloa, kupeza → kupezua (60% List A; 65% List B) • kufanya → kufanyua ('to undo', 10/16 existing/possible)",
          "source": "Nonce-word coinage test (40 students) and SALAMA / Helsinki Corpus acceptability test (16 students) at Pwani University, Kilifi",
          "pronunciation": "ku-go-lo-a / ku-pe-zu-a / ku-fa-nyu-a",
          "hint": "Ngonyani & Ngowa (2016, Ch. 14, pp. 262–268, Tables 1–4)"
        }
      ],
      "sentences": [
        {
          "target": "Fundi a-me-zib-u-a bomba • Bomba li-me-zib-uk-a • Mwalimu a-li-m-chom-ol-e-a mwanafunzi kalamu.",
          "source": "The plumber has unplugged the pipe • The pipe is unplugged • The teacher pulled out a pen for the student (Ngonyani & Ngowa 2016, Ch. 14, pp. 256–259, Ex. 2b, 7b, 8a)."
        }
      ],
      "authoredExercises": [
        {
          "type": "multiple_choice",
          "prompt": "In Deo Ngonyani & Nancy Jumwa Ngowa's (2016, Ch. 14, pp. 257–268) study at Pwani University (Kilifi), what governs the choice between the four Standard Swahili reversive allomorphs (-u, -o, -ul, -ol), and which innovative reversive from the Helsinki Corpus of Swahili was accepted as existing or possible by 10 out of 16 speakers?",
          "correctAnswer": "Mid back /o/ in the root selects -o/-ol (chomoa, chomolea) while /i, e, a, u/ select -u/-ul (zibua, zibulia), with /l/ surfacing before vowel-initial suffixes (-i/-e, -ish, -iw/-ew); 10/16 speakers accepted kufanyua ('to undo' < kufanya)",
          "options": [
            "Mid back /o/ in the root selects -o/-ol (chomoa, chomolea) while /i, e, a, u/ select -u/-ul (zibua, zibulia), with /l/ surfacing before vowel-initial suffixes (-i/-e, -ish, -iw/-ew); 10/16 speakers accepted kufanyua ('to undo' < kufanya)",
            "All Swahili verbs take -o regardless of root vowel",
            "The lateral /l/ only appears in imperative verbs",
            "Reversive suffixes can only attach to Arabic loanwords"
          ],
          "hint": "See Ngonyani & Ngowa (2016, Ch. 14, pp. 257–259, 267–268, Table 4)"
        }
      ]
    },
    {
      "id": "swahili-payne-2016-26-2-michieka-muaka-kenyan-comedy",
      "title": "Humor, Polysemy & Sheng in Kenyan Comedy (Michieka & Muaka 2016, Ch. 28, pp. 559–576)",
      "icon": "Smile",
      "description": "Explore the linguistic mechanisms of Kenyan humor across Vitimbi, Redykyulass, and Churchill Show: polysemous punning (wizi wa mabavu), sociophonetic 'shrubbing' (sida, shitikashel), and face-saving strategies.",
      "tips": "In Michieka & Muaka (2016, Ch. 28, pp. 559–576), Kenyan comedians blend Swahili, Sheng, English, and indigenous languages (Luhya, Luo, Kikuyu, Meru, Kamba), using three face-saving strategies—self-effacing humor, inclusivity, and outright apology—to navigate ethnic stereotypes safely.",
      "words": [
        {
          "target": "Vitimbi (Mzee Ojwang Hatari, Mama Kayai, Amka Twende, Othorong’ong’o, Mutiso, Masanduku arap Simiti, Wariahe, Otoyo) • Redykyulass • Churchill Show",
          "source": "Historical evolution of Kenyan television and stand-up comedy from 1980s KBC Vitimbi and 1990s Redykyulass to Daniel 'Churchill' Ndambuki's Churchill Show",
          "pronunciation": "vi-ti-mbi / m-zee o-jwa-ng / ma-ma ka-ya-i / chu-rchi-ll",
          "hint": "Michieka & Muaka (2016, Ch. 28, pp. 560–562)"
        },
        {
          "target": "wizi wa mabavu ('violent robbery' in Swahili vs. 'stealing of ribs' < mbavu in Meru, Majimoto Ex. 1) • VIP = Very Improved Peasant (Pablo Ex. 7)",
          "source": "Bilingual Swahili–Meru polysemy pun and acronym incongruity in Churchill Show routines",
          "pronunciation": "wi-zi wa ma-ba-vu / m-ba-vu",
          "hint": "Michieka & Muaka (2016, Ch. 28, pp. 562, 566, Ex. 1 & 7)"
        },
        {
          "target": "Samahani, mteja wa nambari uliyopiga hapatikani kwa sasa (Eric Omondi Ex. 5) • mkaza mwana, mtoto wa high class (Majimoto Ex. 12)",
          "source": "Safaricom customer-care politeness parody ('Sorry, the subscriber you have dialed cannot be reached') • Daughter-in-law / high-class bride",
          "pronunciation": "sa-ma-ha-ni m-te-ja wa na-mba-ri u-li-yo-pi-ga ha-pa-ti-ka-ni",
          "hint": "Michieka & Muaka (2016, Ch. 28, pp. 565, 569, Ex. 5 & 12)"
        },
        {
          "target": "Nyanza Prefixes ('Dr Geofrey Otieno, Engineer Obado') vs. Central Suffixes ('Mwangi wa Equity, Wanjiku wa makara', Owago-Onyiro Ex. 10)",
          "source": "Morphological wordplay contrasting Nyanza academic titles (prefixes) with Central Kenya occupational/business tags (suffixes)",
          "pronunciation": "mwa-ngi wa e-qui-ty / wa-nji-ku wa ma-ka-ra",
          "hint": "Michieka & Muaka (2016, Ch. 28, p. 568, Ex. 10)"
        },
        {
          "target": "Sheng 'shrubbing / srub' (Owago-Onyiro Ex. 13): sida (< shida), shitikashel (< City Council), aishishi (< ICC) vs. Mercedes (*Mashidishi)",
          "source": "Metalinguistic routine on [ʃ] ↔ [s] substitution ('shrubbing'), humorous claim that Luo speakers only 'srub' things they dislike",
          "pronunciation": "si-da / shi-ti-ka-shel / a-i-shi-shi",
          "hint": "Michieka & Muaka (2016, Ch. 28, p. 570, Ex. 13)"
        }
      ],
      "sentences": [
        {
          "target": "Samahani, mteja wa nambari uliyopiga hapatikani kwa sasa • Katiba ya wezi ilisemanga hautakiwi kuipia mama mja mzito.",
          "source": "Sorry, the customer of the number you have dialed cannot be reached right now • The robbers' constitution used to say you are not supposed to steal from a pregnant woman (Michieka & Muaka 2016, Ch. 28, pp. 565, 567, Ex. 5 & 9)."
        }
      ],
      "authoredExercises": [
        {
          "type": "match_pairs",
          "prompt": "Match each Kenyan comedy excerpt in Martha Michieka & Leonard Muaka (2016, Ch. 28, pp. 562–572) with its linguistic humor mechanism:",
          "correctAnswer": "Majimoto in Meru ('wizi wa mabavu', Ex. 1): Cross-linguistic punning on Swahili mabavu ('force/violence') vs. Meru/Swahili mbavu ('ribs')",
          "pairs": [
            {
              "left": "Majimoto in Meru ('wizi wa mabavu', Ex. 1)",
              "right": "Cross-linguistic punning on Swahili mabavu ('force/violence') vs. Meru/Swahili mbavu ('ribs')"
            },
            {
              "left": "Owago-Onyiro on 'shrubbing / srub' (sida, shitikashel, aishishi, Ex. 13)",
              "right": "Sociophonetic [ʃ] ↔ [s] substitution framed via self-deprecation as targeting only disliked entities"
            },
            {
              "left": "Owago-Onyiro on Prefixes vs. Suffixes (Ex. 10)",
              "right": "Grammatical metaphor contrasting Nyanza academic titles before names with Central Kenya business modifiers after names"
            },
            {
              "left": "Smart Joker ('ilisemanga', 'kuipia', Ex. 9) & Omwami ('-ko', '-nga', Ex. 11)",
              "right": "Luhya phonological devoicing (b → p) and habitual/partitive enclitics (-ko, -nga) in Kenyan Swahili"
            }
          ]
        }
      ]
    }
  ]
});
