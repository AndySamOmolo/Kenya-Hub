import { Client, Databases, Query } from "node-appwrite";
import BlogPostContent from "./BlogPostContent";
import { STATIC_BLOG_POSTS, getStaticBlogPost, getStaticBlogSlugs } from "@/data/blog-posts";

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
}

// Generate static params for all blogs at build time
export async function generateStaticParams() {
  // Always include static blog post slugs
  const staticSlugs = getStaticBlogSlugs().map((slug) => ({ slug }));

  // Also try to fetch Appwrite blog slugs
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

    appwriteSlugs = response.documents.map((doc) => ({
      slug: doc.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch Appwrite blog posts:", error);
  }

  // Merge and deduplicate
  const allSlugs = new Map<string, { slug: string }>();
  for (const s of [...staticSlugs, ...appwriteSlugs]) {
    allSlugs.set(s.slug, s);
  }

  const params = Array.from(allSlugs.values());

  // Next.js throws an error if generateStaticParams returns an empty array with output: export
  if (params.length === 0) {
    return [{ slug: "_empty" }];
  }

  return params;
}

// Dynamically generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check static posts first
  const staticPost = getStaticBlogPost(slug);
  if (staticPost) {
    return {
      title: `${staticPost.title} | KenyaHub Blog`,
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

  // Try Appwrite
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
        title: `${post.title} | KenyaHub Blog`,
        description: post.excerpt,
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
    title: "Blog Post Not Found | KenyaHub",
  };
}

// Server Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost | null = null;

  // Check static posts first
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
    };
  }

  // If not static, try Appwrite
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

  // Article structured data for SEO
  const articleJsonLd = post ? {
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
    mainEntityOfPage: `https://kenyahub.me/blog/${post.slug}`,
    ...(post.coverImage && { image: post.coverImage }),
    keywords: post.tags?.join(", "),
  } : null;

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <BlogPostContent post={post} />
    </>
  );
}