import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles } from "./shared";

/** 2. KCSE Grade Calculator */
const KCSE_CAREERS = [
  { career: "Medicine & Surgery", minGrade: "A-", minPoints: 11 },
  { career: "Engineering (Civil, Electrical, Mech.)", minGrade: "B+", minPoints: 10 },
  { career: "Law (LLB)", minGrade: "B+", minPoints: 10 },
  { career: "Architecture", minGrade: "B+", minPoints: 10 },
  { career: "Pharmacy", minGrade: "B+", minPoints: 10 },
  { career: "Computer Science / IT", minGrade: "B", minPoints: 9 },
  { career: "Commerce / Business Admin", minGrade: "C+", minPoints: 7 },
  { career: "Education (Arts / Science)", minGrade: "C+", minPoints: 7 },
  { career: "Nursing (Degree)", minGrade: "C+", minPoints: 7 },
  { career: "Diploma Courses (TVET)", minGrade: "C-", minPoints: 5 },
  { career: "Certificate / Artisan Courses", minGrade: "D+", minPoints: 4 },
];

const MEAN_GRADE_BOUNDARIES = [
  { grade: "A", points: 12, range: "81 – 84 pts" },
  { grade: "A-", points: 11, range: "74 – 80 pts" },
  { grade: "B+", points: 10, range: "67 – 73 pts" },
  { grade: "B", points: 9, range: "60 – 66 pts" },
  { grade: "B-", points: 8, range: "53 – 59 pts" },
  { grade: "C+", points: 7, range: "46 – 52 pts" },
  { grade: "C", points: 6, range: "39 – 45 pts" },
  { grade: "C-", points: 5, range: "32 – 38 pts" },
  { grade: "D+", points: 4, range: "25 – 31 pts" },
  { grade: "D", points: 3, range: "18 – 24 pts" },
  { grade: "D-", points: 2, range: "11 – 17 pts" },
  { grade: "E", points: 1, range: "7 – 10 pts" },
];

export function KcseCalculatorTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const gradePoints: Record<string, number> = {
    A: 12, "A-": 11, "B+": 10, B: 9, "B-": 8,
    "C+": 7, C: 6, "C-": 5, "D+": 4, D: 3, "D-": 2, E: 1,
  };

  const possibleGrades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];

  const subjects = [
    "1. English (Compulsory)",
    "2. Kiswahili",
    "3. Mathematics",
    "4. Biology",
    "5. Chemistry",
    "6. Physics / History",
    "7. Geography / CRE / IRE",
    "8. Business / Agriculture / Computer",
  ];

  const [grades, setGrades] = useState<string[]>([
    "B+", "B", "A-", "B", "B+", "C+", "B+", "A",
  ]);

  const updateGrade = (idx: number, g: string) => {
    const copy = [...grades];
    copy[idx] = g;
    setGrades(copy);
  };

  const calc = useMemo(() => {
    const englishPoints = gradePoints[grades[0]] || 0;
    const otherPoints = grades
      .slice(1)
      .map((g) => gradePoints[g] || 0)
      .sort((a, b) => b - a);
    // KNEC counts English (or Kiswahili) + best 6 other subjects = 7 subjects (max 84), plus 8-subject total out of 96
    const best7Points = englishPoints + otherPoints.slice(0, 6).reduce((s, p) => s + p, 0);
    const all8Points = grades.reduce((sum, g) => sum + (gradePoints[g] || 0), 0);
    const meanPointsNum = best7Points / 7;
    const meanPoints = meanPointsNum.toFixed(2);
    const roundedPoints = Math.round(meanPointsNum);

    let meanGrade = "E";
    if (meanPointsNum >= 11.5) meanGrade = "A";
    else if (meanPointsNum >= 10.5) meanGrade = "A-";
    else if (meanPointsNum >= 9.5) meanGrade = "B+";
    else if (meanPointsNum >= 8.5) meanGrade = "B";
    else if (meanPointsNum >= 7.5) meanGrade = "B-";
    else if (meanPointsNum >= 6.5) meanGrade = "C+";
    else if (meanPointsNum >= 5.5) meanGrade = "C";
    else if (meanPointsNum >= 4.5) meanGrade = "C-";
    else if (meanPointsNum >= 3.5) meanGrade = "D+";
    else if (meanPointsNum >= 2.5) meanGrade = "D";
    else if (meanPointsNum >= 1.5) meanGrade = "D-";

    const qualifiesUniversity = meanPointsNum >= 6.5;

    return {
      best7Points,
      all8Points,
      meanPoints,
      meanPointsNum,
      roundedPoints,
      meanGrade,
      qualifiesUniversity,
    };
  }, [grades]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>KCSE OVERALL MEAN GRADE</Text>
        <Text style={styles.statValue}>{calc.meanGrade}</Text>
        <Text style={styles.statSubtext}>
          Best 7 Points: {calc.best7Points} / 84 · All 8: {calc.all8Points} / 96 · Mean: {calc.meanPoints} / 12.0
        </Text>
        <View
          style={[
            styles.qualificationBadge,
            {
              backgroundColor: calc.qualifiesUniversity
                ? "rgba(47, 164, 99, 0.15)"
                : "rgba(190, 33, 38, 0.15)",
            },
          ]}
        >
          <Text
            style={[
              styles.qualificationText,
              {
                color: calc.qualifiesUniversity
                  ? theme.kenyaGreenLight
                  : theme.kenyaRedLight,
              },
            ]}
          >
            {calc.qualifiesUniversity
              ? "✓ Qualifies for KUCCPS University Degree (C+ and above)"
              : "Diploma / TVET / Certificate Entry Level"}
          </Text>
        </View>
      </View>

      <Text style={styles.subHeading}>Select Grades for 8 KCSE Subjects (Best 7 Counted)</Text>
      <View style={styles.card}>
        {subjects.map((sub, idx) => (
          <View key={idx} style={[styles.subjectRow, idx === subjects.length - 1 && { borderBottomWidth: 0 }]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.subjectLabel} >{sub}</Text>
              <Text style={{ fontSize: 11, fontWeight: "800", color: theme.gold }}>
                {grades[idx]} ({gradePoints[grades[idx]]} pts)
              </Text>
            </View>
            <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              {possibleGrades.map((g) => (
                <Pressable
                  key={g}
                  onPress={() => updateGrade(idx, g)}
                  style={[
                    styles.gradeChip,
                    grades[idx] === g && styles.gradeChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.gradeChipText,
                      grades[idx] === g && styles.gradeChipTextActive,
                    ]}
                  >
                    {g}
                  </Text>
                </Pressable>
              ))}
            </ExpandablePillRow>
          </View>
        ))}
      </View>

      {/* Career Eligibility Table */}
      <Text style={styles.subHeading}>Degree & Career Eligibility Check</Text>
      <View style={styles.card}>
        {KCSE_CAREERS.map((item) => {
          const eligible = calc.roundedPoints >= item.minPoints;
          return (
            <View
              key={item.career}
              style={[
                styles.tableRow,
                { borderBottomWidth: 1, borderBottomColor: theme.border },
              ]}
            >
              <View style={{ flex: 1, paddingRight: 8 }}>
                <Text style={[styles.rowValue, { fontSize: 12 }]}>{item.career}</Text>
                <Text style={{ fontSize: 10, color: theme.textMuted }}>
                  Min Grade: {item.minGrade} ({item.minPoints} pts)
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: eligible
                    ? "rgba(47, 164, 99, 0.15)"
                    : "rgba(190, 33, 38, 0.12)",
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "800",
                    color: eligible ? theme.kenyaGreenLight : theme.kenyaRedLight,
                  }}
                >
                  {eligible ? "✓ Eligible" : "✗ Below min"}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* KCSE Mean Grade Boundaries */}
      <Text style={styles.subHeading}>KNEC Mean Grade Boundaries (7 Subjects)</Text>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {MEAN_GRADE_BOUNDARIES.map((b) => {
            const active = calc.meanGrade === b.grade;
            return (
              <View
                key={b.grade}
                style={{
                  flexGrow: 1, flexBasis: "29%", minWidth: 96,
                  padding: 8,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: active ? theme.gold : theme.border,
                  backgroundColor: active ? "rgba(200, 150, 30, 0.15)" : theme.bgSecondary,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "900", color: active ? theme.gold : theme.textPrimary }}>
                  {b.grade}
                </Text>
                <Text style={{ fontSize: 10, color: theme.textSecondary, fontWeight: "700" }}>
                  {b.points} pts
                </Text>
                <Text style={{ fontSize: 9, color: theme.textMuted }}>{b.range}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

