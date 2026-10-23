// ============================================================
// Kalenjin Language Course Configuration & Units
// Grounded in A. C. Hollis & Sir Charles Eliot (1909) "The Nandi: Their Language and Folklore",
// van Otterloo (1979), Rottland (1982), and Gerrit J. Dimmendaal (1988)
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const KALENJIN_CONFIG: LanguageConfig = {
  id: 'kalenjin',
  name: 'Kalenjin',
  nativeName: 'Kalenjin',
  family: 'Nilotic',
  counties: ['Uasin Gishu', 'Nandi', 'Kericho', 'Bomet', 'Elgeyo-Marakwet', 'Baringo', 'West Pokot', 'Trans Nzoia'],
  speakers: '5.1M',
  speechLocale: 'sw-KE',
  description: 'A Highland (Southern) Nilotic macrolanguage uniting Nandi, Kipsigis, Keiyo, Tugen, Marakwet, Pokot, Sabaot, Terik, and Okiek. Grounded in A. C. Hollis & Sir Charles Eliot (1909) and comparative Nilotic linguistics.',
  color: '#9333EA',
  sources: ['hollis-nandi-1909', 'open-web-swadesh-comparative'],
};

export const KALENJIN_UNITS: CourseUnit[] = [
  {
    id: 'kalenjin-unit-1',
    title: 'Unit 1: Greetings, Definite Nouns, Numerals 1–10 & Hollis (1909) Folklore',
    description: 'Master Kalenjin greetings (Chamgei!), primary vs. secondary definite nouns, counting 1–10, and 1909 Nandi proverbs.',
    icon: '🏔️',
    skills: [
      {
        id: 'kalenjin-greetings-nouns',
        title: 'Greetings, People, Livestock & Nature',
        icon: 'Users',
        description: 'Learn everyday Kalenjin greetings and definite nouns from Hollis (1909) and Rottland (1982).',
        tips: "Kalenjin attaches definite articles to the END of nouns: chiito (the person, pl. piik), lakwet (the child, pl. lagok), teta (the cow, pl. tuga), beek (the water).",
        words: [
          { target: 'Chamgei! (resp. Chamgei mising!)', source: 'Hello! / Greetings! (Very much peace!)', pronunciation: 'chahm-gey / chahm-gey mee-seeng', hint: 'Universal Kalenjin greeting' },
          { target: 'Kongoi (Kongoi mising)', source: 'Thank you (Thank you very much)', pronunciation: 'kohn-goy', hint: 'Gratitude' },
          { target: 'chiito (pl. piik)', source: 'person (pl. people)', pronunciation: 'chee-toh / peek', hint: 'Primary chii / piich' },
          { target: 'lakwet (pl. lagok)', source: 'child (pl. children)', pronunciation: 'lah-kweht / lah-gohk', hint: 'Primary lakwa' },
          { target: 'tany / teta (pl. tuga)', source: 'cow, ox (pl. cattle)', pronunciation: 'tahny / teh-tah / too-gah', hint: 'Hollis (1909) pastoral staple' },
          { target: 'beek / chego / mursik', source: 'water / fresh milk / fermented milk', pronunciation: 'behk / cheh-goh / moor-seek', hint: 'Highland Nilotic liquids' },
          { target: 'Asiis (Asista) / arawet', source: 'Sun / Moon', pronunciation: 'ah-sees / ah-rah-weht', hint: 'Cosmological nouns' },
          { target: 'keetit (pl. keetik) / maat', source: 'tree (pl. trees) / fire', pronunciation: 'keh-teet / maht', hint: 'Nature nouns' },
          { target: 'ngetuny / pelio / kiplengoi', source: 'lion / elephant / hares', pronunciation: 'ngeh-toony / peh-lee-oh / keep-lehn-goy', hint: 'Hollis (1909) folklore fauna' },
          { target: 'Kaap / Kapkugo', source: 'homestead of / ancestral homeland', pronunciation: 'kahp / kahp-koo-goh', hint: 'Locative prefix Kaap-' }
        ],
        sentences: [
          { target: 'Chamgei! Kongoi mising.', source: 'Greetings! Thank you very much.' },
          { target: 'I-ie tururik annan i-ie che-tililin?', source: 'Do you drink water stirred by cattle hooves or clean water? (Hollis 1909 Riddle #17)' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'What are the singular and plural definite forms for "person / people" in Kalenjin?',
            correctAnswer: 'chiito / piik',
            options: ['chiito / piik', 'teta / tuga', 'keetit / keetik', 'Chamgei / Kongoi'],
            hint: 'chii -> chiito (sg.), piich -> piik (pl.)'
          }
        ]
      },
      {
        id: 'kalenjin-numbers-proverbs',
        title: 'Numerals 1–10 & Hollis (1909) Nandi Proverbs',
        icon: 'Scroll',
        description: 'Count from 1 to 10 in Kalenjin and study classical proverbs from A. C. Hollis (1909).',
        tips: "Kalenjin numbers 1–10 are akeenge (1), aeng' (2), somok (3), ang'wan (4), muut (5), lo (6), tisap (7), sisiit (8), sokol (9), and taman (10).",
        words: [
          { target: "akeenge, aeng', somok, ang'wan, muut", source: '1, 2, 3, 4, 5', pronunciation: 'ah-kehn-geh, ah-ehng, soh-mohk, ahng-wahn, moot', hint: 'Cardinals 1–5' },
          { target: 'lo, tisap, sisiit, sokol, taman', source: '6, 7, 8, 9, 10', pronunciation: 'loh, tee-sahp, see-seet, soh-kohl, tah-mahn', hint: 'Cardinals 6–10' },
          { target: 'Ii-e ngetuny lel', source: 'The lion bears a hyena (Hollis 1909 Proverb #2)', pronunciation: 'ee-eh ngeh-toony lehl', hint: 'ngetuny = lion, lel = hyena/jackal' },
          { target: 'Inga-i ngom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909 Proverb #4)', pronunciation: 'een-gah-ee ngohm', hint: 'ngom = clever, kumut = nape of neck' },
          { target: 'Iok-toi kiplengoi pelio', source: 'Send hares to the elephant, not elephants to the hare (Hollis 1909 Proverb #7)', pronunciation: 'ee-ohk-toy keep-lehn-goy peh-lee-oh', hint: 'Youth serve elders' },
          { target: 'Iput-i tany aku pa-kelek angwan', source: 'The ox falls in spite of its four legs (Hollis 1909, p. 231)', pronunciation: 'ee-poo-tee tahny ah-koo pah-keh-lehk ahng-wahn', hint: 'Even the strong can stumble' }
        ],
        sentences: [
          { target: 'Iput-i tany aku pa-kelek angwan.', source: 'The ox falls in spite of its four legs (Hollis 1909).' },
          { target: 'Inga-i ngom, i-ker-i-ke kumut-i?', source: 'However clever you may be, can you see the back of your neck? (Hollis 1909).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In the 1909 Nandi proverb "Iput-i tany aku pa-kelek angwan" (Hollis 1909), what does "angwan" mean?',
            correctAnswer: 'Four (4)',
            options: ['Four (4)', 'One (1)', 'Ten (10)', 'Lion'],
            hint: 'pa-kelek angwan = having four legs'
          }
        ]
      }
    ]
  }
];
