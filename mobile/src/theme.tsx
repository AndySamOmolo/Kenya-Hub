import React, { createContext, useContext, useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BrandLogo } from "./components/BrandLogo";

export const darkColors = {
  isDark: true,
  // Cultural Flag Colors
  kenyaBlack: "#1A1108",
  kenyaRed: "#BE2126",
  kenyaRedLight: "#E05A5A",
  kenyaGreen: "#006B3F",
  kenyaGreenLight: "#2FA463",
  kenyaWhite: "#FAF7F2",
  gold: "#C8961E",
  goldLight: "#E8BE5A",
  sky: "#1A8BD1",
  skyLight: "#5BBFEA",
  earth: "#8B4513",
  earthLight: "#B87A4B",

  // Theme Surfaces (Dark — Material 3 Surface Containers)
  bgPrimary: "#0E0C0A",
  bgSecondary: "#161310",
  bgCard: "#1E1A17",
  bgCardHover: "#27221E",
  bgElevated: "#2B2621",
  surfaceContainerLowest: "#090806",
  surfaceContainerLow: "#161310",
  surfaceContainer: "#1E1A17",
  surfaceContainerHigh: "#28231F",
  surfaceContainerHighest: "#332D28",
  primaryContainer: "rgba(200, 150, 30, 0.22)",
  onPrimaryContainer: "#F5D77F",
  secondaryContainer: "rgba(47, 164, 99, 0.18)",
  onSecondaryContainer: "#7BE0A8",
  border: "#302A24",
  borderLight: "#403830",
  borderAccent: "#52483E",
  outline: "#8C8070",
  outlineVariant: "#38312A",
  rippleColor: "rgba(232, 190, 90, 0.18)",
  textPrimary: "#F4EFEA",
  text: "#F4EFEA",
  surface: "#1E1A17",
  textSecondary: "#B0A69B",
  textMuted: "#786E63",
};

export const lightColors = {
  isDark: false,
  // Cultural Flag Colors
  kenyaBlack: "#1A1108",
  kenyaRed: "#BE2126",
  kenyaRedLight: "#D9383D",
  kenyaGreen: "#006B3F",
  kenyaGreenLight: "#1E8E4F",
  kenyaWhite: "#FFFFFF",
  gold: "#B8860B",
  goldLight: "#C8961E",
  sky: "#1570A6",
  skyLight: "#1A8BD1",
  earth: "#8B4513",
  earthLight: "#A05A2C",

  // Theme Surfaces (Light — Material 3 Warm Kenyan Tonal Palette)
  bgPrimary: "#FAF7F2",
  bgSecondary: "#F2ECE4",
  bgCard: "#FFFFFF",
  bgCardHover: "#F7F2EA",
  bgElevated: "#EFE9DF",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F6F1E9",
  surfaceContainer: "#F0EAE1",
  surfaceContainerHigh: "#EAE3D9",
  surfaceContainerHighest: "#E3DCD1",
  primaryContainer: "rgba(184, 134, 11, 0.16)",
  onPrimaryContainer: "#5C4000",
  secondaryContainer: "rgba(0, 107, 63, 0.12)",
  onSecondaryContainer: "#004D2C",
  border: "#E2DAD0",
  borderLight: "#D4CABF",
  borderAccent: "#C8BDB0",
  outline: "#7D7163",
  outlineVariant: "#DED5C9",
  rippleColor: "rgba(184, 134, 11, 0.14)",
  textPrimary: "#1A1108",
  text: "#1A1108",
  surface: "#FFFFFF",
  textSecondary: "#5C503E",
  textMuted: "#857968",
};

export type ThemeColors = typeof darkColors;

export const fonts = {
  heading: "Outfit_700Bold",
  headingSemiBold: "Outfit_600SemiBold",
  headingExtraBold: "Outfit_800ExtraBold",
  headingBlack: "Outfit_900Black",
  body: "Inter_400Regular",
  bodyMedium: "Inter_500Medium",
  bodySemiBold: "Inter_600SemiBold",
  bodyBold: "Inter_700Bold",
};

// Default export for backward compatibility
export const colors = darkColors;

export const categoryColorMap: Record<string, string> = {
  "finance-tax": "#C8961E",
  "education-cbc": "#1A8BD1",
  "utilities-energy": "#F5A623",
  "government-legal": "#BE2126",
  "transport-travel": "#2FA463",
  "health-wellness": "#E05A5A",
  "business-investment": "#B87A4B",
  "language-learning": "#C75B39",
  "data-reference": "#5BBFEA",
  "agriculture-environment": "#006B3F",
};

/**
 * Helper for native Android Material 3 ripple effect on Pressable components
 */
export function androidRipple(color?: string, borderless = false) {
  return {
    color: color || "rgba(200, 150, 30, 0.18)",
    borderless,
  };
}

interface ThemeContextType {
  theme: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: darkColors,
  isDark: true,
  toggleTheme: () => {},
  setThemeMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("kh-theme").then((saved) => {
      if (saved === "light") {
        setIsDark(false);
      } else if (saved === "dark") {
        setIsDark(true);
      }
    });
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem("kh-theme", next ? "dark" : "light");
      return next;
    });
  };

  const setThemeMode = (mode: "dark" | "light") => {
    const next = mode === "dark";
    setIsDark(next);
    AsyncStorage.setItem("kh-theme", mode);
  };

  const theme = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return { ...ctx, colors: ctx.theme };
}

export function useDynamicStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  creator: (theme: ThemeColors) => T
): { theme: ThemeColors; isDark: boolean; styles: T } {
  const { theme, isDark } = useTheme();
  const styles = React.useMemo(() => creator(theme), [theme]);
  return { theme, isDark, styles };
}

/**
 * Kenyan Flag Stripe Component
 * Subtle 3px bar: Black · White · Red · White · Green
 */
export function KenyaStripe() {
  return (
    <View style={stripeStyles.container}>
      <View style={[stripeStyles.band, { backgroundColor: "#000000", height: 1.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#BE2126", height: 1.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#006B3F", height: 1.5 }]} />
    </View>
  );
}

/**
 * Material Design 3 Top App Bar for Android
 */
export function AndroidTopAppBar({
  title,
  subtitle,
  onBack,
  showBrandLogo = false,
  rightAction,
  showThemeToggle = true,
}: {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showBrandLogo?: boolean;
  rightAction?: React.ReactNode;
  showThemeToggle?: boolean;
}) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View
      style={[
        appBarStyles.container,
        {
          backgroundColor: theme.surfaceContainerLow,
          borderBottomColor: theme.outlineVariant,
        },
      ]}
    >
      <View style={appBarStyles.leftRow}>
        {onBack && (
          <Pressable
            onPress={onBack}
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={[
              appBarStyles.iconBtn,
              { backgroundColor: theme.surfaceContainerHigh },
            ]}
            hitSlop={8}
          >
            <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
          </Pressable>
        )}

        {showBrandLogo && !title ? (
          <BrandLogo size="md" />
        ) : (
          <View style={appBarStyles.titleGroup}>
            {showBrandLogo && <BrandLogo size="sm" showText={false} />}
            <View style={{ flex: 1 }}>
              {title && (
                <Text
                  style={[appBarStyles.title, { color: theme.textPrimary }]}
                  numberOfLines={1}
                >
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text
                  style={[appBarStyles.subtitle, { color: theme.textSecondary }]}
                  numberOfLines={1}
                >
                  {subtitle}
                </Text>
              )}
            </View>
          </View>
        )}
      </View>

      <View style={appBarStyles.actionsRow}>
        {rightAction}
        {showThemeToggle && (
          <Pressable
            onPress={toggleTheme}
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={[
              appBarStyles.iconBtn,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
                borderWidth: 1,
              },
            ]}
            hitSlop={8}
          >
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={20}
              color={theme.gold}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const stripeStyles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
  band: {
    width: "100%",
  },
});

const appBarStyles = StyleSheet.create({
  container: {
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: Platform.OS === "android" ? 3 : 0,
  },
  leftRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 8,
  },
  titleGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 20,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    marginTop: 1,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
