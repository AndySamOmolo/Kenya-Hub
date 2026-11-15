import React, { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
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
  const { theme } = useTheme();
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
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
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
          if (y > 420 && !showBackToTop) setShowBackToTop(true);
          else if (y <= 420 && showBackToTop) setShowBackToTop(false);
        }}
      >
        <LanguageLearningTool
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
  content: { padding: 14, paddingBottom: 40 },
  fabTopBtn: {
    position: "absolute",
    bottom: 18,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  fabTopText: {
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 12,
  },
});
