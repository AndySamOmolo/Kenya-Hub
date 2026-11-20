"use client";

import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import { useState, useMemo, useEffect } from "react";
import { Copy, Check, Share2, X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import payeData from "@/data/paye-bands.json";
import housingLevyData from "@/data/housing-levy-rates.json";

const tool = TOOLS.find((t) => t.slug === "paye-calculator")!;

const PRESET_SALARIES = [30000, 50000, 80000, 100000, 150000, 250000, 500000];

function calculatePAYE(taxableIncome: number, insurancePremium: number = 0) {
  const bands = payeData.payeBands;
  let totalPAYE = 0;

  for (const band of bands) {
    const max = band.max ?? Infinity;
    if (taxableIncome <= 0) break;

    const taxableInBand =
      Math.min(taxableIncome, max) - (band.min > 0 ? band.min - 1 : 0);
    if (taxableInBand > 0) {
      totalPAYE += taxableInBand * (band.rate / 100);
    }
    if (taxableIncome <= max) break;
  }

  const insuranceRelief = Math.min(5000, insurancePremium * 0.15);
  return Math.max(0, totalPAYE - payeData.personalRelief - insuranceRelief);
}

function calculateSHA(grossSalary: number) {
  if (grossSalary <= 0) return 0;
  return Math.max(
    300,
    Math.round(grossSalary * (payeData.sha.rate / 100) * 100) / 100
  );
}

function calculateNSSF(grossSalary: number, tier1Only: boolean = false) {
  const tier1 =
    Math.min(grossSalary, payeData.nssf.tier1Limit) * (payeData.nssf.rate / 100);
  if (tier1Only) return Math.round(tier1 * 100) / 100;
  const tier2 =
    grossSalary > payeData.nssf.tier1Limit
      ? Math.min(
          grossSalary - payeData.nssf.tier1Limit,
          payeData.nssf.tier2Limit - payeData.nssf.tier1Limit
        ) *
        (payeData.nssf.rate / 100)
      : 0;
  return Math.round((tier1 + tier2) * 100) / 100;
}

function calculateHousingLevy(grossSalary: number) {
  return (
    Math.round(grossSalary * (payeData.housingLevy.employeeRate / 100) * 100) /
    100
  );
}

function computePayslip(
  gross: number,
  pensionContribution: number,
  mortgageInterest: number,
  insurancePremium: number,
  nssfTier1Only: boolean
) {
  const housingLevy = calculateHousingLevy(gross);
  const nssfEmployee = calculateNSSF(gross, nssfTier1Only);
  const sha = calculateSHA(gross);

  // Under the Tax Laws (Amendment) Act 2024:
  // Allowable pre-tax deductions: NSSF + SHA + Housing Levy + Pension (combined NSSF+Pension capped at 30,000/mo) + Mortgage Interest (capped at 30,000/mo)
  const allowablePension = Math.max(
    0,
    Math.min(30000 - nssfEmployee, pensionContribution)
  );
  const allowableMortgage = Math.min(30000, Math.max(0, mortgageInterest));

  const taxableIncome = Math.max(
    0,
    gross -
      nssfEmployee -
      sha -
      housingLevy -
      allowablePension -
      allowableMortgage
  );
  const paye = calculatePAYE(taxableIncome, insurancePremium);
  const statutoryDeductions = paye + sha + nssfEmployee + housingLevy;
  const netPay = gross - statutoryDeductions - pensionContribution;

  const employerNSSF = nssfEmployee;
  const employerHousing =
    Math.round(gross * (payeData.housingLevy.employerRate / 100) * 100) / 100;
  const totalEmployerCost = gross + employerNSSF + employerHousing;

  return {
    gross: Math.round(gross),
    taxableIncome: Math.round(taxableIncome),
    paye: Math.round(paye),
    sha: Math.round(sha),
    nssf: Math.round(nssfEmployee),
    housingLevy: Math.round(housingLevy),
    allowablePension: Math.round(allowablePension),
    allowableMortgage: Math.round(allowableMortgage),
    totalDeductions: Math.round(statutoryDeductions + pensionContribution),
    netPay: Math.round(netPay),
    employerNSSF: Math.round(employerNSSF),
    employerHousing: Math.round(employerHousing),
    totalEmployerCost: Math.round(totalEmployerCost),
    effectiveTaxRate:
      gross > 0 ? Math.round((paye / gross) * 10000) / 100 : 0,
  };
}

// Binary search to solve Reverse Net-to-Gross salary negotiation
function solveGrossForTargetNet(
  targetNet: number,
  pensionContribution: number,
  mortgageInterest: number,
  insurancePremium: number,
  nssfTier1Only: boolean
): number {
  if (targetNet <= 0) return 0;
  let low = targetNet;
  let high = targetNet * 2.2 + 50000;
  for (let i = 0; i < 40; i++) {
    const mid = (low + high) / 2;
    const res = computePayslip(
      mid,
      pensionContribution,
      mortgageInterest,
      insurancePremium,
      nssfTier1Only
    );
    if (res.netPay < targetNet) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return Math.round((low + high) / 2);
}


export default function PAYECalculatorPage() {
  const [calcMode, setCalcMode] = useState<"grossToNet" | "netToGross">(
    "grossToNet"
  );
  const [grossInput, setGrossInput] = useState<number>(100000);
  const [targetNetInput, setTargetNetInput] = useState<number>(75000);
  const [showAnnual, setShowAnnual] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [pensionContribution, setPensionContribution] = useState<number>(0);
  const [mortgageInterest, setMortgageInterest] = useState<number>(0);
  const [insurancePremium, setInsurancePremium] = useState<number>(0);
  const [nssfTier1Only, setNssfTier1Only] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Hydrate initial salary from URL hash (#gross=...) or legacy query parameters (?gross=...)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawParams = (window.location.hash || window.location.search).replace(/^[#?]/, "");
    const params = new URLSearchParams(rawParams);
    const grossParam = Number(params.get("gross"));
    const netParam = Number(params.get("net"));
    const pensionParam = Number(params.get("pension"));
    if (Number.isFinite(grossParam) && grossParam > 0) {
      setCalcMode("grossToNet");
      setGrossInput(grossParam);
    } else if (Number.isFinite(netParam) && netParam > 0) {
      setCalcMode("netToGross");
      setTargetNetInput(netParam);
    }
    if (Number.isFinite(pensionParam) && pensionParam > 0) {
      setPensionContribution(pensionParam);
      setShowAdvanced(true);
    }
  }, []);

  const results = useMemo(() => {
    const effectiveGross =
      calcMode === "grossToNet"
        ? grossInput
        : solveGrossForTargetNet(
            targetNetInput,
            pensionContribution,
            mortgageInterest,
            insurancePremium,
            nssfTier1Only
          );
    return computePayslip(
      effectiveGross,
      pensionContribution,
      mortgageInterest,
      insurancePremium,
      nssfTier1Only
    );
  }, [
    calcMode,
    grossInput,
    targetNetInput,
    pensionContribution,
    mortgageInterest,
    insurancePremium,
    nssfTier1Only,
  ]);

  const fmt = (n: number) => {
    const multiplier = showAnnual ? 12 : 1;
    return `KES ${(n * multiplier).toLocaleString("en-KE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  const buildShareHash = () => {
    const hashParams = new URLSearchParams();
    if (calcMode === "netToGross") {
      hashParams.set("net", String(targetNetInput));
    } else {
      hashParams.set("gross", String(results.gross));
    }
    if (pensionContribution > 0) {
      hashParams.set("pension", String(pensionContribution));
    }
    return `#${hashParams.toString()}`;
  };

  const handleCopySummary = async () => {
    const periodLabel = showAnnual ? "Annual" : "Monthly";
    const summaryText = [
      `Kenya 2026 PAYE Payslip Summary (${periodLabel}) — KenyaHub`,
      `Gross Salary: ${fmt(results.gross)}`,
      `NSSF (Year 4, 6%): -${fmt(results.nssf)}`,
      `SHA/SHIF (2.75%): -${fmt(results.sha)}`,
      `Housing Levy (1.5%): -${fmt(results.housingLevy)}`,
      ...(pensionContribution > 0 ? [`Voluntary Pension: -${fmt(pensionContribution)}`] : []),
      `Taxable Pay: ${fmt(results.taxableIncome)}`,
      `Net PAYE Tax: -${fmt(results.paye)} (${results.effectiveTaxRate}% effective)`,
      `Net Take-Home Pay: ${fmt(results.netPay)}`,
      `https://kenyahub.me/tools/paye-calculator/${buildShareHash()}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2200);
    } catch {
      // ignore
    }
  };

  const handleShareUrl = async () => {
    const shareUrl = `${window.location.origin}/tools/paye-calculator/${buildShareHash()}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {
      // ignore
    }
  };

  const grossBase = Math.max(1, results.gross);
  const netPct = Math.max(0, Math.round((results.netPay / grossBase) * 1000) / 10);
  const payePct = Math.max(0, Math.round((results.paye / grossBase) * 1000) / 10);
  const shaPct = Math.max(0, Math.round((results.sha / grossBase) * 1000) / 10);
  const nssfPct = Math.max(0, Math.round((results.nssf / grossBase) * 1000) / 10);
  const ahlPct = Math.max(0, Math.round((results.housingLevy / grossBase) * 1000) / 10);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Calculation Direction Mode Switcher */}
        <div className="bg-bg-card border border-border rounded-xl p-6 space-y-5">
          <ExpandablePillRow>
            {[
              { id: "grossToNet" as const, label: "Gross → Net Pay" },
              { id: "netToGross" as const, label: "Target Net → Gross" },
            ].map((m) => {
              const active = calcMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCalcMode(m.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all ${
                    active
                      ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                      : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </ExpandablePillRow>

          {calcMode === "grossToNet" ? (
            <div>
              <label htmlFor="gross-salary-input" className="block text-sm font-medium text-text-secondary mb-2">
                Monthly Gross Salary (KES)
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="numeric"
                  value={grossInput === 0 ? "" : grossInput}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/^0+(?=\d)/, "");
                    setGrossInput(raw === "" ? 0 : Math.max(0, Number(raw)));
                  }}
                  placeholder="0"
                  className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] pr-11!"
                  style={{ paddingRight: "2.75rem" }}
                  min={0}
                  step={1000}
                  id="gross-salary-input"
                />
                {grossInput > 0 && (
                  <button
                    type="button"
                    onClick={() => setGrossInput(0)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear gross salary"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <input
                type="range"
                aria-label="Monthly Gross Salary Slider"
                min={0}
                max={500000}
                step={5000}
                value={grossInput}
                onChange={(e) => setGrossInput(Number(e.target.value))}
                className="w-full mt-3 accent-gold"
              />
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-text-muted mr-1">Quick presets:</span>
                {PRESET_SALARIES.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    aria-pressed={grossInput === amt}
                    onClick={() => setGrossInput(amt)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                      grossInput === amt
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-border bg-bg-elevated text-text-secondary hover:border-gold/40 hover:text-text-primary"
                    }`}
                  >
                    {amt >= 1000 ? `${amt / 1000}K` : amt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="target-net-input" className="block text-sm font-medium text-text-secondary mb-2">
                Desired Monthly Net Take-Home Pay in Bank (KES)
              </label>
              <div className="relative">
                <input
                  id="target-net-input"
                  type="number"
                  inputMode="numeric"
                  value={targetNetInput === 0 ? "" : targetNetInput}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/^0+(?=\d)/, "");
                    setTargetNetInput(raw === "" ? 0 : Math.max(0, Number(raw)));
                  }}
                  placeholder="0"
                  className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] pr-11!"
                  style={{ paddingRight: "2.75rem" }}
                  min={0}
                  step={1000}
                />
                {targetNetInput > 0 && (
                  <button
                    type="button"
                    onClick={() => setTargetNetInput(0)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear net salary"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <p className="text-xs text-gold mt-2">
                Required Gross Salary to Negotiate:{" "}
                <strong>{fmt(results.gross)}</strong> ({showAnnual ? "annual" : "monthly"})
              </p>
            </div>
          )}

          {/* Optional Reliefs & Allowable Deductions Drawer */}
          <div className="pt-2 border-t border-border">
            <button
              type="button"
              aria-expanded={showAdvanced}
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-gold hover:underline"
            >
              {showAdvanced
                ? "− Hide Pension, Mortgage, Insurance Relief & NSSF Tier II Options"
                : "+ Add Pension, Mortgage Interest, Insurance Relief or NSSF Tier II Opt-Out"}
            </button>

            {showAdvanced && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="pension-contribution-input" className="block text-xs text-text-secondary mb-1">
                    Voluntary Pension (KES/mo, max 30k tax-free)
                  </label>
                  <div className="relative">
                    <input
                      id="pension-contribution-input"
                      type="number"
                      inputMode="numeric"
                      value={pensionContribution === 0 ? "" : pensionContribution}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/^0+(?=\d)/, "");
                        setPensionContribution(raw === "" ? 0 : Math.max(0, Number(raw)));
                      }}
                      placeholder="0"
                      className="input-field text-sm pr-10!"
                      style={{ paddingRight: "2.5rem" }}
                    />
                    {pensionContribution > 0 && (
                      <button
                        type="button"
                        onClick={() => setPensionContribution(0)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                        aria-label="Clear pension contribution"
                      >
                        <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="mortgage-interest-input" className="block text-xs text-text-secondary mb-1">
                    Mortgage Interest (KES/mo, max 30k deductible)
                  </label>
                  <div className="relative">
                    <input
                      id="mortgage-interest-input"
                      type="number"
                      inputMode="numeric"
                      value={mortgageInterest === 0 ? "" : mortgageInterest}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/^0+(?=\d)/, "");
                        setMortgageInterest(raw === "" ? 0 : Math.max(0, Number(raw)));
                      }}
                      placeholder="0"
                      className="input-field text-sm pr-10!"
                      style={{ paddingRight: "2.5rem" }}
                    />
                    {mortgageInterest > 0 && (
                      <button
                        type="button"
                        onClick={() => setMortgageInterest(0)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                        aria-label="Clear mortgage interest"
                      >
                        <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="insurance-premium-input" className="block text-xs text-text-secondary mb-1">
                    Life/Education Insurance Premium (15% relief)
                  </label>
                  <div className="relative">
                    <input
                      id="insurance-premium-input"
                      type="number"
                      inputMode="numeric"
                      value={insurancePremium === 0 ? "" : insurancePremium}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/^0+(?=\d)/, "");
                        setInsurancePremium(raw === "" ? 0 : Math.max(0, Number(raw)));
                      }}
                      placeholder="0"
                      className="input-field text-sm pr-10!"
                      style={{ paddingRight: "2.5rem" }}
                    />
                    {insurancePremium > 0 && (
                      <button
                        type="button"
                        onClick={() => setInsurancePremium(0)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                        aria-label="Clear insurance premium"
                      >
                        <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                      </button>
                    )}
                  </div>
                </div>
                <label className="sm:col-span-3 flex items-center gap-2 text-xs text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nssfTier1Only}
                    onChange={(e) => setNssfTier1Only(e.target.checked)}
                    className="rounded"
                  />
                  <span>
                    Contracted out of NSSF Tier II to a private RBA-registered pension scheme (deducts NSSF Tier I KES 540 only)
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Monthly / Annual Toggle + Copy & Share Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-pressed={!showAnnual}
              onClick={() => setShowAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !showAnnual
                  ? "bg-gold text-kenya-black font-bold"
                  : "bg-bg-card border border-border text-text-secondary hover:text-gold"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={showAnnual}
              onClick={() => setShowAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                showAnnual
                  ? "bg-gold text-kenya-black font-bold"
                  : "bg-bg-card border border-border text-text-secondary hover:text-gold"
              }`}
            >
              Annual (×12)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-bg-card border border-border text-text-secondary hover:border-gold/50 hover:text-gold transition-colors cursor-pointer"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-kenya-green-light" /> : <Copy className="w-3.5 h-3.5 text-gold" />}
              <span>{copiedSummary ? "Payslip Copied!" : "Copy Payslip"}</span>
            </button>
            <button
              type="button"
              onClick={handleShareUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-bg-card border border-border text-text-secondary hover:border-gold/50 hover:text-gold transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-kenya-green-light" /> : <Share2 className="w-3.5 h-3.5 text-gold" />}
              <span>{copiedLink ? "Link Copied!" : "Share Link"}</span>
            </button>
          </div>
        </div>

        {/* Result Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div role="status" aria-live="polite" aria-atomic="true" className="result-box">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-secondary">
                {calcMode === "netToGross"
                  ? "Required Gross Salary"
                  : "Net Take-Home Pay"}
              </span>
              <span className="text-xs text-text-muted">
                Effective PAYE: {results.effectiveTaxRate}%
              </span>
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
              {calcMode === "netToGross"
                ? fmt(results.gross)
                : fmt(results.netPay)}
            </p>
            <p className="text-xs text-text-muted mt-2">
              {calcMode === "netToGross"
                ? `Delivers ${fmt(results.netPay)} net take-home pay`
                : `From ${fmt(results.gross)} gross salary`}
            </p>
          </div>

          <div className="result-box">
            <p className="text-xs text-text-secondary mb-2">
              Total Cost to Employer (Gross + Matches)
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold font-[family-name:var(--font-outfit)] text-gold">
              {fmt(results.totalEmployerCost)}
            </p>
            <p className="text-xs text-text-muted mt-2">
              Includes Employer NSSF ({fmt(results.employerNSSF)}) + 1.5% Housing Levy ({fmt(results.employerHousing)})
            </p>
          </div>
        </div>

        {/* Visual Salary Distribution Stacked Bar */}
        {results.gross > 0 && (
          <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-text-primary">
                Visual Gross Salary Distribution ({fmt(results.gross)})
              </span>
              <span className="text-kenya-green-light font-bold">
                {netPct}% Take-Home
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-bg-elevated overflow-hidden flex">
              <div
                style={{ width: `${netPct}%` }}
                className="bg-kenya-green-light h-full transition-all duration-300"
                title={`Net Pay: ${netPct}%`}
              />
              <div
                style={{ width: `${payePct}%` }}
                className="bg-kenya-red-light h-full transition-all duration-300"
                title={`PAYE: ${payePct}%`}
              />
              <div
                style={{ width: `${shaPct}%` }}
                className="bg-sky-light h-full transition-all duration-300"
                title={`SHA: ${shaPct}%`}
              />
              <div
                style={{ width: `${nssfPct}%` }}
                className="bg-gold h-full transition-all duration-300"
                title={`NSSF: ${nssfPct}%`}
              />
              <div
                style={{ width: `${ahlPct}%` }}
                className="bg-purple-400 h-full transition-all duration-300"
                title={`Housing Levy: ${ahlPct}%`}
              />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-kenya-green-light" />
                Net Pay ({netPct}%)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-kenya-red-light" />
                PAYE ({payePct}%)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-light" />
                SHA ({shaPct}%)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                NSSF ({nssfPct}%)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                Housing Levy ({ahlPct}%)
              </span>
            </div>
          </div>
        )}

        {/* Deductions Breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              2026 Payslip &amp; Statutory Deductions Breakdown
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table whitespace-nowrap tabular-nums">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-text-primary font-medium">Gross Salary</td>
                  <td className="text-right font-semibold text-text-primary whitespace-nowrap">
                    {fmt(results.gross)}
                  </td>
                </tr>
                <tr>
                  <td>NSSF Contribution (Year 4 Tier I &amp; II, 6%)</td>
                  <td className="text-right text-kenya-red-light whitespace-nowrap">
                    − {fmt(results.nssf)}
                  </td>
                </tr>
                <tr>
                  <td>SHA/SHIF Contribution (2.75% pre-tax)</td>
                  <td className="text-right text-kenya-red-light whitespace-nowrap">
                    − {fmt(results.sha)}
                  </td>
                </tr>
                <tr>
                  <td>Affordable Housing Levy (1.5% pre-tax)</td>
                  <td className="text-right text-kenya-red-light whitespace-nowrap">
                    − {fmt(results.housingLevy)}
                  </td>
                </tr>
                {pensionContribution > 0 && (
                  <tr>
                    <td>Voluntary Pension Contribution (Allowable: {fmt(results.allowablePension)})</td>
                    <td className="text-right text-kenya-red-light whitespace-nowrap">
                      − {fmt(pensionContribution)}
                    </td>
                  </tr>
                )}
                <tr className="bg-bg-elevated/40">
                  <td className="text-text-primary font-medium">
                    Taxable Income (After Allowable Deductions)
                  </td>
                  <td className="text-right font-semibold text-text-primary whitespace-nowrap">
                    {fmt(results.taxableIncome)}
                  </td>
                </tr>
                <tr>
                  <td>Net PAYE Tax (After KES 2,400 Personal Relief)</td>
                  <td className="text-right text-kenya-red-light font-semibold">
                    − {fmt(results.paye)}
                  </td>
                </tr>
                <tr className="bg-kenya-green/10 border-t-2 border-border font-bold">
                  <td className="text-text-primary">Net Take-Home Pay</td>
                  <td className="text-right text-kenya-green-light text-base whitespace-nowrap">
                    {fmt(results.netPay)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2026 Pre-Calculated Net Pay Benchmark Table & Affordable Housing Levy Schedule */}
        <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-4 mt-6">
          <div>
            <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">
              2026 Kenya Gross-to-Net Salary Benchmark Table (SHIF 2.75%, NSSF 6%, Housing Levy {housingLevyData.employeeRate}%)
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Quick reference net take-home pay across common Kenyan monthly salary bands under the {housingLevyData.legalBasis}.
            </p>
          </div>
          <div className="table-responsive">
            <table className="data-table whitespace-nowrap tabular-nums">
              <thead>
                <tr>
                  <th>Gross Salary (KES)</th>
                  <th className="text-right">NSSF (6%)</th>
                  <th className="text-right">SHA/SHIF (2.75%)</th>
                  <th className="text-right">Housing Levy (1.5%)</th>
                  <th className="text-right">Net PAYE Tax</th>
                  <th className="text-right">Net Take-Home Pay</th>
                </tr>
              </thead>
              <tbody>
                {[24000, 35000, 50000, 75000, 100000, 150000, 250000, 500000].map((gross) => {
                  const nssf = Math.round(calculateNSSF(gross));
                  const shif = Math.round(calculateSHA(gross));
                  const ahl = Math.round(calculateHousingLevy(gross));
                  const taxable = Math.max(0, gross - nssf - shif - ahl);
                  const paye = Math.round(calculatePAYE(taxable));
                  const net = gross - nssf - shif - ahl - paye;
                  return (
                    <tr key={gross}>
                      <td className="font-semibold text-text-primary whitespace-nowrap">KES {gross.toLocaleString()}</td>
                      <td className="text-right whitespace-nowrap">KES {nssf.toLocaleString()}</td>
                      <td className="text-right whitespace-nowrap">KES {shif.toLocaleString()}</td>
                      <td className="text-right whitespace-nowrap">KES {ahl.toLocaleString()}</td>
                      <td className="text-right text-kenya-red-light whitespace-nowrap">KES {paye.toLocaleString()}</td>
                      <td className="text-right font-bold text-kenya-green-light whitespace-nowrap">KES {net.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted">{housingLevyData.taxReliefDescription}</p>
        </div>

        {/* Sticky Mobile Live-Result Pill (F-038) */}
        <div
          role="status"
          aria-live="polite"
          className="sticky bottom-3 z-30 sm:hidden rounded-full border border-amber-500/45 bg-bg-card/95 backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center justify-between gap-3"
        >
          <span className="text-xs font-semibold text-text-secondary">Net Pay</span>
          <span className="text-sm font-extrabold text-kenya-green-light tabular-nums whitespace-nowrap">
            {fmt(results.netPay)}
          </span>
        </div>
      </div>
    </ToolShell>
  );
}
