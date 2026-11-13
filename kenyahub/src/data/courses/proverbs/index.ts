import type { ProverbItem, CulturalWisdomItem } from "./types";
import { MAASAI_PROVERBS } from "./maasai";
import { KALENJIN_PROVERBS } from "./kalenjin";
import { POKOT_PROVERBS } from "./pokot";
import { MIJIKENDA_PROVERBS } from "./mijikenda";
import { KAMBA_PROVERBS } from "./kamba";
import { TAITA_PROVERBS } from "./taita";
import { TAVETA_PROVERBS } from "./taveta";
import { SWAHILI_PROVERBS } from "./swahili";
import { TURKANA_PROVERBS } from "./turkana";
import { ILCHAMUS_PROVERBS } from "./ilchamus";
import { LUHYA_PROVERBS } from "./luhya";
import { KISII_PROVERBS } from "./kisii";
import { TESO_PROVERBS } from "./teso";
import { MERU_PROVERBS } from "./meru";
import { SOMALI_PROVERBS } from "./somali";
import { BORANA_PROVERBS } from "./borana";
import { KIKUYU_PROVERBS } from "./kikuyu";
import { LUO_PROVERBS } from "./luo";
import { POKOMO_PROVERBS } from "./pokomo";
import { EMBU_PROVERBS } from "./embu";
import { SAMBURU_PROVERBS } from "./samburu";
import { RENDILLE_PROVERBS } from "./rendille";
import { DAASANACH_PROVERBS } from "./daasanach";

export type { ProverbItem, CulturalWisdomItem } from "./types";
export { NORTHCOTE_1907_ETHNOGRAPHIC_WISDOM } from "./ethnographic-wisdom";
export { MAASAI_PROVERBS } from "./maasai";
export { KALENJIN_PROVERBS } from "./kalenjin";
export { POKOT_PROVERBS } from "./pokot";
export { MIJIKENDA_PROVERBS } from "./mijikenda";
export { KAMBA_PROVERBS } from "./kamba";
export { TAITA_PROVERBS } from "./taita";
export { TAVETA_PROVERBS } from "./taveta";
export { SWAHILI_PROVERBS } from "./swahili";
export { TURKANA_PROVERBS } from "./turkana";
export { ILCHAMUS_PROVERBS } from "./ilchamus";
export { LUHYA_PROVERBS } from "./luhya";
export { KISII_PROVERBS } from "./kisii";
export { TESO_PROVERBS } from "./teso";
export { MERU_PROVERBS } from "./meru";
export { SOMALI_PROVERBS } from "./somali";
export { BORANA_PROVERBS } from "./borana";
export { KIKUYU_PROVERBS } from "./kikuyu";
export { LUO_PROVERBS } from "./luo";
export { POKOMO_PROVERBS } from "./pokomo";
export { EMBU_PROVERBS } from "./embu";
export { SAMBURU_PROVERBS } from "./samburu";
export { RENDILLE_PROVERBS } from "./rendille";
export { DAASANACH_PROVERBS } from "./daasanach";

// ============================================================
// Aggregated Kenyan Proverbs & Cultural Wisdom Corpus
// ============================================================

export const KENYAN_PROVERBS: ProverbItem[] = [
  ...MAASAI_PROVERBS,
  ...KALENJIN_PROVERBS,
  ...POKOT_PROVERBS,
  ...MIJIKENDA_PROVERBS,
  ...KAMBA_PROVERBS,
  ...TAITA_PROVERBS,
  ...TAVETA_PROVERBS,
  ...SWAHILI_PROVERBS,
  ...TURKANA_PROVERBS,
  ...ILCHAMUS_PROVERBS,
  ...LUHYA_PROVERBS,
  ...KISII_PROVERBS,
  ...TESO_PROVERBS,
  ...MERU_PROVERBS,
  ...SOMALI_PROVERBS,
  ...BORANA_PROVERBS,
  ...KIKUYU_PROVERBS,
  ...LUO_PROVERBS,
  ...POKOMO_PROVERBS,
  ...EMBU_PROVERBS,
  ...SAMBURU_PROVERBS,
  ...RENDILLE_PROVERBS,
  ...DAASANACH_PROVERBS,
];

export const CULTURAL_WISDOM: CulturalWisdomItem[] = KENYAN_PROVERBS.map((item) => ({
  id: item.id,
  languageId: item.languageId,
  nativeText: item.indigenous,
  literalTranslation: item.literalTranslation,
  meaning: item.meaning,
  englishEquivalent: item.englishEquivalent,
  category: item.theme,
  source: item.sourceCitation,
}));

const CULTURAL_WISDOM_BY_LANG_CACHE = new Map<string, CulturalWisdomItem[]>();

export function getCulturalWisdomForLanguage(languageId: string): CulturalWisdomItem[] {
  const id = languageId.toLowerCase().trim();
  const cached = CULTURAL_WISDOM_BY_LANG_CACHE.get(id);
  if (cached) return cached;

  const filtered: CulturalWisdomItem[] = [];
  for (let i = 0; i < CULTURAL_WISDOM.length; i++) {
    const item = CULTURAL_WISDOM[i];
    if (item.languageId === id) {
      filtered.push(item);
    }
  }
  CULTURAL_WISDOM_BY_LANG_CACHE.set(id, filtered);
  return filtered;
}
