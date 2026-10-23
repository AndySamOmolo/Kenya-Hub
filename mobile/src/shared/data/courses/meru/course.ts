// ============================================================
// Meru & Mount Kenya Bantu (Kĩmĩĩrũ / Kîembu) Language Course
// Grounded in Wikipedia Meru_language & Embu_language Linguistic Corpus
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const MERU_CONFIG: LanguageConfig = {
  id: 'meru',
  name: 'Meru',
  nativeName: 'Kĩmĩĩrũ',
  family: 'Bantu',
  counties: ['Meru', 'Tharaka-Nithi', 'Embu'],
  speakers: '2.4M',
  speechLocale: 'sw-KE',
  description: 'A Central Kenya (Mount Kenya / Thagiicu) Bantu language spoken around the eastern and northern slopes of Kĩrĩnyaga (Mount Kenya), renowned for its 16 noun classes and the Njũri Ncheke council of elders.',
  color: '#16A34A',
  sources: ['open-web-swadesh-comparative'],
};

export const MERU_UNITS: CourseUnit[] = [
  {
    id: 'meru-unit-1',
    title: 'Unit 1: Greetings, 16 Noun Classes, Numerals & Mount Kenya Culture',
    description: 'Master Kĩmĩĩrũ and Kîembu greetings, noun-class concords, numbers 1–10, and everyday verbs.',
    icon: '⛰️',
    skills: [
      {
        id: 'meru-greetings-nouns',
        title: 'Greetings, People & Noun Classes (Muntũ / Antũ)',
        icon: 'Users',
        description: 'Learn conversational greetings and noun classes across Mount Kenya Bantu.',
        tips: "In Kĩmĩĩrũ, Class 1/2 nouns pair mũ-/ba- (muntũ → antũ 'person → people'), Class 3/4 pair mũ-/mĩ- (mũtĩ → mĩtĩ 'tree → trees'), and Class 12/13 pair ka-/tũ- for diminutives (kaana → tũana).",
        words: [
          { target: 'Ũrĩ mwega? (resp. Nĩ mwega)', source: 'How are you? (I am fine)', pronunciation: 'oo-ree mweh-gah / nee mweh-gah', hint: 'Singular greeting' },
          { target: 'Mũrĩ ega? (resp. Tũrĩ ega)', source: 'How are you all? (We are fine)', pronunciation: 'moo-ree eh-gah / too-ree eh-gah', hint: 'Plural greeting' },
          { target: 'Wĩtagwa atĩa? (resp. Njĩtagwa...)', source: 'What is your name? (My name is...)', pronunciation: 'wee-tah-gwah ah-tee-ah', hint: 'Introductions' },
          { target: 'Nĩwega mũno', source: 'Thank you very much', pronunciation: 'nee-weh-gah moo-noh', hint: 'Gratitude' },
          { target: 'muntũ (pl. antũ) / mũndũ (pl. andũ)', source: 'person (pl. people)', pronunciation: 'moon-too / ahn-too', hint: 'Class 1/2' },
          { target: 'mwana (pl. aana / ciana)', source: 'child (pl. children)', pronunciation: 'mwah-nah', hint: 'Class 1/2' },
          { target: 'mũtĩ (pl. mĩtĩ)', source: 'tree (pl. trees)', pronunciation: 'moo-tee / mee-tee', hint: 'Class 3/4' },
          { target: 'maĩ / manjĩ • mwaki', source: 'water • fire', pronunciation: 'mah-ee / mwah-kee', hint: 'Core nature nouns' },
          { target: 'irio • ĩria • nyama', source: 'food • milk • meat', pronunciation: 'ee-ree-oh / ee-ree-ah / nyah-mah', hint: 'Food staples' },
          { target: 'Njũri Ncheke', source: 'Supreme traditional council of elders of the Ameru', pronunciation: 'n-joo-ree n-cheh-keh', hint: 'Indigenous governance' }
        ],
        sentences: [
          { target: 'Muntũ ũjũ mũraja arĩrũta wĩra.', source: 'This tall person is working.' },
          { target: 'Antũ baba baraja barĩrũta wĩra.', source: 'These tall people are working.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "These tall people" in Kĩmĩĩrũ (plural of "Muntũ ũjũ mũraja")?',
            correctAnswer: 'Antũ baba baraja',
            options: ['Antũ baba baraja', 'Mĩtĩ ĩjĩ mĩraja', 'Muntũ ũjũ mũraja', 'Tũrĩ ega'],
            hint: 'Class 2 plural concord ba-'
          }
        ]
      },
      {
        id: 'meru-numbers-verbs',
        title: 'Numerals 1–10, Dahl’s Law Verbs & Proverbs',
        icon: 'Hash',
        description: 'Count from 1 to 10 and use core Mount Kenya Bantu verbs.',
        tips: "Notice Dahl's Law in infinitive verbs: kũ-ruga (to cook), kũ-rĩa (to eat), kũ-nyua (to drink), but gũ-thiĩ (to go) and gũ-ikara (to sit) where kũ- voices to gũ- before a voiceless consonant.",
        words: [
          { target: 'ĩmwe, igĩrĩ, ithatũ, inya, ithano', source: '1, 2, 3, 4, 5', pronunciation: 'ee-mweh, ee-gee-ree, ee-thah-too, ee-nyah, ee-thah-noh', hint: 'Cardinals 1–5' },
          { target: 'ithathatũ, mũgwanja, inyanya, kenda, ikũmi', source: '6, 7, 8, 9, 10', pronunciation: 'ee-thah-thah-too, moo-gwahn-jah, ee-nyah-nyah, kehn-dah, ee-koo-mee', hint: 'Cardinals 6–10' },
          { target: 'kũrĩa / kũnyua / kũruga', source: 'to eat / to drink / to cook', pronunciation: 'koo-ree-ah / koo-nyoo-ah / koo-roo-gah', hint: 'Class 15 infinitives' },
          { target: 'gũthiĩ / kwĩja (gũũka)', source: 'to go / to come', pronunciation: 'goo-thee-ee / kwee-jah', hint: "Dahl's Law gũthiĩ" },
          { target: 'kwaria / kũmenya / kwenda', source: 'to speak / to know / to love', pronunciation: 'kwah-ree-ah / koo-meh-nyah / kwehn-dah', hint: 'Everyday verbs' },
          { target: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ', source: 'A single tree does not make a forest', pronunciation: 'moo-tee oo-mweh', hint: 'Mount Kenya Bantu unity proverb' },
          { target: 'Kũmenya njĩra nĩ kũũria', source: 'To know the path is to ask', pronunciation: 'koo-meh-nyah n-jee-rah nee koo-ree-ah', hint: 'Proverb on humility and learning' }
        ],
        sentences: [
          { target: 'Mũtĩ ũmwe ndũtũũragia mũrũrĩ.', source: 'A single tree does not make a forest.' },
          { target: 'Kũmenya njĩra nĩ kũũria.', source: 'To know the path is to ask.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does the Kĩmĩĩrũ proverb "Kũmenya njĩra nĩ kũũria" mean?',
            correctAnswer: 'To know the path is to ask',
            options: ['To know the path is to ask', 'A single tree does not make a forest', '1, 2, 3, 4, 5', 'Thank you very much'],
            hint: 'kũmenya = to know, njĩra = path, kũũria = to ask'
          }
        ]
      }
    ]
  }
];
