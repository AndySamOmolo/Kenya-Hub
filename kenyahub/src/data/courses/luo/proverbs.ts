// ============================================================
// Public Domain Dholuo Proverbs & Sayings (Ngero)
// Grounded in:
// - C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (JAI, London — Public Domain)
// - Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Hutchinson, London — Public Domain)
// - C. W. Hobley (1903) "British East Africa: Anthropological Studies in Kavirondo and Nandi" (JAI Vol. 33 — Public Domain)
// - G. A. S. Northcote (1907) "The Nilotic Kavirondo" (JRAI Vol. 37 — Public Domain)
// - Mill-Hill Fathers (1920) "A Handbook of the Kavirondo Language" (London — Public Domain)
// ============================================================

export interface ProverbEntry {
  id?: number;
  luo: string;
  english: string;
  literal_translation?: string;
  meaning?: string;
  meanings?: string[];
  explanation?: string;
  moral?: string;
  morals?: string[];
  answer_luo?: string;
  answer_english?: string;
  letter_section?: string;
  category?: 'wisdom' | 'warning' | 'truth' | 'patience' | 'family' | 'character' | 'life' | 'other';
}

export const luoProverbs: ProverbEntry[] = [
  {
    id: 1,
    luo: "Alot michayo ema tieko kuon.",
    english: "The despised vegetable is the one that finishes the cornmeal (kuon).",
    meaning: "What you overlook or consider humble may prove to be your greatest help in a time of need.",
    category: "wisdom"
  },
  {
    id: 2,
    luo: "Kuot ogwal ok mon dhiang' modho pi.",
    english: "The swelling (or croaking) of a frog does not stop a cow from drinking water.",
    meaning: "Empty noise, envy, or idle complaints cannot deter a determined person from fulfilling their purpose.",
    category: "character"
  },
  {
    id: 3,
    luo: "Ok inyal nego chwarni gi lwedo achiel.",
    english: "You cannot kill a louse with one finger.",
    meaning: "Difficult tasks require unity and mutual cooperation rather than isolated effort.",
    category: "family"
  },
  {
    id: 4,
    luo: "Wat imedo gi osiep.",
    english: "Kinship (wat) is strengthened with friendship (osiep).",
    meaning: "Blood ties endure best when nurtured with genuine kindness, respect, and companionship.",
    category: "family"
  },
  {
    id: 5,
    luo: "Aora mar wat iridore mos.",
    english: "The river of kinship is crossed gently.",
    meaning: "Tread softly and patiently in family disputes; harshness destroys lifelong bonds.",
    category: "family"
  },
  {
    id: 6,
    luo: "Agulu mirito ok yieny.",
    english: "A watched cooking pot does not boil.",
    meaning: "Impatience makes waiting feel longer; steady work and patience bring results in due season.",
    category: "patience"
  },
  {
    id: 7,
    luo: "Kipod in e pi kik iyany nyang'.",
    english: "While you are still in the water, do not insult the crocodile.",
    meaning: "Do not boast prematurely or provoke danger before you have reached dry ground.",
    category: "warning"
  },
  {
    id: 8,
    luo: "Chako chon oloyo dhi e ajuoga.",
    english: "Starting early is better than going to the diviner/healer.",
    meaning: "Timely preparation and prevention are far wiser than seeking remedies after trouble strikes (A stitch in time saves nine).",
    category: "wisdom"
  },
  {
    id: 9,
    luo: "Kama iluokorie ok itwoe.",
    english: "Where you bathe is not where you dry yourself.",
    meaning: "Once you complete one stage of a journey or task, keep moving forward rather than lingering in the same spot.",
    category: "life"
  },
  {
    id: 10,
    luo: "Lak chogo.",
    english: "Even teeth are bones.",
    meaning: "Relatives share the same essential nature and responsibility toward one another.",
    category: "family"
  },
  {
    id: 11,
    luo: "Nyasaye nyak ocha (Nyasaye nyak ichayo).",
    english: "God is never despised.",
    meaning: "Reverence for the Creator and truth is foundational (Mill-Hill Fathers, Handbook of the Kavirondo Language, 1920).",
    category: "truth"
  },
  {
    id: 12,
    luo: "Wach mos, we ruyo.",
    english: "Speak gently; cease hurrying.",
    meaning: "Calm, measured speech resolves conflict where haste and anger fail (Mill-Hill Fathers, 1920).",
    category: "patience"
  },
  {
    id: 13,
    luo: "Turu atiya, kik uwe tich.",
    english: "Simply work; do not abandon the work.",
    meaning: "Diligent action speaks louder than boastful words (Mill-Hill Fathers, 1920).",
    category: "character"
  },
  {
    id: 14,
    luo: "Wang' ma ithiedho ema golo pi.",
    english: "The eye that is being treated is the one that sheds tears.",
    meaning: "Constructive correction or healing often brings temporary discomfort before restoration.",
    category: "wisdom"
  },
  {
    id: 15,
    luo: "Chieng' wuok ne ji duto: Onyango, Oching', Odiambo, gi Otieno (Northcote 1907).",
    english: "The sun (Chieng') rises for all people across every watch of the day: morning (Onyango), noon (Oching'), afternoon (Odiambo), and night (Otieno).",
    meaning: "Grounded in G. A. S. Northcote's 'The Nilotic Kavirondo' (1907, p. 62) documenting the Dholuo time-of-day birth-naming system and reverence for Chieng' (the Sun).",
    category: "life"
  },
  {
    id: 16,
    luo: "Opiyo telo, Odongo luwo (Northcote 1907).",
    english: "Opiyo (the first-born twin, from piyo 'quickly') leads, and Odongo (the second-born twin, from dongo 'to grow/follow') follows.",
    meaning: "Every person has their appointed order and role within the family and community (G. A. S. Northcote, 1907, p. 62).",
    category: "family"
  },
  {
    id: 17,
    luo: "Kwero mar dhoot rito dala (Hobley 1903).",
    english: "Respecting the clan totem/taboo (kwero) protects the homestead (dala).",
    meaning: "Recorded by C. W. Hobley in 'Anthropological Studies in Kavirondo and Nandi' (1903, pp. 347–349), detailing the 20 Ja-Luo clan totems (Kwero) and ancestral stewardship.",
    category: "family"
  },
  {
    id: 18,
    luo: "Apoyo (Apwoyo) oloyo sibuor gi rieko (Hobley 1903).",
    english: "The Hare (Apoyo/Apwoyo) overcomes the Lion (Sibuor) through wisdom.",
    meaning: "Grounded in the 7 Kavirondo animal fables recorded by C. W. Hobley (1903, pp. 339–344), where quick wit and discernment triumph over brute force.",
    category: "wisdom"
  },
  {
    id: 19,
    luo: "Ramogi noguro dala e Got Ramogi (Hobley 1902 & 1903).",
    english: "Ramogi established the ancestral homestead at Ramogi Hill.",
    meaning: "Honours the foundational migration and unity of the Luo people from Podho and Ramogi as documented by C. W. Hobley (1902, p. 27; 1903, pp. 326–331).",
    category: "family"
  },
  {
    id: 20,
    luo: "Koth ma chwe miyo piny kwe (Northcote 1907 & Hobley 1903).",
    english: "The rain that falls brings coolness and peace (kwe) to the land.",
    meaning: "Reflects Dholuo ecological wisdom linking rain, harvest abundance, and social harmony (Northcote 1907, p. 65; Hobley 1903, p. 346).",
    category: "life"
  }
];
