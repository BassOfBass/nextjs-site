import { ObjectID } from "mongodb";
import { connectToDatabase } from "lib/server/mongodb";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getMovieByID(req, res) {
  const { query: { id } } = req;
  const mongoID = new ObjectID(id);
  const { db } = await connectToDatabase();

  const movie = await db
    .collection("movies")
    .findOne({ id: mongoID })

  res.json(movie);
}
