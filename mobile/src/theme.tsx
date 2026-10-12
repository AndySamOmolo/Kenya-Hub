import React, { createContext, useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  // Theme Surfaces (Dark)
  bgPrimary: "#0C0A08",
  bgSecondary: "#141210",
  bgCard: "#1C1916",
  bgCardHover: "#252220",
  bgElevated: "#2A2622",
  border: "#2E2A25",
  borderLight: "#3D3730",
  borderAccent: "#4D453C",
  textPrimary: "#F2EDE6",
  textSecondary: "#A89F94",
  textMuted: "#6D6358",
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

  // Theme Surfaces (Light — Warm Kenyan Afternoon)
  bgPrimary: "#FAF7F2",
  bgSecondary: "#F3EEE6",
  bgCard: "#FFFFFF",
  bgCardHover: "#F8F4ED",
  bgElevated: "#F0EBE2",
  border: "#E2DAD0",
  borderLight: "#D4CABF",
  borderAccent: "#C8BDB0",
  textPrimary: "#1A1108",
  textSecondary: "#5C503E",
  textMuted: "#8C8070",
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
  return useContext(ThemeContext);
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
 * (No blue stripe!)
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

const stripeStyles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
  band: {
    width: "100%",
  },
});
