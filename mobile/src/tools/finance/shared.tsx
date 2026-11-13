import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useDynamicStyles, type ThemeColors } from "../../theme";

export function KESInput({
  label,
  value,
  onChangeText,
  placeholder = "0",
  subtext,
  prefix = "KES",
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  subtext?: string;
  prefix?: string;
}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputBox}>
        <View style={styles.kesPrefixBox}>
          <Text style={styles.kesPrefix}>{prefix}</Text>
        </View>
        <TextInput
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          keyboardType="numeric"
          value={value === "0" ? "" : value}
          onChangeText={(txt) => {
            const cleaned = txt.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
            onChangeText(cleaned === "0" ? "" : cleaned);
          }}
          placeholder={placeholder}
          placeholderTextColor={theme.textMuted}
          style={styles.textInput}
        />
      </View>
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
          isTotal && { fontWeight: "800", color: theme.textPrimary },
        ]}
      >
        {label}
      </Text>
      <Text
        style={[
          styles.rowValue,
          isDeduction && { color: theme.kenyaRedLight },
          isPositive && { color: theme.kenyaGreenLight },
          isTotal && { fontWeight: "800", color: theme.gold, fontSize: 15 },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}


export const createStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    inputGroup: {
      marginBottom: 4,
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.textSecondary,
      marginBottom: 6,
    },
    inputHint: {
      fontSize: 11,
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
      fontWeight: "800",
      color: theme.gold,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 10,
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
      fontWeight: "800",
      letterSpacing: 1,
      color: theme.textSecondary,
      marginBottom: 4,
    },
    statValue: {
      fontSize: 20,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "900",
      color: theme.textPrimary,
    },
    statSubtext: {
      fontSize: 11,
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
      color: theme.textSecondary,
      flex: 1,
      flexShrink: 1,
      paddingRight: 8,
    },
    rowValue: {
      fontSize: 12.5,
      fontWeight: "700",
      color: theme.textPrimary,
      flexShrink: 0,
      maxWidth: "48%",
      textAlign: "right",
    },
    subHeading: {
      fontSize: 13,
      fontFamily: "Outfit_800ExtraBold",
      fontWeight: "800",
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
      fontWeight: "700",
      color: theme.textSecondary,
    },
    pillBtnTextActive: {
      color: theme.kenyaBlack,
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
      color: theme.textPrimary,
      lineHeight: 17,
    },
  });
