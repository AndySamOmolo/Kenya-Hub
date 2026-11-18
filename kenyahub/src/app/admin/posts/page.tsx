"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Query } from "appwrite";
import { account, databases, verifyAdminAccount } from "@/lib/appwrite";
import DynamicIcon from "@/components/ui/DynamicIcon";

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

interface BlogPost {
  $id: string;
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export default function AdminPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      let email: string | null = null;
      try {
        await account.get();
        email = await verifyAdminAccount();
        if (!email) {
          setUser(null);
          setLoading(false);
          router.push("/admin/login");
          return;
        }
        setUser(email);
      } catch {
        setUser(null);
        setLoading(false);
        router.push("/admin/login");
        return;
      }

      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          BLOGS_COLLECTION_ID,
          [Query.orderDesc("publishedAt"), Query.limit(100)]
        );
        setPosts(response.documents as unknown as BlogPost[]);
      } catch (err: unknown) {
        const msg =
          err instanceof Error
            ? err.message
            : "Failed to load blog posts from database.";
        setErrorMsg(msg);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [router]);

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    setDeleting(id);
    setErrorMsg(null);
    try {
      await databases.deleteDocument(DATABASE_ID, BLOGS_COLLECTION_ID, id);
      setPosts((prev) => prev.filter((p) => p.$id !== id));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete blog post.";
      setErrorMsg(msg);
    } finally {
      setDeleting(null);
    }
  }

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-text-secondary">
          Please{" "}
          <Link href="/admin/login/" className="text-gold">
            sign in
          </Link>{" "}
          to access this page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex w-64 flex-col bg-bg-card border-r border-border md:fixed h-full p-5 space-y-2">
        <div className="text-sm font-bold text-gold mb-4 flex items-center gap-2">
          <DynamicIcon emoji="📊" className="w-5 h-5 text-gold" />
          <span>KenyaHub Admin</span>
        </div>
        <Link href="/admin/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Dashboard
        </Link>
        <Link href="/admin/posts/" className="px-3 py-2 rounded-lg text-xs font-semibold bg-gold/15 text-gold">
          Blog Posts
        </Link>
        <Link href="/admin/translations/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Translations
        </Link>
        <Link href="/admin/settings/" className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-elevated">
          Settings
        </Link>
      </aside>
      <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div>
              <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2 flex items-center gap-2">
                <DynamicIcon emoji="📝" className="w-6 h-6 text-gold" /> Blog Posts
              </h1>
              <p className="text-text-muted">Manage your blog content</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link href="/admin/translations/" className="btn-outline w-full sm:w-auto justify-center flex items-center gap-2">
                <DynamicIcon emoji="🗣️" className="w-4 h-4" /> Translations
              </Link>
              <Link href="/admin/settings/" className="btn-outline w-full sm:w-auto justify-center flex items-center gap-2">
                <DynamicIcon emoji="⚙️" className="w-4 h-4" /> Settings
              </Link>
              <Link href="/admin/posts/new/" className="btn-primary w-full sm:w-auto justify-center">
                + New Post
              </Link>
            </div>
          </header>

          {errorMsg && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-kenya-red/40 bg-kenya-red/10 px-4 py-3 text-sm text-kenya-red-light flex items-center justify-between"
            >
              <span>{errorMsg}</span>
              <button
                type="button"
                onClick={() => setErrorMsg(null)}
                className="text-xs underline ml-4"
              >
                Dismiss
              </button>
            </div>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
              <div className="flex justify-center mb-3">
                <DynamicIcon emoji="📝" className="w-10 h-10 text-text-muted" />
              </div>
              <p className="text-text-secondary">No posts yet. Create your first post!</p>
            </div>
          ) : (
            <div className="bg-bg-card border border-border rounded-xl overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Tags</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.$id}>
                      <td className="font-medium text-text-primary">{post.title}</td>
                      <td className="text-text-secondary">{post.author}</td>
                      <td className="text-text-muted text-sm">
                        {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td>
                        <div className="flex flex-wrap gap-1">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 text-[0.625rem] bg-bg-elevated border border-border rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="text-right space-x-3">
                        <Link
                          href={`/admin/posts/edit?slug=${post.slug}`}
                          className="text-xs text-gold hover:text-gold-light"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          disabled={deleting === post.$id}
                          onClick={() => handleDelete(post.$id, post.title)}
                          className="text-xs text-kenya-red-light hover:underline disabled:opacity-50"
                        >
                          {deleting === post.$id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}