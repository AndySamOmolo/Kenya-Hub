"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import cbcData from "@/data/cbc-curriculum.json";

const tool = TOOLS.find((t) => t.slug === "cbc-curriculum")!;

const faq = [
  { question: "What is the CBC education system in Kenya?", answer: "The Competency-Based Curriculum (CBC) replaced the 8-4-4 system. It uses a 2-6-3-3-3 structure: 2 years Pre-Primary, 6 years Primary (Lower + Upper), 3 years Junior Secondary, and 3 years Senior Secondary. It focuses on developing competencies rather than rote memorization." },
  { question: "What subjects are taught in CBC Kenya?", answer: "CBC subjects vary by level. Pre-Primary has Language, Mathematical, Environmental, Psychomotor, and Religious activities. Primary adds English, Kiswahili, Mathematics, Science & Technology, and more. Junior Secondary introduces Integrated Science, Computer Science, and Business Studies." },
  { question: "What are the three Senior Secondary pathways?", answer: "Grade 10–12 students choose one of three pathways: STEM (Science, Technology, Engineering, Mathematics), Arts & Sports Science (visual/performing arts, sports), or Social Sciences (humanities, business, economics)." },
  { question: "When did CBC start in Kenya?", answer: "CBC was piloted in 2017 and fully rolled out starting 2019 with PP1 and Grade 1. Junior Secondary (Grade 7) began in 2023. Senior Secondary (Grade 10) is being phased in from 2026." },
  { question: "What is the equivalent of Form 1 in CBC?", answer: "Form 1 in the old 8-4-4 system is roughly equivalent to Grade 9 (JSS 3) in CBC. Grade 7 replaced Standard 7, and the Junior Secondary (JSS) covers what was previously late primary and early secondary." },
];

export default function CBCCurriculumPage() {
  const [selectedLevel, setSelectedLevel] = useState(cbcData.levels[0].id);
  const level = cbcData.levels.find((l) => l.id === selectedLevel)!;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Level Selector */}
        <div className="flex flex-wrap gap-2">
          {cbcData.levels.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLevel(l.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedLevel === l.id
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-card border border-border text-text-secondary hover:border-gold hover:text-gold"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Level Info */}
        <div className="result-box">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
                {level.name}
              </h2>
              <p className="text-sm text-text-secondary">
                {level.grades.join(", ")} • Ages {level.ageRange} • {level.duration}
              </p>
              <p className="text-xs text-text-muted mt-1">
                Previous system equivalent: {level.previousSystem}
              </p>
            </div>
            <span className="badge badge-education">
              {level.learningAreas?.length || 0} Learning Areas
            </span>
          </div>
        </div>

        {/* Learning Areas */}
        {level.learningAreas && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
              Learning Areas
            </h3>
            <div className="grid grid-cols-1 gap-3">
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
              Senior Secondary Pathways
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
                    <p className="text-xs font-semibold text-text-secondary mb-1">Core:</p>
                    <div className="flex flex-wrap gap-1">
                      {pathway.coreSubjects.map((s) => (
                        <span key={s} className="badge badge-education text-[0.6rem]">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-secondary mb-1">Electives:</p>
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

        {/* CBC vs 8-4-4 Comparison */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              CBC vs 8-4-4 Comparison
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>CBC Grade</th>
                <th>Age</th>
                <th>8-4-4 Equivalent</th>
                <th>CBC Level</th>
              </tr>
            </thead>
            <tbody>
              {cbcData.gradeAgeMapping.map((row) => (
                <tr key={row.grade}>
                  <td className="font-medium text-text-primary">{row.grade}</td>
                  <td className="text-text-secondary">{row.turnsAge} years</td>
                  <td className="text-text-muted">{row.previousEquivalent}</td>
                  <td>
                    <span className="badge badge-education text-[0.6rem]">{row.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ToolShell>
  );
}
