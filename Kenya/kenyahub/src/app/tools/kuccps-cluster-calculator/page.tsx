"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import kuccpsData from "@/data/kuccps-clusters.json";

const tool = TOOLS.find((t) => t.slug === "kuccps-cluster-calculator")!;

const gradePoints: Record<string, number> = kuccpsData.gradePoints as Record<string, number>;
const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
const subjects = kuccpsData.subjects;

const faq = [
  { question: "How are KUCCPS cluster points calculated?", answer: "Each university course belongs to a cluster. Each cluster specifies 4 required subjects with weights (typically 2, 1, 0.5, 0.5). Your cluster weight = sum of (Grade points × subject weight). Grade points: A=12, A-=11, B+=10, B=9, down to E=1." },
  { question: "What is the maximum cluster weight?", answer: "The maximum cluster weight is 48 points (if you score A in all 4 weighted subjects: 12×2 + 12×1 + 12×0.5 + 12×0.5 = 48)." },
  { question: "How many clusters does KUCCPS have?", answer: "KUCCPS has approximately 15-20+ clusters, each representing a group of related university courses. Medicine is Cluster 1, Engineering is Cluster 2, Law is Cluster 10, etc." },
  { question: "Do cluster weights change every year?", answer: "The cluster composition (which subjects and weights) rarely changes. However, the minimum cut-off points for specific courses at specific universities change annually based on demand and available slots." },
  { question: "Can I calculate cluster weights for courses I didn't take?", answer: "You can only calculate cluster weight for clusters where you took the required subjects. If a cluster requires Biology but you didn't take it, that cluster won't be applicable to you." },
];

export default function KUCCPSCalculatorPage() {
  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>({});

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

  const clusterResults = useMemo(() => {
    return kuccpsData.clusters.map((cluster) => {
      let totalWeight = 0;
      let calculable = true;
      const breakdown: { subject: string; grade: string; points: number; weight: number; weighted: number }[] = [];

      for (const req of cluster.subjects) {
        // Handle OR subjects (e.g., "Physics/Mathematics")
        const options = req.name.split("/").map((s) => s.trim());
        let bestGrade = "";
        let bestPoints = 0;

        for (const opt of options) {
          if (selectedGrades[opt] && gradePoints[selectedGrades[opt]] > bestPoints) {
            bestGrade = selectedGrades[opt];
            bestPoints = gradePoints[selectedGrades[opt]];
          }
        }

        if (bestPoints > 0) {
          const weighted = bestPoints * req.weight;
          totalWeight += weighted;
          breakdown.push({
            subject: req.name,
            grade: bestGrade,
            points: bestPoints,
            weight: req.weight,
            weighted,
          });
        } else {
          // Check "Any other subject"
          if (req.name.toLowerCase().includes("any other")) {
            // Find best unallocated subject
            const usedSubjects = breakdown.map((b) => b.subject);
            let bestAny = "";
            let bestAnyPoints = 0;
            for (const [subj, grade] of Object.entries(selectedGrades)) {
              if (!usedSubjects.some((u) => u.includes(subj)) && gradePoints[grade] > bestAnyPoints) {
                bestAny = grade;
                bestAnyPoints = gradePoints[grade];
              }
            }
            if (bestAnyPoints > 0) {
              const weighted = bestAnyPoints * req.weight;
              totalWeight += weighted;
              breakdown.push({ subject: req.name, grade: bestAny, points: bestAnyPoints, weight: req.weight, weighted });
            } else {
              calculable = false;
            }
          } else {
            calculable = false;
          }
        }
      }

      return {
        ...cluster,
        totalWeight: Math.round(totalWeight * 100) / 100,
        calculable,
        breakdown,
      };
    });
  }, [selectedGrades]);

  const sortedResults = [...clusterResults]
    .filter((c) => c.calculable)
    .sort((a, b) => b.totalWeight - a.totalWeight);

  const hasGrades = Object.keys(selectedGrades).length > 0;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Grade Entry */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">
            Enter Your KCSE Grades
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {subjects.map((subject) => (
              <div key={subject} className="flex items-center gap-2">
                <label className="text-xs text-text-secondary w-32 flex-shrink-0 truncate" title={subject}>
                  {subject}
                </label>
                <select
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
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        {hasGrades && sortedResults.length > 0 && (
          <>
            <div className="result-box">
              <p className="text-sm text-text-secondary mb-2">
                Highest Cluster Weight
              </p>
              <p className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
                {sortedResults[0].totalWeight} / 48
              </p>
              <p className="text-xs text-text-muted mt-1">
                {sortedResults[0].name}
              </p>
            </div>

            {/* All Cluster Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
                Your Cluster Weights ({sortedResults.length} applicable clusters)
              </h3>

              {sortedResults.map((cluster) => (
                <details
                  key={cluster.id}
                  className="bg-bg-card border border-border rounded-xl overflow-hidden group"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-gold font-[family-name:var(--font-outfit)] w-12">
                        {cluster.totalWeight}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {cluster.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          Typical cut-off: {cluster.typicalCutoff} pts
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 border-t border-border pt-3">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-text-secondary mb-2">Weight Breakdown:</p>
                      <table className="data-table text-xs">
                        <thead>
                          <tr>
                            <th>Subject</th>
                            <th>Grade</th>
                            <th>Points</th>
                            <th>Weight</th>
                            <th className="text-right">Weighted</th>
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
                    <div>
                      <p className="text-xs font-semibold text-text-secondary mb-1">Eligible Courses:</p>
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
              Enter more subjects to see cluster results. Most clusters require at least 3–4 subjects.
            </p>
          </div>
        )}

        {!hasGrades && (
          <div className="text-center py-8 bg-bg-card border border-border rounded-xl">
            <p className="text-3xl mb-3">🎯</p>
            <p className="text-text-secondary text-sm">
              Enter your KCSE grades above to calculate cluster weights for all applicable university course clusters.
            </p>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
