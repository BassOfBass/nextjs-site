import { MongoClient } from 'mongodb';
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
 * Global is used here to maintain a cached connection 
 * across hot reloads in development. 
 * 
 * This prevents connections growing exponentially
 * during API Route usage.
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

    cached.promise = MongoClient.connect(mongoURL, opts).then((client) => {
      return {
        client,
        db: client.db(mongoDBName),
      };
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}