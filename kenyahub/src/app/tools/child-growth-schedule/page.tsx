"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import vaxData from "@/data/vaccination-schedule.json";

const tool = TOOLS.find((t) => t.slug === "child-growth-schedule")!;

const faq = [
  {
    question: "What is the KEPI schedule?",
    answer: "The Kenya Expanded Programme on Immunization (KEPI) is the Ministry of Health's official schedule of free, routine childhood vaccinations designed to protect children from preventable diseases like polio, measles, and tuberculosis.",
  },
  {
    question: "Are KEPI vaccines free in Kenya?",
    answer: "Yes, vaccines in the routine KEPI schedule are provided free of charge at all public health facilities and many private facilities (though private clinics may charge a small administration fee).",
  },
  {
    question: "What should I do if my child misses a vaccine?",
    answer: "Visit the nearest health facility as soon as possible. The nurses will advise on a 'catch-up' schedule to ensure your child gets the missed doses safely.",
  },
  {
    question: "Why does my child need Vitamin A?",
    answer: "Vitamin A supplementation (given every 6 months from age 6 months to 5 years) is critical for boosting immunity and preventing blindness. It significantly reduces the risk of severe illness from infections.",
  },
  {
    question: "How is child growth monitored?",
    answer: "Growth is monitored using the WHO Child Growth Standards. Regular weighing ensures your child is growing adequately. Consistently poor weight gain or sudden weight loss should be checked by a healthcare provider.",
  },
];

export default function ChildGrowthSchedulePage() {
  const [dob, setDob] = useState<string>(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 3); // Default to 3 months ago
    return d.toISOString().split("T")[0];
  });
  const [gender, setGender] = useState<"boys" | "girls">("girls");

  const today = new Date();
  const dobDate = new Date(dob);
  
  // Calculate age in months and weeks
  const ageInMs = today.getTime() - dobDate.getTime();
  const ageInWeeks = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 7));
  const ageInMonthsRaw = (today.getFullYear() - dobDate.getFullYear()) * 12 + (today.getMonth() - dobDate.getMonth());
  // Adjust month if day of month hasn't occurred yet
  const ageInMonths = today.getDate() < dobDate.getDate() ? ageInMonthsRaw - 1 : ageInMonthsRaw;
  const isBorn = ageInMs >= 0;

  const results = useMemo(() => {
    if (!isBorn) return null;

    // Find next vaccines
    const nextVaxVisit = vaxData.vaccinationSchedule.find(visit => visit.ageWeeks > ageInWeeks);
    const pastVaxVisits = vaxData.vaccinationSchedule.filter(visit => visit.ageWeeks <= ageInWeeks);

    // Find current weight expectations
    // Find the closest age bracket in growth standards
    const standards = vaxData.growthStandards.weightForAge[gender];
    let currentWeightMatch = standards[0];
    for (let i = standards.length - 1; i >= 0; i--) {
      if (ageInMonths >= standards[i].ageMonths) {
        currentWeightMatch = standards[i];
        break;
      }
    }

    // Find next milestone
    const nextMilestone = vaxData.milestones.find(m => m.ageMonths > ageInMonths);
    const recentMilestone = vaxData.milestones.slice().reverse().find(m => m.ageMonths <= ageInMonths);

    return {
      ageInWeeks,
      ageInMonths,
      ageDisplay: ageInMonths >= 12 
        ? `${Math.floor(ageInMonths / 12)} yrs, ${ageInMonths % 12} mos` 
        : `${ageInMonths} mos (${ageInWeeks} weeks)`,
      nextVaxVisit,
      pastVaxVisits,
      currentWeightMatch,
      nextMilestone,
      recentMilestone
    };
  }, [ageInWeeks, ageInMonths, gender, isBorn]);

  const formatDate = (weeksToAdd: number) => {
    const d = new Date(dobDate);
    d.setDate(d.getDate() + (weeksToAdd * 7));
    return d.toLocaleDateString("en-KE", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Inputs */}
        <div className="bg-bg-card border border-border rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Child's Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="input-field"
              max={today.toISOString().split("T")[0]}
              id="child-dob-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Gender
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("girls")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  gender === "girls"
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                Girl
              </button>
              <button
                onClick={() => setGender("boys")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  gender === "boys"
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                Boy
              </button>
            </div>
          </div>
        </div>

        {!isBorn ? (
          <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-text-primary text-sm">Please enter a valid past date of birth.</p>
          </div>
        ) : results ? (
          <>
            {/* Status Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center h-full">
                <p className="text-xs text-text-muted mb-1">Current Age</p>
                <p className="text-2xl font-extrabold text-text-primary font-[family-name:var(--font-outfit)]">
                  {results.ageDisplay}
                </p>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center sm:col-span-2">
                <p className="text-xs text-text-muted mb-1">Next Clinic Visit / Vaccines</p>
                {results.nextVaxVisit ? (
                  <>
                    <p className="text-xl font-bold text-kenya-red-light font-[family-name:var(--font-outfit)]">
                      {results.nextVaxVisit.age} ({formatDate(results.nextVaxVisit.ageWeeks)})
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {results.nextVaxVisit.vaccines.map((v, i) => (
                        <span key={i} className="inline-flex px-2 py-0.5 rounded bg-kenya-red/10 text-kenya-red-light text-[0.625rem] font-medium border border-kenya-red/20">
                          {v.name}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-lg font-medium text-kenya-green-light mt-2">
                    Routine KEPI schedule completed! 🎉
                  </p>
                )}
              </div>
            </div>

            {/* Growth & Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                  Expected Weight Range
                </h3>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-3xl font-extrabold text-kenya-green-light font-[family-name:var(--font-outfit)]">
                    {results.currentWeightMatch.sd1low.toFixed(1)} – {results.currentWeightMatch.sd1high.toFixed(1)} kg
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  Normal range (between -1 SD and +1 SD) for a {results.currentWeightMatch.ageMonths}-month-old {gender === "girls" ? "girl" : "boy"} according to WHO standards.
                </p>
                <p className="text-[0.625rem] text-text-secondary mt-2 pt-2 border-t border-border">
                  Median average: <span className="font-medium text-text-primary">{results.currentWeightMatch.median.toFixed(1)} kg</span>
                </p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                  Developmental Milestones
                </h3>
                {results.recentMilestone && (
                  <div className="mb-3">
                    <p className="text-xs text-kenya-green-light font-medium mb-1 flex items-center gap-1">
                      <span>✓</span> Should be doing ({results.recentMilestone.ageMonths} mos):
                    </p>
                    <p className="text-xs text-text-secondary">{results.recentMilestone.milestone}</p>
                  </div>
                )}
                {results.nextMilestone && (
                  <div>
                    <p className="text-xs text-gold font-medium mb-1">
                      Coming soon ({results.nextMilestone.ageMonths} mos):
                    </p>
                    <p className="text-xs text-text-secondary">{results.nextMilestone.milestone}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Full Schedule Table */}
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-bg-elevated flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                  Complete KEPI Schedule
                </h3>
              </div>
              <div className="divide-y divide-border">
                {vaxData.vaccinationSchedule.map((visit, i) => {
                  const isPast = visit.ageWeeks <= results.ageInWeeks;
                  const isNext = results.nextVaxVisit?.ageWeeks === visit.ageWeeks;
                  
                  return (
                    <div 
                      key={i} 
                      className={`px-5 py-4 flex flex-col sm:flex-row gap-4 ${isNext ? "bg-gold/5" : ""}`}
                    >
                      <div className="w-full sm:w-1/3 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <span className={`flex-shrink-0 w-2 h-2 rounded-full ${isPast ? "bg-kenya-green-light" : isNext ? "bg-gold animate-pulse" : "bg-border"}`}></span>
                          <p className={`text-sm font-bold font-[family-name:var(--font-outfit)] ${isPast ? "text-text-secondary line-through" : isNext ? "text-gold" : "text-text-primary"}`}>
                            {visit.age}
                          </p>
                        </div>
                        <p className="text-xs text-text-muted mt-1 ml-4">
                          Due: {formatDate(visit.ageWeeks)}
                        </p>
                      </div>
                      <div className="w-full sm:w-2/3">
                        <div className="grid gap-2">
                          {visit.vaccines.map((v, j) => (
                            <div key={j} className="text-xs">
                              <span className={`font-medium ${isPast ? "text-text-muted" : "text-text-primary"}`}>
                                {v.name}
                              </span>
                              <span className="text-text-muted"> — {v.fullName}</span>
                              <p className="text-[0.625rem] text-text-secondary mt-0.5 ml-1">
                                🛡️ {v.protectsAgainst} ({v.route})
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </ToolShell>
  );
}
