// ============================================================
// Public Domain Dholuo Phonetic Practice & Tongue Twisters
// Built from 1920 Mill-Hill Fathers "A Handbook of the Kavirondo Language"
// ============================================================

export interface TongueTwisterEntry {
  id: number;
  luo: string;
  english: string;
}

export const luoTongueTwisters: TongueTwisterEntry[] = [
  {
    id: 1,
    luo: "Wach mos, we ruyo, wachi wach mar adieri.",
    english: "Speak gently, cease hurrying, speak the word of truth (Practicing w, ch, and trilled r — Mill-Hill 1920)."
  },
  {
    id: 2,
    luo: "Kwach ma Kamagambo omako kweye gi kwach moro.",
    english: "The leopard of Kamagambo caught leopards with another leopard (Practicing labialized velar kw and palatal ch — Mill-Hill 1920)."
  },
  {
    id: 3,
    luo: "Jatich tiyo tich tek, jotich tiyo tich atiya.",
    english: "The workman works hard work, the workmen simply work the work (Practicing dental/alveolar t and palatal ch — Mill-Hill 1920)."
  },
  {
    id: 4,
    luo: "Ng'ato mang'eyo ng'iewo rech ng'iewo rech mang'eny.",
    english: "A person who knows how to buy fish buys many fish (Practicing initial and medial velar nasal ng' — Mill-Hill 1920)."
  },
  {
    id: 5,
    luo: "Chogo guok gi chok dhiang' chiegni gi dapi.",
    english: "The bone of a dog and the bone of a cow are near the waterpot (Practicing construct-state alternation chogo/chok — Mill-Hill 1920)."
  }
];
