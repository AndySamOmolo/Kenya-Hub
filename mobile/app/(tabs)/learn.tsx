import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe, AndroidTopAppBar } from "../../src/theme";
import { LanguageLearningTool } from "../../src/tools/LanguageCourseTool";

export default function LearnTabScreen() {
  const { theme } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title="Learn Kenyan Languages"
        subtitle="23 LANGUAGES · COURSES · PROVERBS"
      />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <LanguageLearningTool onScrollToTop={handleScrollToTop} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 14, paddingBottom: 40 },
});
