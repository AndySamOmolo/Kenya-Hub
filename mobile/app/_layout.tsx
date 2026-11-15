import React from "react";
import { Stack, ErrorBoundaryProps, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
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
  androidRipple,
  pressableStyle,
} from "../src/theme";

function LayoutContent({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { theme, isDark, themeReady } = useTheme();

  if (!fontsLoaded || !themeReady) {
    return <View style={styles.splashFallback} />;
  }

  return (
    <>
      <StatusBar
        style={isDark ? "light" : "dark"}
        translucent
        backgroundColor="transparent"
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.bgPrimary },
          animation: "slide_from_right",
          animationDuration: 200,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
      />
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
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
        <LayoutContent fontsLoaded={fontsLoaded} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons
        name="warning-outline"
        size={48}
        color="#F59E0B"
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>
        {error?.message || "An unexpected error occurred while rendering this screen."}
      </Text>
      <View style={styles.actionsRow}>
        <Pressable
          onPress={retry}
          accessibilityRole="button"
          accessibilityLabel="Try loading screen again"
          android_ripple={androidRipple()}
          style={pressableStyle(styles.retryButton)}
        >
          <Ionicons name="refresh" size={16} color={darkColors.kenyaBlack} />
          <Text style={styles.retryText}>Try again</Text>
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
          style={pressableStyle(styles.homeButton)}
        >
          <Ionicons name="home-outline" size={16} color={darkColors.textPrimary} />
          <Text style={styles.homeButtonText}>Go Home</Text>
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
