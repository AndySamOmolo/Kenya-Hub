import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles } from "./shared";
import termsData from "../../shared/data/school-terms.json";

/** 5. School Terms Calendar */
export function SchoolTermsTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const availableYears = Object.keys((termsData as any).years || { "2025": {}, "2026": {}, "2027": {} });
  const [selectedYear, setSelectedYear] = useState<string>(
    availableYears.includes("2026") ? "2026" : availableYears[0]
  );

  const yearData = (termsData.years as any)?.[selectedYear] || (termsData.years as any)?.["2026"] || {};
  const terms: any[] = yearData.terms || [];
  const holidays: any[] = yearData.holidays || [];
  const todayIso = "2026-10-20";

  return (
    <View style={styles.toolWrap}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {availableYears.map((yr) => (
          <Pressable
            key={yr}
            onPress={() => setSelectedYear(yr)}
            style={{
              flex: 1,
              paddingVertical: 9,
              borderRadius: 999,
              borderWidth: 1,
              alignItems: "center",
              backgroundColor: selectedYear === yr ? theme.gold : theme.bgCard,
              borderColor: selectedYear === yr ? theme.gold : theme.border,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "800", color: selectedYear === yr ? theme.kenyaBlack : theme.textPrimary }}>
              {yr} Calendar
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.subHeading}>Ministry of Education School Term Dates ({selectedYear})</Text>
      {terms.map((t: any) => {
        const isCurrent = todayIso >= t.openingDate && todayIso <= t.closingDate;
        return (
          <View
            key={t.term}
            style={[
              styles.termCard,
              isCurrent && { borderColor: theme.kenyaGreenLight, borderWidth: 1.5 },
            ]}
          >
            <View style={styles.termHeader}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={styles.termName}>{t.name}</Text>
                {isCurrent && (
                  <View style={{ backgroundColor: "rgba(47, 164, 99, 0.2)", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 }}>
                    <Text style={{ fontSize: 10, fontWeight: "900", color: theme.kenyaGreenLight }}>
                      CURRENT TERM
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.weeksBadge}>
                <Text style={styles.weeksText}>{t.weeks} Weeks</Text>
              </View>
            </View>
            <View style={styles.termDatesRow}>
              <Text style={styles.termDates}>
                Opens: {t.openingDate} · Closes: {t.closingDate}
              </Text>
            </View>
            {t.midTermBreak && (
              <Text style={styles.midTermText}>
                Mid-term break: {t.midTermBreak.start} to {t.midTermBreak.end}
              </Text>
            )}
            {t.notes && <Text style={styles.termNotes}>{t.notes}</Text>}
          </View>
        );
      })}

      {/* School Holidays Table */}
      {holidays.length > 0 && (
        <>
          <Text style={[styles.subHeading, { marginTop: 6 }]}>
            School Holidays & Breaks — {selectedYear}
          </Text>
          <View style={styles.card}>
            {holidays.map((h: any, idx: number) => (
              <View
                key={idx}
                style={[
                  styles.tableRow,
                  idx < holidays.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowValue}>{h.name}</Text>
                  <Text style={{ fontSize: 11, color: theme.textMuted, marginTop: 2 }}>
                    {h.start} → {h.end}
                  </Text>
                </View>
                <View style={styles.weeksBadge}>
                  <Text style={styles.weeksText}>{h.weeks} Weeks</Text>
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

