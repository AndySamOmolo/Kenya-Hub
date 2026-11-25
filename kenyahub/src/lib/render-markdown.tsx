import React from "react";

const UNSAFE_URL_SCHEME_RE = /^(?:javascript|data|vbscript):/i;

export function isSafeMarkdownUrl(rawUrl: string): boolean {
  const cleaned = rawUrl
    .replace(/[\u0000-\u001F\u007F\s]+/g, "")
    .trim();
  if (!cleaned) return false;
  if (cleaned.startsWith("//") || cleaned.startsWith("\\\\")) return false;
  if (UNSAFE_URL_SCHEME_RE.test(cleaned)) return false;
  if (
    cleaned.startsWith("https://") ||
    cleaned.startsWith("http://") ||
    cleaned.startsWith("mailto:") ||
    cleaned.startsWith("/") ||
    cleaned.startsWith("#")
  ) {
    return true;
  }
  return false;
}

/**
 * Parses and renders inline markdown:
 * - **bold** → <strong className="font-bold text-text-primary">...</strong>
 * - *italic* → <em className="italic">...</em>
 * - `code` → <code className="rounded bg-bg-elevated px-1.5 py-0.5 text-[0.8em] font-mono text-gold">...</code>
 * - [label](url) → safe <a> link (rejects javascript:, data:, vbscript:, and protocol-relative // URLs)
 */
export function renderInlineMarkdown(text: string | null | undefined): React.ReactNode {
  if (!text) return null;
  if (!text.includes("*") && !text.includes("`") && !text.includes("[")) {
    return text;
  }

  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[([^\]]+)\]\(([^)]+)\))/g;
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
    } else if (match[5] && match[6]) {
      const label = match[5];
      const rawUrl = match[6].trim();
      if (isSafeMarkdownUrl(rawUrl)) {
        const isExternal = rawUrl.startsWith("http://") || rawUrl.startsWith("https://");
        parts.push(
          <a
            key={key++}
            href={rawUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-gold hover:underline font-medium"
          >
            {label}
          </a>
        );
      } else {
        parts.push(label);
      }
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}
