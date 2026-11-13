import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles } from "./shared";
import cbcData from "../../shared/data/cbc-curriculum.json";

/** 1. CBC Grade & Age Checker */
export function CbcGradeAgeTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const currentYear = 2026;
  const [birthYear, setBirthYear] = useState("2017");
  const year = Number(birthYear) || 2017;
  const age = Math.max(0, currentYear - year);

  const gradeAgeMapping: {
    cbcGrade: string;
    age: number;
    old844: string;
    level: string;
  }[] = useMemo(
    () =>
      ((cbcData as any).gradeAgeMapping || []).map((m: any) => ({
        cbcGrade: m.grade || m.cbcGrade,
        age: m.turnsAge ?? m.age,
        old844: m.previousEquivalent || m.old844,
        level: m.level,
      })),
    []
  );

  const gradeInfo = useMemo(() => {
    const matched = gradeAgeMapping.find((m) => m.age === age);
    if (matched) {
      const nextGrade = gradeAgeMapping.find((m) => m.age === age + 1);
      return {
        grade: matched.cbcGrade,
        system: matched.old844,
        level: matched.level,
        ageGroup: `${matched.age} years`,
        nextMilestone: nextGrade
          ? `${nextGrade.cbcGrade} (${nextGrade.level}) at age ${nextGrade.age} in ${currentYear + 1}`
          : "University / TVET / Tertiary Education (Age 18+)",
      };
    }
    if (age < 4) {
      return {
        grade: "Pre-School / Daycare",
        system: "Home / Early Daycare",
        level: "Early Childhood",
        ageGroup: "Under 4 years",
        nextMilestone: `PP1 (Pre-Primary 1) at age 4 in ${year + 4}`,
      };
    }
    return {
      grade: "Tertiary / Higher Education",
      system: "University / TVET / College",
      level: "Post-Secondary Education",
      ageGroup: "18+ years",
      nextMilestone: "Higher Education / Career Placement",
    };
  }, [age, year, gradeAgeMapping]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Child Year of Birth</Text>
        <TextInput
            key={`ti-1-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
          value={birthYear === "0" ? "" : birthYear}
          onChangeText={(txt) => {
            const cleaned = txt.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, "");
            setBirthYear(cleaned === "0" ? "" : cleaned);
          }}
          keyboardType="numeric"
          placeholder="e.g. 2017"
          placeholderTextColor={theme.textMuted}
          style={styles.textInput}
        />
        <ExpandablePillRow contentContainerStyle={[styles.pillSelector, { marginTop: 8 }]}>
          {["2022", "2020", "2018", "2016", "2014", "2011", "2009"].map((yr) => (
            <Pressable
              key={yr}
              onPress={() => setBirthYear(yr)}
              style={[
                styles.pillBtn,
                birthYear === yr && styles.pillBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.pillBtnText,
                  birthYear === yr && styles.pillBtnTextActive,
                ]}
              >
                Born {yr} ({currentYear - Number(yr)}y)
              </Text>
            </Pressable>
          ))}
        </ExpandablePillRow>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statLabel}>EXPECTED CBC GRADE LEVEL ({currentYear})</Text>
        <Text style={styles.statValue}>{gradeInfo.grade}</Text>
        <Text style={styles.statSubtext}>
          Child Age: {age} years old in {currentYear}
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>CBC Curriculum Stage</Text>
          <Text style={[styles.rowValue, { color: theme.gold }]}>{gradeInfo.level}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>Former 8-4-4 Equivalent</Text>
          <Text style={styles.rowValue}>{gradeInfo.system}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.rowLabel}>Expected Standard Age</Text>
          <Text style={styles.rowValue}>{gradeInfo.ageGroup}</Text>
        </View>
        <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.rowLabel}>Next Milestone</Text>
          <Text style={[styles.rowValue, { color: theme.kenyaGreenLight, flex: 1, textAlign: "right" }]}>
            {gradeInfo.nextMilestone}
          </Text>
        </View>
      </View>

      {/* Complete CBC Grade-Age Guide Table */}
      <Text style={styles.subHeading}>Complete CBC Grade-Age Guide (PP1 – Grade 12)</Text>
      <View style={styles.card}>
        <View style={[styles.tableRow, { borderBottomWidth: 1, borderBottomColor: theme.border, paddingBottom: 8 }]}>
          <Text style={[styles.rowLabel, { fontWeight: "800", color: theme.textMuted, flex: 1.3 }]}>CBC Grade</Text>
          <Text style={[styles.rowLabel, { fontWeight: "800", color: theme.textMuted, flex: 0.7 }]}>Age</Text>
          <Text style={[styles.rowLabel, { fontWeight: "800", color: theme.textMuted, flex: 1 }]}>8-4-4 Equiv.</Text>
          <Text style={[styles.rowLabel, { fontWeight: "800", color: theme.textMuted, flex: 1.2, textAlign: "right" }]}>Stage</Text>
        </View>
        {gradeAgeMapping.map((row) => {
          const isMatch = row.age === age;
          return (
            <View
              key={row.cbcGrade}
              style={[
                styles.tableRow,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: theme.border,
                  backgroundColor: isMatch ? "rgba(200, 150, 30, 0.14)" : "transparent",
                  paddingHorizontal: isMatch ? 8 : 0,
                  borderRadius: isMatch ? 8 : 0,
                },
              ]}
            >
              <Text
                style={[
                  styles.rowValue,
                  { flex: 1.3, color: isMatch ? theme.gold : theme.textPrimary },
                ]}
              >
                {row.cbcGrade} {isMatch ? "← Child" : ""}
              </Text>
              <Text style={[styles.rowLabel, { flex: 0.7, color: theme.textPrimary }]}>
                {row.age} yrs
              </Text>
              <Text style={[styles.rowLabel, { flex: 1 }]}>{row.old844}</Text>
              <Text
                style={[
                  styles.rowLabel,
                  { flex: 1.2, textAlign: "right", color: isMatch ? theme.gold : theme.textSecondary, fontSize: 11 },
                ]}
              >
                {row.level}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

