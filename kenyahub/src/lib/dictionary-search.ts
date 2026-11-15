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
 * Curated list of core comparison headwords available across all 23 Kenyan dictionaries.
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

export interface TranslationResultItem {
  entry: DictEntry;
  sourceEntry?: DictEntry;
  pivotEnglish?: string;
  categoryName: string;
  categoryIcon: string;
  languageId: string;
  languageName: string;
  family: string;
  matchType: "exact" | "partial";
  missingTarget?: boolean;
}

const BARE_QUALIFIER_STOPWORDS = new Set([
  "v",
  "n",
  "adj",
  "adv",
  "pl",
  "sg",
  "m",
  "f",
  "lit",
  "fig",
  "intr",
  "tr",
  "esp",
  "usu",
  "etc",
  "older",
  "younger",
  "elder",
  "maternal",
  "paternal",
  "male",
  "female",
  "general",
  "specific",
  "small",
  "large",
  "big",
  "little",
]);

/**
 * Normalizes Johnston 1902/1919 phonetic characters and strips archival ditto marks.
 */
export function normalizePhoneticLookup(raw: string): string {
  return raw
    .replace(/„/g, " ")
    .replace(/[ωΩ]/g, "o")
    .replace(/ñ/gi, "ng")
    .replace(/ṅ/gi, "ng");
}

/**
 * Normalizes an English or indigenous headword into clean, comparable lookup tokens
 * so English can serve as an accurate bridge between any two Kenyan languages.
 */
export function extractNormalizedTerms(raw: string): string[] {
  const cleaned = normalizePhoneticLookup(raw)
    .toLowerCase()
    .replace(/^\[[^\]]*\]\s*/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\bpl\.?\s+[^,;\/]+/gi, "")
    .replace(/[!?.]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const baseHead = cleaned.split(/\s*[—–:|•]\s*/)[0].trim();

  // Split primary slash/semicolon/pipe segments first, then carefully handle commas
  const majorSegments = cleaned
    .split(/[\/;—–:|•]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const parts: string[] = [];
  for (const seg of majorSegments) {
    if (!seg.includes(",")) {
      parts.push(seg);
      continue;
    }
    const commaParts = seg
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (commaParts.length === 2 && BARE_QUALIFIER_STOPWORDS.has(commaParts[1])) {
      // e.g. "brother, older" -> index "brother, older", "older brother", and "brother", NOT "older"
      parts.push(seg);
      parts.push(`${commaParts[1]} ${commaParts[0]}`);
      parts.push(commaParts[0]);
    } else {
      for (let i = 0; i < commaParts.length; i++) {
        const cp = commaParts[i];
        if (i > 0 && BARE_QUALIFIER_STOPWORDS.has(cp)) continue;
        parts.push(cp);
      }
    }
  }

  const out = new Set<string>();
  const addVariant = (v: string) => {
    const trimmed = v.trim();
    if (!trimmed) return;
    out.add(trimmed);
    const nfd = trimmed.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nfd) out.add(nfd);
    const noApostrophe = nfd.replace(/['’‘ʻ]/g, "");
    if (noApostrophe && noApostrophe.length >= 2) out.add(noApostrophe);
    if (trimmed.startsWith("to ")) {
      const bare = trimmed.slice(3).trim();
      if (bare && !BARE_QUALIFIER_STOPWORDS.has(bare)) addVariant(bare);
    }
    if (trimmed.startsWith("the ")) {
      const bare = trimmed.slice(4).trim();
      if (bare.length >= 2 && !BARE_QUALIFIER_STOPWORDS.has(bare)) addVariant(bare);
    }
    if (trimmed.startsWith("a ")) {
      const bare = trimmed.slice(2).trim();
      if (bare.length >= 2 && !BARE_QUALIFIER_STOPWORDS.has(bare)) addVariant(bare);
    }
    if (trimmed.startsWith("-")) {
      const bare = trimmed.slice(1).trim();
      if (bare.length >= 2 && !BARE_QUALIFIER_STOPWORDS.has(bare)) addVariant(bare);
    }
  };

  addVariant(cleaned);
  addVariant(baseHead);
  for (const p of parts) addVariant(p);
  return Array.from(out);
}

const INDIGENOUS_PREFIXES = [
  "kũ",
  "ku",
  "kw",
  "mũ",
  "mu",
  "mi",
  "kĩ",
  "ki",
  "vi",
  "ol",
  "en",
  "em",
  "in",
];

/**
 * Extracts normalized lookup terms for an indigenous translation field, including
 * morphological root stems (stripping common Bantu/Nilotic infinitive and noun-class prefixes).
 */
export function extractIndigenousTerms(raw: string): string[] {
  const baseTerms = extractNormalizedTerms(raw);
  const out = new Set<string>(baseTerms);
  for (const term of baseTerms) {
    if (term.includes(" ") || term.length < 5) continue;
    for (const prefix of INDIGENOUS_PREFIXES) {
      if (term.startsWith(`${prefix}-`) && term.length - prefix.length - 1 >= 3) {
        out.add(term.slice(prefix.length + 1));
      } else if (term.startsWith(prefix) && term.length - prefix.length >= 3) {
        out.add(term.slice(prefix.length));
      }
    }
  }
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

let DICT_INDEX_CACHE = new WeakMap<Dictionary, DictSearchIndex>();

export function invalidateDictIndex(dict?: Dictionary): void {
  if (dict) {
    DICT_INDEX_CACHE.delete(dict);
  } else {
    DICT_INDEX_CACHE = new WeakMap<Dictionary, DictSearchIndex>();
  }
}

/**
 * Returns a WeakMap-memoized O(1) lookup index for a loaded dictionary,
 * with exact buckets sorted by headword conciseness so primary headwords rank first.
 */
export function getDictIndex(dict: Dictionary): DictSearchIndex {
  const cached = DICT_INDEX_CACHE.get(dict);
  if (cached) return cached;

  const all: IndexedDictEntry[] = [];
  const byEngTerm = new Map<string, IndexedDictEntry[]>();
  const byTransTerm = new Map<string, IndexedDictEntry[]>();

  for (const cat of dict.categories) {
    for (const entry of cat.entries) {
      const engLower = normalizePhoneticLookup(entry.english).toLowerCase().trim();
      const transLower = normalizePhoneticLookup(entry.translation).toLowerCase().trim();
      const engTerms = extractNormalizedTerms(entry.english);
      const transTerms = extractIndigenousTerms(entry.translation);
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

  for (const [term, bucket] of byEngTerm.entries()) {
    bucket.sort((a, b) => {
      const aExact = a.engLower === term ? 0 : 1;
      const bExact = b.engLower === term ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      return a.entry.english.length - b.entry.english.length;
    });
  }

  for (const [term, bucket] of byTransTerm.entries()) {
    bucket.sort((a, b) => {
      const aExact = a.transLower === term ? 0 : 1;
      const bExact = b.transLower === term ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      return a.entry.translation.length - b.entry.translation.length;
    });
  }

  const index: DictSearchIndex = { all, byEngTerm, byTransTerm };
  DICT_INDEX_CACHE.set(dict, index);
  return index;
}

/**
 * Standard Levenshtein edit distance for fuzzy "Did you mean?" suggestions.
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

/**
 * Two-pass dictionary lookup by English pivot terms:
 * 1. O(1) exact normalized headword bucket match
 * 2. Pass 1 partial: word-boundary regex match (so "cat" matches "wild cat" before "cattle")
 * 3. Pass 2 partial: substring fallback for pivot tokens >= 4 chars
 */
export function findInDictByEnglishPivots(
  dict: Dictionary,
  pivots: string[],
  sourceMatch?: DictEntry,
  maxResults = 120
): TranslationResultItem[] {
  const idx = getDictIndex(dict);
  const exactMatches: TranslationResultItem[] = [];
  const partialMatches: TranslationResultItem[] = [];
  const seen = new Set<DictEntry>();

  for (const pw of pivots) {
    const bucket = idx.byEngTerm.get(pw);
    if (bucket) {
      for (const item of bucket) {
        if (seen.has(item.entry)) continue;
        seen.add(item.entry);
        exactMatches.push({
          entry: item.entry,
          sourceEntry: sourceMatch,
          pivotEnglish: sourceMatch ? sourceMatch.english : item.entry.english,
          categoryName: item.cat.name,
          categoryIcon: item.cat.icon || "📖",
          languageId: dict.languageId,
          languageName: dict.languageName,
          family: dict.family,
          matchType: "exact",
        });
      }
    }
  }

  if (exactMatches.length < maxResults) {
    const longPivots = pivots.filter((pw) => pw.length >= 3);
    if (longPivots.length > 0) {
      const wordBoundaryRegexes = longPivots.map(
        (pw) => new RegExp(`\\b${pw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i")
      );
      // Pass 1: word-boundary matches
      for (const item of idx.all) {
        if (seen.has(item.entry)) continue;
        if (wordBoundaryRegexes.some((rx) => rx.test(item.engLower))) {
          seen.add(item.entry);
          partialMatches.push({
            entry: item.entry,
            sourceEntry: sourceMatch,
            pivotEnglish: sourceMatch ? sourceMatch.english : item.entry.english,
            categoryName: item.cat.name,
            categoryIcon: item.cat.icon || "📖",
            languageId: dict.languageId,
            languageName: dict.languageName,
            family: dict.family,
            matchType: "partial",
          });
          if (exactMatches.length + partialMatches.length >= maxResults) break;
        }
      }
      // Pass 2: substring fallback for 4+ char queries
      if (exactMatches.length + partialMatches.length < maxResults) {
        for (const item of idx.all) {
          if (seen.has(item.entry)) continue;
          if (
            longPivots.some(
              (pw) =>
                pw.length >= 4 &&
                (item.engLower.includes(pw) || item.engTerms.some((et) => et.includes(pw)))
            )
          ) {
            seen.add(item.entry);
            partialMatches.push({
              entry: item.entry,
              sourceEntry: sourceMatch,
              pivotEnglish: sourceMatch ? sourceMatch.english : item.entry.english,
              categoryName: item.cat.name,
              categoryIcon: item.cat.icon || "📖",
              languageId: dict.languageId,
              languageName: dict.languageName,
              family: dict.family,
              matchType: "partial",
            });
            if (exactMatches.length + partialMatches.length >= maxResults) break;
          }
        }
      }
    }
  }

  return [...exactMatches, ...partialMatches];
}

/**
 * Shared translator search & bidirectional multi-word phrase synthesis engine
 * used across both Web (`kenyan-translator/page.tsx`) and Mobile (`KenyanTranslatorTool.tsx`).
 */
export function runTranslatorSearch(params: {
  query: string;
  sourceLanguage: string;
  targetLanguage: string;
  sourceDict: Dictionary | null;
  targetDict: Dictionary | null;
  activeDictList: Dictionary[];
  maxSingleDictResults?: number;
}): {
  searchResults: TranslationResultItem[];
  detectedPivotWords: string[];
} {
  const {
    query,
    sourceLanguage,
    targetLanguage,
    sourceDict,
    targetDict,
    activeDictList,
    maxSingleDictResults = 150,
  } = params;

  if (!query.trim()) {
    return { searchResults: [], detectedPivotWords: [] };
  }

  const q = normalizePhoneticLookup(query).toLowerCase().trim();
  const qClean = extractNormalizedTerms(q)[0] || q;
  const results: TranslationResultItem[] = [];
  const pivotWordsSet = new Set<string>();

  if (sourceLanguage === "english") {
    const pivots = extractNormalizedTerms(q);
    if (targetLanguage === "all" || targetLanguage === "english") {
      for (const dict of activeDictList) {
        const matches = findInDictByEnglishPivots(dict, pivots, undefined, 1);
        if (matches.length > 0) {
          results.push(matches[0]);
        }
      }
    } else if (targetDict) {
      results.push(...findInDictByEnglishPivots(targetDict, pivots, undefined, maxSingleDictResults));
    }
  } else if (sourceDict) {
    const sourceIdx = getDictIndex(sourceDict);
    const exactSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];
    const partialSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];
    const seenSource = new Set<DictEntry>();

    const transTerms = extractIndigenousTerms(q);
    for (const tt of transTerms) {
      const transBucket = sourceIdx.byTransTerm.get(tt);
      if (transBucket) {
        for (const item of transBucket) {
          if (seenSource.has(item.entry)) continue;
          seenSource.add(item.entry);
          exactSourceMatches.push({ entry: item.entry, cat: item.cat });
        }
      }
    }

    const qBoundaryRx =
      qClean.length >= 3
        ? new RegExp(`\\b${qClean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i")
        : null;

    for (const item of sourceIdx.all) {
      if (seenSource.has(item.entry)) continue;
      if (item.transLower === q) {
        seenSource.add(item.entry);
        exactSourceMatches.push({ entry: item.entry, cat: item.cat });
      } else if (qBoundaryRx && qBoundaryRx.test(item.transLower)) {
        seenSource.add(item.entry);
        partialSourceMatches.push({ entry: item.entry, cat: item.cat });
        if (partialSourceMatches.length >= 60) break;
      }
    }

    if (partialSourceMatches.length < 60 && qClean.length >= 4) {
      for (const item of sourceIdx.all) {
        if (seenSource.has(item.entry)) continue;
        if (item.transLower.includes(q) || item.transTerms.some((t) => t.includes(qClean))) {
          seenSource.add(item.entry);
          partialSourceMatches.push({ entry: item.entry, cat: item.cat });
          if (partialSourceMatches.length >= 60) break;
        }
      }
    }

    // Fallback: if user typed an English word while a Kenyan language was selected as "From"
    if (exactSourceMatches.length === 0 && partialSourceMatches.length === 0) {
      const engBucket = sourceIdx.byEngTerm.get(qClean);
      if (engBucket) {
        for (const item of engBucket) {
          seenSource.add(item.entry);
          exactSourceMatches.push({ entry: item.entry, cat: item.cat });
        }
      }
      if (exactSourceMatches.length === 0) {
        for (const item of sourceIdx.all) {
          if (qBoundaryRx ? qBoundaryRx.test(item.engLower) : item.engLower.includes(q)) {
            partialSourceMatches.push({ entry: item.entry, cat: item.cat });
            if (partialSourceMatches.length >= 60) break;
          }
        }
      }
    }

    const combinedSource = [...exactSourceMatches, ...partialSourceMatches];
    const exactSet = new Set(exactSourceMatches);

    if (targetLanguage === "english" || targetLanguage === sourceLanguage) {
      for (const sm of combinedSource) {
        results.push({
          entry: sm.entry,
          categoryName: sm.cat.name,
          categoryIcon: sm.cat.icon || "📖",
          languageId: sourceDict.languageId,
          languageName: sourceDict.languageName,
          family: sourceDict.family,
          matchType: exactSet.has(sm) ? "exact" : "partial",
        });
      }
    } else if (targetLanguage === "all") {
      const primarySources =
        exactSourceMatches.length > 0
          ? exactSourceMatches.slice(0, 3)
          : partialSourceMatches.slice(0, 3);
      const allPivots: string[] = [];
      for (const sm of primarySources) {
        for (const pw of extractNormalizedTerms(sm.entry.english)) {
          pivotWordsSet.add(pw);
          if (!allPivots.includes(pw)) allPivots.push(pw);
        }
      }

      if (primarySources.length > 0) {
        const bestSource = primarySources[0].entry;
        for (const dict of activeDictList) {
          if (dict.languageId === sourceDict.languageId) continue;
          const dictMatches = findInDictByEnglishPivots(dict, allPivots, bestSource, 1);
          if (dictMatches.length > 0) {
            results.push(dictMatches[0]);
          }
        }
      }
    } else if (targetDict) {
      const primarySources =
        exactSourceMatches.length > 0
          ? exactSourceMatches.slice(0, 5)
          : partialSourceMatches.slice(0, 5);
      const seenTargetKeys = new Set<string>();

      for (const sm of primarySources) {
        const pivots = extractNormalizedTerms(sm.entry.english);
        pivots.forEach((pw) => pivotWordsSet.add(pw));
        const targetMatches = findInDictByEnglishPivots(targetDict, pivots, sm.entry, 40);

        if (targetMatches.length > 0) {
          for (const tm of targetMatches) {
            const key = `${tm.entry.english}::${tm.entry.translation}`;
            if (!seenTargetKeys.has(key)) {
              seenTargetKeys.add(key);
              results.push(tm);
            }
          }
        } else {
          const key = `bridge::${sm.entry.english}`;
          if (!seenTargetKeys.has(key)) {
            seenTargetKeys.add(key);
            results.push({
              entry: sm.entry,
              sourceEntry: sm.entry,
              pivotEnglish: sm.entry.english,
              categoryName: sm.cat.name,
              categoryIcon: sm.cat.icon || "📖",
              languageId: targetDict.languageId,
              languageName: targetDict.languageName,
              family: targetDict.family,
              matchType: "partial",
              missingTarget: true,
            });
          }
        }
      }
    }
  }

  // Bidirectional multi-word phrase / word-by-word synthesis
  // Retains 1-character words like "i" and "a" while ignoring filler articles "the", "an", "please"
  const wordTokens = q
    .replace(/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF'\s-]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 1 && !["the", "an", "please"].includes(w));

  if (wordTokens.length >= 2) {
    if (sourceLanguage === "english") {
      const synthesizeForDict = (dict: Dictionary): TranslationResultItem | null => {
        const translatedParts: string[] = [];
        const pronParts: string[] = [];
        let matchedCount = 0;
        for (const tok of wordTokens) {
          const tokMatches = findInDictByEnglishPivots(dict, extractNormalizedTerms(tok), undefined, 1);
          const exact = tokMatches.find((m) => m.matchType === "exact") || tokMatches[0];
          if (exact) {
            matchedCount++;
            const cleanT = exact.entry.translation.split(/[\/;(]/)[0].trim();
            translatedParts.push(cleanT);
            if (exact.entry.pronunciation) {
              pronParts.push(exact.entry.pronunciation.split("/")[0].trim());
            }
          }
        }
        if (matchedCount >= 2) {
          return {
            entry: {
              english: query.trim(),
              translation: translatedParts.join(" + "),
              pronunciation: pronParts.join(" · "),
              context: `Word-by-word synthesis (${matchedCount}/${wordTokens.length} words matched in ${dict.languageName})`,
            },
            categoryName: "Word-by-Word Phrase Bridge",
            categoryIcon: "🔗",
            languageId: dict.languageId,
            languageName: dict.languageName,
            family: dict.family,
            matchType: matchedCount === wordTokens.length ? "exact" : "partial",
          };
        }
        return null;
      };

      if (targetLanguage === "all") {
        for (const dict of activeDictList) {
          if (!results.some((r) => r.languageId === dict.languageId && r.matchType === "exact")) {
            const syn = synthesizeForDict(dict);
            if (syn) results.push(syn);
          }
        }
      } else if (targetDict && !results.some((r) => r.matchType === "exact")) {
        const syn = synthesizeForDict(targetDict);
        if (syn) results.unshift(syn);
        for (const tok of wordTokens) {
          const tokMatches = findInDictByEnglishPivots(targetDict, extractNormalizedTerms(tok), undefined, 1);
          if (tokMatches.length > 0) results.push(tokMatches[0]);
        }
      }
    } else if (sourceDict && !results.some((r) => r.matchType === "exact")) {
      // Indigenous source multi-word phrase synthesis (Source Kenyan Language -> English or Target Kenyan Language)
      const sourceIdx = getDictIndex(sourceDict);
      const englishPivotTokens: { rawTok: string; engHead: string; sourceEntry: DictEntry }[] = [];

      for (const tok of wordTokens) {
        const tokTerms = extractIndigenousTerms(tok);
        let matchedEntry: DictEntry | undefined;
        for (const tt of tokTerms) {
          const bucket = sourceIdx.byTransTerm.get(tt);
          if (bucket && bucket.length > 0) {
            matchedEntry = bucket[0].entry;
            break;
          }
        }
        if (matchedEntry) {
          const cleanEng = matchedEntry.english
            .replace(/^\[[^\]]*\]\s*/g, "")
            .replace(/\s*\([^)]*\)/g, "")
            .split(/[\/,;—–:|•]/)[0]
            .trim();
          if (cleanEng) {
            englishPivotTokens.push({ rawTok: tok, engHead: cleanEng, sourceEntry: matchedEntry });
          }
        }
      }

      if (englishPivotTokens.length >= 2) {
        const synthesizedEnglish = englishPivotTokens.map((t) => t.engHead).join(" + ");
        if (targetLanguage === "english" || targetLanguage === sourceLanguage) {
          results.unshift({
            entry: {
              english: synthesizedEnglish,
              translation: query.trim(),
              pronunciation: "",
              context: `Word-by-word synthesis (${englishPivotTokens.length}/${wordTokens.length} words matched in ${sourceDict.languageName})`,
            },
            categoryName: "Word-by-Word Phrase Bridge",
            categoryIcon: "🔗",
            languageId: sourceDict.languageId,
            languageName: sourceDict.languageName,
            family: sourceDict.family,
            matchType: englishPivotTokens.length === wordTokens.length ? "exact" : "partial",
          });
        } else if (targetDict) {
          const targetParts: string[] = [];
          let targetMatched = 0;
          for (const pt of englishPivotTokens) {
            const tm = findInDictByEnglishPivots(targetDict, extractNormalizedTerms(pt.engHead), pt.sourceEntry, 1);
            if (tm.length > 0) {
              targetMatched++;
              targetParts.push(tm[0].entry.translation.split(/[\/;(]/)[0].trim());
            }
          }
          if (targetMatched >= 2) {
            results.unshift({
              entry: {
                english: synthesizedEnglish,
                translation: targetParts.join(" + "),
                pronunciation: "",
                context: `Word-by-word bridge (${sourceDict.languageName} → English → ${targetDict.languageName})`,
              },
              sourceEntry: {
                english: synthesizedEnglish,
                translation: query.trim(),
                pronunciation: "",
                context: "",
              },
              pivotEnglish: synthesizedEnglish,
              categoryName: "Word-by-Word Phrase Bridge",
              categoryIcon: "🔗",
              languageId: targetDict.languageId,
              languageName: targetDict.languageName,
              family: targetDict.family,
              matchType: targetMatched === wordTokens.length ? "exact" : "partial",
            });
          }
        }
      }
    }
  }

  results.sort((a, b) => {
    if (Boolean(a.missingTarget) !== Boolean(b.missingTarget)) {
      return a.missingTarget ? 1 : -1;
    }
    return (a.matchType === "exact" ? -1 : 1) - (b.matchType === "exact" ? -1 : 1);
  });

  return {
    searchResults: results,
    detectedPivotWords: Array.from(pivotWordsSet),
  };
}

/**
 * Computes fuzzy "Did you mean?" headword suggestions when a query returns 0 matches.
 */
export function getFuzzySuggestions(
  query: string,
  dicts: Dictionary[],
  sourceLanguage: string,
  maxSuggestions = 5
): string[] {
  const q = normalizePhoneticLookup(query).toLowerCase().trim();
  if (q.length < 3 || dicts.length === 0) return [];
  const maxDist = q.length >= 5 ? 2 : 1;
  const candidates = new Map<string, number>();

  for (const dict of dicts) {
    const idx = getDictIndex(dict);
    const termMap = sourceLanguage === "english" ? idx.byEngTerm : idx.byTransTerm;
    for (const [term, bucket] of termMap.entries()) {
      if (!term || term.includes(" ") !== q.includes(" ")) continue;
      if (Math.abs(term.length - q.length) > maxDist) continue;
      const dist = levenshteinDistance(q, term);
      if (dist > 0 && dist <= maxDist) {
        const display =
          sourceLanguage === "english"
            ? bucket[0]?.entry.english.split(/[\/;(]/)[0].trim() || term
            : bucket[0]?.entry.translation.split(/[\/;(]/)[0].trim() || term;
        const cleanDisplay = display.replace(/^\[[^\]]*\]\s*/g, "").trim();
        if (!cleanDisplay) continue;
        const prev = candidates.get(cleanDisplay);
        if (prev === undefined || dist < prev) {
          candidates.set(cleanDisplay, dist);
        }
      }
    }
    if (candidates.size >= 25) break;
  }

  return Array.from(candidates.entries())
    .sort((a, b) => a[1] - b[1] || a[0].length - b[0].length)
    .slice(0, maxSuggestions)
    .map(([word]) => word);
}
