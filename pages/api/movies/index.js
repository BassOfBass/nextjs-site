import { connectToDatabase } from "lib/server/mongodb";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getMovies(req, res) {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);

};