import fs from "node:fs";
import path from "node:path";
import { Client, Databases, Query } from "node-appwrite";
import {
  STATIC_BLOG_POSTS,
  BLOG_SLUG_ALIASES,
  type StaticBlogPost,
} from "../src/data/blog-posts";

const PROJECT_ID = "6a3290500003e21b7fe1";
const DATABASE_ID = "kenyahub-db";
const COLLECTION_ID = "blogs";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

const API_KEY = process.env.APPWRITE_API_KEY?.trim();
const BLOG_POSTS_PATH = path.resolve(__dirname, "../src/data/blog-posts.ts");
const BLOG_SUMMARY_PATH = path.resolve(__dirname, "../src/data/blog-posts-summary.ts");

function toIsoDate(val: unknown, fallback: string): string {
  const s = typeof val === "string" ? val.trim() : "";
  if (!s) return fallback;
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return `${s}T10:00:00.000Z`;
  const ms = Date.parse(s);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : fallback;
}

function parseTimestamp(val: unknown): number {
  if (typeof val !== "string" || !val.trim()) return 0;
  const ms = Date.parse(val);
  return Number.isFinite(ms) ? ms : 0;
}

function renderBlogPostsTs(posts: StaticBlogPost[]): string {
  return `export interface BlogSource {
  sourceId: string;
  title: string;
  note: string;
}

export interface StaticBlogPost {
  $id?: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  tags: string[];
  readTime: number;
  coverImage?: string;
  content: string;
  sources?: BlogSource[];
  adsensePause?: boolean;
}

export const STATIC_BLOG_POSTS: StaticBlogPost[] = ${JSON.stringify(posts, null, 2)};

export const BLOG_SLUG_ALIASES: Record<string, string> = ${JSON.stringify(BLOG_SLUG_ALIASES, null, 2)};

export function getStaticBlogPost(slug: string): StaticBlogPost | undefined {
  const resolvedSlug = BLOG_SLUG_ALIASES[slug] || slug;
  return STATIC_BLOG_POSTS.find((post) => post.slug === resolvedSlug);
}

export function getStaticBlogSlugs(): string[] {
  return Array.from(
    new Set([
      ...STATIC_BLOG_POSTS.map((post) => post.slug),
      ...Object.keys(BLOG_SLUG_ALIASES),
    ])
  );
}
`;
}

function renderBlogSummaryTs(posts: StaticBlogPost[]): string {
  const summaries = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    publishedAt: p.publishedAt,
    updatedAt: p.updatedAt,
    tags: p.tags,
    readTime: p.readTime,
  }));
  return `// Auto-derived metadata-only summary of STATIC_BLOG_POSTS (excludes markdown body content for lean client bundles)
export interface StaticBlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt: string | null;
  tags: string[];
  readTime: number;
}

export const STATIC_BLOG_POST_SUMMARIES: StaticBlogPostSummary[] = ${JSON.stringify(summaries, null, 2)};
`;
}

async function pullBlogsFromAppwrite() {
  if (!API_KEY) {
    console.warn("::warning::APPWRITE_API_KEY not set — skipping Appwrite blog pull.");
    return;
  }

  const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);
  const databases = new Databases(client);

  const remoteDocs: Record<string, unknown>[] = [];
  let cursor: string | null = null;

  try {
    while (true) {
      const queries = [Query.limit(100)];
      if (cursor) queries.push(Query.cursorAfter(cursor));
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries);
      if (!res.documents.length) break;
      remoteDocs.push(...(res.documents as unknown as Record<string, unknown>[]));
      if (res.documents.length < 100) break;
      cursor = res.documents[res.documents.length - 1].$id;
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`::warning::Appwrite is paused or unreachable (${msg}) — keeping existing ${STATIC_BLOG_POSTS.length} static posts.`);
    return;
  }

  console.log(`Fetched ${remoteDocs.length} blog document(s) from Appwrite.`);

  const merged: StaticBlogPost[] = STATIC_BLOG_POSTS.map((p) => ({ ...p }));
  const indexBySlug = new Map<string, number>();
  merged.forEach((p, idx) => indexBySlug.set(p.slug, idx));

  let added = 0;
  let updated = 0;
  const newlyAdded: StaticBlogPost[] = [];

  for (const doc of remoteDocs) {
    const rawSlug = typeof doc.slug === "string" ? doc.slug.trim() : "";
    const slug = BLOG_SLUG_ALIASES[rawSlug] || rawSlug;
    const title = typeof doc.title === "string" ? doc.title.trim() : "";
    const content = typeof doc.content === "string" ? doc.content.trim() : "";
    if (!slug || !title || content.length < 100) continue;

    const nowIso = new Date().toISOString();
    const publishedAt = toIsoDate(doc.publishedAt || doc.$createdAt, nowIso);
    const updatedAt = toIsoDate(doc.updatedAt || doc.$updatedAt || publishedAt, publishedAt);
    const excerpt =
      typeof doc.excerpt === "string" && doc.excerpt.trim()
        ? doc.excerpt.trim()
        : content.replace(/[#*_`>\[\]()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 220);
    const author =
      typeof doc.author === "string" && doc.author.trim()
        ? doc.author.trim()
        : "KenyaHub Editorial Team";
    const tags = Array.isArray(doc.tags)
      ? doc.tags.filter((t): t is string => typeof t === "string" && t.trim().length > 0)
      : ["Kenya"];
    const readTime =
      typeof doc.readTime === "number" && doc.readTime > 0
        ? Math.round(doc.readTime)
        : Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
    const coverImage =
      typeof doc.coverImage === "string" && doc.coverImage.trim()
        ? doc.coverImage.trim()
        : undefined;

    const existingIdx = indexBySlug.get(slug);
    if (existingIdx !== undefined) {
      const existing = merged[existingIdx];
      const existingTs = parseTimestamp(existing.updatedAt || existing.publishedAt);
      const remoteTs = parseTimestamp(updatedAt);
      if (remoteTs > existingTs && content !== existing.content) {
        merged[existingIdx] = {
          ...existing,
          title,
          excerpt,
          author,
          tags: tags.length > 0 ? tags : existing.tags,
          readTime,
          updatedAt,
          ...(coverImage ? { coverImage } : {}),
          content,
        };
        updated += 1;
      }
    } else {
      const newPost: StaticBlogPost = {
        $id: typeof doc.$id === "string" ? doc.$id : String(merged.length + newlyAdded.length + 1),
        slug,
        title,
        excerpt,
        author,
        publishedAt,
        updatedAt,
        tags: tags.length > 0 ? tags : ["Kenya"],
        readTime,
        ...(coverImage ? { coverImage } : {}),
        content,
      };
      indexBySlug.set(slug, -1);
      newlyAdded.push(newPost);
      added += 1;
    }
  }

  if (added === 0 && updated === 0) {
    console.log(`No new or updated Appwrite posts to merge (${merged.length} static posts already up to date).`);
    return;
  }

  newlyAdded.sort((a, b) => parseTimestamp(b.publishedAt) - parseTimestamp(a.publishedAt));
  const finalPosts = [...newlyAdded, ...merged];

  fs.writeFileSync(BLOG_POSTS_PATH, renderBlogPostsTs(finalPosts), "utf8");
  fs.writeFileSync(BLOG_SUMMARY_PATH, renderBlogSummaryTs(finalPosts), "utf8");
  console.log(`Synced Appwrite blogs into Git: +${added} added, ${updated} updated (${finalPosts.length} total posts).`);
}

pullBlogsFromAppwrite().catch((err) => {
  console.error(err);
  process.exit(1);
});
