"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import stampDutyData from "@/data/stamp-duty-rates.json";
import realEstateAgentsData from "@/data/real-estate-agents.json";

const tool = TOOLS.find((t) => t.slug === "stamp-duty-calculator")!;

function calculateStampDuty(value: number, isUrban: boolean, isFirstTimeBuyer: boolean) {
  if (isFirstTimeBuyer) return 0;
  const rate = isUrban ? stampDutyData.stampDuty.urban : stampDutyData.stampDuty.rural;
  return Math.round(value * (rate / 100));
}

function calculateConveyancingFees(value: number) {
  let totalFee = 0;
  const breakdown: { band: string; amount: number }[] = [];
  let remaining = value;

  for (const band of stampDutyData.conveyancingFees) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandMin = band.min;
    const bandWidth = bandMin === 0 ? bandMax : bandMax - bandMin + 1;
    const taxableInBand = Math.min(remaining, bandWidth);

    if (taxableInBand > 0) {
      const fee = Math.round(taxableInBand * (band.rate / 100));
      totalFee += fee;
      breakdown.push({ band: band.label, amount: fee });
    }
    remaining -= taxableInBand;
  }

  const minFee = (stampDutyData.conveyancingFees[0] as any)?.minFee ?? 35000;
  if (totalFee < minFee && value > 0) totalFee = minFee;

  const vatRate = stampDutyData.legalFeeVatPercent ?? 16;
  const vat = Math.round(totalFee * (vatRate / 100));

  return { baseFee: totalFee, vat, totalWithVat: totalFee + vat, breakdown };
}

export default function StampDutyCalculatorPage() {
  const [propertyValue, setPropertyValue] = useState<number>(5000000);
  const [isUrban, setIsUrban] = useState(true);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);

  const results = useMemo(() => {
    const stampDuty = calculateStampDuty(propertyValue, isUrban, isFirstTimeBuyer);
    const conveyancing = calculateConveyancingFees(propertyValue);
    const registrationFee = propertyValue > 0 ? stampDutyData.otherCosts.registrationFee : 0;
    const searchFee = propertyValue > 0 ? stampDutyData.otherCosts.searchFee : 0;
    const consent = propertyValue > 0 ? stampDutyData.otherCosts.consentToTransfer : 0;
    const total =
      propertyValue > 0
        ? stampDuty + conveyancing.totalWithVat + registrationFee + searchFee + consent
        : 0;

    return {
      propertyValue,
      stampDuty,
      stampDutyRate: isFirstTimeBuyer ? 0 : isUrban ? stampDutyData.stampDuty.urban : stampDutyData.stampDuty.rural,
      conveyancingBase: conveyancing.baseFee,
      conveyancingVat: conveyancing.vat,
      conveyancingTotal: conveyancing.totalWithVat,
      conveyancingBreakdown: conveyancing.breakdown,
      registrationFee,
      searchFee,
      consent,
      total,
      percentOfValue: propertyValue > 0 ? Math.round((total / propertyValue) * 10000) / 100 : 0,
    };
  }, [propertyValue, isUrban, isFirstTimeBuyer]);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6">
          <label
            htmlFor="property-value-input"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Property Value (KES)
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              value={propertyValue === 0 ? "" : propertyValue}
              onChange={(e) => {
                const raw = e.target.value.replace(/^0+(?=\d)/, "");
                setPropertyValue(raw === "" ? 0 : Math.max(0, Number(raw)));
              }}
              placeholder="e.g. 5000000"
              className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] pr-11! border border-border dark:border-white/15 tabular-nums"
              style={{ paddingRight: "2.75rem" }}
              min={0}
              step={100000}
              id="property-value-input"
            />
            {propertyValue > 0 && (
              <button
                type="button"
                onClick={() => setPropertyValue(0)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Clear property value"
              >
                <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
              </button>
            )}
          </div>
          <input
            type="range"
            aria-label="Property value slider"
            min={0}
            max={50000000}
            step={500000}
            value={Math.min(50000000, propertyValue)}
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            className="w-full mt-3 accent-gold"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>KES 0</span>
            <span>KES 50M</span>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-text-muted mb-3">Property Location</p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-pressed={isUrban}
                onClick={() => setIsUrban(true)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isUrban
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                Urban (4%)
              </button>
              <button
                type="button"
                aria-pressed={!isUrban}
                onClick={() => setIsUrban(false)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  !isUrban
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                Rural (2%)
              </button>
            </div>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-text-muted mb-3">Buyer Type</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isFirstTimeBuyer}
                onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-text-primary">
                First-time buyer (AHF exempt)
              </span>
            </label>
          </div>
        </div>

        {/* Live Result Region */}
        <div role="status" aria-live="polite" aria-atomic="true" className="space-y-6">
          <div className="result-box">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-sm text-text-secondary">Total Transfer Cost (incl. ARO 2014 Legal Fees &amp; 16% VAT)</span>
              <span className="text-xs text-text-muted tabular-nums">
                {results.percentOfValue}% of property value
              </span>
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light tabular-nums">
              {fmt(results.total)}
            </p>
            <p className="text-xs text-text-muted mt-2 tabular-nums">
              For a {fmt(results.propertyValue)} {isUrban ? "urban" : "rural"} property (Legal Fees incl. 16% VAT: {fmt(results.conveyancingTotal)})
            </p>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated">
              <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                Cost Breakdown
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th className="text-right whitespace-nowrap">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-text-primary">
                      Stamp Duty ({results.stampDutyRate}%)
                      {isFirstTimeBuyer && (
                        <span className="ml-2 text-xs text-kenya-green-light">AHF EXEMPT</span>
                      )}
                    </td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">{fmt(results.stampDuty)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-primary">LSK Conveyancing Legal Fees (ARO 2014 Scale 1)</td>
                    <td className="text-right font-semibold text-text-primary whitespace-nowrap tabular-nums">{fmt(results.conveyancingBase)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-secondary pl-6 text-xs">16% VAT on Legal Fees</td>
                    <td className="text-right text-text-secondary text-xs whitespace-nowrap tabular-nums">{fmt(results.conveyancingVat)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-primary font-medium pl-6 text-xs">Subtotal: Conveyancing + 16% VAT</td>
                    <td className="text-right font-semibold text-gold text-xs whitespace-nowrap tabular-nums">{fmt(results.conveyancingTotal)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-muted pl-6 text-xs">Land Registry Registration</td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">{fmt(results.registrationFee)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-muted pl-6 text-xs">Official Title Search Fee</td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">{fmt(results.searchFee)}</td>
                  </tr>
                  <tr>
                    <td className="text-text-muted pl-6 text-xs">Consent to Transfer</td>
                    <td className="text-right text-text-muted text-xs whitespace-nowrap tabular-nums">{fmt(results.consent)}</td>
                  </tr>
                  <tr className="border-t-2 border-border bg-kenya-green/10">
                    <td className="font-bold text-kenya-green-light text-base">Total Transfer Cost</td>
                    <td className="text-right font-bold text-kenya-green-light text-base whitespace-nowrap tabular-nums">
                      {fmt(results.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h2>
          <ul className="space-y-2">
            {stampDutyData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* EARB Cap 533 Estate Agents Verification & Buyer Red Flags */}
        <div className="bg-bg-card border border-border rounded-2xl p-5 space-y-3 mt-6">
          <h2 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
            {realEstateAgentsData.verificationGuide.title} ({realEstateAgentsData.source})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <p className="font-bold text-gold">Property Buyer Verification Steps</p>
              {realEstateAgentsData.verificationGuide.steps.map((st) => (
                <p key={st.step} className="text-text-secondary">
                  • <strong className="text-text-primary">{st.title}:</strong> {st.description}
                </p>
              ))}
            </div>
            <div className="space-y-1.5">
              <p className="font-bold text-kenya-red-light">Conveyancing &amp; Agency Red Flags</p>
              {realEstateAgentsData.redFlags.slice(0, 4).map((rf, idx) => (
                <p key={idx} className="text-text-secondary">• <strong className="text-text-primary">{rf.flag}:</strong> {rf.risk}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
