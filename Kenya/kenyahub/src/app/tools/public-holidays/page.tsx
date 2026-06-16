"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import holidaysData from "@/data/public-holidays.json";

const tool = TOOLS.find((t) => t.slug === "public-holidays")!;

const faq = [
  { question: "How many public holidays does Kenya have?", answer: "Kenya has approximately 11–13 gazetted public holidays per year. The exact number varies because Islamic holidays (Eid ul-Fitr, Eid ul-Adha) are determined by moon sighting. Additionally, if a holiday falls on a Sunday, Monday is observed." },
  { question: "What happens when a public holiday falls on a Sunday?", answer: "When a gazetted public holiday falls on a Sunday, the following Monday is automatically observed as a public holiday. This is specified in the Public Holidays Act (Cap 110)." },
  { question: "Are Islamic holidays public holidays in Kenya?", answer: "Yes, Eid ul-Fitr (end of Ramadan) and Eid ul-Adha (Festival of Sacrifice) are gazetted public holidays in Kenya. Their exact dates depend on the Islamic lunar calendar and moon sighting." },
  { question: "What is Mashujaa Day?", answer: "Mashujaa Day (Heroes' Day) is celebrated on October 20th. It honors all Kenyans who contributed to the struggle for independence and the development of the nation. It replaced Kenyatta Day in 2010." },
  { question: "Can the President declare additional public holidays?", answer: "Yes, the President of Kenya can declare additional public holidays through a gazette notice. This has been done for events like elections, national mourning, and special national occasions." },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function daysUntil(dateStr: string) {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

function generateICS(holidays: { date: string; name: string }[], year: string) {
  let ics = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//KenyaHub//Public Holidays//EN\n";
  for (const h of holidays) {
    const d = h.date.replace(/-/g, "");
    const nextDay = new Date(h.date + "T00:00:00");
    nextDay.setDate(nextDay.getDate() + 1);
    const end = nextDay.toISOString().split("T")[0].replace(/-/g, "");
    ics += `BEGIN:VEVENT\nDTSTART;VALUE=DATE:${d}\nDTEND;VALUE=DATE:${end}\nSUMMARY:${h.name}\nDESCRIPTION:Kenya Public Holiday\nEND:VEVENT\n`;
  }
  ics += "END:VCALENDAR";
  return ics;
}

export default function PublicHolidaysPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = Object.keys(holidaysData.holidays);
  const holidays = (holidaysData.holidays as Record<string, { date: string; name: string; description: string }[]>)[selectedYear] || [];

  const nextHoliday = useMemo(() => {
    const allHolidays = Object.values(holidaysData.holidays).flat() as { date: string; name: string }[];
    const upcoming = allHolidays
      .filter((h) => daysUntil(h.date) > 0)
      .sort((a, b) => daysUntil(a.date) - daysUntil(b.date));
    return upcoming[0] || null;
  }, []);

  const downloadICS = () => {
    const ics = generateICS(holidays, selectedYear);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kenya-public-holidays-${selectedYear}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Next Holiday Countdown */}
        {nextHoliday && (
          <div className="result-box text-center">
            <p className="text-xs text-text-muted mb-2">Next Public Holiday</p>
            <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-kenya-green-light mb-1">
              {nextHoliday.name}
            </p>
            <p className="text-sm text-text-secondary mb-2">
              {formatDate(nextHoliday.date)}
            </p>
            <p className="text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">
              {daysUntil(nextHoliday.date)} days away
            </p>
          </div>
        )}

        {/* Year Toggle + Download */}
        <div className="flex items-center justify-between flex-wrap gap-3">
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
          <button onClick={downloadICS} className="btn-outline text-xs flex items-center gap-1">
            📥 Download .ics Calendar
          </button>
        </div>

        {/* Holidays List */}
        <div className="space-y-3">
          {holidays.map((holiday) => {
            const days = daysUntil(holiday.date);
            const isPast = days < 0;
            const isToday = days === 0;

            return (
              <div
                key={holiday.date}
                className={`bg-bg-card border rounded-xl p-5 flex items-start gap-4 ${
                  isToday
                    ? "border-gold bg-gold/5"
                    : isPast
                    ? "border-border opacity-60"
                    : "border-border"
                }`}
              >
                <div className="text-center flex-shrink-0 w-14">
                  <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-gold">
                    {new Date(holiday.date + "T00:00:00").getDate()}
                  </p>
                  <p className="text-xs text-text-muted uppercase">
                    {new Date(holiday.date + "T00:00:00").toLocaleDateString("en-KE", { month: "short" })}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary">
                    {holiday.name}
                    {isToday && <span className="ml-2 badge bg-gold/20 text-gold text-[0.6rem]">TODAY</span>}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{holiday.description}</p>
                  <p className="text-xs text-text-muted mt-1">
                    {formatDate(holiday.date)}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  {isToday ? (
                    <span className="text-sm font-semibold text-gold">🎉 Today!</span>
                  ) : isPast ? (
                    <span className="text-xs text-text-muted">Passed</span>
                  ) : (
                    <span className="text-xs text-text-secondary">{days} days</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h3>
          <ul className="space-y-1">
            {holidaysData.notes.map((note, i) => (
              <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                <span className="text-gold">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
