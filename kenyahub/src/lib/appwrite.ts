import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a3290500003e21b7fe1");

export const databases = new Databases(client);
export const account = new Account(client);
export { client };
