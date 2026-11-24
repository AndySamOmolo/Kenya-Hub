import React, { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
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
  DEFAULT_THEME_CONFIG,
  THEME_PRESETS,
  diffThemeConfig,
  getContrastInk,
  hexToRgba,
  resolveFontPairFamilies,
  resolveScrollbarThicknessPx,
  resolveThemeColors,
  resolveThemeMetrics,
  type AccentIntensity,
  type AppBarStyle,
  type BorderWidthPreset,
  type ButtonRadiusPreset,
  type ButtonStylePreset,
  type CardAccentStyle,
  type CardShadowIntensity,
  type ColorBlindMode,
  type CustomColorsConfig,
  type DensityPreset,
  type DividerStyle,
  type FontPair,
  type HapticStrength,
  type HeaderAlignment,
  type HeadingTransform,
  type HomeLayoutPreset,
  type HorizontalScrollbarStyle,
  type IconBadgeStyle,
  type IconPackStyle,
  type InputStylePreset,
  type MenuIndicatorStyle,
  type NumericStyle,
  type PageTransitionPreset,
  type PillBarLayout,
  type PressEffect,
  type ProgressBarStyle,
  type QuickMenuPosition,
  type RadiusPreset,
  type ReadingTint,
  type ScreenPaddingPreset,
  type ScrollbarThickness,
  type SectionHeaderStyle,
  type SizePreset,
  type StatusBarMode,
  type StripeThickness,
  type SurfaceStyle,
  type TabBarStyle,
  type ThemeConfig,
  type ThemeMetrics,
  type ThemeMode,
  type VerticalScrollbarStyle,
} from "../lib/theme-engine";
import {
  KenyaStripe,
  ThemedDivider,
  ThemedProgressBar,
  androidRipple,
  darkColors,
  getThemedButtonStyle,
  getThemedCardStyle,
  getThemedInputStyle,
  lightColors,
  pressableStyle,
  triggerHaptic,
  useTheme,
  useSavedThemes,
  type ThemeColors,
} from "../theme";
import { ThemedIcon, ThemedIconBadge } from "./ThemedIcon";
import { useAppLanguage, type TranslationKey } from "../lib/i18n";
import { TactileAtlasShowcase } from "./TactileAtlasShowcase";

type AccordionKey =
  | "makeovers"
  | "atlas"
  | "presets"
  | "colors"
  | "typography"
  | "layout"
  | "navigation"
  | "accessibility"
  | "backup";

type FilterKey = "all" | AccordionKey;
type PreviewMode = "mini-app" | "card" | "hide";
type CustomColorKey = keyof CustomColorsConfig;

type DiffItemRaw =
  | keyof ThemeConfig
  | {
      key: keyof ThemeConfig;
      label?: string;
      value?: unknown;
      current?: unknown;
      currentValue?: unknown;
    };

interface NormalizedDiffChip {
  key: keyof ThemeConfig;
  label: string;
}

const SW_OPTION_LABELS: Record<string, string> = {
  system: "Otomatiki",
  light: "Mwanga",
  dark: "Giza",
  "mini-app": "Programu",
  card: "Kadi",
  hide: "Ficha",
  muted: "Laini",
  balanced: "Wastani",
  vivid: "Mkali",
};

function localizeOptionLabel(
  value: string | number,
  fallback: string,
  lang: string
): string {
  return lang === "sw" ? SW_OPTION_LABELS[String(value)] || fallback : fallback;
}

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

const PREVIEW_MODE_OPTIONS: readonly { value: PreviewMode; label: string }[] = [
  { value: "mini-app", label: "App" },
  { value: "card", label: "Card" },
  { value: "hide", label: "Hide" },
];

const MODE_OPTIONS: {
  value: ThemeMode;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { value: "system", label: "Auto", icon: "phone-portrait-outline" },
  { value: "light", label: "Light", icon: "sunny-outline" },
  { value: "dark", label: "Dark", icon: "moon-outline" },
];

const ACCENT_INTENSITY_OPTIONS: readonly { value: AccentIntensity; label: string }[] = [
  { value: "muted", label: "Muted" },
  { value: "balanced", label: "Balanced" },
  { value: "vivid", label: "Vivid" },
];

const READING_TINT_OPTIONS: readonly { value: ReadingTint; label: string }[] = [
  { value: "none", label: "None" },
  { value: "warm-paper", label: "Warm Paper" },
  { value: "soft-sepia", label: "Soft Sepia" },
  { value: "cool-slate", label: "Cool Slate" },
];

const SCREEN_PADDING_OPTIONS: readonly { value: ScreenPaddingPreset; label: string }[] = [
  { value: "edge", label: "Edge" },
  { value: "compact", label: "Compact" },
  { value: "standard", label: "Standard" },
  { value: "wide", label: "Wide" },
];

const PROGRESS_BAR_STYLE_OPTIONS: readonly { value: ProgressBarStyle; label: string }[] = [
  { value: "rounded", label: "Rounded" },
  { value: "sharp", label: "Sharp" },
  { value: "segmented", label: "Segmented" },
  { value: "thin-line", label: "Thin Line" },
];

const DIVIDER_STYLE_OPTIONS: readonly { value: DividerStyle; label: string }[] = [
  { value: "hairline", label: "Hairline" },
  { value: "none", label: "None" },
  { value: "dashed-soft", label: "Stitched Dash" },
  { value: "accent-fade", label: "Ink Accent" },
];

const SECTION_HEADER_STYLE_OPTIONS: readonly { value: SectionHeaderStyle; label: string }[] = [
  { value: "eyebrow", label: "Eyebrow" },
  { value: "bold-title", label: "Bold Title" },
  { value: "accent-pill", label: "Index Tag" },
  { value: "ruled-line", label: "Ruled Masthead" },
];

const PRESS_EFFECT_OPTIONS: readonly { value: PressEffect; label: string }[] = [
  { value: "scale-ripple", label: "Scale + Ripple" },
  { value: "ripple-only", label: "Ripple Only" },
  { value: "opacity-only", label: "Opacity Only" },
  { value: "none", label: "None" },
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
  { value: "mono-tech", label: "Industrial Sans" },
  { value: "geometric", label: "Geometric" },
  { value: "humanist", label: "Humanist" },
  { value: "condensed", label: "Condensed News" },
  { value: "grotesk", label: "Medium Grotesk" },
  { value: "casual", label: "Warm Casual" },
  { value: "cursive", label: "Script / Cursive" },
];

const HEADING_CASE_OPTIONS: readonly { value: HeadingTransform; label: string }[] = [
  { value: "none", label: "Normal" },
  { value: "uppercase", label: "UPPERCASE" },
  { value: "capitalize", label: "Capitalize" },
];

const NUMERIC_STYLE_OPTIONS: readonly { value: NumericStyle; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "tabular-mono", label: "Tabular Mono" },
];

const HAPTIC_STRENGTH_OPTIONS: readonly { value: HapticStrength; label: string }[] = [
  { value: "off", label: "Off" },
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "strong", label: "Strong" },
];

const SCROLLBAR_STYLE_OPTIONS: readonly { value: HorizontalScrollbarStyle; label: string }[] = [
  { value: "hidden", label: "Hidden" },
  { value: "native-indicator", label: "System Bar" },
  { value: "subtle-bar", label: "Hairline Rail" },
  { value: "accent-track", label: "Solid Track" },
  { value: "tick-ruler", label: "Precision Ruler" },
  { value: "dots", label: "Step Dots" },
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
  { value: "index-tabs", label: "Index File Tabs" },
  { value: "compact-scroll", label: "Compact Scroll" },
  { value: "minimal-text", label: "Minimal Text" },
  { value: "two-col-grid", label: "2-Col Grid" },
  { value: "three-col-tiles", label: "3-Col Tiles" },
  { value: "vertical-list", label: "Vertical List" },
  { value: "braun-keys", label: "Braun Keys" },
  { value: "swiss-index", label: "Swiss Index" },
  { value: "manila-folders", label: "Manila Folders" },
];

const APP_BAR_STYLE_OPTIONS: readonly { value: AppBarStyle; label: string }[] = [
  { value: "standard", label: "Standard" },
  { value: "compact", label: "Compact" },
  { value: "tall-editorial", label: "Tall Editorial" },
  { value: "borderless", label: "Borderless" },
  { value: "accent-tinted", label: "Accent Tinted" },
  { value: "floating", label: "Floating" },
  { value: "braun-tuner", label: "Braun Tuner" },
  { value: "swiss-masthead", label: "Swiss Masthead" },
  { value: "eink-runninghead", label: "E-Ink Folio" },
  { value: "avionics-strip", label: "Avionics Strip" },
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
  { value: "elevated", label: "Elevated Card" },
  { value: "paper-ink", label: "Paper Ink" },
  { value: "neo-brutal", label: "Swiss Print" },
  { value: "inset-tray", label: "Inset Tray" },
  { value: "tonal", label: "Tonal Soft" },
  { value: "outlined", label: "Crisp Outline" },
  { value: "crisp", label: "High Clarity" },
  { value: "flat", label: "Seamless Flat" },
  { value: "frameless", label: "Unboxed" },
  { value: "braun-chassis", label: "Braun Chassis" },
  { value: "swiss-ledger", label: "Swiss Ledger" },
  { value: "riso-overprint", label: "Riso Overprint" },
  { value: "horology-bezel", label: "Horology Bezel" },
  { value: "avionics-panel", label: "Avionics Panel" },
  { value: "ceramic-glaze", label: "Ceramic Glaze" },
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
  { value: "minimal", label: "Soft Wash" },
  { value: "braun-detent", label: "Braun Detent" },
  { value: "swiss-timetable", label: "Swiss Timetable" },
  { value: "solari-flap", label: "Solari Split-Flap" },
  { value: "porcelain-wells", label: "Porcelain Wells" },
];

const MENU_INDICATOR_OPTIONS: readonly { value: MenuIndicatorStyle; label: string }[] = [
  { value: "pill", label: "Tonal Pill" },
  { value: "underline", label: "Bottom Rule" },
  { value: "bracket", label: "Top Notch" },
  { value: "dot", label: "Minimal Dot" },
  { value: "filled-box", label: "Solid Stamp" },
  { value: "outline", label: "Precision Frame" },
  { value: "hanko-seal", label: "Hanko Seal" },
  { value: "plinth-lift", label: "Plinth Lift" },
  { value: "vernier-loupe", label: "Vernier Loupe" },
];

const VERT_SCROLLBAR_OPTIONS: readonly { value: VerticalScrollbarStyle; label: string }[] = [
  { value: "hidden", label: "Hidden" },
  { value: "native", label: "Native" },
  { value: "always-visible", label: "Always Show" },
];

const SHADOW_OPTIONS: readonly { value: CardShadowIntensity; label: string }[] = [
  { value: "none", label: "Flat" },
  { value: "subtle", label: "Soft Lift" },
  { value: "medium", label: "Elevated" },
  { value: "crisp-3d", label: "Hard Offset" },
  { value: "strong", label: "Deep Float" },
];

const INPUT_STYLE_OPTIONS: readonly { value: InputStylePreset; label: string }[] = [
  { value: "outlined", label: "Outlined" },
  { value: "filled", label: "Filled" },
  { value: "underlined", label: "Editorial Rule" },
  { value: "pill", label: "Pill" },
  { value: "minimal", label: "Minimal" },
  { value: "accent", label: "Ink Frame" },
  { value: "unboxed", label: "Unboxed" },
  { value: "swiss-ledger", label: "Swiss Ledger" },
  { value: "eink-ribbon", label: "E-Ink Ribbon" },
  { value: "ceramic-basin", label: "Ceramic Basin" },
  { value: "avionics-scratchpad", label: "Avionics Pad" },
];

const BUTTON_STYLE_OPTIONS: readonly { value: ButtonStylePreset; label: string }[] = [
  { value: "filled", label: "Solid Ink" },
  { value: "tinted", label: "Soft Tint" },
  { value: "outlined", label: "Hairline Outline" },
  { value: "elevated", label: "Raised Card" },
  { value: "keycap-press", label: "Tactile Keycap" },
  { value: "editorial-link", label: "Editorial Link" },
  { value: "unboxed-text", label: "Bare Text" },
  { value: "braun-keycap", label: "Braun Keycap" },
  { value: "swiss-split", label: "Swiss Split" },
  { value: "riso-stamp", label: "Riso Stamp" },
  { value: "washi-seal", label: "Washi Seal" },
  { value: "avionics-guard", label: "Avionics Guard" },
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
  { value: "none", label: "Clean" },
  { value: "double-rule", label: "Editorial Rule" },
  { value: "corner-frame", label: "Print Frame" },
  { value: "offset-edge", label: "Hardware Lip" },
  { value: "tinted-border", label: "Ink Outline" },
  { value: "bottom-bar", label: "Ledger Foot" },
  { value: "ticket-stub", label: "Riso Ticket Stub" },
  { value: "rivet-bezel", label: "Rivet Bezel" },
  { value: "hanko-corner", label: "Hanko Corner" },
  { value: "split-flap", label: "Split-Flap Seam" },
  { value: "plinth-slab", label: "Brutalist Plinth" },
];

const ICON_BADGE_OPTIONS: readonly { value: IconBadgeStyle; label: string }[] = [
  { value: "soft-circle", label: "Soft Circle" },
  { value: "recessed-well", label: "Recessed Well" },
  { value: "postage-stamp", label: "Postage Stamp" },
  { value: "split-disc", label: "Split Disc" },
  { value: "monogram-frame", label: "Editorial Frame" },
  { value: "ceramic-tile", label: "Ceramic Tile" },
  { value: "tilted-lozenge", label: "Tilted Diamond" },
  { value: "ink-seal", label: "Ink Seal" },
  { value: "bare-glyph", label: "Floating Glyph" },
  { value: "hidden", label: "No Icons" },
];

const ICON_PACK_OPTIONS: readonly { value: IconPackStyle; label: string }[] = [
  { value: "outline", label: "Outline" },
  { value: "filled", label: "Filled" },
  { value: "sharp", label: "Sharp" },
  { value: "duotone", label: "Duotone" },
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

const MINI_PILLS = ["All", "Tax", "CBC", "Laws"] as const;

const MINI_TABS: readonly {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { label: "Home", icon: "home-outline" },
  { label: "Learn", icon: "book-outline" },
  { label: "Tools", icon: "construct-outline" },
  { label: "Saved", icon: "bookmark-outline" },
];

const PILL_SHAPE_RADIUS: Record<ButtonRadiusPreset, number> = {
  square: 0,
  sharp: 3,
  subtle: 5,
  rounded: 8,
  soft: 12,
  pill: 999,
};

const DIFF_KEY_LABELS: Partial<Record<keyof ThemeConfig, string>> = {
  mode: "Mode",
  presetId: "Preset",
  customColors: "Custom Colors",
  oledBlack: "OLED Black",
  accentIntensity: "Vibrancy",
  readingTint: "Reading Tint",
  surfaceStyle: "Surface",
  borderWidth: "Borders",
  cardRadius: "Card Radius",
  buttonRadius: "Btn Radius",
  fontScale: "Font Scale",
  fontPair: "Fonts",
  lineHeightScale: "Line Height",
  letterSpacingOffset: "Spacing",
  density: "Density",
  screenPadding: "Margins",
  showKenyaStripe: "Flag Stripe",
  stripeThickness: "Stripe Size",
  tabBarStyle: "Tab Bar",
  tabBarLabels: "Tab Labels",
  tabBarSize: "Tab Size",
  menuIndicatorStyle: "Indicator",
  appBarStyle: "App Bar",
  appBarSize: "Header Size",
  headerAlignment: "Header Align",
  pillBarLayout: "Pill Layout",
  pillShape: "Pill Shape",
  pillSize: "Pill Size",
  horizontalScrollbarStyle: "H-Scrollbar",
  horizontalScrollbarThickness: "Bar Width",
  scrollbarTrackVisible: "Bar Track",
  verticalScrollbarStyle: "V-Scrollbar",
  edgeFadeEnabled: "Edge Fade",
  scrollBounceEnabled: "Bounce",
  cardShadowIntensity: "Shadow",
  inputStyle: "Inputs",
  buttonStyle: "Btn Style",
  buttonSize: "Btn Size",
  cardPadding: "Card Pad",
  homeLayout: "Home Layout",
  cardAccentStyle: "Card Accent",
  iconBadgeStyle: "Icon Badge",
  iconPack: "Icon Glyph Style",
  iconScale: "Icon Scale",
  headingTransform: "Heading Case",
  numericStyle: "Numbers",
  progressBarStyle: "Progress Bar",
  dividerStyle: "Dividers",
  sectionHeaderStyle: "Sec. Headers",
  pageTransition: "Transitions",
  statusBarMode: "Status Bar",
  quickMenuPosition: "Quick Jump",
  hapticsEnabled: "Haptics",
  hapticStrength: "Haptic Level",
  reduceMotion: "Reduce Motion",
  highContrastBorders: "High Contrast",
  colorBlindMode: "Color Blind",
  pressEffect: "Tap Effect",
  showCardIcons: "Card Icons",
  showTabIcons: "Tab Icons",
  showCardDescriptions: "Card Descriptions",
  showCategoryBadges: "Category Tags",
  showTrailingArrows: "Trailing Arrows",
  showHomeGreeting: "Home Greeting",
  showDailyWidgets: "Daily Widgets",
  showOfflinePill: "Offline Pill",
};

const HEX_REGEX = /^#[0-9A-Fa-f]{6}$/;
interface SettingsSearchEntry {
  id: string;
  label: string;
  section: AccordionKey;
  keywords: string;
  kind?: "control" | "makeover" | "preset";
  targetId?: string;
}

const STATIC_SETTINGS_SEARCH_ENTRIES: readonly SettingsSearchEntry[] = [
  // Makeovers
  { id: "ctrl-makeovers", label: "One-Tap Makeovers", section: "makeovers", keywords: "makeovers look profile full redesign style theme" },
  { id: "ctrl-save-theme", label: "Save Custom Theme", section: "makeovers", keywords: "save custom theme bookmark my themes saved presets" },
  // Presets
  { id: "ctrl-presets", label: "Theme Presets", section: "presets", keywords: "presets color palette scheme dark light themes" },
  // Colors
  { id: "ctrl-accent-vibrancy", label: "Accent Vibrancy", section: "colors", keywords: "accent vibrancy intensity muted balanced vivid saturation colors" },
  { id: "ctrl-reading-tint", label: "Reading Comfort Tint", section: "colors", keywords: "reading comfort tint warm paper soft sepia cool slate eye care colors" },
  { id: "ctrl-primary-accent", label: "Primary Accent Color", section: "colors", keywords: "primary accent color gold button highlight hex custom override" },
  { id: "ctrl-secondary-accent", label: "Secondary Accent Color", section: "colors", keywords: "secondary accent color green badge success hex custom override" },
  { id: "ctrl-tertiary-accent", label: "Tertiary Accent Color", section: "colors", keywords: "tertiary accent color blue info tag hex custom override" },
  { id: "ctrl-danger-accent", label: "Danger Accent Color", section: "colors", keywords: "danger accent color red alert warning error hex custom override" },
  { id: "ctrl-bg-primary", label: "Background Color", section: "colors", keywords: "background bgPrimary canvas screen hex custom color" },
  { id: "ctrl-surface-card", label: "Card Surface Color", section: "colors", keywords: "card surface color container sheet hex custom" },
  { id: "ctrl-text-primary", label: "Primary Text Color", section: "colors", keywords: "primary text color ink copy heading hex custom" },
  { id: "ctrl-border-color", label: "Border Color", section: "colors", keywords: "border color outline divider stroke hex custom" },
  { id: "ctrl-scrollbar-color", label: "Horizontal Scrollbar Color", section: "colors", keywords: "horizontal scrollbar color thumb indicator rail hex custom" },
  // Typography
  { id: "ctrl-font-scale", label: "Font Scale", section: "typography", keywords: "font scale text size zoom larger smaller 85% 92% 100% 108% 118% 128%" },
  { id: "ctrl-font-pair", label: "Font Pairing", section: "typography", keywords: "font pairing typeface fonts outfit inter classic sans editorial serif mono tech industrial geometric humanist condensed news grotesk warm casual script cursive" },
  { id: "ctrl-heading-case", label: "Heading Case", section: "typography", keywords: "heading case transform normal uppercase capitalize title text" },
  { id: "ctrl-number-style", label: "Number Style", section: "typography", keywords: "number style numeric default tabular mono monospace digits" },
  { id: "ctrl-line-height", label: "Line Height", section: "typography", keywords: "line height leading compact snug normal relaxed airy editorial spacing" },
  { id: "ctrl-letter-spacing", label: "Letter Spacing", section: "typography", keywords: "letter spacing tracking condensed tight normal open wide tracked kerning" },
  // Surfaces & Layout ("layout" section, also matches "surfaces")
  { id: "ctrl-surface-style", label: "Surface Style", section: "layout", keywords: "surfaces surface style card elevated paper ink neo brutal swiss print inset tray tonal soft crisp outline high clarity seamless flat frameless unboxed" },
  { id: "ctrl-unboxed-mode", label: "Unboxed / Frameless Mode", section: "layout", keywords: "unboxed frameless borderless bare text minimal strip clean no boxes surfaces" },
  { id: "ctrl-card-radius", label: "Card Corner Radius", section: "layout", keywords: "card corner radius square sharp subtle rounded soft pill surfaces" },
  { id: "ctrl-button-radius", label: "Button Radius", section: "layout", keywords: "button radius shape square sharp subtle rounded soft pill" },
  { id: "ctrl-border-width", label: "Border Thickness", section: "layout", keywords: "border thickness width none hairline thin medium thick bold outline surfaces" },
  { id: "ctrl-card-shadow", label: "Card Shadow & Depth", section: "layout", keywords: "card shadow depth elevation flat soft lift elevated hard offset crisp 3d deep float surfaces" },
  { id: "ctrl-input-style", label: "Input Field Style", section: "layout", keywords: "input field style search box outlined filled underlined editorial rule pill minimal accent ink frame unboxed" },
  { id: "ctrl-button-style", label: "Button Style", section: "layout", keywords: "button style solid ink filled soft tint tinted hairline outline elevated raised card tactile keycap editorial link bare text unboxed" },
  { id: "ctrl-home-layout", label: "Home & Grid Layout", section: "layout", keywords: "home grid layout classic bento grid compact list editorial cards minimal rows large tiles" },
  { id: "ctrl-screen-padding", label: "Screen Edge Margins", section: "layout", keywords: "screen edge margins padding edge compact standard wide layout" },
  { id: "ctrl-progress-bar", label: "Progress Bar Style", section: "layout", keywords: "progress bar style rounded sharp segmented thin line" },
  { id: "ctrl-divider-style", label: "List Divider Style", section: "layout", keywords: "list divider style hairline none stitched dash dashed soft ink accent fade" },
  { id: "ctrl-section-header", label: "Section Header Style", section: "layout", keywords: "section header style eyebrow bold title index tag accent pill ruled masthead line" },
  { id: "ctrl-card-accent", label: "Card Accent Strip", section: "layout", keywords: "card accent strip clean none editorial double rule print corner frame hardware offset lip ink outline ledger bottom bar" },
  { id: "ctrl-icon-container", label: "Icon Container", section: "layout", keywords: "icon container badge style icons soft circle recessed well postage stamp split disc monogram editorial frame ceramic tile tilted diamond lozenge ink seal floating bare glyph hidden no icons" },
  { id: "ctrl-icon-pack", label: "Icon Glyph Style", section: "layout", keywords: "icon glyph style pack icons outline filled sharp duotone" },
  { id: "ctrl-density", label: "Layout Density", section: "layout", keywords: "layout density ultra compact comfortable default balanced relaxed spacious" },
  { id: "ctrl-pill-size", label: "Pill & Chip Size", section: "layout", keywords: "pill chip size xs sm small md medium lg large xl" },
  { id: "ctrl-icon-size", label: "Icon Size", section: "layout", keywords: "icon size scale icons 80% 90% 100% 112% 125%" },
  { id: "ctrl-button-size", label: "Button Size", section: "layout", keywords: "button size xs sm small md medium lg large xl" },
  { id: "ctrl-card-padding", label: "Card Padding", section: "layout", keywords: "card padding xs sm small md medium lg large xl" },
  { id: "ctrl-tab-bar-size", label: "Bottom Bar Size", section: "layout", keywords: "bottom bar tab bar size xs sm small md medium lg large xl" },
  { id: "ctrl-app-bar-size", label: "Top Header Size", section: "layout", keywords: "top header app bar size xs sm small md medium lg large xl" },
  { id: "ctrl-ultra-minimal", label: "Ultra-Minimal Strip", section: "layout", keywords: "ultra minimal strip down unboxed frameless hide icons visibility" },
  { id: "ctrl-restore-elements", label: "Restore All Elements", section: "layout", keywords: "restore all elements visibility show icons reset" },
  { id: "ctrl-vis-card-icons", label: "Card & Tile Icons", section: "layout", keywords: "card tile icons visibility show hide toggle" },
  { id: "ctrl-vis-tab-icons", label: "Bottom Tab Icons", section: "layout", keywords: "bottom tab icons visibility show hide navigation bar toggle" },
  { id: "ctrl-vis-descriptions", label: "Card Descriptions", section: "layout", keywords: "card descriptions subtitle summary visibility show hide toggle" },
  { id: "ctrl-vis-category-tags", label: "Category Tags", section: "layout", keywords: "category tags pills badges eyebrow visibility show hide toggle" },
  { id: "ctrl-vis-arrows", label: "Trailing Arrows", section: "layout", keywords: "trailing arrows chevrons visibility show hide toggle" },
  { id: "ctrl-vis-greeting", label: "Home Greeting Hero", section: "layout", keywords: "home greeting hero banner visibility show hide toggle" },
  { id: "ctrl-vis-daily-widgets", label: "Daily Widgets", section: "layout", keywords: "daily widgets sheng trivia visibility show hide toggle" },
  { id: "ctrl-vis-offline-pill", label: "Top Bar Offline Pill", section: "layout", keywords: "top bar offline pill status badge visibility show hide toggle" },
  // Navigation ("navigation" section: Menus & Scrollbars)
  { id: "ctrl-flag-stripe", label: "Kenyan Flag Stripe", section: "navigation", keywords: "kenyan flag stripe black red green accent bar toggle" },
  { id: "ctrl-tab-bar-style", label: "Bottom Tab Bar Style", section: "navigation", keywords: "bottom tab bar style classic floating pill top accent segmented docked cards compact minimal soft wash navigation menu" },
  { id: "ctrl-menu-indicator", label: "Active Menu Indicator", section: "navigation", keywords: "active menu indicator tonal pill bottom rule underline top notch bracket minimal dot solid stamp filled box precision frame outline" },
  { id: "ctrl-quick-jump", label: "Floating Quick-Jump Menu", section: "navigation", keywords: "floating quick jump menu fab position off bottom right bottom left" },
  { id: "ctrl-status-bar", label: "Status Bar Icons", section: "navigation", keywords: "status bar icons mode auto light dark" },
  { id: "ctrl-page-transition", label: "Screen Transition Animation", section: "navigation", keywords: "screen transition animation page slide fade bottom sheet fast instant none os default" },
  { id: "ctrl-v-scrollbar", label: "Vertical Scrollbar", section: "navigation", keywords: "vertical scrollbar style hidden native always visible show" },
  { id: "ctrl-tab-labels", label: "Tab Bar Labels", section: "navigation", keywords: "tab bar labels text bottom navigation show hide toggle" },
  { id: "ctrl-stripe-thickness", label: "Flag Stripe Thickness", section: "navigation", keywords: "flag stripe thickness size hidden hairline thin medium thick bold" },
  { id: "ctrl-app-bar-style", label: "Top App Bar Style", section: "navigation", keywords: "top app bar header style standard compact tall editorial borderless accent tinted floating" },
  { id: "ctrl-header-align", label: "Header Alignment", section: "navigation", keywords: "header alignment left center title" },
  { id: "ctrl-h-scrollbar-style", label: "Horizontal Scrollbar Style", section: "navigation", keywords: "horizontal scrollbar style hidden native system bar hairline rail subtle accent solid track precision tick ruler step dots" },
  { id: "ctrl-h-scrollbar-thick", label: "Horizontal Scrollbar Thickness", section: "navigation", keywords: "horizontal scrollbar thickness width 2px 3px 4px 6px 8px 10px" },
  { id: "ctrl-scrollbar-track", label: "Scrollbar Background Track", section: "navigation", keywords: "scrollbar background rail track visible show hide toggle" },
  { id: "ctrl-pill-bar-layout", label: "Pill Bar Layout", section: "navigation", keywords: "pill bar layout scroll expand dropdown picker prev next stepper underline tabs segmented bar floating dock index file tabs compact minimal text 2-col grid 3-col tiles vertical list" },
  { id: "ctrl-pill-shape", label: "Pill Corner Shape", section: "navigation", keywords: "pill corner shape radius square sharp subtle rounded soft" },
  { id: "ctrl-edge-fade", label: "Edge Fade Shadow", section: "navigation", keywords: "edge fade shadow feather gradient horizontal scroll toggle" },
  { id: "ctrl-scroll-bounce", label: "Elastic Scroll Bounce", section: "navigation", keywords: "elastic scroll bounce spring feedback toggle" },
  // Accessibility
  { id: "ctrl-haptics", label: "Haptic Strength", section: "accessibility", keywords: "haptic strength vibration feedback off light medium strong accessibility" },
  { id: "ctrl-tap-effect", label: "Tap Feedback Effect", section: "accessibility", keywords: "tap press feedback effect scale ripple only opacity none accessibility" },
  { id: "ctrl-reduce-motion", label: "Reduce Motion", section: "accessibility", keywords: "reduce motion animations accessibility toggle" },
  { id: "ctrl-high-contrast", label: "High-Contrast Borders", section: "accessibility", keywords: "high contrast borders outlines clarity accessibility toggle" },
  { id: "ctrl-color-blind", label: "Color-Blind Safe Palette", section: "accessibility", keywords: "color blind safe palette deuteranopia protanopia tritanopia accessibility" },
  // Backup
  { id: "ctrl-export-json", label: "Export Theme JSON", section: "backup", keywords: "export theme json code share copy backup" },
  { id: "ctrl-import-json", label: "Import JSON Theme", section: "backup", keywords: "import paste apply json theme code restore backup" },
  { id: "ctrl-reset-all", label: "Reset All to Default", section: "backup", keywords: "reset all default restore factory theme backup" },
];

const SETTINGS_SEARCH_INDEX: readonly SettingsSearchEntry[] = [
  ...APP_LOOK_PROFILES.map((profile): SettingsSearchEntry => ({
    id: `makeover-${profile.id}`,
    label: profile.name,
    section: "makeovers",
    keywords: `${profile.name} ${profile.tagline} ${profile.id} makeover look theme`,
    kind: "makeover",
    targetId: profile.id,
  })),
  ...THEME_PRESETS.map((preset): SettingsSearchEntry => ({
    id: `preset-${preset.id}`,
    label: preset.name,
    section: "presets",
    keywords: `${preset.name} ${preset.tagline} ${preset.id} ${preset.recommendedMode} preset palette theme`,
    kind: "preset",
    targetId: preset.id,
  })),
  ...STATIC_SETTINGS_SEARCH_ENTRIES,
];


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

function formatFallbackKeyLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function normalizeDiffItems(raw: readonly DiffItemRaw[]): NormalizedDiffChip[] {
  const seen = new Set<keyof ThemeConfig>();
  const out: NormalizedDiffChip[] = [];
  for (const item of raw) {
    const key: keyof ThemeConfig =
      typeof item === "string" ? item : item.key;
    if (seen.has(key)) continue;
    seen.add(key);
    const label =
      typeof item === "object" && item !== null && typeof item.label === "string" && item.label.trim().length > 0
        ? item.label
        : DIFF_KEY_LABELS[key] ?? formatFallbackKeyLabel(String(key));
    out.push({ key, label });
  }
  return out;
}

function isMakeoverActive(
  profile: (typeof APP_LOOK_PROFILES)[number],
  cfg: ThemeConfig | undefined
): boolean {
  if (!cfg) return false;
  if (Object.values(cfg.customColors ?? {}).filter(Boolean).length > 0) return false;
  for (const [key, val] of Object.entries(profile.config)) {
    if (key === "customColors") continue;
    const curVal = cfg[key as keyof ThemeConfig];
    if (curVal !== val) return false;
  }
  return true;
}

export function ThemeSettingsView() {
  const { language: appLang, t: tApp } = useAppLanguage();
  const themeCtx = useTheme();
  const {
    theme,
    isDark,
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
    exportThemeJson,
  } = themeCtx;
  const {
    savedThemes,
    saveCustomTheme,
    applySavedTheme,
    deleteSavedTheme,
  } = useSavedThemes();

  const [previewMode, setPreviewMode] = useState<PreviewMode>("mini-app");
  const [peekingDefault, setPeekingDefault] = useState<boolean>(false);
  const [previewActivePill, setPreviewActivePill] = useState<number>(0);
  const [previewActiveTab, setPreviewActiveTab] = useState<number>(0);

  const [settingsQuery, setSettingsQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(settingsQuery);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [openSections, setOpenSections] = useState<Record<AccordionKey, boolean>>({
    makeovers: true,
    atlas: false,
    presets: false,
    colors: false,
    typography: false,
    layout: false,
    navigation: false,
    accessibility: false,
    backup: false,
  });
  const [presetModeFilter, setPresetModeFilter] = useState<"all" | "dark" | "light">("all");
  const [presetFullTransform, setPresetFullTransform] = useState<boolean>(true);
  const [saveThemeName, setSaveThemeName] = useState<string>("");
  const [saveThemeFeedback, setSaveThemeFeedback] = useState<string | null>(null);
  const [hexDrafts, setHexDrafts] = useState<Record<string, string>>({});
  const [importInput, setImportInput] = useState<string>("");
  const [importStatus, setImportStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const next: Record<string, string> = {};
    const customColors = themeConfig?.customColors ?? {};
    for (const role of COLOR_ROLES) {
      next[role.key] = customColors[role.key] ?? "";
    }
    setHexDrafts(next);
  }, [themeConfig?.customColors]);

  const darkCount = useMemo(
    () => THEME_PRESETS.filter((p) => p.recommendedMode === "dark").length,
    []
  );
  const lightCount = useMemo(
    () => THEME_PRESETS.filter((p) => p.recommendedMode === "light").length,
    []
  );

  const trimmedDeferredQuery = deferredQuery.trim();
  const isSearching = trimmedDeferredQuery.length > 0;

  const searchResults = useMemo(() => {
    if (!trimmedDeferredQuery) {
      return {
        matchedEntries: [] as SettingsSearchEntry[],
        matchedSections: new Set<AccordionKey>(),
        matchedMakeoverIds: new Set<string>(),
        matchedPresetIds: new Set<string>(),
      };
    }
    const tokens = trimmedDeferredQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const matchedEntries: SettingsSearchEntry[] = [];
    const matchedSections = new Set<AccordionKey>();
    const matchedMakeoverIds = new Set<string>();
    const matchedPresetIds = new Set<string>();

    for (const entry of SETTINGS_SEARCH_INDEX) {
      const haystack = `${entry.label} ${entry.keywords}`.toLowerCase();
      if (tokens.every((t) => haystack.includes(t))) {
        matchedEntries.push(entry);
        matchedSections.add(entry.section);
        if (entry.kind === "makeover" && entry.targetId) {
          matchedMakeoverIds.add(entry.targetId);
        } else if (entry.kind === "preset" && entry.targetId) {
          matchedPresetIds.add(entry.targetId);
        }
      }
    }

    return {
      matchedEntries,
      matchedSections,
      matchedMakeoverIds,
      matchedPresetIds,
    };
  }, [trimmedDeferredQuery]);

  const displayedMakeovers = useMemo(() => {
    if (isSearching && searchResults.matchedMakeoverIds.size > 0) {
      return APP_LOOK_PROFILES.filter((p) =>
        searchResults.matchedMakeoverIds.has(p.id)
      );
    }
    return APP_LOOK_PROFILES;
  }, [isSearching, searchResults.matchedMakeoverIds]);

  const filteredPresets = useMemo(() => {
    if (isSearching && searchResults.matchedPresetIds.size > 0) {
      return THEME_PRESETS.filter((p) =>
        searchResults.matchedPresetIds.has(p.id)
      );
    }
    return THEME_PRESETS.filter(
      (p) => presetModeFilter === "all" || p.recommendedMode === presetModeFilter
    );
  }, [isSearching, searchResults.matchedPresetIds, presetModeFilter]);

  const backupExpanded = isSearching
    ? searchResults.matchedSections.has("backup")
    : openSections.backup;

  const exportedJson = useMemo(
    () => (backupExpanded ? JSON.stringify(themeConfig ?? {}, null, 2) : ""),
    [backupExpanded, themeConfig]
  );

  const allExpanded = useMemo(
    () => ALL_ACCORDION_KEYS.every((k) => openSections[k]),
    [openSections]
  );

  const diffChips = useMemo<NormalizedDiffChip[]>(() => {
    if (!themeConfig) return [];
    const raw = diffThemeConfig(themeConfig) as readonly DiffItemRaw[];
    return Array.isArray(raw) ? normalizeDiffItems(raw) : [];
  }, [themeConfig]);

  const previewConfig: ThemeConfig = peekingDefault
    ? DEFAULT_THEME_CONFIG
    : themeConfig;

  const previewTheme: ThemeColors = useMemo(() => {
    if (!peekingDefault) return theme;
    return resolveThemeColors(
      darkColors,
      lightColors,
      DEFAULT_THEME_CONFIG,
      isDark
    ) as ThemeColors;
  }, [peekingDefault, theme, isDark]);

  const previewMetrics: ThemeMetrics = useMemo(() => {
    if (!peekingDefault) return themeMetrics;
    return resolveThemeMetrics(DEFAULT_THEME_CONFIG);
  }, [peekingDefault, themeMetrics]);

  const previewFonts = useMemo(() => {
    if (!peekingDefault) return resolvedFonts;
    return resolveFontPairFamilies(
      DEFAULT_THEME_CONFIG.fontPair,
      Platform.OS === "ios"
    );
  }, [peekingDefault, resolvedFonts]);

  const headingTransform: HeadingTransform =
    themeConfig?.headingTransform ?? "none";
  const numericStyle: NumericStyle =
    themeConfig?.numericStyle ?? "default";
  const hapticStrength: HapticStrength =
    themeConfig?.hapticStrength ??
    (themeConfig?.hapticsEnabled === false ? "off" : "light");

  const doHaptic = useCallback(() => {
    triggerHaptic();
  }, []);

  const handleConfigFieldChange = useCallback(
    (key: keyof ThemeConfig, val: any) => {
      doHaptic();
      updateThemeConfig({ [key]: val } as Partial<ThemeConfig>);
    },
    [doHaptic, updateThemeConfig]
  );

  const handleSelectPreviewPill = useCallback(
    (idx: number) => {
      doHaptic();
      setPreviewActivePill(idx);
    },
    [doHaptic]
  );

  const handleSelectPreviewTab = useCallback(
    (idx: number) => {
      doHaptic();
      setPreviewActiveTab(idx);
    },
    [doHaptic]
  );

  const handleSettingsQueryChange = useCallback((text: string) => {
    setSettingsQuery(text);
    setActiveFilter((prev) => (prev !== "all" ? "all" : prev));
  }, []);

  const handleClearSearch = useCallback(() => {
    doHaptic();
    setSettingsQuery("");
    setActiveFilter("all");
  }, [doHaptic]);

  const handleJumpToSearchSection = useCallback(
    (section: AccordionKey) => {
      doHaptic();
      setActiveFilter(section);
      setOpenSections((prev) => ({ ...prev, [section]: true }));
    },
    [doHaptic]
  );

  const handleResetSingleKey = useCallback(
    (key: keyof ThemeConfig) => {
      doHaptic();
      if (key === "customColors") {
        updateThemeConfig({ customColors: {} });
        return;
      }
      const patch: Partial<ThemeConfig> = {
        [key]: DEFAULT_THEME_CONFIG[key],
      };
      updateThemeConfig(patch);
    },
    [doHaptic, updateThemeConfig]
  );

  const handleToggleSection = useCallback(
    (key: AccordionKey) => {
      doHaptic();
      setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    [doHaptic]
  );

  const sectionToggleHandlers = useMemo<Record<AccordionKey, () => void>>(
    () => ({
      makeovers: () => handleToggleSection("makeovers"),
      atlas: () => handleToggleSection("atlas"),
      presets: () => handleToggleSection("presets"),
      colors: () => handleToggleSection("colors"),
      typography: () => handleToggleSection("typography"),
      layout: () => handleToggleSection("layout"),
      navigation: () => handleToggleSection("navigation"),
      accessibility: () => handleToggleSection("accessibility"),
      backup: () => handleToggleSection("backup"),
    }),
    [handleToggleSection]
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
      atlas: nextOpen,
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
      setThemeMode(mode);
    },
    [setThemeMode]
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
        message: exportThemeJson(),
      });
    } catch {
      // Ignore user cancel
    }
  }, [doHaptic, exportThemeJson]);

  const handleApplyImport = useCallback(() => {
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
  }, [importInput, importThemeJson]);

  const handleConfirmReset = useCallback(() => {
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
  }, [resetThemeConfig]);

  const handleSaveTheme = useCallback(() => {
    const saved = saveCustomTheme(
      saveThemeName || `Custom ${savedThemes.length + 1}`
    );
    if (saved) {
      setSaveThemeName("");
      setSaveThemeFeedback(`Saved "${saved.name}"!`);
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
      }
      feedbackTimerRef.current = setTimeout(() => {
        setSaveThemeFeedback(null);
        feedbackTimerRef.current = null;
      }, 2600);
    }
  }, [saveCustomTheme, saveThemeName, savedThemes.length]);

  const fontScale = themeMetrics?.fontScale ?? themeConfig?.fontScale ?? 1;
  const currentMode: ThemeMode =
    themeConfig?.mode ?? (isDark ? "dark" : "light");

  const activeMakeover = useMemo(
    () => APP_LOOK_PROFILES.find((p) => isMakeoverActive(p, themeConfig)),
    [themeConfig]
  );
  const activePreset = useMemo(
    () => THEME_PRESETS.find((p) => p.id === themeConfig?.presetId),
    [themeConfig?.presetId]
  );
  const customColorCount = useMemo(
    () => Object.values(themeConfig?.customColors ?? {}).filter(Boolean).length,
    [themeConfig?.customColors]
  );

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
  const accentVibrancyLabel = findLabel(
    ACCENT_INTENSITY_OPTIONS,
    themeConfig?.accentIntensity,
    "Balanced"
  );

  const onGoldInk = getContrastInk(theme.gold);
  const isVisible = (key: AccordionKey) => {
    if (isSearching && !searchResults.matchedSections.has(key)) {
      return false;
    }
    return activeFilter === "all" || activeFilter === key;
  };
  const isExpanded = (key: AccordionKey) =>
    isSearching ? searchResults.matchedSections.has(key) : openSections[key];

  return (
    <View style={[styles.root, { backgroundColor: theme.bgPrimary }]}>
      {/* Pinned Top Live Preview Dock + Active Changes Summary Bar */}
      <View
        style={[
          styles.previewDock,
          {
            backgroundColor: theme.surfaceContainerLow,
            borderBottomColor: theme.outlineVariant,
          },
        ]}
      >
        {/* Dock Header: Mode Toggle + Hold to Peek Default */}
        <View style={styles.dockHeaderRow}>
          <View style={styles.dockTitleCluster}>
            <Feather name="eye" size={12} color={theme.gold} />
            <Text
              style={[styles.dockEyebrow, { color: theme.textSecondary }]}
              numberOfLines={1}
            >
              {peekingDefault ? "DEFAULT" : "PREVIEW"}
            </Text>
          </View>

          <View style={styles.dockControlsRow}>
            <Pressable
              onPressIn={() => setPeekingDefault(true)}
              onPressOut={() => setPeekingDefault(false)}
              accessibilityRole="button"
              accessibilityLabel="Hold to peek default theme"
              hitSlop={4}
              style={[
                styles.peekBtn,
                {
                  backgroundColor: peekingDefault
                    ? theme.gold
                    : theme.surfaceContainerHigh,
                  borderColor: peekingDefault
                    ? theme.gold
                    : theme.outlineVariant,
                },
              ]}
            >
              <Ionicons
                name="eye-outline"
                size={11}
                color={peekingDefault ? onGoldInk : theme.textSecondary}
              />
              <Text
                style={[
                  styles.peekBtnText,
                  { color: peekingDefault ? onGoldInk : theme.textPrimary },
                , { flexShrink: 1 }]}
              >
                {peekingDefault ? "Default" : "Peek"}
              </Text>
            </Pressable>

            <View
              style={[
                styles.previewModeSwitch,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              {PREVIEW_MODE_OPTIONS.map((opt) => {
                const active = previewMode === opt.value;
                return (
                  <Pressable
                    key={opt.value}
                    onPress={() => {
                      doHaptic();
                      setPreviewMode(opt.value);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={[
                      styles.previewModeBtn,
                      active && { backgroundColor: theme.gold },
                    ]}
                  >
                    <Text
                      style={[
                        styles.previewModeText,
                        { color: active ? onGoldInk : theme.textSecondary },
                      ]}
                    >
                      {localizeOptionLabel(opt.value, opt.label, appLang)}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>

        {/* Preview Stage (Mini-App or Card; hidden when previewMode === "hide") */}
        {previewMode === "mini-app" && (
          <MiniAppLivePreview
            previewTheme={previewTheme}
            previewConfig={previewConfig}
            previewMetrics={previewMetrics}
            previewFonts={previewFonts}
            activePill={previewActivePill}
            onSelectPill={handleSelectPreviewPill}
            activeTab={previewActiveTab}
            onSelectTab={handleSelectPreviewTab}
            onActionPress={doHaptic}
          />
        )}

        {previewMode === "card" && (
          <CardCompactPreview
            previewTheme={previewTheme}
            previewConfig={previewConfig}
            previewMetrics={previewMetrics}
            previewFonts={previewFonts}
            onActionPress={doHaptic}
          />
        )}

        {/* Active Changes Diff Bar */}
        <View style={styles.diffBarRow}>
          <View
            style={[
              styles.diffCountBadge,
              {
                backgroundColor:
                  diffChips.length > 0
                    ? theme.primaryContainer
                    : theme.surfaceContainer,
                borderColor:
                  diffChips.length > 0 ? theme.gold : theme.outlineVariant,
              },
            ]}
          >
            <Text
              style={[
                styles.diffCountText,
                {
                  color:
                    diffChips.length > 0 ? theme.gold : theme.textSecondary,
                },
              ]}
            >
              {diffChips.length} changed
            </Text>
          </View>

          {diffChips.length > 0 ? (
            <ScrollView
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.diffChipsScroll}
              style={styles.flexOne}
            >
              {diffChips.map((chip) => (
                <Pressable
                  key={String(chip.key)}
                  onPress={() => handleResetSingleKey(chip.key)}
                  accessibilityRole="button"
                  accessibilityLabel={`Reset ${chip.label} to default`}
                  android_ripple={androidRipple(theme.rippleColor)}
                  style={pressableStyle(styles.diffChipPressable)}
                >
                  <View
                    style={[
                      styles.diffChipInner,
                      {
                        backgroundColor: theme.surfaceContainer,
                        borderColor: theme.outlineVariant,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.diffChipLabel,
                        { color: theme.textPrimary },
                      ]}
                      numberOfLines={1}
                    >
                      {chip.label}
                    </Text>
                    <Ionicons
                      name="close-circle"
                      size={12}
                      color={theme.textMuted}
                    />
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          ) : (
            <Text
              style={[styles.diffEmptyText, { color: theme.textMuted }]}
              numberOfLines={1}
            >
              All settings at KenyaHub defaults
            </Text>
          )}
        </View>
      </View>

      {/* Main Scrollable Settings Controls (NO key={themeKey} wrapper!) */}
      <ScrollView
        style={[styles.scroll, { backgroundColor: theme.bgPrimary }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={
          themeConfig?.verticalScrollbarStyle !== "hidden"
        }
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerStack}>
          {/* 1. Compact Appearance & OLED Card */}
          <View
            style={[
              styles.appearanceCard,
              {
                backgroundColor: theme.surfaceContainer,
                borderColor: theme.outlineVariant,
              },
            ]}
          >
            <View
              testID="theme-toggle"
              style={[
                styles.segmentedRow,
                {
                  backgroundColor: theme.surfaceContainerLow,
                },
              ]}
            >
              {MODE_OPTIONS.map((opt) => {
                const active = currentMode === opt.value;
                return (
                  <Pressable
                    key={opt.value}
                    onPress={() => {
                      doHaptic();
                      handleModeSelect(opt.value);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    accessibilityLabel={`${localizeOptionLabel(opt.value, opt.label, appLang)} appearance mode`}
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.segmentedPressable)}
                  >
                    <View
                      style={[
                        styles.segmentedBtnInner,
                        active && {
                          backgroundColor: theme.gold,
                        },
                      ]}
                    >
                      <Ionicons
                        name={opt.icon}
                        size={14}
                        color={active ? onGoldInk : theme.textSecondary}
                      />
                      <Text
                        style={[
                          styles.segmentedLabel,
                          {
                            color: active ? onGoldInk : theme.textSecondary,
                            fontFamily: active
                              ? "Inter_700Bold"
                              : "Inter_600SemiBold",
                          },
                        , { flexShrink: 1 }]}
                      >
                        {localizeOptionLabel(opt.value, opt.label, appLang)}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>

            <View
              style={[
                styles.appearanceDivider,
                { backgroundColor: theme.outlineVariant },
              ]}
            />

            <Pressable
              onPress={() => {
                doHaptic();
                updateThemeConfig({ oledBlack: !themeConfig?.oledBlack });
              }}
              accessibilityRole="switch"
              accessibilityState={{ checked: Boolean(themeConfig?.oledBlack) }}
              accessibilityLabel="OLED True Black"
              android_ripple={androidRipple(theme.rippleColor)}
              style={[
                styles.oledSlimRow,
                { opacity: isDark ? 1 : 0.55 },
              ]}
            >
              <View style={styles.toggleTextCol}>
                <Text
                  style={[styles.optionGroupTitle, { color: theme.textPrimary }]}
                  numberOfLines={1}
                >
                  OLED True Black
                </Text>
                <Text
                  style={[styles.optionGroupDesc, { color: theme.textSecondary }]}
                  numberOfLines={1}
                >
                  Pure #000000 surfaces in dark mode
                </Text>
              </View>
              <Switch
                value={Boolean(themeConfig?.oledBlack)}
                onValueChange={(val) => handleConfigFieldChange("oledBlack", val)}
                trackColor={{
                  false: theme.surfaceContainerHighest,
                  true: theme.gold,
                }}
                thumbColor={
                  themeConfig?.oledBlack ? theme.kenyaBlack : theme.kenyaWhite
                }
                accessibilityLabel="OLED True Black"
              />
            </Pressable>
          </View>

          {/* 1b. Instant Settings Search Bar */}
          <SettingsSearchBar
            query={settingsQuery}
            onChangeQuery={handleSettingsQueryChange}
            onClear={handleClearSearch}
            isSearching={isSearching}
            matchedSectionCount={searchResults.matchedSections.size}
            matchedEntries={searchResults.matchedEntries}
            onJumpToSection={handleJumpToSearchSection}
            theme={theme}
          />

          {/* 2. Slim Quick-Filter Bar + Expand/Collapse All */}
          <View style={styles.filterToolbar}>
            <ScrollView
              horizontal
              nestedScrollEnabled
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
                    key={pill.key}
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
                          borderColor: active
                            ? theme.gold
                            : theme.outlineVariant,
                        },
                      ]}
                    >
                      <Ionicons
                        name={pill.icon}
                        size={13}
                        color={active ? onGoldInk : theme.textSecondary}
                      />
                      <Text
                        style={[
                          styles.navPillLabel,
                          { color: active ? onGoldInk : theme.textPrimary },
                        , { flexShrink: 1 }]}
                      >
                        {appLang === "sw" ? ({ all: "Zote", makeovers: "Mwonekano", atlas: "Atlasi", presets: "Mandhari", colors: "Rangi", typography: "Maandishi", layout: "Mpangilio", navigation: "Menyu", accessibility: "Ufikiaji", backup: "Hifadhi" }[pill.key] || pill.label) : pill.label}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Pressable
              onPress={() => {
                doHaptic();
                const otherPresets = THEME_PRESETS.filter((p) => p.id !== themeConfig?.presetId);
                const pick = otherPresets[Math.floor(Math.random() * otherPresets.length)] || THEME_PRESETS[0];
                applyThemePreset(pick.id, pick.recommendedMode, true);
              }}
              accessibilityRole="button"
              accessibilityLabel="Surprise Me with a Random Theme"
              android_ripple={androidRipple(theme.rippleColor)}
              style={pressableStyle(styles.expandAllPressable)}
            >
              <View
                style={[
                  styles.expandAllInner,
                  {
                    backgroundColor: theme.primaryContainer,
                    borderColor: theme.gold,
                  },
                ]}
              >
                <Feather name="shuffle" size={12} color={theme.onPrimaryContainer} />
                <Text style={[styles.expandAllLabel, { color: theme.onPrimaryContainer }, { flexShrink: 1 }]}>
                  {appLang === "sw" ? "Bahati" : "Surprise"}
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={handleToggleExpandAll}
              accessibilityRole="button"
              accessibilityLabel={
                allExpanded ? "Collapse All Sections" : "Expand All Sections"
              }
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
                <Text
                  style={[styles.expandAllLabel, { color: theme.textPrimary }, { flexShrink: 1 }]}
                >
                  {appLang === "sw" ? (allExpanded ? "Kunja" : "Panua") : (allExpanded ? "Collapse" : "Expand")}
                </Text>
              </View>
            </Pressable>
          </View>

          {isSearching && searchResults.matchedSections.size === 0 && (
            <View
              style={[
                styles.searchEmptyCard,
                {
                  backgroundColor: theme.surfaceContainer,
                  borderColor: theme.outlineVariant,
                },
              ]}
            >
              <Ionicons
                name="search-outline"
                size={18}
                color={theme.textMuted}
              />
              <Text
                style={[styles.searchEmptyText, { color: theme.textSecondary }]}
                numberOfLines={2}
              >
                No settings match "{trimmedDeferredQuery}"
              </Text>
              <Pressable
                onPress={handleClearSearch}
                accessibilityRole="button"
                accessibilityLabel="Clear Search"
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle(styles.searchClearBtnPressable)}
              >
                <View
                  style={[
                    styles.searchClearBtnInner,
                    {
                      backgroundColor: theme.primaryContainer,
                      borderColor: theme.gold,
                    },
                  ]}
                >
                  <Text
                    style={[styles.searchClearBtnText, { color: theme.gold }]}
                  >
                    Clear Search
                  </Text>
                </View>
              </Pressable>
            </View>
          )}

          {/* Accordion 1: One-Tap Makeovers */}
          {isVisible("makeovers") && (
            <AccordionCard
              icon="sparkles-outline"
              title="One-Tap Makeovers"
              summary={
                activeMakeover
                  ? activeMakeover.name
                  : `Custom · ${APP_LOOK_PROFILES.length} looks`
              }
              expanded={isExpanded("makeovers")}
              onToggle={sectionToggleHandlers.makeovers}
              theme={theme}
            >
              {isExpanded("makeovers") && (
                <>
              <View style={styles.makeoversGrid}>
                {displayedMakeovers.map((profile) => {
                  const isActive = isMakeoverActive(profile, themeConfig);
                  return (
                    <Pressable
                      key={profile.id}
                      onPress={() => applyAppLookProfile(profile.id)}
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
                            borderColor: isActive
                              ? theme.gold
                              : theme.outlineVariant,
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
                              name={(profile.icon ?? "color-palette-outline") as keyof typeof Ionicons.glyphMap}
                              size={14}
                              color={isActive ? onGoldInk : theme.gold}
                            />
                          </View>
                          <View style={styles.swatchDotsRow}>
                            {(profile.swatches ??
                              THEME_PRESETS.find((preset) => preset.id === profile.config.presetId)?.swatches ??
                              THEME_PRESETS[0].swatches).map((hex, idx) => (
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
                style={[
                  styles.saveThemeBlock,
                  { borderTopColor: theme.outlineVariant },
                ]}
              >
                <Text style={[styles.saveThemeEyebrow, { color: theme.gold }]}>
                  SAVE CURRENT CUSTOMIZED THEME
                </Text>
                <Text
                  style={[
                    styles.saveThemeDesc,
                    { color: theme.textSecondary },
                  ]}
                >
                  Pick any makeover or preset above, customize any setting below,
                  and save it for one-tap switching.
                </Text>
                <View style={styles.saveThemeInputRow}>
                  <TextInput
                    value={saveThemeName}
                    onChangeText={setSaveThemeName}
                    placeholder="Name your theme (e.g. My Midnight Gold)"
                    placeholderTextColor={theme.textMuted}
                    maxLength={32}
                    style={[
                      styles.saveThemeInput,
                      {
                        backgroundColor: theme.surfaceContainerLow,
                        borderColor: theme.outlineVariant,
                        color: theme.textPrimary,
                      },
                    ]}
                  />
                  <Pressable
                    onPress={handleSaveTheme}
                    accessibilityRole="button"
                    accessibilityLabel="Save current customized theme"
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.saveThemeBtnPressable)}
                  >
                    <View
                      style={[
                        styles.saveThemeBtnInner,
                        { backgroundColor: theme.gold },
                      ]}
                    >
                      <Ionicons name="bookmark" size={14} color={onGoldInk} />
                      <Text
                        style={[
                          styles.saveThemeBtnText,
                          { color: onGoldInk },
                        , { flexShrink: 1 }]}
                      >
                        Save
                      </Text>
                    </View>
                  </Pressable>
                </View>
                {Boolean(saveThemeFeedback) && (
                  <Text
                    style={[
                      styles.saveThemeFeedback,
                      { color: theme.kenyaGreenLight },
                    ]}
                  >
                    {saveThemeFeedback}
                  </Text>
                )}

                {savedThemes.length > 0 && (
                  <View style={styles.savedThemesList}>
                    <Text
                      style={[
                        styles.savedThemesHeading,
                        { color: theme.textSecondary },
                      ]}
                    >
                      YOUR SAVED THEMES ({savedThemes.length})
                    </Text>
                    {savedThemes.map((st) => (
                      <View
                        key={st.id}
                        style={[
                          styles.savedThemeRow,
                          {
                            backgroundColor: theme.surfaceContainerLow,
                            borderColor: theme.outlineVariant,
                          },
                        ]}
                      >
                        <Pressable
                          onPress={() => applySavedTheme(st.id)}
                          style={styles.savedThemeSelectArea}
                        >
                          <View style={styles.savedThemeSwatches}>
                            {st.swatches.map((hex, si) => (
                              <View
                                key={`${st.id}-sw-${si}`}
                                style={[
                                  styles.savedThemeDot,
                                  {
                                    backgroundColor: hex,
                                    borderColor: theme.outlineVariant,
                                  },
                                ]}
                              />
                            ))}
                          </View>
                          <Text
                            style={[
                              styles.savedThemeName,
                              { color: theme.textPrimary },
                            ]}
                            numberOfLines={1}
                          >
                            {st.name}
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => applySavedTheme(st.id)}
                          hitSlop={6}
                          accessibilityRole="button"
                          accessibilityLabel={`Apply saved theme ${st.name}`}
                        >
                          <View
                            style={[
                              styles.savedThemeApplyBtn,
                              {
                                backgroundColor: theme.primaryContainer,
                                borderColor: theme.gold,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.savedThemeApplyText,
                                { color: theme.gold },
                              ]}
                            >
                              Apply
                            </Text>
                          </View>
                        </Pressable>
                        <Pressable
                          onPress={() => deleteSavedTheme(st.id)}
                          hitSlop={6}
                          accessibilityRole="button"
                          accessibilityLabel={`Delete saved theme ${st.name}`}
                        >
                          <Ionicons
                            name="trash-outline"
                            size={16}
                            color={theme.kenyaRedLight}
                          />
                        </Pressable>
                      </View>
                    ))}
                  </View>
                )}
              </View>
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 2: Theme Presets */}
          {isVisible("atlas") && (
            <AccordionCard
              icon="hardware-chip-outline"
              title="Tactile Craft Atlas"
              summary="10 Craft Systems · 20 Interactive Specimens"
              expanded={isExpanded("atlas")}
              onToggle={sectionToggleHandlers.atlas}
              theme={theme}
            >
              {isExpanded("atlas") && (
                <TactileAtlasShowcase
                  onApplyPreset={(presetId) => {
                    doHaptic();
                    applyThemePreset(presetId, undefined, presetFullTransform);
                  }}
                />
              )}
            </AccordionCard>
          )}

          {isVisible("presets") && (
            <AccordionCard
              icon="color-palette-outline"
              title="Theme Presets"
              summary={`${activePreset?.name ?? "Custom"} · ${THEME_PRESETS.length} themes`}
              expanded={isExpanded("presets")}
              onToggle={sectionToggleHandlers.presets}
              theme={theme}
            >
              {isExpanded("presets") && (
                <>
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
                      key={f.id}
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
                            borderColor: act
                              ? theme.gold
                              : theme.outlineVariant,
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

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 8 }}>
                    <Text style={{ fontSize: 11.5, color: theme.textSecondary, flex: 1 }}>
                      {presetFullTransform
                        ? "Full Look: each preset transforms layout, surfaces, fonts, icons & colors"
                        : "Colors Only: swaps color palette while keeping your layout & fonts"}
                    </Text>
                    <View style={{ flexDirection: "row", borderRadius: 999, borderWidth: 1, borderColor: theme.outlineVariant, overflow: "hidden" }}>
                      <Pressable
                        onPress={() => { doHaptic(); setPresetFullTransform(true); }}
                        style={{
                          paddingHorizontal: 9,
                          paddingVertical: 5,
                          backgroundColor: presetFullTransform ? theme.gold : "transparent",
                        }}
                      >
                        <Text style={{ fontSize: 10.5, fontWeight: "800", color: presetFullTransform ? getContrastInk(theme.gold) : theme.textSecondary }}>
                          Full Look
                        </Text>
                      </Pressable>
                      <Pressable
                        onPress={() => { doHaptic(); setPresetFullTransform(false); }}
                        style={{
                          paddingHorizontal: 9,
                          paddingVertical: 5,
                          backgroundColor: !presetFullTransform ? theme.gold : "transparent",
                        }}
                      >
                        <Text style={{ fontSize: 10.5, fontWeight: "800", color: !presetFullTransform ? getContrastInk(theme.gold) : theme.textSecondary }}>
                          Colors Only
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.presetsGrid}>
                {filteredPresets.map((preset) => {
                  const active = themeConfig?.presetId === preset.id;
                  return (
                    <Pressable
                      key={preset.id}
                      onPress={() =>
                        applyThemePreset(preset.id, preset.recommendedMode, presetFullTransform)
                      }
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
                            borderColor: active
                              ? theme.gold
                              : theme.outlineVariant,
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
                          style={[
                            styles.presetName,
                            { color: theme.textPrimary },
                          ]}
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
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 3: Custom Colors, Vibrancy & Reading Tint */}
          {isVisible("colors") && (
            <AccordionCard
              icon="eyedrop-outline"
              title="Custom Colors"
              summary={
                customColorCount > 0
                  ? `${customColorCount} override${customColorCount > 1 ? "s" : ""} · ${accentVibrancyLabel}`
                  : `${accentVibrancyLabel} · Default palette`
              }
              expanded={isExpanded("colors")}
              onToggle={sectionToggleHandlers.colors}
              theme={theme}
            >
              {isExpanded("colors") && (
                <>
              <OptionPillGroup
                label="Accent Vibrancy"
                options={ACCENT_INTENSITY_OPTIONS}
                selectedValue={themeConfig?.accentIntensity ?? "balanced"}
                configKey="accentIntensity"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Reading Comfort Tint"
                options={READING_TINT_OPTIONS}
                selectedValue={themeConfig?.readingTint ?? "none"}
                configKey="readingTint"
                onConfigSelect={handleConfigFieldChange}
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
                              key={`${role.key}-${hex}`}
                              onPress={() => {
                                doHaptic();
                                setHexDrafts((prev) => ({
                                  ...prev,
                                  [role.key]: hex,
                                }));
                                updateCustomColor(role.key, hex);
                              }}
                              hitSlop={8}
                              android_ripple={androidRipple(
                                theme.rippleColor,
                                true
                              )}
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
                                  size={15}
                                  color={getContrastInk(hex)}
                                />
                              )}
                            </Pressable>
                          );
                        })}
                      </View>

                      <View style={styles.hexInputRow}>
                        <TextInput
                          value={draft}
                          onChangeText={(text) =>
                            handleHexChange(role.key, text)
                          }
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
                            setHexDrafts((prev) => ({
                              ...prev,
                              [role.key]: "",
                            }));
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
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 4: Typography & Text */}
          {isVisible("typography") && (
            <AccordionCard
              icon="text-outline"
              title="Typography & Text"
              summary={`${fontPairLabel} · ${Math.round(fontScale * 100)}%`}
              expanded={isExpanded("typography")}
              onToggle={sectionToggleHandlers.typography}
              theme={theme}
            >
              {isExpanded("typography") && (
                <>
              <OptionPillGroup
                label="Font Scale"
                options={FONT_SCALE_OPTIONS}
                selectedValue={themeConfig?.fontScale ?? 1.0}
                configKey="fontScale"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Font Pairing"
                options={FONT_PAIR_OPTIONS}
                selectedValue={themeConfig?.fontPair ?? "outfit-inter"}
                configKey="fontPair"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Heading Case"
                options={HEADING_CASE_OPTIONS}
                selectedValue={headingTransform}
                configKey="headingTransform"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Number Style"
                options={NUMERIC_STYLE_OPTIONS}
                selectedValue={numericStyle}
                configKey="numericStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Line Height"
                options={LINE_HEIGHT_OPTIONS}
                selectedValue={themeConfig?.lineHeightScale ?? 1.0}
                configKey="lineHeightScale"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Letter Spacing"
                options={LETTER_SPACING_OPTIONS}
                selectedValue={themeConfig?.letterSpacingOffset ?? 0}
                configKey="letterSpacingOffset"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 5: Surfaces, Borders & Layout */}
          {isVisible("layout") && (
            <AccordionCard
              icon="layers-outline"
              title="Surfaces & Layout"
              summary={`${surfaceLabel} · ${densityLabel}`}
              expanded={isExpanded("layout")}
              onToggle={sectionToggleHandlers.layout}
              theme={theme}
            >
              {isExpanded("layout") && (
                <>
              <OptionPillGroup
                label="Surface Style"
                options={SURFACE_STYLE_OPTIONS}
                selectedValue={themeConfig?.surfaceStyle ?? "elevated"}
                configKey="surfaceStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Card Corner Radius"
                options={CARD_RADIUS_OPTIONS}
                selectedValue={themeConfig?.cardRadius ?? "rounded"}
                configKey="cardRadius"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Button Radius"
                options={BUTTON_RADIUS_OPTIONS}
                selectedValue={themeConfig?.buttonRadius ?? "rounded"}
                configKey="buttonRadius"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Border Thickness"
                options={BORDER_WIDTH_OPTIONS}
                selectedValue={themeConfig?.borderWidth ?? "thin"}
                configKey="borderWidth"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Card Shadow & Depth"
                options={SHADOW_OPTIONS}
                selectedValue={themeConfig?.cardShadowIntensity ?? "subtle"}
                configKey="cardShadowIntensity"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Input Field Style"
                options={INPUT_STYLE_OPTIONS}
                selectedValue={themeConfig?.inputStyle ?? "outlined"}
                configKey="inputStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Button Style"
                options={BUTTON_STYLE_OPTIONS}
                selectedValue={themeConfig?.buttonStyle ?? "filled"}
                configKey="buttonStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Home & Grid Layout"
                options={HOME_LAYOUT_OPTIONS}
                selectedValue={themeConfig?.homeLayout ?? "classic"}
                configKey="homeLayout"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Screen Edge Margins"
                options={SCREEN_PADDING_OPTIONS}
                selectedValue={themeConfig?.screenPadding ?? "standard"}
                configKey="screenPadding"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Progress Bar Style"
                options={PROGRESS_BAR_STYLE_OPTIONS}
                selectedValue={themeConfig?.progressBarStyle ?? "rounded"}
                configKey="progressBarStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="List Divider Style"
                options={DIVIDER_STYLE_OPTIONS}
                selectedValue={themeConfig?.dividerStyle ?? "hairline"}
                configKey="dividerStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Section Header Style"
                options={SECTION_HEADER_STYLE_OPTIONS}
                selectedValue={themeConfig?.sectionHeaderStyle ?? "eyebrow"}
                configKey="sectionHeaderStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Card Accent Strip"
                options={CARD_ACCENT_OPTIONS}
                selectedValue={themeConfig?.cardAccentStyle ?? "none"}
                configKey="cardAccentStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <View style={styles.optionGroup}>
                <Text style={[styles.optionGroupTitle, { color: theme.textPrimary }]}>
                  Icon Container
                </Text>
                <ScrollView
                  horizontal
                  nestedScrollEnabled
                  showsHorizontalScrollIndicator={
                    themeConfig?.horizontalScrollbarStyle === "native-indicator"
                  }
                  contentContainerStyle={styles.visualSwatchStrip}
                >
                  {ICON_BADGE_OPTIONS.map((opt) => {
                    const active =
                      (themeConfig?.iconBadgeStyle ?? "soft-circle") === opt.value;
                    return (
                      <Pressable
                        key={`icon-badge-${opt.value}`}
                        onPress={() => {
                          doHaptic();
                          updateThemeConfig({ iconBadgeStyle: opt.value });
                        }}
                        accessibilityRole="button"
                        accessibilityState={{ selected: active }}
                        accessibilityLabel={`Icon container ${localizeOptionLabel(opt.value, opt.label, appLang)}`}
                        android_ripple={androidRipple(theme.rippleColor)}
                        style={pressableStyle(styles.visualSwatchPressable)}
                      >
                        <View
                          style={[
                            styles.visualSwatchInner,
                            {
                              backgroundColor: active
                                ? theme.primaryContainer
                                : theme.surfaceContainerLow,
                              borderColor: active
                                ? theme.gold
                                : theme.outlineVariant,
                              borderWidth: active ? 1.5 : 1,
                            },
                          ]}
                        >
                          <View style={styles.visualBadgePreviewSlot}>
                            <ThemedIconBadge
                              name="wallet"
                              baseSize={30}
                              forceVisible
                              overrideTheme={theme}
                              overrideConfig={{
                                ...themeConfig,
                                iconBadgeStyle: opt.value,
                              }}
                            />
                          </View>
                          <Text
                            style={[
                              styles.visualSwatchLabel,
                              { color: active ? theme.gold : theme.textSecondary },
                            ]}
                            numberOfLines={1}
                          >
                            {localizeOptionLabel(opt.value, opt.label, appLang)}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </View>

              <View style={styles.optionGroup}>
                <Text style={[styles.optionGroupTitle, { color: theme.textPrimary }]}>
                  Icon Glyph Style
                </Text>
                <View style={styles.visualGlyphStrip}>
                  {ICON_PACK_OPTIONS.map((opt) => {
                    const active =
                      (themeConfig?.iconPack ?? "outline") === opt.value;
                    return (
                      <Pressable
                        key={`icon-pack-${opt.value}`}
                        onPress={() => {
                          doHaptic();
                          updateThemeConfig({ iconPack: opt.value });
                        }}
                        accessibilityRole="button"
                        accessibilityState={{ selected: active }}
                        accessibilityLabel={`Icon glyph style ${localizeOptionLabel(opt.value, opt.label, appLang)}`}
                        android_ripple={androidRipple(theme.rippleColor)}
                        style={pressableStyle(styles.visualGlyphPressable)}
                      >
                        <View
                          style={[
                            styles.visualGlyphInner,
                            {
                              backgroundColor: active
                                ? theme.primaryContainer
                                : theme.surfaceContainerLow,
                              borderColor: active
                                ? theme.gold
                                : theme.outlineVariant,
                              borderWidth: active ? 1.5 : 1,
                            },
                          ]}
                        >
                          <ThemedIcon
                            name="calculator"
                            size={18}
                            pack={opt.value}
                            scaleWithTheme={false}
                            color={active ? theme.gold : theme.textPrimary}
                            overrideTheme={theme}
                            overrideConfig={themeConfig}
                          />
                          <Text
                            style={[
                              styles.visualSwatchLabel,
                              { color: active ? theme.gold : theme.textSecondary },
                            ]}
                            numberOfLines={1}
                          >
                            {localizeOptionLabel(opt.value, opt.label, appLang)}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  })}
                </View>
              </View>

              <OptionPillGroup
                label="Layout Density"
                options={DENSITY_OPTIONS}
                selectedValue={themeConfig?.density ?? "comfortable"}
                configKey="density"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Pill & Chip Size"
                options={SIZE_PRESET_OPTIONS}
                selectedValue={themeConfig?.pillSize ?? "md"}
                configKey="pillSize"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Icon Size"
                options={ICON_SCALE_OPTIONS}
                selectedValue={themeConfig?.iconScale ?? 1.0}
                configKey="iconScale"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Button Size"
                options={SIZE_PRESET_OPTIONS}
                selectedValue={themeConfig?.buttonSize ?? "md"}
                configKey="buttonSize"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Card Padding"
                options={SIZE_PRESET_OPTIONS}
                selectedValue={themeConfig?.cardPadding ?? "md"}
                configKey="cardPadding"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Bottom Bar Size"
                options={SIZE_PRESET_OPTIONS}
                selectedValue={themeConfig?.tabBarSize ?? "md"}
                configKey="tabBarSize"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Top Header Size"
                options={SIZE_PRESET_OPTIONS}
                selectedValue={themeConfig?.appBarSize ?? "md"}
                configKey="appBarSize"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              {/* Element Visibility & Strip-Down Controls */}
              <View
                style={[
                  styles.stripDownBlock,
                  { borderTopColor: theme.outlineVariant },
                ]}
              >
                <Text style={[styles.stripDownEyebrow, { color: theme.gold }]}>
                  STRIP-DOWN &amp; VISIBILITY
                </Text>

                <View style={styles.stripDownPresetRow}>
                  <Pressable
                    onPress={() => {
                      doHaptic();
                      updateThemeConfig({
                        surfaceStyle: "frameless",
                        inputStyle: "unboxed",
                        buttonStyle: "unboxed-text",
                        iconBadgeStyle: "hidden",
                        showCardIcons: false,
                        showCardDescriptions: false,
                        showCategoryBadges: false,
                        showTrailingArrows: false,
                        showOfflinePill: false,
                      });
                    }}
                    accessibilityRole="button"
                    accessibilityLabel="Apply Ultra-Minimal Strip"
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.stripDownPresetPressable)}
                  >
                    <View
                      style={[
                        styles.stripDownPresetInner,
                        {
                          backgroundColor: theme.primaryContainer,
                          borderColor: theme.gold,
                        },
                      ]}
                    >
                      <Ionicons
                        name="eye-off-outline"
                        size={13}
                        color={theme.gold}
                      />
                      <Text
                        style={[
                          styles.stripDownPresetText,
                          { color: theme.gold },
                        ]}
                        numberOfLines={1}
                      >
                        Ultra-Minimal Strip
                      </Text>
                    </View>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      doHaptic();
                      updateThemeConfig({
                        showCardIcons: true,
                        showTabIcons: true,
                        showCardDescriptions: true,
                        showCategoryBadges: true,
                        showTrailingArrows: true,
                        showHomeGreeting: true,
                        showDailyWidgets: true,
                        showOfflinePill: true,
                        ...(themeConfig?.iconBadgeStyle === "hidden"
                          ? { iconBadgeStyle: "soft-circle" as IconBadgeStyle }
                          : {}),
                      });
                    }}
                    accessibilityRole="button"
                    accessibilityLabel="Restore All Elements"
                    android_ripple={androidRipple(theme.rippleColor)}
                    style={pressableStyle(styles.stripDownPresetPressable)}
                  >
                    <View
                      style={[
                        styles.stripDownPresetInner,
                        {
                          backgroundColor: theme.surfaceContainerLow,
                          borderColor: theme.outlineVariant,
                        },
                      ]}
                    >
                      <Ionicons
                        name="refresh-outline"
                        size={13}
                        color={theme.textPrimary}
                      />
                      <Text
                        style={[
                          styles.stripDownPresetText,
                          { color: theme.textPrimary },
                        ]}
                        numberOfLines={1}
                      >
                        Restore All Elements
                      </Text>
                    </View>
                  </Pressable>
                </View>

                <ToggleRow
                  label="Card & Tile Icons"
                  description="Show decorative icon badges inside cards, tiles, and list rows"
                  value={themeConfig?.showCardIcons !== false}
                  configKey="showCardIcons"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Bottom Tab Icons"
                  description="Show icons in the bottom navigation bar (hiding forces text labels)"
                  value={themeConfig?.showTabIcons !== false}
                  configKey="showTabIcons"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Card Descriptions"
                  description="Show secondary subtitle and summary lines on cards"
                  value={themeConfig?.showCardDescriptions !== false}
                  configKey="showCardDescriptions"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Category Tags"
                  description="Show category pills and eyebrow labels above card titles"
                  value={themeConfig?.showCategoryBadges !== false}
                  configKey="showCategoryBadges"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Trailing Arrows"
                  description="Show right-hand chevron arrows on tappable rows and cards"
                  value={themeConfig?.showTrailingArrows !== false}
                  configKey="showTrailingArrows"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Home Greeting Hero"
                  description="Show the greeting banner and header summary on the Home screen"
                  value={themeConfig?.showHomeGreeting !== false}
                  configKey="showHomeGreeting"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Daily Widgets"
                  description="Show daily quick widgets such as Sheng word and Kenyan trivia"
                  value={themeConfig?.showDailyWidgets !== false}
                  configKey="showDailyWidgets"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />

                <ToggleRow
                  label="Top Bar Offline Pill"
                  description="Show the offline-ready status pill in the top header bar"
                  value={themeConfig?.showOfflinePill !== false}
                  configKey="showOfflinePill"
                onConfigChange={handleConfigFieldChange}
                  theme={theme}
                />
              </View>
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 6: Menus & Scrollbars */}
          {isVisible("navigation") && (
            <AccordionCard
              icon="compass-outline"
              title="Menus & Scrollbars"
              summary={`${tabBarLabel} · ${hScrollLabel}`}
              expanded={isExpanded("navigation")}
              onToggle={sectionToggleHandlers.navigation}
              theme={theme}
            >
              {isExpanded("navigation") && (
                <>
              <ToggleRow
                label="Kenyan Flag Stripe"
                description="Show the subtle Black · Red · Green accent stripe"
                value={themeConfig?.showKenyaStripe !== false}
                configKey="showKenyaStripe"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Bottom Tab Bar Style"
                options={TAB_BAR_STYLE_OPTIONS}
                selectedValue={themeConfig?.tabBarStyle ?? "classic"}
                configKey="tabBarStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Active Menu Indicator"
                options={MENU_INDICATOR_OPTIONS}
                selectedValue={themeConfig?.menuIndicatorStyle ?? "pill"}
                configKey="menuIndicatorStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Floating Quick-Jump Menu"
                options={QUICK_MENU_OPTIONS}
                selectedValue={themeConfig?.quickMenuPosition ?? "off"}
                configKey="quickMenuPosition"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Status Bar Icons"
                options={STATUS_BAR_OPTIONS}
                selectedValue={themeConfig?.statusBarMode ?? "auto"}
                configKey="statusBarMode"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Screen Transition Animation"
                options={TRANSITION_OPTIONS}
                selectedValue={themeConfig?.pageTransition ?? "slide"}
                configKey="pageTransition"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Vertical Scrollbar"
                options={VERT_SCROLLBAR_OPTIONS}
                selectedValue={themeConfig?.verticalScrollbarStyle ?? "hidden"}
                configKey="verticalScrollbarStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="Tab Bar Labels"
                description="Display text labels beneath bottom tab icons"
                value={themeConfig?.tabBarLabels !== false}
                configKey="tabBarLabels"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Flag Stripe Thickness"
                options={STRIPE_THICKNESS_OPTIONS}
                selectedValue={themeConfig?.stripeThickness ?? "thin"}
                configKey="stripeThickness"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Top App Bar Style"
                options={APP_BAR_STYLE_OPTIONS}
                selectedValue={themeConfig?.appBarStyle ?? "standard"}
                configKey="appBarStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Header Alignment"
                options={HEADER_ALIGNMENT_OPTIONS}
                selectedValue={themeConfig?.headerAlignment ?? "left"}
                configKey="headerAlignment"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Horizontal Scrollbar Style"
                options={SCROLLBAR_STYLE_OPTIONS}
                selectedValue={
                  themeConfig?.horizontalScrollbarStyle ?? "subtle-bar"
                }
                configKey="horizontalScrollbarStyle"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Horizontal Scrollbar Thickness"
                options={SCROLLBAR_THICKNESS_OPTIONS}
                selectedValue={
                  themeConfig?.horizontalScrollbarThickness ?? "thin"
                }
                configKey="horizontalScrollbarThickness"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="Scrollbar Background Track"
                description="Show subtle rail track behind horizontal scrollbar thumb"
                value={themeConfig?.scrollbarTrackVisible !== false}
                configKey="scrollbarTrackVisible"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Pill Bar Layout"
                options={PILL_BAR_LAYOUT_OPTIONS}
                selectedValue={
                  themeConfig?.pillBarLayout ?? "scroll-with-expand"
                }
                configKey="pillBarLayout"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Pill Corner Shape"
                options={BUTTON_RADIUS_OPTIONS}
                selectedValue={themeConfig?.pillShape ?? "pill"}
                configKey="pillShape"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="Edge Fade Shadow"
                description="Soft feather gradient at left/right edges of horizontal bars"
                value={themeConfig?.edgeFadeEnabled !== false}
                configKey="edgeFadeEnabled"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="Elastic Scroll Bounce"
                description="Spring bounce feedback at horizontal scroll edges"
                value={themeConfig?.scrollBounceEnabled !== false}
                configKey="scrollBounceEnabled"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 7: Accessibility & Feel */}
          {isVisible("accessibility") && (
            <AccordionCard
              icon="accessibility-outline"
              title="Accessibility & Feel"
              summary={`Haptics ${hapticLabel}${
                colorBlindLabel !== "None" ? ` · ${colorBlindLabel}` : ""
              }`}
              expanded={isExpanded("accessibility")}
              onToggle={sectionToggleHandlers.accessibility}
              theme={theme}
            >
              {isExpanded("accessibility") && (
                <>
              <OptionPillGroup
                label="Haptic Strength"
                options={HAPTIC_STRENGTH_OPTIONS}
                selectedValue={hapticStrength}
                onSelect={(val) => {
                  if (val !== "off") {
                    triggerHaptic();
                  }
                  updateThemeConfig({
                    hapticStrength: val,
                    hapticsEnabled: val !== "off",
                  });
                }}
                theme={theme}
              />

              <OptionPillGroup
                label="Tap Feedback Effect"
                options={PRESS_EFFECT_OPTIONS}
                selectedValue={themeConfig?.pressEffect ?? "scale-ripple"}
                configKey="pressEffect"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="Reduce Motion"
                description="Minimize screen transitions and animated effects"
                value={Boolean(themeConfig?.reduceMotion)}
                configKey="reduceMotion"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <ToggleRow
                label="High-Contrast Borders"
                description="Strengthen card and button outlines for clarity"
                value={Boolean(themeConfig?.highContrastBorders)}
                configKey="highContrastBorders"
                onConfigChange={handleConfigFieldChange}
                theme={theme}
              />

              <OptionPillGroup
                label="Color-Blind Safe Palette"
                options={COLOR_BLIND_OPTIONS}
                selectedValue={themeConfig?.colorBlindMode ?? "none"}
                configKey="colorBlindMode"
                onConfigSelect={handleConfigFieldChange}
                theme={theme}
              />
                </>
              )}
            </AccordionCard>
          )}

          {/* Accordion 8: Backup & Reset */}
          {isVisible("backup") && (
            <AccordionCard
              icon="code-slash-outline"
              title="Backup & Reset"
              summary="Export · Import · Reset"
              expanded={isExpanded("backup")}
              onToggle={sectionToggleHandlers.backup}
              theme={theme}
            >
              {isExpanded("backup") && (
                <>
              <View style={styles.backupGroup}>
                <View style={styles.backupHeaderRow}>
                  <Text
                    style={[
                      styles.optionGroupTitle,
                      { color: theme.textPrimary },
                    , { flexShrink: 1 }]}
                  >
                    Export Theme JSON
                  </Text>
                  <Pressable
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
                      <Ionicons
                        name="share-outline"
                        size={14}
                        color={theme.gold}
                      />
                      <Text
                        style={[styles.smallActionText, { color: theme.gold }, { flexShrink: 1 }]}
                      >
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
                  style={[
                    styles.optionGroupTitle,
                    { color: theme.textPrimary },
                  ]}
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
                      color={onGoldInk}
                    />
                    <Text style={[styles.fullBtnText, { color: onGoldInk }, { flexShrink: 1 }]}>
                      Apply JSON Theme
                    </Text>
                  </View>
                </Pressable>
              </View>

              <Pressable
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
                  <Text
                    style={[
                      styles.resetBtnText,
                      { color: theme.kenyaRedLight },
                    , { flexShrink: 1 }]}
                  >
                    Reset All to Default
                  </Text>
                </View>
              </Pressable>
                </>
              )}
            </AccordionCard>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const SettingsSearchBar = React.memo(function SettingsSearchBar({
  query,
  onChangeQuery,
  onClear,
  isSearching,
  matchedSectionCount,
  matchedEntries,
  onJumpToSection,
  theme,
}: {
  query: string;
  onChangeQuery: (text: string) => void;
  onClear: () => void;
  isSearching: boolean;
  matchedSectionCount: number;
  matchedEntries: readonly SettingsSearchEntry[];
  onJumpToSection: (section: AccordionKey) => void;
  theme: ThemeColors;
}) {
  const quickJumpEntries = useMemo(
    () => matchedEntries.slice(0, 12),
    [matchedEntries]
  );

  return (
    <View style={styles.searchBarWrap}>
      <View
        style={[
          styles.searchInputContainer,
          {
            backgroundColor: theme.surfaceContainer,
            borderColor: query.length > 0 ? theme.gold : theme.outlineVariant,
          },
        ]}
      >
        <Ionicons
          name="search-outline"
          size={16}
          color={query.length > 0 ? theme.gold : theme.textMuted}
        />
        <TextInput
          value={query}
          onChangeText={onChangeQuery}
          placeholder="Search settings, themes, icons..."
          placeholderTextColor={theme.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          accessibilityLabel="Search settings, themes, and icons"
          style={[styles.searchInputField, { color: theme.textPrimary }]}
        />
        {query.length > 0 && (
          <Pressable
            onPress={onClear}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons name="close-circle" size={17} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {isSearching && matchedSectionCount > 0 && (
        <View style={styles.searchSummaryRow}>
          <Text
            style={[styles.searchSummaryCount, { color: theme.gold }]}
            numberOfLines={1}
          >
            {matchedSectionCount} matching{" "}
            {matchedSectionCount === 1 ? "section" : "sections"}
          </Text>
          <ScrollView
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.searchChipsScroll}
            style={styles.flexOne}
          >
            {quickJumpEntries.map((entry) => (
              <Pressable
                key={entry.id}
                onPress={() => onJumpToSection(entry.section)}
                accessibilityRole="button"
                accessibilityLabel={`Jump to ${entry.label}`}
                android_ripple={androidRipple(theme.rippleColor)}
                style={pressableStyle(styles.searchChipPressable)}
              >
                <View
                  style={[
                    styles.searchChipInner,
                    {
                      backgroundColor: theme.surfaceContainerHigh,
                      borderColor: theme.outlineVariant,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.searchChipLabel,
                      { color: theme.textPrimary },
                    ]}
                    numberOfLines={1}
                  >
                    {entry.label}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
});

const MiniAppLivePreview = React.memo(function MiniAppLivePreview({
  previewTheme,
  previewConfig,
  previewMetrics,
  previewFonts,
  activePill,
  onSelectPill,
  activeTab,
  onSelectTab,
  onActionPress,
}: {
  previewTheme: ThemeColors;
  previewConfig: ThemeConfig;
  previewMetrics: ThemeMetrics;
  previewFonts: { heading: string; body: string; bold: string };
  activePill: number;
  onSelectPill: (idx: number) => void;
  activeTab: number;
  onSelectTab: (idx: number) => void;
  onActionPress: () => void;
}) {
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";
  const onGold = getContrastInk(previewTheme.gold);
  const { cardStyle, inputStyle, primaryBtn, secondaryBtn, badgeStyle } = useMemo(
    () => ({
      cardStyle: getThemedCardStyle(previewTheme, previewConfig, previewMetrics),
      inputStyle: getThemedInputStyle(previewTheme, previewConfig, previewMetrics),
      primaryBtn: getThemedButtonStyle(
        previewTheme,
        previewConfig,
        previewMetrics,
        "primary"
      ),
      secondaryBtn: getThemedButtonStyle(
        previewTheme,
        previewConfig,
        previewMetrics,
        "secondary"
      ),
      badgeStyle: {
        backgroundColor: previewTheme.primaryContainer,
        alignSelf: "flex-start" as const,
      },
    }),
    [previewTheme, previewConfig, previewMetrics]
  );

  const frameRadius = Math.max(8, Math.min(18, previewMetrics.cardRadiusPx));
  const innerRadius = Math.max(0, frameRadius - 1);
  const statusColor =
    previewConfig.statusBarMode === "light"
      ? "#FFFFFF"
      : previewConfig.statusBarMode === "dark"
      ? "#1A1108"
      : previewTheme.textPrimary;

  const isCenteredHeader = previewConfig.headerAlignment === "center";
  const appBarMinH =
    previewConfig.appBarSize === "xs"
      ? 18
      : previewConfig.appBarSize === "sm"
      ? 20
      : previewConfig.appBarSize === "lg"
      ? 25
      : previewConfig.appBarSize === "xl"
      ? 28
      : previewConfig.appBarStyle === "compact"
      ? 19
      : previewConfig.appBarStyle === "tall-editorial"
      ? 26
      : 22;

  const pillRadius = PILL_SHAPE_RADIUS[previewConfig.pillShape] ?? 999;
  const pillPV =
    previewConfig.pillSize === "xs"
      ? 1.5
      : previewConfig.pillSize === "sm"
      ? 2
      : previewConfig.pillSize === "lg"
      ? 3.5
      : previewConfig.pillSize === "xl"
      ? 4.5
      : 2.5;
  const pillPH =
    previewConfig.pillSize === "xs"
      ? 5
      : previewConfig.pillSize === "sm"
      ? 6
      : previewConfig.pillSize === "lg"
      ? 9
      : previewConfig.pillSize === "xl"
      ? 11
      : 7;

  const hScrollThick = Math.max(
    2,
    Math.min(
      6,
      resolveScrollbarThicknessPx(previewConfig.horizontalScrollbarThickness)
    )
  );
  const hScrollColor =
    previewConfig.customColors?.scrollbarColor || previewTheme.gold;

  const miniCardPad = Math.max(
    5,
    Math.min(11, Math.round(previewMetrics.cardPaddingPx * 0.52))
  );
  const miniIconScale = Math.max(
    0.8,
    Math.min(1.22, previewMetrics.iconScale || 1)
  );
  const miniTabBarH =
    previewConfig.tabBarSize === "xs"
      ? 24
      : previewConfig.tabBarSize === "sm"
      ? 27
      : previewConfig.tabBarSize === "lg"
      ? 33
      : previewConfig.tabBarSize === "xl"
      ? 36
      : 30;
  const showTabIcons = previewConfig.showTabIcons !== false;
  const showTabLabels = !showTabIcons || previewConfig.tabBarLabels !== false;
  const showOfflinePill = previewConfig.showOfflinePill !== false;
  const showCardDescriptions = previewConfig.showCardDescriptions !== false;
  const showCategoryBadges = previewConfig.showCategoryBadges !== false;
  const showTrailingArrows = previewConfig.showTrailingArrows !== false;
  const isFramelessSurface = previewConfig.surfaceStyle === "frameless";
  const isUnboxedInput = previewConfig.inputStyle === "unboxed";
  const isUnboxedBtn = previewConfig.buttonStyle === "unboxed-text";
  const miniBtnPV = Math.max(
    2.5,
    Math.min(6, Math.round(previewMetrics.buttonPaddingVPx * 0.36))
  );
  const miniBtnPH = isUnboxedBtn
    ? 2
    : Math.max(6, Math.min(12, Math.round(previewMetrics.buttonPaddingHPx * 0.52)));

  const isBentoHome =
    previewConfig.homeLayout === "bento-grid" ||
    previewConfig.homeLayout === "large-tiles";
  const isCompactRowHome =
    previewConfig.homeLayout === "compact-list" ||
    previewConfig.homeLayout === "minimal-rows";

  const renderPillItem = (label: string, idx: number, extraStyle?: object) => {
    const selected = activePill === idx;
    const isUnderline = previewConfig.pillBarLayout === "underline-tabs";
    const isMinimal = previewConfig.pillBarLayout === "minimal-text";
    const isSidebar = previewConfig.pillBarLayout === "sidebar-chips";
    const isIndexTabs = previewConfig.pillBarLayout === "index-tabs";
    return (
      <Pressable
        key={`mpill-${idx}`}
        onPress={() => onSelectPill(idx)}
        style={[
          {
            paddingVertical: pillPV,
            paddingHorizontal: pillPH,
            borderRadius: isUnderline || isMinimal || isIndexTabs ? 0 : pillRadius,
            borderTopLeftRadius: isIndexTabs ? 6 : undefined,
            borderTopRightRadius: isIndexTabs ? 6 : undefined,
            backgroundColor:
              isUnderline || isMinimal
                ? "transparent"
                : isIndexTabs
                ? selected
                  ? previewTheme.surfaceContainer
                  : previewTheme.surfaceContainerLow
                : selected
                ? previewTheme.gold
                : previewTheme.surfaceContainerHigh,
            borderWidth: isUnderline || isMinimal ? 0 : 1,
            borderColor: selected
              ? previewTheme.gold
              : previewTheme.outlineVariant,
            borderTopWidth: isIndexTabs ? (selected ? 2 : 1) : isUnderline || isMinimal ? 0 : 1,
            borderBottomWidth: isIndexTabs
              ? selected
                ? 0
                : 1
              : isUnderline
              ? selected
                ? 2
                : 0
              : isMinimal
              ? 0
              : 1,
            borderBottomColor:
              isUnderline && selected
                ? previewTheme.gold
                : previewTheme.outlineVariant,
            borderLeftWidth: isSidebar ? 3 : isUnderline || isMinimal ? 0 : 1,
            borderLeftColor: isSidebar
              ? selected
                ? previewTheme.gold
                : previewTheme.outline
              : selected
              ? previewTheme.gold
              : previewTheme.outlineVariant,
            alignItems: "center",
            justifyContent: "center",
          },
          extraStyle,
        ]}
      >
        <Text
          style={{
            fontFamily: previewFonts.bold,
            fontSize: 8.5,
            color:
              isUnderline || isMinimal || isIndexTabs
                ? selected
                  ? previewTheme.gold
                  : previewTheme.textSecondary
                : selected
                ? onGold
                : previewTheme.textPrimary,
            includeFontPadding: false,
          }}
          numberOfLines={1}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  const renderPillBar = () => {
    const layout = previewConfig.pillBarLayout;
    if (layout === "dropdown") {
      return (
        <Pressable
          onPress={() => onSelectPill((activePill + 1) % MINI_PILLS.length)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 7,
            paddingVertical: 3,
            borderRadius: pillRadius,
            backgroundColor: previewTheme.surfaceContainerHigh,
            borderWidth: 1,
            borderColor: previewTheme.gold,
          }}
        >
          <Text
            style={[{
              fontFamily: previewFonts.bold,
              fontSize: 8.5,
              color: previewTheme.textPrimary,
              includeFontPadding: false,
            }, { flexShrink: 1 }]}
          >
            Category: {MINI_PILLS[activePill]}
          </Text>
          <Ionicons
            name="chevron-down"
            size={10}
            color={previewTheme.gold}
          />
        </Pressable>
      );
    }

    if (layout === "stepper") {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 4,
            paddingVertical: 2,
            borderRadius: pillRadius,
            backgroundColor: previewTheme.surfaceContainerHigh,
            borderWidth: 1,
            borderColor: previewTheme.outlineVariant,
          }}
        >
          <Pressable
            onPress={() =>
              onSelectPill((activePill + MINI_PILLS.length - 1) % MINI_PILLS.length)
            }
            hitSlop={6}
          >
            <Ionicons name="chevron-back" size={11} color={previewTheme.gold} />
          </Pressable>
          <Text
            style={[{
              fontFamily: previewFonts.bold,
              fontSize: 8.5,
              color: previewTheme.textPrimary,
              includeFontPadding: false,
            }, { flexShrink: 1 }]}
          >
            {MINI_PILLS[activePill]} ({activePill + 1}/{MINI_PILLS.length})
          </Text>
          <Pressable
            onPress={() => onSelectPill((activePill + 1) % MINI_PILLS.length)}
            hitSlop={6}
          >
            <Ionicons
              name="chevron-forward"
              size={11}
              color={previewTheme.gold}
            />
          </Pressable>
        </View>
      );
    }

    if (layout === "segmented-bar") {
      return (
        <View
          style={{
            flexDirection: "row",
            padding: 2,
            borderRadius: pillRadius,
            backgroundColor: previewTheme.surfaceContainerHigh,
            borderWidth: 1,
            borderColor: previewTheme.outlineVariant,
            gap: 2,
          }}
        >
          {MINI_PILLS.map((label, idx) =>
            renderPillItem(label, idx, { flex: 1, borderWidth: 0 })
          )}
        </View>
      );
    }

    if (layout === "floating-dock") {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 2.5,
            paddingHorizontal: 5,
            borderRadius: 999,
            backgroundColor: previewTheme.surfaceContainer,
            borderWidth: 1,
            borderColor: previewTheme.gold,
            gap: 4,
          }}
        >
          {MINI_PILLS.map((label, idx) => renderPillItem(label, idx))}
        </View>
      );
    }

    if (layout === "two-col-grid") {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 3 }}>
          {MINI_PILLS.map((label, idx) =>
            renderPillItem(label, idx, { width: "48.5%" })
          )}
        </View>
      );
    }

    if (layout === "three-col-tiles") {
      return (
        <View style={{ flexDirection: "row", gap: 3 }}>
          {MINI_PILLS.slice(0, 3).map((label, idx) =>
            renderPillItem(label, idx, { flex: 1 })
          )}
        </View>
      );
    }

    if (layout === "vertical-list") {
      return (
        <View style={{ gap: 2 }}>
          {MINI_PILLS.slice(0, 2).map((label, idx) =>
            renderPillItem(label, idx, {
              width: "100%",
              alignItems: "flex-start",
            })
          )}
        </View>
      );
    }

    if (
      layout === "always-wrap" ||
      layout === "centered-wrap" ||
      layout === "grid-pills"
    ) {
      return (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:
              layout === "centered-wrap" ? "center" : "flex-start",
            gap: 4,
          }}
        >
          {MINI_PILLS.map((label, idx) =>
            renderPillItem(
              label,
              idx,
              layout === "grid-pills" ? { minWidth: "22%", flexGrow: 1 } : undefined
            )
          )}
        </View>
      );
    }

    // Horizontal scroll modes: scroll-with-expand, always-scroll, compact-scroll, underline-tabs, sidebar-chips, index-tabs, minimal-text
    const isIndexTabsRow = layout === "index-tabs";
    return (
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        style={
          isIndexTabsRow
            ? {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: previewTheme.outlineVariant,
              }
            : undefined
        }
        contentContainerStyle={{
          gap: isIndexTabsRow ? 3 : 4,
          alignItems: isIndexTabsRow ? "flex-end" : "center",
        }}
      >
        {MINI_PILLS.map((label, idx) => renderPillItem(label, idx))}
      </ScrollView>
    );
  };

  const renderHorizontalScrollbar = () => {
    const sbStyle = previewConfig.horizontalScrollbarStyle;
    if (sbStyle === "hidden") return null;
    if (sbStyle === "tick-ruler") {
      const tickCount = 9;
      const activeTickIdx = Math.round(
        (activePill / Math.max(1, MINI_PILLS.length - 1)) * (tickCount - 1)
      );
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            marginTop: 3,
            height: hScrollThick + 5,
          }}
        >
          {Array.from({ length: tickCount }, (_, i) => {
            const isActiveTick = i === activeTickIdx;
            const isMajor = i === 0 || i === 4 || i === 8;
            return (
              <View
                key={`sbtick-${i}`}
                style={{
                  width: isActiveTick ? 2 : 1,
                  height: isActiveTick
                    ? hScrollThick + 5
                    : isMajor
                    ? hScrollThick + 3
                    : hScrollThick + 1,
                  borderRadius: 1,
                  backgroundColor: isActiveTick
                    ? hScrollColor
                    : previewTheme.outlineVariant,
                  opacity: isActiveTick ? 1 : isMajor ? 0.8 : 0.45,
                }}
              />
            );
          })}
        </View>
      );
    }
    if (sbStyle === "dots") {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            marginTop: 3,
          }}
        >
          {MINI_PILLS.map((_, i) => (
            <View
              key={`sbdot-${i}`}
              style={{
                width: i === activePill ? hScrollThick * 2.2 : hScrollThick,
                height: hScrollThick,
                borderRadius: 999,
                backgroundColor:
                  i === activePill
                    ? hScrollColor
                    : previewTheme.outlineVariant,
              }}
            />
          ))}
        </View>
      );
    }

    const thumbColor =
      sbStyle === "subtle-bar" || sbStyle === "native-indicator"
        ? previewConfig.customColors?.scrollbarColor || previewTheme.outline
        : hScrollColor;

    return (
      <View
        style={{
          width: "100%",
          height: hScrollThick,
          borderRadius: 999,
          marginTop: 3,
          backgroundColor: previewConfig.scrollbarTrackVisible
            ? hexToRgba(previewTheme.outlineVariant, 0.35)
            : "transparent",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "42%",
            height: "100%",
            marginLeft: `${activePill * 18}%`,
            borderRadius: 999,
            backgroundColor: thumbColor,
            opacity: sbStyle === "glow-rail" ? 1 : 0.85,
          }}
        />
      </View>
    );
  };

  const renderTabBar = () => {
    const tbStyle = previewConfig.tabBarStyle;
    const indStyle = previewConfig.menuIndicatorStyle;
    const isFloating = tbStyle === "floating-pill";
    const isTopAccent = tbStyle === "top-accent";
    const isSegmented = tbStyle === "segmented";
    const isDocked = tbStyle === "docked-cards";

    return (
      <View
        style={[
          {
            minHeight: miniTabBarH,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingHorizontal: isFloating ? 6 : 3,
            paddingVertical: 2,
            backgroundColor:
              tbStyle === "minimal"
                ? previewTheme.bgPrimary
                : previewTheme.surfaceContainerLow,
            borderTopWidth:
              isFloating || tbStyle === "minimal"
                ? 0
                : StyleSheet.hairlineWidth,
            borderTopColor: isTopAccent
              ? previewTheme.gold
              : previewTheme.outlineVariant,
          },
          isFloating && {
            marginHorizontal: 8,
            marginBottom: 4,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: previewTheme.outlineVariant,
          },
        ]}
      >
        {MINI_TABS.map((tab, idx) => {
          const active = activeTab === idx;
          const isFilledBox = indStyle === "filled-box";
          const isBracket = indStyle === "bracket";
          const showTopNotch = active && (isBracket || isTopAccent);
          const tabColor = active
            ? isFilledBox
              ? onGold
              : previewTheme.gold
            : previewTheme.textMuted;

          return (
            <Pressable
              key={tab.label}
              onPress={() => onSelectTab(idx)}
              style={[
                {
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 2,
                  position: "relative",
                  borderRadius: isSegmented || isDocked ? 6 : 8,
                  backgroundColor:
                    active && (isFilledBox || isSegmented)
                      ? isFilledBox
                        ? previewTheme.gold
                        : previewTheme.primaryContainer
                      : isDocked
                      ? previewTheme.surfaceContainer
                      : "transparent",
                  borderWidth:
                    active && indStyle === "outline"
                      ? 1
                      : isDocked
                      ? StyleSheet.hairlineWidth
                      : 0,
                  borderColor:
                    active && indStyle === "outline"
                      ? previewTheme.gold
                      : previewTheme.outlineVariant,
                },
              ]}
            >
              {showTopNotch && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    width: 16,
                    height: 2,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    backgroundColor: previewTheme.gold,
                  }}
                />
              )}
              {showTabIcons && (
                <View
                  style={[
                    {
                      paddingHorizontal: active && indStyle === "pill" ? 7 : 2,
                      paddingVertical: 1,
                      borderRadius: 999,
                      backgroundColor:
                        active && (indStyle === "pill" || indStyle === "glow")
                          ? previewTheme.primaryContainer
                          : "transparent",
                    },
                  ]}
                >
                  <ThemedIcon
                    name={tab.icon}
                    size={Math.round(11 * miniIconScale)}
                    color={tabColor}
                    pack={previewConfig.iconPack}
                    scaleWithTheme={false}
                    overrideTheme={previewTheme}
                    overrideConfig={previewConfig}
                  />
                </View>
              )}
              {showTabLabels && (
                <View
                  style={
                    !showTabIcons && active && (indStyle === "pill" || indStyle === "glow")
                      ? {
                          paddingHorizontal: 6,
                          paddingVertical: 1.5,
                          borderRadius: 999,
                          backgroundColor: previewTheme.primaryContainer,
                        }
                      : undefined
                  }
                >
                  <Text
                    style={{
                      fontFamily: previewFonts.bold,
                      fontSize: showTabIcons ? 7.5 : 8.5,
                      color: tabColor,
                      marginTop: showTabIcons ? 1 : 0,
                      includeFontPadding: false,
                    }}
                    numberOfLines={1}
                  >
                    {tab.label}
                  </Text>
                </View>
              )}
              {active && indStyle === "underline" && !isTopAccent && !isBracket && (
                <View
                  style={{
                    width: 14,
                    height: 1.5,
                    borderRadius: 999,
                    backgroundColor: previewTheme.gold,
                    marginTop: 1,
                  }}
                />
              )}
              {active && indStyle === "dot" && !isTopAccent && !isBracket && (
                <View
                  style={{
                    width: 3.5,
                    height: 3.5,
                    borderRadius: 2,
                    backgroundColor: previewTheme.gold,
                    marginTop: 1,
                  }}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    );
  };

  const renderMiniSectionHeader = () => {
    const shStyle = previewConfig.sectionHeaderStyle || "eyebrow";
    if (shStyle === "accent-pill") {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              paddingHorizontal: 6,
              paddingVertical: 1.5,
              borderRadius: 999,
              backgroundColor: previewTheme.primaryContainer,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: hexToRgba(previewTheme.gold, 0.5),
            }}
          >
            <Text
              style={{
                fontFamily: previewFonts.bold,
                fontSize: 7.5,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: previewTheme.gold,
                includeFontPadding: false,
              }}
              numberOfLines={1}
            >
              Featured Tools
            </Text>
          </View>
        </View>
      );
    }
    if (shStyle === "ruled-line" || shStyle === "left-bar") {
      return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text
            style={{
              fontFamily: previewFonts.heading,
              fontSize: 8.5,
              color: previewTheme.textPrimary,
              textTransform: previewConfig.headingTransform || "none",
              includeFontPadding: false,
            }}
            numberOfLines={1}
          >
            Featured Tools
          </Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: hexToRgba(previewTheme.gold, 0.5),
            }}
          />
        </View>
      );
    }
    if (shStyle === "bold-title") {
      return (
        <Text
          style={{
            fontFamily: previewFonts.heading,
            fontSize: 9.5,
            color: previewTheme.textPrimary,
            textTransform: previewConfig.headingTransform || "none",
            includeFontPadding: false,
          }}
          numberOfLines={1}
        >
          Featured Tools
        </Text>
      );
    }
    return (
      <Text
        style={{
          fontFamily: previewFonts.bold,
          fontSize: 7.5,
          letterSpacing: 0.8,
          textTransform: "uppercase",
          color: previewTheme.gold,
          includeFontPadding: false,
        }}
        numberOfLines={1}
      >
        Featured Tools
      </Text>
    );
  };

  return (
    <View
      style={[
        styles.miniFrameOuter,
        {
          borderRadius: frameRadius,
          borderColor: previewTheme.outlineVariant,
          backgroundColor: previewTheme.bgPrimary,
        },
      ]}
    >
      <View
        style={[
          styles.miniFrameInnerClip,
          {
            borderRadius: innerRadius,
            backgroundColor: previewTheme.bgPrimary,
          },
        ]}
      >
        {/* Mini Status Bar */}
        <View
          style={[
            styles.miniStatusBar,
            { backgroundColor: previewTheme.surfaceContainerLow },
          ]}
        >
          <Text style={[styles.miniStatusTime, { color: statusColor }, { flexShrink: 1 }]}>
            9:41
          </Text>
          <View style={styles.miniStatusIcons}>
            <Ionicons name="cellular" size={9} color={statusColor} />
            <Ionicons name="wifi" size={9} color={statusColor} />
            <Ionicons name="battery-full" size={10} color={statusColor} />
          </View>
        </View>

        {/* Real KenyaStripe */}
        <KenyaStripe
          themeOverride={previewTheme}
          configOverride={previewConfig}
        />

        {/* Mini Top App Bar */}
        <View
          style={[
            styles.miniAppBar,
            {
              minHeight: appBarMinH,
              backgroundColor:
                previewConfig.appBarStyle === "accent-tinted"
                  ? previewTheme.primaryContainer
                  : previewTheme.surfaceContainerLow,
              borderBottomWidth:
                previewConfig.appBarStyle === "borderless"
                  ? 0
                  : StyleSheet.hairlineWidth,
              borderBottomColor: previewTheme.outlineVariant,
              justifyContent: isCenteredHeader ? "center" : "space-between",
            },
            previewConfig.appBarStyle === "floating" && {
              marginHorizontal: 6,
              marginTop: 3,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: previewTheme.outlineVariant,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: previewFonts.heading,
              fontSize: 10.5,
              color: previewTheme.textPrimary,
              textTransform: previewConfig.headingTransform || "none",
              includeFontPadding: false,
            }}
            numberOfLines={1}
          >
            KenyaHub
          </Text>
          {!isCenteredHeader ? (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              {showOfflinePill && (
                <View
                  style={[
                    styles.miniOfflinePill,
                    {
                      backgroundColor: previewTheme.secondaryContainer,
                      borderColor: hexToRgba(previewTheme.kenyaGreenLight, 0.45),
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.miniOfflinePillText,
                      { color: previewTheme.onSecondaryContainer },
                    ]}
                    numberOfLines={1}
                  >
                    OFFLINE
                  </Text>
                </View>
              )}
              <ThemedIcon
                name="notifications-outline"
                size={Math.round(11 * miniIconScale)}
                color={previewTheme.gold}
                pack={previewConfig.iconPack}
                scaleWithTheme={false}
                overrideTheme={previewTheme}
                overrideConfig={previewConfig}
              />
            </View>
          ) : (
            showOfflinePill && (
              <View
                style={[
                  styles.miniOfflinePill,
                  {
                    position: "absolute",
                    right: 8,
                    backgroundColor: previewTheme.secondaryContainer,
                    borderColor: hexToRgba(previewTheme.kenyaGreenLight, 0.45),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.miniOfflinePillText,
                    { color: previewTheme.onSecondaryContainer },
                  ]}
                  numberOfLines={1}
                >
                  OFFLINE
                </Text>
              </View>
            )
          )}
        </View>

        {/* Mini Body Area */}
        <View style={styles.miniBody}>
          {/* Mini Search Bar */}
          <View
            style={[
              inputStyle,
              {
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingHorizontal: isUnboxedInput ? 2 : 7,
                paddingVertical: isUnboxedInput ? 2 : 3,
              },
            ]}
          >
            <ThemedIcon
              name="search"
              size={Math.round(10 * miniIconScale)}
              color={previewTheme.textMuted}
              pack={previewConfig.iconPack}
              scaleWithTheme={false}
              overrideTheme={previewTheme}
              overrideConfig={previewConfig}
            />
            <Text
              style={{
                fontFamily: previewFonts.body,
                fontSize: 8.5,
                color: previewTheme.textMuted,
                includeFontPadding: false,
              }}
              numberOfLines={1}
            >
              Search KRA, CBC, Laws...
            </Text>
          </View>

          {/* Mini Pill Row + Horizontal Scrollbar Indicator */}
          <View>
            {renderPillBar()}
            {renderHorizontalScrollbar()}
          </View>

          {/* Mini Section Header reflecting sectionHeaderStyle */}
          {renderMiniSectionHeader()}

          {/* Mini Body Card(s) reflecting homeLayout */}
          {isBentoHome ? (
            <View style={{ flexDirection: "row", gap: 6 }}>
              {[
                { title: "PAYE Tax", tag: "FINANCE", desc: "2026 KRA bands", stat: "KES 12,450", icon: "calculator-outline" as const },
                { title: "CBC Notes", tag: "STUDY", desc: "Junior school", stat: "Grade 8", icon: "school-outline" as const },
              ].map((tile) => (
                <View
                  key={tile.title}
                  style={[
                    cardStyle,
                    {
                      flex: 1,
                      paddingVertical: miniCardPad,
                      paddingHorizontal: isFramelessSurface ? 0 : miniCardPad,
                      gap: 3,
                    },
                  ]}
                >
                  {showCategoryBadges && (
                    <View style={[styles.miniCategoryTag, badgeStyle]}>
                      <Text
                        style={[
                          styles.miniCategoryTagText,
                          { color: previewTheme.gold },
                        ]}
                        numberOfLines={1}
                      >
                        {tile.tag}
                      </Text>
                    </View>
                  )}
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <ThemedIconBadge
                      name={tile.icon}
                      accentColor={previewTheme.gold}
                      baseSize={22}
                      iconSize={11}
                      overrideTheme={previewTheme}
                      overrideConfig={previewConfig}
                    />
                    <View style={styles.flexOne}>
                      <Text
                        style={{
                          fontFamily: previewFonts.heading,
                          fontSize: 9.5,
                          color: previewTheme.textPrimary,
                          textTransform: previewConfig.headingTransform || "none",
                          includeFontPadding: false,
                        }}
                        numberOfLines={1}
                      >
                        {tile.title}
                      </Text>
                      {showCardDescriptions && (
                        <Text
                          style={{
                            fontFamily: previewFonts.body,
                            fontSize: 7.5,
                            color: previewTheme.textSecondary,
                            includeFontPadding: false,
                          }}
                          numberOfLines={1}
                        >
                          {tile.desc}
                        </Text>
                      )}
                      <Text
                        style={{
                          fontFamily:
                            previewConfig.numericStyle === "tabular-mono"
                              ? monoFont
                              : previewFonts.bold,
                          fontVariant: ["tabular-nums"],
                          fontSize: 8.5,
                          color: previewTheme.gold,
                          includeFontPadding: false,
                        }}
                        numberOfLines={1}
                      >
                        {tile.stat}
                      </Text>
                    </View>
                  </View>
                  <ThemedProgressBar
                    progress={0.68}
                    color={previewTheme.gold}
                    height={3.5}
                    themeOverride={previewTheme}
                    configOverride={previewConfig}
                  />
                </View>
              ))}
            </View>
          ) : isCompactRowHome ? (
            <View
              style={[
                cardStyle,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: miniCardPad,
                  paddingHorizontal: isFramelessSurface ? 0 : miniCardPad,
                  gap: 6,
                },
              ]}
            >
              <ThemedIconBadge
                name="wallet-outline"
                accentColor={previewTheme.gold}
                baseSize={22}
                iconSize={11}
                overrideTheme={previewTheme}
                overrideConfig={previewConfig}
              />
              <View style={styles.flexOne}>
                {showCategoryBadges && (
                  <Text
                    style={[
                      styles.miniCategoryTagText,
                      { color: previewTheme.gold, marginBottom: 1 },
                    ]}
                    numberOfLines={1}
                  >
                    FINANCE
                  </Text>
                )}
                <Text
                  style={{
                    fontFamily: previewFonts.heading,
                    fontSize: 10,
                    color: previewTheme.textPrimary,
                    textTransform: previewConfig.headingTransform || "none",
                    includeFontPadding: false,
                  }}
                  numberOfLines={1}
                >
                  PAYE Relief Summary
                </Text>
                {showCardDescriptions && (
                  <Text
                    style={{
                      fontFamily: previewFonts.body,
                      fontSize: 8,
                      color: previewTheme.textSecondary,
                      includeFontPadding: false,
                    }}
                    numberOfLines={1}
                  >
                    2026 KRA bands &amp; SHIF relief
                  </Text>
                )}
                <Text
                  style={{
                    fontFamily:
                      previewConfig.numericStyle === "tabular-mono"
                        ? monoFont
                        : previewFonts.bold,
                    fontVariant: ["tabular-nums"],
                    fontSize: 9,
                    color: previewTheme.gold,
                    includeFontPadding: false,
                  }}
                >
                  KES 12,450
                </Text>
              </View>
              <Pressable
                onPress={onActionPress}
                style={[
                  primaryBtn.container,
                  { paddingVertical: miniBtnPV, paddingHorizontal: miniBtnPH },
                ]}
              >
                <Text
                  style={{
                    fontFamily: previewFonts.bold,
                    fontSize: 8.5,
                    color: primaryBtn.textColor,
                    includeFontPadding: false,
                  }}
                >
                  Open
                </Text>
              </Pressable>
              {showTrailingArrows && (
                <Ionicons
                  name="chevron-forward"
                  size={11}
                  color={previewTheme.textMuted}
                />
              )}
            </View>
          ) : (
            <View
              style={[
                cardStyle,
                {
                  paddingVertical: miniCardPad,
                  paddingHorizontal: isFramelessSurface ? 0 : miniCardPad,
                  gap: 4,
                },
              ]}
            >
              <View style={styles.miniCardTopRow}>
                <ThemedIconBadge
                  name="wallet-outline"
                  accentColor={previewTheme.gold}
                  baseSize={22}
                  iconSize={11}
                  overrideTheme={previewTheme}
                  overrideConfig={previewConfig}
                />
                <View style={styles.flexOne}>
                  {showCategoryBadges && (
                    <View
                      style={[
                        styles.miniCategoryTag,
                        badgeStyle,
                        { marginBottom: 1.5 },
                      ]}
                    >
                      <Text
                        style={[
                          styles.miniCategoryTagText,
                          { color: previewTheme.gold },
                        ]}
                        numberOfLines={1}
                      >
                        FINANCE
                      </Text>
                    </View>
                  )}
                  <Text
                    style={{
                      fontFamily: previewFonts.heading,
                      fontSize: 10.5,
                      color: previewTheme.textPrimary,
                      textTransform: previewConfig.headingTransform || "none",
                      includeFontPadding: false,
                    }}
                    numberOfLines={1}
                  >
                    Civic & Tax Suite
                  </Text>
                  {showCardDescriptions && (
                    <Text
                      style={{
                        fontFamily: previewFonts.body,
                        fontSize: 8,
                        color: previewTheme.textSecondary,
                        includeFontPadding: false,
                      }}
                      numberOfLines={1}
                    >
                      PAYE, SHIF &amp; housing levy offline
                    </Text>
                  )}
                </View>
                <Text
                  style={[{
                    fontFamily:
                      previewConfig.numericStyle === "tabular-mono"
                        ? monoFont
                        : previewFonts.bold,
                    fontVariant: ["tabular-nums"],
                    fontSize: 9.5,
                    color: previewTheme.gold,
                    includeFontPadding: false,
                  }, { flexShrink: 1 }]}
                >
                  KES 12,450
                </Text>
                {showTrailingArrows && (
                  <Ionicons
                    name="chevron-forward"
                    size={11}
                    color={previewTheme.textMuted}
                  />
                )}
              </View>

              <ThemedDivider
                style={{ marginVertical: 2 }}
                themeOverride={previewTheme}
                configOverride={previewConfig}
              />

              <ThemedProgressBar
                progress={0.68}
                color={previewTheme.gold}
                height={4}
                themeOverride={previewTheme}
                configOverride={previewConfig}
              />

              <View style={styles.miniCardBtnsRow}>
                <Pressable
                  onPress={onActionPress}
                  style={[
                    primaryBtn.container,
                    {
                      paddingVertical: miniBtnPV,
                      paddingHorizontal: miniBtnPH,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: previewFonts.bold,
                      fontSize: 8.5,
                      color: primaryBtn.textColor,
                      includeFontPadding: false,
                    }}
                  >
                    Primary
                  </Text>
                </Pressable>
                <Pressable
                  onPress={onActionPress}
                  style={[
                    secondaryBtn.container,
                    isUnboxedBtn
                      ? {
                          backgroundColor: "transparent",
                          borderWidth: 0,
                          borderRadius: 0,
                          paddingVertical: miniBtnPV,
                          paddingHorizontal: 2,
                        }
                      : {
                          paddingVertical: miniBtnPV,
                          paddingHorizontal: miniBtnPH,
                        },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: previewFonts.bold,
                      fontSize: 8.5,
                      color: isUnboxedBtn
                        ? previewTheme.textSecondary
                        : secondaryBtn.textColor,
                      includeFontPadding: false,
                    }}
                  >
                    Secondary
                  </Text>
                </Pressable>
              </View>
            </View>
          )}

          {/* Mini Floating Quick-Jump Badge */}
          {previewConfig.quickMenuPosition !== "off" && (
            <View
              pointerEvents="none"
              style={[
                styles.miniQuickJumpBadge,
                {
                  backgroundColor: previewTheme.gold,
                  right:
                    previewConfig.quickMenuPosition === "bottom-right"
                      ? 6
                      : undefined,
                  left:
                    previewConfig.quickMenuPosition === "bottom-left"
                      ? 6
                      : undefined,
                },
              ]}
            >
              <ThemedIcon
                name="compass"
                size={11}
                color={onGold}
                pack={previewConfig.iconPack}
                scaleWithTheme={false}
                overrideTheme={previewTheme}
                overrideConfig={previewConfig}
              />
            </View>
          )}
        </View>

        {/* Interactive 4-Tab Mini Bottom Tab Bar */}
        {renderTabBar()}
      </View>
    </View>
  );
});

const CardCompactPreview = React.memo(function CardCompactPreview({
  previewTheme,
  previewConfig,
  previewMetrics,
  previewFonts,
  onActionPress,
}: {
  previewTheme: ThemeColors;
  previewConfig: ThemeConfig;
  previewMetrics: ThemeMetrics;
  previewFonts: { heading: string; body: string; bold: string };
  onActionPress: () => void;
}) {
  const monoFont = Platform.OS === "ios" ? "Menlo" : "monospace";
  const { cardStyle, primaryBtn, secondaryBtn } = useMemo(
    () => ({
      cardStyle: getThemedCardStyle(previewTheme, previewConfig, previewMetrics),
      primaryBtn: getThemedButtonStyle(
        previewTheme,
        previewConfig,
        previewMetrics,
        "primary"
      ),
      secondaryBtn: getThemedButtonStyle(
        previewTheme,
        previewConfig,
        previewMetrics,
        "secondary"
      ),
    }),
    [previewTheme, previewConfig, previewMetrics]
  );
  const isFramelessSurface = previewConfig.surfaceStyle === "frameless";
  const isUnboxedBtn = previewConfig.buttonStyle === "unboxed-text";
  const showCardDescriptions = previewConfig.showCardDescriptions !== false;
  const showCategoryBadges = previewConfig.showCategoryBadges !== false;
  const showTrailingArrows = previewConfig.showTrailingArrows !== false;
  const innerRadius = isFramelessSurface
    ? 0
    : Math.max(0, previewMetrics.cardRadiusPx - previewMetrics.borderWidthPx);
  const pad = Math.max(8, Math.min(14, Math.round(previewMetrics.cardPaddingPx * 0.72)));

  return (
    <View style={[styles.previewOuter, cardStyle]}>
      <View
        style={[
          styles.previewInnerClip,
          { borderRadius: innerRadius, elevation: 0 },
        ]}
      >
        <KenyaStripe
          themeOverride={previewTheme}
          configOverride={previewConfig}
        />
        <View
          style={{
            paddingVertical: pad,
            paddingHorizontal: isFramelessSurface ? 2 : pad,
            gap: 6,
          }}
        >
          <View style={styles.miniCardTopRow}>
            <ThemedIconBadge
              name="sparkles"
              accentColor={previewTheme.gold}
              baseSize={26}
              iconSize={13}
              overrideTheme={previewTheme}
              overrideConfig={previewConfig}
            />
            <View style={styles.flexOne}>
              {showCategoryBadges && (
                <View
                  style={[
                    styles.miniCategoryTag,
                    {
                      backgroundColor: previewTheme.primaryContainer,
                      alignSelf: "flex-start",
                      marginBottom: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.miniCategoryTagText,
                      { color: previewTheme.gold },
                    ]}
                    numberOfLines={1}
                  >
                    CIVIC &amp; TAX
                  </Text>
                </View>
              )}
              <Text
                style={{
                  fontFamily: previewFonts.heading,
                  fontSize: Math.round(13.5 * previewMetrics.fontScale),
                  color: previewTheme.textPrimary,
                  textTransform: previewConfig.headingTransform || "none",
                  letterSpacing: previewMetrics.letterSpacingOffset,
                  includeFontPadding: false,
                }}
                numberOfLines={1}
              >
                KenyaHub Civic & Utility Suite
              </Text>
              {showCardDescriptions && (
                <Text
                  style={{
                    fontFamily: previewFonts.body,
                    fontSize: Math.round(10.5 * previewMetrics.fontScale),
                    color: previewTheme.textSecondary,
                    marginTop: 1,
                    includeFontPadding: false,
                  }}
                  numberOfLines={1}
                >
                  PAYE, SHIF &amp; statutory deductions offline
                </Text>
              )}
            </View>
            <Text
              style={[{
                fontFamily:
                  previewConfig.numericStyle === "tabular-mono"
                    ? monoFont
                    : previewFonts.bold,
                fontVariant: ["tabular-nums"],
                fontSize: 11,
                color: previewTheme.gold,
                includeFontPadding: false,
              }, { flexShrink: 1 }]}
            >
              KES 12,450
            </Text>
            {showTrailingArrows && (
              <Ionicons
                name="chevron-forward"
                size={13}
                color={previewTheme.textMuted}
              />
            )}
          </View>

          <ThemedDivider
            style={{ marginVertical: 1 }}
            themeOverride={previewTheme}
            configOverride={previewConfig}
          />

          <ThemedProgressBar
            progress={0.68}
            color={previewTheme.gold}
            height={4.5}
            themeOverride={previewTheme}
            configOverride={previewConfig}
          />

          <View style={styles.miniCardBtnsRow}>
            <Pressable
              onPress={onActionPress}
              style={[
                primaryBtn.container,
                {
                  paddingVertical: 5,
                  paddingHorizontal: isUnboxedBtn ? 2 : 11,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: previewFonts.bold,
                  fontSize: 11,
                  color: primaryBtn.textColor,
                  includeFontPadding: false,
                }}
              >
                Primary Action
              </Text>
            </Pressable>
            <Pressable
              onPress={onActionPress}
              style={[
                secondaryBtn.container,
                isUnboxedBtn
                  ? {
                      backgroundColor: "transparent",
                      borderWidth: 0,
                      borderRadius: 0,
                      paddingVertical: 5,
                      paddingHorizontal: 4,
                    }
                  : { paddingVertical: 5, paddingHorizontal: 11 },
              ]}
            >
              <Text
                style={{
                  fontFamily: previewFonts.bold,
                  fontSize: 11,
                  color: isUnboxedBtn
                    ? previewTheme.textSecondary
                    : secondaryBtn.textColor,
                  includeFontPadding: false,
                }}
              >
                Secondary
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
});

const AccordionCard = React.memo(function AccordionCard({
  icon,
  title,
  summary,
  expanded,
  onToggle,
  theme,
  children,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  summary: string;
  expanded: boolean;
  onToggle: () => void;
  theme: ThemeColors;
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
});

const OptionPillGroup = React.memo(function OptionPillGroup<T extends string | number>({
  label,
  options,
  selectedValue,
  onSelect,
  configKey,
  onConfigSelect,
  theme,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  selectedValue: T;
  onSelect?: (value: T) => void;
  configKey?: keyof ThemeConfig;
  onConfigSelect?: (key: keyof ThemeConfig, value: any) => void;
  theme: ThemeColors;
}) {
  const { language: appLang } = useAppLanguage();
  const handleSelect = (val: T) => {
    if (configKey && onConfigSelect) {
      onConfigSelect(configKey, val);
    } else if (onSelect) {
      onSelect(val);
    }
  };
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
              key={`${label}-${String(opt.value)}`}
              onPress={() => handleSelect(opt.value)}
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
                    { color: active ? theme.onPrimaryContainer : theme.textSecondary },
                  ]}
                >
                  {localizeOptionLabel(opt.value, opt.label, appLang)}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}) as <T extends string | number>(props: {
  label: string;
  options: readonly { value: T; label: string }[];
  selectedValue: T;
  onSelect?: (value: T) => void;
  configKey?: keyof ThemeConfig;
  onConfigSelect?: (key: keyof ThemeConfig, value: any) => void;
  theme: ThemeColors;
}) => React.ReactElement;

const ToggleRow = React.memo(function ToggleRow({
  label,
  description,
  value,
  onValueChange,
  configKey,
  onConfigChange,
  theme,
}: {
  label: string;
  description: string;
  value: boolean;
  onValueChange?: (val: boolean) => void;
  configKey?: keyof ThemeConfig;
  onConfigChange?: (key: keyof ThemeConfig, value: boolean) => void;
  theme: ThemeColors;
}) {
  const handleToggle = useCallback(
    (next: boolean) => {
      if (configKey && onConfigChange) {
        onConfigChange(configKey, next);
      } else if (onValueChange) {
        onValueChange(next);
      }
    },
    [configKey, onConfigChange, onValueChange]
  );
  return (
    <Pressable
      onPress={() => handleToggle(!value)}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      accessibilityLabel={label}
      android_ripple={androidRipple(theme.rippleColor)}
      style={pressableStyle(styles.toggleRowPressable, undefined, false)}
    >
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
          <Text
            style={[styles.optionGroupDesc, { color: theme.textSecondary }]}
          >
            {description}
          </Text>
        </View>
        <Switch
          value={value}
          onValueChange={handleToggle}
          trackColor={{
            false: theme.surfaceContainerHighest,
            true: theme.gold,
          }}
          thumbColor={value ? theme.kenyaBlack : theme.kenyaWhite}
          accessibilityLabel={label}
        />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  previewDock: {
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 7,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  dockHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  dockTitleCluster: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexShrink: 1,
  },
  dockEyebrow: {
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    letterSpacing: 0.6,
    includeFontPadding: false,
  },
  dockControlsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  peekBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  peekBtnText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    includeFontPadding: false,
  },
  previewModeSwitch: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 1,
    padding: 2,
    gap: 2,
  },
  previewModeBtn: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 999,
  },
  previewModeText: {
    fontFamily: "Inter_700Bold",
    fontSize: 9.5,
    includeFontPadding: false,
  },
  miniFrameOuter: {
    width: "100%",
    borderWidth: 1,
  },
  miniFrameInnerClip: {
    width: "100%",
    overflow: "hidden",
  },
  miniStatusBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  miniStatusTime: {
    fontFamily: "Inter_700Bold",
    fontSize: 8.5,
    includeFontPadding: false,
  },
  miniStatusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  miniAppBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  miniBody: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    gap: 5,
    position: "relative",
  },
  miniCardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  miniCardBtnsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  miniQuickJumpBadge: {
    position: "absolute",
    bottom: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  diffBarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 24,
  },
  diffCountBadge: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 1,
  },
  diffCountText: {
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    includeFontPadding: false,
  },
  diffChipsScroll: {
    gap: 5,
    alignItems: "center",
  },
  diffChipPressable: {
    borderRadius: 999,
    overflow: "hidden",
  },
  diffChipInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 1,
  },
  diffChipLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    includeFontPadding: false,
  },
  diffEmptyText: {
    fontFamily: "Inter_400Regular",
    fontSize: 10.5,
    includeFontPadding: false,
    flex: 1,
  },
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
  appearanceCard: {
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 9,
  },
  appearanceDivider: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
  },
  oledSlimRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  searchBarWrap: {
    gap: 6,
  },
  searchInputContainer: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 11,
    borderRadius: 12,
    borderWidth: 1,
  },
  searchInputField: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    paddingVertical: 6,
    includeFontPadding: false,
  },
  searchSummaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 2,
  },
  searchSummaryCount: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    includeFontPadding: false,
  },
  searchChipsScroll: {
    gap: 5,
    alignItems: "center",
  },
  searchChipPressable: {
    borderRadius: 999,
    overflow: "hidden",
  },
  searchChipInner: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  searchChipLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10.5,
    includeFontPadding: false,
  },
  searchEmptyCard: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    alignItems: "center",
    gap: 8,
  },
  searchEmptyText: {
    fontFamily: "Inter_500Medium",
    fontSize: 12.5,
    textAlign: "center",
    includeFontPadding: false,
  },
  searchClearBtnPressable: {
    borderRadius: 9,
    overflow: "hidden",
  },
  searchClearBtnInner: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9,
    borderWidth: 1,
  },
  searchClearBtnText: {
    fontFamily: "Inter_700Bold",
    fontSize: 11.5,
    includeFontPadding: false,
  },
  segmentedRow: {
    flexDirection: "row",
    borderRadius: 10,
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
  previewOuter: {
    width: "100%",
  },
  previewInnerClip: {
    width: "100%",
    overflow: "hidden",
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
    width: "48.6%",
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
  saveThemeBlock: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  saveThemeEyebrow: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    letterSpacing: 0.4,
    includeFontPadding: false,
  },
  saveThemeDesc: {
    fontFamily: "Inter_400Regular",
    fontSize: 11.5,
    lineHeight: 16,
    includeFontPadding: false,
  },
  saveThemeInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  saveThemeInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: "Inter_400Regular",
    fontSize: 12.5,
  },
  saveThemeBtnPressable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  saveThemeBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 10,
  },
  saveThemeBtnText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    includeFontPadding: false,
  },
  saveThemeFeedback: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11.5,
    includeFontPadding: false,
  },
  savedThemesList: {
    gap: 6,
    marginTop: 4,
  },
  savedThemesHeading: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    letterSpacing: 0.4,
    includeFontPadding: false,
  },
  savedThemeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  savedThemeSelectArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  savedThemeSwatches: {
    flexDirection: "row",
    gap: 3,
  },
  savedThemeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  savedThemeName: {
    fontFamily: "Inter_700Bold",
    fontSize: 12.5,
    flex: 1,
    includeFontPadding: false,
  },
  savedThemeApplyBtn: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
  },
  savedThemeApplyText: {
    fontFamily: "Inter_700Bold",
    fontSize: 11,
    includeFontPadding: false,
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
    width: "48.6%",
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
    gap: 10,
  },
  swatchCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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
  visualSwatchStrip: {
    gap: 8,
    paddingVertical: 2,
  },
  visualSwatchPressable: {
    borderRadius: 11,
    overflow: "hidden",
  },
  visualSwatchInner: {
    minWidth: 82,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  visualBadgePreviewSlot: {
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  visualSwatchLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10.5,
    includeFontPadding: false,
    textAlign: "center",
  },
  visualGlyphStrip: {
    flexDirection: "row",
    gap: 6,
  },
  visualGlyphPressable: {
    flex: 1,
    borderRadius: 11,
    overflow: "hidden",
  },
  visualGlyphInner: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  toggleRowPressable: {
    borderRadius: 11,
    overflow: "hidden",
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
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    includeFontPadding: false,
  },
  stripDownBlock: {
    marginTop: 6,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    gap: 8,
  },
  stripDownEyebrow: {
    fontFamily: "Inter_700Bold",
    fontSize: 10.5,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    includeFontPadding: false,
  },
  stripDownPresetRow: {
    flexDirection: "row",
    gap: 8,
  },
  stripDownPresetPressable: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  stripDownPresetInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  stripDownPresetText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11.5,
    includeFontPadding: false,
  },
  miniOfflinePill: {
    paddingHorizontal: 4.5,
    paddingVertical: 1,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  miniOfflinePillText: {
    fontFamily: "Inter_700Bold",
    fontSize: 6.5,
    letterSpacing: 0.4,
    includeFontPadding: false,
  },
  miniCategoryTag: {
    paddingHorizontal: 4,
    paddingVertical: 0.5,
    borderRadius: 4,
  },
  miniCategoryTagText: {
    fontFamily: "Inter_700Bold",
    fontSize: 6.5,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    includeFontPadding: false,
  },
});
