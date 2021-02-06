import fetch from "node-fetch";

import { CatAPIBreedFull, catKey, defaultEndPoint } from "lib/apis/cats";

import { NextApiHandler } from "next";

/**
 * @type NextApiHandler
 */
export default async function getBreedDetail(req, res) {

  if (req.method === "GET") {

    try {
      const breedID = req.query["breed-id"];
      const url = `${defaultEndPoint}?breed-ids=${breedID}`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "x-api-key": catKey }
      })
      /**
       * @type Promise<CatAPIBreedFull>
       */
      const breed = await response.json();

      return res.status(200).json(breed);

    } catch (error) {
      console.log(error);
    }
    
  }
  

}