"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import hospitalData from "@/data/nhif-hospitals.json";

const tool = TOOLS.find((t) => t.slug === "nhif-hospital-finder")!;
const counties = [...new Set(hospitalData.hospitals.map((h) => h.county))].sort();
const types = [...new Set(hospitalData.hospitals.map((h) => h.type))];
const levels = [...new Set(hospitalData.hospitals.map((h) => h.level))].sort();

const faq = [
  { question: "What is NHIF accreditation?", answer: "NHIF accreditation means a hospital or clinic has been approved by the National Hospital Insurance Fund to provide healthcare services to NHIF members. Only accredited facilities can accept NHIF cover directly." },
  { question: "What does hospital level mean in Kenya?", answer: "Kenya's health system has 6 levels: Level 1 (community), Level 2 (dispensary), Level 3 (health centre), Level 4 (sub-county hospital with surgery), Level 5 (county referral with specialists), Level 6 (national referral — KNH, MTRH)." },
  { question: "Can I use NHIF at a private hospital?", answer: "Yes, many private hospitals are NHIF-accredited. However, NHIF cover at private facilities may require a co-payment for services that exceed NHIF rebate limits." },
  { question: "Is NHIF transitioning to SHA?", answer: "Yes, NHIF is transitioning to the Social Health Authority (SHA) under the Social Health Insurance Act 2023. Coverage and accreditation status may change during this transition." },
  { question: "How do I check if my hospital is NHIF-accredited?", answer: "You can check at nhif.or.ke or call the NHIF toll-free line 0800 720 601. This tool also lists major accredited facilities across Kenya." },
];

export default function NHIFHospitalFinderPage() {
  const [search, setSearch] = useState("");
  const [countyFilter, setCountyFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const filtered = useMemo(() => {
    return hospitalData.hospitals.filter((h) => {
      if (countyFilter !== "all" && h.county !== countyFilter) return false;
      if (typeFilter !== "all" && h.type !== typeFilter) return false;
      if (levelFilter !== "all" && h.level !== Number(levelFilter)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return h.name.toLowerCase().includes(q) || h.county.toLowerCase().includes(q) || h.subcounty.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, countyFilter, typeFilter, levelFilter]);

  const levelColor = (l: number) => l >= 6 ? "text-kenya-red-light" : l >= 5 ? "text-gold" : "text-kenya-green-light";

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search & filters */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by hospital name, county, or subcounty..." className="input-field text-sm" id="hospital-search" />
          <div className="flex flex-wrap gap-2">
            <select value={countyFilter} onChange={(e) => setCountyFilter(e.target.value)} className="input-field text-xs w-auto">
              <option value="all">All Counties</option>
              {counties.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="input-field text-xs w-auto">
              <option value="all">All Types</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className="input-field text-xs w-auto">
              <option value="all">All Levels</option>
              {levels.map((l) => <option key={l} value={l}>Level {l}</option>)}
            </select>
          </div>
          <p className="text-xs text-text-muted">{filtered.length} hospitals found</p>
        </div>

        {/* Hospital list */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <table className="data-table text-xs">
            <thead>
              <tr>
                <th>Hospital</th>
                <th>Level</th>
                <th>Type</th>
                <th>County</th>
                <th className="text-center">NHIF</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((h, i) => (
                <tr key={i}>
                  <td className="font-medium text-text-primary">{h.name}</td>
                  <td><span className={`font-bold ${levelColor(h.level)}`}>{h.level}</span></td>
                  <td className="text-text-secondary">{h.type}</td>
                  <td className="text-text-muted">{h.county}</td>
                  <td className="text-center">{h.nhifAccredited ? <span className="text-kenya-green-light">✓</span> : <span className="text-kenya-red-light">✗</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12"><p className="text-4xl mb-3">🔍</p><p className="text-text-secondary text-sm">No hospitals found matching your search</p></div>
        )}

        {/* Hospital levels reference */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Hospital Levels in Kenya</h3>
          <div className="space-y-2">
            {hospitalData.hospitalLevels.map((l) => (
              <div key={l.level} className="flex items-start gap-3 text-xs">
                <span className={`font-bold w-6 text-center ${levelColor(l.level)}`}>{l.level}</span>
                <div><span className="font-medium text-text-primary">{l.name}</span><span className="text-text-muted"> — {l.description}</span></div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Important Notes</h3>
          <ul className="space-y-2">
            {hospitalData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
