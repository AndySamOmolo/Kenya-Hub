import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles, ThemeColors } from "../theme";
import cbcData from "../shared/data/cbc-curriculum.json";
import proverbsData from "../shared/data/kikuyu-proverbs.json";
import rankingsData from "../shared/data/kcse-rankings.json";
import termsData from "../shared/data/school-terms.json";
import languagesData from "../shared/data/kenya-languages.json";

/** 1. CBC Grade & Age Checker */
export function CbcGradeAgeTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const currentYear = 2026;
  const [birthYear, setBirthYear] = useState("2017");
  const year = Number(birthYear) || 2017;
  const age = Math.max(0, currentYear - year);

  const gradeInfo = useMemo(() => {
    if (age < 4) {
      return {
        grade: "Pre-School / Daycare",
        system: "Home / Early Daycare",
        level: "Early Childhood",
        ageGroup: "Under 4 years",
      };
    } else if (age === 4) {
      return {
        grade: "PP1 (Pre-Primary 1)",
        system: "Baby Class",
        level: "Pre-Primary",
        ageGroup: "4 years",
      };
    } else if (age === 5) {
      return {
        grade: "PP2 (Pre-Primary 2)",
        system: "Nursery / KG",
        level: "Pre-Primary",
        ageGroup: "5 years",
      };
    } else if (age === 6) {
      return {
        grade: "Grade 1",
        system: "Class 1",
        level: "Lower Primary",
        ageGroup: "6 years",
      };
    } else if (age === 7) {
      return {
        grade: "Grade 2",
        system: "Class 2",
        level: "Lower Primary",
        ageGroup: "7 years",
      };
    } else if (age === 8) {
      return {
        grade: "Grade 3",
        system: "Class 3",
        level: "Lower Primary",
        ageGroup: "8 years",
      };
    } else if (age === 9) {
      return {
        grade: "Grade 4",
        system: "Class 4",
        level: "Upper Primary",
        ageGroup: "9 years",
      };
    } else if (age === 10) {
      return {
        grade: "Grade 5",
        system: "Class 5",
        level: "Upper Primary",
        ageGroup: "10 years",
      };
    } else if (age === 11) {
      return {
        grade: "Grade 6",
        system: "Class 6",
        level: "Upper Primary (KPSEA)",
        ageGroup: "11 years",
      };
    } else if (age === 12) {
      return {
        grade: "Grade 7",
        system: "Class 7 / JSS 1",
        level: "Junior Secondary School (JSS)",
        ageGroup: "12 years",
      };
    } else if (age === 13) {
      return {
        grade: "Grade 8",
        system: "Class 8 / JSS 2",
        level: "Junior Secondary School (JSS)",
        ageGroup: "13 years",
      };
    } else if (age === 14) {
      return {
        grade: "Grade 9",
        system: "Form 1 / JSS 3",
        level: "Junior Secondary (KJSEA Assessment)",
        ageGroup: "14 years",
      };
    } else if (age === 15) {
      return {
        grade: "Grade 10",
        system: "Form 2 / Senior School 1",
        level: "Senior Secondary School",
        ageGroup: "15 years",
      };
    } else if (age === 16) {
      return {
        grade: "Grade 11",
        system: "Form 3 / Senior School 2",
        level: "Senior Secondary School",
        ageGroup: "16 years",
      };
    } else if (age === 17) {
      return {
        grade: "Grade 12",
        system: "Form 4 / KCSE Equivalent",
        level: "Senior Secondary (KSE)",
        ageGroup: "17 years",
      };
    } else {
      return {
        grade: "Tertiary / Higher Education",
        system: "University / TVET / College",
        level: "Post-Secondary Education",
        ageGroup: "18+ years",
      };
    }
  }, [age]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Child Year of Birth</Text>
        <TextInput
          value={birthYear}
          onChangeText={setBirthYear}
          keyboardType="numeric"
          placeholder="e.g. 2017"
          placeholderTextColor={theme.textMuted}
          style={styles.textInput}
        />
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statLabel}>EXPECTED CBC GRADE LEVEL</Text>
        <Text style={styles.statValue}>{gradeInfo.grade}</Text>
        <Text style={styles.statSubtext}>Child Age: {age} years old in {currentYear}</Text>
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
      </View>
    </View>
  );
}

/** 2. KCSE Grade Calculator */
export function KcseCalculatorTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const gradePoints: Record<string, number> = {
    A: 12, "A-": 11, "B+": 10, B: 9, "B-": 8,
    "C+": 7, C: 6, "C-": 5, "D+": 4, D: 3, "D-": 2, E: 1,
  };

  const possibleGrades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];

  const subjects = [
    "English",
    "Kiswahili",
    "Mathematics",
    "Biology / Chemistry",
    "Physics / History",
    "Geography / CRE / IRE",
    "Business / Agriculture / Computer",
  ];

  const [grades, setGrades] = useState<string[]>([
    "B+", "B", "A-", "B", "C+", "B+", "A",
  ]);

  const updateGrade = (idx: number, g: string) => {
    const copy = [...grades];
    copy[idx] = g;
    setGrades(copy);
  };

  const calc = useMemo(() => {
    const totalPoints = grades.reduce((sum, g) => sum + (gradePoints[g] || 0), 0);
    const meanPoints = (totalPoints / 7).toFixed(2);
    const numMean = Number(meanPoints);

    let meanGrade = "E";
    if (numMean >= 11.5) meanGrade = "A";
    else if (numMean >= 10.5) meanGrade = "A-";
    else if (numMean >= 9.5) meanGrade = "B+";
    else if (numMean >= 8.5) meanGrade = "B";
    else if (numMean >= 7.5) meanGrade = "B-";
    else if (numMean >= 6.5) meanGrade = "C+";
    else if (numMean >= 5.5) meanGrade = "C";
    else if (numMean >= 4.5) meanGrade = "C-";
    else if (numMean >= 3.5) meanGrade = "D+";
    else if (numMean >= 2.5) meanGrade = "D";
    else if (numMean >= 1.5) meanGrade = "D-";

    const qualifiesUniversity = numMean >= 6.5;

    return { totalPoints, meanPoints, meanGrade, qualifiesUniversity };
  }, [grades]);

  return (
    <View style={styles.toolWrap}>
      <View style={styles.statCard}>
        <Text style={styles.statLabel}>KCSE OVERALL MEAN GRADE</Text>
        <Text style={styles.statValue}>{calc.meanGrade}</Text>
        <Text style={styles.statSubtext}>
          Total Points: {calc.totalPoints} / 84 · Average: {calc.meanPoints}
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

      <Text style={styles.subHeading}>Select Grades for 7 Subjects</Text>
      <View style={styles.card}>
        {subjects.map((sub, idx) => (
          <View key={idx} style={styles.subjectRow}>
            <Text style={styles.subjectLabel} numberOfLines={1}>{sub}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 4 }}>
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
            </ScrollView>
          </View>
        ))}
      </View>
    </View>
  );
}

/** 3. Kikuyu Proverbs (Thimo cia Gĩkũyũ) */
export function KikuyuProverbsTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const proverbs = Array.isArray(proverbsData) ? proverbsData : [];

  const [randomIdx, setRandomIdx] = useState(0);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return proverbs.slice(0, 15);
    return proverbs
      .filter(
        (p: any) =>
          (p.kikuyu && p.kikuyu.toLowerCase().includes(query)) ||
          (p.translation && p.translation.toLowerCase().includes(query)) ||
          (p.explanation && p.explanation.toLowerCase().includes(query))
      )
      .slice(0, 30);
  }, [q, proverbs]);

  const handleRandom = () => {
    if (proverbs.length > 0) {
      setRandomIdx(Math.floor(Math.random() * proverbs.length));
    }
  };

  const featured = proverbs[randomIdx] || proverbs[0];

  return (
    <View style={styles.toolWrap}>
      {/* Featured Proverb Card */}
      {featured && (
        <View style={styles.featuredCard}>
          <View style={styles.featuredTop}>
            <Text style={styles.featuredLabel}>THIMO YA UMŨTHĨ (FEATURED WISDOM)</Text>
            <Pressable onPress={handleRandom} style={styles.randomBtn} hitSlop={8}>
              <Ionicons name="dice-outline" size={16} color={theme.gold} />
              <Text style={styles.randomBtnText}>Random</Text>
            </Pressable>
          </View>
          <Text style={styles.kikuyuText}>&ldquo;{featured.kikuyu}&rdquo;</Text>
          <Text style={styles.translationText}>{featured.translation}</Text>
          {featured.explanation && (
            <Text style={styles.explanationText}>{featured.explanation}</Text>
          )}
        </View>
      )}

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Search 980+ proverbs by Kikuyu or English..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.subHeading}>
        Showing {filtered.length} Proverbs
      </Text>

      {filtered.map((item: any, i: number) => (
        <View key={item.id || i} style={styles.proverbCard}>
          <Text style={styles.cardKikuyu}>{item.kikuyu}</Text>
          <Text style={styles.cardTranslation}>{item.translation}</Text>
          {item.explanation && (
            <Text style={styles.cardExplanation}>{item.explanation}</Text>
          )}
        </View>
      ))}
    </View>
  );
}

/** 4. KCSE Top Schools Rankings */
export function KcseRankingsTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const schools = (rankingsData as any).schools || [];

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>
        Top KCSE Secondary Schools in Kenya ({rankingsData.year})
      </Text>
      {schools.slice(0, 15).map((s: any) => (
        <View key={s.rank} style={styles.rankingCard}>
          <View style={styles.rankBadge}>
            <Text style={styles.rankNum}>#{s.rank}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.schoolName}>{s.name}</Text>
            <Text style={styles.schoolMeta}>
              {s.county} County · {s.type}
            </Text>
          </View>
          <View style={styles.scoreWrap}>
            <Text style={styles.meanScore}>{s.meanScore.toFixed(2)}</Text>
            <Text style={styles.meanLabel}>{s.aGrades} A&apos;s</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

/** 5. School Terms Calendar */
export function SchoolTermsTool() {
  const { theme, styles } = useDynamicStyles(createStyles);
  const terms = termsData.years?.["2025"]?.terms || [];

  return (
    <View style={styles.toolWrap}>
      <Text style={styles.subHeading}>Ministry of Education School Term Dates</Text>
      {terms.map((t: any) => (
        <View key={t.term} style={styles.termCard}>
          <View style={styles.termHeader}>
            <Text style={styles.termName}>{t.name}</Text>
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
      ))}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    toolWrap: {
      gap: 14,
    },
    inputGroup: {
      marginBottom: 6,
    },
    inputLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textSecondary,
      marginBottom: 6,
    },
    textInput: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      fontSize: 16,
      fontWeight: "700",
      color: colors.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    statCard: {
      backgroundColor: "rgba(200, 150, 30, 0.08)",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: "rgba(200, 150, 30, 0.3)",
      padding: 16,
      alignItems: "center",
    },
    statLabel: {
      fontSize: 11,
      fontWeight: "800",
      letterSpacing: 1,
      color: colors.gold,
      marginBottom: 4,
    },
    statValue: {
      fontSize: 24,
      fontWeight: "900",
      color: colors.textPrimary,
    },
    statSubtext: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: 4,
    },
    qualificationBadge: {
      marginTop: 10,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },
    qualificationText: {
      fontSize: 11,
      fontWeight: "700",
    },
    card: {
      backgroundColor: colors.bgCard,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
    },
    rowLabel: {
      fontSize: 13,
      color: colors.textSecondary,
      flex: 1,
    },
    rowValue: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    subHeading: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.gold,
      letterSpacing: 0.5,
    },
    subjectRow: {
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      gap: 6,
    },
    subjectLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    gradeChip: {
      backgroundColor: colors.bgSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
    },
    gradeChipActive: {
      backgroundColor: colors.gold,
      borderColor: colors.gold,
    },
    gradeChipText: {
      fontSize: 11,
      fontWeight: "800",
      color: colors.textSecondary,
    },
    gradeChipTextActive: {
      color: colors.kenyaBlack,
    },
    featuredCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 16,
      padding: 16,
    },
    featuredTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    featuredLabel: {
      fontSize: 10,
      fontWeight: "800",
      color: colors.gold,
      letterSpacing: 0.8,
    },
    randomBtn: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingHorizontal: 8,
      paddingVertical: 3,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      borderRadius: 6,
    },
    randomBtnText: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.gold,
    },
    kikuyuText: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.textPrimary,
      lineHeight: 22,
    },
    translationText: {
      fontSize: 13,
      color: colors.gold,
      marginTop: 6,
      lineHeight: 18,
    },
    explanationText: {
      fontSize: 12,
      color: colors.textMuted,
      marginTop: 6,
      lineHeight: 16,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 12,
      height: 42,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      color: colors.textPrimary,
      fontSize: 13,
    },
    proverbCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 12,
      gap: 4,
    },
    cardKikuyu: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    cardTranslation: {
      fontSize: 12,
      color: colors.gold,
    },
    cardExplanation: {
      fontSize: 11,
      color: colors.textMuted,
      lineHeight: 15,
    },
    pillSelector: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 10,
    },
    pillBtnActive: {
      backgroundColor: colors.gold,
      borderColor: colors.gold,
    },
    pillBtnText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textSecondary,
    },
    pillBtnTextActive: {
      color: colors.kenyaBlack,
    },
    rankingCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    rankBadge: {
      width: 36,
      height: 36,
      borderRadius: 10,
      backgroundColor: "rgba(200, 150, 30, 0.12)",
      alignItems: "center",
      justifyContent: "center",
    },
    rankNum: {
      fontSize: 12,
      fontWeight: "900",
      color: colors.gold,
    },
    schoolName: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    schoolMeta: {
      fontSize: 11,
      color: colors.textMuted,
      marginTop: 1,
    },
    scoreWrap: {
      alignItems: "flex-end",
    },
    meanScore: {
      fontSize: 16,
      fontWeight: "900",
      color: colors.gold,
    },
    meanLabel: {
      fontSize: 10,
      color: colors.textMuted,
    },
    termCard: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 14,
      padding: 14,
      gap: 6,
    },
    termHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    termName: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.textPrimary,
    },
    weeksBadge: {
      backgroundColor: "rgba(26, 139, 209, 0.15)",
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
    },
    weeksText: {
      fontSize: 11,
      fontWeight: "800",
      color: colors.sky,
    },
    termDatesRow: {},
    termDates: {
      fontSize: 13,
      color: colors.gold,
      fontWeight: "600",
    },
    midTermText: {
      fontSize: 11,
      color: colors.textSecondary,
    },
    termNotes: {
      fontSize: 11,
      color: colors.textMuted,
    },
  });
}
