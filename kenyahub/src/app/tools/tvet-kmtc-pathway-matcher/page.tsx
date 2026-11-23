"use client";

import { useState, useMemo } from "react";
import {
  GraduationCap,
  Stethoscope,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Layers,
} from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("tvet-kmtc-pathway-matcher")!;

const MEAN_GRADES = ["C", "C-", "D+", "D", "D-", "E"] as const;
const SUBJECT_GRADES = [
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
] as const;

const GRADE_RANK: Record<string, number> = {
  E: 1,
  "D-": 2,
  D: 3,
  "D+": 4,
  "C-": 5,
  C: 6,
  "C+": 7,
  "B-": 8,
  B: 9,
  "B+": 10,
  "A-": 11,
  A: 12,
};

interface KmtcSubjectRequirement {
  langMin: string;
  bioMin: string;
  stemMin: string;
}

const KMTC_SUBJECT_RULES: Record<string, KmtcSubjectRequirement> = {
  "dip-nursing": { langMin: "C", bioMin: "C", stemMin: "C-" },
  "dip-clinical-med": { langMin: "C", bioMin: "C", stemMin: "C-" },
  "cert-nursing": { langMin: "C-", bioMin: "C-", stemMin: "D+" },
  "cert-nutrition": { langMin: "D+", bioMin: "D+", stemMin: "D+" },
  "cert-ortho-trauma": { langMin: "C-", bioMin: "C-", stemMin: "D+" },
  "cert-public-health": { langMin: "D+", bioMin: "D+", stemMin: "D" },
  "cert-mortuary": { langMin: "D", bioMin: "D", stemMin: "D-" },
};

const UPGRADE_LADDER = [
  {
    id: "kcse-entry",
    step: "Start",
    title: "KCSE D- / E",
    level: "Entry Point",
    duration: "High School",
    minRank: 1,
    targetRank: 2,
  },
  {
    id: "artisan",
    step: "Step 1",
    title: "KNQF Level 4 Artisan",
    level: "TVET Artisan",
    duration: "1 Year",
    minRank: 1,
    targetRank: 2,
  },
  {
    id: "craft",
    step: "Step 2",
    title: "KNQF Level 5 Craft",
    level: "TVET / KMTC Cert",
    duration: "2 Years",
    minRank: 3,
    targetRank: 4,
  },
  {
    id: "diploma",
    step: "Step 3",
    title: "KNQF Level 6 Diploma",
    level: "TVET / KMTC Dip",
    duration: "3 Years",
    minRank: 5,
    targetRank: 6,
  },
  {
    id: "degree",
    step: "Step 4",
    title: "KNQF Level 7 Degree",
    level: "University Credit Transfer",
    duration: "2–3 Years*",
    minRank: 7,
    targetRank: 12,
  },
];

export default function TvetKmtcPathwayMatcherPage() {
  const [meanGrade, setMeanGrade] = useState<string>("C-");
  const [langGrade, setLangGrade] = useState<string>("C-");
  const [bioGrade, setBioGrade] = useState<string>("C-");
  const [stemGrade, setStemGrade] = useState<string>("D+");

  const { knqfLevels, kmtcProgrammes } = everydayData.tvetKmtc;

  const analysis = useMemo(() => {
    const meanRank = GRADE_RANK[meanGrade] ?? 1;
    const langRank = GRADE_RANK[langGrade] ?? 1;
    const bioRank = GRADE_RANK[bioGrade] ?? 1;
    const stemRank = GRADE_RANK[stemGrade] ?? 1;

    const matchedKnqf = knqfLevels.map((lvl) => ({
      ...lvl,
      eligible: lvl.eligibleGrades.includes(meanGrade),
    }));

    const highestEligibleKnqf =
      matchedKnqf.filter((l) => l.eligible).sort((a, b) => b.level - a.level)[0] ??
      matchedKnqf[0];

    const evaluatedKmtc = kmtcProgrammes.map((prog) => {
      const rule = KMTC_SUBJECT_RULES[prog.id] ?? {
        langMin: prog.minMeanGrade,
        bioMin: prog.minMeanGrade,
        stemMin: prog.minMeanGrade,
      };
      const gaps: string[] = [];
      if (meanRank < (GRADE_RANK[prog.minMeanGrade] ?? 1)) {
        gaps.push(`Mean ${prog.minMeanGrade} required`);
      }
      if (langRank < (GRADE_RANK[rule.langMin] ?? 1)) {
        gaps.push(`Eng/Kis ${rule.langMin}+`);
      }
      if (bioRank < (GRADE_RANK[rule.bioMin] ?? 1)) {
        gaps.push(`Bio ${rule.bioMin}+`);
      }
      if (stemRank < (GRADE_RANK[rule.stemMin] ?? 1)) {
        gaps.push(`Math/Chem ${rule.stemMin}+`);
      }

      return {
        ...prog,
        eligible: gaps.length === 0,
        gaps,
      };
    });

    const eligibleKmtc = evaluatedKmtc.filter((p) => p.eligible);
    const upgradeKmtc = evaluatedKmtc.filter((p) => !p.eligible);

    // Determine current rung index on the ladder:
    // E/D- => starts at Artisan (index 1)
    // D/D+ => starts at Craft (index 2)
    // C-/C => starts at Diploma (index 3)
    const entryLadderIndex =
      meanRank >= GRADE_RANK["C-"] ? 3 : meanRank >= GRADE_RANK["D"] ? 2 : 1;

    return {
      matchedKnqf,
      highestEligibleKnqf,
      eligibleKmtc,
      upgradeKmtc,
      entryLadderIndex,
    };
  }, [meanGrade, langGrade, bioGrade, stemGrade, knqfLevels, kmtcProgrammes]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Grade Inputs Card */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div>
            <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-gold shrink-0" />
              Enter Your KCSE Grades
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Match your KCSE mean grade and key subjects against KNQF Levels 4–6 TVET and KMTC 2026 entry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label
                htmlFor="kcse-mean"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                KCSE Mean Grade
              </label>
              <CustomSelect
                id="kcse-mean"
                value={meanGrade}
                onValueChange={setMeanGrade}
                className="w-full"
              >
                {MEAN_GRADES.map((g) => (
                  <option key={g} value={g}>
                    Mean Grade {g}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="kcse-lang"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                English / Kiswahili
              </label>
              <CustomSelect
                id="kcse-lang"
                value={langGrade}
                onValueChange={setLangGrade}
                className="w-full"
              >
                {SUBJECT_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="kcse-bio"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Biology
              </label>
              <CustomSelect
                id="kcse-bio"
                value={bioGrade}
                onValueChange={setBioGrade}
                className="w-full"
              >
                {SUBJECT_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="kcse-stem"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Maths / Chemistry
              </label>
              <CustomSelect
                id="kcse-stem"
                value={stemGrade}
                onValueChange={setStemGrade}
                className="w-full"
              >
                {SUBJECT_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </CustomSelect>
            </div>
          </div>
        </div>

        {/* Visual 2-Step Upgrade Ladder */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-text-primary flex items-center gap-2 min-w-0">
              <ArrowUpRight className="w-4 h-4 text-gold shrink-0" />
              KNQF Progression &amp; 2-Step Upgrade Ladder
            </h3>
            <span className="px-2.5 py-1 rounded-full text-[0.7rem] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 shrink-0">
              Direct Entry: KNQF Level {analysis.highestEligibleKnqf.level}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {UPGRADE_LADDER.map((rung, idx) => {
              const isEntry = idx === analysis.entryLadderIndex;
              const isNextTwo =
                idx > analysis.entryLadderIndex &&
                idx <= analysis.entryLadderIndex + 2;
              const isBypassed = idx < analysis.entryLadderIndex && idx > 0;

              return (
                <div
                  key={rung.id}
                  className={`rounded-xl border p-3.5 space-y-1 ${
                    isEntry
                      ? "border-gold bg-gold/10"
                      : isNextTwo
                      ? "border-emerald-500/40 bg-emerald-500/[0.06]"
                      : "border-border bg-bg-elevated/40 opacity-80"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="text-[0.65rem] font-bold uppercase text-text-muted">
                      {rung.step}
                    </span>
                    {isEntry && (
                      <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gold text-kenya-black">
                        Start Here
                      </span>
                    )}
                    {isNextTwo && (
                      <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                        Upgrade +{idx - analysis.entryLadderIndex}
                      </span>
                    )}
                    {isBypassed && (
                      <span className="text-[0.65rem] font-semibold text-text-muted">
                        Qualified
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-text-primary">{rung.title}</p>
                  <p className="text-[0.68rem] text-text-muted">
                    {rung.level} • {rung.duration}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[0.7rem] text-text-muted">
            *KNQF progression lets a student with D- or E start at Artisan (Level 4), upgrade to Craft (Level 5), advance to Diploma (Level 6), and articulate into a Bachelor&apos;s Degree (Level 7) with credit exemptions.
          </p>
        </div>

        {/* KNQF TVET Levels */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
            <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold shrink-0" />
              TVET Pathways (KNQF Levels 4–6)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {analysis.matchedKnqf.map((lvl) => (
                <div
                  key={lvl.level}
                  className={`rounded-xl border p-4 space-y-2 ${
                    lvl.eligible
                      ? "border-emerald-500/40 bg-emerald-500/[0.06]"
                      : "border-border bg-bg-elevated/30"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-text-primary">
                      Level {lvl.level}: {lvl.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[0.68rem] font-bold shrink-0 ${
                        lvl.eligible
                          ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                          : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                      }`}
                    >
                      {lvl.eligible ? "Direct Entry" : "Via Upgrade"}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-text-muted">
                    <span>Min KCSE: {lvl.minKcse}</span>
                    <span>•</span>
                    <span>{lvl.durationMonths} months</span>
                  </div>
                  <p className="text-xs text-text-secondary">{lvl.upgradePath}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KMTC Programmes */}
          <div className="rounded-2xl border border-border bg-bg-card p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-2 min-w-0">
                <Stethoscope className="w-4 h-4 text-gold shrink-0" />
                KMTC Programmes Matched ({analysis.eligibleKmtc.length} of {kmtcProgrammes.length})
              </h3>
              <span className="text-xs text-text-muted">
                Filtered by mean grade &amp; subject clusters
              </span>
            </div>

            {analysis.eligibleKmtc.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {analysis.eligibleKmtc.map((prog) => (
                  <div
                    key={prog.id}
                    className="rounded-xl border border-emerald-500/40 bg-emerald-500/[0.06] p-4 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="text-xs font-bold text-text-primary min-w-0 flex-1">
                        {prog.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.68rem] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-3 h-3 shrink-0" /> Eligible
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-text-secondary">
                      <span>KNQF Level {prog.knqfLevel}</span>
                      <span>•</span>
                      <span>Min Mean: {prog.minMeanGrade}</span>
                      <span>•</span>
                      <span>{prog.durationYears} yrs</span>
                    </div>
                    <p className="text-[0.7rem] text-text-muted">
                      Subjects: {prog.keySubjects}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.06] p-4 text-xs text-text-secondary flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p>
                  No direct KMTC clinical/certificate entry matches these exact grades yet. Start with a <strong>KNQF Level 4 Artisan</strong> course at a TVETA-accredited TVET college, then bridge upward via Craft (Level 5) into Diploma programmes.
                </p>
              </div>
            )}

            {analysis.upgradeKmtc.length > 0 && (
              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold text-text-muted uppercase">
                  Programmes Requiring Higher Grades or Bridging ({analysis.upgradeKmtc.length})
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {analysis.upgradeKmtc.map((prog) => (
                    <div
                      key={prog.id}
                      className="rounded-xl border border-border bg-bg-elevated/30 p-3.5 space-y-1"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-text-primary min-w-0">
                          {prog.name}
                        </span>
                        <span className="text-[0.68rem] font-semibold text-text-muted whitespace-nowrap">
                          Min {prog.minMeanGrade} • {prog.durationYears} yrs
                        </span>
                      </div>
                      <p className="text-[0.68rem] text-amber-700 dark:text-amber-400">
                        Gap: {prog.gaps.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
