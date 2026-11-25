"use client";

import { useState } from "react";
import Link from "next/link";

export interface BlogListItem {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string | null;
  readTime: number;
  tags?: string[];
}

const PAGE_SIZE = 12;

export default function BlogListClient({ posts }: { posts: BlogListItem[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePosts = posts.slice(0, visibleCount);
  const remaining = posts.length - visiblePosts.length;

  return (
    <div>
      <p className="text-xs text-text-muted mb-5">
        Showing {visiblePosts.length} of {posts.length} guides
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visiblePosts.map((post) => (
          <article
            key={post.slug}
            className="cv-auto bg-bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-gold transition-colors group flex flex-col justify-between"
          >
            <Link href={`/blog/${post.slug}/`} prefetch={false} className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-text-muted">
                  <span>By {post.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                        timeZone: "Africa/Nairobi",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime} min read</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[0.625rem] bg-bg-elevated border border-border rounded-full text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[0.625rem] bg-transparent text-text-muted">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(posts.length, prev + PAGE_SIZE))}
            className="px-5 py-2.5 rounded-full bg-gold text-kenya-black text-xs sm:text-sm font-bold hover:bg-gold-light transition-colors cursor-pointer"
          >
            Load More Guides ({Math.min(PAGE_SIZE, remaining)} of {remaining} remaining)
          </button>
          {remaining > PAGE_SIZE && (
            <button
              type="button"
              onClick={() => setVisibleCount(posts.length)}
              className="px-4 py-2.5 rounded-full bg-bg-card border border-border text-text-secondary hover:text-gold hover:border-gold/50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Show All ({posts.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}
