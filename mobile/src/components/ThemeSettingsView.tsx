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
  type SizePreset,
} from "../lib/theme-engine";
import {
  KenyaStripe,
  androidRipple,
  getThemedCardStyle,
  pressableStyle,
  triggerHaptic,
  useTheme,
} from "../theme";

type AccordionKey =
  | "makeovers"
  | "presets"
  | "colors"
  | "typography"
  | "layout"
  | "navigation"
  | "accessibility"
  | "backup";

type FilterKey = "all" | AccordionKey;

type HeadingTransformOption = "none" | "uppercase" | "capitalize";
type NumericStyleOption = "default" | "tabular-mono";
type HapticStrengthOption = "off" | "light" | "medium" | "strong";

type CustomColorKey = keyof CustomColorsConfig;

const ALL_ACCORDION_KEYS: readonly AccordionKey[] = [
  "makeovers",
  "presets",
  "colors",
  "typography",
  "layout",
  "navigation",
  "accessibility",
  "backup",
];

const QUICK_FILTER_PILLS: {
  key: FilterKey;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { key: "all", label: "All", icon: "apps-outline" },
  { key: "makeovers", label: "Makeovers", icon: "sparkles-outline" },
  { key: "presets", label: "Presets", icon: "color-palette-outline" },
  { key: "colors", label: "Colors", icon: "eyedrop-outline" },
  { key: "typography", label: "Text", icon: "text-outline" },
  { key: "layout", label: "Layout", icon: "layers-outline" },
  { key: "navigation", label: "Menus", icon: "compass-outline" },
  { key: "accessibility", label: "Access", icon: "accessibility-outline" },
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

const HEADING_CASE_OPTIONS: readonly { value: HeadingTransformOption; label: string }[] = [
  { value: "none", label: "Normal" },
  { value: "uppercase", label: "UPPERCASE" },
  { value: "capitalize", label: "Capitalize" },
];

const NUMERIC_STYLE_OPTIONS: readonly { value: NumericStyleOption; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "tabular-mono", label: "Tabular Mono" },
];

const HAPTIC_STRENGTH_OPTIONS: readonly { value: HapticStrengthOption; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "strong", label: "Strong" },
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
  { value: "dropdown", label: "Dropdown Picker" },
  { value: "stepper", label: "Prev/Next Stepper" },
  { value: "underline-tabs", label: "Underline Tabs" },
  { value: "segmented-bar", label: "Segmented Bar" },
  { value: "floating-dock", label: "Floating Dock" },
  { value: "sidebar-chips", label: "Accent Strip" },
  { value: "two-col-grid", label: "2-Col Grid" },
  { value: "three-col-tiles", label: "3-Col Mini Tiles" },
  { value: "vertical-list", label: "Vertical List" },
  { value: "minimal-text", label: "Minimal Text" },
  { value: "always-scroll", label: "Always Scroll" },
  { value: "always-wrap", label: "Always Wrap" },
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

const SURFACE_STYLE_OPTIONS: readonly { value: SurfaceStyle; label: string }[] = [
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

const BUTTON_RADIUS_OPTIONS: readonly { value: ButtonRadiusPreset; label: string }[] = [
  { value: "square", label: "Square" },
  { value: "sharp", label: "Sharp" },
  { value: "subtle", label: "Subtle" },
  { value: "rounded", label: "Rounded" },
  { value: "soft", label: "Soft" },
  { value: "pill", label: "Pill" },
];

const BORDER_WIDTH_OPTIONS: readonly { value: BorderWidthPreset; label: string }[] = [
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

const TAB_BAR_STYLE_OPTIONS: readonly { value: TabBarStyle; label: string }[] = [
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

const COLOR_BLIND_OPTIONS: readonly { value: ColorBlindMode; label: string }[] = [
  { value: "none", label: "None" },
  { value: "deuteranopia", label: "Deuteranopia" },
  { value: "protanopia", label: "Protanopia" },
  { value: "tritanopia", label: "Tritanopia" },
];

const SIZE_PRESET_OPTIONS: readonly { value: SizePreset; label: string }[] = [
  { value: "xs", label: "XS" },
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "XL" },
];

const ICON_SCALE_OPTIONS: readonly { value: number; label: string }[] = [
  { value: 0.8, label: "80%" },
  { value: 0.9, label: "90%" },
  { value: 1.0, label: "100%" },
  { value: 1.12, label: "112%" },
  { value: 1.25, label: "125%" },
];

const HEX_REGEX = /^#[0-9A-Fa-f]{6}$/;

function normalizeHexInput(raw: string): string {
  const cleaned = raw.trim();
  if (!cleaned) return "";
  return cleaned.startsWith("#")
    ? cleaned.toUpperCase()
    : `#${cleaned.toUpperCase()}`;
}

function findLabel<T extends string | number>(
  options: readonly { value: T; label: string }[],
  value: T | undefined,
  fallback: string
): string {
  if (value === undefined) return fallback;
  return options.find((o) => o.value === value)?.label ?? fallback;
}

export function ThemeSettingsView() {
  const themeCtx = useTheme();
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
    savedThemes,
    saveCustomTheme,
    applySavedTheme,
    deleteSavedTheme,
    resetThemeConfig,
    importThemeJson,
  } = themeCtx;

  const colorKey: string = themeCtx.themeKey || `${isDark ? "d" : "l"}-${themeConfig?.presetId}-${theme.bgPrimary}-${theme.surfaceContainer}-${theme.gold}-${themeConfig?.surfaceStyle}-${themeConfig?.cardAccentStyle}`;
  const themeKey: string = colorKey;

  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [openSections, setOpenSections] = useState<Record<AccordionKey, boolean>>({
    makeovers: true,
    presets: false,
    colors: false,
    typography: false,
    layout: false,
    navigation: false,
    accessibility: false,
    backup: false,
  });
  const [presetModeFilter, setPresetModeFilter] = useState<"all" | "dark" | "light">("all");
  const [saveThemeName, setSaveThemeName] = useState<string>("");
  const [saveThemeFeedback, setSaveThemeFeedback] = useState<string | null>(null);
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

  const darkCount = useMemo(
    () => THEME_PRESETS.filter((p) => p.recommendedMode === "dark").length,
    []
  );
  const lightCount = useMemo(
    () => THEME_PRESETS.filter((p) => p.recommendedMode === "light").length,
    []
  );

  const filteredPresets = useMemo(
    () =>
      THEME_PRESETS.filter(
        (p) => presetModeFilter === "all" || p.recommendedMode === presetModeFilter
      ),
    [presetModeFilter]
  );

  const allExpanded = useMemo(
    () => ALL_ACCORDION_KEYS.every((k) => openSections[k]),
    [openSections]
  );

  const headingTransform: HeadingTransformOption =
    ((themeConfig as any)?.headingTransform as HeadingTransformOption | undefined) ?? "none";
  const numericStyle: NumericStyleOption =
    ((themeConfig as any)?.numericStyle as NumericStyleOption | undefined) ?? "default";
  const hapticStrength: HapticStrengthOption =
    ((themeConfig as any)?.hapticStrength as HapticStrengthOption | undefined) ??
    (themeConfig?.hapticsEnabled === false ? "off" : "light");

  const doHaptic = useCallback(() => {
    if (hapticStrength === "off" || themeConfig?.hapticsEnabled === false) return;
    const duration =
      hapticStrength === "strong" ? 20 : hapticStrength === "medium" ? 12 : 7;
    triggerHaptic(duration);
  }, [hapticStrength, themeConfig?.hapticsEnabled]);

  const handleToggleSection = useCallback(
    (key: AccordionKey) => {
      doHaptic();
      setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    [doHaptic]
  );

  const handleFilterSelect = useCallback(
    (key: FilterKey) => {
      doHaptic();
      setActiveFilter(key);
      if (key !== "all") {
        setOpenSections((prev) => ({ ...prev, [key]: true }));
      }
    },
    [doHaptic]
  );

  const handleToggleExpandAll = useCallback(() => {
    doHaptic();
    const nextOpen = !allExpanded;
    if (nextOpen && activeFilter !== "all") {
      setActiveFilter("all");
    }
    setOpenSections({
      makeovers: nextOpen,
      presets: nextOpen,
      colors: nextOpen,
      typography: nextOpen,
      layout: nextOpen,
      navigation: nextOpen,
      accessibility: nextOpen,
      backup: nextOpen,
    });
  }, [activeFilter, allExpanded, doHaptic]);

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

  const fontScale = themeMetrics?.fontScale ?? themeConfig?.fontScale ?? 1;
  const lineHeightScale =
    themeMetrics?.lineHeightScale ?? themeConfig?.lineHeightScale ?? 1;
  const letterSpacingOffset =
    themeMetrics?.letterSpacingOffset ?? themeConfig?.letterSpacingOffset ?? 0;
  const previewCardRadius = themeMetrics?.cardRadiusPx ?? 14;
  const previewButtonRadius = themeMetrics?.buttonRadiusPx ?? 10;
  const previewBorderWidth = themeMetrics?.borderWidthPx ?? 1;
  const spacingScale = themeMetrics?.spacingScale ?? 1;
  const previewPadding = Math.round((themeMetrics?.cardPaddingPx ?? 14) * 0.85);
  const previewBtnPV = themeMetrics?.buttonPaddingVPx ?? 10;
  const previewBtnPH = themeMetrics?.buttonPaddingHPx ?? 16;
  const previewIconScale = themeMetrics?.iconScale ?? 1.0;
  const previewOpacity = themeMetrics?.cardOpacity ?? 1;

  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";
  const previewHeadingFont =
    resolvedFonts?.heading ??
    (themeConfig?.fontPair === "editorial-serif"
      ? Platform.OS === "ios"
        ? "Georgia"
        : "serif"
      : themeConfig?.fontPair === "mono-tech"
      ? monoFont
      : themeConfig?.fontPair === "classic-sans"
      ? Platform.OS === "ios"
        ? "System"
        : "sans-serif"
      : "Outfit_700Bold");

  const previewBodyFont =
    resolvedFonts?.body ??
    (themeConfig?.fontPair === "editorial-serif"
      ? Platform.OS === "ios"
        ? "Georgia"
        : "serif"
      : themeConfig?.fontPair === "mono-tech"
      ? monoFont
      : themeConfig?.fontPair === "classic-sans"
      ? Platform.OS === "ios"
        ? "System"
        : "sans-serif"
      : "Inter_400Regular");

  const currentMode: ThemeMode =
    themeConfig?.mode ?? (isDark ? "dark" : "light");
  const showKenyaStripe = themeConfig?.showKenyaStripe !== false;

  const activeMakeover = APP_LOOK_PROFILES.find(
    (profile) =>
      themeConfig?.presetId === profile.config.presetId &&
      themeConfig?.tabBarStyle === profile.config.tabBarStyle &&
      themeConfig?.homeLayout === profile.config.homeLayout &&
      themeConfig?.fontPair === profile.config.fontPair &&
      themeConfig?.pillBarLayout === profile.config.pillBarLayout &&
      Object.values(themeConfig?.customColors ?? {}).filter(Boolean).length === 0
  );
  const activePreset = THEME_PRESETS.find((p) => p.id === themeConfig?.presetId);
  const customColorCount = Object.values(themeConfig?.customColors ?? {}).filter(
    Boolean
  ).length;

  const fontPairLabel = findLabel(
    FONT_PAIR_OPTIONS,
    themeConfig?.fontPair,
    "Outfit + Inter"
  );
  const surfaceLabel = findLabel(
    SURFACE_STYLE_OPTIONS,
    themeConfig?.surfaceStyle,
    "Elevated"
  );
  const densityLabel = findLabel(
    DENSITY_OPTIONS,
    themeConfig?.density,
    "Default"
  );
  const tabBarLabel = findLabel(
    TAB_BAR_STYLE_OPTIONS,
    themeConfig?.tabBarStyle,
    "Classic"
  );
  const hScrollLabel = findLabel(
    SCROLLBAR_STYLE_OPTIONS,
    themeConfig?.horizontalScrollbarStyle,
    "Subtle Bar"
  );
  const hapticLabel = findLabel(HAPTIC_STRENGTH_OPTIONS, hapticStrength, "Light");
  const colorBlindLabel = findLabel(
    COLOR_BLIND_OPTIONS,
    themeConfig?.colorBlindMode,
    "None"
  );

  const isVisible = (key: AccordionKey) =>
    activeFilter === "all" || activeFilter === key;

  const previewCardStyle = getThemedCardStyle(theme, themeConfig, themeMetrics);
  const innerPreviewRadius = Math.max(0, previewCardRadius - previewBorderWidth);

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: theme.bgPrimary }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
      keyboardShouldPersistTaps="handled"
    >
      <View key={themeKey} style={styles.innerStack}>
        {/* 1. Compact Night Mode Header */}
        <View
          style={[
            styles.compactCard,
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
                  size={16}
                  color={theme.gold}
                />
              </View>
              <View style={styles.flexOne}>
                <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                  Night Mode
                </Text>
                <Text
                  style={[styles.cardSubtitle, { color: theme.textSecondary }]}
                  numberOfLines={1}
                >
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
                  key={`${opt.value}-${active ? "1" : "0"}-${themeKey}`}
                  onPress={() => handleModeSelect(opt.value)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle(styles.segmentedPressable)}
                >
                  <View
                    style={[
                      styles.segmentedBtnInner,
                      active && {
                        backgroundColor: theme.primaryContainer,
                        borderColor: theme.gold,
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Ionicons
                      name={opt.icon}
                      size={14}
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
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* 2. Compact Live Interactive Preview (Split Outer/Inner to prevent Android elevation+overflow blank bug) */}
        <View style={styles.sectionBlock}>
          <View style={styles.previewEyebrowRow}>
            <View style={styles.sectionHeaderRow}>
              <Feather name="eye" size={13} color={theme.gold} />
              <Text style={[styles.sectionEyebrow, { color: theme.textSecondary }]}>
                LIVE INTERACTIVE PREVIEW
              </Text>
            </View>
            <Text
              style={[styles.previewPresetTag, { color: theme.textMuted }]}
              numberOfLines={1}
            >
              {activePreset?.name ?? "Custom"} · {Math.round(fontScale * 100)}%
            </Text>
          </View>

          <View
            style={[
              styles.previewOuter,
              previewCardStyle,
              { opacity: previewOpacity },
            ]}
          >
            <View
              style={[
                styles.previewInnerClip,
                {
                  borderRadius: innerPreviewRadius,
                  elevation: 0,
                },
              ]}
            >
              {showKenyaStripe && <KenyaStripe />}
              <View
                style={{
                  padding: previewPadding,
                  gap: Math.round(7 * spacingScale),
                }}
              >
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
                      size={Math.round(11 * previewIconScale)}
                      color={theme.onSecondaryContainer}
                    />
                    <Text
                      style={[
                        styles.previewBadgeText,
                        {
                          color: theme.onSecondaryContainer,
                          fontFamily: previewBodyFont,
                          fontSize: Math.round(10.5 * fontScale),
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
                      fontFamily:
                        numericStyle === "tabular-mono" ? monoFont : previewBodyFont,
                      fontVariant:
                        numericStyle === "tabular-mono" ? ["tabular-nums"] : undefined,
                      fontSize: Math.round(11 * fontScale),
                      includeFontPadding: false,
                    }}
                  >
                    KES 12,450 · {Math.round(fontScale * 100)}%
                  </Text>
                </View>

                <Text
                  style={{
                    color: theme.textPrimary,
                    fontFamily: previewHeadingFont,
                    fontSize: Math.round(16 * fontScale),
                    lineHeight: Math.round(16 * fontScale * 1.3 * lineHeightScale),
                    letterSpacing: letterSpacingOffset,
                    textTransform: headingTransform,
                    includeFontPadding: false,
                  }}
                  numberOfLines={1}
                >
                  KenyaHub Civic & Utility Suite
                </Text>

                <Text
                  style={{
                    color: theme.textSecondary,
                    fontFamily: previewBodyFont,
                    fontSize: Math.round(12.5 * fontScale),
                    lineHeight: Math.round(12.5 * fontScale * 1.38 * lineHeightScale),
                    letterSpacing: letterSpacingOffset,
                    includeFontPadding: false,
                  }}
                  numberOfLines={2}
                >
                  Live colors, typography, corners, borders & density across cards and actions.
                </Text>

                <View style={styles.previewActionsRow}>
                  <Pressable
                    key={`preview-primary-${themeKey}`}
                    onPress={doHaptic}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle([
                      styles.previewBtnPressable,
                      { borderRadius: previewButtonRadius },
                    ])}
                  >
                    <View
                      style={[
                        styles.previewBtnInner,
                        {
                          backgroundColor: theme.gold,
                          borderRadius: previewButtonRadius,
                          paddingVertical: Math.max(5, Math.round(previewBtnPV * 0.85)),
                          paddingHorizontal: Math.max(8, Math.round(previewBtnPH * 0.85)),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.previewBtnText,
                          {
                            color: theme.kenyaBlack,
                            fontFamily: previewHeadingFont,
                            fontSize: Math.round(12 * fontScale),
                          },
                        ]}
                      >
                        Primary Action
                      </Text>
                    </View>
                  </Pressable>

                  <Pressable
                    key={`preview-secondary-${themeKey}`}
                    onPress={doHaptic}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle([
                      styles.previewBtnPressable,
                      { borderRadius: previewButtonRadius },
                    ])}
                  >
                    <View
                      style={[
                        styles.previewBtnInner,
                        {
                          backgroundColor: theme.secondaryContainer,
                          borderColor: theme.kenyaGreenLight,
                          borderWidth: 1,
                          borderRadius: previewButtonRadius,
                          paddingVertical: Math.max(5, Math.round(previewBtnPV * 0.85)),
                          paddingHorizontal: Math.max(8, Math.round(previewBtnPH * 0.85)),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.previewBtnText,
                          {
                            color: theme.onSecondaryContainer,
                            fontFamily: previewBodyFont,
                            fontSize: Math.round(12 * fontScale),
                          },
                        ]}
                      >
                        Secondary
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 3. Slim Quick-Filter Bar + Expand/Collapse All */}
        <View style={styles.filterToolbar}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={
              themeConfig?.horizontalScrollbarStyle === "native-indicator"
            }
            contentContainerStyle={styles.navPillsRow}
            style={styles.flexOne}
          >
            {QUICK_FILTER_PILLS.map((pill) => {
              const active = activeFilter === pill.key;
              return (
                <Pressable
                  key={`filter-${pill.key}-${active ? "1" : "0"}-${themeKey}`}
                  onPress={() => handleFilterSelect(pill.key)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle(styles.navPillPressable)}
                >
                  <View
                    style={[
                      styles.navPillInner,
                      {
                        backgroundColor: active
                          ? theme.gold
                          : theme.surfaceContainerHigh,
                        borderColor: active ? theme.gold : theme.outlineVariant,
                      },
                    ]}
                  >
                    <Ionicons
                      name={pill.icon}
                      size={13}
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
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>

          <Pressable
            key={`expand-toggle-${allExpanded ? "1" : "0"}-${themeKey}`}
            onPress={handleToggleExpandAll}
            accessibilityRole="button"
            accessibilityLabel={allExpanded ? "Collapse All Sections" : "Expand All Sections"}
            android_ripple={androidRipple(theme.rippleColor)}
            style={pressableStyle(styles.expandAllPressable)}
          >
            <View
              style={[
                styles.expandAllInner,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Feather
                name={allExpanded ? "chevrons-up" : "chevrons-down"}
                size={13}
                color={theme.gold}
              />
              <Text style={[styles.expandAllLabel, { color: theme.textPrimary }]}>
                {allExpanded ? "Collapse" : "Expand"}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Accordion 1: One-Tap Makeovers */}
        {isVisible("makeovers") && (
          <AccordionCard
            sectionKey="makeovers"
            icon="sparkles-outline"
            title="One-Tap Makeovers"
            summary={
              activeMakeover
                ? activeMakeover.name
                : `Custom · ${APP_LOOK_PROFILES.length} looks`
            }
            expanded={openSections.makeovers}
            onToggle={() => handleToggleSection("makeovers")}
            theme={theme}
            themeKey={themeKey}
          >
            <View style={styles.makeoversGrid}>
              {APP_LOOK_PROFILES.map((profile) => {
                const isActive =
                  themeConfig?.presetId === profile.config.presetId &&
                  themeConfig?.tabBarStyle === profile.config.tabBarStyle &&
                  themeConfig?.homeLayout === profile.config.homeLayout &&
                  themeConfig?.fontPair === profile.config.fontPair;
                return (
                  <Pressable
                    key={`${profile.id}-${themeKey}`}
                    onPress={() => {
                      doHaptic();
                      applyAppLookProfile(profile.id);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: isActive }}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.makeoverPressable)}
                  >
                    <View
                      style={[
                        styles.makeoverCardInner,
                        {
                          backgroundColor: isActive
                            ? theme.primaryContainer
                            : theme.surfaceContainerLow,
                          borderColor: isActive ? theme.gold : theme.outlineVariant,
                          borderWidth: isActive ? 1.5 : 1,
                        },
                      ]}
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
                            size={14}
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
                          style={[
                            styles.presetName,
                            { color: theme.textPrimary, flex: 1 },
                          ]}
                          numberOfLines={1}
                        >
                          {profile.name}
                        </Text>
                        {isActive && (
                          <Ionicons
                            name="checkmark-circle"
                            size={15}
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
                    </View>
                  </Pressable>
                );
              })}
            </View>

            {/* Save Current Customized Theme */}
            <View
              style={{
                marginTop: 10,
                paddingTop: 10,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: theme.outlineVariant,
                gap: 8,
              }}
            >
              <Text style={{ fontFamily: "Inter_700Bold", fontSize: 11, color: theme.gold, letterSpacing: 0.4 }}>
                SAVE CURRENT CUSTOMIZED THEME
              </Text>
              <Text style={{ fontFamily: "Inter_400Regular", fontSize: 11.5, color: theme.textSecondary }}>
                Pick any makeover or preset above, customize any setting below, and save it for one-tap switching.
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <TextInput
                  value={saveThemeName}
                  onChangeText={setSaveThemeName}
                  placeholder="Name your theme (e.g. My Midnight Gold)"
                  placeholderTextColor={theme.textMuted}
                  maxLength={32}
                  style={{
                    flex: 1,
                    backgroundColor: theme.surfaceContainerLow,
                    borderWidth: 1,
                    borderColor: theme.outlineVariant,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    fontFamily: "Inter_400Regular",
                    fontSize: 12.5,
                    color: theme.textPrimary,
                  }}
                />
                <Pressable
                  key={`save-theme-btn-${themeKey}`}
                  onPress={() => {
                    const saved = saveCustomTheme(saveThemeName || `Custom ${savedThemes.length + 1}`);
                    if (saved) {
                      setSaveThemeName("");
                      setSaveThemeFeedback(`Saved "${saved.name}"!`);
                      setTimeout(() => setSaveThemeFeedback(null), 2600);
                    }
                  }}
                  accessibilityRole="button"
                  accessibilityLabel="Save current customized theme"
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      paddingHorizontal: 13,
                      paddingVertical: 9,
                      borderRadius: 10,
                      backgroundColor: theme.gold,
                    }}
                  >
                    <Ionicons name="bookmark" size={14} color="#1A1108" />
                    <Text style={{ fontFamily: "Inter_700Bold", fontSize: 12, color: "#1A1108" }}>
                      Save
                    </Text>
                  </View>
                </Pressable>
              </View>
              {Boolean(saveThemeFeedback) && (
                <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 11.5, color: theme.kenyaGreenLight }}>
                  {saveThemeFeedback}
                </Text>
              )}

              {savedThemes.length > 0 && (
                <View style={{ gap: 6, marginTop: 4 }}>
                  <Text style={{ fontFamily: "Inter_700Bold", fontSize: 11, color: theme.textSecondary, letterSpacing: 0.4 }}>
                    YOUR SAVED THEMES ({savedThemes.length})
                  </Text>
                  {savedThemes.map((st) => (
                    <View
                      key={`${st.id}-${themeKey}`}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        backgroundColor: theme.surfaceContainerLow,
                        borderWidth: 1,
                        borderColor: theme.outlineVariant,
                        borderRadius: 11,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                      }}
                    >
                      <Pressable
                        onPress={() => {
                          doHaptic();
                          applySavedTheme(st.id);
                        }}
                        style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }}
                      >
                        <View style={{ flexDirection: "row", gap: 3 }}>
                          {st.swatches.map((hex, si) => (
                            <View
                              key={si}
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: hex,
                                borderWidth: 0.5,
                                borderColor: theme.outlineVariant,
                              }}
                            />
                          ))}
                        </View>
                        <Text
                          style={{ fontFamily: "Inter_700Bold", fontSize: 12.5, color: theme.textPrimary, flex: 1 }}
                          numberOfLines={1}
                        >
                          {st.name}
                        </Text>
                      </Pressable>
                      <Pressable
                        onPress={() => {
                          doHaptic();
                          applySavedTheme(st.id);
                        }}
                        hitSlop={6}
                      >
                        <View style={{ paddingHorizontal: 9, paddingVertical: 5, borderRadius: 8, backgroundColor: theme.primaryContainer, borderWidth: 1, borderColor: theme.gold }}>
                          <Text style={{ fontFamily: "Inter_700Bold", fontSize: 11, color: theme.gold }}>Apply</Text>
                        </View>
                      </Pressable>
                      <Pressable
                        onPress={() => {
                          doHaptic();
                          deleteSavedTheme(st.id);
                        }}
                        hitSlop={6}
                        accessibilityLabel={`Delete saved theme ${st.name}`}
                      >
                        <Ionicons name="trash-outline" size={16} color={theme.kenyaRedLight} />
                      </Pressable>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </AccordionCard>
        )}

        {/* Accordion 2: Theme Presets */}
        {isVisible("presets") && (
          <AccordionCard
            sectionKey="presets"
            icon="color-palette-outline"
            title="Theme Presets"
            summary={`${activePreset?.name ?? "Custom"} · ${THEME_PRESETS.length} themes`}
            expanded={openSections.presets}
            onToggle={() => handleToggleSection("presets")}
            theme={theme}
            themeKey={themeKey}
          >
            <View style={styles.presetFilterRow}>
              {(
                [
                  { id: "all", label: `All (${THEME_PRESETS.length})` },
                  { id: "dark", label: `Dark (${darkCount})` },
                  { id: "light", label: `Light (${lightCount})` },
                ] as const
              ).map((f) => {
                const act = presetModeFilter === f.id;
                return (
                  <Pressable
                    key={`preset-filter-${f.id}-${act ? "1" : "0"}-${themeKey}`}
                    onPress={() => {
                      doHaptic();
                      setPresetModeFilter(f.id);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: act }}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.presetFilterPressable)}
                  >
                    <View
                      style={[
                        styles.presetFilterBtnInner,
                        {
                          borderColor: act ? theme.gold : theme.outlineVariant,
                          backgroundColor: act
                            ? theme.primaryContainer
                            : theme.surfaceContainerLow,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.presetFilterLabel,
                          { color: act ? theme.gold : theme.textSecondary },
                        ]}
                      >
                        {f.label}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.presetsGrid}>
              {filteredPresets.map((preset) => {
                const active = themeConfig?.presetId === preset.id;
                return (
                  <Pressable
                    key={`${preset.id}-${themeKey}`}
                    onPress={() => {
                      doHaptic();
                      applyThemePreset(preset.id, preset.recommendedMode);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.presetPressable)}
                  >
                    <View
                      style={[
                        styles.presetCardInner,
                        {
                          backgroundColor: active
                            ? theme.primaryContainer
                            : theme.surfaceContainerLow,
                          borderColor: active ? theme.gold : theme.outlineVariant,
                          borderWidth: active ? 1.5 : 1,
                        },
                      ]}
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
                            size={16}
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
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </AccordionCard>
        )}

        {/* Accordion 3: Custom Colors */}
        {isVisible("colors") && (
          <AccordionCard
            sectionKey="colors"
            icon="eyedrop-outline"
            title="Custom Colors"
            summary={
              customColorCount > 0
                ? `${customColorCount} custom override${customColorCount > 1 ? "s" : ""}`
                : "Default palette"
            }
            expanded={openSections.colors}
            onToggle={() => handleToggleSection("colors")}
            theme={theme}
            themeKey={themeKey}
          >
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
                      <View style={styles.flexOne}>
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
                            key={`${role.key}-${hex}-${themeKey}`}
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
                        key={`clear-${role.key}-${themeKey}`}
                        onPress={() => {
                          doHaptic();
                          setHexDrafts((prev) => ({ ...prev, [role.key]: "" }));
                          updateCustomColor(role.key, undefined);
                        }}
                        accessibilityRole="button"
                        android_ripple={androidRipple(theme.rippleColor)}
                        style={pressableStyle(styles.clearBtnPressable)}
                      >
                        <View
                          style={[
                            styles.clearBtnInner,
                            {
                              backgroundColor: theme.surfaceContainerHigh,
                              borderColor: theme.outlineVariant,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.clearBtnText,
                              { color: theme.textPrimary },
                            ]}
                          >
                            Clear
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                );
              })}
            </View>
          </AccordionCard>
        )}

        {/* Accordion 4: Typography & Text */}
        {isVisible("typography") && (
          <AccordionCard
            sectionKey="typography"
            icon="text-outline"
            title="Typography & Text"
            summary={`${fontPairLabel} · ${Math.round(fontScale * 100)}%`}
            expanded={openSections.typography}
            onToggle={() => handleToggleSection("typography")}
            theme={theme}
            themeKey={themeKey}
          >
            <OptionPillGroup
              label="Font Scale"
              options={FONT_SCALE_OPTIONS}
              selectedValue={themeConfig?.fontScale ?? 1.0}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ fontScale: val });
              }}
              theme={theme}
              themeKey={themeKey}
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
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Heading Case"
              options={HEADING_CASE_OPTIONS}
              selectedValue={headingTransform}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ headingTransform: val } as any);
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Number Style"
              options={NUMERIC_STYLE_OPTIONS}
              selectedValue={numericStyle}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ numericStyle: val } as any);
              }}
              theme={theme}
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
            />
          </AccordionCard>
        )}

        {/* Accordion 5: Surfaces, Borders & Layout */}
        {isVisible("layout") && (
          <AccordionCard
            sectionKey="layout"
            icon="layers-outline"
            title="Surfaces & Layout"
            summary={`${surfaceLabel} · ${densityLabel}`}
            expanded={openSections.layout}
            onToggle={() => handleToggleSection("layout")}
            theme={theme}
            themeKey={themeKey}
          >
            <OptionPillGroup
              label="Surface Style"
              options={SURFACE_STYLE_OPTIONS}
              selectedValue={themeConfig?.surfaceStyle ?? "elevated"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ surfaceStyle: val });
              }}
              theme={theme}
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Pill & Chip Size"
              options={SIZE_PRESET_OPTIONS}
              selectedValue={themeConfig?.pillSize ?? "md"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ pillSize: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Icon Size"
              options={ICON_SCALE_OPTIONS}
              selectedValue={themeConfig?.iconScale ?? 1.0}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ iconScale: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Button Size"
              options={SIZE_PRESET_OPTIONS}
              selectedValue={themeConfig?.buttonSize ?? "md"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ buttonSize: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Card Padding"
              options={SIZE_PRESET_OPTIONS}
              selectedValue={themeConfig?.cardPadding ?? "md"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ cardPadding: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Bottom Bar Size"
              options={SIZE_PRESET_OPTIONS}
              selectedValue={themeConfig?.tabBarSize ?? "md"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ tabBarSize: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />

            <OptionPillGroup
              label="Top Header Size"
              options={SIZE_PRESET_OPTIONS}
              selectedValue={themeConfig?.appBarSize ?? "md"}
              onSelect={(val) => {
                doHaptic();
                updateThemeConfig({ appBarSize: val });
              }}
              theme={theme}
              themeKey={themeKey}
            />
          </AccordionCard>
        )}

        {/* Accordion 6: Menus & Scrollbars */}
        {isVisible("navigation") && (
          <AccordionCard
            sectionKey="navigation"
            icon="compass-outline"
            title="Menus & Scrollbars"
            summary={`${tabBarLabel} · ${hScrollLabel}`}
            expanded={openSections.navigation}
            onToggle={() => handleToggleSection("navigation")}
            theme={theme}
            themeKey={themeKey}
          >
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
              themeKey={themeKey}
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
          </AccordionCard>
        )}

        {/* Accordion 7: Accessibility & Feel */}
        {isVisible("accessibility") && (
          <AccordionCard
            sectionKey="accessibility"
            icon="accessibility-outline"
            title="Accessibility & Feel"
            summary={`Haptics ${hapticLabel}${
              colorBlindLabel !== "None" ? ` · ${colorBlindLabel}` : ""
            }`}
            expanded={openSections.accessibility}
            onToggle={() => handleToggleSection("accessibility")}
            theme={theme}
            themeKey={themeKey}
          >
            <OptionPillGroup
              label="Haptic Strength"
              options={HAPTIC_STRENGTH_OPTIONS}
              selectedValue={hapticStrength}
              onSelect={(val) => {
                if (val !== "off") {
                  triggerHaptic(val === "strong" ? 20 : val === "medium" ? 12 : 7);
                }
                updateThemeConfig({
                  hapticStrength: val,
                  hapticsEnabled: val !== "off",
                } as any);
              }}
              theme={theme}
              themeKey={themeKey}
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
              themeKey={themeKey}
            />
          </AccordionCard>
        )}

        {/* Accordion 8: Backup & Reset */}
        {isVisible("backup") && (
          <AccordionCard
            sectionKey="backup"
            icon="code-slash-outline"
            title="Backup & Reset"
            summary="Export · Import · Reset"
            expanded={openSections.backup}
            onToggle={() => handleToggleSection("backup")}
            theme={theme}
            themeKey={themeKey}
          >
            <View style={styles.backupGroup}>
              <View style={styles.backupHeaderRow}>
                <Text
                  style={[styles.optionGroupTitle, { color: theme.textPrimary }]}
                >
                  Export Theme JSON
                </Text>
                <Pressable
                  key={`share-export-${themeKey}`}
                  onPress={handleShareExport}
                  accessibilityRole="button"
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle(styles.smallActionPressable)}
                >
                  <View
                    style={[
                      styles.smallActionBtnInner,
                      {
                        backgroundColor: theme.primaryContainer,
                        borderColor: theme.gold,
                      },
                    ]}
                  >
                    <Ionicons name="share-outline" size={14} color={theme.gold} />
                    <Text style={[styles.smallActionText, { color: theme.gold }]}>
                      Share / Copy
                    </Text>
                  </View>
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
                key={`apply-import-${themeKey}`}
                onPress={handleApplyImport}
                accessibilityRole="button"
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle(styles.fullBtnPressable)}
              >
                <View
                  style={[
                    styles.fullBtnInner,
                    { backgroundColor: theme.gold },
                  ]}
                >
                  <Ionicons
                    name="checkmark-done-outline"
                    size={16}
                    color={theme.kenyaBlack}
                  />
                  <Text style={[styles.fullBtnText, { color: theme.kenyaBlack }]}>
                    Apply JSON Theme
                  </Text>
                </View>
              </Pressable>
            </View>

            <Pressable
              key={`reset-all-${themeKey}`}
              onPress={handleConfirmReset}
              accessibilityRole="button"
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle(styles.resetBtnPressable)}
            >
              <View
                style={[
                  styles.resetBtnInner,
                  {
                    backgroundColor: theme.surfaceContainerLow,
                    borderColor: theme.kenyaRed,
                  },
                ]}
              >
                <Ionicons
                  name="refresh-outline"
                  size={16}
                  color={theme.kenyaRedLight}
                />
                <Text style={[styles.resetBtnText, { color: theme.kenyaRedLight }]}>
                  Reset All to Default
                </Text>
              </View>
            </Pressable>
          </AccordionCard>
        )}
      </View>
    </ScrollView>
  );
}

function AccordionCard({
  sectionKey,
  icon,
  title,
  summary,
  expanded,
  onToggle,
  theme,
  themeKey,
  children,
}: {
  sectionKey: AccordionKey;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  summary: string;
  expanded: boolean;
  onToggle: () => void;
  theme: ReturnType<typeof useTheme>["theme"];
  themeKey: string;
  children: React.ReactNode;
}) {
  return (
    <View
      style={[
        styles.accordionCard,
        {
          backgroundColor: theme.surfaceContainer,
          borderColor: theme.outlineVariant,
        },
      ]}
    >
      <Pressable
        key={`accordion-hdr-${sectionKey}-${expanded ? "open" : "closed"}-${themeKey}`}
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        android_ripple={androidRipple(theme.rippleColor)}
        style={pressableStyle(styles.accordionHeaderPressable, undefined, false)}
      >
        <View style={styles.accordionHeaderRow}>
          <View
            style={[
              styles.accordionIconWrap,
              {
                backgroundColor: expanded
                  ? theme.primaryContainer
                  : theme.surfaceContainerHigh,
              },
            ]}
          >
            <Ionicons name={icon} size={16} color={theme.gold} />
          </View>
          <View style={styles.accordionTitleCol}>
            <Text
              style={[styles.accordionTitle, { color: theme.textPrimary }]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <View
              style={[
                styles.summaryPill,
                {
                  backgroundColor: theme.surfaceContainerLow,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Text
                style={[styles.summaryPillText, { color: theme.textSecondary }]}
                numberOfLines={1}
              >
                {summary}
              </Text>
            </View>
          </View>
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={expanded ? theme.gold : theme.textSecondary}
          />
        </View>
      </Pressable>

      {expanded && (
        <View
          style={[
            styles.accordionBody,
            { borderTopColor: theme.outlineVariant },
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
}

function OptionPillGroup<T extends string | number>({
  label,
  options,
  selectedValue,
  onSelect,
  theme,
  themeKey,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  selectedValue: T;
  onSelect: (value: T) => void;
  theme: ReturnType<typeof useTheme>["theme"];
  themeKey: string;
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
              key={`${label}-${String(opt.value)}-${active ? "1" : "0"}-${themeKey}`}
              onPress={() => onSelect(opt.value)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle(styles.optionPillPressable)}
            >
              <View
                style={[
                  styles.optionPillInner,
                  {
                    backgroundColor: active
                      ? theme.primaryContainer
                      : theme.surfaceContainerLow,
                    borderColor: active ? theme.gold : theme.outlineVariant,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.optionPillText,
                    { color: active ? theme.gold : theme.textSecondary },
                  ]}
                >
                  {opt.label}
                </Text>
              </View>
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
      <View style={styles.toggleTextCol}>
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
    padding: 12,
    paddingBottom: 32,
  },
  innerStack: {
    gap: 10,
  },
  flexOne: {
    flex: 1,
  },
  compactCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    gap: 10,
  },
  nightHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  nightTitleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 15,
    lineHeight: 20,
    includeFontPadding: false,
  },
  cardSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 1,
    includeFontPadding: false,
  },
  segmentedRow: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    padding: 3,
    gap: 3,
  },
  segmentedPressable: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  segmentedBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 7,
    borderRadius: 8,
  },
  segmentedLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    includeFontPadding: false,
  },
  sectionBlock: {
    gap: 6,
  },
  previewEyebrowRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    gap: 8,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sectionEyebrow: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10.5,
    letterSpacing: 0.7,
    includeFontPadding: false,
  },
  previewPresetTag: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    includeFontPadding: false,
  },
  previewOuter: {
    width: "100%",
  },
  previewInnerClip: {
    width: "100%",
    overflow: "hidden",
  },
  previewTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  previewBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  previewBadgeText: {
    includeFontPadding: false,
  },
  previewActionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 2,
  },
  previewBtnPressable: {
    overflow: "hidden",
  },
  previewBtnInner: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  previewBtnText: {
    includeFontPadding: false,
  },
  filterToolbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  navPillsRow: {
    gap: 6,
    paddingVertical: 2,
  },
  navPillPressable: {
    borderRadius: 999,
    overflow: "hidden",
  },
  navPillInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  navPillLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11.5,
    includeFontPadding: false,
  },
  expandAllPressable: {
    borderRadius: 999,
    overflow: "hidden",
  },
  expandAllInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  expandAllLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    includeFontPadding: false,
  },
  accordionCard: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  accordionHeaderPressable: {
    width: "100%",
  },
  accordionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  accordionIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  accordionTitleCol: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },
  accordionTitle: {
    fontFamily: "Outfit_700Bold",
    fontSize: 14.5,
    lineHeight: 19,
    includeFontPadding: false,
  },
  summaryPill: {
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    maxWidth: "100%",
  },
  summaryPillText: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    lineHeight: 14,
    includeFontPadding: false,
  },
  accordionBody: {
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 12,
    gap: 12,
  },
  makeoversGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  makeoverPressable: {
    width: "48%",
    flexGrow: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  makeoverCardInner: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    gap: 5,
  },
  makeoverIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  makeoverNameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  },
  swatchDotTiny: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  presetFilterRow: {
    flexDirection: "row",
    gap: 6,
  },
  presetFilterPressable: {
    flex: 1,
    borderRadius: 9,
    overflow: "hidden",
  },
  presetFilterBtnInner: {
    paddingVertical: 7,
    borderRadius: 9,
    alignItems: "center",
    borderWidth: 1,
  },
  presetFilterLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    includeFontPadding: false,
  },
  presetsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  presetPressable: {
    width: "48%",
    flexGrow: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  presetCardInner: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    gap: 4,
  },
  presetTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  swatchDotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  swatchDotSmall: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 1,
  },
  presetName: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
    lineHeight: 17,
    includeFontPadding: false,
  },
  presetTagline: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    lineHeight: 14.5,
    includeFontPadding: false,
  },
  stackList: {
    gap: 8,
  },
  subCard: {
    borderRadius: 11,
    borderWidth: 1,
    padding: 10,
    gap: 8,
  },
  colorRoleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  activeColorPreview: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
  },
  swatchesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  swatchCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
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
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
    includeFontPadding: false,
  },
  clearBtnPressable: {
    borderRadius: 8,
    overflow: "hidden",
  },
  clearBtnInner: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 8,
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
    gap: 6,
  },
  optionGroupTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12.5,
    lineHeight: 17,
    includeFontPadding: false,
  },
  optionGroupDesc: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    lineHeight: 15,
    marginTop: 1,
    includeFontPadding: false,
  },
  pillsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  optionPillPressable: {
    borderRadius: 9,
    overflow: "hidden",
  },
  optionPillInner: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 9,
    borderWidth: 1,
  },
  optionPillText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    includeFontPadding: false,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 11,
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },
  toggleTextCol: {
    flex: 1,
    paddingRight: 10,
  },
  backupGroup: {
    gap: 7,
  },
  backupHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallActionPressable: {
    borderRadius: 8,
    overflow: "hidden",
  },
  smallActionBtnInner: {
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
    minHeight: 78,
    maxHeight: 130,
    borderRadius: 9,
    borderWidth: 1,
    padding: 9,
    textAlignVertical: "top",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 11,
  },
  importStatusText: {
    fontFamily: "Inter_500Medium",
    fontSize: 11.5,
    includeFontPadding: false,
  },
  fullBtnPressable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  fullBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingVertical: 10,
    borderRadius: 10,
  },
  fullBtnText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
    includeFontPadding: false,
  },
  resetBtnPressable: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 2,
  },
  resetBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  resetBtnText: {
    fontFamily: "Outfit_700Bold",
    fontSize: 13,
    includeFontPadding: false,
  },
});
