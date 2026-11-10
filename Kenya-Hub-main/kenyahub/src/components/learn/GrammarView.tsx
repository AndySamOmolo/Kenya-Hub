"use client";

import React from "react";
import type { GrammarSection } from "@/data/courses/types";

/**
 * Renders simple inline markdown:
 * - **bold** → <strong>
 * - *italic* → <em>
 * - `code` → <code>
 */
function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match **bold**, *italic*, or `code`
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Push text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      // **bold**
      parts.push(
        <strong key={key++} className="font-semibold text-text-primary">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      // *italic*
      parts.push(
        <em key={key++} className="italic">
          {match[3]}
        </em>
      );
    } else if (match[4]) {
      // `code`
      parts.push(
        <code
          key={key++}
          className="rounded bg-bg-elevated px-1.5 py-0.5 text-[0.8em] font-mono text-gold"
        >
          {match[4]}
        </code>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Renders a content string line-by-line, applying inline markdown styling.
 */
function RenderedContent({ content }: { content: string }) {
  const lines = content.split("\n");

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
                    ? (ex as Record<string, string>)[targetKey]
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
                          {ex.english}
                        </p>
                      </div>
                      {ex.explanation && (
                        <div className="mt-1 text-xs text-text-muted sm:mt-0 sm:text-right sm:shrink-0">
                          <span className="inline-block rounded-md bg-kenya-green/10 px-2 py-1 text-kenya-green">
                            {ex.explanation}
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
