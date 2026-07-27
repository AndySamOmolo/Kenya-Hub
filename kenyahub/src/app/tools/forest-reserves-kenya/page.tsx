"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/forest-reserves.json";
const tool = TOOLS.find((t) => t.slug === "forest-reserves-kenya")!;
const faq = [
  { question: "How many forest reserves are in Kenya?", answer: "Kenya has approximately 1,200 gazetted forest reserves covering about 7.4% of the country's land area. The five major 'water towers' (Mt. Kenya, Aberdares, Mau, Cherangani, Mt. Elgon) are the most significant." },
  { question: "Do I need a permit to hike in Kenyan forests?", answer: "Yes, hiking in gazetted forests requires a Kenya Forest Service (KFS) permit. Fees are KES 250 for citizens, KES 600 for residents, and USD 20 for non-residents per day." },
  { question: "What is Kenya's largest forest?", answer: "The Mau Forest Complex is Kenya's largest indigenous forest at approximately 400,000 hectares. It's a critical water tower — source of 12 rivers including the Mara River." },
];
export default function ForestReservesPage() {
  const [search, setSearch] = useState("");
  const [ecoFilter, setEcoFilter] = useState("all");
  const [hikingOnly, setHikingOnly] = useState(false);
  const filtered = useMemo(() => {
    return data.forests.filter((f) => {
      if (ecoFilter !== "all" && !f.ecosystem.toLowerCase().includes(ecoFilter.toLowerCase())) return false;
      if (hikingOnly && !f.hiking) return false;
      if (search.trim()) { const q = search.toLowerCase(); return f.name.toLowerCase().includes(q) || f.county.toLowerCase().includes(q); }
      return true;
    }).sort((a, b) => b.sizeHa - a.sizeHa);
  }, [search, ecoFilter, hikingOnly]);
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search forests by name or county..." className="input-field text-sm" id="forest-search" />
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setEcoFilter("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${ecoFilter === "all" ? "bg-kenya-green text-white" : "bg-bg-elevated border border-border text-text-secondary hover:text-kenya-green-light"}`}>All Ecosystems</button>
            {data.ecosystemTypes.map((e) => (<button key={e.type} onClick={() => setEcoFilter(e.type)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${ecoFilter === e.type ? "bg-kenya-green text-white" : "bg-bg-elevated border border-border text-text-secondary hover:text-kenya-green-light"}`}>{e.type}</button>))}
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={hikingOnly} onChange={(e) => setHikingOnly(e.target.checked)} className="rounded" />
            <span className="text-xs text-text-secondary">🥾 Show hiking-accessible only</span>
          </label>
        </div>
        <p className="text-xs text-text-muted">{filtered.length} forests · Total area: {filtered.reduce((s, f) => s + f.sizeHa, 0).toLocaleString()} hectares</p>
        <div className="space-y-3">
          {filtered.map((f) => (
            <div key={f.name} className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)]">🌲 {f.name}</h3>
                  <p className="text-xs text-text-muted mt-0.5">📍 {f.county}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted">{f.ecosystem}</span>
                  {f.hiking && <span className="text-[0.6rem] bg-kenya-green/15 text-kenya-green-light px-2 py-0.5 rounded">🥾 Hiking</span>}
                  {f.gazetted && <span className="text-[0.6rem] bg-gold/15 text-gold px-2 py-0.5 rounded">Gazetted</span>}
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{f.biodiversity}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-text-muted">📐 <span className="font-semibold text-text-primary">{f.sizeHa.toLocaleString()} ha</span></span>
                <span className="text-xs text-text-muted">({(f.sizeHa / 100).toFixed(0)} km²)</span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><p className="text-4xl mb-3">🌲</p><p className="text-text-secondary text-sm">No forests found</p></div>}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
