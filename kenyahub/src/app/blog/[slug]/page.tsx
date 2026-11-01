import { notFound } from "next/navigation";
import { Client, Databases, Query } from "node-appwrite";
import BlogPostContent from "./BlogPostContent";
import { getStaticBlogPost, getStaticBlogSlugs, type BlogSource } from "@/data/blog-posts";

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
  sources?: BlogSource[];
}

// Generate static params for all blogs at build time
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

    const EXCLUDED_SLUGS = new Set(["greatest-kenyan-hiphop-albums-of-all-time"]);
    appwriteSlugs = response.documents
      .filter((doc: any) => !EXCLUDED_SLUGS.has(doc.slug) && (doc.readTime || 0) > 1 && (!doc.content || doc.content.length >= 800))
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

// Dynamically generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const staticPost = getStaticBlogPost(slug);
  if (staticPost) {
    return {
      title: staticPost.title,
      description: staticPost.excerpt,
      alternates: { canonical: `https://kenyahub.me/blog/${staticPost.slug}/` },
      openGraph: {
        title: staticPost.title,
        description: staticPost.excerpt,
        type: "article",
        publishedTime: staticPost.publishedAt,
        authors: [staticPost.author],
      },
    };
  }

  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");

    const databases = new Databases(client);

    const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
      Query.equal("slug", slug),
      Query.limit(1),
    ]);

    if (response.documents.length > 0) {
      const post = response.documents[0];
      return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://kenyahub.me/blog/${post.slug}/` },
        openGraph: {
          title: post.title,
          description: post.excerpt,
          type: "article",
          publishedTime: post.publishedAt,
          authors: [post.author],
          images: post.coverImage ? [post.coverImage] : [],
        },
      };
    }
  } catch {
    // Fallback metadata below
  }

  return {
    title: "Blog Post Not Found",
    robots: { index: false, follow: true },
  };
}

// Server Component
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

  if (!post) {
    try {
      const client = new Client()
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
        .setProject("6a3290500003e21b7fe1");

      const databases = new Databases(client);

      const response = await databases.listDocuments(DATABASE_ID, BLOGS_COLLECTION_ID, [
        Query.equal("slug", slug),
        Query.limit(1),
      ]);

      if (response.documents.length > 0) {
        post = JSON.parse(JSON.stringify(response.documents[0]));
      }
    } catch {
      post = null;
    }
  }

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "KenyaHub",
      url: "https://kenyahub.me",
    },
    mainEntityOfPage: `https://kenyahub.me/blog/${post.slug}/`,
    ...(post.coverImage && { image: post.coverImage }),
    keywords: post.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}