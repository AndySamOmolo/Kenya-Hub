import Link from "next/link";
import { Client, Databases, Query } from "node-appwrite";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import DynamicIcon from "@/components/ui/DynamicIcon";
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
  const content = String(doc.content || "");
  if (content.length < 2500) return false;
  if (content.toLowerCase().includes("<iframe")) return false;
  if ((doc.readTime || 0) < 4) return false;
  return true;
}

export default async function BlogPage() {
  let appwritePosts: any[] = [];

  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");

    const databases = new Databases(client);

    const response = await databases.listDocuments(
      DATABASE_ID,
      BLOGS_COLLECTION_ID,
      [Query.limit(100), Query.orderDesc("publishedAt")]
    );

    appwritePosts = response.documents
      .filter(isHighQualityAppwritePost)
      .map((doc: any) => ({
        slug: doc.slug,
        title: doc.title,
        excerpt: doc.excerpt,
        author: doc.author,
        publishedAt: doc.publishedAt,
        readTime: doc.readTime,
        tags: doc.tags || [],
      }));
  } catch (error) {
    console.error("Failed to fetch Appwrite blog posts:", error);
  }

  const allPostsMap = new Map();

  for (const post of STATIC_BLOG_POSTS) {
    allPostsMap.set(post.slug, post);
  }

  for (const post of appwritePosts) {
    if (!allPostsMap.has(post.slug)) {
      allPostsMap.set(post.slug, post);
    }
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
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-10">
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
          <DynamicIcon emoji="📝" className="w-8 h-8 text-gold" /> Kenya Guides, Tax &amp; Heritage Blog
        </h1>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          In-depth editorial guides, worked statutory calculations, and linguistic research covering Kenyan personal finance, KRA taxes, education, housing, healthcare, and cultural heritage.
        </p>
      </header>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors group"
          >
            <Link href={`/blog/${post.slug}/`} className="block">
              <h2 className="text-xl font-semibold text-text-primary mb-2 font-[family-name:var(--font-outfit)] group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
                <span>By {post.author}</span>
                <span className="hidden sm:inline">•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span className="hidden sm:inline">•</span>
                <span>{post.readTime} min read</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[0.625rem] bg-bg-elevated border border-border rounded-full text-text-secondary"
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
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}