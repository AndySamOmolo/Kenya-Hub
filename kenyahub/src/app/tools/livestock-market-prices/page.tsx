"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/livestock-prices.json";
const tool = TOOLS.find((t) => t.slug === "livestock-market-prices")!;
const faq = [
  { question: "What affects livestock prices in Kenya?", answer: "Prices vary by animal condition/weight, breed, season (prices spike before Eid, Christmas, Easter), drought conditions (supply increase = lower prices), and market location." },
  { question: "Where is the biggest livestock market in Kenya?", answer: "Dagoretti Market in Nairobi is the largest urban livestock market. For pastoral areas, Garissa and Isiolo are major trading hubs." },
  { question: "How do I sell livestock at a market?", answer: "Bring your animals to the market on designated market days. You'll need a livestock movement permit from your local veterinary officer. Buyers negotiate directly with sellers." },
];
export default function LivestockPricesPage() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [marketFilter, setMarketFilter] = useState("all");
  const filtered = useMemo(() => {
    return data.livestock.filter((l) => typeFilter === "all" || l.type === typeFilter).map((l) => ({
      ...l, prices: l.prices.filter((p) => marketFilter === "all" || p.market === marketFilter),
    })).filter((l) => l.prices.length > 0);
  }, [typeFilter, marketFilter]);
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setTypeFilter("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${typeFilter === "all" ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>All Livestock</button>
            {data.livestock.map((l) => (
              <button key={l.type} onClick={() => setTypeFilter(l.type)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${typeFilter === l.type ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>{l.icon} {l.type.split(" (")[0]}</button>
            ))}
          </div>
          <select value={marketFilter} onChange={(e) => setMarketFilter(e.target.value)} className="input-field text-sm" id="market-filter">
            <option value="all">All Markets</option>
            {data.markets.map((m) => (<option key={m.name} value={m.name}>{m.name} — {m.county}</option>))}
          </select>
        </div>
        {/* Markets info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.markets.map((m) => (
            <div key={m.name} className="bg-bg-card border border-border rounded-lg p-3">
              <p className="text-xs font-semibold text-text-primary">{m.name}</p>
              <p className="text-[0.6rem] text-text-muted">{m.county} · {m.type}</p>
              <p className="text-[0.6rem] text-gold mt-1">📅 {m.marketDays}</p>
            </div>
          ))}
        </div>
        {/* Price tables */}
        {filtered.map((livestock) => (
          <div key={livestock.type} className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <span className="text-xl">{livestock.icon}</span>
              <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">{livestock.type}</h3>
              <span className="text-[0.6rem] text-text-muted ml-auto">{livestock.unit}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="border-b border-border">
                  <th className="text-left px-5 py-2 text-text-muted font-medium">Market</th>
                  <th className="text-right px-5 py-2 text-text-muted font-medium">Min Price</th>
                  <th className="text-right px-5 py-2 text-text-muted font-medium">Max Price</th>
                  <th className="text-center px-5 py-2 text-text-muted font-medium">Grade</th>
                </tr></thead>
                <tbody>
                  {livestock.prices.map((p, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="px-5 py-2.5 text-text-primary font-medium">{p.market}</td>
                      <td className="px-5 py-2.5 text-right text-text-secondary">KES {p.minPrice.toLocaleString()}</td>
                      <td className="px-5 py-2.5 text-right font-semibold text-gold">KES {p.maxPrice.toLocaleString()}</td>
                      <td className="px-5 py-2.5 text-center"><span className={`text-[0.6rem] px-2 py-0.5 rounded ${p.grade === "Good" ? "bg-kenya-green/15 text-kenya-green-light" : "bg-bg-elevated text-text-muted"}`}>{p.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
