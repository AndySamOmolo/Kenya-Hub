import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Modal,
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
import {
  STATIC_BLOG_POSTS,
  type StaticBlogPost,
} from "../../src/shared/data/blog-posts";
import {
  INITIAL_RANDOM_WORDS,
  TOTAL_DICTIONARY_ENTRIES,
  ALL_DICT_METAS,
} from "../../src/shared/data/language-sources";
import holidaysData from "../../src/shared/data/public-holidays.json";
import { DynamicIcon } from "../../src/components/DynamicIcon";

import {
  COURSE_NAMES,
  ROTATING_LANGUAGES,
  SUPER_APP_LAUNCHER_ITEMS,
  BlogMarkdownContent,
  PopularToolRow,
  SUPER_APP_APP_TILES,
} from "../../src/components/home/HomeHelpers";
import { styles } from "../../src/components/home/styles";

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<StaticBlogPost | null>(null);
  const [selectedBlogTag, setSelectedBlogTag] = useState<string>("All");
  const [wordIdx, setWordIdx] = useState<number>(0);
  const [featuredLangIdx, setFeaturedLangIdx] = useState<number>(
    () => new Date().getDate() % ROTATING_LANGUAGES.length
  );

  // Auto-rotate daily widgets every 6 seconds so user experiences rotating languages & words
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedLangIdx((prev) => (prev + 1) % ROTATING_LANGUAGES.length);
      setWordIdx((prev) => (prev + 1) % Math.max(1, INITIAL_RANDOM_WORDS.length));
    }, 6000);
    return () => clearInterval(timer);
  }, []);
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
        .then((val) => setPinnedSlugs(val?.split(",").filter(Boolean) ?? []))
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

    // Sort by user visits first, then curated usage score
    const sorted = [...TOOLS].sort((a, b) => {
      const vA = visitCounts[a.slug] || 0;
      const vB = visitCounts[b.slug] || 0;
      if (vB !== vA) return vB - vA;
      return getToolUsageScore(b) - getToolUsageScore(a);
    });

    const topFive = sorted.slice(0, 5).map((t) => {
      const m = TOOL_META[t.slug] || { label: t.shortTitle.split(" ")[0], icon: "apps", color: "#C8961E" };
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
        route: "/(tabs)/matatu" as const,
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
      AsyncStorage.setItem("kh-saved-tools", next.join(",")).catch(() => {});
      return next;
    });
  }, []);

  const greeting = useMemo(() => {
    const hr = new Date().getHours();
    if (hr < 12) return { sw: "Habari ya Asubuhi", en: "Good morning" };
    if (hr < 17) return { sw: "Habari ya Mchana", en: "Good afternoon" };
    return { sw: "Habari ya Jioni", en: "Good evening" };
  }, []);

  const nextHoliday = useMemo(() => {
    const now = new Date();
    const todayIso = now.toISOString().slice(0, 10);
    const allYears = Object.values((holidaysData as any).holidays || {}).flat() as {
      date: string;
      name: string;
      description: string;
    }[];
    const upcoming = allYears
      .filter((h) => h.date >= todayIso)
      .sort((a, b) => a.date.localeCompare(b.date));
    const pick = upcoming[0] || allYears[0];
    if (!pick) return null;
    const diffMs =
      new Date(pick.date + "T00:00:00").getTime() -
      new Date(todayIso + "T00:00:00").getTime();
    const daysAway = Math.max(0, Math.round(diffMs / (1000 * 60 * 60 * 24)));
    return { ...pick, daysAway };
  }, []);

  const currentWord = useMemo(() => {
    if (!INITIAL_RANDOM_WORDS.length) return null;
    return INITIAL_RANDOM_WORDS[wordIdx % INITIAL_RANDOM_WORDS.length];
  }, [wordIdx]);

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
    STATIC_BLOG_POSTS.forEach((p) => (p.tags || []).forEach((t) => tags.add(t)));
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
              style={[
                styles.xpHeaderPill,
                {
                  backgroundColor: `${theme.gold}1E`,
                  borderColor: `${theme.gold}50`,
                },
              ]}
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
              style={[
                styles.savedCountPill,
                {
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons name="bookmark" size={14} color={theme.gold} />
              <Text style={[styles.savedCountText, { color: theme.textPrimary }]}>
                {pinnedTools.length} Saved
              </Text>
            </Pressable>
          </View>

          {/* 2. Instant In-Place Android Search Bar */}
          <View
            style={[
              styles.searchInputBar,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: searchQuery.length > 0 ? theme.gold : theme.outlineVariant,
              },
            ]}
          >
            <Ionicons name="search" size={18} color={theme.gold} />
            <TextInput
              key={`home-search-input-${theme.isDark ? "dark" : "light"}`}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder={`Search ${TOOLS.length} tools (PAYE, M-Pesa, KPLC...)`}
              placeholderTextColor={theme.textSecondary}
              numberOfLines={1}
              multiline={false}
              scrollEnabled={false}
              style={[styles.searchInputText, { color: theme.textPrimary }]}
              returnKeyType="search"
            />
            {searchQuery.length > 0 ? (
              <Pressable onPress={() => setSearchQuery("")} hitSlop={10}>
                <Ionicons name="close-circle" size={19} color={theme.textMuted} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => router.push({ pathname: "/(tabs)/tools", params: { category: "all" } })}
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
                  INSTANT MATCHES ({inlineSearchResults.length})
                </Text>
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/tools",
                    })
                  }
                >
                  <Text style={{ fontSize: 11.5, fontFamily: "Outfit_700Bold", color: theme.gold }}>
                    Full Directory →
                  </Text>
                </Pressable>
              </View>

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
                      style={[
                        styles.instantResultRow,
                        idx > 0 && {
                          borderTopWidth: 1,
                          borderTopColor: theme.outlineVariant,
                        },
                      ]}
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
              ) : (
                <View style={{ paddingVertical: 14, alignItems: "center" }}>
                  <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>
                    No tool found matching &ldquo;{searchQuery}&rdquo;
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        {/* 3. Native Super-App Quick Launcher (Open layout, no cramped card) */}
        <View style={styles.launcherSection}>
          <View style={styles.launcherGrid}>
            {SUPER_APP_APP_TILES(dynamicLauncherItems, router, theme)}
          </View>
        </View>

        {/* 4. Live Kenyan Snapshot Horizontal Widgets */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              LIVE SNAPSHOT
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Daily Kenyan Widgets
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.widgetsScrollContent}
        >
          {/* Widget A: Language Learning Hub (Auto-rotating & touch-isolated) */}
          <View
            key={`widget-learn-${theme.isDark ? "dark" : "light"}`}
            style={[
              styles.snapshotWidget,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: `${theme.gold}45`,
              },
            ]}
          >
            {(() => {
              const currentFeatured = ROTATING_LANGUAGES[featuredLangIdx % ROTATING_LANGUAGES.length];
              const isCurrentLearned = learnStats.langId === currentFeatured.id && learnStats.totalXP > 0;

              return (
                <>
                  <View style={styles.widgetHeaderRow}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                      <View style={[styles.widgetBadgePill, { backgroundColor: `${theme.gold}22` }]}>
                        <Ionicons name="school" size={12} color={theme.gold} />
                        <Text style={[styles.widgetBadgeText, { color: theme.gold }]}>
                          23 COURSES
                        </Text>
                      </View>
                      <View style={{ backgroundColor: `${theme.gold}18`, paddingHorizontal: 6, paddingVertical: 1.5, borderRadius: 999 }}>
                        <Text style={{ fontSize: 9.5, fontWeight: "800", color: theme.gold }}>
                          “{currentFeatured.greeting}”
                        </Text>
                      </View>
                    </View>
                    <Pressable
                      onPress={() => {
                        setFeaturedLangIdx((i) => (i + 1) % ROTATING_LANGUAGES.length);
                      }}
                      hitSlop={12}
                      style={styles.diceMiniBtn}
                    >
                      <Ionicons name="dice-outline" size={14} color={theme.gold} />
                      <Text style={{ fontSize: 10, fontFamily: "Outfit_700Bold", color: theme.gold }}>
                        Rotate
                      </Text>
                    </Pressable>
                  </View>

                  <Pressable
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() => {
                      router.push({
                        pathname: "/tools/[slug]",
                        params: { slug: "learn", lang: currentFeatured.id },
                      });
                    }}
                    style={{ flex: 1, justifyContent: "space-between" }}
                  >
                    <View>
                      <Text style={[styles.widgetMainTitle, { color: theme.textPrimary }]}>
                        Learn {currentFeatured.name}
                      </Text>
                      <Text
                        style={[styles.widgetSubText, { color: theme.textSecondary }]}
                        numberOfLines={2}
                      >
                        {isCurrentLearned
                          ? `${learnStats.totalXP} XP earned · Continue flashcards, grammar & oral wisdom in ${currentFeatured.region}`
                          : `Explore ${currentFeatured.name} — ${currentFeatured.region} · Flashcards, grammar & oral wisdom`}
                      </Text>
                    </View>

                    <View style={styles.widgetFooterLink}>
                      <Text style={[styles.widgetFooterLinkText, { color: theme.gold }]}>
                        {isCurrentLearned ? "Resume Course" : "Start Learning"}
                      </Text>
                      <Ionicons name="arrow-forward" size={13} color={theme.gold} />
                    </View>
                  </Pressable>
                </>
              );
            })()}
          </View>

          {/* Widget B: Word of the Moment (Auto-rotating & touch-isolated) */}
          {currentWord && (
            <View
              style={[
                styles.snapshotWidget,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={styles.widgetHeaderRow}>
                <View
                  style={[
                    styles.widgetBadgePill,
                    { backgroundColor: "rgba(47, 164, 99, 0.16)" },
                  ]}
                >
                  <Ionicons name="sparkles" size={12} color="#2FA463" />
                  <Text style={[styles.widgetBadgeText, { color: "#2FA463" }]}>
                    {currentWord.langName.toUpperCase()} WORD
                  </Text>
                </View>
                <Pressable
                  onPress={() => setWordIdx((i) => (i + 1) % Math.max(1, INITIAL_RANDOM_WORDS.length))}
                  hitSlop={12}
                  style={styles.diceMiniBtn}
                >
                  <Ionicons name="dice-outline" size={14} color={theme.gold} />
                  <Text style={{ fontSize: 10, fontFamily: "Outfit_700Bold", color: theme.gold }}>
                    Next
                  </Text>
                </Pressable>
              </View>

              <Pressable
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() =>
                  router.push({
                    pathname: "/tools/[slug]",
                    params: { slug: "kenyan-translator" },
                  })
                }
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <View>
                  <Text
                    style={[styles.widgetMainTitle, { color: theme.gold }]}
                    numberOfLines={1}
                  >
                    {currentWord.entry.translation}
                  </Text>
                  <Text
                    style={[styles.widgetSubText, { color: theme.textPrimary }]}
                    numberOfLines={2}
                  >
                    &ldquo;{currentWord.entry.english}&rdquo;{" "}
                    {currentWord.entry.pronunciation
                      ? `· /${currentWord.entry.pronunciation}/`
                      : ""}
                  </Text>
                </View>

                <View style={styles.widgetFooterLink}>
                  <Text style={[styles.widgetFooterLinkText, { color: "#2FA463" }]}>
                    {TOTAL_DICTIONARY_ENTRIES.toLocaleString()}+ Words in {ALL_DICT_METAS.length} Languages
                  </Text>
                  <Ionicons name="arrow-forward" size={13} color="#2FA463" />
                </View>
              </Pressable>
            </View>
          )}

          {/* Widget C: Next Kenyan Public Holiday Countdown */}
          {nextHoliday && (
            <Pressable
              key={`widget-holiday-${theme.isDark ? "dark" : "light"}`}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() =>
                router.push({
                  pathname: "/tools/[slug]",
                  params: { slug: "public-holidays" },
                })
              }
              style={[
                styles.snapshotWidget,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
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
                <Text style={{ fontSize: 11, fontFamily: "Outfit_700Bold", color: theme.sky }}>
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
                <Text style={[styles.widgetFooterLinkText, { color: theme.sky }]}>
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
                style={styles.seeAllBtn}
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
            >
              {pinnedTools.map((t) => {
                const col = categoryColorMap[t.category] || theme.gold;
                return (
                  <Pressable
                    key={`pinned-chip-${t.slug}-${theme.isDark ? "dark" : "light"}`}
                    android_ripple={androidRipple(theme.rippleColor)}
                    onPress={() =>
                      router.push({
                        pathname: "/tools/[slug]",
                        params: { slug: t.slug },
                      })
                    }
                    style={[
                      styles.pinnedMiniCard,
                      {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
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

        {/* 6. Popular Everyday Tools - Spacious Native List */}
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
            onPress={() => router.push({ pathname: "/(tabs)/tools", params: { category: "all" } })}
            style={styles.seeAllBtn}
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

        {/* 7. Topic Categories - Displayed in Full */}
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
                style={[
                  styles.categoryFullCard,
                  {
                    backgroundColor: theme.surfaceContainer,
                    borderColor: theme.outlineVariant,
                  },
                ]}
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
                onPress={() => setSelectedBlogTag(tag)}
                style={{
                  paddingHorizontal: 13,
                  paddingVertical: 6,
                  borderRadius: 999,
                  borderWidth: 1,
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                }}
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
        >
          {sortedPosts.map((post) => (
            <Pressable
              key={`${post.slug}-${theme.isDark ? "dark" : "light"}`}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() => setSelectedPost(post)}
              style={[
                styles.guideCarouselCard,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
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

      {/* Full-Screen Blog Guide Reader Modal */}
      <Modal
        visible={!!selectedPost}
        animationType="slide"
        onRequestClose={() => setSelectedPost(null)}
      >
        <SafeAreaView
          style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
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
          {selectedPost && (
            <ScrollView
              contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
              showsVerticalScrollIndicator={false}
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
                />
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

