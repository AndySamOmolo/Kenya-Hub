import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useMemo, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Linking,
  Modal,
  Pressable,
  ScrollView,
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
  triggerHaptic,
  parseSavedTools,
  serializeSavedTools,
} from "../../src/theme";
import {
  TOOLS,
  TOOL_CATEGORIES,
  getToolUsageScore,
} from "../../src/shared/lib/tools-registry";
import {
  STATIC_BLOG_POSTS,
  type StaticBlogPost,
} from "../../src/shared/data/blog-posts";
import holidaysData from "../../src/shared/data/public-holidays.json";
import matatuData from "../../src/shared/data/matatu-routes.json";
import { DynamicIcon } from "../../src/components/DynamicIcon";

import {
  COURSE_NAMES,
  ROTATING_LANGUAGES,
  BlogMarkdownContent,
  PopularToolRow,
  SUPER_APP_APP_TILES,
  FeaturedLanguageWidget,
  WordOfTheMomentWidget,
} from "../../src/components/home/HomeHelpers";
import { styles } from "../../src/components/home/styles";

const MATATU_KEYWORDS = [
  "matatu",
  "sacco",
  "bus",
  "fare",
  "stage",
  "route",
  "commute",
  "terminus",
  "nairobi",
  "mombasa",
  "kisumu",
  "nakuru",
  "eldoret",
  "thika",
];

const WIDGET_SNAP_INTERVAL = 295 + 12;

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<StaticBlogPost | null>(null);
  const [readerProgress, setReaderProgress] = useState(0);
  const [showHolidaysModal, setShowHolidaysModal] = useState(false);
  const [selectedBlogTag, setSelectedBlogTag] = useState<string>("All");
  const [activeWidgetPage, setActiveWidgetPage] = useState(0);
  const [widgetsTouchPaused, setWidgetsTouchPaused] = useState(false);

  const [learnStats, setLearnStats] = useState<{
    langId: string;
    langName: string;
    totalXP: number;
    streak: number;
    greeting?: string;
    region?: string;
  }>({
    langId: ROTATING_LANGUAGES[new Date().getDate() % ROTATING_LANGUAGES.length].id,
    langName: ROTATING_LANGUAGES[new Date().getDate() % ROTATING_LANGUAGES.length].name,
    totalXP: 0,
    streak: 0,
    greeting: ROTATING_LANGUAGES[new Date().getDate() % ROTATING_LANGUAGES.length].greeting,
    region: ROTATING_LANGUAGES[new Date().getDate() % ROTATING_LANGUAGES.length].region,
  });

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("kh-saved-tools")
        .then((val) => setPinnedSlugs(parseSavedTools(val)))
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

      AsyncStorage.getItem("@kenyahub_course_progress_v2")
        .then((raw) => {
          if (!raw) return;
          const parsed = JSON.parse(raw);
          if (!parsed || typeof parsed !== "object") return;
          let totalXP = 0;
          let bestStreak = 0;
          let activeLang = "kikuyu";
          let latestPractice = 0;
          for (const [lid, prog] of Object.entries(parsed) as [string, any][]) {
            const xp = Number(prog?.totalXP) || 0;
            const st = Number(prog?.streak) || 0;
            totalXP += xp;
            if (st > bestStreak) bestStreak = st;
            const skills = Object.values(prog?.skills || {}) as any[];
            for (const sk of skills) {
              if ((sk?.lastPracticed || 0) > latestPractice) {
                latestPractice = sk.lastPracticed;
                activeLang = lid;
              }
            }
          }
          setLearnStats({
            langId: activeLang,
            langName: COURSE_NAMES[activeLang] || "Kiswahili",
            totalXP,
            streak: bestStreak,
          });
        })
        .catch(() => {});
    }, [])
  );

  // Dynamic 8 launcher tiles based on user's actual visit counts + popular defaults
  const dynamicLauncherItems = useMemo(() => {
    const TOOL_META: Record<string, { label: string; icon: any; color: string }> = {
      "paye-calculator": { label: "PAYE Tax", icon: "calculator", color: "#2FA463" },
      "mpesa-fee-calculator": { label: "M-Pesa", icon: "phone-portrait", color: "#10B981" },
      "kplc-token-calculator": { label: "KPLC", icon: "flash", color: "#F59E0B" },
      "kenyan-translator": { label: "Translator", icon: "language", color: "#EC4899" },
      "learn": { label: "Learn", icon: "school", color: "#C8961E" },
      "kra-car-import-calculator": { label: "Car Import", icon: "car", color: "#3B82F6" },
      "sacco-chama-calculator": { label: "SACCO", icon: "business", color: "#8B5CF6" },
      "mjengo-construction-calculator": { label: "Mjengo", icon: "construct", color: "#F97316" },
      "kuccps-cluster-calculator": { label: "KUCCPS", icon: "ribbon", color: "#6366F1" },
      "kcse-grade-calculator": { label: "KCSE", icon: "document-text", color: "#14B8A6" },
      "cbc-curriculum": { label: "CBC", icon: "book", color: "#84CC16" },
      "helb-calculator": { label: "HELB", icon: "school-outline", color: "#06B6D4" },
      "number-plate-decoder": { label: "Plates", icon: "barcode-outline", color: "#64748B" },
      "stamp-duty-calculator": { label: "Stamp Duty", icon: "home", color: "#A855F7" },
      "traffic-fines": { label: "Fines", icon: "warning", color: "#EF4444" },
      "water-bill-calculator": { label: "Water Bill", icon: "water", color: "#0EA5E9" },
    };

    const sorted = [...TOOLS].sort((a, b) => {
      const vA = visitCounts[a.slug] || 0;
      const vB = visitCounts[b.slug] || 0;
      if (vB !== vA) return vB - vA;
      return getToolUsageScore(b) - getToolUsageScore(a);
    });

    const topFive = sorted.slice(0, 5).map((t) => {
      const m = TOOL_META[t.slug] || {
        label: t.shortTitle.split(" ")[0],
        icon: "apps",
        color: "#C8961E",
      };
      return {
        id: t.slug,
        label: m.label,
        icon: m.icon,
        color: m.color,
        route: "/tools/[slug]" as const,
        params: { slug: t.slug },
      };
    });

    return [
      ...topFive,
      {
        id: "matatu",
        label: "Matatu",
        icon: "bus" as const,
        color: "#0EA5E9",
        route: "/matatu" as const,
      },
      {
        id: "county",
        label: "Counties",
        icon: "map" as const,
        color: "#8B5CF6",
        route: "/(tabs)/county" as const,
      },
      {
        id: "all",
        label: "All Tools",
        icon: "grid" as const,
        color: "#EF4444",
        route: "/(tabs)/tools" as const,
      },
    ];
  }, [visitCounts]);

  const togglePinTool = useCallback((slug: string) => {
    setPinnedSlugs((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [slug, ...prev];
      AsyncStorage.setItem("kh-saved-tools", serializeSavedTools(next)).catch(
        () => {}
      );
      return next;
    });
  }, []);

  const handleBlogLinkNavigation = useCallback(
    (href: string) => {
      const clean = href.trim();
      if (clean.startsWith("http://") || clean.startsWith("https://")) {
        if (clean.includes("kenyahub.me/")) {
          const pathPart = clean.split("kenyahub.me")[1] || "/";
          handleBlogLinkNavigation(pathPart);
          return;
        }
        Linking.openURL(clean).catch(() => {});
        return;
      }

      const pathOnly = clean.split("?")[0].replace(/\/+$/, "");
      if (pathOnly.startsWith("/tools/learn/")) {
        const lang = pathOnly.replace("/tools/learn/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/tools/[slug]",
          params: { slug: "learn", lang },
        });
        return;
      }
      if (pathOnly.startsWith("/tools/")) {
        const slug = pathOnly.replace("/tools/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/tools/[slug]",
          params: { slug },
        });
        return;
      }
      if (pathOnly.startsWith("/county/")) {
        const slug = pathOnly.replace("/county/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/county/[slug]",
          params: { slug },
        });
        return;
      }
      if (pathOnly.startsWith("/matatu/")) {
        const slug = pathOnly.replace("/matatu/", "").split("/")[0];
        setSelectedPost(null);
        router.push({
          pathname: "/matatu/[slug]",
          params: { slug },
        });
        return;
      }
      if (pathOnly === "/matatu") {
        setSelectedPost(null);
        router.push("/matatu");
        return;
      }
      if (pathOnly.startsWith("/blog/")) {
        const blogSlug = pathOnly.replace("/blog/", "").split("/")[0];
        const targetPost = STATIC_BLOG_POSTS.find((p) => p.slug === blogSlug);
        if (targetPost) {
          setReaderProgress(0);
          setSelectedPost(targetPost);
        }
      }
    },
    [router]
  );

  const greeting = useMemo(() => {
    const hr = new Date().getHours();
    if (hr < 12) return { sw: "Habari ya Asubuhi", en: "Good morning" };
    if (hr < 17) return { sw: "Habari ya Mchana", en: "Good afternoon" };
    return { sw: "Habari ya Jioni", en: "Good evening" };
  }, []);

  const allHolidaysList = useMemo(() => {
    const allYears = Object.values(
      (holidaysData as any).holidays || {}
    ).flat() as {
      date: string;
      name: string;
      description: string;
      type?: string;
    }[];
    return [...allYears].sort((a, b) => a.date.localeCompare(b.date));
  }, []);

  const nextHoliday = useMemo(() => {
    const now = new Date();
    const todayIso = now.toISOString().slice(0, 10);
    const upcoming = allHolidaysList.filter((h) => h.date >= todayIso);
    const pick = upcoming[0] || allHolidaysList[0];
    if (!pick) return null;
    const diffMs =
      new Date(pick.date + "T00:00:00").getTime() -
      new Date(todayIso + "T00:00:00").getTime();
    const daysAway = Math.max(0, Math.round(diffMs / (1000 * 60 * 60 * 24)));
    return { ...pick, daysAway };
  }, [allHolidaysList]);

  const matatuSummary = useMemo(() => {
    const routesByTown = (matatuData as any).routes || {};
    const towns = ((matatuData as any).towns || []).filter(
      (t: any) => t.isActive
    );
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

  const matchesMatatuSearch = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return false;
    return MATATU_KEYWORDS.some((kw) => kw.includes(q) || q.includes(kw));
  }, [searchQuery]);

  const inlineSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return TOOLS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.shortTitle.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.keywords || []).some((k) => k.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [searchQuery]);

  const popular = useMemo(() => {
    const hasVisits = Object.values(visitCounts).some((c) => c > 0);
    return [...TOOLS]
      .sort((a, b) => {
        const labelComparison = a.shortTitle.localeCompare(
          b.shortTitle,
          undefined,
          { numeric: true, sensitivity: "base" }
        );
        if (hasVisits) {
          const aV = visitCounts[a.slug] ?? 0;
          const bV = visitCounts[b.slug] ?? 0;
          if (bV !== aV) return bV - aV;
        }
        return getToolUsageScore(b) - getToolUsageScore(a) || labelComparison;
      })
      .slice(0, 6);
  }, [visitCounts]);

  const pinnedTools = useMemo(
    () =>
      pinnedSlugs
        .map((s) => TOOLS.find((t) => t.slug === s))
        .filter(Boolean) as (typeof TOOLS)[0][],
    [pinnedSlugs]
  );

  const blogTags = useMemo(() => {
    const tags = new Set<string>();
    STATIC_BLOG_POSTS.forEach((p) =>
      (p.tags || []).forEach((t) => tags.add(t))
    );
    return ["All", ...Array.from(tags)];
  }, []);

  const sortedPosts = useMemo(() => {
    const list =
      selectedBlogTag === "All"
        ? STATIC_BLOG_POSTS
        : STATIC_BLOG_POSTS.filter((p) => p.tags?.includes(selectedBlogTag));
    return [...list].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [selectedBlogTag]);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />

      <AndroidTopAppBar
        showBrandLogo
        rightAction={
          <View style={styles.headerBadgesRow}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/tools/[slug]",
                  params: { slug: "learn", lang: learnStats.langId },
                })
              }
              accessibilityRole="button"
              accessibilityLabel="Open Kenyan Language Courses"
              style={pressableStyle([
                styles.xpHeaderPill,
                {
                  backgroundColor: `${theme.gold}1E`,
                  borderColor: `${theme.gold}50`,
                },
              ])}
            >
              <Ionicons name="flame" size={13} color={theme.gold} />
              <Text style={[styles.xpHeaderPillText, { color: theme.gold }]}>
                {learnStats.totalXP > 0 ? `${learnStats.totalXP} XP` : "Learn"}
              </Text>
            </Pressable>

            <View
              style={[
                styles.offlineChip,
                {
                  backgroundColor: theme.secondaryContainer,
                  borderColor: `${theme.kenyaGreenLight}40`,
                },
              ]}
            >
              <Ionicons
                name="cloud-done"
                size={12}
                color={theme.onSecondaryContainer}
              />
              <Text
                style={[
                  styles.offlineChipText,
                  { color: theme.onSecondaryContainer },
                ]}
              >
                Offline
              </Text>
            </View>
          </View>
        }
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. Native Android Header with Single Clean Greeting */}
        <View style={styles.greetingContainer}>
          <View style={styles.greetingTopRow}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.greetingSub, { color: theme.gold }]}>
                KENYA SUPER-APP · PUBLIC UTILITIES
              </Text>
              <Text style={[styles.greetingTitle, { color: theme.textPrimary }]}>
                {greeting.en}, Mwananchi
              </Text>
            </View>
            <Pressable
              onPress={() => router.push("/(tabs)/saved")}
              accessibilityRole="button"
              accessibilityLabel={`${pinnedTools.length} saved tools`}
              style={pressableStyle([
                styles.savedCountPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ])}
            >
              <Ionicons name="bookmark" size={14} color={theme.gold} />
              <Text style={[styles.savedCountText, { color: theme.textPrimary }]}>
                {pinnedTools.length} Saved
              </Text>
            </Pressable>
          </View>

          {/* 2. Instant In-Place Android Search Bar (Stable key across theme switches - UX-5) */}
          <View
            style={[
              styles.searchInputBar,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor:
                  searchQuery.length > 0 ? theme.gold : theme.outlineVariant,
              },
            ]}
          >
            <Ionicons name="search" size={18} color={theme.gold} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              accessibilityLabel="Search Kenyan calculators, language courses, and Matatu routes"
              placeholder={`Search ${TOOLS.length} tools & Matatu routes (PAYE, M-Pesa, KPLC...)`}
              placeholderTextColor={theme.textSecondary}
              numberOfLines={1}
              multiline={false}
              scrollEnabled={false}
              style={[styles.searchInputText, { color: theme.textPrimary }]}
              returnKeyType="search"
            />
            {searchQuery.length > 0 ? (
              <Pressable
                onPress={() => setSearchQuery("")}
                accessibilityRole="button"
                accessibilityLabel="Clear search query"
                hitSlop={10}
              >
                <Ionicons name="close-circle" size={19} color={theme.textMuted} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/tools",
                    params: { category: "all" },
                  })
                }
                accessibilityRole="button"
                accessibilityLabel={`Browse all ${TOOLS.length} tools`}
                style={[
                  styles.searchCountChip,
                  { backgroundColor: theme.primaryContainer },
                ]}
              >
                <Text
                  style={[
                    styles.searchCountChipText,
                    { color: theme.onPrimaryContainer },
                  ]}
                >
                  {TOOLS.length}
                </Text>
              </Pressable>
            )}
          </View>

          {/* Instant In-Place Search Results Panel */}
          {searchQuery.trim().length > 0 && (
            <View
              style={[
                styles.instantResultsCard,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={styles.instantResultsHeader}>
                <Text style={[styles.instantResultsLabel, { color: theme.gold }]}>
                  INSTANT MATCHES (
                  {inlineSearchResults.length + (matchesMatatuSearch ? 1 : 0)})
                </Text>
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/tools",
                    })
                  }
                >
                  <Text
                    style={{
                      fontSize: 11.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.gold,
                    }}
                  >
                    Full Directory →
                  </Text>
                </Pressable>
              </View>

              {matchesMatatuSearch && (
                <Pressable
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    const q = searchQuery.trim();
                    setSearchQuery("");
                    router.push({
                      pathname: "/matatu",
                      params: MATATU_KEYWORDS.includes(q.toLowerCase())
                        ? undefined
                        : { q },
                    });
                  }}
                  style={pressableStyle(styles.instantResultRow)}
                >
                  <View
                    style={[
                      styles.instantResultIcon,
                      { backgroundColor: "rgba(14, 165, 233, 0.18)" },
                    ]}
                  >
                    <Ionicons name="bus" size={18} color="#0EA5E9" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.instantResultTitle,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      Matatu Routes & SACCO Fares Hub
                    </Text>
                    <Text
                      style={[
                        styles.instantResultSub,
                        { color: theme.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      {matatuSummary.routeCount} routes &{" "}
                      {matatuSummary.stageCount} stages across{" "}
                      {matatuSummary.townCount} Kenyan cities
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={theme.textMuted}
                  />
                </Pressable>
              )}

              {inlineSearchResults.length > 0 ? (
                inlineSearchResults.map((item, idx) => {
                  const col = categoryColorMap[item.category] || theme.gold;
                  const pinned = pinnedSlugs.includes(item.slug);
                  return (
                    <Pressable
                      key={item.slug}
                      android_ripple={androidRipple(theme.rippleColor)}
                      onPress={() => {
                        setSearchQuery("");
                        router.push({
                          pathname: "/tools/[slug]",
                          params: { slug: item.slug },
                        });
                      }}
                      style={pressableStyle([
                        styles.instantResultRow,
                        (idx > 0 || matchesMatatuSearch) && {
                          borderTopWidth: 1,
                          borderTopColor: theme.outlineVariant,
                        },
                      ])}
                    >
                      <View
                        style={[
                          styles.instantResultIcon,
                          { backgroundColor: `${col}1C` },
                        ]}
                      >
                        <DynamicIcon emoji={item.icon} size={18} color={col} />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={[
                            styles.instantResultTitle,
                            { color: theme.textPrimary },
                          ]}
                          numberOfLines={1}
                        >
                          {item.shortTitle}
                        </Text>
                        <Text
                          style={[
                            styles.instantResultSub,
                            { color: theme.textSecondary },
                          ]}
                          numberOfLines={1}
                        >
                          {item.description}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => togglePinTool(item.slug)}
                        hitSlop={8}
                        style={{ padding: 4 }}
                      >
                        <Ionicons
                          name={pinned ? "bookmark" : "bookmark-outline"}
                          size={16}
                          color={pinned ? theme.gold : theme.textMuted}
                        />
                      </Pressable>
                      <Ionicons
                        name="chevron-forward"
                        size={16}
                        color={theme.textMuted}
                      />
                    </Pressable>
                  );
                })
              ) : !matchesMatatuSearch ? (
                <View style={{ paddingVertical: 14, alignItems: "center" }}>
                  <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>
                    No tool found matching &ldquo;{searchQuery}&rdquo;
                  </Text>
                </View>
              ) : null}
            </View>
          )}
        </View>

        {/* 3. Native Super-App Quick Launcher */}
        <View style={styles.launcherSection}>
          <View style={styles.launcherGrid}>
            {SUPER_APP_APP_TILES(dynamicLauncherItems, router, theme)}
          </View>
        </View>

        {/* 4. Live Kenyan Snapshot Horizontal Widgets (Swipe-snapped + Page Dots - MOB-4, UX-6) */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              LIVE SNAPSHOT
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Daily Kenyan Widgets
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5, paddingBottom: 4 }}>
            {[0, 1, 2, 3].map((dotIdx) => {
              const active = activeWidgetPage === dotIdx;
              return (
                <View
                  key={dotIdx}
                  style={{
                    width: active ? 16 : 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: active ? theme.gold : theme.outlineVariant,
                  }}
                />
              );
            })}
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDGET_SNAP_INTERVAL}
          decelerationRate="fast"
          bounces={true}
          alwaysBounceHorizontal={true}
          overScrollMode="always"
          onTouchStart={() => setWidgetsTouchPaused(true)}
          onMomentumScrollEnd={(e) => {
            setWidgetsTouchPaused(false);
            const page = Math.round(
              e.nativeEvent.contentOffset.x / WIDGET_SNAP_INTERVAL
            );
            setActiveWidgetPage(Math.max(0, Math.min(3, page)));
          }}
          onScrollEndDrag={() => setWidgetsTouchPaused(false)}
          contentContainerStyle={styles.widgetsScrollContent}
        >
          {/* Widget A: Isolated Featured Language Card (MOB-4, UX-6) */}
          <FeaturedLanguageWidget
            learnStats={learnStats}
            paused={widgetsTouchPaused}
          />

          {/* Widget B: Isolated Word of the Moment Card (MOB-4, UX-6) */}
          <WordOfTheMomentWidget paused={widgetsTouchPaused} />

          {/* Widget C: Matatu Routes & SACCO Fares Explorer */}
          <Pressable
            android_ripple={androidRipple(theme.rippleColor)}
            accessibilityRole="button"
            accessibilityLabel="Open Matatu Transit Routes and Fares Hub"
            onPress={() => router.push("/matatu")}
            style={pressableStyle([
              styles.snapshotWidget,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ])}
          >
            <View style={styles.widgetHeaderRow}>
              <View
                style={[
                  styles.widgetBadgePill,
                  { backgroundColor: "rgba(14, 165, 233, 0.16)" },
                ]}
              >
                <Ionicons name="bus" size={12} color="#0EA5E9" />
                <Text style={[styles.widgetBadgeText, { color: "#0EA5E9" }]}>
                  MATATU TRANSIT
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Outfit_700Bold",
                  color: "#0EA5E9",
                }}
              >
                {matatuSummary.townCount} Cities
              </Text>
            </View>

            <Text
              style={[styles.widgetMainTitle, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {matatuSummary.routeCount} Routes · {matatuSummary.stageCount}{" "}
              Stages
            </Text>
            <Text
              style={[styles.widgetSubText, { color: theme.textSecondary }]}
              numberOfLines={2}
            >
              Interactive route maps, stage stopovers, SACCO operators, and
              off-peak/peak fares across Kenya.
            </Text>

            <View style={styles.widgetFooterLink}>
              <Text style={[styles.widgetFooterLinkText, { color: "#0EA5E9" }]}>
                Open Matatu Hub
              </Text>
              <Ionicons name="arrow-forward" size={13} color="#0EA5E9" />
            </View>
          </Pressable>

          {/* Widget D: Next Kenyan Public Holiday Countdown */}
          {nextHoliday && (
            <Pressable
              android_ripple={androidRipple(theme.rippleColor)}
              accessibilityRole="button"
              accessibilityLabel={`Next Kenyan public holiday: ${nextHoliday.name}`}
              onPress={() => setShowHolidaysModal(true)}
              style={pressableStyle([
                styles.snapshotWidget,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ])}
            >
              <View style={styles.widgetHeaderRow}>
                <View
                  style={[
                    styles.widgetBadgePill,
                    { backgroundColor: "rgba(14, 165, 233, 0.16)" },
                  ]}
                >
                  <Ionicons name="calendar" size={12} color={theme.sky} />
                  <Text style={[styles.widgetBadgeText, { color: theme.sky }]}>
                    NEXT HOLIDAY
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Outfit_700Bold",
                    color: theme.sky,
                  }}
                >
                  {nextHoliday.daysAway === 0
                    ? "Today!"
                    : `In ${nextHoliday.daysAway} days`}
                </Text>
              </View>

              <Text
                style={[styles.widgetMainTitle, { color: theme.textPrimary }]}
                numberOfLines={1}
              >
                {nextHoliday.name}
              </Text>
              <Text
                style={[styles.widgetSubText, { color: theme.textSecondary }]}
                numberOfLines={2}
              >
                {new Date(nextHoliday.date + "T00:00:00").toLocaleDateString(
                  "en-KE",
                  {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }
                )}{" "}
                — {nextHoliday.description}
              </Text>

              <View style={styles.widgetFooterLink}>
                <Text
                  style={[styles.widgetFooterLinkText, { color: theme.sky }]}
                >
                  Full Holiday Calendar
                </Text>
                <Ionicons name="arrow-forward" size={13} color={theme.sky} />
              </View>
            </Pressable>
          )}
        </ScrollView>

        {/* 5. Pinned / Saved Quick Access Strip */}
        {pinnedTools.length > 0 && (
          <>
            <View style={[styles.sectionHeader, { marginTop: 18 }]}>
              <View>
                <Text style={[styles.sectionOverline, { color: theme.gold }]}>
                  PINNED BY YOU
                </Text>
                <Text
                  style={[styles.sectionTitle, { color: theme.textPrimary }]}
                >
                  Saved Shortcuts ({pinnedTools.length})
                </Text>
              </View>
              <Pressable
                android_ripple={androidRipple(theme.rippleColor, true)}
                onPress={() => router.push("/(tabs)/saved")}
                style={pressableStyle(styles.seeAllBtn)}
              >
                <Text style={[styles.seeAllText, { color: theme.gold }]}>
                  Manage
                </Text>
                <Ionicons name="arrow-forward" size={14} color={theme.gold} />
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.pinnedStripContent}
              bounces={true}
              alwaysBounceHorizontal={true}
              overScrollMode="always"
            >
              {pinnedTools.map((t) => {
                const col = categoryColorMap[t.category] || theme.gold;
                return (
                  <Pressable
                    key={`pinned-chip-${t.slug}`}
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() =>
                      router.push({
                        pathname: "/tools/[slug]",
                        params: { slug: t.slug },
                      })
                    }
                    style={pressableStyle([
                      styles.pinnedMiniCard,
                      {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: theme.outlineVariant,
                      },
                    ])}
                  >
                    <View
                      style={[
                        styles.pinnedMiniIcon,
                        { backgroundColor: `${col}1C` },
                      ]}
                    >
                      <DynamicIcon emoji={t.icon} size={15} color={col} />
                    </View>
                    <Text
                      style={[
                        styles.pinnedMiniTitle,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      {t.shortTitle || t.title}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </>
        )}

        {/* 6. Popular Everyday Tools */}
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              MOST USED
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Popular Kenyan Tools
            </Text>
          </View>
          <Pressable
            android_ripple={androidRipple(theme.rippleColor, true)}
            onPress={() =>
              router.push({
                pathname: "/(tabs)/tools",
                params: { category: "all" },
              })
            }
            style={pressableStyle(styles.seeAllBtn)}
          >
            <Text style={[styles.seeAllText, { color: theme.gold }]}>
              All {TOOLS.length}
            </Text>
            <Ionicons name="arrow-forward" size={14} color={theme.gold} />
          </Pressable>
        </View>

        <View style={styles.popularToolsList}>
          {popular.map((t) => (
            <PopularToolRow
              key={t.slug}
              tool={t}
              isPinned={pinnedSlugs.includes(t.slug)}
              onTogglePin={togglePinTool}
            />
          ))}
        </View>

        {/* 7. Topic Categories */}
        <View style={[styles.sectionHeader, { marginTop: 22 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              BROWSE BY TOPIC
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Tool Categories ({TOOL_CATEGORIES.length})
            </Text>
          </View>
        </View>

        <View style={styles.categoriesFullList}>
          {TOOL_CATEGORIES.map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            const catColor = categoryColorMap[cat.id] || theme.gold;

            return (
              <Pressable
                key={cat.id}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/tools",
                    params: { category: cat.id },
                  })
                }
                style={pressableStyle([
                  styles.categoryFullCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ])}
              >
                <View
                  style={[
                    styles.catIconWrap,
                    {
                      backgroundColor: `${catColor}18`,
                      borderColor: `${catColor}35`,
                    },
                  ]}
                >
                  <DynamicIcon emoji={cat.icon} size={20} color={catColor} />
                </View>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <View style={styles.catHeaderLine}>
                    <Text
                      style={[styles.catTitle, { color: theme.textPrimary }]}
                    >
                      {cat.name}
                    </Text>
                    <View
                      style={[
                        styles.catCountBadge,
                        { backgroundColor: `${catColor}18` },
                      ]}
                    >
                      <Text style={[styles.catCountSub, { color: catColor }]}>
                        {count} {count === 1 ? "tool" : "tools"}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[styles.catDescText, { color: theme.textSecondary }]}
                  >
                    {cat.description}
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={theme.textMuted}
                />
              </Pressable>
            );
          })}
        </View>

        {/* 8. Horizontal Editorial Guides Carousel */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              KENYAHUB GUIDES
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Practical Explainers ({sortedPosts.length})
            </Text>
          </View>
        </View>

        <ExpandablePillRow
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 8,
            marginBottom: 12,
          }}
        >
          {blogTags.map((tag) => {
            const active = selectedBlogTag === tag;
            return (
              <Pressable
                key={tag}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => setSelectedBlogTag(tag)}
                style={pressableStyle({
                  paddingHorizontal: 13,
                  paddingVertical: 6,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                })}
              >
                <Text
                  style={{
                    fontSize: 11.5,
                    fontFamily: "Outfit_700Bold",
                    color: active
                      ? theme.onPrimaryContainer
                      : theme.textSecondary,
                  }}
                >
                  {tag}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.guidesCarouselContent}
          bounces={true}
          alwaysBounceHorizontal={true}
          overScrollMode="always"
        >
          {sortedPosts.map((post) => (
            <Pressable
              key={post.slug}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() => {
                setReaderProgress(0);
                setSelectedPost(post);
              }}
              style={pressableStyle([
                styles.guideCarouselCard,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ])}
            >
              <View style={styles.guideTagRow}>
                {(post.tags || []).slice(0, 2).map((t) => (
                  <View
                    key={t}
                    style={{
                      backgroundColor: `${theme.gold}1A`,
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: "Outfit_700Bold",
                        color: theme.gold,
                      }}
                    >
                      {t}
                    </Text>
                  </View>
                ))}
                <Text style={{ fontSize: 10.5, color: theme.textMuted }}>
                  {post.readTime}m read
                </Text>
              </View>

              <Text
                style={[styles.guideCardTitle, { color: theme.textPrimary }]}
                numberOfLines={2}
              >
                {post.title}
              </Text>
              <Text
                style={[styles.guideCardExcerpt, { color: theme.textSecondary }]}
                numberOfLines={3}
              >
                {post.excerpt}
              </Text>

              <View style={styles.guideReadFooter}>
                <Text
                  style={{
                    fontSize: 11.5,
                    fontFamily: "Outfit_700Bold",
                    color: theme.gold,
                  }}
                >
                  Read Guide
                </Text>
                <Ionicons name="arrow-forward" size={13} color={theme.gold} />
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Kenyan Statutory Public Holidays Modal */}
      <Modal
        visible={showHolidaysModal}
        animationType="slide"
        onRequestClose={() => setShowHolidaysModal(false)}
      >
        <SafeAreaView
          style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
          edges={["top", "left", "right", "bottom"]}
        >
          <KenyaStripe />
          <AndroidTopAppBar
            title="Kenyan Public Holidays"
            subtitle="Statutory National & Religious Holidays"
            onBack={() => setShowHolidaysModal(false)}
          />
          <ScrollView
            contentContainerStyle={{ padding: 16, paddingBottom: 48, gap: 10 }}
            showsVerticalScrollIndicator={false}
          >
            {allHolidaysList.map((h, idx) => (
              <View
                key={`${h.date}-${idx}`}
                style={[
                  styles.readerHeroCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Outfit_700Bold",
                      fontSize: 15,
                      color: theme.textPrimary,
                    }}
                  >
                    {h.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11.5,
                      fontFamily: "Outfit_700Bold",
                      color: theme.sky,
                    }}
                  >
                    {new Date(h.date + "T00:00:00").toLocaleDateString(
                      "en-KE",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12.5,
                    color: theme.textSecondary,
                    lineHeight: 18,
                  }}
                >
                  {h.description}
                </Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Full-Screen Blog Guide Reader Modal with Reading Progress Bar & Tappable Links (MOB-10, UX-2, UX-13) */}
      <Modal
        visible={!!selectedPost}
        animationType="slide"
        onRequestClose={() => setSelectedPost(null)}
      >
        <SafeAreaView
          style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
          edges={["top", "left", "right", "bottom"]}
        >
          <KenyaStripe />
          <AndroidTopAppBar
            title={selectedPost?.title || "Guide"}
            subtitle={
              selectedPost
                ? `${selectedPost.author} · ${selectedPost.readTime} min read`
                : ""
            }
            onBack={() => setSelectedPost(null)}
          />
          {/* 3dp Gold Reading Progress Bar (UX-13) */}
          <View
            style={{
              height: 3,
              width: "100%",
              backgroundColor: theme.surfaceContainerHigh,
            }}
          >
            <View
              style={{
                height: "100%",
                width: `${Math.min(100, Math.max(4, readerProgress * 100))}%`,
                backgroundColor: theme.gold,
              }}
            />
          </View>

          {selectedPost && (
            <ScrollView
              contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={(e) => {
                const { contentOffset, contentSize, layoutMeasurement } =
                  e.nativeEvent;
                const maxScroll = Math.max(
                  1,
                  contentSize.height - layoutMeasurement.height
                );
                setReaderProgress(Math.min(1, Math.max(0, contentOffset.y / maxScroll)));
              }}
            >
              <View
                style={[
                  styles.readerHeroCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                    marginBottom: 16,
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  {(selectedPost.tags || []).map((t) => (
                    <View
                      key={t}
                      style={{
                        backgroundColor: `${theme.gold}20`,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: "Outfit_700Bold",
                          color: theme.gold,
                        }}
                      >
                        {t}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text
                  style={{
                    fontFamily: "Outfit_800ExtraBold",
                    fontSize: 20,
                    color: theme.textPrimary,
                    lineHeight: 26,
                  }}
                >
                  {selectedPost.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: theme.textSecondary,
                    marginTop: 6,
                    lineHeight: 19,
                  }}
                >
                  {selectedPost.excerpt}
                </Text>
              </View>

              <View
                style={[
                  styles.readerHeroCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <BlogMarkdownContent
                  content={selectedPost.content}
                  theme={theme}
                  onNavigateLink={handleBlogLinkNavigation}
                />
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
