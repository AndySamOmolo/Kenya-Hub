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
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useTheme,
  categoryColorMap,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  parseSavedTools,
  getThemedCardStyle,
  getThemedInputStyle,
} from "../../src/theme";
import type { ThemeConfig, ThemeMetrics } from "../../src/lib/theme-engine";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolUsageScore,
  getCategoryInfo,
} from "../../src/shared/lib/tools-registry";
import matatuData from "../../src/shared/data/matatu-routes.json";
import { ThemedIcon, ThemedIconBadge } from "../../src/components/ThemedIcon";

function toolEmojiToIonicon(emoji?: string): string {
  const clean = (emoji || "").replace(/[\uFE0F]/g, "").trim();
  switch (clean) {
    case "🛡": return "shield-checkmark-outline";
    case "🔒": return "lock-closed-outline";
    case "🌱": return "leaf-outline";
    case "🚢": return "boat-outline";
    case "🩺":
    case "🏥": return "medkit-outline";
    case "📑":
    case "📝": return "document-text-outline";
    case "🎯": return "disc-outline";
    case "📐": return "resize-outline";
    case "🗣": return "chatbubble-ellipses-outline";
    case "🌍": return "globe-outline";
    case "🧮": return "calculator-outline";
    case "📱": return "phone-portrait-outline";
    case "🏦":
    case "🏢": return "business-outline";
    case "🎓": return "school-outline";
    case "🏠": return "home-outline";
    case "📚": return "book-outline";
    case "🚗":
    case "🚘": return "car-outline";
    case "🚦": return "warning-outline";
    case "🧱": return "construct-outline";
    case "⚡": return "flash-outline";
    case "💧": return "water-outline";
    case "⚖": return "scale-outline";
    case "🔑": return "key-outline";
    case "🧹": return "brush-outline";
    case "📞": return "call-outline";
    default: return "sparkles-outline";
  }
}


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
  themeConfig,
  themeMetrics,
  themedCardStyle,
  styles,
  onPressTool,
}: {
  item: (typeof TOOLS)[0];
  isPinned?: boolean;
  theme: ReturnType<typeof useTheme>["theme"];
  themeConfig: ThemeConfig;
  themeMetrics: ThemeMetrics;
  themedCardStyle: ReturnType<typeof getThemedCardStyle>;
  styles: ReturnType<typeof createToolsStyles>;
  onPressTool: (slug: string) => void;
}) {
  const categoryColor = categoryColorMap[item.category] || theme.gold;
  const catInfo = getCategoryInfo(item.category);
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const showCardIcons =
    themeConfig.showCardIcons !== false && themeConfig.iconBadgeStyle !== "hidden";
  const showCategoryBadges = themeConfig.showCategoryBadges !== false;
  const showCardDescriptions = themeConfig.showCardDescriptions !== false;
  const showTrailingArrows = themeConfig.showTrailingArrows !== false;

  return (
    <View
      style={[
        styles.cardWrap,
        themedCardStyle,
        isFrameless
          ? {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: theme.outlineVariant,
            }
          : isPinned
          ? { borderColor: `${theme.gold}66` }
          : null,
      ]}
    >
      <Pressable
        android_ripple={androidRipple(theme.rippleColor)}
        onPress={() => onPressTool(item.slug)}
        style={[styles.card, isFrameless && { paddingHorizontal: 0 }]}
      >
        <View style={styles.cardHeaderRow}>
          <ThemedIconBadge
            name={toolEmojiToIonicon(item.icon)}
            accentColor={categoryColor}
            baseSize={46}
            iconSize={22}
          />
          <View
            style={[
              styles.body,
              !showCardIcons && { marginLeft: 0 },
              !showTrailingArrows && { marginRight: 0 },
            ]}
          >
            {(showCategoryBadges || isPinned) && (
              <View style={styles.categoryPillWrap}>
                {showCategoryBadges && (
                  <>
                    <View
                      style={[styles.categoryDot, { backgroundColor: categoryColor }]}
                    />
                    <Text style={[styles.categoryPillText, { color: categoryColor }]}>
                      {(catInfo?.name || item.category).toUpperCase()}
                    </Text>
                  </>
                )}
                {isPinned && (
                  <View
                    style={[
                      styles.pinnedTag,
                      { backgroundColor: `${theme.gold}20` },
                      !showCategoryBadges && { marginLeft: 0 },
                    ]}
                  >
                    <ThemedIcon name="bookmark" size={10} color={theme.gold} />
                    <Text style={[styles.pinnedTagText, { color: theme.gold }]}>
                      PINNED
                    </Text>
                  </View>
                )}
              </View>
            )}
            <Text style={[styles.title, { color: theme.textPrimary }]}>
              {item.shortTitle}
            </Text>
          </View>
          {showTrailingArrows && (
            <View
              style={[
                styles.trailingCircle,
                { backgroundColor: theme.surfaceContainerHigh },
              ]}
            >
              <ThemedIcon
                name="arrow-forward"
                size={16}
                color={theme.textSecondary}
              />
            </View>
          )}
        </View>

        {showCardDescriptions && (
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {item.description}
          </Text>
        )}

        <View
          style={[styles.sourceBadge, { borderTopColor: theme.outlineVariant }]}
        >
          <ThemedIcon
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
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts, themeKey } = useTheme();
  const styles = useMemo(
    () => createToolsStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const themedCardStyle = useMemo(
    () => getThemedCardStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const themedInputStyle = useMemo(
    () => getThemedInputStyle(theme, themeConfig, themeMetrics),
    [theme, themeConfig, themeMetrics]
  );
  const insets = useSafeAreaInsets();
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(14 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const bottomClearance =
    Math.round(28 * (themeMetrics?.spacingScale ?? 1)) +
    floatClearance +
    insets.bottom;
  const headingTransform = themeConfig.headingTransform || "none";
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const showCardIcons =
    themeConfig.showCardIcons !== false && themeConfig.iconBadgeStyle !== "hidden";
  const showCategoryBadges = themeConfig.showCategoryBadges !== false;
  const showCardDescriptions = themeConfig.showCardDescriptions !== false;
  const showTrailingArrows = themeConfig.showTrailingArrows !== false;
  const listExtraData = useMemo(
    () => ({ theme, themeConfig, themeMetrics, resolvedFonts, themedCardStyle }),
    [theme, themeConfig, themeMetrics, resolvedFonts, themedCardStyle]
  );
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
        themeConfig={themeConfig}
        themeMetrics={themeMetrics}
        themedCardStyle={themedCardStyle}
        styles={styles}
        onPressTool={handlePressTool}
      />
    ),
    [pinnedSet, theme, themeConfig, themeMetrics, themedCardStyle, styles, handlePressTool]
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

  const showMatatuHubCardQuery = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return false;
    return (
      MATATU_KEYWORDS.some((kw) => q.includes(kw)) ||
      "matatu routes sacco fares".includes(q)
    );
  }, [deferredQuery]);

  const showMatatuHubCard =
    category === "transport-travel" || showMatatuHubCardQuery;

  const filtered = useMemo(() => {
    const q = deferredQuery.toLowerCase().trim();
    const list = TOOLS.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;
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
  }, [category, deferredQuery, sortBy, hasAnyVisits, visitCounts]);

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
      key={themeKey}
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
            paddingHorizontal: screenPadPx,
          },
        ]}
      >
        {/* Material 3 Pill Search Bar */}
        <View
          style={[
            styles.searchWrap,
            themedInputStyle,
          ]}
        >
          <ThemedIcon
            name="search"
            size={16}
            color={theme.gold}
            style={styles.searchIcon}
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={`Search ${TOOLS.length} tools...`}
            numberOfLines={1}
            multiline={false}
            placeholderTextColor={theme.textMuted}
            style={[styles.searchInput, { color: theme.textPrimary }]}
            autoCorrect={false}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={8}>
              <ThemedIcon
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
                    fontFamily: active ? resolvedFonts.heading : resolvedFonts.bold,
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
                  <ThemedIcon
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
        extraData={listExtraData}
        keyExtractor={(item) => item.slug}
        contentContainerStyle={[
          styles.list,
          { paddingHorizontal: screenPadPx, paddingBottom: bottomClearance },
        ]}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig.verticalScrollbarStyle === "always-visible"}
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
                  themedCardStyle,
                  isFrameless
                    ? {
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: theme.outlineVariant,
                        marginBottom: 4,
                      }
                    : {
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
                  style={[styles.card, isFrameless && { paddingHorizontal: 0 }]}
                >
                  <View style={styles.cardHeaderRow}>
                    <ThemedIconBadge
                      name="bus"
                      accentColor={theme.sky}
                      baseSize={46}
                      iconSize={22}
                    />
                    <View
                      style={[
                        styles.body,
                        !showCardIcons && { marginLeft: 0 },
                        !showTrailingArrows && { marginRight: 0 },
                      ]}
                    >
                      {showCategoryBadges && (
                        <View style={styles.categoryPillWrap}>
                          <View
                            style={[
                              styles.categoryDot,
                              { backgroundColor: theme.sky },
                            ]}
                          />
                          <Text
                            style={[
                              styles.categoryPillText,
                              { color: theme.sky },
                            ]}
                          >
                            TRANSPORT & TRAVEL HUB
                          </Text>
                        </View>
                      )}
                      <Text style={[styles.title, { color: theme.textPrimary }]}>
                        Matatu Routes & SACCO Fares
                      </Text>
                    </View>
                    {showTrailingArrows && (
                      <View
                        style={[
                          styles.trailingCircle,
                          { backgroundColor: theme.surfaceContainerHigh },
                        ]}
                      >
                        <ThemedIcon
                          name="arrow-forward"
                          size={16}
                          color={theme.textSecondary}
                        />
                      </View>
                    )}
                  </View>

                  {showCardDescriptions && (
                    <Text
                      style={[styles.description, { color: theme.textSecondary }]}
                    >
                      Explore {matatuSummary.routeCount} verified matatu routes, {matatuSummary.stageCount} stage stopovers, interactive maps, and off-peak/peak fares across {matatuSummary.townCount} Kenyan cities.
                    </Text>
                  )}

                  <View
                    style={[
                      styles.sourceBadge,
                      { borderTopColor: theme.outlineVariant },
                    ]}
                  >
                    <ThemedIcon
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
                  <ThemedIcon name="bookmark" size={16} color={theme.gold} />
                  <Text
                    style={[styles.pinnedSectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}
                  >
                    Pinned Tools ({pinnedTools.length})
                  </Text>
                </View>
                <View style={{ gap: 10 }}>
                  {pinnedTools.map((pt) => (
                    <ToolItem key={`pinned-${pt.slug}`} item={pt} isPinned theme={theme} themeConfig={themeConfig} themeMetrics={themeMetrics} themedCardStyle={themedCardStyle} styles={styles} onPressTool={handlePressTool} />
                  ))}
                </View>
                <Text
                  style={[
                    styles.allToolsDividerLabel,
                    { color: theme.gold, textTransform: headingTransform },
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
              <ThemedIcon name="search-outline" size={44} color={theme.textMuted} />
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
                    fontFamily: resolvedFonts.heading,
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

function createToolsStyles(
  metrics?: ThemeMetrics,
  fonts?: { heading: string; body: string; bold: string }
) {
  const cardRadiusPx = metrics?.cardRadiusPx ?? 14;
  const radiusRatio = cardRadiusPx / 14;
  const r = (base: number) => Math.round(base * radiusRatio);
  const bw = metrics?.borderWidthPx ?? 1;
  const spacingScale = metrics?.spacingScale ?? 1;
  const sp = (v: number) => Number((v * spacingScale).toFixed(1));
  const fontScale = metrics?.fontScale ?? 1;
  const lineHeightScale = metrics?.lineHeightScale ?? 1;
  const fs = (v: number) => Number((v * fontScale).toFixed(1));
  const lh = (v: number) => Math.round(v * fontScale * lineHeightScale);
  const isDefaultFonts =
    !fonts ||
    (fonts.heading === "Outfit_700Bold" &&
      fonts.body === "Inter_400Regular" &&
      fonts.bold === "Inter_700Bold");
  const hf = (fallback = "Outfit_700Bold") =>
    isDefaultFonts ? fallback : fonts.heading;
  const bf = (fallback = "Inter_400Regular") =>
    isDefaultFonts ? fallback : fonts.body;

  return StyleSheet.create({
    screen: {
      flex: 1,
    },
    filterHeader: {
      paddingHorizontal: sp(14),
      paddingTop: sp(4),
      paddingBottom: sp(6),
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    searchWrap: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: r(17),
      borderWidth: bw,
      paddingHorizontal: sp(11),
      minHeight: Math.max(42, Math.round(42 * spacingScale)),
      marginBottom: sp(6),
      elevation: Platform.OS === "android" ? 1 : 0,
    },
    searchIcon: {
      marginRight: sp(9),
    },
    searchInput: {
      flex: 1,
      minWidth: 0,
      marginRight: sp(6),
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12.5),
      paddingVertical: 0,
      paddingHorizontal: 0,
      textAlignVertical: "center",
      includeFontPadding: false,
    },
    sortRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: sp(6),
      marginTop: sp(5),
    },
    sortLabel: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
      lineHeight: lh(14),
      letterSpacing: 0.8,
      flexShrink: 0,
      includeFontPadding: false,
      textAlignVertical: "center",
    },
    segmentText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11),
      lineHeight: lh(15),
      paddingBottom: 0,
      includeFontPadding: false,
      textAlignVertical: "center",
    },
    list: {
      paddingHorizontal: sp(14),
      paddingTop: sp(10),
      paddingBottom: sp(28),
      gap: sp(8),
    },
    resultsBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: sp(8),
    },
    resultsText: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12),
    },
    clearFilterText: {
      fontSize: fs(12),
      fontFamily: hf("Outfit_700Bold"),
    },
    pinnedSection: {
      marginBottom: sp(8),
    },
    pinnedHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
      marginBottom: sp(10),
    },
    pinnedSectionTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(15),
    },
    allToolsDividerLabel: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11),
      letterSpacing: 1,
      marginTop: sp(16),
      marginBottom: sp(4),
    },
    cardWrap: {
      borderRadius: r(16),
      borderWidth: bw,
    },
    card: {
      padding: sp(16),
    },
    cardHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    cardIconWrap: {
      width: 46,
      height: 46,
      borderRadius: r(14),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    trailingCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: sp(10),
    },
    body: {
      flex: 1,
      marginLeft: sp(12),
      marginRight: sp(4),
    },
    categoryPillWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: sp(5),
      marginBottom: 3,
    },
    categoryDot: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
    },
    categoryPillText: {
      fontSize: fs(9),
      fontFamily: hf("Outfit_700Bold"),
      letterSpacing: 0.5,
    },
    pinnedTag: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      paddingHorizontal: sp(6),
      paddingVertical: 1,
      borderRadius: r(6),
      marginLeft: sp(4),
    },
    pinnedTagText: {
      fontSize: fs(8),
      fontFamily: hf("Outfit_700Bold"),
    },
    title: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(16),
    },
    description: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12.5),
      lineHeight: lh(18),
      marginTop: sp(8),
    },
    sourceBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
      marginTop: sp(10),
      paddingTop: sp(8),
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    source: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11),
    },
    emptyWrap: {
      alignItems: "center",
      paddingVertical: sp(48),
    },
    emptyTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(16),
      marginTop: sp(10),
    },
    emptySub: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(13),
      marginTop: sp(4),
      textAlign: "center",
    },
    clearAllBtn: {
      marginTop: sp(14),
      paddingHorizontal: sp(16),
      paddingVertical: sp(9),
      borderRadius: r(18),
    },
  });
}
