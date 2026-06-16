"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";

const tool = TOOLS.find((t) => t.slug === "kcse-grade-calculator")!;

const gradePoints: Record<string, number> = {
  A: 12, "A-": 11, "B+": 10, B: 9, "B-": 8,
  "C+": 7, C: 6, "C-": 5, "D+": 4, D: 3, "D-": 2, E: 1,
};
const grades = Object.keys(gradePoints);

const meanGradeBoundaries = [
  { min: 11.5, max: 12, grade: "A" },
  { min: 10.5, max: 11.49, grade: "A-" },
  { min: 9.5, max: 10.49, grade: "B+" },
  { min: 8.5, max: 9.49, grade: "B" },
  { min: 7.5, max: 8.49, grade: "B-" },
  { min: 6.5, max: 7.49, grade: "C+" },
  { min: 5.5, max: 6.49, grade: "C" },
  { min: 4.5, max: 5.49, grade: "C-" },
  { min: 3.5, max: 4.49, grade: "D+" },
  { min: 2.5, max: 3.49, grade: "D" },
  { min: 1.5, max: 2.49, grade: "D-" },
  { min: 1, max: 1.49, grade: "E" },
];

const careerRequirements = [
  { career: "Medicine & Surgery", minGrade: "A-", minPoints: 11 },
  { career: "Engineering", minGrade: "B+", minPoints: 10 },
  { career: "Law", minGrade: "B+", minPoints: 10 },
  { career: "Architecture", minGrade: "B", minPoints: 9 },
  { career: "Nursing", minGrade: "C+", minPoints: 7 },
  { career: "Teaching (B.Ed)", minGrade: "C+", minPoints: 7 },
  { career: "Business Administration", minGrade: "C+", minPoints: 7 },
  { career: "Journalism", minGrade: "C+", minPoints: 7 },
  { career: "Certificate Courses", minGrade: "C-", minPoints: 5 },
  { career: "Diploma Courses", minGrade: "C", minPoints: 6 },
];

const subjectNames = [
  "English (compulsory)", "Kiswahili", "Mathematics",
  "Subject 4", "Subject 5", "Subject 6", "Subject 7", "Subject 8",
];

const faq = [
  { question: "How is the KCSE mean grade calculated?", answer: "KNEC takes your 7 best subjects plus English (which is compulsory). The total points from these 8 subjects is divided by 8 to get the mean score, which is then mapped to a letter grade." },
  { question: "Is English compulsory in KCSE?", answer: "Yes, English is compulsory and must be included in the 8 subjects used for mean grade calculation, regardless of the grade scored." },
  { question: "What mean grade do I need for university in Kenya?", answer: "The minimum mean grade for university degree programs through KUCCPS is generally C+ (7 points). However, competitive courses like Medicine require A- or A. Diploma courses require C, and certificate courses require C-." },
];

export default function KCSEGradeCalculatorPage() {
  const [subjectGrades, setSubjectGrades] = useState<string[]>(Array(8).fill(""));

  const updateGrade = (index: number, grade: string) => {
    setSubjectGrades((prev) => {
      const next = [...prev];
      next[index] = grade;
      return next;
    });
  };

  const result = useMemo(() => {
    const english = subjectGrades[0];
    const otherGrades = subjectGrades.slice(1).filter(Boolean);

    if (!english || otherGrades.length < 7) return null;

    const englishPoints = gradePoints[english];
    const otherPoints = otherGrades
      .map((g) => gradePoints[g])
      .sort((a, b) => b - a)
      .slice(0, 7);

    const totalPoints = englishPoints + otherPoints.reduce((a, b) => a + b, 0);
    const meanScore = totalPoints / 8;

    const meanGrade = meanGradeBoundaries.find(
      (b) => meanScore >= b.min && meanScore <= b.max
    );

    return {
      totalPoints,
      meanScore: Math.round(meanScore * 100) / 100,
      meanGrade: meanGrade?.grade || "E",
      qualifyingCareers: careerRequirements.filter((c) => meanScore >= c.minPoints),
    };
  }, [subjectGrades]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Grade Entry */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">
            Enter Your Subject Grades
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subjectNames.map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <label className="text-xs text-text-secondary w-40 flex-shrink-0">
                  {name} {i === 0 && <span className="text-kenya-red-light">*</span>}
                </label>
                <select
                  value={subjectGrades[i]}
                  onChange={(e) => updateGrade(i, e.target.value)}
                  className="select-field text-sm py-1.5"
                >
                  <option value="">Select grade</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      {g} ({gradePoints[g]} pts)
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-3">
            Enter English + at least 7 other subjects. The calculator will use your best 7 + English.
          </p>
        </div>

        {/* Result */}
        {result && (
          <>
            <div className="result-box text-center">
              <p className="text-xs text-text-muted mb-2">Your KCSE Mean Grade</p>
              <p className="text-5xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light mb-2">
                {result.meanGrade}
              </p>
              <p className="text-sm text-text-secondary">
                Total Points: {result.totalPoints} / 96 • Mean Score: {result.meanScore}
              </p>
            </div>

            {/* Career Qualification */}
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-bg-elevated">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  Career Eligibility
                </h3>
              </div>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Career / Course</th>
                    <th>Min Grade</th>
                    <th className="text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {careerRequirements.map((career) => {
                    const qualifies = result.meanScore >= career.minPoints;
                    return (
                      <tr key={career.career}>
                        <td className="text-text-secondary">{career.career}</td>
                        <td className="text-text-muted">{career.minGrade}</td>
                        <td className="text-right">
                          {qualifies ? (
                            <span className="text-kenya-green-light font-semibold">✅ Eligible</span>
                          ) : (
                            <span className="text-text-muted">❌ Below minimum</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Grade Boundaries Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              KCSE Mean Grade Boundaries
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Points</th>
                <th>Mean Score Range</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((g) => {
                const boundary = meanGradeBoundaries.find((b) => b.grade === g);
                const isMatch = result && result.meanGrade === g;
                return (
                  <tr key={g} className={isMatch ? "bg-gold/10" : ""}>
                    <td className={`font-semibold ${isMatch ? "text-gold" : "text-text-primary"}`}>
                      {g} {isMatch && "← You"}
                    </td>
                    <td className="text-text-secondary">{gradePoints[g]}</td>
                    <td className="text-text-muted">
                      {boundary ? `${boundary.min.toFixed(2)} – ${boundary.max.toFixed(2)}` : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </ToolShell>
  );
}
