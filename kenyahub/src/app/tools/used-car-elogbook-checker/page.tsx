"use client";

import { useState, useMemo } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Car,
  Fuel,
  ClipboardCheck,
  RotateCcw,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import { getToolBySlug } from "@/lib/tools-registry";
import everydayData from "@/data/kenya-everyday-tools-2026.json";

const tool = getToolBySlug("used-car-elogbook-checker")!;
const CURRENT_YEAR = 2026;
const CRITICAL_INDICES = new Set([0, 1, 2, 3, 9]);

type CheckStatus = "pending" | "pass" | "flag";

export default function UsedCarElogbookCheckerPage() {
  const carData = everydayData.usedCarElogbook;

  const [activeTab, setActiveTab] = useState<"checker" | "cost">("checker");
  const [statuses, setStatuses] = useState<Record<number, CheckStatus>>({});

  // Tab 2: Annual Ownership Cost state
  const [purchasePriceKes, setPurchasePriceKes] = useState("1450000");
  const [manufactureYear, setManufactureYear] = useState("2017");
  const [fuelType, setFuelType] = useState<"petrol" | "diesel">("petrol");
  const [kmPerLitre, setKmPerLitre] = useState("13");
  const [monthlyKm, setMonthlyKm] = useState("1200");
  const [insuranceType, setInsuranceType] = useState<"comprehensive" | "tpo">(
    "comprehensive"
  );
  const [annualServiceKes, setAnnualServiceKes] = useState("45000");

  const setCheckStatus = (idx: number, status: CheckStatus) => {
    setStatuses((prev) => ({
      ...prev,
      [idx]: prev[idx] === status ? "pending" : status,
    }));
  };

  const resetChecks = () => setStatuses({});

  const inspectionSummary = useMemo(() => {
    const total = carData.redFlagChecks.length;
    let passed = 0;
    let flagged = 0;
    let criticalFlags = 0;

    carData.redFlagChecks.forEach((_, idx) => {
      const st = statuses[idx] ?? "pending";
      if (st === "pass") passed += 1;
      if (st === "flag") {
        flagged += 1;
        if (CRITICAL_INDICES.has(idx)) criticalFlags += 1;
      }
    });

    const pending = total - passed - flagged;

    let verdict: "safe" | "negotiate" | "walk-away" = "negotiate";
    let verdictTitle = "Negotiate & Verify Remaining Checks";
    let verdictNote =
      "Complete the remaining NTSA eLogbook and physical checks before paying any deposit.";

    if (criticalFlags > 0 || flagged >= 3) {
      verdict = "walk-away";
      verdictTitle = "Walk Away Immediately";
      verdictNote =
        criticalFlags > 0
          ? "A critical legal/ownership red flag was detected (Form VII, caveat, OTP transfer, VIN tampering, or ID mismatch). Do not send money."
          : "Multiple mechanical/legal red flags detected. High risk of hidden costs or fraud.";
    } else if (flagged === 0 && passed === total) {
      verdict = "safe";
      verdictTitle = "Safe to Proceed (Subject to Live OTP Transfer)";
      verdictNote =
        "All 10 on-site and NTSA eLogbook checks passed. Complete the TIMS/eCitizen transfer within 14 days while the 7-day seller OTP is active.";
    } else if (flagged > 0) {
      verdict = "negotiate";
      verdictTitle = "Negotiate Price or Demand Fix First";
      verdictNote = `${flagged} non-critical issue${flagged > 1 ? "s" : ""} flagged. Factor repair or compliance costs into your offer before paying.`;
    }

    return { total, passed, flagged, criticalFlags, pending, verdict, verdictTitle, verdictNote };
  }, [carData.redFlagChecks, statuses]);

  const costCalc = useMemo(() => {
    const price = Math.max(0, Number(purchasePriceKes.replace(/,/g, "")) || 0);
    const year = Number(manufactureYear) || 2017;
    const vehicleAge = Math.max(0, CURRENT_YEAR - year);
    const exceedsCompCutoff = vehicleAge > carData.comprehensiveAgeCutoffYears;

    const kpl = Math.max(1, Number(kmPerLitre) || 12);
    const kmMonth = Math.max(0, Number(monthlyKm.replace(/,/g, "")) || 0);
    const annualKm = kmMonth * 12;

    const fuelRate =
      fuelType === "petrol"
        ? carData.epraFuelKesPerL.petrol
        : carData.epraFuelKesPerL.diesel;
    const annualLitres = annualKm / kpl;
    const annualFuelKes = Math.round(annualLitres * fuelRate);

    const effectiveInsuranceType = exceedsCompCutoff ? "tpo" : insuranceType;
    const annualInsuranceKes =
      effectiveInsuranceType === "comprehensive"
        ? Math.max(carData.insuranceMinKes.comprehensive, Math.round(price * 0.04))
        : carData.insuranceMinKes.tpo;

    const serviceKes = Math.max(0, Number(annualServiceKes.replace(/,/g, "")) || 0);
    const totalAnnualKes = annualFuelKes + annualInsuranceKes + serviceKes;
    const monthlyCostKes = Math.round(totalAnnualKes / 12);
    const costPerKmKes = annualKm > 0 ? totalAnnualKes / annualKm : 0;
    const oneTimeNtsaChecksKes =
      carData.formViiCopyOfRecordsKes + carData.eStickerFeeKes;

    return {
      vehicleAge,
      exceedsCompCutoff,
      effectiveInsuranceType,
      annualKm,
      annualLitres: Math.round(annualLitres),
      fuelRate,
      annualFuelKes,
      annualInsuranceKes,
      serviceKes,
      totalAnnualKes,
      monthlyCostKes,
      costPerKmKes,
      oneTimeNtsaChecksKes,
    };
  }, [
    purchasePriceKes,
    manufactureYear,
    fuelType,
    kmPerLitre,
    monthlyKm,
    insuranceType,
    annualServiceKes,
    carData,
  ]);

  const yearOptions = useMemo(() => {
    const years: string[] = [];
    for (let y = CURRENT_YEAR; y >= 2004; y -= 1) {
      years.push(String(y));
    }
    return years;
  }, []);

  return (
    <>
      <div className="space-y-6">
        {/* Two-Tab Navigation */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={activeTab === "checker"}
            onClick={() => setActiveTab("checker")}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
              activeTab === "checker"
                ? "bg-gold text-kenya-black border-gold"
                : "bg-bg-card text-text-secondary border-border hover:border-gold/50"
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5 shrink-0" />
            1. On-Site Fraud &amp; Red-Flag Scorer
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "cost"}
            onClick={() => setActiveTab("cost")}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
              activeTab === "cost"
                ? "bg-gold text-kenya-black border-gold"
                : "bg-bg-card text-text-secondary border-border hover:border-gold/50"
            }`}
          >
            <Fuel className="w-3.5 h-3.5 shrink-0" />
            2. True Annual Ownership Cost
          </button>
        </div>

        {activeTab === "checker" ? (
          <div className="space-y-5">
            {/* Statutory Quick Reference Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-3.5">
                <span className="text-[0.65rem] font-bold text-text-muted uppercase">
                  NTSA eLogbook Live
                </span>
                <p className="text-sm font-black text-text-primary mt-0.5 tabular-nums">
                  {carData.elogbookEffectiveDate}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-3.5">
                <span className="text-[0.65rem] font-bold text-text-muted uppercase">
                  Form VII Search
                </span>
                <p className="text-sm font-black text-gold mt-0.5 tabular-nums">
                  KES {carData.formViiCopyOfRecordsKes.toLocaleString("en-KE")}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-3.5">
                <span className="text-[0.65rem] font-bold text-text-muted uppercase">
                  Transfer / OTP Rule
                </span>
                <p className="text-sm font-black text-text-primary mt-0.5 tabular-nums">
                  {carData.transferDeadlineDays}d / {carData.otpExpiryDays}d OTP
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-3.5">
                <span className="text-[0.65rem] font-bold text-text-muted uppercase">
                  Comp. Ins. Cutoff
                </span>
                <p className="text-sm font-black text-text-primary mt-0.5 tabular-nums">
                  {carData.comprehensiveAgeCutoffYears} Years Max
                </p>
              </div>
            </div>

            {/* Live Verdict Banner */}
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={`rounded-2xl border p-5 space-y-2 ${
                inspectionSummary.verdict === "safe"
                  ? "border-emerald-500/50 bg-emerald-500/10"
                  : inspectionSummary.verdict === "walk-away"
                  ? "border-red-500/50 bg-red-500/10"
                  : "border-amber-500/45 bg-amber-500/[0.06]"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  {inspectionSummary.verdict === "safe" ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : inspectionSummary.verdict === "walk-away" ? (
                    <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-gold shrink-0" />
                  )}
                  <h2 className="text-base font-black text-text-primary">
                    Verdict: {inspectionSummary.verdictTitle}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold tabular-nums">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                    {inspectionSummary.passed} Pass
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-700 dark:text-red-400">
                    {inspectionSummary.flagged} Flag
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-bg-card border border-border text-text-muted">
                    {inspectionSummary.pending} Left
                  </span>
                </div>
              </div>
              <p className="text-xs text-text-secondary">{inspectionSummary.verdictNote}</p>
            </div>

            {/* 10 Interactive Checks */}
            <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-text-primary">
                  10-Point On-Site &amp; NTSA eLogbook Inspection
                </h3>
                <button
                  type="button"
                  onClick={resetChecks}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-bg-elevated text-[0.7rem] font-semibold text-text-secondary hover:border-gold hover:text-gold cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 shrink-0" /> Reset
                </button>
              </div>

              <div className="space-y-2.5">
                {carData.redFlagChecks.map((checkText, idx) => {
                  const st = statuses[idx] ?? "pending";
                  const isCritical = CRITICAL_INDICES.has(idx);
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        st === "flag"
                          ? "border-red-500/45 bg-red-500/[0.06]"
                          : st === "pass"
                          ? "border-emerald-500/40 bg-emerald-500/[0.06]"
                          : "border-border bg-bg-elevated/40"
                      }`}
                    >
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[0.68rem] font-bold text-text-muted tabular-nums">
                            #{idx + 1}
                          </span>
                          {isCritical && (
                            <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-red-500/15 text-red-700 dark:text-red-400">
                              Deal-Breaker Check
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-medium text-text-primary leading-relaxed">
                          {checkText}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setCheckStatus(idx, "pass")}
                          aria-pressed={st === "pass"}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition-colors ${
                            st === "pass"
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-bg-card text-text-secondary border-border hover:border-emerald-500/50"
                          }`}
                        >
                          Pass
                        </button>
                        <button
                          type="button"
                          onClick={() => setCheckStatus(idx, "flag")}
                          aria-pressed={st === "flag"}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer transition-colors ${
                            st === "flag"
                              ? "bg-red-600 text-white border-red-600"
                              : "bg-bg-card text-text-secondary border-border hover:border-red-500/50"
                          }`}
                        >
                          Red Flag
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: True Annual Ownership Cost */
          <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs space-y-6">
            <div>
              <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
                <Car className="w-4 h-4 text-gold shrink-0" />
                True Annual Ownership Cost Calculator
              </h2>
              <p className="text-xs text-text-muted mt-0.5">
                Uses 2026 EPRA pump benchmarks (Petrol KES {carData.epraFuelKesPerL.petrol}/L, Diesel KES {carData.epraFuelKesPerL.diesel}/L) and IRA insurance minimums.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label
                  htmlFor="car-price"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Purchase Price (KES)
                </label>
                <input
                  id="car-price"
                  type="text"
                  inputMode="numeric"
                  value={
                    purchasePriceKes
                      ? Number(purchasePriceKes).toLocaleString("en-KE")
                      : ""
                  }
                  onChange={(e) =>
                    setPurchasePriceKes(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="car-year"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Year of Manufacture
                </label>
                <CustomSelect
                  id="car-year"
                  value={manufactureYear}
                  onValueChange={setManufactureYear}
                  className="w-full"
                >
                  {yearOptions.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr} ({CURRENT_YEAR - Number(yr)} yrs old)
                    </option>
                  ))}
                </CustomSelect>
              </div>

              <div>
                <label
                  htmlFor="car-fuel"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Fuel Type (EPRA 2026)
                </label>
                <CustomSelect
                  id="car-fuel"
                  value={fuelType}
                  onValueChange={(v) => setFuelType(v as "petrol" | "diesel")}
                  className="w-full"
                >
                  <option value="petrol">
                    Petrol (KES {carData.epraFuelKesPerL.petrol}/L)
                  </option>
                  <option value="diesel">
                    Diesel (KES {carData.epraFuelKesPerL.diesel}/L)
                  </option>
                </CustomSelect>
              </div>

              <div>
                <label
                  htmlFor="car-kpl"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Fuel Economy (km / Litre)
                </label>
                <input
                  id="car-kpl"
                  type="number"
                  step="0.5"
                  min="3"
                  max="40"
                  value={kmPerLitre}
                  onChange={(e) => setKmPerLitre(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="car-km"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Monthly Distance (km)
                </label>
                <input
                  id="car-km"
                  type="text"
                  inputMode="numeric"
                  value={monthlyKm ? Number(monthlyKm).toLocaleString("en-KE") : ""}
                  onChange={(e) =>
                    setMonthlyKm(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="car-ins"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Insurance Cover
                </label>
                <CustomSelect
                  id="car-ins"
                  value={costCalc.effectiveInsuranceType}
                  onValueChange={(v) =>
                    setInsuranceType(v as "comprehensive" | "tpo")
                  }
                  className="w-full"
                >
                  <option value="comprehensive">
                    Comprehensive (~4%, min KES {carData.insuranceMinKes.comprehensive.toLocaleString("en-KE")})
                  </option>
                  <option value="tpo">
                    Third Party Only (TPO — min KES {carData.insuranceMinKes.tpo.toLocaleString("en-KE")})
                  </option>
                </CustomSelect>
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <label
                  htmlFor="car-service"
                  className="block text-xs font-semibold text-text-muted uppercase mb-1"
                >
                  Annual Service, Tyres &amp; Maintenance Budget (KES)
                </label>
                <input
                  id="car-service"
                  type="text"
                  inputMode="numeric"
                  value={
                    annualServiceKes
                      ? Number(annualServiceKes).toLocaleString("en-KE")
                      : ""
                  }
                  onChange={(e) =>
                    setAnnualServiceKes(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-sm font-bold text-text-primary tabular-nums"
                />
              </div>
            </div>

            {costCalc.exceedsCompCutoff && (
              <div className="rounded-xl border border-amber-500/45 bg-amber-500/10 p-3.5 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  This vehicle is <strong>{costCalc.vehicleAge} years old</strong>, exceeding the standard <strong>{carData.comprehensiveAgeCutoffYears}-year comprehensive insurance cutoff</strong> in Kenya. Most underwriters restrict cover to Third Party Only (TPO).
                </p>
              </div>
            )}

            <div role="status" aria-live="polite" aria-atomic="true" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.05] p-4">
                  <span className="text-[0.68rem] font-bold text-gold uppercase">
                    Annual Running Cost
                  </span>
                  <p className="text-2xl font-black text-gold mt-1 tabular-nums whitespace-nowrap">
                    KES {costCalc.totalAnnualKes.toLocaleString("en-KE")}
                  </p>
                  <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                    {costCalc.annualKm.toLocaleString("en-KE")} km / year
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
                  <span className="text-[0.68rem] font-bold text-text-muted uppercase">
                    Monthly Average
                  </span>
                  <p className="text-2xl font-black text-text-primary mt-1 tabular-nums whitespace-nowrap">
                    KES {costCalc.monthlyCostKes.toLocaleString("en-KE")}
                  </p>
                  <p className="text-[0.68rem] text-text-muted mt-1">
                    Fuel + Insurance + Service
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                  <span className="text-[0.68rem] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                    Cost per Kilometre
                  </span>
                  <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1 tabular-nums whitespace-nowrap">
                    KES {costCalc.costPerKmKes.toFixed(1)}/km
                  </p>
                  <p className="text-[0.68rem] text-text-secondary mt-1 tabular-nums">
                    ~{costCalc.annualLitres.toLocaleString("en-KE")} L/yr @ KES {costCalc.fuelRate}/L
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-1.5">
                <h3 className="font-bold text-text-primary mb-2">Annual Cost Breakdown</h3>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="min-w-0">
                    Annual Fuel ({fuelType === "petrol" ? "Petrol" : "Diesel"} @ KES {costCalc.fuelRate}/L)
                  </span>
                  <span className="font-semibold tabular-nums whitespace-nowrap">
                    KES {costCalc.annualFuelKes.toLocaleString("en-KE")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="min-w-0">
                    Annual Insurance ({costCalc.effectiveInsuranceType === "comprehensive" ? "Comprehensive" : "TPO"})
                  </span>
                  <span className="font-semibold tabular-nums whitespace-nowrap">
                    KES {costCalc.annualInsuranceKes.toLocaleString("en-KE")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="min-w-0">Service, Tyres &amp; Routine Maintenance</span>
                  <span className="font-semibold tabular-nums whitespace-nowrap">
                    KES {costCalc.serviceKes.toLocaleString("en-KE")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 pt-2 border-t border-border/60 text-text-muted">
                  <span className="min-w-0">
                    One-Time Pre-Purchase NTSA Verification (Form VII KES {carData.formViiCopyOfRecordsKes} + e-Sticker KES {carData.eStickerFeeKes})
                  </span>
                  <span className="font-semibold tabular-nums whitespace-nowrap">
                    KES {costCalc.oneTimeNtsaChecksKes.toLocaleString("en-KE")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
