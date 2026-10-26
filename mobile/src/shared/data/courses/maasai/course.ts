// ============================================================
// Maasai (ɔl Maa) Language Course Configuration & Units
// Based on Public Domain & Open-Web Linguistic Sources:
// 1. Hildegarde Hinde (1901) "The Masai Language: Grammatical Notes Together with a Vocabulary" (Cambridge Univ. Press)
// 2. Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II"
// 3. A. C. Hollis (1905) "The Masai: Their Language and Folklore" (Clarendon Press, Oxford — Public Domain)
// 4. C. W. Hobley (1910) "Ethnology of A-Kamba and Other East African Tribes" & (1922) "Bantu Beliefs and Customary Institutions"
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
        tips: "In ɔl Maa (Hollis 1905, pp. 9–14), masculine/augmentative nouns carry the prefix 'ol- / ɔl-' (plural 'il-') and feminine/diminutive nouns carry 'en- / ɛn-' (plural 'in-'): ol-murani → il-muran (warrior → warriors), ol-oiboni → il-oibonok (medicine-man/prophet), Eng-ai (God/sky/rain), en-gare (water/river). Hinde (1901, p. 41) and Hollis (1905, pp. 101–102, 284–285) record 'Sopai! — Epa! (Hepa!)' and 'Takwenya! — Iko! (Igho!)'.",
        words: [
          { target: 'Sopai! (resp. Epa! / Hepa!) / Takwenya! (resp. Iko! / Igho!)', source: 'Greetings to warriors/men! / Greetings to women/elders!', pronunciation: 'soh-pah-ee / eh-pah / tah-kweh-nyah / ee-koh', hint: 'Hinde (1901, p. 41) & Hollis (1905, pp. 101–102, 284–285) salutations' },
          { target: 'Ashe (Ashe oleng) / Eserian (Sere!)', source: 'Thank you (very much) / Peace (Goodbye in peace!)', pronunciation: 'ah-sheh oh-lehng / eh-seh-ree-ahn / seh-reh', hint: 'Gratitude & farewell peace blessing (Hollis 1905, p. 287)' },
          { target: 'ɛn-kái (Eng-ai)', source: 'God / Sky / Rain', pronunciation: 'ehn-kah-ee', hint: 'Feminine noun prefix en- (Hollis 1905, p. 264 & Hobley 1922)' },
          { target: 'ol-murani (pl. il-muran)', source: 'Warrior (pl. Warriors)', pronunciation: 'ohl-moo-rah-nee / eel-moo-rahn', hint: 'Hollis (1905, p. 18) Class I noun & Hobley (1922, p. 307)' },
          { target: 'ol-oiboni (pl. il-oibonok)', source: 'Medicine-man / Ritual prophet / Seer', pronunciation: 'ohl-oh-ee-boh-nee / eel-oh-ee-boh-nohk', hint: 'Hollis (1905, pp. 21, 324) & Hobley (1922, p. 307)' },
          { target: 'ol-tungani (pl. il-tungana) / en-gerai (pl. in-gera)', source: 'Person, Man (pl. People) / Child (pl. Children)', pronunciation: 'ohl-toon-gah-nee / ehn-geh-rah-ee', hint: 'Hollis (1905, pp. 18, 33) nouns' },
          { target: 'en-giteng (pl. in-gishu)', source: 'Cow (pl. Cattle)', pronunciation: 'ehn-gee-tehng / een-gee-shoo', hint: 'Hinde (1901) & Hollis (1905, p. 33) Class VI suppletive plural' },
          { target: 'ol-ŋatúny / e-ŋatúny', source: 'Male lion / Lioness', pronunciation: 'ohl-ngah-toony / eh-ngah-toony', hint: 'Masculine ol- vs. Feminine e- prefix (Hollis 1905, p. 10)' },
          { target: 'ɛŋ-kár-ɛ́ (en-gare) / kulle (kule)', source: 'Water, River / Milk', pronunciation: 'ehn-gah-reh / koo-leh', hint: 'Hinde (1901) & Hollis (1905, p. 287) pastoral liquids' },
          { target: 'eng-aji (pl. ing-ajijik) / eng-ang (pl. ing-angite)', source: 'House, Hut / Homestead kraal', pronunciation: 'ehng-ah-jee / ehng-ahng', hint: 'Hollis (1905, pp. 24, 27)' }
        ],
        sentences: [
          { target: 'Sopai! Epa! Kejaa in-gishu o in-gera?', source: 'Greetings! Reply! How are the cattle and the children?' },
          { target: 'Aata \'n-dapan ainei are naarisyo. — Eng-ai o en-gop.', source: 'I have two skins of equal size. — The sky and the earth (Hollis 1905, p. 254, Riddle #5).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'How does ɔl Maa distinguish "male lion" from "lioness"?',
            correctAnswer: 'ol-ŋatúny / e-ŋatúny',
            options: ['ol-ŋatúny / e-ŋatúny', 'ol-murani / il-muran', 'ɛn-kái / enkare', 'kule / eng-aji'],
            hint: 'Masculine prefix ol- vs. feminine prefix e- (Hollis 1905, p. 10)'
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
        title: 'Gendered Numerals 1–10 & Hollis (1905) Oral Wisdom (77 Proverbs & 23 Riddles)',
        icon: 'Scroll',
        description: 'Count from 1 to 10 across feminine and masculine genders and study classical 1905 proverbs.',
        tips: "In Maa (Hollis 1905, pp. 39–41), numbers 1–4, 7, and 9 change prefix for feminine vs. masculine nouns: nabô/obô/nebô (1), aré/aàre (2), uní/okúni (3), oŋwán/oóŋwan (4), whereas 5 (ímíêt), 6 (ílɛ̂), 8 (ísíêt), and 10 (tɔ́mɔ̂n) are invariable.",
        words: [
          { target: 'nabô (f.) / obô (m.) / nebô (place)', source: 'One (1)', pronunciation: 'nah-boh / oh-boh / neh-boh', hint: 'Three-way gender agreement (Hollis 1905, p. 39)' },
          { target: 'aré (f.) / aàre (m.)', source: 'Two (2)', pronunciation: 'ah-reh / ah-ah-reh', hint: 'Feminine vs. masculine 2 (Hollis 1905, p. 39)' },
          { target: 'uní (f.) / okúni (m.)', source: 'Three (3)', pronunciation: 'oo-nee / oh-koo-nee', hint: 'Feminine vs. masculine 3 (Hollis 1905, p. 39)' },
          { target: 'oŋwán (f.) / oóŋwan (m.)', source: 'Four (4)', pronunciation: 'oh-ngwahn', hint: 'Feminine vs. masculine 4 (Hollis 1905, p. 39)' },
          { target: 'ímíêt / ílɛ̂', source: 'Five (5) / Six (6)', pronunciation: 'ee-mee-eht / ee-leh', hint: 'Cardinals 5 & 6 (Hollis 1905, p. 39)' },
          { target: 'naápishana (f.) / oópishana (m.)', source: 'Seven (7)', pronunciation: 'nah-ah-pee-shah-nah', hint: 'Gendered cardinal 7 (Hollis 1905, p. 39)' },
          { target: 'ísíêt / naáudo (oódó) / tɔ́mɔ̂n', source: 'Eight (8) / Nine (9) / Ten (10)', pronunciation: 'ee-see-eht / nah-oo-doh / toh-mohn', hint: 'Cardinals 8, 9, & 10 (Hollis 1905, p. 39)' },
          { target: "Eata en-gewarie 'n-giyaa", source: 'The night has ears (Hollis 1905, p. 238, Proverb #3)', pronunciation: 'eh-ah-tah ehn-geh-wah-ree-eh n-gee-yah', hint: 'Walls have ears' },
          { target: "Ekwenikye 'n-guk in-guruon", source: 'Coals laugh at the ashes (Hollis 1905, p. 239, Proverb #6)', pronunciation: 'eh-kweh-nee-kyeh n-gook een-goo-roo-ohn', hint: 'Warning against hubris' },
          { target: 'Medany ol-kimojino obo el-lashei', source: 'One finger will not kill a louse (Hollis 1905, p. 244, Proverb #32)', pronunciation: 'meh-dahny ohl-kee-moh-jee-noh oh-boh ehl-lah-shey', hint: 'Unity is strength (el-lashei = the louse)' }
        ],
        sentences: [
          { target: "Eata en-gewarie 'n-giyaa.", source: 'The night has ears (Hollis 1905, p. 238, Proverb #3).' },
          { target: "Ekwenikye 'n-guk in-guruon.", source: 'Coals laugh at the ashes (Hollis 1905, p. 239, Proverb #6).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: `What does the 1905 Maasai proverb "Eata en-gewarie 'n-giyaa" (Hollis 1905, p. 238, Proverb #3) mean?`,
            correctAnswer: 'The night has ears (Hollis 1905, p. 238, Proverb #3)',
            options: [
              'The night has ears (Hollis 1905, p. 238, Proverb #3)',
              'Coals laugh at the ashes (Hollis 1905, p. 239, Proverb #6)',
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
    title: 'Unit 2: Maa Place-Names (Hinde 1901), 4 Clans & 2 Moieties, Age-Sets & Folktales (Hollis 1905)',
    description: 'Explore historical Maa toponyms (Nairobi, Kilimanjaro, Naivasha), the 2 moieties and 4 principal clans, warrior ceremonies, and Hollis (1905) folktales and proverbs.',
    icon: '🦁',
    skills: [
      {
        id: 'maasai-toponyms-clans-folklore',
        title: 'Maa Place-Names, 4 Clans, 5 Districts & Ceremonies (Hinde 1901 & Hollis 1905)',
        icon: 'Compass',
        description: 'Learn the Maa meanings of iconic East African landmarks, clan names, and ceremonies.',
        tips: "Hildegarde Hinde (1901, p. 42) and A. C. Hollis (1905, pp. 260–356) document the Maa origins of East African place-names: En-gare Nyrobi ('Cold Water' = Nairobi), Ol-doinyo Oibor ('White Mountain' = Kilimanjaro), and Ol-doinyo Oger ('Striped Mountain' = Mount Kenya), along with the 2 Moieties ('L-oodo-kishu & 'L-oorook-kishu) and 4 Principal Clans ('L-Aiser, Il-Mengana, Il-Mokesen, Il-Molelyan).",
        culturalNote: "In A. C. Hollis's 'The Masai: Their Language and Folklore' (1905, p. 264), the Maasai distinguish two sky powers: Eng-ai Narok (the Benevolent Black God close to earth whose distant thunder says 'Tapala, miar!' — 'Leave off, do not kill!') and Eng-ai Nanyokye (the Red God above), while holding sacred pasture grass (en-gujit) as a sign of peace (o-sotwa).",
        words: [
          { target: 'En-gare Nyrobi / Ngongo Bagas', source: 'Nairobi (lit. Cold Water / Stream) / Ngong Springs (lit. The Eye of the Spring)', pronunciation: 'ehn-gah-reh ny-roh-bee / ngohn-goh bah-gahs', hint: 'Hinde (1901, p. 42) & Hollis (1905)' },
          { target: 'Ol-doinyo Oibor / Ol-doinyo Oger (Oldonyo gēri)', source: 'White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)', pronunciation: 'ohl-doy-nyoh oy-bohr / ohl-doy-nyoh oh-gehr', hint: 'Hinde (1901, p. 42) & Hollis (1905)' },
          { target: 'E-waso Ngiro / En-aiposha (Enaibasha)', source: 'Ewaso Ng\'iro (Brown/Muddy River) / Lake Naivasha (The Heaving Water)', pronunciation: 'eh-wah-soh n-gee-roh / eh-nah-ee-poh-shah', hint: 'Hinde (1901, p. 42) & Hollis (1905, p. 260)' },
          { target: "'L-oodo-kishu ('L-Aiser & Il-Mengana) / 'L-oorook-kishu (Il-Mokesen & Il-Molelyan)", source: 'The 2 Moieties (Blood-Red Cattle & Black Cattle) & 4 Principal Clans (Hollis 1905, p. 260)', pronunciation: 'l-oo-doh-kee-shoo / l-oo-rook-kee-shoo', hint: "'N-Gidongi (Oloiboni's family) belongs to 'L-Aiser; Il-Kipuyoni (smiths) to Il-Molelyan" },
          { target: 'E-murata / E-unoto (Ol-aunoni) / Ol-ngesher', source: 'Circumcision Initiation / Warrior Graduation (Selection of Chief) / Elderhood Ceremony', pronunciation: 'eh-moo-rah-tah / eh-oo-noh-toh / ohl-ngeh-shehr', hint: 'Hollis (1905, pp. 294–302) age-grade ceremonies' },
          { target: 'en-gujit / o-sotwa', source: 'Sacred pasture grass held in peace and prayer / Peace covenant', pronunciation: 'ehn-goo-jeet / oh-soh-twah', hint: 'Hollis (1905, pp. 289, 321–322)' },
          { target: 'Eng-ai Narok / Eng-ai Nanyokye', source: 'The Benevolent Black Rain-giving God / The Fierce Red Sky God', pronunciation: 'ehng-ah-ee nah-rohk / ehng-ah-ee nah-nyoh-kyeh', hint: 'Hollis (1905, p. 264)' },
          { target: 'em-bere (pl. im-beria) / el-longo (pl. il-longoi)', source: 'Spear / Shield', pronunciation: 'ehm-beh-reh / ehl-lohn-goh', hint: 'Hollis (1905) & Hinde (1901)' },
          { target: 'ol-alem (pl. il-alema) / o-rinka (pl. i-rinkan)', source: 'Sword (simi) / Club (rungu)', pronunciation: 'ohl-ah-lehm / oh-reen-kah', hint: 'Hollis (1905) & Hinde (1901)' },
          { target: 'Tigha eng-auo, miigh eng-ongu', source: 'Hang up the bow, do not hang up the eye (Hollis 1905, p. 251, Proverb #75)', pronunciation: 'tee-ghah ehng-ah-oo-oh mee-eegh ehng-ohn-goo', hint: 'Remember that a guest is hungry when you lay aside his weapons' }
        ],
        sentences: [
          { target: 'Tigha eng-auo, miigh eng-ongu.', source: 'Hang up the bow, do not hang up the eye — remember your guest is hungry (Hollis 1905, p. 251, Proverb #75).' },
          { target: 'Medany ol-kimojino obo el-lashei.', source: 'One finger will not kill a louse (Hollis 1905, p. 244, Proverb #32).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'According to Hildegarde Hinde (1901, p. 42) and A. C. Hollis (1905), what is the literal meaning of "En-gare Nyrobi" (Nairobi)?',
            correctAnswer: 'Nairobi (lit. Cold Water / Stream) / Ngongo Bagas',
            options: [
              'Nairobi (lit. Cold Water / Stream) / Ngongo Bagas',
              'White Mountain (Kilimanjaro) / Striped Mountain (Mount Kenya)',
              'Spear / Shield',
              'Sacred pasture grass held in peace and prayer / Peace covenant'
            ],
            hint: 'en-gare = water/river, nyrobi = cold'
          }
        ]
      }
    ]
  }
];
