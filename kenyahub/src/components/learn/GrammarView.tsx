"use client";

import React, { useMemo } from "react";
import type { GrammarSection } from "@/data/courses/types";
import { renderInlineMarkdown } from "@/lib/render-markdown";
import OpenCorpusPanel from "./OpenCorpusPanel";

/**
 * Renders grammar section content supporting headings, bulleted/numbered lists,
 * blockquotes, and Markdown pipe tables.
 */
function RenderedContent({ content }: { content: string }) {
  const blocks = useMemo(() => {
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const result: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();

      if (!trimmed) {
        result.push(<div key={`sp-${i}`} className="h-2" />);
        i++;
        continue;
      }

      if (trimmed.startsWith("### ")) {
        result.push(
          <h4
            key={`h3-${i}`}
            className="mt-4 mb-1.5 font-[family-name:var(--font-outfit)] text-base font-bold text-gold"
          >
            {renderInlineMarkdown(trimmed.slice(4))}
          </h4>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith("## ")) {
        result.push(
          <h3
            key={`h2-${i}`}
            className="mt-5 mb-2 font-[family-name:var(--font-outfit)] text-lg font-bold text-gold"
          >
            {renderInlineMarkdown(trimmed.slice(3))}
          </h3>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const tableRows: string[][] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const rowStr = lines[i].trim();
          if (!/^\|[\s\-:|]+\|$/.test(rowStr)) {
            const cells = rowStr
              .slice(1, -1)
              .split("|")
              .map((c) => c.trim());
            tableRows.push(cells);
          }
          i++;
        }
        if (tableRows.length > 0) {
          result.push(
            <div
              key={`tbl-${i}`}
              className="my-3 overflow-x-auto rounded-xl border border-border"
            >
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-bg-elevated border-b border-border text-gold font-semibold">
                    {tableRows[0].map((cell, cIdx) => (
                      <th key={`th-${cIdx}`} className="px-3 py-2">
                        {renderInlineMarkdown(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(1).map((row, rIdx) => (
                    <tr
                      key={`tr-${rIdx}`}
                      className="border-b border-border/60 last:border-0 odd:bg-bg-card even:bg-bg-elevated/30"
                    >
                      {row.map((cell, cIdx) => (
                        <td key={`td-${cIdx}`} className="px-3 py-2 text-text-secondary">
                          {renderInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (trimmed.startsWith(">")) {
        result.push(
          <blockquote
            key={`bq-${i}`}
            className="my-2 border-l-2 border-gold bg-gold/5 px-3.5 py-2 rounded-r-lg italic text-text-primary"
          >
            {renderInlineMarkdown(trimmed.replace(/^>\s*/, ""))}
          </blockquote>
        );
        i++;
        continue;
      }

      const bulletMatch = rawLine.match(/^(\s*)([-•*]|\d+\.)\s+(.*)$/);
      if (bulletMatch) {
        const isSub = bulletMatch[1].length >= 2;
        const marker = /^\d+\./.test(bulletMatch[2]) ? bulletMatch[2] : isSub ? "◦" : "•";
        result.push(
          <div
            key={`li-${i}`}
            className={`flex gap-2 py-0.5 ${isSub ? "pl-6" : "pl-2"}`}
          >
            <span className="text-gold font-semibold shrink-0 mt-0.5">{marker}</span>
            <span className="min-w-0 flex-1 break-words">
              {renderInlineMarkdown(bulletMatch[3])}
            </span>
          </div>
        );
        i++;
        continue;
      }

      result.push(
        <p key={`p-${i}`} className="mb-1.5 leading-relaxed">
          {renderInlineMarkdown(rawLine)}
        </p>
      );
      i++;
    }

    return result;
  }, [content]);

  return <>{blocks}</>;
}

export default function GrammarView({
  sections,
  languageName,
  languageId,
}: {
  sections: GrammarSection[];
  languageName: string;
  languageId?: string;
}) {
  if (!sections || sections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-text-muted">
        <p>No grammar references available for {languageName} yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-1 sm:px-4">
      {sections.map((section) => (
        <section
          key={section.id}
          className="rounded-2xl border border-border bg-bg-card p-4 shadow-sm sm:p-8"
        >
          <h2 className="mb-2 font-[family-name:var(--font-outfit)] text-lg font-bold text-text-primary sm:text-2xl">
            {section.title}
          </h2>
          <p className="mb-5 text-sm font-medium text-gold leading-relaxed">
            {section.summary}
          </p>
          <div className="max-w-none text-sm text-text-secondary leading-relaxed">
            <RenderedContent content={section.content} />
          </div>

          {section.examples && section.examples.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-bg-elevated p-3 sm:p-4">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">
                Examples
              </h3>
              <div className="space-y-3">
                {section.examples.map((ex, idx) => {
                  const targetKey = Object.keys(ex).find(
                    (k) => k !== "english" && k !== "explanation"
                  );
                  const targetText = targetKey
                    ? (ex as Record<string, string | undefined>)[targetKey] ?? ""
                    : "";

                  return (
                    <div
                      key={idx}
                      className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text-primary text-sm break-words">
                          {targetText}
                        </p>
                        <p className="text-xs text-text-secondary mt-0.5">
                          {renderInlineMarkdown(ex.english)}
                        </p>
                      </div>
                      {ex.explanation && (
                        <div className="mt-1 text-xs text-text-muted sm:mt-0 sm:text-right max-w-full sm:max-w-[45%] break-words">
                          <span className="inline-block rounded-md bg-kenya-green/10 px-2 py-1 text-kenya-green max-w-full break-words">
                            {renderInlineMarkdown(ex.explanation)}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
