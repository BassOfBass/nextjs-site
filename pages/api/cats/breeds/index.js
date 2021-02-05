import fetch from "node-fetch";
import { catKey, breedEndPoint} from "../../../../lib/apis/cats";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getBreedList(req, res) {

  if (req.method === "GET") {
    try {
      const response = await fetch(breedEndPoint, {
        method: "GET",
        headers: { "x-api-key": catKey }
      });
  
      const breeds = await response.json();

      return res.status(200).json(breeds);

    } catch (error) {
      console.log(error);
    }
  }
  
}