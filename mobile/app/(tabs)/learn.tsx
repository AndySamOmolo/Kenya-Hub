import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
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
import {
  LanguageLearningTool,
  type CourseNavigationState,
} from "../../src/tools/LanguageCourseTool";

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
  });
}

export default function LearnTabScreen() {
  const { theme, themeConfig, themeMetrics, resolvedFonts } = useTheme();
  const styles = useMemo(
    () => createLearnStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const screenPadPx = (themeMetrics as any)?.screenPaddingPx ?? Math.round(12 * (themeMetrics?.spacingScale ?? 1));
  const floatClearance = themeMetrics?.floatingTabBarClearancePx ?? 0;
  const headingTransform = themeConfig.headingTransform || "none";
  const goldInk = getContrastInk(theme.gold);
  const params = useLocalSearchParams<{ lang?: string; tab?: string }>();
  const insets = useSafeAreaInsets();
  const bottomClearance =
    Math.round(92 * (themeMetrics?.spacingScale ?? 1)) +
    floatClearance +
    insets.bottom;
  const scrollRef = useRef<ScrollView>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const showBackToTopRef = useRef(false);
  const [navState, setNavState] = useState<CourseNavigationState>({
    inCourse: false,
    courseName: "Kenyan Languages",
    backToMenu: () => {},
  });

  const handleScrollToTop = useCallback(() => {
    triggerHaptic(8);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const handleLearnScroll = useCallback((e: any) => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 700 && !showBackToTopRef.current) {
      showBackToTopRef.current = true;
      setShowBackToTop(true);
    } else if (y <= 700 && showBackToTopRef.current) {
      showBackToTopRef.current = false;
      setShowBackToTop(false);
    }
  }, []);

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title={navState.inCourse ? navState.courseName : "Learn Hub"}
        subtitle={
          navState.inCourse
            ? "Tap back for all courses"
            : "Kenyan Languages & Proverbs"
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
        persistentScrollbar={themeConfig.verticalScrollbarStyle === "always-visible"}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={64}
        onScroll={handleLearnScroll}
      >
        <LanguageLearningTool
          initialLanguageId={typeof params.lang === "string" ? params.lang : undefined}
          initialTab={typeof params.tab === "string" ? (params.tab as any) : undefined}
          onScrollToTop={handleScrollToTop}
          onNavigationStateChange={setNavState}
        />
      </ScrollView>

      {showBackToTop && (
        <Pressable
          onPress={handleScrollToTop}
          accessibilityRole="button"
          accessibilityLabel="Scroll back to top"
          android_ripple={androidRipple(theme.rippleColor)}
          style={pressableStyle([
            styles.fabTopBtn,
            {
              backgroundColor: theme.gold,
              borderColor: goldInk,
              bottom: 18 + floatClearance + insets.bottom,
            },
          ])}
        >
          <ThemedIcon name="arrow-up" size={16} color={goldInk} />
          <Text style={[styles.fabTopText, { color: goldInk, textTransform: headingTransform }]}>
            Top
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}
