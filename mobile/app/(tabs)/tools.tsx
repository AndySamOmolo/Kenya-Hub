import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  Platform,
  Pressable,
  ScrollView,
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
} from "../../src/theme";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolUsageScore,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import { DynamicIcon } from "../../src/components/DynamicIcon";

function ToolItem({
  item,
  isPinned = false,
}: {
  item: (typeof TOOLS)[0];
  isPinned?: boolean;
}) {
  const router = useRouter();
  const { theme } = useTheme();
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
        onPress={() =>
          router.push({
            pathname: "/tools/[slug]",
            params: { slug: item.slug },
          })
        }
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
            <Text
              style={[styles.title, { color: theme.textPrimary }]}
              
            >
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

        <Text
          style={[styles.description, { color: theme.textSecondary }]}
          
        >
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
          <Text
            style={[styles.source, { color: theme.textMuted }]}
            
          >
            {item.dataSource}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default function ToolsScreen() {
  const { theme } = useTheme();
  const params = useLocalSearchParams<{ category?: string; q?: string }>();
  const [query, setQuery] = useState(params.q ?? "");
  const [category, setCategory] = useState(params.category ?? "all");
  const [showAllCats, setShowAllCats] = useState(true);
  const [sortBy, setSortBy] = useState<"popular" | "alphabetical" | "category">(
    "popular"
  );
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (params.category) setCategory(params.category);
    if (params.q) setQuery(params.q);
  }, [params.category, params.q]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("kh-saved-tools")
        .then((val) => {
          setPinnedSlugs(val?.split(",").filter(Boolean) ?? []);
        })
        .catch(() => setPinnedSlugs([]));

      AsyncStorage.getItem("kh-tool-visits")
        .then((raw) => {
          if (!raw) {
            setVisitCounts({});
            return;
          }
          const parsed = JSON.parse(raw);
          setVisitCounts(parsed && typeof parsed === "object" ? parsed : {});
        })
        .catch(() => setVisitCounts({}));
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

      // "popular" (Most used) — matches web tools/page.tsx:
      // use real visit counts if user has any, otherwise curated baseline usage scores
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
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        title="All Tools"
        subtitle={`${TOOLS.length} free tools built for Kenya — search or browse by category`}
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
            size={20}
            color={theme.gold}
            style={styles.searchIcon}
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search tools (PAYE, M-Pesa, KRA, CBC)..."
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
            autoCorrect={false}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <Ionicons
                name="close-circle"
                size={20}
                color={theme.textMuted}
              />
            </Pressable>
          )}
        </View>

        {/* Horizontal Scrolling Category Pills (Standalone rounded-full pills) */}
        <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 2 }}>
          {categories.map((item) => {
            const active = item.id === category;
            return (
              <Pressable
                key={item.id}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => setCategory(item.id)}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 4.5,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active ? `${theme.gold}22` : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: active ? "Outfit_700Bold" : "PlusJakartaSans_600SemiBold",
                    color: active ? theme.gold : theme.textSecondary,
                  }}
                >
                  {item.name} ({item.count})
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        {/* Material 3 Segmented Sort Row (mirrors web Sort: Most used | A-Z | Category) */}
        <View style={styles.sortRow}>
          <Text style={[styles.sortLabel, { color: theme.textMuted }]}>
            SORT BY
          </Text>
          <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
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
                    gap: 5,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: active ? theme.primaryContainer : theme.surfaceContainer,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  }}
                >
                  <Ionicons
                    name={option.icon}
                    size={12}
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
        data={filtered}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {(query.trim() !== "" || category !== "all") &&
              filtered.length > 0 && (
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
        renderItem={({ item }) => (
          <ToolItem item={item} isPinned={pinnedSlugs.includes(item.slug)} />
        )}
        ListEmptyComponent={
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
    paddingHorizontal: 16,
    paddingTop: 9,
    paddingBottom: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 8,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 13.5,
    paddingVertical: 0,
  },
  catHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 6,
  },
  chipsWrapGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingBottom: 4,
  },
  chipWrap: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  chipText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  sortRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 7,
  },
  sortLabel: {
    fontFamily: "Outfit_700Bold",
    fontSize: 10,
    letterSpacing: 1,
  },
  segmentedGroup: {
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },
  segmentBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  segmentText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 11,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
    gap: 10,
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
