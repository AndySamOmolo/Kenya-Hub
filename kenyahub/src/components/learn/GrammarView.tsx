"use client";

import { useState, useMemo, useEffect } from "react";
import { BookOpen, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { COURSE_REGISTRY } from "@/data/courses/registry";
import type { GrammarSection } from "@/data/courses/types";
import DynamicIcon from "@/components/ui/DynamicIcon";
import ExpandablePillRow from "@/components/ui/ExpandablePillRow";
import SearchInput from "@/components/ui/SearchInput";
import { renderInlineMarkdown } from "@/lib/render-markdown";

/**
 * Renders markdown-lite strings into structured JSX:
 * - Paragraphs separated by blank lines
 * - Bullet lists (lines starting with "- " or "• ")
 * - Inline **bold** and *italic*
 */
function RenderedContent({ content }: { content: string }) {
  const lines = useMemo(() => content.split("\n"), [content]);
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let keyCounter = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`ul-${keyCounter++}`}
          className="space-y-1.5 my-2 pl-4 list-disc marker:text-[var(--gold)]"
        >
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
            >
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      listItems.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p
          key={`p-${keyCounter++}`}
          className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed my-1.5"
        >
          {renderInlineMarkdown(trimmed)}
        </p>
      );
    }
  }
  flushList();

  return <div>{elements}</div>;
}

interface GrammarViewProps {
  /** If provided, locks the view to this single language and hides the cross-language switcher */
  lockedLanguageId?: string;
}

export default function GrammarView({ lockedLanguageId }: GrammarViewProps = {}) {
  const [selectedLang, setSelectedLang] = useState<string>(lockedLanguageId || "kikuyu");
  const [search, setSearch] = useState("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (lockedLanguageId && selectedLang !== lockedLanguageId) {
      setSelectedLang(lockedLanguageId);
      setSearch("");
    }
  }, [lockedLanguageId, selectedLang]);

  const activeLang = lockedLanguageId || selectedLang;
  const activeCourse = COURSE_REGISTRY[activeLang];
  const sections: GrammarSection[] = useMemo(
    () => activeCourse?.grammarSections ?? [],
    [activeCourse]
  );

  const filteredSections = useMemo(() => {
    if (!search.trim()) return sections;
    const q = search.toLowerCase().trim();
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.content.some((c) => c.toLowerCase().includes(q)) ||
        s.examples?.some(
          (ex) =>
            ex.english.toLowerCase().includes(q) ||
            Object.values(ex).some(
              (v) => typeof v === "string" && v.toLowerCase().includes(q)
            )
        )
    );
  }, [sections, search]);

  const toggleSection = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !(prev[id] ?? true),
    }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    filteredSections.forEach((s) => {
      next[s.id] = true;
    });
    setExpandedIds(next);
  };

  const collapseAll = () => {
    const next: Record<string, boolean> = {};
    filteredSections.forEach((s) => {
      next[s.id] = false;
    });
    setExpandedIds(next);
  };

  return (
    <div className="space-y-5">
      {/* Cross-language selector only when not locked */}
      {!lockedLanguageId && (
        <ExpandablePillRow>
          {Object.values(COURSE_REGISTRY).map(({ config, grammarSections }) => {
            const count = grammarSections?.length ?? 0;
            const active = activeLang === config.id;
            return (
              <button
                key={config.id}
                onClick={() => {
                  setSelectedLang(config.id);
                  setSearch("");
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  active
                    ? "border-emerald/50 bg-emerald/15 text-emerald-light font-semibold"
                    : "border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-light"
                }`}
              >
                {config.name} ({count})
              </button>
            );
          })}
        </ExpandablePillRow>
      )}

      {/* Header + Search */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[var(--emerald-light)]" />
              <span>
                {activeCourse?.config.name} ({activeCourse?.config.nativeName}) Grammar Reference
              </span>
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {sections.length} comprehensive grammar & phonology guides with structural tables and examples.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={expandAll}
              className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
          placeholder={`Search ${activeCourse?.config.name ?? ""} grammar topics, rules, or examples...`}
          className="text-sm"
        />
      </div>

      {/* Grammar Accordion Cards */}
      {filteredSections.length === 0 ? (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            No grammar sections match &ldquo;{search}&rdquo;.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSections.map((sec, idx) => {
            const isOpen = expandedIds[sec.id] ?? true;
            return (
              <div
                key={sec.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleSection(sec.id)}
                  className="w-full flex items-start justify-between gap-3 p-4 sm:p-5 text-left hover:bg-[var(--bg-elevated)]/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <DynamicIcon
                        name={sec.icon || "BookOpen"}
                        className="w-4 h-4 text-[var(--emerald-light)]"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--emerald)]/15 text-[var(--emerald-light)]">
                          Section {idx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          {sec.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                        {sec.summary}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 mt-1 text-[var(--text-muted)]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[var(--border)]/60 space-y-4">
                    {/* Content blocks */}
                    <div className="space-y-2">
                      {sec.content.map((block, bIdx) => (
                        <RenderedContent key={bIdx} content={block} />
                      ))}
                    </div>

                    {/* Examples table / cards */}
                    {sec.examples && sec.examples.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
                            Key Examples & Paradigms
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {sec.examples.map((ex, eIdx) => {
                            const targetVal =
                              ex[activeLang] ||
                              ex.kikuyu ||
                              ex.luo ||
                              ex.swahili ||
                              Object.entries(ex).find(
                                ([k, v]) =>
                                  k !== "english" &&
                                  k !== "explanation" &&
                                  typeof v === "string"
                              )?.[1] ||
                              "";

                            return (
                              <div
                                key={eIdx}
                                className="rounded-xl bg-[var(--bg-elevated)]/70 border border-[var(--border)] p-3 space-y-1"
                              >
                                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                                  <span className="text-xs sm:text-sm font-bold text-[var(--emerald-light)]">
                                    {renderInlineMarkdown(String(targetVal))}
                                  </span>
                                  <span className="text-xs font-medium text-[var(--text-primary)]">
                                    {renderInlineMarkdown(ex.english)}
                                  </span>
                                </div>
                                {ex.explanation && (
                                  <p className="text-[11px] text-[var(--text-muted)] leading-snug">
                                    {renderInlineMarkdown(ex.explanation)}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
