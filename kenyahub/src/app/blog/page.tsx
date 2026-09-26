import Link from "next/link";
import { Client, Databases, Query } from "node-appwrite";
import { STATIC_BLOG_POSTS } from "@/data/blog-posts";
import DynamicIcon from "@/components/ui/DynamicIcon";

const DATABASE_ID = "kenyahub-db";
const BLOGS_COLLECTION_ID = "blogs";

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

    appwritePosts = response.documents.map((doc: any) => ({
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

  // Merge static posts and Appwrite posts
  // We use Map to deduplicate by slug (preferring Appwrite if there's a conflict)
  const allPostsMap = new Map();
  
  for (const post of STATIC_BLOG_POSTS) {
    allPostsMap.set(post.slug, post);
  }
  
  for (const post of appwritePosts) {
    allPostsMap.set(post.slug, post);
  }

  const posts = Array.from(allPostsMap.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Collect all unique tags
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));

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
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-2 flex items-center gap-2">
          <DynamicIcon emoji="📝" className="w-8 h-8 text-gold" /> Blog
        </h1>
        <p className="text-text-muted">
          Articles and guides on Kenyan topics — tools, government services, education, and more.
        </p>
      </header>

      {/* Tag overview */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[0.625rem] bg-bg-elevated border border-border rounded-full text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
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
                  {post.tags.map((tag: string) => (
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
    </div>
  );
}