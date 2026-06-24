"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import stampDutyData from "@/data/stamp-duty-rates.json";

const tool = TOOLS.find((t) => t.slug === "stamp-duty-calculator")!;

function calculateStampDuty(value: number, isUrban: boolean, isFirstTimeBuyer: boolean) {
  if (isFirstTimeBuyer) return 0;
  const rate = isUrban ? stampDutyData.stampDuty.urban : stampDutyData.stampDuty.rural;
  return Math.round(value * (rate / 100));
}

function calculateConveyancingFees(value: number) {
  let totalFee = 0;
  let breakdown: { band: string; amount: number }[] = [];
  let remaining = value;

  for (const band of stampDutyData.conveyancingFees) {
    if (remaining <= 0) break;
    const bandMax = band.max ?? Infinity;
    const bandMin = band.min;
    const taxableInBand = Math.min(remaining, bandMax - bandMin + 1);

    if (taxableInBand > 0) {
      const fee = Math.round(taxableInBand * (band.rate / 100));
      totalFee += fee;
      breakdown.push({ band: band.label, amount: fee });
    }
    remaining -= taxableInBand;
  }

  const minFee = stampDutyData.conveyancingFees[0]?.minimumFee ?? 0;
  if (totalFee < minFee && value > 0) totalFee = minFee;

  return { total: totalFee, breakdown };
}

const faq = [
  {
    question: "What is stamp duty in Kenya?",
    answer:
      "Stamp duty is a government tax charged on the transfer of property (land or buildings) in Kenya. It is payable to the Kenya Revenue Authority (KRA) within 30 days of executing the transfer instrument.",
  },
  {
    question: "What is the stamp duty rate for urban vs rural property?",
    answer:
      "Stamp duty is 4% of the market value for urban and peri-urban properties, and 2% for rural properties. First-time buyers under the Affordable Housing Fund (AHF) scheme are fully exempt.",
  },
  {
    question: "What are conveyancing fees in Kenya?",
    answer:
      "Conveyancing fees are legal fees paid to an advocate for handling the property transfer process. Rates are set by the Law Society of Kenya (LSK) Advocates Remuneration Order on a progressive scale based on property value.",
  },
  {
    question: "Are first-time home buyers exempt from stamp duty?",
    answer:
      "Yes. Under the Affordable Housing Fund (AHF) scheme introduced in Finance Act 2023, first-time buyers of affordable housing units are exempt from stamp duty entirely.",
  },
  {
    question: "What other costs are involved in property transfer?",
    answer:
      "Beyond stamp duty and conveyancing fees, you may also need to pay: Land Registry registration fee (KES 5,000 flat), search fee (KES 520), consent to transfer (KES 5,000), valuation fee (~0.25% of property value), and county-specific land rates clearance.",
  },
];

export default function StampDutyCalculatorPage() {
  const [propertyValue, setPropertyValue] = useState<number>(5000000);
  const [isUrban, setIsUrban] = useState(true);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);

  const results = useMemo(() => {
    const stampDuty = calculateStampDuty(propertyValue, isUrban, isFirstTimeBuyer);
    const conveyancing = calculateConveyancingFees(propertyValue);
    const registrationFee = stampDutyData.otherCosts.registrationFee;
    const searchFee = stampDutyData.otherCosts.searchFee;
    const consent = stampDutyData.otherCosts.consentToTransfer;
    const total = stampDuty + conveyancing.total + registrationFee + searchFee + consent;

    return {
      propertyValue,
      stampDuty,
      stampDutyRate: isFirstTimeBuyer ? 0 : isUrban ? 4 : 2,
      conveyancing: conveyancing.total,
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
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Property Value (KES)
          </label>
          <input
            type="number"
            value={propertyValue}
            onChange={(e) => setPropertyValue(Math.max(0, Number(e.target.value)))}
            className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]"
            min={0}
            step={100000}
            id="property-value-input"
          />
          <input
            type="range"
            min={0}
            max={50000000}
            step={500000}
            value={propertyValue}
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
                onClick={() => setIsUrban(true)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isUrban
                    ? "bg-gold text-kenya-black"
                    : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"
                }`}
              >
                Urban (4%)
              </button>
              <button
                onClick={() => setIsUrban(false)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
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

        {/* Result */}
        <div className="result-box">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-text-secondary">Total Transfer Cost</span>
            <span className="text-xs text-text-muted">
              {results.percentOfValue}% of property value
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">
            {fmt(results.total)}
          </p>
          <p className="text-xs text-text-muted mt-2">
            For a {fmt(results.propertyValue)} {isUrban ? "urban" : "rural"} property
          </p>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Cost Breakdown
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th className="text-right">Amount</th>
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
                <td className="text-right font-semibold text-text-primary">{fmt(results.stampDuty)}</td>
              </tr>
              <tr>
                <td className="text-text-primary">LSK Conveyancing Fees</td>
                <td className="text-right font-semibold text-text-primary">{fmt(results.conveyancing)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">Land Registry Registration</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.registrationFee)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">Search Fee</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.searchFee)}</td>
              </tr>
              <tr>
                <td className="text-text-muted pl-8 text-xs">Consent to Transfer</td>
                <td className="text-right text-text-muted text-xs">{fmt(results.consent)}</td>
              </tr>
              <tr className="border-t-2 border-border bg-kenya-green/10">
                <td className="font-bold text-kenya-green-light text-base">Total</td>
                <td className="text-right font-bold text-kenya-green-light text-base">
                  {fmt(results.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Important Notes
          </h3>
          <ul className="space-y-2">
            {stampDutyData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
