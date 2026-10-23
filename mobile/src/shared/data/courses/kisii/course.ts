// ============================================================
// Kisii (Ekegusii) Language Course Configuration & Units
// Based on Open-Web Linguistic Data (Wikipedia Gusii_language)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KISII_CONFIG: LanguageConfig = {
  id: 'kisii',
  name: 'Kisii',
  nativeName: 'Ekegusii',
  family: 'Bantu',
  counties: ['Kisii', 'Nyamira'],
  speakers: '2.7M',
  speechLocale: 'sw-KE',
  description: 'A Highland East Nyanza Bantu language (JE.42) spoken across Kisii and Nyamira counties in Western Kenya.',
  color: '#D97706',
  sources: ['open-web-swadesh-comparative'],
};

export const KISII_UNITS: CourseUnit[] = [
  {
    id: 'kisii-unit-1',
    title: 'Unit 1: Greetings, Noun Classes & Numbers 1–20',
    description: 'Master Ekegusii greetings, noun class pairs (omonto/abanto, egekombe/ebikombe), and counting from 1 to 20.',
    icon: '👋',
    skills: [
      {
        id: 'kisii-greetings-nouns',
        title: 'Greetings, People & Homestead Nouns',
        icon: 'Users',
        description: 'Learn daily salutations and core noun classes in Ekegusii.',
        tips: "Morning greeting in Ekegusii is 'Bwakire buya' ('It has dawned well'), and good night is 'Obotuko obuya'. Notice Class 1/2 'omonto → abanto' (person → people) and Class 9/10 'eng'ombe → chiombe' (cow → cows).",
        words: [
          { target: 'Bwakire buya', source: 'Good morning', pronunciation: 'bwah-kee-reh boo-yah', hint: 'Morning salutation' },
          { target: 'Obotuko obuya', source: 'Good night', pronunciation: 'oh-boh-too-koh oh-boo-yah', hint: 'Night salutation' },
          { target: 'omonto (pl. abanto)', source: 'Person (pl. People)', pronunciation: 'oh-moh-ntoh / ah-bah-ntoh', hint: 'Class 1/2 noun' },
          { target: 'omoiseke (pl. abaiseke)', source: 'Girl (pl. Girls)', pronunciation: 'oh-moh-ee-seh-keh', hint: 'Class 1/2 noun' },
          { target: 'omosubati', source: 'Lady / Married woman', pronunciation: 'oh-moh-soo-bah-tee', hint: 'Respectful address' },
          { target: 'sokoro / baba', source: 'Grandfather / Mother', pronunciation: 'soh-koh-roh / bah-bah', hint: 'Kinship nouns' },
          { target: 'amache / amabere', source: 'Water / Milk', pronunciation: 'ah-mah-cheh / ah-mah-beh-reh', hint: 'Class 6 liquid nouns' },
          { target: 'inka', source: 'Homestead / At home', pronunciation: 'ee-nkah', hint: 'Home / village' }
        ],
        sentences: [
          { target: 'Bwakire buya, baba.', source: 'Good morning, mother.' },
          { target: 'Obotuko obuya inka.', source: 'Good night at home.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Good morning" in Ekegusii?',
            correctAnswer: 'Bwakire buya',
            options: ['Bwakire buya', 'Obotuko obuya', 'omonto (pl. abanto)', 'amache / amabere'],
            hint: 'Literally "It has dawned well"'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Ekegusii words with their English meanings:',
            correctAnswer: 'Bwakire buya: Good morning, Obotuko obuya: Good night, omonto: Person, inka: Homestead / At home',
            pairs: [
              { left: 'Bwakire buya', right: 'Good morning' },
              { left: 'Obotuko obuya', right: 'Good night' },
              { left: 'omonto', right: 'Person' },
              { left: 'inka', right: 'Homestead / At home' }
            ]
          }
        ]
      },
      {
        id: 'kisii-numbers-verbs',
        title: 'Numbers 1–20 & Everyday Actions',
        icon: 'Hash',
        description: 'Count from eyemo (1) to emerongo ebere (20) and use core Ekegusii verbs.',
        tips: "Numbers 6–8 build on 'isano' (5): isano nemo (6), isano na ibere (7), isano na isato (8), while 9 is 'kianda' and 10 is 'ikomi'.",
        words: [
          { target: 'eyemo', source: 'One (1)', pronunciation: 'eh-yeh-moh', hint: 'Cardinal 1' },
          { target: 'ibere', source: 'Two (2)', pronunciation: 'ee-beh-reh', hint: 'Cardinal 2' },
          { target: 'isato', source: 'Three (3)', pronunciation: 'ee-sah-toh', hint: 'Cardinal 3' },
          { target: 'inye', source: 'Four (4)', pronunciation: 'ee-nyeh', hint: 'Cardinal 4' },
          { target: 'isano', source: 'Five (5)', pronunciation: 'ee-sah-noh', hint: 'Cardinal 5' },
          { target: 'isano nemo', source: 'Six (6, lit. 5+1)', pronunciation: 'ee-sah-noh neh-moh', hint: 'Cardinal 6' },
          { target: 'kianda / ikomi', source: 'Nine (9) / Ten (10)', pronunciation: 'kee-ah-ndah / ee-koh-mee', hint: 'Cardinals 9 & 10' },
          { target: 'emerongo ebere', source: 'Twenty (20)', pronunciation: 'eh-meh-roh-ngoh eh-beh-reh', hint: 'Cardinal 20' },
          { target: 'komanya / korora', source: 'To know / To see', pronunciation: 'koh-mah-nyah / koh-roh-rah', hint: 'Core verbs' },
          { target: 'gokama / tara', source: 'To milk / To walk', pronunciation: 'goh-kah-mah / tah-rah', hint: 'Core verbs' }
        ],
        sentences: [
          { target: 'Ikomi na ibere', source: 'Twelve (ten and two)' },
          { target: 'Chiombe isano na ibere', source: 'Seven cows' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How is "Six (6)" formed in Ekegusii?',
            correctAnswer: 'isano nemo',
            options: ['isano nemo', 'eyemo', 'kianda / ikomi', 'emerongo ebere'],
            hint: 'Literally 5 (isano) + 1 (nemo)'
          }
        ]
      }
    ]
  }
];
