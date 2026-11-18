import { ExpandablePillRow } from "../components/ExpandablePillRow";
import { DynamicIcon } from "../components/DynamicIcon";
import React, { useState, useMemo, useCallback, useEffect, useDeferredValue } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
  Linking,
  KeyboardAvoidingView,
  Platform,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useDynamicStyles,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../theme";

import {
  ALL_DICT_METAS,
  DICT_META_MAP,
  TOTAL_DICTIONARY_ENTRIES,
  INITIAL_RANDOM_WORDS,
  type DictMeta,
  type DictEntry,
  type Dictionary,
} from "../shared/data/language-sources";
import {
  FAMILY_COLORS,
  POPULAR_COMPARE_WORDS,
  runTranslatorSearch,
  getFuzzySuggestions,
  type TranslationResultItem,
} from "../shared/lib/dictionary-search";

import {
  CATEGORY_PAGE_SIZE,
  SEARCH_PAGE_SIZE,
  LOADED_DICTS_CACHE,
  loadDictionary,
  searchAcrossAllDictionaries,
} from "./translator/loader";
import { createStyles } from "./translator/styles";

export function KenyanTranslatorTool({
  onScrollToTop,
}: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);

  const [viewMode, setViewMode] = useState<"translate" | "browse" | "favorites">(
    "translate"
  );
  const [sourceLanguage, setSourceLanguage] = useState<string>("english");
  const [targetLanguage, setTargetLanguage] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [activeCategory, setActiveCategory] = useState<string>("greetings");
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchPage, setSearchPage] = useState(1);

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
  const [allLangSearchResults, setAllLangSearchResults] = useState<
    TranslationResultItem[]
  >([]);
  const [isSearchingAll, setIsSearchingAll] = useState(false);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [userContributions, setUserContributions] = useState<{
    id: string;
    language: string;
    english: string;
    translation: string;
    pronunciation?: string;
    context?: string;
    contributor?: string;
  }[]>([]);
  const userContributionsCount = userContributions.length;
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

  // Load ONLY required active dictionaries on demand with LRU cap (MOB-1: never preload all 23 JSONs)
  useEffect(() => {
    let cancelled = false;
    const needed = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") needed.add(sourceLanguage);
    if (targetLanguage !== "english" && targetLanguage !== "all") {
      needed.add(targetLanguage);
    }
    if (viewMode === "favorites" && favorites.length > 0) {
      favorites.slice(0, 5).forEach((k) => {
        const lid = k.split(":")[0];
        if (lid) needed.add(lid);
      });
    }

    const missing = Array.from(needed).filter((id) => !LOADED_DICTS_CACHE[id]);
    if (missing.length > 0) {
      Promise.all(
        missing.map((id) =>
          loadDictionary(id, { retainInCache: true, pinnedIds: needed })
        )
      ).then(() => {
        if (!cancelled) setLoadedDicts({ ...LOADED_DICTS_CACHE });
      });
    } else {
      setLoadedDicts({ ...LOADED_DICTS_CACHE });
    }

    return () => {
      cancelled = true;
    };
  }, [sourceLanguage, targetLanguage, viewMode, favorites]);

  // Batched cross-language search when targetLanguage === "all" (MOB-1)
  useEffect(() => {
    if (targetLanguage !== "all" || !searchQuery.trim()) {
      setAllLangSearchResults([]);
      setIsSearchingAll(false);
      return;
    }

    let cancelled = false;
    setIsSearchingAll(true);

    const pinned = new Set<string>(["swahili"]);
    if (sourceLanguage !== "english") pinned.add(sourceLanguage);

    const runBatched = async () => {
      let sDict: Dictionary | null = null;
      if (sourceLanguage !== "english") {
        sDict = await loadDictionary(sourceLanguage, {
          retainInCache: true,
          pinnedIds: pinned,
        });
      }
      const finalResults = await searchAcrossAllDictionaries({
        query: searchQuery,
        sourceLanguage,
        sourceDict: sDict,
        pinnedIds: pinned,
        isCancelled: () => cancelled,
        onProgress: (partial) => {
          if (!cancelled) {
            setAllLangSearchResults(partial);
          }
        },
      });
      if (!cancelled) {
        setAllLangSearchResults(finalResults);
        setIsSearchingAll(false);
        setLoadedDicts({ ...LOADED_DICTS_CACHE });
      }
    };

    const debounceTimer = setTimeout(runBatched, 90);
    return () => {
      cancelled = true;
      clearTimeout(debounceTimer);
    };
  }, [searchQuery, sourceLanguage, targetLanguage]);

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
    AsyncStorage.getItem("kh-user-contributions").then((raw) => {
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) setUserContributions(parsed);
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
      const next = [
        q,
        ...prev.filter((s) => s.toLowerCase() !== q.toLowerCase()),
      ].slice(0, 6);
      AsyncStorage.setItem("kh-translator-recent", JSON.stringify(next));
      return next;
    });
  }, []);

  const toggleFavorite = (wordKey: string) => {
    triggerHaptic(10);
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

  const handleShareEntry = async (
    langName: string,
    english: string,
    translation: string,
    pronunciation?: string,
    context?: string
  ) => {
    triggerHaptic(10);
    const lines = [
      `${langName} ↔ English Translation`,
      `${langName}: ${translation}${pronunciation ? ` (/${pronunciation}/)` : ""}`,
      `English: ${english}`,
    ];
    if (context) {
      lines.push(`Context: ${context.replace(/\*\*([^*]+)\*\*/g, "$1")}`);
    }
    lines.push("", "— Shared via KenyaHub 23-Language Dictionary");
    try {
      await Share.share({
        title: `${translation} (${langName})`,
        message: lines.join("\n"),
      });
    } catch {}
  };

  const loadedDictList = useMemo(
    () =>
      ALL_DICT_METAS.map((m) => loadedDicts[m.languageId]).filter(
        Boolean
      ) as Dictionary[],
    [loadedDicts]
  );

  const rollRandomWord = useCallback(() => {
    triggerHaptic(8);
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
      return;
    }
    const populatedDicts = loadedDictList.filter((d) =>
      d.categories.some((c: any) => c.entries.length > 0)
    );
    if (populatedDicts.length > 0) {
      const dict =
        populatedDicts[Math.floor(Math.random() * populatedDicts.length)];
      const cleanPool = dict.categories
        .filter((c: any) => c.id !== "culture-history" && c.entries.length > 0)
        .flatMap((c: any) => c.entries);
      if (cleanPool.length > 0) {
        const entry = cleanPool[Math.floor(Math.random() * cleanPool.length)];
        setRandomWord({
          entry,
          langName: dict.languageName.split("(")[0].trim(),
          langId: dict.languageId,
        });
      }
    }
  }, [loadedDictList]);

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

  // Unified Search Results (Single-pair synchronous index OR batched All-23-Languages stream + local custom words)
  const searchResults = useMemo(() => {
    const q = deferredSearchQuery.trim();
    if (!q) return [];
    const stripDia = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const qNorm = stripDia(q);
    const customMatches: TranslationResultItem[] = userContributions
      .filter((item) => {
        const langId = item.language.toLowerCase().trim();
        if (targetLanguage !== "all" && targetLanguage !== "english" && langId !== targetLanguage) {
          return false;
        }
        return stripDia(item.english).includes(qNorm) || stripDia(item.translation).includes(qNorm);
      })
      .map((item) => {
        const langId = item.language.toLowerCase().trim();
        const meta = DICT_META_MAP[langId];
        return {
          languageId: meta?.languageId || langId,
          languageName: meta?.languageName || item.language,
          family: meta?.family || "custom",
          categoryName: "My Device Dictionary",
          matchType: "exact",
          entry: {
            english: item.english,
            translation: item.translation,
            pronunciation: item.pronunciation || "",
            context: item.context ? `${item.context} (Added on this device)` : "Added on this device",
          },
        };
      });

    const baseResults =
      targetLanguage === "all"
        ? allLangSearchResults
        : runTranslatorSearch({
            query: deferredSearchQuery,
            sourceLanguage,
            targetLanguage,
            sourceDict,
            targetDict,
            activeDictList: loadedDictList,
            maxSingleDictResults: 100,
          }).searchResults;

    return [...customMatches, ...baseResults];
  }, [
    deferredSearchQuery,
    sourceLanguage,
    targetLanguage,
    targetDict,
    sourceDict,
    loadedDictList,
    allLangSearchResults,
    userContributions,
  ]);

  // Fuzzy "Did you mean?" suggestions when search returns 0 results
  const fuzzySuggestions = useMemo(() => {
    if (
      !deferredSearchQuery.trim() ||
      deferredSearchQuery.trim().length < 3 ||
      searchResults.length > 0 ||
      isSearchingAll
    )
      return [];
    const pool =
      sourceLanguage === "english"
        ? targetDict
          ? [targetDict]
          : loadedDictList
        : sourceDict
        ? [sourceDict]
        : loadedDictList;
    return getFuzzySuggestions(deferredSearchQuery, pool, sourceLanguage, 5);
  }, [
    deferredSearchQuery,
    searchResults.length,
    isSearchingAll,
    sourceLanguage,
    targetDict,
    sourceDict,
    loadedDictList,
  ]);

  // Swap languages while preserving or flipping the active query
  const swapLanguages = () => {
    triggerHaptic(10);
    const isReverseToEnglish =
      sourceLanguage !== "english" && targetLanguage === "english";
    const topMatch = searchResults.find((r) => !r.missingTarget);
    if (targetLanguage === "all") {
      const nextSource = topMatch?.languageId || "swahili";
      setSourceLanguage(nextSource);
      setTargetLanguage("english");
      if (topMatch && searchQuery.trim()) {
        setSearchQuery(topMatch.entry.translation.split(/[\/;(]/)[0].trim());
      }
    } else {
      const prevSource = sourceLanguage;
      setSourceLanguage(targetLanguage);
      setTargetLanguage(prevSource);
      if (topMatch && searchQuery.trim()) {
        const flipped = isReverseToEnglish
          ? topMatch.entry.english.split(/[\/;(]/)[0].trim()
          : topMatch.entry.translation.split(/[\/;(]/)[0].trim();
        if (flipped) setSearchQuery(flipped);
      }
    }
  };

  // Resolved Favorite Entries across loaded dictionaries
  const favoriteItems = useMemo(() => {
    const out: {
      favKey: string;
      languageId: string;
      languageName: string;
      family: string;
      categoryName: string;
      entry: DictEntry;
    }[] = [];
    for (const key of favorites) {
      const colonIdx = key.indexOf(":");
      if (colonIdx === -1) continue;
      const langId = key.slice(0, colonIdx);
      const eng = key.slice(colonIdx + 1);
      const dict = loadedDicts[langId];
      if (!dict) continue;
      let foundEntry: DictEntry | undefined;
      let foundCat = "Vocabulary";
      for (const cat of dict.categories) {
        const match = cat.entries.find((e) => e.english === eng);
        if (match) {
          foundEntry = match;
          foundCat = cat.name;
          break;
        }
      }
      if (foundEntry) {
        out.push({
          favKey: key,
          languageId: dict.languageId,
          languageName: dict.languageName,
          family: dict.family,
          categoryName: foundCat,
          entry: foundEntry,
        });
      }
    }
    return out;
  }, [favorites, loadedDicts]);

  const visibleSearchResults = useMemo(
    () => searchResults.slice(0, searchPage * SEARCH_PAGE_SIZE),
    [searchResults, searchPage]
  );

  const totalEntriesCount = TOTAL_DICTIONARY_ENTRIES;

  useEffect(() => {
    if (browseDict && browseDict.categories.length > 0) {
      const exists = browseDict.categories.some(
        (c) => c.id === activeCategory && c.entries.length > 0
      );
      if (!exists) {
        setActiveCategory(browseDict.categories[0].id);
      }
    }
  }, [browseDict, activeCategory]);

  const categoryEntries = useMemo(() => {
    if (!browseDict) return [];
    const cat =
      browseDict.categories.find((c) => c.id === activeCategory) ||
      browseDict.categories[0];
    if (!cat) return [];
    const stripDia = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const q = stripDia(categoryFilter.trim());
    if (!q) return cat.entries;
    return cat.entries.filter(
      (e) =>
        stripDia(e.english).includes(q) ||
        stripDia(e.translation).includes(q) ||
        (e.context && stripDia(e.context).includes(q))
    );
  }, [browseDict, activeCategory, categoryFilter]);

  const visibleCategoryEntries = useMemo(
    () => categoryEntries.slice(0, categoryPage * CATEGORY_PAGE_SIZE),
    [categoryEntries, categoryPage]
  );

  const handleOpenContribute = (defaultEng?: string) => {
    triggerHaptic(8);
    setContribLang(
      browseDict?.languageName?.split("(")[0]?.trim() || "Swahili"
    );
    setContribEnglish(defaultEng || searchQuery || "");
    setContribTranslation("");
    setContribPronounce("");
    setContribContext("");
    setContribSubmitted(false);
    setIsContributeOpen(true);
  };

  const handleSubmitContribute = async () => {
    if (!contribEnglish.trim() || !contribTranslation.trim()) return;
    triggerHaptic(12);

    try {
      const stored = await AsyncStorage.getItem("kh-user-contributions");
      const list = stored ? JSON.parse(stored) : [];
      const newEntry = {
        id: Date.now().toString(),
        language: contribLang,
        english: contribEnglish.trim(),
        translation: contribTranslation.trim(),
        pronunciation: contribPronounce.trim(),
        context: contribContext.trim(),
        contributor: contribName.trim() || "Community Contributor",
        syncStatus: "saved_locally",
        timestamp: new Date().toISOString(),
      };
      const updatedList = [newEntry, ...list];
      await AsyncStorage.setItem(
        "kh-user-contributions",
        JSON.stringify(updatedList)
      );
      setUserContributions(updatedList);
      setContribSubmitted(true);
      showToast("Saved locally to your device dictionary!");
      setTimeout(() => {
        setIsContributeOpen(false);
      }, 1600);
    } catch {}
  };

  return (
    <View style={styles.toolWrap}>
      {toastMessage && (
        <View style={styles.toastBox}>
          <Ionicons
            name="checkmark-circle"
            size={16}
            color={theme.kenyaGreenLight}
          />
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}

      {/* 1. Primary Mode Tabs Above the Fold (UX-9) */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          paddingVertical: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {(
            [
              { id: "translate" as const, label: "Translate" },
              { id: "browse" as const, label: "Browse" },
              {
                id: "favorites" as const,
                label: `Saved (★ ${favorites.length})`,
              },
            ]
          ).map((tab) => {
            const active = viewMode === tab.id;
            return (
              <Pressable
                key={tab.id}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => {
                  triggerHaptic(8);
                  setViewMode(tab.id);
                }}
                style={pressableStyle({
                  paddingHorizontal: 14,
                  paddingVertical: 7,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                })}
              >
                <Text
                  style={{
                    fontSize: 12.5,
                    fontFamily: active ? "Outfit_800ExtraBold" : "Outfit_700Bold",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          onPress={() => handleOpenContribute()}
          accessibilityRole="button"
          accessibilityLabel="Add word to local dictionary"
          style={pressableStyle({
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: `${theme.gold}50`,
            backgroundColor: `${theme.gold}14`,
          })}
        >
          <Ionicons name="add-circle-outline" size={14} color={theme.gold} />
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Outfit_700Bold",
              color: theme.gold,
            }}
          >
            + Word
          </Text>
        </Pressable>
      </View>

      {/* ────────────────── 1. TRANSLATE MODE (ABOVE THE FOLD - UX-9) ────────────────── */}
      {viewMode === "translate" && (
        <View style={styles.modeWrap}>
          {/* Language Pair Selector */}
          <View style={styles.langPairRow}>
            {/* Source (Tap to change source language) */}
            <Pressable
              onPress={() => {
                triggerHaptic(8);
                setShowSourcePicker((v) => !v);
                setShowTargetPicker(false);
              }}
              accessibilityRole="button"
              accessibilityLabel="Select source language"
              style={pressableStyle(styles.langPickerBox)}
            >
              <Text style={styles.langPickerLabel}>From (Tap to change)</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 2,
                }}
              >
                <Text
                  style={[
                    styles.langPickerValue,
                    { marginTop: 0, flexShrink: 1 },
                  ]}
                >
                  {sourceLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[sourceLanguage]?.languageName
                        ?.split("(")[0]
                        ?.trim() || "English"}
                </Text>
                <Ionicons
                  name={showSourcePicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>

            {/* Swap Button */}
            <Pressable
              onPress={swapLanguages}
              accessibilityRole="button"
              accessibilityLabel="Swap source and target languages"
              style={pressableStyle(styles.swapBtn)}
              hitSlop={10}
            >
              <Ionicons name="swap-horizontal" size={20} color={theme.gold} />
            </Pressable>

            {/* Target (Tap to switch target language) */}
            <Pressable
              onPress={() => {
                triggerHaptic(8);
                setShowTargetPicker((v) => !v);
                setShowSourcePicker(false);
              }}
              accessibilityRole="button"
              accessibilityLabel="Select target language"
              style={pressableStyle(styles.langPickerBox)}
            >
              <Text style={styles.langPickerLabel}>To (Tap to change)</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 2,
                }}
              >
                <Text
                  style={[
                    styles.langPickerValue,
                    { marginTop: 0, flexShrink: 1 },
                  ]}
                >
                  {targetLanguage === "all"
                    ? `All (${ALL_DICT_METAS.length})`
                    : targetLanguage === "english"
                    ? "English"
                    : DICT_META_MAP[targetLanguage]?.languageName
                        ?.split("(")[0]
                        ?.trim() || "Swahili"}
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
                      fontFamily: "Outfit_800ExtraBold",
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
                      active && {
                        backgroundColor: theme.gold,
                        borderColor: theme.gold,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
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
                      fontFamily: "Outfit_800ExtraBold",
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
                      fontFamily: "Outfit_800ExtraBold",
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
                      active && {
                        backgroundColor: theme.gold,
                        borderColor: theme.gold,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.langChipText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
                      ]}
                    >
                      {d.languageName.split("(")[0].trim()}
                    </Text>
                  </Pressable>
                );
              })}
            </ExpandablePillRow>
          )}

          {/* Search Input (Stable key across theme switches - UX-5) */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.gold} />
            <TextInput
              multiline={false}
              numberOfLines={1}
              accessibilityLabel="Search word or phrase to translate"
              placeholder={`Type a word in ${
                sourceLanguage === "english"
                  ? "English"
                  : DICT_META_MAP[sourceLanguage]?.languageName
                      ?.split("(")[0]
                      ?.trim()
              }...`}
              placeholderTextColor={theme.textMuted}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                if (text.length > 2) addRecentSearch(text);
              }}
              style={styles.searchInput}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <Pressable
                onPress={() => setSearchQuery("")}
                accessibilityRole="button"
                accessibilityLabel="Clear search query"
                hitSlop={8}
              >
                <Ionicons
                  name="close-circle"
                  size={18}
                  color={theme.textMuted}
                />
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
                    style={pressableStyle(styles.recentChip)}
                  >
                    <Ionicons
                      name="time-outline"
                      size={12}
                      color={theme.textMuted}
                    />
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
                {isSearchingAll && searchResults.length === 0
                  ? `Searching across ${ALL_DICT_METAS.length} Kenyan languages...`
                  : `Showing ${visibleSearchResults.length} of ${searchResults.length} translation${
                      searchResults.length !== 1 ? "s" : ""
                    }${isSearchingAll ? " (scanning remaining dictionaries...)" : ""}`}
              </Text>

              {visibleSearchResults.map((item, idx) => {
                const isFav = favoritesSet.has(
                  `${item.languageId}:${item.entry.english}`
                );
                const isReverseToEnglish =
                  sourceLanguage !== "english" && targetLanguage === "english";
                const cleanLangName = item.languageName.split("(")[0].trim();

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
                                FAMILY_COLORS[item.family?.toLowerCase()] ||
                                "#999"
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
                            {cleanLangName}
                          </Text>
                        </View>
                      </View>

                      {/* Action Buttons: Share + Favorite Star (MOB-12, UX-9) */}
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <Pressable
                          onPress={() =>
                            handleShareEntry(
                              cleanLangName,
                              item.entry.english,
                              item.entry.translation,
                              item.entry.pronunciation,
                              item.entry.context
                            )
                          }
                          accessibilityRole="button"
                          accessibilityLabel={`Share ${cleanLangName} translation`}
                          hitSlop={8}
                        >
                          <Ionicons
                            name="share-social-outline"
                            size={18}
                            color={theme.textSecondary}
                          />
                        </Pressable>

                        <Pressable
                          onPress={() =>
                            toggleFavorite(
                              `${item.languageId}:${item.entry.english}`
                            )
                          }
                          accessibilityRole="button"
                          accessibilityLabel={
                            isFav
                              ? "Remove from favorites"
                              : "Save to favorites"
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
                    </View>

                    <Text style={styles.resultTranslation}>
                      {item.missingTarget
                        ? `Not yet recorded in ${cleanLangName}`
                        : isReverseToEnglish
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
                          name="chatbubble-ellipses-outline"
                          size={14}
                          color={theme.sky}
                        />
                        <Text style={styles.pronounceText}>
                          Pronunciation: /{item.entry.pronunciation}/
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
                  style={pressableStyle(styles.loadMoreBtn)}
                >
                  <Text style={styles.loadMoreBtnText}>
                    Load More Results (
                    {searchResults.length - visibleSearchResults.length}{" "}
                    remaining)
                  </Text>
                </Pressable>
              )}

              {!isSearchingAll && searchResults.length === 0 && (
                <View style={styles.emptyCard}>
                  <Ionicons
                    name="search-outline"
                    size={32}
                    color={theme.textMuted}
                  />
                  <Text style={styles.emptyTitle}>
                    No exact match found for &ldquo;{searchQuery}&rdquo;
                  </Text>
                  {fuzzySuggestions.length > 0 && (
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 6,
                        marginVertical: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: theme.textSecondary,
                          alignSelf: "center",
                        }}
                      >
                        Did you mean:
                      </Text>
                      {fuzzySuggestions.map((sug) => (
                        <Pressable
                          key={sug}
                          onPress={() => setSearchQuery(sug)}
                          style={[
                            styles.popularWordChip,
                            { borderColor: theme.gold },
                          ]}
                        >
                          <Text
                            style={[
                              styles.popularWordText,
                              {
                                color: theme.gold,
                                fontFamily: "Outfit_700Bold",
                              },
                            ]}
                          >
                            {sug}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                  <Text style={styles.emptyDesc}>
                    Kenyan languages have rich oral dialects. Add this word to
                    your personal device dictionary!
                  </Text>
                  <Pressable
                    onPress={() => handleOpenContribute(searchQuery)}
                    style={pressableStyle(styles.contributeBtn)}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={18}
                      color="#1A1108"
                    />
                    <Text style={styles.contributeBtnText}>
                      Add &ldquo;{searchQuery}&rdquo;
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}

          {searchQuery.trim().length === 0 && (
            <>
              <View style={styles.quickPromptBox}>
                <Text style={styles.quickPromptTitle}>
                  Popular words to compare across {ALL_DICT_METAS.length}{" "}
                  languages:
                </Text>
                <View style={styles.popularRow}>
                  {POPULAR_COMPARE_WORDS.slice(0, 8).map((word) => (
                    <Pressable
                      key={word}
                      onPress={() => {
                        triggerHaptic(6);
                        setSearchQuery(word);
                      }}
                      style={pressableStyle(styles.popularWordChip)}
                    >
                      <Text style={styles.popularWordText}>{word}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              {/* Random Word of the Day (Placed below search bar when idle - UX-9) */}
              {randomWord && (
                <View style={styles.randomCard}>
                  <View style={styles.randomHeaderRow}>
                    <View style={styles.randomTag}>
                      <Ionicons name="sparkles" size={12} color={theme.gold} />
                      <Text style={styles.randomTagText}>Word of the Day</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Pressable
                        onPress={() =>
                          handleShareEntry(
                            randomWord.langName,
                            randomWord.entry.english,
                            randomWord.entry.translation,
                            randomWord.entry.pronunciation
                          )
                        }
                        accessibilityRole="button"
                        accessibilityLabel="Share Word of the Day"
                        hitSlop={8}
                      >
                        <Ionicons
                          name="share-social-outline"
                          size={15}
                          color={theme.gold}
                        />
                      </Pressable>
                      <Pressable
                        onPress={rollRandomWord}
                        accessibilityRole="button"
                        accessibilityLabel="Roll another random Kenyan word"
                        style={pressableStyle(styles.rollBtn)}
                        hitSlop={8}
                      >
                        <Ionicons
                          name="dice-outline"
                          size={16}
                          color={theme.gold}
                        />
                        <Text style={styles.rollBtnText}>Roll Another</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.randomBody}>
                    <Text style={styles.randomTranslation}>
                      {randomWord.entry.translation}
                    </Text>
                    <Text style={styles.randomEnglish}>
                      {randomWord.entry.english}
                    </Text>
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
                                DICT_META_MAP[
                                  randomWord.langId
                                ]?.family?.toLowerCase() || "other"
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
                                  DICT_META_MAP[
                                    randomWord.langId
                                  ]?.family?.toLowerCase() || "other"
                                ],
                            },
                          ]}
                        >
                          {randomWord.langName} •{" "}
                          {DICT_META_MAP[
                            randomWord.langId
                          ]?.family?.toUpperCase()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {/* Compact Corpus Stats Footer */}
              <View style={styles.statsBar}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>
                    {totalEntriesCount.toLocaleString()}+
                  </Text>
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
            </>
          )}
        </View>
      )}

      {/* ────────────────── 2. BROWSE BY CATEGORY ────────────────── */}
      {viewMode === "browse" && (
        <View style={styles.modeWrap}>
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {ALL_DICT_METAS.map((d) => {
              const active = d.languageId === browseMeta.languageId;
              return (
                <Pressable
                  key={d.languageId}
                  onPress={() => {
                    triggerHaptic(6);
                    setTargetLanguage(d.languageId);
                  }}
                  style={pressableStyle([
                    styles.langChip,
                    active && {
                      backgroundColor: theme.gold,
                      borderColor: theme.gold,
                    },
                  ])}
                >
                  <Text
                    style={[
                      styles.langChipText,
                      active && {
                        color: theme.kenyaBlack,
                        fontFamily: "Outfit_800ExtraBold",
                      },
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
                  onPress={() => {
                    triggerHaptic(6);
                    setActiveCategory(c.id);
                    onScrollToTop?.();
                  }}
                  style={pressableStyle([
                    styles.catPill,
                    active && {
                      backgroundColor: theme.gold,
                      borderColor: theme.gold,
                    },
                  ])}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <DynamicIcon
                      emoji={c.icon}
                      size={13}
                      color={active ? theme.kenyaBlack : theme.gold}
                    />
                    <Text
                      style={[
                        styles.catPillText,
                        active && {
                          color: theme.kenyaBlack,
                          fontFamily: "Outfit_800ExtraBold",
                        },
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
              multiline={false}
              numberOfLines={1}
              placeholder={`Filter in ${browseMeta.languageName
                .split("(")[0]
                .trim()} category...`}
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
                <Ionicons
                  name="close-circle"
                  size={18}
                  color={theme.textMuted}
                />
              </Pressable>
            )}
          </View>

          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Showing {visibleCategoryEntries.length} of{" "}
              {categoryEntries.length} phrases in{" "}
              {browseMeta.languageName.split("(")[0].trim()}
            </Text>

            {visibleCategoryEntries.map((e, idx) => {
              const isFav = favoritesSet.has(
                `${browseMeta.languageId}:${e.english}`
              );
              const cleanLang = browseMeta.languageName.split("(")[0].trim();
              return (
                <View key={idx} style={styles.resultCard}>
                  <View style={styles.resultHeader}>
                    <Text style={styles.resultEnglish}>{e.english}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <Pressable
                        onPress={() =>
                          handleShareEntry(
                            cleanLang,
                            e.english,
                            e.translation,
                            e.pronunciation,
                            e.context
                          )
                        }
                        accessibilityRole="button"
                        accessibilityLabel="Share phrase"
                        hitSlop={8}
                      >
                        <Ionicons
                          name="share-social-outline"
                          size={17}
                          color={theme.textSecondary}
                        />
                      </Pressable>
                      <Pressable
                        onPress={() =>
                          toggleFavorite(
                            `${browseMeta.languageId}:${e.english}`
                          )
                        }
                        accessibilityRole="button"
                        accessibilityLabel={
                          isFav
                            ? "Remove from favorites"
                            : "Save to favorites"
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
                  </View>

                  <Text style={styles.resultTranslation}>{e.translation}</Text>

                  {e.pronunciation ? (
                    <View style={styles.pronounceRow}>
                      <Ionicons
                        name="chatbubble-ellipses-outline"
                        size={14}
                        color={theme.sky}
                      />
                      <Text style={styles.pronounceText}>
                        Pronunciation: /{e.pronunciation}/
                      </Text>
                    </View>
                  ) : null}

                  {e.context ? (
                    <Text style={styles.contextText}>
                      {e.context.replace(/\*\*([^*]+)\*\*/g, "$1")}
                    </Text>
                  ) : null}
                </View>
              );
            })}

            {categoryEntries.length > visibleCategoryEntries.length && (
              <Pressable
                onPress={() => setCategoryPage((p) => p + 1)}
                style={pressableStyle(styles.loadMoreBtn)}
              >
                <Text style={styles.loadMoreBtnText}>
                  Load More Entries (
                  {categoryEntries.length - visibleCategoryEntries.length}{" "}
                  remaining)
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      {/* ────────────────── 3. SAVED FAVORITES ────────────────── */}
      {viewMode === "favorites" && (
        <View style={styles.modeWrap}>
          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Saved Favorites ({favorites.length})
            </Text>
            {favorites.length === 0 ? (
              <View style={styles.emptyCard}>
                <Ionicons
                  name="star-outline"
                  size={32}
                  color={theme.textMuted}
                />
                <Text style={styles.emptyTitle}>No Saved Favorites Yet</Text>
                <Text style={styles.emptyDesc}>
                  Tap the star icon on any translation card to save words for
                  quick offline reference.
                </Text>
              </View>
            ) : (
              favoriteItems.map((item) => {
                const cleanLang = item.languageName.split("(")[0].trim();
                return (
                  <View key={item.favKey} style={styles.resultCard}>
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
                                FAMILY_COLORS[item.family?.toLowerCase()] ||
                                "#999"
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
                            {cleanLang}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <Pressable
                          onPress={() =>
                            handleShareEntry(
                              cleanLang,
                              item.entry.english,
                              item.entry.translation,
                              item.entry.pronunciation,
                              item.entry.context
                            )
                          }
                          hitSlop={8}
                        >
                          <Ionicons
                            name="share-social-outline"
                            size={18}
                            color={theme.textSecondary}
                          />
                        </Pressable>
                        <Pressable
                          onPress={() => toggleFavorite(item.favKey)}
                          hitSlop={8}
                        >
                          <Ionicons name="star" size={20} color={theme.gold} />
                        </Pressable>
                      </View>
                    </View>
                    <Text style={styles.resultTranslation}>
                      {item.entry.translation}
                    </Text>
                    <Text style={styles.resultEnglish}>
                      {item.entry.english}
                    </Text>
                    {item.entry.pronunciation ? (
                      <Text style={styles.pronounceText}>
                        Pronunciation: /{item.entry.pronunciation}/
                      </Text>
                    ) : null}
                  </View>
                );
              })
            )}

            {userContributions.length > 0 && (
              <View style={{ marginTop: 14, gap: 10 }}>
                <Text style={styles.resultsCount}>
                  My Added Device Words ({userContributions.length})
                </Text>
                {userContributions.map((uItem) => (
                  <View key={uItem.id} style={styles.resultCard}>
                    <View style={styles.resultHeader}>
                      <View style={styles.resultTagRow}>
                        <View style={styles.catBadge}>
                          <Text style={styles.catBadgeText}>My Device Dictionary</Text>
                        </View>
                        <View style={[styles.familyBadge, { backgroundColor: `${theme.gold}20` }]}>
                          <Text style={[styles.familyBadgeText, { color: theme.gold }]}>
                            {uItem.language}
                          </Text>
                        </View>
                      </View>
                      <Pressable
                        onPress={async () => {
                          const next = userContributions.filter((x) => x.id !== uItem.id);
                          setUserContributions(next);
                          await AsyncStorage.setItem("kh-user-contributions", JSON.stringify(next));
                          showToast("Removed from device dictionary");
                        }}
                        hitSlop={8}
                      >
                        <Ionicons name="trash-outline" size={18} color={theme.kenyaRedLight} />
                      </Pressable>
                    </View>
                    <Text style={styles.resultTranslation}>{uItem.translation}</Text>
                    <Text style={styles.resultEnglish}>{uItem.english}</Text>
                    {uItem.pronunciation ? (
                      <Text style={styles.pronounceText}>
                        Pronunciation: /{uItem.pronunciation}/
                      </Text>
                    ) : null}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      )}

      {/* ────────────────── CONTRIBUTE MODAL WITH KEYBOARD AVOIDANCE & LOCAL STORAGE CLARITY (MOB-11, UX-3) ────────────────── */}
      <Modal
        visible={isContributeOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsContributeOpen(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Ionicons name="add-circle" size={24} color={theme.gold} />
                <Text style={styles.modalTitle}>Add Word to Device</Text>
              </View>
              <Pressable
                onPress={() => setIsContributeOpen(false)}
                accessibilityRole="button"
                accessibilityLabel="Close modal"
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
                  Saved locally to your device ({userContributionsCount} custom{" "}
                  {userContributionsCount === 1 ? "entry" : "entries"} stored
                  offline).
                </Text>
              </View>
            ) : (
              <ScrollView
                style={{ maxHeight: 430 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                <Text style={styles.modalSub}>
                  Saved directly to your device&apos;s offline storage
                  (kh-user-contributions) so you can build your own dialect
                  notes anytime.
                </Text>

                <Text style={styles.inputLabel}>Language</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribLang}
                    onChangeText={setContribLang}
                    placeholder="e.g. Kikuyu, Luo, Turkana..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribLang.length > 0 && (
                    <Pressable onPress={() => setContribLang("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>English Phrase / Term *</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribEnglish}
                    onChangeText={setContribEnglish}
                    placeholder="e.g. Good morning"
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribEnglish.length > 0 && (
                    <Pressable onPress={() => setContribEnglish("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>Native Translation *</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribTranslation}
                    onChangeText={setContribTranslation}
                    placeholder="Native word or phrase..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribTranslation.length > 0 && (
                    <Pressable onPress={() => setContribTranslation("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>
                  Pronunciation (approximate)
                </Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribPronounce}
                    onChangeText={setContribPronounce}
                    placeholder="Phonetic sounding guide..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribPronounce.length > 0 && (
                    <Pressable onPress={() => setContribPronounce("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>
                  Dialect / Cultural Context
                </Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribContext}
                    onChangeText={setContribContext}
                    placeholder="e.g. Used in Nyeri dialect, spoken by elders..."
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                  />
                  {contribContext.length > 0 && (
                    <Pressable onPress={() => setContribContext("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Text style={styles.inputLabel}>Your Name (optional)</Text>
                <View style={{ position: "relative", justifyContent: "center" }}>
                  <TextInput
                    multiline={false}
                    numberOfLines={1}
                    value={contribName}
                    onChangeText={setContribName}
                    placeholder="Your Name"
                    placeholderTextColor={theme.textMuted}
                    style={[styles.modalInput, { paddingRight: 36 }]}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmitContribute}
                  />
                  {contribName.length > 0 && (
                    <Pressable onPress={() => setContribName("")} hitSlop={8} style={{ position: "absolute", right: 10 }}>
                      <Ionicons name="close-circle" size={18} color={theme.textMuted} />
                    </Pressable>
                  )}
                </View>

                <Pressable
                  onPress={handleSubmitContribute}
                  style={pressableStyle(styles.submitBtn)}
                >
                  <Text style={styles.submitBtnText}>
                    Save Locally to Device
                  </Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
