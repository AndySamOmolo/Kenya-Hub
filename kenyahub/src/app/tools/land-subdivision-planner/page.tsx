"use client";

import { useEffect, useState, useMemo } from "react";
import {
  MapPin,
  Clock,
  AlertTriangle,
  CheckSquare,
  Square,
  ShieldCheck,
  Info,
} from "lucide-react";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("land-subdivision-planner")!;
const landData = everydayData.landSubdivision;

function addDaysIso(isoDate: string, days: number): Date {
  const parts = isoDate.split("-").map(Number);
  const d = new Date(Date.UTC(parts[0] || 2026, (parts[1] || 1) - 1, parts[2] || 1));
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function formatDateReadable(d: Date): string {
  return d.toLocaleDateString("en-KE", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function getDefaultAgreementDate(): string {
  const now = new Date();
  now.setDate(now.getDate() - 30);
  return now.toISOString().slice(0, 10);
}

const DEFAULT_AGREEMENT_DATE = "2026-01-01";
const DEFAULT_TODAY_DATE = "2026-01-31";

export default function LandSubdivisionPlannerPage() {
  const [tenure, setTenure] = useState<"agricultural" | "urban">("agricultural");
  const [plotCountStr, setPlotCountStr] = useState("4");
  const [lcbMode, setLcbMode] = useState<"regular" | "special">("regular");
  const [agreementDate, setAgreementDate] = useState<string>(DEFAULT_AGREEMENT_DATE);
  const [todayIso, setTodayIso] = useState<string>(DEFAULT_TODAY_DATE);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({
    0: true,
  });

  useEffect(() => {
    setAgreementDate(getDefaultAgreementDate());
    setTodayIso(new Date().toISOString().slice(0, 10));
  }, []);

  const toggleStep = (idx: number) => {
    setCheckedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const calc = useMemo(() => {
    const plots = Math.max(2, Math.min(100, Math.round(Number(plotCountStr) || 2)));
    const fees = landData.fees;

    const searchAndMapKes = fees.officialSearchKes + fees.mapSearchKes;
    const lcbFeeKes =
      tenure === "agricultural"
        ? lcbMode === "regular"
          ? fees.regularLcbKes
          : fees.specialLcbKes
        : 0;
    const lcbTurnaroundDays =
      tenure === "agricultural"
        ? lcbMode === "regular"
          ? fees.regularLcbDays
          : fees.specialLcbDays
        : 30;
    const mutationRimKes = fees.mutationRimMinKes;
    const newTitlesKes = plots * fees.newTitlePerPlotKes;
    const statutoryTotalKes = searchAndMapKes + lcbFeeKes + mutationRimKes + newTitlesKes;

    const surveyorTotalKes = plots * fees.licensedSurveyorPerPlotEstimateKes;
    const grandTotalKes = statutoryTotalKes + surveyorTotalKes;
    const costPerPlotKes = Math.round(grandTotalKes / plots);

    // Cap 302 6-month (180-day) LCB void cliff
    const safeDate = /^\d{4}-\d{2}-\d{2}$/.test(agreementDate)
      ? agreementDate
      : DEFAULT_AGREEMENT_DATE;
    const voidDate = addDaysIso(safeDate, landData.lcbVoidCliffDays);
    const todayMidnightUtc = addDaysIso(todayIso, 0).getTime();
    const daysRemaining = Math.ceil((voidDate.getTime() - todayMidnightUtc) / (1000 * 60 * 60 * 24));
    const isVoid = daysRemaining < 0;
    const isUrgent = daysRemaining >= 0 && daysRemaining <= 30;

    const completedCount = landData.checklist.filter((_, idx) => Boolean(checkedSteps[idx])).length;

    return {
      plots,
      searchAndMapKes,
      lcbFeeKes,
      lcbTurnaroundDays,
      mutationRimKes,
      newTitlesKes,
      statutoryTotalKes,
      surveyorTotalKes,
      grandTotalKes,
      costPerPlotKes,
      voidDateLabel: formatDateReadable(voidDate),
      daysRemaining,
      isVoid,
      isUrgent,
      completedCount,
    };
  }, [tenure, plotCountStr, lcbMode, agreementDate, todayIso, checkedSteps]);

  return (
    <>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          {/* Tenure Toggle */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              type="button"
              aria-pressed={tenure === "agricultural"}
              onClick={() => setTenure("agricultural")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                tenure === "agricultural"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Agricultural Freehold (Cap 302 LCB)
            </button>
            <button
              type="button"
              aria-pressed={tenure === "urban"}
              onClick={() => setTenure("urban")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                tenure === "urban"
                  ? "bg-gold text-kenya-black border-gold"
                  : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Urban Leasehold (County PPA2 + Rates)
            </button>
          </div>

          {/* LCB Sitting Mode Toggle (Agricultural Freehold) */}
          {tenure === "agricultural" && (
            <div className="flex flex-wrap gap-2 mb-5">
              <button
                type="button"
                aria-pressed={lcbMode === "regular"}
                onClick={() => setLcbMode("regular")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                  lcbMode === "regular"
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-700 dark:text-emerald-400"
                    : "bg-bg-elevated border-border text-text-secondary"
                }`}
              >
                Regular LCB Sitting — KES {landData.fees.regularLcbKes.toLocaleString("en-KE")} (
                {landData.fees.regularLcbDays} days)
              </button>
              <button
                type="button"
                aria-pressed={lcbMode === "special"}
                onClick={() => setLcbMode("special")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                  lcbMode === "special"
                    ? "bg-amber-500/15 border-amber-500/50 text-gold"
                    : "bg-bg-elevated border-border text-text-secondary"
                }`}
              >
                Special LCB Sitting — KES {landData.fees.specialLcbKes.toLocaleString("en-KE")} (
                {landData.fees.specialLcbDays} days)
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div>
              <label
                htmlFor="land-plots"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Resulting Sub-Plots Count (2 – 100)
              </label>
              <input
                id="land-plots"
                type="number"
                min="2"
                max="100"
                step="1"
                value={plotCountStr}
                onChange={(e) => setPlotCountStr(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="land-agreement-date"
                className="block text-xs font-semibold text-text-muted uppercase mb-1"
              >
                Sale / Family Subdivision Agreement Date
              </label>
              <input
                id="land-agreement-date"
                type="date"
                value={agreementDate}
                onChange={(e) => setAgreementDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
              />
            </div>
          </div>

          <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
            {/* Cap 302 180-Day Countdown Banner */}
            {tenure === "agricultural" && (
              <div
                className={`rounded-xl border p-4 text-xs flex items-start gap-2.5 ${
                  calc.isVoid
                    ? "border-rose-500/50 bg-rose-500/10"
                    : calc.isUrgent
                    ? "border-amber-500/50 bg-amber-500/10"
                    : "border-emerald-500/40 bg-emerald-500/10"
                }`}
              >
                {calc.isVoid || calc.isUrgent ? (
                  <AlertTriangle
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      calc.isVoid ? "text-rose-500" : "text-gold"
                    }`}
                  />
                ) : (
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                    <span className="font-bold text-text-primary">
                      Cap 302 Section 6 — 6-Month ({landData.lcbVoidCliffDays}-Day) LCB Consent Cliff
                    </span>
                    <span
                      className={`font-black tabular-nums px-2 py-0.5 rounded-full text-[0.7rem] ${
                        calc.isVoid
                          ? "bg-rose-500/20 text-rose-600 dark:text-rose-400"
                          : calc.isUrgent
                          ? "bg-amber-500/20 text-gold"
                          : "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      {calc.isVoid
                        ? `EXPIRED ${Math.abs(calc.daysRemaining)} days ago`
                        : `${calc.daysRemaining} days remaining`}
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {calc.isVoid
                      ? `Statutory deadline passed on ${calc.voidDateLabel}. Under Cap 302 s.6(1), the transaction is void unless High Court grants an extension of time under s.8(1).`
                      : `Obtain Land Control Board consent on or before ${calc.voidDateLabel} (${calc.lcbTurnaroundDays}-day sitting turnaround).`}
                  </p>
                </div>
              </div>
            )}

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Statutory Fees
                </span>
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums">
                  KES {calc.statutoryTotalKes.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1">
                  Ardhisasa / Ministry of Lands
                </p>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                <span className="text-[0.68rem] font-bold text-text-muted uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> ISK Licensed Surveyor
                </span>
                <p className="text-2xl font-black text-text-primary mt-1 tabular-nums">
                  KES {calc.surveyorTotalKes.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-muted mt-1 tabular-nums">
                  Est. KES {landData.fees.licensedSurveyorPerPlotEstimateKes.toLocaleString("en-KE")} ×{" "}
                  {calc.plots} plots
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
                <span className="text-[0.68rem] font-bold text-gold uppercase">
                  Total Budget ({calc.plots} Plots)
                </span>
                <p className="text-2xl font-black text-gold mt-1 tabular-nums">
                  KES {calc.grandTotalKes.toLocaleString("en-KE")}
                </p>
                <p className="text-[0.72rem] text-text-secondary mt-1 tabular-nums">
                  ~KES {calc.costPerPlotKes.toLocaleString("en-KE")} per resulting title
                </p>
              </div>
            </div>

            {/* Itemized Fee Breakdown */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-2">
              <h2 className="font-bold text-text-primary mb-1">
                Itemized Statutory vs Survey Fees ({calc.plots} Sub-Plots)
              </h2>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Official Land Search (KES {landData.fees.officialSearchKes.toLocaleString("en-KE")}) +
                  RIM Map Search (KES {landData.fees.mapSearchKes.toLocaleString("en-KE")})
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.searchAndMapKes.toLocaleString("en-KE")}
                </span>
              </div>
              {tenure === "agricultural" ? (
                <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                  <span className="text-text-secondary">
                    Land Control Board ({lcbMode === "regular" ? "Regular" : "Special"} Sitting —{" "}
                    {calc.lcbTurnaroundDays}d)
                  </span>
                  <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                    KES {calc.lcbFeeKes.toLocaleString("en-KE")}
                  </span>
                </div>
              ) : (
                <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                  <span className="text-text-secondary">
                    Urban Leasehold Consent &amp; County PPA2 (Varies by County)
                  </span>
                  <span className="font-semibold text-text-muted whitespace-nowrap">
                    County Tariff
                  </span>
                </div>
              )}
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Mutation Registration &amp; RIM Amendment (Minimum Statutory)
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.mutationRimKes.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  New Title Deeds ({calc.plots} plots × KES{" "}
                  {landData.fees.newTitlePerPlotKes.toLocaleString("en-KE")})
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.newTitlesKes.toLocaleString("en-KE")}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 min-w-0">
                <span className="text-text-secondary">
                  Licensed Surveyor Beaconing &amp; Mutation Plan (Estimate)
                </span>
                <span className="font-bold text-text-primary tabular-nums whitespace-nowrap">
                  KES {calc.surveyorTotalKes.toLocaleString("en-KE")}
                </span>
              </div>
            </div>

            {/* Interactive Checklist */}
            <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
                <h2 className="text-xs font-bold text-text-primary uppercase">
                  PPA 2, Spousal Consent &amp; Mutation Checklist
                </h2>
                <span className="text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold tabular-nums">
                  {calc.completedCount} / {landData.checklist.length} Done
                </span>
              </div>

              <div className="space-y-2">
                {landData.checklist.map((item, idx) => {
                  const done = Boolean(checkedSteps[idx]);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleStep(idx)}
                      className={`w-full text-left rounded-xl border p-3 text-xs flex items-start gap-2.5 cursor-pointer transition-colors ${
                        done
                          ? "border-emerald-500/40 bg-emerald-500/10 text-text-primary"
                          : "border-border bg-bg-card text-text-secondary hover:border-gold/40"
                      }`}
                    >
                      {done ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                      )}
                      <span className={done ? "line-through opacity-80" : ""}>{item}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[0.7rem] text-text-muted flex items-start gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  Authority: {landData.statute}. Spousal consent is mandatory under the Land
                  Registration Act (2012) for matrimonial property subdivisions.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
