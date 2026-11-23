/**
 * KenyaHub Mobile — Comprehensive Theming Engine
 * Self-contained, zero-UI-dependency TypeScript module.
 */

export type ThemeMode = "system" | "light" | "dark";
export type SurfaceStyle = "elevated" | "flat" | "outlined" | "glass" | "tonal" | "crisp";
export type BorderWidthPreset = "none" | "hairline" | "thin" | "medium" | "thick" | "bold";
export type RadiusPreset = "square" | "sharp" | "subtle" | "rounded" | "soft" | "pill";
export type ButtonRadiusPreset = "square" | "sharp" | "subtle" | "rounded" | "soft" | "pill";
export type FontPair =
  | "outfit-inter"
  | "classic-sans"
  | "editorial-serif"
  | "mono-tech"
  | "geometric"
  | "humanist"
  | "condensed"
  | "grotesk"
  | "casual"
  | "cursive";

export type HorizontalScrollbarStyle =
  | "hidden"
  | "native-indicator"
  | "subtle-bar"
  | "accent-track"
  | "glow-rail"
  | "dots";

export type ScrollbarThickness =
  | "hairline"
  | "thin"
  | "medium"
  | "thick"
  | "bold"
  | "extra";

export type PillBarLayout =
  | "scroll-with-expand"
  | "always-scroll"
  | "always-wrap"
  | "compact-scroll"
  | "centered-wrap"
  | "grid-pills";

export type AppBarStyle =
  | "standard"
  | "compact"
  | "tall-editorial"
  | "borderless"
  | "accent-tinted"
  | "floating";

export type StripeThickness =
  | "hidden"
  | "hairline"
  | "thin"
  | "medium"
  | "thick"
  | "bold";
export type DensityPreset = "ultra-compact" | "compact" | "comfortable" | "balanced" | "relaxed" | "spacious";
export type TabBarStyle =
  | "classic"
  | "floating-pill"
  | "compact"
  | "minimal"
  | "top-accent"
  | "docked-cards"
  | "segmented";

export type MenuIndicatorStyle =
  | "pill"
  | "underline"
  | "dot"
  | "filled-box"
  | "glow"
  | "outline";

export type VerticalScrollbarStyle = "hidden" | "native" | "always-visible";

export type CardShadowIntensity = "none" | "subtle" | "medium" | "strong" | "glow" | "crisp-3d";

export type InputStylePreset = "outlined" | "filled" | "underlined" | "pill" | "minimal" | "accent";

export type ButtonStylePreset = "filled" | "tinted" | "outlined" | "elevated" | "pill-glow" | "flat";

export type PageTransitionPreset = "slide" | "fade" | "bottom-sheet" | "fast" | "none" | "default";

export type StatusBarMode = "auto" | "light" | "dark";

export type QuickMenuPosition = "off" | "bottom-right" | "bottom-left";
export type ColorBlindMode = "none" | "deuteranopia" | "protanopia" | "tritanopia";

export type HomeLayoutPreset =
  | "classic"
  | "bento-grid"
  | "compact-list"
  | "editorial-cards"
  | "minimal-rows"
  | "large-tiles";

export type HeaderAlignment = "left" | "center";

export type CardAccentStyle =
  | "none"
  | "left-bar"
  | "top-bar"
  | "bottom-bar"
  | "tinted-border"
  | "glow-edge";

export type IconBadgeStyle =
  | "outline"
  | "filled"
  | "soft-circle"
  | "soft-square"
  | "accent-solid"
  | "minimal";

export interface CustomColorsConfig {
  primaryAccent?: string;
  secondaryAccent?: string;
  tertiaryAccent?: string;
  dangerAccent?: string;
  bgPrimary?: string;
  surfaceCard?: string;
  textPrimary?: string;
  borderColor?: string;
  scrollbarColor?: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  presetId: string;
  customColors: CustomColorsConfig;
  surfaceStyle: SurfaceStyle;
  borderWidth: BorderWidthPreset;
  cardRadius: RadiusPreset;
  buttonRadius: ButtonRadiusPreset;
  fontScale: number;
  fontPair: FontPair;
  lineHeightScale: number;
  letterSpacingOffset: number;
  density: DensityPreset;
  showKenyaStripe: boolean;
  tabBarStyle: TabBarStyle;
  tabBarLabels: boolean;
  hapticsEnabled: boolean;
  reduceMotion: boolean;
  highContrastBorders: boolean;
  colorBlindMode: ColorBlindMode;
  horizontalScrollbarStyle: HorizontalScrollbarStyle;
  horizontalScrollbarThickness: ScrollbarThickness;
  scrollbarTrackVisible: boolean;
  pillBarLayout: PillBarLayout;
  pillShape: ButtonRadiusPreset;
  edgeFadeEnabled: boolean;
  scrollBounceEnabled: boolean;
  appBarStyle: AppBarStyle;
  stripeThickness: StripeThickness;
  menuIndicatorStyle: MenuIndicatorStyle;
  verticalScrollbarStyle: VerticalScrollbarStyle;
  cardShadowIntensity: CardShadowIntensity;
  inputStyle: InputStylePreset;
  buttonStyle: ButtonStylePreset;
  pageTransition: PageTransitionPreset;
  statusBarMode: StatusBarMode;
  quickMenuPosition: QuickMenuPosition;
  homeLayout: HomeLayoutPreset;
  headerAlignment: HeaderAlignment;
  cardAccentStyle: CardAccentStyle;
  iconBadgeStyle: IconBadgeStyle;
}

export interface ThemeColorsShape {
  isDark: boolean;
  kenyaBlack: string;
  kenyaRed: string;
  kenyaRedLight: string;
  kenyaGreen: string;
  kenyaGreenLight: string;
  kenyaWhite: string;
  gold: string;
  goldLight: string;
  sky: string;
  skyLight: string;
  earth: string;
  earthLight: string;
  bgPrimary: string;
  bgSecondary: string;
  bgCard: string;
  bgCardHover: string;
  bgElevated: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  border: string;
  borderLight: string;
  borderAccent: string;
  outline: string;
  outlineVariant: string;
  rippleColor: string;
  textPrimary: string;
  text: string;
  surface: string;
  textSecondary: string;
  textMuted: string;
  warningAmber: string;
  lockedText: string;
  lockedBadgeText: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  tagline: string;
  recommendedMode: "dark" | "light";
  swatches: [string, string, string, string];
  dark: Partial<ThemeColorsShape>;
  light: Partial<ThemeColorsShape>;
}

export interface ThemeMetrics {
  cardRadiusPx: number;
  buttonRadiusPx: number;
  borderWidthPx: number;
  spacingScale: number;
  fontScale: number;
  lineHeightScale: number;
  letterSpacingOffset: number;
  elevationPx: number;
  cardOpacity: number;
}

export const SUPPORTED_FONT_SCALES = [0.85, 0.92, 1.0, 1.08, 1.18, 1.28] as const;
export const SUPPORTED_LINE_HEIGHT_SCALES = [0.92, 1.0, 1.15] as const;
export const SUPPORTED_LETTER_SPACING_OFFSETS = [-0.2, 0, 0.4] as const;

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  mode: "system",
  presetId: "kenyan-heritage",
  customColors: {},
  surfaceStyle: "elevated",
  borderWidth: "thin",
  cardRadius: "rounded",
  buttonRadius: "rounded",
  fontScale: 1.0,
  fontPair: "outfit-inter",
  lineHeightScale: 1.0,
  letterSpacingOffset: 0,
  density: "comfortable",
  showKenyaStripe: true,
  tabBarStyle: "classic",
  tabBarLabels: true,
  hapticsEnabled: true,
  reduceMotion: false,
  highContrastBorders: false,
  colorBlindMode: "none",
  horizontalScrollbarStyle: "subtle-bar",
  horizontalScrollbarThickness: "thin",
  scrollbarTrackVisible: true,
  pillBarLayout: "scroll-with-expand",
  pillShape: "pill",
  edgeFadeEnabled: true,
  scrollBounceEnabled: true,
  appBarStyle: "standard",
  stripeThickness: "thin",
  menuIndicatorStyle: "pill",
  verticalScrollbarStyle: "hidden",
  cardShadowIntensity: "subtle",
  inputStyle: "outlined",
  buttonStyle: "filled",
  pageTransition: "slide",
  statusBarMode: "auto",
  quickMenuPosition: "off",
  homeLayout: "classic",
  headerAlignment: "left",
  cardAccentStyle: "none",
  iconBadgeStyle: "soft-circle",
};

export interface AppLookProfile {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  swatches: [string, string, string, string];
  config: Partial<ThemeConfig>;
}

export const APP_LOOK_PROFILES: AppLookProfile[] = [
  {
    id: "kenyahub-classic",
    name: "KenyaHub Classic",
    tagline: "Default KenyaHub Heritage look",
    icon: "shield-checkmark-outline",
    swatches: ["#0E0C0A", "#FAF7F2", "#C8961E", "#006B3F"],
    config: {
      presetId: DEFAULT_THEME_CONFIG.presetId,
      mode: DEFAULT_THEME_CONFIG.mode,
      tabBarStyle: DEFAULT_THEME_CONFIG.tabBarStyle,
      tabBarLabels: DEFAULT_THEME_CONFIG.tabBarLabels,
      menuIndicatorStyle: DEFAULT_THEME_CONFIG.menuIndicatorStyle,
      fontPair: DEFAULT_THEME_CONFIG.fontPair,
      surfaceStyle: DEFAULT_THEME_CONFIG.surfaceStyle,
      cardRadius: DEFAULT_THEME_CONFIG.cardRadius,
      buttonRadius: DEFAULT_THEME_CONFIG.buttonRadius,
      borderWidth: DEFAULT_THEME_CONFIG.borderWidth,
      horizontalScrollbarStyle: DEFAULT_THEME_CONFIG.horizontalScrollbarStyle,
      pillBarLayout: DEFAULT_THEME_CONFIG.pillBarLayout,
      appBarStyle: DEFAULT_THEME_CONFIG.appBarStyle,
      homeLayout: DEFAULT_THEME_CONFIG.homeLayout,
      headerAlignment: DEFAULT_THEME_CONFIG.headerAlignment,
      cardAccentStyle: DEFAULT_THEME_CONFIG.cardAccentStyle,
      iconBadgeStyle: DEFAULT_THEME_CONFIG.iconBadgeStyle,
      quickMenuPosition: DEFAULT_THEME_CONFIG.quickMenuPosition,
      cardShadowIntensity: DEFAULT_THEME_CONFIG.cardShadowIntensity,
      customColors: {},
    },
  },
  {
    id: "minimalist-zen",
    name: "Minimalist Zen",
    tagline: "Coastal Lamu · Flat · Floating Pill · Minimal Rows",
    icon: "leaf-outline",
    swatches: ["#F5F9FA", "#E9F1F3", "#0E8A8D", "#C89B3C"],
    config: {
      presetId: "coastal-lamu",
      mode: "light",
      tabBarStyle: "floating-pill",
      tabBarLabels: true,
      menuIndicatorStyle: "dot",
      fontPair: "humanist",
      surfaceStyle: "flat",
      cardRadius: "soft",
      buttonRadius: "pill",
      borderWidth: "none",
      horizontalScrollbarStyle: "hidden",
      pillBarLayout: "centered-wrap",
      appBarStyle: "borderless",
      homeLayout: "minimal-rows",
      headerAlignment: "center",
      cardAccentStyle: "none",
      iconBadgeStyle: "minimal",
      quickMenuPosition: "off",
      cardShadowIntensity: "none",
      customColors: {},
    },
  },
  {
    id: "cyber-terminal",
    name: "Cyber Terminal",
    tagline: "Nairobi Cyber · Sharp · Tech Mono · Bento Grid",
    icon: "terminal-outline",
    swatches: ["#070917", "#121736", "#FFD23F", "#00E5FF"],
    config: {
      presetId: "nairobi-cyber",
      mode: "dark",
      tabBarStyle: "segmented",
      tabBarLabels: true,
      menuIndicatorStyle: "glow",
      fontPair: "mono-tech",
      surfaceStyle: "crisp",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "medium",
      horizontalScrollbarStyle: "glow-rail",
      pillBarLayout: "always-scroll",
      appBarStyle: "accent-tinted",
      homeLayout: "bento-grid",
      headerAlignment: "left",
      cardAccentStyle: "glow-edge",
      iconBadgeStyle: "outline",
      quickMenuPosition: "bottom-right",
      cardShadowIntensity: "glow",
      customColors: {},
    },
  },
  {
    id: "editorial-magazine",
    name: "Editorial Magazine",
    tagline: "Sepia Parchment · Serif · Tall Header · Cards",
    icon: "book-outline",
    swatches: ["#F4ECD8", "#FAF4E4", "#94621F", "#3B5E36"],
    config: {
      presetId: "sepia-parchment",
      mode: "light",
      tabBarStyle: "top-accent",
      tabBarLabels: true,
      menuIndicatorStyle: "underline",
      fontPair: "editorial-serif",
      surfaceStyle: "outlined",
      cardRadius: "subtle",
      buttonRadius: "subtle",
      borderWidth: "hairline",
      horizontalScrollbarStyle: "subtle-bar",
      pillBarLayout: "always-wrap",
      appBarStyle: "tall-editorial",
      homeLayout: "editorial-cards",
      headerAlignment: "center",
      cardAccentStyle: "top-bar",
      iconBadgeStyle: "soft-square",
      quickMenuPosition: "off",
      cardShadowIntensity: "subtle",
      customColors: {},
    },
  },
  {
    id: "amoled-stealth",
    name: "AMOLED Stealth",
    tagline: "AMOLED Pitch · Pill Corners · Compact List",
    icon: "moon-outline",
    swatches: ["#000000", "#0D0D0D", "#F5C542", "#2FA463"],
    config: {
      presetId: "amoled-pitch",
      mode: "dark",
      tabBarStyle: "compact",
      tabBarLabels: false,
      menuIndicatorStyle: "pill",
      fontPair: "grotesk",
      surfaceStyle: "flat",
      cardRadius: "pill",
      buttonRadius: "pill",
      borderWidth: "hairline",
      horizontalScrollbarStyle: "accent-track",
      pillBarLayout: "compact-scroll",
      appBarStyle: "compact",
      homeLayout: "compact-list",
      headerAlignment: "left",
      cardAccentStyle: "tinted-border",
      iconBadgeStyle: "filled",
      quickMenuPosition: "off",
      cardShadowIntensity: "none",
      customColors: {},
    },
  },
  {
    id: "vibrant-bento",
    name: "Vibrant Bento",
    tagline: "Forest Canopy · Geometric · Docked Cards · Left Bar",
    icon: "grid-outline",
    swatches: ["#070F0B", "#13261D", "#28B874", "#C2A14D"],
    config: {
      presetId: "forest-canopy",
      mode: "dark",
      tabBarStyle: "docked-cards",
      tabBarLabels: true,
      menuIndicatorStyle: "filled-box",
      fontPair: "geometric",
      surfaceStyle: "tonal",
      cardRadius: "soft",
      buttonRadius: "soft",
      borderWidth: "thin",
      horizontalScrollbarStyle: "dots",
      pillBarLayout: "grid-pills",
      appBarStyle: "floating",
      homeLayout: "bento-grid",
      headerAlignment: "left",
      cardAccentStyle: "left-bar",
      iconBadgeStyle: "accent-solid",
      quickMenuPosition: "off",
      cardShadowIntensity: "medium",
      customColors: {},
    },
  },
];

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "kenyan-heritage",
    name: "Kenyan Heritage",
    tagline: "Savanna Cream & Obsidian Gold/Green",
    recommendedMode: "light",
    swatches: ["#0E0C0A", "#FAF7F2", "#C8961E", "#006B3F"],
    dark: {},
    light: {},
  },
  {
    id: "amoled-pitch",
    name: "AMOLED Pitch",
    tagline: "Pure #000000 OLED Black / Crisp White",
    recommendedMode: "dark",
    swatches: ["#000000", "#111111", "#FFFFFF", "#2FA463"],
    dark: {
      bgPrimary: "#000000",
      bgSecondary: "#080808",
      bgCard: "#0D0D0D",
      bgCardHover: "#161616",
      bgElevated: "#1A1A1A",
      surface: "#0D0D0D",
      surfaceContainerLowest: "#000000",
      surfaceContainerLow: "#080808",
      surfaceContainer: "#0F0F0F",
      surfaceContainerHigh: "#171717",
      surfaceContainerHighest: "#212121",
      border: "#2E2E2E",
      borderLight: "#3D3D3D",
      borderAccent: "#525252",
      outline: "#6E6E6E",
      outlineVariant: "#2E2E2E",
      textPrimary: "#FFFFFF",
      text: "#FFFFFF",
      textSecondary: "#B3B3B3",
      textMuted: "#8C8C8C",
      gold: "#F5C542",
      goldLight: "#FFE082",
      primaryContainer: "rgba(245, 197, 66, 0.20)",
      onPrimaryContainer: "#FFE599",
      rippleColor: "rgba(255, 255, 255, 0.14)",
    },
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F5F5F5",
      bgCard: "#FFFFFF",
      bgCardHover: "#F2F2F2",
      bgElevated: "#EBEBEB",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FAFAFA",
      surfaceContainer: "#F4F4F4",
      surfaceContainerHigh: "#ECECEC",
      surfaceContainerHighest: "#E2E2E2",
      border: "#D4D4D4",
      borderLight: "#BDBDBD",
      borderAccent: "#8C8C8C",
      outline: "#737373",
      outlineVariant: "#D4D4D4",
      textPrimary: "#000000",
      text: "#000000",
      textSecondary: "#404040",
      textMuted: "#666666",
      gold: "#B45309",
      goldLight: "#D97706",
      primaryContainer: "rgba(180, 83, 9, 0.14)",
      onPrimaryContainer: "#451A03",
      rippleColor: "rgba(0, 0, 0, 0.10)",
    },
  },
  {
    id: "rift-valley-dawn",
    name: "Rift Valley Dawn",
    tagline: "Warm Terracotta, Clay & Copper",
    recommendedMode: "light",
    swatches: ["#1C110D", "#FDF6F0", "#D96B43", "#E09F5A"],
    dark: {
      bgPrimary: "#140C09",
      bgSecondary: "#1E120E",
      bgCard: "#261712",
      bgCardHover: "#311E17",
      bgElevated: "#38221A",
      surface: "#261712",
      surfaceContainerLowest: "#0E0806",
      surfaceContainerLow: "#1C110D",
      surfaceContainer: "#261712",
      surfaceContainerHigh: "#321F18",
      surfaceContainerHighest: "#3F281F",
      gold: "#E07A48",
      goldLight: "#F2A174",
      earth: "#B8522E",
      earthLight: "#D97B59",
      primaryContainer: "rgba(224, 122, 72, 0.22)",
      onPrimaryContainer: "#FFD2BD",
      secondaryContainer: "rgba(184, 82, 46, 0.20)",
      onSecondaryContainer: "#F7B59C",
      border: "#6E4B3E",
      borderLight: "#825B4C",
      borderAccent: "#996D5C",
      outline: "#9E7363",
      outlineVariant: "#6E4B3E",
      textPrimary: "#FAF0EA",
      text: "#FAF0EA",
      textSecondary: "#D1B9AC",
      textMuted: "#B09486",
      rippleColor: "rgba(242, 161, 116, 0.18)",
    },
    light: {
      bgPrimary: "#FDF6F0",
      bgSecondary: "#F6E9DF",
      bgCard: "#FFFFFF",
      bgCardHover: "#FAF0E8",
      bgElevated: "#F2E2D5",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FAF1EA",
      surfaceContainer: "#F4E7DD",
      surfaceContainerHigh: "#ECDCD0",
      surfaceContainerHighest: "#E4D0C2",
      gold: "#C2592B",
      goldLight: "#D96B43",
      earth: "#8C3B1E",
      earthLight: "#A84E2D",
      primaryContainer: "rgba(194, 89, 43, 0.15)",
      onPrimaryContainer: "#5C220A",
      secondaryContainer: "rgba(0, 107, 63, 0.12)",
      onSecondaryContainer: "#004D2C",
      border: "#A88D7E",
      borderLight: "#94786A",
      borderAccent: "#7D6255",
      outline: "#8C7062",
      outlineVariant: "#A88D7E",
      textPrimary: "#24130D",
      text: "#24130D",
      textSecondary: "#5E4337",
      textMuted: "#785B4E",
      rippleColor: "rgba(194, 89, 43, 0.14)",
    },
  },
  {
    id: "coastal-lamu",
    name: "Coastal Lamu",
    tagline: "Coral Stone, Indian Ocean Teal & Brass",
    recommendedMode: "light",
    swatches: ["#0B171A", "#F5F9FA", "#0E8A8D", "#C89B3C"],
    dark: {
      bgPrimary: "#081214",
      bgSecondary: "#0E1D21",
      bgCard: "#13262B",
      bgCardHover: "#1A3238",
      bgElevated: "#1F3B42",
      surface: "#13262B",
      surfaceContainerLowest: "#050C0E",
      surfaceContainerLow: "#0E1D21",
      surfaceContainer: "#13262B",
      surfaceContainerHigh: "#1B343B",
      surfaceContainerHighest: "#23424A",
      gold: "#D4A84A",
      goldLight: "#ECC66D",
      sky: "#18A6A8",
      skyLight: "#5CD4D6",
      kenyaGreen: "#0E8A8D",
      kenyaGreenLight: "#36B5B8",
      primaryContainer: "rgba(212, 168, 74, 0.20)",
      onPrimaryContainer: "#F7DF9E",
      secondaryContainer: "rgba(24, 166, 168, 0.20)",
      onSecondaryContainer: "#8CEAE8",
      border: "#385D66",
      borderLight: "#46707A",
      borderAccent: "#568591",
      outline: "#5F8D99",
      outlineVariant: "#385D66",
      textPrimary: "#ECF6F7",
      text: "#ECF6F7",
      textSecondary: "#A9C4C9",
      textMuted: "#84A3A8",
      rippleColor: "rgba(92, 212, 214, 0.18)",
    },
    light: {
      bgPrimary: "#F5F9FA",
      bgSecondary: "#E9F1F3",
      bgCard: "#FFFFFF",
      bgCardHover: "#F0F6F7",
      bgElevated: "#E2ECEE",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFF5F7",
      surfaceContainer: "#E6EFF1",
      surfaceContainerHigh: "#DCE8EB",
      surfaceContainerHighest: "#D1E0E4",
      gold: "#B38629",
      goldLight: "#C89B3C",
      sky: "#0E7A7D",
      skyLight: "#159A9E",
      kenyaGreen: "#0D7377",
      kenyaGreenLight: "#149196",
      primaryContainer: "rgba(179, 134, 41, 0.15)",
      onPrimaryContainer: "#523B08",
      secondaryContainer: "rgba(13, 115, 119, 0.13)",
      onSecondaryContainer: "#054447",
      border: "#7D9AA1",
      borderLight: "#6A878E",
      borderAccent: "#55727A",
      outline: "#66838A",
      outlineVariant: "#7D9AA1",
      textPrimary: "#0D2024",
      text: "#0D2024",
      textSecondary: "#3B575E",
      textMuted: "#547178",
      rippleColor: "rgba(14, 122, 125, 0.14)",
    },
  },
  {
    id: "mount-kenya-mist",
    name: "Mount Kenya Mist",
    tagline: "Alpine Slate, Glacier Blue & Emerald",
    recommendedMode: "dark",
    swatches: ["#0F141A", "#F4F7FA", "#4B8FCC", "#2E9E6B"],
    dark: {
      bgPrimary: "#0B0F14",
      bgSecondary: "#121821",
      bgCard: "#18202B",
      bgCardHover: "#202A38",
      bgElevated: "#263242",
      surface: "#18202B",
      surfaceContainerLowest: "#070A0E",
      surfaceContainerLow: "#121821",
      surfaceContainer: "#18202B",
      surfaceContainerHigh: "#222C3B",
      surfaceContainerHighest: "#2C394C",
      gold: "#5CA4E6",
      goldLight: "#8AC2F5",
      sky: "#4B8FCC",
      skyLight: "#7DB9ED",
      kenyaGreen: "#2E9E6B",
      kenyaGreenLight: "#52C791",
      primaryContainer: "rgba(92, 164, 230, 0.22)",
      onPrimaryContainer: "#C4E2FC",
      secondaryContainer: "rgba(46, 158, 107, 0.20)",
      onSecondaryContainer: "#94E8C0",
      border: "#425266",
      borderLight: "#52647A",
      borderAccent: "#647891",
      outline: "#6E829C",
      outlineVariant: "#425266",
      textPrimary: "#EEF3F8",
      text: "#EEF3F8",
      textSecondary: "#ADBAC9",
      textMuted: "#8796A8",
      rippleColor: "rgba(138, 194, 245, 0.18)",
    },
    light: {
      bgPrimary: "#F4F7FA",
      bgSecondary: "#E8EEF5",
      bgCard: "#FFFFFF",
      bgCardHover: "#EFF4F9",
      bgElevated: "#E1E9F2",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFF3F8",
      surfaceContainer: "#E6ECF3",
      surfaceContainerHigh: "#DCE4EE",
      surfaceContainerHighest: "#D1DCE8",
      gold: "#2D6FA8",
      goldLight: "#4B8FCC",
      sky: "#236299",
      skyLight: "#3B82BF",
      kenyaGreen: "#1D7D52",
      kenyaGreenLight: "#2E9E6B",
      primaryContainer: "rgba(45, 111, 168, 0.14)",
      onPrimaryContainer: "#103759",
      secondaryContainer: "rgba(29, 125, 82, 0.12)",
      onSecondaryContainer: "#0C452B",
      border: "#8597AB",
      borderLight: "#708399",
      borderAccent: "#5B6F85",
      outline: "#6C8096",
      outlineVariant: "#8597AB",
      textPrimary: "#101924",
      text: "#101924",
      textSecondary: "#415266",
      textMuted: "#5A6C80",
      rippleColor: "rgba(45, 111, 168, 0.14)",
    },
  },
  {
    id: "nairobi-cyber",
    name: "Nairobi Cyber",
    tagline: "Deep Midnight Indigo, Electric Gold & Cyan",
    recommendedMode: "dark",
    swatches: ["#090B1A", "#121733", "#FFD23F", "#00E5FF"],
    dark: {
      bgPrimary: "#070917",
      bgSecondary: "#0D1129",
      bgCard: "#121736",
      bgCardHover: "#19204A",
      bgElevated: "#1F2859",
      surface: "#121736",
      surfaceContainerLowest: "#04050F",
      surfaceContainerLow: "#0D1129",
      surfaceContainer: "#121736",
      surfaceContainerHigh: "#1B224D",
      surfaceContainerHighest: "#252E66",
      gold: "#FFD23F",
      goldLight: "#FFE47A",
      sky: "#00D4EB",
      skyLight: "#66ECFA",
      kenyaGreen: "#00C896",
      kenyaGreenLight: "#47E6BE",
      kenyaRed: "#FF3B5C",
      kenyaRedLight: "#FF758C",
      primaryContainer: "rgba(255, 210, 63, 0.22)",
      onPrimaryContainer: "#FFF0B3",
      secondaryContainer: "rgba(0, 212, 235, 0.18)",
      onSecondaryContainer: "#99F4FF",
      border: "#35407A",
      borderLight: "#445299",
      borderAccent: "#5667BA",
      outline: "#6374C7",
      outlineVariant: "#35407A",
      textPrimary: "#F2F5FF",
      text: "#F2F5FF",
      textSecondary: "#A8B3DB",
      textMuted: "#808DBA",
      rippleColor: "rgba(0, 229, 255, 0.18)",
    },
    light: {
      bgPrimary: "#F2F4FC",
      bgSecondary: "#E4E9F7",
      bgCard: "#FFFFFF",
      bgCardHover: "#EDF0FA",
      bgElevated: "#DCE3F5",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#ECEFFA",
      surfaceContainer: "#E2E6F6",
      surfaceContainerHigh: "#D6DCF2",
      surfaceContainerHighest: "#CAD2ED",
      gold: "#B8860B",
      goldLight: "#D9A31E",
      sky: "#0088A3",
      skyLight: "#00ACC7",
      kenyaGreen: "#008563",
      kenyaGreenLight: "#00A87E",
      primaryContainer: "rgba(184, 134, 11, 0.15)",
      onPrimaryContainer: "#523A00",
      secondaryContainer: "rgba(0, 136, 163, 0.14)",
      onSecondaryContainer: "#004654",
      border: "#7E8BB8",
      borderLight: "#6A78A6",
      borderAccent: "#546291",
      outline: "#6674A3",
      outlineVariant: "#7E8BB8",
      textPrimary: "#0D1333",
      text: "#0D1333",
      textSecondary: "#3A4573",
      textMuted: "#556191",
      rippleColor: "rgba(0, 136, 163, 0.14)",
    },
  },
  {
    id: "high-contrast",
    name: "High Contrast",
    tagline: "WCAG AAA Maximum Contrast",
    recommendedMode: "dark",
    swatches: ["#000000", "#FFFFFF", "#FFD600", "#00E676"],
    dark: {
      bgPrimary: "#000000",
      bgSecondary: "#0A0A0A",
      bgCard: "#0F0F0F",
      bgCardHover: "#1C1C1C",
      bgElevated: "#242424",
      surface: "#0F0F0F",
      surfaceContainerLowest: "#000000",
      surfaceContainerLow: "#0A0A0A",
      surfaceContainer: "#121212",
      surfaceContainerHigh: "#1E1E1E",
      surfaceContainerHighest: "#2B2B2B",
      gold: "#FFD600",
      goldLight: "#FFEA61",
      kenyaGreen: "#00E676",
      kenyaGreenLight: "#69F0AE",
      kenyaRed: "#FF5252",
      kenyaRedLight: "#FF8A80",
      sky: "#40C4FF",
      skyLight: "#80D8FF",
      primaryContainer: "rgba(255, 214, 0, 0.26)",
      onPrimaryContainer: "#FFF59D",
      secondaryContainer: "rgba(0, 230, 118, 0.24)",
      onSecondaryContainer: "#B9F6CA",
      border: "#FFFFFF",
      borderLight: "#E0E0E0",
      borderAccent: "#FFD600",
      outline: "#FFFFFF",
      outlineVariant: "#BDBDBD",
      textPrimary: "#FFFFFF",
      text: "#FFFFFF",
      textSecondary: "#F5F5F5",
      textMuted: "#E0E0E0",
      warningAmber: "#FFD600",
      lockedText: "#E0E0E0",
      lockedBadgeText: "#FFFFFF",
      rippleColor: "rgba(255, 255, 255, 0.22)",
    },
    light: {
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F2F2F2",
      bgCard: "#FFFFFF",
      bgCardHover: "#EBEBEB",
      bgElevated: "#E0E0E0",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F5F5F5",
      surfaceContainer: "#EDEDED",
      surfaceContainerHigh: "#E3E3E3",
      surfaceContainerHighest: "#D6D6D6",
      gold: "#7A5400",
      goldLight: "#996900",
      kenyaGreen: "#005C2E",
      kenyaGreenLight: "#00753B",
      kenyaRed: "#A80000",
      kenyaRedLight: "#C40000",
      sky: "#00528A",
      skyLight: "#0069B0",
      primaryContainer: "rgba(122, 84, 0, 0.16)",
      onPrimaryContainer: "#332200",
      secondaryContainer: "rgba(0, 92, 46, 0.15)",
      onSecondaryContainer: "#002E17",
      border: "#000000",
      borderLight: "#1F1F1F",
      borderAccent: "#000000",
      outline: "#000000",
      outlineVariant: "#333333",
      textPrimary: "#000000",
      text: "#000000",
      textSecondary: "#141414",
      textMuted: "#262626",
      warningAmber: "#7A3E00",
      lockedText: "#1F1F1F",
      lockedBadgeText: "#000000",
      rippleColor: "rgba(0, 0, 0, 0.16)",
    },
  },
  {
    id: "sepia-parchment",
    name: "Sepia Parchment",
    tagline: "Paper-like Warm Sepia for Reading",
    recommendedMode: "light",
    swatches: ["#211A12", "#F4ECD8", "#9E6B2B", "#4A6B44"],
    dark: {
      bgPrimary: "#17120C",
      bgSecondary: "#211A12",
      bgCard: "#292117",
      bgCardHover: "#33291D",
      bgElevated: "#3B3022",
      surface: "#292117",
      surfaceContainerLowest: "#100C08",
      surfaceContainerLow: "#211A12",
      surfaceContainer: "#292117",
      surfaceContainerHigh: "#342A1E",
      surfaceContainerHighest: "#403425",
      gold: "#C9964D",
      goldLight: "#E0B472",
      kenyaGreen: "#4D8046",
      kenyaGreenLight: "#70A668",
      primaryContainer: "rgba(201, 150, 77, 0.22)",
      onPrimaryContainer: "#F5DCB5",
      secondaryContainer: "rgba(77, 128, 70, 0.20)",
      onSecondaryContainer: "#B8E0B2",
      border: "#6B5A45",
      borderLight: "#7D6B53",
      borderAccent: "#947F64",
      outline: "#99856B",
      outlineVariant: "#6B5A45",
      textPrimary: "#F0E5D1",
      text: "#F0E5D1",
      textSecondary: "#C7B89F",
      textMuted: "#A6967E",
      rippleColor: "rgba(224, 180, 114, 0.18)",
    },
    light: {
      bgPrimary: "#F4ECD8",
      bgSecondary: "#EAE0C8",
      bgCard: "#FAF4E4",
      bgCardHover: "#F2EAD6",
      bgElevated: "#E5DAC0",
      surface: "#FAF4E4",
      surfaceContainerLowest: "#FDF9EE",
      surfaceContainerLow: "#F3EBD6",
      surfaceContainer: "#EBE1C8",
      surfaceContainerHigh: "#E2D6BA",
      surfaceContainerHighest: "#D9CCAD",
      gold: "#94621F",
      goldLight: "#B0782C",
      kenyaGreen: "#3B5E36",
      kenyaGreenLight: "#4E7848",
      primaryContainer: "rgba(148, 98, 31, 0.16)",
      onPrimaryContainer: "#4A2E08",
      secondaryContainer: "rgba(59, 94, 54, 0.14)",
      onSecondaryContainer: "#1E331B",
      border: "#9E8D72",
      borderLight: "#8A7A61",
      borderAccent: "#73644E",
      outline: "#82725A",
      outlineVariant: "#9E8D72",
      textPrimary: "#2B2114",
      text: "#2B2114",
      textSecondary: "#5C4B35",
      textMuted: "#75634B",
      rippleColor: "rgba(148, 98, 31, 0.14)",
    },
  },
  {
    id: "safari-olive",
    name: "Safari Olive",
    tagline: "Savanna Olive, Khaki & Amber",
    recommendedMode: "light",
    swatches: ["#14170E", "#F5F5EB", "#7A8C38", "#D99A26"],
    dark: {
      bgPrimary: "#10120B",
      bgSecondary: "#181C11",
      bgCard: "#1F2417",
      bgCardHover: "#282E1E",
      bgElevated: "#303824",
      surface: "#1F2417",
      surfaceContainerLowest: "#0A0C07",
      surfaceContainerLow: "#181C11",
      surfaceContainer: "#1F2417",
      surfaceContainerHigh: "#29301F",
      surfaceContainerHighest: "#333C27",
      gold: "#D99A26",
      goldLight: "#F0BA54",
      kenyaGreen: "#6B8E3D",
      kenyaGreenLight: "#8EB55B",
      primaryContainer: "rgba(217, 154, 38, 0.22)",
      onPrimaryContainer: "#F7DC9E",
      secondaryContainer: "rgba(107, 142, 61, 0.22)",
      onSecondaryContainer: "#C8E3A3",
      border: "#4E593B",
      borderLight: "#5E6B48",
      borderAccent: "#718058",
      outline: "#7A8A60",
      outlineVariant: "#4E593B",
      textPrimary: "#F0F2E4",
      text: "#F0F2E4",
      textSecondary: "#BCC2A7",
      textMuted: "#99A184",
      rippleColor: "rgba(240, 186, 84, 0.18)",
    },
    light: {
      bgPrimary: "#F5F5EB",
      bgSecondary: "#EAEBD9",
      bgCard: "#FCFDF7",
      bgCardHover: "#F2F3E6",
      bgElevated: "#E3E5D1",
      surface: "#FCFDF7",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F3F4E8",
      surfaceContainer: "#EAEBD9",
      surfaceContainerHigh: "#E0E2CD",
      surfaceContainerHighest: "#D5D8BF",
      gold: "#B37A12",
      goldLight: "#CC8F21",
      kenyaGreen: "#526E2B",
      kenyaGreenLight: "#6B8E3D",
      primaryContainer: "rgba(179, 122, 18, 0.16)",
      onPrimaryContainer: "#4D3203",
      secondaryContainer: "rgba(82, 110, 43, 0.14)",
      onSecondaryContainer: "#293813",
      border: "#8B9173",
      borderLight: "#787E62",
      borderAccent: "#63694F",
      outline: "#70785B",
      outlineVariant: "#8B9173",
      textPrimary: "#1B1F11",
      text: "#1B1F11",
      textSecondary: "#4B5238",
      textMuted: "#656E4E",
      rippleColor: "rgba(179, 122, 18, 0.14)",
    },
  },
  {
    id: "maasai-ochre",
    name: "Maasai Ochre",
    tagline: "Rich Ochre, Crimson & Warm Charcoal",
    recommendedMode: "dark",
    swatches: ["#18100E", "#FAF4F0", "#C93B2B", "#D4882A"],
    dark: {
      bgPrimary: "#120B0A",
      bgSecondary: "#1C1210",
      bgCard: "#241715",
      bgCardHover: "#2E1E1B",
      bgElevated: "#382421",
      surface: "#241715",
      surfaceContainerLowest: "#0A0605",
      surfaceContainerLow: "#1C1210",
      surfaceContainer: "#241715",
      surfaceContainerHigh: "#30201D",
      surfaceContainerHighest: "#3D2925",
      gold: "#DE8E2C",
      goldLight: "#F5B05B",
      kenyaRed: "#D93829",
      kenyaRedLight: "#F56B5E",
      primaryContainer: "rgba(222, 142, 44, 0.22)",
      onPrimaryContainer: "#FAD8A5",
      secondaryContainer: "rgba(217, 56, 41, 0.22)",
      onSecondaryContainer: "#FFB8B0",
      border: "#6B4742",
      borderLight: "#805650",
      borderAccent: "#996861",
      outline: "#9E6E67",
      outlineVariant: "#6B4742",
      textPrimary: "#FAF0ED",
      text: "#FAF0ED",
      textSecondary: "#CFB7B2",
      textMuted: "#AD918B",
      rippleColor: "rgba(245, 176, 91, 0.18)",
    },
    light: {
      bgPrimary: "#FAF4F0",
      bgSecondary: "#F2E6DF",
      bgCard: "#FFFFFF",
      bgCardHover: "#F7EDE7",
      bgElevated: "#EBDCD3",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F7EFEA",
      surfaceContainer: "#F0E4DD",
      surfaceContainerHigh: "#E8D9D0",
      surfaceContainerHighest: "#DFCEC4",
      gold: "#B86E14",
      goldLight: "#D4882A",
      kenyaRed: "#B32418",
      kenyaRedLight: "#CC3629",
      primaryContainer: "rgba(184, 110, 20, 0.15)",
      onPrimaryContainer: "#543004",
      secondaryContainer: "rgba(179, 36, 24, 0.13)",
      onSecondaryContainer: "#5C0E08",
      border: "#A1847E",
      borderLight: "#8C716B",
      borderAccent: "#755C57",
      outline: "#856B65",
      outlineVariant: "#A1847E",
      textPrimary: "#21110E",
      text: "#21110E",
      textSecondary: "#593F3A",
      textMuted: "#735650",
      rippleColor: "rgba(179, 36, 24, 0.13)",
    },
  },
  {
    id: "sakura-rose",
    name: "Sakura Rose",
    tagline: "Soft Rose & Plum Accent",
    recommendedMode: "light",
    swatches: ["#171014", "#FDF6F8", "#D95D82", "#8E4A7A"],
    dark: {
      bgPrimary: "#120B0F",
      bgSecondary: "#1C1217",
      bgCard: "#24171E",
      bgCardHover: "#2E1E26",
      bgElevated: "#38242F",
      surface: "#24171E",
      surfaceContainerLowest: "#0A0608",
      surfaceContainerLow: "#1C1217",
      surfaceContainer: "#24171E",
      surfaceContainerHigh: "#302028",
      surfaceContainerHighest: "#3D2933",
      gold: "#E06C8E",
      goldLight: "#F598B3",
      sky: "#A66393",
      skyLight: "#C98BB8",
      primaryContainer: "rgba(224, 108, 142, 0.22)",
      onPrimaryContainer: "#FFD1DF",
      secondaryContainer: "rgba(166, 99, 147, 0.22)",
      onSecondaryContainer: "#ECC4E1",
      border: "#634454",
      borderLight: "#785366",
      borderAccent: "#91657C",
      outline: "#966B81",
      outlineVariant: "#634454",
      textPrimary: "#FAF0F4",
      text: "#FAF0F4",
      textSecondary: "#CEB6C1",
      textMuted: "#AD8E9D",
      rippleColor: "rgba(245, 152, 179, 0.18)",
    },
    light: {
      bgPrimary: "#FDF6F8",
      bgSecondary: "#F6E9EE",
      bgCard: "#FFFFFF",
      bgCardHover: "#FAF0F3",
      bgElevated: "#EFE0E6",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FAF0F4",
      surfaceContainer: "#F4E7EC",
      surfaceContainerHigh: "#ECDCE2",
      surfaceContainerHighest: "#E4D0D8",
      gold: "#B84266",
      goldLight: "#D95D82",
      sky: "#7D3E6B",
      skyLight: "#995485",
      primaryContainer: "rgba(184, 66, 102, 0.14)",
      onPrimaryContainer: "#59182D",
      secondaryContainer: "rgba(125, 62, 107, 0.13)",
      onSecondaryContainer: "#421B37",
      border: "#A38492",
      borderLight: "#8F717E",
      borderAccent: "#785C69",
      outline: "#876B78",
      outlineVariant: "#A38492",
      textPrimary: "#211018",
      text: "#211018",
      textSecondary: "#593B49",
      textMuted: "#735261",
      rippleColor: "rgba(184, 66, 102, 0.13)",
    },
  },
  {
    id: "forest-canopy",
    name: "Forest Canopy",
    tagline: "Deep Kakamega Rainforest Emerald",
    recommendedMode: "dark",
    swatches: ["#0A140F", "#F3F8F5", "#1E9E63", "#C2A14D"],
    dark: {
      bgPrimary: "#070F0B",
      bgSecondary: "#0E1C15",
      bgCard: "#13261D",
      bgCardHover: "#1A3327",
      bgElevated: "#203D30",
      surface: "#13261D",
      surfaceContainerLowest: "#040A07",
      surfaceContainerLow: "#0E1C15",
      surfaceContainer: "#13261D",
      surfaceContainerHigh: "#1B3529",
      surfaceContainerHighest: "#234535",
      gold: "#28B874",
      goldLight: "#5CD99D",
      kenyaGreen: "#1E9E63",
      kenyaGreenLight: "#47CC8E",
      sky: "#45A88F",
      skyLight: "#78CFB9",
      primaryContainer: "rgba(40, 184, 116, 0.22)",
      onPrimaryContainer: "#A8F5D0",
      secondaryContainer: "rgba(194, 161, 77, 0.20)",
      onSecondaryContainer: "#F0DFA8",
      border: "#345947",
      borderLight: "#416E58",
      borderAccent: "#50856B",
      outline: "#5A9176",
      outlineVariant: "#345947",
      textPrimary: "#ECF5F0",
      text: "#ECF5F0",
      textSecondary: "#AAC4B7",
      textMuted: "#84A394",
      rippleColor: "rgba(92, 217, 157, 0.18)",
    },
    light: {
      bgPrimary: "#F3F8F5",
      bgSecondary: "#E6F0EA",
      bgCard: "#FFFFFF",
      bgCardHover: "#EDF5F0",
      bgElevated: "#DCEAE2",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EEF5F1",
      surfaceContainer: "#E4EFE9",
      surfaceContainerHigh: "#DAE8E0",
      surfaceContainerHighest: "#CFE0D7",
      gold: "#147A4B",
      goldLight: "#1E9E63",
      kenyaGreen: "#0D6B40",
      kenyaGreenLight: "#1A8C58",
      primaryContainer: "rgba(20, 122, 75, 0.14)",
      onPrimaryContainer: "#073B22",
      secondaryContainer: "rgba(13, 107, 64, 0.12)",
      onSecondaryContainer: "#05331E",
      border: "#7B9989",
      borderLight: "#688576",
      borderAccent: "#547061",
      outline: "#648071",
      outlineVariant: "#7B9989",
      textPrimary: "#0D1F16",
      text: "#0D1F16",
      textSecondary: "#3A5748",
      textMuted: "#537061",
      rippleColor: "rgba(20, 122, 75, 0.14)",
    },
  },
];

/**
 * Validates #RGB, #RRGGBB, or #RRGGBBAA hex color strings.
 */
export function isValidHexColor(val: string): boolean {
  if (typeof val !== "string") return false;
  return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(val.trim());
}

function parseHexToRgb(hex: string): { r: number; g: number; b: number; a?: number } | null {
  if (!isValidHexColor(hex)) return null;
  const clean = hex.trim().slice(1);
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return { r, g, b };
  }
  if (clean.length === 6) {
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return { r, g, b };
  }
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const a = parseInt(clean.slice(6, 8), 16) / 255;
  return { r, g, b, a };
}

function clampByte(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (v: number) => clampByte(v).toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixHex(hexA: string, hexB: string, weightB: number): string {
  const a = parseHexToRgb(hexA);
  const b = parseHexToRgb(hexB);
  if (!a || !b) return hexA;
  const t = Math.max(0, Math.min(1, weightB));
  return rgbToHex(
    a.r + (b.r - a.r) * t,
    a.g + (b.g - a.g) * t,
    a.b + (b.b - a.b) * t
  );
}

/**
 * Converts a hex color (#RGB, #RRGGBB, or #RRGGBBAA) into an `rgba(r, g, b, alpha)` string.
 */
export function hexToRgba(hex: string, alpha: number): string {
  const clampedAlpha = Math.max(0, Math.min(1, Number.isFinite(alpha) ? alpha : 1));
  const parsed = parseHexToRgb(hex);
  if (!parsed) {
    return `rgba(0, 0, 0, ${clampedAlpha})`;
  }
  const finalAlpha =
    parsed.a !== undefined ? Math.max(0, Math.min(1, Number((parsed.a * clampedAlpha).toFixed(3)))) : Number(clampedAlpha.toFixed(3));
  return `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, ${finalAlpha})`;
}

/**
 * Applies color-blind-safe semantic remapping so red/green/blue-yellow distinctions
 * remain clear under deuteranopia, protanopia, or tritanopia.
 */
function applyColorBlindTransform(
  colors: ThemeColorsShape,
  mode: ColorBlindMode
): ThemeColorsShape {
  if (mode === "none") return colors;

  const isDark = colors.isDark;

  if (mode === "deuteranopia" || mode === "protanopia") {
    // Red-green CVD: shift danger/red toward vivid orange-vermilion and green/success toward cobalt-teal/cyan
    const safeDanger = isDark ? "#FF7043" : "#C64112";
    const safeDangerLight = isDark ? "#FF9E80" : "#E05324";
    const safeSuccess = isDark ? "#29B6F6" : "#0277BD";
    const safeSuccessLight = isDark ? "#81D4FA" : "#039BE5";
    const safeGold = isDark ? "#FFD54F" : "#9E6B00";
    const safeGoldLight = isDark ? "#FFE082" : "#B87E00";

    return {
      ...colors,
      kenyaRed: safeDanger,
      kenyaRedLight: safeDangerLight,
      kenyaGreen: safeSuccess,
      kenyaGreenLight: safeSuccessLight,
      gold: safeGold,
      goldLight: safeGoldLight,
      primaryContainer: hexToRgba(safeGold, isDark ? 0.22 : 0.16),
      secondaryContainer: hexToRgba(safeSuccess, isDark ? 0.20 : 0.14),
      onSecondaryContainer: isDark ? "#B3E5FC" : "#01436B",
      warningAmber: isDark ? "#FFD54F" : "#8F5400",
    };
  }

  // Tritanopia (blue-yellow CVD): shift blue/sky toward teal-cyan and yellow/gold toward magenta-coral
  const safeSky = isDark ? "#26C6DA" : "#007B8A";
  const safeSkyLight = isDark ? "#80DEEA" : "#0097A7";
  const safeGold = isDark ? "#EC407A" : "#AD1457";
  const safeGoldLight = isDark ? "#F48FB1" : "#C2185B";
  const safeGreen = isDark ? "#26A69A" : "#00695C";
  const safeGreenLight = isDark ? "#80CBC4" : "#00897B";

  return {
    ...colors,
    sky: safeSky,
    skyLight: safeSkyLight,
    gold: safeGold,
    goldLight: safeGoldLight,
    kenyaGreen: safeGreen,
    kenyaGreenLight: safeGreenLight,
    primaryContainer: hexToRgba(safeGold, isDark ? 0.22 : 0.15),
    onPrimaryContainer: isDark ? "#F8BBD0" : "#6A0032",
    secondaryContainer: hexToRgba(safeGreen, isDark ? 0.20 : 0.14),
    onSecondaryContainer: isDark ? "#B2DFDB" : "#003D35",
    warningAmber: isDark ? "#FF80AB" : "#880E4F",
  };
}

/**
 * Resolves the full ThemeColorsShape from base dark/light palettes, active preset,
 * custom color overrides, high-contrast borders, and color-blindness mode.
 */
export function resolveThemeColors(
  baseDark: ThemeColorsShape,
  baseLight: ThemeColorsShape,
  config: ThemeConfig,
  resolvedIsDark: boolean
): ThemeColorsShape {
  const base = resolvedIsDark ? { ...baseDark } : { ...baseLight };
  const preset = THEME_PRESETS.find((p) => p.id === config.presetId);
  const presetOverrides = preset ? (resolvedIsDark ? preset.dark : preset.light) : {};

  let resolved: ThemeColorsShape = {
    ...base,
    ...presetOverrides,
    isDark: resolvedIsDark,
  };

  const custom = config.customColors ?? {};

  if (custom.primaryAccent && isValidHexColor(custom.primaryAccent)) {
    const accent = custom.primaryAccent.trim();
    resolved.gold = accent;
    resolved.goldLight = mixHex(accent, resolvedIsDark ? "#FFFFFF" : "#000000", 0.2);
    resolved.primaryContainer = hexToRgba(accent, resolvedIsDark ? 0.22 : 0.16);
    resolved.rippleColor = hexToRgba(accent, resolvedIsDark ? 0.18 : 0.14);
  }

  if (custom.secondaryAccent && isValidHexColor(custom.secondaryAccent)) {
    const secondary = custom.secondaryAccent.trim();
    resolved.kenyaGreen = secondary;
    resolved.kenyaGreenLight = mixHex(secondary, "#FFFFFF", resolvedIsDark ? 0.24 : 0.12);
    resolved.secondaryContainer = hexToRgba(secondary, resolvedIsDark ? 0.20 : 0.13);
  }

  if (custom.tertiaryAccent && isValidHexColor(custom.tertiaryAccent)) {
    const tertiary = custom.tertiaryAccent.trim();
    resolved.sky = tertiary;
    resolved.skyLight = mixHex(tertiary, "#FFFFFF", resolvedIsDark ? 0.24 : 0.12);
  }

  if (custom.dangerAccent && isValidHexColor(custom.dangerAccent)) {
    const danger = custom.dangerAccent.trim();
    resolved.kenyaRed = danger;
    resolved.kenyaRedLight = mixHex(danger, "#FFFFFF", resolvedIsDark ? 0.25 : 0.1);
  }

  if (custom.bgPrimary && isValidHexColor(custom.bgPrimary)) {
    const bg = custom.bgPrimary.trim();
    const shiftTarget = resolvedIsDark ? "#FFFFFF" : "#000000";
    resolved.bgPrimary = bg;
    resolved.bgSecondary = mixHex(bg, shiftTarget, 0.05);
    resolved.surfaceContainerLowest = resolvedIsDark ? mixHex(bg, "#000000", 0.35) : "#FFFFFF";
    resolved.surfaceContainerLow = mixHex(bg, shiftTarget, 0.04);
  }

  if (custom.surfaceCard && isValidHexColor(custom.surfaceCard)) {
    const card = custom.surfaceCard.trim();
    const shiftTarget = resolvedIsDark ? "#FFFFFF" : "#000000";
    resolved.bgCard = card;
    resolved.surface = card;
    resolved.surfaceContainer = card;
    resolved.bgCardHover = mixHex(card, shiftTarget, 0.06);
    resolved.bgElevated = mixHex(card, shiftTarget, 0.09);
    resolved.surfaceContainerHigh = mixHex(card, shiftTarget, 0.08);
    resolved.surfaceContainerHighest = mixHex(card, shiftTarget, 0.13);
  }

  if (custom.textPrimary && isValidHexColor(custom.textPrimary)) {
    const txt = custom.textPrimary.trim();
    resolved.textPrimary = txt;
    resolved.text = txt;
  }

  if (custom.borderColor && isValidHexColor(custom.borderColor)) {
    const brd = custom.borderColor.trim();
    resolved.border = brd;
    resolved.outlineVariant = brd;
    resolved.borderLight = mixHex(brd, resolvedIsDark ? "#FFFFFF" : "#000000", 0.15);
    resolved.outline = mixHex(brd, resolvedIsDark ? "#FFFFFF" : "#000000", 0.2);
  }

  if (config.highContrastBorders) {
    if (resolvedIsDark) {
      resolved.border = "#E2DCD5";
      resolved.borderLight = "#F4EFEA";
      resolved.borderAccent = "#FFFFFF";
      resolved.outline = "#FFFFFF";
      resolved.outlineVariant = "#D6CFC7";
    } else {
      resolved.border = "#1A1108";
      resolved.borderLight = "#2E2318";
      resolved.borderAccent = "#000000";
      resolved.outline = "#000000";
      resolved.outlineVariant = "#3D3124";
    }
  }

  resolved = applyColorBlindTransform(resolved, config.colorBlindMode);

  return resolved;
}

const CARD_RADIUS_MAP: Record<RadiusPreset, number> = {
  square: 0,
  sharp: 4,
  subtle: 8,
  rounded: 14,
  soft: 20,
  pill: 24,
};

const BUTTON_RADIUS_MAP: Record<ButtonRadiusPreset, number> = {
  square: 0,
  sharp: 4,
  subtle: 8,
  rounded: 12,
  soft: 18,
  pill: 999,
};

const BORDER_WIDTH_MAP: Record<BorderWidthPreset, number> = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  medium: 1.5,
  thick: 2.5,
  bold: 3,
};

const DENSITY_SCALE_MAP: Record<DensityPreset, number> = {
  "ultra-compact": 0.78,
  compact: 0.85,
  comfortable: 1.0,
  balanced: 1.06,
  relaxed: 1.12,
  spacious: 1.18,
};

/**
 * Resolves numeric layout, typography, elevation, and surface opacity metrics from ThemeConfig.
 */
export function resolveThemeMetrics(config: ThemeConfig): ThemeMetrics {
  const cardRadiusPx = CARD_RADIUS_MAP[config.cardRadius] ?? CARD_RADIUS_MAP.rounded;
  const buttonRadiusPx = BUTTON_RADIUS_MAP[config.buttonRadius] ?? BUTTON_RADIUS_MAP.rounded;
  const baseBorderWidth = BORDER_WIDTH_MAP[config.borderWidth] ?? BORDER_WIDTH_MAP.thin;
  const borderWidthPx = config.highContrastBorders
    ? Math.max(1.5, baseBorderWidth)
    : baseBorderWidth;
  const spacingScale = DENSITY_SCALE_MAP[config.density] ?? 1.0;

  const fontScale =
    Number.isFinite(config.fontScale) && config.fontScale >= 0.75 && config.fontScale <= 1.5
      ? config.fontScale
      : DEFAULT_THEME_CONFIG.fontScale;

  const lineHeightScale =
    Number.isFinite(config.lineHeightScale) &&
    config.lineHeightScale >= 0.8 &&
    config.lineHeightScale <= 1.4
      ? config.lineHeightScale
      : DEFAULT_THEME_CONFIG.lineHeightScale;

  const letterSpacingOffset =
    Number.isFinite(config.letterSpacingOffset) &&
    config.letterSpacingOffset >= -1 &&
    config.letterSpacingOffset <= 2
      ? config.letterSpacingOffset
      : DEFAULT_THEME_CONFIG.letterSpacingOffset;

  let elevationPx = 0;
  let cardOpacity = 1.0;

  switch (config.surfaceStyle) {
    case "elevated":
      elevationPx = 4;
      break;
    case "flat":
      elevationPx = 0;
      break;
    case "outlined":
      elevationPx = 0;
      break;
    case "glass":
      elevationPx = 2;
      cardOpacity = 0.78;
      break;
  }

  return {
    cardRadiusPx,
    buttonRadiusPx,
    borderWidthPx,
    spacingScale,
    fontScale,
    lineHeightScale,
    letterSpacingOffset,
    elevationPx,
    cardOpacity,
  };
}

/**
 * Serializes a ThemeConfig to a formatted JSON string for export or sharing.
 */
export function exportThemeConfigJson(config: ThemeConfig): string {
  return JSON.stringify(config, null, 2);
}

const VALID_MODES = new Set<ThemeMode>(["system", "light", "dark"]);
const VALID_SURFACE_STYLES = new Set<SurfaceStyle>(["elevated", "flat", "outlined", "glass", "tonal", "crisp"]);
const VALID_BORDER_WIDTHS = new Set<BorderWidthPreset>(["none", "hairline", "thin", "medium", "thick", "bold"]);
const VALID_CARD_RADII = new Set<RadiusPreset>(["square", "sharp", "subtle", "rounded", "soft", "pill"]);
const VALID_BUTTON_RADII = new Set<ButtonRadiusPreset>(["square", "sharp", "subtle", "rounded", "soft", "pill"]);
const VALID_FONT_PAIRS = new Set<FontPair>([
  "outfit-inter", "classic-sans", "editorial-serif", "mono-tech",
  "geometric", "humanist", "condensed", "grotesk", "casual", "cursive",
]);
const VALID_SCROLLBAR_STYLES = new Set<HorizontalScrollbarStyle>([
  "hidden", "native-indicator", "subtle-bar", "accent-track", "glow-rail", "dots",
]);
const VALID_SCROLLBAR_THICKNESS = new Set<ScrollbarThickness>([
  "hairline", "thin", "medium", "thick", "bold", "extra",
]);
const VALID_PILL_BAR_LAYOUTS = new Set<PillBarLayout>([
  "scroll-with-expand", "always-scroll", "always-wrap", "compact-scroll", "centered-wrap", "grid-pills",
]);
const VALID_APP_BAR_STYLES = new Set<AppBarStyle>([
  "standard", "compact", "tall-editorial", "borderless", "accent-tinted", "floating",
]);
const VALID_STRIPE_THICKNESS = new Set<StripeThickness>([
  "hidden", "hairline", "thin", "medium", "thick", "bold",
]);
const VALID_DENSITIES = new Set<DensityPreset>(["ultra-compact", "compact", "comfortable", "balanced", "relaxed", "spacious"]);
const VALID_TAB_BAR_STYLES = new Set<TabBarStyle>([
  "classic", "floating-pill", "compact", "minimal", "top-accent", "docked-cards", "segmented",
]);
const VALID_MENU_INDICATORS = new Set<MenuIndicatorStyle>(["pill", "underline", "dot", "filled-box", "glow", "outline"]);
const VALID_VERT_SB = new Set<VerticalScrollbarStyle>(["hidden", "native", "always-visible"]);
const VALID_SHADOWS = new Set<CardShadowIntensity>(["none", "subtle", "medium", "strong", "glow", "crisp-3d"]);
const VALID_INPUT_STYLES = new Set<InputStylePreset>(["outlined", "filled", "underlined", "pill", "minimal", "accent"]);
const VALID_BUTTON_STYLES = new Set<ButtonStylePreset>(["filled", "tinted", "outlined", "elevated", "pill-glow", "flat"]);
const VALID_TRANSITIONS = new Set<PageTransitionPreset>(["slide", "fade", "bottom-sheet", "fast", "none", "default"]);
const VALID_STATUS_BARS = new Set<StatusBarMode>(["auto", "light", "dark"]);
const VALID_QUICK_MENUS = new Set<QuickMenuPosition>(["off", "bottom-right", "bottom-left"]);
const VALID_COLOR_BLIND_MODES = new Set<ColorBlindMode>(["none", "deuteranopia", "protanopia", "tritanopia"]);
const VALID_HOME_LAYOUTS = new Set<HomeLayoutPreset>([
  "classic", "bento-grid", "compact-list", "editorial-cards", "minimal-rows", "large-tiles",
]);
const VALID_HEADER_ALIGNMENTS = new Set<HeaderAlignment>(["left", "center"]);
const VALID_CARD_ACCENT_STYLES = new Set<CardAccentStyle>([
  "none", "left-bar", "top-bar", "bottom-bar", "tinted-border", "glow-edge",
]);
const VALID_ICON_BADGE_STYLES = new Set<IconBadgeStyle>([
  "outline", "filled", "soft-circle", "soft-square", "accent-solid", "minimal",
]);

const CUSTOM_COLOR_KEYS: (keyof CustomColorsConfig)[] = [
  "primaryAccent",
  "secondaryAccent",
  "tertiaryAccent",
  "dangerAccent",
  "bgPrimary",
  "surfaceCard",
  "textPrimary",
  "borderColor",
  "scrollbarColor",
];

/**
 * Safely parses a JSON string into a validated ThemeConfig merged with DEFAULT_THEME_CONFIG.
 * Returns null if the input is not valid JSON or not a plain object.
 */
export function parseThemeConfigJson(raw: string): ThemeConfig | null {
  if (typeof raw !== "string" || raw.trim().length === 0) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return null;
  }

  const obj = parsed as Record<string, unknown>;
  const merged: ThemeConfig = {
    ...DEFAULT_THEME_CONFIG,
    customColors: {},
  };

  if (typeof obj.mode === "string" && VALID_MODES.has(obj.mode as ThemeMode)) {
    merged.mode = obj.mode as ThemeMode;
  }
  if (typeof obj.presetId === "string" && THEME_PRESETS.some((p) => p.id === obj.presetId)) {
    merged.presetId = obj.presetId;
  }
  if (typeof obj.customColors === "object" && obj.customColors !== null && !Array.isArray(obj.customColors)) {
    const rawCustom = obj.customColors as Record<string, unknown>;
    const cleanCustom: CustomColorsConfig = {};
    for (const key of CUSTOM_COLOR_KEYS) {
      const val = rawCustom[key];
      if (typeof val === "string" && isValidHexColor(val)) {
        cleanCustom[key] = val.trim();
      }
    }
    merged.customColors = cleanCustom;
  }
  if (typeof obj.surfaceStyle === "string" && VALID_SURFACE_STYLES.has(obj.surfaceStyle as SurfaceStyle)) {
    merged.surfaceStyle = obj.surfaceStyle as SurfaceStyle;
  }
  if (typeof obj.borderWidth === "string" && VALID_BORDER_WIDTHS.has(obj.borderWidth as BorderWidthPreset)) {
    merged.borderWidth = obj.borderWidth as BorderWidthPreset;
  }
  if (typeof obj.cardRadius === "string" && VALID_CARD_RADII.has(obj.cardRadius as RadiusPreset)) {
    merged.cardRadius = obj.cardRadius as RadiusPreset;
  }
  if (typeof obj.buttonRadius === "string" && VALID_BUTTON_RADII.has(obj.buttonRadius as ButtonRadiusPreset)) {
    merged.buttonRadius = obj.buttonRadius as ButtonRadiusPreset;
  }
  if (typeof obj.fontScale === "number" && Number.isFinite(obj.fontScale) && obj.fontScale >= 0.75 && obj.fontScale <= 1.5) {
    merged.fontScale = obj.fontScale;
  }
  if (typeof obj.fontPair === "string" && VALID_FONT_PAIRS.has(obj.fontPair as FontPair)) {
    merged.fontPair = obj.fontPair as FontPair;
  }
  if (
    typeof obj.lineHeightScale === "number" &&
    Number.isFinite(obj.lineHeightScale) &&
    obj.lineHeightScale >= 0.8 &&
    obj.lineHeightScale <= 1.4
  ) {
    merged.lineHeightScale = obj.lineHeightScale;
  }
  if (
    typeof obj.letterSpacingOffset === "number" &&
    Number.isFinite(obj.letterSpacingOffset) &&
    obj.letterSpacingOffset >= -1 &&
    obj.letterSpacingOffset <= 2
  ) {
    merged.letterSpacingOffset = obj.letterSpacingOffset;
  }
  if (typeof obj.density === "string" && VALID_DENSITIES.has(obj.density as DensityPreset)) {
    merged.density = obj.density as DensityPreset;
  }
  if (typeof obj.showKenyaStripe === "boolean") {
    merged.showKenyaStripe = obj.showKenyaStripe;
  }
  if (typeof obj.tabBarStyle === "string" && VALID_TAB_BAR_STYLES.has(obj.tabBarStyle as TabBarStyle)) {
    merged.tabBarStyle = obj.tabBarStyle as TabBarStyle;
  }
  if (typeof obj.tabBarLabels === "boolean") {
    merged.tabBarLabels = obj.tabBarLabels;
  }
  if (typeof obj.hapticsEnabled === "boolean") {
    merged.hapticsEnabled = obj.hapticsEnabled;
  }
  if (typeof obj.reduceMotion === "boolean") {
    merged.reduceMotion = obj.reduceMotion;
  }
  if (typeof obj.highContrastBorders === "boolean") {
    merged.highContrastBorders = obj.highContrastBorders;
  }
  if (typeof obj.colorBlindMode === "string" && VALID_COLOR_BLIND_MODES.has(obj.colorBlindMode as ColorBlindMode)) {
    merged.colorBlindMode = obj.colorBlindMode as ColorBlindMode;
  }

  if (typeof obj.horizontalScrollbarStyle === "string" && VALID_SCROLLBAR_STYLES.has(obj.horizontalScrollbarStyle as HorizontalScrollbarStyle)) {
    merged.horizontalScrollbarStyle = obj.horizontalScrollbarStyle as HorizontalScrollbarStyle;
  }
  if (typeof obj.horizontalScrollbarThickness === "string" && VALID_SCROLLBAR_THICKNESS.has(obj.horizontalScrollbarThickness as ScrollbarThickness)) {
    merged.horizontalScrollbarThickness = obj.horizontalScrollbarThickness as ScrollbarThickness;
  }
  if (typeof obj.scrollbarTrackVisible === "boolean") {
    merged.scrollbarTrackVisible = obj.scrollbarTrackVisible;
  }
  if (typeof obj.pillBarLayout === "string" && VALID_PILL_BAR_LAYOUTS.has(obj.pillBarLayout as PillBarLayout)) {
    merged.pillBarLayout = obj.pillBarLayout as PillBarLayout;
  }
  if (typeof obj.pillShape === "string" && VALID_BUTTON_RADII.has(obj.pillShape as ButtonRadiusPreset)) {
    merged.pillShape = obj.pillShape as ButtonRadiusPreset;
  }
  if (typeof obj.edgeFadeEnabled === "boolean") {
    merged.edgeFadeEnabled = obj.edgeFadeEnabled;
  }
  if (typeof obj.scrollBounceEnabled === "boolean") {
    merged.scrollBounceEnabled = obj.scrollBounceEnabled;
  }
  if (typeof obj.appBarStyle === "string" && VALID_APP_BAR_STYLES.has(obj.appBarStyle as AppBarStyle)) {
    merged.appBarStyle = obj.appBarStyle as AppBarStyle;
  }
  if (typeof obj.stripeThickness === "string" && VALID_STRIPE_THICKNESS.has(obj.stripeThickness as StripeThickness)) {
    merged.stripeThickness = obj.stripeThickness as StripeThickness;
  }

  if (typeof obj.menuIndicatorStyle === "string" && VALID_MENU_INDICATORS.has(obj.menuIndicatorStyle as MenuIndicatorStyle)) {
    merged.menuIndicatorStyle = obj.menuIndicatorStyle as MenuIndicatorStyle;
  }
  if (typeof obj.verticalScrollbarStyle === "string" && VALID_VERT_SB.has(obj.verticalScrollbarStyle as VerticalScrollbarStyle)) {
    merged.verticalScrollbarStyle = obj.verticalScrollbarStyle as VerticalScrollbarStyle;
  }
  if (typeof obj.cardShadowIntensity === "string" && VALID_SHADOWS.has(obj.cardShadowIntensity as CardShadowIntensity)) {
    merged.cardShadowIntensity = obj.cardShadowIntensity as CardShadowIntensity;
  }
  if (typeof obj.inputStyle === "string" && VALID_INPUT_STYLES.has(obj.inputStyle as InputStylePreset)) {
    merged.inputStyle = obj.inputStyle as InputStylePreset;
  }
  if (typeof obj.buttonStyle === "string" && VALID_BUTTON_STYLES.has(obj.buttonStyle as ButtonStylePreset)) {
    merged.buttonStyle = obj.buttonStyle as ButtonStylePreset;
  }
  if (typeof obj.pageTransition === "string" && VALID_TRANSITIONS.has(obj.pageTransition as PageTransitionPreset)) {
    merged.pageTransition = obj.pageTransition as PageTransitionPreset;
  }
  if (typeof obj.statusBarMode === "string" && VALID_STATUS_BARS.has(obj.statusBarMode as StatusBarMode)) {
    merged.statusBarMode = obj.statusBarMode as StatusBarMode;
  }
  if (typeof obj.quickMenuPosition === "string" && VALID_QUICK_MENUS.has(obj.quickMenuPosition as QuickMenuPosition)) {
    merged.quickMenuPosition = obj.quickMenuPosition as QuickMenuPosition;
  }
  if (typeof obj.homeLayout === "string" && VALID_HOME_LAYOUTS.has(obj.homeLayout as HomeLayoutPreset)) {
    merged.homeLayout = obj.homeLayout as HomeLayoutPreset;
  }
  if (typeof obj.headerAlignment === "string" && VALID_HEADER_ALIGNMENTS.has(obj.headerAlignment as HeaderAlignment)) {
    merged.headerAlignment = obj.headerAlignment as HeaderAlignment;
  }
  if (typeof obj.cardAccentStyle === "string" && VALID_CARD_ACCENT_STYLES.has(obj.cardAccentStyle as CardAccentStyle)) {
    merged.cardAccentStyle = obj.cardAccentStyle as CardAccentStyle;
  }
  if (typeof obj.iconBadgeStyle === "string" && VALID_ICON_BADGE_STYLES.has(obj.iconBadgeStyle as IconBadgeStyle)) {
    merged.iconBadgeStyle = obj.iconBadgeStyle as IconBadgeStyle;
  }
  return merged;
}

export function resolveFontPairFamilies(pair: FontPair, isIos = false): { heading: string; body: string; bold: string } {
  switch (pair) {
    case "classic-sans":
      return { heading: isIos ? "System" : "sans-serif", body: isIos ? "System" : "sans-serif", bold: isIos ? "System" : "sans-serif-medium" };
    case "editorial-serif":
      return { heading: isIos ? "Georgia" : "serif", body: isIos ? "Georgia" : "serif", bold: isIos ? "Georgia-Bold" : "serif" };
    case "mono-tech":
      return { heading: isIos ? "Menlo" : "monospace", body: isIos ? "Menlo" : "monospace", bold: isIos ? "Menlo-Bold" : "monospace" };
    case "geometric":
      return { heading: "Outfit_800ExtraBold", body: "Outfit_400Regular", bold: "Outfit_700Bold" };
    case "humanist":
      return { heading: "Outfit_600SemiBold", body: isIos ? "Avenir Next" : "sans-serif-light", bold: "Inter_600SemiBold" };
    case "condensed":
      return { heading: isIos ? "AvenirNextCondensed-Bold" : "sans-serif-condensed", body: isIos ? "AvenirNextCondensed-Regular" : "sans-serif-condensed", bold: isIos ? "AvenirNextCondensed-DemiBold" : "sans-serif-condensed" };
    case "grotesk":
      return { heading: isIos ? "Helvetica Neue" : "sans-serif-medium", body: "Inter_400Regular", bold: isIos ? "Helvetica Neue" : "sans-serif-medium" };
    case "casual":
      return { heading: isIos ? "Marker Felt" : "casual", body: isIos ? "Avenir Next" : "casual", bold: isIos ? "Avenir Next" : "casual" };
    case "cursive":
      return { heading: isIos ? "Snell Roundhand" : "cursive", body: "Inter_400Regular", bold: isIos ? "Snell Roundhand" : "cursive" };
    case "outfit-inter":
    default:
      return { heading: "Outfit_700Bold", body: "Inter_400Regular", bold: "Inter_700Bold" };
  }
}

export function resolveScrollbarThicknessPx(thickness: ScrollbarThickness): number {
  switch (thickness) {
    case "hairline": return 2;
    case "thin": return 3;
    case "medium": return 4;
    case "thick": return 6;
    case "bold": return 8;
    case "extra": return 10;
    default: return 3;
  }
}
