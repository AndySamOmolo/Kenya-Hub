import { Client, Databases, Query } from "node-appwrite";
import BlogPostContent from "./BlogPostContent";

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
  try {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1")
      .setProject("6a3290500003e21b7fe1");
    
    const databases = new Databases(client);
    
    const response = await databases.listDocuments(
      DATABASE_ID,
      BLOGS_COLLECTION_ID,
      [Query.limit(100)] // Adjust limit if you have more than 100 posts
    );
    
    const params = response.documents.map((doc) => ({
      slug: doc.slug,
    }));
    
    // Next.js throws an error if generateStaticParams returns an empty array with output: export
    if (params.length === 0) {
      return [{ slug: "_empty" }];
    }
    
    return params;
  } catch (error) {
    console.error("Failed to fetch static params for blog posts:", error);
    return [{ slug: "_empty" }];
  }
}

// Dynamically generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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
      post = response.documents[0] as unknown as BlogPost;
    }
  } catch {
    post = null;
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