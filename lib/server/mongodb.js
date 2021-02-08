import { MongoClient, Db } from 'mongodb';
import { mongoURL, mongoDBName } from "configs/env-vars";

if (!mongoURL) {
  throw new Error(
    'Please define the "MONGODB_URI" environment variable inside .env.local'
  );
}

if (!mongoDBName) {
  throw new Error(
    'Please define the "MONGODB_DB" environment variable inside .env.local'
  );
}

/**
 * @typedef MongoCustomCache
 * @property { null | { client: MongoClient, db: Db }} conn
 * @property { null | { client: MongoClient, db: Db }} promise
 */
/**
 * Global is used here to maintain a cached connection 
 * across hot reloads in development. 
 * 
 * This prevents connections growing exponentially
 * during API Route usage.
 * 
 * @type MongoCustomCache
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const mongoClient = await MongoClient.connect(mongoURL, opts);

    cached.promise = { 
      client: mongoClient,
      db: mongoClient.db(mongoDBName)
    }
  }

  cached.conn = cached.promise;

  return cached.conn;
}
