// ============================================================
// Somali (Af-Soomaali) Language Course Configuration & Units
// Grounded in Wiktionary 207-Word Somali Swadesh List, Wikipedia Somali_grammar & Bender (2020)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const SOMALI_CONFIG: LanguageConfig = {
  id: 'somali',
  name: 'Somali',
  nativeName: 'Af-Soomaali',
  family: 'Cushitic',
  counties: ['Garissa', 'Wajir', 'Mandera', 'Isiolo', 'Marsabit', 'Nairobi'],
  speakers: '2.8M',
  speechLocale: 'so-KE',
  description: 'A Lowland East Cushitic language spoken across North-Eastern Kenya and the Horn of Africa, celebrated for its suffixed definite articles (-ka/-ta), focus grammar (waa/baa), and alliterative oral poetry (Gabay) and proverbs (Maahmaahyo).',
  color: '#2563EB',
  sources: ['open-web-swadesh-comparative'],
};

export const SOMALI_UNITS: CourseUnit[] = [
  {
    id: 'somali-unit-1',
    title: 'Unit 1: Greetings (Nabad!), Definite Articles (-ka/-ta), Pronouns & Cushitic Numerals',
    description: 'Master Af-Soomaali greetings, masculine/feminine definite suffixes, pronouns, numbers 1–10, and classical Maahmaahyo proverbs.',
    icon: '🐪',
    skills: [
      {
        id: 'somali-greetings-nouns',
        title: 'Greetings, Suffixed Articles (-ka / -ta) & Pastoral Life',
        icon: 'MessageCircle',
        description: 'Learn Af-Soomaali greetings, pronouns, and definite nouns from the Swadesh and Cushitic corpus.',
        tips: "In Af-Soomaali, 'the' is a suffix attached to the noun: -ka/-ga/-ha for masculine nouns (nin → ninka 'the man', geel → geela 'the camels') and -ta/-da/-sha for feminine nouns (naag → naagta 'the woman', shimbir → shimbirta 'the bird').",
        words: [
          { target: 'Nabad! / Sidee tahay?', source: 'Peace! / How are you?', pronunciation: 'nah-bahd / see-deh tah-hay', hint: 'Standard Somali greeting' },
          { target: 'Mahadsanid (Aad baad u mahadsan tahay)', source: 'Thank you (Thank you very much)', pronunciation: 'mah-hahd-sah-need', hint: 'Gratitude' },
          { target: 'Soo dhawoow! / Nabad gelyo!', source: 'Welcome! / Goodbye!', pronunciation: 'soh dhah-wow / nah-bahd gehl-yoh', hint: 'Hospitality phrases' },
          { target: 'aniga (aan) / adiga (aad)', source: 'I / you (singular)', pronunciation: 'ah-nee-gah / ah-dee-gah', hint: 'Emphatic & clitic pronouns' },
          { target: 'isaga (uu) / iyada (ay)', source: 'he / she', pronunciation: 'ee-sah-gah / ee-yah-dah', hint: '3rd person pronouns' },
          { target: 'nin (ninka) / naag (naagta)', source: 'man (the man) / woman (the woman)', pronunciation: 'neen-kah / nahg-tah', hint: 'Masculine -ka vs. Feminine -ta' },
          { target: 'biyo (biyaha) / caano (caanaha)', source: 'water / milk', pronunciation: 'bee-yoh / ah-noh', hint: 'Essential pastoral liquids' },
          { target: "geel / lo' / shimbir", source: 'camels / cattle / bird', pronunciation: 'gehl / loh / sheem-beer', hint: 'Proto-East Cushitic fauna (Bender 2020)' },
          { target: 'qorrax / dayax / roob', source: 'sun / moon / rain', pronunciation: 'qohr-rahkh / dah-yahkh / rohb', hint: 'Swadesh nature nouns' },
          { target: 'xeer / maahmaah', source: 'customary law / proverb', pronunciation: 'khehr / mah-mah', hint: 'Somali oral heritage' }
        ],
        sentences: [
          { target: 'Nabad! Soo dhawoow, mahadsanid.', source: 'Peace! Welcome, thank you.' },
          { target: 'Ninku wuxuu cabbaa biyo iyo caano.', source: 'The man drinks water and milk.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How does Af-Soomaali form "the man" and "the woman" from "nin" and "naag"?',
            correctAnswer: 'ninka / naagta',
            options: ['ninka / naagta', 'aniga / adiga', 'biyo / caano', 'qorrax / dayax'],
            hint: 'Masculine suffix -ka and feminine suffix -ta'
          }
        ]
      },
      {
        id: 'somali-numbers-maahmaahyo',
        title: 'Numerals 1–10, Verbs & Classical Maahmaahyo Proverbs',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Af-Soomaali and learn alliterative Somali proverbs.',
        tips: "Somali proverbs (Maahmaahyo) use poetic alliteration (higgaad), such as 'Far keliya fool ma dhaqdo' (alliterating in F: Far / fool).",
        words: [
          { target: 'kow, laba, saddex, afar, shan', source: '1, 2, 3, 4, 5', pronunciation: 'kohw, lah-bah, sahd-dehkh, ah-fahr, shahn', hint: 'East Cushitic cardinals 1–5' },
          { target: 'lix, todoba, sideed, sagaal, toban', source: '6, 7, 8, 9, 10', pronunciation: 'leekh, toh-doh-bah, see-dehd, sah-gahl, toh-bahn', hint: 'East Cushitic cardinals 6–10' },
          { target: 'boqol / kun', source: '100 / 1,000', pronunciation: 'boh-qohl / koon', hint: 'Higher numerals' },
          { target: 'cun / cab / imow / tag', source: 'eat / drink / come / go', pronunciation: 'oon / ahb / ee-mohw / tahg', hint: 'Core Swadesh verbs' },
          { target: 'arag / maqal / ogow / hadal', source: 'see / hear / know / speak', pronunciation: 'ah-rahg / mah-qahl / oh-gohw / hah-dahl', hint: 'Perception & speech verbs' },
          { target: 'Far keliya fool ma dhaqdo', source: 'A single finger cannot wash a face (Unity is strength)', pronunciation: 'fahr keh-lee-yah fohl mah dhahq-doh', hint: 'Classical Somali proverb' },
          { target: "Aqoon la'aani waa iftiin la'aan", source: 'Lack of knowledge is lack of light', pronunciation: 'ah-qohn lah-ah-nee wah eef-teen lah-ahn', hint: 'Classical Somali proverb' }
        ],
        sentences: [
          { target: 'Far keliya fool ma dhaqdo.', source: 'A single finger cannot wash a face.' },
          { target: "Aqoon la'aani waa iftiin la'aan.", source: 'Lack of knowledge is lack of light.' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does the Somali proverb "Far keliya fool ma dhaqdo" mean?',
            correctAnswer: 'A single finger cannot wash a face (Unity is strength)',
            options: [
              'A single finger cannot wash a face (Unity is strength)',
              'Lack of knowledge is lack of light',
              '1, 2, 3, 4, 5',
              '100 / 1,000'
            ],
            hint: 'far = finger, keliya = single/alone, fool = face, ma dhaqdo = does not wash'
          }
        ]
      }
    ]
  }
];
