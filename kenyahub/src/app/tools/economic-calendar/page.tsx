"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";

import { useState, useMemo, useEffect, useRef } from "react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
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
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) { _scrollMountRef.current = true; return; }
    scrollToTopIfScrolled();
  }, [catFilter, freqFilter]);
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
        <div className="bg-bg-card border border-border rounded-xl p-4 sm:p-5 space-y-2.5">
          <ExpandablePillRow>
            <button
              onClick={() => setCatFilter("all")}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all ${
                catFilter === "all"
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              All Categories
            </button>
            {data.categories.map((c) => {
              const active = catFilter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCatFilter(c.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all ${
                    active
                      ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                      : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
                  }`}
                >
                  {c.id}
                </button>
              );
            })}
          </ExpandablePillRow>
          <ExpandablePillRow>
            <button
              onClick={() => setFreqFilter("all")}
              className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium border transition-all ${
                freqFilter === "all"
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-elevated text-text-muted hover:text-text-primary"
              }`}
            >
              All Frequencies
            </button>
            {frequencies.map((f) => {
              const active = freqFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFreqFilter(f)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium border transition-all ${
                    active
                      ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                      : "border-border bg-bg-elevated text-text-muted hover:text-text-primary"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </ExpandablePillRow>
        </div>
        <div className="space-y-3">
          {filtered.map((event) => {
            const cat = data.categories.find((c) => c.id === event.category);
            return (
              <div key={event.name} className="bg-bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: (cat?.color || "#666") + "20" }}>
                    <DynamicIcon emoji={cat?.icon} className="w-[1em] h-[1em]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-text-primary">{event.name}</h3>
                      <span className="text-[0.6rem] bg-bg-elevated border border-border px-2 py-0.5 rounded text-text-muted flex-shrink-0">{event.frequency}</span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">{event.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-[0.65rem] text-text-muted flex items-center gap-1"><DynamicIcon emoji="🏛️" className="w-3 h-3" /> {event.agency}</span>
                      <span className="text-[0.65rem] text-gold font-medium flex items-center gap-1"><DynamicIcon emoji="📅" className="w-3 h-3" /> {event.typicalDate}</span>
                    </div>
                    {event.url && (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-[0.65rem] text-sky-light hover:underline"><DynamicIcon emoji="🔗" className="w-3 h-3" /> {event.url.replace("https://", "")} →</a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && <div className="text-center py-12"><div className="flex justify-center mb-3"><DynamicIcon emoji="📊" className="w-10 h-10 text-text-muted" /></div><p className="text-text-secondary text-sm">No events match this filter</p></div>}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">About the Data</h3>
          <ul className="space-y-2">{data.notes.map((n, i) => (<li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{n}</span></li>))}</ul>
        </div>
      </div>
    </ToolShell>
  );
}
