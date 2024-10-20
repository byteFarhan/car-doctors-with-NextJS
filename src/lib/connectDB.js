import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export async function connectDB() {
  try {
    if (db) return db;
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("car-doctors");
    return db;
  } catch (error) {
    console.log({ error });
  }
}
