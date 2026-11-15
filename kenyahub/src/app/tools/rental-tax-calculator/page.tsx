"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import rentalData from "@/data/rental-tax-data.json";

const tool = TOOLS.find((t) => t.slug === "rental-tax-calculator")!;

export default function RentalTaxCalculatorPage() {
  const [monthlyRent, setMonthlyRent] = useState("85000");

  const calc = useMemo(() => {
    const rent = Math.max(0, Number(monthlyRent.replace(/,/g, "")) || 0);
    const annualRent = rent * 12;

    const isBelowMriMin = annualRent > 0 && annualRent < 288000;
    const isAboveMriMax = annualRent > rentalData.mriThresholdAnnual;
    const isEligibleMri = annualRent >= 288000 && annualRent <= rentalData.mriThresholdAnnual;

    const mriMonthly = isBelowMriMin ? 0 : rent * rentalData.mriRate;
    const mriAnnual = isBelowMriMin ? 0 : annualRent * rentalData.mriRate;

    return {
      rent,
      annualRent,
      mriMonthly,
      mriAnnual,
      isBelowMriMin,
      isAboveMriMax,
      isEligibleMri,
    };
  }, [monthlyRent]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Residential Rental Income Tax (7.5% MRI) Calculator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under Section 6A of the <strong>Income Tax Act</strong>, landlords earning gross rental income between KES 288,000 (KES 24,000/mo) and KES 15,000,000 per year pay a simplified flat 7.5% Monthly Rental Income (MRI) tax, due on the 20th of the following month.
          </p>

          <div className="max-w-md mb-6">
            <label className="block text-xs font-semibold text-text-muted mb-1.5 uppercase">
              Gross Monthly Rent Collected (KES)
            </label>
            <input
              type="text"
              value={monthlyRent ? Number(monthlyRent).toLocaleString("en-KE") : ""}
              onChange={(e) => setMonthlyRent(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="e.g. 85,000"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-elevated text-base font-bold text-text-primary focus:border-gold outline-hidden"
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[20000, 35000, 85000, 150000, 350000, 1300000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlyRent(String(preset))}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    Number(monthlyRent) === preset
                      ? "bg-gold text-kenya-black border-gold font-bold"
                      : "bg-bg-elevated border-border text-text-secondary hover:text-gold"
                  }`}
                >
                  KES {preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">Monthly 7.5% Tax Due</span>
              <p className="text-2xl font-black text-gold mt-1">
                KES {Math.round(calc.mriMonthly).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">
                {calc.isBelowMriMin
                  ? "Exempt (Below KES 24,000/mo MRI floor)"
                  : "Due by 20th of following month"}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Annual Gross Rent</span>
              <p className="text-xl font-bold text-text-primary mt-1">
                KES {Math.round(calc.annualRent).toLocaleString()}
              </p>
              <p className={`text-[0.6875rem] font-semibold mt-1 ${
                calc.isEligibleMri
                  ? "text-kenya-green-light"
                  : calc.isBelowMriMin
                  ? "text-sky"
                  : "text-red-400"
              }`}>
                {calc.annualRent === 0
                  ? "Enter monthly rent above"
                  : calc.isBelowMriMin
                  ? "Exempt (< KES 288,000/yr minimum)"
                  : calc.isAboveMriMax
                  ? "Exceeds KES 15M/yr (File under normal Income Tax)"
                  : "✓ Qualifies for simplified 7.5% MRI"}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Annual Cumulative Tax</span>
              <p className="text-xl font-bold text-text-primary mt-1">
                KES {Math.round(calc.mriAnnual).toLocaleString()}
              </p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Late filing penalty: KES 2,000/mo</p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
