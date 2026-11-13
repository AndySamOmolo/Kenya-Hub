import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  toolWrap: {
    gap: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  horizontalPills: {
    gap: 8,
    paddingVertical: 4,
  },
  langPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  langPillText: {
    fontSize: 13,
    fontWeight: "700",
  },
  infoCard: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  infoHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  badgePill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
  },
  infoDesc: {
    fontSize: 12,
    lineHeight: 17,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13, paddingVertical: 0, textAlignVertical: "center", includeFontPadding: false,
  },
  catPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  catPillText: {
    fontSize: 12,
    fontWeight: "600",
  },
  countLabel: {
    fontSize: 12,
  },
  entriesList: {
    gap: 10,
  },
  entryCard: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entryEnglish: {
    fontSize: 15,
    fontWeight: "700",
  },
  entryCategory: {
    fontSize: 11,
  },
  entryTranslationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  entryTranslation: {
    fontSize: 18,
    fontWeight: "800",
  },
  pronounceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  pronounceText: {
    fontSize: 12,
    fontWeight: "600",
  },
  entryContext: {
    fontSize: 11,
    fontStyle: "italic",
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 8,
  },
  emptyText: {
    fontSize: 13,
  },

  // Solar styles
  cardBox: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "600",
  },
  kesInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  kesPrefix: {
    fontSize: 20,
    fontWeight: "800",
  },
  bigInput: {
    fontSize: 26,
    fontWeight: "900",
    flex: 1,
  },
  presetRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  presetBtn: {
    flex: 1,
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  presetText: {
    fontSize: 12,
    fontWeight: "700",
  },
  regionGrid: {
    flexDirection: "row",
    gap: 8,
  },
  regionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
  },
  regionName: {
    fontSize: 13,
    fontWeight: "700",
  },
  regionIrradiance: {
    fontSize: 10,
    marginTop: 2,
  },
  resultsCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  resultsHeader: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  statsTwoCol: {
    flexDirection: "row",
    gap: 12,
  },
  statCol: {
    flex: 1,
    gap: 2,
  },
  statColLabel: {
    fontSize: 11,
  },
  statColVal: {
    fontSize: 18,
    fontWeight: "800",
  },
  statColSub: {
    fontSize: 10,
  },
  divider: {
    height: 1,
    width: "100%",
  },
  highlightBox: {
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  highlightLabel: {
    fontSize: 13,
    fontWeight: "800",
  },

  // Ward styles
  leadersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  leaderItem: {
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
    gap: 2,
  },
  leaderRole: {
    fontSize: 10,
    textTransform: "uppercase",
  },
  leaderVal: {
    fontSize: 13,
    fontWeight: "700",
  },
  constituenciesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  constituencyBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
    flexGrow: 1, flexBasis: "45%", minWidth: 140,
  },
  numberCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  numberCircleText: {
    fontSize: 10,
    fontWeight: "800",
  },
  constituencyTitle: {
    fontSize: 12,
    fontWeight: "600",
    flex: 1,
  },

  // CBC styles
  levelSub: {
    fontSize: 13,
    fontWeight: "700",
  },
  levelOld: {
    fontSize: 11,
  },
  areaHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  areaNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  areaNumberText: {
    fontSize: 11,
    fontWeight: "800",
  },
  areaName: {
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
  },
  areaDesc: {
    fontSize: 12,
    lineHeight: 17,
  },

  // KUCCPS styles
  subjectsGrid: {
    gap: 8,
  },
  subjCard: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "stretch",
    gap: 8,
  },
  subjName: {
    fontSize: 12,
    fontWeight: "700",
  },
  gradeScroll: {
    gap: 6,
  },
  gradeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  gradeBtnText: {
    fontSize: 12,
    fontWeight: "800",
  },
  clusterHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  clusterName: {
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 1,
  },
  clusterCutoff: {
    fontSize: 11,
    marginTop: 2,
  },
  clusterBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  clusterPointsText: {
    fontSize: 14,
    fontWeight: "900",
  },
  coursesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  courseChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  courseChipText: {
    fontSize: 11,
  },
});
