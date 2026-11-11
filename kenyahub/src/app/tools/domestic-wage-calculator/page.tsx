"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import domesticData from "@/data/domestic-wage-data.json";

const tool = TOOLS.find((t) => t.slug === "domestic-wage-calculator")!;

export default function DomesticWageCalculatorPage() {
  const [selectedZone, setSelectedZone] = useState(domesticData.zones[0].id);
  const [isLiveIn, setIsLiveIn] = useState(false);

  const activeZone = domesticData.zones.find((z) => z.id === selectedZone) || domesticData.zones[0];

  const calc = useMemo(() => {
    const minWage = activeZone.monthlyMinimum;
    const shaDeduction = minWage * domesticData.statutoryDeductions.shaEmployeePercent;
    const nssfEmployee = domesticData.statutoryDeductions.nssfTier1Matching;
    const nssfEmployer = domesticData.statutoryDeductions.nssfTier1Matching;
    const netTakeHome = minWage - shaDeduction - nssfEmployee;
    const totalEmployerCost = minWage + nssfEmployer;

    return { minWage, shaDeduction, nssfEmployee, nssfEmployer, netTakeHome, totalEmployerCost };
  }, [activeZone]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            Domestic Worker (Househelp) Gazetted Minimum Wage Calculator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under the *Regulation of Wages (General) (Amendment) Order (Legal Notice 108)*, domestic workers are entitled to gazetted minimum pay schedules by zone, plus mandatory NSSF Tier I matching and SHA healthcare deductions.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {domesticData.zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedZone(z.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedZone === z.id
                    ? "bg-gold text-kenya-black font-bold shadow-xs"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-text-primary"
                }`}
              >
                {z.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.6875rem] font-bold text-gold uppercase">Gazetted Legal Minimum Wage</span>
              <p className="text-2xl font-black text-gold mt-1">KES {calc.minWage.toLocaleString()}</p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Daily rate: KES {activeZone.dailyRate} ({activeZone.hourlyRate}/hr)</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Employee Net Take-Home</span>
              <p className="text-xl font-bold text-text-primary mt-1">KES {Math.round(calc.netTakeHome).toLocaleString()}</p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">After SHA KES {Math.round(calc.shaDeduction)} &amp; NSSF KES {calc.nssfEmployee}</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.6875rem] font-bold text-text-muted uppercase">Total Cost to Employer</span>
              <p className="text-xl font-bold text-text-primary mt-1">KES {Math.round(calc.totalEmployerCost).toLocaleString()}</p>
              <p className="text-[0.6875rem] text-text-secondary mt-1">Includes employer NSSF match KES {calc.nssfEmployer}</p>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
