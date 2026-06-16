"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import termsData from "@/data/school-terms.json";

const tool = TOOLS.find((t) => t.slug === "school-terms")!;

const faq = [
  { question: "How many school terms does Kenya have?", answer: "Kenya has 3 school terms per year: Term 1 (January–April), Term 2 (May–August), and Term 3 (August/September–October/November). Each term has a mid-term break, and there are longer holidays between terms." },
  { question: "When do Kenya schools open in 2025?", answer: "Term 1 opens on January 6, 2025 and closes on April 4, 2025. Term 2 opens on April 28, 2025. Term 3 opens on August 25, 2025." },
  { question: "When is the December holiday for schools?", answer: "The long December holiday typically runs from early November to early January — about 9 weeks. It's the longest school break in the Kenyan calendar." },
  { question: "Do all schools follow the same term dates?", answer: "Public schools follow the Ministry of Education's official calendar. Private and international schools may set their own calendars, though most align closely with the MoE dates." },
];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isCurrentTerm(openDate: string, closeDate: string) {
  const now = new Date();
  return now >= new Date(openDate + "T00:00:00") && now <= new Date(closeDate + "T00:00:00");
}

function isCurrentHoliday(start: string, end: string) {
  const now = new Date();
  return now >= new Date(start + "T00:00:00") && now <= new Date(end + "T00:00:00");
}

export default function SchoolTermsPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = Object.keys(termsData.years);
  const yearData = (termsData.years as Record<string, typeof termsData.years["2025"]>)[selectedYear];

  if (!yearData) return null;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Year Toggle */}
        <div className="flex gap-2">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedYear === y
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-card border border-border text-text-secondary hover:border-gold hover:text-gold"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Terms */}
        <div className="space-y-4">
          {yearData.terms.map((term) => {
            const current = isCurrentTerm(term.openingDate, term.closingDate);
            return (
              <div
                key={term.term}
                className={`bg-bg-card border rounded-xl overflow-hidden ${
                  current ? "border-gold" : "border-border"
                }`}
              >
                <div className={`px-5 py-3 border-b ${current ? "bg-gold/10 border-gold/20" : "bg-bg-elevated border-border"}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">
                      📚 {term.name} — {selectedYear}
                      {current && <span className="ml-2 badge bg-gold/20 text-gold text-[0.6rem]">CURRENT</span>}
                    </h3>
                    <span className="text-xs text-text-muted">{term.weeks} weeks</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-text-muted mb-1">Opening Date</p>
                      <p className="text-sm font-semibold text-kenya-green-light">
                        {formatDate(term.openingDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-1">Closing Date</p>
                      <p className="text-sm font-semibold text-kenya-red-light">
                        {formatDate(term.closingDate)}
                      </p>
                    </div>
                  </div>

                  {term.midTermBreak && (
                    <div className="bg-white/5 rounded-lg p-3 mb-3">
                      <p className="text-xs font-semibold text-text-secondary mb-1">Mid-Term Break</p>
                      <p className="text-xs text-text-muted">
                        {formatDate(term.midTermBreak.start)} — {formatDate(term.midTermBreak.end)}
                      </p>
                    </div>
                  )}

                  {term.notes && (
                    <p className="text-xs text-text-muted italic">📝 {term.notes}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* School Holidays */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              🏖️ School Holidays — {selectedYear}
            </h3>
          </div>
          <div className="divide-y divide-border">
            {yearData.holidays.map((holiday, i) => {
              const current = isCurrentHoliday(holiday.start, holiday.end);
              return (
                <div
                  key={i}
                  className={`px-5 py-4 flex items-center justify-between ${current ? "bg-gold/5" : ""}`}
                >
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {holiday.name}
                      {current && <span className="ml-2 badge bg-gold/20 text-gold text-[0.6rem]">NOW</span>}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {formatDate(holiday.start)} — {formatDate(holiday.end)}
                    </p>
                  </div>
                  <span className="text-xs text-text-muted">{holiday.weeks} weeks</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
