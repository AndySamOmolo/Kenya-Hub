"use client";

import { useState, useEffect } from "react";
import { account, databases } from "@/lib/appwrite";
import { Query } from "appwrite";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

interface BlogPost {
  $id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  tags: string[];
  readTime: number;
  coverImage?: string;
  content?: string;
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

function EditPostContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "";
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    const init = async () => {
      try {
        const u = await account.get();
        setUser(u.email);
        const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
          Query.equal("slug", slug),
          Query.limit(1),
        ]);
        if (response.documents.length > 0) {
          const p = response.documents[0] as unknown as BlogPost;
          setPost(p);
          setTitle(p.title);
          setExcerpt(p.excerpt);
          setAuthorName(p.author);
          setTags(p.tags?.join(", ") || "");
          setContent(p.content || "");
          setCoverImage(p.coverImage || "");
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [slug]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const tagsArray = tags.split(",").map(t => t.trim()).filter(Boolean);
      const readTime = Math.max(1, Math.ceil(content.split(" ").length / 200));

      await databases.updateDocument(DATABASE_ID, BLOGS_COLLECTION_ID, post.$id, {
        title,
        excerpt,
        author: authorName,
        tags: tagsArray,
        content,
        coverImage: coverImage || null,
        updatedAt: new Date().toISOString().split("T")[0],
        readTime,
      });

      setSuccess("Post updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(`Failed to update post: ${message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!post) return;
    setSaving(true);
    setError("");

    try {
      await databases.deleteDocument(DATABASE_ID, BLOGS_COLLECTION_ID, post.$id);
      router.push("/admin/posts");
    } catch {
      setError("Failed to delete post.");
      setSaving(false);
    }
  };

  const wordCount = content.split(/\s+/).filter(Boolean).length;

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-8 text-text-muted">Loading...</div>;
  }

  if (!slug) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-text-secondary">No post slug provided.</p>
        <Link href="/admin/posts" className="text-gold text-sm mt-4 inline-block">← Back to Posts</Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-text-secondary">
          Please <Link href="/admin/login" className="text-gold">sign in</Link> to edit posts.
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-text-secondary">Post not found.</p>
        <Link href="/admin/posts" className="text-gold text-sm mt-4 inline-block">← Back to Posts</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
            ✏️ Edit Post
          </h1>
          <p className="text-text-muted text-sm">/{slug}</p>
        </div>
        <Link href="/admin/posts" className="text-sm text-gold hover:text-gold-light">
          ← Back
        </Link>
      </header>

      <form onSubmit={handleUpdate} className="space-y-6">
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="slug-display">
                Slug
              </label>
              <input
                id="slug-display"
                type="text"
                value={slug}
                readOnly
                className="input-field opacity-50 cursor-not-allowed"
              />
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
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2" htmlFor="author">
                Author
              </label>
              <input
                id="author"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
                className="input-field"
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
              placeholder="kenya, tools, finance..."
            />
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary" htmlFor="content">
                Content (Markdown)
              </label>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted">{wordCount} words • ~{Math.max(1, Math.ceil(wordCount / 200))} min read</span>
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
                placeholder={"# Heading\n\nYour content here..."}
              />
            )}
          </div>
        </div>

        {error && <p className="text-sm text-kenya-red-light">{error}</p>}
        {success && <p className="text-sm text-kenya-green-light">{success}</p>}

        <div className="flex items-center gap-4">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
            {saving ? "Saving..." : "Update Post"}
          </button>
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 rounded-lg border border-border text-kenya-red-light hover:bg-kenya-red/10 transition-colors text-sm"
          >
            Delete Post
          </button>
          <Link
            href={`/blog/${slug}`}
            target="_blank"
            className="text-sm text-text-secondary hover:text-gold ml-auto"
          >
            View Live ↗
          </Link>
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-kenya-black/80 backdrop-blur-sm px-4">
          <div className="bg-bg-card border border-border rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
              Delete this post?
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              This action cannot be undone. &quot;{post.title}&quot; will be permanently deleted.
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={saving}
                className="px-4 py-2 rounded-lg bg-kenya-red text-white hover:bg-kenya-red/80 text-sm disabled:opacity-50"
              >
                {saving ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EditPostPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-8 text-text-muted">Loading...</div>}>
      <EditPostContent />
    </Suspense>
  );
}