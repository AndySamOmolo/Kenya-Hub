"use client";

import DynamicIcon from "@/components/ui/DynamicIcon";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import kuccpsData from "@/data/kuccps-clusters.json";
import CustomSelect from "@/components/ui/CustomSelect";

const tool = TOOLS.find((t) => t.slug === "kuccps-cluster-calculator")!;

const gradePoints: Record<string, number> = kuccpsData.gradePoints as Record<string, number>;
const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
const subjects = kuccpsData.subjects;

const DEFAULT_CLUSTER_GRADES: Record<string, string> = {
  English: "B+",
  Kiswahili: "A-",
  Mathematics: "A-",
  Biology: "B+",
  Physics: "B+",
  Chemistry: "A-",
  History: "A-",
  "Business Studies": "A",
};


export default function KUCCPSCalculatorPage() {
  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>(DEFAULT_CLUSTER_GRADES);

  const updateGrade = (subject: string, grade: string) => {
    setSelectedGrades((prev) => {
      if (grade === "") {
        const next = { ...prev };
        delete next[subject];
        return next;
      }
      return { ...prev, [subject]: grade };
    });
  };

  // t = sum of best 7 KCSE subject points (maximum 84)
  const best7Sum = useMemo(() => {
    return Object.values(selectedGrades)
      .map((g) => gradePoints[g] || 0)
      .sort((a, b) => b - a)
      .slice(0, 7)
      .reduce((sum, p) => sum + p, 0);
  }, [selectedGrades]);

  const clusterResults = useMemo(() => {
    return kuccpsData.clusters.map((cluster) => {
      let rawSumR = 0;
      let calculable = true;
      const usedActualSubjects = new Set<string>();
      const breakdown: { subject: string; grade: string; points: number; weight: number; weighted: number }[] = [];

      for (const req of cluster.subjects) {
        if (req.name.toLowerCase().includes("any other")) {
          let bestAny = "";
          let bestAnyPoints = 0;
          let matchedSubj = "";
          for (const [subj, grade] of Object.entries(selectedGrades)) {
            if (!grade || usedActualSubjects.has(subj)) continue;
            if (gradePoints[grade] > bestAnyPoints) {
              bestAny = grade;
              bestAnyPoints = gradePoints[grade];
              matchedSubj = subj;
            }
          }
          if (bestAnyPoints > 0 && matchedSubj) {
            usedActualSubjects.add(matchedSubj);
            const weighted = bestAnyPoints * req.weight;
            rawSumR += weighted;
            breakdown.push({
              subject: `${req.name} (${matchedSubj})`,
              grade: bestAny,
              points: bestAnyPoints,
              weight: req.weight,
              weighted,
            });
          } else {
            calculable = false;
          }
        } else {
          const options = req.name.split("/").map((s) => s.trim());
          let bestGrade = "";
          let bestPoints = 0;
          let matchedSubj = "";

          for (const opt of options) {
            if (selectedGrades[opt] && !usedActualSubjects.has(opt) && gradePoints[selectedGrades[opt]] > bestPoints) {
              bestGrade = selectedGrades[opt];
              bestPoints = gradePoints[selectedGrades[opt]];
              matchedSubj = opt;
            }
          }

          if (bestPoints > 0 && matchedSubj) {
            usedActualSubjects.add(matchedSubj);
            const weighted = bestPoints * req.weight;
            rawSumR += weighted;
            breakdown.push({
              subject: options.length > 1 ? `${req.name} (${matchedSubj})` : req.name,
              grade: bestGrade,
              points: bestPoints,
              weight: req.weight,
              weighted,
            });
          } else {
            calculable = false;
          }
        }
      }

      // Official KUCCPS formula: C = sqrt((r / 48) * (t / 84)) * 48
      const weightedClusterPoints =
        calculable && best7Sum > 0
          ? Math.round(Math.sqrt((rawSumR / 48) * (best7Sum / 84)) * 48 * 100) / 100
          : 0;

      return {
        ...cluster,
        rawWeight: Math.round(rawSumR * 100) / 100,
        totalWeight: weightedClusterPoints,
        calculable,
        breakdown,
      };
    });
  }, [selectedGrades, best7Sum]);

  const sortedResults = [...clusterResults]
    .filter((c) => c.calculable)
    .sort((a, b) => b.totalWeight - a.totalWeight);

  const hasGrades = Object.keys(selectedGrades).length > 0;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Grade Entry */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Enter Your KCSE Subject Grades
              </h3>
              <p className="text-xs text-text-muted mt-0.5">
                Best 7 Aggregate (t): <strong className="text-gold">{best7Sum} / 84 pts</strong> · Formula: C = √((r / 48) × (t / 84)) × 48
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedGrades(DEFAULT_CLUSTER_GRADES)}
                className="text-xs px-3 py-1 rounded-lg bg-bg-elevated border border-border text-text-secondary hover:text-gold transition-colors cursor-pointer"
              >
                Load Sample Profile
              </button>
              <button
                type="button"
                onClick={() => setSelectedGrades({})}
                className="text-xs px-3 py-1 rounded-lg bg-bg-elevated border border-border text-text-muted hover:text-kenya-red-light transition-colors cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {subjects.map((subject) => (
              <div key={subject} className="flex items-center gap-2">
                <label className="text-xs text-text-secondary w-36 sm:w-44 flex-shrink-0 break-words leading-tight" title={subject}>
                  {subject}
                </label>
                <CustomSelect
                  value={selectedGrades[subject] || ""}
                  onChange={(e) => updateGrade(subject, e.target.value)}
                  className="select-field text-sm py-1.5"
                >
                  <option value="">—</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      {g} ({gradePoints[g]} pts)
                    </option>
                  ))}
                </CustomSelect>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        {hasGrades && sortedResults.length > 0 && (
          <>
            <div role="status" aria-live="polite" aria-atomic="true" className="result-box">
              <p className="text-sm text-text-secondary mb-2">
                Highest KUCCPS Weighted Cluster Score (C)
              </p>
              <p className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
                {sortedResults[0].totalWeight.toFixed(2)} / 48
              </p>
              <p className="text-xs text-text-muted mt-1">
                {sortedResults[0].name} (Raw 4-Subject Sum r = {sortedResults[0].rawWeight}/48 · Best-7 Aggregate t = {best7Sum}/84)
              </p>
            </div>

            {/* All Cluster Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
                Your Calculated Cluster Weights ({sortedResults.length} Eligible Clusters)
              </h3>

              {sortedResults.map((cluster, idx) => (
                <details
                  key={cluster.id}
                  open={idx < 3}
                  className="bg-bg-card border border-border rounded-xl overflow-hidden group"
                >
                  <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-4 cursor-pointer list-none">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="text-xl font-bold text-gold font-[family-name:var(--font-outfit)] w-14 shrink-0 tabular-nums">
                        {cluster.totalWeight.toFixed(2)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-text-primary">
                          {cluster.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          Typical cutoff: {cluster.typicalCutoff} pts · 4-Subject Sum (r): {cluster.rawWeight}/48
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-text-muted shrink-0 group-open:rotate-180 transition-transform"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 border-t border-border pt-3">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-text-secondary mb-2">Subject Weight Breakdown:</p>
                      <div className="overflow-x-auto">
                        <table className="data-table text-xs">
                          <thead>
                            <tr>
                              <th>Cluster Subject Requirement</th>
                              <th>Grade</th>
                              <th>Points</th>
                              <th>Weight</th>
                              <th className="text-right">Weighted Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cluster.breakdown.map((b, i) => (
                              <tr key={i}>
                                <td className="text-text-secondary">{b.subject}</td>
                                <td className="font-semibold text-text-primary">{b.grade}</td>
                                <td>{b.points}</td>
                                <td>×{b.weight}</td>
                                <td className="text-right font-semibold text-gold">{b.weighted}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary mb-1">Representative Degree Programmes:</p>
                      <div className="flex flex-wrap gap-1">
                        {cluster.courses.map((c) => (
                          <span key={c} className="badge bg-white/5 text-text-muted text-[0.6rem]">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </>
        )}

        {hasGrades && sortedResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-text-muted text-sm">
              Enter more subjects to see cluster results. Each KUCCPS cluster requires 4 subjects.
            </p>
          </div>
        )}

        {!hasGrades && (
          <div className="text-center py-8 bg-bg-card border border-border rounded-xl">
            <div className="flex justify-center mb-3"><DynamicIcon emoji="🎯" className="w-8 h-8 text-gold" /></div>
            <p className="text-text-secondary text-sm">
              Select your KCSE subject grades above or click &quot;Load Sample Profile&quot; to evaluate all 20 KUCCPS degree clusters.
            </p>
          </div>
        )}

        {/* Sticky Mobile Live-Result Pill (F-038) */}
        {sortedResults.length > 0 && (
          <div
            role="status"
            aria-live="polite"
            className="sticky bottom-3 z-30 sm:hidden rounded-full border border-amber-500/45 bg-bg-card sm:bg-bg-card/95 sm:backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center justify-between gap-3"
          >
            <span className="text-xs font-semibold text-text-secondary truncate">Top Cluster Score</span>
            <span className="text-sm font-extrabold text-gold tabular-nums whitespace-nowrap">
              {sortedResults[0].totalWeight.toFixed(3)} / 48
            </span>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
