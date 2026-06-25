"use client";

import { useState, useEffect } from "react";
import { account, databases } from "@/lib/appwrite";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function markdownToHtml(content: string): string {
  let html = content;

  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/gm, (_match, lang, code) => {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
    return `<pre><code class="language-${lang || 'text'}">${escaped}</code></pre>`;
  });

  // Images
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
  html = html.replace(/<\/blockquote>\n<blockquote>/gm, '\n');

  // Unordered lists
  html = html.replace(/((?:^- .*$\n?)+)/gm, (match) => {
    const items = match.trim().split('\n').map(line =>
      `<li>${line.replace(/^- /, '')}</li>`
    ).join('\n');
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\. .*$\n?)+)/gm, (match) => {
    const items = match.trim().split('\n').map(line =>
      `<li>${line.replace(/^\d+\. /, '')}</li>`
    ).join('\n');
    return `<ol>${items}</ol>`;
  });

  // Paragraphs
  html = html.split('\n\n').map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return trimmed;
    return `<p>${trimmed}</p>`;
  }).join('\n');

  return html;
}

export default function NewPostPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  // Check auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const u = await account.get();
        setUser(u.email);
      } catch {
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(generateSlug(title));
    }
  }, [title, slugManuallyEdited]);

  const handleSlugChange = (value: string) => {
    setSlugManuallyEdited(true);
    setSlug(generateSlug(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const tagsArray = tags.split(",").map(t => t.trim()).filter(Boolean);
      const readTime = Math.max(1, Math.ceil(content.split(" ").length / 200));

      await databases.createDocument(DATABASE_ID, BLOGS_COLLECTION_ID, ID.unique(), {
        title,
        slug,
        excerpt,
        author,
        tags: tagsArray,
        content,
        coverImage: coverImage || null,
        publishedAt: new Date().toISOString().split("T")[0],
        updatedAt: null,
        readTime,
      });

      router.push("/admin/posts");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(`Failed to create post: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const charCount = content.length;

  if (authLoading) {
    return <div className="max-w-4xl mx-auto px-4 py-8 text-text-muted">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-text-secondary">
          Please <Link href="/admin/login" className="text-gold">sign in</Link> to create posts.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
            ✍️ New Blog Post
          </h1>
          <p className="text-text-muted text-sm">Create a new article for KenyaHub</p>
        </div>
        <Link href="/admin/posts" className="text-sm text-gold hover:text-gold-light">
          ← Back
        </Link>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input-field"
                placeholder="Enter post title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="slug">
                Slug
                {!slugManuallyEdited && title && (
                  <span className="text-xs text-text-muted ml-2">(auto-generated)</span>
                )}
              </label>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                required
                className="input-field"
                placeholder="url-friendly-slug"
              />
              {slug && (
                <p className="text-xs text-text-muted mt-1">
                  URL: kenyahub.me/blog/<span className="text-gold">{slug}</span>
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="excerpt">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              required
              className="input-field resize-none"
              placeholder="Brief summary of the post (shown on blog listing and SEO)..."
              maxLength={300}
            />
            <p className="text-xs text-text-muted mt-1">{excerpt.length}/300 characters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="author">
                Author
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="input-field"
                placeholder="Your name..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="coverImage">
                Cover Image URL
              </label>
              <input
                id="coverImage"
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="input-field"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-text-muted mt-1">
                Recommended: 1200×630px for social sharing
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="tags">
              Tags (comma-separated)
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="input-field"
              placeholder="kenya, tools, finance, education..."
            />
            {tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.split(",").map(t => t.trim()).filter(Boolean).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[0.625rem] bg-bg-elevated border border-border rounded-full text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary" htmlFor="content">
                Content (Markdown)
              </label>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted">
                  {wordCount} words • {charCount.toLocaleString()} chars • ~{Math.max(1, Math.ceil(wordCount / 200))} min read
                </span>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs text-gold hover:text-gold-light"
                >
                  {showPreview ? "Edit" : "Preview"}
                </button>
              </div>
            </div>
            {showPreview ? (
              <div
                className="prose-blog bg-bg-elevated border border-border rounded-xl p-6 min-h-[400px]"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
              />
            ) : (
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                required
                className="input-field resize-none font-mono text-sm"
                placeholder={"# Heading\n\nYour content here...\n\n## Subheading\n\n- Bullet point\n- Another point\n\n**Bold text** and *italic text*\n\n[Link text](https://example.com)"}
              />
            )}
          </div>
        </div>

        {error && <p className="text-sm text-kenya-red-light">{error}</p>}

        <div className="flex items-center gap-4">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
            {loading ? "Publishing..." : "Publish Post"}
          </button>
          <Link href="/admin/posts" className="text-sm text-text-secondary hover:text-text-primary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}