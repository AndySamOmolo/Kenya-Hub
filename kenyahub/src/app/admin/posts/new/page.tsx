"use client";

import { useState, useEffect } from "react";
import { account, databases, storage } from "@/lib/appwrite";
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

import { markdownToHtml } from "@/lib/markdown";

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
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isCover: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (isCover) setUploadingCover(true);
    else setUploadingImage(true);

    try {
      const response = await storage.createFile("blog-images", ID.unique(), file);
      // Appwrite file view URL
      const fileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/blog-images/files/${response.$id}/view?project=6a3290500003e21b7fe1`;
      
      if (isCover) {
        setCoverImage(fileUrl);
      } else {
        setContent(prev => prev + `\n\n![${file.name}](${fileUrl})\n\n`);
      }
    } catch (err) {
      alert("Failed to upload image. Please make sure the image is under 10MB.");
    } finally {
      if (isCover) setUploadingCover(false);
      else setUploadingImage(false);
    }
  };

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
                Cover Image
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  id="coverUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, true)}
                />
                <div className="flex gap-2">
                  <input
                    id="coverImage"
                    type="url"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="input-field flex-1"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("coverUpload")?.click()}
                    disabled={uploadingCover}
                    className="px-3 py-2 bg-bg-elevated border border-border rounded-lg text-sm font-medium text-text-secondary hover:text-gold transition-colors whitespace-nowrap"
                  >
                    {uploadingCover ? "Uploading..." : "Upload File"}
                  </button>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-1">
                Upload an image or paste a URL. Recommended: 1200×630px
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
                <input
                  type="file"
                  id="inlineUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, false)}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("inlineUpload")?.click()}
                  disabled={uploadingImage}
                  className="text-xs flex items-center gap-1 text-text-secondary hover:text-gold transition-colors bg-bg-elevated px-2 py-1 rounded"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {uploadingImage ? "Uploading..." : "Insert Image"}
                </button>
                <span className="text-xs text-text-muted">
                  {wordCount} words • {charCount.toLocaleString()} chars
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