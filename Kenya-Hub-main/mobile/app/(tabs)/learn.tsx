import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, KenyaStripe, AndroidTopAppBar } from "../../src/theme";
import { LanguageLearningTool } from "../../src/tools/LanguageCourseTool";

export default function LearnTabScreen() {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.bgPrimary }]}
      edges={["top", "left", "right"]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title="Learn Kenyan Languages"
        subtitle="22 LANGUAGES · COURSES · PROVERBS"
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <LanguageLearningTool />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 14, paddingBottom: 40 },
});
