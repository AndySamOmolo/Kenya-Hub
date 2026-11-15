import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, androidRipple, pressableStyle } from "../../theme";
import { styles } from "./shared";
import cbcData from "../../shared/data/cbc-curriculum.json";

// ─── CBC CURRICULUM & GRADE-AGE EXPLORER TOOL (Consolidated) ───
export function CbcCurriculumTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme } = useTheme();
  const [levelId, setLevelId] = useState(cbcData.levels[0].id);
  const currentYear = 2026;
  const [birthYear, setBirthYear] = useState("2017");

  const year = Number(birthYear) || 2017;
  const age = Math.max(0, currentYear - year);

  const level: any = useMemo(() => {
    return cbcData.levels.find((l) => l.id === levelId) || cbcData.levels[0];
  }, [levelId]);

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
      {/* Interactive Child Birth-Year Grade-Age Checker */}
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.infoTitle, { color: theme.textPrimary, fontSize: 15 }]}>
          Child Birth-Year CBC Grade & Age Checker ({currentYear})
        </Text>
        <Text style={[styles.areaDesc, { color: theme.textSecondary, marginBottom: 8 }]}>
          Enter your child{"'"}s year of birth or pick a preset below to view their expected CBC grade and 8-4-4 equivalent.
        </Text>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
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
            style={{
              backgroundColor: theme.bgSecondary,
              borderWidth: 1,
              borderColor: theme.border,
              borderRadius: 12,
              paddingLeft: 14,
              paddingRight: 38,
              paddingVertical: 10,
              color: theme.textPrimary,
              fontFamily: "Outfit_700Bold",
              fontSize: 16,
            }}
          />
          {birthYear !== "" && birthYear !== "0" && (
            <Pressable
              onPress={() => setBirthYear("")}
              accessibilityRole="button"
              accessibilityLabel="Clear birth year"
              hitSlop={8}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name="close-circle" size={18} color={theme.textMuted} />
            </Pressable>
          )}
        </View>
        <ExpandablePillRow contentContainerStyle={[styles.horizontalPills, { marginTop: 8 }]}>
          {["2022", "2020", "2018", "2017", "2015", "2013", "2011", "2009"].map((yr) => {
            const active = birthYear === yr;
            return (
              <Pressable
                key={yr}
                android_ripple={androidRipple(theme.rippleColor)}
                onPress={() => setBirthYear(yr)}
                style={pressableStyle([
                  styles.langPill,
                  {
                    backgroundColor: active ? theme.gold : theme.bgSecondary,
                    borderColor: active ? theme.gold : theme.border,
                  },
                ])}
              >
                <Text
                  style={[
                    styles.langPillText,
                    { color: active ? theme.kenyaBlack : theme.textPrimary },
                  ]}
                >
                  Born {yr} ({currentYear - Number(yr)}y)
                </Text>
              </Pressable>
            );
          })}
        </ExpandablePillRow>

        <View
          style={{
            marginTop: 10,
            padding: 12,
            borderRadius: 12,
            backgroundColor: theme.primaryContainer,
            borderWidth: 1,
            borderColor: `${theme.gold}45`,
          }}
        >
          <Text style={{ fontSize: 11, fontFamily: "Outfit_700Bold", color: theme.gold, letterSpacing: 0.6 }}>
            EXPECTED CBC GRADE ({currentYear}) • AGE {age}
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Outfit_800ExtraBold", color: theme.textPrimary, marginTop: 2 }}>
            {gradeInfo.grade}
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Inter_500Medium", color: theme.textSecondary, marginTop: 2 }}>
            Stage: <Text style={{ color: theme.gold, fontFamily: "Inter_700Bold" }}>{gradeInfo.level}</Text> • 8-4-4 Equiv.: {gradeInfo.system}
          </Text>
          <Text style={{ fontSize: 11.5, fontFamily: "Inter_600SemiBold", color: theme.kenyaGreenLight, marginTop: 4 }}>
            Next Milestone: {gradeInfo.nextMilestone}
          </Text>
        </View>
      </View>

      {/* Level Selector */}
      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        {cbcData.levels.map((l) => {
          const active = l.id === levelId;
          return (
            <Pressable
              key={l.id}
              android_ripple={androidRipple(theme.rippleColor)}
              onPress={() => {
                setLevelId(l.id);
                onScrollToTop?.();
              }}
              style={pressableStyle([
                styles.langPill,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ])}
            >
              <Text
                style={[
                  styles.langPillText,
                  { color: active ? theme.kenyaBlack : theme.textPrimary },
                ]}
              >
                {l.name}
              </Text>
            </Pressable>
          );
        })}
      </ExpandablePillRow>

      {/* Level Card */}
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.infoTitle, { color: theme.textPrimary }]}>
          {level.name}
        </Text>
        <Text style={[styles.levelSub, { color: theme.gold }]}>
          {level.grades.join(", ")} • Ages {level.ageRange} • {level.duration}
        </Text>
        <Text style={[styles.levelOld, { color: theme.textMuted }]}>
          Old 8-4-4 equivalent: {level.previousSystem}
        </Text>
        {level.assessment && (
          <Text style={[styles.infoDesc, { color: theme.textSecondary, marginTop: 4 }]}>
            <Text style={{ fontFamily: "Inter_700Bold", color: theme.sky }}>Assessment: </Text>
            {level.assessment}
          </Text>
        )}
      </View>

      {/* Senior Secondary Pathways (when viewing Senior Secondary or available) */}
      {Array.isArray(level.pathways) && level.pathways.length > 0 && (
        <>
          <Text style={[styles.sectionLabel, { color: theme.gold }]}>
            Senior Secondary Career Pathways (Grades 10–12)
          </Text>
          <View style={styles.entriesList}>
            {level.pathways.map((pw: any, pIdx: number) => (
              <View
                key={pIdx}
                style={[
                  styles.entryCard,
                  { backgroundColor: theme.bgCard, borderColor: theme.border },
                ]}
              >
                <Text style={[styles.areaName, { color: theme.gold }]}>{pw.name}</Text>
                <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
                  <Text style={{ fontFamily: "Inter_700Bold", color: theme.textPrimary }}>Core: </Text>
                  {Array.isArray(pw.core) ? pw.core.join(", ") : ""}
                </Text>
                <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
                  <Text style={{ fontFamily: "Inter_700Bold", color: theme.kenyaGreenLight }}>Electives: </Text>
                  {Array.isArray(pw.electives) ? pw.electives.join(", ") : ""}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {/* Learning Areas */}
      <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
        Learning Areas ({level.learningAreas?.length || 0})
      </Text>

      <View style={styles.entriesList}>
        {(level.learningAreas || []).map((area: any, idx: number) => (
          <View
            key={idx}
            style={[
              styles.entryCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <View style={styles.areaHeaderRow}>
              <View style={[styles.areaNumber, { backgroundColor: `${theme.gold}20` }]}>
                <Text style={[styles.areaNumberText, { color: theme.gold }]}>
                  {idx + 1}
                </Text>
              </View>
              <Text style={[styles.areaName, { color: theme.textPrimary }]}>
                {area.name}
              </Text>
            </View>
            <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
              {area.description}
            </Text>
          </View>
        ))}
      </View>

      {/* CBC vs 8-4-4 Grade-Age Comparison Table */}
      <Text style={[styles.sectionLabel, { color: theme.gold, marginTop: 8 }]}>
        CBC (2-6-3-3-3) vs Old 8-4-4 System Comparison
      </Text>
      <View
        style={[
          styles.infoCard,
          { backgroundColor: theme.bgCard, borderColor: theme.border },
        ]}
      >
        {gradeAgeMapping.map((row, idx: number) => {
          const isMatch = row.age === age;
          return (
            <View
              key={row.cbcGrade || idx}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 7,
                paddingHorizontal: isMatch ? 8 : 0,
                borderRadius: isMatch ? 8 : 0,
                backgroundColor: isMatch ? "rgba(200, 150, 30, 0.14)" : "transparent",
                borderBottomWidth: idx < gradeAgeMapping.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Outfit_700Bold",
                  color: isMatch ? theme.gold : theme.textPrimary,
                  flex: 1.2,
                }}
              >
                {row.cbcGrade} ({row.age} yrs){isMatch ? " ←" : ""}
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Inter_400Regular", color: theme.textSecondary, flex: 1 }}>
                {row.old844}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Outfit_700Bold",
                  color: theme.gold,
                  flex: 1,
                  textAlign: "right",
                }}
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
