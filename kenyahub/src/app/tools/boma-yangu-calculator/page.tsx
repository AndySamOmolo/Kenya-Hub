"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import bomaData from "@/data/boma-yangu-data.json";
import housingLevyData from "@/data/housing-levy-rates.json";

const tool = TOOLS.find((t) => t.slug === "boma-yangu-calculator")!;

function getIncomeTierIndex(salary: number): number {
  if (salary < 20000) return 0; // Social Housing (< KES 20,000)
  if (salary < 50000) return 1; // Affordable Housing Tier I (< KES 50,000)
  if (salary < 150000) return 1; // Affordable Housing Tier II (< KES 150,000)
  return 2; // Market Units / Mortgage Scheme (>= KES 150,000)
}

function getIncomeBandLabel(salary: number): string {
  if (salary < 20000) return "Social Housing (< KES 20,000/mo — 3% p.a.)";
  if (salary < 50000) return "Affordable Housing (< KES 50,000/mo — 6% p.a.)";
  if (salary < 150000) return "Affordable Housing (< KES 150,000/mo — 6% p.a.)";
  return "Market / Associated Mortgage Scheme (≥ KES 150,000/mo — 9% p.a.)";
}

export default function BomaYanguCalculatorPage() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Affordable Housing default
  const [monthlySalary, setMonthlySalary] = useState("65000");
  const [unitCost, setUnitCost] = useState("2400000"); // 2-Bedroom AHP
  const [termYears, setTermYears] = useState("25");

  const activeTier = bomaData.tiers[selectedTierIndex] || bomaData.tiers[0];

  // Override description locally to avoid stale 1.5% Affordable Housing Levy tax deduction copy (F-022)
  const cleanTool = {
    ...tool,
    description:
      "Calculate Boma Yangu Affordable Housing Programme (AHP) tenant-purchase monthly repayments, 10% deposit, and statutory 15% KRA Affordable Housing Relief (up to KES 9,000/month).",
  };

  const calc = useMemo(() => {
    const salary = Math.max(0, Number(monthlySalary.replace(/,/g, "")) || 0);
    const cost = Math.max(0, Number(unitCost.replace(/,/g, "")) || 0);
    const years = Math.max(5, Math.min(activeTier.maxTermYears, Number(termYears) || 25));
    const deposit = cost * 0.1;
    const loanPrincipal = Math.max(0, cost - deposit);

    const r = activeTier.interestRate / 12;
    const n = years * 12;
    const monthlyRepayment =
      loanPrincipal > 0 && r > 0
        ? (loanPrincipal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : 0;

    // KRA Housing Relief (15% of annual payments, up to KES 9,000/mo or KES 108,000/yr)
    const annualPayments = monthlyRepayment * 12;
    const taxReliefAnnual = Math.min(bomaData.maxAnnualRelief, annualPayments * bomaData.housingReliefRate);
    const taxReliefMonthly = taxReliefAnnual / 12;
    const netMonthlyCost = Math.max(0, monthlyRepayment - taxReliefMonthly);

    return {
      salary,
      incomeBandLabel: getIncomeBandLabel(salary),
      cost,
      deposit,
      loanPrincipal,
      years,
      monthlyRepayment,
      taxReliefMonthly,
      netMonthlyCost,
    };
  }, [monthlySalary, unitCost, termYears, activeTier]);

  return (
    <ToolShell tool={cleanTool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
            {bomaData.tiers.map((t, idx) => {
              const maxIncomeDisplay =
                idx === 0
                  ? "< KES 20,000/mo"
                  : idx === 1
                  ? "< KES 150,000/mo"
                  : "≥ KES 150,000/mo";
              return (
                <button
                  key={t.tier}
                  type="button"
                  aria-pressed={selectedTierIndex === idx}
                  onClick={() => {
                    setSelectedTierIndex(idx);
                    if (t.sampleUnits[0]) setUnitCost(String(t.sampleUnits[0].price));
                  }}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    selectedTierIndex === idx
                      ? "border-gold bg-gold/10 font-bold"
                      : "border-border bg-bg-elevated/40 text-text-secondary"
                  }`}
                >
                  <span className="block text-text-primary font-bold">{t.tier}</span>
                  <span className="text-[0.6875rem] text-gold mt-0.5 block">
                    Fixed Rate: {(t.interestRate * 100).toFixed(0)}% p.a.
                  </span>
                  <span className="text-[0.6875rem] text-text-muted mt-0.5 block">
                    Income Band: {maxIncomeDisplay}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label
                htmlFor="boma-monthly-salary"
                className="block text-xs font-semibold text-text-muted mb-1 uppercase"
              >
                Monthly Gross Salary (KES)
              </label>
              <div className="relative">
                <input
                  id="boma-monthly-salary"
                  type="text"
                  inputMode="numeric"
                  value={monthlySalary ? Number(monthlySalary).toLocaleString("en-KE") : ""}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    setMonthlySalary(raw);
                    if (raw !== "") {
                      const tierIdx = getIncomeTierIndex(Number(raw));
                      setSelectedTierIndex(tierIdx);
                    }
                  }}
                  placeholder="e.g. 65,000"
                  aria-describedby="boma-salary-band"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                  style={{ paddingRight: "2.75rem" }}
                />
                {monthlySalary && (
                  <button
                    type="button"
                    onClick={() => setMonthlySalary("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear monthly salary"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <p id="boma-salary-band" className="text-[0.6875rem] text-gold mt-1">
                {calc.incomeBandLabel}
              </p>
            </div>

            <div>
              <label
                htmlFor="boma-unit-cost"
                className="block text-xs font-semibold text-text-muted mb-1 uppercase"
              >
                Purchase Price (KES)
              </label>
              <div className="relative">
                <input
                  id="boma-unit-cost"
                  type="text"
                  inputMode="numeric"
                  value={unitCost ? Number(unitCost).toLocaleString("en-KE") : ""}
                  onChange={(e) => setUnitCost(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="e.g. 2,400,000"
                  aria-describedby="boma-unit-presets"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                  style={{ paddingRight: "2.75rem" }}
                />
                {unitCost && (
                  <button
                    type="button"
                    onClick={() => setUnitCost("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear purchase price"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
              <div id="boma-unit-presets" className="flex flex-wrap gap-1.5 mt-2">
                {activeTier.sampleUnits.map((u) => (
                  <button
                    key={u.type}
                    type="button"
                    aria-pressed={unitCost === String(u.price)}
                    onClick={() => setUnitCost(String(u.price))}
                    className={`text-[0.6875rem] px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                      unitCost === String(u.price)
                        ? "bg-gold/15 border-gold text-gold font-semibold"
                        : "bg-bg-elevated border-border text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {u.type} (KES {(u.price / 1000000).toFixed(2)}M)
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="boma-term-years"
                className="block text-xs font-semibold text-text-muted mb-1 uppercase"
              >
                Repayment Period (Years: 5–{activeTier.maxTermYears})
              </label>
              <div className="relative">
                <input
                  id="boma-term-years"
                  type="text"
                  inputMode="numeric"
                  value={termYears}
                  onChange={(e) => setTermYears(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="25"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-border dark:border-white/15 bg-bg-elevated text-base font-bold text-text-primary focus:border-gold tabular-nums"
                  style={{ paddingRight: "2.75rem" }}
                />
                {termYears && (
                  <button
                    type="button"
                    onClick={() => setTermYears("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                    aria-label="Clear repayment period"
                  >
                    <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Gross Monthly TPS</span>
              <p className="text-xl font-extrabold text-text-primary mt-1 tabular-nums whitespace-nowrap">
                KES {Math.round(calc.monthlyRepayment).toLocaleString("en-KE")}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Before tax relief deduction</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">KRA Housing Tax Relief</span>
              <p className="text-xl font-extrabold text-kenya-green-light mt-1 tabular-nums whitespace-nowrap">
                −KES {Math.round(calc.taxReliefMonthly).toLocaleString("en-KE")}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">15% deduction from monthly PAYE</p>
            </div>
            <div className="rounded-xl border border-amber-500/45 bg-amber-500/[0.04] p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">Net Monthly Effective Cost</span>
              <p className="text-xl font-extrabold text-gold mt-1 tabular-nums whitespace-nowrap">
                KES {Math.round(calc.netMonthlyCost).toLocaleString("en-KE")}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1 tabular-nums">
                Deposit required: KES {Math.round(calc.deposit).toLocaleString("en-KE")}
              </p>
            </div>
          </div>
        </div>

        {/* Statutory Affordable Housing Levy Rules */}
        <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-2.5 mt-6">
          <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            Statutory Basis: {housingLevyData.legalBasis} (Effective {housingLevyData.effectiveDate})
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {housingLevyData.taxReliefDescription} Register or check unit allocations at{" "}
            <a
              href="https://bomayangu.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-2 hover:text-gold-light font-medium"
            >
              bomayangu.go.ke ↗
            </a>
            .
          </p>
        </div>
      </div>
    </ToolShell>
  );
}
