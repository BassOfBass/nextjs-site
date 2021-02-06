import nodeFetch from "node-fetch";

import { catKey, defaultEndPoint, CatAPIEntry } from "lib/apis/cats";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getThirdPartyAPIs(req, res) {
  const { method } = req;

  if (method === "GET") {
    const catRes = await nodeFetch(defaultEndPoint, {
      method: "GET",
      headers: { "x-api-key": catKey }
    });

    /**
     * @type CatAPIEntry
     */
    const randomCat = await catRes.json();

    const resJSON = {
      cat: randomCat
    }

    return res.status(200).json(resJSON);
  }
}