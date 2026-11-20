import React, { useRef, useState } from "react";
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
import {
  LanguageLearningTool,
  type CourseNavigationState,
} from "../../src/tools/LanguageCourseTool";

export default function LearnTabScreen() {
  const { theme, isDark } = useTheme();
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
      key={isDark ? "dark" : "light"}
      style={[styles.screen, { backgroundColor: theme.bgPrimary, paddingTop: insets.top === 0 ? safeTop : 0 }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title={
          navState.inCourse
            ? `Learn ${navState.courseName}`
            : "Learn Kenyan Languages"
        }
        subtitle={
          navState.inCourse
            ? "TAP BACK FOR ALL 23 LANGUAGES"
            : "23 LANGUAGES · COURSES · PROVERBS"
        }
        onBack={navState.inCourse ? navState.backToMenu : undefined}
      />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 14, paddingBottom: 96 },
  fabTopBtn: {
    position: "absolute",
    bottom: 18,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  fabTopText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 12,
  },
});
