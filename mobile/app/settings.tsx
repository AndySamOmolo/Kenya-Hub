import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AndroidTopAppBar, KenyaStripe, useTheme } from "../src/theme";
import { ThemeSettingsView } from "../src/components/ThemeSettingsView";

export default function SettingsScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title="Settings & Theming"
        subtitle="Customize appearance, colors & layout"
        onBack={() => router.back()}
        showThemeToggle={false}
      />
      <ThemeSettingsView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
