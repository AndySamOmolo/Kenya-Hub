"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import trademarkData from "@/data/trademark-fees.json";

const tool = TOOLS.find((t) => t.slug === "trademark-cost-kenya")!;
type IPType = "trademark" | "patent" | "utilityModel" | "industrialDesign" | "copyright";

const faq = [
  { question: "How much does it cost to register a trademark in Kenya?", answer: "The total KIPI fees for registering a trademark in one class are approximately KES 22,450. This includes search (KES 1,000), application (KES 3,850), examination (KES 5,500), Gazette publication (KES 3,300), registration (KES 7,700), and certificate (KES 1,100). Attorney fees are separate." },
  { question: "How long does trademark registration take in Kenya?", answer: "Trademark registration typically takes 12–18 months from application to certificate issuance. This includes the 60-day opposition period after Gazette publication." },
  { question: "What are trademark classes?", answer: "The Nice Classification divides goods and services into 45 classes (34 goods, 11 services). You need to register in each class relevant to your business. Each additional class costs KES 3,080 on top of the base application fee." },
  { question: "What is the difference between a patent and a utility model?", answer: "A patent protects novel inventions for 20 years and requires thorough examination (costs ~KES 34,650). A utility model (petty patent) is simpler, faster (6–12 months), cheaper (~KES 13,750), but only lasts 10 years and has a lower inventiveness threshold." },
  { question: "Do I need an IP attorney?", answer: "While not strictly required for Kenyan nationals, using a registered IP agent/attorney is highly recommended. They handle the technical filing process and respond to KIPI queries. Foreign applicants must use a registered Kenyan IP agent." },
];

export default function TrademarkCostKenyaPage() {
  const [selectedType, setSelectedType] = useState<IPType>("trademark");
  const [trademarkClasses, setTrademarkClasses] = useState(1);

  const currentIP = trademarkData.fees[selectedType] as {
    title: string;
    steps: { item: string; amount: number; note: string | null }[];
    totalOneClass?: number;
    totalCost?: number;
    processingTime: string;
    validityPeriod: string;
    renewalFee?: number;
    renewalPeriod?: string;
    annualMaintenance?: number;
    description?: string;
  };

  const totalCost = useMemo(() => {
    if (selectedType === "trademark") {
      const base = currentIP.totalOneClass ?? 0;
      const extraClasses = Math.max(0, trademarkClasses - 1) * 3080;
      return base + extraClasses;
    }
    return currentIP.totalCost ?? currentIP.steps.reduce((sum, s) => sum + s.amount, 0);
  }, [selectedType, trademarkClasses, currentIP]);

  const fmt = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

  const ipTypes: { id: IPType; label: string; icon: string }[] = [
    { id: "trademark", label: "Trademark", icon: "™️" },
    { id: "patent", label: "Patent", icon: "📜" },
    { id: "utilityModel", label: "Utility Model", icon: "⚙️" },
    { id: "industrialDesign", label: "Industrial Design", icon: "🎨" },
    { id: "copyright", label: "Copyright", icon: "©️" },
  ];

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* IP type selector */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-3">Type of Intellectual Property</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {ipTypes.map((t) => (
              <button key={t.id} onClick={() => setSelectedType(t.id)} className={`px-3 py-3 rounded-lg text-xs font-medium transition-all flex flex-col items-center gap-1 ${selectedType === t.id ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>
                <span className="text-lg">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trademark class selector */}
        {selectedType === "trademark" && (
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">Number of Trademark Classes</label>
            <input type="number" value={trademarkClasses} onChange={(e) => setTrademarkClasses(Math.max(1, Math.min(45, Number(e.target.value))))} className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)]" min={1} max={45} id="classes-input" />
            <p className="text-xs text-text-muted mt-2">Nice Classification has 45 classes. Each additional class adds KES 3,080.</p>
          </div>
        )}

        {/* Total cost */}
        <div className="result-box">
          <span className="text-sm text-text-secondary block mb-2">{currentIP.title} — Total KIPI Fees</span>
          <p className="text-3xl sm:text-4xl font-extrabold font-[family-name:var(--font-outfit)] text-kenya-green-light">{fmt(totalCost)}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-xs text-text-muted">⏱️ {currentIP.processingTime}</span>
            <span className="text-xs text-text-muted">📅 {currentIP.validityPeriod}</span>
          </div>
        </div>

        {/* Fee breakdown */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">Step-by-Step Fees</h3>
          </div>
          <table className="data-table">
            <thead><tr><th>Step</th><th className="text-right">Fee</th><th>Note</th></tr></thead>
            <tbody>
              {currentIP.steps.map((s, i) => (
                <tr key={i}>
                  <td className="text-text-primary text-sm">{s.item}</td>
                  <td className="text-right font-semibold text-text-primary text-sm">{fmt(s.amount)}</td>
                  <td className="text-text-muted text-xs">{s.note ?? "—"}</td>
                </tr>
              ))}
              {selectedType === "trademark" && trademarkClasses > 1 && (
                <tr><td className="text-text-primary text-sm">Extra classes (×{trademarkClasses - 1})</td><td className="text-right font-semibold text-text-primary text-sm">{fmt((trademarkClasses - 1) * 3080)}</td><td className="text-text-muted text-xs">KES 3,080 per extra class</td></tr>
              )}
              <tr className="border-t-2 border-border bg-kenya-green/10">
                <td className="font-bold text-kenya-green-light">Total</td>
                <td className="text-right font-bold text-kenya-green-light">{fmt(totalCost)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Renewal info */}
        {(currentIP.renewalFee || currentIP.annualMaintenance) && (
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Renewal / Maintenance</h3>
            <p className="text-sm text-text-secondary">
              {currentIP.renewalFee ? `Renewal fee: ${fmt(currentIP.renewalFee)} every ${currentIP.renewalPeriod}` : `Annual maintenance: ${fmt(currentIP.annualMaintenance!)}`}
            </p>
          </div>
        )}

        {/* KIPI info */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">KIPI Contact Information</h3>
          <div className="space-y-2 text-xs text-text-secondary">
            <p>🏢 {trademarkData.kipiInfo.address}</p>
            <p>📞 {trademarkData.kipiInfo.phone}</p>
            <p>📧 {trademarkData.kipiInfo.email}</p>
            <p>🌐 <a href={trademarkData.kipiInfo.website} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{trademarkData.kipiInfo.website}</a></p>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Important Notes</h3>
          <ul className="space-y-2">
            {trademarkData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
