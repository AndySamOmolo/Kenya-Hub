import { ExpandablePillRow } from "../../components/ExpandablePillRow";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDynamicStyles } from "../../theme";
import { createStyles } from "./shared";
import rankingsData from "../../shared/data/kcse-rankings.json";

/** 4. KCSE Top Schools Rankings */
export function KcseRankingsTool({ onScrollToTop }: { onScrollToTop?: () => void } = {}) {
  const { theme, styles } = useDynamicStyles(createStyles);
  const schools: any[] = (rankingsData as any).schools || [];
  const gradeDistribution: any[] = (rankingsData as any).gradeDistribution || [];

  const [search, setSearch] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

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
            key={`ti-3-${theme.isDark ? "dark" : "light"}`}
            multiline={false}
            numberOfLines={1}
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

