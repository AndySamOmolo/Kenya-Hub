"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import postalData from "@/data/postal-codes.json";

const tool = TOOLS.find((t) => t.slug === "kenya-postal-codes")!;

const faq = [
  {
    question: "What is the postal code for Nairobi?",
    answer: "Nairobi GPO is 00100, City Square is 00200. However, Nairobi has over 30 different postal codes depending on the specific post office or area (e.g., Westlands is 00800, Karen is 00502).",
  },
  {
    question: "What is a postal code in Kenya?",
    answer: "A postal code (or zip code) is a 5-digit number that identifies a specific post office branch in Kenya. It is used alongside your P.O. Box number to ensure mail is routed correctly.",
  },
  {
    question: "How do I write a Kenyan postal address?",
    answer: "Format it as: [Name], P.O. Box [Box Number] - [Postal Code], [Town/City]. For example: John Doe, P.O. Box 12345 - 00100, Nairobi, Kenya.",
  },
  {
    question: "Is +254 a postal code?",
    answer: "No, +254 is the international country calling code for Kenyan phone numbers. It is not a postal or zip code. Use the 5-digit codes provided in this directory for postal services.",
  },
  {
    question: "What is the ZIP code for Kenya?",
    answer: "Kenya does not use the American 'ZIP code' system. Instead, it uses a 5-digit Postal Code system assigned to specific post offices, not geographical residential areas.",
  },
];

export default function KenyaPostalCodesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCounty, setSelectedCounty] = useState<string>("all");

  const counties = useMemo(() => {
    const c = new Set(postalData.codes.map((item) => item.county));
    return Array.from(c).sort();
  }, []);

  const filteredCodes = useMemo(() => {
    let result = postalData.codes;

    if (selectedCounty !== "all") {
      result = result.filter((item) => item.county === selectedCounty);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.town.toLowerCase().includes(q) ||
          item.code.includes(q) ||
          item.county.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => a.code.localeCompare(b.code));
  }, [searchQuery, selectedCounty]);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search & Filter */}
        <div className="bg-bg-card border border-border rounded-xl p-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="search-input">
              Search Town or Code
            </label>
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. 'Westlands' or '00100'"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="county-select">
              Filter by County
            </label>
            <select
              id="county-select"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="input-field"
            >
              <option value="all">All Counties</option>
              {counties.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs text-text-muted">
          Showing {filteredCodes.length} post office{filteredCodes.length !== 1 ? "s" : ""}
        </p>

        {/* Results Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-24">Postal Code</th>
                <th>Post Office / Town</th>
                <th>County</th>
              </tr>
            </thead>
            <tbody>
              {filteredCodes.map((item, i) => (
                <tr key={i}>
                  <td className="font-bold text-gold font-[family-name:var(--font-outfit)] text-lg">
                    {item.code}
                  </td>
                  <td className="text-text-primary font-medium">{item.town}</td>
                  <td className="text-text-secondary text-sm">{item.county}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredCodes.length === 0 && (
            <div className="p-8 text-center text-text-muted text-sm">
              No postal codes found matching your search.
            </div>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
