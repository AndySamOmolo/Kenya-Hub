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
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BrandLogo } from "./components/BrandLogo";
import {
  DEFAULT_THEME_CONFIG,
  THEME_PRESETS,
  APP_LOOK_PROFILES,
  resolveThemeColors,
  resolveThemeMetrics,
  parseThemeConfigJson,
  exportThemeConfigJson,
  resolveFontPairFamilies,
  hexToRgba,
  mixHex,
  getContrastInk,
  type ThemeConfig,
  type ThemeMetrics,
  type ThemeMode,
  type CustomColorsConfig,
  type HapticStrength,
  type PressEffect,
} from "./lib/theme-engine";

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

// Global runtime flags synchronized from ThemeProvider
let _globalHapticsEnabled = true;
let _globalHapticDurationMs = 8;
let _globalReduceMotion = false;
let _globalPressEffect: PressEffect = "scale-ripple";

const HAPTIC_STRENGTH_MS: Record<HapticStrength, number> = {
  off: 0,
  light: 8,
  medium: 16,
  strong: 28,
};

const ANDROID_RIPPLE_CACHE = new Map<string, { color: string; borderless: boolean }>();
const ANDROID_RIPPLE_CACHE_MAX = 128;

export function androidRipple(color?: string, borderless = false) {
  const key = `${_globalPressEffect}|${color || ""}|${borderless}`;
  const cached = ANDROID_RIPPLE_CACHE.get(key);
  if (cached) return cached;
  const val =
    _globalPressEffect === "none" || _globalPressEffect === "opacity-only"
      ? { color: "transparent", borderless }
      : { color: color || "rgba(232, 190, 90, 0.16)", borderless };
  if (ANDROID_RIPPLE_CACHE.size >= ANDROID_RIPPLE_CACHE_MAX) {
    const firstKey = ANDROID_RIPPLE_CACHE.keys().next().value;
    if (firstKey !== undefined) ANDROID_RIPPLE_CACHE.delete(firstKey);
  }
  ANDROID_RIPPLE_CACHE.set(key, val);
  return val;
}

export function pressableStyle(
  baseStyle?: StyleProp<ViewStyle>,
  pressedStyle?: StyleProp<ViewStyle>,
  scaleOnPress = true
) {
  return ({ pressed }: { pressed: boolean }): StyleProp<ViewStyle> => [
    baseStyle,
    pressed && _globalPressEffect !== "none" && {
      opacity:
        _globalPressEffect === "ripple-only"
          ? 0.96
          : _globalReduceMotion
          ? 0.92
          : 0.84,
      transform:
        scaleOnPress && !_globalReduceMotion && _globalPressEffect === "scale-ripple"
          ? [{ scale: 0.985 }]
          : undefined,
    },
    pressed && pressedStyle,
  ];
}

export function triggerHaptic(durationMs?: number) {
  if (!_globalHapticsEnabled || _globalHapticDurationMs <= 0) return;
  const effectiveDuration =
    durationMs !== undefined
      ? Math.max(1, Math.round((durationMs / 10) * _globalHapticDurationMs))
      : _globalHapticDurationMs;
  try {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      Vibration.vibrate(effectiveDuration);
    }
  } catch {
    // Ignore on unsupported devices
  }
}

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

const THEME_CONFIG_STORAGE_KEY = "kh-theme-config";
const SAVED_THEMES_STORAGE_KEY = "kh-saved-themes";

export interface SavedCustomTheme {
  id: string;
  name: string;
  createdAt: string;
  swatches: [string, string, string, string];
  config: ThemeConfig;
}

interface ThemeContextType {
  theme: ThemeColors;
  colors: ThemeColors;
  isDark: boolean;
  themeReady: boolean;
  themeKey: string;
  themeConfig: ThemeConfig;
  themeMetrics: ThemeMetrics;
  resolvedFonts: { heading: string; body: string; bold: string };
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  updateThemeConfig: (patch: Partial<ThemeConfig>) => void;
  updateCustomColor: (key: keyof CustomColorsConfig, hex: string | undefined) => void;
  applyThemePreset: (presetId: string, forceMode?: "dark" | "light") => void;
  applyAppLookProfile: (profileId: string) => void;
  resetThemeConfig: () => void;
  importThemeJson: (raw: string) => boolean;
  exportThemeJson: () => string;
}

const defaultMetrics = resolveThemeMetrics(DEFAULT_THEME_CONFIG);

export function buildThemeKey(cfg: ThemeConfig, colorsObj: ThemeColors, dark: boolean): string {
  const customSig = Object.entries(cfg.customColors || {})
    .filter(([, v]) => Boolean(v))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join(",");
  return [
    dark ? "d" : "l",
    cfg.presetId,
    cfg.oledBlack ? "oled" : "",
    cfg.accentIntensity,
    cfg.readingTint,
    cfg.colorBlindMode,
    cfg.highContrastBorders ? "hc" : "",
    colorsObj.bgPrimary,
    colorsObj.surfaceContainer,
    colorsObj.gold,
    colorsObj.kenyaGreen,
    colorsObj.outlineVariant,
    cfg.surfaceStyle,
    cfg.borderWidth,
    cfg.cardRadius,
    cfg.buttonRadius,
    cfg.cardShadowIntensity,
    cfg.cardAccentStyle,
    cfg.iconBadgeStyle,
    cfg.iconPack,
    cfg.inputStyle,
    cfg.buttonStyle,
    cfg.homeLayout,
    cfg.density,
    cfg.screenPadding,
    cfg.pillBarLayout,
    cfg.pillShape,
    cfg.pillSize,
    cfg.iconScale,
    cfg.buttonSize,
    cfg.cardPadding,
    cfg.tabBarSize,
    cfg.appBarSize,
    cfg.tabBarStyle,
    cfg.tabBarLabels ? "1" : "0",
    cfg.menuIndicatorStyle,
    cfg.quickMenuPosition,
    cfg.fontPair,
    cfg.fontScale,
    cfg.lineHeightScale,
    cfg.letterSpacingOffset,
    cfg.headingTransform,
    cfg.numericStyle,
    cfg.headerAlignment,
    cfg.appBarStyle,
    cfg.showKenyaStripe ? cfg.stripeThickness : "nostripe",
    cfg.horizontalScrollbarStyle,
    cfg.horizontalScrollbarThickness,
    cfg.verticalScrollbarStyle,
    cfg.progressBarStyle,
    cfg.dividerStyle,
    cfg.sectionHeaderStyle,
    cfg.pressEffect,
    cfg.showCardIcons ? "1" : "0",
    cfg.showTabIcons ? "1" : "0",
    cfg.showCardDescriptions ? "1" : "0",
    cfg.showCategoryBadges ? "1" : "0",
    cfg.showTrailingArrows ? "1" : "0",
    cfg.showHomeGreeting ? "1" : "0",
    cfg.showDailyWidgets ? "1" : "0",
    cfg.showOfflinePill ? "1" : "0",
    customSig,
  ].join("|");
}

const ThemeContext = createContext<ThemeContextType>({
  theme: darkColors,
  colors: darkColors,
  isDark: true,
  themeReady: false,
  themeKey: buildThemeKey(DEFAULT_THEME_CONFIG, darkColors, true),
  themeConfig: DEFAULT_THEME_CONFIG,
  themeMetrics: defaultMetrics,
  resolvedFonts: { heading: "Outfit_700Bold", body: "Inter_400Regular", bold: "Inter_700Bold" },
  toggleTheme: () => {},
  setThemeMode: () => {},
  updateThemeConfig: () => {},
  updateCustomColor: () => {},
  applyThemePreset: () => {},
  applyAppLookProfile: () => {},
  resetThemeConfig: () => {},
  importThemeJson: () => false,
  exportThemeJson: () => exportThemeConfigJson(DEFAULT_THEME_CONFIG),
});

export interface SavedThemesContextType {
  savedThemes: SavedCustomTheme[];
  saveCustomTheme: (name: string) => SavedCustomTheme | null;
  applySavedTheme: (id: string) => void;
  deleteSavedTheme: (id: string) => void;
}

const SavedThemesContext = createContext<SavedThemesContextType>({
  savedThemes: [],
  saveCustomTheme: () => null,
  applySavedTheme: () => {},
  deleteSavedTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(DEFAULT_THEME_CONFIG);
  const [savedThemes, setSavedThemes] = useState<SavedCustomTheme[]>([]);
  const [themeReady, setThemeReady] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.multiGet([THEME_CONFIG_STORAGE_KEY, "kh-theme"])
      .then((entries) => {
        if (!mounted) return;
        const map = new Map(entries);
        const rawConfig = map.get(THEME_CONFIG_STORAGE_KEY) ?? null;
        const legacyMode = map.get("kh-theme") ?? null;
        if (rawConfig) {
          const parsed = parseThemeConfigJson(rawConfig);
          if (parsed) {
            setThemeConfig(parsed);
            return;
          }
        }
        if (legacyMode === "light" || legacyMode === "dark") {
          setThemeConfig((prev) => ({ ...prev, mode: legacyMode }));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!mounted) return;
        setThemeReady(true);
        // Deferred load of saved custom themes so initial paint is never blocked
        AsyncStorage.getItem(SAVED_THEMES_STORAGE_KEY)
          .then((rawSaved) => {
            if (!mounted || !rawSaved) return;
            try {
              const arr = JSON.parse(rawSaved);
              if (Array.isArray(arr)) {
                const valid: SavedCustomTheme[] = [];
                for (const item of arr) {
                  if (!item || typeof item !== "object" || typeof item.id !== "string" || typeof item.name !== "string") continue;
                  const parsedCfg = parseThemeConfigJson(JSON.stringify(item.config || {}));
                  if (!parsedCfg) continue;
                  valid.push({
                    id: item.id,
                    name: item.name,
                    createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date().toISOString(),
                    swatches: Array.isArray(item.swatches) && item.swatches.length === 4 ? item.swatches : ["#0E0C0A", "#1E1A17", "#C8961E", "#006B3F"],
                    config: parsedCfg,
                  });
                }
                setSavedThemes(valid);
              }
            } catch {}
          })
          .catch(() => {});
      });
    return () => {
      mounted = false;
    };
  }, []);

  const persistTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingPersistConfigRef = React.useRef<ThemeConfig | null>(null);

  const flushPersistConfig = React.useCallback((next: ThemeConfig) => {
    AsyncStorage.setItem(THEME_CONFIG_STORAGE_KEY, JSON.stringify(next)).catch(() => {});
    if (next.mode === "light" || next.mode === "dark") {
      AsyncStorage.setItem("kh-theme", next.mode).catch(() => {});
    } else {
      AsyncStorage.removeItem("kh-theme").catch(() => {});
    }
  }, []);

  const persistConfig = React.useCallback(
    (next: ThemeConfig) => {
      pendingPersistConfigRef.current = next;
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
      }
      persistTimerRef.current = setTimeout(() => {
        persistTimerRef.current = null;
        const toWrite = pendingPersistConfigRef.current;
        pendingPersistConfigRef.current = null;
        if (toWrite) {
          flushPersistConfig(toWrite);
        }
      }, 300);
    },
    [flushPersistConfig]
  );

  useEffect(() => {
    return () => {
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
        persistTimerRef.current = null;
      }
      const pending = pendingPersistConfigRef.current;
      pendingPersistConfigRef.current = null;
      if (pending) {
        flushPersistConfig(pending);
      }
    };
  }, [flushPersistConfig]);

  const isDark =
    themeConfig.mode === "dark"
      ? true
      : themeConfig.mode === "light"
      ? false
      : systemColorScheme !== "light";

  useEffect(() => {
    _globalHapticsEnabled = themeConfig.hapticsEnabled;
    _globalHapticDurationMs = HAPTIC_STRENGTH_MS[themeConfig.hapticStrength] ?? 8;
    _globalReduceMotion = themeConfig.reduceMotion;
    _globalPressEffect = themeConfig.pressEffect ?? "scale-ripple";
  }, [themeConfig.hapticsEnabled, themeConfig.hapticStrength, themeConfig.reduceMotion, themeConfig.pressEffect]);

  useEffect(() => {
    try {
      Appearance.setColorScheme?.(themeConfig.mode === "system" ? null : isDark ? "dark" : "light");
    } catch {}
  }, [isDark, themeConfig.mode]);

  const toggleTheme = React.useCallback(() => {
    triggerHaptic(8);
    setThemeConfig((prev) => {
      const currentDark =
        prev.mode === "dark" ? true : prev.mode === "light" ? false : systemColorScheme !== "light";
      const nextMode: ThemeMode = currentDark ? "light" : "dark";
      const next = { ...prev, mode: nextMode };
      persistConfig(next);
      return next;
    });
  }, [persistConfig, systemColorScheme]);

  const setThemeMode = React.useCallback(
    (mode: ThemeMode) => {
      triggerHaptic(6);
      setThemeConfig((prev) => {
        const next = { ...prev, mode };
        persistConfig(next);
        return next;
      });
    },
    [persistConfig]
  );

  const updateThemeConfig = React.useCallback(
    (patch: Partial<ThemeConfig>) => {
      setThemeConfig((prev) => {
        const next = { ...prev, ...patch };
        persistConfig(next);
        return next;
      });
    },
    [persistConfig]
  );

  const updateCustomColor = React.useCallback(
    (key: keyof CustomColorsConfig, hex: string | undefined) => {
      setThemeConfig((prev) => {
        const nextCustom = { ...prev.customColors };
        if (!hex || !hex.trim()) {
          delete nextCustom[key];
        } else {
          nextCustom[key] = hex.trim();
        }
        const next = { ...prev, customColors: nextCustom };
        persistConfig(next);
        return next;
      });
    },
    [persistConfig]
  );

  const applyThemePreset = React.useCallback(
    (presetId: string, forceMode?: "dark" | "light") => {
      triggerHaptic(8);
      if (!THEME_PRESETS.some((p) => p.id === presetId)) return;
      setThemeConfig((prev) => {
        const next: ThemeConfig = {
          ...prev,
          presetId,
          mode: forceMode ? forceMode : prev.mode,
        };
        persistConfig(next);
        return next;
      });
    },
    [persistConfig]
  );

  const applyAppLookProfile = React.useCallback(
    (profileId: string) => {
      const profile = APP_LOOK_PROFILES.find((p) => p.id === profileId);
      if (!profile) return;
      triggerHaptic(10);
      if (profile.id === "kenyahub-classic") {
        setThemeConfig((prev) => {
          const next: ThemeConfig = {
            ...DEFAULT_THEME_CONFIG,
            hapticsEnabled: prev.hapticsEnabled,
            hapticStrength: prev.hapticStrength,
            reduceMotion: prev.reduceMotion,
            highContrastBorders: prev.highContrastBorders,
            colorBlindMode: prev.colorBlindMode,
            fontScale: prev.fontScale,
            customColors: {},
          };
          persistConfig(next);
          return next;
        });
        return;
      }
      setThemeConfig((prev) => {
        const next: ThemeConfig = {
          ...DEFAULT_THEME_CONFIG,
          hapticsEnabled: prev.hapticsEnabled,
          hapticStrength: prev.hapticStrength,
          reduceMotion: prev.reduceMotion,
          highContrastBorders: prev.highContrastBorders,
          colorBlindMode: prev.colorBlindMode,
          fontScale: prev.fontScale,
          ...profile.config,
          customColors: profile.config.customColors ?? {},
        };
        persistConfig(next);
        return next;
      });
    },
    [persistConfig]
  );

  const persistSavedThemes = React.useCallback((next: SavedCustomTheme[]) => {
    AsyncStorage.setItem(SAVED_THEMES_STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const saveCustomTheme = React.useCallback(
    (rawName: string): SavedCustomTheme | null => {
      const cleanName = rawName.trim().slice(0, 32);
      if (!cleanName) return null;
      triggerHaptic(10);
      const resolved = resolveThemeColors(darkColors, lightColors, themeConfig, isDark);
      const snapshot: ThemeConfig = {
        ...themeConfig,
        customColors: { ...themeConfig.customColors },
      };
      const entry: SavedCustomTheme = {
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        name: cleanName,
        createdAt: new Date().toISOString(),
        swatches: [resolved.bgPrimary, resolved.surfaceContainer, resolved.gold, resolved.kenyaGreen],
        config: snapshot,
      };
      setSavedThemes((prev) => {
        const filtered = prev.filter((t) => t.name.toLowerCase() !== cleanName.toLowerCase());
        const next = [entry, ...filtered].slice(0, 20);
        persistSavedThemes(next);
        return next;
      });
      return entry;
    },
    [themeConfig, isDark, persistSavedThemes]
  );

  const applySavedTheme = React.useCallback(
    (id: string) => {
      const found = savedThemes.find((t) => t.id === id);
      if (!found) return;
      triggerHaptic(8);
      const next: ThemeConfig = {
        ...found.config,
        customColors: { ...found.config.customColors },
      };
      setThemeConfig(next);
      persistConfig(next);
    },
    [savedThemes, persistConfig]
  );

  const deleteSavedTheme = React.useCallback(
    (id: string) => {
      triggerHaptic(8);
      setSavedThemes((prev) => {
        const next = prev.filter((t) => t.id !== id);
        persistSavedThemes(next);
        return next;
      });
    },
    [persistSavedThemes]
  );

  const resetThemeConfig = React.useCallback(() => {
    triggerHaptic(12);
    setThemeConfig(DEFAULT_THEME_CONFIG);
    persistConfig(DEFAULT_THEME_CONFIG);
  }, [persistConfig]);

  const importThemeJson = React.useCallback(
    (raw: string): boolean => {
      const parsed = parseThemeConfigJson(raw);
      if (!parsed) return false;
      triggerHaptic(10);
      setThemeConfig(parsed);
      persistConfig(parsed);
      return true;
    },
    [persistConfig]
  );

  const exportThemeJson = React.useCallback(
    () => exportThemeConfigJson(themeConfig),
    [themeConfig]
  );

  const theme = React.useMemo(
    () => resolveThemeColors(darkColors, lightColors, themeConfig, isDark) as ThemeColors,
    [themeConfig, isDark]
  );

  const themeMetrics = React.useMemo(
    () => resolveThemeMetrics(themeConfig),
    [themeConfig]
  );

  const resolvedFonts = React.useMemo(
    () => resolveFontPairFamilies(themeConfig.fontPair, Platform.OS === "ios"),
    [themeConfig.fontPair]
  );

  const themeKey = React.useMemo(() => buildThemeKey(themeConfig, theme, isDark), [themeConfig, theme, isDark]);

  const ctxValue = React.useMemo(
    () => ({
      theme,
      colors: theme,
      isDark,
      themeReady,
      themeKey,
      themeConfig,
      themeMetrics,
      resolvedFonts,
      toggleTheme,
      setThemeMode,
      updateThemeConfig,
      updateCustomColor,
      applyThemePreset,
      applyAppLookProfile,
      resetThemeConfig,
      importThemeJson,
      exportThemeJson,
    }),
    [
      theme,
      isDark,
      themeReady,
      themeKey,
      themeConfig,
      themeMetrics,
      resolvedFonts,
      toggleTheme,
      setThemeMode,
      updateThemeConfig,
      updateCustomColor,
      applyThemePreset,
      applyAppLookProfile,
      resetThemeConfig,
      importThemeJson,
      exportThemeJson,
    ]
  );

  const savedThemesCtxValue = React.useMemo(
    () => ({
      savedThemes,
      saveCustomTheme,
      applySavedTheme,
      deleteSavedTheme,
    }),
    [savedThemes, saveCustomTheme, applySavedTheme, deleteSavedTheme]
  );

  return (
    <ThemeContext.Provider value={ctxValue}>
      <SavedThemesContext.Provider value={savedThemesCtxValue}>
        {children}
      </SavedThemesContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useSavedThemes() {
  return useContext(SavedThemesContext);
}

export function useDynamicStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  creator: (
    theme: ThemeColors,
    metrics?: ThemeMetrics,
    resolvedFonts?: { heading: string; body: string; bold: string },
    themeConfig?: ThemeConfig
  ) => T
): { theme: ThemeColors; isDark: boolean; metrics: ThemeMetrics; styles: T } {
  const { theme, isDark, themeMetrics, resolvedFonts, themeConfig } = useTheme();
  const styles = React.useMemo(
    () => creator(theme, themeMetrics, resolvedFonts, themeConfig),
    [theme, themeMetrics, resolvedFonts, themeConfig]
  );
  return React.useMemo(
    () => ({ theme, isDark, metrics: themeMetrics, styles }),
    [theme, isDark, themeMetrics, styles]
  );
}

export interface ThemedCardStyle extends ViewStyle {
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  elevation: number;
  shadowOpacity: number;
  borderLeftWidth?: number;
  borderLeftColor?: string;
  borderTopWidth?: number;
  borderTopColor?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderRightWidth?: number;
  borderRightColor?: string;
}

/**
 * Computes a complete themed card container style obeying cardRadius, borderWidth,
 * surfaceStyle, cardShadowIntensity, and cardAccentStyle.
 */
export function getThemedCardStyle(
  theme: ThemeColors,
  themeConfig: ThemeConfig,
  themeMetrics: ThemeMetrics
): ThemedCardStyle {
  if (themeConfig.surfaceStyle === "frameless") {
    return {
      borderRadius: 0,
      borderWidth: 0,
      borderColor: "transparent",
      backgroundColor: "transparent",
      elevation: 0,
      shadowColor: "#000000",
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: { width: 0, height: 0 },
    };
  }
  const borderRadius = themeMetrics.cardRadiusPx;
  let borderWidth = themeMetrics.borderWidthPx;
  let borderColor = themeConfig.highContrastBorders
    ? theme.textPrimary
    : theme.outlineVariant;
  let backgroundColor = theme.surfaceContainer;

  switch (themeConfig.surfaceStyle) {
    case "flat":
      backgroundColor = theme.bgSecondary;
      break;
    case "outlined":
      backgroundColor = theme.bgCard;
      borderWidth = Math.max(1, borderWidth);
      break;
    case "glass":
      backgroundColor = hexToRgba(theme.surfaceContainer, 0.88);
      break;
    case "tonal":
      backgroundColor = theme.surfaceContainerHigh;
      break;
    case "crisp":
      backgroundColor = theme.surfaceContainerLowest;
      borderColor = theme.outline;
      break;
    case "paper-ink":
      backgroundColor = theme.bgCard;
      borderColor = theme.outline;
      borderWidth = Math.max(0.75, borderWidth);
      break;
    case "neo-brutal":
      backgroundColor = theme.isDark ? theme.surfaceContainerHigh : theme.bgCard;
      borderColor = theme.isDark ? theme.outline : theme.textPrimary;
      borderWidth = Math.max(1.5, borderWidth);
      break;
    case "inset-tray":
      backgroundColor = theme.surfaceContainerLow;
      borderColor = hexToRgba(theme.outlineVariant, 0.55);
      borderWidth = Math.max(0.5, borderWidth);
      break;
    case "elevated":
    default:
      backgroundColor = theme.surfaceContainer;
      break;
  }

  const isAndroid = Platform.OS === "android";
  let elevation = themeMetrics.elevationPx;
  let shadowOpacity = theme.isDark ? 0.24 : 0.08;
  let shadowColor = "#000000";
  let shadowRadius = 4;

  switch (themeConfig.cardShadowIntensity) {
    case "none":
      elevation = 0;
      shadowOpacity = 0;
      shadowRadius = 0;
      break;
    case "subtle":
      elevation = themeConfig.surfaceStyle === "flat" ? 0 : Math.max(1, elevation);
      shadowOpacity = theme.isDark ? 0.18 : 0.06;
      shadowRadius = 3;
      break;
    case "medium":
      elevation = isAndroid ? 2 : 4;
      shadowOpacity = theme.isDark ? 0.28 : 0.12;
      shadowRadius = 6;
      break;
    case "strong":
      elevation = isAndroid ? 3 : 8;
      shadowOpacity = theme.isDark ? 0.42 : 0.2;
      shadowRadius = 10;
      break;
    case "glow":
      if (isAndroid) {
        elevation = 2;
        shadowColor = "#000000";
        shadowOpacity = 0;
        shadowRadius = 0;
      } else {
        elevation = 5;
        shadowOpacity = theme.isDark ? 0.34 : 0.14;
        shadowColor = "#000000";
        shadowRadius = 8;
      }
      break;
    case "crisp-3d":
      elevation = isAndroid ? 3 : 5;
      shadowOpacity = theme.isDark ? 0.4 : 0.18;
      shadowRadius = 2;
      break;
  }

  const isFlatCraftSurface = themeConfig.surfaceStyle === "glass" || themeConfig.surfaceStyle === "paper-ink" || themeConfig.surfaceStyle === "neo-brutal" || themeConfig.surfaceStyle === "inset-tray";
  const clampedAndroidElevation = isAndroid ? (isFlatCraftSurface ? 0 : Math.min(3, Math.max(0, elevation))) : 0;

  const cardStyle: ThemedCardStyle = {
    borderRadius,
    borderWidth,
    borderColor,
    backgroundColor,
    elevation: clampedAndroidElevation,
    shadowColor: isAndroid ? "#000000" : shadowColor,
    shadowOpacity: isAndroid ? 0 : shadowOpacity,
    shadowRadius: isAndroid ? 0 : shadowRadius,
    shadowOffset: {
      width: 0,
      height: !isAndroid && elevation > 0 ? Math.min(4, Math.ceil(elevation / 2)) : 0,
    },
  };

  switch (themeConfig.cardAccentStyle) {
    case "left-bar":
      cardStyle.borderLeftWidth = 4;
      cardStyle.borderLeftColor = theme.gold;
      break;
    case "top-bar":
      cardStyle.borderTopWidth = 3;
      cardStyle.borderTopColor = theme.gold;
      break;
    case "bottom-bar":
      cardStyle.borderBottomWidth = 3;
      cardStyle.borderBottomColor = theme.gold;
      break;
    case "tinted-border":
      cardStyle.borderColor = theme.gold;
      cardStyle.borderWidth = Math.max(1.25, borderWidth);
      break;
    case "glow-edge":
      if (isAndroid) {
        cardStyle.borderColor = theme.gold;
        cardStyle.borderWidth = Math.max(1.5, borderWidth);
        cardStyle.shadowColor = "#000000";
        cardStyle.elevation = Math.min(3, Math.max(2, clampedAndroidElevation));
      } else {
        cardStyle.borderColor = theme.goldLight;
        cardStyle.borderWidth = Math.max(1.5, borderWidth);
        cardStyle.shadowColor = theme.gold;
        cardStyle.shadowOpacity = 0.38;
        cardStyle.shadowRadius = 10;
      }
      break;
    case "corner-frame":
      cardStyle.borderTopWidth = Math.max(1.5, borderWidth);
      cardStyle.borderBottomWidth = Math.max(1.5, borderWidth);
      cardStyle.borderTopColor = theme.outline;
      cardStyle.borderBottomColor = theme.outline;
      break;
    case "double-rule":
      cardStyle.borderTopWidth = StyleSheet.hairlineWidth;
      cardStyle.borderTopColor = theme.outline;
      cardStyle.borderBottomWidth = StyleSheet.hairlineWidth;
      cardStyle.borderBottomColor = theme.outline;
      break;
    case "offset-edge": {
      const edgeColor =
        themeConfig.surfaceStyle === "neo-brutal" && !theme.isDark
          ? theme.textPrimary
          : theme.outline;
      cardStyle.borderBottomWidth = 3;
      cardStyle.borderRightWidth = 2;
      cardStyle.borderBottomColor = edgeColor;
      cardStyle.borderRightColor = edgeColor;
      break;
    }
    case "none":
    default:
      break;
  }

  return cardStyle;
}

export function getThemedInputStyle(
  theme: ThemeColors,
  themeConfig: ThemeConfig,
  themeMetrics: ThemeMetrics
): ViewStyle {
  const bw = Math.max(1, themeMetrics.borderWidthPx);
  switch (themeConfig.inputStyle) {
    case "filled":
      return { backgroundColor: theme.surfaceContainerHigh, borderColor: "transparent", borderWidth: 0, borderRadius: themeMetrics.buttonRadiusPx };
    case "underlined":
      return { backgroundColor: "transparent", borderWidth: 0, borderBottomWidth: Math.max(1.5, bw), borderBottomColor: theme.outlineVariant, borderRadius: 0 };
    case "pill":
      return { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant, borderWidth: bw, borderRadius: 999 };
    case "minimal":
      return { backgroundColor: theme.surfaceContainerLow, borderColor: "transparent", borderWidth: 0, borderRadius: Math.min(10, themeMetrics.buttonRadiusPx) };
    case "accent":
      return { backgroundColor: theme.surfaceContainerLow, borderColor: theme.gold, borderWidth: Math.max(1.25, bw), borderRadius: themeMetrics.buttonRadiusPx };
    case "unboxed":
      return {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 0,
        paddingHorizontal: 2,
      };
    case "outlined":
    default:
      return { backgroundColor: theme.surfaceContainerLow, borderColor: theme.outlineVariant, borderWidth: bw, borderRadius: themeMetrics.buttonRadiusPx };
  }
}

export function getThemedButtonStyle(
  theme: ThemeColors,
  themeConfig: ThemeConfig,
  themeMetrics: ThemeMetrics,
  variant: "primary" | "secondary" | "ghost" = "primary"
): { container: ViewStyle; textColor: string } {
  const radius = themeMetrics.buttonRadiusPx;
  const pv = themeMetrics.buttonPaddingVPx;
  const ph = themeMetrics.buttonPaddingHPx;
  const base: ViewStyle = { borderRadius: radius, paddingVertical: pv, paddingHorizontal: ph, alignItems: "center", justifyContent: "center" };
  if (variant === "ghost") {
    return { container: { ...base, backgroundColor: "transparent", borderWidth: 0 }, textColor: theme.gold };
  }
  if (variant === "secondary") {
    return {
      container: { ...base, backgroundColor: theme.secondaryContainer, borderWidth: Math.max(1, themeMetrics.borderWidthPx), borderColor: theme.kenyaGreenLight },
      textColor: theme.onSecondaryContainer,
    };
  }
  const onGold = getContrastInk(theme.gold);
  switch (themeConfig.buttonStyle) {
    case "tinted":
      return { container: { ...base, backgroundColor: theme.primaryContainer, borderWidth: 1, borderColor: hexToRgba(theme.gold, 0.35) }, textColor: theme.onPrimaryContainer };
    case "outlined":
      return { container: { ...base, backgroundColor: "transparent", borderWidth: Math.max(1.5, themeMetrics.borderWidthPx), borderColor: theme.gold }, textColor: theme.gold };
    case "elevated":
      return { container: { ...base, backgroundColor: theme.surfaceContainerHigh, borderWidth: 1, borderColor: theme.outlineVariant, elevation: Platform.OS === "android" ? 2 : 0 }, textColor: theme.gold };
    case "keycap-press":
    case "pill-glow":
      return {
        container: {
          ...base,
          backgroundColor: theme.bgCard,
          borderWidth: 1.25,
          borderColor: theme.outline,
          borderBottomWidth: 3,
          borderBottomColor: theme.isDark ? "#000000" : theme.outline,
        },
        textColor: theme.textPrimary,
      };
    case "editorial-link":
    case "flat":
      return {
        container: {
          ...base,
          borderRadius: 0,
          backgroundColor: "transparent",
          borderWidth: 0,
          borderBottomWidth: 1.5,
          borderBottomColor: theme.gold,
        },
        textColor: theme.gold,
      };
    case "unboxed-text":
      return {
        container: {
          ...base,
          borderRadius: 0,
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: 4,
        },
        textColor: theme.gold,
      };
    case "filled":
    default:
      return { container: { ...base, backgroundColor: theme.gold, borderWidth: 0 }, textColor: onGold };
  }
}

export function getThemedIconBadgeStyle(
  theme: ThemeColors,
  themeConfig: ThemeConfig,
  accentColor?: string,
  baseSize = 36
): { container: ViewStyle; iconColor: string } {
  const accent = accentColor || theme.gold;
  const rawIconScale = Number.isFinite(themeConfig.iconScale) ? themeConfig.iconScale : 1.0;
  const size = Math.round(baseSize * Math.max(0.82, Math.min(1.25, rawIconScale)));
  const common: ViewStyle = { width: size, height: size, alignItems: "center", justifyContent: "center" };
  switch (themeConfig.iconBadgeStyle) {
    case "recessed-well":
    case "soft-square":
    case "monochrome-ink":
      return {
        container: {
          ...common,
          borderRadius: Math.round(size * 0.26),
          backgroundColor: theme.surfaceContainerLowest,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.outlineVariant,
          borderTopWidth: 1.5,
          borderTopColor: theme.isDark ? "rgba(0, 0, 0, 0.52)" : hexToRgba(theme.outline, 0.36),
          elevation: 0,
        },
        iconColor: accent,
      };
    case "postage-stamp":
      return {
        container: {
          ...common,
          borderRadius: 4,
          backgroundColor: theme.surfaceContainerLow,
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: theme.outline,
          elevation: 0,
        },
        iconColor: accent,
      };
    case "split-disc":
    case "filled":
    case "duotone-wash":
      return {
        container: {
          ...common,
          borderRadius: Math.round(size / 2),
          backgroundColor: hexToRgba(accent, 0.14),
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: hexToRgba(accent, 0.32),
          elevation: 0,
        },
        iconColor: accent,
      };
    case "monogram-frame":
    case "outline":
      return {
        container: {
          ...common,
          borderRadius: 4,
          backgroundColor: "transparent",
          borderWidth: 1.25,
          borderColor: theme.outline,
          elevation: 0,
        },
        iconColor: accent,
      };
    case "ceramic-tile":
    case "keycap":
      return {
        container: {
          ...common,
          borderRadius: Math.round(size * 0.24),
          backgroundColor: theme.bgCard,
          borderWidth: 1,
          borderColor: theme.outlineVariant,
          borderBottomWidth: 2.5,
          borderBottomColor: theme.isDark ? "#000000" : theme.outline,
          elevation: 0,
        },
        iconColor: accent,
      };
    case "tilted-lozenge":
      return {
        container: {
          ...common,
          borderRadius: Math.round(size * 0.24),
          backgroundColor: hexToRgba(accent, 0.15),
          borderWidth: 1,
          borderColor: hexToRgba(accent, 0.36),
          elevation: 0,
        },
        iconColor: accent,
      };
    case "ink-seal":
    case "accent-solid":
      return {
        container: {
          ...common,
          borderRadius: Math.round(size / 2),
          backgroundColor: accent,
          elevation: 0,
        },
        iconColor: getContrastInk(accent),
      };
    case "bare-glyph":
    case "minimal":
      return {
        container: { ...common, borderRadius: 0, backgroundColor: "transparent", elevation: 0 },
        iconColor: accent,
      };
    case "hidden":
      return {
        container: {
          width: 0,
          height: 0,
          opacity: 0,
          overflow: "hidden",
          elevation: 0,
        },
        iconColor: "transparent",
      };
    case "soft-circle":
    case "hairline-ring":
    default:
      return {
        container: {
          ...common,
          borderRadius: Math.round(size / 2),
          backgroundColor: hexToRgba(accent, 0.14),
          elevation: 0,
        },
        iconColor: accent,
      };
  }
}

export function getThemedHeadingStyle(
  themeConfig: ThemeConfig,
  resolvedFonts: { heading: string; body: string; bold: string },
  baseSize = 16
): TextStyle {
  const scaled = Math.round(baseSize * (themeConfig.fontScale || 1) * 10) / 10;
  return {
    fontFamily: resolvedFonts.heading,
    fontSize: scaled,
    lineHeight: Math.round(scaled * 1.3 * (themeConfig.lineHeightScale || 1)),
    letterSpacing: themeConfig.letterSpacingOffset || 0,
    textTransform: themeConfig.headingTransform || "none",
    includeFontPadding: false,
  };
}

export function getThemedNumericStyle(
  themeConfig: ThemeConfig,
  resolvedFonts: { heading: string; body: string; bold: string }
): TextStyle {
  if (themeConfig.numericStyle === "tabular-mono") {
    return { fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace", fontVariant: ["tabular-nums"], includeFontPadding: false };
  }
  return { fontFamily: resolvedFonts.bold, fontVariant: ["tabular-nums"], includeFontPadding: false };
}

export const ThemedDivider = React.memo(function ThemedDivider({
  style,
  themeOverride,
  configOverride,
}: {
  style?: StyleProp<ViewStyle>;
  themeOverride?: ThemeColors;
  configOverride?: ThemeConfig;
}) {
  const ctx = useTheme();
  const theme = themeOverride ?? ctx.theme;
  const themeConfig = configOverride ?? ctx.themeConfig;
  const mode = themeConfig.dividerStyle || "hairline";
  if (mode === "none") return null;
  if (mode === "dashed-soft") {
    return <View style={[{ width: "100%", borderBottomWidth: 1, borderStyle: "dashed", borderColor: theme.outlineVariant, marginVertical: 8, opacity: 0.7 }, style]} />;
  }
  if (mode === "accent-fade") {
    return <View style={[{ width: "100%", height: 1.5, backgroundColor: hexToRgba(theme.gold, 0.38), borderRadius: 999, marginVertical: 8 }, style]} />;
  }
  return <View style={[{ width: "100%", height: StyleSheet.hairlineWidth, backgroundColor: theme.outlineVariant, marginVertical: 8 }, style]} />;
});

const SEGMENTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const ThemedProgressBar = React.memo(function ThemedProgressBar({
  progress,
  color,
  height,
  style,
  themeOverride,
  configOverride,
}: {
  progress: number;
  color?: string;
  height?: number;
  style?: StyleProp<ViewStyle>;
  themeOverride?: ThemeColors;
  configOverride?: ThemeConfig;
}) {
  const ctx = useTheme();
  const theme = themeOverride ?? ctx.theme;
  const themeConfig = configOverride ?? ctx.themeConfig;
  const pct = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0));
  const fill = color || theme.gold;
  const barStyle = themeConfig.progressBarStyle || "rounded";
  const barH = height ?? (barStyle === "thin-line" ? 3 : barStyle === "segmented" ? 7 : 6);
  if (barStyle === "segmented") {
    const filledCount = Math.round(pct * SEGMENTS.length);
    return (
      <View style={[{ flexDirection: "row", gap: 3, width: "100%", height: barH }, style]}>
        {SEGMENTS.map((idx) => (
          <View key={`seg-${idx}`} style={{ flex: 1, height: "100%", borderRadius: 2, backgroundColor: idx < filledCount ? fill : theme.surfaceContainerHighest }} />
        ))}
      </View>
    );
  }
  const radius = barStyle === "sharp" ? 0 : 999;
  return (
    <View style={[{ width: "100%", height: barH, borderRadius: radius, backgroundColor: theme.surfaceContainerHighest, overflow: "hidden" }, style]}>
      <View style={{ width: `${Math.round(pct * 100)}%`, height: "100%", borderRadius: radius, backgroundColor: fill }} />
    </View>
  );
});

/**
 * Kenyan Flag Stripe Component
 * Subtle 3px bar: Black · White · Red · White · Green (toggleable in Settings)
 */
export const KenyaStripe = React.memo(function KenyaStripe({
  themeOverride: _themeOverride,
  configOverride,
}: {
  themeOverride?: ThemeColors;
  configOverride?: ThemeConfig;
} = {}) {
  const ctx = useTheme();
  const themeConfig = configOverride ?? ctx.themeConfig;
  if (!themeConfig.showKenyaStripe || themeConfig.stripeThickness === "hidden") return null;
  const mult =
    themeConfig.stripeThickness === "hairline" ? 0.6 :
    themeConfig.stripeThickness === "medium" ? 1.4 :
    themeConfig.stripeThickness === "thick" ? 2.0 :
    themeConfig.stripeThickness === "bold" ? 2.8 : 1.0;
  return (
    <View style={stripeStyles.container} accessible={false}>
      <View style={[stripeStyles.band, { backgroundColor: "#000000", height: 1.5 * mult }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 * mult }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#BE2126", height: 1.5 * mult }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#FAF7F2", height: 0.5 * mult }]} />
      <View style={[stripeStyles.band, { backgroundColor: "#006B3F", height: 1.5 * mult }]} />
    </View>
  );
});

/**
 * Compact, Uniform 52dp Top App Bar for Android with Settings Gear Button
 */
export const AndroidTopAppBar = React.memo(function AndroidTopAppBar({
  title,
  subtitle,
  onBack,
  showBrandLogo = false,
  rightAction,
  showThemeToggle = true,
  showSettingsButton = true,
}: {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showBrandLogo?: boolean;
  rightAction?: React.ReactNode;
  showThemeToggle?: boolean;
  showSettingsButton?: boolean;
}) {
  const { theme, themeKey, themeConfig, themeMetrics, resolvedFonts } = useTheme();
  const iconScale = themeMetrics?.iconScale ?? 1.0;
  const barIconSize = Math.round(18 * iconScale);
  const barBtnSize = Math.round(34 * Math.max(0.82, Math.min(1.24, iconScale)));
  const resolvedBarHeight =
    themeConfig.appBarSize && themeConfig.appBarSize !== "md"
      ? themeMetrics.appBarHeightPx
      : themeConfig.appBarStyle === "compact"
      ? 44
      : themeConfig.appBarStyle === "tall-editorial"
      ? 64
      : themeMetrics.appBarHeightPx;
  const router = useRouter();
  const showGear = showThemeToggle && showSettingsButton;
  const isCentered = themeConfig.headerAlignment === "center";

  const barKey = `${theme.surfaceContainerLow}-${theme.primaryContainer}-${themeConfig.appBarStyle}-${themeConfig.headerAlignment}-${themeConfig.appBarSize}-${themeConfig.iconBadgeStyle}-${themeConfig.iconPack}-${iconScale}-${themeConfig.showOfflinePill !== false ? "1" : "0"}`;

  return (
    <View
      key={barKey}
      style={[
        appBarStyles.container,
        {
          backgroundColor:
            themeConfig.appBarStyle === "accent-tinted"
              ? mixHex(theme.surfaceContainerLow, theme.gold, theme.isDark ? 0.08 : 0.06)
              : theme.surfaceContainerLow,
          borderBottomColor: theme.outlineVariant,
          borderBottomWidth:
            themeConfig.appBarStyle === "borderless" ? 0 : StyleSheet.hairlineWidth,
          minHeight: resolvedBarHeight,
          elevation:
            Platform.OS === "android"
              ? themeConfig.appBarStyle === "accent-tinted" || themeConfig.appBarStyle === "borderless"
                ? 0
                : 1
              : 0,
        },
        themeConfig.appBarStyle === "floating" && {
          marginHorizontal: 10,
          marginTop: 6,
          marginBottom: 6,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <View style={[appBarStyles.leftRow, isCentered && { marginRight: 0 }]}>
        {onBack ? (
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              onBack();
            }}
            accessibilityRole="button"
            accessibilityLabel="Navigate back"
            android_ripple={androidRipple(theme.rippleColor, false)}
            style={pressableStyle()}
            hitSlop={8}
          >
            <View
              style={[
                appBarStyles.iconBtn,
                {
                  width: barBtnSize,
                  height: barBtnSize,
                  borderRadius: Math.round(barBtnSize / 2),
                  backgroundColor: theme.surfaceContainerHigh,
                },
              ]}
            >
              <Ionicons name="arrow-back" size={barIconSize} color={theme.textPrimary} />
            </View>
          </Pressable>
        ) : isCentered && (showGear || rightAction) ? (
          <View style={{ width: barBtnSize, height: barBtnSize }} accessible={false} />
        ) : null}

        {showBrandLogo && !title ? (
          <View style={isCentered ? { flex: 1, alignItems: "center" } : undefined}>
            <BrandLogo size="sm" />
          </View>
        ) : (
          <View style={[appBarStyles.titleGroup, isCentered && { justifyContent: "center" }]}>
            {showBrandLogo && <BrandLogo size="sm" showText={false} />}
            <View
              style={{
                flex: isCentered ? 0 : 1,
                flexShrink: 1,
                minWidth: 0,
                justifyContent: "center",
                alignItems: isCentered ? "center" : "flex-start",
              }}
            >
              {title && (
                <Text
                  style={[
                    appBarStyles.title,
                    {
                      color: theme.textPrimary,
                      fontFamily: resolvedFonts.heading,
                      fontSize: Math.round(16 * Math.max(0.85, Math.min(1.22, themeMetrics.fontScale))),
                      letterSpacing: themeConfig.letterSpacingOffset || -0.2,
                      textTransform: themeConfig.headingTransform || "none",
                    },
                    isCentered && { textAlign: "center" },
                  ]}
                  numberOfLines={1}
                  accessibilityRole="header"
                >
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text
                  style={[
                    appBarStyles.subtitle,
                    { color: theme.textSecondary, fontFamily: resolvedFonts.body },
                    isCentered && { textAlign: "center" },
                  ]}
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
        {showGear && (
          <Pressable
            testID="settings-button"
            onPress={() => {
              triggerHaptic(8);
              router.push("/settings" as any);
            }}
            accessibilityRole="button"
            accessibilityLabel="Open settings and theme studio"
            android_ripple={androidRipple(theme.rippleColor, false)}
            style={pressableStyle()}
            hitSlop={8}
          >
            <View
              style={[
                appBarStyles.iconBtn,
                {
                  width: barBtnSize,
                  height: barBtnSize,
                  borderRadius: Math.round(barBtnSize / 2),
                  backgroundColor: theme.surfaceContainerHigh,
                  borderColor: theme.outlineVariant,
                  borderWidth: 1,
                },
              ]}
            >
              <Ionicons
                name="settings-outline"
                size={barIconSize}
                color={theme.gold}
              />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
});

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
