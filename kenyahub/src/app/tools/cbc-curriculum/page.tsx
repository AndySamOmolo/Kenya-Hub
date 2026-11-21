"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useEffect, useRef, useMemo } from "react";
import { X } from "lucide-react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import cbcData from "@/data/cbc-curriculum.json";
import schoolTermsData from "@/data/school-terms.json";
import publicHolidaysData from "@/data/public-holidays.json";

const tool = TOOLS.find((t) => t.slug === "cbc-curriculum")!;

export default function CBCCurriculumPage() {
  const [selectedLevel, setSelectedLevel] = useState(cbcData.levels[0].id);
  const [birthYear, setBirthYear] = useState<number>(2016);
  const [birthYearInput, setBirthYearInput] = useState<string>("2016");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) {
      _scrollMountRef.current = true;
      return;
    }
    scrollToTopIfScrolled();
  }, [selectedLevel]);
  const level = cbcData.levels.find((l) => l.id === selectedLevel)!;

  const gradeAgeResult = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const turnsAge = currentYear - birthYear;
    const match = cbcData.gradeAgeMapping.find((m) => m.turnsAge === turnsAge);
    const idx = match ? cbcData.gradeAgeMapping.indexOf(match) : -1;
    const nextMilestone =
      idx >= 0 && idx < cbcData.gradeAgeMapping.length - 1
        ? `Progressing to ${cbcData.gradeAgeMapping[idx + 1].grade} in ${currentYear + 1}`
        : turnsAge < 4
        ? `Joins PP1 in ${birthYear + 4} (Age 4)`
        : "University / TVET / Tertiary Education";

    return {
      turnsAge,
      currentGrade: match?.grade || (turnsAge < 4 ? "Pre-School / Daycare" : "Tertiary / University (Post-Grade 12)"),
      level: match?.level || (turnsAge < 4 ? "Early Childhood" : "Higher Education"),
      previousEquivalent: match?.previousEquivalent || (turnsAge < 4 ? "Home / Early Daycare" : "Post-Secondary"),
      nextMilestone,
    };
  }, [birthYear]);

  const hasPathways = "pathways" in level && Array.isArray(level.pathways) && level.pathways.length > 0;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Level Selector — Horizontal Scrolling Pills */}
        <ExpandablePillRow>
          {cbcData.levels.map((l) => {
            const active = selectedLevel === l.id;
            return (
              <button
                key={l.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedLevel(l.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {l.name}
              </button>
            );
          })}
        </ExpandablePillRow>

        {/* Level Info */}
        <div role="status" aria-live="polite" aria-atomic="true" className="result-box">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
                {level.name}
              </h2>
              <p className="text-sm text-text-secondary">
                {level.grades.join(", ")} • Ages {level.ageRange} • {level.duration}
              </p>
              <p className="text-xs text-text-muted mt-1">
                Previous 8-4-4 system equivalent: {level.previousSystem}
              </p>
            </div>
            <span className="badge badge-education whitespace-nowrap">
              {hasPathways
                ? `${level.pathways!.length} Career Pathways`
                : `${level.learningAreas?.length || 0} Learning Areas`}
            </span>
          </div>
        </div>

        {/* Learning Areas */}
        {level.learningAreas && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
              Official KICD Learning Areas ({level.name})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {level.learningAreas.map((area, i) => (
                <div
                  key={i}
                  className="bg-bg-card border border-border rounded-xl p-4 tool-card"
                >
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {area.name}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pathways (Senior Secondary) */}
        {"pathways" in level && level.pathways && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
              Senior School Pathways (Grades 10–12)
            </h3>
            <p className="text-sm text-text-muted">{level.note}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {level.pathways.map((pathway, i) => (
                <div
                  key={i}
                  className="bg-bg-card border border-border rounded-xl p-5 tool-card"
                >
                  <h4 className="text-sm font-bold text-gold mb-1 font-[family-name:var(--font-outfit)]">
                    {pathway.name}
                  </h4>
                  <p className="text-xs text-text-muted mb-3">
                    {pathway.description}
                  </p>
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-text-secondary mb-1">Core Subjects:</p>
                    <div className="flex flex-wrap gap-1">
                      {pathway.coreSubjects.map((s) => (
                        <span key={s} className="badge badge-education text-[0.6rem]">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-secondary mb-1">Elective Tracks:</p>
                    <div className="flex flex-wrap gap-1">
                      {pathway.electiveSubjects.map((s) => (
                        <span key={s} className="badge bg-white/5 text-text-muted text-[0.6rem]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive CBC Grade-Age & Birth-Year Checker */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                Interactive 2026 CBC Grade &amp; Birth-Year Calculator
              </h2>
              <p className="text-xs text-text-muted">
                Select or enter your child&apos;s birth year to check their expected 2026 CBC grade and former 8-4-4 equivalent.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="cbc-birth-year" className="text-xs font-semibold text-text-secondary">
                Birth Year:
              </label>
              <div className="relative">
                <input
                  id="cbc-birth-year"
                  type="number"
                  inputMode="numeric"
                  min={2005}
                  max={2025}
                  value={birthYearInput}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    setBirthYearInput(raw);
                    const n = Number(raw);
                    if (raw.length === 4 && n >= 2000 && n <= 2026) {
                      setBirthYear(n);
                    }
                  }}
                  onBlur={() => {
                    const n = Number(birthYearInput);
                    const clamped = !birthYearInput || isNaN(n) ? 2016 : Math.max(2005, Math.min(2025, n));
                    setBirthYear(clamped);
                    setBirthYearInput(String(clamped));
                  }}
                  placeholder="2016"
                  className="input-field w-32 text-sm font-bold text-left pl-3! pr-9! py-1.5 border border-border dark:border-white/15 tabular-nums"
                  style={{ paddingLeft: "0.75rem", paddingRight: "2.25rem" }}
                />
                {birthYearInput && (
                  <button
                    type="button"
                    onClick={() => setBirthYearInput("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear birth year"
                  >
                    <X className="w-3 h-3 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009].map((yr) => (
              <button
                key={yr}
                type="button"
                aria-pressed={birthYear === yr}
                onClick={() => {
                  setBirthYear(yr);
                  setBirthYearInput(String(yr));
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  birthYear === yr
                    ? "bg-gold/15 border-gold text-gold font-bold"
                    : "bg-bg-elevated border-border text-text-secondary hover:border-gold/40"
                }`}
              >
                Born {yr}
              </button>
            ))}
          </div>

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1"
          >
            <div className="bg-bg-elevated border border-border/70 rounded-xl p-3.5">
              <p className="text-[0.65rem] text-text-muted uppercase">Expected 2026 Grade</p>
              <p className="text-lg font-extrabold text-kenya-green-light font-[family-name:var(--font-outfit)] mt-0.5">
                {gradeAgeResult.currentGrade}
              </p>
            </div>
            <div className="bg-bg-elevated border border-border/70 rounded-xl p-3.5">
              <p className="text-[0.65rem] text-text-muted uppercase">Age Turned in 2026</p>
              <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-outfit)] mt-0.5 tabular-nums">
                {gradeAgeResult.turnsAge} Years
              </p>
            </div>
            <div className="bg-bg-elevated border border-border/70 rounded-xl p-3.5">
              <p className="text-[0.65rem] text-text-muted uppercase">Former 8-4-4 Stage</p>
              <p className="text-sm font-bold text-gold mt-1">
                {gradeAgeResult.previousEquivalent}
              </p>
            </div>
            <div className="bg-bg-elevated border border-border/70 rounded-xl p-3.5">
              <p className="text-[0.65rem] text-text-muted uppercase">Next Transition</p>
              <p className="text-xs font-semibold text-text-secondary mt-1">
                {gradeAgeResult.nextMilestone}
              </p>
            </div>
          </div>
        </div>

        {/* CBC vs 8-4-4 Comparison */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Complete CBC vs 8-4-4 Grade-Age Mapping Table (PP1 to Grade 12)
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">CBC Grade</th>
                  <th className="whitespace-nowrap">Official Age</th>
                  <th className="whitespace-nowrap">2026 Birth Year</th>
                  <th className="whitespace-nowrap">8-4-4 Equivalent</th>
                  <th className="whitespace-nowrap">CBC Tier</th>
                </tr>
              </thead>
              <tbody>
                {cbcData.gradeAgeMapping.map((row) => {
                  const isSelected = gradeAgeResult.currentGrade === row.grade;
                  return (
                    <tr key={row.grade} className={isSelected ? "bg-gold/10" : ""}>
                      <td className={`font-semibold whitespace-nowrap ${isSelected ? "text-gold" : "text-text-primary"}`}>
                        {row.grade} {isSelected ? "← Selected" : ""}
                      </td>
                      <td className="text-text-secondary whitespace-nowrap tabular-nums">{row.turnsAge} years</td>
                      <td className="font-mono text-xs text-text-muted whitespace-nowrap tabular-nums">{2026 - row.turnsAge}</td>
                      <td className="text-text-muted whitespace-nowrap">{row.previousEquivalent}</td>
                      <td className="whitespace-nowrap">
                        <span className="badge badge-education text-[0.6rem]">{row.level}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Official Ministry of Education 2026 School Term Calendar & Gazetted Public Holidays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              Ministry of Education 2026 School Term Dates &amp; Half-Term Calendar
            </h2>
            <div className="space-y-2">
              {(schoolTermsData.years["2026"]?.terms || []).map((term) => (
                <div key={term.name} className="rounded-xl bg-bg-elevated/60 border border-border p-3 text-xs flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <p className="font-bold text-text-primary">{term.name} ({term.weeks} weeks)</p>
                    <p className="text-text-secondary">{term.openingDate} to {term.closingDate}</p>
                  </div>
                  {term.midTermBreak && (
                    <span className="text-[0.6875rem] text-gold font-medium shrink-0">
                      Half-Term: {term.midTermBreak.start} to {term.midTermBreak.end}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3">
            <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              2026 Gazetted Kenyan Public Holidays ({publicHolidaysData.source})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
              {(publicHolidaysData.holidays["2026"] || []).map((hol) => (
                <div key={hol.name + hol.date} className="rounded-lg bg-bg-elevated/60 border border-border px-3 py-2 text-xs">
                  <p className="font-semibold text-text-primary">{hol.name}</p>
                  <p className="text-gold font-mono text-[0.6875rem]">{hol.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
