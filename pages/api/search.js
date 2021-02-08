import { NextApiHandler, PageConfig } from "next";

/**
 * @type NextApiHandler
 */
async function postSearchSite(req, res) {
  const { method, url } = req;

  switch (method) {
    case "POST":
      const results = [];

      return res.status(200).json(results);
  
    default:
      res.setHeader("Allow", "POST, HEAD");

      return res
        .status(405)
        .statusMessage(`${url} endpoint doesn't support ${method} method.`);
  }

}

/**
 * @type PageConfig
 */
export const config = {

}

export default postSearchSite;