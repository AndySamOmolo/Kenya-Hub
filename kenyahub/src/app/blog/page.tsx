import Link from "next/link";
import { FileText } from "lucide-react";
import { Client, Databases, Query } from "node-appwrite";
import { STATIC_BLOG_POST_SUMMARIES } from "@/data/blog-posts-summary";
import BlogListClient from "./BlogListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog",
  description:
    "In-depth guides and statutory analyses on Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, Mjengo construction costs, SHA healthcare, CBC education, and cultural heritage.",
  keywords: [
    "Kenya tax and finance guides",
    "PAYE tax guide Kenya 2026",
    "M-Pesa tariff guide 2026",
    "KRA car import duty CRSP guide",
    "cost of building a house in Kenya 2026",
    "SACCO loans and dividends Kenya",
    "SHA SHIF health insurance guide Kenya",
    "Kenyan languages and proverbs blog",
  ],
  alternates: {
    canonical: "https://kenyahub.me/blog/",
    languages: {
      "en-KE": "https://kenyahub.me/blog/",
      en: "https://kenyahub.me/blog/",
      "x-default": "https://kenyahub.me/blog/",
    },
  },
  openGraph: {
    title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog | KenyaHub",
    description:
      "In-depth guides and statutory analyses on Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, CBC education, and cultural heritage.",
    url: "https://kenyahub.me/blog/",
    siteName: "KenyaHub",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KenyaHub Blog — Kenyan Tax, Finance & Cultural Heritage Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Guides, Tax, Finance & Cultural Heritage Blog | KenyaHub",
    description:
      "In-depth guides and statutory analyses on Kenyan PAYE taxes, M-Pesa tariffs, KRA car imports, SACCO loans, and cultural heritage.",
    images: ["/og-image.png"],
  },
};

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";
const APPWRITE_TIMEOUT_MS = 5000;
const EXCLUDED_SLUGS = new Set([
  "greatest-kenyan-hiphop-albums-of-all-time",
  "traditional-bantu-beliefs-and-magic-in-kenya",
  "thahu-purification-and-restoration-kikuyu-kamba",
  "circumcision-age-grades-community-memory-kikuyu-kamba",
  "death-burial-ancestral-spirits-ngoma-aimu-kikuyu-kamba",
  "mundu-mugo-divination-mbugu-healing-kikuyu-kamba",
]);

function isHighQualityAppwritePost(doc: any): boolean {
  if (!doc || !doc.slug || EXCLUDED_SLUGS.has(doc.slug)) return false;
  const content = String(doc.content || "").trim();
  const summary = String(doc.excerpt || doc.summary || "").trim();
  const contentLen = content.length;
  const summaryLen = summary.length;
  if (!(contentLen >= 300 && summaryLen >= 30)) return false;
  if (content.toLowerCase().includes("<iframe")) return false;
  return true;
}

export default async function BlogPage() {
  let appwritePosts: any[] = [];

  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");

    const databases = new Databases(client);

    const response = await Promise.race([
      databases.listDocuments(
        DATABASE_ID,
        BLOGS_COLLECTION_ID,
        [Query.limit(100), Query.orderDesc("publishedAt")]
      ),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Appwrite query timed out")), APPWRITE_TIMEOUT_MS)
      ),
    ]);

    appwritePosts = response.documents
      .filter(isHighQualityAppwritePost)
      .map((doc: any) => ({
        slug: doc.slug,
        title: doc.title,
        excerpt: doc.excerpt || doc.summary,
        author: doc.author,
        publishedAt: doc.publishedAt,
        updatedAt: doc.updatedAt || null,
        readTime:
          doc.readTime ||
          Math.max(1, Math.ceil(String(doc.content || "").split(/\s+/).length / 200)),
        tags: doc.tags || [],
      }));
  } catch {
    // Static fallback when Appwrite is offline, paused, or times out
  }

  const allPostsMap = new Map();

  for (const post of STATIC_BLOG_POST_SUMMARIES) {
    allPostsMap.set(post.slug, post);
  }

  // Allow Appwrite remote posts to update/override STATIC_BLOG_POST_SUMMARIES when post.slug matches
  for (const post of appwritePosts) {
    const existing = allPostsMap.get(post.slug);
    allPostsMap.set(post.slug, existing ? { ...existing, ...post } : post);
  }

  const posts = Array.from(allPostsMap.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kenyahub.me/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kenyahub.me/blog/",
      },
    ],
  };

  const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KenyaHub Statutory Guides, Tax & Cultural Heritage Articles",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: post.title,
      url: `https://kenyahub.me/blog/${post.slug}/`,
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-7 pb-10 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListSchema) }}
      />
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3 text-border-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-text-secondary">Blog</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2 flex items-center gap-2">
          <FileText className="w-8 h-8 text-gold" aria-hidden="true" /> Kenya Guides, Tax &amp; Heritage Blog
        </h1>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          In-depth editorial guides, worked statutory calculations, and linguistic research covering Kenyan personal finance, KRA taxes, education, housing, healthcare, and cultural heritage.
        </p>
      </header>

      {/* Posts (Paginated 2-column grid with prefetch={false}) */}
      <BlogListClient
        posts={posts.map((post) => ({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt ?? null,
          readTime: post.readTime,
          tags: post.tags || [],
        }))}
      />
    </div>
  );
}