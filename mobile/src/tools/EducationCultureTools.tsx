import { ExpandablePillRow } from "../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
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
  }[] = (cbcData as any).gradeAgeMapping || [];

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
          value={birthYear}
          onChangeText={setBirthYear}
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

/** 3. Kikuyu Proverbs (Thimo cia Gĩkũyũ) */
interface ProverbCategory {
  id: string;
  label: string;
  keywords: string[];
}

const PROVERB_CATEGORIES: ProverbCategory[] = [
  { id: "all", label: "All Themes", keywords: [] },
  {
    id: "wisdom",
    label: "Wisdom & Character",
    keywords: ["wisdom", "wise", "fool", "know", "learn", "advice", "truth", "lie", "word", "tongue", "mouth", "speak", "talk", "ear", "eye", "heart", "mind", "patience", "hurry", "haste", "pride", "humble", "old", "elder", "age"],
  },
  {
    id: "family",
    label: "Family & Kinship",
    keywords: ["child", "mother", "father", "son", "daughter", "wife", "husband", "marry", "marriage", "home", "house", "family", "born", "birth", "woman", "man", "girl", "boy", "parent", "brother", "sister", "in-law", "womb"],
  },
  {
    id: "work",
    label: "Farming & Wealth",
    keywords: ["work", "wealth", "rich", "poor", "poverty", "cultivat", "dig", "plant", "harvest", "garden", "field", "cattle", "cow", "goat", "sheep", "property", "debt", "borrow", "buy", "sell", "market", "food", "eat", "hunger", "belly", "stomach", "hand", "sweat"],
  },
  {
    id: "community",
    label: "Community & Friends",
    keywords: ["friend", "neighbour", "neighbor", "guest", "stranger", "help", "share", "give", "together", "alone", "one", "two", "many", "people", "village", "path", "road", "visit", "generous", "mean", "selfish", "peace", "quarrel"],
  },
  {
    id: "caution",
    label: "Caution & Danger",
    keywords: ["danger", "fear", "careful", "warn", "trap", "snake", "hyena", "leopard", "lion", "thief", "steal", "war", "fight", "spear", "shield", "sword", "club", "death", "die", "sick", "disease", "fire", "water", "river", "night", "dark", "run", "hide"],
  },
  {
    id: "nature",
    label: "Nature & Animals",
    keywords: ["tree", "forest", "bird", "monkey", "elephant", "dog", "frog", "bee", "honey", "rain", "sun", "wind", "mountain", "hill", "stone", "earth", "grass", "leaf", "fruit", "seed", "banana", "millet", "maize", "gourd"],
  },
  {
    id: "justice",
    label: "Justice & Truth",
    keywords: ["law", "court", "judge", "case", "elder", "council", "kiama", "right", "wrong", "guilt", "innocent", "punish", "pay", "fine", "oath", "witness", "god", "ngai", "curse", "bless"],
  },
];

function normalizeKikuyuText(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getProverbCategories(p: any): string[] {
  const haystack = `${p.translation || ""} ${p.explanation || ""} ${p.englishEquivalent || ""}`.toLowerCase();
  const matched: string[] = [];
  for (const cat of PROVERB_CATEGORIES) {
    if (cat.id === "all") continue;
    if (cat.keywords.some((kw) => haystack.includes(kw))) {
      matched.push(cat.id);
    }
  }
  return matched;
}

export function KikuyuProverbsTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const [q, setQ] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [onlyWithEquivalent, setOnlyWithEquivalent] = useState(false);
  const [sortBy, setSortBy] = useState<"id-asc" | "id-desc" | "alpha">("id-asc");
  const [showGuide, setShowGuide] = useState(false);
  const [page, setPage] = useState(1);
  const _mountRef = useRef(false);
  useEffect(() => {
    if (!_mountRef.current) { _mountRef.current = true; return; }
    onScrollToTop?.();
  }, [page, selectedCategory, onlyWithEquivalent, sortBy, onScrollToTop]);
  const pageSize = 25;

  const proverbs = Array.isArray(proverbsData) ? proverbsData : [];

  const proverbsWithMeta = useMemo(() => {
    return proverbs.map((p: any) => ({
      ...p,
      categories: getProverbCategories(p),
      normKikuyu: normalizeKikuyuText(p.kikuyu || ""),
      normTranslation: normalizeKikuyuText(p.translation || ""),
      normExplanation: normalizeKikuyuText(p.explanation || ""),
      normEquivalent: normalizeKikuyuText(p.englishEquivalent || ""),
    }));
  }, [proverbs]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: proverbsWithMeta.length };
    for (const cat of PROVERB_CATEGORIES) {
      if (cat.id !== "all") counts[cat.id] = 0;
    }
    for (const p of proverbsWithMeta) {
      for (const c of p.categories) {
        counts[c] = (counts[c] || 0) + 1;
      }
    }
    return counts;
  }, [proverbsWithMeta]);

  const [randomIdx, setRandomIdx] = useState(0);

  const filtered = useMemo(() => {
    const rawQ = q.trim().toLowerCase();
    const normQ = normalizeKikuyuText(rawQ);

    const result = proverbsWithMeta.filter((p) => {
      if (selectedCategory !== "all" && !p.categories.includes(selectedCategory)) {
        return false;
      }
      if (onlyWithEquivalent && !p.englishEquivalent) {
        return false;
      }
      if (!rawQ) return true;
      if (/^\d+$/.test(rawQ) && p.id === Number(rawQ)) return true;
      return (
        (p.kikuyu && p.kikuyu.toLowerCase().includes(rawQ)) ||
        p.normKikuyu.includes(normQ) ||
        p.normTranslation.includes(normQ) ||
        p.normExplanation.includes(normQ) ||
        p.normEquivalent.includes(normQ)
      );
    });

    const sorted = [...result];
    if (sortBy === "id-asc") sorted.sort((a, b) => (a.id || 0) - (b.id || 0));
    else if (sortBy === "id-desc") sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
    else if (sortBy === "alpha") sorted.sort((a, b) => (a.kikuyu || "").localeCompare(b.kikuyu || ""));
    return sorted;
  }, [q, selectedCategory, onlyWithEquivalent, sortBy, proverbsWithMeta]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const handleRandom = () => {
    if (proverbs.length > 0) {
      setRandomIdx(Math.floor(Math.random() * proverbs.length));
    }
  };

  const featured: any = proverbs[randomIdx] || proverbs[0];

  return (
    <View style={styles.toolWrap}>
      {/* Featured Proverb Card */}
      {featured && (
        <View style={styles.featuredCard}>
          <View style={styles.featuredTop}>
            <Text style={styles.featuredLabel}>
              THIMO YA UMŨTHĨ (#{featured.id || randomIdx + 1} OF {proverbs.length})
            </Text>
            <Pressable onPress={handleRandom} style={styles.randomBtn} hitSlop={8}>
              <Ionicons name="dice-outline" size={16} color={theme.gold} />
              <Text style={styles.randomBtnText}>Random</Text>
            </Pressable>
          </View>
          <Text style={styles.kikuyuText}>&ldquo;{featured.kikuyu}&rdquo;</Text>
          <Text style={styles.translationText}>{featured.translation}</Text>
          {featured.explanation ? (
            <Text style={styles.explanationText}>{featured.explanation}</Text>
          ) : null}
          {featured.englishEquivalent ? (
            <View style={{ marginTop: 8, backgroundColor: "rgba(47, 164, 99, 0.14)", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, alignSelf: "flex-start" }}>
              <Text style={{ fontSize: 11, fontWeight: "700", color: theme.kenyaGreenLight }}>
                English Equivalent: &ldquo;{featured.englishEquivalent}&rdquo;
              </Text>
            </View>
          ) : null}
        </View>
      )}

      {/* Collapsible Cultural & Vowel Pronunciation Guide */}
      <View style={styles.card}>
        <Pressable
          onPress={() => setShowGuide(!showGuide)}
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
            <Ionicons name="book-outline" size={16} color={theme.gold} />
            <Text style={{ fontSize: 13, fontWeight: "800", color: theme.textPrimary }}>
              Gĩkũyũ Pronunciation & Cultural Guide
            </Text>
          </View>
          <Ionicons
            name={showGuide ? "chevron-up" : "chevron-down"}
            size={18}
            color={theme.gold}
          />
        </Pressable>

        {showGuide && (
          <View style={{ marginTop: 12, gap: 10, borderTopWidth: 1, borderTopColor: theme.border, paddingTop: 10 }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                The 7 Vowels of Gĩkũyũ
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                Gĩkũyũ has 7 vowels: a, e, i, o, u plus two tilded vowels:{"\n"}
                • <Text style={{ fontWeight: "800", color: theme.textPrimary }}>ĩ</Text> — pronounced like &ldquo;e&rdquo; in &ldquo;they&rdquo; (closed mid-front vowel, e.g. Gĩkũyũ, tĩri).{"\n"}
                • <Text style={{ fontWeight: "800", color: theme.textPrimary }}>ũ</Text> — pronounced like &ldquo;o&rdquo; in &ldquo;go&rdquo; (closed mid-back vowel, e.g. mũndũ, nyũmba).{"\n"}
                Tip: Our search is diacritic-tolerant — typing &ldquo;mundu&rdquo; matches &ldquo;mũndũ&rdquo;.
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                Proverbs as Law & Precedent (Kĩama)
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                Among the Agĩkũyũ, proverbs (thimo) served as legal maxims in elders&apos; council (Kĩama) deliberations, moral instruction around the evening hearth (rũriĩ), and rhetorical shorthand in negotiations.
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.gold, marginBottom: 4 }}>
                Common Cultural Terms in the Collection
              </Text>
              <Text style={{ fontSize: 11, color: theme.textSecondary, lineHeight: 16 }}>
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Ngai / Mwene-Nyaga</Text>: God, Creator dwelling on Mt. Kenya (Kĩrĩnyaga){"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Mũndũ / Andũ</Text>: Person / People{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Mũciĩ / Nyũmba</Text>: Homestead / Family house{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Kĩama</Text>: Council of Elders{"\n"}
                • <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Hiti / Njogu / Ng&apos;ombe / Mbũri</Text>: Hyena / Elephant / Cattle / Goat
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={q}
          onChangeText={(val) => {
            setQ(val);
            setPage(1);
          }}
          placeholder="Search Gĩkũyũ proverbs or meaning..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {q.length > 0 && (
          <Pressable onPress={() => { setQ(""); setPage(1); }} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* Theme Category Filter Pills */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {PROVERB_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => {
                setSelectedCategory(cat.id);
                setPage(1);
              }}
              style={[
                styles.pillBtn,
                active && styles.pillBtnActive,
              ]}
            >
              <Text style={[styles.pillBtnText, active && styles.pillBtnTextActive]}>
                {cat.label} ({categoryCounts[cat.id] || 0})
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Sort & Equivalent Filter Controls */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {([
            { key: "id-asc", label: "# 1–1000" },
            { key: "id-desc", label: "# 1000–1" },
            { key: "alpha", label: "A–Z" },
          ] as const).map((opt) => (
            <Pressable
              key={opt.key}
              onPress={() => {
                setSortBy(opt.key);
                setPage(1);
              }}
              style={[
                styles.gradeChip,
                sortBy === opt.key && styles.gradeChipActive,
              ]}
            >
              <Text style={[styles.gradeChipText, sortBy === opt.key && styles.gradeChipTextActive]}>
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => {
            setOnlyWithEquivalent(!onlyWithEquivalent);
            setPage(1);
          }}
          style={[
            styles.gradeChip,
            onlyWithEquivalent && styles.gradeChipActive,
          ]}
        >
          <Text style={[styles.gradeChipText, onlyWithEquivalent && styles.gradeChipTextActive]}>
            ✓ With English Match
          </Text>
        </Pressable>
      </View>

      <Text style={styles.subHeading}>
        Showing {pageItems.length} of {filtered.length} Proverbs (Page {safePage} / {totalPages})
      </Text>

      {pageItems.map((item: any, i: number) => (
        <View key={item.id || i} style={styles.proverbCard}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>
              PROVERB #{item.id || i + 1}
            </Text>
            {item.englishEquivalent ? (
              <Text style={{ fontSize: 10, fontWeight: "700", color: theme.kenyaGreenLight }}>
                ≈ &ldquo;{item.englishEquivalent}&rdquo;
              </Text>
            ) : null}
          </View>
          <Text style={styles.cardKikuyu}>{item.kikuyu}</Text>
          <Text style={styles.cardTranslation}>{item.translation}</Text>
          {item.explanation ? (
            <Text style={styles.cardExplanation}>{item.explanation}</Text>
          ) : null}
        </View>
      ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
          <Pressable
            disabled={safePage <= 1}
            onPress={() => setPage((p) => Math.max(1, p - 1))}
            style={[
              styles.pillBtn,
              { opacity: safePage <= 1 ? 0.4 : 1 },
            ]}
          >
            <Text style={styles.pillBtnText}>← Prev 25</Text>
          </Pressable>
          <Text style={{ fontSize: 12, fontWeight: "700", color: theme.textSecondary }}>
            Page {safePage} of {totalPages}
          </Text>
          <Pressable
            disabled={safePage >= totalPages}
            onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
            style={[
              styles.pillBtn,
              { opacity: safePage >= totalPages ? 0.4 : 1 },
            ]}
          >
            <Text style={styles.pillBtnText}>Next 25 →</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

/** 4. KCSE Top Schools Rankings */
export function KcseRankingsTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const schools: any[] = (rankingsData as any).schools || [];
  const gradeDistribution: any[] = (rankingsData as any).gradeDistribution || [];

  const [search, setSearch] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const _mountRef = useRef(false);
  useEffect(() => {
    if (!_mountRef.current) { _mountRef.current = true; return; }
    onScrollToTop?.();
  }, [selectedCounty, selectedType, onScrollToTop]);
  const [sortBy, setSortBy] = useState<"mean" | "aGrades" | "change">("mean");

  const counties = useMemo(() => {
    const set = new Set<string>(schools.map((s) => s.county));
    return ["All", ...Array.from(set).sort()];
  }, [schools]);

  const types = useMemo(() => {
    const set = new Set<string>(schools.map((s) => s.type));
    return ["All", ...Array.from(set).sort()];
  }, [schools]);

  const filteredSchools = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = schools.filter((s) => {
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.county.toLowerCase().includes(q);
      const matchCounty = selectedCounty === "All" || s.county === selectedCounty;
      const matchType = selectedType === "All" || s.type === selectedType;
      return matchSearch && matchCounty && matchType;
    });

    return [...list].sort((a, b) => {
      if (sortBy === "mean") return b.meanScore - a.meanScore;
      if (sortBy === "aGrades") return b.aGrades - a.aGrades;
      const diffA = a.meanScore - (a.previousMean || a.meanScore);
      const diffB = b.meanScore - (b.previousMean || b.meanScore);
      return diffB - diffA;
    });
  }, [schools, search, selectedCounty, selectedType, sortBy]);

  return (
    <View style={styles.toolWrap}>
      {/* National Summary Stats */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, alignItems: "center", paddingVertical: 10 }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>EXAM YEAR</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.gold }}>{(rankingsData as any).year}</Text>
        </View>
        <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, alignItems: "center", paddingVertical: 10 }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>CANDIDATES</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.textPrimary }}>
            {(((rankingsData as any).totalCandidates || 993226) / 1000).toFixed(0)}K
          </Text>
        </View>
        <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, alignItems: "center", paddingVertical: 10 }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>EXAM CENTRES</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.sky }}>
            {((rankingsData as any).totalSchools || 10680).toLocaleString()}
          </Text>
        </View>
        <View style={[styles.card, { flexGrow: 1, flexBasis: "45%", minWidth: 140, alignItems: "center", paddingVertical: 10 }]}>
          <Text style={{ fontSize: 10, fontWeight: "800", color: theme.textMuted }}>TOP SCHOOL MEAN</Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: theme.kenyaGreenLight }}>
            {schools[0]?.meanScore?.toFixed(2) || "10.89"}
          </Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={theme.textMuted} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search school name or county..."
          placeholderTextColor={theme.textMuted}
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color={theme.textMuted} />
          </Pressable>
        )}
      </View>

      {/* School Type & Sort Filters */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 8 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          {types.map((t) => (
            <Pressable
              key={t}
              onPress={() => setSelectedType(t)}
              style={[
                styles.gradeChip,
                selectedType === t && styles.gradeChipActive,
              ]}
            >
              <Text style={[styles.gradeChipText, selectedType === t && styles.gradeChipTextActive]}>
                {t}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {([
            { key: "mean", label: "Mean Score" },
            { key: "aGrades", label: "A Grades" },
            { key: "change", label: "YoY Change" },
          ] as const).map((opt) => (
            <Pressable
              key={opt.key}
              onPress={() => setSortBy(opt.key)}
              style={[
                styles.gradeChip,
                sortBy === opt.key && styles.gradeChipActive,
              ]}
            >
              <Text style={[styles.gradeChipText, sortBy === opt.key && styles.gradeChipTextActive]}>
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* County Filter Scroll */}
      <ExpandablePillRow contentContainerStyle={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {counties.map((c) => (
          <Pressable
            key={c}
            onPress={() => setSelectedCounty(c)}
            style={[
              styles.pillBtn,
              selectedCounty === c && styles.pillBtnActive,
            ]}
          >
            <Text style={[styles.pillBtnText, selectedCounty === c && styles.pillBtnTextActive]}>
              {c === "All" ? "All Counties" : c}
            </Text>
          </Pressable>
        ))}
      </ExpandablePillRow>

      <Text style={styles.subHeading}>
        Showing {filteredSchools.length} Top KCSE Schools ({rankingsData.year})
      </Text>

      {filteredSchools.map((s: any) => {
        const change = s.meanScore - (s.previousMean || s.meanScore);
        const isUp = change >= 0;
        return (
          <View key={`${s.rank}-${s.name}`} style={styles.rankingCard}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankNum}>#{s.rank}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.schoolName}>{s.name}</Text>
              <Text style={styles.schoolMeta}>
                {s.county} County · {s.type} · {s.candidates} candidates
              </Text>
            </View>
            <View style={styles.scoreWrap}>
              <Text style={styles.meanScore}>{s.meanScore.toFixed(2)}</Text>
              <Text style={styles.meanLabel}>{s.aGrades} A&apos;s</Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  color: isUp ? theme.kenyaGreenLight : theme.kenyaRedLight,
                }}
              >
                {isUp ? "↑" : "↓"} {Math.abs(change).toFixed(2)}
              </Text>
            </View>
          </View>
        );
      })}

      {/* National Grade Distribution */}
      {gradeDistribution.length > 0 && (
        <>
          <Text style={[styles.subHeading, { marginTop: 8 }]}>
            National KCSE Grade Distribution ({rankingsData.year})
          </Text>
          <View style={styles.card}>
            {gradeDistribution.map((g: any) => (
              <View key={g.grade} style={{ marginBottom: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
                  <Text style={{ fontSize: 12, fontWeight: "800", color: theme.textPrimary }}>
                    Grade {g.grade}
                  </Text>
                  <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                    {Number(g.count).toLocaleString()} ({g.percentage}%)
                  </Text>
                </View>
                <View style={{ height: 7, backgroundColor: theme.bgSecondary, borderRadius: 4, overflow: "hidden" }}>
                  <View
                    style={{
                      height: "100%",
                      width: `${Math.min(100, Math.max(3, g.percentage * 4))}%`,
                      backgroundColor:
                        ["A", "A-", "B+", "B", "B-", "C+"].includes(g.grade)
                          ? theme.kenyaGreenLight
                          : theme.gold,
                      borderRadius: 4,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

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
      textAlign: "center",
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
      alignItems: "flex-start",
      paddingVertical: 8,
      gap: 10,
    },
    rowLabel: {
      fontSize: 12,
      color: colors.textSecondary,
      flexShrink: 0,
      maxWidth: "46%",
    },
    rowValue: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.textPrimary,
      flex: 1,
      textAlign: "right",
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
      alignItems: "center",
      gap: 8,
      paddingVertical: 2,
    },
    pillBtn: {
      backgroundColor: colors.bgCard,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 14,
      paddingVertical: 7,
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
