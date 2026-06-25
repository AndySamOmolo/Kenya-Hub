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
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  // Images (before links to avoid conflict)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gm, '<img src="$2" alt="$1" loading="lazy" class="rounded-xl my-6" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Headings
  html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr />');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/gm, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/gm, '<strong>$1</strong>');
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/gm, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/gm, '<code>$1</code>');

  // Blockquotes
  html = html.replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/gm, '\n');

  // Unordered lists — group consecutive list items
  html = html.replace(/((?:^- .*$\n?)+)/gm, (match) => {
    const items = match.trim().split('\n').map(line =>
      `<li>${line.replace(/^- /, '')}</li>`
    ).join('\n');
    return `<ul>${items}</ul>`;
  });

  // Ordered lists — group consecutive numbered items
  html = html.replace(/((?:^\d+\. .*$\n?)+)/gm, (match) => {
    const items = match.trim().split('\n').map(line =>
      `<li>${line.replace(/^\d+\. /, '')}</li>`
    ).join('\n');
    return `<ol>${items}</ol>`;
  });

  // Paragraphs — wrap non-HTML lines
  html = html.split('\n\n').map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<') || trimmed.startsWith('___IFRAME_')) return trimmed;
    return `<p>${trimmed}</p>`;
  }).join('\n');

  // Restore iframes
  html = html.replace(/___IFRAME_(\d+)___/g, (_match, index) => {
    return `<div class="my-6 w-full">${iframes[parseInt(index, 10)]}</div>`;
  });

  return html;
}
