import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme";

export export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const MONTH_KEYS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export const HOSPITAL_LEVELS_INFO = [
  { level: "Level 1", name: "Community Health Unit", desc: "Community Health Promoters (CHPs) — basic preventive & promotive care" },
  { level: "Level 2", name: "Dispensary / Clinic", desc: "Outpatient primary care, immunization & antenatal services" },
  { level: "Level 3", name: "Health Centre", desc: "Maternity, basic laboratory, minor surgery & inpatient observation" },
  { level: "Level 4", name: "Sub-County / Primary Hospital", desc: "Comprehensive medical, surgical, C-section & inpatient care" },
  { level: "Level 5", name: "County Referral Hospital", desc: "Specialized regional referral, ICU, imaging & specialist clinics" },
  { level: "Level 6", name: "National Teaching & Referral", desc: "KNH, MTRH, KUTRRH — tertiary sub-specialty & national referral care" },
];


export function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    toolWrap: { gap: 12 },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 14,
      height: 44,
    },
    searchInput: { flex: 1, marginLeft: 8, color: colors.textPrimary, fontSize: 13, paddingVertical: 0, textAlignVertical: "center", includeFontPadding: false },
    subHeading: { fontSize: 13, fontWeight: "800", color: colors.gold, letterSpacing: 0.5 },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      gap: 8,
    },
    cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: colors.textPrimary, flexShrink: 1 },
    cardSubtitle: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
    badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, borderWidth: 1, flexShrink: 0 },
    badgeText: { fontSize: 10, fontWeight: "800" },
    detailsList: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 8, gap: 6 },
    detailRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: 8 },
    detailLabel: { fontSize: 12, color: colors.textMuted, fontWeight: "600", flexShrink: 0, maxWidth: "45%" },
    detailValue: { fontSize: 12, color: colors.textPrimary, fontWeight: "600", flex: 1, textAlign: "right" },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 999,
    },
    pillBtnActive: {
      backgroundColor: colors.gold,
      borderColor: colors.gold,
    },
    pillBtnText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.textSecondary,
    },
    pillBtnTextActive: {
      color: colors.kenyaBlack,
    },
    empty: { alignItems: "center", paddingVertical: 36 },
    emptyTitle: { fontSize: 14, color: colors.textMuted, marginTop: 8 },
  });
}
