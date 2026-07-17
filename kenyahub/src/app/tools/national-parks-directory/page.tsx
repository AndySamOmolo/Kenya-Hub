"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import parksData from "@/data/national-parks.json";

const tool = TOOLS.find((t) => t.slug === "national-parks-directory")!;
const regions = [...new Set(parksData.parks.map((p) => p.region))];
const types = [...new Set(parksData.parks.map((p) => p.type))];

const faq = [
  { question: "How much does it cost to enter a national park in Kenya?", answer: "Entry fees vary by park and visitor category. Kenyan citizens pay KES 200–500/day, residents KES 400–2,500/day, and non-residents USD 15–90/day. Children pay approximately half. Premium parks like Maasai Mara and Amboseli charge more." },
  { question: "What is the difference between a national park and a national reserve?", answer: "National parks are managed by Kenya Wildlife Service (KWS) with no human settlement or grazing allowed. National reserves are managed by county governments and may allow some pastoral activities." },
  { question: "What is the Big Five?", answer: "The Big Five are: Lion, Leopard, Elephant, Rhinoceros, and Cape Buffalo. The best parks to see all five include Maasai Mara, Lake Nakuru, and Ol Pejeta Conservancy." },
  { question: "When is the best time for safari in Kenya?", answer: "The dry season (June–October) is best for wildlife viewing as animals gather around water sources. The Great Wildebeest Migration crosses into Maasai Mara from July–October. However, the green season (November–May) offers lower rates and fewer crowds." },
  { question: "How do I book a KWS park visit?", answer: "You can book through the eCitizen portal (ecitizen.go.ke) or pay at the gate. For popular parks, advance booking is recommended, especially during peak season (July–October and December–January)." },
];

export default function NationalParksDirectoryPage() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = useMemo(() => {
    return parksData.parks.filter((p) => {
      if (regionFilter !== "all" && p.region !== regionFilter) return false;
      if (typeFilter !== "all" && p.type !== typeFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.county.toLowerCase().includes(q) || p.wildlife.some((w) => w.toLowerCase().includes(q));
      }
      return true;
    });
  }, [search, regionFilter, typeFilter]);

  const fmt = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search & filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search parks, counties, or wildlife..." className="input-field text-sm" id="parks-search" />
          <div className="flex flex-wrap gap-2">
            <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} className="input-field text-xs w-auto">
              <option value="all">All Regions</option>
              {regions.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input-field text-xs w-auto">
              <option value="all">All Types</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <p className="text-xs text-text-muted">{filtered.length} parks found</p>
        </div>

        {/* Park cards */}
        <div className="space-y-4">
          {filtered.map((park) => (
            <div key={park.name} className="bg-bg-card border border-border rounded-xl p-5 hover:border-gold/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">{park.name}</h3>
                  <p className="text-xs text-text-muted">{park.type} • {park.county} County • {park.sizeKm2.toLocaleString()} km²</p>
                </div>
                <span className="badge badge-transport text-[0.6rem]">{park.region}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {park.wildlife.slice(0, 6).map((w) => (
                  <span key={w} className="text-[0.6rem] bg-bg-elevated border border-border rounded-full px-2 py-0.5 text-text-muted">{w}</span>
                ))}
                {park.wildlife.length > 6 && <span className="text-[0.6rem] text-text-muted">+{park.wildlife.length - 6} more</span>}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div><p className="text-[0.6rem] text-text-muted">Citizen (Adult)</p><p className="text-sm font-semibold text-kenya-green-light">{fmt(park.feeCitizenAdult)}</p></div>
                <div><p className="text-[0.6rem] text-text-muted">Resident (Adult)</p><p className="text-sm font-semibold text-gold">{fmt(park.feeResidentAdult)}</p></div>
                <div><p className="text-[0.6rem] text-text-muted">Non-Resident</p><p className="text-sm font-semibold text-text-primary">${park.feeNonResidentAdult}</p></div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted">🗓️ Best: {park.bestSeason}</span>
                <span className="text-text-muted">🏠 {park.accommodation}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12"><p className="text-4xl mb-3">🔍</p><p className="text-text-secondary text-sm">No parks found matching your search</p></div>
        )}

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Important Notes</h3>
          <ul className="space-y-2">
            {parksData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
