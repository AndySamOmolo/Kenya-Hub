function formatInlineMarkdown(text: string): string {
  if (!text) return "";
  let out = text;

  // 1. Protect inline code spans first so asterisks/underscores inside `code` are untouched
  const codeSpans: string[] = [];
  out = out.replace(/`([^`]+)`/g, (_match, code) => {
    const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    codeSpans.push(`<code>${escaped}</code>`);
    return `___INLINECODE_${codeSpans.length - 1}___`;
  });

  // 2. Images (before links)
  out = out.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy" class="rounded-xl my-6" />'
  );

  // 3. Links (internal links open in same tab, external in new tab)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return `<a href="${href}">${label}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });

  // 4. Bold + Italic where *** wraps the entire phrase: ***text***
  out = out.replace(/\*\*\*([^\n*]+?)\*\*\*/g, "<strong><em>$1</em></strong>");

  // 5. Bold phrase ending with a nested italic phrase: e.g. **The Mark of *Ira*** or **Bead (*Chuma*) and *Kĩthathi***
  out = out.replace(/\*\*([^\n]*?\*[^\n*]+?)\*\*\*/g, "<strong>$1*</strong>");

  // 6. Standard Bold: **text**
  out = out.replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");

  // 7. Standard Italic: *text*
  out = out.replace(/(?<!\*)\*(?!\*)([^\n*]+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");

  // 8. Restore inline code spans
  out = out.replace(/___INLINECODE_(\d+)___/g, (_m, idx) => codeSpans[parseInt(idx, 10)] || "");

  return out;
}

function parseCells(row: string): string[] {
  let trimmed = row.trim();
  if (trimmed.startsWith("|")) trimmed = trimmed.slice(1);
  if (trimmed.endsWith("|")) trimmed = trimmed.slice(0, -1);
  return trimmed.split("|").map((c) => c.trim());
}

export function markdownToHtml(content: string): string {
  if (!content) return "";
  let raw = content.replace(/\r\n/g, "\n");

  // Extract iframes to protect them from being mangled
  const iframes: string[] = [];
  raw = raw.replace(/<iframe[\s\S]*?<\/iframe>/gi, (match) => {
    iframes.push(match);
    return `\n\n___IFRAME_${iframes.length - 1}___\n\n`;
  });

  // Extract fenced code blocks first
  const codeBlocks: string[] = [];
  raw = raw.replace(/```(\w*)\n([\s\S]*?)```/gm, (_match, lang, code) => {
    const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    codeBlocks.push(`<pre><code class="language-${lang || "text"}">${escaped}</code></pre>`);
    return `\n\n___CODEBLOCK_${codeBlocks.length - 1}___\n\n`;
  });

  const lines = raw.split("\n");
  const blocks: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const loopStartI = i;
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Blank line
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Protected placeholders (iframes / fenced code blocks)
    if (/^___IFRAME_\d+___$/.test(trimmed)) {
      const idx = parseInt(trimmed.replace(/\D/g, ""), 10);
      blocks.push(`<div class="my-6 w-full">${iframes[idx] || ""}</div>`);
      i++;
      continue;
    }
    if (/^___CODEBLOCK_\d+___$/.test(trimmed)) {
      const idx = parseInt(trimmed.replace(/\D/g, ""), 10);
      blocks.push(codeBlocks[idx] || "");
      i++;
      continue;
    }

    // 3. Horizontal rule
    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      blocks.push("<hr />");
      i++;
      continue;
    }

    // 4. Headings (# to ####)
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingHtml = formatInlineMarkdown(headingMatch[2].trim());
      blocks.push(`<h${level}>${headingHtml}</h${level}>`);
      i++;
      continue;
    }

    // 5. Markdown Pipe Table
    const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : "";
    const isTableSeparator =
      Boolean(nextLine) &&
      /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?$/.test(nextLine);
    if (isTableSeparator && trimmed.includes("|")) {
      const headerCells = parseCells(trimmed);
      const alignments = parseCells(nextLine).map((col) => {
        const leftColon = col.startsWith(":");
        const rightColon = col.endsWith(":");
        if (leftColon && rightColon) return "center";
        if (rightColon) return "right";
        return "left";
      });
      i += 2;
      const dataRows: string[][] = [];
      while (i < lines.length) {
        const rowTrim = lines[i].trim();
        if (!rowTrim || !rowTrim.includes("|")) break;
        dataRows.push(parseCells(rowTrim));
        i++;
      }

      let tableHtml =
        '<div class="blog-table-wrapper my-6 overflow-x-auto rounded-xl border border-border bg-bg-card/40 shadow-sm">\n';
      tableHtml +=
        '  <table class="blog-table w-full border-collapse text-left text-sm">\n';
      tableHtml += "    <thead>\n";
      tableHtml +=
        '      <tr class="border-b border-border bg-bg-elevated/70">\n';
      headerCells.forEach((cell, idx) => {
        const align = alignments[idx] || "left";
        const alignClass =
          align === "center"
            ? "text-center"
            : align === "right"
            ? "text-right"
            : "text-left";
        tableHtml += `        <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-primary ${alignClass}">${formatInlineMarkdown(
          cell
        )}</th>\n`;
      });
      tableHtml += "      </tr>\n    </thead>\n";
      tableHtml += '    <tbody class="divide-y divide-border/60">\n';
      dataRows.forEach((cells, rowIdx) => {
        const zebraClass =
          rowIdx % 2 === 1 ? "bg-bg-elevated/20" : "bg-transparent";
        tableHtml += `      <tr class="${zebraClass} hover:bg-gold/[0.04] transition-colors">\n`;
        cells.forEach((cell, idx) => {
          const align = alignments[idx] || "left";
          const alignClass =
            align === "center"
              ? "text-center"
              : align === "right"
              ? "text-right"
              : "text-left";
          tableHtml += `        <td class="px-4 py-3 text-text-secondary ${alignClass}">${formatInlineMarkdown(
            cell
          )}</td>\n`;
        });
        tableHtml += "      </tr>\n";
      });
      tableHtml += "    </tbody>\n  </table>\n</div>";
      blocks.push(tableHtml);
      continue;
    }

    // 6. Blockquote (> ...)
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      const quoteHtml = quoteLines
        .map((ql) => formatInlineMarkdown(ql))
        .join("<br />");
      blocks.push(`<blockquote>${quoteHtml}</blockquote>`);
      continue;
    }

    // 7. Unordered or Ordered Lists (with support for nested sub-items and blockquotes inside list items)
    const isUl = /^[-*]\s+/.test(trimmed);
    const isOl = /^\d+\.\s+/.test(trimmed);
    if (isUl || isOl) {
      const listTag = isOl ? "ol" : "ul";
      const itemsHtml: string[] = [];

      while (i < lines.length) {
        const curRaw = lines[i];
        const curTrim = curRaw.trim();
        if (!curTrim) break;

        const matchTopUl = !isOl && /^[-*]\s+(.*)$/.test(curTrim);
        const matchTopOl = isOl && /^\d+\.\s+(.*)$/.test(curTrim);

        if (matchTopUl || matchTopOl) {
          const mainText = curTrim.replace(/^(\d+\.|[-*])\s+/, "").trim();
          let liContent = formatInlineMarkdown(mainText);
          i++;

          // Collect any indented sub-bullets, indented numbered items, or indented blockquotes belonging to this list item
          const subUlBullets: string[] = [];
          const subOlBullets: string[] = [];
          const subQuotes: string[] = [];
          while (i < lines.length) {
            const subRaw = lines[i];
            const subTrim = subRaw.trim();
            if (/^\s{2,}[-*]\s+/.test(subRaw)) {
              subUlBullets.push(
                `<li>${formatInlineMarkdown(
                  subTrim.replace(/^[-*]\s+/, "")
                )}</li>`
              );
              i++;
            } else if (/^\s{2,}\d+\.\s+/.test(subRaw)) {
              subOlBullets.push(
                `<li>${formatInlineMarkdown(
                  subTrim.replace(/^\d+\.\s+/, "")
                )}</li>`
              );
              i++;
            } else if (/^\s{2,}>\s*/.test(subRaw)) {
              subQuotes.push(
                formatInlineMarkdown(subTrim.replace(/^>\s?/, ""))
              );
              i++;
            } else {
              break;
            }
          }

          if (subUlBullets.length > 0) {
            liContent += `\n<ul>${subUlBullets.join("\n")}</ul>`;
          }
          if (subOlBullets.length > 0) {
            liContent += `\n<ol>${subOlBullets.join("\n")}</ol>`;
          }
          if (subQuotes.length > 0) {
            liContent += `\n<blockquote>${subQuotes.join("<br />")}</blockquote>`;
          }
          itemsHtml.push(`<li>${liContent}</li>`);
        } else {
          break;
        }
      }

      if (itemsHtml.length > 0) {
        blocks.push(`<${listTag}>\n${itemsHtml.join("\n")}\n</${listTag}>`);
      }
      if (i === loopStartI) {
        i++;
      }
      continue;
    }

    // 8. Raw HTML block pass-through
    if (
      /^<(?:div|p|table|thead|tbody|tr|th|td|h[1-6]|ul|ol|li|pre|blockquote|hr|img|figure|section|article|aside|header|footer|nav)[\s>]/i.test(
        trimmed
      )
    ) {
      blocks.push(trimmed);
      i++;
      continue;
    }

    // 9. Standard Paragraph (collect consecutive non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length) {
      const pLine = lines[i];
      const pTrim = pLine.trim();
      if (
        !pTrim ||
        /^#{1,4}\s+/.test(pTrim) ||
        /^---+$/.test(pTrim) ||
        /^\*\*\*+$/.test(pTrim) ||
        /^>\s*/.test(pTrim) ||
        /^[-*]\s+/.test(pTrim) ||
        /^\d+\.\s+/.test(pTrim) ||
        /^___(?:IFRAME|CODEBLOCK)_\d+___$/.test(pTrim) ||
        (i + 1 < lines.length &&
          pTrim.includes("|") &&
          /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?$/.test(
            lines[i + 1].trim()
          ))
      ) {
        break;
      }
      paraLines.push(formatInlineMarkdown(pTrim));
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push(`<p>${paraLines.join(" ")}</p>`);
    }
    if (i === loopStartI) {
      i++;
    }
  }

  return blocks.join("\n\n");
}
