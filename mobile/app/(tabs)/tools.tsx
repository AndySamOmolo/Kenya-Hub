import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  categoryColorMap,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  parseSavedTools,
} from "../../src/theme";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolUsageScore,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import matatuData from "../../src/shared/data/matatu-routes.json";
import { DynamicIcon } from "../../src/components/DynamicIcon";

const MATATU_KEYWORDS = [
  "matatu",
  "sacco",
  "bus",
  "fare",
  "stage",
  "route",
  "commute",
  "terminus",
  "transport",
  "nairobi",
  "mombasa",
  "kisumu",
  "nakuru",
  "eldoret",
  "thika",
];

const ToolItem = React.memo(function ToolItem({
  item,
  isPinned = false,
  theme,
  onPressTool,
}: {
  item: (typeof TOOLS)[0];
  isPinned?: boolean;
  theme: ReturnType<typeof useTheme>["theme"];
  onPressTool: (slug: string) => void;
}) {
  const categoryColor = categoryColorMap[item.category] || theme.gold;
  const catInfo = getCategoryInfo(item.category);

  return (
    <View
      style={[
        styles.cardWrap,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: isPinned ? `${theme.gold}66` : theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        onPress={() => onPressTool(item.slug)}
        style={styles.card}
      >
        <View style={styles.cardHeaderRow}>
          <View
            style={[
              styles.cardIconWrap,
              {
                backgroundColor: `${categoryColor}1A`,
                borderColor: `${categoryColor}38`,
              },
            ]}
          >
            <DynamicIcon emoji={item.icon} size={22} color={categoryColor} />
          </View>
          <View style={styles.body}>
            <View style={styles.categoryPillWrap}>
              <View
                style={[styles.categoryDot, { backgroundColor: categoryColor }]}
              />
              <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                {(catInfo?.name || item.category).toUpperCase()}
              </Text>
              {isPinned && (
                <View
                  style={[
                    styles.pinnedTag,
                    { backgroundColor: `${theme.gold}20` },
                  ]}
                >
                  <Ionicons name="bookmark" size={10} color={theme.gold} />
                  <Text style={[styles.pinnedTagText, { color: theme.gold }]}>
                    PINNED
                  </Text>
                </View>
              )}
            </View>
            <Text style={[styles.title, { color: theme.textPrimary }]}>
              {item.shortTitle}
            </Text>
          </View>
          <View
            style={[
              styles.trailingCircle,
              { backgroundColor: theme.surfaceContainerHigh },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={16}
              color={theme.textSecondary}
            />
          </View>
        </View>

        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {item.description}
        </Text>

        <View
          style={[styles.sourceBadge, { borderTopColor: theme.outlineVariant }]}
        >
          <Ionicons
            name="shield-checkmark"
            size={13}
            color={theme.kenyaGreenLight}
          />
          <Text style={[styles.source, { color: theme.textMuted }]}>
            {item.dataSource}
          </Text>
        </View>
      </Pressable>
    </View>
  );
});

export default function ToolsScreen() {
  const router = useRouter();
  const { theme, isDark } = useTheme();
  const params = useLocalSearchParams<{ category?: string; q?: string }>();
  const [query, setQuery] = useState(params.q ?? "");
  const [category, setCategory] = useState(params.category ?? "all");
  const deferredQuery = useDeferredValue(query);
  const listRef = useRef<FlatList>(null);
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">(
    "popular"
  );
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});

  const pinnedSet = useMemo(() => new Set(pinnedSlugs), [pinnedSlugs]);
  const handlePressTool = useCallback(
    (slug: string) => {
      router.push({ pathname: "/tools/[slug]", params: { slug } });
    },
    [router]
  );
  const renderToolItem = useCallback(
    ({ item }: { item: (typeof TOOLS)[0] }) => (
      <ToolItem
        item={item}
        isPinned={pinnedSet.has(item.slug)}
        theme={theme}
        onPressTool={handlePressTool}
      />
    ),
    [pinnedSet, theme, handlePressTool]
  );

  useEffect(() => {
    setCategory(params.category || "all");
    if (params.q !== undefined) setQuery(params.q);
  }, [params.category, params.q]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      AsyncStorage.multiGet(["kh-saved-tools", "kh-tool-visits"])
        .then((entries) => {
          if (!active) return;
          const map = new Map(entries);
          setPinnedSlugs(parseSavedTools(map.get("kh-saved-tools")));
          const visitsRaw = map.get("kh-tool-visits");
          if (!visitsRaw) {
            setVisitCounts({});
          } else {
            try {
              const parsed = JSON.parse(visitsRaw);
              setVisitCounts(parsed && typeof parsed === "object" ? parsed : {});
            } catch {
              setVisitCounts({});
            }
          }
        })
        .catch(() => {});
      return () => {
        active = false;
      };
    }, [])
  );

  const hasAnyVisits = useMemo(
    () => Object.values(visitCounts).some((c) => c > 0),
    [visitCounts]
  );

  const pinnedTools = useMemo(
    () =>
      pinnedSlugs
        .map((s) => TOOLS.find((t) => t.slug === s))
        .filter(Boolean) as (typeof TOOLS)[0][],
    [pinnedSlugs]
  );

  const matatuSummary = useMemo(() => {
    const routesByTown = (matatuData as any).routes || {};
    const towns = ((matatuData as any).towns || []).filter((t: any) => t.isActive);
    let routeCount = 0;
    let stageCount = 0;
    for (const list of Object.values(routesByTown)) {
      const arr = list as any[];
      routeCount += arr.length;
      for (const r of arr) {
        stageCount += r.stages?.length || 0;
      }
    }
    return { routeCount, stageCount, townCount: towns.length };
  }, []);

  const showMatatuHubCard =
    category === "transport-travel" ||
    (query.trim().length > 0 &&
      (MATATU_KEYWORDS.some((kw) => query.trim().toLowerCase().includes(kw)) ||
        "matatu routes sacco fares".includes(query.trim().toLowerCase())));

  const filtered = useMemo(() => {
    const list = TOOLS.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;
      const q = query.toLowerCase().trim();
      if (!q) return matchesCategory;
      const haystack =
        `${tool.title} ${tool.shortTitle} ${tool.description} ${tool.keywords.join(" ")}`.toLowerCase();
      return matchesCategory && haystack.includes(q);
    });

    return [...list].sort((a, b) => {
      const labelComparison = a.shortTitle.localeCompare(
        b.shortTitle,
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      );
      if (sortBy === "alphabetical") return labelComparison;
      if (sortBy === "category")
        return a.category.localeCompare(b.category) || labelComparison;

      if (hasAnyVisits) {
        const aVisits = visitCounts[a.slug] ?? 0;
        const bVisits = visitCounts[b.slug] ?? 0;
        if (bVisits !== aVisits) return bVisits - aVisits;
      }
      return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
    });
  }, [category, query, sortBy, hasAnyVisits, visitCounts]);

  const categories = useMemo(
    () => [
      { id: "all", name: "All", icon: "🧰", count: TOOLS.length },
      ...TOOL_CATEGORIES.map((cat) => ({
        ...cat,
        count: TOOLS.filter((t) => t.category === cat.id).length,
      })),
    ],
    []
  );

  const showPinnedSection =
    pinnedTools.length > 0 && query.trim() === "" && category === "all";

  return (
    <SafeAreaView
      key={isDark ? "dark" : "light"}
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        title={category !== "all" ? getCategoryInfo(category)?.name || "All Tools" : "All Tools"}
        subtitle={
          category !== "all"
            ? getCategoryInfo(category)?.description || "Filtered Kenya utilities"
            : `${TOOLS.length} free tools built for Kenya`
        }
      />

      <View
        style={[
          styles.filterHeader,
          {
            backgroundColor: theme.surfaceContainerLow,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        {/* Material 3 Pill Search Bar */}
        <View
          style={[
            styles.searchWrap,
            {
              backgroundColor: theme.surfaceContainerHigh,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <Ionicons
            name="search"
            size={16}
            color={theme.gold}
            style={styles.searchIcon}
          />
          <TextInput
            
            value={query}
            onChangeText={setQuery}
            placeholder={`Search ${TOOLS.length} tools or Matatu routes...`}
            numberOfLines={1}
            multiline={false}
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
            autoCorrect={false}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={16}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Horizontal Scrolling Category Pills with Refined Scroll-Fade Bars & Expand Toggle */}
        <ExpandablePillRow
          fadeColor={theme.surfaceContainerLow}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingVertical: 2,
          }}
        >
          {categories.map((item) => {
            const active = item.id === category;
            const dotColor =
              item.id === "all"
                ? theme.gold
                : categoryColorMap[item.id] || theme.gold;
            return (
              <Pressable
                key={item.id}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => setCategory(item.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  minHeight: 28,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: active ? theme.gold : dotColor,
                  }}
                />
                <Text
                  style={{
                    fontSize: 11.5,
                    lineHeight: 16,
                    paddingBottom: 0,
                    includeFontPadding: false,
                    textAlignVertical: "center",
                    fontFamily: active ? "Outfit_700Bold" : "Inter_600SemiBold",
                    color: active
                      ? theme.onPrimaryContainer
                      : theme.textSecondary,
                  }}
                >
                  {item.name} ({item.count})
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        {/* Compact Single-Line Sort Row with Refined Scroll-Fade Bars */}
        <View style={styles.sortRow}>
          <Text style={[styles.sortLabel, { color: theme.textMuted }]}>
            SORT BY
          </Text>
          <ExpandablePillRow
            style={{ flex: 1 }}
            showExpandButton={false}
            fadeColor={theme.surfaceContainerLow}
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            {(
              [
                { id: "popular", label: "Most used", icon: "trending-up" as const },
                { id: "alphabetical", label: "A–Z", icon: "text" as const },
                { id: "category", label: "Category", icon: "list" as const },
              ] as const
            ).map((option) => {
              const active = sortBy === option.id;
              return (
                <Pressable
                  key={option.id}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => setSortBy(option.id)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    paddingHorizontal: 9,
                    paddingVertical: 4,
                    minHeight: 26,
                    borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: active
                      ? theme.primaryContainer
                      : theme.surfaceContainer,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  }}
                >
                  <Ionicons
                    name={option.icon}
                    size={11}
                    color={active ? theme.onPrimaryContainer : theme.gold}
                  />
                  <Text
                    style={[
                      styles.segmentText,
                      {
                        color: active
                          ? theme.onPrimaryContainer
                          : theme.textSecondary,
                      },
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </ExpandablePillRow>
        </View>
      </View>

      <FlatList
        ref={listRef}
        data={filtered}
        extraData={theme}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        updateCellsBatchingPeriod={40}
        windowSize={5}
        removeClippedSubviews={Platform.OS === "android"}
        ListHeaderComponent={
          <>
            {(query.trim() !== "" || category !== "all") &&
              (filtered.length > 0 || showMatatuHubCard) && (
                <View style={styles.resultsBar}>
                  <Text style={[styles.resultsText, { color: theme.textMuted }]}>
                    Showing {filtered.length} of {TOOLS.length} tools
                    {query.trim() ? ` matching "${query.trim()}"` : ""}
                  </Text>
                  <Pressable
                    onPress={() => {
                      setQuery("");
                      setCategory("all");
                    }}
                    hitSlop={8}
                  >
                    <Text style={[styles.clearFilterText, { color: theme.gold }]}>
                      Clear filter
                    </Text>
                  </Pressable>
                </View>
              )}

            {showMatatuHubCard && (
              <View
                style={[
                  styles.cardWrap,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: `${theme.gold}66`,
                    marginBottom: 4,
                  },
                ]}
              >
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    const q = query.trim();
                    router.push({
                      pathname: "/matatu",
                      params:
                        q && !MATATU_KEYWORDS.includes(q.toLowerCase())
                          ? { q }
                          : undefined,
                    });
                  }}
                  style={styles.card}
                >
                  <View style={styles.cardHeaderRow}>
                    <View
                      style={[
                        styles.cardIconWrap,
                        {
                          backgroundColor: "rgba(14, 165, 233, 0.16)",
                          borderColor: "rgba(14, 165, 233, 0.38)",
                        },
                      ]}
                    >
                      <Ionicons name="bus" size={22} color="#0EA5E9" />
                    </View>
                    <View style={styles.body}>
                      <View style={styles.categoryPillWrap}>
                        <View
                          style={[
                            styles.categoryDot,
                            { backgroundColor: "#0EA5E9" },
                          ]}
                        />
                        <Text
                          style={[
                            styles.categoryPillText,
                            { color: "#0EA5E9" },
                          ]}
                        >
                          TRANSPORT & TRAVEL HUB
                        </Text>
                      </View>
                      <Text style={[styles.title, { color: theme.textPrimary }]}>
                        Matatu Routes & SACCO Fares
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.trailingCircle,
                        { backgroundColor: theme.surfaceContainerHigh },
                      ]}
                    >
                      <Ionicons
                        name="arrow-forward"
                        size={16}
                        color={theme.textSecondary}
                      />
                    </View>
                  </View>

                  <Text
                    style={[styles.description, { color: theme.textSecondary }]}
                  >
                    Explore {matatuSummary.routeCount} verified matatu routes, {matatuSummary.stageCount} stage stopovers, interactive maps, and off-peak/peak fares across {matatuSummary.townCount} Kenyan cities.
                  </Text>

                  <View
                    style={[
                      styles.sourceBadge,
                      { borderTopColor: theme.outlineVariant },
                    ]}
                  >
                    <Ionicons
                      name="shield-checkmark"
                      size={13}
                      color={theme.kenyaGreenLight}
                    />
                    <Text style={[styles.source, { color: theme.textMuted }]}>
                      NTSA Registered SACCOs & Commuter Stage Directory
                    </Text>
                  </View>
                </Pressable>
              </View>
            )}

            {showPinnedSection && (
              <View style={styles.pinnedSection}>
                <View style={styles.pinnedHeaderRow}>
                  <Ionicons name="bookmark" size={16} color={theme.gold} />
                  <Text
                    style={[styles.pinnedSectionTitle, { color: theme.textPrimary }]}
                  >
                    Pinned Tools ({pinnedTools.length})
                  </Text>
                </View>
                <View style={{ gap: 10 }}>
                  {pinnedTools.map((pt) => (
                    <ToolItem key={`pinned-${pt.slug}`} item={pt} isPinned />
                  ))}
                </View>
                <Text
                  style={[
                    styles.allToolsDividerLabel,
                    { color: theme.gold },
                  ]}
                >
                  ALL TOOLS ({filtered.length})
                </Text>
              </View>
            )}
          </>
        }
        renderItem={renderToolItem}
        ListEmptyComponent={
          !showMatatuHubCard ? (
            <View style={styles.emptyWrap}>
              <Ionicons name="search-outline" size={44} color={theme.textMuted} />
              <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>
                No tools found matching &ldquo;{query}&rdquo;
              </Text>
              <Text style={[styles.emptySub, { color: theme.textSecondary }]}>
                Try clearing your search or selecting another category.
              </Text>
              <Pressable
                onPress={() => {
                  setQuery("");
                  setCategory("all");
                }}
                style={[
                  styles.clearAllBtn,
                  { backgroundColor: theme.primaryContainer },
                ]}
              >
                <Text
                  style={{
                    color: theme.onPrimaryContainer,
                    fontFamily: "Outfit_700Bold",
                    fontSize: 12,
                  }}
                >
                  Clear search & filters
                </Text>
              </Pressable>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  filterHeader: {
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 17,
    borderWidth: 1,
    paddingHorizontal: 11,
    height: 34,
    marginBottom: 6,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchIcon: {
    marginRight: 9,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    height: "100%",
    marginRight: 6,
    fontSize: 12.5,
    paddingVertical: 0,
    paddingHorizontal: 0,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 5,
  },
  sortLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.8,
    flexShrink: 0,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  segmentText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    lineHeight: 15,
    paddingBottom: 0,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  list: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 28,
    gap: 8,
  },
  resultsBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  resultsText: {
    fontSize: 12,
  },
  clearFilterText: {
    fontSize: 12,
    fontFamily: "Outfit_700Bold",
  },
  pinnedSection: {
    marginBottom: 8,
  },
  pinnedHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  pinnedSectionTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  allToolsDividerLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 16,
    marginBottom: 4,
  },
  cardWrap: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    elevation: Platform.OS === "android" ? 2 : 0,
  },
  card: {
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trailingCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  body: {
    flex: 1,
    marginLeft: 12,
    marginRight: 4,
  },
  categoryPillWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 5,
    marginBottom: 3,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  categoryPillText: {
    fontSize: 9,
    fontFamily: "Outfit_700Bold",
    letterSpacing: 0.5,
  },
  pinnedTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 6,
    marginLeft: 4,
  },
  pinnedTagText: {
    fontSize: 8,
    fontFamily: "Outfit_700Bold",
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 8,
  },
  sourceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  source: {
    fontSize: 11,
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 48,
  },
  emptyTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    marginTop: 10,
  },
  emptySub: {
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
  clearAllBtn: {
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 18,
  },
});
