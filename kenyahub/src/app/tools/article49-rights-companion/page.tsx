"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Shield,
  Clock,
  Phone,
  Copy,
  Check,
  AlertTriangle,
  FileWarning,
  Languages,
  RotateCcw,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("article49-rights-companion")!;
const IPOA_LOG_KEY = "kenyahub_article49_ipoa_log_v1";

// Fixed Kenyan public holidays (MM-DD) for court-day rollover
const KENYA_FIXED_HOLIDAYS = new Set([
  "01-01", // New Year's Day
  "05-01", // Labour Day
  "06-01", // Madaraka Day
  "10-10", // Mazingira Day
  "10-20", // Mashujaa Day
  "12-12", // Jamhuri Day
  "12-25", // Christmas Day
  "12-26", // Utamaduni / Boxing Day
]);

function isNonCourtDay(date: Date): boolean {
  const day = date.getDay(); // 0 = Sun, 6 = Sat
  if (day === 0 || day === 6) return true;
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return KENYA_FIXED_HOLIDAYS.has(`${mm}-${dd}`);
}

function formatDateTime(date: Date): string {
  return date.toLocaleString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getNowTimeString(): string {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

interface IpoaLog {
  station: string;
  county: string;
  officerDetails: string;
  obNumber: string;
  witnesses: string;
  incidentNotes: string;
}

const DEFAULT_LOG: IpoaLog = {
  station: "",
  county: "Nairobi",
  officerDetails: "",
  obNumber: "",
  witnesses: "",
  incidentNotes: "",
};

export default function Article49RightsCompanionPage() {
  const art49 = everydayData.article49Rights;
  const counties = everydayData.rainwater.counties;
const COUNTY_SELECT_OPTIONS = counties.map((c) => ({ value: c.name, label: c.name }));

  const [arrestDate, setArrestDate] = useState("2026-11-24");
  const [arrestTime, setArrestTime] = useState("09:00");
  const [langView, setLangView] = useState<"both" | "sw" | "en">("both");
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  const [ipoaLog, setIpoaLog] = useState<IpoaLog>(DEFAULT_LOG);
  const [hydrated, setHydrated] = useState(false);
  const [copiedIpoa, setCopiedIpoa] = useState(false);

  useEffect(() => {
    setArrestDate(getTodayDateString());
    setArrestTime(getNowTimeString());
    try {
      const saved = window.localStorage.getItem(IPOA_LOG_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setIpoaLog((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch {
      // Ignore storage read errors
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(IPOA_LOG_KEY, JSON.stringify(ipoaLog));
    } catch {
      // Ignore storage write errors
    }
  }, [ipoaLog, hydrated]);

  const deadlineCalc = useMemo(() => {
    if (!arrestDate || !arrestTime) return null;
    const arrest = new Date(`${arrestDate}T${arrestTime}:00`);
    if (Number.isNaN(arrest.getTime())) return null;

    const raw24h = new Date(arrest.getTime() + 24 * 60 * 60 * 1000);
    const legalDeadline = new Date(raw24h.getTime());
    let rolledOver = false;
    let rolloverReason = "Within ordinary court hours (Mon–Fri, 08:00–17:00).";

    const rawHour = raw24h.getHours() + raw24h.getMinutes() / 60;

    if (isNonCourtDay(legalDeadline)) {
      rolledOver = true;
      rolloverReason =
        "24-hour mark falls on a weekend or Kenyan public holiday — rolls to end of next court day (5:00 PM) under Art. 49(1)(f)(ii).";
      while (isNonCourtDay(legalDeadline)) {
        legalDeadline.setDate(legalDeadline.getDate() + 1);
      }
      legalDeadline.setHours(17, 0, 0, 0);
    } else if (rawHour < 8) {
      rolledOver = true;
      rolloverReason =
        "24-hour mark falls before 8:00 AM court opening — rolls to end of that court day (5:00 PM) under Art. 49(1)(f)(ii).";
      legalDeadline.setHours(17, 0, 0, 0);
    } else if (rawHour > 17) {
      rolledOver = true;
      rolloverReason =
        "24-hour mark falls after 5:00 PM court closing — rolls to end of the next court day (5:00 PM) under Art. 49(1)(f)(ii).";
      legalDeadline.setDate(legalDeadline.getDate() + 1);
      while (isNonCourtDay(legalDeadline)) {
        legalDeadline.setDate(legalDeadline.getDate() + 1);
      }
      legalDeadline.setHours(17, 0, 0, 0);
    }

    return {
      arrest,
      raw24h,
      legalDeadline,
      rolledOver,
      rolloverReason,
    };
  }, [arrestDate, arrestTime]);

  const handleCopyScript = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedScriptId(id);
      setTimeout(() => setCopiedScriptId(null), 1800);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const formattedIpoaReport = useMemo(() => {
    return [
      "IPOA INCIDENT & ARTICLE 49 CUSTODY REPORT",
      `Date/Time of Arrest: ${arrestDate} at ${arrestTime}`,
      deadlineCalc
        ? `Art. 49(1)(f) Court Deadline: ${formatDateTime(deadlineCalc.legalDeadline)}`
        : "",
      `Police Station / Location: ${ipoaLog.station || "Not specified"}`,
      `County: ${ipoaLog.county}`,
      `Officer Name / Service No. / Rank: ${ipoaLog.officerDetails || "Not provided"}`,
      `OB Number: ${ipoaLog.obNumber || "Not provided / Refused"}`,
      `Witnesses & Contacts: ${ipoaLog.witnesses || "None listed"}`,
      `Incident Summary: ${ipoaLog.incidentNotes || "No notes entered"}`,
      "",
      `Submitted via KenyaHub Article 49 Companion — IPOA Toll-Free: ${art49.ipoa.tollFree} | WhatsApp: ${art49.ipoa.whatsapp} | Email: ${art49.ipoa.email}`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [arrestDate, arrestTime, deadlineCalc, ipoaLog, art49.ipoa]);

  const handleCopyIpoa = async () => {
    try {
      await navigator.clipboard.writeText(formattedIpoaReport);
      setCopiedIpoa(true);
      setTimeout(() => setCopiedIpoa(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* 1. 24-Hour Custody Deadline Calculator */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                1. 24-Hour Custody Deadline Calculator — Art. 49(1)(f)
              </h2>
              <p className="text-xs text-text-muted mt-0.5">
                Enter the exact arrest date and time to calculate the constitutional deadline to be produced in court.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setArrestDate(getTodayDateString());
                setArrestTime(getNowTimeString());
              }}
              className="px-3 py-1.5 rounded-xl border border-gold/40 bg-gold/10 text-xs font-bold text-gold hover:bg-gold hover:text-kenya-black transition-colors cursor-pointer shrink-0"
            >
              Set to Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="arrest-date"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Date of Arrest
              </label>
              <input
                id="arrest-date"
                type="date"
                value={arrestDate}
                onChange={(e) => setArrestDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
            <div>
              <label
                htmlFor="arrest-time"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Time of Arrest
              </label>
              <input
                id="arrest-time"
                type="time"
                value={arrestTime}
                onChange={(e) => setArrestTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          {deadlineCalc && (
            <div role="status" aria-live="polite" aria-atomic="true" className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                  <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                    Raw 24-Hour Mark
                  </span>
                  <p className="text-base font-black text-text-primary mt-1 tabular-nums">
                    {formatDateTime(deadlineCalc.raw24h)}
                  </p>
                  <p className="text-[0.68rem] text-text-muted mt-1">
                    Exactly 24 hours from arrest
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.06] p-4">
                  <span className="text-[0.68rem] font-bold text-gold uppercase">
                    Legal Court-Production Deadline
                  </span>
                  <p className="text-base font-black text-gold mt-1 tabular-nums">
                    {formatDateTime(deadlineCalc.legalDeadline)}
                  </p>
                  <p className="text-[0.68rem] text-text-secondary mt-1">
                    {deadlineCalc.rolledOver
                      ? "Rolled over to end of next court day"
                      : "Must appear before magistrate by this time"}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/30 p-3.5 text-xs text-text-secondary flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p>{deadlineCalc.rolloverReason}</p>
              </div>
            </div>
          )}
        </div>

        {/* 2. Plain-Language Swahili & English Constitutional Rights Cards */}
        <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-bold text-text-primary flex items-center gap-2 min-w-0">
              <Shield className="w-4 h-4 text-gold shrink-0" />
              2. Article 49 Constitutional Rights &amp; Scripts
            </h2>
            <div className="flex flex-wrap items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-text-muted shrink-0" />
              {(["both", "sw", "en"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={langView === mode}
                  onClick={() => setLangView(mode)}
                  className={`px-2.5 py-1 rounded-full text-[0.7rem] font-bold border cursor-pointer ${
                    langView === mode
                      ? "bg-gold text-kenya-black border-gold"
                      : "bg-bg-elevated text-text-secondary border-border"
                  }`}
                >
                  {mode === "both" ? "Bilingual" : mode === "sw" ? "Kiswahili" : "English"}
                </button>
              ))}
            </div>
          </div>

          {/* Core Bail & Petty Offence Protections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/[0.06] p-4 space-y-1">
              <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                Article 49(1)(h) — Bail &amp; Bond Right
              </span>
              <p className="text-xs text-text-primary leading-relaxed">
                {art49.rules.bailAndBondRule}
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.06] p-4 space-y-1">
              <span className="text-[0.68rem] font-bold text-gold uppercase">
                Article 49(2) — Petty Offence (&le;6 Months) No-Remand Rule
              </span>
              <p className="text-xs text-text-primary leading-relaxed">
                {art49.rules.pettyOffenceNoRemandRule}
              </p>
            </div>
          </div>

          {/* Script Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {art49.scripts.map((script) => {
              const copyPayload =
                langView === "sw"
                  ? script.swahili
                  : langView === "en"
                  ? script.english
                  : `${script.english}\n\n${script.swahili}`;
              const isCopied = copiedScriptId === script.id;

              return (
                <div
                  key={script.id}
                  className="rounded-xl border border-border bg-bg-elevated/40 p-4 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xs font-bold text-text-primary min-w-0 flex-1">
                      {script.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopyScript(script.id, copyPayload)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-border bg-bg-card text-[0.68rem] font-semibold text-text-secondary hover:border-gold hover:text-gold cursor-pointer shrink-0"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500 shrink-0" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 shrink-0" /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  {(langView === "both" || langView === "en") && (
                    <div className="space-y-0.5">
                      <span className="text-[0.65rem] font-bold uppercase text-gold">
                        English
                      </span>
                      <p className="text-xs text-text-primary leading-relaxed">
                        &ldquo;{script.english}&rdquo;
                      </p>
                    </div>
                  )}

                  {(langView === "both" || langView === "sw") && (
                    <div className="space-y-0.5">
                      <span className="text-[0.65rem] font-bold uppercase text-emerald-700 dark:text-emerald-400">
                        Kiswahili
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        &ldquo;{script.swahili}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Offline IPOA Incident Logger */}
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
                <FileWarning className="w-4 h-4 text-gold shrink-0" />
                3. Offline IPOA Incident Logger
              </h2>
              <p className="text-xs text-text-muted mt-0.5">
                Saved locally on your device. Tap Copy to report immediately to IPOA ({art49.ipoa.hours}).
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIpoaLog(DEFAULT_LOG)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border bg-bg-elevated text-xs font-semibold text-text-secondary hover:border-gold hover:text-gold cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3 h-3 shrink-0" /> Clear Log
            </button>
          </div>

          {/* IPOA Quick Contact Strip */}
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${art49.ipoa.tollFree}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-red-600 text-white hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              IPOA 24/7 Toll-Free: {art49.ipoa.tollFree}
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              WhatsApp: {art49.ipoa.whatsapp}
            </span>
            <a
              href={`mailto:${art49.ipoa.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-border bg-bg-elevated text-text-primary hover:border-gold"
            >
              {art49.ipoa.email}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="ipoa-station"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Police Station / Arrest Location
              </label>
              <input
                id="ipoa-station"
                type="text"
                placeholder="e.g. Central Police Station, Nairobi"
                value={ipoaLog.station}
                onChange={(e) =>
                  setIpoaLog((prev) => ({ ...prev, station: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-medium text-text-primary"
              />
            </div>

            <div>
              <label
                htmlFor="ipoa-county"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                County
              </label>
              <CustomSelect
                id="ipoa-county"
                value={ipoaLog.county}
                onValueChange={(v) =>
                  setIpoaLog((prev) => ({ ...prev, county: v }))
                }
                options={COUNTY_SELECT_OPTIONS}
                className="w-full text-xs"
              />
            </div>

            <div>
              <label
                htmlFor="ipoa-officer"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Officer Name / Service No. / Rank
              </label>
              <input
                id="ipoa-officer"
                type="text"
                placeholder="e.g. PC J. Doe, Service No. 234567"
                value={ipoaLog.officerDetails}
                onChange={(e) =>
                  setIpoaLog((prev) => ({
                    ...prev,
                    officerDetails: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-medium text-text-primary"
              />
            </div>

            <div>
              <label
                htmlFor="ipoa-ob"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                OB Number (If Issued)
              </label>
              <input
                id="ipoa-ob"
                type="text"
                placeholder="e.g. OB 42/24/11/2026"
                value={ipoaLog.obNumber}
                onChange={(e) =>
                  setIpoaLog((prev) => ({ ...prev, obNumber: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-medium text-text-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="ipoa-witnesses"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Witness Names &amp; Phone Numbers
              </label>
              <input
                id="ipoa-witnesses"
                type="text"
                placeholder="Names and phone contacts of anyone present"
                value={ipoaLog.witnesses}
                onChange={(e) =>
                  setIpoaLog((prev) => ({ ...prev, witnesses: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-medium text-text-primary"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="ipoa-notes"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Incident Details (What Happened, Injuries, Refusal of Bail/Call)
              </label>
              <textarea
                id="ipoa-notes"
                rows={3}
                placeholder="Record exact sequence of events, vehicle registration (if any), and any rights denied..."
                value={ipoaLog.incidentNotes}
                onChange={(e) =>
                  setIpoaLog((prev) => ({
                    ...prev,
                    incidentNotes: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-xs font-medium text-text-primary"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-[0.7rem] text-text-muted min-w-0">
              1-tap copy formats all details above for IPOA WhatsApp ({art49.ipoa.whatsapp}) or email ({art49.ipoa.email}).
            </p>
            <button
              type="button"
              onClick={handleCopyIpoa}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold text-kenya-black text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shrink-0"
            >
              {copiedIpoa ? (
                <>
                  <Check className="w-3.5 h-3.5 shrink-0" /> Copied IPOA Report!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 shrink-0" /> Copy IPOA Report
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
