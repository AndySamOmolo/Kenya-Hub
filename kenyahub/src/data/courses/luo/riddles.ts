// ============================================================
// Public Domain Dholuo Riddles (Miero / Ngero)
// Built from classical Dholuo oral heritage & Mill-Hill Fathers (1920) vocabulary
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
    answer: "Tong' gweno (An egg — Mill-Hill Fathers 1920)"
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
    answer: "Wang' (The two eyes)"
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
    answer: "Rangach / Dhoot (The homestead gate or door)"
  },
  {
    id: 6,
    luo: "Chiemo ma chiek e i lowo.",
    english: "Food that ripens beneath the soil.",
    answer: "Rabuon (Sweet potatoes — Mill-Hill Fathers 1920)"
  }
];
