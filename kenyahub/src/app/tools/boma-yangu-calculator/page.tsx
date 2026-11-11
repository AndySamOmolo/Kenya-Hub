"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import bomaData from "@/data/boma-yangu-data.json";

const tool = TOOLS.find((t) => t.slug === "boma-yangu-calculator")!;

export default function BomaYanguCalculatorPage() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Affordable Housing default
  const [unitCost, setUnitCost] = useState("2400000"); // 2-Bedroom AHP
  const [termYears, setTermYears] = useState("25");

  const activeTier = bomaData.tiers[selectedTierIndex] || bomaData.tiers[0];

  const calc = useMemo(() => {
    const cost = Math.max(0, Number(unitCost.replace(/,/g, "")) || 0);
    const years = Math.max(5, Math.min(activeTier.maxTermYears, Number(termYears) || 25));
    const deposit = cost * 0.10;
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
      cost,
      deposit,
      loanPrincipal,
      years,
      monthlyRepayment,
      taxReliefMonthly,
      netMonthlyCost
    };
  }, [unitCost, termYears, activeTier]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Boma Yangu (AHP) Tenant Purchase &amp; Housing Relief Calculator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under the *Affordable Housing Act 2024*, contributors to the Housing Levy qualify for subsidized fixed-rate Tenant Purchase Schemes (TPS) alongside KRA&apos;s 15% Affordable Housing Tax Relief.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
            {bomaData.tiers.map((t, idx) => (
              <button
                key={t.tier}
                onClick={() => {
                  setSelectedTierIndex(idx);
                  if (t.sampleUnits[0]) setUnitCost(String(t.sampleUnits[0].price));
                }}
                className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  selectedTierIndex === idx ? "border-gold bg-gold/10 font-bold" : "border-border bg-bg-elevated/40 text-text-secondary"
                }`}
              >
                <span className="block text-text-primary font-bold">{t.tier}</span>
                <span className="text-[0.6875rem] text-gold mt-0.5 block">
                  Fixed Rate: {(t.interestRate * 100).toFixed(0)}% p.a.
                </span>
                <span className="text-[0.6875rem] text-text-muted mt-0.5 block">
                  Max Income: KES {t.maxIncome.toLocaleString()}/mo
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-text-muted mb-1 uppercase">
                Purchase Price (KES)
              </label>
              <input
                type="text"
                value={unitCost}
                onChange={(e) => setUnitCost(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-elevated text-base font-bold text-text-primary focus:border-gold outline-hidden"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeTier.sampleUnits.map((u) => (
                  <button
                    key={u.type}
                    onClick={() => setUnitCost(String(u.price))}
                    className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-bg-elevated border border-border text-text-secondary hover:text-text-primary cursor-pointer"
                  >
                    {u.type} (KES {(u.price / 1000000).toFixed(2)}M)
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted mb-1 uppercase">
                Repayment Period (Years: 5–{activeTier.maxTermYears})
              </label>
              <input
                type="text"
                value={termYears}
                onChange={(e) => setTermYears(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-elevated text-base font-bold text-text-primary focus:border-gold outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Gross Monthly TPS</span>
              <p className="text-xl font-extrabold text-text-primary mt-1">
                KES {Math.round(calc.monthlyRepayment).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Before tax relief deduction</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">KRA Housing Tax Relief</span>
              <p className="text-xl font-extrabold text-kenya-green-light mt-1">
                − KES {Math.round(calc.taxReliefMonthly).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">15% deduction from monthly PAYE</p>
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">Net Monthly Effective Cost</span>
              <p className="text-xl font-extrabold text-gold mt-1">
                KES {Math.round(calc.netMonthlyCost).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Deposit required: KES {Math.round(calc.deposit).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
