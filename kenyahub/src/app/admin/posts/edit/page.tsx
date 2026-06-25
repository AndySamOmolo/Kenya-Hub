"use client";

import { useState, useEffect } from "react";
import { account, databases, storage } from "@/lib/appwrite";
import { ID } from "appwrite";
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

import { markdownToHtml } from "@/lib/markdown";

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
      <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-1">
            ✏️ Edit Post
          </h1>
          <p className="text-text-muted text-sm">/{slug}</p>
        </div>
        <Link href="/admin/posts" className="text-sm text-gold hover:text-gold-light shrink-0">
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
                Cover Image
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  id="coverUploadEdit"
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
                    onClick={() => document.getElementById("coverUploadEdit")?.click()}
                    disabled={uploadingCover}
                    className="px-3 py-2 bg-bg-elevated border border-border rounded-lg text-sm font-medium text-text-secondary hover:text-gold transition-colors whitespace-nowrap"
                  >
                    {uploadingCover ? "Uploading..." : "Upload File"}
                  </button>
                </div>
              </div>
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-2">
              <label className="text-sm font-medium text-text-secondary" htmlFor="content">
                Content (Markdown)
              </label>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <input
                  type="file"
                  id="inlineUploadEdit"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, false)}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("inlineUploadEdit")?.click()}
                  disabled={uploadingImage}
                  className="text-xs flex items-center gap-1 text-text-secondary hover:text-gold transition-colors bg-bg-elevated px-2 py-1 rounded"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {uploadingImage ? "Uploading..." : "Insert Image"}
                </button>
                <span className="text-xs text-text-muted">{wordCount} words</span>
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

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50 w-full sm:w-auto">
            {saving ? "Saving..." : "Update Post"}
          </button>
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 rounded-lg border border-border text-kenya-red-light hover:bg-kenya-red/10 transition-colors text-sm w-full sm:w-auto"
          >
            Delete Post
          </button>
          <Link
            href={`/blog/${slug}`}
            target="_blank"
            className="text-sm text-text-secondary hover:text-gold sm:ml-auto w-full sm:w-auto text-center"
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