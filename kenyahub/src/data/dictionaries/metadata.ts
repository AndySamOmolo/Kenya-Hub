// ============================================================
// Dictionary Metadata Barrel Module
// Split into modular files for clean auditing and editing:
// - ./types.ts: Dictionary & entry interfaces
// - ./catalog.ts: ALL_DICT_METAS, DICT_META_MAP, ALL_CATEGORY_IDS, TOTAL_DICTIONARY_ENTRIES
// - ./random-words.ts: INITIAL_RANDOM_WORDS
// - ./lexical-highlights.ts: Historical lexical highlights
// ============================================================

export type {
  DictEntry,
  DictCategory,
  Dictionary,
  DictCategoryMeta,
  DictMeta,
} from "./types";

export {
  ALL_DICT_METAS,
  DICT_META_MAP,
  ALL_CATEGORY_IDS,
  TOTAL_DICTIONARY_ENTRIES,
} from "./catalog";

export { INITIAL_RANDOM_WORDS } from "./random-words";

export {
  NORTHCOTE_1907_LEXICAL_HIGHLIGHTS,
  BEECH_1911_LEXICAL_HIGHLIGHTS,
  HOLLIS_1909_LEXICAL_HIGHLIGHTS,
} from "./lexical-highlights";
