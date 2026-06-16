"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import cbcData from "@/data/cbc-curriculum.json";

const tool = TOOLS.find((t) => t.slug === "cbc-grade-age")!;

const faq = [
  { question: "What age should a child start PP1 in Kenya?", answer: "A child should turn 4 years old in the calendar year they join PP1. For example, if a child turns 4 anytime in 2025, they should join PP1 in January 2025." },
  { question: "Can my child join Grade 1 at age 5?", answer: "The recommended age for Grade 1 is turning 6 in the calendar year. Starting earlier is generally discouraged by the Ministry of Education, though some private schools may accept younger children." },
  { question: "What is the maximum age for PP1?", answer: "While there is no strict legal maximum, the recommended age is turning 4 in the calendar year. Children who are significantly older may be placed in a higher grade at the school's discretion." },
];

export default function CBCGradeAgePage() {
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) return null;

    const dob = new Date(birthDate);
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthYear = dob.getFullYear();
    const turnsThisYear = currentYear - birthYear;

    const mapping = cbcData.gradeAgeMapping;
    const match = mapping.find((m) => m.turnsAge === turnsThisYear);

    const ageNow = Math.floor((now.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

    let nextMilestone: string | null = null;
    if (match) {
      const idx = mapping.indexOf(match);
      if (idx < mapping.length - 1) {
        nextMilestone = `Moving to ${mapping[idx + 1].grade} in ${currentYear + 1}`;
      }
    }

    return {
      ageYears: ageNow,
      turnsThisYear,
      currentGrade: match?.grade || (turnsThisYear < 4 ? "Not yet school age" : "Beyond Grade 12"),
      level: match?.level || "",
      previousEquivalent: match?.previousEquivalent || "",
      nextMilestone,
      birthYear,
    };
  }, [birthDate]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Child&apos;s Date of Birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="input-field text-lg font-semibold"
            max={new Date().toISOString().split("T")[0]}
            id="dob-input"
          />
        </div>

        {/* Result */}
        {result && (
          <>
            <div className="result-box">
              <div className="text-center">
                <p className="text-xs text-text-muted mb-2">Your child should be in</p>
                <p className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light mb-2">
                  {result.currentGrade}
                </p>
                {result.level && (
                  <span className="badge badge-education">{result.level}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xs text-text-muted mb-1">Current Age</p>
                <p className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  {result.ageYears} years
                </p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xs text-text-muted mb-1">8-4-4 Equivalent</p>
                <p className="text-xl font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                  {result.previousEquivalent || "—"}
                </p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-xs text-text-muted mb-1">Next Milestone</p>
                <p className="text-sm font-semibold text-gold">
                  {result.nextMilestone || "Final year"}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Full Grade-Age Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Complete CBC Grade-Age Guide
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>CBC Grade</th>
                <th>Turns Age</th>
                <th>Level</th>
                <th>8-4-4 Equivalent</th>
              </tr>
            </thead>
            <tbody>
              {cbcData.gradeAgeMapping.map((row) => {
                const isMatch = result && result.currentGrade === row.grade;
                return (
                  <tr key={row.grade} className={isMatch ? "bg-gold/10" : ""}>
                    <td className={`font-medium ${isMatch ? "text-gold" : "text-text-primary"}`}>
                      {row.grade} {isMatch && "← Your child"}
                    </td>
                    <td className="text-text-secondary">{row.turnsAge} years</td>
                    <td><span className="badge badge-education text-[0.6rem]">{row.level}</span></td>
                    <td className="text-text-muted">{row.previousEquivalent}</td>
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
