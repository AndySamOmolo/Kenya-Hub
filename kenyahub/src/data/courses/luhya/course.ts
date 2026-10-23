// ============================================================
// Luhya (Oluluyia) Language Course Configuration & Units
// Based on Open-Web Comparative Linguistic Data:
// 1. Wiktionary Appendix:Bantu Swadesh lists (Zone J30 Luhya 207-word core lexicon)
// 2. Wikipedia Luhya_language (Dialectal comparisons across Wanga, Kisa, Nyole, and Logoli)
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
  description: 'A major Great Lakes / Western Bantu language cluster (Zone J30) spoken across Western Kenya.',
  color: '#2FA463',
  sources: ['open-web-swadesh-comparative'],
};

export const LUHYA_UNITS: CourseUnit[] = [
  {
    id: 'luhya-unit-1',
    title: 'Unit 1: Pronouns, People, Kinship & Numbers',
    description: 'Learn core personal pronouns, human & family nouns (omu-/aba-), and cardinal numbers in Oluluyia.',
    icon: '👋',
    skills: [
      {
        id: 'luhya-pronouns-people',
        title: 'Pronouns, People & Family (Class 1/2)',
        icon: 'Users',
        description: 'Master personal pronouns and Class 1/2 human nouns in Oluluyia.',
        tips: "In Oluluyia, Class 1 singular human nouns begin with 'omu-' and form their Class 2 plural in 'aba-': omundu (person) → abandu (people), omukhasi (woman) → abakhasi (women), omusatsa (man) → abasatsa (men).",
        words: [
          { target: 'esie / ise', source: 'I / me', pronunciation: 'eh-see-eh / ee-seh', hint: 'Wanga/Kisa esie, Nyole/Bukusu ise, Logoli inze' },
          { target: 'iwe', source: 'You (singular)', pronunciation: 'ee-weh', hint: '2nd person singular pronoun' },
          { target: 'efwe / ifwe', source: 'We / us', pronunciation: 'eh-fweh / ee-fweh', hint: '1st person plural pronoun' },
          { target: 'omundu (pl. abandu)', source: 'Person (pl. People)', pronunciation: 'oh-moo-ndoo / ah-bah-ndoo', hint: 'Class 1/2 noun' },
          { target: 'omukhasi', source: 'Woman / Wife', pronunciation: 'oh-moo-khah-see', hint: 'Class 1 noun (pl. abakhasi)' },
          { target: 'omusatsa', source: 'Man / Husband', pronunciation: 'oh-moo-sah-tsah', hint: 'Class 1 noun (pl. abasatsa)' },
          { target: 'omwana (pl. abana)', source: 'Child (pl. Children)', pronunciation: 'oh-mwah-nah / ah-bah-nah', hint: 'Class 1/2 noun' },
          { target: 'mama / papa', source: 'Mother / Father', pronunciation: 'mah-mah / pah-pah', hint: 'Core kinship terms' }
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
            options: ['omundu (pl. abandu)', 'omukhasi', 'omusatsa', 'efwe / ifwe'],
            hint: 'Class 1/2 omu-/aba- noun'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Oluluyia pronouns and kinship nouns with their English meanings:',
            correctAnswer: 'esie / ise: I / me, efwe / ifwe: We / us, omukhasi: Woman / Wife, omusatsa: Man / Husband',
            pairs: [
              { left: 'esie / ise', right: 'I / me' },
              { left: 'efwe / ifwe', right: 'We / us' },
              { left: 'omukhasi', right: 'Woman / Wife' },
              { left: 'omusatsa', right: 'Man / Husband' }
            ]
          }
        ]
      },
      {
        id: 'luhya-numbers-adjectives',
        title: 'Numbers 1–5 & Core Descriptive Roots',
        icon: 'Hash',
        description: 'Count from 1 to 5 and use core descriptive stems.',
        tips: "Bantu Zone J30 Luhya numeral roots are -lala (1), -bili (2), -taru (3), -ne (4), and -raano (5), which take concord prefixes according to the noun class counted.",
        words: [
          { target: '-lala (ndala)', source: 'One (1)', pronunciation: 'lah-lah', hint: 'Zone J30 Swadesh #22' },
          { target: '-bili (tsimbili)', source: 'Two (2)', pronunciation: 'bee-lee', hint: 'Zone J30 Swadesh #23' },
          { target: '-taru (tsitaru)', source: 'Three (3)', pronunciation: 'tah-roo', hint: 'Zone J30 Swadesh #24' },
          { target: '-ne (tsine)', source: 'Four (4)', pronunciation: 'neh', hint: 'Zone J30 Swadesh #25' },
          { target: '-raano (tsiraano)', source: 'Five (5)', pronunciation: 'rah-noh', hint: 'Zone J30 Swadesh #26' },
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
    title: 'Unit 2: Nature, Body & Core Verbs (Okhu-)',
    description: 'Explore natural elements, anatomy, and high-frequency okhu- verbs in Oluluyia.',
    icon: '🌿',
    skills: [
      {
        id: 'luhya-nature-verbs',
        title: 'Water, Fire, Nature & Everyday Verbs',
        icon: 'Flame',
        description: 'Learn core environmental nouns and infinitive verbs.',
        tips: "Verbs in Oluluyia begin with the infinitive prefix 'okhu-' (or 'okhw-' before a vowel): okhunywa (to drink), okhuliira (to eat), okhulola (to see), okhumanya (to know), okhwitsa (to come).",
        words: [
          { target: 'amaatsi / madzi', source: 'Water', pronunciation: 'ah-mah-tsee', hint: 'Zone J30 Swadesh #150' },
          { target: 'omuliro', source: 'Fire', pronunciation: 'oh-moo-lee-roh', hint: 'Zone J30 Swadesh #167' },
          { target: 'eliuba', source: 'Sun', pronunciation: 'eh-lee-oo-bah', hint: 'Zone J30 Swadesh #147' },
          { target: 'ifula', source: 'Rain', pronunciation: 'ee-foo-lah', hint: 'Zone J30 Swadesh #151' },
          { target: 'imbwa', source: 'Dog', pronunciation: 'ee-mbwah', hint: 'Zone J30 Swadesh #47' },
          { target: 'okhunywa', source: 'To drink', pronunciation: 'oh-khoo-nywah', hint: 'Zone J30 Swadesh #92' },
          { target: 'okhuliira', source: 'To eat', pronunciation: 'oh-khoo-lee-rah', hint: 'Zone J30 Swadesh #93' },
          { target: 'okhulola', source: 'To see', pronunciation: 'oh-khoo-loh-lah', hint: 'Zone J30 Swadesh #101' },
          { target: 'okhumanya', source: 'To know', pronunciation: 'oh-khoo-mah-nyah', hint: 'Zone J30 Swadesh #103' },
          { target: 'okhwitsa', source: 'To come', pronunciation: 'oh-khwee-tsah', hint: 'Zone J30 Swadesh #122' }
        ],
        sentences: [
          { target: 'Okhunywa amaatsi.', source: 'To drink water.' },
          { target: 'Omuliro nende amaatsi.', source: 'Fire and water.' }
        ],
        authoredExercises: [
          {
            type: 'match_pairs',
            prompt: 'Match the Oluluyia nouns and verbs with their English meanings:',
            correctAnswer: 'amaatsi / madzi: Water, omuliro: Fire, okhunywa: To drink, okhumanya: To know',
            pairs: [
              { left: 'amaatsi / madzi', right: 'Water' },
              { left: 'omuliro', right: 'Fire' },
              { left: 'okhunywa', right: 'To drink' },
              { left: 'okhumanya', right: 'To know' }
            ]
          }
        ]
      }
    ]
  }
];
