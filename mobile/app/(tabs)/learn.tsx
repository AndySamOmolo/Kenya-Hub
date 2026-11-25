import { useAppLanguage } from "../../src/lib/i18n";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { InteractionManager, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../../src/theme";
import { getContrastInk, type ThemeMetrics } from "../../src/lib/theme-engine";
import { ThemedIcon } from "../../src/components/ThemedIcon";
import type { CourseNavigationState } from "../../src/tools/LanguageCourseTool";

type LanguageLearningToolComponent = React.ComponentType<{
  onScrollToTop?: () => void;
  initialLanguageId?: string;
  initialTab?: any;
  onNavigationStateChange?: (state: CourseNavigationState) => void;
}>;

let _cachedLanguageLearningTool: LanguageLearningToolComponent | null = null;
function getLanguageLearningTool(): LanguageLearningToolComponent {
  if (!_cachedLanguageLearningTool) {
    _cachedLanguageLearningTool = require("../../src/tools/LanguageCourseTool").LanguageLearningTool;
  }
  return _cachedLanguageLearningTool!;
}

interface BackToTopHandle {
  setVisible: (next: boolean) => void;
}

const LearnBackToTopFab = React.memo(
  forwardRef<
    BackToTopHandle,
    {
      onPress: () => void;
      bottom: number;
      backgroundColor: string;
      borderColor: string;
      rippleColor: string;
      textColor: string;
      headingTransform: any;
      fabStyle: any;
      fabTextStyle: any;
    }
  >(function LearnBackToTopFab(
    {
      onPress,
      bottom,
      backgroundColor,
      borderColor,
      rippleColor,
      textColor,
      headingTransform,
      fabStyle,
      fabTextStyle,
    },
    ref
  ) {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        setVisible: (next: boolean) => {
          setVisible((prev) => (prev === next ? prev : next));
        },
      }),
      []
    );

    if (!visible) return null;

    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel="Scroll back to top"
        android_ripple={androidRipple(rippleColor)}
        style={pressableStyle([
          fabStyle,
          {
            backgroundColor,
            borderColor,
            bottom,
          },
        ])}
      >
        <ThemedIcon name="arrow-up" size={16} color={textColor} />
        <Text style={[fabTextStyle, { color: textColor, textTransform: headingTransform }]}>
          Top
        </Text>
      </Pressable>
    );
  })
);

function createLearnStyles(
  metrics?: ThemeMetrics,
  fonts?: { heading: string; body: string; bold: string }
) {
  const bw = metrics?.borderWidthPx ?? 1;
  const spacingScale = metrics?.spacingScale ?? 1;
  const sp = (v: number) => Number((v * spacingScale).toFixed(1));
  const fontScale = metrics?.fontScale ?? 1;
  const fs = (v: number) => Number((v * fontScale).toFixed(1));
  const isDefaultFonts =
    !fonts ||
    (fonts.heading === "Outfit_700Bold" &&
      fonts.body === "Inter_400Regular" &&
      fonts.bold === "Inter_700Bold");
  const hf = (fallback = "Outfit_700Bold") =>
    isDefaultFonts ? fallback : fonts.heading;

  return StyleSheet.create({
    screen: { flex: 1 },
    content: {
      paddingHorizontal: sp(12),
      paddingTop: sp(8),
      paddingBottom: sp(92),
    },
    fabTopBtn: {
      position: "absolute",
      bottom: 18,
      right: 16,
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(14),
      paddingVertical: sp(10),
      borderRadius: 999,
      borderWidth: bw,
      elevation: 6,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
    },
    fabTopText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(12),
    },
    skeletonWrap: {
      gap: sp(12),
      paddingTop: sp(4),
    },
    skeletonHero: {
      borderRadius: 16,
      borderWidth: bw,
      padding: sp(16),
      gap: sp(10),
    },
    skeletonPillRow: {
      flexDirection: "row",
      gap: sp(8),
    },
    skeletonPill: {
      height: 32,
      width: 78,
      borderRadius: 999,
      borderWidth: bw,
    },
    skeletonCard: {
      borderRadius: 14,
      borderWidth: bw,
      padding: sp(14),
      gap: sp(8),
    },
    skeletonLineLg: {
      height: 18,
      width: "62%",
      borderRadius: 8,
    },
    skeletonLineMd: {
      height: 14,
      width: "48%",
      borderRadius: 6,
    },
    skeletonLineFull: {
      height: 12,
      width: "92%",
      borderRadius: 6,
    },
    skeletonLineSm: {
      height: 12,
      width: "38%",
      borderRadius: 6,
    },
  });
}

export default function LearnTabScreen() {
  const { theme, themeConfig, themeMetrics, resolvedFonts } = useTheme();
  const { t } = useAppLanguage();
  const styles = useMemo(
    () => createLearnStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(12 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const headingTransform = themeConfig?.headingTransform || "none";
  const goldInk = getContrastInk(theme.gold);
  const params = useLocalSearchParams<{ lang?: string; tab?: string }>();
  const insets = useSafeAreaInsets();
  const bottomClearance =
    Math.round(92 * (themeMetrics?.spacingScale ?? 1)) +
    floatClearance +
    insets.bottom;
  const scrollRef = useRef<ScrollView>(null);
  const fabRef = useRef<BackToTopHandle>(null);
  const [contentReady, setContentReady] = useState(false);
  const [themeVersion, setThemeVersion] = useState(0);
  const showBackToTopRef = useRef(false);
  const [navState, setNavState] = useState<CourseNavigationState>({
    inCourse: false,
    courseName: "Kenyan Languages",
    backToMenu: () => {},
  });

  useEffect(() => {
    let cancelled = false;
    let rafId: number | null = null;
    const task = InteractionManager.runAfterInteractions(() => {
      rafId = requestAnimationFrame(() => {
        if (!cancelled) {
          setContentReady(true);
        }
      });
    });
    return () => {
      cancelled = true;
      task.cancel();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Bump themeVersion when theme config changes to force re-mount of deferred tool
  useEffect(() => {
    setThemeVersion((v) => v + 1);
  }, [themeConfig]);

  const DeferredLanguageLearningTool = useMemo(
    () => (contentReady ? getLanguageLearningTool() : null),
    [contentReady, themeVersion]
  );

  const handleScrollToTop = useCallback(() => {
    triggerHaptic(8);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const handleLearnScroll = useCallback((e: any) => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 700 && !showBackToTopRef.current) {
      showBackToTopRef.current = true;
      fabRef.current?.setVisible(true);
    } else if (y <= 700 && showBackToTopRef.current) {
      showBackToTopRef.current = false;
      fabRef.current?.setVisible(false);
    }
  }, []);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title={navState.inCourse ? navState.courseName : t("learn.title")}
        subtitle={
          navState.inCourse
            ? "Tap back for all courses"
            : t("learn.barSubtitle")
        }
        onBack={navState.inCourse ? navState.backToMenu : undefined}
      />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: screenPadPx, paddingBottom: bottomClearance },
        ]}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={64}
        onScroll={handleLearnScroll}
      >
        {DeferredLanguageLearningTool ? (
          <DeferredLanguageLearningTool
            initialLanguageId={typeof params.lang === "string" ? params.lang : undefined}
            initialTab={typeof params.tab === "string" ? (params.tab as any) : undefined}
            onScrollToTop={handleScrollToTop}
            onNavigationStateChange={setNavState}
          />
        ) : (
          <View style={styles.skeletonWrap} accessibilityLabel="Loading Learn Hub">
            <View
              style={[
                styles.skeletonHero,
                {
                  backgroundColor: theme.surfaceContainerLow,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <View style={[styles.skeletonLineLg, { backgroundColor: theme.surfaceContainerHigh }]} />
              <View style={[styles.skeletonLineSm, { backgroundColor: theme.surfaceContainerHigh }]} />
            </View>
            <View style={styles.skeletonPillRow}>
              {[0, 1, 2, 3].map((idx) => (
                <View
                  key={`sk-pill-${idx}`}
                  style={[
                    styles.skeletonPill,
                    {
                      backgroundColor: theme.surfaceContainerLow,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                />
              ))}
            </View>
            {[0, 1, 2].map((idx) => (
              <View
                key={`sk-card-${idx}`}
                style={[
                  styles.skeletonCard,
                  {
                    backgroundColor: theme.surfaceContainerLow,
                    borderColor: theme.outlineVariant,
                  },
                ]}
              >
                <View style={[styles.skeletonLineMd, { backgroundColor: theme.surfaceContainerHigh }]} />
                <View style={[styles.skeletonLineFull, { backgroundColor: theme.surfaceContainerHigh }]} />
                <View style={[styles.skeletonLineSm, { backgroundColor: theme.surfaceContainerHigh }]} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <LearnBackToTopFab
        ref={fabRef}
        onPress={handleScrollToTop}
        bottom={18 + floatClearance + insets.bottom}
        backgroundColor={theme.gold}
        borderColor={goldInk}
        rippleColor={theme.rippleColor}
        textColor={goldInk}
        headingTransform={headingTransform}
        fabStyle={styles.fabTopBtn}
        fabTextStyle={styles.fabTopText}
      />
    </SafeAreaView>
  );
}
