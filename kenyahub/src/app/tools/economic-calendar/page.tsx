"use client";
import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import data from "@/data/economic-calendar.json";
const tool = TOOLS.find((t) => t.slug === "economic-calendar")!;
const faq = [
  { question: "When does KNBS release CPI / inflation data?", answer: "KNBS typically releases the monthly CPI (Consumer Price Index) and inflation rate around the 20th of the following month. So January data is published around February 20th." },
  { question: "How often does CBK set interest rates?", answer: "The CBK Monetary Policy Committee (MPC) meets bi-monthly — approximately every 2 months (January, March, May, July, September, November) — to decide the Central Bank Rate (CBR)." },
  { question: "When is the Kenya national budget announced?", answer: "The National Treasury presents the Budget Statement to Parliament on the 2nd Thursday of June each year. The Budget Policy Statement (BPS) is released earlier, around February." },
];
export default function EconomicCalendarPage() {
  const [catFilter, setCatFilter] = useState("all");
  const [freqFilter, setFreqFilter] = useState("all");
  const filtered = useMemo(() => {
    return data.events.filter((e) => {
      if (catFilter !== "all" && e.category !== catFilter) return false;
      if (freqFilter !== "all" && e.frequency !== freqFilter) return false;
      return true;
    });
  }, [catFilter, freqFilter]);
  const frequencies = useMemo(() => Array.from(new Set(data.events.map((e) => e.frequency))), []);
  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCatFilter("all")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${catFilter === "all" ? "bg-gold text-kenya-black" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`}>All Categories</button>
            {data.categories.map((c) => (
              <button key={c.id} onClick={() => setCatFilter(c.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${catFilter === c.id ? "text-white" : "bg-bg-elevated border border-border text-text-secondary hover:text-gold"}`} style={catFilter === c.id ? { backgroundColor: c.color } : {}}>
                {c.icon} {c.id}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFreqFilter("all")} className={`px-2.5 py-1 rounded text-[0.65rem] font-medium transition-all ${freqFilter === "all" ? "bg-bg-elevated border border-gold/50 text-gold" : "bg-bg-elevated border border-border text-text-muted hover:text-gold"}`}>All</button>
            {frequencies.map((f) => (
              <button key={f} onClick={() => setFreqFilter(f)} className={`px-2.5 py-1 rounded text-[0.65rem] font-medium transition-all ${freqFilter === f ? "bg-bg-elevated border border-gold/50 text-gold" : "bg-bg-elevated border border-border text-text-muted hover:text-gold"}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {filtered.map((event) => {
            const cat = data.categories.find((c) => c.id === event.category);
            return (
              <div key={event.name} className="bg-bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: (cat?.color || "#666") + "20" }}>
                    {cat?.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-text-primary">{event.name}</h3>
                      <span className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted flex-shrink-0">{event.frequency}</span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">{event.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-[0.65rem] text-text-muted">🏛️ {event.agency}</span>
                      <span className="text-[0.65rem] text-gold font-medium">📅 {event.typicalDate}</span>
                    </div>
                    {event.url && (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-[0.65rem] text-sky-light hover:underline">🔗 {event.url.replace("https://", "")} →</a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><p className="text-4xl mb-3">📊</p><p className="text-text-secondary text-sm">No events match this filter</p></div>}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
