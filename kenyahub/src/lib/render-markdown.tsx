import React from "react";

/**
 * Parses and renders inline markdown:
 * - **bold** → <strong className="font-bold text-text-primary">...</strong>
 * - *italic* → <em className="italic">...</em>
 * - `code` → <code className="rounded bg-bg-elevated px-1.5 py-0.5 text-[0.8em] font-mono text-gold">...</code>
 */
export function renderInlineMarkdown(text: string | null | undefined): React.ReactNode {
  if (!text) return null;
  if (!text.includes("*") && !text.includes("`")) {
    return text;
  }

  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      parts.push(
        <strong key={key++} className="font-bold text-text-primary">
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      parts.push(
        <em key={key++} className="italic">
          {match[3]}
        </em>
      );
    } else if (match[4]) {
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

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}
