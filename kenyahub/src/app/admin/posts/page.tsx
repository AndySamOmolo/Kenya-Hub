"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { account, databases } from "@/lib/appwrite";

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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const u = await account.get();
        setUser(u.email);
        const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID);
        setPosts(response.documents as unknown as BlogPost[]);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  if (loading) {
    return <div className="max-w-6xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-text-secondary">Please <Link href="/admin/login" className="text-gold">sign in</Link> to access this page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
            📝 Blog Posts
          </h1>
          <p className="text-text-muted">Manage your blog content</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/settings" className="px-4 py-2 rounded-lg bg-bg-card border border-border text-sm font-medium text-text-primary hover:text-gold transition-colors">
            ⚙️ Settings
          </Link>
          <Link href="/admin/posts/new" className="btn-primary shrink-0">
            + New Post
          </Link>
        </div>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <p className="text-4xl mb-3">📝</p>
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
                  <td className="text-right">
                    <Link
                      href={`/admin/posts/edit?slug=${post.slug}`}
                      className="text-xs text-gold hover:text-gold-light"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}