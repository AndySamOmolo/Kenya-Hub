// ============================================================
// Mijikenda (Kigiryama / Chidigo / Chichonyi) Language Course
// Grounded in W. E. Taylor (1891) "Giryama Vocabulary and Collections" (SPCK, London — Public Domain)
// and Sabaki Comparative Linguistics
// ============================================================

import type { LanguageConfig, CourseUnit } from '../types';

export const MIJIKENDA_CONFIG: LanguageConfig = {
  id: 'mijikenda',
  name: 'Mijikenda',
  nativeName: "Kigiryama /Chidigo (Midzi Chenda)",
  family: 'Bantu',
  counties: ['Kilifi', 'Kwale', 'Mombasa', 'Tana River'],
  speakers: '2.5M',
  speechLocale: 'sw-KE',
  description: 'The Sabaki Bantu language cluster of the Nine Sacred Kaya Homesteads (Giriama, Digo, Chonyi, Duruma, Kambe, Ribe, Rabai, Jibana, Kauma) along the Kenyan coast. Grounded in Rev. W. E. Taylor (1891) and Proto-Sabaki linguistics.',
  color: '#0D9488',
  sources: ['taylor-giryama-1891', 'open-web-swadesh-comparative'],
};

export const MIJIKENDA_UNITS: CourseUnit[] = [
  {
    id: 'mijikenda-unit-1',
    title: 'Unit 1: Sacred Kaya Heritage, Sabaki Nouns & W. E. Taylor (1891) Riddles',
    description: 'Learn Kigiryama and Chidigo nouns, numerals, verbs, and 1891 riddles and folktales from W. E. Taylor.',
    icon: '🌴',
    skills: [
      {
        id: 'mijikenda-kaya-nouns',
        title: 'Midzi Chenda (Nine Homesteads), People & Nature',
        icon: 'Home',
        description: 'Master core Mijikenda nouns for society, nature, and sacred Kaya institutions.',
        tips: "Mijikenda ('Midzi Chenda' = Nine Villages) shifts Proto-Bantu *t to h (moho = fire, muho = river, -hahu = three) and uses dzi-/ma- in Class 5/6 (dziwe = stone, madzi = water).",
        words: [
          { target: 'Midzi Chenda', source: 'The Nine Homesteads / Mijikenda', pronunciation: 'mee-dzee chehn-dah', hint: 'midzi (villages) + chenda (nine)' },
          { target: 'kaya (pl. makaya)', source: 'sacred fortified forest homestead', pronunciation: 'kah-yah / mah-kah-yah', hint: 'UNESCO World Heritage Mijikenda shrines' },
          { target: 'Kambi / atumia', source: 'council of elders / senior elders', pronunciation: 'kahm-bee / ah-too-mee-ah', hint: 'Giriama & Chonyi elder governance' },
          { target: "mut'u (pl. at'u)", source: 'person (pl. people)', pronunciation: 'moo-too / ah-too', hint: 'W. E. Taylor (1891) Class 1/2' },
          { target: 'mwalume (pl. alume) / muche (pl. ache)', source: 'man / woman', pronunciation: 'mwah-loo-meh / moo-cheh', hint: 'W. E. Taylor (1891)' },
          { target: 'madzi / moho', source: 'water / fire', pronunciation: 'mah-dzee / moh-hoh', hint: 'Sabaki dzi- and *t > h shift' },
          { target: 'dziwe (pl. mawe) / dzua', source: 'stone (pl. stones) / sun', pronunciation: 'dzee-weh / dzoo-ah', hint: 'Class 5 dzi-' },
          { target: 'Mulungu / Mulingu', source: 'God, Supreme Creator', pronunciation: 'moo-loon-goo', hint: 'Shared coastal & eastern Bantu name' },
          { target: 'chakurya / wari', source: 'food / cooked cornmeal (ugali)', pronunciation: 'chah-koo-ryah / wah-ree', hint: 'W. E. Taylor (1891, p. 138)' },
          { target: 'mafigo', source: 'three cooking stones of the hearth', pronunciation: 'mah-fee-goh', hint: 'W. E. Taylor (1891 Riddle #6)' }
        ],
        sentences: [
          { target: "Fw-alume ahahu, akiuka mumwenga, k'afurya wari. Ni mafigo.", source: 'We are three men; when one goes away, we eat no cornmeal. It is the three hearthstones (Taylor 1891).' },
          { target: 'Mut’u k’aadima kugit’ira chakurya.', source: 'A person cannot cook food (with only two hearthstones — Taylor 1891).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'In W. E. Taylor (1891) Riddle #6, what are the "three men" (alume ahahu) without whom no cornmeal (wari) can be cooked?',
            correctAnswer: 'mafigo (three cooking stones of the hearth)',
            options: ['mafigo (three cooking stones of the hearth)', 'madzi / moho', 'Midzi Chenda', 'kaya (pl. makaya)'],
            hint: 'Ni mafigo = It is the three hearthstones'
          }
        ]
      },
      {
        id: 'mijikenda-verbs-folklore',
        title: 'Kigiryama Verbs, Numerals & Taylor (1891) Folktale Fauna',
        icon: 'BookOpen',
        description: 'Learn Mijikenda action verbs, numbers, and folktale characters from W. E. Taylor (1891).',
        tips: "In Kigiryama, Katsungula (the Little Hare) is the clever hero of traditional stories alongside Simba (the Lion), Fisi (the Hyena), and K'uku (the Fowl).",
        words: [
          { target: 'katsungula / simba / fisi', source: 'little hare / lion / hyena', pronunciation: 'kah-tsoon-goo-lah / seem-bah / fee-see', hint: 'W. E. Taylor (1891) folktale characters' },
          { target: 'mumwenga, mairi, ahahu, chenda, kumi', source: '1, 2, 3, 9, 10', pronunciation: 'moo-mwehn-gah, mah-ee-ree, ah-hah-hoo, chehn-dah, koo-mee', hint: 'Mijikenda numerals (Taylor 1891)' },
          { target: "kurya / kugit'ira", source: 'to eat / to cook', pronunciation: 'koo-ryah / koo-gee-tee-rah', hint: 'Taylor (1891, p. 138)' },
          { target: 'kugula / kuguza', source: 'to buy / to sell', pronunciation: 'koo-goo-lah / koo-goo-zah', hint: 'Proto-Sabaki commercial verbs' },
          { target: 'kutsimba / kudzenga', source: 'to dig / to build', pronunciation: 'koo-tseem-bah / koo-dzehn-gah', hint: 'Proto-Sabaki verbs' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891 Riddle #8)', pronunciation: 'kah-kee-loo-mee-kah nee kee-koh-koh-rah', hint: 'kikokora = elbow' },
          { target: 'Magoma mairi lwanda-ni. Ni mahombo.', source: 'Two cows in the open field. It is the breasts (Taylor 1891 Riddle #18)', pronunciation: 'mah-goh-mah mah-ee-ree lwahn-dah-nee', hint: 'lwanda-ni = in the open field' }
        ],
        sentences: [
          { target: 'Katsungula na Simba; Fisi na Simba na Katsungula.', source: 'The Little Hare and the Lion; The Hyena, the Lion, and the Little Hare (Taylor 1891).' },
          { target: "K'akilumika. Ni kikokora.", source: 'It cannot be bitten. It is the elbow (Taylor 1891).' }
        ],
        authoredExercises: [
          {
            type: 'multiple_choice',
            prompt: 'Which character is the clever trickster hare in W. E. Taylor's 1891 Giriama folktales?',
            correctAnswer: 'katsungula',
            options: ['katsungula', 'simba', 'fisi', 'kikokora'],
            hint: 'Katsungula na Simba = The Little Hare and the Lion'
          }
        ]
      }
    ]
  }
];
