"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import ntsaData from "@/data/ntsa-transfer-data.json";

const tool = TOOLS.find((t) => t.slug === "ntsa-transfer-calculator")!;

export default function NtsaTransferCalculatorPage() {
  const [selectedCcIndex, setSelectedCcIndex] = useState(2); // 1,201-1,500 cc default (popular Premio, Axio, Fielder)
  const [isMotorcycle, setIsMotorcycle] = useState(false);
  const [needNewPlates, setNeedNewPlates] = useState(false);

  const calc = useMemo(() => {
    if (isMotorcycle) {
      const transfer = ntsaData.motorcycle.transferFee;
      const tax = ntsaData.motorcycle.purchaseTax;
      const search = ntsaData.onlineSearchFee;
      const platform = ntsaData.platformFee;
      const total = transfer + tax + search + platform;
      return { transfer, tax, search, platform, plates: 0, total };
    }

    const band = ntsaData.transferFeeBands[selectedCcIndex] || ntsaData.transferFeeBands[0];
    const transfer = band.transferFee;
    const tax = band.purchaseTax;
    const search = ntsaData.onlineSearchFee;
    const platform = ntsaData.platformFee;
    const plates = needNewPlates ? ntsaData.reflectivePlateReplacement : 0;
    const total = transfer + tax + search + platform + plates;

    return { transfer, tax, search, platform, plates, total, label: band.label };
  }, [selectedCcIndex, isMotorcycle, needNewPlates]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            NTSA Motor Vehicle Transfer &amp; Ownership Cost Calculator
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            Under the *Traffic Act (Cap 403)* and eCitizen service tariffs, vehicle transfer costs are stepped based on engine cubic capacity (cc) and statutory motor vehicle purchase tax.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setIsMotorcycle(false)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                !isMotorcycle ? "bg-gold text-kenya-black font-bold" : "bg-bg-elevated border border-border text-text-secondary"
              }`}
            >
              Motor Vehicle (Cars, Pickups, SUVs)
            </button>
            <button
              onClick={() => setIsMotorcycle(true)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isMotorcycle ? "bg-gold text-kenya-black font-bold" : "bg-bg-elevated border border-border text-text-secondary"
              }`}
            >
              Motorcycle / Boda Boda / Tuk-Tuk
            </button>
          </div>

          {!isMotorcycle && (
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-semibold text-text-muted uppercase">
                Select Engine Capacity (cc)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ntsaData.transferFeeBands.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCcIndex(idx)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      selectedCcIndex === idx ? "border-gold bg-gold/10 font-bold" : "border-border bg-bg-elevated/40 text-text-secondary"
                    }`}
                  >
                    <span className="block text-text-primary font-bold">{b.label}</span>
                    <span className="text-[0.6875rem] text-text-muted mt-0.5">
                      Transfer: KES {b.transferFee.toLocaleString()} + Tax: KES {b.purchaseTax.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-text-secondary">
                  <input
                    type="checkbox"
                    checked={needNewPlates}
                    onChange={(e) => setNeedNewPlates(e.target.checked)}
                    className="rounded-sm accent-gold"
                  />
                  <span>Include replacement reflective number plates (+KES 3,050)</span>
                </label>
              </div>
            </div>
          )}

          <div className="rounded-xl border border-gold/40 bg-bg-elevated/60 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-xs font-bold text-text-muted uppercase">Total eCitizen Transfer Payable</span>
              <span className="text-2xl font-black text-gold">KES {calc.total.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
              <div>
                <span className="text-text-muted block text-[0.6875rem]">Transfer Fee:</span>
                <span className="font-bold text-text-primary">KES {calc.transfer.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-text-muted block text-[0.6875rem]">Purchase Tax:</span>
                <span className="font-bold text-text-primary">KES {calc.tax.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-text-muted block text-[0.6875rem]">Online Search (Form C):</span>
                <span className="font-bold text-text-primary">KES {calc.search.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-text-muted block text-[0.6875rem]">eCitizen Platform Fee:</span>
                <span className="font-bold text-text-primary">KES {calc.platform}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
