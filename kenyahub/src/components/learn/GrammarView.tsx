"use client";

import React, { useMemo } from "react";
import type { GrammarSection } from "@/data/courses/types";
import { renderInlineMarkdown } from "@/lib/render-markdown";

/**
 * Renders a content string line-by-line, applying inline markdown styling.
 */
function RenderedContent({ content }: { content: string }) {
  const lines = useMemo(() => content.split("\n"), [content]);

  return (
    <>
      {lines.map((line, i) => {
        if (line.trim() === "") {
          return <br key={i} />;
        }

        // Detect bullet points
        const isBullet = /^\s*[-•]\s/.test(line);
        if (isBullet) {
          const bulletText = line.replace(/^\s*[-•]\s*/, "");
          return (
            <div key={i} className="flex gap-2 pl-2 py-0.5">
              <span className="text-gold shrink-0 mt-0.5">•</span>
              <span>{renderInlineMarkdown(bulletText)}</span>
            </div>
          );
        }

        return (
          <p key={i} className="mb-1 leading-relaxed">
            {renderInlineMarkdown(line)}
          </p>
        );
      })}
    </>
  );
}

export default function GrammarView({
  sections,
  languageName,
}: {
  sections: GrammarSection[];
  languageName: string;
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
                  // Find the target language key (anything that isn't english or explanation)
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
                        <div className="mt-1 text-xs text-text-muted sm:mt-0 sm:text-right sm:shrink-0">
                          <span className="inline-block rounded-md bg-kenya-green/10 px-2 py-1 text-kenya-green">
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
