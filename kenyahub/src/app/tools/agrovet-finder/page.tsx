"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/agrovets.json";
const tool = TOOLS.find((t) => t.slug === "agrovet-finder")!;
const faq = [
  { question: "How do I know if an agrovet is licensed?", answer: "Licensed agrovets should display a PCPB (Pest Control Products Board) license for agrochemicals and a veterinary permit for animal drugs. Ask to see their license before purchasing." },
  { question: "Can I buy veterinary drugs without a prescription?", answer: "Some veterinary drugs (like dewormers) are available over the counter. However, antibiotics and controlled drugs require a prescription from a licensed veterinary surgeon." },
  { question: "How do I report counterfeit agricultural products?", answer: "Report to PCPB hotline or your county agricultural office. Counterfeit seeds and pesticides are a major problem — always buy from registered dealers." },
];
export default function AgrovetFinderPage() {
  const [search, setSearch] = useState("");
  const [countyFilter, setCountyFilter] = useState("all");
  const counties = useMemo(() => Array.from(new Set(data.agrovets.map((a) => a.county))).sort(), []);
  const filtered = useMemo(() => {
    return data.agrovets.filter((a) => {
      if (countyFilter !== "all" && a.county !== countyFilter) return false;
      if (search.trim()) { const q = search.toLowerCase(); return a.name.toLowerCase().includes(q) || a.county.toLowerCase().includes(q) || a.town.toLowerCase().includes(q) || a.services.some((s) => s.toLowerCase().includes(q)); }
      return true;
    });
  }, [search, countyFilter]);
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search agrovets, counties, services..." className="input-field text-sm" id="agrovet-search" />
          <select value={countyFilter} onChange={(e) => setCountyFilter(e.target.value)} className="input-field text-sm" id="agrovet-county">
            <option value="all">All Counties</option>
            {counties.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <p className="text-xs text-text-muted">{filtered.length} agrovets found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((a, i) => (
            <div key={i} className="bg-bg-card border border-border rounded-xl p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-text-primary">{a.name}</h3>
                {a.licensed && <span className="text-[0.6rem] bg-kenya-green/15 text-kenya-green-light px-2 py-0.5 rounded flex-shrink-0">✓ Licensed</span>}
              </div>
              <p className="text-xs text-text-muted mb-2">📍 {a.town}, {a.county}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {a.services.map((s) => (<span key={s} className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-secondary">{s}</span>))}
              </div>
              <a href={`tel:${a.phone}`} className="text-xs text-gold hover:underline">📞 {a.phone}</a>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><p className="text-4xl mb-3">🔍</p><p className="text-text-secondary text-sm">No agrovets found matching your search</p></div>}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
