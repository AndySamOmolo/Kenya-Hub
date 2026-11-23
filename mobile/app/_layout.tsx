import React, { useEffect } from "react";
import { Stack, ErrorBoundaryProps, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Appearance, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from "@expo-google-fonts/outfit";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  ThemeProvider,
  useTheme,
  darkColors,
  lightColors,
  androidRipple,
  pressableStyle,
} from "../src/theme";
import { VerifiedAudioPlayer } from "../src/components/VerifiedAudioPlayer";
import { initializeMobileAdsWithConsent } from "../src/lib/mobile-ads";

function LayoutContent({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { theme, isDark, themeReady, themeConfig } = useTheme();

  if (!fontsLoaded || !themeReady) {
    return (
      <View
        style={[styles.splashFallback, { backgroundColor: theme.bgPrimary }]}
      />
    );
  }

  return (
    <>
      <StatusBar
        style={themeConfig.statusBarMode === "light" ? "light" : themeConfig.statusBarMode === "dark" ? "dark" : isDark ? "light" : "dark"}
        translucent
        backgroundColor="transparent"
      />
      <VerifiedAudioPlayer />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.bgPrimary },
          animation:
            themeConfig.pageTransition === "fade" ? "fade" :
            themeConfig.pageTransition === "bottom-sheet" ? "slide_from_bottom" :
            themeConfig.pageTransition === "none" ? "none" :
            themeConfig.pageTransition === "default" ? "default" : "slide_from_right",
          animationDuration: themeConfig.pageTransition === "fast" ? 80 : 160,
          freezeOnBlur: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
      />
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LayoutContent fontsLoaded={fontsLoaded || Boolean(fontError)} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const router = useRouter();
  const scheme = Appearance.getColorScheme();
  const colors = scheme === "light" ? lightColors : darkColors;
  const displayMessage =
    __DEV__ && error?.message
      ? error.message
      : "We ran into an unexpected issue loading this screen. Tap Try again to recover.";

  return (
    <View style={[styles.container, { backgroundColor: colors.bgPrimary }]}>
      <Ionicons
        name="warning-outline"
        size={48}
        color={colors.gold}
        style={{ marginBottom: 16 }}
      />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Something went wrong
      </Text>
      <Text style={[styles.message, { color: colors.textSecondary }]}>
        {displayMessage}
      </Text>
      <View style={styles.actionsRow}>
        <Pressable
          onPress={retry}
          accessibilityRole="button"
          accessibilityLabel="Try loading screen again"
          android_ripple={androidRipple()}
          style={pressableStyle([
            styles.retryButton,
            { backgroundColor: colors.gold },
          ])}
        >
          <Ionicons name="refresh" size={16} color={colors.kenyaBlack} />
          <Text style={[styles.retryText, { color: colors.kenyaBlack }]}>
            Try again
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            try {
              router.replace("/");
            } catch {
              retry();
            }
          }}
          accessibilityRole="button"
          accessibilityLabel="Return to KenyaHub Home screen"
          android_ripple={androidRipple()}
          style={pressableStyle([
            styles.homeButton,
            {
              backgroundColor: colors.surfaceContainerHigh,
              borderColor: colors.outlineVariant,
            },
          ])}
        >
          <Ionicons name="home-outline" size={16} color={colors.textPrimary} />
          <Text style={[styles.homeButtonText, { color: colors.textPrimary }]}>
            Go Home
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashFallback: {
    flex: 1,
    backgroundColor: darkColors.bgPrimary,
  },
  container: {
    flex: 1,
    backgroundColor: darkColors.bgPrimary,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: darkColors.textPrimary,
    fontFamily: "Outfit_800ExtraBold",
    fontSize: 22,
    textAlign: "center",
  },
  message: {
    color: darkColors.textSecondary,
    fontFamily: "Inter_400Regular",
    marginTop: 12,
    lineHeight: 21,
    textAlign: "center",
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 24,
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: darkColors.gold,
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  retryText: {
    color: darkColors.kenyaBlack,
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: darkColors.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: darkColors.outlineVariant,
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  homeButtonText: {
    color: darkColors.textPrimary,
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
  },
});
