import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { DynamicIcon } from "../components/DynamicIcon";
import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDynamicStyles, ThemeColors } from "../theme";

import { getLanguageIdentity } from "../shared/data/language-identity";
import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  TOTAL_DICTIONARY_ENTRIES,
  INITIAL_RANDOM_WORDS,
  type DictMeta,
  type DictEntry,
  type DictCategory,
  type Dictionary,
} from "../shared/data/language-sources";
import {
  FAMILY_COLORS,
  POPULAR_COMPARE_WORDS,
  extractNormalizedTerms,
  getDictIndex,
  type IndexedDictEntry,
} from "../shared/lib/dictionary-search";

import { CATEGORY_PAGE_SIZE, SEARCH_PAGE_SIZE, loadDictionary } from "./translator/loader";
import { createStyles } from "./translator/styles";

export function KenyanTranslatorTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);

  const [viewMode, setViewMode] = useState<"translate" | "browse">("translate");
  const [sourceLanguage, setSourceLanguage] = useState<string>("english");
  const [targetLanguage, setTargetLanguage] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("greetings");
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const didMountRef = useRef(false);



  useEffect(() => {
    setCategoryPage(1);
    setCategoryFilter("");
  }, [activeCategory, targetLanguage, sourceLanguage]);

  useEffect(() => {
    setSearchPage(1);
  }, [searchQuery, targetLanguage, sourceLanguage]);

  const [loadedDicts, setLoadedDicts] = useState<Record<string, Dictionary>>(
    () => ({ ...LOADED_DICTS_CACHE })
  );
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showSourcePicker, setShowSourcePicker] = useState(false);
  const [showTargetPicker, setShowTargetPicker] = useState(false);

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  // Random word of the day (instant from INITIAL_RANDOM_WORDS)
  const [randomWord, setRandomWord] = useState<{
    entry: DictEntry;
    langName: string;
    langId: string;
  } | null>(() => {
    if (INITIAL_RANDOM_WORDS.length === 0) return null;
    const item = INITIAL_RANDOM_WORDS[0];
    return {
      entry: item.entry,
      langName: item.langName,
      langId: item.langId,
    };
  });

  // Load required dictionaries on demand and progressively cache all 22 in idle background
  useEffect(() => {
    let cancelled = false;
    const needed = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") needed.add(sourceLanguage);
    if (targetLanguage !== "english" && targetLanguage !== "all") {
      needed.add(targetLanguage);
    }
    if (
      (searchQuery.trim().length > 0 && targetLanguage === "all")
    ) {
      ALL_DICT_METAS.forEach((m) => needed.add(m.languageId));
    }

    const missing = Array.from(needed).filter((id) => !LOADED_DICTS_CACHE[id]);
    if (missing.length > 0) {
      Promise.all(missing.map((id) => loadDictionary(id))).then(() => {
        if (!cancelled) setLoadedDicts({ ...LOADED_DICTS_CACHE });
      });
    }

    const timer = setTimeout(async () => {
      for (const meta of ALL_DICT_METAS) {
        if (cancelled) break;
        if (!LOADED_DICTS_CACHE[meta.languageId]) {
          await loadDictionary(meta.languageId);
        }
      }
      if (!cancelled) setLoadedDicts({ ...LOADED_DICTS_CACHE });
    }, 120);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [sourceLanguage, targetLanguage, viewMode, searchQuery]);

  // Contribute Modal
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [contribLang, setContribLang] = useState("Swahili");
  const [contribEnglish, setContribEnglish] = useState("");
  const [contribTranslation, setContribTranslation] = useState("");
  const [contribPronounce, setContribPronounce] = useState("");
  const [contribContext, setContribContext] = useState("");
  const [contribName, setContribName] = useState("");
  const [contribSubmitted, setContribSubmitted] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("kh-translator-recent").then((raw) => {
      if (raw) {
        try {
          setRecentSearches(JSON.parse(raw));
        } catch {}
      }
    });
    AsyncStorage.getItem("kh-translator-favs").then((raw) => {
      if (raw) {
        try {
          setFavorites(JSON.parse(raw));
        } catch {}
      }
    });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const addRecentSearch = useCallback((q: string) => {
    if (!q || q.length < 2) return;
    setRecentSearches((prev) => {
      const next = [q, ...prev.filter((s) => s.toLowerCase() !== q.toLowerCase())].slice(
        0,
        6
      );
      AsyncStorage.setItem("kh-translator-recent", JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleFavorite = (wordKey: string) => {
    setFavorites((prev) => {
      const next = prev.includes(wordKey)
        ? prev.filter((k) => k !== wordKey)
        : [...prev, wordKey];
      AsyncStorage.setItem("kh-translator-favs", JSON.stringify(next));
      showToast(
        next.includes(wordKey) ? "Saved to Favorites" : "Removed from Favorites"
      );
      return next;
    });
  };

  const loadedDictList = useMemo(
    () =>
      ALL_DICT_METAS.map((m) => loadedDicts[m.languageId]).filter(
        Boolean
      ) as Dictionary[],
    [loadedDicts]
  );

  const rollRandomWord = useCallback(() => {
    const populatedDicts = loadedDictList.filter((d) =>
      d.categories.some((c: any) => c.entries.length > 0)
    );
    if (populatedDicts.length > 0) {
      const dict =
        populatedDicts[Math.floor(Math.random() * populatedDicts.length)];
      const cleanPool = dict.categories
        .filter((c: any) => c.id !== "culture-history" && c.entries.length > 0)
        .flatMap((c: any) => c.entries)
        .filter(
          (e: any) =>
            e.english.length >= 2 &&
            e.english.length <= 32 &&
            e.translation.length >= 2 &&
            e.translation.length <= 36 &&
            !/[();:/[\]"„—]/.test(e.english) &&
            !/[();:[\]"„—]/.test(e.translation)
        );
      if (cleanPool.length > 0) {
        const entry = cleanPool[Math.floor(Math.random() * cleanPool.length)];
        setRandomWord({
          entry,
          langName: dict.languageName.split("(")[0].trim(),
          langId: dict.languageId,
        });
        return;
      }
    }
    if (INITIAL_RANDOM_WORDS.length > 0) {
      const pick =
        INITIAL_RANDOM_WORDS[
          Math.floor(Math.random() * INITIAL_RANDOM_WORDS.length)
        ];
      setRandomWord({
        entry: pick.entry,
        langName: pick.langName,
        langId: pick.langId,
      });
    }
  }, [loadedDictList]);

  useEffect(() => {
    rollRandomWord();
  }, [rollRandomWord]);

  // Swap languages
  const swapLanguages = () => {
    if (targetLanguage === "all") {
      setSourceLanguage("swahili");
      setTargetLanguage("english");
    } else {
      const prevSource = sourceLanguage;
      setSourceLanguage(targetLanguage);
      setTargetLanguage(prevSource);
    }
    setSearchQuery("");
  };

  const targetDict =
    targetLanguage !== "english" && targetLanguage !== "all"
      ? loadedDicts[targetLanguage] || null
      : null;
  const sourceDict =
    sourceLanguage !== "english" ? loadedDicts[sourceLanguage] || null : null;
  const browseDictId =
    targetLanguage !== "english" && targetLanguage !== "all"
      ? targetLanguage
      : sourceLanguage !== "english"
      ? sourceLanguage
      : "swahili";
  const browseDict = loadedDicts[browseDictId] || loadedDicts.swahili || null;
  const browseMeta: DictMeta =
    DICT_META_MAP[browseDictId] || DICT_META_MAP.swahili || ALL_DICT_METAS[0];

  // Search Results (Indexed O(1) lookup)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const qClean = extractNormalizedTerms(q)[0] || q;

    const results: {
      entry: DictEntry;
      sourceEntry?: DictEntry;
      pivotEnglish?: string;
      categoryName: string;
      categoryIcon: string;
      languageId: string;
      languageName: string;
      family: string;
      matchType: "exact" | "partial";
    }[] = [];

    const findInDictByEnglishPivots = (
      dict: Dictionary,
      pivots: string[],
      sourceMatch?: DictEntry,
      maxResults = 100
    ) => {
      const idx = getDictIndex(dict);
      const exactMatches: typeof results = [];
      const partialMatches: typeof results = [];
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
              categoryIcon: item.cat.icon,
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
          for (const item of idx.all) {
            if (seen.has(item.entry)) continue;
            if (
              longPivots.some(
                (pw) =>
                  item.engLower.includes(pw) ||
                  item.engTerms.some((et) => et.includes(pw))
              )
            ) {
              seen.add(item.entry);
              partialMatches.push({
                entry: item.entry,
                sourceEntry: sourceMatch,
                pivotEnglish: sourceMatch ? sourceMatch.english : item.entry.english,
                categoryName: item.cat.name,
                categoryIcon: item.cat.icon,
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
      return [...exactMatches, ...partialMatches];
    };

    if (sourceLanguage === "english") {
      const pivots = extractNormalizedTerms(q);
      if (targetLanguage === "all" || targetLanguage === "english") {
        for (const dict of loadedDictList) {
          const matches = findInDictByEnglishPivots(dict, pivots, undefined, 1);
          if (matches.length > 0) results.push(matches[0]);
        }
      } else if (targetDict) {
        results.push(...findInDictByEnglishPivots(targetDict, pivots, undefined, 120));
      }
    } else if (sourceDict) {
      const sourceIdx = getDictIndex(sourceDict);
      const exactSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];
      const partialSourceMatches: { entry: DictEntry; cat: DictCategory }[] = [];
      const seenSource = new Set<DictEntry>();

      const transBucket = sourceIdx.byTransTerm.get(qClean);
      if (transBucket) {
        for (const item of transBucket) {
          seenSource.add(item.entry);
          exactSourceMatches.push({ entry: item.entry, cat: item.cat });
        }
      }

      for (const item of sourceIdx.all) {
        if (seenSource.has(item.entry)) continue;
        if (item.transLower === q) {
          seenSource.add(item.entry);
          exactSourceMatches.push({ entry: item.entry, cat: item.cat });
        } else if (
          item.transLower.includes(q) ||
          item.transTerms.some((t) => t.includes(qClean))
        ) {
          seenSource.add(item.entry);
          partialSourceMatches.push({ entry: item.entry, cat: item.cat });
          if (partialSourceMatches.length >= 60) break;
        }
      }

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
            if (item.engLower.includes(q)) {
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
            categoryIcon: sm.cat.icon,
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
            if (!allPivots.includes(pw)) allPivots.push(pw);
          }
        }
        if (primarySources.length > 0) {
          const bestSource = primarySources[0].entry;
          for (const dict of loadedDictList) {
            if (dict.languageId === sourceDict.languageId) continue;
            const dictMatches = findInDictByEnglishPivots(
              dict,
              allPivots,
              bestSource,
              1
            );
            if (dictMatches.length > 0) results.push(dictMatches[0]);
          }
        }
      } else if (targetDict) {
        const primarySources =
          exactSourceMatches.length > 0
            ? exactSourceMatches.slice(0, 5)
            : partialSourceMatches.slice(0, 5);
        for (const sm of primarySources) {
          const pivots = extractNormalizedTerms(sm.entry.english);
          results.push(
            ...findInDictByEnglishPivots(targetDict, pivots, sm.entry, 40)
          );
        }
      }
    }

    const wordTokens = q
      .replace(/[^a-zA-Z0-9\u00C0-\u024F'\s-]/g, " ")
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length >= 2 && !["the", "a", "an", "please"].includes(w));

    if (wordTokens.length >= 2 && sourceLanguage === "english") {
      const synthesizeForDict = (dict: Dictionary) => {
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
              english: searchQuery.trim(),
              translation: translatedParts.join(" + "),
              pronunciation: pronParts.join(" · "),
              context: `Word-by-word synthesis (${matchedCount}/${wordTokens.length} words matched in ${dict.languageName})`,
              audioFile: null,
            },
            categoryName: "Word-by-Word Phrase Bridge",
            categoryIcon: "🔗",
            languageId: dict.languageId,
            languageName: dict.languageName,
            family: dict.family,
            matchType: (matchedCount === wordTokens.length ? "exact" : "partial") as "exact" | "partial",
          };
        }
        return null;
      };

      if (targetLanguage === "all") {
        for (const dict of loadedDictList) {
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
    }

    results.sort((a, b) => (a.matchType === "exact" ? -1 : 1));
    return results;
  }, [searchQuery, sourceLanguage, targetLanguage, targetDict, sourceDict, loadedDictList]);

  const visibleSearchResults = useMemo(
    () => searchResults.slice(0, searchPage * SEARCH_PAGE_SIZE),
    [searchResults, searchPage]
  );

  const totalEntriesCount = TOTAL_DICTIONARY_ENTRIES;

  useEffect(() => {
    if (browseDict && browseDict.categories.length > 0) {
      const exists = browseDict.categories.some((c) => c.id === activeCategory && c.entries.length > 0);
      if (!exists) {
        setActiveCategory(browseDict.categories[0].id);
      }
    }
  }, [browseDict, activeCategory]);

  const categoryEntries = useMemo(() => {
    if (!browseDict) return [];
    const cat = browseDict.categories.find((c) => c.id === activeCategory) || browseDict.categories[0];
    if (!cat) return [];
    const q = categoryFilter.trim().toLowerCase();
    if (!q) return cat.entries;
    return cat.entries.filter(
      (e) =>
        e.english.toLowerCase().includes(q) ||
        e.translation.toLowerCase().includes(q) ||
        (e.context && e.context.toLowerCase().includes(q))
    );
  }, [browseDict, activeCategory, categoryFilter]);

  const visibleCategoryEntries = useMemo(
    () => categoryEntries.slice(0, categoryPage * CATEGORY_PAGE_SIZE),
    [categoryEntries, categoryPage]
  );

  const handleOpenContribute = (defaultEng?: string) => {
    setContribLang(browseDict?.languageName?.split("(")[0]?.trim() || "Swahili");
    setContribEnglish(defaultEng || searchQuery || "");
    setContribTranslation("");
    setContribPronounce("");
    setContribContext("");
    setContribSubmitted(false);
    setIsContributeOpen(true);
  };

  const handleSubmitContribute = async () => {
    if (!contribEnglish.trim() || !contribTranslation.trim()) return;

    try {
      const stored = await AsyncStorage.getItem("kh-user-contributions");
      const list = stored ? JSON.parse(stored) : [];
      const newEntry = {
        id: Date.now().toString(),
        language: contribLang,
        english: contribEnglish,
        translation: contribTranslation,
        pronunciation: contribPronounce,
        context: contribContext,
        contributor: contribName || "Community Contributor",
        timestamp: new Date().toISOString(),
      };
      await AsyncStorage.setItem(
        "kh-user-contributions",
        JSON.stringify([newEntry, ...list])
      );
      setContribSubmitted(true);
      showToast("Thank you! Contribution submitted for review.");
      setTimeout(() => {
        setIsContributeOpen(false);
      }, 1500);
    } catch {}
  };

  return (
    <View style={styles.toolWrap}>
      {toastMessage && (
        <View style={styles.toastBox}>
          <Ionicons name="checkmark-circle" size={16} color={theme.kenyaGreenLight} />
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}

      {/* Top Stats Banner */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totalEntriesCount.toLocaleString()}+</Text>
          <Text style={styles.statCaption}>Verified Phrases</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{ALL_DICT_METAS.length}</Text>
          <Text style={styles.statCaption}>Kenyan Languages</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Any ↔ Any</Text>
          <Text style={styles.statCaption}>English Bridge</Text>
        </View>
      </View>

      {/* Random Word of the Day */}
      {randomWord && (
        <View style={styles.randomCard}>
          <View style={styles.randomHeaderRow}>
            <View style={styles.randomTag}>
              <Ionicons name="sparkles" size={12} color={theme.gold} />
              <Text style={styles.randomTagText}>Word of the Day</Text>
            </View>
            <Pressable onPress={rollRandomWord} style={styles.rollBtn} hitSlop={8}>
              <Ionicons name="dice-outline" size={16} color={theme.gold} />
              <Text style={styles.rollBtnText}>Roll Another</Text>
            </Pressable>
          </View>
          <View style={styles.randomBody}>
            <Text style={styles.randomTranslation}>{randomWord.entry.translation}</Text>
            <Text style={styles.randomEnglish}>{randomWord.entry.english}</Text>
            {randomWord.entry.pronunciation ? (
              <Text style={styles.randomPronounce}>
                /{randomWord.entry.pronunciation}/
              </Text>
            ) : null}
            <View style={styles.randomMetaRow}>
              <View
                style={[
                  styles.familyPill,
                  {
                    backgroundColor: `${
                      FAMILY_COLORS[
                        DICT_META_MAP[randomWord.langId]?.family?.toLowerCase() || "other"
                      ]
                    }20`,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.familyPillText,
                    {
                      color:
                        FAMILY_COLORS[
                          DICT_META_MAP[randomWord.langId]?.family?.toLowerCase() || "other"
                        ],
                    },
                  ]}
                >
                  {randomWord.langName} •{" "}
                  {DICT_META_MAP[randomWord.langId]?.family?.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* 3 Main View Tabs */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 2 }}>
        {(
          [
            { id: "translate" as const, label: "Translate (All Languages)" },
            { id: "browse" as const, label: "Browse Categories" },
          ]
        ).map((tab) => {
          const active = viewMode === tab.id;
          return (
            <Pressable
              key={tab.id}
              onPress={() => setViewMode(tab.id)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 7,
                borderRadius: 999,
                borderWidth: 1,
                backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                borderColor: active ? theme.gold : theme.border,
              }}
            >
              <Text
                style={{
                  fontSize: 12.5,
                  fontWeight: active ? "800" : "600",
                  color: active ? theme.gold : theme.textSecondary,
                }}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* ────────────────── 1. TRANSLATE MODE ────────────────── */}
      {viewMode === "translate" && (
        <View style={styles.modeWrap}>
          {/* Language Pair Selector */}
          <View style={styles.langPairRow}>
            {/* Source (Tap to change source language) */}
            <Pressable
              onPress={() => {
                setShowSourcePicker((v) => !v);
                setShowTargetPicker(false);
              }}
              style={styles.langPickerBox}
            >
              <Text style={styles.langPickerLabel}>From (Tap to change)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 2 }}>
                <Text style={[styles.langPickerValue, { marginTop: 0, flexShrink: 1 }]}>
                  {sourceLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[sourceLanguage]?.languageName?.split("(")[0]?.trim() || "English"}
                </Text>
                <Ionicons
                  name={showSourcePicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>

            {/* Swap Button */}
            <Pressable onPress={swapLanguages} style={styles.swapBtn} hitSlop={10}>
              <Ionicons name="swap-horizontal" size={20} color={theme.gold} />
            </Pressable>

            {/* Target (Tap to switch target language) */}
            <Pressable
              onPress={() => {
                setShowTargetPicker((v) => !v);
                setShowSourcePicker(false);
              }}
              style={styles.langPickerBox}
            >
              <Text style={styles.langPickerLabel}>To (Tap to change)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 2 }}>
                <Text style={[styles.langPickerValue, { marginTop: 0, flexShrink: 1 }]}>
                  {targetLanguage === "all"
                    ? `All (${ALL_DICT_METAS.length})`
                    : targetLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[targetLanguage]?.languageName?.split("(")[0]?.trim() || "Swahili"}
                </Text>
                <Ionicons
                  name={showTargetPicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>
          </View>

          {/* Source Language Selection Pills */}
          {showSourcePicker && (
            <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
              <Pressable
                onPress={() => {
                  setSourceLanguage("english");
                  setShowSourcePicker(false);
                }}
                style={[
                  styles.langChip,
                  sourceLanguage === "english" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    sourceLanguage === "english" && {
                      color: theme.kenyaBlack,
                      fontWeight: "800",
                    },
                  ]}
                >
                  English
                </Text>
              </Pressable>
              {ALL_DICT_METAS.map((d) => {
                const active = d.languageId === sourceLanguage;
                return (
                  <Pressable
                    key={d.languageId}
                    onPress={() => {
                      setSourceLanguage(d.languageId);
                      setShowSourcePicker(false);
                    }}
                    style={[
                      styles.langChip,
                      active && { backgroundColor: theme.gold, borderColor: theme.gold },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && { color: theme.kenyaBlack, fontWeight: "800" },
                      ]}
                    >
                      {d.languageName.split("(")[0].trim()}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Target Language Selection Pills */}
          {showTargetPicker && (
            <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
              <Pressable
                onPress={() => {
                  setTargetLanguage("all");
                  setShowTargetPicker(false);
                }}
                style={[
                  styles.langChip,
                  targetLanguage === "all" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    targetLanguage === "all" && {
                      color: theme.kenyaBlack,
                      fontWeight: "800",
                    },
                  ]}
                >
                  All ({ALL_DICT_METAS.length})
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setTargetLanguage("english");
                  setShowTargetPicker(false);
                }}
                style={[
                  styles.langChip,
                  targetLanguage === "english" && {
                    backgroundColor: theme.gold,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.langChipText,
                    targetLanguage === "english" && {
                      color: theme.kenyaBlack,
                      fontWeight: "800",
                    },
                  ]}
                >
                  English
                </Text>
              </Pressable>
              {ALL_DICT_METAS.map((d) => {
                const active = d.languageId === targetLanguage;
                return (
                  <Pressable
                    key={d.languageId}
                    onPress={() => {
                      setTargetLanguage(d.languageId);
                      setShowTargetPicker(false);
                    }}
                    style={[
                      styles.langChip,
                      active && { backgroundColor: theme.gold, borderColor: theme.gold },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && { color: theme.kenyaBlack, fontWeight: "800" },
                      ]}
                    >
                      {d.languageName.split("(")[0].trim()}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Search Input */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.textMuted} />
            <TextInput
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
              placeholder={`Type a word in ${
                sourceLanguage === "english"
                  ? "English"
                  : DICT_META_MAP[sourceLanguage]?.languageName?.split("(")[0]?.trim()
              }...`}
              placeholderTextColor={theme.textMuted}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                if (text.length > 2) addRecentSearch(text);
              }}
              style={styles.searchInput}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")} hitSlop={8}>
                <Ionicons name="close-circle" size={18} color={theme.textMuted} />
              </Pressable>
            )}
          </View>

          {/* Recent Searches */}
          {recentSearches.length > 0 && searchQuery.length === 0 && (
            <View style={styles.recentsBox}>
              <Text style={styles.recentsTitle}>Recent searches:</Text>
              <View style={styles.recentsRow}>
                {recentSearches.map((term, idx) => (
                  <Pressable
                    key={idx}
                    onPress={() => setSearchQuery(term)}
                    style={styles.recentChip}
                  >
                    <Ionicons name="time-outline" size={12} color={theme.textMuted} />
                    <Text style={styles.recentChipText}>{term}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* Search Results List (Paginated) */}
          {searchQuery.trim().length > 0 && (
            <View style={styles.resultsWrap}>
              <Text style={styles.resultsCount}>
                Showing {visibleSearchResults.length} of {searchResults.length} translation
                {searchResults.length !== 1 ? "s" : ""}
              </Text>

              {visibleSearchResults.map((item, idx) => {
                const isFav = favoritesSet.has(
                  `${item.languageId}:${item.entry.english}`
                );
                const isReverseToEnglish =
                  sourceLanguage !== "english" && targetLanguage === "english";
                return (
                  <View key={idx} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <View style={styles.resultTagRow}>
                        <View style={styles.catBadge}>
                          <Text style={styles.catBadgeText}>
                            {item.categoryName}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.familyBadge,
                            {
                              backgroundColor: `${
                                FAMILY_COLORS[item.family?.toLowerCase()] || "#999"
                              }20`,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.familyBadgeText,
                              {
                                color:
                                  FAMILY_COLORS[item.family?.toLowerCase()] ||
                                  theme.gold,
                              },
                            ]}
                          >
                            {item.languageName.split("(")[0].trim()}
                          </Text>
                        </View>
                      </View>

                      <Pressable
                        onPress={() =>
                          toggleFavorite(`${item.languageId}:${item.entry.english}`)
                        }
                        hitSlop={8}
                      >
                        <Ionicons
                          name={isFav ? "star" : "star-outline"}
                          size={20}
                          color={isFav ? theme.gold : theme.textMuted}
                        />
                      </Pressable>
                    </View>

                    <Text style={styles.resultTranslation}>
                      {isReverseToEnglish
                        ? item.entry.english
                        : item.entry.translation}
                    </Text>
                    <Text style={styles.resultEnglish}>
                      {item.sourceEntry && sourceDict
                        ? `${sourceDict.languageName.split("(")[0].trim()}: ${
                            item.sourceEntry.translation
                          } → English: "${item.pivotEnglish}"`
                        : isReverseToEnglish
                        ? item.entry.translation
                        : item.entry.english}
                    </Text>

                    {item.entry.pronunciation ? (
                      <View style={styles.pronounceRow}>
                        <Ionicons
                          name="volume-medium-outline"
                          size={15}
                          color={theme.sky}
                        />
                        <Text style={styles.pronounceText}>
                          /{item.entry.pronunciation}/
                        </Text>
                      </View>
                    ) : null}

                    {item.entry.context ? (
                      <Text style={styles.contextText}>
                        {item.entry.context.replace(/\*\*([^*]+)\*\*/g, "$1")}
                      </Text>
                    ) : null}
                  </View>
                );
              })}

              {searchResults.length > visibleSearchResults.length && (
                <Pressable
                  onPress={() => setSearchPage((p) => p + 1)}
                  style={styles.loadMoreBtn}
                >
                  <Text style={styles.loadMoreBtnText}>
                    Load More Results ({searchResults.length - visibleSearchResults.length} remaining)
                  </Text>
                </Pressable>
              )}

              {searchResults.length === 0 && (
                <View style={styles.emptyCard}>
                  <Ionicons name="search-outline" size={32} color={theme.textMuted} />
                  <Text style={styles.emptyTitle}>
                    No exact match found for &ldquo;{searchQuery}&rdquo;
                  </Text>
                  <Text style={styles.emptyDesc}>
                    Kenyan languages have rich oral dialects. Help us add this word!
                  </Text>
                  <Pressable
                    onPress={() => handleOpenContribute(searchQuery)}
                    style={styles.contributeBtn}
                  >
                    <Ionicons name="add-circle-outline" size={18} color="#1A1108" />
                    <Text style={styles.contributeBtnText}>
                      Contribute &ldquo;{searchQuery}&rdquo;
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {searchQuery.trim().length === 0 && (
            <View style={styles.quickPromptBox}>
              <Text style={styles.quickPromptTitle}>
                Popular words to translate across {ALL_DICT_METAS.length} languages:
              </Text>
              <View style={styles.popularRow}>
                {POPULAR_COMPARE_WORDS.slice(0, 8).map((word) => (
                  <Pressable
                    key={word}
                    onPress={() => setSearchQuery(word)}
                    style={styles.popularWordChip}
                  >
                    <Text style={styles.popularWordText}>{word}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      )}

      {/* ────────────────── 3. BROWSE BY CATEGORY ────────────────── */}
      {viewMode === "browse" && (
        <View style={styles.modeWrap}>
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {ALL_DICT_METAS.map((d) => {
              const active = d.languageId === browseMeta.languageId;
              return (
                <Pressable
                  key={d.languageId}
                  onPress={() => setTargetLanguage(d.languageId)}
                  style={[
                    styles.langChip,
                    active && { backgroundColor: theme.gold, borderColor: theme.gold },
                  ]}
                >
                  <Text
                    style={[
                      styles.langChipText,
                      active && { color: theme.kenyaBlack, fontWeight: "800" },
                    ]}
                  >
                    {d.languageName.split("(")[0].trim()}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {(browseDict?.categories || browseMeta.categories).map((c: any) => {
              const active = c.id === activeCategory;
              return (
                <Pressable
                  key={c.id}
                  onPress={() => setActiveCategory(c.id)}
                  style={[
                    styles.catPill,
                    active && { backgroundColor: theme.gold, borderColor: theme.gold },
                  ]}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <DynamicIcon emoji={c.icon} size={13} color={active ? theme.kenyaBlack : theme.gold} />
                    <Text
                      style={[
                        styles.catPillText,
                        active && { color: theme.kenyaBlack, fontWeight: "800" },
                      ]}
                    >
                      {c.name} ({c.entries ? c.entries.length : c.count})
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.textMuted} />
            <TextInput
            key={`ti-2-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
              placeholder={`Filter in ${browseMeta.languageName.split("(")[0].trim()} category...`}
              placeholderTextColor={theme.textMuted}
              value={categoryFilter}
              onChangeText={(text) => {
                setCategoryFilter(text);
                setCategoryPage(1);
              }}
              style={styles.searchInput}
            />
            {categoryFilter.length > 0 && (
              <Pressable
                onPress={() => {
                  setCategoryFilter("");
                  setCategoryPage(1);
                }}
                hitSlop={8}
              >
                <Ionicons name="close-circle" size={18} color={theme.textMuted} />
              </Pressable>
            )}
          </View>

          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Showing {visibleCategoryEntries.length} of {categoryEntries.length} phrases in{" "}
              {browseMeta.languageName.split("(")[0].trim()}
            </Text>

            {visibleCategoryEntries.map((e, idx) => {
              const isFav = favoritesSet.has(`${browseMeta.languageId}:${e.english}`);
              return (
                <View key={idx} style={styles.resultCard}>
                  <View style={styles.resultHeader}>
                    <Text style={styles.resultEnglish}>{e.english}</Text>
                    <Pressable
                      onPress={() =>
                        toggleFavorite(`${browseMeta.languageId}:${e.english}`)
                      }
                      hitSlop={8}
                    >
                      <Ionicons
                        name={isFav ? "star" : "star-outline"}
                        size={18}
                        color={isFav ? theme.gold : theme.textMuted}
                      />
                    </Pressable>
                  </View>

                  <Text style={styles.resultTranslation}>{e.translation}</Text>

                  {e.pronunciation ? (
                    <View style={styles.pronounceRow}>
                      <Ionicons
                        name="volume-medium-outline"
                        size={14}
                        color={theme.sky}
                      />
                      <Text style={styles.pronounceText}>/{e.pronunciation}/</Text>
                    </View>
                  ) : null}

                  {e.context ? (
                    <Text style={styles.contextText}>{e.context.replace(/\*\*([^*]+)\*\*/g, "$1")}</Text>
                  ) : null}
                </View>
              );
            })}

            {categoryEntries.length > visibleCategoryEntries.length && (
              <Pressable
                onPress={() => setCategoryPage((p) => p + 1)}
                style={styles.loadMoreBtn}
              >
                <Text style={styles.loadMoreBtnText}>
                  Load More Entries ({categoryEntries.length - visibleCategoryEntries.length} remaining)
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      {/* ────────────────── CONTRIBUTE MODAL ────────────────── */}
      <Modal
        visible={isContributeOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsContributeOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Ionicons name="add-circle" size={24} color={theme.gold} />
                <Text style={styles.modalTitle}>Contribute Translation</Text>
              </View>
              <Pressable
                onPress={() => setIsContributeOpen(false)}
                hitSlop={10}
              >
                <Ionicons name="close" size={22} color={theme.textPrimary} />
              </Pressable>
            </View>

            {contribSubmitted ? (
              <View style={styles.successBox}>
                <Ionicons
                  name="checkmark-circle"
                  size={48}
                  color={theme.kenyaGreen}
                />
                <Text style={styles.successTitle}>Asante Sana!</Text>
                <Text style={styles.successDesc}>
                  Your translation has been submitted to the KenyaHub language registry.
                </Text>
              </View>
            ) : (
              <ScrollView style={{ maxHeight: 420 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.modalSub}>
                  Help preserve and expand Kenya&apos;s indigenous linguistic heritage.
                </Text>

                <Text style={styles.inputLabel}>Language</Text>
                <TextInput
            key={`ti-3-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribLang}
                  onChangeText={setContribLang}
                  placeholder="e.g. Kikuyu, Luo, Turkana..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>English Phrase / Term *</Text>
                <TextInput
            key={`ti-4-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribEnglish}
                  onChangeText={setContribEnglish}
                  placeholder="e.g. Good morning"
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Native Translation *</Text>
                <TextInput
            key={`ti-5-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribTranslation}
                  onChangeText={setContribTranslation}
                  placeholder="Native word or phrase..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Pronunciation (approximate)</Text>
                <TextInput
            key={`ti-6-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribPronounce}
                  onChangeText={setContribPronounce}
                  placeholder="Phonetic sounding guide..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Dialect / Cultural Context</Text>
                <TextInput
            key={`ti-7-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribContext}
                  onChangeText={setContribContext}
                  placeholder="e.g. Used in Nyeri dialect, spoken by elders..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Your Name (for credits)</Text>
                <TextInput
            key={`ti-8-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
                  value={contribName}
                  onChangeText={setContribName}
                  placeholder="Anonymous or Your Name"
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Pressable
                  onPress={handleSubmitContribute}
                  style={styles.submitBtn}
                >
                  <Text style={styles.submitBtnText}>Submit Contribution</Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

