// ============================================================
// Swahili (Kiswahili) Language Course Configuration & Units
// Grounded in Hildegarde Hinde (1904), C. W. Hobley (1922), Wiktionary Zone G40 Swadesh List & Classical Proverbs
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const SWAHILI_CONFIG: LanguageConfig = {
  id: 'swahili',
  name: 'Kiswahili',
  nativeName: 'Kiswahili',
  family: 'Bantu',
  counties: ['Mombasa', 'Kilifi', 'Kwale', 'Lamu', 'Tana River', 'Nairobi'],
  speakers: '15M+',
  speechLocale: 'sw-KE',
  description: "Kenya's national and official language and East Africa's historic Sabaki Bantu lingua franca. Grounded in Hildegarde Hinde (1904), C. W. Hobley (1922), and the 207-word Swadesh corpus.",
  color: '#0284C7',
  sources: ['kamba-kikuyu-vocabularies', 'bantu-beliefs', 'open-web-swadesh-comparative'],
};

export const SWAHILI_UNITS: CourseUnit[] = [
  {
    id: 'swahili-unit-1',
    title: 'Unit 1: Greetings, Noun Classes (Ngeli) & Everyday Phrases (Hinde 1904)',
    description: 'Master coastal and standard Kiswahili greetings, M-/Wa- and Ki-/Vi- noun classes, and conversational phrases from Hinde (1904).',
    icon: '🌊',
    skills: [
      {
        id: 'swahili-greetings-nouns',
        title: 'Greetings, People & Noun Classes',
        icon: 'MessageCircle',
        description: 'Learn foundational Kiswahili greetings and noun singular/plural pairs.',
        tips: "Kiswahili nouns change prefix in the plural: mtu → watu (person → people), mtoto → watoto (child → children), kitu → vitu (thing → things), jiwe → mawe (stone → stones).",
        words: [
          { target: 'Hujambo! / Habari yako?', source: 'Hello! / How is your news?', pronunciation: 'hoo-jahm-boh / hah-bah-ree yah-koh', hint: 'Response: Sijambo! / Nzuri sana!' },
          { target: 'Asante sana', source: 'Thank you very much', pronunciation: 'ah-sahn-teh sah-nah', hint: 'Polite gratitude' },
          { target: 'mtu (pl. watu)', source: 'person (pl. people)', pronunciation: 'm-too / wah-too', hint: 'Class 1/2 m-/wa- (Hinde 1904)' },
          { target: 'mtoto (pl. watoto)', source: 'child (pl. children)', pronunciation: 'm-toh-toh / wah-toh-toh', hint: 'Class 1/2 m-/wa-' },
          { target: 'mgeni (pl. wageni)', source: 'guest / stranger', pronunciation: 'm-geh-nee / wah-geh-nee', hint: 'Class 1/2 m-/wa- (Hinde 1904)' },
          { target: 'kitu (pl. vitu)', source: 'thing (pl. things)', pronunciation: 'kee-too / vee-too', hint: 'Class 7/8 ki-/vi-' },
          { target: 'maji / moto', source: 'water / fire', pronunciation: 'mah-jee / moh-toh', hint: 'Core nature nouns (Swadesh)' },
          { target: 'nyumba (pl. nyumba)', source: 'house (pl. houses)', pronunciation: 'nyoom-bah', hint: 'Class 9/10 (Hinde 1904 & Hobley 1922)' },
          { target: 'chakula', source: 'food', pronunciation: 'chah-koo-lah', hint: 'Class 7 noun' },
          { target: 'njia', source: 'road / path / way', pronunciation: 'n-jee-ah', hint: 'Class 9/10 (Hinde 1904)' }
        ],
        sentences: [
          { target: 'Mgeni amefika nyumbani.', source: 'The guest has arrived at the house.' },
          { target: 'Watu wanakunywa maji safi.', source: 'The people are drinking clean water.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What is the plural of "mtu" (person) and "kitu" (thing) in Kiswahili?',
            correctAnswer: 'watu / vitu',
            options: ['watu / vitu', 'mitu / matu', 'mtu / kitu', 'watoto /wageni'],
            hint: 'Class 1 m- -> Class 2 wa-; Class 7 ki- -> Class 8 vi-'
          }
        ]
      },
      {
        id: 'swahili-verbs-proverbs',
        title: 'Verb Tenses (Hinde 1904), Numerals 1–10 & Classical Proverbs',
        icon: 'Compass',
        description: 'Conjugate Swahili verbs across Present, Past, and Future tenses and learn iconic coastal proverbs.',
        tips: "In Kiswahili, ni- (I), u- (you), a- (s/he), tu- (we), m- (you pl.), wa- (they) combine with -na- (present), -li- (past), -me- (perfect), and -ta- (future).",
        words: [
          { target: ' moja, mbili, tatu, nne, tano', source: '1, 2, 3, 4, 5', pronunciation: 'moh-jah, m-bee-lee, tah-too, n-neh, tah-noh', hint: 'Cardinal numbers 1–5 (Hinde 1904)' },
          { target: 'sita, saba, nane, kenda (tisa), kumi', source: '6, 7, 8, 9, 10', pronunciation: 'see-tah, sah-bah, nah-neh, kehn-dah, koo-mee', hint: 'Hinde (1904) preserves classical Bantu kenda (9)' },
          { target: 'ninashinda / nilishinda / nitashinda', source: 'I pass the day / I passed / I shall pass', pronunciation: 'nee-nah-sheen-dah', hint: 'Hinde (1904) paradigm verb ku-shinda' },
          { target: 'sishindi / sikushinda / sijashinda', source: 'I do not / I did not / I have not yet passed the day', pronunciation: 'see-sheen-dee', hint: 'Negative tenses (Hinde 1904)' },
          { target: 'kula / kunywa / kuja / kwenda', source: 'to eat / to drink / to come / to go', pronunciation: 'koo-lah / koo-nywah / koo-jah / kwehn-dah', hint: 'Core infinitive verbs' },
          { target: 'Haraka haraka haina baraka', source: 'Hurry, hurry has no blessing', pronunciation: 'hah-rah-kah hah-ee-nah bah-rah-kah', hint: 'Classical Swahili proverb' },
          { target: 'Pole pole ndio mwendo', source: 'Slowly, slowly is the way to go', pronunciation: 'poh-leh poh-leh n-dee-oh mwehn-doh', hint: 'Classical Swahili proverb' },
          { target: 'Mtu ni watu', source: 'A person is people (humanity is community)', pronunciation: 'm-too nee wah-too', hint: 'Classical Swahili proverb' }
        ],
        sentences: [
          { target: 'Haraka haraka haina baraka; pole pole ndio mwendo.', source: 'Hurry, hurry has no blessing; slowly, slowly is the way to go.' },
          { target: 'Mchumia juani hulia kivulini.', source: 'Whoever toils in the sun eats in the shade.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which Swahili verb form from Hinde (1904) means "I have not yet passed the day"?',
            correctAnswer: 'sijashinda',
            options: ['sijashinda', 'ninashinda', 'nilishinda', 'nitashinda'],
            hint: 'Negative prefix si- + incompletive marker -ja-'
          }
        ]
      }
    ]
  }
];
