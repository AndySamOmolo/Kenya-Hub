import React, { useState, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { useTheme, pressableStyle, triggerHaptic } from "../../theme";
import { styles } from "./shared";
import kuccpsData from "../../shared/data/kuccps-clusters.json";

// ─── KUCCPS CLUSTER POINTS CALCULATOR TOOL (Official Weighted Formula) ───
export function KuccpsClusterTool({
  onScrollToTop,
}: { onScrollToTop?: () => void } = {}) {
  const { theme } = useTheme();
  const grades = [
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "E",
  ];
  const allSubjects: string[] = (kuccpsData as any).subjects || [
    "Mathematics",
    "English",
    "Kiswahili",
    "Biology",
    "Physics",
    "Chemistry",
    "History",
    "Geography",
    "CRE",
    "Business Studies",
    "Agriculture",
    "Computer Studies",
  ];

  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [sortBy, setSortBy] = useState<"points" | "id" | "cutoff">("points");
  const [expandedCluster, setExpandedCluster] = useState<number | null>(1);

  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>({
    Mathematics: "A",
    English: "A-",
    Kiswahili: "B+",
    Biology: "A-",
    Physics: "B+",
    Chemistry: "A",
    History: "B+",
    "Business Studies": "A-",
  });

  const gradePoints: Record<string, number> = kuccpsData.gradePoints as any;

  const displayedSubjects = showAllSubjects
    ? allSubjects
    : allSubjects.slice(0, 8);

  const summary = useMemo(() => {
    const entries = Object.entries(selectedGrades).filter(([_, g]) =>
      Boolean(g)
    );
    const sortedPts = entries
      .map(([_, g]) => gradePoints[g] || 0)
      .sort((a, b) => b - a);
    const best7Sum = sortedPts.slice(0, 7).reduce((sum, p) => sum + p, 0);
    const totalPts = sortedPts.reduce((sum, p) => sum + p, 0);
    const meanPts =
      entries.length > 0 ? (totalPts / entries.length).toFixed(2) : "0.00";
    return { count: entries.length, totalPts, best7Sum, meanPts };
  }, [selectedGrades, gradePoints]);

  const clusterResults = useMemo(() => {
    const list = kuccpsData.clusters.map((cluster: any) => {
      let rawSumR = 0;
      let calculable = true;
      const usedSubjects = new Set<string>();
      const breakdown: {
        reqName: string;
        matchedSubject: string;
        grade: string;
        points: number;
        weight: number;
        weighted: number;
      }[] = [];

      for (const req of cluster.subjects) {
        let bestGrade = "";
        let bestPoints = 0;
        let matchedSubject = req.name;

        if (req.name.toLowerCase().includes("any other")) {
          for (const [subj, g] of Object.entries(selectedGrades)) {
            if (!g || usedSubjects.has(subj)) continue;
            const pts = gradePoints[g] || 0;
            if (pts > bestPoints) {
              bestPoints = pts;
              bestGrade = g;
              matchedSubject = subj;
            }
          }
        } else {
          const options = req.name.split("/").map((s: string) => s.trim());
          for (const opt of options) {
            if (selectedGrades[opt] && !usedSubjects.has(opt)) {
              const pts = gradePoints[selectedGrades[opt]] || 0;
              if (pts > bestPoints) {
                bestPoints = pts;
                bestGrade = selectedGrades[opt];
                matchedSubject = opt;
              }
            }
          }
        }

        if (bestPoints > 0) {
          usedSubjects.add(matchedSubject);
          const weighted = bestPoints * req.weight;
          rawSumR += weighted;
          breakdown.push({
            reqName: req.name,
            matchedSubject,
            grade: bestGrade,
            points: bestPoints,
            weight: req.weight,
            weighted: Math.round(weighted * 10) / 10,
          });
        } else {
          calculable = false;
        }
      }

      // Official KUCCPS weighted cluster formula: C = sqrt((r / 48) * (t / 84)) * 48
      const weightedClusterPoints =
        calculable && summary.best7Sum > 0
          ? Math.round(
              Math.sqrt((rawSumR / 48) * (summary.best7Sum / 84)) * 48 * 100
            ) / 100
          : 0;

      const minCutoffNum =
        parseFloat(String(cluster.typicalCutoff).split("–")[0]) || 30;

      return {
        id: cluster.id,
        name: cluster.name,
        typicalCutoff: cluster.typicalCutoff,
        minCutoffNum,
        courses: cluster.courses,
        rawWeight: Math.round(rawSumR * 10) / 10,
        totalWeight: weightedClusterPoints,
        calculable,
        breakdown,
      };
    });

    return [...list].sort((a, b) => {
      if (a.calculable !== b.calculable) return a.calculable ? -1 : 1;
      if (sortBy === "points") return b.totalWeight - a.totalWeight;
      if (sortBy === "cutoff") return a.minCutoffNum - b.minCutoffNum;
      return a.id - b.id;
    });
  }, [selectedGrades, gradePoints, sortBy, summary.best7Sum]);

  const highestClusterWeight = useMemo(() => {
    return clusterResults
      .filter((c) => c.calculable)
      .reduce((max, c) => Math.max(max, c.totalWeight), 0);
  }, [clusterResults]);

  return (
    <View style={styles.toolWrap}>
      {/* Summary Row */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        <View
          style={[
            styles.infoCard,
            {
              flex: 1,
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.textMuted,
            }}
          >
            BEST 7 (t)
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.textPrimary,
            }}
          >
            {summary.best7Sum} / 84
          </Text>
        </View>
        <View
          style={[
            styles.infoCard,
            {
              flex: 1,
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.textMuted,
            }}
          >
            MEAN PTS
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.sky,
            }}
          >
            {summary.meanPts}
          </Text>
        </View>
        <View
          style={[
            styles.infoCard,
            {
              flex: 1,
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.textMuted,
            }}
          >
            TOP CLUSTER
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.gold,
            }}
          >
            {highestClusterWeight.toFixed(1)} / 48
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Select Your KCSE Subject Grades ({displayedSubjects.length} /{" "}
          {allSubjects.length})
        </Text>
        <Pressable
          onPress={() => {
            triggerHaptic(8);
            setShowAllSubjects(!showAllSubjects);
          }}
          style={pressableStyle([
            styles.catPill,
            { backgroundColor: theme.bgCard, borderColor: theme.gold },
          ])}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Outfit_800ExtraBold",
              color: theme.gold,
            }}
          >
            {showAllSubjects
              ? "Show Core 8"
              : `Show All ${allSubjects.length} Subjects`}
          </Text>
        </Pressable>
      </View>

      <View style={styles.subjectsGrid}>
        {displayedSubjects.map((subj) => (
          <View
            key={subj}
            style={[
              styles.subjCard,
              { backgroundColor: theme.bgCard, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.subjName, { color: theme.textPrimary }]}>
              {subj}
            </Text>
            <View
              style={[
                styles.gradeScroll,
                { flexDirection: "row", flexWrap: "wrap" },
              ]}
            >
              <Pressable
                onPress={() =>
                  setSelectedGrades((prev) => {
                    const next = { ...prev };
                    delete next[subj];
                    return next;
                  })
                }
                style={[
                  styles.gradeBtn,
                  {
                    backgroundColor: !selectedGrades[subj]
                      ? theme.bgSecondary
                      : theme.bgElevated,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={[styles.gradeBtnText, { color: theme.textMuted }]}>
                  —
                </Text>
              </Pressable>
              {grades.map((g) => {
                const active = selectedGrades[subj] === g;
                return (
                  <Pressable
                    key={g}
                    onPress={() => {
                      triggerHaptic(6);
                      setSelectedGrades((prev) => ({ ...prev, [subj]: g }));
                    }}
                    style={[
                      styles.gradeBtn,
                      {
                        backgroundColor: active ? theme.gold : theme.bgElevated,
                        borderColor: theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.gradeBtnText,
                        {
                          color: active ? theme.kenyaBlack : theme.textPrimary,
                        },
                      ]}
                    >
                      {g}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </View>

      {/* Sort Controls */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          marginTop: 10,
        }}
      >
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>
          Degree Clusters ({clusterResults.filter((c) => c.calculable).length}{" "}
          Eligible / {clusterResults.length} Total)
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {(
            [
              { key: "points", label: "Highest Pts" },
              { key: "id", label: "Cluster #" },
              { key: "cutoff", label: "Lowest Cutoff" },
            ] as const
          ).map((opt) => (
            <Pressable
              key={opt.key}
              onPress={() => {
                triggerHaptic(8);
                setSortBy(opt.key);
                onScrollToTop?.();
              }}
              style={pressableStyle([
                styles.catPill,
                {
                  backgroundColor:
                    sortBy === opt.key ? theme.gold : theme.bgCard,
                  borderColor: sortBy === opt.key ? theme.gold : theme.border,
                },
              ])}
            >
              <Text
                style={[
                  styles.catPillText,
                  {
                    color:
                      sortBy === opt.key
                        ? theme.kenyaBlack
                        : theme.textSecondary,
                  },
                ]}
              >
                {opt.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.entriesList}>
        {clusterResults.map((c) => {
          const isExpanded = expandedCluster === c.id;
          return (
            <Pressable
              key={c.id}
              onPress={() => {
                triggerHaptic(6);
                setExpandedCluster(isExpanded ? null : c.id);
              }}
              style={[
                styles.entryCard,
                {
                  backgroundColor: theme.bgCard,
                  borderColor: c.calculable
                    ? theme.border
                    : `${theme.kenyaRedLight}40`,
                  opacity: c.calculable ? 1 : 0.72,
                },
              ]}
            >
              <View style={styles.clusterHeaderRow}>
                <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 160 }}>
                  <Text
                    style={[styles.clusterName, { color: theme.textPrimary }]}
                  >
                    Cluster {c.id}: {c.name}
                  </Text>
                  <Text
                    style={[styles.clusterCutoff, { color: theme.textMuted }]}
                  >
                    {c.calculable
                      ? `Cutoff: ${c.typicalCutoff} pts · Raw 4-Subj (r): ${c.rawWeight}/48`
                      : `Missing required subject (${c.breakdown.length}/4 entered)`}
                  </Text>
                </View>
                <View
                  style={[
                    styles.clusterBadge,
                    {
                      backgroundColor: c.calculable
                        ? `${theme.gold}20`
                        : `${theme.kenyaRedLight}20`,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.clusterPointsText,
                      {
                        color: c.calculable ? theme.gold : theme.kenyaRedLight,
                      },
                    ]}
                  >
                    {c.calculable ? `${c.totalWeight.toFixed(2)} / 48` : "Ineligible"}
                  </Text>
                </View>
              </View>

              {isExpanded && c.breakdown.length > 0 && (
                <View
                  style={{
                    marginTop: 8,
                    paddingTop: 8,
                    borderTopWidth: 1,
                    borderTopColor: theme.border,
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: "Outfit_800ExtraBold",
                      color: theme.gold,
                    }}
                  >
                    SUBJECT WEIGHT BREAKDOWN (r = {c.rawWeight}/48 · t ={" "}
                    {summary.best7Sum}/84)
                  </Text>
                  {c.breakdown.map((b, bIdx) => (
                    <View
                      key={bIdx}
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        gap: 6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          color: theme.textSecondary,
                          flexGrow: 1,
                          flexShrink: 1,
                          minWidth: 150,
                        }}
                      >
                        {b.reqName} ({b.matchedSubject})
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          fontFamily: "Outfit_700Bold",
                          color: theme.textPrimary,
                        }}
                      >
                        {b.grade} ({b.points} × {b.weight} = {b.weighted})
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              <View style={styles.coursesRow}>
                {c.courses.map((course: string, idx: number) => (
                  <View
                    key={idx}
                    style={[
                      styles.courseChip,
                      {
                        backgroundColor: theme.bgElevated,
                        borderColor: theme.border,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.courseChipText,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {course}
                    </Text>
                  </View>
                ))}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
