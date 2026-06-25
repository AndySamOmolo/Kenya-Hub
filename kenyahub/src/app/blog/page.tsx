"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

interface BlogPost {
  $id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
          Query.orderDesc("publishedAt"),
          Query.limit(50),
        ]);
        setPosts(response.documents as unknown as BlogPost[]);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Collect all unique tags
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));

  const filteredPosts = selectedTag
    ? posts.filter((p) => p.tags?.includes(selectedTag))
    : posts;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2">
          📝 Blog
        </h1>
        <p className="text-text-muted">
          Articles and guides on Kenyan topics — tools, government services, education, and more.
        </p>
      </header>

      {/* Tag Filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTag(null)}
            className={
              selectedTag === null
                ? "btn-gold !px-3 !py-1.5 !text-xs !rounded-lg"
                : "btn-outline !px-3 !py-1.5 !text-xs !rounded-lg"
            }
          >
            All Posts
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={
                selectedTag === tag
                  ? "btn-gold !px-3 !py-1.5 !text-xs !rounded-lg"
                  : "btn-outline !px-3 !py-1.5 !text-xs !rounded-lg"
              }
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-bg-card border border-border rounded-xl p-6 animate-pulse">
              <div className="h-6 bg-bg-elevated rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-bg-elevated rounded w-full mb-2"></div>
              <div className="h-4 bg-bg-elevated rounded w-2/3 mb-4"></div>
              <div className="flex gap-4">
                <div className="h-3 bg-bg-elevated rounded w-20"></div>
                <div className="h-3 bg-bg-elevated rounded w-24"></div>
                <div className="h-3 bg-bg-elevated rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <p className="text-4xl mb-3">✍️</p>
          <p className="text-text-secondary text-sm">
            {selectedTag ? `No posts tagged "${selectedTag}".` : "No posts yet. Check back soon!"}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.$id}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[0.625rem] bg-bg-elevated border border-border rounded-full text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}