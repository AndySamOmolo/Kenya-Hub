"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import customsData from "@/data/customs-restricted-items.json";

const tool = TOOLS.find((t) => t.slug === "kenya-customs-restricted-items")!;

const faq = [
  { question: "What happens if I bring a prohibited item into Kenya?", answer: "Prohibited items are confiscated and destroyed by Customs. You may also face heavy fines, prosecution, or imprisonment depending on the item (e.g., narcotics, firearms)." },
  { question: "What is the duty-free allowance for visitors to Kenya?", answer: "Visitors can bring personal items, up to USD 500 worth of non-commercial goods, 1 litre of spirits or 2 litres of wine, and 200 cigarettes without paying duty. These must be for personal use only." },
  { question: "Can I bring a drone into Kenya?", answer: "Drones are restricted items. You must obtain an import permit and authorization from the Kenya Civil Aviation Authority (KCAA) before bringing a drone into the country. Unauthorized drones will be confiscated at the airport." },
  { question: "How much cash can I carry into or out of Kenya?", answer: "You can carry any amount of currency, but amounts exceeding USD 10,000 (or equivalent in KES/other currencies) MUST be declared at Customs upon arrival or departure." },
  { question: "Which channel should I use at the airport?", answer: "Use the Green Channel if you have nothing to declare and your goods are within the duty-free allowances. Use the Red Channel if you have restricted items, commercial goods, or goods exceeding your duty-free allowance." },
];

export default function KenyaCustomsRestrictedItemsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = customsData.categories.map((cat) => ({
    ...cat,
    items: search.trim() 
      ? cat.items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))
      : cat.items
  })).filter(cat => cat.items.length > 0);

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search items (e.g., 'drone', 'alcohol', 'cash')..." className="input-field text-sm max-w-lg" id="customs-search" />
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-bg-elevated flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h2 className="text-base font-bold text-text-primary font-[family-name:var(--font-outfit)]">{cat.title}</h2>
                  <p className="text-xs text-text-muted mt-0.5">{cat.description}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-bg-elevated border border-border/50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-text-primary mb-2">{item.item}</p>
                      
                      {("law" in item) && <p className="text-xs text-text-secondary"><span className="text-text-muted">Law:</span> {item.law as string}</p>}
                      {("permit" in item) && <p className="text-xs text-text-secondary"><span className="text-text-muted">Permit from:</span> <span className="font-medium text-gold">{item.permit as string}</span></p>}
                      {("limit" in item) && <p className="text-xs text-text-secondary"><span className="text-text-muted">Limit:</span> {item.limit as string}</p>}
                      {("duty" in item) && <p className="text-xs text-text-secondary"><span className="text-text-muted">Duty:</span> <span className="font-medium text-kenya-green-light">{item.duty as string}</span></p>}
                      {("requirement" in item) && <p className="text-xs text-text-secondary"><span className="text-text-muted">Requirement:</span> {item.requirement as string}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12 bg-bg-card border border-border rounded-xl">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-text-secondary text-sm">No items found matching your search</p>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Important Travel Notes</h3>
          <ul className="space-y-2">
            {customsData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
