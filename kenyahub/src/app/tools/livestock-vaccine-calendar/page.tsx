"use client";

import { useState, useMemo } from "react";
import { Calendar, Download, Syringe, HeartPulse, Info } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("livestock-vaccine-calendar")!;
const calData = everydayData.livestockCalendar;

type SpeciesId =
  | "cattle"
  | "goat"
  | "sheep"
  | "pig"
  | "poultry-broiler"
  | "poultry-layer"
  | "poultry-kienyeji";

const SPECIES_OPTIONS: { id: SpeciesId; label: string; isPoultry: boolean }[] = [
  { id: "cattle", label: "Dairy Cattle (283-day gestation)", isPoultry: false },
  { id: "goat", label: "Dairy / Meat Goat (150-day gestation)", isPoultry: false },
  { id: "sheep", label: "Sheep (150-day gestation)", isPoultry: false },
  { id: "pig", label: "Pig / Sow (114-day gestation)", isPoultry: false },
  { id: "poultry-broiler", label: "Poultry — Broiler (Day 1 to Week 6)", isPoultry: true },
  { id: "poultry-layer", label: "Poultry — Layer (Day 1 to Week 16)", isPoultry: true },
  { id: "poultry-kienyeji", label: "Poultry — Improved Kienyeji (Day 1 to Week 16)", isPoultry: true },
];

interface CalendarEventItem {
  id: string;
  date: Date;
  title: string;
  category: "reproduction" | "vaccine" | "deworming";
  detail: string;
}

function parseIsoUtc(iso: string): Date {
  const parts = iso.split("-").map(Number);
  return new Date(Date.UTC(parts[0] || 2026, (parts[1] || 1) - 1, parts[2] || 1));
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base.getTime());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function addMonths(base: Date, months: number): Date {
  const d = new Date(base.getTime());
  d.setUTCMonth(d.getUTCMonth() + months);
  return d;
}

function formatReadable(d: Date): string {
  return d.toLocaleDateString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatIcsDate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

function escapeIcsText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function buildIcsContent(speciesLabel: string, events: CalendarEventItem[]): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KenyaHub//Livestock Vaccine & Gestation Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  events.forEach((ev, idx) => {
    const start = formatIcsDate(ev.date);
    const end = formatIcsDate(addDays(ev.date, 1));
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:kenyahub-${ev.id}-${idx}-${start}@kenyahub.co.ke`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART;VALUE=DATE:${start}`);
    lines.push(`DTEND;VALUE=DATE:${end}`);
    lines.push(`SUMMARY:${escapeIcsText(`${ev.title} (${speciesLabel})`)}`);
    lines.push(`DESCRIPTION:${escapeIcsText(ev.detail)}`);
    lines.push("END:VEVENT");
  });

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export default function LivestockVaccineCalendarPage() {
  const [species, setSpecies] = useState<SpeciesId>("cattle");
  const [baseDateStr, setBaseDateStr] = useState<string>(() =>
    new Date().toISOString().slice(0, 10)
  );

  const calc = useMemo(() => {
    const option = SPECIES_OPTIONS.find((s) => s.id === species) || SPECIES_OPTIONS[0];
    const safeDate = /^\d{4}-\d{2}-\d{2}$/.test(baseDateStr)
      ? baseDateStr
      : new Date().toISOString().slice(0, 10);
    const baseDate = parseIsoUtc(safeDate);

    const reproMilestones: CalendarEventItem[] = [];
    const vaccineEvents: CalendarEventItem[] = [];

    if (!option.isPoultry) {
      const mammalKey = species as keyof typeof calData.gestationDays;
      const gestation = calData.gestationDays[mammalKey];
      const birthDate = addDays(baseDate, gestation);

      if (mammalKey === "cattle") {
        reproMilestones.push(
          {
            id: "preg-check",
            date: addDays(baseDate, 60),
            title: "Pregnancy Diagnosis (PD Check)",
            category: "reproduction",
            detail: "Confirm conception via rectal palpation or ultrasound at Day 60 post-AI.",
          },
          {
            id: "dry-off",
            date: addDays(birthDate, -60),
            title: "Dry-Off Date (Day 223)",
            category: "reproduction",
            detail: "Stop milking 60 days before calving and administer intramammary dry-cow therapy.",
          },
          {
            id: "steaming-up",
            date: addDays(birthDate, -45),
            title: "Start Steaming-Up Ration",
            category: "reproduction",
            detail: "Gradually increase dairy meal (2–4 kg/day) & minerals for colostrum and calf growth.",
          },
          {
            id: "calving",
            date: birthDate,
            title: "Expected Calving Date (Day 283)",
            category: "reproduction",
            detail: "Prepare clean calving pen; feed colostrum within 2 hours of birth.",
          }
        );
      } else if (mammalKey === "goat" || mammalKey === "sheep") {
        const birthWord = mammalKey === "goat" ? "Kidding" : "Lambing";
        reproMilestones.push(
          {
            id: "preg-check",
            date: addDays(baseDate, 45),
            title: "Pregnancy Confirmation",
            category: "reproduction",
            detail: "Check non-return to heat and body condition at Day 45.",
          },
          {
            id: "dry-off",
            date: addDays(birthDate, -45),
            title: "Dry-Off Milking Doe/Ewe",
            category: "reproduction",
            detail: "Cease milking 45 days before birth to rebuild udder reserves.",
          },
          {
            id: "steaming-up",
            date: addDays(birthDate, -30),
            title: "Steaming-Up & Deworming",
            category: "reproduction",
            detail: "Supplement with concentrates (250–400 g/day) and pregnancy-safe dewormer.",
          },
          {
            id: "birth",
            date: birthDate,
            title: `Expected ${birthWord} Date (Day 150)`,
            category: "reproduction",
            detail: `Prepare dry, draft-free ${birthWord.toLowerCase()} pen and iodine for navel dipping.`,
          }
        );
      } else {
        reproMilestones.push(
          {
            id: "preg-check",
            date: addDays(baseDate, 28),
            title: "Non-Return / Pregnancy Check",
            category: "reproduction",
            detail: "Verify sow does not return to heat at Day 21–28.",
          },
          {
            id: "steaming-up",
            date: addDays(birthDate, -21),
            title: "Late-Gestation Feed Boost & Deworm",
            category: "reproduction",
            detail: "Increase sow & weaner meal and deworm 2–3 weeks before farrowing.",
          },
          {
            id: "farrowing-pen",
            date: addDays(birthDate, -7),
            title: "Move Sow to Clean Farrowing Crate",
            category: "reproduction",
            detail: "Wash sow, disinfect farrowing pen, and prepare heat lamp for piglets.",
          },
          {
            id: "farrowing",
            date: birthDate,
            title: "Expected Farrowing Date (Day 114)",
            category: "reproduction",
            detail: "Iron dextran injection for piglets at Day 3; teeth clipping as advised by vet.",
          }
        );
      }

      const matchingVaccines = calData.ruminantVaccines.filter((v) =>
        v.species.includes(mammalKey)
      );
      matchingVaccines.forEach((v, idx) => {
        const firstDate = addDays(baseDate, 14 + idx * 7);
        vaccineEvents.push({
          id: `${v.id}-1`,
          date: firstDate,
          title: v.name,
          category: "vaccine",
          detail:
            v.intervalMonths === 0
              ? `${v.notes} (One-time lifelong ITM dose.)`
              : `${v.notes} (Repeat every ${v.intervalMonths} months.)`,
        });
        if (v.intervalMonths > 0) {
          vaccineEvents.push({
            id: `${v.id}-booster`,
            date: addMonths(firstDate, v.intervalMonths),
            title: `${v.name} — Booster`,
            category: "vaccine",
            detail: `Scheduled ${v.intervalMonths}-month booster per DVS/KEVEVAPI calendar.`,
          });
        }
      });

      // Quarterly deworming reminders (every 90 days)
      [90, 180, 270].forEach((offset, i) => {
        vaccineEvents.push({
          id: `deworm-${i + 1}`,
          date: addDays(baseDate, offset),
          title: `Routine Deworming #${i + 1} (Broad-Spectrum)`,
          category: "deworming",
          detail: "Rotate anthelmintic active ingredients (albendazole / levamisole / ivermectin) per vet advice.",
        });
      });

      vaccineEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else {
      const maxDay = species === "poultry-broiler" ? 28 : 120;
      calData.poultrySchedule
        .filter((item) => item.day <= maxDay)
        .forEach((item) => {
          vaccineEvents.push({
            id: `poultry-d${item.day}`,
            date: addDays(baseDate, item.day - 1),
            title: `${item.label}: ${item.vaccine}`,
            category: "vaccine",
            detail: `Route: ${item.route}. Keep vaccine cold-chain (2–8 °C) intact; use chlorine-free water.`,
          });
        });

      if (species !== "poultry-broiler") {
        vaccineEvents.push({
          id: "poultry-deworm-w8",
          date: addDays(baseDate, 63),
          title: "Week 9: Flock Deworming (Piperazine / Levamisole)",
          category: "deworming",
          detail: "Administer via morning drinking water after 2-hour water withdrawal.",
        });
      }
      vaccineEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    }

    const allEvents = [...reproMilestones, ...vaccineEvents].sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );

    return {
      option,
      baseDate,
      reproMilestones,
      vaccineEvents,
      allEvents,
    };
  }, [species, baseDateStr]);

  const handleDownloadIcs = () => {
    const ics = buildIcsContent(calc.option.label, calc.allEvents);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kenyahub-${species}-calendar.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div>
              <label
                htmlFor="livestock-species"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Livestock / Poultry Species
              </label>
              <CustomSelect
                id="livestock-species"
                value={species}
                onChange={(e) => setSpecies(e.target.value as SpeciesId)}
                className="input-field w-full text-xs"
              >
                {SPECIES_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </CustomSelect>
            </div>

            <div>
              <label
                htmlFor="livestock-date"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                {calc.option.isPoultry ? "Day-Old Chick Hatch Date" : "AI / Service Date"}
              </label>
              <input
                id="livestock-date"
                type="date"
                value={baseDateStr}
                onChange={(e) => setBaseDateStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {/* 1-Tap ICS Download Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 min-w-0 rounded-xl border border-gold/35 bg-amber-500/[0.04] p-3.5 mb-6">
            <div className="text-xs min-w-0">
              <p className="font-bold text-text-primary">
                {calc.allEvents.length} Scheduled Farm Reminders Ready
              </p>
              <p className="text-text-secondary">
                Export all dates directly to Google Calendar, Apple Calendar, or Outlook.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold text-kenya-black text-xs font-black cursor-pointer hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" /> Download .ICS Calendar
            </button>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {/* Reproductive Milestones (Mammals) */}
            {calc.reproMilestones.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xs font-bold text-text-primary uppercase flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Gestation, Dry-Off &amp; Steaming-Up Milestones
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {calc.reproMilestones.map((m, idx) => {
                    const isBirth = idx === calc.reproMilestones.length - 1;
                    return (
                      <div
                        key={m.id}
                        className={`rounded-xl border p-3.5 text-xs space-y-1.5 ${
                          isBirth
                            ? "border-emerald-500/50 bg-emerald-500/10"
                            : "border-border bg-bg-elevated/40"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                          <span className="font-bold text-text-primary">{m.title}</span>
                          <span className="font-black text-gold tabular-nums whitespace-nowrap">
                            {formatReadable(m.date)}
                          </span>
                        </div>
                        <p className="text-text-secondary">{m.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* KEVEVAPI / DVS Vaccination & Deworming Timeline */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                <h2 className="text-xs font-bold text-text-primary uppercase flex items-center gap-1.5">
                  <Syringe className="w-4 h-4 text-gold" />
                  KEVEVAPI / DVS Vaccination &amp; Deworming Timeline
                </h2>
                <span className="text-[0.68rem] font-semibold text-text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {calc.vaccineEvents.length} items
                </span>
              </div>

              <div className="space-y-2">
                {calc.vaccineEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="rounded-xl border border-border bg-bg-card p-3 text-xs space-y-1"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                      <span className="font-bold text-text-primary">{ev.title}</span>
                      <span
                        className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full tabular-nums whitespace-nowrap ${
                          ev.category === "deworming"
                            ? "bg-amber-500/15 text-gold"
                            : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        }`}
                      >
                        {formatReadable(ev.date)}
                      </span>
                    </div>
                    <p className="text-text-secondary">{ev.detail}</p>
                  </div>
                ))}
              </div>

              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Source: {calData.source}. Always verify batch cold-chain integrity and consult a
                  Kenya Veterinary Board (KVB) registered practitioner before administering live
                  vaccines.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
