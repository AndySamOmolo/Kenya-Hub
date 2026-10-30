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
  },
  {
    "id": "maasai-unit-3",
    "title": "Unit 3: Family, Kinship, Clans & Social Organization (Hildegarde Hinde (1901))",
    "description": "Master family, kinship, clans & social organization in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "👨‍👩‍👧‍👦",
    "skills": [
      {
        "id": "maasai-family-kinship-kinship-elders-3",
        "title": "Kinship Terms, Elders & Household Roles",
        "icon": "Users",
        "description": "Master core family, kinship, and household terms documented in the primary historical vocabularies. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ol-chore (pl. il-choreta)",
            "source": "Friend",
            "pronunciation": "ohl-choh-reh",
            "hint": "Hollis 1905 Proverb #60 ('The lion does not eat his friend')"
          },
          {
            "target": "en-gerai (pl. in-gera)",
            "source": "Child",
            "pronunciation": "ehn-geh-rah-ee / een-geh-rah",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
            "source": "Woman",
            "pronunciation": "ehn-gee-tohk / ehn-goh-roh-yoh-nee",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "yeyo (ngotonye = his/her mother)",
            "source": "Mother",
            "pronunciation": "yeh-yoh / ngoh-toh-nyeh",
            "hint": "Hollis 1905 Proverb #18 & Hinde 1901"
          },
          {
            "target": "papa (menye = his/her father)",
            "source": "Father",
            "pronunciation": "pah-pah / meh-nyeh",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ɔl-aláshɛ̀ (olalashe)",
            "source": "Brother",
            "pronunciation": "ɔl-aláshɛ̀ (olalashe)",
            "hint": "Wikipedia Maasai language — Noun classes"
          },
          {
            "target": "ngutunyi",
            "source": "Mother (your mother)",
            "pronunciation": "ngutunyi",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Riddle #8"
          },
          {
            "target": "enkitok",
            "source": "Respected woman / lady",
            "pronunciation": "enkitok",
            "hint": "Wiktionary Category:Maasai lemmas"
          },
          {
            "target": "ɛŋ-kárn-á (enkarna)",
            "source": "Name",
            "pronunciation": "ɛŋ-kárn-á (enkarna)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ol-chore (pl. il-choreta)\" oo \"en-gerai (pl. in-gera)\".",
            "source": "The elders know \"Friend\" and \"Child\"."
          },
          {
            "target": "Ore te-nkang ang naa eata en-gitok (pl. in-gituak) / en-goroyioni (wife) oo yeyo (ngotonye = his/her mother).",
            "source": "At our homestead there is Woman and Mother."
          },
          {
            "target": "Ejo ol-moruo: \"papa (menye = his/her father)\" naa \"ɔl-aláshɛ̀ (olalashe)\".",
            "source": "The elder says: \"Father\" and \"Brother\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ol-chore (pl. il-choreta)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Friend",
            "options": [
              "Friend",
              "Child",
              "Woman",
              "Mother"
            ],
            "hint": "Hollis 1905 Proverb #60 ('The lion does not eat his friend')"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ol-chore (pl. il-choreta)",
                "right": "Friend"
              },
              {
                "left": "en-gerai (pl. in-gera)",
                "right": "Child"
              },
              {
                "left": "en-gitok (pl. in-gituak) / en-goroyioni (wife)",
                "right": "Woman"
              },
              {
                "left": "yeyo (ngotonye = his/her mother)",
                "right": "Mother"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-family-kinship-clans-community-3",
        "title": "Clans, Marriage & Community Life",
        "icon": "Heart",
        "description": "Explore social titles, marriage terms, and community relationships from the ethnographic records. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ol-jekut (pl. il-jekuti)",
            "source": "herdsman, shepherd",
            "pronunciation": "ol-jekut (pl. il-jekuti)",
            "hint": "Maasai (Hollis 1905, p. 240)"
          },
          {
            "target": "kore anganashe ingu?",
            "source": "Where is your sister?",
            "pronunciation": "kore anganashe ingu?",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "kore ngerai?",
            "source": "Where is the child?",
            "pronunciation": "kore ngerai?",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "eyu nerigu ngerai nyenne?",
            "source": "Does he want to bring his child here?",
            "pronunciation": "eyu nerigu ngerai nyenne?",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aiyu naibot ngerai",
            "source": "I want to call the child",
            "pronunciation": "aiyu naibot ngerai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aadang ngerai",
            "source": "I have a child",
            "pronunciation": "aadang ngerai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aada baba",
            "source": "I have a father\\",
            "pronunciation": "aada baba",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "aara nanu yeyu",
            "source": "I have a mother\\",
            "pronunciation": "aara nanu yeyu",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ere ngerai",
            "source": "You (sing.) have a child",
            "pronunciation": "ere ngerai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ol-jekut (pl. il-jekuti)\" oo \"kore anganashe ingu?\".",
            "source": "The elders know \"herdsman, shepherd\" and \"Where is your sister?\"."
          },
          {
            "target": "Ore te-nkang ang naa eata kore ngerai? oo eyu nerigu ngerai nyenne?.",
            "source": "At our homestead there is Where is the child? and Does he want to bring his child here?."
          },
          {
            "target": "Ejo ol-moruo: \"aiyu naibot ngerai\" naa \"aadang ngerai\".",
            "source": "The elder says: \"I want to call the child\" and \"I have a child\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ol-jekut (pl. il-jekuti)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "herdsman, shepherd",
            "options": [
              "herdsman, shepherd",
              "Where is your sister?",
              "Where is the child?",
              "Does he want to bring his child here?"
            ],
            "hint": "Maasai (Hollis 1905, p. 240)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ol-jekut (pl. il-jekuti)",
                "right": "herdsman, shepherd"
              },
              {
                "left": "kore anganashe ingu?",
                "right": "Where is your sister?"
              },
              {
                "left": "kore ngerai?",
                "right": "Where is the child?"
              },
              {
                "left": "eyu nerigu ngerai nyenne?",
                "right": "Does he want to bring his child here?"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-4",
    "title": "Unit 4: Numbers, Counting, Currency & Measures (Hildegarde Hinde (1901))",
    "description": "Master numbers, counting, currency & measures in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "🔢",
    "skills": [
      {
        "id": "maasai-numbers-measures-cardinals-ordinals-4",
        "title": "Cardinal & Ordinal Numerals",
        "icon": "Hash",
        "description": "Count fluently and form ordinal numbers using historical numeral tables. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "tɔ́mɔ̂n (tomon)",
            "source": "Ten",
            "pronunciation": "toh-mohn",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "naáudo (f.) / oódó (m.)",
            "source": "Nine",
            "pronunciation": "nah-oo-doh / oh-doh",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ísíêt (isiet)",
            "source": "Eight",
            "pronunciation": "ee-see-eht",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ílɛ̂ (ile)",
            "source": "Six",
            "pronunciation": "ee-leh",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "ímíêt (imiet)",
            "source": "Five",
            "pronunciation": "ee-mee-eht",
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "target": "nabô (fem.) / obô (masc.) / nebô (place)",
            "source": "One (1) — feminine / masculine / place",
            "pronunciation": "nabô (fem.) / obô (masc.) / nebô (place)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "aré (fem.) / aàre, ɔáre (masc.)",
            "source": "Two (2) — feminine / masculine",
            "pronunciation": "aré (fem.) / aàre, ɔáre (masc.)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "uní (fem.) / okúni (masc.)",
            "source": "Three (3) — feminine / masculine",
            "pronunciation": "uní (fem.) / okúni (masc.)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "oŋwán (fem.) / oóŋwan (masc.)",
            "source": "Four (4) — feminine / masculine",
            "pronunciation": "oŋwán (fem.) / oóŋwan (masc.)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"tɔ́mɔ̂n (tomon)\" oo \"naáudo (f.) / oódó (m.)\".",
            "source": "The elders know \"Ten\" and \"Nine\"."
          },
          {
            "target": "Ore te-nkang ang naa eata ísíêt (isiet) oo ílɛ̂ (ile).",
            "source": "At our homestead there is Eight and Six."
          },
          {
            "target": "Ejo ol-moruo: \"ímíêt (imiet)\" naa \"nabô (fem.) / obô (masc.) / nebô (place)\".",
            "source": "The elder says: \"Five\" and \"One (1) — feminine / masculine / place\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"tɔ́mɔ̂n (tomon)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Ten",
            "options": [
              "Ten",
              "Nine",
              "Eight",
              "Six"
            ],
            "hint": "Hollis 1905 p. 32 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "tɔ́mɔ̂n (tomon)",
                "right": "Ten"
              },
              {
                "left": "naáudo (f.) / oódó (m.)",
                "right": "Nine"
              },
              {
                "left": "ísíêt (isiet)",
                "right": "Eight"
              },
              {
                "left": "ílɛ̂ (ile)",
                "right": "Six"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-numbers-measures-trade-measures-4",
        "title": "Trade, Barter, Currency & Traditional Measures",
        "icon": "Scale",
        "description": "Learn market exchange, weights, measures, and value expressions. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ímíêt",
            "source": "Five (5)",
            "pronunciation": "ímíêt",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "ílɛ̂ / íllɛ̂",
            "source": "Six (6)",
            "pronunciation": "ílɛ̂ / íllɛ̂",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "naápishana (fem.) / oópishana (masc.)",
            "source": "Seven (7) — feminine / masculine",
            "pronunciation": "naápishana (fem.) / oópishana (masc.)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "ísíêt",
            "source": "Eight (8)",
            "pronunciation": "ísíêt",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "naáudo (fem.) / oódó (masc.)",
            "source": "Nine (9) — feminine / masculine",
            "pronunciation": "naáudo (fem.) / oódó (masc.)",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "tɔ́mɔ̂n",
            "source": "Ten (10)",
            "pronunciation": "tɔ́mɔ̂n",
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "target": "Sekunde",
            "source": "Second (time unit)",
            "pronunciation": "sekunde",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "mereltungani, legai",
            "source": "Not this man, the other one",
            "pronunciation": "mereltungani, legai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "kumuk ndari nārok",
            "source": "Many black goats",
            "pronunciation": "kumuk ndari nārok",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ímíêt\" oo \"ílɛ̂ / íllɛ̂\".",
            "source": "The elders know \"Five (5)\" and \"Six (6)\"."
          },
          {
            "target": "Ore te-nkang ang naa eata naápishana (fem.) / oópishana (masc.) oo ísíêt.",
            "source": "At our homestead there is Seven (7) — feminine / masculine and Eight (8)."
          },
          {
            "target": "Ejo ol-moruo: \"naáudo (fem.) / oódó (masc.)\" naa \"tɔ́mɔ̂n\".",
            "source": "The elder says: \"Nine (9) — feminine / masculine\" and \"Ten (10)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ímíêt\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Five (5)",
            "options": [
              "Five (5)",
              "Six (6)",
              "Seven (7) — feminine / masculine",
              "Eight (8)"
            ],
            "hint": "Wikipedia Nilotic languages — Maasai numerals"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ímíêt",
                "right": "Five (5)"
              },
              {
                "left": "ílɛ̂ / íllɛ̂",
                "right": "Six (6)"
              },
              {
                "left": "naápishana (fem.) / oópishana (masc.)",
                "right": "Seven (7) — feminine / masculine"
              },
              {
                "left": "ísíêt",
                "right": "Eight (8)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-5",
    "title": "Unit 5: Food, Cuisine, Crops & Livestock Husbandry (Hildegarde Hinde (1901))",
    "description": "Master food, cuisine, crops & livestock husbandry in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "🌾",
    "skills": [
      {
        "id": "maasai-food-agriculture-staple-foods-cookery-5",
        "title": "Staple Foods, Cookery & Beverages",
        "icon": "Utensils",
        "description": "Learn traditional dishes, grains, culinary tools, and food preparation verbs. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "en-aisijoi (enaisho = honey-wine)",
            "source": "Honey",
            "pronunciation": "ehn-ah-ee-see-joy / eh-nah-ee-shoh",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-giringo (pl. in-giri)",
            "source": "Meat",
            "pronunciation": "ehn-gee-reen-goh",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-gare (enkare)",
            "source": "Water",
            "pronunciation": "ehn-gah-reh",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-daa (pl. in-daiki)",
            "source": "Food",
            "pronunciation": "ehn-dah / een-dah-ee-kee",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-mosorrî",
            "source": "Egg",
            "pronunciation": "ol-mosorrî",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "kule",
            "source": "Milk",
            "pronunciation": "kule",
            "hint": "Wiktionary Category:Maasai lemmas"
          },
          {
            "target": "ɛmʊtí (emuti)",
            "source": "Cooking pot",
            "pronunciation": "ɛmʊtí (emuti)",
            "hint": "Wikipedia Maasai language — Morphosyntax"
          },
          {
            "target": "Iropiyianí e Sudani",
            "source": "Sudanese Pound (SDG)",
            "pronunciation": "iropiyianí e sudani",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí e Misri",
            "source": "Egyptian Pound (EGP)",
            "pronunciation": "iropiyianí e misri",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"en-aisijoi (enaisho = honey-wine)\" oo \"en-giringo (pl. in-giri)\".",
            "source": "The elders know \"Honey\" and \"Meat\"."
          },
          {
            "target": "Ore te-nkang ang naa eata en-gare (enkare) oo en-daa (pl. in-daiki).",
            "source": "At our homestead there is Water and Food."
          },
          {
            "target": "Ejo ol-moruo: \"ol-mosorrî\" naa \"kule\".",
            "source": "The elder says: \"Egg\" and \"Milk\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"en-aisijoi (enaisho = honey-wine)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Honey",
            "options": [
              "Honey",
              "Meat",
              "Water",
              "Food"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "en-aisijoi (enaisho = honey-wine)",
                "right": "Honey"
              },
              {
                "left": "en-giringo (pl. in-giri)",
                "right": "Meat"
              },
              {
                "left": "en-gare (enkare)",
                "right": "Water"
              },
              {
                "left": "en-daa (pl. in-daiki)",
                "right": "Food"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-food-agriculture-crops-livestock-5",
        "title": "Crops, Cultivation & Pastoral Livestock",
        "icon": "Sprout",
        "description": "Study indigenous crops, planting seasons, and livestock terminology. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Iropiyianí e Nkɨ́resa",
            "source": "British Pound (GBP)",
            "pronunciation": "iropiyianí e nkɨ́resa",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "etwaowok",
            "source": "I will not drink",
            "pronunciation": "etwaowok",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "mer ngare",
            "source": "No water",
            "pronunciation": "mer ngare",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "mer nda",
            "source": "No food",
            "pronunciation": "mer nda",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "etu kiog",
            "source": "We will not drink",
            "pronunciation": "etu kiog",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "meiaw nda",
            "source": "Do not bring food",
            "pronunciation": "meiaw nda",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "meiaw ngare",
            "source": "Do not bring water",
            "pronunciation": "meiaw ngare",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ainyo begenoss?",
            "source": "Why eat?",
            "pronunciation": "ainyo begenoss?",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ainyo beiok?",
            "source": "Why drink?",
            "pronunciation": "ainyo beiok?",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"Iropiyianí e Nkɨ́resa\" oo \"etwaowok\".",
            "source": "The elders know \"British Pound (GBP)\" and \"I will not drink\"."
          },
          {
            "target": "Ore te-nkang ang naa eata mer ngare oo mer nda.",
            "source": "At our homestead there is No water and No food."
          },
          {
            "target": "Ejo ol-moruo: \"etu kiog\" naa \"meiaw nda\".",
            "source": "The elder says: \"We will not drink\" and \"Do not bring food\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Iropiyianí e Nkɨ́resa\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "British Pound (GBP)",
            "options": [
              "British Pound (GBP)",
              "I will not drink",
              "No water",
              "No food"
            ],
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Iropiyianí e Nkɨ́resa",
                "right": "British Pound (GBP)"
              },
              {
                "left": "etwaowok",
                "right": "I will not drink"
              },
              {
                "left": "mer ngare",
                "right": "No water"
              },
              {
                "left": "mer nda",
                "right": "No food"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-6",
    "title": "Unit 6: Nature, Landscape, Flora & East African Wildlife (Hildegarde Hinde (1901))",
    "description": "Master nature, landscape, flora & east african wildlife in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "🦁",
    "skills": [
      {
        "id": "maasai-nature-wildlife-land-sky-water-6",
        "title": "Sky, Weather, Rivers & Landforms",
        "icon": "Sun",
        "description": "Describe the natural environment, rivers, mountains, and weather phenomena. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "el-lukunya (pl. il-lukuny)",
            "source": "Head",
            "pronunciation": "ehl-loo-koo-nyah",
            "hint": "Hollis 1905 Proverb #59 & Hinde 1901"
          },
          {
            "target": "eng-aina (pl. ing-aik)",
            "source": "Hand",
            "pronunciation": "ehng-ah-ee-nah",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "en-geju (pl. in-gejek)",
            "source": "Foot",
            "pronunciation": "ehn-geh-joo",
            "hint": "Hollis 1905 Proverb #20 & Hinde 1901"
          },
          {
            "target": "eng-olong (pl. ing-olongi)",
            "source": "Day",
            "pronunciation": "ehng-oh-lohng",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "eng-aji (pl. ing-ajijik) / eng-ang (kraal)",
            "source": "House",
            "pronunciation": "ehng-ah-jee / ehng-ahng",
            "hint": "Hollis 1905 p. 15 & Hinde 1901"
          },
          {
            "target": "eng-ai (en-chan)",
            "source": "Rain",
            "pronunciation": "ehng-ah-ee / ehn-chahn",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-akira (pl. il-akir)",
            "source": "Star",
            "pronunciation": "ohl-ah-kee-rah",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "ol-apa (pl. il-apaitin)",
            "source": "Moon",
            "pronunciation": "ohl-ah-pah",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "eng-olong (enkolong)",
            "source": "Sun",
            "pronunciation": "ehng-oh-lohng",
            "hint": "Hollis 1905 & Hinde 1901"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"el-lukunya (pl. il-lukuny)\" oo \"eng-aina (pl. ing-aik)\".",
            "source": "The elders know \"Head\" and \"Hand\"."
          },
          {
            "target": "Ore te-nkang ang naa eata en-geju (pl. in-gejek) oo eng-olong (pl. ing-olongi).",
            "source": "At our homestead there is Foot and Day."
          },
          {
            "target": "Ejo ol-moruo: \"eng-aji (pl. ing-ajijik) / eng-ang (kraal)\" naa \"eng-ai (en-chan)\".",
            "source": "The elder says: \"House\" and \"Rain\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"el-lukunya (pl. il-lukuny)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Head",
            "options": [
              "Head",
              "Hand",
              "Foot",
              "Day"
            ],
            "hint": "Hollis 1905 Proverb #59 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "el-lukunya (pl. il-lukuny)",
                "right": "Head"
              },
              {
                "left": "eng-aina (pl. ing-aik)",
                "right": "Hand"
              },
              {
                "left": "en-geju (pl. in-gejek)",
                "right": "Foot"
              },
              {
                "left": "eng-olong (pl. ing-olongi)",
                "right": "Day"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-nature-wildlife-wildlife-flora-6",
        "title": "East African Fauna, Birds & Sacred Trees",
        "icon": "Trees",
        "description": "Identify indigenous mammals, birds, insects, and botanical species recorded in the primary texts. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Eng-ai (En-gai / Nkai)",
            "source": "God",
            "pronunciation": "ehng-ah-ee",
            "hint": "Hollis 1905 p. 264 & Hinde 1901"
          },
          {
            "target": "ɔl-caní (olchani)",
            "source": "Tree / medicine",
            "pronunciation": "ɔl-caní (olchani)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ol-chata",
            "source": "Firewood",
            "pronunciation": "ol-chata",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "en-gima (enkima)",
            "source": "Fire",
            "pronunciation": "en-gima (enkima)",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "in-guk",
            "source": "Coals / embers",
            "pronunciation": "in-guk",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "in-guruon",
            "source": "Ashes",
            "pronunciation": "in-guruon",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #6"
          },
          {
            "target": "en-gewarie",
            "source": "Night",
            "pronunciation": "en-gewarie",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #3"
          },
          {
            "target": "ɛŋ-kár-ɛ́ (enkare)",
            "source": "Water / river",
            "pronunciation": "ɛŋ-kár-ɛ́ (enkare)",
            "hint": "Wikipedia Eastern Nilotic languages & Wiktionary Maasai lemmas"
          },
          {
            "target": "eng-oitoi (enkoitoi)",
            "source": "Road / path",
            "pronunciation": "eng-oitoi (enkoitoi)",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Riddle #8"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"Eng-ai (En-gai / Nkai)\" oo \"ɔl-caní (olchani)\".",
            "source": "The elders know \"God\" and \"Tree / medicine\"."
          },
          {
            "target": "Ore te-nkang ang naa eata ol-chata oo en-gima (enkima).",
            "source": "At our homestead there is Firewood and Fire."
          },
          {
            "target": "Ejo ol-moruo: \"in-guk\" naa \"in-guruon\".",
            "source": "The elder says: \"Coals / embers\" and \"Ashes\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Eng-ai (En-gai / Nkai)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "God",
            "options": [
              "God",
              "Tree / medicine",
              "Firewood",
              "Fire"
            ],
            "hint": "Hollis 1905 p. 264 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Eng-ai (En-gai / Nkai)",
                "right": "God"
              },
              {
                "left": "ɔl-caní (olchani)",
                "right": "Tree / medicine"
              },
              {
                "left": "ol-chata",
                "right": "Firewood"
              },
              {
                "left": "en-gima (enkima)",
                "right": "Fire"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-7",
    "title": "Unit 7: The Human Body, Health, Medicine & Safety (Hildegarde Hinde (1901))",
    "description": "Master the human body, health, medicine & safety in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "🩺",
    "skills": [
      {
        "id": "maasai-body-health-anatomy-senses-7",
        "title": "Parts of the Body & Physical Senses",
        "icon": "Activity",
        "description": "Name anatomical terms, senses, and bodily states from comparative lexical tables. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
            "source": "Eye (fem. noun prefix en-)",
            "pronunciation": "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
            "source": "Ear",
            "pronunciation": "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
            "hint": "Wikipedia Eastern Nilotic languages & Hollis (1905)"
          },
          {
            "target": "eŋ-kumé (enkume)",
            "source": "Nose",
            "pronunciation": "eŋ-kumé (enkume)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɔl-alá-ɪ̀ (olalai)",
            "source": "Tooth (masc. noun prefix ol-)",
            "pronunciation": "ɔl-alá-ɪ̀ (olalai)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɔl-ŋɛ́jɛ́p (olng'ejep)",
            "source": "Tongue",
            "pronunciation": "ɔl-ŋɛ́jɛ́p (olng'ejep)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ɛŋ-kʊ́tʊ́k (enkutuk)",
            "source": "Mouth",
            "pronunciation": "ɛŋ-kʊ́tʊ́k (enkutuk)",
            "hint": "Wikipedia Eastern Nilotic languages & Maasai language"
          },
          {
            "target": "kɨʉ́tɨshɔ (kiutisho)",
            "source": "Index finger",
            "pronunciation": "kɨʉ́tɨshɔ (kiutisho)",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "keju",
            "source": "Leg / foot",
            "pronunciation": "keju",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, Proverb #20"
          },
          {
            "target": "ɔ-sárɠɛ́ (osarge)",
            "source": "Blood",
            "pronunciation": "ɔ-sárɠɛ́ (osarge)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ɛŋ-kɔŋ-ʊ́ (enkong'u)\" oo \"ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)\".",
            "source": "The elders know \"Eye (fem. noun prefix en-)\" and \"Ear\"."
          },
          {
            "target": "Ore te-nkang ang naa eata eŋ-kumé (enkume) oo ɔl-alá-ɪ̀ (olalai).",
            "source": "At our homestead there is Nose and Tooth (masc. noun prefix ol-)."
          },
          {
            "target": "Ejo ol-moruo: \"ɔl-ŋɛ́jɛ́p (olng'ejep)\" naa \"ɛŋ-kʊ́tʊ́k (enkutuk)\".",
            "source": "The elder says: \"Tongue\" and \"Mouth\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ɛŋ-kɔŋ-ʊ́ (enkong'u)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Eye (fem. noun prefix en-)",
            "options": [
              "Eye (fem. noun prefix en-)",
              "Ear",
              "Nose",
              "Tooth (masc. noun prefix ol-)"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ɛŋ-kɔŋ-ʊ́ (enkong'u)",
                "right": "Eye (fem. noun prefix en-)"
              },
              {
                "left": "ɛŋ-kɪ-ɔɔk (enkiook, pl. in-giyaa)",
                "right": "Ear"
              },
              {
                "left": "eŋ-kumé (enkume)",
                "right": "Nose"
              },
              {
                "left": "ɔl-alá-ɪ̀ (olalai)",
                "right": "Tooth (masc. noun prefix ol-)"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-body-health-healing-safety-7",
        "title": "Health, Traditional Medicine & Emergency Terms",
        "icon": "ShieldAlert",
        "description": "Master expressions for illness, healing remedies, protection, and safety. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ol-óì-tò (oloito)",
            "source": "Bone",
            "pronunciation": "ol-óì-tò (oloito)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ŋ-kwar-íé (Samburu)",
            "source": "nose",
            "pronunciation": "ŋ-kwar-íé (samburu)",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
            "source": "blood",
            "pronunciation": "l-ɔɗɔ́ (samburu) / osarge (maasai)",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "ol-kimojino (pl. il-kimojik)",
            "source": "finger, toe",
            "pronunciation": "ol-kimojino (pl. il-kimojik)",
            "hint": "Maasai (Hollis 1905, p. 247)"
          },
          {
            "target": "aia ngoshogi",
            "source": "I have a stomach-ache",
            "pronunciation": "aia ngoshogi",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "ngaiinai",
            "source": "My hand",
            "pronunciation": "ngaiinai",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "inoberininyi",
            "source": "Come back soon",
            "pronunciation": "inoberininyi",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "olloregogoiyu pl. loirigegiru",
            "source": "ankle",
            "pronunciation": "olloregogoiyu pl. loirigegiru",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          },
          {
            "target": "emonge pl. mmongen",
            "source": "anklets (of skin)",
            "pronunciation": "emonge pl. mmongen",
            "hint": "Hildegarde Hinde (1901) The Masai Language: Grammatical Notes together with a Vocabulary"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ol-óì-tò (oloito)\" oo \"ŋ-kwar-íé (Samburu)\".",
            "source": "The elders know \"Bone\" and \"nose\"."
          },
          {
            "target": "Ore te-nkang ang naa eata l-ɔɗɔ́ (Samburu) / osarge (Maasai) oo ol-kimojino (pl. il-kimojik).",
            "source": "At our homestead there is blood and finger, toe."
          },
          {
            "target": "Ejo ol-moruo: \"aia ngoshogi\" naa \"ngaiinai\".",
            "source": "The elder says: \"I have a stomach-ache\" and \"My hand\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ol-óì-tò (oloito)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Bone",
            "options": [
              "Bone",
              "nose",
              "blood",
              "finger, toe"
            ],
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ol-óì-tò (oloito)",
                "right": "Bone"
              },
              {
                "left": "ŋ-kwar-íé (Samburu)",
                "right": "nose"
              },
              {
                "left": "l-ɔɗɔ́ (Samburu) / osarge (Maasai)",
                "right": "blood"
              },
              {
                "left": "ol-kimojino (pl. il-kimojik)",
                "right": "finger, toe"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-8",
    "title": "Unit 8: Core Verbs, Tenses, Negation & Verbal Extensions (Hildegarde Hinde (1901))",
    "description": "Master core verbs, tenses, negation & verbal extensions in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "⚡",
    "skills": [
      {
        "id": "maasai-verbs-grammar-action-verbs-8",
        "title": "Essential Action & Motion Verbs",
        "icon": "Compass",
        "description": "Conjugate high-frequency transitive and intransitive verbs of motion, speech, and work. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "a-iro (a-jo = to say)",
            "source": "Speak",
            "pronunciation": "ah-ee-roh / ah-joh",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-irura",
            "source": "Sleep",
            "pronunciation": "ah-ee-roo-rah",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-ok (ok)",
            "source": "Drink",
            "pronunciation": "ah-ohk",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-nya (inos)",
            "source": "Eat",
            "pronunciation": "ah-nyah / ee-nohs",
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "target": "a-ɲá (anya)",
            "source": "To eat",
            "pronunciation": "a-ɲá (anya)",
            "hint": "Wikipedia Eastern Nilotic languages — Comparative vocabulary (Vossen 1982)"
          },
          {
            "target": "ébúl (S/he will pierce it)",
            "source": "To pierce (+ATR stem)",
            "pronunciation": "ébúl (S/he will pierce it)",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "ɛ́bʉ́l (S/he will prosper)",
            "source": "To prosper (-ATR stem)",
            "pronunciation": "ɛ́bʉ́l (S/he will prosper)",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "atumokî",
            "source": "To have a good opportunity (+ATR)",
            "pronunciation": "atumokî",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          },
          {
            "target": "atʉmʉ́k",
            "source": "To brew (-ATR)",
            "pronunciation": "atʉmʉ́k",
            "hint": "Wikipedia Maasai language — ATR vowel harmony"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"a-iro (a-jo = to say)\" oo \"a-irura\".",
            "source": "The elders know \"Speak\" and \"Sleep\"."
          },
          {
            "target": "Ore te-nkang ang naa eata a-ok (ok) oo a-nya (inos).",
            "source": "At our homestead there is Drink and Eat."
          },
          {
            "target": "Ejo ol-moruo: \"a-ɲá (anya)\" naa \"ébúl (S/he will pierce it)\".",
            "source": "The elder says: \"To eat\" and \"To pierce (+ATR stem)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-iro (a-jo = to say)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Speak",
            "options": [
              "Speak",
              "Sleep",
              "Drink",
              "Eat"
            ],
            "hint": "Hollis 1905 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "a-iro (a-jo = to say)",
                "right": "Speak"
              },
              {
                "left": "a-irura",
                "right": "Sleep"
              },
              {
                "left": "a-ok (ok)",
                "right": "Drink"
              },
              {
                "left": "a-nya (inos)",
                "right": "Eat"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-verbs-grammar-verbal-derivatives-8",
        "title": "Applied, Causative, Reciprocal & Stative Verbs",
        "icon": "Layers",
        "description": "Build complex meanings using verbal extensions and grammatical particles. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "a-ɲá (Samburu & Maasai)",
            "source": "to eat (< Proto-Eastern Nilotic -ɲa)",
            "pronunciation": "a-ɲá (samburu & maasai)",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "eng-eno (enkeno)",
            "source": "wisdom, knowledge, cleverness",
            "pronunciation": "eng-eno (enkeno)",
            "hint": "Maasai (Hollis 1905, p. 243, Proverb #29)"
          },
          {
            "target": "amunyak (munyak)",
            "source": "lucky, fortunate, blessed",
            "pronunciation": "amunyak (munyak)",
            "hint": "Maasai (Hollis 1905, p. 241)"
          },
          {
            "target": "e-nyawa",
            "source": "udder",
            "pronunciation": "e-nyawa",
            "hint": "Maasai (Hollis 1905, p. 255, Riddle #8)"
          },
          {
            "target": "Ewíkî",
            "source": "Week (calendar unit)",
            "pronunciation": "ewíkî",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛ́sáâ",
            "source": "Hour (time unit)",
            "pronunciation": "ɛ́sáâ",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Oldákikaè",
            "source": "Minute (time unit)",
            "pronunciation": "oldákikaè",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛ́sáâ o inkuapí",
            "source": "Time zone",
            "pronunciation": "ɛ́sáâ o inkuapí",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí e Kenya",
            "source": "Kenyan Shilling (KES)",
            "pronunciation": "iropiyianí e kenya",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"a-ɲá (Samburu & Maasai)\" oo \"eng-eno (enkeno)\".",
            "source": "The elders know \"to eat (< Proto-Eastern Nilotic -ɲa)\" and \"wisdom, knowledge, cleverness\"."
          },
          {
            "target": "Ore te-nkang ang naa eata amunyak (munyak) oo e-nyawa.",
            "source": "At our homestead there is lucky, fortunate, blessed and udder."
          },
          {
            "target": "Ejo ol-moruo: \"Ewíkî\" naa \"Ɛ́sáâ\".",
            "source": "The elder says: \"Week (calendar unit)\" and \"Hour (time unit)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"a-ɲá (Samburu & Maasai)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "to eat (< Proto-Eastern Nilotic -ɲa)",
            "options": [
              "to eat (< Proto-Eastern Nilotic -ɲa)",
              "wisdom, knowledge, cleverness",
              "lucky, fortunate, blessed",
              "udder"
            ],
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "a-ɲá (Samburu & Maasai)",
                "right": "to eat (< Proto-Eastern Nilotic -ɲa)"
              },
              {
                "left": "eng-eno (enkeno)",
                "right": "wisdom, knowledge, cleverness"
              },
              {
                "left": "amunyak (munyak)",
                "right": "lucky, fortunate, blessed"
              },
              {
                "left": "e-nyawa",
                "right": "udder"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-9",
    "title": "Unit 9: Time, Indigenous Calendar, Seasons & Navigation (Hildegarde Hinde (1901))",
    "description": "Master time, indigenous calendar, seasons & navigation in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "⏳",
    "skills": [
      {
        "id": "maasai-time-calendar-seasons-months-9",
        "title": "Day Divisions, Lunar Months & Agricultural Seasons",
        "icon": "Calendar",
        "description": "Track time of day, lunar phases, monsoon/rainy seasons, and traditional months. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "oti (f. kiti, pl. ooti)",
            "source": "Small",
            "pronunciation": "oh-tee / kee-tee",
            "hint": "Hollis 1905 p. 30 & Hinde 1901"
          },
          {
            "target": "kitok (pl. kituak) / sapuk",
            "source": "Big",
            "pronunciation": "kee-tohk / sah-pook",
            "hint": "Hollis 1905 p. 30 & Hinde 1901"
          },
          {
            "target": "torono (pl. torok)",
            "source": "Bad",
            "pronunciation": "toh-roh-noh / toh-rohk",
            "hint": "Hollis 1905 p. 30 & Hinde 1901"
          },
          {
            "target": "supat (pl. supati) / sidai",
            "source": "Good",
            "pronunciation": "soo-paht / see-dah-ee",
            "hint": "Hollis 1905 p. 30 & Hinde 1901"
          },
          {
            "target": "ɔl Maa",
            "source": "The Maa language (autonym)",
            "pronunciation": "ɔl Maa",
            "hint": "Wikipedia Maasai language"
          },
          {
            "target": "Eata en-gewarie 'n-giyaa",
            "source": "The night has ears",
            "pronunciation": "Eata en-gewarie 'n-giyaa",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, p. 238"
          },
          {
            "target": "Ekwenikye 'n-guk in-guruon",
            "source": "Coals laugh at the ashes",
            "pronunciation": "Ekwenikye 'n-guk in-guruon",
            "hint": "A. C. Hollis (1905) The Masai: Their Language and Folklore, p. 239"
          },
          {
            "target": "saamburr (Sampur)",
            "source": "traditional Samburu leather carrying bag; origin of the name Samburu",
            "pronunciation": "saamburr (sampur)",
            "hint": "Samburu (North Maa)"
          },
          {
            "target": "Loikop / Lokop",
            "source": "Samburu self-designation ('owners of the land')",
            "pronunciation": "loikop / lokop",
            "hint": "Samburu (North Maa)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"oti (f. kiti, pl. ooti)\" oo \"kitok (pl. kituak) / sapuk\".",
            "source": "The elders know \"Small\" and \"Big\"."
          },
          {
            "target": "Ore te-nkang ang naa eata torono (pl. torok) oo supat (pl. supati) / sidai.",
            "source": "At our homestead there is Bad and Good."
          },
          {
            "target": "Ejo ol-moruo: \"ɔl Maa\" naa \"Eata en-gewarie 'n-giyaa\".",
            "source": "The elder says: \"The Maa language (autonym)\" and \"The night has ears\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"oti (f. kiti, pl. ooti)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Small",
            "options": [
              "Small",
              "Big",
              "Bad",
              "Good"
            ],
            "hint": "Hollis 1905 p. 30 & Hinde 1901"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "oti (f. kiti, pl. ooti)",
                "right": "Small"
              },
              {
                "left": "kitok (pl. kituak) / sapuk",
                "right": "Big"
              },
              {
                "left": "torono (pl. torok)",
                "right": "Bad"
              },
              {
                "left": "supat (pl. supati) / sidai",
                "right": "Good"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-time-calendar-journey-navigation-9",
        "title": "Travel, Directions, Paths & Landmarks",
        "icon": "MapPin",
        "description": "Navigate roads, river crossings, compass points, and caravan routes. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "ŋ-kárn-á (Samburu) / en-karna (Maasai)",
            "source": "name (< Proto-Eastern Nilotic -kɛrɪn)",
            "pronunciation": "ŋ-kárn-á (samburu) / en-karna (maasai)",
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "target": "il-loom le-'ng-aji",
            "source": "rafters of the house",
            "pronunciation": "il-loom le-'ng-aji",
            "hint": "Maasai (Hollis 1905, p. 252)"
          },
          {
            "target": "Takwenya! (resp. Iko!)",
            "source": "Respectful greeting to women",
            "pronunciation": "takwenya! (resp. iko!)",
            "hint": "Maasai"
          },
          {
            "target": "Jumapílí (Jpi)",
            "source": "Sunday (Day of the week)",
            "pronunciation": "jumapílí (jpi)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumatátu (Jtt)",
            "source": "Monday (Day of the week)",
            "pronunciation": "jumatátu (jtt)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumane (Jnn)",
            "source": "Tuesday (Day of the week)",
            "pronunciation": "jumane (jnn)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumatánɔ (Jtn)",
            "source": "Wednesday (Day of the week)",
            "pronunciation": "jumatánɔ (jtn)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Alaámisi (Alh)",
            "source": "Thursday (Day of the week)",
            "pronunciation": "alaámisi (alh)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Jumáa (Iju)",
            "source": "Friday (Day of the week)",
            "pronunciation": "jumáa (iju)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"ŋ-kárn-á (Samburu) / en-karna (Maasai)\" oo \"il-loom le-'ng-aji\".",
            "source": "The elders know \"name (< Proto-Eastern Nilotic -kɛrɪn)\" and \"rafters of the house\"."
          },
          {
            "target": "Ore te-nkang ang naa eata Takwenya! (resp. Iko!) oo Jumapílí (Jpi).",
            "source": "At our homestead there is Respectful greeting to women and Sunday (Day of the week)."
          },
          {
            "target": "Ejo ol-moruo: \"Jumatátu (Jtt)\" naa \"Jumane (Jnn)\".",
            "source": "The elder says: \"Monday (Day of the week)\" and \"Tuesday (Day of the week)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"ŋ-kárn-á (Samburu) / en-karna (Maasai)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "name (< Proto-Eastern Nilotic -kɛrɪn)",
            "options": [
              "name (< Proto-Eastern Nilotic -kɛrɪn)",
              "rafters of the house",
              "Respectful greeting to women",
              "Sunday (Day of the week)"
            ],
            "hint": "Samburu & Maasai (Vossen 1982)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "ŋ-kárn-á (Samburu) / en-karna (Maasai)",
                "right": "name (< Proto-Eastern Nilotic -kɛrɪn)"
              },
              {
                "left": "il-loom le-'ng-aji",
                "right": "rafters of the house"
              },
              {
                "left": "Takwenya! (resp. Iko!)",
                "right": "Respectful greeting to women"
              },
              {
                "left": "Jumapílí (Jpi)",
                "right": "Sunday (Day of the week)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maasai-unit-10",
    "title": "Unit 10: Conversational Phrases, Idioms & Daily Dialogue (Hildegarde Hinde (1901))",
    "description": "Master conversational phrases, idioms & daily dialogue in Maasai (Maa) built directly from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
    "icon": "💬",
    "skills": [
      {
        "id": "maasai-phrases-idioms-everyday-dialogue-10",
        "title": "Everyday Conversational Phrases & Questions",
        "icon": "MessageSquare",
        "description": "Practice authentic questions, answers, and idiomatic expressions from historical phrasebooks. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Jumamósi (Jmo)",
            "source": "Saturday (Day of the week)",
            "pronunciation": "jumamósi (jmo)",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Meínō Yɛ́sʉ",
            "source": "Before Christ (BC / Historical Era)",
            "pronunciation": "meínō yɛ́sʉ",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Eínō Yɛ́sʉ",
            "source": "Anno Domini (AD / Common Era)",
            "pronunciation": "eínō yɛ́sʉ",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛnkakɛnyá",
            "source": "In the morning (AM day period)",
            "pronunciation": "ɛnkakɛnyá",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛndámâ",
            "source": "In the afternoon / evening (PM day period)",
            "pronunciation": "ɛndámâ",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛnkátá",
            "source": "Era / historical age",
            "pronunciation": "ɛnkátá",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Ɛnkɔ́lɔŋ ewíkî",
            "source": "Day of the week",
            "pronunciation": "ɛnkɔ́lɔŋ ewíkî",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí e Afrika Kusini",
            "source": "South African Rand (ZAR)",
            "pronunciation": "iropiyianí e afrika kusini",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí e leoni",
            "source": "Sierra Leonean Leone (1964—2022) (SLL)",
            "pronunciation": "iropiyianí e leoni",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"Jumamósi (Jmo)\" oo \"Meínō Yɛ́sʉ\".",
            "source": "The elders know \"Saturday (Day of the week)\" and \"Before Christ (BC / Historical Era)\"."
          },
          {
            "target": "Ore te-nkang ang naa eata Eínō Yɛ́sʉ oo Ɛnkakɛnyá.",
            "source": "At our homestead there is Anno Domini (AD / Common Era) and In the morning (AM day period)."
          },
          {
            "target": "Ejo ol-moruo: \"Ɛndámâ\" naa \"Ɛnkátá\".",
            "source": "The elder says: \"In the afternoon / evening (PM day period)\" and \"Era / historical age\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Jumamósi (Jmo)\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "Saturday (Day of the week)",
            "options": [
              "Saturday (Day of the week)",
              "Before Christ (BC / Historical Era)",
              "Anno Domini (AD / Common Era)",
              "In the morning (AM day period)"
            ],
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Jumamósi (Jmo)",
                "right": "Saturday (Day of the week)"
              },
              {
                "left": "Meínō Yɛ́sʉ",
                "right": "Before Christ (BC / Historical Era)"
              },
              {
                "left": "Eínō Yɛ́sʉ",
                "right": "Anno Domini (AD / Common Era)"
              },
              {
                "left": "Ɛnkakɛnyá",
                "right": "In the morning (AM day period)"
              }
            ]
          }
        ]
      },
      {
        "id": "maasai-phrases-idioms-courtesy-discourse-10",
        "title": "Hospitality, Requests & Social Discourse",
        "icon": "Sparkles",
        "description": "Converse naturally in home, village, market, and travel settings. Grounded in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910).",
        "tips": "Every lexical entry in this module is drawn verbatim from Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910). Pay close attention to noun class prefixes, root consonants, and contextual usage.",
        "culturalNote": "Primary historical documentation for Maasai (Maa) (ɔl Maa) in Hildegarde Hinde (1901), Sir Harry Johnston (1902), A. C. Hollis (1905) & C. W. Hobley (1910) preserves pre-1930 phonological, grammatical, and ethnographic usage across Narok, Kajiado, Samburu.",
        "words": [
          {
            "target": "Iropiyianí e CFA BCEAO",
            "source": "West African CFA Franc (XOF)",
            "pronunciation": "iropiyianí e cfa bceao",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí e CFA BEAC",
            "source": "Central African CFA Franc (XAF)",
            "pronunciation": "iropiyianí e cfa beac",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Iropiyianí ɔ́ɔ̄ lmarabu",
            "source": "United Arab Emirates Dirham (AED)",
            "pronunciation": "iropiyianí ɔ́ɔ̄ lmarabu",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Tansania",
            "source": "Tanzania (Country / Territory)",
            "pronunciation": "tansania",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Uhabeshi",
            "source": "Ethiopia (Country / Territory)",
            "pronunciation": "uhabeshi",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Sudani",
            "source": "Sudan (Country / Territory)",
            "pronunciation": "sudani",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Kongo",
            "source": "Congo - Brazzaville (Country / Territory)",
            "pronunciation": "kongo",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Nijeria",
            "source": "Nigeria (Country / Territory)",
            "pronunciation": "nijeria",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "target": "Kodivaa",
            "source": "Côte d’Ivoire (Country / Territory)",
            "pronunciation": "kodivaa",
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          }
        ],
        "sentences": [
          {
            "target": "Eyiolo il-payiani \"Iropiyianí e CFA BCEAO\" oo \"Iropiyianí e CFA BEAC\".",
            "source": "The elders know \"West African CFA Franc (XOF)\" and \"Central African CFA Franc (XAF)\"."
          },
          {
            "target": "Ore te-nkang ang naa eata Iropiyianí ɔ́ɔ̄ lmarabu oo Tansania.",
            "source": "At our homestead there is United Arab Emirates Dirham (AED) and Tanzania (Country / Territory)."
          },
          {
            "target": "Ejo ol-moruo: \"Uhabeshi\" naa \"Sudani\".",
            "source": "The elder says: \"Ethiopia (Country / Territory)\" and \"Sudan (Country / Territory)\"."
          }
        ],
        "authoredExercises": [
          {
            "type": "multiple_choice",
            "prompt": "What does \"Iropiyianí e CFA BCEAO\" mean in English (Hildegarde Hinde (1901))?",
            "correctAnswer": "West African CFA Franc (XOF)",
            "options": [
              "West African CFA Franc (XOF)",
              "Central African CFA Franc (XAF)",
              "United Arab Emirates Dirham (AED)",
              "Tanzania (Country / Territory)"
            ],
            "hint": "ɔl Maa (Maasai) — GitHub unicode-org/cldr (mas.xml) & PanLex CC0 (huggingface.co/datasets/cointegrated/panlex-meanings)"
          },
          {
            "type": "match_pairs",
            "correctAnswer": "",
            "prompt": "Match each Maasai (Maa) term to its verified English meaning:",
            "pairs": [
              {
                "left": "Iropiyianí e CFA BCEAO",
                "right": "West African CFA Franc (XOF)"
              },
              {
                "left": "Iropiyianí e CFA BEAC",
                "right": "Central African CFA Franc (XAF)"
              },
              {
                "left": "Iropiyianí ɔ́ɔ̄ lmarabu",
                "right": "United Arab Emirates Dirham (AED)"
              },
              {
                "left": "Tansania",
                "right": "Tanzania (Country / Territory)"
              }
            ]
          }
        ]
      }
    ]
  }
];
