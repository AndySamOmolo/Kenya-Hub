"use client";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/fertilizer-subsidy.json";
const tool = TOOLS.find((t) => t.slug === "fertilizer-subsidy-guide")!;
const faq = [
  { question: "How do I register for subsidized fertilizer in Kenya?", answer: "Register through the eCitizen platform (ecitizen.go.ke) or visit your nearest chief's office. You need a national ID, KRA PIN, and proof of land ownership. Once approved, you receive SMS notifications when fertilizer is available at NCPB depots." },
  { question: "How much cheaper is subsidized fertilizer?", answer: "Subsidized DAP costs approximately KES 2,500 per 50kg bag vs KES 5,500+ at market prices — a saving of over 50%. CAN is KES 1,800 subsidized vs KES 4,000 at market price." },
  { question: "Which fertilizer should I use for maize?", answer: "Use DAP or NPK 23-23-0 at planting (for phosphorus and root development), then top-dress with CAN or Urea when the maize is knee-high (for nitrogen and vegetative growth)." },
];
export default function FertilizerSubsidyGuidePage() {
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Subsidy vs Market Price Comparison */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border"><h2 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">💰 Subsidized vs Market Prices</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-border">
                <th className="text-left px-5 py-2 text-text-muted font-medium">Fertilizer</th>
                <th className="text-left px-5 py-2 text-text-muted font-medium">Formula</th>
                <th className="text-right px-5 py-2 text-text-muted font-medium">Subsidized</th>
                <th className="text-right px-5 py-2 text-text-muted font-medium">Market</th>
                <th className="text-right px-5 py-2 text-text-muted font-medium">You Save</th>
              </tr></thead>
              <tbody>{data.fertilizers.map((f) => {
                const saving = f.marketPrice - f.subsidizedPrice;
                const pct = Math.round((saving / f.marketPrice) * 100);
                return (
                  <tr key={f.name} className="border-b border-border/50 last:border-0">
                    <td className="px-5 py-3"><p className="font-semibold text-text-primary">{f.name}</p><p className="text-[0.6rem] text-text-muted mt-0.5 max-w-[200px]">{f.use}</p></td>
                    <td className="px-5 py-3 text-text-muted font-mono">{f.formula}</td>
                    <td className="px-5 py-3 text-right font-bold text-kenya-green-light">KES {f.subsidizedPrice.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right text-text-muted line-through">KES {f.marketPrice.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right"><span className="text-kenya-green-light font-bold">−{pct}%</span><br /><span className="text-[0.6rem] text-text-muted">KES {saving.toLocaleString()}</span></td>
                  </tr>
                );
              })}</tbody>
            </table>
          </div>
        </div>
        {/* Best crops per fertilizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.fertilizers.map((f) => (
            <div key={f.name} className="bg-bg-card border border-border rounded-xl p-4">
              <h3 className="text-xs font-bold text-text-primary mb-1">{f.name}</h3>
              <p className="text-[0.65rem] text-text-muted mb-2">{f.application}</p>
              <div className="flex flex-wrap gap-1">
                {f.bestFor.map((c) => (<span key={c} className="text-[0.6rem] bg-kenya-green/10 text-kenya-green-light px-2 py-0.5 rounded">{c}</span>))}
              </div>
            </div>
          ))}
        </div>
        {/* Registration steps */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-bold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">📋 How to Register for Subsidized Fertilizer</h2>
          <ol className="space-y-3">
            {data.subsidyProgram.howToRegister.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-text-secondary">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold/15 text-gold text-[0.6rem] font-bold flex-shrink-0">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        {/* Eligibility */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">✅ Eligibility Requirements</h2>
          <ul className="space-y-2">{data.subsidyProgram.eligibility.map((e, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-kenya-green-light mt-0.5">✓</span>{e}</li>))}</ul>
        </div>
        {/* Collection points */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">📍 NCPB Collection Points</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {data.collectionPoints.map((cp) => (
              <div key={cp.county} className="bg-bg-elevated rounded-lg p-2 text-center">
                <p className="text-xs font-semibold text-text-primary">{cp.county}</p>
                <p className="text-[0.6rem] text-text-muted">{cp.location}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
