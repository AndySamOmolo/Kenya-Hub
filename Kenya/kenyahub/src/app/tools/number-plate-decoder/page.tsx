"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import plateData from "@/data/number-plate-prefixes.json";

const tool = TOOLS.find((t) => t.slug === "number-plate-decoder")!;

const faq = [
  { question: "What do Kenya number plate prefixes mean?", answer: "Kenya plates follow the format KXX 000X (3-letter prefix, 3 digits, 1 letter). The prefix historically indicated the county of registration and approximate year. Since most registrations now happen centrally in Nairobi, newer prefixes mainly indicate the year of registration." },
  { question: "What does GK mean on a Kenya plate?", answer: "GK stands for 'Government of Kenya' and is used on all central government vehicles. These plates are white with blue text." },
  { question: "What is a CD number plate in Kenya?", answer: "CD plates belong to diplomatic corps (foreign embassies and consulates). The number after CD indicates the country. CC plates are for consular corps." },
  { question: "Why are letters I and O missing from Kenya plates?", answer: "The letters I and O are omitted from Kenya registration plate prefixes to avoid confusion with the numbers 1 and 0." },
  { question: "Can I get a personalized number plate in Kenya?", answer: "Yes, NTSA offers personalized/vanity plates for an additional fee. However, these plates cannot be decoded to determine registration county or year." },
];

export default function NumberPlateDecoderPage() {
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    const cleaned = input.toUpperCase().replace(/\s/g, "").replace(/[^A-Z0-9]/g, "");
    if (cleaned.length < 3) return null;

    const prefix = cleaned.substring(0, 3);

    // Check special plates first
    for (const sp of plateData.specialPlates) {
      if (cleaned.startsWith(sp.prefix)) {
        return {
          type: "special",
          prefix: sp.prefix,
          plateType: sp.type,
          description: sp.description,
          county: null,
          yearRange: null,
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
        plateType: "Private",
        description: `Registered in ${match.county}, approximately ${match.yearRange}`,
      };
    }

    // Unknown prefix
    if (prefix.startsWith("K")) {
      return {
        type: "unknown",
        prefix,
        county: "Unknown (newer or unrecognized prefix)",
        yearRange: "Unknown",
        plateType: "Private",
        description: "This prefix is not in our database. It may be a very recent registration series.",
      };
    }

    return null;
  }, [input]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Input */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Enter Number Plate
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. KDA 123A or GK 001"
            className="input-field text-2xl font-bold font-[family-name:var(--font-outfit)] uppercase tracking-widest"
            maxLength={10}
            id="plate-input"
          />
          <p className="text-xs text-text-muted mt-2">
            Enter at least the 3-letter prefix (e.g. KDA, KBZ, GK)
          </p>
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
                <p className="text-xs text-text-muted mb-1">County</p>
                <p className="text-sm font-semibold text-text-primary">
                  {result.county || result.plateType}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Registration Year</p>
                <p className="text-sm font-semibold text-text-primary">
                  {result.yearRange || "—"}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Plate Type</p>
                <p className="text-sm font-semibold text-text-primary">
                  {result.plateType}
                </p>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-3">{result.description}</p>
          </div>
        )}

        {/* Plate Types Reference */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Kenya Plate Types
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Color</th>
                <th>Type</th>
                <th>Description</th>
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

        {/* Special Plates */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              Special / Government Plate Prefixes
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Prefix</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {plateData.specialPlates.map((sp, i) => (
                <tr key={i}>
                  <td className="font-bold text-gold">{sp.prefix}</td>
                  <td className="text-text-primary">{sp.type}</td>
                  <td className="text-text-muted text-xs">{sp.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
            Important Notes
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
