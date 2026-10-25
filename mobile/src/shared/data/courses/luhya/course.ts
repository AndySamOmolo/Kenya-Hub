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
  }
];
