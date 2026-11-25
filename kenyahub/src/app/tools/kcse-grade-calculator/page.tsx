"use client";

import DynamicIcon from "@/components/ui/DynamicIcon";
import { useState, useMemo } from "react";
import { TOOLS } from "@/lib/tools-registry";
import CustomSelect from "@/components/ui/CustomSelect";

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
  { career: "Medicine & Surgery (MBChB)", minGrade: "A-", minPoints: 11 },
  { career: "Dental Surgery & Pharmacy", minGrade: "A-", minPoints: 11 },
  { career: "Civil, Electrical & Mechanical Engineering", minGrade: "B+", minPoints: 10 },
  { career: "Bachelor of Laws (LL.B.)", minGrade: "B+", minPoints: 10 },
  { career: "Architecture & Quantity Surveying", minGrade: "B+", minPoints: 10 },
  { career: "Computer Science & Software Engineering", minGrade: "B", minPoints: 9 },
  { career: "Bachelor of Science in Nursing (BScN)", minGrade: "C+", minPoints: 7 },
  { career: "Bachelor of Education (Arts / Science)", minGrade: "C+", minPoints: 7 },
  { career: "Bachelor of Commerce (BCom) & Economics", minGrade: "C+", minPoints: 7 },
  { career: "TVET / KMTC Diploma Courses", minGrade: "C-", minPoints: 5 },
  { career: "Artisan & Certificate Courses", minGrade: "D+", minPoints: 4 },
];

const subjectNames = [
  "English (Compulsory)",
  "Kiswahili",
  "Mathematics (Compulsory)",
  "Biology / Physics",
  "Chemistry",
  "History / Geography",
  "CRE / IRE / HRE",
  "Business / Agriculture / Computer",
  "Subject 9 (Optional 9th Subject)",
];

const DEFAULT_GRADES = ["B+", "A-", "B+", "B", "B+", "A-", "A", "B+", ""];

export default function KCSEGradeCalculatorPage() {
  const [subjectGrades, setSubjectGrades] = useState<string[]>(DEFAULT_GRADES);

  const updateGrade = (index: number, grade: string) => {
    setSubjectGrades((prev) => {
      const next = [...prev];
      next[index] = grade;
      return next;
    });
  };

  const result = useMemo(() => {
    const english = subjectGrades[0];
    const kiswahili = subjectGrades[1];
    const math = subjectGrades[2];
    const filledCount = subjectGrades.filter(Boolean).length;

    if ((!english && !kiswahili) || !math || filledCount < 7) return null;

    const englishPoints = english ? gradePoints[english] : 0;
    const kiswahiliPoints = kiswahili ? gradePoints[kiswahili] : 0;
    const mathPoints = gradePoints[math];
    const bestLangPoints = Math.max(englishPoints, kiswahiliPoints);
    const bestLangIdx = kiswahiliPoints > englishPoints ? 1 : 0;

    // KNEC official 7-subject / 84-point scale (F-006):
    // Best Language (English or Kiswahili) + Compulsory Mathematics + Best 5 remaining subjects
    const remainingPool = subjectGrades
      .map((g, idx) => ({ idx, pts: g ? gradePoints[g] : 0 }))
      .filter((item) => item.pts > 0 && item.idx !== bestLangIdx && item.idx !== 2)
      .map((item) => item.pts)
      .sort((a, b) => b - a);

    const best5Points = remainingPool.slice(0, 5).reduce((a, b) => a + b, 0);
    const best7Points = bestLangPoints + mathPoints + best5Points;
    const meanScore = best7Points / 7;

    const meanGradeObj = meanGradeBoundaries.find((b) => meanScore >= b.min);
    const meanGradeStr = meanGradeObj?.grade || "E";
    const achievedGradePoints = gradePoints[meanGradeStr] || Math.round(meanScore);

    return {
      best7Points,
      filledCount,
      meanScore: Math.round(meanScore * 100) / 100,
      meanGrade: meanGradeStr,
      achievedGradePoints,
      qualifyingCareers: careerRequirements.filter((c) => achievedGradePoints >= c.minPoints),
    };
  }, [subjectGrades]);

  return (
    <>
      <div className="space-y-6">
        {/* Grade Entry */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Enter Your KCSE Subject Grades
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSubjectGrades(DEFAULT_GRADES)}
                className="text-xs px-3 py-1.5 rounded-lg bg-bg-elevated border border-border text-text-secondary hover:text-gold transition-colors cursor-pointer"
              >
                Load Sample (A-)
              </button>
              <button
                type="button"
                onClick={() => setSubjectGrades(Array(9).fill(""))}
                className="text-xs px-3 py-1.5 rounded-lg bg-bg-elevated border border-border text-text-muted hover:text-kenya-red-light transition-colors cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subjectNames.map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <label
                  htmlFor={`kcse-subject-${i}`}
                  className="text-xs text-text-secondary w-44 flex-shrink-0"
                >
                  {name} {(i === 0 || i === 2) && <span className="text-kenya-red-light">*</span>}
                </label>
                <CustomSelect
                  id={`kcse-subject-${i}`}
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
                </CustomSelect>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-3">
            Enter English, Mathematics, and at least 5 other subjects (7–9 total). Mean grade is computed strictly on KNEC&apos;s official 7-subject / 84-point scale (Best Language + Mathematics + Best 5 remaining subjects).
          </p>
        </div>

        {/* Result */}
        {result && (
          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            <div className="result-box text-center">
              <p className="text-xs text-text-muted mb-2">Calculated KCSE Mean Grade (KNEC 7-Subject Scale)</p>
              <p className="text-5xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light mb-2 tabular-nums">
                {result.meanGrade}
              </p>
              <p className="text-sm text-text-secondary tabular-nums">
                Best 7 (KNEC): <strong>{result.best7Points} / 84</strong> • Mean Score: <strong>{result.meanScore.toFixed(2)} / 12.00</strong> • Subjects Entered: <strong>{result.filledCount}</strong>
              </p>
            </div>

            {/* Career Qualification */}
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-bg-elevated">
                <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  KUCCPS Degree &amp; Career Pathway Eligibility
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Career / Course Track</th>
                      <th className="whitespace-nowrap">Minimum Grade</th>
                      <th className="text-right whitespace-nowrap">Eligibility Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {careerRequirements.map((career) => {
                      const qualifies = result.achievedGradePoints >= career.minPoints;
                      return (
                        <tr key={career.career}>
                          <td className="text-text-secondary font-medium">{career.career}</td>
                          <td className="text-text-muted whitespace-nowrap tabular-nums">{career.minGrade} ({career.minPoints} pts)</td>
                          <td className="text-right whitespace-nowrap">
                            {qualifies ? (
                              <span className="text-kenya-green-light font-semibold inline-flex items-center gap-1"><DynamicIcon emoji="✅" className="w-3.5 h-3.5" /> Meets Minimum</span>
                            ) : (
                              <span className="text-text-muted inline-flex items-center gap-1"><DynamicIcon emoji="❌" className="w-3.5 h-3.5 text-kenya-red-light" /> Below Minimum</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Grade Boundaries Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Official KNEC KCSE 12-Point Grading Scale &amp; Mean Boundaries (7 Subjects / 84 Points)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">Letter Grade</th>
                  <th className="whitespace-nowrap">Subject Points</th>
                  <th className="whitespace-nowrap">Mean Score Range (Best 7)</th>
                  <th>Placement Tier</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g) => {
                  const boundary = meanGradeBoundaries.find((b) => b.grade === g);
                  const isMatch = result && result.meanGrade === g;
                  const pts = gradePoints[g];
                  const tier = pts >= 7 ? "Direct University Degree (KUCCPS)" : pts >= 5 ? "TVET / KMTC Diploma" : pts >= 3 ? "Craft / Artisan Certificate" : "Vocational / National Polytechnic Skill";
                  return (
                    <tr key={g} className={isMatch ? "bg-gold/10" : ""}>
                      <td className={`font-semibold whitespace-nowrap ${isMatch ? "text-gold" : "text-text-primary"}`}>
                        {g} {isMatch && "← Current"}
                      </td>
                      <td className="text-text-secondary font-mono whitespace-nowrap tabular-nums">{pts} pts</td>
                      <td className="text-text-muted whitespace-nowrap tabular-nums">
                        {boundary ? `${boundary.min.toFixed(2)} – ${boundary.max.toFixed(2)}` : "—"}
                      </td>
                      <td className="text-xs text-text-secondary">{tier}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
