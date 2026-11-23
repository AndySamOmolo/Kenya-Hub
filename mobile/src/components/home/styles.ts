import { StyleSheet } from "react-native";
import type { ThemeMetrics } from "../../lib/theme-engine";

export type ResolvedFontFamilies = {
  heading: string;
  body: string;
  bold: string;
};

export function createHomeStyles(
  metrics?: ThemeMetrics,
  fonts?: ResolvedFontFamilies
) {
  const cardRadiusPx = metrics?.cardRadiusPx ?? 14;
  const radiusRatio = cardRadiusPx / 14;
  const r = (base: number) => Math.round(base * radiusRatio);
  const buttonRadiusPx = metrics?.buttonRadiusPx ?? 12;
  const pillR = buttonRadiusPx === 12 ? 999 : buttonRadiusPx;
  const bw = metrics?.borderWidthPx ?? 1;
  const spacingScale = metrics?.spacingScale ?? 1;
  const sp = (v: number) => Number((v * spacingScale).toFixed(1));
  const fontScale = metrics?.fontScale ?? 1;
  const lineHeightScale = metrics?.lineHeightScale ?? 1;
  const letterSpacingOffset = metrics?.letterSpacingOffset ?? 0;
  const fs = (v: number) => Number((v * fontScale).toFixed(1));
  const lh = (v: number) => Math.round(v * fontScale * lineHeightScale);
  const ls = (v: number) => Number((v + letterSpacingOffset).toFixed(2));

  const isDefaultFonts =
    !fonts ||
    (fonts.heading === "Outfit_700Bold" &&
      fonts.body === "Inter_400Regular" &&
      fonts.bold === "Inter_700Bold");
  const hf = (fallback = "Outfit_700Bold") =>
    isDefaultFonts ? fallback : fonts.heading;
  const bf = (fallback = "Inter_400Regular") =>
    isDefaultFonts ? fallback : fonts.body;
  const bof = (fallback = "Inter_600SemiBold") =>
    isDefaultFonts ? fallback : fonts.bold;

  return StyleSheet.create({
    screen: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: sp(32),
    },
    headerBadgesRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
    },
    offlineChip: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(9),
      paddingVertical: sp(4.5),
      borderRadius: pillR,
      borderWidth: bw,
    },
    offlineStatusDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
    },
    offlineChipText: {
      fontFamily: bof("Inter_600SemiBold"),
      fontSize: fs(10.5),
      letterSpacing: ls(0.1),
    },
    greetingContainer: {
      paddingHorizontal: sp(14),
      paddingTop: sp(8),
      paddingBottom: sp(4),
      gap: sp(8),
    },
    greetingTopRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: sp(10),
    },
    greetingSub: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
      letterSpacing: ls(0.9),
    },
    greetingTitle: {
      fontFamily: hf("Outfit_800ExtraBold"),
      fontSize: fs(19),
      marginTop: 1,
    },
    savedCountPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(5),
      paddingHorizontal: sp(10),
      paddingVertical: sp(5),
      borderRadius: pillR,
      borderWidth: bw,
    },
    savedCountText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(12),
    },
    searchInputBar: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(8),
      paddingLeft: sp(12),
      paddingRight: sp(10),
      minHeight: Math.max(44, Math.round(44 * spacingScale)),
      borderRadius: r(20),
      borderWidth: bw,
    },
    searchInputText: {
      flex: 1,
      minWidth: 0,
      fontFamily: bf("Inter_500Medium"),
      fontSize: fs(12),
      lineHeight: lh(16),
      paddingVertical: 8,
      paddingHorizontal: 0,
      textAlignVertical: "center",
      includeFontPadding: false,
    },
    searchCountChip: {
      paddingHorizontal: sp(9),
      paddingVertical: sp(4),
      borderRadius: pillR,
    },
    searchCountChipText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11),
    },
    instantResultsCard: {
      borderRadius: r(18),
      borderWidth: bw,
      paddingHorizontal: sp(12),
      paddingVertical: sp(8),
    },
    instantResultsHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: sp(6),
    },
    instantResultsLabel: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10.5),
      letterSpacing: ls(0.8),
    },
    instantResultRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(10),
      paddingVertical: sp(10),
    },
    instantResultIcon: {
      width: 36,
      height: 36,
      borderRadius: r(10),
      alignItems: "center",
      justifyContent: "center",
    },
    instantResultTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(13.5),
    },
    instantResultSub: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11.5),
      marginTop: 1,
    },
    launcherSection: {
      paddingHorizontal: sp(14),
      marginTop: sp(4),
      marginBottom: sp(12),
    },
    launcherGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      rowGap: sp(10),
    },
    launcherTile: {
      width: "25%",
      alignItems: "center",
      gap: sp(5),
    },
    launcherSquircle: {
      width: 46,
      height: 46,
      borderRadius: r(14),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    launcherLabel: {
      fontFamily: bof("Inter_600SemiBold"),
      fontSize: fs(11),
      textAlign: "center",
      paddingHorizontal: 2,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingHorizontal: sp(14),
      marginBottom: sp(8),
    },
    sectionOverline: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
      letterSpacing: ls(1.1),
      marginBottom: 1,
    },
    sectionTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(18),
    },
    seeAllBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(4),
      paddingVertical: sp(4),
      paddingHorizontal: sp(6),
    },
    seeAllText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(12.5),
    },
    widgetsScrollContent: {
      paddingHorizontal: sp(16),
      gap: sp(12),
      paddingBottom: sp(4),
    },
    snapshotWidget: {
      width: 295,
      borderRadius: r(16),
      borderWidth: bw,
      padding: sp(13),
      justifyContent: "space-between",
      gap: sp(8),
    },
    widgetHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    widgetBadgePill: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(4),
      paddingHorizontal: sp(8),
      paddingVertical: sp(3),
      borderRadius: pillR,
    },
    widgetBadgeText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
      letterSpacing: ls(0.6),
    },
    diceMiniBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      paddingHorizontal: sp(6),
      paddingVertical: 2,
    },
    widgetMainTitle: {
      fontFamily: hf("Outfit_800ExtraBold"),
      fontSize: fs(17),
    },
    widgetSubText: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12),
      lineHeight: lh(17),
    },
    widgetFooterLink: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(4),
      marginTop: 2,
    },
    widgetFooterLinkText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(11.5),
    },
    pinnedStripContent: {
      paddingHorizontal: sp(16),
      gap: sp(8),
    },
    pinnedMiniCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(8),
      paddingHorizontal: sp(12),
      paddingVertical: sp(8),
      borderRadius: r(12),
      borderWidth: bw,
    },
    pinnedMiniIcon: {
      width: 26,
      height: 26,
      borderRadius: r(8),
      alignItems: "center",
      justifyContent: "center",
    },
    pinnedMiniTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(12.5),
    },
    popularToolsList: {
      paddingHorizontal: sp(16),
      gap: sp(8),
    },
    popularToolCard: {
      borderRadius: r(14),
      borderWidth: bw,
      overflow: "hidden",
    },
    popularToolPressable: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: sp(9),
      paddingHorizontal: sp(11),
      gap: sp(10),
    },
    popularToolIconWrap: {
      width: 36,
      height: 36,
      borderRadius: r(10),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    popularToolBody: {
      flex: 1,
      minWidth: 0,
    },
    popularToolHeaderLine: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
      marginBottom: 2,
    },
    popularToolTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(13.5),
      flexShrink: 1,
    },
    miniCategoryPill: {
      paddingHorizontal: sp(5),
      paddingVertical: 1,
      borderRadius: r(5),
    },
    miniCategoryText: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(9),
      letterSpacing: ls(0.2),
    },
    popularToolDesc: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11),
      lineHeight: lh(15),
    },
    popularToolActions: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
    },
    popularToolPinBtn: {
      width: 28,
      height: 28,
      borderRadius: buttonRadiusPx === 12 ? 14 : Math.min(14, buttonRadiusPx),
      alignItems: "center",
      justifyContent: "center",
    },
    categoriesFullList: {
      paddingHorizontal: sp(16),
      gap: sp(8),
    },
    categoryFullCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(11),
      paddingHorizontal: sp(12),
      paddingVertical: sp(11),
      borderRadius: r(14),
      borderWidth: bw,
    },
    catIconWrap: {
      width: 38,
      height: 38,
      borderRadius: r(10),
      borderWidth: bw,
      alignItems: "center",
      justifyContent: "center",
    },
    catHeaderLine: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: sp(6),
      marginBottom: 2,
    },
    catTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(13.5),
      flexShrink: 1,
    },
    catCountBadge: {
      paddingHorizontal: sp(7),
      paddingVertical: 2,
      borderRadius: pillR,
    },
    catCountSub: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(10),
    },
    catDescText: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(11.5),
      lineHeight: lh(16),
    },
    guidesCarouselContent: {
      paddingHorizontal: sp(16),
      gap: sp(12),
    },
    guideCarouselCard: {
      width: 264,
      borderRadius: r(18),
      borderWidth: bw,
      padding: sp(14),
      justifyContent: "space-between",
      gap: sp(8),
    },
    guideTagRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(6),
    },
    guideCardTitle: {
      fontFamily: hf("Outfit_700Bold"),
      fontSize: fs(14.5),
      lineHeight: lh(19),
    },
    guideCardExcerpt: {
      fontFamily: bf("Inter_400Regular"),
      fontSize: fs(12),
      lineHeight: lh(17),
    },
    guideReadFooter: {
      flexDirection: "row",
      alignItems: "center",
      gap: sp(4),
      marginTop: 2,
    },
    readerHeroCard: {
      borderRadius: r(20),
      borderWidth: bw,
      padding: sp(16),
    },
  });
}

export const styles = createHomeStyles();
