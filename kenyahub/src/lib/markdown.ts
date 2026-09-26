function parseMarkdownTables(content: string): string {
  const lines = content.split(/\r?\n/);
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;

    // Check if nextLine is a separator row (|---|---| or |:---|---:|) and current line looks like a header row
    const isSeparator =
      Boolean(nextLine) &&
      /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(nextLine!);
    const isHeaderCandidate = line.includes("|") && line.trim().length > 0;

    if (isSeparator && isHeaderCandidate) {
      const headerLine = line;
      const separatorLine = nextLine!;
      const dataLines: string[] = [];

      i += 2; // Advance past header and separator

      while (i < lines.length) {
        const currentDataLine = lines[i];
        if (!currentDataLine.trim() || !currentDataLine.includes("|")) {
          break;
        }
        dataLines.push(currentDataLine);
        i++;
      }

      const parseCells = (row: string) => {
        let trimmed = row.trim();
        if (trimmed.startsWith("|")) trimmed = trimmed.slice(1);
        if (trimmed.endsWith("|")) trimmed = trimmed.slice(0, -1);
        return trimmed.split("|").map((c) => c.trim());
      };

      const alignments = parseCells(separatorLine).map((col) => {
        const leftColon = col.startsWith(":");
        const rightColon = col.endsWith(":");
        if (leftColon && rightColon) return "center";
        if (rightColon) return "right";
        return "left";
      });

      const headerCells = parseCells(headerLine);

      let tableHtml = '<div class="blog-table-wrapper my-6 overflow-x-auto rounded-xl border border-border bg-bg-card/40 shadow-sm">\n';
      tableHtml += '  <table class="blog-table w-full border-collapse text-left text-sm">\n';
      tableHtml += '    <thead>\n';
      tableHtml += '      <tr class="border-b border-border bg-bg-elevated/70">\n';

      headerCells.forEach((cell, idx) => {
        const align = alignments[idx] || "left";
        const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
        tableHtml += `        <th class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-primary ${alignClass}">${cell}</th>\n`;
      });

      tableHtml += "      </tr>\n";
      tableHtml += "    </thead>\n";
      tableHtml += '    <tbody class="divide-y divide-border/60">\n';

      dataLines.forEach((row, rowIdx) => {
        const cells = parseCells(row);
        const zebraClass = rowIdx % 2 === 1 ? "bg-bg-elevated/20" : "bg-transparent";
        tableHtml += `      <tr class="${zebraClass} hover:bg-gold/[0.04] transition-colors">\n`;
        cells.forEach((cell, idx) => {
          const align = alignments[idx] || "left";
          const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
          tableHtml += `        <td class="px-4 py-3 text-text-secondary ${alignClass}">${cell}</td>\n`;
        });
        tableHtml += "      </tr>\n";
      });

      tableHtml += "    </tbody>\n";
      tableHtml += "  </table>\n";
      tableHtml += "</div>";

      result.push(tableHtml);
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join("\n");
}

export function markdownToHtml(content: string): string {
  if (!content) return "";
  let html = content;

  // Extract iframes to protect them from being mangled
  const iframes: string[] = [];
  html = html.replace(/<iframe[\s\S]*?<\/iframe>/gi, (match) => {
    iframes.push(match);
    return `\n\n___IFRAME_${iframes.length - 1}___\n\n`;
  });

  // Code blocks (fenced) — process first to protect from other transforms
  html = html.replace(/```(\w*)\n([\s\S]*?)```/gm, (_match, lang, code) => {
    const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    return `<pre><code class="language-${lang || "text"}">${escaped}</code></pre>`;
  });

  // Images (before links to avoid conflict)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gm, '<img src="$2" alt="$1" loading="lazy" class="rounded-xl my-6" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Headings
  html = html.replace(/^#### (.*$)/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gm, "<h1>$1</h1>");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/gm, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/gm, "<strong>$1</strong>");
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/gm, "<em>$1</em>");

  // Inline code
  html = html.replace(/`([^`]+)`/gm, "<code>$1</code>");

  // Blockquotes
  html = html.replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>");
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/gm, "\n");

  // Unordered lists — group consecutive list items
  html = html.replace(/((?:^- .*$\n?)+)/gm, (match) => {
    const items = match.trim().split("\n").map(line =>
      `<li>${line.replace(/^- /, "")}</li>`
    ).join("\n");
    return `<ul>${items}</ul>`;
  });

  // Ordered lists — group consecutive numbered items
  html = html.replace(/((?:^\d+\. .*$\n?)+)/gm, (match) => {
    const items = match.trim().split("\n").map(line =>
      `<li>${line.replace(/^\d+\. /, "")}</li>`
    ).join("\n");
    return `<ol>${items}</ol>`;
  });

  // Markdown tables
  html = parseMarkdownTables(html);

  // Paragraphs — wrap non-HTML lines
  html = html.split("\n\n").map(block => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<") || trimmed.startsWith("___IFRAME_")) return trimmed;
    return `<p>${trimmed}</p>`;
  }).join("\n");

  // Restore iframes
  html = html.replace(/___IFRAME_(\d+)___/g, (_match, index) => {
    return `<div class="my-6 w-full">${iframes[parseInt(index, 10)]}</div>`;
  });

  return html;
}
