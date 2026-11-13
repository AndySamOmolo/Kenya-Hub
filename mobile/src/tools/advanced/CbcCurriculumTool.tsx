import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../theme";
import { styles } from "./shared";
import cbcData from "../../shared/data/cbc-curriculum.json";

// ─── 4. CBC CURRICULUM EXPLORER TOOL ───
export function CbcCurriculumTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme } = useTheme();
  const [levelId, setLevelId] = useState(cbcData.levels[0].id);


  const level: any = useMemo(() => {
    return cbcData.levels.find((l) => l.id === levelId) || cbcData.levels[0];
  }, [levelId]);

  const gradeAgeMapping: any[] = (cbcData as any).gradeAgeMapping || [];

  return (
    <View style={styles.toolWrap}>
      {/* Level Selector */}
      <ExpandablePillRow contentContainerStyle={styles.horizontalPills}>
        {cbcData.levels.map((l) => {
          const active = l.id === levelId;
          return (
            <Pressable
              key={l.id}
              onPress={() => setLevelId(l.id)}
              style={[
                styles.langPill,
                {
                  backgroundColor: active ? theme.gold : theme.bgCard,
                  borderColor: active ? theme.gold : theme.border,
                },
              ]}
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
            <Text style={{ fontWeight: "800", color: theme.sky }}>Assessment: </Text>
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
                  <Text style={{ fontWeight: "700", color: theme.textPrimary }}>Core: </Text>
                  {Array.isArray(pw.core) ? pw.core.join(", ") : ""}
                </Text>
                <Text style={[styles.areaDesc, { color: theme.textSecondary }]}>
                  <Text style={{ fontWeight: "700", color: theme.kenyaGreenLight }}>Electives: </Text>
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
        {gradeAgeMapping.map((row: any, idx: number) => {
          const gradeName = row.grade || row.cbcGrade;
          const ageNum = row.turnsAge ?? row.age;
          const prevEq = row.previousEquivalent || row.old844;
          return (
            <View
              key={gradeName || idx}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 7,
                borderBottomWidth: idx < gradeAgeMapping.length - 1 ? 1 : 0,
                borderBottomColor: theme.border,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "800", color: theme.textPrimary, flex: 1 }}>
                {gradeName} ({ageNum} yrs)
              </Text>
              <Text style={{ fontSize: 12, color: theme.textSecondary, flex: 1 }}>
                {prevEq}
              </Text>
              <Text style={{ fontSize: 11, fontWeight: "700", color: theme.gold, flex: 1, textAlign: "right" }}>
                {row.level}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

