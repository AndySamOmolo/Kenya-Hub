"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import plateData from "@/data/number-plate-prefixes.json";

const tool = TOOLS.find((t) => t.slug === "number-plate-decoder")!;

const REVERSED_PREFIXES = [...plateData.prefixes].reverse();

export default function NumberPlateDecoderPage() {
  const [input, setInput] = useState("KDU 450A");
  const [showAllPrefixes, setShowAllPrefixes] = useState(false);

  const result = (() => {
    const trimmed = input.trim().toUpperCase().replace(/\s+/g, " ");
    const cleaned = trimmed.replace(/\s/g, "").replace(/[^A-Z0-9]/g, "");
    if (cleaned.length < 2) return null;

    // Diplomatic & UN plates (e.g. 29 CD 1K, 45 UN 12K, 12 CC 4K) (F-011)
    const dipMatch =
      trimmed.match(/^(\d+)\s+(CD|CC|UN)\s+(\d+[A-Z]?)$/) ||
      cleaned.match(/^(\d{1,3})(CD|CC|UN)(\d+[A-Z]?)$/);
    if (dipMatch) {
      const [, missionCode, dipType] = dipMatch;
      const classification =
        dipType === "CD"
          ? "Diplomatic Corps"
          : dipType === "CC"
          ? "Consular Corps"
          : "United Nations Agency";
      return {
        type: "diplomatic" as const,
        prefix: `${missionCode} ${dipType}`,
        county: `Mission #${missionCode}`,
        plateType: classification,
        yearRange: "Diplomatic Registry (MFA / NTSA)",
        description:
          dipType === "UN"
            ? `Accredited United Nations mission vehicle (Mission #${missionCode}) in Kenya — white lettering on red/blue diplomatic plate.`
            : `Accredited foreign embassy, High Commission, or consular mission vehicle (Mission #${missionCode}) in Kenya — white lettering on red diplomatic plate.`,
      };
    }

    const prefix = cleaned.substring(0, 3);

    // Check special plates first (strict County Govt regex so civilian KCG is never misclassified)
    const isCountyGovt = /^(0?[1-9]|[1-3]\d|4[0-7])CG/.test(cleaned);
    for (const sp of plateData.specialPlates) {
      const matchesSpecial =
        sp.prefix === "CG"
          ? isCountyGovt
          : sp.prefix === "EV"
          ? cleaned.startsWith("EVA") || cleaned.startsWith("EMAA") || cleaned.startsWith("EV")
          : cleaned.startsWith(sp.prefix);
      if (matchesSpecial) {
        const isEv = sp.prefix === "EV" || cleaned.startsWith("EVA") || cleaned.startsWith("EMAA");
        return {
          type: isEv ? ("ev" as const) : ("special" as const),
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
        type: "regular" as const,
        prefix: match.prefix,
        county: match.county,
        yearRange: match.yearRange,
        plateType: "Private / Civilian Motor Vehicle",
        description: `Registered under NTSA series ${match.prefix} (${match.county}), issued approximately in ${match.yearRange}.`,
      };
    }

    // Unknown K-series prefix
    if (prefix.startsWith("K")) {
      return {
        type: "unknown" as const,
        prefix,
        county: "Nairobi (Centralized NTSA TIMS Registry)",
        yearRange: "Recent / Custom Series",
        plateType: "Private / Civilian Motor Vehicle",
        description: "This K-series prefix is either a newly released NTSA registration block or a custom series.",
      };
    }

    return null;
  })();

  const formattedPlate = input.trim().toUpperCase() || result?.prefix || "";

  return (
    <>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-5 sm:p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="plate-input">
            Enter Kenyan Vehicle Number Plate
          </label>
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. KDU 450A, GK B412, 29 CD 1K..."
              className="input-field text-xl sm:text-2xl font-bold font-[family-name:var(--font-outfit)] uppercase tracking-widest pr-11! border border-border dark:border-white/15"
              style={{ paddingRight: "2.75rem" }}
              maxLength={14}
              id="plate-input"
            />
            {input && (
              <button
                type="button"
                onClick={() => setInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 shrink-0 rounded-full bg-bg-card border border-border hover:border-gold hover:bg-gold/15 hover:text-gold active:scale-90 flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Clear number plate"
              >
                <X className="w-3.5 h-3.5 text-text-muted hover:text-gold shrink-0" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["KDU 450A", "KDA 210M", "KCA 880J", "KBA 105C", "GK B412", "29 CD 1K", "KMFJ 320L"].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setInput(sample)}
                className="px-3 py-2 min-h-[36px] rounded-lg text-xs font-mono bg-bg-elevated border border-border text-text-secondary hover:border-gold hover:text-gold transition-colors cursor-pointer"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        <div role="status" aria-live="polite" aria-atomic="true">
          {result && (
            <div className="result-box">
              {/* Authentic Kenyan Visual Plate Preview (F-042) */}
              {result.type === "regular" || result.type === "unknown" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <div className="rounded-lg p-3.5 text-center bg-white text-neutral-950 border-2 border-neutral-900 shadow-xs">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-neutral-500 mb-0.5">
                      Front Plate (White)
                    </span>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] font-[family-name:var(--font-outfit)]">
                      {formattedPlate}
                    </p>
                  </div>
                  <div className="rounded-lg p-3.5 text-center bg-[#F5C518] text-neutral-950 border-2 border-neutral-900 shadow-xs">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-neutral-800/75 mb-0.5">
                      Rear Plate (Yellow)
                    </span>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] font-[family-name:var(--font-outfit)]">
                      {formattedPlate}
                    </p>
                  </div>
                </div>
              ) : result.type === "diplomatic" ? (
                <div className="rounded-lg p-4 mb-5 text-center bg-[#B91C1C] text-white border-2 border-white/80 shadow-xs">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-white/80 mb-0.5">
                    Diplomatic / Mission Plate (Red)
                  </span>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] font-[family-name:var(--font-outfit)]">
                    {formattedPlate}
                  </p>
                </div>
              ) : result.type === "ev" ? (
                <div className="rounded-lg p-4 mb-5 text-center bg-[#15803D] text-white border-2 border-white/80 shadow-xs">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-white/80 mb-0.5">
                    Electric Vehicle Plate (Green)
                  </span>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] font-[family-name:var(--font-outfit)]">
                    {formattedPlate}
                  </p>
                </div>
              ) : (
                <div className="rounded-lg p-4 mb-5 text-center bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] shadow-xs">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A8A]/70 mb-0.5">
                    Official / Government Plate
                  </span>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] font-[family-name:var(--font-outfit)]">
                    {formattedPlate}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-text-muted mb-1">Registration Origin</p>
                  <p className="text-sm font-semibold text-text-primary">
                    {result.county}
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
        </div>

        {/* Chronological Series Reference Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              NTSA Registration Series Timeline (KAA to KDU)
            </h2>
          </div>
          <div className="overflow-x-auto max-h-80">
            <table className="data-table text-xs">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">Series Prefix</th>
                  <th className="whitespace-nowrap">Year Issued</th>
                  <th>Registry / Origin</th>
                </tr>
              </thead>
              <tbody>
                {(showAllPrefixes ? REVERSED_PREFIXES : REVERSED_PREFIXES.slice(0, 20)).map((p) => (
                  <tr key={p.prefix}>
                    <td className="font-mono font-bold text-gold whitespace-nowrap">{p.prefix}</td>
                    <td className="text-text-primary font-medium whitespace-nowrap tabular-nums">{p.yearRange}</td>
                    <td className="text-text-secondary">{p.county}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {REVERSED_PREFIXES.length > 20 && (
            <div className="px-5 py-2.5 border-t border-border bg-bg-elevated/50 flex items-center justify-between text-xs">
              <span className="text-text-muted">
                Showing {showAllPrefixes ? REVERSED_PREFIXES.length : 20} of {REVERSED_PREFIXES.length} series
              </span>
              <button
                type="button"
                onClick={() => setShowAllPrefixes((v) => !v)}
                className="font-semibold text-gold hover:text-gold-light transition-colors cursor-pointer"
              >
                {showAllPrefixes ? "Show latest 20" : `Show all ${REVERSED_PREFIXES.length}`}
              </button>
            </div>
          )}
        </div>

        {/* Plate Types Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Kenya Vehicle Plate Color &amp; Category Codes
            </h2>
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
            <h2 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Special, Diplomatic &amp; Government Plate Prefixes
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">Prefix</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {plateData.specialPlates.map((sp, i) => (
                  <tr key={i}>
                    <td className="font-bold text-gold font-mono whitespace-nowrap">{sp.prefix}</td>
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
          <h2 className="text-sm font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
            Important NTSA Registration Notes
          </h2>
          <ul className="space-y-1">
            {plateData.notes.map((note, i) => (
              <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                <span className="text-gold">•</span> {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
