"use client";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import DynamicIcon from "@/components/ui/DynamicIcon";


import { useState, useMemo, useEffect, useRef } from "react";
import { scrollToTopIfScrolled } from "@/lib/scroll";
import ToolShell from "@/components/tools/ToolShell";
import CustomSelect from "@/components/ui/CustomSelect";
import { TOOLS } from "@/lib/tools-registry";
import foodData from "@/data/kenyan-foods-nutrition.json";
import SearchInput from "@/components/ui/SearchInput";

const tool = TOOLS.find((t) => t.slug === "kenyan-food-nutrition")!;
type SortKey = "name" | "calories" | "protein" | "carbs" | "fat" | "fibre";

const faq = [
  { question: "What is the most nutritious Kenyan food?", answer: "Omena (small fish) is extremely nutritious, offering massive protein (55g/100g) and high calcium. Traditional dark leafy greens like managu, terere, and kunde are packed with iron, vitamins, and fibre compared to common cabbage or sukuma wiki." },
  { question: "Are Kenyan staples healthy?", answer: "Yes, but portion control is key. Ugali, rice, and chapati provide excellent energy (carbs) but are calorie-dense. A healthy Kenyan plate should be half vegetables, quarter protein, and quarter staple." },
  { question: "Why is Nyama Choma high in calories?", answer: "Nyama Choma (grilled meat, especially goat) is often fatty, which significantly increases its calorie count (fat has 9 calories per gram compared to 4 for protein/carbs). Leaner cuts or grilled chicken are lower-calorie alternatives." },
];

export default function KenyanFoodNutritionPage() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const _scrollMountRef = useRef(false);
  useEffect(() => {
    if (!_scrollMountRef.current) { _scrollMountRef.current = true; return; }
    scrollToTopIfScrolled();
  }, [catFilter]);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = useMemo(() => {
    let items = [...foodData.foods];
    if (catFilter !== "all") items = items.filter((f) => f.category === catFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((f) => f.name.toLowerCase().includes(q) || f.note.toLowerCase().includes(q));
    }
    items.sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      if (typeof va === "string" && typeof vb === "string") return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      return sortAsc ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return items;
  }, [search, catFilter, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(key === "name"); }
  };

  const renderSortIcon = (k: SortKey) => sortKey === k ? <span className="ml-1 text-gold">{sortAsc ? "↑" : "↓"}</span> : null;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Search & Categories */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search foods (e.g., 'ugali', 'omena', 'chapati')..." className="input-field text-sm" id="food-search"  onClear={() => setSearch("")} />
          <ExpandablePillRow>
            <button
              onClick={() => setCatFilter("all")}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition-all ${
                catFilter === "all"
                  ? "border-gold/50 bg-gold/15 text-gold font-semibold"
                  : "border-border bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-light"
              }`}
            >
              All Foods
            </button>
            {foodData.categories.map((c) => {
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
                  {c.name}
                </button>
              );
            })}
          </ExpandablePillRow>
          <p className="text-xs text-text-muted">{filtered.length} foods found • Values per 100g unless noted</p>
        </div>

        {/* Data Table */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table text-xs">
              <thead>
                <tr>
                  <th className="cursor-pointer hover:text-gold min-w-[200px]" onClick={() => toggleSort("name")}>Food Item{renderSortIcon("name")}</th>
                  <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("calories")}>Calories{renderSortIcon("calories")}</th>
                  <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("protein")}>Protein (g){renderSortIcon("protein")}</th>
                  <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("carbs")}>Carbs (g){renderSortIcon("carbs")}</th>
                  <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("fat")}>Fat (g){renderSortIcon("fat")}</th>
                  <th className="text-right cursor-pointer hover:text-gold" onClick={() => toggleSort("fibre")}>Fibre (g){renderSortIcon("fibre")}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((f, i) => (
                  <tr key={i}>
                    <td>
                      <p className="font-semibold text-text-primary text-sm">{f.name}</p>
                      <p className="text-[0.65rem] text-text-muted mt-0.5">{f.note}</p>
                    </td>
                    <td className="text-right font-bold text-kenya-green-light text-sm">{f.calories}</td>
                    <td className="text-right font-medium text-text-secondary">{f.protein.toFixed(1)}</td>
                    <td className="text-right font-medium text-text-secondary">{f.carbs.toFixed(1)}</td>
                    <td className="text-right font-medium text-text-secondary">{f.fat.toFixed(1)}</td>
                    <td className="text-right font-medium text-gold">{f.fibre.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && <div className="text-center py-8 text-text-muted text-sm">No foods match your search.</div>}
        </div>

        {/* Notes */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">Nutritional Notes</h3>
          <ul className="space-y-2">
            {foodData.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-secondary"><span className="text-gold mt-0.5">•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}
