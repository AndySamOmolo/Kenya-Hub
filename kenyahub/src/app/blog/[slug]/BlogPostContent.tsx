"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { markdownToHtml, extractMarkdownToc } from "@/lib/markdown";
import { getSourceById } from "@/data/language-sources";
import { getRelatedToolsForBlogPost, getRelatedBlogPostsForBlogPost } from "@/lib/seo";
import { getCategoryInfo } from "@/lib/tools-registry";

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
  sources?: { sourceId: string; title: string; note: string }[];
}

export default function BlogPostContent({ post }: { post: BlogPost | null }) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Reading progress bar — uses ref to avoid re-renders that destroy iframes
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && progressRef.current) {
      const progress = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      progressRef.current.style.width = `${progress}%`;
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

  const tocHeadings = useMemo(
    () => (post?.content ? extractMarkdownToc(post.content) : []),
    [post?.content]
  );

  const relatedTools = useMemo(
    () => (post ? getRelatedToolsForBlogPost(post.slug, post.tags || [], post.title, 4) : []),
    [post]
  );

  const relatedPosts = useMemo(
    () => (post ? getRelatedBlogPostsForBlogPost(post.slug, post.tags || [], 3) : []),
    [post]
  );

  if (!post) {
    return (
      <div data-error-page="true" data-nosnippet="true" className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex justify-center mb-4">
          <DynamicIcon emoji="📄" className="w-12 h-12 text-text-muted" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-2 font-[family-name:var(--font-outfit)]">
          Post Not Found
        </h1>
        <p className="text-text-secondary mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/blog/" className="btn-primary inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const contentHtml = post.content ? markdownToHtml(post.content) : "";
  const isThinOrEmbedHeavy =
    (post.content?.length || 0) < 1200 ||
    Boolean(post.readTime && post.readTime <= 1) ||
    contentHtml.includes("<iframe");

  return (
    <>
      <div ref={progressRef} className="fixed top-0 left-0 z-50 h-0.5 bg-gold transition-all duration-150 ease-out" style={{ width: "0%" }} />

      <article data-error-page={isThinOrEmbedHeavy ? "true" : undefined} className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted mb-8 flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/blog/" className="hover:text-gold transition-colors">
            Blog
          </Link>
          <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-text-secondary truncate max-w-[260px] sm:max-w-[420px]">{post.title}</span>
        </nav>

        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
            <span>By {post.author}</span>
            <span className="hidden sm:inline">•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="hidden sm:inline">•</span>
            <span>{post.readTime} min read</span>
            {post.updatedAt && (
              <>
                <span className="hidden sm:inline">•</span>
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
                  className="px-2.5 py-0.5 text-[0.65rem] bg-bg-elevated border border-border rounded-full text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Automatic Table of Contents for SERP Jump-To Sitelinks */}
        {tocHeadings.length >= 3 && (
          <nav
            aria-label="Table of Contents"
            className="mb-8 bg-bg-card border border-border rounded-xl p-4 sm:p-5"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-gold mb-2.5 flex items-center gap-1.5">
              <DynamicIcon emoji="📑" className="w-3.5 h-3.5" /> In This Guide ({tocHeadings.length} Sections)
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-text-secondary">
              {tocHeadings.map((h, idx) => (
                <li key={h.id} className="truncate">
                  <a
                    href={`#${h.id}`}
                    className="hover:text-gold transition-colors inline-flex items-baseline gap-1.5"
                  >
                    <span className="text-gold font-semibold">{idx + 1}.</span>
                    <span className="truncate">{h.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {post.sources && post.sources.length > 0 && (
          <aside className="mt-10 rounded-xl border border-border bg-bg-card p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-text-primary">Sources and context</h2>
            <div className="mt-3 space-y-3">
              {post.sources.map((source) => {
                const sourceMeta = getSourceById(source.sourceId);
                return (
                  <div key={source.sourceId} className="border-b border-border/50 last:border-0 pb-3 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-medium text-gold">{source.title}</p>
                      {sourceMeta && (
                        <span className="text-[0.625rem] px-2 py-0.5 rounded bg-bg-elevated border border-border text-text-muted">
                          Published {sourceMeta.published}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-text-secondary">{source.note}</p>
                    {sourceMeta && sourceMeta.languages.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[0.6rem] text-text-muted">Related language courses:</span>
                        {sourceMeta.languages.map((lang) => (
                          <Link
                            key={lang}
                            href={`/tools/learn/${lang}/`}
                            className="text-[0.6rem] px-2 py-0.5 rounded-full bg-gold/10 border border-gold/25 text-gold hover:bg-gold/20 transition-colors capitalize"
                          >
                            Learn {lang} →
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        {/* Related Interactive Calculators & Tools */}
        {relatedTools.length > 0 && (
          <section className="mt-10 pt-8 border-t border-border">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
                <DynamicIcon emoji="🧰" className="w-4 h-4 text-gold" /> Related Free Kenyan Calculators &amp; Tools
              </h2>
              <Link href="/tools/" className="text-xs font-semibold text-gold hover:underline shrink-0">
                All Tools →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTools.map((tool) => {
                const cat = getCategoryInfo(tool.category);
                return (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}/`}
                    className="bg-bg-card border border-border hover:border-gold/50 rounded-xl p-4 transition-all group flex items-start gap-3"
                  >
                    <span className="text-xl shrink-0 mt-0.5">
                      <DynamicIcon emoji={tool.icon} className="w-[1em] h-[1em]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors">
                        {tool.shortTitle}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-2 mt-0.5 leading-relaxed">
                        {tool.description}
                      </p>
                      {cat && (
                        <span className={`badge ${cat.badgeClass} mt-2`}>
                          {cat.name}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Blog Guides */}
        {relatedPosts.length > 0 && (
          <section className="mt-10 pt-8 border-t border-border">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary flex items-center gap-2">
                <DynamicIcon emoji="📚" className="w-4 h-4 text-gold" /> More Kenyan Guides &amp; Articles
              </h2>
              <Link href="/blog/" className="text-xs font-semibold text-gold hover:underline shrink-0">
                All Guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}/`}
                  className="bg-bg-card border border-border hover:border-gold/50 rounded-xl p-4 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[0.625rem] text-text-muted mb-1.5">
                      <span className="text-gold font-semibold">{(rp.tags || [])[0] || "Guide"}</span>
                      <span>{rp.readTime} min read</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-text-primary font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors leading-snug mb-1.5">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                      {rp.excerpt}
                    </p>
                  </div>
                  <span className="text-[0.6875rem] font-semibold text-gold mt-3 inline-block group-hover:underline">
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 pt-8 border-t border-border">
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
              href="/blog/"
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
