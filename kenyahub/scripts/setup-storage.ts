import { Client, Storage, Permission, Role } from "node-appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a3290500003e21b7fe1")
  .setKey(process.env.APPWRITE_API_KEY || ""); // Ensure APPWRITE_API_KEY is exported

const storage = new Storage(client);
const BUCKET_ID = "blog-images";

async function setupStorage() {
  if (!process.env.APPWRITE_API_KEY) {
    console.error("Missing APPWRITE_API_KEY environment variable. Run with: APPWRITE_API_KEY=your_key npx tsx scripts/setup-storage.ts");
    process.exit(1);
  }

  try {
    // Check if bucket exists
    try {
      await storage.getBucket(BUCKET_ID);
      console.log(`Bucket ${BUCKET_ID} already exists.`);
    } catch (e: any) {
      if (e.code === 404) {
        console.log(`Creating bucket ${BUCKET_ID}...`);
        await storage.createBucket(
          BUCKET_ID,
          "Blog Images",
          [
            Permission.read(Role.any()), // Anyone can view images
            Permission.create(Role.users()), // Only logged in users (admins) can upload
            Permission.update(Role.users()),
            Permission.delete(Role.users()),
          ],
          false, // fileSecurity
          true,  // enabled
          10485760, // 10MB limit
          ["jpg", "jpeg", "png", "gif", "webp", "svg"], // Allowed extensions
          "webp", // Compression
          false, // Encryption
          true   // Antivirus
        );
        console.log(`Bucket ${BUCKET_ID} created successfully!`);
      } else {
        throw e;
      }
    }
  } catch (error) {
    console.error("Failed to setup storage:", error);
  }
}

setupStorage();
