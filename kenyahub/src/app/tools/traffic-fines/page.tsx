"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import finesData from "@/data/traffic-fines.json";

const tool = TOOLS.find((t) => t.slug === "traffic-fines")!;

const faq = [
  {
    question: "What is the fine for speeding in Kenya?",
    answer: "Speeding fines range from KES 5,000 for exceeding the limit by up to 10 km/h, to KES 50,000 for exceeding by over 40 km/h. Higher speed offences also carry more demerit points and may result in arrest.",
  },
  {
    question: "What is the NTSA demerit points system?",
    answer: "Kenya uses a 24-point demerit system over a 3-year period. Points 1–12 result in a warning, 13–18 require a mandatory road safety course, 19–23 lead to license suspension for 6 months, and 24+ points result in license revocation.",
  },
  {
    question: "What is the fine for driving without insurance in Kenya?",
    answer: "Driving without valid motor vehicle insurance carries a fine of up to KES 50,000 and is an arrestable offence. You can also face imprisonment. Insurance is a legal requirement under Cap 405.",
  },
  {
    question: "How do I pay NTSA traffic fines?",
    answer: "You can pay via: cash bond at the police station, M-Pesa paybill (NTSA service), eCitizen portal (ntsa.go.ke), or through court-imposed fine after a hearing.",
  },
  {
    question: "What is the fine for drunk driving in Kenya?",
    answer: "First offence DUI carries a fine of KES 100,000 plus license suspension for 1 year or imprisonment up to 2 years. Repeat offenders face KES 200,000 fine plus license revocation and up to 3 years imprisonment.",
  },
];

export default function TrafficFinesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = useMemo(() => {
    let categories = finesData.categories;

    if (selectedCategory !== "all") {
      categories = categories.filter((c) => c.id === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      categories = categories
        .map((cat) => ({
          ...cat,
          offences: cat.offences.filter((o) =>
            o.offence.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.offences.length > 0);
    }

    return categories;
  }, [searchQuery, selectedCategory]);

  const totalOffences = filteredCategories.reduce((sum, c) => sum + c.offences.length, 0);

  const fmt = (n: number) =>
    `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search offences — e.g. 'seatbelt', 'speeding', 'phone'..."
            className="input-field"
            id="traffic-search-input"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-gold text-kenya-black"
                : "bg-bg-card border border-border text-text-secondary hover:text-gold"
            }`}
          >
            All Categories
          </button>
          {finesData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-gold text-kenya-black"
                  : "bg-bg-card border border-border text-text-secondary hover:text-gold"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <p className="text-xs text-text-muted">
          Showing {totalOffences} offence{totalOffences !== 1 ? "s" : ""}
        </p>

        {/* Offences by Category */}
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-bg-elevated flex items-center gap-2">
              <span className="text-lg">{cat.icon}</span>
              <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                {cat.name}
              </h3>
            </div>
            <div className="divide-y divide-border">
              {cat.offences.map((offence, i) => (
                <div key={i} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm text-text-primary font-medium">{offence.offence}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs text-text-muted">
                          Demerit: <span className="text-gold font-medium">{offence.demeritPoints} pts</span>
                        </span>
                        {offence.arrestable && (
                          <span className="inline-flex items-center text-[0.625rem] text-kenya-red-light bg-kenya-red/10 rounded-full px-2 py-0.5 font-medium">
                            Arrestable
                          </span>
                        )}
                        {(offence as { additionalPenalty?: string }).additionalPenalty && (
                          <span className="text-[0.625rem] text-text-muted">
                            + {(offence as { additionalPenalty?: string }).additionalPenalty}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-lg font-bold text-kenya-red-light font-[family-name:var(--font-outfit)]">
                        {fmt(offence.fine)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-text-muted text-sm">No offences found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}

        {/* Demerit Points */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-bg-elevated">
            <h3 className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
              NTSA Demerit Points System (Max {finesData.demeritPointSystem.maxPoints} points)
            </h3>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Points</th>
                <th>Consequence</th>
              </tr>
            </thead>
            <tbody>
              {finesData.demeritPointSystem.consequences.map((c, i) => (
                <tr key={i}>
                  <td className="text-gold font-medium">{c.points}</td>
                  <td className="text-text-secondary">{c.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Methods */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            How to Pay Traffic Fines
          </h3>
          <ul className="space-y-2">
            {finesData.paymentMethods.map((method, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
