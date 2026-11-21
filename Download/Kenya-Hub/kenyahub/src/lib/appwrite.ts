import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a3290500003e21b7fe1");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { client };

/**
 * Verifies that the current Appwrite session belongs to an authenticated admin user
 * (rejecting anonymous sessions or unprivileged accounts if NEXT_PUBLIC_ADMIN_EMAIL is configured).
 */
export async function verifyAdminAccount(): Promise<string | null> {
  try {
    const u = await account.get();
    if (!u || !u.email) {
      return null;
    }
    const configuredAdminEmail =
      typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_ADMIN_EMAIL : undefined;
    const hasAdminLabel = Array.isArray(u.labels) && u.labels.includes("admin");
    if (
      configuredAdminEmail &&
      u.email.toLowerCase() !== configuredAdminEmail.toLowerCase() &&
      !hasAdminLabel
    ) {
      return null;
    }
    return u.email;
  } catch {
    return null;
  }
}