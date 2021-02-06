import fetch from "node-fetch";
import { breedsEndPoint} from "lib/apis/cats";
import { catAPIKey } from "configs/env-vars"


import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getBreedList(req, res) {

  if (req.method === "GET") {
    try {
      const response = await fetch(breedsEndPoint, {
        method: "GET",
        headers: { "x-api-key": catAPIKey }
      });
  
      const breeds = await response.json();

      return res.status(200).json(breeds);

    } catch (error) {
      console.log(error);
    }
  }
  
}