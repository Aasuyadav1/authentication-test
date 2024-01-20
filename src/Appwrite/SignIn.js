import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65abf2da998e84855e9a"); 

export const account = new Account(client);
export const databases = new Databases(client);
