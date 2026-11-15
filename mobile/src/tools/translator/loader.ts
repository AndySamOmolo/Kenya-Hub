import type { Dictionary } from "../../shared/data/language-sources";
import { ALL_DICT_METAS } from "../../shared/data/language-sources";
import {
  invalidateDictIndex,
  runTranslatorSearch,
  type TranslationResultItem,
} from "../../shared/lib/dictionary-search";

// Reduced page sizes for smooth 60fps scrolling on budget Android devices (UX-10)
export const CATEGORY_PAGE_SIZE = 25;
export const SEARCH_PAGE_SIZE = 25;

// Cap in-memory dictionaries to prevent 87 MB OOM crashes on 2-3 GB RAM devices (MOB-1)
export const MAX_CACHED_DICTS = 6;

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
const LRU_ORDER: string[] = [];
const INFLIGHT_LOADS: Record<string, Promise<Dictionary | null>> = {};

function touchLru(langId: string, pinnedIds: Set<string> = new Set(["swahili"])) {
  const idx = LRU_ORDER.indexOf(langId);
  if (idx !== -1) {
    LRU_ORDER.splice(idx, 1);
  }
  LRU_ORDER.push(langId);

  while (LRU_ORDER.length > MAX_CACHED_DICTS) {
    const candidateIdx = LRU_ORDER.findIndex((id) => !pinnedIds.has(id));
    if (candidateIdx === -1) break;
    const evictedId = LRU_ORDER.splice(candidateIdx, 1)[0];
    const evictedDict = LOADED_DICTS_CACHE[evictedId];
    if (evictedDict) {
      invalidateDictIndex(evictedDict);
      delete LOADED_DICTS_CACHE[evictedId];
    }
  }
}

export async function loadDictionary(
  langId: string,
  options?: { retainInCache?: boolean; pinnedIds?: Set<string> }
): Promise<Dictionary | null> {
  const retainInCache = options?.retainInCache ?? true;
  if (LOADED_DICTS_CACHE[langId]) {
    if (retainInCache) {
      touchLru(langId, options?.pinnedIds);
    }
    return LOADED_DICTS_CACHE[langId];
  }
  if (langId in INFLIGHT_LOADS) return INFLIGHT_LOADS[langId];
  const loader = DICT_LOADERS[langId];
  if (!loader) return null;
  const p = loader()
    .then((mod) => {
      const d = (mod.default || mod) as Dictionary;
      if (retainInCache) {
        LOADED_DICTS_CACHE[langId] = d;
        touchLru(langId, options?.pinnedIds);
      }
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

// Lightweight LRU cache for cross-language ("All 23 Languages") query results
const ALL_LANG_SEARCH_CACHE = new Map<string, TranslationResultItem[]>();
const MAX_QUERY_CACHE = 24;

/**
 * Executes a cross-language ("All 23 Languages") search in small batches of 3 dictionaries
 * without retaining all 23 multi-megabyte JSON objects in the JS heap (MOB-1).
 */
export async function searchAcrossAllDictionaries(params: {
  query: string;
  sourceLanguage: string;
  sourceDict: Dictionary | null;
  pinnedIds?: Set<string>;
  onProgress?: (partial: TranslationResultItem[]) => void;
  isCancelled?: () => boolean;
}): Promise<TranslationResultItem[]> {
  const { query, sourceLanguage, sourceDict, pinnedIds, onProgress, isCancelled } = params;
  const qNorm = query.trim().toLowerCase();
  if (!qNorm) return [];

  const cacheKey = `${sourceLanguage}::all::${qNorm}`;
  const cached = ALL_LANG_SEARCH_CACHE.get(cacheKey);
  if (cached) return cached;

  const aggregated: TranslationResultItem[] = [];
  const allIds = ALL_DICT_METAS.map((m) => m.languageId);
  const batchSize = 3;

  for (let i = 0; i < allIds.length; i += batchSize) {
    if (isCancelled?.()) return aggregated;
    const sliceIds = allIds.slice(i, i + batchSize);
    const batchDicts: Dictionary[] = [];

    for (const lid of sliceIds) {
      const alreadyCached = Boolean(LOADED_DICTS_CACHE[lid]);
      const dict = await loadDictionary(lid, {
        retainInCache: alreadyCached || Boolean(pinnedIds?.has(lid)),
        pinnedIds,
      });
      if (dict) batchDicts.push(dict);
    }

    if (isCancelled?.()) return aggregated;

    const { searchResults } = runTranslatorSearch({
      query,
      sourceLanguage,
      targetLanguage: "all",
      sourceDict,
      targetDict: null,
      activeDictList: batchDicts,
      maxSingleDictResults: 2,
    });

    for (const item of searchResults) {
      if (!aggregated.some((r) => r.languageId === item.languageId && r.entry.translation === item.entry.translation)) {
        aggregated.push(item);
      }
    }

    // Release temporary indices for uncached batch dictionaries so GC can reclaim memory immediately
    for (const d of batchDicts) {
      if (!LOADED_DICTS_CACHE[d.languageId]) {
        invalidateDictIndex(d);
      }
    }

    onProgress?.([...aggregated]);
  }

  aggregated.sort((a, b) => {
    if (Boolean(a.missingTarget) !== Boolean(b.missingTarget)) {
      return a.missingTarget ? 1 : -1;
    }
    return (a.matchType === "exact" ? -1 : 1) - (b.matchType === "exact" ? -1 : 1);
  });

  if (!isCancelled?.()) {
    if (ALL_LANG_SEARCH_CACHE.size >= MAX_QUERY_CACHE) {
      const oldestKey = ALL_LANG_SEARCH_CACHE.keys().next().value;
      if (oldestKey) ALL_LANG_SEARCH_CACHE.delete(oldestKey);
    }
    ALL_LANG_SEARCH_CACHE.set(cacheKey, aggregated);
  }

  return aggregated;
}
