import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  APP_LOOK_PROFILES,
  THEME_PRESETS,
  type BorderWidthPreset,
  type ButtonRadiusPreset,
  type ColorBlindMode,
  type CustomColorsConfig,
  type DensityPreset,
  type FontPair,
  type RadiusPreset,
  type SurfaceStyle,
  type TabBarStyle,
  type ThemeConfig,
  type ThemeMode,
  type HorizontalScrollbarStyle,
  type ScrollbarThickness,
  type PillBarLayout,
  type AppBarStyle,
  type StripeThickness,
  type MenuIndicatorStyle,
  type VerticalScrollbarStyle,
  type CardShadowIntensity,
  type InputStylePreset,
  type ButtonStylePreset,
  type PageTransitionPreset,
  type StatusBarMode,
  type QuickMenuPosition,
  type HomeLayoutPreset,
  type HeaderAlignment,
  type CardAccentStyle,
  type IconBadgeStyle,
} from "../lib/theme-engine";
import {
  KenyaStripe,
  androidRipple,
  getThemedCardStyle,
  pressableStyle,
  triggerHaptic,
  useTheme,
} from "../theme";

type SectionKey =
  | "all"
  | "presets"
  | "colors"
  | "typography"
  | "layout"
  | "navigation"
  | "accessibility"
  | "backup";

type CustomColorKey = keyof CustomColorsConfig;

const SECTION_PILLS: {
  key: SectionKey;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { key: "all", label: "All", icon: "apps-outline" },
  { key: "presets", label: "Presets", icon: "color-palette-outline" },
  { key: "colors", label: "Colors", icon: "eyedrop-outline" },
  { key: "typography", label: "Typography", icon: "text-outline" },
  { key: "layout", label: "Layout", icon: "layers-outline" },
  { key: "navigation", label: "Navigation", icon: "compass-outline" },
  { key: "accessibility", label: "Accessibility", icon: "accessibility-outline" },
  { key: "backup", label: "Backup", icon: "code-slash-outline" },
];

const MODE_OPTIONS: {
  value: ThemeMode;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { value: "system", label: "System", icon: "phone-portrait-outline" },
  { value: "light", label: "Light", icon: "sunny-outline" },
  { value: "dark", label: "Dark", icon: "moon-outline" },
];

const COLOR_ROLES: {
  key: CustomColorKey;
  label: string;
  description: string;
  swatches: string[];
}[] = [
  {
    key: "primaryAccent",
    label: "Primary Accent",
    description: "Buttons, highlights & active indicators",
    swatches: ["#C8961E", "#E8BE5A", "#D97706", "#0D9488", "#2563EB", "#BE2126"],
  },
  {
    key: "secondaryAccent",
    label: "Secondary Accent",
    description: "Secondary actions, badges & success states",
    swatches: ["#006B3F", "#2FA463", "#059669", "#1A8BD1", "#7C3AED", "#B87A4B"],
  },
  {
    key: "tertiaryAccent",
    label: "Tertiary Accent",
    description: "Info callouts, tags & data accents",
    swatches: ["#1A8BD1", "#5BBFEA", "#0284C7", "#8B5CF6", "#D97706", "#006B3F"],
  },
  {
    key: "dangerAccent",
    label: "Danger Accent",
    description: "Alerts, destructive actions & warnings",
    swatches: ["#BE2126", "#EF4444", "#DC2626", "#F07171", "#EA580C", "#B91C1C"],
  },
  {
    key: "bgPrimary",
    label: "Background",
    description: "Main screen canvas background",
    swatches: ["#0E0C0A", "#111827", "#090D16", "#FAF7F2", "#FFFFFF", "#F3F4F6"],
  },
  {
    key: "surfaceCard",
    label: "Card Surface",
    description: "Elevated cards, sheets & containers",
    swatches: ["#1E1A17", "#1F2937", "#161B22", "#FFFFFF", "#F6F1E9", "#F8FAFC"],
  },
  {
    key: "textPrimary",
    label: "Primary Text",
    description: "Headings & primary readable copy",
    swatches: ["#F4EFEA", "#FFFFFF", "#E5E7EB", "#1A1108", "#111827", "#0F172A"],
  },
  {
    key: "borderColor",
    label: "Border Color",
    description: "Card outlines, dividers & input strokes",
    swatches: ["#6E665C", "#4B5563", "#334155", "#8C8275", "#CBD5E1", "#D1D5DB"],
  },
  {
    key: "scrollbarColor",
    label: "Horizontal Scrollbar",
    description: "Thumb & indicator color for horizontal scrollbars",
    swatches: ["#C8961E", "#2FA463", "#1A8BD1", "#BE2126", "#E8BE5A", "#F4EFEA"],
  },
];

const FONT_SCALE_OPTIONS: readonly { value: number; label: string }[] = [
  { value: 0.85, label: "85%" },
  { value: 0.92, label: "92%" },
  { value: 1.0, label: "100%" },
  { value: 1.08, label: "108%" },
  { value: 1.18, label: "118%" },
  { value: 1.28, label: "128%" },
];

const FONT_PAIR_OPTIONS: readonly { value: FontPair; label: string }[] = [
  { value: "outfit-inter", label: "Outfit + Inter" },
  { value: "classic-sans", label: "Classic Sans" },
  { value: "editorial-serif", label: "Editorial Serif" },
  { value: "mono-tech", label: "Tech Mono" },
  { value: "geometric", label: "Geometric" },
  { value: "humanist", label: "Humanist" },
  { value: "condensed", label: "Condensed News" },
  { value: "grotesk", label: "Medium Grotesk" },
  { value: "casual", label: "Warm Casual" },
  { value: "cursive", label: "Script / Cursive" },
];

const SCROLLBAR_STYLE_OPTIONS: readonly { value: HorizontalScrollbarStyle; label: string }[] = [
  { value: "hidden", label: "Hidden" },
  { value: "native-indicator", label: "Native Bar" },
  { value: "subtle-bar", label: "Subtle Bar" },
  { value: "accent-track", label: "Accent Track" },
  { value: "glow-rail", label: "Glow Rail" },
  { value: "dots", label: "Progress Dots" },
];

const SCROLLBAR_THICKNESS_OPTIONS: readonly { value: ScrollbarThickness; label: string }[] = [
  { value: "hairline", label: "2px" },
  { value: "thin", label: "3px" },
  { value: "medium", label: "4px" },
  { value: "thick", label: "6px" },
  { value: "bold", label: "8px" },
  { value: "extra", label: "10px" },
];

const PILL_BAR_LAYOUT_OPTIONS: readonly { value: PillBarLayout; label: string }[] = [
  { value: "scroll-with-expand", label: "Scroll + Expand" },
  { value: "always-scroll", label: "Always Scroll" },
  { value: "always-wrap", label: "Always Wrap" },
  { value: "compact-scroll", label: "Compact Scroll" },
  { value: "centered-wrap", label: "Centered Wrap" },
  { value: "grid-pills", label: "Grid Pills" },
];

const APP_BAR_STYLE_OPTIONS: readonly { value: AppBarStyle; label: string }[] = [
  { value: "standard", label: "Standard" },
  { value: "compact", label: "Compact" },
  { value: "tall-editorial", label: "Tall Editorial" },
  { value: "borderless", label: "Borderless" },
  { value: "accent-tinted", label: "Accent Tinted" },
  { value: "floating", label: "Floating" },
];

const STRIPE_THICKNESS_OPTIONS: readonly { value: StripeThickness; label: string }[] = [
  { value: "hidden", label: "Hidden" },
  { value: "hairline", label: "Hairline" },
  { value: "thin", label: "Thin" },
  { value: "medium", label: "Medium" },
  { value: "thick", label: "Thick" },
  { value: "bold", label: "Bold" },
];

const LINE_HEIGHT_OPTIONS: readonly { value: number; label: string }[] = [
  { value: 0.88, label: "Compact" },
  { value: 0.94, label: "Snug" },
  { value: 1.0, label: "Normal" },
  { value: 1.12, label: "Relaxed" },
  { value: 1.22, label: "Airy" },
  { value: 1.32, label: "Editorial" },
];

const LETTER_SPACING_OPTIONS: readonly { value: number; label: string }[] = [
  { value: -0.3, label: "Condensed" },
  { value: -0.1, label: "Tight" },
  { value: 0, label: "Normal" },
  { value: 0.25, label: "Open" },
  { value: 0.5, label: "Wide" },
  { value: 0.8, label: "Tracked" },
];

const SURFACE_STYLE_OPTIONS: readonly { value: SurfaceStyle; label: string }[] =
  [
    { value: "elevated", label: "Elevated" },
    { value: "flat", label: "Flat" },
    { value: "outlined", label: "Outlined" },
    { value: "glass", label: "Glass" },
    { value: "tonal", label: "Tonal Soft" },
    { value: "crisp", label: "Crisp High" },
  ];

const CARD_RADIUS_OPTIONS: readonly { value: RadiusPreset; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "sharp", label: "Sharp" },
  { value: "subtle", label: "Subtle" },
  { value: "rounded", label: "Rounded" },
  { value: "soft", label: "Soft" },
  { value: "pill", label: "Pill" },
];

const BUTTON_RADIUS_OPTIONS: readonly {
  value: ButtonRadiusPreset;
  label: string;
}[] = [
  { value: "square", label: "Square" },
  { value: "sharp", label: "Sharp" },
  { value: "subtle", label: "Subtle" },
  { value: "rounded", label: "Rounded" },
  { value: "soft", label: "Soft" },
  { value: "pill", label: "Pill" },
];

const BORDER_WIDTH_OPTIONS: readonly {
  value: BorderWidthPreset;
  label: string;
}[] = [
  { value: "none", label: "None" },
  { value: "hairline", label: "Hairline" },
  { value: "thin", label: "Thin" },
  { value: "medium", label: "Medium" },
  { value: "thick", label: "Thick" },
  { value: "bold", label: "Bold" },
];

const DENSITY_OPTIONS: readonly { value: DensityPreset; label: string }[] = [
  { value: "ultra-compact", label: "Ultra" },
  { value: "compact", label: "Compact" },
  { value: "comfortable", label: "Default" },
  { value: "balanced", label: "Balanced" },
  { value: "relaxed", label: "Relaxed" },
  { value: "spacious", label: "Spacious" },
];

const TAB_BAR_STYLE_OPTIONS: readonly { value: TabBarStyle; label: string }[] =
  [
    { value: "classic", label: "Classic" },
    { value: "floating-pill", label: "Floating Pill" },
    { value: "top-accent", label: "Top Accent" },
    { value: "segmented", label: "Segmented" },
    { value: "docked-cards", label: "Docked Cards" },
    { value: "compact", label: "Compact" },
    { value: "minimal", label: "Minimal" },
  ];

const MENU_INDICATOR_OPTIONS: readonly { value: MenuIndicatorStyle; label: string }[] = [
  { value: "pill", label: "M3 Pill" },
  { value: "underline", label: "Underline" },
  { value: "dot", label: "Dot" },
  { value: "filled-box", label: "Filled Box" },
  { value: "glow", label: "Glow" },
  { value: "outline", label: "Outline" },
];

const VERT_SCROLLBAR_OPTIONS: readonly { value: VerticalScrollbarStyle; label: string }[] = [
  { value: "hidden", label: "Hidden" },
  { value: "native", label: "Native" },
  { value: "always-visible", label: "Always Show" },
];

const SHADOW_OPTIONS: readonly { value: CardShadowIntensity; label: string }[] = [
  { value: "none", label: "None" },
  { value: "subtle", label: "Subtle" },
  { value: "medium", label: "Medium" },
  { value: "strong", label: "Strong" },
  { value: "glow", label: "Accent Glow" },
  { value: "crisp-3d", label: "Crisp 3D" },
];

const INPUT_STYLE_OPTIONS: readonly { value: InputStylePreset; label: string }[] = [
  { value: "outlined", label: "Outlined" },
  { value: "filled", label: "Filled" },
  { value: "underlined", label: "Underlined" },
  { value: "pill", label: "Pill" },
  { value: "minimal", label: "Minimal" },
  { value: "accent", label: "Accent" },
];

const BUTTON_STYLE_OPTIONS: readonly { value: ButtonStylePreset; label: string }[] = [
  { value: "filled", label: "Filled" },
  { value: "tinted", label: "Tinted" },
  { value: "outlined", label: "Outlined" },
  { value: "elevated", label: "Elevated" },
  { value: "pill-glow", label: "Glow" },
  { value: "flat", label: "Flat" },
];

const TRANSITION_OPTIONS: readonly { value: PageTransitionPreset; label: string }[] = [
  { value: "slide", label: "Slide" },
  { value: "fade", label: "Fade" },
  { value: "bottom-sheet", label: "Bottom Sheet" },
  { value: "fast", label: "Fast Slide" },
  { value: "none", label: "Instant" },
  { value: "default", label: "OS Default" },
];

const STATUS_BAR_OPTIONS: readonly { value: StatusBarMode; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Light Icons" },
  { value: "dark", label: "Dark Icons" },
];

const QUICK_MENU_OPTIONS: readonly { value: QuickMenuPosition; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "bottom-right", label: "Bottom Right" },
  { value: "bottom-left", label: "Bottom Left" },
];

const HOME_LAYOUT_OPTIONS: readonly { value: HomeLayoutPreset; label: string }[] = [
  { value: "classic", label: "Classic" },
  { value: "bento-grid", label: "Bento Grid" },
  { value: "compact-list", label: "Compact List" },
  { value: "editorial-cards", label: "Editorial Cards" },
  { value: "minimal-rows", label: "Minimal Rows" },
  { value: "large-tiles", label: "Large Tiles" },
];

const HEADER_ALIGNMENT_OPTIONS: readonly { value: HeaderAlignment; label: string }[] = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
];

const CARD_ACCENT_OPTIONS: readonly { value: CardAccentStyle; label: string }[] = [
  { value: "none", label: "None" },
  { value: "left-bar", label: "Left Bar" },
  { value: "top-bar", label: "Top Bar" },
  { value: "bottom-bar", label: "Bottom Bar" },
  { value: "tinted-border", label: "Tinted Border" },
  { value: "glow-edge", label: "Glow Edge" },
];

const ICON_BADGE_OPTIONS: readonly { value: IconBadgeStyle; label: string }[] = [
  { value: "outline", label: "Outline" },
  { value: "filled", label: "Filled" },
  { value: "soft-circle", label: "Soft Circle" },
  { value: "soft-square", label: "Soft Square" },
  { value: "accent-solid", label: "Accent Solid" },
  { value: "minimal", label: "Minimal" },
];

const COLOR_BLIND_OPTIONS: readonly { value: ColorBlindMode; label: string }[] =
  [
    { value: "none", label: "None" },
    { value: "deuteranopia", label: "Deuteranopia" },
    { value: "protanopia", label: "Protanopia" },
    { value: "tritanopia", label: "Tritanopia" },
  ];

const HEX_REGEX = /^#[0-9A-Fa-f]{6}$/;

function normalizeHexInput(raw: string): string {
  const cleaned = raw.trim();
  if (!cleaned) return "";
  return cleaned.startsWith("#")
    ? cleaned.toUpperCase()
    : `#${cleaned.toUpperCase()}`;
}

export function ThemeSettingsView() {
  const {
    theme,
    isDark,
    toggleTheme,
    setThemeMode,
    themeConfig,
    resolvedFonts,
    themeMetrics,
    updateThemeConfig,
    updateCustomColor,
    applyThemePreset,
    applyAppLookProfile,
    resetThemeConfig,
    importThemeJson,
  } = useTheme();

  const [activeSection, setActiveSection] = useState<SectionKey>("all");
  const [presetModeFilter, setPresetModeFilter] = useState<"all" | "dark" | "light">("all");
  const [hexDrafts, setHexDrafts] = useState<Record<string, string>>({});
  const [importInput, setImportInput] = useState<string>("");
  const [importStatus, setImportStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const next: Record<string, string> = {};
    const customColors = themeConfig?.customColors ?? {};
    for (const role of COLOR_ROLES) {
      next[role.key] = customColors[role.key] ?? "";
    }
    setHexDrafts(next);
  }, [themeConfig?.customColors]);

  const exportedJson = useMemo(
    () => JSON.stringify(themeConfig ?? {}, null, 2),
    [themeConfig]
  );

  const fontScale = themeMetrics?.fontScale ?? themeConfig?.fontScale ?? 1;
  const lineHeightScale =
    themeMetrics?.lineHeightScale ?? themeConfig?.lineHeightScale ?? 1;
  const letterSpacingOffset =
    themeMetrics?.letterSpacingOffset ?? themeConfig?.letterSpacingOffset ?? 0;
  const previewCardRadius = themeMetrics?.cardRadiusPx ?? 16;
  const previewButtonRadius = themeMetrics?.buttonRadiusPx ?? 12;
  const previewBorderWidth = themeMetrics?.borderWidthPx ?? 1;
  const spacingScale = themeMetrics?.spacingScale ?? 1;
  const previewPadding = Math.round(15 * spacingScale);
  const previewElevation = themeMetrics?.elevationPx ?? 0;
  const previewOpacity = themeMetrics?.cardOpacity ?? 1;

  const previewHeadingFont =
    themeConfig?.fontPair === "editorial-serif"
      ? Platform.OS === "ios"
        ? "Georgia"
        : "serif"
      : themeConfig?.fontPair === "mono-tech"
      ? Platform.OS === "ios"
        ? "Menlo"
        : "monospace"
      : themeConfig?.fontPair === "classic-sans"
      ? Platform.OS === "ios"
        ? "System"
        : "sans-serif"
      : "Outfit_700Bold";

  const previewBodyFont =
    themeConfig?.fontPair === "editorial-serif"
      ? Platform.OS === "ios"
        ? "Georgia"
        : "serif"
      : themeConfig?.fontPair === "mono-tech"
      ? Platform.OS === "ios"
        ? "Menlo"
        : "monospace"
      : themeConfig?.fontPair === "classic-sans"
      ? Platform.OS === "ios"
        ? "System"
        : "sans-serif"
      : "Inter_400Regular";

  const doHaptic = useCallback(() => {
    if (themeConfig?.hapticsEnabled !== false) {
      triggerHaptic(8);
    }
  }, [themeConfig?.hapticsEnabled]);

  const handleModeSelect = useCallback(
    (mode: ThemeMode) => {
      doHaptic();
      updateThemeConfig({ mode });
      if (mode === "light" || mode === "dark") {
        setThemeMode(mode);
      }
    },
    [doHaptic, setThemeMode, updateThemeConfig]
  );

  const handleHexChange = useCallback(
    (key: CustomColorKey, raw: string) => {
      const normalized = normalizeHexInput(raw);
      setHexDrafts((prev) => ({ ...prev, [key]: normalized }));
      if (HEX_REGEX.test(normalized)) {
        updateCustomColor(key, normalized);
      }
    },
    [updateCustomColor]
  );

  const handleShareExport = useCallback(async () => {
    doHaptic();
    try {
      await Share.share({
        title: "KenyaHub Theme Configuration",
        message: exportedJson,
      });
    } catch {
      // Ignore user cancel
    }
  }, [doHaptic, exportedJson]);

  const handleApplyImport = useCallback(() => {
    doHaptic();
    const trimmed = importInput.trim();
    if (!trimmed) {
      setImportStatus({
        type: "error",
        message: "Paste a valid KenyaHub JSON theme configuration first.",
      });
      return;
    }
    const ok = importThemeJson(trimmed);
    if (ok) {
      setImportStatus({
        type: "success",
        message: "Theme configuration imported and applied.",
      });
      setImportInput("");
    } else {
      setImportStatus({
        type: "error",
        message: "Invalid JSON theme format. Check syntax and try again.",
      });
    }
  }, [doHaptic, importInput, importThemeJson]);

  const handleConfirmReset = useCallback(() => {
    doHaptic();
    Alert.alert(
      "Reset Theme Settings",
      "Restore all colors, typography, layout, and accessibility settings to KenyaHub defaults?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset All",
          style: "destructive",
          onPress: () => {
            resetThemeConfig();
            setImportStatus(null);
          },
        },
      ]
    );
  }, [doHaptic, resetThemeConfig]);

  const showSection = (key: Exclude<SectionKey, "all">) =>
    activeSection === "all" || activeSection === key;

  const currentMode: ThemeMode =
    themeConfig?.mode ?? (isDark ? "dark" : "light");

  const surfaceBg =
    themeConfig?.surfaceStyle === "flat"
      ? theme.bgSecondary
      : theme.surfaceContainer;

  const surfaceBorder = themeConfig?.highContrastBorders
    ? theme.textPrimary
    : theme.outlineVariant;

  const showKenyaStripe = themeConfig?.showKenyaStripe !== false;

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: theme.bgPrimary }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
      keyboardShouldPersistTaps="handled"
    >
      {/* 1. Night Mode Card at Top */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.surfaceContainer,
            borderColor: theme.outlineVariant,
          },
        ]}
      >
        <View style={styles.nightHeaderRow}>
          <View style={styles.nightTitleWrap}>
            <View
              style={[
                styles.iconBadge,
                { backgroundColor: theme.primaryContainer },
              ]}
            >
              <Ionicons
                name={isDark ? "moon" : "sunny"}
                size={18}
                color={theme.gold}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                Night Mode
              </Text>
              <Text style={[styles.cardSubtitle, { color: theme.textSecondary }]}>
                {isDark ? "Dark surface active" : "Warm daylight surface active"}
              </Text>
            </View>
          </View>
          <Switch
            testID="theme-toggle"
            value={isDark}
            onValueChange={() => {
              doHaptic();
              toggleTheme();
            }}
            trackColor={{
              false: theme.surfaceContainerHighest,
              true: theme.gold,
            }}
            thumbColor={isDark ? theme.kenyaBlack : theme.kenyaWhite}
            accessibilityLabel="Toggle Night Mode"
          />
        </View>

        <View
          style={[
            styles.segmentedRow,
            {
              backgroundColor: theme.surfaceContainerLow,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          {MODE_OPTIONS.map((opt) => {
            const active = currentMode === opt.value;
            return (
              <Pressable
                key={opt.value}
                onPress={() => handleModeSelect(opt.value)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle([
                  styles.segmentedBtn,
                  active && {
                    backgroundColor: theme.primaryContainer,
                    borderColor: theme.gold,
                    borderWidth: 1,
                  },
                ])}
              >
                <Ionicons
                  name={opt.icon}
                  size={15}
                  color={active ? theme.gold : theme.textSecondary}
                />
                <Text
                  style={[
                    styles.segmentedLabel,
                    { color: active ? theme.gold : theme.textSecondary },
                  ]}
                >
                  {opt.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* 2. Live Interactive Preview Card */}
      <View style={styles.sectionBlock}>
        <View style={styles.sectionHeaderRow}>
          <Feather name="eye" size={14} color={theme.gold} />
          <Text style={[styles.sectionEyebrow, { color: theme.textSecondary }]}>
            LIVE INTERACTIVE PREVIEW
          </Text>
        </View>

        <View
          style={[
            styles.previewOuter,
            getThemedCardStyle(theme, themeConfig, themeMetrics),
            {
              opacity: previewOpacity,
              overflow: "hidden",
            },
          ]}
        >
          {showKenyaStripe && <KenyaStripe />}
          <View style={{ padding: previewPadding, gap: Math.round(10 * spacingScale) }}>
            <View style={styles.previewTopRow}>
              <View
                style={[
                  styles.previewBadge,
                  {
                    backgroundColor: theme.secondaryContainer,
                    borderRadius: previewButtonRadius,
                  },
                ]}
              >
                <Ionicons
                  name="sparkles"
                  size={12}
                  color={theme.onSecondaryContainer}
                />
                <Text
                  style={[
                    styles.previewBadgeText,
                    {
                      color: theme.onSecondaryContainer,
                      fontFamily: previewBodyFont,
                      fontSize: Math.round(11 * fontScale),
                      letterSpacing: letterSpacingOffset,
                    },
                  ]}
                >
                  Nairobi · Live Theme
                </Text>
              </View>
              <Text
                style={{
                  color: theme.textMuted,
                  fontFamily: previewBodyFont,
                  fontSize: Math.round(11 * fontScale),
                }}
              >
                {Math.round(fontScale * 100)}%
              </Text>
            </View>

            <Text
              style={{
                color: theme.textPrimary,
                fontFamily: previewHeadingFont,
                fontSize: Math.round(18 * fontScale),
                lineHeight: Math.round(18 * fontScale * 1.35 * lineHeightScale),
                letterSpacing: letterSpacingOffset,
                includeFontPadding: false,
              }}
            >
              KenyaHub Civic & Utility Suite
            </Text>

            <Text
              style={{
                color: theme.textSecondary,
                fontFamily: previewBodyFont,
                fontSize: Math.round(13.5 * fontScale),
                lineHeight: Math.round(13.5 * fontScale * 1.45 * lineHeightScale),
                letterSpacing: letterSpacingOffset,
                includeFontPadding: false,
              }}
            >
              Previewing live colors, typography scale, corner radius, borders,
              and layout density across cards and actions.
            </Text>

            <View style={styles.previewActionsRow}>
              <Pressable
                onPress={doHaptic}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle([
                  styles.previewBtn,
                  {
                    backgroundColor: theme.gold,
                    borderRadius: previewButtonRadius,
                  },
                ])}
              >
                <Text
                  style={[
                    styles.previewBtnText,
                    {
                      color: theme.kenyaBlack,
                      fontFamily: previewHeadingFont,
                      fontSize: Math.round(13 * fontScale),
                    },
                  ]}
                >
                  Primary Action
                </Text>
              </Pressable>

              <Pressable
                onPress={doHaptic}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle([
                  styles.previewBtn,
                  {
                    backgroundColor: theme.secondaryContainer,
                    borderColor: theme.kenyaGreenLight,
                    borderWidth: 1,
                    borderRadius: previewButtonRadius,
                  },
                ])}
              >
                <Text
                  style={[
                    styles.previewBtnText,
                    {
                      color: theme.onSecondaryContainer,
                      fontFamily: previewBodyFont,
                      fontSize: Math.round(13 * fontScale),
                    },
                  ]}
                >
                  Secondary
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* 2b. One-Tap Complete App Makeovers */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.surfaceContainer,
            borderColor: theme.outlineVariant,
          },
        ]}
      >
        <SectionTitle
          icon="sparkles-outline"
          title="One-Tap Complete App Makeovers"
          subtitle="Transform colors, layout, typography, tab bar & chrome in one tap — or restore KenyaHub Classic"
          theme={theme}
        />
        <View style={styles.makeoversGrid}>
          {APP_LOOK_PROFILES.map((profile) => {
            const isActive =
              themeConfig?.presetId === profile.config.presetId &&
              themeConfig?.tabBarStyle === profile.config.tabBarStyle &&
              themeConfig?.homeLayout === profile.config.homeLayout &&
              themeConfig?.fontPair === profile.config.fontPair;
            return (
              <Pressable
                key={profile.id}
                onPress={() => {
                  doHaptic();
                  applyAppLookProfile(profile.id);
                }}
                accessibilityRole="button"
                accessibilityState={{ selected: isActive }}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle([
                  styles.makeoverCard,
                  {
                    backgroundColor: isActive
                      ? theme.primaryContainer
                      : theme.surfaceContainerLow,
                    borderColor: isActive ? theme.gold : theme.outlineVariant,
                    borderWidth: isActive ? 1.5 : 1,
                  },
                ])}
              >
                <View style={styles.presetTopRow}>
                  <View
                    style={[
                      styles.makeoverIconWrap,
                      {
                        backgroundColor: isActive
                          ? theme.gold
                          : theme.surfaceContainerHigh,
                      },
                    ]}
                  >
                    <Ionicons
                      name={profile.icon as keyof typeof Ionicons.glyphMap}
                      size={15}
                      color={isActive ? theme.kenyaBlack : theme.gold}
                    />
                  </View>
                  <View style={styles.swatchDotsRow}>
                    {profile.swatches.map((hex, idx) => (
                      <View
                        key={`${profile.id}-swatch-${idx}`}
                        style={[
                          styles.swatchDotTiny,
                          {
                            backgroundColor: hex,
                            borderColor: theme.outlineVariant,
                          },
                        ]}
                      />
                    ))}
                  </View>
                </View>
                <View style={styles.makeoverNameRow}>
                  <Text
                    style={[styles.presetName, { color: theme.textPrimary, flex: 1 }]}
                    numberOfLines={1}
                  >
                    {profile.name}
                  </Text>
                  {isActive && (
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color={theme.gold}
                    />
                  )}
                </View>
                <Text
                  style={[
                    styles.presetTagline,
                    { color: theme.textSecondary },
                  ]}
                  numberOfLines={2}
                >
                  {profile.tagline}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* 3. Section Navigation Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={themeConfig?.horizontalScrollbarStyle === "native-indicator"}
        contentContainerStyle={styles.navPillsRow}
      >
        {SECTION_PILLS.map((pill) => {
          const active = activeSection === pill.key;
          return (
            <Pressable
              key={pill.key}
              onPress={() => {
                doHaptic();
                setActiveSection(pill.key);
              }}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle([
                styles.navPill,
                {
                  backgroundColor: active
                    ? theme.gold
                    : theme.surfaceContainerHigh,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                },
              ])}
            >
              <Ionicons
                name={pill.icon}
                size={14}
                color={active ? theme.kenyaBlack : theme.textSecondary}
              />
              <Text
                style={[
                  styles.navPillLabel,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {pill.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Category 1: Presets (12 Themes) */}
      {showSection("presets") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="color-palette-outline"
            title="Theme Presets"
            subtitle="12 curated themes split across Dark (6) & Light (6)"
            theme={theme}
          />
          <View style={{ flexDirection: "row", gap: 6, marginBottom: 10 }}>
            {(
              [
                { id: "all", label: "All (12)" },
                { id: "dark", label: "Dark Themes (6)" },
                { id: "light", label: "Light Themes (6)" },
              ] as const
            ).map((f) => {
              const act = presetModeFilter === f.id;
              return (
                <Pressable
                  key={f.id}
                  onPress={() => {
                    doHaptic();
                    setPresetModeFilter(f.id);
                  }}
                  style={{
                    flex: 1,
                    paddingVertical: 7,
                    borderRadius: 10,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: act ? theme.gold : theme.outlineVariant,
                    backgroundColor: act ? theme.primaryContainer : theme.surfaceContainerLow,
                  }}
                >
                  <Text style={{ fontFamily: "Inter_700Bold", fontSize: 11, color: act ? theme.gold : theme.textSecondary }}>
                    {f.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.presetsGrid}>
            {THEME_PRESETS.filter((p) => presetModeFilter === "all" || p.recommendedMode === presetModeFilter).map((preset) => {
              const active = themeConfig?.presetId === preset.id;
              return (
                <Pressable
                  key={preset.id}
                  onPress={() => {
                    doHaptic();
                    applyThemePreset(preset.id, preset.recommendedMode);
                  }}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle([
                    styles.presetCard,
                    {
                      backgroundColor: active
                        ? theme.primaryContainer
                        : theme.surfaceContainerLow,
                      borderColor: active ? theme.gold : theme.outlineVariant,
                    },
                  ])}
                >
                  <View style={styles.presetTopRow}>
                    <View style={styles.swatchDotsRow}>
                      {preset.swatches.map((hex, idx) => (
                        <View
                          key={`${preset.id}-dot-${idx}`}
                          style={[
                            styles.swatchDotSmall,
                            {
                              backgroundColor: hex,
                              borderColor: theme.outlineVariant,
                            },
                          ]}
                        />
                      ))}
                    </View>
                    {active && (
                      <Ionicons
                        name="checkmark-circle"
                        size={17}
                        color={theme.gold}
                      />
                    )}
                  </View>
                  <Text
                    style={[styles.presetName, { color: theme.textPrimary }]}
                    numberOfLines={1}
                  >
                    {preset.name}
                  </Text>
                  <Text
                    style={[
                      styles.presetTagline,
                      { color: theme.textSecondary },
                    ]}
                    numberOfLines={2}
                  >
                    {preset.tagline}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {/* Category 2: Custom Colors */}
      {showSection("colors") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="eyedrop-outline"
            title="Custom Colors"
            subtitle="Override individual palette roles or enter a #RRGGBB hex code"
            theme={theme}
          />
          <View style={styles.stackList}>
            {COLOR_ROLES.map((role) => {
              const activeHex = themeConfig?.customColors?.[role.key];
              const draft = hexDrafts[role.key] ?? "";
              const isDraftValid = draft === "" || HEX_REGEX.test(draft);

              return (
                <View
                  key={role.key}
                  style={[
                    styles.subCard,
                    {
                      backgroundColor: theme.surfaceContainerLow,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <View style={styles.colorRoleHeader}>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={[
                          styles.optionGroupTitle,
                          { color: theme.textPrimary },
                        ]}
                      >
                        {role.label}
                      </Text>
                      <Text
                        style={[
                          styles.optionGroupDesc,
                          { color: theme.textSecondary },
                        ]}
                      >
                        {role.description}
                      </Text>
                    </View>
                    {activeHex && (
                      <View
                        style={[
                          styles.activeColorPreview,
                          {
                            backgroundColor: activeHex,
                            borderColor: theme.outline,
                          },
                        ]}
                      />
                    )}
                  </View>

                  <View style={styles.swatchesRow}>
                    {role.swatches.map((hex) => {
                      const selected =
                        activeHex?.toUpperCase() === hex.toUpperCase();
                      return (
                        <Pressable
                          key={`${role.key}-${hex}`}
                          onPress={() => {
                            doHaptic();
                            setHexDrafts((prev) => ({
                              ...prev,
                              [role.key]: hex,
                            }));
                            updateCustomColor(role.key, hex);
                          }}
                          accessibilityRole="button"
                          accessibilityLabel={`Set ${role.label} to ${hex}`}
                          style={[
                            styles.swatchCircle,
                            {
                              backgroundColor: hex,
                              borderColor: selected
                                ? theme.gold
                                : theme.outlineVariant,
                              borderWidth: selected ? 2.5 : 1,
                            },
                          ]}
                        >
                          {selected && (
                            <Ionicons
                              name="checkmark"
                              size={13}
                              color={
                                hex.toUpperCase() === "#FFFFFF" ||
                                hex.toUpperCase() === "#FAF7F2" ||
                                hex.toUpperCase() === "#F4EFEA"
                                  ? "#1A1108"
                                  : "#FFFFFF"
                              }
                            />
                          )}
                        </Pressable>
                      );
                    })}
                  </View>

                  <View style={styles.hexInputRow}>
                    <TextInput
                      value={draft}
                      onChangeText={(text) => handleHexChange(role.key, text)}
                      placeholder="#RRGGBB"
                      placeholderTextColor={theme.textMuted}
                      autoCapitalize="characters"
                      autoCorrect={false}
                      maxLength={7}
                      style={[
                        styles.hexInput,
                        {
                          color: theme.textPrimary,
                          backgroundColor: theme.surfaceContainer,
                          borderColor: isDraftValid
                            ? theme.outlineVariant
                            : theme.kenyaRed,
                        },
                      ]}
                    />
                    <Pressable
                      onPress={() => {
                        doHaptic();
                        setHexDrafts((prev) => ({ ...prev, [role.key]: "" }));
                        updateCustomColor(role.key, undefined);
                      }}
                      accessibilityRole="button"
                      android_ripple={androidRipple(theme.rippleColor)}
                      style={pressableStyle([
                        styles.clearBtn,
                        {
                          backgroundColor: theme.surfaceContainerHigh,
                          borderColor: theme.outlineVariant,
                        },
                      ])}
                    >
                      <Text
                        style={[
                          styles.clearBtnText,
                          { color: theme.textPrimary },
                        ]}
                      >
                        Clear
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}

      {/* Category 3: Typography & Text */}
      {showSection("typography") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="text-outline"
            title="Typography & Text"
            subtitle="Adjust text size, font pairing, line height & letter spacing"
            theme={theme}
          />

          <OptionPillGroup
            label="Font Scale"
            options={FONT_SCALE_OPTIONS}
            selectedValue={themeConfig?.fontScale ?? 1.0}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ fontScale: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Font Pairing"
            options={FONT_PAIR_OPTIONS}
            selectedValue={themeConfig?.fontPair ?? "outfit-inter"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ fontPair: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Line Height"
            options={LINE_HEIGHT_OPTIONS}
            selectedValue={themeConfig?.lineHeightScale ?? 1.0}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ lineHeightScale: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Letter Spacing"
            options={LETTER_SPACING_OPTIONS}
            selectedValue={themeConfig?.letterSpacingOffset ?? 0}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ letterSpacingOffset: val });
            }}
            theme={theme}
          />
        </View>
      )}

      {/* Category 4: Surfaces, Borders & Layout */}
      {showSection("layout") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="layers-outline"
            title="Surfaces, Borders & Layout"
            subtitle="Customize card depth, corner radii, strokes & spacing"
            theme={theme}
          />

          <OptionPillGroup
            label="Surface Style"
            options={SURFACE_STYLE_OPTIONS}
            selectedValue={themeConfig?.surfaceStyle ?? "elevated"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ surfaceStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Card Corner Radius"
            options={CARD_RADIUS_OPTIONS}
            selectedValue={themeConfig?.cardRadius ?? "rounded"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ cardRadius: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Button Radius"
            options={BUTTON_RADIUS_OPTIONS}
            selectedValue={themeConfig?.buttonRadius ?? "rounded"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ buttonRadius: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Border Thickness"
            options={BORDER_WIDTH_OPTIONS}
            selectedValue={themeConfig?.borderWidth ?? "thin"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ borderWidth: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Card Shadow & Depth"
            options={SHADOW_OPTIONS}
            selectedValue={themeConfig?.cardShadowIntensity ?? "subtle"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ cardShadowIntensity: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Input Field Style"
            options={INPUT_STYLE_OPTIONS}
            selectedValue={themeConfig?.inputStyle ?? "outlined"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ inputStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Button Style"
            options={BUTTON_STYLE_OPTIONS}
            selectedValue={themeConfig?.buttonStyle ?? "filled"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ buttonStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Home & Grid Layout"
            options={HOME_LAYOUT_OPTIONS}
            selectedValue={themeConfig?.homeLayout ?? "classic"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ homeLayout: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Card Accent Strip"
            options={CARD_ACCENT_OPTIONS}
            selectedValue={themeConfig?.cardAccentStyle ?? "none"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ cardAccentStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Icon Badge Style"
            options={ICON_BADGE_OPTIONS}
            selectedValue={themeConfig?.iconBadgeStyle ?? "soft-circle"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ iconBadgeStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Layout Density"
            options={DENSITY_OPTIONS}
            selectedValue={themeConfig?.density ?? "comfortable"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ density: val });
            }}
            theme={theme}
          />
        </View>
      )}

      {/* Category 5: Navigation & Chrome */}
      {showSection("navigation") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="compass-outline"
            title="Navigation & Chrome"
            subtitle="Configure flag stripe & bottom navigation appearance"
            theme={theme}
          />

          <ToggleRow
            label="Kenyan Flag Stripe"
            description="Show the subtle Black · Red · Green accent stripe"
            value={themeConfig?.showKenyaStripe !== false}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ showKenyaStripe: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Bottom Tab Bar Style"
            options={TAB_BAR_STYLE_OPTIONS}
            selectedValue={themeConfig?.tabBarStyle ?? "classic"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ tabBarStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Active Menu Indicator"
            options={MENU_INDICATOR_OPTIONS}
            selectedValue={themeConfig?.menuIndicatorStyle ?? "pill"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ menuIndicatorStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Floating Quick-Jump Menu"
            options={QUICK_MENU_OPTIONS}
            selectedValue={themeConfig?.quickMenuPosition ?? "off"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ quickMenuPosition: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Status Bar Icons"
            options={STATUS_BAR_OPTIONS}
            selectedValue={themeConfig?.statusBarMode ?? "auto"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ statusBarMode: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Screen Transition Animation"
            options={TRANSITION_OPTIONS}
            selectedValue={themeConfig?.pageTransition ?? "slide"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ pageTransition: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Vertical Scrollbar"
            options={VERT_SCROLLBAR_OPTIONS}
            selectedValue={themeConfig?.verticalScrollbarStyle ?? "hidden"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ verticalScrollbarStyle: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="Tab Bar Labels"
            description="Display text labels beneath bottom tab icons"
            value={themeConfig?.tabBarLabels !== false}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ tabBarLabels: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Flag Stripe Thickness"
            options={STRIPE_THICKNESS_OPTIONS}
            selectedValue={themeConfig?.stripeThickness ?? "thin"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ stripeThickness: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Top App Bar Style"
            options={APP_BAR_STYLE_OPTIONS}
            selectedValue={themeConfig?.appBarStyle ?? "standard"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ appBarStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Header Alignment"
            options={HEADER_ALIGNMENT_OPTIONS}
            selectedValue={themeConfig?.headerAlignment ?? "left"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ headerAlignment: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Horizontal Scrollbar Style"
            options={SCROLLBAR_STYLE_OPTIONS}
            selectedValue={themeConfig?.horizontalScrollbarStyle ?? "subtle-bar"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ horizontalScrollbarStyle: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Horizontal Scrollbar Thickness"
            options={SCROLLBAR_THICKNESS_OPTIONS}
            selectedValue={themeConfig?.horizontalScrollbarThickness ?? "thin"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ horizontalScrollbarThickness: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="Scrollbar Background Track"
            description="Show subtle rail track behind horizontal scrollbar thumb"
            value={themeConfig?.scrollbarTrackVisible !== false}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ scrollbarTrackVisible: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Pill Bar Layout"
            options={PILL_BAR_LAYOUT_OPTIONS}
            selectedValue={themeConfig?.pillBarLayout ?? "scroll-with-expand"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ pillBarLayout: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Pill Corner Shape"
            options={BUTTON_RADIUS_OPTIONS}
            selectedValue={themeConfig?.pillShape ?? "pill"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ pillShape: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="Edge Fade Shadow"
            description="Soft feather gradient at left/right edges of horizontal bars"
            value={themeConfig?.edgeFadeEnabled !== false}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ edgeFadeEnabled: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="Elastic Scroll Bounce"
            description="Spring bounce feedback at horizontal scroll edges"
            value={themeConfig?.scrollBounceEnabled !== false}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ scrollBounceEnabled: val });
            }}
            theme={theme}
          />
        </View>
      )}

      {/* Category 6: Accessibility & Feel */}
      {showSection("accessibility") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="accessibility-outline"
            title="Accessibility & Feel"
            subtitle="Haptics, motion sensitivity, contrast & color-vision support"
            theme={theme}
          />

          <ToggleRow
            label="Haptic Feedback"
            description="Subtle tactile vibration on taps and toggles"
            value={themeConfig?.hapticsEnabled !== false}
            onValueChange={(val) => {
              if (val) triggerHaptic(8);
              updateThemeConfig({ hapticsEnabled: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="Reduce Motion"
            description="Minimize screen transitions and animated effects"
            value={Boolean(themeConfig?.reduceMotion)}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ reduceMotion: val });
            }}
            theme={theme}
          />

          <ToggleRow
            label="High-Contrast Borders"
            description="Strengthen card and button outlines for clarity"
            value={Boolean(themeConfig?.highContrastBorders)}
            onValueChange={(val) => {
              doHaptic();
              updateThemeConfig({ highContrastBorders: val });
            }}
            theme={theme}
          />

          <OptionPillGroup
            label="Color-Blind Safe Palette"
            options={COLOR_BLIND_OPTIONS}
            selectedValue={themeConfig?.colorBlindMode ?? "none"}
            onSelect={(val) => {
              doHaptic();
              updateThemeConfig({ colorBlindMode: val });
            }}
            theme={theme}
          />
        </View>
      )}

      {/* Category 7: Backup & Reset */}
      {showSection("backup") && (
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.surfaceContainer,
              borderColor: theme.outlineVariant,
            },
          ]}
        >
          <SectionTitle
            icon="code-slash-outline"
            title="Backup & Reset"
            subtitle="Export, share, import JSON theme codes or restore defaults"
            theme={theme}
          />

          <View style={styles.backupGroup}>
            <View style={styles.backupHeaderRow}>
              <Text
                style={[styles.optionGroupTitle, { color: theme.textPrimary }]}
              >
                Export Theme JSON
              </Text>
              <Pressable
                onPress={handleShareExport}
                accessibilityRole="button"
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle([
                  styles.smallActionBtn,
                  {
                    backgroundColor: theme.primaryContainer,
                    borderColor: theme.gold,
                  },
                ])}
              >
                <Ionicons name="share-outline" size={14} color={theme.gold} />
                <Text style={[styles.smallActionText, { color: theme.gold }]}>
                  Share / Copy
                </Text>
              </Pressable>
            </View>
            <TextInput
              value={exportedJson}
              editable={false}
              multiline
              selectTextOnFocus
              style={[
                styles.jsonBox,
                {
                  color: theme.textSecondary,
                  backgroundColor: theme.surfaceContainerLow,
                  borderColor: theme.outlineVariant,
                },
              ]}
            />
          </View>

          <View style={styles.backupGroup}>
            <Text
              style={[styles.optionGroupTitle, { color: theme.textPrimary }]}
            >
              Paste & Apply JSON Theme Code
            </Text>
            <TextInput
              value={importInput}
              onChangeText={(text) => {
                setImportInput(text);
                if (importStatus) setImportStatus(null);
              }}
              placeholder='{"mode":"dark","presetId":"kenyan-heritage",...}'
              placeholderTextColor={theme.textMuted}
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.jsonBox,
                {
                  color: theme.textPrimary,
                  backgroundColor: theme.surfaceContainerLow,
                  borderColor: theme.outlineVariant,
                },
              ]}
            />
            {importStatus && (
              <Text
                style={[
                  styles.importStatusText,
                  {
                    color:
                      importStatus.type === "success"
                        ? theme.kenyaGreenLight
                        : theme.kenyaRedLight,
                  },
                ]}
              >
                {importStatus.message}
              </Text>
            )}
            <Pressable
              onPress={handleApplyImport}
              accessibilityRole="button"
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle([
                styles.fullBtn,
                { backgroundColor: theme.gold },
              ])}
            >
              <Ionicons
                name="checkmark-done-outline"
                size={16}
                color={theme.kenyaBlack}
              />
              <Text style={[styles.fullBtnText, { color: theme.kenyaBlack }]}>
                Apply JSON Theme
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleConfirmReset}
            accessibilityRole="button"
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle([
              styles.resetBtn,
              {
                backgroundColor: theme.surfaceContainerLow,
                borderColor: theme.kenyaRed,
              },
            ])}
          >
            <Ionicons
              name="refresh-outline"
              size={16}
              color={theme.kenyaRedLight}
            />
            <Text style={[styles.resetBtnText, { color: theme.kenyaRedLight }]}>
              Reset All to Default
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

function SectionTitle({
  icon,
  title,
  subtitle,
  theme,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  return (
    <View style={styles.sectionTitleRow}>
      <View
        style={[
          styles.sectionIconWrap,
          { backgroundColor: theme.surfaceContainerHigh },
        ]}
      >
        <Ionicons name={icon} size={17} color={theme.gold} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.cardSubtitle, { color: theme.textSecondary }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

function OptionPillGroup<T extends string | number>({
  label,
  options,
  selectedValue,
  onSelect,
  theme,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  selectedValue: T;
  onSelect: (value: T) => void;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  return (
    <View style={styles.optionGroup}>
      <Text style={[styles.optionGroupTitle, { color: theme.textPrimary }]}>
        {label}
      </Text>
      <View style={styles.pillsWrap}>
        {options.map((opt) => {
          const active = opt.value === selectedValue;
          return (
            <Pressable
              key={String(opt.value)}
              onPress={() => onSelect(opt.value)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle([
                styles.optionPill,
                {
                  backgroundColor: active
                    ? theme.primaryContainer
                    : theme.surfaceContainerLow,
                  borderColor: active ? theme.gold : theme.outlineVariant,
                },
              ])}
            >
              <Text
                style={[
                  styles.optionPillText,
                  { color: active ? theme.gold : theme.textSecondary },
                ]}
              >
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function ToggleRow({
  label,
  description,
  value,
  onValueChange,
  theme,
}: {
  label: string;
  description: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
  theme: ReturnType<typeof useTheme>["theme"];
}) {
  return (
    <View
      style={[
        styles.toggleRow,
        {
          backgroundColor: theme.surfaceContainerLow,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <View style={{ flex: 1, paddingRight: 12 }}>
        <Text style={[styles.optionGroupTitle, { color: theme.textPrimary }]}>
          {label}
        </Text>
        <Text style={[styles.optionGroupDesc, { color: theme.textSecondary }]}>
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: theme.surfaceContainerHighest,
          true: theme.gold,
        }}
        thumbColor={value ? theme.kenyaBlack : theme.kenyaWhite}
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 36,
    gap: 14,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    gap: 14,
  },
  nightHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  nightTitleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 16,
    lineHeight: 21,
    includeFontPadding: false,
  },
  cardSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2,
    includeFontPadding: false,
  },
  segmentedRow: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    padding: 4,
    gap: 4,
  },
  segmentedBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 9,
    borderRadius: 9,
  },
  segmentedLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12.5,
    includeFontPadding: false,
  },
  sectionBlock: {
    gap: 8,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 2,
  },
  sectionEyebrow: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 0.8,
    includeFontPadding: false,
  },
  previewOuter: {
    width: "100%",
  },
  previewTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  previewBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  previewBadgeText: {
    includeFontPadding: false,
  },
  previewActionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 2,
  },
  previewBtn: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  previewBtnText: {
    includeFontPadding: false,
  },
  navPillsRow: {
    gap: 8,
    paddingVertical: 2,
  },
  navPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  navPillLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12.5,
    includeFontPadding: false,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  makeoversGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  makeoverCard: {
    width: "48%",
    flexGrow: 1,
    borderRadius: 14,
    padding: 11,
    gap: 6,
  },
  makeoverIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  makeoverNameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  swatchDotTiny: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    borderWidth: 1,
  },
  presetsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  presetCard: {
    width: "48%",
    flexGrow: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 11,
    gap: 5,
  },
  presetTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  swatchDotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  swatchDotSmall: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
  },
  presetName: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    lineHeight: 18,
    includeFontPadding: false,
  },
  presetTagline: {
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    lineHeight: 15,
    includeFontPadding: false,
  },
  stackList: {
    gap: 10,
  },
  subCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 11,
    gap: 10,
  },
  colorRoleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  activeColorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  swatchesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  swatchCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  hexInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hexInput: {
    flex: 1,
    height: 38,
    borderRadius: 9,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12.5,
    includeFontPadding: false,
  },
  clearBtn: {
    height: 38,
    paddingHorizontal: 14,
    borderRadius: 9,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  clearBtnText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    includeFontPadding: false,
  },
  optionGroup: {
    gap: 8,
  },
  optionGroupTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    lineHeight: 18,
    includeFontPadding: false,
  },
  optionGroupDesc: {
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 2,
    includeFontPadding: false,
  },
  pillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  optionPill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  optionPillText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12.5,
    includeFontPadding: false,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  backupGroup: {
    gap: 8,
  },
  backupHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  smallActionText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    includeFontPadding: false,
  },
  jsonBox: {
    minHeight: 84,
    maxHeight: 140,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 11.5,
  },
  importStatusText: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    includeFontPadding: false,
  },
  fullBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingVertical: 11,
    borderRadius: 10,
  },
  fullBtnText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    includeFontPadding: false,
  },
  resetBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingVertical: 11,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 2,
  },
  resetBtnText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13.5,
    includeFontPadding: false,
  },
});
