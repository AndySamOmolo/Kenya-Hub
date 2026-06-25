"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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

export default function BlogPostContent({ post }: { post: BlogPost | null }) {
  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Reading progress bar
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setReadProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShareTwitter = () => {
    if (!post) return;
    const text = encodeURIComponent(`${post.title} — KenyaHub`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-4xl mb-4">📄</p>
        <h1 className="text-2xl font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
          Post Not Found
        </h1>
        <p className="text-text-secondary mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/blog" className="btn-primary inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const contentHtml = post.content ? markdownToHtml(post.content) : "";

  return (
    <>
      <div className="fixed top-0 left-0 z-50 h-0.5 bg-gold transition-all duration-150 ease-out" style={{ width: `${readProgress}%` }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <nav className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/blog" className="hover:text-gold transition-colors">
            Blog
          </Link>
          <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-text-secondary truncate max-w-[200px]">{post.title}</span>
        </nav>

        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} min read</span>
            {post.updatedAt && (
              <>
                <span>•</span>
                <span className="text-gold">
                  Updated {new Date(post.updatedAt).toLocaleDateString("en-KE", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
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
        </header>

        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-text-primary mb-1">Share this article</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-card border border-border text-text-secondary hover:text-gold transition-all"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-kenya-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Copy Link
                    </>
                  )}
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-card border border-border text-text-secondary hover:text-gold transition-all"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Share on X
                </button>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-sm text-gold hover:text-gold-light flex items-center gap-1"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
