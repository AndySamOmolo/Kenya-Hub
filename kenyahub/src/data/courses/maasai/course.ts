// ============================================================
// Maasai (ɔl Maa) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. Hildegarde Hinde (1901) "The Masai Language: Grammatical Notes Together with a Vocabulary" (Cambridge Univ. Press)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II"
// 3. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Magic"
// 5. Wikipedia Maasai_language, Eastern_Nilotic_languages (Vossen 1982) & Nilotic_languages
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
  description: 'An Eastern Nilotic language spoken by the Maasai, Samburu, and Ilchamus pastoralist communities across the Great Rift Valley. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905), and C. W. Hobley (1910, 1922).',
  color: '#DC2626',
  sources: [
    'hinde-masai-1901',
    'johnston-uganda-protectorate-1902',
    'hollis-masai-1905',
    'hobley-akamba-ethnology-1910',
    'bantu-beliefs',
    'open-web-swadesh-comparative',
  ],
};

export const MAASAI_UNITS: CourseUnit[] = [
  {
    id: 'maasai-unit-1',
    title: 'Unit 1: Salutations (Sopai! / Takwenya!), Gender Prefixes (Ol- / En-), People & Gendered Numerals (Hinde 1901 & Hollis 1905)',
    description: 'Master traditional Maa salutations, Masculine (ol-) and Feminine (en-) nouns, pastoral vocabulary, and gendered counting 1–10 in ɔl Maa.',
    icon: '🛡️',
    skills: [
      {
        id: 'maasai-nouns-society',
        title: 'Salutations & Masculine (Ol-) / Feminine (En-) Nouns in Pastoral Life',
        icon: 'Users',
        description: 'Learn greetings and core nouns for society, wildlife, and landscape from Hinde (1901), Hollis (1905), and Hobley (1922).',
        tips: "In ɔl Maa, masculine nouns carry the prefix 'ol- / ɔl-' (plural 'il-') and feminine nouns carry 'en- / ɛn-' (plural 'in-'): ol-murani → il-muran (warrior → warriors), ol-oiboni (ritual prophet), en-kai (God/sky/rain), enkare (water/river). Hinde (1901, p. 29) and Hollis (1905, p. 99) record 'Sopai! — Epa!' and 'Takwenya! — Iko!'.",
        words: [
          { target: 'Sopai! (resp. Epa!) / Takwenya! (resp. Iko!)', source: 'Greetings to warriors/men! / Greetings to women/elders!', pronunciation: 'soh-pah-ee / eh-pah / tah-kweh-nyah / ee-koh', hint: 'Hinde (1901, p. 29) & Hollis (1905, p. 99) salutations' },
          { target: 'Ashe (Ashe oleng) / Eserian', source: 'Thank you (very much) / Peace', pronunciation: 'ah-sheh oh-lehng / eh-seh-ree-ahn', hint: 'Gratitude & peace blessing' },
          { target: 'ɛn-kái (Eng-ai)', source: 'God / Sky / Rain', pronunciation: 'ehn-kah-ee', hint: 'Feminine noun prefix en- (Hollis 1905 & Hobley 1922)' },
          { target: 'ol-murani (pl. il-muran)', source: 'Warrior (pl. Warriors)', pronunciation: 'ohl-moo-rah-nee / eel-moo-rahn', hint: 'Hollis (1905) & Hobley (1922) p. 307' },
          { target: 'ol-oiboni (pl. il-oibonok)', source: 'Ritual prophet / Seer', pronunciation: 'ohl-oh-ee-boh-nee', hint: 'Hollis (1905) & Hobley (1922) p. 307' },
          { target: 'ol-tungani (pl. il-tungana) / en-gerai (pl. in-gera)', source: 'Person (pl. People) / Child (pl. Children)', pronunciation: 'ohl-toon-gah-nee / ehn-geh-rah-ee', hint: 'Hollis (1905, pp. 11–13) Class I nouns' },
          { target: 'en-giteng (pl. in-gishu)', source: 'Cow (pl. Cattle)', pronunciation: 'ehn-gee-tehng / een-gee-shoo', hint: 'Hinde (1901) & Hollis (1905)' },
          { target: 'ol-ŋatúny / e-ŋatúny', source: 'Male lion / Lioness', pronunciation: 'ohl-ngah-toony / eh-ngah-toony', hint: 'Masculine ol- vs. Feminine e- prefix' },
          { target: 'ɛŋ-kár-ɛ́ (en-gare) / kule', source: 'Water, River / Milk', pronunciation: 'ehn-gah-reh / koo-leh', hint: 'Hinde (1901) & Hollis (1905) pastoral liquids' },
          { target: 'eng-aji (pl. ing-ajijik) / eng-ang', source: 'House, Hut / Homestead kraal', pronunciation: 'ehng-ah-jee / ehng-ahng', hint: 'Hollis (1905, p. 15)' }
        ],
        sentences: [
          { target: 'Sopai! Epa! Kejaa in-gishu o in-gera?', source: 'Greetings! Reply! How are the cattle and the children?' },
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
        title: 'Gendered Numerals 1–10 & Hollis (1905) Oral Wisdom (75 Proverbs & 24 Riddles)',
        icon: 'Scroll',
        description: 'Count from 1 to 10 across feminine and masculine genders and study classical 1905 proverbs.',
        tips: "In Maa (Hollis 1905, pp. 32–36), numbers 1–4, 7, and 9 change prefix for feminine vs. masculine nouns: nabô/obô (1), aré/aàre (2), uní/okúni (3), oŋwán/oóŋwan (4), whereas 5 (ímíêt), 6 (ílɛ̂), 8 (ísíêt), and 10 (tɔ́mɔ̂n) are invariable.",
        words: [
          { target: 'nabô (f.) / obô (m.) / nebô (place)', source: 'One (1)', pronunciation: 'nah-boh / oh-boh / neh-boh', hint: 'Three-way gender agreement (Hollis 1905, p. 32)' },
          { target: 'aré (f.) / aàre (m.)', source: 'Two (2)', pronunciation: 'ah-reh / ah-ah-reh', hint: 'Feminine vs. masculine 2' },
          { target: 'uní (f.) / okúni (m.)', source: 'Three (3)', pronunciation: 'oo-nee / oh-koo-nee', hint: 'Feminine vs. masculine 3' },
          { target: 'oŋwán (f.) / oóŋwan (m.)', source: 'Four (4)', pronunciation: 'oh-ngwahn', hint: 'Feminine vs. masculine 4' },
          { target: 'ímíêt / ílɛ̂', source: 'Five (5) / Six (6)', pronunciation: 'ee-mee-eht / ee-leh', hint: 'Cardinals 5 & 6' },
          { target: 'naápishana (f.) / oópishana (m.)', source: 'Seven (7)', pronunciation: 'nah-ah-pee-shah-nah', hint: 'Gendered cardinal 7' },
          { target: 'ísíêt / naáudo (oódó) / tɔ́mɔ̂n', source: 'Eight (8) / Nine (9) / Ten (10)', pronunciation: 'ee-see-eht / nah-oo-doh / toh-mohn', hint: 'Cardinals 8, 9, & 10' },
          { target: "Eata en-gewarie 'n-giyaa", source: 'The night has ears (Hollis 1905 Proverb #3)', pronunciation: 'eh-ah-tah ehn-geh-wah-ree-eh n-gee-yah', hint: 'Walls have ears' },
          { target: "Ekwenikye 'n-guk in-guruon", source: 'Coals laugh at the ashes (Hollis 1905 Proverb #6)', pronunciation: 'eh-kweh-nee-kyeh n-gook een-goo-roo-ohn', hint: 'Warning against hubris' },
          { target: 'Medany ol-kimojino obo el-lughunya', source: 'One finger does not kill a louse (Hollis 1905 Proverb #52)', pronunciation: 'meh-dahny ohl-kee-moh-jee-noh', hint: 'Unity is strength' }
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
              'Eight (8) / Nine (9) / Ten (10)'
            ],
            hint: 'en-gewarie = the night, in-giyaa = ears'
          }
        ]
      }
    ]
  },
  {
    id: 'maasai-unit-2',
    title: 'Unit 2: Maa Place-Names (Hinde 1901), Clans, Age-Sets & Folktales (Hollis 1905)',
    description: 'Explore historical Maa toponyms (Nairobi, Kilimanjaro, Naivasha), the 5 major clans, warrior ceremonies, and Hollis (1905) folktales and riddles.',
    icon: '🦁',
    skills: [
      {
        id: 'maasai-toponyms-clans-folklore',
        title: 'Maa Place-Names, Clans & Ceremonies (Hinde 1901 & Hollis 1905)',
        icon: 'Compass',
        description: 'Learn the Maa meanings of iconic East African landmarks, clan names, and ceremonies.',
        tips: "Hildegarde Hinde (1901, p. 36) and A. C. Hollis (1905, pp. 260–302) document the Maa origins of East African place-names: En-gare Nyrobi ('Cold Water' = Nairobi), Ol-doinyo Oibor ('White Mountain' = Kilimanjaro/Kenya), and E-waso Ngiro ('Brown/Muddy River').",
        culturalNote: "In A. C. Hollis's 'The Masai: Their Language and Folklore' (1905, p. 264), the Maasai invoke both Eng-ai Narok (the Benevolent Black Rain-Cloud God) and Eng-ai Nanyokie (the Red Sky) while holding sacred pasture grass (en-gujit) as a sign of peace.",
        words: [
          { target: 'En-gare Nyrobi', source: 'Nairobi (lit. Cold Water / Cold Stream)', pronunciation: 'ehn-gah-reh ny-roh-bee', hint: 'Hinde (1901, p. 36) & Hollis (1905)' },
          { target: 'Ol-doinyo Oibor', source: 'White Mountain (Mount Kilimanjaro / Mount Kenya)', pronunciation: 'ohl-doy-nyoh oy-bohr', hint: 'Hinde (1901, p. 36) & Hollis (1905)' },
          { target: 'E-waso Ngiro / En-gare Na-okwa', source: 'Ewaso Ng\'iro (Brown River) / Lake Naivasha', pronunciation: 'eh-wah-soh n-gee-roh', hint: 'Hinde (1901, p. 36) & Hollis (1905)' },
          { target: 'Il-Aiser, Il-Mokesen, Il-Molelian, Il-Tarosero, Il-ukumai', source: 'The 5 Major Maasai Clans (Hollis 1905, p. 260)', pronunciation: 'eel-ah-ee-sehr / eel-moh-leh-lyahn', hint: 'Il-Aiser is the clan of the Oloiboni' },
          { target: 'Emorata / E-unoto / Ol-ngesher', source: 'Initiation / Warrior Graduation / Elderhood Ceremony', pronunciation: 'eh-moh-rah-tah / eh-oo-noh-toh / ohl-ngeh-shehr', hint: 'Hollis (1905, pp. 294–302) age-grade ceremonies' },
          { target: 'en-gujit', source: 'Sacred pasture grass held in peace and prayer', pronunciation: 'ehn-goo-jeet', hint: 'Hollis (1905) peace emblem' },
          { target: 'Eng-ai Narok / Eng-ai Nanyokie', source: 'The Black (Rain-giving) God / The Red Sky', pronunciation: 'ehng-ah-ee nah-rohk', hint: 'Hollis (1905, p. 264)' },
          { target: 'em-bere (pl. im-beria) / el-longo (pl. il-longoi)', source: 'Spear / Shield', pronunciation: 'ehm-beh-reh / ehl-lohn-goh', hint: 'Hollis (1905) & Hinde (1901)' },
          { target: 'ol-alem (pl. il-alema) / o-rinka', source: 'Sword (simi) / Club (rungu)', pronunciation: 'ohl-ah-lehm / oh-reen-kah', hint: 'Hollis (1905) & Hinde (1901)' },
          { target: 'Menya ol-ngatuny ol-chore', source: 'The lion does not eat his friend (Hollis 1905 Proverb #60)', pronunciation: 'meh-nyah ohl-ngah-toony ohl-choh-reh', hint: 'Sacredness of covenant friendship' }
        ],
        sentences: [
          { target: 'Menya ol-ngatuny ol-chore.', source: 'The lion does not eat his friend (Hollis 1905 Proverb #60).' },
          { target: 'Medany ol-kimojino obo el-lughunya.', source: 'One finger does not split a louse (Hollis 1905 Proverb #52).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'According to Hildegarde Hinde (1901, p. 36) and A. C. Hollis (1905), what is the literal meaning of "En-gare Nyrobi" (Nairobi)?',
            correctAnswer: 'Nairobi (lit. Cold Water / Cold Stream)',
            options: [
              'Nairobi (lit. Cold Water / Cold Stream)',
              'White Mountain (Mount Kilimanjaro / Mount Kenya)',
              'Spear / Shield',
              'Sacred pasture grass held in peace and prayer'
            ],
            hint: 'en-gare = water/river, nyrobi = cold'
          }
        ]
      }
    ]
  }
];
