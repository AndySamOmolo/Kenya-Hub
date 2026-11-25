/**
 * KenyaHub Mobile — Comprehensive Theming Engine
 * Self-contained, zero-UI-dependency TypeScript module.
 */

export type ThemeMode = "system" | "light" | "dark";
export type SurfaceStyle = "elevated" | "flat" | "outlined" | "glass" | "tonal" | "crisp" | "paper-ink" | "neo-brutal" | "inset-tray" | "frameless" | "braun-chassis" | "swiss-ledger" | "riso-overprint" | "horology-bezel" | "avionics-panel" | "ceramic-glaze";
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
  | "index-tabs"
  | "braun-keys"
  | "swiss-index"
  | "manila-folders";

export type AppBarStyle =
  | "standard"
  | "compact"
  | "tall-editorial"
  | "borderless"
  | "accent-tinted"
  | "floating"
  | "braun-tuner"
  | "swiss-masthead"
  | "eink-runninghead"
  | "avionics-strip";

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
  | "segmented"
  | "braun-detent"
  | "swiss-timetable"
  | "solari-flap"
  | "porcelain-wells";

export type MenuIndicatorStyle =
  | "pill"
  | "underline"
  | "dot"
  | "filled-box"
  | "glow"
  | "outline"
  | "bracket"
  | "hanko-seal"
  | "plinth-lift"
  | "vernier-loupe";

export type VerticalScrollbarStyle = "hidden" | "native" | "always-visible";

export type CardShadowIntensity = "none" | "subtle" | "medium" | "strong" | "glow" | "crisp-3d";

export type InputStylePreset = "outlined" | "filled" | "underlined" | "pill" | "minimal" | "accent" | "unboxed" | "swiss-ledger" | "eink-ribbon" | "ceramic-basin" | "avionics-scratchpad";

export type ButtonStylePreset = "filled" | "tinted" | "outlined" | "elevated" | "pill-glow" | "flat" | "keycap-press" | "editorial-link" | "unboxed-text" | "braun-keycap" | "swiss-split" | "riso-stamp" | "washi-seal" | "avionics-guard";

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
  | "offset-edge"
  | "ticket-stub"
  | "rivet-bezel"
  | "hanko-corner"
  | "split-flap"
  | "plinth-slab";

export type IconBadgeStyle =
  | "soft-circle"
  | "recessed-well"
  | "postage-stamp"
  | "split-disc"
  | "monogram-frame"
  | "ceramic-tile"
  | "tilted-lozenge"
  | "ink-seal"
  | "bare-glyph"
  | "hidden"
  // Legacy aliases preserved for backward compatibility and migration
  | "outline"
  | "filled"
  | "soft-square"
  | "accent-solid"
  | "minimal"
  | "monochrome-ink"
  | "keycap"
  | "hairline-ring"
  | "duotone-wash";

export type IconPackStyle = "outline" | "filled" | "sharp" | "duotone";

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
  iconPack: IconPackStyle;
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
  showCardIcons: boolean;
  showTabIcons: boolean;
  showCardDescriptions: boolean;
  showCategoryBadges: boolean;
  showTrailingArrows: boolean;
  showHomeGreeting: boolean;
  showDailyWidgets: boolean;
  showOfflinePill: boolean;
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
  bgGlass?: string;
  tertiaryContainer?: string;
  onTertiaryContainer?: string;
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
  iconPack: "outline",
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
  showCardIcons: true,
  showTabIcons: true,
  showCardDescriptions: true,
  showCategoryBadges: true,
  showTrailingArrows: true,
  showHomeGreeting: true,
  showDailyWidgets: true,
  showOfflinePill: true,
};

export interface AppLookProfile {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  icon?: string;
  swatches?: [string, string, string, string];
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
      iconPack: DEFAULT_THEME_CONFIG.iconPack,
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
    tagline: "Print magazine · Kyoto newsprint · Postage stamps",
    icon: "newspaper-outline",
    swatches: ["#F6F1E7", "#FDFBF7", "#8C4A27", "#3A5F41"],
    config: {
      presetId: "sepia-parchment",
      mode: "light",
      surfaceStyle: "paper-ink",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "postage-stamp",
      iconPack: "outline",
      inputStyle: "underlined",
      buttonStyle: "outlined",
      fontPair: "editorial-serif",
      headingTransform: "none",
      numericStyle: "default",
      readingTint: "none",
      dividerStyle: "hairline",
      sectionHeaderStyle: "ruled-line",
      progressBarStyle: "thin-line",
      pillBarLayout: "index-tabs",
      pillShape: "sharp",
      pillSize: "sm",
      buttonSize: "md",
      cardPadding: "md",
      tabBarStyle: "classic",
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
    swatches: ["#F5F2EB", "#FFFFFF", "#1A1815", "#8C5E08"],
    config: {
      presetId: "nairobi-linen",
      mode: "light",
      surfaceStyle: "neo-brutal",
      cardRadius: "subtle",
      buttonRadius: "subtle",
      borderWidth: "medium",
      cardAccentStyle: "offset-edge",
      cardShadowIntensity: "none",
      iconBadgeStyle: "ceramic-tile",
      iconPack: "sharp",
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
      iconBadgeStyle: "split-disc",
      iconPack: "duotone",
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
    id: "savanna-dusk-ink",
    name: "Savanna Dusk Journal",
    tagline: "Espresso matte paper · Warm ochre · Ink seals",
    icon: "book-outline",
    swatches: ["#140C09", "#261712", "#E07A48", "#FAF0EA"],
    config: {
      presetId: "rift-valley-dawn",
      mode: "dark",
      surfaceStyle: "paper-ink",
      cardRadius: "rounded",
      buttonRadius: "subtle",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "ink-seal",
      iconPack: "filled",
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
      iconBadgeStyle: "recessed-well",
      iconPack: "outline",
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
      iconBadgeStyle: "tilted-lozenge",
      iconPack: "filled",
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
    id: "nairobi-night-express",
    name: "Nairobi Studio Dark",
    tagline: "Matte graphite & terracotta · Ceramic tiles · Sharp icons",
    icon: "flash-outline",
    swatches: ["#121315", "#1C1E21", "#E3643B", "#4CA67A"],
    config: {
      presetId: "matatu-neon",
      mode: "dark",
      oledBlack: false,
      surfaceStyle: "tonal",
      cardRadius: "subtle",
      buttonRadius: "subtle",
      borderWidth: "hairline",
      cardAccentStyle: "none",
      cardShadowIntensity: "none",
      iconBadgeStyle: "ceramic-tile",
      iconPack: "sharp",
      inputStyle: "filled",
      buttonStyle: "outlined",
      fontPair: "grotesk",
      headingTransform: "none",
      numericStyle: "tabular-mono",
      dividerStyle: "accent-fade",
      sectionHeaderStyle: "eyebrow",
      progressBarStyle: "segmented",
      pillBarLayout: "stepper",
      pillShape: "subtle",
      pillSize: "sm",
      buttonSize: "sm",
      cardPadding: "sm",
      density: "compact",
      tabBarStyle: "classic",
      tabBarLabels: true,
      tabBarSize: "sm",
      menuIndicatorStyle: "dot",
      appBarStyle: "standard",
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
  {
    id: "atlas-braun-industrial",
    name: "Braun Industrial",
    tagline: "Matte ABS chassis, signal-orange pilot LEDs & mechanical detent keys",
    badge: "CRAFT",
    config: {
      presetId: "braun-industrial",
      surfaceStyle: "braun-chassis",
      cardAccentStyle: "rivet-bezel",
      buttonStyle: "braun-keycap",
      inputStyle: "outlined",
      tabBarStyle: "braun-detent",
      appBarStyle: "braun-tuner",
      pillBarLayout: "braun-keys",
      menuIndicatorStyle: "filled-box",
      fontPair: "grotesk",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "thin",
      iconBadgeStyle: "keycap",
      iconPack: "sharp",
      horizontalScrollbarStyle: "tick-ruler",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "subtle",
      density: "compact",
      homeLayout: "bento-grid",
    },
  },
  {
    id: "atlas-swiss-grid",
    name: "Swiss Grid",
    tagline: "Zero-radius Vignelli hairlines, stark black ink & crimson index bars",
    badge: "CRAFT",
    config: {
      presetId: "swiss-grid",
      surfaceStyle: "swiss-ledger",
      cardAccentStyle: "top-bar",
      buttonStyle: "swiss-split",
      inputStyle: "swiss-ledger",
      tabBarStyle: "swiss-timetable",
      appBarStyle: "swiss-masthead",
      pillBarLayout: "swiss-index",
      menuIndicatorStyle: "underline",
      fontPair: "condensed",
      cardRadius: "square",
      buttonRadius: "square",
      borderWidth: "medium",
      iconBadgeStyle: "monochrome-ink",
      iconPack: "sharp",
      horizontalScrollbarStyle: "accent-track",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "none",
      density: "compact",
      homeLayout: "minimal-rows",
    },
  },
  {
    id: "atlas-eink-newsprint",
    name: "E-Ink Newsprint",
    tagline: "Warm electrophoretic broadsheet paper, serif folios & double ink rules",
    badge: "CRAFT",
    config: {
      presetId: "eink-newsprint",
      surfaceStyle: "paper-ink",
      cardAccentStyle: "double-rule",
      buttonStyle: "outlined",
      inputStyle: "eink-ribbon",
      tabBarStyle: "minimal",
      appBarStyle: "eink-runninghead",
      pillBarLayout: "underline-tabs",
      menuIndicatorStyle: "underline",
      fontPair: "editorial-serif",
      cardRadius: "square",
      buttonRadius: "square",
      borderWidth: "thin",
      iconBadgeStyle: "bare-glyph",
      iconPack: "outline",
      horizontalScrollbarStyle: "subtle-bar",
      numericStyle: "default",
      headingTransform: "none",
      cardShadowIntensity: "none",
      density: "relaxed",
      homeLayout: "editorial-cards",
    },
  },
  {
    id: "atlas-teenage-engineering",
    name: "Teenage Engineering",
    tagline: "Anodized aluminum field synth, dark OLED windows & vermilion step keys",
    badge: "CRAFT",
    config: {
      presetId: "teenage-engineering",
      surfaceStyle: "braun-chassis",
      cardAccentStyle: "corner-frame",
      buttonStyle: "braun-keycap",
      inputStyle: "avionics-scratchpad",
      tabBarStyle: "segmented",
      appBarStyle: "braun-tuner",
      pillBarLayout: "segmented-bar",
      menuIndicatorStyle: "dot",
      fontPair: "mono-tech",
      cardRadius: "sharp",
      buttonRadius: "pill",
      borderWidth: "thin",
      iconBadgeStyle: "recessed-well",
      iconPack: "sharp",
      horizontalScrollbarStyle: "dots",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "subtle",
      density: "compact",
      homeLayout: "bento-grid",
    },
  },
  {
    id: "atlas-risograph-print",
    name: "Risograph Print",
    tagline: "Uncoated zine cream, cobalt & vermilion soy-ink overprint & tear stubs",
    badge: "CRAFT",
    config: {
      presetId: "risograph-print",
      surfaceStyle: "riso-overprint",
      cardAccentStyle: "ticket-stub",
      buttonStyle: "riso-stamp",
      inputStyle: "outlined",
      tabBarStyle: "docked-cards",
      appBarStyle: "accent-tinted",
      pillBarLayout: "manila-folders",
      menuIndicatorStyle: "bracket",
      fontPair: "mono-tech",
      cardRadius: "square",
      buttonRadius: "square",
      borderWidth: "thick",
      iconBadgeStyle: "postage-stamp",
      iconPack: "duotone",
      horizontalScrollbarStyle: "accent-track",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "crisp-3d",
      density: "balanced",
      homeLayout: "editorial-cards",
    },
  },
  {
    id: "atlas-mechanical-horology",
    name: "Mechanical Horology",
    tagline: "Brushed gunmetal bezels, antique brass hairlines & vernier caliper loupe",
    badge: "CRAFT",
    config: {
      presetId: "mechanical-horology",
      surfaceStyle: "horology-bezel",
      cardAccentStyle: "double-rule",
      buttonStyle: "elevated",
      inputStyle: "outlined",
      tabBarStyle: "top-accent",
      appBarStyle: "tall-editorial",
      pillBarLayout: "underline-tabs",
      menuIndicatorStyle: "vernier-loupe",
      fontPair: "editorial-serif",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "thin",
      iconBadgeStyle: "monogram-frame",
      iconPack: "outline",
      horizontalScrollbarStyle: "tick-ruler",
      numericStyle: "tabular-mono",
      headingTransform: "capitalize",
      cardShadowIntensity: "medium",
      density: "comfortable",
      homeLayout: "classic",
    },
  },
  {
    id: "atlas-japanese-washi",
    name: "Japanese Washi",
    tagline: "Unbleached kozo stationery, vermilion hanko seals & quiet indigo rules",
    badge: "CRAFT",
    config: {
      presetId: "japanese-washi",
      surfaceStyle: "paper-ink",
      cardAccentStyle: "hanko-corner",
      buttonStyle: "washi-seal",
      inputStyle: "underlined",
      tabBarStyle: "minimal",
      appBarStyle: "eink-runninghead",
      pillBarLayout: "manila-folders",
      menuIndicatorStyle: "hanko-seal",
      fontPair: "editorial-serif",
      cardRadius: "subtle",
      buttonRadius: "sharp",
      borderWidth: "hairline",
      iconBadgeStyle: "ink-seal",
      iconPack: "outline",
      horizontalScrollbarStyle: "subtle-bar",
      numericStyle: "default",
      headingTransform: "none",
      cardShadowIntensity: "none",
      density: "relaxed",
      homeLayout: "editorial-cards",
    },
  },
  {
    id: "atlas-architectural-brutalism",
    name: "Architectural Brutalism",
    tagline: "Board-formed travertine slabs, heavy ink borders & terracotta plinths",
    badge: "CRAFT",
    config: {
      presetId: "architectural-brutalism",
      surfaceStyle: "neo-brutal",
      cardAccentStyle: "plinth-slab",
      buttonStyle: "swiss-split",
      inputStyle: "swiss-ledger",
      tabBarStyle: "docked-cards",
      appBarStyle: "swiss-masthead",
      pillBarLayout: "swiss-index",
      menuIndicatorStyle: "plinth-lift",
      fontPair: "condensed",
      cardRadius: "square",
      buttonRadius: "square",
      borderWidth: "bold",
      iconBadgeStyle: "monochrome-ink",
      iconPack: "filled",
      horizontalScrollbarStyle: "accent-track",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "crisp-3d",
      density: "balanced",
      homeLayout: "large-tiles",
    },
  },
  {
    id: "atlas-vintage-avionics",
    name: "Vintage Avionics",
    tagline: "Matte flight-deck bezels, phosphor-amber telemetry & Solari split-flaps",
    badge: "CRAFT",
    config: {
      presetId: "vintage-avionics",
      surfaceStyle: "avionics-panel",
      cardAccentStyle: "split-flap",
      buttonStyle: "avionics-guard",
      inputStyle: "avionics-scratchpad",
      tabBarStyle: "solari-flap",
      appBarStyle: "avionics-strip",
      pillBarLayout: "braun-keys",
      menuIndicatorStyle: "vernier-loupe",
      fontPair: "mono-tech",
      cardRadius: "sharp",
      buttonRadius: "sharp",
      borderWidth: "medium",
      iconBadgeStyle: "recessed-well",
      iconPack: "sharp",
      horizontalScrollbarStyle: "tick-ruler",
      numericStyle: "tabular-mono",
      headingTransform: "uppercase",
      cardShadowIntensity: "subtle",
      density: "compact",
      homeLayout: "bento-grid",
    },
  },
  {
    id: "atlas-ceramic-tactile",
    name: "Ceramic Tactile",
    tagline: "Kiln-glazed stoneware wells, celadon sage & sculpted porcelain pebbles",
    badge: "CRAFT",
    config: {
      presetId: "ceramic-tactile",
      surfaceStyle: "ceramic-glaze",
      cardAccentStyle: "tinted-border",
      buttonStyle: "elevated",
      inputStyle: "ceramic-basin",
      tabBarStyle: "porcelain-wells",
      appBarStyle: "floating",
      pillBarLayout: "scroll-with-expand",
      menuIndicatorStyle: "pill",
      fontPair: "humanist",
      cardRadius: "soft",
      buttonRadius: "soft",
      borderWidth: "thin",
      iconBadgeStyle: "ceramic-tile",
      iconPack: "duotone",
      horizontalScrollbarStyle: "dots",
      numericStyle: "default",
      headingTransform: "none",
      cardShadowIntensity: "subtle",
      density: "relaxed",
      homeLayout: "large-tiles",
    },
  },
];

export const PRESET_SIGNATURE_LOOKS: Record<string, Partial<ThemeConfig>> = {
  "kenyan-heritage": {
    surfaceStyle: "elevated", fontPair: "outfit-inter", cardRadius: "rounded", buttonRadius: "rounded",
    borderWidth: "thin", buttonStyle: "filled", inputStyle: "outlined", tabBarStyle: "classic",
    menuIndicatorStyle: "pill", pillBarLayout: "scroll-with-expand", iconBadgeStyle: "soft-circle",
    iconPack: "outline", cardAccentStyle: "none", appBarStyle: "standard", homeLayout: "classic",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "none", headingTransform: "none",
    numericStyle: "default", density: "comfortable", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "amoled-pitch": {
    oledBlack: true, surfaceStyle: "inset-tray", fontPair: "mono-tech", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "thin", buttonStyle: "keycap-press", inputStyle: "filled", tabBarStyle: "floating-pill",
    menuIndicatorStyle: "bracket", pillBarLayout: "compact-scroll", iconBadgeStyle: "recessed-well",
    iconPack: "sharp", cardAccentStyle: "none", appBarStyle: "borderless", homeLayout: "compact-list",
    horizontalScrollbarStyle: "tick-ruler", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "compact", cardShadowIntensity: "none",
  },
  "rift-valley-dawn": {
    surfaceStyle: "paper-ink", fontPair: "editorial-serif", cardRadius: "soft", buttonRadius: "soft",
    borderWidth: "hairline", buttonStyle: "editorial-link", inputStyle: "underlined", tabBarStyle: "minimal",
    menuIndicatorStyle: "underline", pillBarLayout: "underline-tabs", iconBadgeStyle: "ink-seal",
    iconPack: "outline", cardAccentStyle: "double-rule", appBarStyle: "tall-editorial", homeLayout: "editorial-cards",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "warm-paper", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "none", oledBlack: false,
  },
  "coastal-lamu": {
    surfaceStyle: "inset-tray", fontPair: "humanist", cardRadius: "pill", buttonRadius: "pill",
    borderWidth: "thin", buttonStyle: "tinted", inputStyle: "pill", tabBarStyle: "floating-pill",
    menuIndicatorStyle: "dot", pillBarLayout: "floating-dock", iconBadgeStyle: "ceramic-tile",
    iconPack: "duotone", cardAccentStyle: "none", appBarStyle: "floating", homeLayout: "bento-grid",
    horizontalScrollbarStyle: "dots", readingTint: "cool-slate", headingTransform: "none",
    numericStyle: "default", density: "comfortable", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "mount-kenya-mist": {
    surfaceStyle: "glass", fontPair: "classic-sans", cardRadius: "soft", buttonRadius: "pill",
    borderWidth: "hairline", buttonStyle: "outlined", inputStyle: "minimal", tabBarStyle: "minimal",
    menuIndicatorStyle: "dot", pillBarLayout: "minimal-text", iconBadgeStyle: "split-disc",
    iconPack: "outline", cardAccentStyle: "none", appBarStyle: "borderless", homeLayout: "minimal-rows",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "cool-slate", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "sepia-parchment": {
    surfaceStyle: "paper-ink", fontPair: "editorial-serif", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "hairline", buttonStyle: "editorial-link", inputStyle: "underlined", tabBarStyle: "classic",
    menuIndicatorStyle: "underline", pillBarLayout: "index-tabs", iconBadgeStyle: "postage-stamp",
    iconPack: "outline", cardAccentStyle: "double-rule", appBarStyle: "tall-editorial", homeLayout: "editorial-cards",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "soft-sepia", headingTransform: "none",
    numericStyle: "default", density: "comfortable", cardShadowIntensity: "none", sectionHeaderStyle: "ruled-line", oledBlack: false,
  },
  "safari-olive": {
    surfaceStyle: "neo-brutal", fontPair: "mono-tech", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "medium", buttonStyle: "keycap-press", inputStyle: "filled", tabBarStyle: "segmented",
    menuIndicatorStyle: "filled-box", pillBarLayout: "two-col-grid", iconBadgeStyle: "recessed-well",
    iconPack: "sharp", cardAccentStyle: "none", appBarStyle: "compact", homeLayout: "compact-list",
    horizontalScrollbarStyle: "tick-ruler", headingTransform: "uppercase", numericStyle: "tabular-mono",
    density: "compact", cardShadowIntensity: "crisp-3d", oledBlack: false,
  },
  "sakura-rose": {
    surfaceStyle: "elevated", fontPair: "casual", cardRadius: "pill", buttonRadius: "pill",
    borderWidth: "thin", buttonStyle: "tinted", inputStyle: "pill", tabBarStyle: "floating-pill",
    menuIndicatorStyle: "dot", pillBarLayout: "floating-dock", iconBadgeStyle: "ceramic-tile",
    iconPack: "duotone", cardAccentStyle: "none", appBarStyle: "floating", homeLayout: "large-tiles",
    horizontalScrollbarStyle: "dots", readingTint: "none", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "naivasha-mist": {
    surfaceStyle: "frameless", fontPair: "classic-sans", cardRadius: "subtle", buttonRadius: "subtle",
    borderWidth: "hairline", buttonStyle: "unboxed-text", inputStyle: "unboxed", tabBarStyle: "minimal",
    menuIndicatorStyle: "underline", pillBarLayout: "minimal-text", iconBadgeStyle: "bare-glyph",
    iconPack: "outline", cardAccentStyle: "none", appBarStyle: "borderless", homeLayout: "minimal-rows",
    horizontalScrollbarStyle: "hidden", readingTint: "none", headingTransform: "none",
    numericStyle: "default", density: "spacious", cardShadowIntensity: "none", oledBlack: false,
  },
  "nairobi-linen": {
    surfaceStyle: "crisp", fontPair: "grotesk", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "thin", buttonStyle: "keycap-press", inputStyle: "filled", tabBarStyle: "compact",
    menuIndicatorStyle: "outline", pillBarLayout: "index-tabs", iconBadgeStyle: "recessed-well",
    iconPack: "sharp", cardAccentStyle: "none", appBarStyle: "compact", homeLayout: "compact-list",
    horizontalScrollbarStyle: "tick-ruler", headingTransform: "uppercase", numericStyle: "tabular-mono",
    density: "compact", cardShadowIntensity: "none", oledBlack: false,
  },
  "maasai-shuka": {
    surfaceStyle: "outlined", fontPair: "geometric", cardRadius: "subtle", buttonRadius: "subtle",
    borderWidth: "bold", buttonStyle: "filled", inputStyle: "accent", tabBarStyle: "docked-cards",
    menuIndicatorStyle: "filled-box", pillBarLayout: "three-col-tiles", iconBadgeStyle: "tilted-lozenge",
    iconPack: "filled", cardAccentStyle: "offset-edge", appBarStyle: "accent-tinted", homeLayout: "large-tiles",
    horizontalScrollbarStyle: "accent-track", accentIntensity: "vivid", headingTransform: "none",
    numericStyle: "default", density: "comfortable", cardShadowIntensity: "medium", oledBlack: false,
  },
  "matatu-neon": {
    surfaceStyle: "tonal", fontPair: "mono-tech", cardRadius: "rounded", buttonRadius: "pill",
    borderWidth: "medium", buttonStyle: "filled", inputStyle: "accent", tabBarStyle: "top-accent",
    menuIndicatorStyle: "bracket", pillBarLayout: "floating-dock", iconBadgeStyle: "tilted-lozenge",
    iconPack: "duotone", cardAccentStyle: "offset-edge", appBarStyle: "accent-tinted", homeLayout: "bento-grid",
    horizontalScrollbarStyle: "tick-ruler", accentIntensity: "vivid", headingTransform: "none",
    numericStyle: "tabular-mono", density: "balanced", cardShadowIntensity: "strong", oledBlack: false,
  },
  "braun-industrial": {
    surfaceStyle: "braun-chassis", fontPair: "grotesk", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "thin", buttonStyle: "braun-keycap", inputStyle: "outlined", tabBarStyle: "braun-detent",
    menuIndicatorStyle: "filled-box", pillBarLayout: "braun-keys", iconBadgeStyle: "keycap",
    iconPack: "sharp", cardAccentStyle: "rivet-bezel", appBarStyle: "braun-tuner", homeLayout: "bento-grid",
    horizontalScrollbarStyle: "tick-ruler", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "compact", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "swiss-grid": {
    surfaceStyle: "swiss-ledger", fontPair: "condensed", cardRadius: "square", buttonRadius: "square",
    borderWidth: "medium", buttonStyle: "swiss-split", inputStyle: "swiss-ledger", tabBarStyle: "swiss-timetable",
    menuIndicatorStyle: "underline", pillBarLayout: "swiss-index", iconBadgeStyle: "monochrome-ink",
    iconPack: "sharp", cardAccentStyle: "top-bar", appBarStyle: "swiss-masthead", homeLayout: "minimal-rows",
    horizontalScrollbarStyle: "accent-track", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "compact", cardShadowIntensity: "none", oledBlack: false,
  },
  "eink-newsprint": {
    surfaceStyle: "paper-ink", fontPair: "editorial-serif", cardRadius: "square", buttonRadius: "square",
    borderWidth: "thin", buttonStyle: "outlined", inputStyle: "eink-ribbon", tabBarStyle: "minimal",
    menuIndicatorStyle: "underline", pillBarLayout: "underline-tabs", iconBadgeStyle: "bare-glyph",
    iconPack: "outline", cardAccentStyle: "double-rule", appBarStyle: "eink-runninghead", homeLayout: "editorial-cards",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "warm-paper", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "none", oledBlack: false,
  },
  "teenage-engineering": {
    surfaceStyle: "braun-chassis", fontPair: "mono-tech", cardRadius: "sharp", buttonRadius: "pill",
    borderWidth: "thin", buttonStyle: "braun-keycap", inputStyle: "avionics-scratchpad", tabBarStyle: "segmented",
    menuIndicatorStyle: "dot", pillBarLayout: "segmented-bar", iconBadgeStyle: "recessed-well",
    iconPack: "sharp", cardAccentStyle: "corner-frame", appBarStyle: "braun-tuner", homeLayout: "bento-grid",
    horizontalScrollbarStyle: "dots", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "compact", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "risograph-print": {
    surfaceStyle: "riso-overprint", fontPair: "mono-tech", cardRadius: "square", buttonRadius: "square",
    borderWidth: "thick", buttonStyle: "riso-stamp", inputStyle: "outlined", tabBarStyle: "docked-cards",
    menuIndicatorStyle: "bracket", pillBarLayout: "manila-folders", iconBadgeStyle: "postage-stamp",
    iconPack: "duotone", cardAccentStyle: "ticket-stub", appBarStyle: "accent-tinted", homeLayout: "editorial-cards",
    horizontalScrollbarStyle: "accent-track", readingTint: "warm-paper", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "balanced", cardShadowIntensity: "crisp-3d", oledBlack: false,
  },
  "mechanical-horology": {
    surfaceStyle: "horology-bezel", fontPair: "editorial-serif", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "thin", buttonStyle: "elevated", inputStyle: "outlined", tabBarStyle: "top-accent",
    menuIndicatorStyle: "vernier-loupe", pillBarLayout: "underline-tabs", iconBadgeStyle: "monogram-frame",
    iconPack: "outline", cardAccentStyle: "double-rule", appBarStyle: "tall-editorial", homeLayout: "classic",
    horizontalScrollbarStyle: "tick-ruler", readingTint: "none", headingTransform: "capitalize",
    numericStyle: "tabular-mono", density: "comfortable", cardShadowIntensity: "medium", oledBlack: false,
  },
  "japanese-washi": {
    surfaceStyle: "paper-ink", fontPair: "editorial-serif", cardRadius: "subtle", buttonRadius: "sharp",
    borderWidth: "hairline", buttonStyle: "washi-seal", inputStyle: "underlined", tabBarStyle: "minimal",
    menuIndicatorStyle: "hanko-seal", pillBarLayout: "manila-folders", iconBadgeStyle: "ink-seal",
    iconPack: "outline", cardAccentStyle: "hanko-corner", appBarStyle: "eink-runninghead", homeLayout: "editorial-cards",
    horizontalScrollbarStyle: "subtle-bar", readingTint: "warm-paper", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "none", oledBlack: false,
  },
  "architectural-brutalism": {
    surfaceStyle: "neo-brutal", fontPair: "condensed", cardRadius: "square", buttonRadius: "square",
    borderWidth: "bold", buttonStyle: "swiss-split", inputStyle: "swiss-ledger", tabBarStyle: "docked-cards",
    menuIndicatorStyle: "plinth-lift", pillBarLayout: "swiss-index", iconBadgeStyle: "monochrome-ink",
    iconPack: "filled", cardAccentStyle: "plinth-slab", appBarStyle: "swiss-masthead", homeLayout: "large-tiles",
    horizontalScrollbarStyle: "accent-track", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "balanced", cardShadowIntensity: "crisp-3d", oledBlack: false,
  },
  "vintage-avionics": {
    surfaceStyle: "avionics-panel", fontPair: "mono-tech", cardRadius: "sharp", buttonRadius: "sharp",
    borderWidth: "medium", buttonStyle: "avionics-guard", inputStyle: "avionics-scratchpad", tabBarStyle: "solari-flap",
    menuIndicatorStyle: "vernier-loupe", pillBarLayout: "braun-keys", iconBadgeStyle: "recessed-well",
    iconPack: "sharp", cardAccentStyle: "split-flap", appBarStyle: "avionics-strip", homeLayout: "bento-grid",
    horizontalScrollbarStyle: "tick-ruler", readingTint: "none", headingTransform: "uppercase",
    numericStyle: "tabular-mono", density: "compact", cardShadowIntensity: "subtle", oledBlack: false,
  },
  "ceramic-tactile": {
    surfaceStyle: "ceramic-glaze", fontPair: "humanist", cardRadius: "soft", buttonRadius: "soft",
    borderWidth: "thin", buttonStyle: "elevated", inputStyle: "ceramic-basin", tabBarStyle: "porcelain-wells",
    menuIndicatorStyle: "pill", pillBarLayout: "scroll-with-expand", iconBadgeStyle: "ceramic-tile",
    iconPack: "duotone", cardAccentStyle: "tinted-border", appBarStyle: "floating", homeLayout: "large-tiles",
    horizontalScrollbarStyle: "dots", readingTint: "warm-paper", headingTransform: "none",
    numericStyle: "default", density: "relaxed", cardShadowIntensity: "subtle", oledBlack: false,
  },
};

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "kenyan-heritage",
    name: "Kenyan Heritage",
    tagline: "Savanna Cream & Obsidian Gold/Green",
    recommendedMode: "light",
    swatches: ["#0E0C0A", "#FAF7F2", "#C8961E", "#006B3F"],
    dark: {},
    light: {
      gold: "#8F6500",
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
      gold: "#B54E22",
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
      bgPrimary: "#05171A",
      bgSecondary: "#0E1D21",
      bgCard: "#0E2D32",
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
      bgPrimary: "#EDF6F8",
      bgSecondary: "#E9F1F3",
      bgCard: "#F9FEFF",
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
      kenyaGreenLight: "#0F7E82",
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
    swatches: ["#0F141A", "#F4F7FA", "#4B8FCC", "#1B7B4F"],
    dark: {
      bgPrimary: "#0C151A",
      bgSecondary: "#121821",
      bgCard: "#192831",
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
      kenyaGreen: "#1B7B4F",
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
      bgPrimary: "#EAEFF6",
      bgSecondary: "#E8EEF5",
      bgCard: "#F7FAFE",
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
      kenyaGreenLight: "#1B7B4F",
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
    id: "sepia-parchment",
    name: "Kyoto Newsprint",
    tagline: "Warm Newsprint, Burnt Umber & Cedar",
    recommendedMode: "light",
    swatches: ["#F6F1E7", "#FDFBF7", "#8C4A27", "#3A5F41"],
    dark: {
      bgPrimary: "#161411",
      bgSecondary: "#1B1915",
      bgCard: "#201D18",
      bgCardHover: "#29251F",
      bgElevated: "#302C25",
      surface: "#201D18",
      surfaceContainerLowest: "#0F0E0C",
      surfaceContainerLow: "#1B1814",
      surfaceContainer: "#201D18",
      surfaceContainerHigh: "#2A2620",
      surfaceContainerHighest: "#353029",
      gold: "#D4885C",
      goldLight: "#E8A984",
      kenyaGreen: "#6BA375",
      kenyaGreenLight: "#90C499",
      primaryContainer: "rgba(212, 136, 92, 0.16)",
      onPrimaryContainer: "#FAD9C5",
      secondaryContainer: "rgba(107, 163, 117, 0.16)",
      onSecondaryContainer: "#C8E8CE",
      border: "#423C33",
      borderLight: "#544C41",
      borderAccent: "#696052",
      outline: "#786E5F",
      outlineVariant: "#423C33",
      textPrimary: "#EFEAE0",
      text: "#EFEAE0",
      textSecondary: "#B8B0A2",
      textMuted: "#968E80",
      rippleColor: "rgba(212, 136, 92, 0.16)",
    },
    light: {
      bgPrimary: "#F6F1E7",
      bgSecondary: "#EDE6D9",
      bgCard: "#FBF5E6",
      bgCardHover: "#F4EFE5",
      bgElevated: "#E6DEC8",
      surface: "#FDFBF7",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F3EDE2",
      surfaceContainer: "#EBE3D5",
      surfaceContainerHigh: "#E2D9C9",
      surfaceContainerHighest: "#D8CEBC",
      gold: "#8C4A27",
      goldLight: "#B06238",
      kenyaGreen: "#3A5F41",
      kenyaGreenLight: "#42714C",
      primaryContainer: "rgba(140, 74, 39, 0.13)",
      onPrimaryContainer: "#45210E",
      secondaryContainer: "rgba(58, 95, 65, 0.12)",
      onSecondaryContainer: "#1B3320",
      border: "#CEC5B6",
      borderLight: "#B8AEA0",
      borderAccent: "#9E9486",
      outline: "#8F8577",
      outlineVariant: "#CEC5B6",
      textPrimary: "#1F1B16",
      text: "#1F1B16",
      textSecondary: "#574E43",
      textMuted: "#6B6154",
      rippleColor: "rgba(140, 74, 39, 0.12)",
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
      kenyaGreen: "#527029",
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
      bgCard: "#F9FCF0",
      bgCardHover: "#F2F3E6",
      bgElevated: "#E3E5D1",
      surface: "#FCFDF7",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F3F4E8",
      surfaceContainer: "#EAEBD9",
      surfaceContainerHigh: "#E0E2CD",
      surfaceContainerHighest: "#D5D8BF",
      gold: "#8C5E08",
      goldLight: "#CC8F21",
      kenyaGreen: "#526E2B",
      kenyaGreenLight: "#527029",
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
    id: "sakura-rose",
    name: "Bougainvillea Clay",
    tagline: "Sunbaked Clay, Bougainvillea & Eucalyptus",
    recommendedMode: "light",
    swatches: ["#FAF5F4", "#FFFFFF", "#A63D55", "#2A6B54"],
    dark: {
      bgPrimary: "#1C0E16",
      bgSecondary: "#1B1417",
      bgCard: "#2A1622",
      bgCardHover: "#291F23",
      bgElevated: "#302429",
      surface: "#20181B",
      surfaceContainerLowest: "#0E0A0C",
      surfaceContainerLow: "#1A1316",
      surfaceContainer: "#20181B",
      surfaceContainerHigh: "#2B2025",
      surfaceContainerHighest: "#36292F",
      gold: "#E07890",
      goldLight: "#F29EB1",
      kenyaGreen: "#64B396",
      kenyaGreenLight: "#8BD1B7",
      sky: "#B380AD",
      skyLight: "#CFA2C9",
      primaryContainer: "rgba(224, 120, 144, 0.16)",
      onPrimaryContainer: "#FFD6DF",
      secondaryContainer: "rgba(100, 179, 150, 0.16)",
      onSecondaryContainer: "#C7F0E1",
      border: "#45363B",
      borderLight: "#59464D",
      borderAccent: "#6E5860",
      outline: "#7D666E",
      outlineVariant: "#45363B",
      textPrimary: "#F5ECEE",
      text: "#F5ECEE",
      textSecondary: "#C4B1B6",
      textMuted: "#A18E93",
      rippleColor: "rgba(224, 120, 144, 0.16)",
    },
    light: {
      bgPrimary: "#FCF2F4",
      bgSecondary: "#F1E9E8",
      bgCard: "#FFF9FA",
      bgCardHover: "#F7F0EF",
      bgElevated: "#EAE0DF",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4ECEB",
      surfaceContainer: "#ECE3E2",
      surfaceContainerHigh: "#E4D9D8",
      surfaceContainerHighest: "#DBCECD",
      gold: "#A63D55",
      goldLight: "#C75670",
      kenyaGreen: "#2A6B54",
      kenyaGreenLight: "#29765B",
      sky: "#6E4A6B",
      skyLight: "#8C6288",
      primaryContainer: "rgba(166, 61, 85, 0.12)",
      onPrimaryContainer: "#4F1624",
      secondaryContainer: "rgba(42, 107, 84, 0.12)",
      onSecondaryContainer: "#10382A",
      border: "#D1C1C4",
      borderLight: "#BCA9AD",
      borderAccent: "#A38E92",
      outline: "#948084",
      outlineVariant: "#D1C1C4",
      textPrimary: "#231618",
      text: "#231618",
      textSecondary: "#5E484C",
      textMuted: "#735C60",
      rippleColor: "rgba(166, 61, 85, 0.12)",
    },
  },
  {
    id: "naivasha-mist",
    name: "Washi Slate",
    tagline: "Handmade Washi, Slate Blue & Pine",
    recommendedMode: "light",
    swatches: ["#F4F4F0", "#FDFDFB", "#355C7D", "#2E6B56"],
    dark: {
      bgPrimary: "#111414",
      bgSecondary: "#161A1A",
      bgCard: "#1A1F1F",
      bgCardHover: "#222828",
      bgElevated: "#283030",
      surface: "#1A1F1F",
      surfaceContainerLowest: "#0B0D0D",
      surfaceContainerLow: "#151919",
      surfaceContainer: "#1A1F1F",
      surfaceContainerHigh: "#232A2A",
      surfaceContainerHighest: "#2D3535",
      gold: "#74A5CC",
      goldLight: "#9CC2E0",
      sky: "#74A5CC",
      skyLight: "#9CC2E0",
      kenyaGreen: "#5EB091",
      kenyaGreenLight: "#85CCA9",
      primaryContainer: "rgba(116, 165, 204, 0.16)",
      onPrimaryContainer: "#CDE4F5",
      secondaryContainer: "rgba(94, 176, 145, 0.16)",
      onSecondaryContainer: "#C2EDE0",
      border: "#323B3B",
      borderLight: "#424E4E",
      borderAccent: "#546363",
      outline: "#637373",
      outlineVariant: "#323B3B",
      textPrimary: "#ECEFE9",
      text: "#ECEFE9",
      textSecondary: "#AAB3AC",
      textMuted: "#8A948C",
      rippleColor: "rgba(116, 165, 204, 0.16)",
    },
    light: {
      bgPrimary: "#F4F4F0",
      bgSecondary: "#EAEAE4",
      bgCard: "#F6FAF8",
      bgCardHover: "#F2F2ED",
      bgElevated: "#E3E3DC",
      surface: "#FDFDFB",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F0F0EB",
      surfaceContainer: "#E7E8E2",
      surfaceContainerHigh: "#DEDFD8",
      surfaceContainerHighest: "#D4D6CE",
      gold: "#355C7D",
      goldLight: "#4B789E",
      sky: "#355C7D",
      skyLight: "#4B789E",
      kenyaGreen: "#2E6B56",
      kenyaGreenLight: "#2C755C",
      primaryContainer: "rgba(53, 92, 125, 0.13)",
      onPrimaryContainer: "#162C40",
      secondaryContainer: "rgba(46, 107, 86, 0.12)",
      onSecondaryContainer: "#123629",
      border: "#C7CAC4",
      borderLight: "#B1B5AE",
      borderAccent: "#989D95",
      outline: "#8A8F87",
      outlineVariant: "#C7CAC4",
      textPrimary: "#1C1E1C",
      text: "#1C1E1C",
      textSecondary: "#525752",
      textMuted: "#686E68",
      rippleColor: "rgba(53, 92, 125, 0.12)",
    },
  },
  {
    id: "nairobi-linen",
    name: "Nairobi Linen",
    tagline: "Sunlit Warm Plaster, Espresso & Terracotta",
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
      bgPrimary: "#F5F1EB",
      bgSecondary: "#F2EEE8",
      bgCard: "#FDFBF8",
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
      kenyaGreenLight: "#287549",
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
      bgPrimary: "#FDF3F0",
      bgSecondary: "#F3E7E5",
      bgCard: "#FFF8F6",
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
      kenyaGreenLight: "#047854",
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
    id: "matatu-neon",
    name: "Signal Graphite",
    tagline: "Matte Graphite, Signal Terracotta & Sage",
    recommendedMode: "dark",
    swatches: ["#121315", "#1C1E21", "#E3643B", "#4CA67A"],
    dark: {
      bgPrimary: "#0B0F18",
      bgSecondary: "#111724",
      bgCard: "#171F30",
      bgCardHover: "#23262A",
      bgElevated: "#292C31",
      surface: "#1C1E21",
      surfaceContainerLowest: "#0C0D0E",
      surfaceContainerLow: "#16181B",
      surfaceContainer: "#1C1E21",
      surfaceContainerHigh: "#24272B",
      surfaceContainerHighest: "#2E3137",
      gold: "#E3643B",
      goldLight: "#F28B6B",
      kenyaGreen: "#4CA67A",
      kenyaGreenLight: "#76C7A0",
      primaryContainer: "rgba(227, 100, 59, 0.14)",
      onPrimaryContainer: "#FFD5C7",
      secondaryContainer: "rgba(76, 166, 122, 0.16)",
      onSecondaryContainer: "#BCEBD4",
      border: "#34373D",
      borderLight: "#454952",
      borderAccent: "#585D68",
      outline: "#666B78",
      outlineVariant: "#34373D",
      textPrimary: "#F2F0EC",
      text: "#F2F0EC",
      textSecondary: "#B0AEA8",
      textMuted: "#8F8D87",
      rippleColor: "rgba(227, 100, 59, 0.16)",
    },
    light: {
      bgPrimary: "#F0F1F4",
      bgSecondary: "#EAE7E0",
      bgCard: "#F8F9FB",
      bgCardHover: "#F2F0EB",
      bgElevated: "#E5E1D9",
      surface: "#FFFFFF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFECE6",
      surfaceContainer: "#E8E4DC",
      surfaceContainerHigh: "#E0DCD3",
      surfaceContainerHighest: "#D6D1C7",
      gold: "#B8401C",
      goldLight: "#D65A34",
      kenyaGreen: "#1F6E4A",
      kenyaGreenLight: "#1F764F",
      primaryContainer: "rgba(184, 64, 28, 0.12)",
      onPrimaryContainer: "#521A08",
      secondaryContainer: "rgba(31, 110, 74, 0.12)",
      onSecondaryContainer: "#0D3824",
      border: "#C8C4BC",
      borderLight: "#B3AEA5",
      borderAccent: "#99948B",
      outline: "#8C877E",
      outlineVariant: "#C8C4BC",
      textPrimary: "#18181A",
      text: "#18181A",
      textSecondary: "#525256",
      textMuted: "#68686E",
      rippleColor: "rgba(184, 64, 28, 0.12)",
    },
  },
  {
    id: "braun-industrial",
    name: "Braun Industrial",
    tagline: "Matte ABS Chassis & Signal Orange",
    recommendedMode: "light",
    swatches: ["#E5E4DF", "#2B2B28", "#E05A2B", "#2D7A46"],
    dark: {
      gold: "#F27348",
      goldLight: "#FF9873",
      kenyaGreen: "#3FA663",
      kenyaGreenLight: "#65C987",
      sky: "#5AA9E6",
      skyLight: "#8AC7F5",
      bgPrimary: "#141412",
      bgSecondary: "#1D1D1A",
      bgCard: "#242420",
      bgElevated: "#2D2D28",
      bgGlass: "rgba(36, 36, 32, 0.90)",
      surfaceContainerLowest: "#0D0D0B",
      surfaceContainerLow: "#1B1B18",
      surfaceContainer: "#242420",
      surfaceContainerHigh: "#2E2E29",
      surfaceContainerHighest: "#383832",
      primaryContainer: "#4A2112",
      onPrimaryContainer: "#FFD7C7",
      secondaryContainer: "#153622",
      onSecondaryContainer: "#BDF0CD",
      tertiaryContainer: "#163047",
      onTertiaryContainer: "#CCE7FF",
      outline: "#6E6D64",
      outlineVariant: "#3D3D36",
      textPrimary: "#F5F4EF",
      textSecondary: "#C8C6BC",
      textMuted: "#9A988E",
      border: "#3D3D36",
      borderLight: "#525149",
      borderAccent: "rgba(242, 115, 72, 0.42)",
      rippleColor: "rgba(242, 115, 72, 0.18)",
    },
    light: {
      gold: "#C44518",
      goldLight: "#E05A2B",
      kenyaGreen: "#1F6E3B",
      kenyaGreenLight: "#2D8A4E",
      sky: "#1B669E",
      skyLight: "#3384C2",
      bgPrimary: "#ECEBE6",
      bgSecondary: "#E2E0D9",
      bgCard: "#F6F5F0",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(246, 245, 240, 0.92)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#E5E4DF",
      surfaceContainer: "#F4F3EE",
      surfaceContainerHigh: "#DCDAD3",
      surfaceContainerHighest: "#D2D0C8",
      primaryContainer: "#FDE2D6",
      onPrimaryContainer: "#5C1B05",
      secondaryContainer: "#D4EFE0",
      onSecondaryContainer: "#0C3B1E",
      tertiaryContainer: "#D6E9F8",
      onTertiaryContainer: "#0C3352",
      outline: "#8C8A80",
      outlineVariant: "#BEBCAF",
      textPrimary: "#1E1E1B",
      textSecondary: "#4A4943",
      textMuted: "#65645C",
      border: "#B9B7AE",
      borderLight: "#CFCDBB",
      borderAccent: "rgba(196, 69, 24, 0.36)",
      rippleColor: "rgba(196, 69, 24, 0.14)",
    },
  },
  {
    id: "swiss-grid",
    name: "Swiss Grid",
    tagline: "Vignelli Hairlines & Signal Red",
    recommendedMode: "light",
    swatches: ["#FFFFFF", "#111111", "#D92B2B", "#1B4B8A"],
    dark: {
      gold: "#FF5C52",
      goldLight: "#FF8982",
      kenyaGreen: "#3EB46A",
      kenyaGreenLight: "#65CF8B",
      sky: "#5EA3F0",
      skyLight: "#8EC0FA",
      bgPrimary: "#0D0D0D",
      bgSecondary: "#151515",
      bgCard: "#1C1C1C",
      bgElevated: "#242424",
      bgGlass: "rgba(28, 28, 28, 0.92)",
      surfaceContainerLowest: "#050505",
      surfaceContainerLow: "#141414",
      surfaceContainer: "#1C1C1C",
      surfaceContainerHigh: "#262626",
      surfaceContainerHighest: "#303030",
      primaryContainer: "#4F1210",
      onPrimaryContainer: "#FFD6D4",
      secondaryContainer: "#123620",
      onSecondaryContainer: "#C0F2D1",
      tertiaryContainer: "#132E4D",
      onTertiaryContainer: "#CFE5FF",
      outline: "#787878",
      outlineVariant: "#383838",
      textPrimary: "#FAFAFA",
      textSecondary: "#CCCCCC",
      textMuted: "#9A9A9A",
      border: "#383838",
      borderLight: "#525252",
      borderAccent: "rgba(255, 92, 82, 0.45)",
      rippleColor: "rgba(255, 92, 82, 0.2)",
    },
    light: {
      gold: "#C81E1E",
      goldLight: "#E03124",
      kenyaGreen: "#176B37",
      kenyaGreenLight: "#25874A",
      sky: "#1B4B8A",
      skyLight: "#2E6BB8",
      bgPrimary: "#F8F8F6",
      bgSecondary: "#EFEFED",
      bgCard: "#FFFFFF",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(255, 255, 255, 0.95)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4F4F2",
      surfaceContainer: "#FFFFFF",
      surfaceContainerHigh: "#E8E8E5",
      surfaceContainerHighest: "#DDDDDA",
      primaryContainer: "#FDE0DE",
      onPrimaryContainer: "#5C0909",
      secondaryContainer: "#D6F2E0",
      onSecondaryContainer: "#08381A",
      tertiaryContainer: "#D9E7F8",
      onTertiaryContainer: "#0B274D",
      outline: "#4A4A4A",
      outlineVariant: "#C8C8C4",
      textPrimary: "#111111",
      textSecondary: "#3D3D3D",
      textMuted: "#5E5E5E",
      border: "#111111",
      borderLight: "#CCCCCC",
      borderAccent: "rgba(200, 30, 30, 0.35)",
      rippleColor: "rgba(200, 30, 30, 0.14)",
    },
  },
  {
    id: "eink-newsprint",
    name: "E-Ink Newsprint",
    tagline: "Broadsheet Paper & 1-Bit Ink",
    recommendedMode: "light",
    swatches: ["#F4EFE4", "#1B1917", "#57534E", "#D9D2C3"],
    dark: {
      gold: "#D8D0BE",
      goldLight: "#EFE9DC",
      kenyaGreen: "#7CB38A",
      kenyaGreenLight: "#9CCCA8",
      sky: "#8BAAC7",
      skyLight: "#AEC6DD",
      bgPrimary: "#11110F",
      bgSecondary: "#191815",
      bgCard: "#21201C",
      bgElevated: "#2A2823",
      bgGlass: "rgba(33, 32, 28, 0.94)",
      surfaceContainerLowest: "#090908",
      surfaceContainerLow: "#181714",
      surfaceContainer: "#21201C",
      surfaceContainerHigh: "#2B2924",
      surfaceContainerHighest: "#35332D",
      primaryContainer: "#333028",
      onPrimaryContainer: "#F4EFE4",
      secondaryContainer: "#1B3022",
      onSecondaryContainer: "#CBE8D3",
      tertiaryContainer: "#1D2C3B",
      onTertiaryContainer: "#D0E3F5",
      outline: "#7A766B",
      outlineVariant: "#3D3A33",
      textPrimary: "#F4EFE4",
      textSecondary: "#CBC5B8",
      textMuted: "#9C9688",
      border: "#3D3A33",
      borderLight: "#545047",
      borderAccent: "rgba(216, 208, 190, 0.4)",
      rippleColor: "rgba(216, 208, 190, 0.16)",
    },
    light: {
      gold: "#1B1917",
      goldLight: "#3F3B36",
      kenyaGreen: "#2B593A",
      kenyaGreenLight: "#3D754F",
      sky: "#2D4B66",
      skyLight: "#446B8F",
      bgPrimary: "#F4EFE4",
      bgSecondary: "#EBE5D6",
      bgCard: "#FAF7F0",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(250, 247, 240, 0.95)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFE9DC",
      surfaceContainer: "#FAF7F0",
      surfaceContainerHigh: "#E5DEC9",
      surfaceContainerHighest: "#D9D2C3",
      primaryContainer: "#E4DDD0",
      onPrimaryContainer: "#1B1917",
      secondaryContainer: "#DCE8DF",
      onSecondaryContainer: "#14301E",
      tertiaryContainer: "#DCE5EE",
      onTertiaryContainer: "#162A3D",
      outline: "#57534E",
      outlineVariant: "#C7BFB0",
      textPrimary: "#1B1917",
      textSecondary: "#45403B",
      textMuted: "#615B53",
      border: "#1B1917",
      borderLight: "#C7BFB0",
      borderAccent: "rgba(27, 25, 23, 0.35)",
      rippleColor: "rgba(27, 25, 23, 0.12)",
    },
  },
  {
    id: "teenage-engineering",
    name: "Teenage Engineering",
    tagline: "Anodized Field Synth & OLED Amber",
    recommendedMode: "light",
    swatches: ["#D6D7D2", "#1E201D", "#FF521B", "#E8B339"],
    dark: {
      gold: "#FF6B3D",
      goldLight: "#FF9470",
      kenyaGreen: "#4CD48B",
      kenyaGreenLight: "#7CE3AC",
      sky: "#5EB4FF",
      skyLight: "#94CEFF",
      bgPrimary: "#121412",
      bgSecondary: "#1A1C19",
      bgCard: "#222521",
      bgElevated: "#2B2E29",
      bgGlass: "rgba(34, 37, 33, 0.92)",
      surfaceContainerLowest: "#0A0C0A",
      surfaceContainerLow: "#191B18",
      surfaceContainer: "#222521",
      surfaceContainerHigh: "#2C302B",
      surfaceContainerHighest: "#373B35",
      primaryContainer: "#4D1D0E",
      onPrimaryContainer: "#FFD6C9",
      secondaryContainer: "#123826",
      onSecondaryContainer: "#C2F5D9",
      tertiaryContainer: "#122E4A",
      onTertiaryContainer: "#CCE6FF",
      outline: "#6E736C",
      outlineVariant: "#3A3E38",
      textPrimary: "#F3F4EF",
      textSecondary: "#C5C8C0",
      textMuted: "#959990",
      border: "#3A3E38",
      borderLight: "#4F544C",
      borderAccent: "rgba(255, 107, 61, 0.45)",
      rippleColor: "rgba(255, 107, 61, 0.2)",
    },
    light: {
      gold: "#CC3B0C",
      goldLight: "#FF521B",
      kenyaGreen: "#176E42",
      kenyaGreenLight: "#248F58",
      sky: "#1B5B9C",
      skyLight: "#3379C2",
      bgPrimary: "#E2E3DE",
      bgSecondary: "#D6D7D2",
      bgCard: "#F2F2EE",
      bgElevated: "#FAFBF7",
      bgGlass: "rgba(242, 242, 238, 0.92)",
      surfaceContainerLowest: "#FAFBF7",
      surfaceContainerLow: "#DCDDD8",
      surfaceContainer: "#F0F1EC",
      surfaceContainerHigh: "#CFD1CB",
      surfaceContainerHighest: "#C3C5BF",
      primaryContainer: "#FFE0D6",
      onPrimaryContainer: "#5C1803",
      secondaryContainer: "#D2F0E0",
      onSecondaryContainer: "#093820",
      tertiaryContainer: "#D4E6F8",
      onTertiaryContainer: "#0B2C52",
      outline: "#7D807A",
      outlineVariant: "#B3B5AF",
      textPrimary: "#1D1F1C",
      textSecondary: "#454842",
      textMuted: "#5F635C",
      border: "#9FA19B",
      borderLight: "#BFC1BB",
      borderAccent: "rgba(204, 59, 12, 0.36)",
      rippleColor: "rgba(204, 59, 12, 0.14)",
    },
  },
  {
    id: "risograph-print",
    name: "Risograph Print",
    tagline: "Soy-Ink Cobalt, Vermilion & Cream",
    recommendedMode: "light",
    swatches: ["#FAF3E3", "#164496", "#E6482E", "#F4C430"],
    dark: {
      gold: "#FF725C",
      goldLight: "#FF9B8A",
      kenyaGreen: "#3CC2A8",
      kenyaGreenLight: "#6EDBC5",
      sky: "#6AA4FF",
      skyLight: "#9CC2FF",
      bgPrimary: "#0F1524",
      bgSecondary: "#161F33",
      bgCard: "#1D2840",
      bgElevated: "#253352",
      bgGlass: "rgba(29, 40, 64, 0.90)",
      surfaceContainerLowest: "#090E1A",
      surfaceContainerLow: "#151D30",
      surfaceContainer: "#1D2840",
      surfaceContainerHigh: "#273554",
      surfaceContainerHighest: "#324369",
      primaryContainer: "#4F1A12",
      onPrimaryContainer: "#FFD8D1",
      secondaryContainer: "#0F3831",
      onSecondaryContainer: "#BDF2E6",
      tertiaryContainer: "#152F5C",
      onTertiaryContainer: "#D1E4FF",
      outline: "#6E80A8",
      outlineVariant: "#334366",
      textPrimary: "#FAF3E3",
      textSecondary: "#CBD4E6",
      textMuted: "#9BA7C2",
      border: "#334366",
      borderLight: "#495E8C",
      borderAccent: "rgba(255, 114, 92, 0.45)",
      rippleColor: "rgba(255, 114, 92, 0.2)",
    },
    light: {
      gold: "#C7331C",
      goldLight: "#E6482E",
      kenyaGreen: "#0E5A5C",
      kenyaGreenLight: "#197B7D",
      sky: "#164496",
      skyLight: "#2A5FC0",
      bgPrimary: "#FAF3E3",
      bgSecondary: "#F2E8D0",
      bgCard: "#FFFBF2",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(255, 251, 242, 0.93)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4EBD7",
      surfaceContainer: "#FFFBF2",
      surfaceContainerHigh: "#EBE0C6",
      surfaceContainerHighest: "#E0D3B4",
      primaryContainer: "#FCE0DA",
      onPrimaryContainer: "#5C1308",
      secondaryContainer: "#D2ECEB",
      onSecondaryContainer: "#063233",
      tertiaryContainer: "#D9E5FA",
      onTertiaryContainer: "#0B2454",
      outline: "#164496",
      outlineVariant: "#C7BEA8",
      textPrimary: "#132952",
      textSecondary: "#324870",
      textMuted: "#4F6285",
      border: "#164496",
      borderLight: "#C7BEA8",
      borderAccent: "rgba(199, 51, 28, 0.4)",
      rippleColor: "rgba(199, 51, 28, 0.15)",
    },
  },
  {
    id: "mechanical-horology",
    name: "Mechanical Horology",
    tagline: "Brushed Gunmetal & Antique Brass",
    recommendedMode: "dark",
    swatches: ["#202326", "#C9A659", "#F4EFE6", "#1D3557"],
    dark: {
      gold: "#D4B263",
      goldLight: "#EBD08D",
      kenyaGreen: "#4CA682",
      kenyaGreenLight: "#76C7A6",
      sky: "#6FA3D4",
      skyLight: "#9BC2E8",
      bgPrimary: "#141618",
      bgSecondary: "#1C1F22",
      bgCard: "#23272B",
      bgElevated: "#2C3136",
      bgGlass: "rgba(35, 39, 43, 0.90)",
      surfaceContainerLowest: "#0D0E10",
      surfaceContainerLow: "#1B1E21",
      surfaceContainer: "#23272B",
      surfaceContainerHigh: "#2E3338",
      surfaceContainerHighest: "#393F45",
      primaryContainer: "#3D3117",
      onPrimaryContainer: "#F7E5B8",
      secondaryContainer: "#15362A",
      onSecondaryContainer: "#C2EEDB",
      tertiaryContainer: "#192D42",
      onTertiaryContainer: "#CCE3F8",
      outline: "#787D82",
      outlineVariant: "#3D4247",
      textPrimary: "#F4EFE6",
      textSecondary: "#CCC6BA",
      textMuted: "#9E988C",
      border: "#4A4F55",
      borderLight: "#5E646B",
      borderAccent: "rgba(212, 178, 99, 0.45)",
      rippleColor: "rgba(212, 178, 99, 0.18)",
    },
    light: {
      gold: "#87651F",
      goldLight: "#A88234",
      kenyaGreen: "#23634B",
      kenyaGreenLight: "#338063",
      sky: "#1D3557",
      skyLight: "#315382",
      bgPrimary: "#F4EFE6",
      bgSecondary: "#EAE2D3",
      bgCard: "#FBF8F2",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(251, 248, 242, 0.93)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EFE8DA",
      surfaceContainer: "#FBF8F2",
      surfaceContainerHigh: "#E4DAC7",
      surfaceContainerHighest: "#D8CCB6",
      primaryContainer: "#F5E7C6",
      onPrimaryContainer: "#3D2B07",
      secondaryContainer: "#D4ECE2",
      onSecondaryContainer: "#0E3627",
      tertiaryContainer: "#D9E4F2",
      onTertiaryContainer: "#10223B",
      outline: "#8C7B5B",
      outlineVariant: "#D3C5A8",
      textPrimary: "#1D2A38",
      textSecondary: "#45505C",
      textMuted: "#5E6770",
      border: "#B5A37E",
      borderLight: "#D3C5A8",
      borderAccent: "rgba(135, 101, 31, 0.38)",
      rippleColor: "rgba(135, 101, 31, 0.14)",
    },
  },
  {
    id: "japanese-washi",
    name: "Japanese Washi",
    tagline: "Kozo Stationery & Vermilion Hanko",
    recommendedMode: "light",
    swatches: ["#F7F2E7", "#C23B22", "#243B55", "#C9BFA9"],
    dark: {
      gold: "#EB6A52",
      goldLight: "#F59482",
      kenyaGreen: "#59A87E",
      kenyaGreenLight: "#82C9A3",
      sky: "#77A3CC",
      skyLight: "#A3C4E3",
      bgPrimary: "#161310",
      bgSecondary: "#1F1B17",
      bgCard: "#27221D",
      bgElevated: "#302A24",
      bgGlass: "rgba(39, 34, 29, 0.90)",
      surfaceContainerLowest: "#0F0D0B",
      surfaceContainerLow: "#1D1915",
      surfaceContainer: "#27221D",
      surfaceContainerHigh: "#332C25",
      surfaceContainerHighest: "#3E362E",
      primaryContainer: "#4D1B12",
      onPrimaryContainer: "#FFD8D1",
      secondaryContainer: "#183628",
      onSecondaryContainer: "#C4EED7",
      tertiaryContainer: "#1B2E42",
      onTertiaryContainer: "#CEE3F7",
      outline: "#7D7366",
      outlineVariant: "#423B33",
      textPrimary: "#F7F2E7",
      textSecondary: "#CFC6B6",
      textMuted: "#A39887",
      border: "#423B33",
      borderLight: "#595045",
      borderAccent: "rgba(235, 106, 82, 0.42)",
      rippleColor: "rgba(235, 106, 82, 0.18)",
    },
    light: {
      gold: "#B53219",
      goldLight: "#C23B22",
      kenyaGreen: "#2B6649",
      kenyaGreenLight: "#3E8562",
      sky: "#243B55",
      skyLight: "#39587A",
      bgPrimary: "#F7F2E7",
      bgSecondary: "#EFE8D8",
      bgCard: "#FDFBF5",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(253, 251, 245, 0.94)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F2EBDC",
      surfaceContainer: "#FDFBF5",
      surfaceContainerHigh: "#E7DEC9",
      surfaceContainerHighest: "#DDD2BA",
      primaryContainer: "#FADFD9",
      onPrimaryContainer: "#541307",
      secondaryContainer: "#D7ECE0",
      onSecondaryContainer: "#113624",
      tertiaryContainer: "#DBE4EE",
      onTertiaryContainer: "#122438",
      outline: "#8C8170",
      outlineVariant: "#C9BFA9",
      textPrimary: "#26211C",
      textSecondary: "#52493F",
      textMuted: "#6B6155",
      border: "#C9BFA9",
      borderLight: "#DFD6C3",
      borderAccent: "rgba(181, 50, 25, 0.36)",
      rippleColor: "rgba(181, 50, 25, 0.13)",
    },
  },
  {
    id: "architectural-brutalism",
    name: "Architectural Brutalism",
    tagline: "Travertine Concrete & Terracotta Slab",
    recommendedMode: "light",
    swatches: ["#CFC7B8", "#1B1917", "#B84C2A", "#D4A017"],
    dark: {
      gold: "#E8724D",
      goldLight: "#F5987A",
      kenyaGreen: "#52A871",
      kenyaGreenLight: "#7CC998",
      sky: "#6EA4D4",
      skyLight: "#9AC2E6",
      bgPrimary: "#141311",
      bgSecondary: "#1D1B18",
      bgCard: "#262320",
      bgElevated: "#302C28",
      bgGlass: "rgba(38, 35, 32, 0.92)",
      surfaceContainerLowest: "#0C0B0A",
      surfaceContainerLow: "#1B1917",
      surfaceContainer: "#262320",
      surfaceContainerHigh: "#332F2B",
      surfaceContainerHighest: "#403B36",
      primaryContainer: "#4D1F11",
      onPrimaryContainer: "#FFD8CC",
      secondaryContainer: "#173623",
      onSecondaryContainer: "#C4EED2",
      tertiaryContainer: "#182D42",
      onTertiaryContainer: "#CEE3F7",
      outline: "#807A70",
      outlineVariant: "#423E38",
      textPrimary: "#F5F1E8",
      textSecondary: "#CCC5B8",
      textMuted: "#9E978B",
      border: "#524D45",
      borderLight: "#696359",
      borderAccent: "rgba(232, 114, 77, 0.45)",
      rippleColor: "rgba(232, 114, 77, 0.2)",
    },
    light: {
      gold: "#A63F1F",
      goldLight: "#B84C2A",
      kenyaGreen: "#23633D",
      kenyaGreenLight: "#338052",
      sky: "#225380",
      skyLight: "#3770A3",
      bgPrimary: "#DDD6C8",
      bgSecondary: "#CFC7B8",
      bgCard: "#EFEAE0",
      bgElevated: "#F7F4EC",
      bgGlass: "rgba(239, 234, 224, 0.94)",
      surfaceContainerLowest: "#F7F4EC",
      surfaceContainerLow: "#D6D0C4",
      surfaceContainer: "#EFEAE0",
      surfaceContainerHigh: "#C9C1B2",
      surfaceContainerHighest: "#BDB4A4",
      primaryContainer: "#F7DCD3",
      onPrimaryContainer: "#4F1A0A",
      secondaryContainer: "#D2EBDC",
      onSecondaryContainer: "#0E361E",
      tertiaryContainer: "#D4E3F2",
      onTertiaryContainer: "#0F2A42",
      outline: "#1B1917",
      outlineVariant: "#999183",
      textPrimary: "#1B1917",
      textSecondary: "#403B36",
      textMuted: "#59534C",
      border: "#1B1917",
      borderLight: "#A8A090",
      borderAccent: "rgba(166, 63, 31, 0.42)",
      rippleColor: "rgba(166, 63, 31, 0.16)",
    },
  },
  {
    id: "vintage-avionics",
    name: "Vintage Avionics",
    tagline: "Flight-Deck Olive & Phosphor Amber",
    recommendedMode: "dark",
    swatches: ["#191C18", "#F5A623", "#7FE08A", "#3C4239"],
    dark: {
      gold: "#F5A623",
      goldLight: "#FFC45C",
      kenyaGreen: "#62C970",
      kenyaGreenLight: "#8CE097",
      sky: "#64B5E6",
      skyLight: "#94D0F5",
      bgPrimary: "#111410",
      bgSecondary: "#191C18",
      bgCard: "#21251F",
      bgElevated: "#2A2F27",
      bgGlass: "rgba(33, 37, 31, 0.92)",
      surfaceContainerLowest: "#0A0C09",
      surfaceContainerLow: "#181B17",
      surfaceContainer: "#21251F",
      surfaceContainerHigh: "#2C3129",
      surfaceContainerHighest: "#373D34",
      primaryContainer: "#452E07",
      onPrimaryContainer: "#FFE1A8",
      secondaryContainer: "#15361B",
      onSecondaryContainer: "#C2F2C8",
      tertiaryContainer: "#142E42",
      onTertiaryContainer: "#CBE8FA",
      outline: "#6A7366",
      outlineVariant: "#3C4239",
      textPrimary: "#ECEFE8",
      textSecondary: "#BFC7B8",
      textMuted: "#929B8B",
      border: "#3C4239",
      borderLight: "#51594D",
      borderAccent: "rgba(245, 166, 35, 0.45)",
      rippleColor: "rgba(245, 166, 35, 0.2)",
    },
    light: {
      gold: "#9C5B00",
      goldLight: "#BD730B",
      kenyaGreen: "#1D6B32",
      kenyaGreenLight: "#2E8A47",
      sky: "#1B5E8C",
      skyLight: "#317BB0",
      bgPrimary: "#EAECE4",
      bgSecondary: "#DFE3D8",
      bgCard: "#F5F7F1",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(245, 247, 241, 0.94)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#E3E6DC",
      surfaceContainer: "#F5F7F1",
      surfaceContainerHigh: "#D6DBD0",
      surfaceContainerHighest: "#C9CFC2",
      primaryContainer: "#FAE6C3",
      onPrimaryContainer: "#4A2900",
      secondaryContainer: "#D2EED8",
      onSecondaryContainer: "#0A3817",
      tertiaryContainer: "#D4E8F6",
      onTertiaryContainer: "#0A2D47",
      outline: "#6E7568",
      outlineVariant: "#BCC2B4",
      textPrimary: "#191C18",
      textSecondary: "#40473D",
      textMuted: "#596155",
      border: "#9CA396",
      borderLight: "#C2C9BC",
      borderAccent: "rgba(156, 91, 0, 0.38)",
      rippleColor: "rgba(156, 91, 0, 0.14)",
    },
  },
  {
    id: "ceramic-tactile",
    name: "Ceramic Tactile",
    tagline: "Kiln Stoneware, Celadon & Terracotta",
    recommendedMode: "light",
    swatches: ["#EFEAE0", "#527559", "#B85334", "#2C5270"],
    dark: {
      gold: "#7AB887",
      goldLight: "#A1D4AC",
      kenyaGreen: "#E07A5B",
      kenyaGreenLight: "#F0A086",
      sky: "#73A9D1",
      skyLight: "#9EC7E6",
      bgPrimary: "#161311",
      bgSecondary: "#1F1B18",
      bgCard: "#28231F",
      bgElevated: "#322C27",
      bgGlass: "rgba(40, 35, 31, 0.90)",
      surfaceContainerLowest: "#0F0D0B",
      surfaceContainerLow: "#1D1A17",
      surfaceContainer: "#28231F",
      surfaceContainerHigh: "#342E29",
      surfaceContainerHighest: "#403933",
      primaryContainer: "#1C3823",
      onPrimaryContainer: "#C8F0D1",
      secondaryContainer: "#472116",
      onSecondaryContainer: "#FFD7CC",
      tertiaryContainer: "#182E40",
      onTertiaryContainer: "#CCE4F5",
      outline: "#807569",
      outlineVariant: "#453E37",
      textPrimary: "#F5F0E6",
      textSecondary: "#CFC6B8",
      textMuted: "#A3998B",
      border: "#453E37",
      borderLight: "#5C534A",
      borderAccent: "rgba(122, 184, 135, 0.42)",
      rippleColor: "rgba(122, 184, 135, 0.18)",
    },
    light: {
      gold: "#35613E",
      goldLight: "#527559",
      kenyaGreen: "#A84426",
      kenyaGreenLight: "#B85334",
      sky: "#2C5270",
      skyLight: "#447194",
      bgPrimary: "#EFEAE0",
      bgSecondary: "#E6E0D4",
      bgCard: "#FAF7F0",
      bgElevated: "#FFFFFF",
      bgGlass: "rgba(250, 247, 240, 0.94)",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#EBE4D8",
      surfaceContainer: "#FAF7F0",
      surfaceContainerHigh: "#E0D8C8",
      surfaceContainerHighest: "#D5CCBC",
      primaryContainer: "#D7EAD9",
      onPrimaryContainer: "#133319",
      secondaryContainer: "#F7DDD4",
      onSecondaryContainer: "#4D1A0B",
      tertiaryContainer: "#D8E7F2",
      onTertiaryContainer: "#112A3E",
      outline: "#968B7A",
      outlineVariant: "#D5CCBC",
      textPrimary: "#2F2A24",
      textSecondary: "#574E44",
      textMuted: "#6E6458",
      border: "#D5CCBC",
      borderLight: "#E3DCCE",
      borderAccent: "rgba(53, 97, 62, 0.35)",
      rippleColor: "rgba(53, 97, 62, 0.14)",
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

export function mixHex(hexA: string, hexB: string, weightB: number): string {
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
        ? resolvedIsDark ? "#261E14" : "#F9EFE0"
        : config.readingTint === "soft-sepia"
        ? resolvedIsDark ? "#332415" : "#EBD8B7"
        : resolvedIsDark ? "#0F1B2B" : "#E3EEF7";
    const tintAmt = resolvedIsDark ? 0.28 : 0.36;
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
    resolved.bgCardHover = "#0D0D0D";
    resolved.bgElevated = "#0A0A0A";
    resolved.surfaceContainerHigh = "#181818";
    resolved.surfaceContainerHighest = "#222222";
  }

  if (config.accentIntensity && config.accentIntensity !== "balanced") {
    const adjustAccent = (hex: string): string => {
      if (!isValidHexColor(hex)) return hex;
      if (config.accentIntensity === "muted") {
        return mixHex(hex, resolvedIsDark ? "#888888" : "#777777", 0.24);
      }
      // Vivid: boost RGB saturation away from channel mean without washing out luminance
      const clean = hex.trim().replace("#", "");
      const r = parseInt(clean.slice(0, 2), 16);
      const g = parseInt(clean.slice(2, 4), 16);
      const b = parseInt(clean.slice(4, 6), 16);
      const avg = (r + g + b) / 3;
      const boost = 1.28;
      const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(avg + (v - avg) * boost)));
      return `#${[clamp(r), clamp(g), clamp(b)].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
    };
    resolved.gold = adjustAccent(resolved.gold);
    resolved.goldLight = adjustAccent(resolved.goldLight);
    resolved.kenyaGreen = adjustAccent(resolved.kenyaGreen);
    resolved.kenyaGreenLight = adjustAccent(resolved.kenyaGreenLight);
    resolved.sky = adjustAccent(resolved.sky);
    resolved.primaryContainer = hexToRgba(resolved.gold, resolvedIsDark ? 0.22 : 0.16);
    resolved.onPrimaryContainer = mixHex(resolved.gold, resolvedIsDark ? "#FFFFFF" : "#000000", resolvedIsDark ? 0.58 : 0.45);
  }

  resolved.surface = resolved.bgCard;

  const textSurfaces = [
    resolved.bgPrimary,
    resolved.bgSecondary,
    resolved.bgCard,
    resolved.bgElevated,
    resolved.surfaceContainer,
    resolved.surfaceContainerHigh,
  ];
  const ensureTextContrast = (foreground: string): string => {
    if (textSurfaces.every((background) => getContrastRatio(foreground, background) >= 4.5)) {
      return foreground;
    }

    const candidates = ["#1A1108", "#FFFFFF"];
    return candidates.reduce((best, candidate) => {
      const candidateContrast = Math.min(
        ...textSurfaces.map((background) => getContrastRatio(candidate, background))
      );
      const bestContrast = Math.min(
        ...textSurfaces.map((background) => getContrastRatio(best, background))
      );
      return candidateContrast > bestContrast ? candidate : best;
    });
  };

  resolved.textPrimary = ensureTextContrast(resolved.textPrimary);
  resolved.text = resolved.textPrimary;
  resolved.textSecondary = ensureTextContrast(resolved.textSecondary);
  resolved.textMuted = ensureTextContrast(resolved.textMuted);
  return resolved;
}

function getContrastRatio(foreground: string, background: string): number {
  if (!isValidHexColor(foreground) || !isValidHexColor(background)) return 1;
  const luminance = (hex: string) => {
    const clean = hex.trim().replace("#", "");
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean.slice(0, 6);
    const channels = [0, 2, 4].map((index) => parseInt(full.slice(index, index + 2), 16) / 255);
    const linear = channels.map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

const CONTRAST_INK_CACHE = new Map<string, "#1A1108" | "#FFFFFF">();
const CONTRAST_INK_CACHE_MAX = 256;

export function getContrastInk(bgHex: string | undefined | null): "#1A1108" | "#FFFFFF" {
  if (!bgHex) return "#1A1108";
  const cached = CONTRAST_INK_CACHE.get(bgHex);
  if (cached !== undefined) return cached;
  if (!isValidHexColor(bgHex)) return "#1A1108";
  const contrastOnWhite = getContrastRatio("#FFFFFF", bgHex);
  const contrastOnDark = getContrastRatio("#1A1108", bgHex);
  const result: "#1A1108" | "#FFFFFF" = contrastOnDark >= contrastOnWhite ? "#1A1108" : "#FFFFFF";
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
    case "frameless":
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
const VALID_SURFACE_STYLES = new Set<SurfaceStyle>(["elevated", "flat", "outlined", "glass", "tonal", "crisp", "paper-ink", "neo-brutal", "inset-tray", "frameless", "braun-chassis", "swiss-ledger", "riso-overprint", "horology-bezel", "avionics-panel", "ceramic-glaze"]);
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
  "dropdown", "underline-tabs", "segmented-bar", "two-col-grid", "vertical-list", "minimal-text", "stepper", "three-col-tiles", "floating-dock", "sidebar-chips", "index-tabs", "braun-keys", "swiss-index", "manila-folders",
]);
const VALID_APP_BAR_STYLES = new Set<AppBarStyle>([
  "standard", "compact", "tall-editorial", "borderless", "accent-tinted", "floating", "braun-tuner", "swiss-masthead", "eink-runninghead", "avionics-strip",
]);
const VALID_STRIPE_THICKNESS = new Set<StripeThickness>([
  "hidden", "hairline", "thin", "medium", "thick", "bold",
]);
const VALID_DENSITIES = new Set<DensityPreset>(["ultra-compact", "compact", "comfortable", "balanced", "relaxed", "spacious"]);
const VALID_TAB_BAR_STYLES = new Set<TabBarStyle>([
  "classic", "floating-pill", "compact", "minimal", "top-accent", "docked-cards", "segmented", "braun-detent", "swiss-timetable", "solari-flap", "porcelain-wells",
]);
const VALID_MENU_INDICATORS = new Set<MenuIndicatorStyle>(["pill", "underline", "dot", "filled-box", "glow", "outline", "bracket", "hanko-seal", "plinth-lift", "vernier-loupe"]);
const VALID_VERT_SB = new Set<VerticalScrollbarStyle>(["hidden", "native", "always-visible"]);
const VALID_SHADOWS = new Set<CardShadowIntensity>(["none", "subtle", "medium", "strong", "glow", "crisp-3d"]);
const VALID_INPUT_STYLES = new Set<InputStylePreset>(["outlined", "filled", "underlined", "pill", "minimal", "accent", "unboxed", "swiss-ledger", "eink-ribbon", "ceramic-basin", "avionics-scratchpad"]);
const VALID_BUTTON_STYLES = new Set<ButtonStylePreset>(["filled", "tinted", "outlined", "elevated", "pill-glow", "flat", "keycap-press", "editorial-link", "unboxed-text", "braun-keycap", "swiss-split", "riso-stamp", "washi-seal", "avionics-guard"]);
const VALID_TRANSITIONS = new Set<PageTransitionPreset>(["slide", "fade", "bottom-sheet", "fast", "none", "default"]);
const VALID_STATUS_BARS = new Set<StatusBarMode>(["auto", "light", "dark"]);
const VALID_QUICK_MENUS = new Set<QuickMenuPosition>(["off", "bottom-right", "bottom-left"]);
const VALID_COLOR_BLIND_MODES = new Set<ColorBlindMode>(["none", "deuteranopia", "protanopia", "tritanopia"]);
const VALID_HOME_LAYOUTS = new Set<HomeLayoutPreset>([
  "classic", "bento-grid", "compact-list", "editorial-cards", "minimal-rows", "large-tiles",
]);
const VALID_HEADER_ALIGNMENTS = new Set<HeaderAlignment>(["left", "center"]);
const VALID_CARD_ACCENT_STYLES = new Set<CardAccentStyle>([
  "none", "left-bar", "top-bar", "bottom-bar", "tinted-border", "glow-edge", "corner-frame", "double-rule", "offset-edge", "ticket-stub", "rivet-bezel", "hanko-corner", "split-flap", "plinth-slab",
]);
const VALID_ICON_BADGE_STYLES = new Set<IconBadgeStyle>([
  "soft-circle",
  "recessed-well",
  "postage-stamp",
  "split-disc",
  "monogram-frame",
  "ceramic-tile",
  "tilted-lozenge",
  "ink-seal",
  "bare-glyph",
  "hidden",
  "outline",
  "filled",
  "soft-square",
  "accent-solid",
  "minimal",
  "monochrome-ink",
  "keycap",
  "hairline-ring",
  "duotone-wash",
]);
const VALID_ICON_PACKS = new Set<IconPackStyle>(["outline", "filled", "sharp", "duotone"]);
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
      (obj.horizontalScrollbarStyle as HorizontalScrollbarStyle);
  }
  if (typeof obj.horizontalScrollbarThickness === "string" && VALID_SCROLLBAR_THICKNESS.has(obj.horizontalScrollbarThickness as ScrollbarThickness)) {
    merged.horizontalScrollbarThickness = obj.horizontalScrollbarThickness as ScrollbarThickness;
  }
  if (typeof obj.scrollbarTrackVisible === "boolean") {
    merged.scrollbarTrackVisible = obj.scrollbarTrackVisible;
  }
  if (typeof obj.pillBarLayout === "string" && VALID_PILL_BAR_LAYOUTS.has(obj.pillBarLayout as PillBarLayout)) {
    merged.pillBarLayout =
      (obj.pillBarLayout as PillBarLayout);
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
      (obj.menuIndicatorStyle as MenuIndicatorStyle);
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
    const rawBadge = obj.iconBadgeStyle as IconBadgeStyle;
    switch (rawBadge) {
      case "outline":
        merged.iconBadgeStyle = "monogram-frame";
        break;
      case "filled":
      case "duotone-wash":
        merged.iconBadgeStyle = "split-disc";
        break;
      case "soft-square":
      case "monochrome-ink":
        merged.iconBadgeStyle = "recessed-well";
        break;
      case "accent-solid":
        merged.iconBadgeStyle = "ink-seal";
        break;
      case "keycap":
        merged.iconBadgeStyle = "ceramic-tile";
        break;
      case "hairline-ring":
        merged.iconBadgeStyle = "soft-circle";
        break;
      case "minimal":
        merged.iconBadgeStyle = "bare-glyph";
        break;
      default:
        merged.iconBadgeStyle = rawBadge;
        break;
    }
  }
  if (typeof obj.iconPack === "string" && VALID_ICON_PACKS.has(obj.iconPack as IconPackStyle)) {
    merged.iconPack = obj.iconPack as IconPackStyle;
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
  merged.showCardIcons = typeof obj.showCardIcons === "boolean" ? obj.showCardIcons : DEFAULT_THEME_CONFIG.showCardIcons;
  merged.showTabIcons = typeof obj.showTabIcons === "boolean" ? obj.showTabIcons : DEFAULT_THEME_CONFIG.showTabIcons;
  merged.showCardDescriptions = typeof obj.showCardDescriptions === "boolean" ? obj.showCardDescriptions : DEFAULT_THEME_CONFIG.showCardDescriptions;
  merged.showCategoryBadges = typeof obj.showCategoryBadges === "boolean" ? obj.showCategoryBadges : DEFAULT_THEME_CONFIG.showCategoryBadges;
  merged.showTrailingArrows = typeof obj.showTrailingArrows === "boolean" ? obj.showTrailingArrows : DEFAULT_THEME_CONFIG.showTrailingArrows;
  merged.showHomeGreeting = typeof obj.showHomeGreeting === "boolean" ? obj.showHomeGreeting : DEFAULT_THEME_CONFIG.showHomeGreeting;
  merged.showDailyWidgets = typeof obj.showDailyWidgets === "boolean" ? obj.showDailyWidgets : DEFAULT_THEME_CONFIG.showDailyWidgets;
  merged.showOfflinePill = typeof obj.showOfflinePill === "boolean" ? obj.showOfflinePill : DEFAULT_THEME_CONFIG.showOfflinePill;
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
  iconPack: "Icon Pack",
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
  hapticsEnabled: "Haptics",
  hapticStrength: "Haptic FX",
  horizontalScrollbarThickness: "H-Scroll Size",
  scrollbarTrackVisible: "Scroll Track",
  edgeFadeEnabled: "Edge Fade",
  scrollBounceEnabled: "Bounce",
  stripeThickness: "Stripe Size",
  pageTransition: "Transition",
  statusBarMode: "Status Bar",
  screenPadding: "Margins",
  progressBarStyle: "Progress",
  dividerStyle: "Dividers",
  sectionHeaderStyle: "Headers",
  pressEffect: "Tap FX",
  colorBlindMode: "Color Blind",
  highContrastBorders: "Hi-Contrast",
  reduceMotion: "Motion",
  showCardIcons: "Card Icons",
  showTabIcons: "Tab Icons",
  showCardDescriptions: "Card Text",
  showCategoryBadges: "Tag Badges",
  showTrailingArrows: "Arrows",
  showHomeGreeting: "Greeting",
  showDailyWidgets: "Daily Widgets",
  showOfflinePill: "Offline Pill",
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
      return { heading: isIos ? "Georgia" : "serif", body: "Inter_400Regular", bold: "Inter_600SemiBold" };
    case "mono-tech":
      return { heading: isIos ? "Menlo-Bold" : "monospace", body: "Inter_400Regular", bold: isIos ? "Menlo-Bold" : "monospace" };
    case "geometric":
      return { heading: "Outfit_800ExtraBold", body: "Outfit_400Regular", bold: "Outfit_700Bold" };
    case "humanist":
      return { heading: isIos ? "AvenirNext-DemiBold" : "sans-serif-light", body: isIos ? "AvenirNext-Regular" : "sans-serif", bold: isIos ? "AvenirNext-Bold" : "sans-serif-medium" };
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
