import { useAppLanguage, translateCategoryDescription, translateCategoryName, translateToolShortTitle } from "../../src/lib/i18n";
import { ExpandablePillRow } from "../../src/components/ExpandablePillRow";
import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AppState,
  Linking,
  Modal,
  Pressable,
  ScrollView,
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
  triggerHaptic,
  parseSavedTools,
  serializeSavedTools,
  getThemedCardStyle,
  getThemedInputStyle,
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
import { PUBLISHED_COURSE_SUMMARIES } from "../../src/shared/data/courses/catalog-summary";
import { ThemedIcon, ThemedIconBadge } from "../../src/components/ThemedIcon";

import {
  COURSE_NAMES,
  ROTATING_LANGUAGES,
  BlogMarkdownContent,
  PopularToolRow,
  SuperAppLauncherTiles,
  FeaturedLanguageWidget,
  WordOfTheMomentWidget,
  resolveToolIoniconName,
} from "../../src/components/home/HomeHelpers";
import { createHomeStyles } from "../../src/components/home/styles";

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

const ALL_MATATU_ROUTES = Object.entries(matatuData.routes || {}).flatMap(
  ([townSlug, routes]) =>
    ((routes as any[]) || []).map((r) => ({ ...r, townSlug }))
);

const CATEGORY_TOOL_COUNTS: Record<string, number> = {};
for (const t of TOOLS) {
  CATEGORY_TOOL_COUNTS[t.category] = (CATEGORY_TOOL_COUNTS[t.category] || 0) + 1;
}

interface FormattedHolidayItem {
  date: string;
  name: string;
  description: string;
  type?: string;
  formattedDate: string;
  formattedWeekdayDate: string;
}

const DailyWidgetsCarousel = React.memo(function DailyWidgetsCarousel({
  isHomeFocused,
  theme,
  themeConfig,
  styles,
  themedCardStyle,
  isFrameless,
  headingTransform,
  showTrailingArrows,
  learnStats,
  matatuSummary,
  nextHoliday,
  onOpenMatatu,
  onOpenHolidays,
}: {
  isHomeFocused: boolean;
  theme: any;
  themeConfig: any;
  styles: any;
  themedCardStyle: any;
  isFrameless: boolean;
  headingTransform: any;
  showTrailingArrows: boolean;
  learnStats: {
    langId: string;
    langName: string;
    totalXP: number;
    streak: number;
    greeting?: string;
    region?: string;
  };
  matatuSummary: { routeCount: number; stageCount: number; townCount: number };
  nextHoliday: (FormattedHolidayItem & { daysAway: number }) | null;
  onOpenMatatu: () => void;
  onOpenHolidays: () => void;
}) {
  const widgetsScrollRef = useRef<ScrollView>(null);
  const [activeWidgetPage, setActiveWidgetPage] = useState(0);
  const activeWidgetPageRef = useRef(activeWidgetPage);
  activeWidgetPageRef.current = activeWidgetPage;
  const [widgetsTouchPaused, setWidgetsTouchPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseWidgetsTemporarily = useCallback(() => {
    setWidgetsTouchPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setWidgetsTouchPaused(false);
    }, 6000);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isHomeFocused || widgetsTouchPaused) return;
    const timer = setInterval(() => {
      if (AppState.currentState !== "active") return;
      const next = (activeWidgetPageRef.current + 1) % 4;
      activeWidgetPageRef.current = next;
      setActiveWidgetPage(next);
      widgetsScrollRef.current?.scrollTo({
        x: next * WIDGET_SNAP_INTERVAL,
        animated: true,
      });
    }, 5500);
    return () => clearInterval(timer);
  }, [isHomeFocused, widgetsTouchPaused]);

  const handleWidgetMomentumEnd = useCallback((e: any) => {
    const page = Math.round(e.nativeEvent.contentOffset.x / WIDGET_SNAP_INTERVAL);
    setActiveWidgetPage(Math.max(0, Math.min(3, page)));
  }, []);

  return (
    <>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={[styles.sectionOverline, { color: theme.gold }]}>
            LIVE SNAPSHOT
          </Text>
          <Text style={[styles.sectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
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
        ref={widgetsScrollRef}
        horizontal
        showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"}
        snapToInterval={WIDGET_SNAP_INTERVAL}
        decelerationRate="fast"
        bounces={true}
        alwaysBounceHorizontal={true}
        overScrollMode="always"
        onScrollBeginDrag={pauseWidgetsTemporarily}
        onMomentumScrollEnd={handleWidgetMomentumEnd}
        contentContainerStyle={styles.widgetsScrollContent}
      >
        {/* Widget A: Isolated Featured Language Card (MOB-4, UX-6) */}
        <FeaturedLanguageWidget
          learnStats={learnStats}
          paused={widgetsTouchPaused}
          sharedStyles={styles}
        />

        {/* Widget B: Isolated Word of the Moment Card (MOB-4, UX-6) */}
        <WordOfTheMomentWidget paused={widgetsTouchPaused} sharedStyles={styles} />

        {/* Widget C: Matatu Routes & SACCO Fares Explorer */}
        <Pressable
          android_ripple={androidRipple(theme.rippleColor)}
          accessibilityRole="button"
          accessibilityLabel="Open Matatu Transit Routes and Fares Hub"
          onPress={onOpenMatatu}
          style={pressableStyle([
            styles.snapshotWidget,
            themedCardStyle,
            isFrameless && {
              paddingHorizontal: 4,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: theme.outlineVariant,
            },
          ])}
        >
          <View style={styles.widgetHeaderRow}>
            <View
              style={[
                styles.widgetBadgePill,
                { backgroundColor: `${theme.sky}29` },
              ]}
            >
              <ThemedIcon name="bus" size={12} color={theme.sky} scaleWithTheme={false} />
              <Text style={[styles.widgetBadgeText, { color: theme.sky }]}>
                MATATU TRANSIT
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Outfit_700Bold",
                color: theme.sky,
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
            <Text style={[styles.widgetFooterLinkText, { color: theme.sky }]}>
              Open Matatu Hub
            </Text>
            {showTrailingArrows && (
              <ThemedIcon name="arrow-forward" size={13} color={theme.sky} scaleWithTheme={false} />
            )}
          </View>
        </Pressable>

        {/* Widget D: Next Kenyan Public Holiday Countdown */}
        {nextHoliday && (
          <Pressable
            android_ripple={androidRipple(theme.rippleColor)}
            accessibilityRole="button"
            accessibilityLabel={`Next Kenyan public holiday: ${nextHoliday.name}`}
            onPress={onOpenHolidays}
            style={pressableStyle([
              styles.snapshotWidget,
              themedCardStyle,
              isFrameless && {
                paddingHorizontal: 4,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: theme.outlineVariant,
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
                <ThemedIcon name="calendar" size={12} color={theme.sky} scaleWithTheme={false} />
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
              {nextHoliday.formattedWeekdayDate} — {nextHoliday.description}
            </Text>

            <View style={styles.widgetFooterLink}>
              <Text
                style={[styles.widgetFooterLinkText, { color: theme.sky }]}
              >
                Full Holiday Calendar
              </Text>
              {showTrailingArrows && (
                <ThemedIcon name="arrow-forward" size={13} color={theme.sky} scaleWithTheme={false} />
              )}
            </View>
          </Pressable>
        )}
      </ScrollView>
    </>
  );
});

const HomeBlogReaderModal = React.memo(function HomeBlogReaderModal({
  post,
  theme,
  themeConfig,
  styles,
  onClose,
  onNavigateLink,
}: {
  post: StaticBlogPost;
  theme: any;
  themeConfig: any;
  styles: any;
  onClose: () => void;
  onNavigateLink: (url: string) => void;
}) {
  const [readerProgress, setReaderProgress] = useState(0);
  const lastReaderProgressRef = useRef(0);

  useEffect(() => {
    lastReaderProgressRef.current = 0;
    setReaderProgress(0);
  }, [post.slug]);

  return (
    <Modal
      visible={true}
      animationType="slide"
      accessibilityViewIsModal={true}
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
        edges={["top", "left", "right", "bottom"]}
      >
        <KenyaStripe />
        <AndroidTopAppBar
          title={post.title || "Guide"}
          subtitle={`${post.author} · ${post.readTime} min read`}
          onBack={onClose}
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

        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
          showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
          persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
          scrollEventThrottle={48}
          onScroll={(e) => {
            const { contentOffset, contentSize, layoutMeasurement } =
              e.nativeEvent;
            const maxScroll = Math.max(
              1,
              contentSize.height - layoutMeasurement.height
            );
            const next = Math.min(1, Math.max(0, contentOffset.y / maxScroll));
            if (
              Math.abs(next - lastReaderProgressRef.current) >= 0.03 ||
              ((next === 0 || next === 1) && next !== lastReaderProgressRef.current)
            ) {
              lastReaderProgressRef.current = next;
              setReaderProgress(next);
            }
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
              {(post.tags || []).map((t) => (
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
              {post.title}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.textSecondary,
                marginTop: 6,
                lineHeight: 19,
              }}
            >
              {post.excerpt}
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
              content={post.content}
              theme={theme}
              onNavigateLink={onNavigateLink}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
});

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts } = useTheme();
  const { language, t } = useAppLanguage();
  const styles = useMemo(
    () => createHomeStyles(themeMetrics, resolvedFonts),
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
  const homeLayout = themeConfig.homeLayout || "classic";
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(14 * (themeMetrics?.spacingScale ?? 1));
  const extraScrollPadPx = (themeMetrics as any)?.screenPaddingPx !== undefined ? Math.max(0, (themeMetrics as any).screenPaddingPx - 14) : 0;
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const headingTransform = themeConfig.headingTransform || "none";
  const showOfflinePill = themeConfig.showOfflinePill !== false;
  const showHomeGreeting = themeConfig.showHomeGreeting !== false;
  const showDailyWidgets = themeConfig.showDailyWidgets !== false;
  const showTrailingArrows = themeConfig.showTrailingArrows !== false;
  const isFrameless = themeConfig.surfaceStyle === "frameless";
  const [pinnedSlugs, setPinnedSlugs] = useState<string[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [selectedPost, setSelectedPost] = useState<StaticBlogPost | null>(null);
  const lastStorageRawRef = useRef<{
    saved?: string | null;
    visits?: string | null;
    progress?: string | null;
  }>({});
  const [showHolidaysModal, setShowHolidaysModal] = useState(false);
  const [selectedBlogTag, setSelectedBlogTag] = useState<string>("All");
  const isHomeFocused = useIsFocused();

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
      let active = true;
      AsyncStorage.multiGet([
        "kh-saved-tools",
        "kh-tool-visits",
        "@kenyahub_course_progress_v2",
      ])
        .then((entries) => {
          if (!active) return;
          const map = new Map(entries);

          const savedVal = map.get("kh-saved-tools") ?? null;
          if (savedVal !== lastStorageRawRef.current.saved) {
            lastStorageRawRef.current.saved = savedVal;
            setPinnedSlugs(parseSavedTools(savedVal));
          }

          const visitsRaw = map.get("kh-tool-visits") ?? null;
          if (visitsRaw !== lastStorageRawRef.current.visits) {
            lastStorageRawRef.current.visits = visitsRaw;
            if (!visitsRaw) {
              setVisitCounts({});
            } else {
              try {
                const parsed = JSON.parse(visitsRaw);
                setVisitCounts(parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {});
              } catch {
                setVisitCounts({});
              }
            }
          }

          const progRaw = map.get("@kenyahub_course_progress_v2") ?? null;
          if (progRaw !== lastStorageRawRef.current.progress) {
            lastStorageRawRef.current.progress = progRaw;
            if (progRaw) {
              try {
                const parsed = JSON.parse(progRaw);
                if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                  let totalXP = 0;
                  let bestStreak = 0;
                  let activeLang = "swahili";
                  let latestPractice = 0;
                  let highestLangXP = 0;
                  for (const [lid, prog] of Object.entries(parsed) as [string, any][]) {
                    const xp = Number(prog?.totalXP) || 0;
                    const st = Number(prog?.streak) || 0;
                    totalXP += xp;
                    if (xp > highestLangXP && latestPractice === 0) {
                      highestLangXP = xp;
                      activeLang = lid;
                    }
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
                }
              } catch {}
            }
          }
        })
        .catch(() => {});
      return () => {
        active = false;
      };
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
      "ntsa-transfer-calculator": { label: "NTSA", icon: "car", color: "#2FA463" },
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

  const pinnedSlugsRef = useRef(pinnedSlugs);
  pinnedSlugsRef.current = pinnedSlugs;

  const togglePinTool = useCallback((slug: string) => {
    const prev = pinnedSlugsRef.current;
    const next = prev.includes(slug)
      ? prev.filter((s) => s !== slug)
      : [slug, ...prev];
    pinnedSlugsRef.current = next;
    setPinnedSlugs(next);
    const serialized = serializeSavedTools(next);
    lastStorageRawRef.current.saved = serialized;
    AsyncStorage.setItem("kh-saved-tools", serialized).catch(() => {});
  }, []);

  const handleBlogLinkNavigation = useCallback(
    (href: string) => {
      const clean = href.trim();
      if (clean.startsWith("http://") || clean.startsWith("https://")) {
        if (/^https?:\/\/(www\.)?kenyahub\.me\//i.test(clean)) {
          const pathPart = clean.replace(/^https?:\/\/(www\.)?kenyahub\.me/i, "") || "/";
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
          lastReaderProgressRef.current = 0;
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

  const allHolidaysList = useMemo<FormattedHolidayItem[]>(() => {
    const allYears = Object.values(
      (holidaysData as any).holidays || {}
    ).flat() as {
      date: string;
      name: string;
      description: string;
      type?: string;
    }[];
    return [...allYears]
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((h) => {
        const dt = new Date(h.date + "T00:00:00");
        return {
          ...h,
          formattedDate: dt.toLocaleDateString("en-KE", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          formattedWeekdayDate: dt.toLocaleDateString("en-KE", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });
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
    const q = deferredSearchQuery.trim().toLowerCase();
    if (!q) return false;
    return MATATU_KEYWORDS.some((kw) => kw.includes(q) || q.includes(kw));
  }, [deferredSearchQuery]);

  const inlineSearchResults = useMemo(() => {
    const q = deferredSearchQuery.trim().toLowerCase();
    if (!q) return [];
    return TOOLS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.shortTitle.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.keywords || []).some((k) => k.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [deferredSearchQuery]);

  const matchingCourses = useMemo(() => {
    const norm = (s: string) =>
      String(s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f'’]/g, "")
        .toLowerCase();
    const q = norm(deferredSearchQuery.trim());
    if (!q) return [];
    return PUBLISHED_COURSE_SUMMARIES.filter(
      ({ config }) =>
        norm(config.name).includes(q) ||
        norm(config.nativeName || "").includes(q) ||
        norm(config.family).includes(q) ||
        (config.counties || []).some((c) => norm(c).includes(q))
    ).slice(0, 3);
  }, [deferredSearchQuery]);

  const matchingMatatuRoutes = useMemo(() => {
    const q = deferredSearchQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_MATATU_ROUTES
      .filter(
        (r) =>
          String(r.name || "").toLowerCase().includes(q) ||
          String(r.routeNumber || "").toLowerCase().includes(q) ||
          String(r.terminusA || "").toLowerCase().includes(q) ||
          String(r.terminusB || "").toLowerCase().includes(q) ||
          (r.saccos || []).some((s: string) => s.toLowerCase().includes(q)) ||
          (r.stages || []).some((st: any) =>
            String(st.name || "").toLowerCase().includes(q)
          )
      )
      .slice(0, 3);
  }, [deferredSearchQuery]);

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

  const pinnedSet = useMemo(() => new Set(pinnedSlugs), [pinnedSlugs]);

  const pinnedTools = useMemo(
    () =>
      pinnedSlugs
        .map((s) => TOOLS.find((t) => t.slug === s))
        .filter(Boolean) as (typeof TOOLS)[0][],
    [pinnedSlugs]
  );

  const handleClearSearch = useCallback(() => setSearchQuery(""), []);
  const handleOpenHolidays = useCallback(() => setShowHolidaysModal(true), []);
  const handleOpenMatatu = useCallback(() => router.push("/matatu"), [router]);
  const handleCloseHolidays = useCallback(() => setShowHolidaysModal(false), []);
  const handleClosePost = useCallback(() => setSelectedPost(null), []);

  const offlineRightAction = useMemo(
    () =>
      showOfflinePill ? (
        <View style={styles.headerBadgesRow}>
          <View
            accessibilityLabel="Offline ready"
            style={[
              styles.offlineChip,
              {
                backgroundColor: theme.secondaryContainer,
                borderColor: `${theme.kenyaGreenLight}38`,
              },
            ]}
          >
            <View
              style={[
                styles.offlineStatusDot,
                { backgroundColor: theme.kenyaGreenLight },
              ]}
            />
            <Text
              style={[
                styles.offlineChipText,
                { color: theme.onSecondaryContainer },
              ]}
            >
              {t("home.offline")}
            </Text>
          </View>
        </View>
      ) : undefined,
    [
      showOfflinePill,
      styles.headerBadgesRow,
      styles.offlineChip,
      styles.offlineStatusDot,
      styles.offlineChipText,
      theme.secondaryContainer,
      theme.kenyaGreenLight,
      theme.onSecondaryContainer,
    ]
  );

  const blogTags = useMemo(() => {
    const primary = new Set<string>();
    STATIC_BLOG_POSTS.forEach((p) => {
      const cat = (p as any).category || p.tags?.[0];
      if (cat) primary.add(cat);
    });
    return ["All", ...Array.from(primary).slice(0, 10)];
  }, []);

  const sortedPosts = useMemo(() => {
    const list =
      selectedBlogTag === "All"
        ? STATIC_BLOG_POSTS
        : STATIC_BLOG_POSTS.filter(
            (p) =>
              (p as any).category === selectedBlogTag ||
              p.tags?.includes(selectedBlogTag)
          );
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
        rightAction={offlineRightAction}
      />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          extraScrollPadPx > 0 ? { paddingHorizontal: extraScrollPadPx } : null,
          {
            paddingBottom:
              Math.round(32 * (themeMetrics?.spacingScale ?? 1)) +
              floatClearance +
              (floatClearance > 0 ? Math.max(insets.bottom, 16) : insets.bottom),
          },
        ]}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig.verticalScrollbarStyle === "always-visible"}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. Native Android Header with Single Clean Greeting */}
        <View style={styles.greetingContainer}>
          {showHomeGreeting && (
            <View style={styles.greetingTopRow}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.greetingSub, { color: theme.gold }]}>
                  KENYA SUPER-APP · PUBLIC UTILITIES
                </Text>
                <Text style={[styles.greetingTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
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
                <ThemedIcon name="bookmark" size={14} color={theme.gold} scaleWithTheme={false} />
                <Text style={[styles.savedCountText, { color: theme.textPrimary }]}>
                  {pinnedTools.length} Saved
                </Text>
              </Pressable>
            </View>
          )}

          {/* 2. Instant In-Place Android Search Bar (Stable key across theme switches - UX-5) */}
          <View
            style={[
              styles.searchInputBar,
              themedInputStyle,
              searchQuery.length > 0 ? { borderColor: theme.gold } : null,
            ]}
          >
            <ThemedIcon name="search" size={18} color={theme.gold} scaleWithTheme={false} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              accessibilityLabel="Search Kenyan calculators, language courses, and Matatu routes"
              placeholder={t("home.searchPlaceholder")}
              placeholderTextColor={theme.textSecondary}
              numberOfLines={1}
              multiline={false}
              style={[styles.searchInputText, { color: theme.textPrimary }]}
              returnKeyType="search"
            />
            {searchQuery.length > 0 ? (
              <Pressable
                onPress={handleClearSearch}
                accessibilityRole="button"
                accessibilityLabel="Clear search query"
                hitSlop={10}
              >
                <ThemedIcon name="close-circle" size={19} color={theme.textMuted} scaleWithTheme={false} />
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
                themedCardStyle,
                isFrameless && {
                  paddingHorizontal: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={styles.instantResultsHeader}>
                <Text style={[styles.instantResultsLabel, { color: theme.gold }]}>
                  INSTANT MATCHES (
                  {inlineSearchResults.length +
                    matchingCourses.length +
                    matchingMatatuRoutes.length +
                    (matchesMatatuSearch ? 1 : 0)}
                  )
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
                  <ThemedIconBadge
                    name="bus"
                    accentColor="#0EA5E9"
                    baseSize={36}
                    iconSize={18}
                  />
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
                  {showTrailingArrows && (
                    <ThemedIcon
                      name="chevron-forward"
                      size={16}
                      color={theme.textMuted}
                      scaleWithTheme={false}
                    />
                  )}
                </Pressable>
              )}

              {inlineSearchResults.length > 0 ? (
                inlineSearchResults.map((item, idx) => {
                  const col = categoryColorMap[item.category] || theme.gold;
                  const pinned = pinnedSet.has(item.slug);
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
                      <ThemedIconBadge
                        name={resolveToolIoniconName(item.icon)}
                        accentColor={col}
                        baseSize={36}
                        iconSize={18}
                      />
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
                        <ThemedIcon
                          name={pinned ? "bookmark" : "bookmark-outline"}
                          size={16}
                          color={pinned ? theme.gold : theme.textMuted}
                          pack={pinned ? "filled" : undefined}
                          scaleWithTheme={false}
                        />
                      </Pressable>
                      {showTrailingArrows && (
                        <ThemedIcon
                          name="chevron-forward"
                          size={16}
                          color={theme.textMuted}
                          scaleWithTheme={false}
                        />
                      )}
                    </Pressable>
                  );
                })
              ) : null}

              {matchingCourses.map(({ config, skillCount, wordsCount }) => (
                <Pressable
                  key={`course-${config.id}`}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    setSearchQuery("");
                    router.push({
                      pathname: "/tools/[slug]",
                      params: { slug: "learn", lang: config.id },
                    });
                  }}
                  style={pressableStyle([
                    styles.instantResultRow,
                    {
                      borderTopWidth: 1,
                      borderTopColor: theme.outlineVariant,
                    },
                  ])}
                >
                  <ThemedIconBadge
                    name="school"
                    accentColor={config.color || theme.gold}
                    baseSize={36}
                    iconSize={18}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.instantResultTitle,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      Learn {config.name}
                      {config.nativeName &&
                      config.nativeName.toLowerCase() !==
                        config.name.toLowerCase()
                        ? ` (${config.nativeName})`
                        : ""}
                    </Text>
                    <Text
                      style={[
                        styles.instantResultSub,
                        { color: theme.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      {config.family} · {skillCount} modules · {wordsCount} words
                    </Text>
                  </View>
                  {showTrailingArrows && (
                    <ThemedIcon
                      name="chevron-forward"
                      size={16}
                      color={theme.textMuted}
                      scaleWithTheme={false}
                    />
                  )}
                </Pressable>
              ))}

              {matchingMatatuRoutes.map((route: any) => (
                <Pressable
                  key={`route-${route.slug}`}
                  android_ripple={androidRipple(theme.rippleColor)}
                  onPress={() => {
                    setSearchQuery("");
                    router.push({
                      pathname: "/matatu/[slug]",
                      params: { slug: route.slug },
                    });
                  }}
                  style={pressableStyle([
                    styles.instantResultRow,
                    {
                      borderTopWidth: 1,
                      borderTopColor: theme.outlineVariant,
                    },
                  ])}
                >
                  <ThemedIconBadge
                    name="navigate"
                    accentColor="#0EA5E9"
                    baseSize={36}
                    iconSize={18}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.instantResultTitle,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      Route {route.routeNumber}: {route.name}
                    </Text>
                    <Text
                      style={[
                        styles.instantResultSub,
                        { color: theme.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      {route.terminusA} ↔ {route.terminusB} · KES {route.fareMin}–{route.fareMax}
                    </Text>
                  </View>
                  {showTrailingArrows && (
                    <ThemedIcon
                      name="chevron-forward"
                      size={16}
                      color={theme.textMuted}
                      scaleWithTheme={false}
                    />
                  )}
                </Pressable>
              ))}

              {inlineSearchResults.length === 0 &&
                matchingCourses.length === 0 &&
                matchingMatatuRoutes.length === 0 &&
                !matchesMatatuSearch && (
                  <View style={{ paddingVertical: 14, alignItems: "center" }}>
                    <Text style={{ fontSize: 12.5, color: theme.textSecondary }}>
                      No tool, course, or route found matching &ldquo;{searchQuery}&rdquo;
                    </Text>
                  </View>
                )}
            </View>
          )}
        </View>

        {/* 3. Native Super-App Quick Launcher */}
        <View style={[styles.launcherSection, { paddingHorizontal: screenPadPx }]}>
          <View
            style={[
              styles.launcherGrid,
              homeLayout === "bento-grid" || homeLayout === "large-tiles" || homeLayout === "editorial-cards"
                ? { justifyContent: "space-between", rowGap: 8 }
                : null,
              homeLayout === "compact-list" || homeLayout === "minimal-rows"
                ? { flexDirection: "column", rowGap: homeLayout === "minimal-rows" ? 0 : 6 }
                : null,
            ]}
          >
            <SuperAppLauncherTiles
              items={dynamicLauncherItems}
              router={router}
              theme={theme}
              customStyles={styles}
              themeConfig={themeConfig}
              themeMetrics={themeMetrics}
            />
          </View>
        </View>

        {/* 4. Live Kenyan Snapshot Horizontal Widgets (Swipe-snapped + Page Dots - MOB-4, UX-6) */}
        {showDailyWidgets && (
          <DailyWidgetsCarousel
            isHomeFocused={isHomeFocused}
            theme={theme}
            themeConfig={themeConfig}
            styles={styles}
            themedCardStyle={themedCardStyle}
            isFrameless={isFrameless}
            headingTransform={headingTransform}
            showTrailingArrows={showTrailingArrows}
            learnStats={learnStats}
            matatuSummary={matatuSummary}
            nextHoliday={nextHoliday}
            onOpenMatatu={handleOpenMatatu}
            onOpenHolidays={handleOpenHolidays}
          />
        )}

        {/* 5. Pinned / Saved Quick Access Strip */}
        {pinnedTools.length > 0 && (
          <>
            <View style={[styles.sectionHeader, { marginTop: 18 }]}>
              <View>
                <Text style={[styles.sectionOverline, { color: theme.gold }]}>
                  {t("home.pinnedByYou")}
                </Text>
                <Text
                  style={[styles.sectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}
                >
                  {t("home.savedShortcuts")} ({pinnedTools.length})
                </Text>
              </View>
              <Pressable
                android_ripple={androidRipple(theme.rippleColor, true)}
                onPress={() => router.push("/(tabs)/saved")}
                style={pressableStyle(styles.seeAllBtn)}
              >
                <Text style={[styles.seeAllText, { color: theme.gold }]}>
                  {t("home.manage")}
                </Text>
                {showTrailingArrows && (
                  <ThemedIcon name="arrow-forward" size={14} color={theme.gold} scaleWithTheme={false} />
                )}
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"}
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
                      themedCardStyle,
                      isFrameless && {
                        paddingHorizontal: 4,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: theme.outlineVariant,
                      },
                    ])}
                  >
                    <ThemedIconBadge
                      name={resolveToolIoniconName(t.icon)}
                      accentColor={col}
                      baseSize={28}
                      iconSize={15}
                    />
                    <Text
                      style={[
                        styles.pinnedMiniTitle,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      {translateToolShortTitle(t.slug, t.shortTitle || t.title, language)}
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
              {t("home.mostUsed")}
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
              {t("home.popularKenyanTools")}
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
              {t("home.allCountPrefix")} {TOOLS.length}
            </Text>
            {showTrailingArrows && (
              <ThemedIcon name="arrow-forward" size={14} color={theme.gold} scaleWithTheme={false} />
            )}
          </Pressable>
        </View>

        <View
          style={[
            styles.popularToolsList,
            homeLayout === "bento-grid" || homeLayout === "large-tiles"
              ? { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", rowGap: 10 }
              : null,
            homeLayout === "minimal-rows" ? { gap: 0 } : null,
            homeLayout === "editorial-cards" ? { gap: 12 } : null,
          ]}
        >
          {popular.map((t) => (
            <PopularToolRow
              key={t.slug}
              tool={t}
              isPinned={pinnedSet.has(t.slug)}
              onTogglePin={togglePinTool}
              homeLayout={homeLayout}
              sharedStyles={styles}
              themedCardStyle={themedCardStyle}
            />
          ))}
        </View>

        {/* 7. Topic Categories (Themed with homeLayout, surfaceStyle, icon/desc toggles & Swahili) */}
        <View style={[styles.sectionHeader, { marginTop: 22 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              {t("home.browseByTopic")}
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
              {t("home.toolCategories")} ({TOOL_CATEGORIES.length})
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.categoriesFullList,
            (isFrameless || homeLayout === "minimal-rows") && { gap: 0 },
            (homeLayout === "bento-grid" || homeLayout === "large-tiles") && {
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              rowGap: 10,
            },
            homeLayout === "editorial-cards" && { gap: 12 },
          ]}
        >
          {TOOL_CATEGORIES.map((cat) => {
            const count = CATEGORY_TOOL_COUNTS[cat.id] || 0;
            const catColor = categoryColorMap[cat.id] || theme.gold;
            const isGridTile = homeLayout === "bento-grid" || homeLayout === "large-tiles";
            const isMinimalRow = isFrameless || homeLayout === "minimal-rows";

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
                  isMinimalRow
                    ? {
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        paddingHorizontal: 2,
                        paddingVertical: 12,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: theme.outlineVariant,
                      }
                    : themedCardStyle,
                  isGridTile && {
                    width: "48.5%",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 8,
                    padding: 12,
                  },
                ])}
              >
                {themeConfig.showCardIcons !== false && themeConfig.iconBadgeStyle !== "hidden" && (
                  <ThemedIconBadge
                    name={resolveToolIoniconName(cat.icon)}
                    accentColor={catColor}
                    baseSize={isGridTile ? 34 : 38}
                    iconSize={isGridTile ? 17 : 19}
                  />
                )}
                <View style={{ flex: 1, minWidth: 0, width: isGridTile ? "100%" : undefined }}>
                  <View style={styles.catHeaderLine}>
                    <Text
                      style={[styles.catTitle, { color: theme.textPrimary, fontFamily: resolvedFonts.heading }]}
                      numberOfLines={isGridTile ? 2 : undefined}
                    >
                      {translateCategoryName(cat.id, cat.name, language)}
                    </Text>
                    {themeConfig.showCategoryBadges !== false && (
                      <View
                        style={[
                          styles.catCountBadge,
                          {
                            backgroundColor: `${catColor}18`,
                            borderRadius: Math.min(999, themeMetrics.buttonRadiusPx),
                          },
                        ]}
                      >
                        <Text style={[styles.catCountSub, { color: catColor, fontFamily: resolvedFonts.bold }]}>
                          {count} {count === 1 ? t("home.toolSingular") : t("home.toolPlural")}
                        </Text>
                      </View>
                    )}
                  </View>
                  {themeConfig.showCardDescriptions !== false && (
                    <Text
                      style={[styles.catDescText, { color: theme.textSecondary, fontFamily: resolvedFonts.body }]}
                      numberOfLines={isGridTile ? 2 : undefined}
                    >
                      {translateCategoryDescription(cat.id, cat.description, language)}
                    </Text>
                  )}
                </View>
                {showTrailingArrows && !isGridTile && (
                  <ThemedIcon
                    name="chevron-forward"
                    size={16}
                    color={theme.textMuted}
                    scaleWithTheme={false}
                  />
                )}
              </Pressable>
            );
          })}
        </View>

        {/* 8. Horizontal Editorial Guides Carousel */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <View>
            <Text style={[styles.sectionOverline, { color: theme.gold }]}>
              {t("home.guidesOverline")}
            </Text>
            <Text style={[styles.sectionTitle, { color: theme.textPrimary, textTransform: headingTransform }]}>
              {t("home.practicalExplainers")} ({sortedPosts.length})
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
          showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"}
          contentContainerStyle={styles.guidesCarouselContent}
          bounces={true}
          alwaysBounceHorizontal={true}
          overScrollMode="always"
        >
          {sortedPosts.map((post) => (
            <Pressable
              key={post.slug}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() => setSelectedPost(post)}
              style={pressableStyle([
                styles.guideCarouselCard,
                themedCardStyle,
                isFrameless && {
                  paddingHorizontal: 4,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.outlineVariant,
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
                {showTrailingArrows && (
                  <ThemedIcon name="arrow-forward" size={13} color={theme.gold} scaleWithTheme={false} />
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Kenyan Statutory Public Holidays Modal */}
      {showHolidaysModal && (
        <Modal
          visible={true}
          animationType="slide"
          accessibilityViewIsModal={true}
          onRequestClose={handleCloseHolidays}
        >
          <SafeAreaView
            style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
            edges={["top", "left", "right", "bottom"]}
          >
            <KenyaStripe />
            <AndroidTopAppBar
              title={t("home.publicHolidays")}
              subtitle={t("home.publicHolidaysSub")}
              onBack={handleCloseHolidays}
            />
            <ScrollView
              contentContainerStyle={{ padding: 16, paddingBottom: 48, gap: 10 }}
              showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
              persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
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
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Outfit_700Bold",
                        fontSize: 15,
                        color: theme.textPrimary,
                        flexShrink: 1,
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
                      {h.formattedDate}
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
      )}

      {/* Full-Screen Blog Guide Reader Modal with Reading Progress Bar & Tappable Links (MOB-10, UX-2, UX-13) */}
      {selectedPost && (
        <HomeBlogReaderModal
          post={selectedPost}
          theme={theme}
          themeConfig={themeConfig}
          styles={styles}
          onClose={handleClosePost}
          onNavigateLink={handleBlogLinkNavigation}
        />
      )}
    </SafeAreaView>
  );
}
