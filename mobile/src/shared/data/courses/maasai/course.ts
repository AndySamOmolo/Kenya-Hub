// ============================================================
// Maasai (ɔl Maa) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 2. C. W. Hobley (1922) "Bantu Beliefs and Magic" (Glossary — Public Domain)
// 3. Wikipedia Maasai_language, Eastern_Nilotic_languages (Vossen 1982) & Nilotic_languages
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const MAASAI_CONFIG: LanguageConfig = {
  id: 'maasai',
  name: 'Maasai',
  nativeName: 'ɔl Maa',
  family: 'Nilotic',
  counties: ['Narok', 'Kajiado', 'Samburu', 'Laikipia'],
  speakers: '1.5M',
  speechLocale: 'sw-KE',
  description: 'An Eastern Nilotic language spoken by the Maasai, Samburu, and Ilchamus pastoralist communities across the Great Rift Valley. Grounded in A. C. Hollis (1905) and C. W. Hobley (1922).',
  color: '#DC2626',
  sources: ['hollis-masai-1905', 'bantu-beliefs', 'open-web-swadesh-comparative'],
};

export const MAASAI_UNITS: CourseUnit[] = [
  {
    id: 'maasai-unit-1',
    title: 'Unit 1: Gender Prefixes (Ol- / En-), People, Nature & Gendered Numerals',
    description: 'Master Masculine (ol-) and Feminine (en-) nouns, pastoral vocabulary, and gendered counting 1–10 in ɔl Maa.',
    icon: '🛡️',
    skills: [
      {
        id: 'maasai-nouns-society',
        title: 'Masculine (Ol-) & Feminine (En-) Nouns in Pastoral Life',
        icon: 'Users',
        description: 'Learn core nouns for society, wildlife, and landscape from Hollis (1905), Hobley (1922), and Vossen (1982).',
        tips: "In ɔl Maa, masculine nouns carry the prefix 'ol- / ɔl-' (plural 'il-') and feminine nouns carry 'en- / ɛn-' (plural 'in-'): ol-murani → il-muran (warrior → warriors), ol-oiboni (ritual prophet), en-kai (God/sky/rain), enkare (water/river).",
        words: [
          { target: 'ɛn-kái (Eng-ai)', source: 'God / Sky / Rain', pronunciation: 'ehn-kah-ee', hint: 'Feminine noun prefix en- (Hollis 1905 & Hobley 1922)' },
          { target: 'ol-murani (pl. il-muran)', source: 'Warrior (pl. Warriors)', pronunciation: 'ohl-moo-rah-nee / eel-moo-rahn', hint: 'Hollis (1905) & Hobley (1922) p. 307' },
          { target: 'ol-oiboni (pl. il-oibonok)', source: 'Ritual prophet / Seer', pronunciation: 'ohl-oh-ee-boh-nee', hint: 'Hobley (1922) p. 307' },
          { target: 'ɔl-aláshɛ̀', source: 'Brother', pronunciation: 'ohl-ah-lah-sheh', hint: 'Masculine noun (Wikipedia Maasai language)' },
          { target: 'enkitok', source: 'Respected woman / Lady', pronunciation: 'ehn-kee-tohk', hint: 'Feminine noun' },
          { target: 'in-gishu (inkishu)', source: 'Cattle / Cows', pronunciation: 'een-gee-shoo', hint: 'Hollis (1905) Riddle #2' },
          { target: 'ol-ŋatúny / e-ŋatúny', source: 'Male lion / Lioness', pronunciation: 'ohl-ngah-toony / eh-ngah-toony', hint: 'Masculine ol- vs. Feminine e- prefix' },
          { target: 'ɛŋ-kár-ɛ́ (enkare)', source: 'Water / River', pronunciation: 'ehn-kah-reh', hint: 'Vossen (1982) Eastern Nilotic' },
          { target: 'kule', source: 'Milk', pronunciation: 'koo-leh', hint: 'Core pastoral staple' },
          { target: 'eng-aji (enkaji)', source: 'House / Homestead hut', pronunciation: 'ehng-ah-jee', hint: 'Hollis (1905) Riddle #2' }
        ],
        sentences: [
          { target: 'Il-muran o in-gishu.', source: 'The warriors and the cattle.' },
          { target: 'Eng-ai o en-gap.', source: 'The sky and the bare ground (Hollis 1905 Riddle #5).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How does ɔl Maa distinguish "male lion" from "lioness"?',
            correctAnswer: 'ol-ŋatúny / e-ŋatúny',
            options: ['ol-ŋatúny / e-ŋatúny', 'ol-murani / il-muran', 'ɛn-kái / enkare', 'kule / eng-aji'],
            hint: 'Masculine prefix ol- vs. feminine prefix e-'
          },
          {
            type: 'match_pairs',
            prompt: 'Match the Maasai nouns from Hollis (1905) and Hobley (1922) with their meanings:',
            correctAnswer: 'ɛn-kái: God / Sky / Rain, il-muran: Warriors, in-gishu: Cattle, enkare: Water / River',
            pairs: [
              { left: 'ɛn-kái', right: 'God / Sky / Rain' },
              { left: 'il-muran', right: 'Warriors' },
              { left: 'in-gishu', right: 'Cattle' },
              { left: 'enkare', right: 'Water / River' }
            ]
          }
        ]
      },
      {
        id: 'maasai-numbers-proverbs',
        title: 'Gendered Numerals 1–10 & Hollis (1905) Oral Wisdom',
        icon: 'Scroll',
        description: 'Count from 1 to 10 across feminine and masculine genders and study classical 1905 proverbs.',
        tips: "In Maa, numbers 1–4, 7, and 9 change prefix for feminine vs. masculine nouns: nabô/obô (1), aré/aàre (2), uní/okúni (3), oŋwán/oóŋwan (4), whereas 5 (ímíêt), 6 (ílɛ̂), 8 (ísíêt), and 10 (tɔ́mɔ̂n) are invariable.",
        words: [
          { target: 'nabô (f.) / obô (m.) / nebô (place)', source: 'One (1)', pronunciation: 'nah-boh / oh-boh / neh-boh', hint: 'Three-way gender agreement' },
          { target: 'aré (f.) / aàre (m.)', source: 'Two (2)', pronunciation: 'ah-reh / ah-ah-reh', hint: 'Feminine vs. masculine 2' },
          { target: 'uní (f.) / okúni (m.)', source: 'Three (3)', pronunciation: 'oo-nee / oh-koo-nee', hint: 'Feminine vs. masculine 3' },
          { target: 'oŋwán (f.) / oóŋwan (m.)', source: 'Four (4)', pronunciation: 'oh-ngwahn', hint: 'Feminine vs. masculine 4' },
          { target: 'ímíêt / ílɛ̂', source: 'Five (5) / Six (6)', pronunciation: 'ee-mee-eht / ee-leh', hint: 'Cardinals 5 & 6' },
          { target: 'naápishana (f.) / oópishana (m.)', source: 'Seven (7)', pronunciation: 'nah-ah-pee-shah-nah', hint: 'Gendered cardinal 7' },
          { target: 'ísíêt / tɔ́mɔ̂n', source: 'Eight (8) / Ten (10)', pronunciation: 'ee-see-eht / toh-mohn', hint: 'Cardinals 8 & 10' },
          { target: "Eata en-gewarie 'n-giyaa", source: 'The night has ears (Hollis 1905 Proverb #3)', pronunciation: 'eh-ah-tah ehn-geh-wah-ree-eh n-gee-yah', hint: 'Walls have ears' },
          { target: "Ekwenikye 'n-guk in-guruon", source: 'Coals laugh at the ashes (Hollis 1905 Proverb #6)', pronunciation: 'eh-kweh-nee-kyeh n-gook een-goo-roo-ohn', hint: 'Warning against hubris' }
        ],
        sentences: [
          { target: "Eata en-gewarie 'n-giyaa.", source: 'The night has ears (Hollis 1905).' },
          { target: "Ekwenikye 'n-guk in-guruon.", source: 'Coals laugh at the ashes (Hollis 1905).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: `What does the 1905 Maasai proverb "Eata en-gewarie 'n-giyaa" (Hollis 1905) mean?`,
            correctAnswer: 'The night has ears (Hollis 1905 Proverb #3)',
            options: [
              'The night has ears (Hollis 1905 Proverb #3)',
              'Coals laugh at the ashes (Hollis 1905 Proverb #6)',
              'One (1)',
              'Eight (8) / Ten (10)'
            ],
            hint: 'en-gewarie = the night, in-giyaa = ears'
          }
        ]
      }
    ]
  }
];
