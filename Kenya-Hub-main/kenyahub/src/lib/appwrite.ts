import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a3290500003e21b7fe1");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { client };