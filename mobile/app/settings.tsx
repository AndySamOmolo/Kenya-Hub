import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AndroidTopAppBar, KenyaStripe, triggerHaptic, useTheme } from "../src/theme";
import { ThemeSettingsView } from "../src/components/ThemeSettingsView";
import { ThemedIcon } from "../src/components/ThemedIcon";
import { useAppLanguage } from "../src/lib/i18n";
import { getContrastInk } from "../src/lib/theme-engine";

export default function SettingsScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { language, setLanguage, t } = useAppLanguage();

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={[styles.container, { backgroundColor: theme.bgPrimary }]}
    >
      <KenyaStripe />
      <AndroidTopAppBar
        title={t("settings.title")}
        subtitle={t("settings.subtitle")}
        onBack={() => (router.canGoBack() ? router.back() : router.replace("/(tabs)"))}
        showThemeToggle={false}
      />
      <View
        style={[
          styles.langBanner,
          {
            backgroundColor: theme.surfaceContainer,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
          <ThemedIcon name="language-outline" size={18} color={theme.gold} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: theme.textPrimary, fontSize: 13, fontWeight: "700" }}>
              {t("lang.title")}
            </Text>
            <Text style={{ color: theme.textSecondary, fontSize: 11 }} numberOfLines={1}>
              {t("lang.subtitle")}
            </Text>
          </View>
        </View>
        <View style={styles.langPills}>
          {(["en", "sw"] as const).map((lang) => {
            const active = language === lang;
            return (
              <Pressable
                key={lang}
                onPress={() => {
                  triggerHaptic(6);
                  setLanguage(lang);
                }}
                style={[
                  styles.langPill,
                  {
                    backgroundColor: active ? theme.gold : theme.bgElevated,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  },
                ]}
              >
                <Text
                  style={{
                    color: active ? getContrastInk(theme.gold) : theme.textSecondary,
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                >
                  {lang === "en" ? "English" : "Kiswahili"}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <ThemeSettingsView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  langBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 10,
  },
  langPills: {
    flexDirection: "row",
    gap: 6,
  },
  langPill: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
});
