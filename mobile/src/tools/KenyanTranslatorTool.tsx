import { ExpandablePillRow } from "../components/ExpandablePillRow";
import React, { useState, useMemo, useCallback, useEffect } from "react";
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

// Import all 13 dictionaries
import swahiliDict from "../shared/data/dictionaries/swahili.json";
import kikuyuDict from "../shared/data/dictionaries/kikuyu.json";
import luoDict from "../shared/data/dictionaries/luo.json";
import kalenjinDict from "../shared/data/dictionaries/kalenjin.json";
import luhyaDict from "../shared/data/dictionaries/luhya.json";
import kambaDict from "../shared/data/dictionaries/kamba.json";
import meruDict from "../shared/data/dictionaries/meru.json";
import maasaiDict from "../shared/data/dictionaries/maasai.json";
import kisiiDict from "../shared/data/dictionaries/kisii.json";
import somaliDict from "../shared/data/dictionaries/somali.json";
import turkanaDict from "../shared/data/dictionaries/turkana.json";
import mijikendaDict from "../shared/data/dictionaries/mijikenda.json";
import tesoDict from "../shared/data/dictionaries/teso.json";

interface DictEntry {
  english: string;
  translation: string;
  pronunciation: string;
  context: string;
  audioFile?: string | null;
}

interface DictCategory {
  id: string;
  name: string;
  icon: string;
  entries: DictEntry[];
}

interface Dictionary {
  languageId: string;
  languageName: string;
  family: string;
  nativeName: string;
  script?: string;
  speakerCount?: number;
  counties?: string[];
  contributorNote?: string;
  categories: DictCategory[];
}

const ALL_DICTS: Dictionary[] = [
  swahiliDict,
  kikuyuDict,
  luoDict,
  kalenjinDict,
  luhyaDict,
  kambaDict,
  meruDict,
  maasaiDict,
  kisiiDict,
  somaliDict,
  turkanaDict,
  mijikendaDict,
  tesoDict,
] as any[];

const DICT_MAP: Record<string, Dictionary> = {};
ALL_DICTS.forEach((d) => {
  DICT_MAP[d.languageId] = d;
});

const FAMILY_COLORS: Record<string, string> = {
  bantu: "#2FA463",
  nilotic: "#C8961E",
  cushitic: "#BE2126",
  other: "#1A8BD1",
};

const POPULAR_COMPARE_WORDS = [
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

export function KenyanTranslatorTool() {
  const { theme, styles } = useDynamicStyles(createStyles);

  const [viewMode, setViewMode] = useState<"translate" | "compare" | "browse">(
    "translate"
  );
  const [sourceLanguage, setSourceLanguage] = useState<string>("english");
  const [targetLanguage, setTargetLanguage] = useState<string>("kamba");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("greetings");

  const [compareLanguages, setCompareLanguages] = useState<string[]>(() =>
    ALL_DICTS.map((d) => d.languageId)
  );
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showTargetPicker, setShowTargetPicker] = useState(false);

  // Random word of the day
  const [randomWord, setRandomWord] = useState<{
    entry: DictEntry;
    langName: string;
    langId: string;
  } | null>(null);

  // Contribute Modal
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [contribLang, setContribLang] = useState("Swahili");
  const [contribEnglish, setContribEnglish] = useState("");
  const [contribTranslation, setContribTranslation] = useState("");
  const [contribPronounce, setContribPronounce] = useState("");
  const [contribContext, setContribContext] = useState("");
  const [contribName, setContribName] = useState("");
  const [contribSubmitted, setContribSubmitted] = useState(false);

  // Load saved recent searches & favorites
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

  // Roll random word
  const rollRandomWord = useCallback(() => {
    const populatedDicts = ALL_DICTS.filter((d) => d.categories.some((c: any) => c.entries.length > 0));
    if (populatedDicts.length === 0) return;
    const dict = populatedDicts[Math.floor(Math.random() * populatedDicts.length)];
    const validCats = dict.categories.filter((c: any) => c.entries.length > 0);
    if (validCats.length === 0) return;
    const cat = validCats[Math.floor(Math.random() * validCats.length)];
    const entry = cat.entries[Math.floor(Math.random() * cat.entries.length)];
    setRandomWord({
      entry,
      langName: dict.languageName.split("(")[0].trim(),
      langId: dict.languageId,
    });
  }, []);

  useEffect(() => {
    rollRandomWord();
  }, [rollRandomWord]);

  // Swap languages
  const swapLanguages = () => {
    if (sourceLanguage === "english") {
      setSourceLanguage(targetLanguage);
      setTargetLanguage("english");
    } else {
      const prevSource = sourceLanguage;
      setSourceLanguage("english");
      setTargetLanguage(prevSource);
    }
    setSearchQuery("");
  };

  const targetDict = DICT_MAP[targetLanguage] || DICT_MAP.swahili;
  const sourceDict =
    sourceLanguage !== "english" ? DICT_MAP[sourceLanguage] : null;

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();

    const results: {
      entry: DictEntry;
      categoryName: string;
      categoryIcon: string;
      languageId: string;
      languageName: string;
      family: string;
      matchType: "exact" | "partial";
    }[] = [];

    if (sourceLanguage === "english") {
      // English -> Target Kenyan Language
      if (targetDict) {
        targetDict.categories.forEach((cat) => {
          cat.entries.forEach((entry) => {
            const engLower = entry.english.toLowerCase();
            if (engLower === q) {
              results.push({
                entry,
                categoryName: cat.name,
                categoryIcon: cat.icon,
                languageId: targetDict.languageId,
                languageName: targetDict.languageName,
                family: targetDict.family,
                matchType: "exact",
              });
            } else if (engLower.includes(q)) {
              results.push({
                entry,
                categoryName: cat.name,
                categoryIcon: cat.icon,
                languageId: targetDict.languageId,
                languageName: targetDict.languageName,
                family: targetDict.family,
                matchType: "partial",
              });
            }
          });
        });
      }
    } else if (sourceDict) {
      // Kenyan Language -> English
      sourceDict.categories.forEach((cat) => {
        cat.entries.forEach((entry) => {
          const transLower = entry.translation.toLowerCase();
          if (transLower === q) {
            results.push({
              entry,
              categoryName: cat.name,
              categoryIcon: cat.icon,
              languageId: sourceDict.languageId,
              languageName: sourceDict.languageName,
              family: sourceDict.family,
              matchType: "exact",
            });
          } else if (transLower.includes(q)) {
            results.push({
              entry,
              categoryName: cat.name,
              categoryIcon: cat.icon,
              languageId: sourceDict.languageId,
              languageName: sourceDict.languageName,
              family: sourceDict.family,
              matchType: "partial",
            });
          }
        });
      });
    }

    results.sort((a, b) => (a.matchType === "exact" ? -1 : 1));
    return results;
  }, [searchQuery, sourceLanguage, targetDict, sourceDict]);

  // Comparison Results Across All 13 Languages
  const comparisonResults = useMemo(() => {
    if (viewMode !== "compare" || !searchQuery.trim()) return [];
    const cleanTerm = (s: string) =>
      s
        .toLowerCase()
        .replace(/\s*\([^)]*\)/g, "")
        .replace(/[!?.]/g, "")
        .trim();

    const q = cleanTerm(searchQuery);

    // Check if query matches a local translation in any dictionary
    let matchedEnglish = q;
    for (const d of ALL_DICTS) {
      for (const cat of d.categories) {
        for (const entry of cat.entries) {
          const transClean = cleanTerm(entry.translation);
          const transParts = transClean.split(/[\/,;]/).map((s) => s.trim()).filter(Boolean);
          if (transClean === q || transParts.includes(q)) {
            matchedEnglish = cleanTerm(entry.english);
            break;
          }
        }
        if (matchedEnglish !== q) break;
      }
      if (matchedEnglish !== q) break;
    }

    const targetWords = [q];
    if (matchedEnglish !== q) targetWords.unshift(matchedEnglish);
    const slashParts = matchedEnglish.split(/[\/,;]/).map((s) => s.trim().toLowerCase()).filter(Boolean);
    slashParts.forEach((sp) => {
      if (!targetWords.includes(sp)) targetWords.push(sp);
    });

    const list: {
      dict: Dictionary;
      entry: DictEntry | null;
    }[] = [];

    compareLanguages.forEach((langId) => {
      const dict = DICT_MAP[langId];
      if (!dict) return;
      let found: DictEntry | null = null;

      // Pass 1: Exact headword or synonym match (stripping parenthetical notes)
      for (const cat of dict.categories) {
        for (const entry of cat.entries) {
          const engRaw = entry.english.toLowerCase().trim();
          const engClean = cleanTerm(entry.english);
          const engParts = engClean.split(/[\/,;]/).map((s) => s.trim()).filter(Boolean);
          const transClean = cleanTerm(entry.translation);
          const transParts = transClean.split(/[\/,;]/).map((s) => s.trim()).filter(Boolean);

          if (
            targetWords.some(
              (tw) =>
                engRaw === tw ||
                engClean === tw ||
                engParts.includes(tw) ||
                engParts.includes(`to ${tw}`) ||
                transClean === tw ||
                transParts.includes(tw)
            )
          ) {
            found = entry;
            break;
          }
        }
        if (found) break;
      }

      // Pass 2: Only match multi-word phrases if the user searched a multi-word phrase
      if (!found) {
        for (const cat of dict.categories) {
          for (const entry of cat.entries) {
            const engClean = cleanTerm(entry.english);
            if (
              targetWords.some((tw) => {
                if (!tw.includes(" ")) return false;
                return engClean.includes(tw);
              })
            ) {
              found = entry;
              break;
            }
          }
          if (found) break;
        }
      }

      list.push({ dict, entry: found });
    });

    return list;
  }, [searchQuery, viewMode, compareLanguages]);

  // Total dictionary entries
  const totalEntriesCount = useMemo(() => {
    return ALL_DICTS.reduce(
      (sum, d) => sum + d.categories.reduce((s, c) => s + c.entries.length, 0),
      0
    );
  }, []);

  // Category browser entries
  const categoryEntries = useMemo(() => {
    if (!targetDict) return [];
    const cat = targetDict.categories.find((c) => c.id === activeCategory);
    return cat ? cat.entries : [];
  }, [targetDict, activeCategory]);

  const handleOpenContribute = (defaultEng?: string) => {
    setContribLang(targetDict?.languageName?.split("(")[0]?.trim() || "Swahili");
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
      {/* Toast */}
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
          <Text style={styles.statNumber}>{ALL_DICTS.length}</Text>
          <Text style={styles.statCaption}>Kenyan Languages</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>42+</Text>
          <Text style={styles.statCaption}>Dialect Groups</Text>
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
            <Text style={styles.randomEnglish}>&ldquo;{randomWord.entry.english}&rdquo;</Text>
            {randomWord.entry.pronunciation ? (
              <Text style={styles.randomPronounce}>
                🗣️ /{randomWord.entry.pronunciation}/
              </Text>
            ) : null}
            <View style={styles.randomMetaRow}>
              <View
                style={[
                  styles.familyPill,
                  {
                    backgroundColor: `${
                      FAMILY_COLORS[
                        DICT_MAP[randomWord.langId]?.family?.toLowerCase() || "other"
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
                          DICT_MAP[randomWord.langId]?.family?.toLowerCase() || "other"
                        ],
                    },
                  ]}
                >
                  {randomWord.langName} •{" "}
                  {DICT_MAP[randomWord.langId]?.family?.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* 3 Main View Tabs (Standalone Horizontal Pills) */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 2 }}>
        {(
          [
            { id: "translate" as const, label: "Translate" },
            { id: "compare" as const, label: "Compare (13)" },
            { id: "browse" as const, label: "Categories" },
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
            {/* Source */}
            <View style={styles.langPickerBox}>
              <Text style={styles.langPickerLabel}>From</Text>
              <Text style={styles.langPickerValue}>
                {sourceLanguage === "english"
                  ? "English"
                  : sourceDict?.languageName?.split("(")[0]?.trim() || "English"}
              </Text>
            </View>

            {/* Swap Button */}
            <Pressable onPress={swapLanguages} style={styles.swapBtn} hitSlop={10}>
              <Ionicons name="swap-horizontal" size={20} color={theme.gold} />
            </Pressable>

            {/* Target (Tap to switch target language) */}
            <Pressable
              onPress={() => setShowTargetPicker((v) => !v)}
              style={styles.langPickerBox}
            >
              <Text style={styles.langPickerLabel}>To (Tap to change)</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 2 }}>
                <Text style={[styles.langPickerValue, { marginTop: 0 }]}>
                  {targetLanguage === "english"
                    ? "English"
                    : targetDict?.languageName?.split("(")[0]?.trim() || "Swahili"}
                </Text>
                <Ionicons
                  name={showTargetPicker ? "chevron-up" : "chevron-down"}
                  size={14}
                  color={theme.gold}
                />
              </View>
            </Pressable>
          </View>

          {/* Target Language Selection Pills (Collapsible so it never fills the screen) */}
          {showTargetPicker && (
            <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
              {ALL_DICTS.map((d) => {
                const active = d.languageId === targetLanguage;
                return (
                  <Pressable
                    key={d.languageId}
                    onPress={() => {
                      setTargetLanguage(d.languageId);
                      if (sourceLanguage !== "english") setSourceLanguage("english");
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
              placeholder={`Type a word in ${
                sourceLanguage === "english"
                  ? "English"
                  : sourceDict?.languageName?.split("(")[0]?.trim()
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

          {/* Search Results List */}
          {searchQuery.trim().length > 0 && (
            <View style={styles.resultsWrap}>
              <Text style={styles.resultsCount}>
                Found {searchResults.length} translation
                {searchResults.length !== 1 ? "s" : ""}
              </Text>

              {searchResults.map((item, idx) => {
                const isFav = favorites.includes(
                  `${item.languageId}:${item.entry.english}`
                );
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

                      {/* Favorite Button */}
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

                    {/* Translations */}
                    <Text style={styles.resultTranslation}>
                      {item.entry.translation}
                    </Text>
                    <Text style={styles.resultEnglish}>
                      {item.entry.english}
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
                        💡 {item.entry.context}
                      </Text>
                    ) : null}
                  </View>
                );
              })}

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

          {/* If search query is empty: show quick suggestions */}
          {searchQuery.trim().length === 0 && (
            <View style={styles.quickPromptBox}>
              <Text style={styles.quickPromptTitle}>
                Popular phrases to translate:
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

      {/* ────────────────── 2. COMPARE MODE ────────────────── */}
      {viewMode === "compare" && (
        <View style={styles.modeWrap}>
          <Text style={styles.modeDescription}>
            Compare how a word or concept is expressed across all 13 Kenyan indigenous languages.
          </Text>

          {/* Quick word pills */}
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {POPULAR_COMPARE_WORDS.map((w) => {
              const active = searchQuery.toLowerCase() === w.toLowerCase();
              return (
                <Pressable
                  key={w}
                  onPress={() => setSearchQuery(w)}
                  style={[
                    styles.compareChip,
                    active && { backgroundColor: theme.gold, borderColor: theme.gold },
                  ]}
                >
                  <Text
                    style={[
                      styles.compareChipText,
                      active && { color: theme.kenyaBlack, fontWeight: "800" },
                    ]}
                  >
                    {w}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          {/* Search Input */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color={theme.textMuted} />
            <TextInput
              placeholder="Type word to compare (e.g. Water)..."
              placeholderTextColor={theme.textMuted}
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")} hitSlop={8}>
                <Ionicons name="close-circle" size={18} color={theme.textMuted} />
              </Pressable>
            )}
          </View>

          {/* Comparison Cards Grid */}
          {searchQuery.trim().length > 0 ? (
            <View style={styles.comparisonGrid}>
              {comparisonResults.map(({ dict, entry }) => {
                const familyColor =
                  FAMILY_COLORS[dict.family?.toLowerCase()] || theme.gold;
                return (
                  <View key={dict.languageId} style={styles.compareCard}>
                    <View style={styles.compareCardHeader}>
                      <Text style={styles.compareLangName}>
                        {dict.languageName.split("(")[0].trim()}
                      </Text>
                      <View
                        style={[
                          styles.familyBadge,
                          { backgroundColor: `${familyColor}20` },
                        ]}
                      >
                        <Text
                          style={[styles.familyBadgeText, { color: familyColor }]}
                        >
                          {dict.family}
                        </Text>
                      </View>
                    </View>

                    {entry ? (
                      <View>
                        <Text style={styles.compareTranslation}>
                          {entry.translation}
                        </Text>
                        {entry.pronunciation ? (
                          <Text style={styles.comparePronounce}>
                            /{entry.pronunciation}/
                          </Text>
                        ) : null}
                        {entry.context ? (
                          <Text style={styles.compareContext} >
                            {entry.context}
                          </Text>
                        ) : null}
                      </View>
                    ) : (
                      <View style={styles.missingWordRow}>
                        <Text style={styles.missingWordText}>
                          Not yet recorded
                        </Text>
                        <Pressable
                          onPress={() => {
                            setContribLang(dict.languageName.split("(")[0].trim());
                            setContribEnglish(searchQuery);
                            setIsContributeOpen(true);
                          }}
                          style={styles.addWordMiniBtn}
                        >
                          <Text style={styles.addWordMiniText}>+ Add</Text>
                        </Pressable>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={styles.promptHelper}>
              <Ionicons name="sparkles-outline" size={28} color={theme.gold} />
              <Text style={styles.promptHelperText}>
                Tap any word chip above or enter an English or Kenyan word to see
                all 13 translations side-by-side!
              </Text>
            </View>
          )}
        </View>
      )}

      {/* ────────────────── 3. BROWSE BY CATEGORY ────────────────── */}
      {viewMode === "browse" && (
        <View style={styles.modeWrap}>
          {/* Target Language Selection Pills */}
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {ALL_DICTS.map((d) => {
              const active = d.languageId === targetLanguage;
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

          {/* Category Chips */}
          <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
            {targetDict.categories.map((c) => {
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
                  <Text
                    style={[
                      styles.catPillText,
                      active && { color: theme.kenyaBlack, fontWeight: "800" },
                    ]}
                  >
                    {c.icon} {c.name} ({c.entries.length})
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>

          {/* Entries for selected category */}
          <View style={styles.resultsWrap}>
            <Text style={styles.resultsCount}>
              Showing {categoryEntries.length} phrases in{" "}
              {targetDict.languageName.split("(")[0].trim()}
            </Text>

            {categoryEntries.map((e, idx) => (
              <View key={idx} style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <Text style={styles.resultEnglish}>{e.english}</Text>
                  <Pressable
                    onPress={() =>
                      toggleFavorite(`${targetDict.languageId}:${e.english}`)
                    }
                    hitSlop={8}
                  >
                    <Ionicons
                      name={
                        favorites.includes(`${targetDict.languageId}:${e.english}`)
                          ? "star"
                          : "star-outline"
                      }
                      size={18}
                      color={
                        favorites.includes(`${targetDict.languageId}:${e.english}`)
                          ? theme.gold
                          : theme.textMuted
                      }
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
                  <Text style={styles.contextText}>💡 {e.context}</Text>
                ) : null}
              </View>
            ))}
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
                  value={contribLang}
                  onChangeText={setContribLang}
                  placeholder="e.g. Kikuyu, Luo, Turkana..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>English Phrase / Term *</Text>
                <TextInput
                  value={contribEnglish}
                  onChangeText={setContribEnglish}
                  placeholder="e.g. Good morning"
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Native Translation *</Text>
                <TextInput
                  value={contribTranslation}
                  onChangeText={setContribTranslation}
                  placeholder="Native word or phrase..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Pronunciation (approximate)</Text>
                <TextInput
                  value={contribPronounce}
                  onChangeText={setContribPronounce}
                  placeholder="Phonetic sounding guide..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Dialect / Cultural Context</Text>
                <TextInput
                  value={contribContext}
                  onChangeText={setContribContext}
                  placeholder="e.g. Used in Nyeri dialect, spoken by elders..."
                  placeholderTextColor={theme.textMuted}
                  style={styles.modalInput}
                />

                <Text style={styles.inputLabel}>Your Name (for credits)</Text>
                <TextInput
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

const createStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    toastBox: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.kenyaGreen,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    toastText: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.kenyaGreenLight,
    },
    statsBar: {
      flexDirection: "row",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      paddingVertical: 12,
      alignItems: "center",
      justifyContent: "space-around",
    },
    statItem: {
      alignItems: "center",
    },
    statNumber: {
      fontSize: 18,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.gold,
    },
    statCaption: {
      fontSize: 10,
      color: theme.textSecondary,
      marginTop: 2,
    },
    statDivider: {
      width: 1,
      height: 24,
      backgroundColor: theme.border,
    },
    randomCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: `${theme.gold}40`,
      borderRadius: 16,
      padding: 14,
    },
    randomHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    randomTag: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    randomTagText: {
      fontSize: 11,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.gold,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    rollBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
      backgroundColor: `${theme.gold}15`,
    },
    rollBtnText: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.gold,
    },
    randomBody: {
      gap: 2,
    },
    randomTranslation: {
      fontSize: 22,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.gold,
    },
    randomEnglish: {
      fontSize: 14,
      fontStyle: "italic",
      color: theme.textPrimary,
    },
    randomPronounce: {
      fontSize: 12,
      color: theme.sky,
      marginTop: 2,
    },
    randomMetaRow: {
      flexDirection: "row",
      marginTop: 6,
    },
    familyPill: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
    },
    familyPillText: {
      fontSize: 10,
      fontWeight: "800",
    },
    tabBar: {
      flexDirection: "row",
      backgroundColor: theme.bgCard,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 4,
      gap: 4,
    },
    tabBtn: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingVertical: 8,
      borderRadius: 8,
    },
    tabBtnActive: {
      backgroundColor: theme.gold,
    },
    tabBtnText: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
    },
    tabBtnTextActive: {
      color: theme.kenyaBlack,
      fontWeight: "800",
    },
    modeWrap: {
      gap: 12,
    },
    modeDescription: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 18,
    },
    langPairRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 10,
    },
    langPickerBox: {
      flex: 1,
      alignItems: "center",
    },
    langPickerLabel: {
      fontSize: 10,
      color: theme.textMuted,
      textTransform: "uppercase",
      fontWeight: "700",
    },
    langPickerValue: {
      fontSize: 15,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.textPrimary,
      marginTop: 2,
    },
    swapBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: `${theme.gold}20`,
      alignItems: "center",
      justifyContent: "center",
    },
    horizontalPills: {
      flexDirection: "row",
      gap: 8,
      paddingVertical: 2,
    },
    langChip: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
    },
    langChipText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.textPrimary,
    },
    catPill: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
    },
    catPillText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.textPrimary,
    },
    compareChip: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
    },
    compareChipText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.textPrimary,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 4,
      gap: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      fontWeight: "600",
      color: theme.textPrimary,
      paddingVertical: 8,
    },
    recentsBox: {
      gap: 6,
    },
    recentsTitle: {
      fontSize: 11,
      color: theme.textMuted,
      fontWeight: "700",
    },
    recentsRow: {
      flexDirection: "row",
      gap: 6,
    },
    recentChip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    recentChipText: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    resultsWrap: {
      gap: 10,
    },
    resultsCount: {
      fontSize: 12,
      color: theme.textMuted,
      fontWeight: "600",
    },
    resultCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 14,
      gap: 4,
    },
    resultHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
    },
    resultTagRow: {
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
    },
    catBadge: {
      backgroundColor: theme.bgElevated,
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    catBadgeText: {
      fontSize: 10,
      color: theme.textSecondary,
      fontWeight: "700",
    },
    familyBadge: {
      borderRadius: 6,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    familyBadgeText: {
      fontSize: 10,
      fontWeight: "800",
    },
    resultTranslation: {
      fontSize: 18,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.gold,
    },
    resultEnglish: {
      fontSize: 14,
      color: theme.textPrimary,
      fontWeight: "600",
    },
    pronounceRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginTop: 2,
    },
    pronounceText: {
      fontSize: 12,
      color: theme.sky,
      fontWeight: "600",
    },
    contextText: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: 2,
    },
    emptyCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 20,
      alignItems: "center",
      gap: 8,
    },
    emptyTitle: {
      fontSize: 14,
      fontWeight: "700",
      color: theme.textPrimary,
      textAlign: "center",
    },
    emptyDesc: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: "center",
    },
    contributeBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      backgroundColor: theme.gold,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 8,
      marginTop: 4,
    },
    contributeBtnText: {
      fontSize: 12,
      fontWeight: "800",
      color: "#1A1108",
    },
    quickPromptBox: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 14,
      padding: 12,
      gap: 8,
    },
    quickPromptTitle: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
    },
    popularRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },
    popularWordChip: {
      backgroundColor: theme.bgElevated,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    popularWordText: {
      fontSize: 12,
      color: theme.textPrimary,
      fontWeight: "600",
    },
    comparisonGrid: {
      gap: 8,
    },
    compareCard: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      padding: 12,
      gap: 4,
    },
    compareCardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    compareLangName: {
      fontSize: 13,
      fontWeight: "800",
      color: theme.textPrimary,
    },
    compareTranslation: {
      fontSize: 16,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.gold,
      marginTop: 2,
    },
    comparePronounce: {
      fontSize: 11,
      color: theme.sky,
    },
    compareContext: {
      fontSize: 10,
      color: theme.textSecondary,
    },
    missingWordRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 2,
    },
    missingWordText: {
      fontSize: 11,
      color: theme.textMuted,
      fontStyle: "italic",
    },
    addWordMiniBtn: {
      backgroundColor: `${theme.gold}20`,
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    addWordMiniText: {
      fontSize: 11,
      color: theme.gold,
      fontWeight: "700",
    },
    promptHelper: {
      alignItems: "center",
      padding: 24,
      gap: 8,
    },
    promptHelperText: {
      fontSize: 13,
      color: theme.textSecondary,
      textAlign: "center",
      lineHeight: 18,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "flex-end",
    },
    modalCard: {
      backgroundColor: theme.bgCard,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      borderWidth: 1,
      borderColor: theme.border,
      maxHeight: "85%",
    },
    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    modalTitle: {
      fontSize: 18,
      fontFamily: "Outfit_700Bold",
      fontWeight: "800",
      color: theme.textPrimary,
    },
    modalSub: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: 12,
    },
    inputLabel: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 4,
      marginTop: 6,
    },
    modalInput: {
      backgroundColor: theme.bgElevated,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontSize: 13,
      color: theme.textPrimary,
      fontWeight: "600",
    },
    submitBtn: {
      backgroundColor: theme.gold,
      borderRadius: 12,
      paddingVertical: 12,
      alignItems: "center",
      marginTop: 16,
      marginBottom: 10,
    },
    submitBtnText: {
      fontSize: 14,
      fontWeight: "800",
      color: "#1A1108",
    },
    successBox: {
      alignItems: "center",
      padding: 24,
      gap: 10,
    },
    successTitle: {
      fontSize: 20,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.textPrimary,
    },
    successDesc: {
      fontSize: 13,
      color: theme.textSecondary,
      textAlign: "center",
    },
  });
