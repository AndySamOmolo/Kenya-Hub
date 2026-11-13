import type { Dictionary } from "../../shared/data/language-sources";

export const CATEGORY_PAGE_SIZE = 40;
export const SEARCH_PAGE_SIZE = 40;

const DICT_LOADERS: Record<string, () => Promise<{ default: any }>> = {
  swahili: () => import("../../shared/data/dictionaries/swahili.json"),
  kikuyu: () => import("../../shared/data/dictionaries/kikuyu.json"),
  luo: () => import("../../shared/data/dictionaries/luo.json"),
  kalenjin: () => import("../../shared/data/dictionaries/kalenjin.json"),
  luhya: () => import("../../shared/data/dictionaries/luhya.json"),
  kamba: () => import("../../shared/data/dictionaries/kamba.json"),
  meru: () => import("../../shared/data/dictionaries/meru.json"),
  maasai: () => import("../../shared/data/dictionaries/maasai.json"),
  kisii: () => import("../../shared/data/dictionaries/kisii.json"),
  somali: () => import("../../shared/data/dictionaries/somali.json"),
  turkana: () => import("../../shared/data/dictionaries/turkana.json"),
  mijikenda: () => import("../../shared/data/dictionaries/mijikenda.json"),
  teso: () => import("../../shared/data/dictionaries/teso.json"),
  embu: () => import("../../shared/data/dictionaries/embu.json"),
  taita: () => import("../../shared/data/dictionaries/taita.json"),
  samburu: () => import("../../shared/data/dictionaries/samburu.json"),
  borana: () => import("../../shared/data/dictionaries/borana.json"),
  rendille: () => import("../../shared/data/dictionaries/rendille.json"),
  pokomo: () => import("../../shared/data/dictionaries/pokomo.json"),
  ilchamus: () => import("../../shared/data/dictionaries/ilchamus.json"),
  pokot: () => import("../../shared/data/dictionaries/pokot.json"),
  taveta: () => import("../../shared/data/dictionaries/taveta.json"),
  daasanach: () => import("../../shared/data/dictionaries/daasanach.json"),
};

export const LOADED_DICTS_CACHE: Record<string, Dictionary> = {};
const INFLIGHT_LOADS: Record<string, Promise<Dictionary | null>> = {};

export async function loadDictionary(langId: string): Promise<Dictionary | null> {
  if (LOADED_DICTS_CACHE[langId]) return LOADED_DICTS_CACHE[langId];
  if (langId in INFLIGHT_LOADS) return INFLIGHT_LOADS[langId];
  const loader = DICT_LOADERS[langId];
  if (!loader) return null;
  const p = loader()
    .then((mod) => {
      const d = (mod.default || mod) as Dictionary;
      LOADED_DICTS_CACHE[langId] = d;
      delete INFLIGHT_LOADS[langId];
      return d;
    })
    .catch(() => {
      delete INFLIGHT_LOADS[langId];
      return null;
    });
  INFLIGHT_LOADS[langId] = p;
  return p;
}
