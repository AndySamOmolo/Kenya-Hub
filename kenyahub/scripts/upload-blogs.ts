import { Client, Databases, ID, Query } from "node-appwrite";
import { STATIC_BLOG_POSTS } from "../src/data/blog-posts";

const PROJECT_ID = "6a3290500003e21b7fe1";
const DATABASE_ID = "kenyahub-db";
const COLLECTION_ID = "blogs";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

const API_KEY = process.env.APPWRITE_API_KEY;

if (!API_KEY) {
  console.error("Error: APPWRITE_API_KEY environment variable is not set.");
  console.error("Generate an API Key in the Appwrite Console with documents.read and documents.write permissions.");
  process.exit(1);
}

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)
  .setKey(API_KEY);

const databases = new Databases(client);

async function uploadBlogs() {
  console.log(`Found ${STATIC_BLOG_POSTS.length} static blog posts in src/data/blog-posts.ts. Starting Appwrite sync...`);

  let failedCount = 0;

  for (const post of STATIC_BLOG_POSTS) {
    try {
      const existingDocs = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("slug", post.slug),
        Query.limit(1),
      ]);

      const readTime = post.readTime || Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200));
      const documentData = {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        author: post.author,
        publishedAt: post.publishedAt.split("T")[0],
        coverImage: post.coverImage || null,
        tags: post.tags || [],
        content: post.content,
        readTime,
        updatedAt: (post.updatedAt || new Date().toISOString()).split("T")[0],
      };

      if (existingDocs.documents.length > 0) {
        const docId = existingDocs.documents[0].$id;
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, docId, documentData);
        console.log(`Updated existing blog: ${post.title}`);
      } else {
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), documentData);
        console.log(`Created new blog: ${post.title}`);
      }
    } catch (error: unknown) {
      failedCount += 1;
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`Failed to sync ${post.slug}:`, msg);
    }
  }

  if (failedCount > 0) {
    console.error(`\nBlog sync finished with ${failedCount} failure(s).`);
    process.exitCode = 1;
    return;
  }

  console.log("\nBlog sync complete!");
}

uploadBlogs().catch((err) => {
  console.error(err);
  process.exit(1);
});
