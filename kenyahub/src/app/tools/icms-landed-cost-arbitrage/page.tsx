"use client";

import { useState, useMemo } from "react";
import { Ship, ArrowRightLeft } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import utilData from "@/data/kenya-utility-tools-2026.json";

const tool = TOOLS.find((t) => t.slug === "icms-landed-cost-arbitrage")!;

export default function IcmsLandedCostArbitragePage() {
  const [mode, setMode] = useState<"sea" | "air">("sea");
  const [fobKes, setFobKes] = useState("260000");
  const [freightKes, setFreightKes] = useState("55000");
  const [cbmOrKg, setCbmOrKg] = useState("1.5");
  const [dutyRate, setDutyRate] = useState("0.25");
  const [clearingFeeKes, setClearingFeeKes] = useState("35000");
  const [consolidatorRate, setConsolidatorRate] = useState("65000");

  const calc = useMemo(() => {
    const fob = Math.max(0, Number(fobKes.replace(/,/g, "")) || 0);
    const freight = Math.max(0, Number(freightKes.replace(/,/g, "")) || 0);
    const units = Math.max(0.1, Number(cbmOrKg) || 0.1);
    const dutyPct = Math.max(0, Number(dutyRate) || 0);
    const clearing = Math.max(0, Number(clearingFeeKes.replace(/,/g, "")) || 0);
    const consRate = Math.max(0, Number(consolidatorRate.replace(/,/g, "")) || 0);

    const insurance = Math.round((fob + freight) * 0.015);
    const cif = fob + freight + insurance;
    const importDuty = Math.round(cif * dutyPct);
    const vat = Math.round((cif + importDuty) * utilData.icms.vatRate);
    const idf = Math.round(cif * utilData.icms.idfRate);
    const rdl = Math.round(cif * utilData.icms.rdlRate);
    const totalTaxes = importDuty + vat + idf + rdl;
    const independentLanded = fob + freight + insurance + totalTaxes + clearing;

    const consolidatorFreightAndClearance = Math.round(units * consRate);
    const consolidatorLanded = fob + consolidatorFreightAndClearance;
    const savings = independentLanded - consolidatorLanded;

    return {
      fob,
      cif,
      insurance,
      importDuty,
      vat,
      idf,
      rdl,
      totalTaxes,
      clearing,
      independentLanded,
      consolidatorFreightAndClearance,
      consolidatorLanded,
      savings,
    };
  }, [fobKes, freightKes, cbmOrKg, dutyRate, clearingFeeKes, consolidatorRate]);

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-bg-card p-5 sm:p-7 shadow-xs">

          {/* Mode Toggle + HS Presets */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              type="button"
              onClick={() => {
                setMode("sea");
                setCbmOrKg("1.5");
                setConsolidatorRate("65000");
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                mode === "sea" ? "bg-gold text-kenya-black border-gold" : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Sea Freight (KES/CBM)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("air");
                setCbmOrKg("25");
                setConsolidatorRate("1700");
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${
                mode === "air" ? "bg-gold text-kenya-black border-gold" : "bg-bg-elevated text-text-secondary border-border"
              }`}
            >
              Air Cargo (KES/kg)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Supplier FOB Value (KES)</label>
              <input
                type="text"
                value={fobKes ? Number(fobKes).toLocaleString("en-KE") : ""}
                onChange={(e) => setFobKes(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                {mode === "sea" ? "Shipment Volume (CBM)" : "Chargeable Weight (kg)"}
              </label>
              <input
                type="number"
                step="0.1"
                value={cbmOrKg}
                onChange={(e) => setCbmOrKg(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">EAC CET Import Duty Rate</label>
              <select
                value={dutyRate}
                onChange={(e) => setDutyRate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-xs font-semibold text-text-primary"
              >
                {utilData.icms.hsPresets.map((p) => (
                  <option key={p.hs} value={String(p.dutyRate)}>
                    {Math.round(p.dutyRate * 100)}% — {p.label} (HS {p.hs})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Direct Ocean/Air Freight (KES)</label>
              <input
                type="text"
                value={freightKes ? Number(freightKes).toLocaleString("en-KE") : ""}
                onChange={(e) => setFreightKes(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Clearing Agent &amp; Port Fees (KES)</label>
              <input
                type="text"
                value={clearingFeeKes ? Number(clearingFeeKes).toLocaleString("en-KE") : ""}
                onChange={(e) => setClearingFeeKes(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                All-In Consolidator Rate ({mode === "sea" ? "KES/CBM" : "KES/kg"})
              </label>
              <input
                type="text"
                value={consolidatorRate ? Number(consolidatorRate).toLocaleString("en-KE") : ""}
                onChange={(e) => setConsolidatorRate(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-3 py-2 rounded-xl border border-border bg-bg-elevated text-sm font-bold text-text-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-border bg-bg-elevated/40 p-4">
              <span className="text-[0.68rem] font-bold text-text-muted uppercase">Independent KRA iCMS</span>
              <p className="text-2xl font-black text-text-primary mt-1">
                KES {calc.independentLanded.toLocaleString()}
              </p>
              <p className="text-[0.68rem] text-text-muted mt-1">
                Taxes: KES {calc.totalTaxes.toLocaleString()} + Clearing: KES {calc.clearing.toLocaleString()}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
              <span className="text-[0.68rem] font-bold text-emerald-400 uppercase">All-In Consolidator</span>
              <p className="text-2xl font-black text-emerald-400 mt-1">
                KES {calc.consolidatorLanded.toLocaleString()}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1">
                FOB + KES {calc.consolidatorFreightAndClearance.toLocaleString()} shipping/clearance
              </p>
            </div>
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-4">
              <span className="text-[0.68rem] font-bold text-gold uppercase flex items-center gap-1">
                <ArrowRightLeft className="w-3.5 h-3.5" /> Arbitrage Spread
              </span>
              <p className="text-2xl font-black text-gold mt-1">
                KES {Math.abs(calc.savings).toLocaleString()}
              </p>
              <p className="text-[0.68rem] text-text-secondary mt-1">
                {calc.savings >= 0 ? "Cheaper via Consolidator" : "Cheaper via Direct KRA iCMS"}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated/30 p-4 text-xs space-y-1.5">
            <div className="font-bold text-text-primary mb-2">KRA iCMS Cascading Tax Breakdown</div>
            <div className="flex justify-between"><span>Customs Value (CIF = FOB + Freight + 1.5% Ins.)</span><span className="font-semibold">KES {calc.cif.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Import Duty ({Math.round(Number(dutyRate) * 100)}%)</span><span className="font-semibold">KES {calc.importDuty.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>16% VAT (Cascaded on CIF + Import Duty)</span><span className="font-semibold">KES {calc.vat.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>2.5% Import Declaration Fee (IDF)</span><span className="font-semibold">KES {calc.idf.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>2.0% Railway Development Levy (RDL)</span><span className="font-semibold">KES {calc.rdl.toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
