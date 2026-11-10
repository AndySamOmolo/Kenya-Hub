import { notFound } from "next/navigation";
import { Client, Databases, Query } from "node-appwrite";
import BlogPostContent from "./BlogPostContent";
import { getStaticBlogPost, getStaticBlogSlugs, type BlogSource } from "@/data/blog-posts";

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
  sources?: BlogSource[];
}

export async function generateStaticParams() {
  const staticSlugs = getStaticBlogSlugs().map((slug) => ({ slug }));

  let appwriteSlugs: { slug: string }[] = [];
  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");

    const databases = new Databases(client);

    const response = await databases.listDocuments(
      DATABASE_ID,
      BLOGS_COLLECTION_ID,
      [Query.limit(100)]
    );

    appwriteSlugs = response.documents
      .filter(isHighQualityAppwritePost)
      .map((doc) => ({
        slug: doc.slug,
      }));
  } catch (error) {
    console.error("Failed to fetch Appwrite blog posts:", error);
  }

  const allSlugs = new Map<string, { slug: string }>();
  for (const s of [...staticSlugs, ...appwriteSlugs]) {
    allSlugs.set(s.slug, s);
  }

  return Array.from(allSlugs.values());
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const staticPost = getStaticBlogPost(slug);
  if (staticPost) {
    const canonicalUrl = `https://kenyahub.me/blog/${staticPost.slug}/`;
    return {
      title: staticPost.title,
      description: staticPost.excerpt,
      keywords: staticPost.tags,
      authors: [{ name: staticPost.author, url: "https://kenyahub.me/about/" }],
      alternates: {
        canonical: canonicalUrl,
        languages: {
          "en-KE": canonicalUrl,
          en: canonicalUrl,
        },
      },
      openGraph: {
        title: `${staticPost.title} | KenyaHub`,
        description: staticPost.excerpt,
        type: "article",
        locale: "en_KE",
        siteName: "KenyaHub",
        url: canonicalUrl,
        publishedTime: staticPost.publishedAt,
        modifiedTime: staticPost.updatedAt || staticPost.publishedAt,
        authors: [staticPost.author],
        tags: staticPost.tags,
        images: [
          {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: staticPost.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${staticPost.title} | KenyaHub`,
        description: staticPost.excerpt,
        images: ["/og-image.png"],
      },
    };
  }

  if (!EXCLUDED_SLUGS.has(slug)) {
    try {
      const client = new Client()
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
        .setProject("6a3290500003e21b7fe1");

      const databases = new Databases(client);

      const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
        Query.equal("slug", slug),
        Query.limit(1),
      ]);

      if (response.documents.length > 0 && isHighQualityAppwritePost(response.documents[0])) {
        const post = response.documents[0];
        const canonicalUrl = `https://kenyahub.me/blog/${post.slug}/`;
        return {
          title: post.title,
          description: post.excerpt,
          keywords: post.tags || [],
          authors: [{ name: post.author, url: "https://kenyahub.me/about/" }],
          alternates: {
            canonical: canonicalUrl,
            languages: {
              "en-KE": canonicalUrl,
              en: canonicalUrl,
            },
          },
          openGraph: {
            title: `${post.title} | KenyaHub`,
            description: post.excerpt,
            type: "article",
            locale: "en_KE",
            siteName: "KenyaHub",
            url: canonicalUrl,
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: [post.author],
            tags: post.tags || [],
            images: post.coverImage
              ? [post.coverImage]
              : [
                  {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                  },
                ],
          },
          twitter: {
            card: "summary_large_image",
            title: `${post.title} | KenyaHub`,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : ["/og-image.png"],
          },
        };
      }
    } catch {
      // Fallback metadata below
    }
  }

  return {
    title: "Blog Post Not Found",
    robots: { index: false, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost | null = null;

  const staticPost = getStaticBlogPost(slug);
  if (staticPost) {
    post = {
      $id: `static-${staticPost.slug}`,
      slug: staticPost.slug,
      title: staticPost.title,
      excerpt: staticPost.excerpt,
      author: staticPost.author,
      publishedAt: staticPost.publishedAt,
      updatedAt: staticPost.updatedAt,
      tags: staticPost.tags,
      readTime: staticPost.readTime,
      content: staticPost.content,
      sources: staticPost.sources,
    };
  }

  if (!post && !EXCLUDED_SLUGS.has(slug)) {
    try {
      const client = new Client()
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
        .setProject("6a3290500003e21b7fe1");

      const databases = new Databases(client);

      const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
        Query.equal("slug", slug),
        Query.limit(1),
      ]);

      if (response.documents.length > 0 && isHighQualityAppwritePost(response.documents[0])) {
        post = JSON.parse(JSON.stringify(response.documents[0]));
      }
    } catch {
      post = null;
    }
  }

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://kenyahub.me/blog/${post.slug}/`;
  const wordCount = post.content ? post.content.trim().split(/\s+/).length : 0;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "en-KE",
    wordCount,
    timeRequired: `PT${Math.max(1, post.readTime || 5)}M`,
    author: {
      "@type": "Organization",
      name: post.author || "KenyaHub Editorial Team",
      url: "https://kenyahub.me/about/",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
      logo: {
        "@type": "ImageObject",
        url: "https://kenyahub.me/og-image.png",
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: post.coverImage || "https://kenyahub.me/og-image.png",
    keywords: post.tags?.join(", "),
  };

  const breadcrumbJsonLd = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}