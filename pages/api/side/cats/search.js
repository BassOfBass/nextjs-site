import nodeFetch from "node-fetch";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getSearchCats(req, res) {
  const {
    query
  } = req;
  const url = new URL();
  const response = await nodeFetch();
}