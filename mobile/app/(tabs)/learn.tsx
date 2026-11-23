import React, { useMemo, useRef, useState } from "react";
import { Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  androidRipple,
  pressableStyle,
  triggerHaptic,
} from "../../src/theme";
import type { ThemeMetrics } from "../../src/lib/theme-engine";
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
  const { theme, isDark, themeConfig, themeMetrics, resolvedFonts, themeKey } = useTheme();
  const styles = useMemo(
    () => createLearnStyles(themeMetrics, resolvedFonts),
    [themeMetrics, resolvedFonts]
  );
  const params = useLocalSearchParams<{ lang?: string; tab?: string }>();
  const insets = useSafeAreaInsets();
  const safeTop = Math.max(insets.top, Platform.OS === "android" ? StatusBar.currentHeight ?? 24 : 0);
  const scrollRef = useRef<ScrollView>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [navState, setNavState] = useState<CourseNavigationState>({
    inCourse: false,
    courseName: "Kenyan Languages",
    backToMenu: () => {},
  });

  const handleScrollToTop = () => {
    triggerHaptic(8);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView
      key={themeKey}
      style={[styles.screen, { backgroundColor: theme.bgPrimary, paddingTop: insets.top === 0 ? safeTop : 0 }]}
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
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        persistentScrollbar={themeConfig?.verticalScrollbarStyle === "always-visible"}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          if (y > 700 && !showBackToTop) setShowBackToTop(true);
          else if (y <= 700 && showBackToTop) setShowBackToTop(false);
        }}
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
              borderColor: theme.kenyaBlack,
            },
          ])}
        >
          <Ionicons name="arrow-up" size={16} color={theme.kenyaBlack} />
          <Text style={[styles.fabTopText, { color: theme.kenyaBlack }]}>
            Top
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}
