"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import plateData from "@/data/number-plate-prefixes.json";

const tool = TOOLS.find((t) => t.slug === "number-plate-decoder")!;

const faq = [
  { question: "What do Kenya number plate prefixes mean?", answer: "Standard civilian Kenyan number plates follow the format KXX 000X (3-letter series prefix, 3 digits from 001 to 999, and 1 suffix letter excluding I and O). Historically, the prefix indicated the regional registrar office, while modern KBA–KDU series reflect chronological registration under the centralized NTSA TIMS registry." },
  { question: "What does GK mean on a Kenya plate?", answer: "GK stands for Government of Kenya and is issued to national government ministry, police, and state department vehicles." },
  { question: "What is a CD or CC number plate in Kenya?", answer: "CD (Corps Diplomatique) red plates are issued to accredited foreign embassies, High Commissions, and UN agencies in Kenya, where the digits before CD identify the specific country or mission (e.g., 29 CD for the USA, 45 CD for the UN). CC denotes Consular Corps." },
  { question: "Why are letters I and O omitted from Kenyan number plates?", answer: "NTSA omits the letters I and O from the 3-letter series and terminal suffix to prevent visual confusion with the numerals 1 and 0 during law enforcement and automated camera recognition." },
  { question: "What are the green number plates in Kenya?", answer: "Green background plates (such as EVA or EV series) are designated by NTSA for 100% electric vehicles (EVs) to promote green mobility and identify zero-emission vehicles." },
];

export default function NumberPlateDecoderPage() {
  const [input, setInput] = useState("KDU 450A");

  const result = useMemo(() => {
    const cleaned = input.toUpperCase().replace(/\s/g, "").replace(/[^A-Z0-9]/g, "");
    if (cleaned.length < 2) return null;

    const prefix = cleaned.substring(0, 3);

    // Check special plates first
    for (const sp of plateData.specialPlates) {
      if (cleaned.startsWith(sp.prefix) || (sp.prefix === "CG" && cleaned.includes("CG"))) {
        return {
          type: "special",
          prefix: sp.prefix,
          plateType: sp.type,
          description: sp.description,
          county: "National / Institutional Registry",
          yearRange: "Active Official Series",
        };
      }
    }

    // Check regular prefixes
    const match = plateData.prefixes.find((p) => p.prefix === prefix);
    if (match) {
      return {
        type: "regular",
        prefix: match.prefix,
        county: match.county,
        yearRange: match.yearRange,
        plateType: "Private / Civilian Motor Vehicle",
        description: `Registered under NTSA series ${match.prefix} (${match.county}), issued approximately in ${match.yearRange}.`,
      };
    }

    // Unknown prefix
    if (prefix.startsWith("K")) {
      return {
        type: "unknown",
        prefix,
        county: "Nairobi (Centralized NTSA TIMS Registry)",
        yearRange: "Recent / Custom Series",
        plateType: "Private / Civilian Motor Vehicle",
        description: "This K-series prefix is either a newly released NTSA registration block or a custom series.",
      };
    }

    return null;
  }, [input]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="plate-input">
            Enter Kenyan Vehicle Number Plate
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. KDU 450A, KDA 123B, GK A001, 47 CG 001A"
            className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] uppercase tracking-widest"
            maxLength={12}
            id="plate-input"
          />
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["KDU 450A", "KDA 210M", "KCA 880J", "KBA 105C", "GK B412", "29 CD 1K", "KMFJ 320L"].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setInput(sample)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-bg-elevated border border-border text-text-secondary hover:border-gold hover:text-gold transition-colors cursor-pointer"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="result-box">
            {/* Visual Plate */}
            <div className="bg-kenya-black rounded-lg p-4 mb-4 text-center border-2 border-gray-600">
              <p className="text-3xl font-bold tracking-[0.3em] text-white font-[family-name:var(--font-outfit)]">
                {input.toUpperCase() || result.prefix}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-text-muted mb-1">Registration Origin</p>
                <p className="text-sm font-semibold text-text-primary">
                  {result.county || result.plateType}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Estimated Registration Year</p>
                <p className="text-sm font-semibold text-gold">
                  {result.yearRange || "—"}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Classification</p>
                <p className="text-sm font-semibold text-kenya-green-light">
                  {result.plateType}
                </p>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-3">{result.description}</p>
          </div>
        )}

        {/* Chronological Series Reference Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              NTSA Registration Series Timeline (KAA to KDU)
            </h3>
          </div>
          <div className="overflow-x-auto max-h-80">
            <table className="data-table text-xs">
              <thead>
                <tr>
                  <th>Series Prefix</th>
                  <th>Year Issued</th>
                  <th>Registry / Origin</th>
                </tr>
              </thead>
              <tbody>
                {[...plateData.prefixes].reverse().map((p) => (
                  <tr key={p.prefix}>
                    <td className="font-mono font-bold text-gold">{p.prefix}</td>
                    <td className="text-text-primary font-medium">{p.yearRange}</td>
                    <td className="text-text-secondary">{p.county}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Plate Types Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Kenya Vehicle Plate Color &amp; Category Codes
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Plate Color</th>
                  <th>Vehicle Category</th>
                  <th>Statutory Usage</th>
                </tr>
              </thead>
              <tbody>
                {plateData.plateTypes.map((pt, i) => (
                  <tr key={i}>
                    <td className="text-text-secondary text-xs">{pt.color}</td>
                    <td className="font-medium text-text-primary">{pt.type}</td>
                    <td className="text-text-muted text-xs">{pt.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Special Plates */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Special, Diplomatic &amp; Government Plate Prefixes
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Prefix</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {plateData.specialPlates.map((sp, i) => (
                  <tr key={i}>
                    <td className="font-bold text-gold font-mono">{sp.prefix}</td>
                    <td className="text-text-primary font-medium">{sp.type}</td>
                    <td className="text-text-muted text-xs">{sp.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
            Important NTSA Registration Notes
          </h3>
          <ul className="space-y-1">
            {plateData.notes.map((note, i) => (
              <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                <span className="text-gold">•</span> {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
