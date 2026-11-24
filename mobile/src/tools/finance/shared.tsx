import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useTheme,
  useDynamicStyles,
  androidRipple,
  pressableStyle,
  triggerHaptic,
  getContrastInk,
  getThemedCardStyle,
  getThemedInputStyle,
  getThemedNumericStyle,
  type ThemeColors,
  type ThemeConfig,
  type ThemeMetrics,
} from "../../theme";
import { ExpandablePillRow } from "../../components/ExpandablePillRow";

/**
 * Formats a numeric string with thousands commas (e.g., "2400000" -> "2,400,000")
 * while preserving trailing decimal points during typing (UX-5).
 */
export function formatNumberWithCommas(raw: string): string {
  if (!raw || raw === "0") return "";
  const cleaned = raw.replace(/[^0-9.]/g, "");
  if (!cleaned) return "";
  const parts = cleaned.split(".");
  const intPart = parts[0].replace(/^0+(?=\d)/, "");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (parts.length > 1) {
    return `${formattedInt || "0"}.${parts[1].slice(0, 2)}`;
  }
  return formattedInt;
}

function getContextualPresets(
  label: string,
  prefix: string
): { label: string; value: string }[] {
  const lower = label.toLowerCase();
  if (prefix !== "KES") {
    if (lower.includes("month") || lower.includes("term") || lower.includes("period")) {
      return [
        { label: "12 mo", value: "12" },
        { label: "24 mo", value: "24" },
        { label: "36 mo", value: "36" },
        { label: "48 mo", value: "48" },
        { label: "60 mo", value: "60" },
      ];
    }
    if (lower.includes("area") || lower.includes("sqm") || lower.includes("m²") || lower.includes("size")) {
      return [
        { label: "80 m²", value: "80" },
        { label: "120 m²", value: "120" },
        { label: "160 m²", value: "160" },
        { label: "220 m²", value: "220" },
      ];
    }
    if (lower.includes("unit") || lower.includes("m³") || lower.includes("consumption")) {
      return [
        { label: "10 m³", value: "10" },
        { label: "20 m³", value: "20" },
        { label: "35 m³", value: "35" },
        { label: "50 m³", value: "50" },
      ];
    }
    return [];
  }

  if (
    lower.includes("salary") ||
    lower.includes("gross") ||
    lower.includes("net") ||
    lower.includes("income") ||
    lower.includes("rent")
  ) {
    return [
      { label: "KES 35K", value: "35000" },
      { label: "KES 60K", value: "60000" },
      { label: "KES 100K", value: "100000" },
      { label: "KES 180K", value: "180000" },
      { label: "KES 350K", value: "350000" },
    ];
  }
  if (
    lower.includes("property") ||
    lower.includes("land") ||
    lower.includes("crsp") ||
    lower.includes("value")
  ) {
    return [
      { label: "KES 1.5M", value: "1500000" },
      { label: "KES 3M", value: "3000000" },
      { label: "KES 5M", value: "5000000" },
      { label: "KES 10M", value: "10000000" },
    ];
  }
  if (
    lower.includes("deposit") ||
    lower.includes("savings") ||
    lower.includes("loan") ||
    lower.includes("balance")
  ) {
    return [
      { label: "KES 50K", value: "50000" },
      { label: "KES 150K", value: "150000" },
      { label: "KES 300K", value: "300000" },
      { label: "KES 600K", value: "600000" },
      { label: "KES 1M", value: "1000000" },
    ];
  }
  if (
    lower.includes("mpesa") ||
    lower.includes("send") ||
    lower.includes("withdraw") ||
    lower.includes("token") ||
    lower.includes("amount")
  ) {
    return [
      { label: "KES 500", value: "500" },
      { label: "KES 1,000", value: "1000" },
      { label: "KES 2,500", value: "2500" },
      { label: "KES 5,000", value: "5000" },
      { label: "KES 15,000", value: "15000" },
      { label: "KES 35,000", value: "35000" },
    ];
  }
  return [];
}

export function KESInput({
  label,
  value,
  onChangeText,
  placeholder = "0",
  subtext,
  prefix = "KES",
  presets,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  subtext?: string;
  prefix?: string;
  presets?: { label: string; value: string }[];
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const displayValue = useMemo(() => formatNumberWithCommas(value), [value]);
  const effectivePresets = useMemo(
    () => presets ?? getContextualPresets(label, prefix),
    [presets, label, prefix]
  );

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputBox}>
        <View style={styles.kesPrefixBox}>
          <Text style={styles.kesPrefix}>{prefix}</Text>
        </View>
        <TextInput
          multiline={false}
          numberOfLines={1}
          keyboardType="numeric"
          returnKeyType="done"
          maxLength={14}
          accessibilityLabel={label}
          value={displayValue}
          onChangeText={(txt) => {
            const cleaned = txt.replace(/,/g, "").replace(/[^0-9.]/g, "");
            const dotIdx = cleaned.indexOf(".");
            const singleDot = dotIdx === -1 ? cleaned : cleaned.slice(0, dotIdx + 1) + cleaned.slice(dotIdx + 1).replace(/\./g, "");
            const rawDigits = singleDot.replace(/^0+(?=\d)/, "");
            onChangeText(rawDigits === "0" ? "" : rawDigits);
          }}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          style={styles.textInput}
        />
        {displayValue.length > 0 && (
          <Pressable
            onPress={() => {
              triggerHaptic(8);
              onChangeText("");
            }}
            accessibilityRole="button"
            accessibilityLabel={`Clear ${label}`}
            hitSlop={10}
            style={styles.clearInputBtn}
          >
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>
      {effectivePresets.length > 0 && (
        <ExpandablePillRow contentContainerStyle={styles.presetRow}>
          {effectivePresets.map((chip) => {
            const active = value === chip.value;
            return (
              <Pressable
                key={chip.value}
                android_ripple={androidRipple(theme.rippleColor)}
                accessibilityRole="button"
                accessibilityLabel={`Set ${label} to ${chip.label}`}
                onPress={() => {
                  triggerHaptic(8);
                  onChangeText(chip.value);
                }}
                style={pressableStyle([
                  styles.presetChip,
                  active && styles.presetChipActive,
                ])}
              >
                <Text
                  style={[
                    styles.presetChipText,
                    active && styles.presetChipTextActive,
                  ]}
                >
                  {chip.label}
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>
      )}
      {subtext ? <Text style={styles.inputHint}>{subtext}</Text> : null}
    </View>
  );
}

export function StatCard({
  label,
  value,
  highlight = false,
  subtext,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  subtext?: string;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={[styles.statCard, highlight && styles.statCardHighlight]}>
      <Text style={[styles.statLabel, highlight && { color: theme.gold }]}>
        {label}
      </Text>
      <Text
        style={[
          styles.statValue,
          highlight && { color: theme.gold, fontSize: 22 },
        ]}
      >
        {value}
      </Text>
      {subtext && <Text style={styles.statSubtext}>{subtext}</Text>}
    </View>
  );
}

export function Row({
  label,
  value,
  isDeduction = false,
  isPositive = false,
  isTotal = false,
}: {
  label: string;
  value: string;
  isDeduction?: boolean;
  isPositive?: boolean;
  isTotal?: boolean;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const { resolvedFonts } = useTheme();
  return (
    <View
      style={[
        styles.tableRow,
        isTotal && {
          borderTopWidth: 1,
          borderTopColor: theme.borderLight,
          paddingTop: 10,
        },
      ]}
    >
      <Text
        style={[
          styles.rowLabel,
          isTotal && { fontFamily: resolvedFonts?.heading || "Outfit_700Bold", color: theme.textPrimary },
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.rowValue,
          isDeduction && { color: theme.kenyaRedLight },
          isPositive && { color: theme.kenyaGreenLight },
          isTotal && {
            fontFamily: resolvedFonts?.heading || "Outfit_800ExtraBold",
            color: theme.gold,
            fontSize: 15,
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

/**
 * Stacked Visual Proportion Breakdown Bar (UX-11)
 * Visualizes Net Pay vs Tax vs Deductions or Cost Components at a glance.
 */
export function BreakdownBar({
  title,
  segments,
}: {
  title?: string;
  segments: { label: string; value: number; color: string }[];
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const { resolvedFonts } = useTheme();
  const validSegments = segments.filter((s) => s.value > 0);
  const total = validSegments.reduce((acc, s) => acc + s.value, 0);
  if (total <= 0 || validSegments.length === 0) return null;

  return (
    <View style={styles.breakdownCard}>
      {title && <Text style={styles.breakdownTitle}>{title}</Text>}
      <View style={styles.breakdownTrack}>
        {validSegments.map((seg, idx) => {
          const pct = Math.max(3, (seg.value / total) * 100);
          return (
            <View
              key={`${seg.label}-${idx}`}
              style={{
                flex: pct,
                backgroundColor: seg.color,
                height: "100%",
              }}
            />
          );
        })}
      </View>
      <View style={styles.breakdownLegend}>
        {validSegments.map((seg, idx) => {
          const pct = Math.round((seg.value / total) * 100);
          return (
            <View key={`leg-${seg.label}-${idx}`} style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: seg.color }]} />
              <Text style={[styles.legendText, { color: theme.textSecondary }, { flexShrink: 1 }]}>
                {seg.label}:{" "}
                <Text style={{ fontFamily: resolvedFonts?.heading || "Outfit_700Bold", color: theme.textPrimary }}>
                  {pct}%
                </Text>
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

/**
 * 1-Tap Native Share & Copy Action Bar for Calculator Breakdowns & Legal Notices (MOB-12, UX-11)
 */
export function ShareCopyBar({
  title,
  summaryText,
  shareLabel = "Share Breakdown",
}: {
  title: string;
  summaryText: string;
  shareLabel?: string;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [sharedFeedback, setSharedFeedback] = useState<string | null>(null);
  const shareTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
    };
  }, []);

  const handleShare = async () => {
    triggerHaptic(12);
    try {
      await Share.share({
        title,
        message: `${title}\n\n${summaryText}\n\n— Calculated via KenyaHub (kenyahub.me)`,
      });
      setSharedFeedback("Shared!");
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
      shareTimerRef.current = setTimeout(() => {
        shareTimerRef.current = null;
        setSharedFeedback(null);
      }, 2200);
    } catch {
      // User dismissed share sheet
    }
  };

  return (
    <View style={styles.shareBarRow}>
      <Pressable
        onPress={handleShare}
        accessibilityRole="button"
        accessibilityLabel={shareLabel}
        android_ripple={androidRipple(theme.rippleColor)}
        style={pressableStyle(styles.sharePrimaryBtn)}
      >
        <Ionicons
          name={sharedFeedback ? "checkmark-circle" : "share-social-outline"}
          size={16}
          color={theme.gold}
        />
        <Text style={styles.sharePrimaryBtnText}>
          {sharedFeedback || shareLabel}
        </Text>
      </Pressable>
    </View>
  );
}

export const createStyles = (
  theme: ThemeColors,
  metrics?: ThemeMetrics,
  resolvedFonts?: { heading: string; body: string; bold: string },
  themeConfig?: ThemeConfig
) => {
  const hf = (fallback: string) => resolvedFonts?.heading || fallback;
  const bf = (fallback: string) => resolvedFonts?.body || fallback;
  const bdf = (fallback: string) => resolvedFonts?.bold || fallback;
  const cardTheme = themeConfig && metrics ? getThemedCardStyle(theme, themeConfig, metrics) : null;
  const inputTheme = themeConfig && metrics ? getThemedInputStyle(theme, themeConfig, metrics) : null;
  const numStyle = themeConfig ? getThemedNumericStyle(themeConfig, resolvedFonts) : {};
  const pad = metrics?.cardPaddingPx ?? 16;
  const cRad = metrics?.cardRadiusPx ?? 16;
  const bRad = metrics?.buttonRadiusPx ?? 12;
  const fScale = metrics?.fontScale ?? 1;
  return StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    inputGroup: {
      marginBottom: 4,
    },
    inputLabel: {
      fontSize: 12,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textSecondary,
      marginBottom: 6,
    },
    inputHint: {
      fontSize: 11,
      fontFamily: bf("Inter_400Regular"),
      color: theme.textMuted,
      marginTop: 4,
    },
    inputBox: {
      flexDirection: "row",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      overflow: "hidden",
      alignItems: "center",
    },
    kesPrefixBox: {
      backgroundColor: `${theme.gold}15`,
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRightWidth: 1,
      borderRightColor: theme.border,
    },
    kesPrefix: {
      fontSize: 12,
      fontFamily: hf("Outfit_800ExtraBold"),
      color: theme.gold,
    },
    textInput: {
    ...numStyle,
      flex: 1,
      fontSize: 16,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    clearInputBtn: {
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    presetRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginTop: 7,
      paddingVertical: 1,
    },
    presetChip: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.surfaceContainerLow,
    },
    presetChipActive: {
      backgroundColor: theme.primaryContainer,
      borderColor: theme.gold,
    },
    presetChipText: {
      fontSize: 11,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textSecondary,
    },
    presetChipTextActive: {
      color: theme.gold,
    },
    statCard: {
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 16,
      alignItems: "center",
    },
    statCardHighlight: {
      backgroundColor: `${theme.gold}12`,
      borderColor: `${theme.gold}40`,
    },
    statLabel: {
      fontSize: 11,
      fontFamily: hf("Outfit_800ExtraBold"),
      letterSpacing: 1,
      color: theme.textSecondary,
      marginBottom: 4,
    },
    statValue: {
    ...numStyle,
      fontSize: 20,
      fontFamily: hf("Outfit_800ExtraBold"),
      color: theme.textPrimary,
    },
    statSubtext: {
      fontSize: 11,
      fontFamily: bf("Inter_400Regular"),
      color: theme.textMuted,
      marginTop: 4,
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingVertical: 8,
      gap: 12,
    },
    rowLabel: {
      fontSize: 12.5,
      fontFamily: bf("Inter_400Regular"),
      color: theme.textSecondary,
      flex: 1,
      flexShrink: 1,
      paddingRight: 8,
    },
    rowValue: {
    ...numStyle,
      fontSize: 12.5,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textPrimary,
      flexShrink: 0,
      maxWidth: "48%",
      textAlign: "right",
    },
    subHeading: {
      fontSize: 13,
      fontFamily: hf("Outfit_800ExtraBold"),
      color: theme.gold,
      letterSpacing: 0.5,
      marginTop: 6,
    },
    pillSelector: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 2,
      marginBottom: 4,
    },
    pillBtn: {
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 14,
      paddingVertical: 7,
      borderRadius: 999,
    },
    pillBtnActive: {
      backgroundColor: theme.gold,
      borderColor: theme.gold,
    },
    pillBtnText: {
      fontSize: 12,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textSecondary,
    },
    pillBtnTextActive: {
      color: getContrastInk(theme.gold),
    },
    tipCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: `${theme.gold}15`,
      borderWidth: 1,
      borderColor: `${theme.gold}35`,
      borderRadius: 12,
      padding: 12,
    },
    tipText: {
      flex: 1,
      fontSize: 12,
      fontFamily: bf("Inter_400Regular"),
      color: theme.textPrimary,
      lineHeight: 17,
    },
    breakdownCard: {
      backgroundColor: theme.bgCard,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 12,
      gap: 8,
    },
    breakdownTitle: {
      fontSize: 11,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.textSecondary,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },
    breakdownTrack: {
      height: 10,
      borderRadius: 5,
      overflow: "hidden",
      flexDirection: "row",
      backgroundColor: theme.surfaceContainerHigh,
      gap: 2,
    },
    breakdownLegend: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    legendItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    legendDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    legendText: {
      fontSize: 11,
      fontFamily: bf("Inter_500Medium"),
    },
    shareBarRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: 2,
    },
    sharePrimaryBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 9,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: `${theme.gold}50`,
      backgroundColor: `${theme.gold}16`,
    },
    sharePrimaryBtnText: {
      fontSize: 12,
      fontFamily: hf("Outfit_700Bold"),
      color: theme.gold,
    },
  });
}
