/**
 * KenyaHub Mobile — Comprehensive Theming Engine
 * Self-contained, zero-UI-dependency TypeScript module.
 */

export type ThemeMode = "system" | "light" | "dark";
export type SurfaceStyle = "elevated" | "flat" | "outlined" | "glass" | "tonal" | "crisp" | "paper-ink" | "neo-brutal" | "inset-tray";
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
  | "tick-ruler"
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
  | "grid-pills"
  | "dropdown"
  | "underline-tabs"
  | "segmented-bar"
  | "two-col-grid"
  | "vertical-list"
  | "minimal-text"
  | "stepper"
  | "three-col-tiles"
  | "floating-dock"
  | "sidebar-chips"
  | "index-tabs";

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
  | "outline"
  | "bracket";

export type VerticalScrollbarStyle = "hidden" | "native" | "always-visible";

export type CardShadowIntensity = "none" | "subtle" | "medium" | "strong" | "glow" | "crisp-3d";

export type InputStylePreset = "outlined" | "filled" | "underlined" | "pill" | "minimal" | "accent";

export type ButtonStylePreset = "filled" | "tinted" | "outlined" | "elevated" | "pill-glow" | "flat" | "keycap-press" | "editorial-link";

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
  | "glow-edge"
  | "corner-frame"
  | "double-rule"
  | "offset-edge";

export type IconBadgeStyle =
  | "outline"
  | "filled"
  | "soft-circle"
  | "soft-square"
  | "accent-solid"
  | "minimal"
  | "monochrome-ink"
  | "keycap"
  | "hairline-ring"
  | "duotone-wash";

export type HeadingTransform = "none" | "uppercase" | "capitalize";
export type NumericStyle = "default" | "tabular-mono";
export type HapticStrength = "off" | "light" | "medium" | "strong";
export type SizePreset = "xs" | "sm" | "md" | "lg" | "xl";
export type AccentIntensity = "muted" | "balanced" | "vivid";
export type ReadingTint = "none" | "warm-paper" | "soft-sepia" | "cool-slate";
export type ScreenPaddingPreset = "edge" | "compact" | "standard" | "wide";
export type ProgressBarStyle = "rounded" | "sharp" | "segmented" | "thin-line";
export type DividerStyle = "hairline" | "none" | "dashed-soft" | "accent-fade";
export type SectionHeaderStyle = "eyebrow" | "bold-title" | "accent-pill" | "left-bar" | "ruled-line";
export type PressEffect = "scale-ripple" | "ripple-only" | "opacity-only" | "none";

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
  headingTransform: HeadingTransform;
  numericStyle: NumericStyle;
  hapticStrength: HapticStrength;
  pillSize: SizePreset;
  iconScale: number;
  buttonSize: SizePreset;
  cardPadding: SizePreset;
  tabBarSize: SizePreset;
  appBarSize: SizePreset;
  oledBlack: boolean;
  accentIntensity: AccentIntensity;
  readingTint: ReadingTint;
  screenPadding: ScreenPaddingPreset;
  progressBarStyle: ProgressBarStyle;
  dividerStyle: DividerStyle;
  sectionHeaderStyle: SectionHeaderStyle;
  pressEffect: PressEffect;
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
  pillMinHeightPx: number;
  pillPaddingVPx: number;
  pillPaddingHPx: number;
  iconScale: number;
  buttonPaddingVPx: number;
  buttonPaddingHPx: number;
  cardPaddingPx: number;
  tabBarHeightPx: number;
  appBarHeightPx: number;
  screenPaddingPx: number;
  floatingTabBarClearancePx: number;
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
  headingTransform: "none",
  numericStyle: "default",
  hapticStrength: "light",
  pillSize: "md",
  iconScale: 1.0,
  buttonSize: "md",
  cardPadding: "md",
  tabBarSize: "md",
  appBarSize: "md",
  oledBlack: false,
  accentIntensity: "balanced",
  readingTint: "none",
  screenPadding: "standard",
  progressBarStyle: "rounded",
  dividerStyle: "hairline",
  sectionHeaderStyle: "eyebrow",
  pressEffect: "scale-ripple",
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
    tagline: "Original warm Kenyan Heritage look",
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
      pillShape: DEFAULT_THEME_CONFIG.pillShape,
      pillSize: DEFAULT_THEME_CONFIG.pillSize,
      buttonSize: DEFAULT_THEME_CONFIG.buttonSize,
      cardPadding: DEFAULT_THEME_CONFIG.cardPadding,
      tabBarSize: DEFAULT_THEME_CONFIG.tabBarSize,
      appBarSize: DEFAULT_THEME_CONFIG.appBarSize,
      iconScale: DEFAULT_THEME_CONFIG.iconScale,
      stripeThickness: DEFAULT_THEME_CONFIG.stripeThickness,
      customColors: {},
    },
  },
  {
    id: "nairobi-broadsheet",
    name: "Nairobi Broadsheet",
    tagline: "Print magazine · Warm newsprint · Editorial serif",
    icon: "newspaper-outline",
    swatches: ["#F4ECD8", "#FAF4E4", "#2B2114", "#94621F"],
    config: {
      presetId: "sepia-parchment",
      mode: "light",
      surfaceStyle: "paper-ink",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "hairline",
      cardAccentStyle: "double-rule",
      cardShadowIntensity: "none",
      iconBadgeStyle: "monochrome-ink",
      inputStyle: "underlined",
      buttonStyle: "outlined",
      fontPair: "editorial-serif",
      headingTransform: "none",
      numericStyle: "default",
      readingTint: "warm-paper",
      dividerStyle: "hairline",
      sectionHeaderStyle: "ruled-line",
      progressBarStyle: "thin-line",
      pillBarLayout: "index-tabs",
      pillShape: "sharp",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "top-accent",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "underline",
      appBarStyle: "standard",
      appBarSize: "md",
      headerAlignment: "center",
      homeLayout: "editorial-cards",
      horizontalScrollbarStyle: "subtle-bar",
      stripeThickness: "hairline",
      iconScale: 0.95,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "braun-field-unit",
    name: "Braun Field Unit",
    tagline: "Tactile hardware · Keycap buttons · Tabular mono",
    icon: "hardware-chip-outline",
    swatches: ["#F5F2EB", "#FFFFFF", "#1A1815", "#B37A12"],
    config: {
      presetId: "nairobi-linen",
      mode: "light",
      surfaceStyle: "neo-brutal",
      cardRadius: "subtle",
      buttonRadius: "subtle",
      borderWidth: "medium",
      cardAccentStyle: "offset-edge",
      cardShadowIntensity: "none",
      iconBadgeStyle: "keycap",
      inputStyle: "outlined",
      buttonStyle: "keycap-press",
      fontPair: "grotesk",
      headingTransform: "uppercase",
      numericStyle: "tabular-mono",
      dividerStyle: "hairline",
      sectionHeaderStyle: "accent-pill",
      progressBarStyle: "segmented",
      pillBarLayout: "segmented-bar",
      pillShape: "subtle",
      pillSize: "sm",
      buttonSize: "sm",
      cardPadding: "sm",
      density: "compact",
      tabBarStyle: "docked-cards",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "outline",
      appBarStyle: "standard",
      appBarSize: "sm",
      headerAlignment: "left",
      homeLayout: "compact-list",
      horizontalScrollbarStyle: "tick-ruler",
      stripeThickness: "thin",
      iconScale: 0.94,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "swahili-stone-town",
    name: "Lamu Coral & Brass",
    tagline: "Coastal limestone · Calm inset trays · Floating bar",
    icon: "compass-outline",
    swatches: ["#F5F9FA", "#E6EFF1", "#0E8A8D", "#966D1B"],
    config: {
      presetId: "coastal-lamu",
      mode: "light",
      surfaceStyle: "inset-tray",
      cardRadius: "soft",
      buttonRadius: "pill",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "hairline-ring",
      inputStyle: "pill",
      buttonStyle: "tinted",
      fontPair: "humanist",
      headingTransform: "none",
      readingTint: "cool-slate",
      dividerStyle: "none",
      sectionHeaderStyle: "eyebrow",
      progressBarStyle: "rounded",
      pillBarLayout: "minimal-text",
      pillShape: "pill",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "floating-pill",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "dot",
      appBarStyle: "borderless",
      appBarSize: "sm",
      headerAlignment: "center",
      homeLayout: "minimal-rows",
      horizontalScrollbarStyle: "hidden",
      showKenyaStripe: false,
      stripeThickness: "hidden",
      iconScale: 0.95,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "swiss-grid-press",
    name: "Swiss Grid Poster",
    tagline: "Stark monochrome · Zero radius · Stepper bar",
    icon: "grid-outline",
    swatches: ["#FFFFFF", "#EDEDED", "#000000", "#7A5400"],
    config: {
      presetId: "high-contrast",
      mode: "light",
      surfaceStyle: "neo-brutal",
      cardRadius: "square",
      buttonRadius: "square",
      borderWidth: "medium",
      cardAccentStyle: "corner-frame",
      cardShadowIntensity: "none",
      iconBadgeStyle: "monochrome-ink",
      inputStyle: "outlined",
      buttonStyle: "filled",
      fontPair: "condensed",
      headingTransform: "uppercase",
      numericStyle: "tabular-mono",
      dividerStyle: "hairline",
      sectionHeaderStyle: "bold-title",
      progressBarStyle: "sharp",
      pillBarLayout: "stepper",
      pillShape: "square",
      pillSize: "sm",
      buttonSize: "sm",
      cardPadding: "sm",
      density: "compact",
      tabBarStyle: "top-accent",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "underline",
      appBarStyle: "standard",
      appBarSize: "sm",
      headerAlignment: "left",
      homeLayout: "classic",
      horizontalScrollbarStyle: "accent-track",
      stripeThickness: "medium",
      iconScale: 0.92,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "savanna-dusk-ink",
    name: "Savanna Dusk Journal",
    tagline: "Espresso matte paper · Warm ochre · Duotone icons",
    icon: "book-outline",
    swatches: ["#140C09", "#261712", "#E07A48", "#FAF0EA"],
    config: {
      presetId: "rift-valley-dawn",
      mode: "dark",
      surfaceStyle: "paper-ink",
      cardRadius: "rounded",
      buttonRadius: "subtle",
      borderWidth: "hairline",
      cardAccentStyle: "double-rule",
      cardShadowIntensity: "none",
      iconBadgeStyle: "duotone-wash",
      inputStyle: "filled",
      buttonStyle: "tinted",
      fontPair: "editorial-serif",
      headingTransform: "none",
      readingTint: "warm-paper",
      dividerStyle: "dashed-soft",
      sectionHeaderStyle: "bold-title",
      progressBarStyle: "thin-line",
      pillBarLayout: "underline-tabs",
      pillShape: "subtle",
      pillSize: "md",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "classic",
      tabBarLabels: true,
      tabBarSize: "md",
      menuIndicatorStyle: "dot",
      appBarStyle: "borderless",
      appBarSize: "md",
      headerAlignment: "left",
      homeLayout: "editorial-cards",
      horizontalScrollbarStyle: "subtle-bar",
      stripeThickness: "thin",
      iconScale: 1.0,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "rift-obsidian-oled",
    name: "Obsidian Pitch OLED",
    tagline: "True black battery saver · Dropdown filter · Compact",
    icon: "moon-outline",
    swatches: ["#000000", "#0E0E0E", "#F5C542", "#FFFFFF"],
    config: {
      presetId: "amoled-pitch",
      mode: "dark",
      oledBlack: true,
      surfaceStyle: "inset-tray",
      cardRadius: "rounded",
      buttonRadius: "pill",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "hairline-ring",
      inputStyle: "filled",
      buttonStyle: "outlined",
      fontPair: "grotesk",
      headingTransform: "none",
      density: "compact",
      screenPadding: "compact",
      dividerStyle: "none",
      sectionHeaderStyle: "eyebrow",
      progressBarStyle: "thin-line",
      pillBarLayout: "dropdown",
      pillShape: "pill",
      pillSize: "sm",
      buttonSize: "sm",
      cardPadding: "sm",
      tabBarStyle: "compact",
      tabBarLabels: false,
      tabBarSize: "xs",
      menuIndicatorStyle: "dot",
      appBarStyle: "compact",
      appBarSize: "sm",
      headerAlignment: "left",
      homeLayout: "compact-list",
      horizontalScrollbarStyle: "hidden",
      stripeThickness: "hairline",
      iconScale: 0.92,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "kanga-textile-studio",
    name: "Kanga Print Press",
    tagline: "Crimson & cobalt ink · Tactile card lip · Floating dock",
    icon: "flame-outline",
    swatches: ["#11090A", "#241417", "#F25C69", "#60A5FA"],
    config: {
      presetId: "maasai-shuka",
      mode: "dark",
      surfaceStyle: "outlined",
      cardRadius: "subtle",
      buttonRadius: "subtle",
      borderWidth: "thin",
      cardAccentStyle: "offset-edge",
      cardShadowIntensity: "none",
      iconBadgeStyle: "keycap",
      inputStyle: "outlined",
      buttonStyle: "filled",
      fontPair: "geometric",
      headingTransform: "none",
      dividerStyle: "accent-fade",
      sectionHeaderStyle: "accent-pill",
      progressBarStyle: "sharp",
      pillBarLayout: "floating-dock",
      pillShape: "subtle",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "docked-cards",
      tabBarLabels: true,
      tabBarSize: "md",
      menuIndicatorStyle: "outline",
      appBarStyle: "standard",
      appBarSize: "md",
      headerAlignment: "left",
      homeLayout: "classic",
      horizontalScrollbarStyle: "dots",
      stripeThickness: "medium",
      iconScale: 1.0,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "kilimanjaro-morning",
    name: "Highland Mist Daylight",
    tagline: "Crisp outdoor contrast · Pine & glacier · Clean rows",
    icon: "sunny-outline",
    swatches: ["#F3F8FB", "#FFFFFF", "#0F766E", "#0369A1"],
    config: {
      presetId: "mt-kenya-alpine",
      mode: "light",
      surfaceStyle: "crisp",
      cardRadius: "rounded",
      buttonRadius: "rounded",
      borderWidth: "thin",
      cardAccentStyle: "corner-frame",
      cardShadowIntensity: "subtle",
      iconBadgeStyle: "duotone-wash",
      inputStyle: "filled",
      buttonStyle: "filled",
      fontPair: "classic-sans",
      headingTransform: "none",
      readingTint: "cool-slate",
      dividerStyle: "hairline",
      sectionHeaderStyle: "eyebrow",
      progressBarStyle: "rounded",
      pillBarLayout: "compact-scroll",
      pillShape: "rounded",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "classic",
      tabBarLabels: true,
      tabBarSize: "md",
      menuIndicatorStyle: "pill",
      appBarStyle: "standard",
      appBarSize: "md",
      headerAlignment: "left",
      homeLayout: "classic",
      horizontalScrollbarStyle: "subtle-bar",
      stripeThickness: "thin",
      iconScale: 1.0,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "karura-canopy-calm",
    name: "Karura Forest Calm",
    tagline: "Botanical moss · Monochrome icons · Floating pill bar",
    icon: "leaf-outline",
    swatches: ["#070F0B", "#13261D", "#28B874", "#C2A14D"],
    config: {
      presetId: "forest-canopy",
      mode: "dark",
      surfaceStyle: "tonal",
      cardRadius: "soft",
      buttonRadius: "pill",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "monochrome-ink",
      inputStyle: "pill",
      buttonStyle: "tinted",
      fontPair: "humanist",
      headingTransform: "none",
      dividerStyle: "none",
      sectionHeaderStyle: "eyebrow",
      progressBarStyle: "rounded",
      pillBarLayout: "floating-dock",
      pillShape: "pill",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "floating-pill",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "pill",
      appBarStyle: "borderless",
      appBarSize: "sm",
      headerAlignment: "left",
      homeLayout: "minimal-rows",
      horizontalScrollbarStyle: "dots",
      stripeThickness: "hairline",
      iconScale: 0.96,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "zanzibar-indigo-night",
    name: "Zanzibar Twilight",
    tagline: "Deep plum & brass · Hairline rings · Segmented pills",
    icon: "sparkles-outline",
    swatches: ["#0D0817", "#1D1430", "#F0B949", "#F2736B"],
    config: {
      presetId: "swahili-twilight",
      mode: "dark",
      surfaceStyle: "inset-tray",
      cardRadius: "rounded",
      buttonRadius: "rounded",
      borderWidth: "thin",
      cardAccentStyle: "double-rule",
      cardShadowIntensity: "none",
      iconBadgeStyle: "hairline-ring",
      inputStyle: "filled",
      buttonStyle: "outlined",
      fontPair: "editorial-serif",
      headingTransform: "none",
      numericStyle: "tabular-mono",
      dividerStyle: "accent-fade",
      sectionHeaderStyle: "bold-title",
      progressBarStyle: "thin-line",
      pillBarLayout: "segmented-bar",
      pillShape: "rounded",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "top-accent",
      tabBarLabels: true,
      tabBarSize: "md",
      menuIndicatorStyle: "underline",
      appBarStyle: "floating",
      appBarSize: "md",
      headerAlignment: "center",
      homeLayout: "classic",
      horizontalScrollbarStyle: "subtle-bar",
      stripeThickness: "thin",
      iconScale: 1.0,
      quickMenuPosition: "off",
      customColors: {},
    },
  },
  {
    id: "nairobi-night-express",
    name: "Nairobi Night Express",
    tagline: "OLED asphalt · Electric lime & mono · Segmented bar",
    icon: "flash-outline",
    swatches: ["#000000", "#11161C", "#A3E635", "#22D3EE"],
    config: {
      presetId: "matatu-neon",
      mode: "dark",
      oledBlack: true,
      surfaceStyle: "neo-brutal",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "medium",
      cardAccentStyle: "offset-edge",
      cardShadowIntensity: "none",
      iconBadgeStyle: "keycap",
      inputStyle: "accent",
      buttonStyle: "outlined",
      fontPair: "mono-tech",
      headingTransform: "uppercase",
      numericStyle: "tabular-mono",
      dividerStyle: "accent-fade",
      sectionHeaderStyle: "accent-pill",
      progressBarStyle: "segmented",
      pillBarLayout: "stepper",
      pillShape: "sharp",
      pillSize: "sm",
      buttonSize: "sm",
      cardPadding: "sm",
      density: "compact",
      tabBarStyle: "segmented",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "bracket",
      appBarStyle: "accent-tinted",
      appBarSize: "sm",
      headerAlignment: "left",
      homeLayout: "compact-list",
      horizontalScrollbarStyle: "accent-track",
      stripeThickness: "thin",
      iconScale: 0.94,
      quickMenuPosition: "off",
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
    light: {
      gold: "#9C7005",
    },
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
      lockedText: "#9E9E9E",
      lockedBadgeText: "#BDBDBD",
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
      lockedText: "#4A4A4A",
      lockedBadgeText: "#333333",
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
      gold: "#966D1B",
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
      textMuted: "#4B676E",
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
      gold: "#966B00",
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
      textMuted: "#6B5A43",
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
      textMuted: "#5B6445",
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
  {
    id: "swahili-twilight",
    name: "Swahili Twilight",
    tagline: "Deep Plum-Indigo, Warm Gold & Coral",
    recommendedMode: "dark",
    swatches: ["#0D0817", "#1D1430", "#F0B949", "#F2736B"],
    dark: {
      bgPrimary: "#0D0817",
      bgSecondary: "#150E24",
      bgCard: "#1D1430",
      bgCardHover: "#261B3E",
      bgElevated: "#2D214A",
      surface: "#1D1430",
      surfaceContainerLowest: "#080510",
      surfaceContainerLow: "#150E24",
      surfaceContainer: "#1D1430",
      surfaceContainerHigh: "#271C40",
      surfaceContainerHighest: "#332552",
      gold: "#F0B949",
      goldLight: "#FAD37A",
      kenyaRed: "#F2736B",
      kenyaRedLight: "#FF9B94",
      sky: "#8C7AE6",
      skyLight: "#B3A6F2",
      primaryContainer: "rgba(240, 185, 73, 0.22)",
      onPrimaryContainer: "#FCE3A4",
      secondaryContainer: "rgba(242, 115, 107, 0.20)",
      onSecondaryContainer: "#FFC7C2",
      border: "#4A3A6B",
      borderLight: "#5D4A85",
      borderAccent: "#745DA3",
      outline: "#7D66AD",
      outlineVariant: "#4A3A6B",
      textPrimary: "#F5F0FA",
      text: "#F5F0FA",
      textSecondary: "#C5B8D9",
      textMuted: "#9F8FB8",
      rippleColor: "rgba(240, 185, 73, 0.18)",
    },
    light: {
      bgPrimary: "#F8F5FC",
      bgSecondary: "#EEE8F7",
      bgCard: "#FFFFFF",
      bgCardHover: "#F3EEF9",
      bgElevated: "#E5DDF2",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F3EEF9",
      surfaceContainer: "#EAE3F5",
      surfaceContainerHigh: "#E0D7EE",
      surfaceContainerHighest: "#D5C9E8",
      gold: "#96660B",
      goldLight: "#B8811C",
      kenyaRed: "#C4453D",
      kenyaRedLight: "#E0635B",
      sky: "#5E4B9E",
      skyLight: "#7B67BD",
      primaryContainer: "rgba(150, 102, 11, 0.15)",
      onPrimaryContainer: "#4D3200",
      secondaryContainer: "rgba(196, 69, 61, 0.13)",
      onSecondaryContainer: "#5C1612",
      border: "#8E7FA8",
      borderLight: "#7A6B94",
      borderAccent: "#63557D",
      outline: "#73648C",
      outlineVariant: "#8E7FA8",
      textPrimary: "#1B112B",
      text: "#1B112B",
      textSecondary: "#4B3B63",
      textMuted: "#65547D",
      rippleColor: "rgba(150, 102, 11, 0.14)",
    },
  },
  {
    id: "tsavo-night",
    name: "Tsavo Night",
    tagline: "Volcanic Charcoal, Burnt Copper & Savanna Gold",
    recommendedMode: "dark",
    swatches: ["#0F0D0C", "#211C19", "#E08448", "#E6B44C"],
    dark: {
      bgPrimary: "#0F0D0C",
      bgSecondary: "#181513",
      bgCard: "#211C19",
      bgCardHover: "#2B2420",
      bgElevated: "#332B26",
      surface: "#211C19",
      surfaceContainerLowest: "#090807",
      surfaceContainerLow: "#181513",
      surfaceContainer: "#211C19",
      surfaceContainerHigh: "#2C2521",
      surfaceContainerHighest: "#382F2A",
      gold: "#E08448",
      goldLight: "#F5AC78",
      earth: "#C96A38",
      earthLight: "#E68E5E",
      kenyaGreen: "#4D9E6B",
      kenyaGreenLight: "#78C996",
      primaryContainer: "rgba(224, 132, 72, 0.22)",
      onPrimaryContainer: "#FFD7BA",
      secondaryContainer: "rgba(230, 180, 76, 0.20)",
      onSecondaryContainer: "#FAE2A5",
      border: "#5E4F47",
      borderLight: "#736157",
      borderAccent: "#8C776B",
      outline: "#917C70",
      outlineVariant: "#5E4F47",
      textPrimary: "#F5F0EC",
      text: "#F5F0EC",
      textSecondary: "#C7BAB2",
      textMuted: "#A3948B",
      rippleColor: "rgba(224, 132, 72, 0.18)",
    },
    light: {
      bgPrimary: "#F9F6F3",
      bgSecondary: "#F0EAE4",
      bgCard: "#FFFFFF",
      bgCardHover: "#F5EFEA",
      bgElevated: "#E8E0D8",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4EFEA",
      surfaceContainer: "#ECE5DE",
      surfaceContainerHigh: "#E3DAD1",
      surfaceContainerHighest: "#D9CEC3",
      gold: "#A84E1D",
      goldLight: "#C7642E",
      earth: "#853B14",
      earthLight: "#A34E22",
      kenyaGreen: "#2B7548",
      kenyaGreenLight: "#3E9460",
      primaryContainer: "rgba(168, 78, 29, 0.15)",
      onPrimaryContainer: "#4F2107",
      secondaryContainer: "rgba(133, 59, 20, 0.13)",
      onSecondaryContainer: "#421B05",
      border: "#998A80",
      borderLight: "#85766C",
      borderAccent: "#6E6057",
      outline: "#7D6E64",
      outlineVariant: "#998A80",
      textPrimary: "#1F1916",
      text: "#1F1916",
      textSecondary: "#52463F",
      textMuted: "#6B5E56",
      rippleColor: "rgba(168, 78, 29, 0.14)",
    },
  },
  {
    id: "naivasha-mist",
    name: "Naivasha Mist",
    tagline: "Crisp Lake Sky, Cool Ivory & Forest Teal",
    recommendedMode: "light",
    swatches: ["#0A1317", "#F4F8FA", "#127377", "#22658A"],
    dark: {
      bgPrimary: "#0A1317",
      bgSecondary: "#111F24",
      bgCard: "#172A30",
      bgCardHover: "#1F363D",
      bgElevated: "#254048",
      surface: "#172A30",
      surfaceContainerLowest: "#060C0F",
      surfaceContainerLow: "#111F24",
      surfaceContainer: "#172A30",
      surfaceContainerHigh: "#203840",
      surfaceContainerHighest: "#2A4750",
      gold: "#39B8BD",
      goldLight: "#70DCE0",
      sky: "#4FA4CF",
      skyLight: "#84C6E8",
      kenyaGreen: "#2CA682",
      kenyaGreenLight: "#5CD1AF",
      primaryContainer: "rgba(57, 184, 189, 0.22)",
      onPrimaryContainer: "#B0F2F5",
      secondaryContainer: "rgba(79, 164, 207, 0.20)",
      onSecondaryContainer: "#BCE2F5",
      border: "#3B5B66",
      borderLight: "#4B707D",
      borderAccent: "#5D8796",
      outline: "#6691A1",
      outlineVariant: "#3B5B66",
      textPrimary: "#EEF6F8",
      text: "#EEF6F8",
      textSecondary: "#AFC6CC",
      textMuted: "#8AA6AD",
      rippleColor: "rgba(57, 184, 189, 0.18)",
    },
    light: {
      bgPrimary: "#F4F8FA",
      bgSecondary: "#E8F0F3",
      bgCard: "#FFFFFF",
      bgCardHover: "#EFF5F7",
      bgElevated: "#DFEAEE",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFF5F7",
      surfaceContainer: "#E5EEF1",
      surfaceContainerHigh: "#DAE6EA",
      surfaceContainerHighest: "#CFDFE4",
      gold: "#127377",
      goldLight: "#1D9196",
      sky: "#22658A",
      skyLight: "#3580A8",
      kenyaGreen: "#166E53",
      kenyaGreenLight: "#248C6C",
      primaryContainer: "rgba(18, 115, 119, 0.14)",
      onPrimaryContainer: "#063C3F",
      secondaryContainer: "rgba(34, 101, 138, 0.13)",
      onSecondaryContainer: "#0D354A",
      border: "#7E97A1",
      borderLight: "#6A848E",
      borderAccent: "#546E78",
      outline: "#647E88",
      outlineVariant: "#7E97A1",
      textPrimary: "#0F2026",
      text: "#0F2026",
      textSecondary: "#3B555E",
      textMuted: "#536E78",
      rippleColor: "rgba(18, 115, 119, 0.14)",
    },
  },
  {
    id: "nairobi-linen",
    name: "Nairobi Linen",
    tagline: "Modern Editorial Warm White, Espresso & Terracotta",
    recommendedMode: "light",
    swatches: ["#120E0B", "#FAF8F5", "#AD4424", "#6E4730"],
    dark: {
      bgPrimary: "#120E0B",
      bgSecondary: "#1C1612",
      bgCard: "#241D18",
      bgCardHover: "#2E251F",
      bgElevated: "#382D26",
      surface: "#241D18",
      surfaceContainerLowest: "#0A0806",
      surfaceContainerLow: "#1C1612",
      surfaceContainer: "#241D18",
      surfaceContainerHigh: "#302721",
      surfaceContainerHighest: "#3D322A",
      gold: "#DE7652",
      goldLight: "#F59D7D",
      earth: "#C46E41",
      earthLight: "#E09167",
      kenyaGreen: "#4B966B",
      kenyaGreenLight: "#74BF93",
      primaryContainer: "rgba(222, 118, 82, 0.22)",
      onPrimaryContainer: "#FFD3C4",
      secondaryContainer: "rgba(196, 110, 65, 0.20)",
      onSecondaryContainer: "#F7CEB7",
      border: "#615147",
      borderLight: "#756357",
      borderAccent: "#8F7A6C",
      outline: "#968072",
      outlineVariant: "#615147",
      textPrimary: "#F7F3EE",
      text: "#F7F3EE",
      textSecondary: "#C9BEB5",
      textMuted: "#A6988E",
      rippleColor: "rgba(222, 118, 82, 0.18)",
    },
    light: {
      bgPrimary: "#FAF8F5",
      bgSecondary: "#F2EEE8",
      bgCard: "#FFFFFF",
      bgCardHover: "#F6F3EE",
      bgElevated: "#EAE4DC",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F5F2EC",
      surfaceContainer: "#EDE8E0",
      surfaceContainerHigh: "#E4DED4",
      surfaceContainerHighest: "#DBD3C8",
      gold: "#AD4424",
      goldLight: "#CC5B37",
      earth: "#6E4730",
      earthLight: "#8A5B40",
      kenyaGreen: "#266B44",
      kenyaGreenLight: "#388A5C",
      primaryContainer: "rgba(173, 68, 36, 0.14)",
      onPrimaryContainer: "#521C0C",
      secondaryContainer: "rgba(110, 71, 48, 0.13)",
      onSecondaryContainer: "#382114",
      border: "#998E84",
      borderLight: "#857A70",
      borderAccent: "#6E635A",
      outline: "#7D7268",
      outlineVariant: "#998E84",
      textPrimary: "#1E1712",
      text: "#1E1712",
      textSecondary: "#52453B",
      textMuted: "#6B5D52",
      rippleColor: "rgba(173, 68, 36, 0.14)",
    },
  },
  {
    id: "maasai-shuka",
    name: "Maasai Shuka",
    tagline: "Crimson Shuka, Bead Cobalt & Obsidian",
    recommendedMode: "dark",
    swatches: ["#120B0C", "#FAF4F2", "#D62839", "#3B82F6"],
    dark: {
      bgPrimary: "#11090A",
      bgSecondary: "#1B0F11",
      bgCard: "#241417",
      bgCardHover: "#2F1A1E",
      bgElevated: "#382025",
      surface: "#241417",
      surfaceContainerLowest: "#0A0506",
      surfaceContainerLow: "#1A0E10",
      surfaceContainer: "#241417",
      surfaceContainerHigh: "#301B1F",
      surfaceContainerHighest: "#3D2328",
      gold: "#F25C69",
      goldLight: "#FF8A94",
      sky: "#60A5FA",
      skyLight: "#93C5FD",
      kenyaGreen: "#34D399",
      kenyaGreenLight: "#6EE7B7",
      kenyaRed: "#EF4444",
      kenyaRedLight: "#F87171",
      primaryContainer: "rgba(242, 92, 105, 0.22)",
      onPrimaryContainer: "#FFD6DA",
      secondaryContainer: "rgba(96, 165, 250, 0.20)",
      onSecondaryContainer: "#DBEAFE",
      border: "#6B3A42",
      borderLight: "#804750",
      borderAccent: "#995661",
      outline: "#A35D69",
      outlineVariant: "#6B3A42",
      textPrimary: "#FAF2F3",
      text: "#FAF2F3",
      textSecondary: "#D4BCC0",
      textMuted: "#B5969B",
      rippleColor: "rgba(242, 92, 105, 0.20)",
    },
    light: {
      bgPrimary: "#FBF5F4",
      bgSecondary: "#F3E7E5",
      bgCard: "#FFFFFF",
      bgCardHover: "#F8EEEC",
      bgElevated: "#EDE0DE",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F7ECEA",
      surfaceContainer: "#F0E2E0",
      surfaceContainerHigh: "#E8D7D4",
      surfaceContainerHighest: "#DFC9C6",
      gold: "#B91C2C",
      goldLight: "#D62839",
      sky: "#1D4ED8",
      skyLight: "#3B82F6",
      kenyaGreen: "#047857",
      kenyaGreenLight: "#059669",
      primaryContainer: "rgba(185, 28, 44, 0.14)",
      onPrimaryContainer: "#5C0B14",
      secondaryContainer: "rgba(29, 78, 216, 0.12)",
      onSecondaryContainer: "#1E3A8A",
      border: "#9E8285",
      borderLight: "#8A6E71",
      borderAccent: "#73585B",
      outline: "#826669",
      outlineVariant: "#9E8285",
      textPrimary: "#210E10",
      text: "#210E10",
      textSecondary: "#573B3E",
      textMuted: "#6B4C50",
      rippleColor: "rgba(185, 28, 44, 0.14)",
    },
  },
  {
    id: "mt-kenya-alpine",
    name: "Mt. Kenya Alpine",
    tagline: "Glacier Snow, Alpine Pine & Highland Gold",
    recommendedMode: "light",
    swatches: ["#0B1519", "#F3F8FB", "#0F766E", "#B45309"],
    dark: {
      bgPrimary: "#081115",
      bgSecondary: "#0F1D24",
      bgCard: "#15262F",
      bgCardHover: "#1D323D",
      bgElevated: "#233C4A",
      surface: "#15262F",
      surfaceContainerLowest: "#050B0E",
      surfaceContainerLow: "#0F1D24",
      surfaceContainer: "#15262F",
      surfaceContainerHigh: "#1E3440",
      surfaceContainerHighest: "#274352",
      gold: "#38BDF8",
      goldLight: "#7DD3FC",
      kenyaGreen: "#2DD4BF",
      kenyaGreenLight: "#5EEAD4",
      sky: "#60A5FA",
      skyLight: "#93C5FD",
      primaryContainer: "rgba(56, 189, 248, 0.20)",
      onPrimaryContainer: "#E0F2FE",
      secondaryContainer: "rgba(45, 212, 191, 0.20)",
      onSecondaryContainer: "#CCFBF1",
      border: "#365463",
      borderLight: "#45687A",
      borderAccent: "#567E94",
      outline: "#618AA1",
      outlineVariant: "#365463",
      textPrimary: "#F0F8FC",
      text: "#F0F8FC",
      textSecondary: "#B2C8D4",
      textMuted: "#8CA9B8",
      rippleColor: "rgba(56, 189, 248, 0.18)",
    },
    light: {
      bgPrimary: "#F3F8FB",
      bgSecondary: "#E6F0F5",
      bgCard: "#FFFFFF",
      bgCardHover: "#EDF5F9",
      bgElevated: "#DCEAF1",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#ECF4F8",
      surfaceContainer: "#E2EEF4",
      surfaceContainerHigh: "#D6E6EE",
      surfaceContainerHighest: "#C9DDE8",
      gold: "#0F766E",
      goldLight: "#14B8A6",
      kenyaGreen: "#15803D",
      kenyaGreenLight: "#16A34A",
      sky: "#0369A1",
      skyLight: "#0284C7",
      primaryContainer: "rgba(15, 118, 110, 0.14)",
      onPrimaryContainer: "#063B37",
      secondaryContainer: "rgba(3, 105, 161, 0.12)",
      onSecondaryContainer: "#0C4A6E",
      border: "#7996A6",
      borderLight: "#658291",
      borderAccent: "#506D7D",
      outline: "#607D8C",
      outlineVariant: "#7996A6",
      textPrimary: "#0A1C26",
      text: "#0A1C26",
      textSecondary: "#334F5E",
      textMuted: "#476373",
      rippleColor: "rgba(15, 118, 110, 0.14)",
    },
  },
  {
    id: "matatu-neon",
    name: "Matatu Neon",
    tagline: "Nairobi Night Asphalt, Electric Lime & Amber",
    recommendedMode: "dark",
    swatches: ["#080A10", "#141923", "#A3E635", "#FACC15"],
    dark: {
      bgPrimary: "#080A10",
      bgSecondary: "#0F131D",
      bgCard: "#151B28",
      bgCardHover: "#1D2536",
      bgElevated: "#242E42",
      surface: "#151B28",
      surfaceContainerLowest: "#040508",
      surfaceContainerLow: "#0E121B",
      surfaceContainer: "#151B28",
      surfaceContainerHigh: "#1E2638",
      surfaceContainerHighest: "#28324A",
      gold: "#A3E635",
      goldLight: "#BEF264",
      kenyaGreen: "#22D3EE",
      kenyaGreenLight: "#67E8F9",
      sky: "#38BDF8",
      skyLight: "#7DD3FC",
      kenyaRed: "#FB7185",
      kenyaRedLight: "#FDA4AF",
      primaryContainer: "rgba(163, 230, 53, 0.20)",
      onPrimaryContainer: "#ECFCCB",
      secondaryContainer: "rgba(34, 211, 238, 0.18)",
      onSecondaryContainer: "#CFFAFE",
      border: "#36435E",
      borderLight: "#465678",
      borderAccent: "#596D96",
      outline: "#667BA6",
      outlineVariant: "#36435E",
      textPrimary: "#F4F7FF",
      text: "#F4F7FF",
      textSecondary: "#B0BDDB",
      textMuted: "#8B9AB8",
      rippleColor: "rgba(163, 230, 53, 0.20)",
    },
    light: {
      bgPrimary: "#F4F7F0",
      bgSecondary: "#E9EFE2",
      bgCard: "#FFFFFF",
      bgCardHover: "#F0F5EA",
      bgElevated: "#E0E8D7",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EEF3E8",
      surfaceContainer: "#E4ECDC",
      surfaceContainerHigh: "#D9E4CF",
      surfaceContainerHighest: "#CDD9C1",
      gold: "#4D7C0F",
      goldLight: "#65A30D",
      kenyaGreen: "#0E7490",
      kenyaGreenLight: "#0891B2",
      sky: "#0369A1",
      skyLight: "#0284C7",
      primaryContainer: "rgba(77, 124, 15, 0.14)",
      onPrimaryContainer: "#1A2E05",
      secondaryContainer: "rgba(14, 116, 144, 0.12)",
      onSecondaryContainer: "#164E63",
      border: "#7E8F70",
      borderLight: "#6A7A5D",
      borderAccent: "#56664A",
      outline: "#657558",
      outlineVariant: "#7E8F70",
      textPrimary: "#111A09",
      text: "#111A09",
      textSecondary: "#3F4F32",
      textMuted: "#516342",
      rippleColor: "rgba(77, 124, 15, 0.14)",
    },
  },
];

export const THEME_PRESETS_BY_ID = new Map<string, ThemePreset>(
  THEME_PRESETS.map((p) => [p.id, p])
);

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

const HEX_TO_RGBA_CACHE = new Map<string, string>();
const HEX_TO_RGBA_CACHE_MAX = 256;

/**
 * Converts a hex color (#RGB, #RRGGBB, or #RRGGBBAA) into an `rgba(r, g, b, alpha)` string.
 */
export function hexToRgba(hex: string, alpha: number): string {
  const clampedAlpha = Math.max(0, Math.min(1, Number.isFinite(alpha) ? alpha : 1));
  const cacheKey = `${hex}|${clampedAlpha}`;
  const cached = HEX_TO_RGBA_CACHE.get(cacheKey);
  if (cached !== undefined) return cached;
  const parsed = parseHexToRgb(hex);
  const result = !parsed
    ? `rgba(0, 0, 0, ${clampedAlpha})`
    : `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, ${
        parsed.a !== undefined
          ? Math.max(0, Math.min(1, Number((parsed.a * clampedAlpha).toFixed(3))))
          : Number(clampedAlpha.toFixed(3))
      })`;
  if (HEX_TO_RGBA_CACHE.size >= HEX_TO_RGBA_CACHE_MAX) {
    const firstKey = HEX_TO_RGBA_CACHE.keys().next().value;
    if (firstKey !== undefined) HEX_TO_RGBA_CACHE.delete(firstKey);
  }
  HEX_TO_RGBA_CACHE.set(cacheKey, result);
  return result;
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
      onPrimaryContainer: isDark ? "#FFF2B2" : "#4A3200",
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
  const preset = THEME_PRESETS_BY_ID.get(config.presetId);
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
    resolved.onPrimaryContainer = mixHex(accent, resolvedIsDark ? "#FFFFFF" : "#000000", resolvedIsDark ? 0.58 : 0.45);
    resolved.rippleColor = hexToRgba(accent, resolvedIsDark ? 0.18 : 0.14);
  }

  if (custom.secondaryAccent && isValidHexColor(custom.secondaryAccent)) {
    const secondary = custom.secondaryAccent.trim();
    resolved.kenyaGreen = secondary;
    resolved.kenyaGreenLight = mixHex(secondary, "#FFFFFF", resolvedIsDark ? 0.24 : 0.12);
    resolved.secondaryContainer = hexToRgba(secondary, resolvedIsDark ? 0.20 : 0.13);
    resolved.onSecondaryContainer = mixHex(secondary, resolvedIsDark ? "#FFFFFF" : "#000000", resolvedIsDark ? 0.58 : 0.45);
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
    resolved.textSecondary = mixHex(txt, resolved.surfaceContainer, 0.24);
    resolved.textMuted = mixHex(txt, resolved.surfaceContainer, 0.38);
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

  resolved.text = resolved.textPrimary;
  if (config.readingTint && config.readingTint !== "none") {
    const tintTarget =
      config.readingTint === "warm-paper"
        ? resolvedIsDark ? "#2A1F14" : "#F6EBD8"
        : config.readingTint === "soft-sepia"
        ? resolvedIsDark ? "#2E2216" : "#EFE2C6"
        : resolvedIsDark ? "#111A26" : "#EBF2F7";
    const tintAmt = resolvedIsDark ? 0.16 : 0.22;
    resolved.bgPrimary = mixHex(resolved.bgPrimary, tintTarget, tintAmt);
    resolved.bgSecondary = mixHex(resolved.bgSecondary, tintTarget, tintAmt);
    resolved.bgCard = mixHex(resolved.bgCard, tintTarget, tintAmt * 0.7);
    resolved.surfaceContainerLow = mixHex(resolved.surfaceContainerLow, tintTarget, tintAmt);
    resolved.surfaceContainer = mixHex(resolved.surfaceContainer, tintTarget, tintAmt * 0.85);
  }

  if (resolvedIsDark && config.oledBlack) {
    resolved.bgPrimary = "#000000";
    resolved.surfaceContainerLowest = "#000000";
    resolved.bgSecondary = "#070707";
    resolved.surfaceContainerLow = "#080808";
    resolved.bgCard = "#0E0E0E";
    resolved.surfaceContainer = "#101010";
    resolved.surfaceContainerHigh = "#181818";
    resolved.surfaceContainerHighest = "#222222";
  }

  if (config.accentIntensity && config.accentIntensity !== "balanced") {
    const adjustAccent = (hex: string): string => {
      if (!isValidHexColor(hex)) return hex;
      if (config.accentIntensity === "muted") {
        return mixHex(hex, resolvedIsDark ? "#888888" : "#777777", 0.24);
      }
      return mixHex(hex, resolvedIsDark ? "#FFFFFF" : "#000000", 0.10);
    };
    resolved.gold = adjustAccent(resolved.gold);
    resolved.goldLight = adjustAccent(resolved.goldLight);
    resolved.kenyaGreen = adjustAccent(resolved.kenyaGreen);
    resolved.sky = adjustAccent(resolved.sky);
  }

  resolved.surface = resolved.bgCard;
  return resolved;
}

const CONTRAST_INK_CACHE = new Map<string, "#1A1108" | "#FFFFFF">();
const CONTRAST_INK_CACHE_MAX = 256;

export function getContrastInk(bgHex: string | undefined | null): "#1A1108" | "#FFFFFF" {
  if (!bgHex) return "#1A1108";
  const cached = CONTRAST_INK_CACHE.get(bgHex);
  if (cached !== undefined) return cached;
  if (!isValidHexColor(bgHex)) return "#1A1108";
  const clean = bgHex.trim().replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean.slice(0, 6);
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const lum = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const result: "#1A1108" | "#FFFFFF" = lum > 0.34 ? "#1A1108" : "#FFFFFF";
  if (CONTRAST_INK_CACHE.size >= CONTRAST_INK_CACHE_MAX) {
    const firstKey = CONTRAST_INK_CACHE.keys().next().value;
    if (firstKey !== undefined) CONTRAST_INK_CACHE.delete(firstKey);
  }
  CONTRAST_INK_CACHE.set(bgHex, result);
  return result;
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

const CARD_PAD_SCALE_MAP: Record<SizePreset, number> = {
  xs: 0.78,
  sm: 0.88,
  md: 1.0,
  lg: 1.15,
  xl: 1.30,
};

const PILL_SIZE_MAP: Record<SizePreset, [number, number, number]> = {
  xs: [24, 3, 7],
  sm: [28, 4, 9],
  md: [32, 6, 11],
  lg: [38, 8, 14],
  xl: [44, 10, 16],
};

const BTN_SIZE_MAP: Record<SizePreset, [number, number]> = {
  xs: [6, 10],
  sm: [8, 12],
  md: [10, 16],
  lg: [13, 20],
  xl: [16, 24],
};

const CARD_PAD_MAP: Record<SizePreset, number> = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
};

const TAB_BAR_SIZE_MAP: Record<SizePreset, number> = {
  xs: 48,
  sm: 54,
  md: 64,
  lg: 72,
  xl: 80,
};

const APP_BAR_SIZE_MAP: Record<SizePreset, number> = {
  xs: 42,
  sm: 46,
  md: 52,
  lg: 62,
  xl: 72,
};

const SCREEN_PAD_MAP: Record<ScreenPaddingPreset, number> = {
  edge: 8,
  compact: 12,
  standard: 16,
  wide: 20,
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
  const spacingScale = Number(
    ((DENSITY_SCALE_MAP[config.density] ?? 1.0) * (CARD_PAD_SCALE_MAP[config.cardPadding] ?? 1.0)).toFixed(3)
  );

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
      cardOpacity = 0.88;
      break;
    case "tonal":
      elevationPx = 1;
      break;
    case "crisp":
    case "paper-ink":
    case "neo-brutal":
    case "inset-tray":
      elevationPx = 0;
      break;
  }

  const [pillMinHeightPx, pillPaddingVPx, pillPaddingHPx] = PILL_SIZE_MAP[config.pillSize] ?? PILL_SIZE_MAP.md;
  const [buttonPaddingVPx, buttonPaddingHPx] = BTN_SIZE_MAP[config.buttonSize] ?? BTN_SIZE_MAP.md;
  const cardPaddingPx = CARD_PAD_MAP[config.cardPadding] ?? 14;
  const tabBarHeightPx = TAB_BAR_SIZE_MAP[config.tabBarSize] ?? 64;
  const appBarHeightPx = APP_BAR_SIZE_MAP[config.appBarSize] ?? 52;
  const iconScale = Number.isFinite(config.iconScale) ? Math.max(0.75, Math.min(1.35, config.iconScale)) : 1.0;
  const screenPaddingPx = SCREEN_PAD_MAP[config.screenPadding] ?? 16;
  const isFloatingBar = config.tabBarStyle === "floating-pill" || config.tabBarStyle === "segmented";
  const hasQuickFab = Boolean(config.quickMenuPosition && config.quickMenuPosition !== "off");
  const floatingTabBarClearancePx = isFloatingBar
    ? tabBarHeightPx + (hasQuickFab ? 68 : 34)
    : hasQuickFab
    ? 68
    : 0;

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
    pillMinHeightPx,
    pillPaddingVPx,
    pillPaddingHPx,
    iconScale,
    buttonPaddingVPx,
    buttonPaddingHPx,
    cardPaddingPx,
    tabBarHeightPx,
    appBarHeightPx,
    screenPaddingPx,
    floatingTabBarClearancePx,
  };
}

/**
 * Serializes a ThemeConfig to a formatted JSON string for export or sharing.
 */
export function exportThemeConfigJson(config: ThemeConfig): string {
  return JSON.stringify(config, null, 2);
}

const VALID_MODES = new Set<ThemeMode>(["system", "light", "dark"]);
const VALID_SURFACE_STYLES = new Set<SurfaceStyle>(["elevated", "flat", "outlined", "glass", "tonal", "crisp", "paper-ink", "neo-brutal", "inset-tray"]);
const VALID_BORDER_WIDTHS = new Set<BorderWidthPreset>(["none", "hairline", "thin", "medium", "thick", "bold"]);
const VALID_CARD_RADII = new Set<RadiusPreset>(["square", "sharp", "subtle", "rounded", "soft", "pill"]);
const VALID_BUTTON_RADII = new Set<ButtonRadiusPreset>(["square", "sharp", "subtle", "rounded", "soft", "pill"]);
const VALID_FONT_PAIRS = new Set<FontPair>([
  "outfit-inter", "classic-sans", "editorial-serif", "mono-tech",
  "geometric", "humanist", "condensed", "grotesk", "casual", "cursive",
]);
const VALID_SCROLLBAR_STYLES = new Set<HorizontalScrollbarStyle>([
  "hidden", "native-indicator", "subtle-bar", "accent-track", "glow-rail", "tick-ruler", "dots",
]);
const VALID_SCROLLBAR_THICKNESS = new Set<ScrollbarThickness>([
  "hairline", "thin", "medium", "thick", "bold", "extra",
]);
const VALID_PILL_BAR_LAYOUTS = new Set<PillBarLayout>([
  "scroll-with-expand", "always-scroll", "always-wrap", "compact-scroll", "centered-wrap", "grid-pills",
  "dropdown", "underline-tabs", "segmented-bar", "two-col-grid", "vertical-list", "minimal-text", "stepper", "three-col-tiles", "floating-dock", "sidebar-chips", "index-tabs",
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
const VALID_MENU_INDICATORS = new Set<MenuIndicatorStyle>(["pill", "underline", "dot", "filled-box", "glow", "outline", "bracket"]);
const VALID_VERT_SB = new Set<VerticalScrollbarStyle>(["hidden", "native", "always-visible"]);
const VALID_SHADOWS = new Set<CardShadowIntensity>(["none", "subtle", "medium", "strong", "glow", "crisp-3d"]);
const VALID_INPUT_STYLES = new Set<InputStylePreset>(["outlined", "filled", "underlined", "pill", "minimal", "accent"]);
const VALID_BUTTON_STYLES = new Set<ButtonStylePreset>(["filled", "tinted", "outlined", "elevated", "pill-glow", "flat", "keycap-press", "editorial-link"]);
const VALID_TRANSITIONS = new Set<PageTransitionPreset>(["slide", "fade", "bottom-sheet", "fast", "none", "default"]);
const VALID_STATUS_BARS = new Set<StatusBarMode>(["auto", "light", "dark"]);
const VALID_QUICK_MENUS = new Set<QuickMenuPosition>(["off", "bottom-right", "bottom-left"]);
const VALID_COLOR_BLIND_MODES = new Set<ColorBlindMode>(["none", "deuteranopia", "protanopia", "tritanopia"]);
const VALID_HOME_LAYOUTS = new Set<HomeLayoutPreset>([
  "classic", "bento-grid", "compact-list", "editorial-cards", "minimal-rows", "large-tiles",
]);
const VALID_HEADER_ALIGNMENTS = new Set<HeaderAlignment>(["left", "center"]);
const VALID_CARD_ACCENT_STYLES = new Set<CardAccentStyle>([
  "none", "left-bar", "top-bar", "bottom-bar", "tinted-border", "glow-edge", "corner-frame", "double-rule", "offset-edge",
]);
const VALID_ICON_BADGE_STYLES = new Set<IconBadgeStyle>([
  "outline", "filled", "soft-circle", "soft-square", "accent-solid", "minimal", "monochrome-ink", "keycap", "hairline-ring", "duotone-wash",
]);
const VALID_HEADING_TRANSFORMS = new Set<HeadingTransform>(["none", "uppercase", "capitalize"]);
const VALID_NUMERIC_STYLES = new Set<NumericStyle>(["default", "tabular-mono"]);
const VALID_HAPTIC_STRENGTHS = new Set<HapticStrength>(["off", "light", "medium", "strong"]);
const VALID_SIZE_PRESETS = new Set<SizePreset>(["xs", "sm", "md", "lg", "xl"]);
const VALID_ACCENT_INTENSITIES = new Set<AccentIntensity>(["muted", "balanced", "vivid"]);
const VALID_READING_TINTS = new Set<ReadingTint>(["none", "warm-paper", "soft-sepia", "cool-slate"]);
const VALID_SCREEN_PADDINGS = new Set<ScreenPaddingPreset>(["edge", "compact", "standard", "wide"]);
const VALID_PROGRESS_STYLES = new Set<ProgressBarStyle>(["rounded", "sharp", "segmented", "thin-line"]);
const VALID_DIVIDER_STYLES = new Set<DividerStyle>(["hairline", "none", "dashed-soft", "accent-fade"]);
const VALID_SECTION_HEADER_STYLES = new Set<SectionHeaderStyle>(["eyebrow", "bold-title", "accent-pill", "left-bar", "ruled-line"]);
const VALID_PRESS_EFFECTS = new Set<PressEffect>(["scale-ripple", "ripple-only", "opacity-only", "none"]);

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
  if (typeof obj.presetId === "string" && THEME_PRESETS_BY_ID.has(obj.presetId)) {
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
    merged.horizontalScrollbarStyle =
      obj.horizontalScrollbarStyle === "glow-rail" ? "tick-ruler" : (obj.horizontalScrollbarStyle as HorizontalScrollbarStyle);
  }
  if (typeof obj.horizontalScrollbarThickness === "string" && VALID_SCROLLBAR_THICKNESS.has(obj.horizontalScrollbarThickness as ScrollbarThickness)) {
    merged.horizontalScrollbarThickness = obj.horizontalScrollbarThickness as ScrollbarThickness;
  }
  if (typeof obj.scrollbarTrackVisible === "boolean") {
    merged.scrollbarTrackVisible = obj.scrollbarTrackVisible;
  }
  if (typeof obj.pillBarLayout === "string" && VALID_PILL_BAR_LAYOUTS.has(obj.pillBarLayout as PillBarLayout)) {
    merged.pillBarLayout =
      obj.pillBarLayout === "sidebar-chips" ? "index-tabs" : (obj.pillBarLayout as PillBarLayout);
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
    merged.menuIndicatorStyle =
      obj.menuIndicatorStyle === "glow" ? "bracket" : (obj.menuIndicatorStyle as MenuIndicatorStyle);
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
    merged.buttonStyle =
      obj.buttonStyle === "pill-glow"
        ? "keycap-press"
        : obj.buttonStyle === "flat"
        ? "editorial-link"
        : (obj.buttonStyle as ButtonStylePreset);
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
    merged.cardAccentStyle =
      obj.cardAccentStyle === "left-bar" || obj.cardAccentStyle === "top-bar"
        ? "double-rule"
        : obj.cardAccentStyle === "glow-edge"
        ? "offset-edge"
        : (obj.cardAccentStyle as CardAccentStyle);
  }
  if (typeof obj.iconBadgeStyle === "string" && VALID_ICON_BADGE_STYLES.has(obj.iconBadgeStyle as IconBadgeStyle)) {
    merged.iconBadgeStyle =
      obj.iconBadgeStyle === "accent-solid"
        ? "keycap"
        : obj.iconBadgeStyle === "filled"
        ? "duotone-wash"
        : obj.iconBadgeStyle === "soft-square"
        ? "monochrome-ink"
        : (obj.iconBadgeStyle as IconBadgeStyle);
  }
  if (typeof obj.headingTransform === "string" && VALID_HEADING_TRANSFORMS.has(obj.headingTransform as HeadingTransform)) {
    merged.headingTransform = obj.headingTransform as HeadingTransform;
  }
  if (typeof obj.numericStyle === "string" && VALID_NUMERIC_STYLES.has(obj.numericStyle as NumericStyle)) {
    merged.numericStyle = obj.numericStyle as NumericStyle;
  }
  if (typeof obj.hapticStrength === "string" && VALID_HAPTIC_STRENGTHS.has(obj.hapticStrength as HapticStrength)) {
    merged.hapticStrength = obj.hapticStrength as HapticStrength;
  }
  if (typeof obj.pillSize === "string" && VALID_SIZE_PRESETS.has(obj.pillSize as SizePreset)) {
    merged.pillSize = obj.pillSize as SizePreset;
  }
  if (typeof obj.iconScale === "number" && Number.isFinite(obj.iconScale) && obj.iconScale >= 0.75 && obj.iconScale <= 1.35) {
    merged.iconScale = obj.iconScale;
  }
  if (typeof obj.buttonSize === "string" && VALID_SIZE_PRESETS.has(obj.buttonSize as SizePreset)) {
    merged.buttonSize = obj.buttonSize as SizePreset;
  }
  if (typeof obj.cardPadding === "string" && VALID_SIZE_PRESETS.has(obj.cardPadding as SizePreset)) {
    merged.cardPadding = obj.cardPadding as SizePreset;
  }
  if (typeof obj.tabBarSize === "string" && VALID_SIZE_PRESETS.has(obj.tabBarSize as SizePreset)) {
    merged.tabBarSize = obj.tabBarSize as SizePreset;
  }
  if (typeof obj.appBarSize === "string" && VALID_SIZE_PRESETS.has(obj.appBarSize as SizePreset)) {
    merged.appBarSize = obj.appBarSize as SizePreset;
  }
  if (typeof obj.oledBlack === "boolean") {
    merged.oledBlack = obj.oledBlack;
  }
  if (typeof obj.accentIntensity === "string" && VALID_ACCENT_INTENSITIES.has(obj.accentIntensity as AccentIntensity)) {
    merged.accentIntensity = obj.accentIntensity as AccentIntensity;
  }
  if (typeof obj.readingTint === "string" && VALID_READING_TINTS.has(obj.readingTint as ReadingTint)) {
    merged.readingTint = obj.readingTint as ReadingTint;
  }
  if (typeof obj.screenPadding === "string" && VALID_SCREEN_PADDINGS.has(obj.screenPadding as ScreenPaddingPreset)) {
    merged.screenPadding = obj.screenPadding as ScreenPaddingPreset;
  }
  if (typeof obj.progressBarStyle === "string" && VALID_PROGRESS_STYLES.has(obj.progressBarStyle as ProgressBarStyle)) {
    merged.progressBarStyle = obj.progressBarStyle as ProgressBarStyle;
  }
  if (typeof obj.dividerStyle === "string" && VALID_DIVIDER_STYLES.has(obj.dividerStyle as DividerStyle)) {
    merged.dividerStyle = obj.dividerStyle as DividerStyle;
  }
  if (typeof obj.sectionHeaderStyle === "string" && VALID_SECTION_HEADER_STYLES.has(obj.sectionHeaderStyle as SectionHeaderStyle)) {
    merged.sectionHeaderStyle =
      obj.sectionHeaderStyle === "left-bar" ? "ruled-line" : (obj.sectionHeaderStyle as SectionHeaderStyle);
  }
  if (typeof obj.pressEffect === "string" && VALID_PRESS_EFFECTS.has(obj.pressEffect as PressEffect)) {
    merged.pressEffect = obj.pressEffect as PressEffect;
  }
  return merged;
}

export interface ThemeChangeItem {
  key: keyof ThemeConfig;
  label: string;
  valueLabel: string;
}

const CHANGE_LABELS: Partial<Record<keyof ThemeConfig, string>> = {
  mode: "Mode",
  presetId: "Preset",
  surfaceStyle: "Surface",
  borderWidth: "Border",
  cardRadius: "Radius",
  buttonRadius: "Btn Radius",
  fontScale: "Text",
  fontPair: "Font",
  lineHeightScale: "Line Ht",
  letterSpacingOffset: "Spacing",
  density: "Density",
  showKenyaStripe: "Stripe",
  tabBarStyle: "Tab Bar",
  tabBarLabels: "Tab Labels",
  menuIndicatorStyle: "Indicator",
  pillBarLayout: "Pill Row",
  pillShape: "Pill Shape",
  pillSize: "Pills",
  iconScale: "Icons",
  buttonSize: "Buttons",
  cardPadding: "Card Pad",
  tabBarSize: "Bar Size",
  appBarSize: "Header Size",
  appBarStyle: "Header",
  headerAlignment: "Align",
  homeLayout: "Home",
  cardAccentStyle: "Accent",
  iconBadgeStyle: "Badges",
  inputStyle: "Inputs",
  buttonStyle: "Btn Style",
  cardShadowIntensity: "Shadow",
  horizontalScrollbarStyle: "H-Scroll",
  verticalScrollbarStyle: "V-Scroll",
  quickMenuPosition: "Quick Menu",
  headingTransform: "Case",
  numericStyle: "Numbers",
  oledBlack: "OLED Black",
  accentIntensity: "Vibrancy",
  readingTint: "Tint",
  screenPadding: "Margins",
  progressBarStyle: "Progress",
  dividerStyle: "Dividers",
  sectionHeaderStyle: "Headers",
  pressEffect: "Tap FX",
  colorBlindMode: "Color Blind",
  highContrastBorders: "Hi-Contrast",
  reduceMotion: "Motion",
};

export function diffThemeConfig(config: ThemeConfig): ThemeChangeItem[] {
  const diffs: ThemeChangeItem[] = [];
  for (const key of Object.keys(CHANGE_LABELS) as (keyof ThemeConfig)[]) {
    const cur = config[key];
    const def = DEFAULT_THEME_CONFIG[key];
    if (cur !== def) {
      let valueLabel = String(cur);
      if (key === "fontScale" || key === "iconScale" || key === "lineHeightScale") {
        valueLabel = `${Math.round(Number(cur) * 100)}%`;
      } else if (typeof cur === "boolean") {
        valueLabel = cur ? "On" : "Off";
      } else if (key === "presetId") {
        valueLabel = THEME_PRESETS_BY_ID.get(String(cur))?.name ?? String(cur);
      }
      diffs.push({ key, label: CHANGE_LABELS[key] || String(key), valueLabel });
    }
  }
  const customCount = Object.values(config.customColors || {}).filter(Boolean).length;
  if (customCount > 0) {
    diffs.push({ key: "customColors", label: "Custom Colors", valueLabel: `${customCount}` });
  }
  return diffs;
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
