import type { CulturalWisdomItem, Proverb, ProverbItem } from "../../shared/data/courses/proverbs/types";

const normalizeProverbs = (proverbs: Proverb[]): ProverbItem[] =>
  proverbs.map((proverb) => ({
    id: proverb.id,
    languageId: proverb.languageCode,
    languageName: proverb.languageName,
    indigenous: proverb.indigenous,
    literalTranslation: proverb.literalTranslation,
    meaning: proverb.meaning,
    theme: proverb.category as ProverbItem["theme"],
    sourceCitation: proverb.culturalNote,
  }));

const PROVERBS_CACHE = new Map<string, ProverbItem[]>();
const CULTURAL_WISDOM_CACHE = new Map<string, CulturalWisdomItem[]>();

export function getProverbsForLanguageLazy(langId: string): ProverbItem[] {
  const id = (langId || "").toLowerCase().trim();
  const cached = PROVERBS_CACHE.get(id);
  if (cached) return cached;

  let items: ProverbItem[] = [];
  switch (id) {
    case "swahili":
      items = require("../../shared/data/courses/proverbs/swahili").SWAHILI_PROVERBS;
      break;
    case "maasai":
      items = require("../../shared/data/courses/proverbs/maasai").MAASAI_PROVERBS;
      break;
    case "kalenjin":
      items = require("../../shared/data/courses/proverbs/kalenjin").KALENJIN_PROVERBS;
      break;
    case "pokot":
      items = require("../../shared/data/courses/proverbs/pokot").POKOT_PROVERBS;
      break;
    case "mijikenda":
      items = require("../../shared/data/courses/proverbs/mijikenda").MIJIKENDA_PROVERBS;
      break;
    case "kamba":
      items = require("../../shared/data/courses/proverbs/kamba").KAMBA_PROVERBS;
      break;
    case "taita":
      items = require("../../shared/data/courses/proverbs/taita").TAITA_PROVERBS;
      break;
    case "taveta":
      items = require("../../shared/data/courses/proverbs/taveta").TAVETA_PROVERBS;
      break;
    case "turkana":
      items = normalizeProverbs(
        require("../../shared/data/courses/proverbs/turkana").TURKANA_PROVERBS
      );
      break;
    case "ilchamus":
      items = normalizeProverbs(
        require("../../shared/data/courses/proverbs/ilchamus").ILCHAMUS_PROVERBS
      );
      break;
    case "luhya":
      items = require("../../shared/data/courses/proverbs/luhya").LUHYA_PROVERBS;
      break;
    case "kisii":
      items = require("../../shared/data/courses/proverbs/kisii").KISII_PROVERBS;
      break;
    case "teso":
      items = normalizeProverbs(
        require("../../shared/data/courses/proverbs/teso").TESO_PROVERBS
      );
      break;
    case "meru":
      items = require("../../shared/data/courses/proverbs/meru").MERU_PROVERBS;
      break;
    case "somali":
      items = require("../../shared/data/courses/proverbs/somali").SOMALI_PROVERBS;
      break;
    case "borana":
      items = require("../../shared/data/courses/proverbs/borana").BORANA_PROVERBS;
      break;
    case "kikuyu":
      items = require("../../shared/data/courses/proverbs/kikuyu").KIKUYU_PROVERBS;
      break;
    case "luo":
      items = require("../../shared/data/courses/proverbs/luo").LUO_PROVERBS;
      break;
    case "pokomo":
      items = require("../../shared/data/courses/proverbs/pokomo").POKOMO_PROVERBS;
      break;
    case "embu":
      items = require("../../shared/data/courses/proverbs/embu").EMBU_PROVERBS;
      break;
    case "samburu":
      items = normalizeProverbs(
        require("../../shared/data/courses/proverbs/samburu").SAMBURU_PROVERBS
      );
      break;
    case "rendille":
      items = require("../../shared/data/courses/proverbs/rendille").RENDILLE_PROVERBS;
      break;
    case "daasanach":
      items = require("../../shared/data/courses/proverbs/daasanach").DAASANACH_PROVERBS;
      break;
    default:
      items = [];
      break;
  }

  PROVERBS_CACHE.set(id, items);
  return items;
}

export function getCulturalWisdomForLanguageLazy(langId: string): CulturalWisdomItem[] {
  const id = (langId || "").toLowerCase().trim();
  const cached = CULTURAL_WISDOM_CACHE.get(id);
  if (cached) return cached;

  const items = getProverbsForLanguageLazy(id).map((item) => ({
    id: item.id,
    languageId: item.languageId,
    nativeText: item.indigenous,
    literalTranslation: item.literalTranslation,
    meaning: item.meaning,
    englishEquivalent: item.englishEquivalent,
    category: item.theme,
    source: item.sourceCitation,
  }));

  CULTURAL_WISDOM_CACHE.set(id, items);
  return items;
}
