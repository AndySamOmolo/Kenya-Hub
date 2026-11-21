import React, { createContext, useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Vibration,
  Appearance,
  useColorScheme,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BrandLogo } from "./components/BrandLogo";

export const darkColors = {
  isDark: true,
  // Cultural Flag Colors
  kenyaBlack: "#1A1108",
  kenyaRed: "#BE2126",
  kenyaRedLight: "#F07171",
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
  border: "#6E665C",
  borderLight: "#7D7469",
  borderAccent: "#8F8578",
  outline: "#8C8070",
  outlineVariant: "#6E665C",
  rippleColor: "rgba(232, 190, 90, 0.18)",
  textPrimary: "#F4EFEA",
  text: "#F4EFEA",
  surface: "#1E1A17",
  textSecondary: "#B8AEA2",
  textMuted: "#A3988A",
  warningAmber: "#FBBF24",
  lockedText: "#A39A8C",
  lockedBadgeText: "#B8B0A3",
};

export const lightColors = {
  isDark: false,
  // Cultural Flag Colors
  kenyaBlack: "#1A1108",
  kenyaRed: "#BE2126",
  kenyaRedLight: "#B91C1C",
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
  border: "#8C8275",
  borderLight: "#7A7064",
  borderAccent: "#6E6559",
  outline: "#7D7163",
  outlineVariant: "#8C8275",
  rippleColor: "rgba(184, 134, 11, 0.14)",
  textPrimary: "#1A1108",
  text: "#1A1108",
  surface: "#FFFFFF",
  textSecondary: "#544838",
  textMuted: "#63594D",
  warningAmber: "#92400E",
  lockedText: "#5C503E",
  lockedBadgeText: "#4A4032",
};

export type ThemeColors = typeof darkColors;

export const fonts = {
  headingRegular: "Outfit_400Regular",
  headingMedium: "Outfit_500Medium",
  headingSemiBold: "Outfit_600SemiBold",
  heading: "Outfit_700Bold",
  headingExtraBold: "Outfit_800ExtraBold",
  headingBlack: "Outfit_900Black",
  body: "Inter_400Regular",
  bodyMedium: "Inter_500Medium",
  bodySemiBold: "Inter_600SemiBold",
  bodyBold: "Inter_700Bold",
};

/**
 * Standardized Material 3 Typography Presets (UX-14)
 * Explicitly pairs custom Outfit/Inter font families with includeFontPadding: false
 * so Android never falls back to system Roboto when fontWeight is set.
 */
export const typography: Record<
  "h1" | "h2" | "title" | "subtitle" | "body" | "bodyBold" | "caption" | "mono",
  TextStyle
> = {
  h1: {
    fontFamily: fonts.headingExtraBold,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.3,
    includeFontPadding: false,
  },
  h2: {
    fontFamily: fonts.heading,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.2,
    includeFontPadding: false,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 15,
    lineHeight: 21,
    includeFontPadding: false,
  },
  subtitle: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    lineHeight: 18,
    includeFontPadding: false,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    lineHeight: 20,
    includeFontPadding: false,
  },
  bodyBold: {
    fontFamily: fonts.bodyBold,
    fontSize: 13.5,
    lineHeight: 20,
    includeFontPadding: false,
  },
  caption: {
    fontFamily: fonts.bodyMedium,
    fontSize: 11.5,
    lineHeight: 16,
    includeFontPadding: false,
  },
  mono: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12.5,
    lineHeight: 18,
    includeFontPadding: false,
  },
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
 * Native Android Material 3 ripple effect on Pressable components (UX-1)
 */
export function androidRipple(color?: string, borderless = false) {
  return {
    color: color || "rgba(232, 190, 90, 0.16)",
    borderless,
  };
}

/**
 * Tactile pressed state style helper for Pressable components (UX-1)
 * Applies subtle scale + opacity response on touch across Android & iOS.
 */
export function pressableStyle(
  baseStyle?: StyleProp<ViewStyle>,
  pressedStyle?: StyleProp<ViewStyle>,
  scaleOnPress = true
) {
  return ({ pressed }: { pressed: boolean }): StyleProp<ViewStyle> => [
    baseStyle,
    pressed && {
      opacity: 0.84,
      transform: scaleOnPress ? [{ scale: 0.985 }] : undefined,
    },
    pressed && pressedStyle,
  ];
}

/**
 * Lightweight haptic pulse for key interactions (UX-1)
 */
export function triggerHaptic(durationMs = 10) {
  try {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      Vibration.vibrate(durationMs);
    }
  } catch {
    // Ignore on unsupported devices
  }
}

/**
 * Backward-compatible parser & serializer for kh-saved-tools (MOB-16)
 * Reads both JSON array format ('["paye-calculator"]') and legacy comma-separated strings.
 */
export function parseSavedTools(raw: string | null | undefined): string[] {
  if (!raw || !raw.trim()) return [];
  const trimmed = raw.trim();
  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return Array.from(
          new Set(
            parsed
              .filter((item): item is string => typeof item === "string")
              .map((s) => s.trim())
              .filter(Boolean)
          )
        );
      }
    } catch {
      // Fall back to comma split below
    }
  }
  return Array.from(
    new Set(
      trimmed
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    )
  );
}

export function serializeSavedTools(slugs: string[]): string {
  const unique = Array.from(new Set(slugs.map((s) => s.trim()).filter(Boolean)));
  return JSON.stringify(unique);
}

interface ThemeContextType {
  theme: ThemeColors;
  isDark: boolean;
  themeReady: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: darkColors,
  isDark: true,
  themeReady: false,
  toggleTheme: () => {},
  setThemeMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(() => systemColorScheme !== "light");
  const [themeReady, setThemeReady] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem("kh-theme")
      .then((saved) => {
        if (!mounted) return;
        if (saved === "light") {
          setIsDark(false);
        } else if (saved === "dark") {
          setIsDark(true);
        } else if (systemColorScheme === "light") {
          setIsDark(false);
        } else {
          setIsDark(true);
        }
      })
      .catch(() => {
        // Ignore AsyncStorage read error
      })
      .finally(() => {
        if (mounted) setThemeReady(true);
      });
    return () => {
      mounted = false;
    };
  }, [systemColorScheme]);

  useEffect(() => {
    try {
      Appearance.setColorScheme?.(isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  const toggleTheme = React.useCallback(() => {
    triggerHaptic(8);
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem("kh-theme", next ? "dark" : "light").catch(() => {});
      return next;
    });
  }, []);

  const setThemeMode = React.useCallback((mode: "dark" | "light") => {
    const next = mode === "dark";
    setIsDark(next);
    AsyncStorage.setItem("kh-theme", mode).catch(() => {});
  }, []);

  const theme = isDark ? darkColors : lightColors;
  const ctxValue = React.useMemo(
    () => ({ theme, isDark, themeReady, toggleTheme, setThemeMode }),
    [theme, isDark, themeReady, toggleTheme, setThemeMode]
  );

  return (
    <ThemeContext.Provider value={ctxValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return { ...ctx, colors: ctx.theme };
}

export function useDynamicStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  creator: (theme: ThemeColors) => T
): { theme: ThemeColors; isDark: boolean; styles: T } {
  const { theme, isDark } = useTheme();
  const styles = React.useMemo(() => creator(theme), [theme, isDark]);
  return { theme, isDark, styles };
}

/**
 * Kenyan Flag Stripe Component
 * Subtle 3px bar: Black · White · Red · White · Green
 */
export function KenyaStripe() {
  return (
    <View style={stripeStyles.container} accessible={false}>
      <View style={[stripeStyles.band, { backgroundColor: "#000000", height: 1.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#BE2126", height: 1.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#006B3F", height: 1.5 }]} />
    </View>
  );
}

/**
 * Compact, Uniform 52dp Top App Bar for Android
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
            onPress={() => {
              triggerHaptic(8);
              onBack();
            }}
            accessibilityRole="button"
            accessibilityLabel="Navigate back"
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={pressableStyle([
              appBarStyles.iconBtn,
              { backgroundColor: theme.surfaceContainerHigh },
            ])}
            hitSlop={8}
          >
            <Ionicons name="arrow-back" size={18} color={theme.textPrimary} />
          </Pressable>
        )}

        {showBrandLogo && !title ? (
          <BrandLogo size="sm" />
        ) : (
          <View style={appBarStyles.titleGroup}>
            {showBrandLogo && <BrandLogo size="sm" showText={false} />}
            <View style={{ flex: 1, minWidth: 0, justifyContent: "center" }}>
              {title && (
                <Text
                  style={[appBarStyles.title, { color: theme.textPrimary }]}
                  numberOfLines={1}
                  accessibilityRole="header"
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
            testID="theme-toggle"
            onPress={toggleTheme}
            accessibilityRole="button"
            accessibilityLabel={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            android_ripple={androidRipple(theme.rippleColor, true)}
            style={pressableStyle([
              appBarStyles.iconBtn,
              {
                backgroundColor: theme.surfaceContainerHigh,
                borderColor: theme.outlineVariant,
                borderWidth: 1,
              },
            ])}
            hitSlop={8}
          >
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={17}
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
    minHeight: 52,
    paddingVertical: 6,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  leftRow: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 8,
  },
  titleGroup: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.2,
    includeFontPadding: false,
  },
  subtitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 1,
    includeFontPadding: false,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    gap: 6,
  },
  iconBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
