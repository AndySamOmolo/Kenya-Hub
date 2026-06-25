import { Client, Databases, ID, Query } from "node-appwrite";
import fs from "fs/promises";
import path from "path";

// Configuration
const PROJECT_ID = "6a3290500003e21b7fe1";
const DATABASE_ID = "kenyahub-db";
const COLLECTION_ID = "blogs";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

// NOTE: You need to set APPWRITE_API_KEY in your environment before running this script
const API_KEY = process.env.APPWRITE_API_KEY;

if (!API_KEY) {
  console.error("❌ Error: APPWRITE_API_KEY environment variable is not set.");
  console.error("Please generate an API Key in your Appwrite Console under 'Overview' > 'Integrations' > 'API Keys'");
  console.error("Make sure it has 'documents.read' and 'documents.write' permissions.");
  process.exit(1);
}

// Initialize Appwrite SDK
const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)
  .setKey(API_KEY);

const databases = new Databases(client);

interface FrontMatter {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  tags?: string[];
}

// Very simple frontmatter parser
function parseMarkdown(fileContent: string): { frontmatter: FrontMatter; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    throw new Error("No frontmatter found in file");
  }

  const [_, frontmatterString, content] = match;
  const frontmatter: Partial<FrontMatter> = {};
  
  frontmatterString.split("\n").forEach(line => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove surrounding quotes if they exist
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (key === "tags") {
        frontmatter.tags = value.split(",").map(t => t.trim().replace(/^\[|\]$/g, '').trim()).filter(Boolean);
      } else {
        (frontmatter as any)[key] = value;
      }
    }
  });

  return { 
    frontmatter: frontmatter as FrontMatter, 
    content: content.trim() 
  };
}

async function uploadBlogs() {
  const blogsDir = path.join(process.cwd(), "content", "blogs");
  
  try {
    await fs.access(blogsDir);
  } catch {
    console.log(`Directory ${blogsDir} does not exist. Creating it...`);
    await fs.mkdir(blogsDir, { recursive: true });
    console.log("Please add your .md files to the content/blogs directory and run this script again.");
    process.exit(0);
  }

  const files = await fs.readdir(blogsDir);
  const markdownFiles = files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

  if (markdownFiles.length === 0) {
    console.log("No markdown files found in content/blogs");
    return;
  }

  console.log(`Found ${markdownFiles.length} markdown files. Starting sync...`);

  for (const file of markdownFiles) {
    const filePath = path.join(blogsDir, file);
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { frontmatter, content } = parseMarkdown(fileContent);

      if (!frontmatter.title || !frontmatter.slug || !frontmatter.excerpt || !frontmatter.author) {
        console.warn(`⚠️ Skipping ${file}: Missing required frontmatter (title, slug, excerpt, author)`);
        continue;
      }

      // Check if document with slug already exists
      const existingDocs = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("slug", frontmatter.slug)
      ]);

      const readTime = Math.max(1, Math.ceil(content.split(" ").length / 200));

      const documentData = {
        title: frontmatter.title,
        slug: frontmatter.slug,
        excerpt: frontmatter.excerpt,
        author: frontmatter.author,
        publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
        coverImage: frontmatter.coverImage || null,
        tags: frontmatter.tags || [],
        content: content,
        readTime: readTime,
        updatedAt: new Date().toISOString().split('T')[0]
      };

      if (existingDocs.documents.length > 0) {
        // Update existing
        const docId = existingDocs.documents[0].$id;
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, docId, documentData);
        console.log(`✅ Updated existing blog: ${frontmatter.title}`);
      } else {
        // Create new
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), documentData);
        console.log(`✨ Created new blog: ${frontmatter.title}`);
      }
    } catch (error: any) {
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }
  
  console.log("\n🎉 Sync complete!");
}

uploadBlogs().catch(console.error);
