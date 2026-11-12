// ============================================================
// Public Domain Dholuo Proverbs & Sayings (Ngero)
// Grounded in:
// - C. W. Hobley (1902) "Eastern Uganda: An Ethnological Survey" (JAI, London — Public Domain)
// - Sir Harry H. Johnston (1902) "The Uganda Protectorate, Vol. II" (Hutchinson, London — Public Domain)
// - C. W. Hobley (1903) "British East Africa: Anthropological Studies in Kavirondo and Nandi" (JAI Vol. 33, pp. 325–359 — Public Domain)
// - G. A. S. Northcote (1907) "The Nilotic Kavirondo" (JRAI Vol. 37 — Public Domain)
// - Rev. John Roscoe & Archdeacon J. J. Willis (1915) "The Northern Bantu" (Ch. XXV "The Nilotic Kavirondo" & Dholuo Kinship Table, pp. 275–293 — Public Domain)
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
    luo: "Chieng' wuok ne ji duto: onyango, oching, odiambo, gi otieno • Nying' mag luongo: obele, oliech, gi obonyo (Northcote 1907).",
    english: "The sun (Chieng') rises for all people across every watch of the day: morning (onyango), noon (oching), afternoon (odiambo), and night (otieno) • Hereditary nicknames: obele (owner of much mtama millet), oliech (slayer of an elephant), and obonyo (the man like a locust).",
    meaning: "Grounded in G. A. S. Northcote's 'The Nilotic Kavirondo' (1907, p. 62) documenting the 4 verbatim time-of-day birth names (onyango, oching, odiambo, otieno), dream/posthumous ancestral naming, and the 3 hereditary nicknames (obele, oliech, obonyo).",
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
    luo: "Kwero 20 mag Ja-Luo (Tho-Luo): Nyang, Ndiek, Okwach, Bīm, Ongner, Ogwang, Buwem, Achut-th, Agako, Otenga, Ngnech, Nyelo, Gori gori, Kumnēr, Upuku, Kuru, Imbirri, Ogwan, Iwang, Arumtich (Hobley 1903, p. 348).",
    english: "The 20 Nilotic Ja-Luo totems/taboos (Kwero in Tho-Luo): Crocodile (Nyang), Hyæna (Ndiek), Leopard (Okwach), Baboon (Bīm), Cercopithecus Monkey (Ongner), Wild Cat (Ogwang — eaten by Gemi, Lego & Sakwa), Jackal (Buwem), Vulture (Achut-th), Crow (Agako), Kite (Otenga), Nile Monitor (Ngnech), Python (Nyelo — sacred ancestor of Kadimu), Mongoose (Gori gori), Rock Hyrax (Kumnēr), Tortoise (Upuku), Colobus Monkey (Kuru), Wart Hog (Imbirri), Frog (Ogwan), Crested Crane (Iwang — strictly preserved except in Gemi), and Ground Hornbill (Arumtich), plus women's Kwero (fowls, eggs, elephant, hippopotamus, and sheep among Kisumu & Gemi).",
    meaning: "Recorded verbatim by C. W. Hobley in 'Anthropological Studies in Kavirondo and Nandi' (JAI Vol. 33, 1903, pp. 326, 348), detailing the 20 Ja-Luo Kwero totems, the Kadimu annual sacrifice to their python ancestor (Nyelo), and why violating a Kwero causes skin eruption.",
    category: "family"
  },
  {
    id: 18,
    luo: "Apōdtho gi Ramogi e Got Ramogi: yath mar Were, Chindu, Anyango, Rajoki, Jimbo, Uyua, Mbunga, Owidi, Rachonyo, Chwanya, Kanu (Ja-Kanu), Alangu, gi Mugirango (Hobley 1903, pp. 326–331).",
    english: "Apōdtho (the First Ancestor who descended from the heavens to Ramogi/Lamogi Hill) and Ramogi (first Ja-Luo settler on Ramogi Hill in Kadimu near the Nzoia mouth): the Were tree wooden milking bowls, Chindu (cf. Luganda Kintu), Anyango, Rajoki, Jimbo, Uyua, Mbunga, Owidi, Rachonyo, Chwanya, Kanu (progenitor of Ja-Kanu on the Kitoto plain), Alangu, and Mugirango.",
    meaning: "Synthesizes the three oral histories and genealogical trees of the Ja-Luo recorded by C. W. Hobley (1903, pp. 326–331) from Chief Ugada Ndiek of Usakwa, Chief Ugada of Korando (aged over 70, son of Otiendi), and Chief Gori Kogalo of Kanyamwa, including Apōdtho carving two bowls from the Were tree, his shadow being cupped and speared before turning into a spear-sharpening rock, and his promise of the bright country in the heavens.",
    category: "wisdom"
  },
  {
    id: 19,
    luo: "Simbi abūr (abūr = bur) e Kalachonyo • Mgahanya (Agine/Ashue → Luchiri → Namonwa → Mgahanya) gi Kayenga (Hobley 1903, pp. 349–350).",
    english: "The crater lake of Simbi abūr ('abūr' = hole/pit) in Kalachonyo • Chief Mgahanya of the Shekwi clan of Nyole (descended from Agine/Ashue and the Rain-Witch) and Kayenga of the Maragolia Hills.",
    meaning: "Recorded by C. W. Hobley (1903, pp. 349–350): when the drunken elders of a village in Kalachonyo drove away a mysterious rain-woman, only one compassionate wife sheltered, fed, and warmed her; after summoning her husband from the beer-feast (tembo), the rain-woman sank the inhospitable village under a deluge that formed the natron crater lake Simbi abūr, before marrying Agine (Ashue) in Nyole.",
    category: "character"
  },
  {
    id: 20,
    luo: "Chieng' (Nyasaye gi Wang'-chieng') gi Polo • Chieno mar tuoro • Omeni gi Thako mag Ruoth Ugada • Isira • Chik Loch mar Mikayi: Umoli, Agola (Odera Ulalo gi Sejenyi), kod Kakwari (Agina) • Kavirondo (Hobley 1903, pp. 343–359).",
    english: "Chieng (both the Sun and the Supreme Deity) and Polo (the daylight sky/heavens) • The married woman's chieno tassel of tuoro aloe fibre • Chief Ugada's 4 omeni wrist sticks, 3-holed iron charm for his grandmother Thako, and 6 yellow Nya-Luo beads • The Isira blood-feud meal taboo • First-wife (mikayi) chieftainship succession: Umoli's younger son Sejenyi (by 1st wife Agola, full brother of Odera Ulalo) succeeding ahead of older half-brother Agina (by 2nd wife Kakwari) • Origin of the name 'Kavirondo'.",
    meaning: "Recorded by C. W. Hobley (1903, pp. 343–346, 350–351, 357–359): documents Ja-Luo 4-direction meat/beer/mtama offerings to ancestral spirits, the sanctity of the chieno tassel, the 24-hour fatal Isira taboo against sharing a cooking pot with a killer's maternal kin, chieftainship succession in the first-married wife's line, and Kisumu elders' explanation of how 'Kavirondo' arose as an epithet between the south and north shores of Kavirondo Gulf.",
    category: "truth"
  },
  {
    id: 21,
    luo: "Wuoro (Wuonwa / Wuonu / Wuon), Miyo (Minwa / Minu / Min), Owadwa, Nyaminwa, Nerwa (MB), Wayawa (FZ), Kwaro, Dayo, Orwa (Roscoe & Willis 1915).",
    english: "Father (our/your/his father), Mother (our/your/his mother), Brother (son of my mother/father), Sister, Maternal Uncle (Nerwa), Paternal Aunt (Wayawa), Grandfather (Kwaro), Grandmother (Dayo), Brother-/Son-in-law (Orwa).",
    meaning: "Recorded verbatim by Archdeacon J. J. Willis and Rev. John Roscoe in 'The Northern Bantu' (1915, Ch. XXV 'The Nilotic Kavirondo' & Kinship Table pp. 275–293), documenting Dholuo relational possessive inflection, strict clan exogamy, and in-law respect (lour).",
    category: "family"
  }
];
