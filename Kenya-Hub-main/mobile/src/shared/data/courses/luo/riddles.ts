// ============================================================
// Public Domain Dholuo Riddles (Miero / Ngero)
// Built from classical Dholuo oral heritage, C. W. Hobley (1902 & 1903),
// Sir Harry Johnston (1902), G. A. S. Northcote (1907), & Mill-Hill Fathers (1920)
// ============================================================

export interface RiddleEntry {
  id: number;
  luo: string;
  english: string;
  answer: string;
}

export const luoRiddles: RiddleEntry[] = [
  {
    id: 1,
    luo: "Oda ma onge dhoot.",
    english: "My house that has no door.",
    answer: "Tong' gweno (An egg — Mill-Hill Fathers 1920 & Hobley 1902)"
  },
  {
    id: 2,
    luo: "Nyarwa ma dhi tedo to ok duog dala.",
    english: "Our daughter who goes out on a journey and never turns back home.",
    answer: "Pi aora (River water flowing downstream)"
  },
  {
    id: 3,
    luo: "Jodongo ariyo ma dak machiegni to ok ginenre.",
    english: "Two elders who live side by side but never see each other.",
    answer: "Wang' (The two eyes — Johnston 1902 & Mill-Hill 1920)"
  },
  {
    id: 4,
    luo: "Law Nyasaye ma oumo piny duto.",
    english: "God's garment that covers the whole earth.",
    answer: "Polo gi mudho (The sky and nightfall)"
  },
  {
    id: 5,
    luo: "Jatich ma rito dhoot odiechieng' gi otieno ma ok nind.",
    english: "A watchman who guards the doorway day and night without sleeping.",
    answer: "Rangach / Dhoot (The homestead gate or door — Northcote 1907)"
  },
  {
    id: 6,
    luo: "Chiemo ma chiek e i lowo.",
    english: "Food that ripens beneath the soil.",
    answer: "Rabuon (Sweet potatoes — Hobley 1902 & Mill-Hill Fathers 1920)"
  },
  {
    id: 7,
    luo: "Chiel mar dala ma ogingo ot duto gi kuthe (Northcote 1907).",
    english: "The circular hedge around the homestead that guards all houses with its thorns.",
    answer: "Ojuok / Chiel dala (The euphorbia boma hedge surrounding a Jaluo village — Northcote 1907, p. 58)"
  },
  {
    id: 8,
    luo: "Nyathi ma onywol karango chieng' to iluongo nyinge ni ang'o? (Northcote 1907).",
    english: "What is the name given to a child born when the morning sun shines brightly (7–9 a.m.)?",
    answer: "Onyango (boy) / Anyango (girl) — Northcote (1907, p. 62)"
  },
  {
    id: 9,
    luo: "Nyathi ma onywol e kinde mar kech kata bonyo iluongo ni ang'o? (Northcote 1907).",
    english: "What is the name given to a child born during the season of locusts or famine?",
    answer: "Obonyo (from bonyo, locusts) or Okach (from kech, famine/hunger) — Northcote (1907, p. 62)"
  }
];
