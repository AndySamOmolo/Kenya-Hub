import type {
  DictCategory,
  DictEntry,
  Dictionary,
} from "@/data/dictionaries/metadata";

/**
 * Standard language family color palette used across web and mobile views.
 */
export const FAMILY_COLORS: Record<string, string> = {
  bantu: "#2FA463",
  nilotic: "#C8961E",
  cushitic: "#BE2126",
  other: "#1A8BD1",
};

/**
 * Curated list of core comparison headwords available across all 22 Kenyan dictionaries.
 */
export const POPULAR_COMPARE_WORDS: string[] = [
  "Water",
  "Hello",
  "Thank you",
  "Father",
  "Mother",
  "Food",
  "God",
  "Cow",
  "One",
  "Two",
  "Friend",
  "Sun",
  "Fire",
  "House",
];

/**
 * Normalizes an English or indigenous headword into clean, comparable lookup tokens
 * so English can serve as an accurate bridge between any two Kenyan languages.
 */
export function extractNormalizedTerms(raw: string): string[] {
  const cleaned = raw
    .toLowerCase()
    .replace(/^\[[^\]]*\]\s*/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[!?.]/g, "")
    .trim();
  const baseHead = cleaned.split(/\s*[—–:|•]\s*/)[0].trim();
  const parts = cleaned
    .split(/[\/,;—–:|•]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const out = new Set<string>();
  const addVariant = (v: string) => {
    if (!v) return;
    out.add(v);
    const nfd = v.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nfd) out.add(nfd);
    const noApostrophe = nfd.replace(/['’‘ʻ]/g, "");
    if (noApostrophe && noApostrophe.length >= 2) out.add(noApostrophe);
    if (v.startsWith("to ")) {
      const bare = v.slice(3).trim();
      addVariant(bare);
    }
    if (v.startsWith("-")) {
      const bare = v.slice(1).trim();
      if (bare.length >= 2) addVariant(bare);
    }
  };

  addVariant(cleaned);
  addVariant(baseHead);
  for (const p of parts) addVariant(p);
  return Array.from(out);
}

export interface IndexedDictEntry {
  entry: DictEntry;
  cat: DictCategory;
  engLower: string;
  transLower: string;
  engTerms: string[];
  transTerms: string[];
}

export interface DictSearchIndex {
  all: IndexedDictEntry[];
  byEngTerm: Map<string, IndexedDictEntry[]>;
  byTransTerm: Map<string, IndexedDictEntry[]>;
}

const DICT_INDEX_CACHE = new WeakMap<Dictionary, DictSearchIndex>();

/**
 * Returns a WeakMap-memoized O(1) lookup index for a loaded dictionary.
 */
export function getDictIndex(dict: Dictionary): DictSearchIndex {
  const cached = DICT_INDEX_CACHE.get(dict);
  if (cached) return cached;

  const all: IndexedDictEntry[] = [];
  const byEngTerm = new Map<string, IndexedDictEntry[]>();
  const byTransTerm = new Map<string, IndexedDictEntry[]>();

  for (const cat of dict.categories) {
    for (const entry of cat.entries) {
      const engLower = entry.english.toLowerCase().trim();
      const transLower = entry.translation.toLowerCase().trim();
      const engTerms = extractNormalizedTerms(entry.english);
      const transTerms = extractNormalizedTerms(entry.translation);
      const item: IndexedDictEntry = {
        entry,
        cat,
        engLower,
        transLower,
        engTerms,
        transTerms,
      };
      all.push(item);

      for (const t of engTerms) {
        let bucket = byEngTerm.get(t);
        if (!bucket) {
          bucket = [];
          byEngTerm.set(t, bucket);
        }
        bucket.push(item);
      }
      for (const t of transTerms) {
        let bucket = byTransTerm.get(t);
        if (!bucket) {
          bucket = [];
          byTransTerm.set(t, bucket);
        }
        bucket.push(item);
      }
    }
  }

  const index: DictSearchIndex = { all, byEngTerm, byTransTerm };
  DICT_INDEX_CACHE.set(dict, index);
  return index;
}
