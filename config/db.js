const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectDB() {
  try {
    await client.connect();

    console.log("✅ Connected to MongoDB");

    db = client.db("contactsDB"); // your database name

    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
