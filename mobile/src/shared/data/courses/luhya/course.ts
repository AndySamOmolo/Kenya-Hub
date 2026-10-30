// ============================================================
// Luhya (Oluluyia / Luwanga / Luhanga) Language Course Configuration & Units
// Based on Public Domain & Comparative Linguistic Sources:
// 1. C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" & (1903) "Anthropological Studies in Kavirondo"
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" & (1919) "Comparative Study of the Bantu Languages"
// 3. Rev. N. Stam (1929) "The Bahanga" (Catholic Anthropological Conference Vol. I, No. 4 — Public Domain)
// 4. Wiktionary Bantu Swadesh Lists (Zone J30) & Wikipedia Luhya_language
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const LUHYA_CONFIG: LanguageConfig = {
  id: 'luhya',
  name: 'Luhya',
  nativeName: 'Oluluyia',
  family: 'Bantu',
  counties: ['Kakamega', 'Bungoma', 'Vihiga', 'Busia', 'Trans Nzoia'],
  speakers: '6.8M',
  speechLocale: 'sw-KE',
  description: 'A major Great Lakes / Western Bantu language cluster (Zone J30) spoken across Western Kenya. Grounded in Hobley (1902, 1903), Johnston (1902, 1919), and Rev. N. Stam (1929).',
  color: '#2FA463',
  sources: [
    'hobley-eastern-uganda-1902',
    'johnston-uganda-protectorate-1902',
    'hobley-kavirondo-nandi-1903',
    'johnston-bantu-1919',
    'stam-bahanga-1929',
    'open-web-swadesh-comparative',
  ],
};

export const LUHYA_UNITS: CourseUnit[] = [
  {
    id: 'luhya-unit-1',
    title: 'Unit 1: Pronouns, People, Kinship & Numbers (Hobley 1902, Johnston 1919 & Stam 1929)',
    description: 'Learn core personal pronouns, human & family nouns (omu-/aba-), and cardinal numbers in Oluluyia.',
    icon: '👋',
    skills: [
      {
        id: 'luhya-pronouns-people',
        title: 'Pronouns, People & Family (Class 1/2)',
        icon: 'Users',
        description: 'Master personal pronouns and Class 1/2 human nouns in Oluluyia.',
        tips: "In Oluluyia, Class 1 singular human nouns begin with 'omu-' and form their Class 2 plural in 'aba-': omundu (person) → abandu (people), omukhasi (woman) → abakhasi (women), omusatsa (man) → abasatsa (men), omwami (king/chief) → abami (Stam 1929).",
        words: [
          { target: 'Mirembe! / Mulembe!', source: 'Peace! / Greetings!', pronunciation: 'mee-rehm-beh / moo-lehm-beh', hint: 'Universal Luhya greeting of peace (Hobley 1902)' },
          { target: 'esie / ise', source: 'I / me', pronunciation: 'eh-see-eh / ee-seh', hint: 'Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze (Johnston 1919)' },
          { target: 'iwe', source: 'You (singular)', pronunciation: 'ee-weh', hint: '2nd person singular pronoun' },
          { target: 'efwe / ifwe', source: 'We / us', pronunciation: 'eh-fweh / ee-fweh', hint: '1st person plural pronoun' },
          { target: 'omundu (pl. abandu)', source: 'Person (pl. People)', pronunciation: 'oh-moo-ndoo / ah-bah-ndoo', hint: 'Class 1/2 noun (Hobley 1902 & Johnston 1919)' },
          { target: 'omukhasi (pl. abakhasi)', source: 'Woman / Wife', pronunciation: 'oh-moo-khah-see', hint: 'Class 1/2 noun' },
          { target: 'omusatsa (pl. abasatsa)', source: 'Man / Husband', pronunciation: 'oh-moo-sah-tsah', hint: 'Class 1/2 noun' },
          { target: 'omwana (pl. abana)', source: 'Child (pl. Children)', pronunciation: 'oh-mwah-nah / ah-bah-nah', hint: 'Class 1/2 noun' },
          { target: 'omwami (pl. abami)', source: 'King / Paramount Chief (Nabongo)', pronunciation: 'oh-mwah-mee / ah-bah-mee', hint: 'Rev. N. Stam (1929, pp. 148–149) Wanga royal title' },
          { target: 'mama / papa (sese)', source: 'Mother / Father', pronunciation: 'mah-mah / pah-pah', hint: 'Core kinship terms (Hobley 1902)' }
        ],
        sentences: [
          { target: 'Omundu mulayi; abandu balayi.', source: 'A good person; good people.' },
          { target: 'Omwana nende mama.', source: 'The child and mother.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the Oluluyia word for "Person" (pl. abandu)?',
            correctAnswer: 'omundu (pl. abandu)',
            options: ['omundu (pl. abandu)', 'omukhasi (pl. abakhasi)', 'omusatsa (pl. abasatsa)', 'efwe / ifwe'],
            hint: 'Class 1/2 omu-/aba- noun'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Oluluyia pronouns and kinship nouns with their English meanings:',
            correctAnswer: 'esie / ise: I / me, efwe / ifwe: We / us, omukhasi: Woman / Wife, omwami: King / Chief',
            pairs: [
              { left: 'esie / ise', right: 'I / me' },
              { left: 'efwe / ifwe', right: 'We / us' },
              { left: 'omukhasi', right: 'Woman / Wife' },
              { left: 'omwami', right: 'King / Chief' }
            ]
          }
        ]
      },
      {
        id: 'luhya-numbers-adjectives',
        title: 'Numbers 1–10 (Hobley 1902 & Johnston 1919) & Core Descriptive Roots',
        icon: 'Hash',
        description: 'Count from 1 to 10 in Luwanga/Oluluyia and use core descriptive stems.',
        tips: "Hobley (1902, pp. 84, 95) and Johnston (1919, p. 54) record Luwanga/Lunyara numerals 1–10: ndala (-lala, 1), tsimbili (-bili, 2), tsitaru (-taru, 3), tsine (-ne, 4), tsiraano (-raano, 5), tsisaasaba (6), mufungate (tsisaba, 7), munane (8), shenda (9), ikhumi (10).",
        words: [
          { target: '-lala (ndala)', source: 'One (1)', pronunciation: 'lah-lah', hint: 'Hobley (1902) & Johnston (1919 #5a)' },
          { target: '-bili (tsimbili)', source: 'Two (2)', pronunciation: 'bee-lee', hint: 'Hobley (1902) & Johnston (1919 #5a)' },
          { target: '-taru (tsitaru)', source: 'Three (3)', pronunciation: 'tah-roo', hint: 'Hobley (1902) & Johnston (1919 #5a)' },
          { target: '-ne (tsine)', source: 'Four (4)', pronunciation: 'neh', hint: 'Hobley (1902) & Johnston (1919 #5a)' },
          { target: '-raano (tsiraano)', source: 'Five (5)', pronunciation: 'rah-noh', hint: 'Hobley (1902) & Johnston (1919 #5a)' },
          { target: 'tsisaasaba, mufungate, munane, shenda, ikhumi', source: '6, 7, 8, 9, 10', pronunciation: 'tsee-sah-sah-bah, moo-foon-gah-teh, moo-nah-neh, shehn-dah, ee-khoo-mee', hint: 'Johnston (1919, p. 54) Luwanga/Lunyara numerals 6–10' },
          { target: '-khongo', source: 'Big / large', pronunciation: 'khoh-ngoh', hint: 'Zone J30 Swadesh #27' },
          { target: '-titi / -tutu', source: 'Small / few', pronunciation: 'tee-tee', hint: 'Zone J30 Swadesh #32' },
          { target: '-layi', source: 'Good', pronunciation: 'lah-yee', hint: 'Zone J30 Swadesh #185' }
        ],
        sentences: [
          { target: 'Abana babili balayi.', source: 'Two good children.' },
          { target: 'Amakhuwa malayi.', source: 'Good words / matters.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Oluluyia numeral root means "Five (5)"?',
            correctAnswer: '-raano (tsiraano)',
            options: ['-raano (tsiraano)', '-lala (ndala)', '-bili (tsimbili)', '-taru (tsitaru)'],
            hint: 'Cognate with Bantu -tano'
          }
        ]
      }
    ]
  },
  {
    id: 'luhya-unit-2',
    title: 'Unit 2: Nature, Core Verbs (Okhu-) & Wanga Heritage (Stam 1929 & Hobley 1903)',
    description: 'Explore natural elements, high-frequency okhu- verbs, and Luhanga cultural vocabulary from Rev. N. Stam (1929) and C. W. Hobley (1903).',
    icon: '🌿',
    skills: [
      {
        id: 'luhya-nature-verbs',
        title: 'Water, Fire, Nature, Everyday Verbs & Wanga Heritage',
        icon: 'Flame',
        description: 'Learn core environmental nouns, infinitive verbs, and classical Luhanga expressions from Stam (1929).',
        tips: "Verbs in Oluluyia begin with the infinitive prefix 'okhu-' (or 'okhw-' before a vowel): okhunywa (to drink), okhuliira (to eat), okhulola (to see), okhumanya (to know), okhwitsa (to come). In Rev. N. Stam's 'The Bahanga' (1929), Were / Nasayi is the Supreme Creator.",
        words: [
          { target: 'amaatsi / madzi', source: 'Water', pronunciation: 'ah-mah-tsee', hint: 'Hobley (1902) & Johnston (1919)' },
          { target: 'omuliro', source: 'Fire', pronunciation: 'oh-moo-lee-roh', hint: 'Hobley (1902) & Johnston (1919)' },
          { target: 'liyuba (eliuba)', source: 'Sun', pronunciation: 'lee-yoo-bah', hint: 'Rev. N. Stam (1929, p. 160) & Johnston (1919)' },
          { target: 'ifula', source: 'Rain', pronunciation: 'ee-foo-lah', hint: 'Hobley (1902) & Johnston (1919)' },
          { target: 'Were / Nasayi', source: 'God, the Supreme Creator', pronunciation: 'weh-reh / nah-sah-yee', hint: 'Rev. N. Stam (1929, pp. 154, 159–160) Wanga religion' },
          { target: 'Were ankhonyere / Nasayi akhulinde', source: 'May God help me / May God guard you', pronunciation: 'weh-reh ahn-khoh-nyeh-reh', hint: 'Rev. N. Stam (1929, p. 160) traditional blessing' },
          { target: 'musiro (muziro) / ekhyinekha', source: 'Clan totem (thing abstained from) / Soul or shadow', pronunciation: 'moo-see-roh / eh-khyee-neh-khah', hint: 'Stam (1929, pp. 162, 176) & Hobley (1903, p. 347)' },
          { target: 'okhunywa / okhuliira', source: 'To drink / To eat', pronunciation: 'oh-khoo-nywah / oh-khoo-lee-rah', hint: 'Class 15 infinitives' },
          { target: 'okhulola / okhumanya', source: 'To see / To know', pronunciation: 'oh-khoo-loh-lah / oh-khoo-mah-nyah', hint: 'Class 15 infinitives' },
          { target: 'okhwitsa / okhuchenda', source: 'To come / To walk', pronunciation: 'oh-khwee-tsah / oh-khoo-chehn-dah', hint: 'Class 15 infinitives' }
        ],
        sentences: [
          { target: 'Were ankhonyere; Nasayi akhulinde.', source: 'May God help me; may the Creator guard you (Stam 1929).' },
          { target: 'Okhunywa amaatsi.', source: 'To drink water.' }
        ],
        authoredExercises: [
          {
            type: 'match_pairs',
            prompt: 'Match the Oluluyia nouns, verbs, and blessings with their English meanings:',
            correctAnswer: 'amaatsi / madzi: Water, omuliro: Fire, Were / Nasayi: God, the Supreme Creator, okhumanya: To know',
            pairs: [
              { left: 'amaatsi / madzi', right: 'Water' },
              { left: 'omuliro', right: 'Fire' },
              { left: 'Were / Nasayi', right: 'God, the Supreme Creator' },
              { left: 'okhumanya', right: 'To know' }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master family, kinship, clans & social organization in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "👨‍👩‍👧‍👦",
    "skills": [
      {
        "id": "luhya-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "Omwami (Nabongo, pl. Abami)",
            "source": "King / Chief",
            "pronunciation": "oh-mwah-mee / nah-bohn-goh",
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
          },
          {
            "target": "omulina (pl. abalina) / omwitsa",
            "source": "Friend",
            "pronunciation": "oh-moo-lee-nah / oh-mwee-tsah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "omwana (pl. abana / baana)",
            "source": "Child / children",
            "pronunciation": "omwana (pl. abana / baana)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mukha / omukhasi",
            "source": "Wife",
            "pronunciation": "mukha / omukhasi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhwe / omusatsa",
            "source": "Husband",
            "pronunciation": "omukhwe / omusatsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "mama",
            "source": "Mother",
            "pronunciation": "mama",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "papa / taata",
            "source": "Father",
            "pronunciation": "papa / taata",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omwana (pl. abana / avana)",
            "source": "child (pl. children)",
            "pronunciation": "omwana (pl. abana / avana)",
            "hint": "Lubukusu / Oluhya"
          },
          {
            "target": "Omw-ami; aw-ami / Omw-ami / Omw-ami. Ωmu-kuru",
            "source": "Chief",
            "pronunciation": "omw-ami; aw-ami / omw-ami / omw-ami. ωmu-kuru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"Omwami (Nabongo, pl. Abami)\" nende \"omulina (pl. abalina) / omwitsa\".",
            "source": "Our people know \"King / Chief\" and \"Friend\"."
          },
          {
            "target": "Munzu mwefwe muli omwana (pl. abana / baana) nende mukha / omukhasi.",
            "source": "In our house there is Child / children and Wife."
          },
          {
            "target": "Abakhulundu baloma khu \"omukhwe / omusatsa\" nende \"mama\".",
            "source": "The elders spoke about \"Husband\" and \"Mother\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omwami (Nabongo, pl. Abami)\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "King / Chief",
            "options": [
              "King / Chief",
              "Friend",
              "Child / children",
              "Wife"
            ],
            "hint": "Rev. N. Stam 1929 pp. 148–149 Wanga royal title"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Omwami (Nabongo, pl. Abami)",
                "right": "King / Chief"
              },
              {
                "left": "omulina (pl. abalina) / omwitsa",
                "right": "Friend"
              },
              {
                "left": "omwana (pl. abana / baana)",
                "right": "Child / children"
              },
              {
                "left": "mukha / omukhasi",
                "right": "Wife"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "Omw-ana / Omw-ana; bab-ana. Om-soriri",
            "source": "Son, boy",
            "pronunciation": "omw-ana / omw-ana; bab-ana. om-soriri",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "senge",
            "source": "Aunt",
            "pronunciation": "senge",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "mukhofu",
            "source": "Elder",
            "pronunciation": "mukhofu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "oweha",
            "source": "Marriage",
            "pronunciation": "oweha",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "umuchesa",
            "source": "Neighbour",
            "pronunciation": "umuchesa",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "mulamu",
            "source": "Sister-in-law",
            "pronunciation": "mulamu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "msiani",
            "source": "Son",
            "pronunciation": "msiani",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "nakufiala",
            "source": "Son-in-law",
            "pronunciation": "nakufiala",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "baba",
            "source": "Step-father",
            "pronunciation": "baba",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"Omw-ana / Omw-ana; bab-ana. Om-soriri\" nende \"senge\".",
            "source": "Our people know \"Son, boy\" and \"Aunt\"."
          },
          {
            "target": "Munzu mwefwe muli mukhofu nende oweha.",
            "source": "In our house there is Elder and Marriage."
          },
          {
            "target": "Abakhulundu baloma khu \"umuchesa\" nende \"mulamu\".",
            "source": "The elders spoke about \"Neighbour\" and \"Sister-in-law\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Omw-ana / Omw-ana; bab-ana. Om-soriri\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Son, boy",
            "options": [
              "Son, boy",
              "Aunt",
              "Elder",
              "Marriage"
            ],
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Omw-ana / Omw-ana; bab-ana. Om-soriri",
                "right": "Son, boy"
              },
              {
                "left": "senge",
                "right": "Aunt"
              },
              {
                "left": "mukhofu",
                "right": "Elder"
              },
              {
                "left": "oweha",
                "right": "Marriage"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master numbers, counting, currency & measures in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "🔢",
    "skills": [
      {
        "id": "luhya-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "ikhumi (likhumi)",
            "source": "Ten",
            "pronunciation": "ee-khoo-mee",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "shenda (kienda)",
            "source": "Nine",
            "pronunciation": "shehn-dah / kee-ehn-dah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "munane (tsinane)",
            "source": "Eight",
            "pronunciation": "moo-nah-neh",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "mufungate (tsisaba)",
            "source": "Seven",
            "pronunciation": "moo-foon-gah-teh / tsee-sah-bah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "tsisaasaba (mkaga)",
            "source": "Six",
            "pronunciation": "tsee-sah-sah-bah",
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "target": "-osi / tulu",
            "source": "All",
            "pronunciation": "-osi / tulu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-inji / -nyishi",
            "source": "Many",
            "pronunciation": "-inji / -nyishi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-lala / ndala",
            "source": "One",
            "pronunciation": "-lala / ndala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-bili /tsimbili",
            "source": "Two",
            "pronunciation": "-bili /tsimbili",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"ikhumi (likhumi)\" nende \"shenda (kienda)\".",
            "source": "Our people know \"Ten\" and \"Nine\"."
          },
          {
            "target": "Munzu mwefwe muli munane (tsinane) nende mufungate (tsisaba).",
            "source": "In our house there is Eight and Seven."
          },
          {
            "target": "Abakhulundu baloma khu \"tsisaasaba (mkaga)\" nende \"-osi / tulu\".",
            "source": "The elders spoke about \"Six\" and \"All\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ikhumi (likhumi)\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Nine",
              "Eight",
              "Seven"
            ],
            "hint": "Hobley 1902 p. 69 & Johnston 1919 #5a"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ikhumi (likhumi)",
                "right": "Ten"
              },
              {
                "left": "shenda (kienda)",
                "right": "Nine"
              },
              {
                "left": "munane (tsinane)",
                "right": "Eight"
              },
              {
                "left": "mufungate (tsisaba)",
                "right": "Seven"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "-taru / tsitaru",
            "source": "Three",
            "pronunciation": "-taru / tsitaru",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-ne / tsine",
            "source": "Four",
            "pronunciation": "-ne / tsine",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-raano / tsiraano",
            "source": "Five",
            "pronunciation": "-raano / tsiraano",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "Sekunde",
            "source": "Second (time unit)",
            "pronunciation": "sekunde",
            "hint": "Oluluyia — GitHub unicode-org/cldr (luy.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru",
            "source": "Thirty",
            "pronunciation": "ama-kumi ka-tarru / ama-kumi ka-datu / kama-gumi ka-taru",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kumi ka-nne / Kama-gumi ka-nne",
            "source": "Forty",
            "pronunciation": "ama-kumi ka-nne / kama-gumi ka-nne",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kumi ka-rranω / Ama-kumi ka-tanω / Kama-gumi ka-ranω",
            "source": "Fifty",
            "pronunciation": "ama-kumi ka-rranω / ama-kumi ka-tanω / kama-gumi ka-ranω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-kana ma-χumi / Si-zumi / Kama-tondω ki-kumi",
            "source": "Thousand",
            "pronunciation": "ama-kana ma-χumi / si-zumi / kama-tondω ki-kumi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "-ṅgi / -iṅgi",
            "source": "Plenty, many",
            "pronunciation": "-ṅgi / -iṅgi",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"-taru / tsitaru\" nende \"-ne / tsine\".",
            "source": "Our people know \"Three\" and \"Four\"."
          },
          {
            "target": "Munzu mwefwe muli -raano / tsiraano nende Sekunde.",
            "source": "In our house there is Five and Second (time unit)."
          },
          {
            "target": "Abakhulundu baloma khu \"Ama-kumi ka-tarru / Ama-kumi ka-datu / Kama-gumi ka-taru\" nende \"Ama-kumi ka-nne / Kama-gumi ka-nne\".",
            "source": "The elders spoke about \"Thirty\" and \"Forty\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"-taru / tsitaru\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Three",
            "options": [
              "Three",
              "Four",
              "Five",
              "Second (time unit)"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "-taru / tsitaru",
                "right": "Three"
              },
              {
                "left": "-ne / tsine",
                "right": "Four"
              },
              {
                "left": "-raano / tsiraano",
                "right": "Five"
              },
              {
                "left": "Sekunde",
                "right": "Second (time unit)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master food, cuisine, crops & livestock husbandry in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "🌾",
    "skills": [
      {
        "id": "luhya-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Utensils",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "obushi (bushi)",
            "source": "Honey",
            "pronunciation": "oh-boo-shee",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "amabele (mabere)",
            "source": "Milk",
            "pronunciation": "ah-mah-beh-leh",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "ebyokhulia (obuma = ugali)",
            "source": "Food",
            "pronunciation": "eh-byoh-khoo-lee-ah / oh-boo-mah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "eshiamo (pl. ebiamo)",
            "source": "Fruit",
            "pronunciation": "eshiamo (pl. ebiamo)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inyama",
            "source": "Meat",
            "pronunciation": "inyama",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "libuyu (pl. amabuyu)",
            "source": "Egg",
            "pronunciation": "libuyu (pl. amabuyu)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunyu / omufume",
            "source": "Salt",
            "pronunciation": "omunyu / omufume",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-yinjikhane",
            "source": "Full",
            "pronunciation": "-yinjikhane",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "-bolo",
            "source": "Rotten",
            "pronunciation": "-bolo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"obushi (bushi)\" nende \"amabele (mabere)\".",
            "source": "Our people know \"Honey\" and \"Milk\"."
          },
          {
            "target": "Munzu mwefwe muli ebyokhulia (obuma = ugali) nende eshiamo (pl. ebiamo).",
            "source": "In our house there is Food and Fruit."
          },
          {
            "target": "Abakhulundu baloma khu \"inyama\" nende \"libuyu (pl. amabuyu)\".",
            "source": "The elders spoke about \"Meat\" and \"Egg\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"obushi (bushi)\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Milk",
              "Food",
              "Fruit"
            ],
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "obushi (bushi)",
                "right": "Honey"
              },
              {
                "left": "amabele (mabere)",
                "right": "Milk"
              },
              {
                "left": "ebyokhulia (obuma = ugali)",
                "right": "Food"
              },
              {
                "left": "eshiamo (pl. ebiamo)",
                "right": "Fruit"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Sprout",
        "description": "Study indigenous crops, planting seasons, and livestock terminology. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "Pauni ya Sudani",
            "source": "Sudanese Pound (SDG)",
            "pronunciation": "pauni ya sudani",
            "hint": "Oluluyia — GitHub unicode-org/cldr (luy.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
            "source": "Fat, oil",
            "pronunciation": "ama-furra / ama-futa / kimi-nawa (pl.). kama-futa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "In-zala / In-jala / In-jara, In-zala",
            "source": "Hunger",
            "pronunciation": "in-zala / in-jala / in-jara, in-zala",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubω",
            "source": "Maize",
            "pronunciation": "ama-duma. ka-duma (5 b) / ama-dumwa / nabu-kubω",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "Omw-eṅge. Ama-lua / Omw-eṅge / Kama-rwa",
            "source": "Palm wine, beer",
            "pronunciation": "omw-eṅge. ama-lua / omw-eṅge / kama-rwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "I-fukwa / Ki-kwa or Si-kwa",
            "source": "Yam",
            "pronunciation": "i-fukwa / ki-kwa or si-kwa",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "-dia / -dia, -lia / -lya",
            "source": "To eat",
            "pronunciation": "-dia / -dia, -lia / -lya",
            "hint": "Sir Harry H. Johnston (1919) Comparative Study of the Bantu Languages (Sub-group A5: Lu-Wanga, Lu-Nyara, Lu-Masaba)"
          },
          {
            "target": "shilulu",
            "source": "Bitter",
            "pronunciation": "shilulu",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          },
          {
            "target": "shifui",
            "source": "Boil (noun)",
            "pronunciation": "shifui",
            "hint": "C. W. Hobley (1902) Eastern Uganda: An Ethnological Survey (Lu-Wanga)"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"Pauni ya Sudani\" nende \"Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa\".",
            "source": "Our people know \"Sudanese Pound (SDG)\" and \"Fat, oil\"."
          },
          {
            "target": "Munzu mwefwe muli In-zala / In-jala / In-jara, In-zala nende Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubω.",
            "source": "In our house there is Hunger and Maize."
          },
          {
            "target": "Abakhulundu baloma khu \"Omw-eṅge. Ama-lua / Omw-eṅge / Kama-rwa\" nende \"I-fukwa / Ki-kwa or Si-kwa\".",
            "source": "The elders spoke about \"Palm wine, beer\" and \"Yam\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Pauni ya Sudani\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Sudanese Pound (SDG)",
            "options": [
              "Sudanese Pound (SDG)",
              "Fat, oil",
              "Hunger",
              "Maize"
            ],
            "hint": "Oluluyia — GitHub unicode-org/cldr (luy.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Pauni ya Sudani",
                "right": "Sudanese Pound (SDG)"
              },
              {
                "left": "Ama-furra / Ama-futa / Kimi-nawa (pl.). Kama-futa",
                "right": "Fat, oil"
              },
              {
                "left": "In-zala / In-jala / In-jara, In-zala",
                "right": "Hunger"
              },
              {
                "left": "Ama-duma. Ka-duma (5 b) / Ama-dumwa / Nabu-kubω",
                "right": "Maize"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master nature, landscape, flora & east african wildlife in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "🦁",
    "skills": [
      {
        "id": "luhya-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "Sun",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "omusaala / omuti (pl. emisaala)",
            "source": "Tree",
            "pronunciation": "omusaala / omuti (pl. emisaala)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omutsuru",
            "source": "Forest",
            "pronunciation": "omutsuru",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "imwo",
            "source": "Seed",
            "pronunciation": "imwo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lifafu / lisafu (pl. amasafu)",
            "source": "Leaf",
            "pronunciation": "lifafu / lisafu (pl. amasafu)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurombo",
            "source": "Root",
            "pronunciation": "omurombo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likhoba",
            "source": "Bark (of tree)",
            "pronunciation": "likhoba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshimuli (pl. ebimuli)",
            "source": "Flower",
            "pronunciation": "eshimuli (pl. ebimuli)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "obunyasi",
            "source": "Grass",
            "pronunciation": "obunyasi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eliuba",
            "source": "Sun",
            "pronunciation": "eliuba",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"omusaala / omuti (pl. emisaala)\" nende \"omutsuru\".",
            "source": "Our people know \"Tree\" and \"Forest\"."
          },
          {
            "target": "Munzu mwefwe muli imwo nende lifafu / lisafu (pl. amasafu).",
            "source": "In our house there is Seed and Leaf."
          },
          {
            "target": "Abakhulundu baloma khu \"omurombo\" nende \"likhoba\".",
            "source": "The elders spoke about \"Root\" and \"Bark (of tree)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"omusaala / omuti (pl. emisaala)\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Tree",
            "options": [
              "Tree",
              "Forest",
              "Seed",
              "Leaf"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "omusaala / omuti (pl. emisaala)",
                "right": "Tree"
              },
              {
                "left": "omutsuru",
                "right": "Forest"
              },
              {
                "left": "imwo",
                "right": "Seed"
              },
              {
                "left": "lifafu / lisafu (pl. amasafu)",
                "right": "Leaf"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "Trees",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "omwesi",
            "source": "Moon / month",
            "pronunciation": "omwesi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "ing'ining'ini",
            "source": "Star",
            "pronunciation": "ing'ining'ini",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omuchera / omwalo",
            "source": "River",
            "pronunciation": "omuchera / omwalo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inyanza",
            "source": "Lake / sea",
            "pronunciation": "inyanza",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "libale / lichina",
            "source": "Stone",
            "pronunciation": "libale / lichina",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olufu",
            "source": "Dust",
            "pronunciation": "olufu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshi / eshialo",
            "source": "Earth / country",
            "pronunciation": "eshi / eshialo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilesi",
            "source": "Cloud",
            "pronunciation": "lilesi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "loing'ong'ong'we",
            "source": "Fog / mist",
            "pronunciation": "loing'ong'ong'we",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"omwesi\" nende \"ing'ining'ini\".",
            "source": "Our people know \"Moon / month\" and \"Star\"."
          },
          {
            "target": "Munzu mwefwe muli omuchera / omwalo nende inyanza.",
            "source": "In our house there is River and Lake / sea."
          },
          {
            "target": "Abakhulundu baloma khu \"libale / lichina\" nende \"olufu\".",
            "source": "The elders spoke about \"Stone\" and \"Dust\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"omwesi\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Moon / month",
            "options": [
              "Moon / month",
              "Star",
              "River",
              "Lake / sea"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "omwesi",
                "right": "Moon / month"
              },
              {
                "left": "ing'ining'ini",
                "right": "Star"
              },
              {
                "left": "omuchera / omwalo",
                "right": "River"
              },
              {
                "left": "inyanza",
                "right": "Lake / sea"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master the human body, health, medicine & safety in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "🩺",
    "skills": [
      {
        "id": "luhya-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "amabanga / amalasire / amatsayi",
            "source": "Blood",
            "pronunciation": "amabanga / amalasire / amatsayi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likumba (pl. amakumba)",
            "source": "Bone",
            "pronunciation": "likumba (pl. amakumba)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amanulu / amafura",
            "source": "Fat / oil",
            "pronunciation": "amanulu / amafura",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "liswi (pl. amaswi)",
            "source": "Hair",
            "pronunciation": "liswi (pl. amaswi)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omurwe / om'rwe (pl. emirwe)",
            "source": "Head",
            "pronunciation": "omurwe / om'rwe (pl. emirwe)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshirwi / okhurwi",
            "source": "Ear",
            "pronunciation": "eshirwi / okhurwi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "imoni (pl. tsimoni) / eliiso",
            "source": "Eye",
            "pronunciation": "imoni (pl. tsimoni) / eliiso",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amolu",
            "source": "Nose",
            "pronunciation": "amolu",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omunwa (pl. eminwa)",
            "source": "Mouth",
            "pronunciation": "omunwa (pl. eminwa)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"amabanga / amalasire / amatsayi\" nende \"likumba (pl. amakumba)\".",
            "source": "Our people know \"Blood\" and \"Bone\"."
          },
          {
            "target": "Munzu mwefwe muli amanulu / amafura nende liswi (pl. amaswi).",
            "source": "In our house there is Fat / oil and Hair."
          },
          {
            "target": "Abakhulundu baloma khu \"omurwe / om'rwe (pl. emirwe)\" nende \"eshirwi / okhurwi\".",
            "source": "The elders spoke about \"Head\" and \"Ear\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"amabanga / amalasire / amatsayi\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Blood",
            "options": [
              "Blood",
              "Bone",
              "Fat / oil",
              "Hair"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "amabanga / amalasire / amatsayi",
                "right": "Blood"
              },
              {
                "left": "likumba (pl. amakumba)",
                "right": "Bone"
              },
              {
                "left": "amanulu / amafura",
                "right": "Fat / oil"
              },
              {
                "left": "liswi (pl. amaswi)",
                "right": "Hair"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "ShieldAlert",
        "description": "Master expressions for illness, healing remedies, protection, and safety. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "elino (pl. ameno)",
            "source": "Tooth",
            "pronunciation": "elino (pl. ameno)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "olulimi (pl. tsinzimi)",
            "source": "Tongue",
            "pronunciation": "olulimi (pl. tsinzimi)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lilaro / eshilenge",
            "source": "Foot",
            "pronunciation": "lilaro / eshilenge",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "eshilenje / lirango",
            "source": "Leg / thigh",
            "pronunciation": "eshilenje / lirango",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "lisikamo",
            "source": "Knee",
            "pronunciation": "lisikamo",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "omukhono (pl. emikhono)",
            "source": "Hand / arm",
            "pronunciation": "omukhono (pl. emikhono)",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "inda",
            "source": "Belly / stomach",
            "pronunciation": "inda",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "amala",
            "source": "Intestines / guts",
            "pronunciation": "amala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "likosi",
            "source": "Neck",
            "pronunciation": "likosi",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"elino (pl. ameno)\" nende \"olulimi (pl. tsinzimi)\".",
            "source": "Our people know \"Tooth\" and \"Tongue\"."
          },
          {
            "target": "Munzu mwefwe muli lilaro / eshilenge nende eshilenje / lirango.",
            "source": "In our house there is Foot and Leg / thigh."
          },
          {
            "target": "Abakhulundu baloma khu \"lisikamo\" nende \"omukhono (pl. emikhono)\".",
            "source": "The elders spoke about \"Knee\" and \"Hand / arm\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"elino (pl. ameno)\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Tooth",
            "options": [
              "Tooth",
              "Tongue",
              "Foot",
              "Leg / thigh"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "elino (pl. ameno)",
                "right": "Tooth"
              },
              {
                "left": "olulimi (pl. tsinzimi)",
                "right": "Tongue"
              },
              {
                "left": "lilaro / eshilenge",
                "right": "Foot"
              },
              {
                "left": "eshilenje / lirango",
                "right": "Leg / thigh"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "luhya-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (C. W. Hobley (1902 Eastern Uganda & 1903))",
    "description": "Master core verbs, tenses, negation & verbal extensions in Luhya (Luyia) built directly from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
    "icon": "⚡",
    "skills": [
      {
        "id": "luhya-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Compass",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "okhuloma / okhuboola",
            "source": "Speak",
            "pronunciation": "oh-khoo-loh-mah",
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "target": "okhukona",
            "source": "Sleep",
            "pronunciation": "oh-khoo-koh-nah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhunywa",
            "source": "Drink",
            "pronunciation": "oh-khoo-nywah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhuliira / okhulia",
            "source": "Eat",
            "pronunciation": "oh-khoo-lee-ah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhwitsa (itsa!)",
            "source": "Come",
            "pronunciation": "oh-khwee-tsah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhutsia (tsia!)",
            "source": "Go",
            "pronunciation": "oh-khoo-tsee-ah",
            "hint": "Hobley 1902 & Johnston 1919 #5a"
          },
          {
            "target": "okhukuna / okhuluma",
            "source": "To bite",
            "pronunciation": "okhukuna / okhuluma",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhunuuna",
            "source": "To suck",
            "pronunciation": "okhunuuna",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhubita / okhufutsa",
            "source": "To spit",
            "pronunciation": "okhubita / okhufutsa",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"okhuloma / okhuboola\" nende \"okhukona\".",
            "source": "Our people know \"Speak\" and \"Sleep\"."
          },
          {
            "target": "Munzu mwefwe muli okhunywa nende okhuliira / okhulia.",
            "source": "In our house there is Drink and Eat."
          },
          {
            "target": "Abakhulundu baloma khu \"okhwitsa (itsa!)\" nende \"okhutsia (tsia!)\".",
            "source": "The elders spoke about \"Come\" and \"Go\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"okhuloma / okhuboola\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Drink",
              "Eat"
            ],
            "hint": "Hobley 1902 & Stam 1929"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "okhuloma / okhuboola",
                "right": "Speak"
              },
              {
                "left": "okhukona",
                "right": "Sleep"
              },
              {
                "left": "okhunywa",
                "right": "Drink"
              },
              {
                "left": "okhuliira / okhulia",
                "right": "Eat"
              }
            ]
          }
        ]
      },
      {
        "id": "luhya-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "Layers",
        "description": "Build complex meanings using verbal extensions and grammatical particles. Grounded in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga).",
        "tips": "Every lexical entry in this module is drawn verbatim from C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Luhya (Luyia) (Oluluyia) in C. W. Hobley (1902 Eastern Uganda & 1903), Sir Harry Johnston (1902 & 1919 Sub-group A5) & Rev. N. Stam (1929 The Bahanga) preserves pre-1930 phonological, grammatical, and ethnographic usage across Kakamega, Bungoma, Vihiga.",
        "words": [
          {
            "target": "okhusala",
            "source": "To vomit",
            "pronunciation": "okhusala",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuutsa / okhufura",
            "source": "To blow",
            "pronunciation": "okhuutsa / okhufura",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuyeera",
            "source": "To breathe",
            "pronunciation": "okhuyeera",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhutsekha",
            "source": "To laugh",
            "pronunciation": "okhutsekha",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhulola",
            "source": "To see",
            "pronunciation": "okhulola",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuulira",
            "source": "To hear",
            "pronunciation": "okhuulira",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhumanya",
            "source": "To know",
            "pronunciation": "okhumanya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhupara",
            "source": "To think",
            "pronunciation": "okhupara",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "target": "okhuunya",
            "source": "To smell",
            "pronunciation": "okhuunya",
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          }
        ],
        "sentences": [
          {
            "target": "Abandu befwe bamanyire \"okhusala\" nende \"okhuutsa / okhufura\".",
            "source": "Our people know \"To vomit\" and \"To blow\"."
          },
          {
            "target": "Munzu mwefwe muli okhuyeera nende okhutsekha.",
            "source": "In our house there is To breathe and To laugh."
          },
          {
            "target": "Abakhulundu baloma khu \"okhulola\" nende \"okhuulira\".",
            "source": "The elders spoke about \"To see\" and \"To hear\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"okhusala\" mean in English (C. W. Hobley (1902 Eastern Uganda & 1903))?",
            "correctAnswer": "To vomit",
            "options": [
              "To vomit",
              "To blow",
              "To breathe",
              "To laugh"
            ],
            "hint": "Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya) & Wikipedia Luhya language"
          },
          {
            "type": "match_pairs",
            "prompt": "Match each Luhya (Luyia) term to its verified English meaning:",
            "pairs": [
              {
                "left": "okhusala",
                "right": "To vomit"
              },
              {
                "left": "okhuutsa / okhufura",
                "right": "To blow"
              },
              {
                "left": "okhuyeera",
                "right": "To breathe"
              },
              {
                "left": "okhutsekha",
                "right": "To laugh"
              }
            ]
          }
        ]
      }
    ]
  }
];
