import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";

/**
 * @param {IncomingMessage} req 
 * @param {string} setLocalhost 
 */
export function retrieveAbsoluteUrl(req, setLocalhost) {
  let protocol = "https:";
  let host = req
    ? req.headers["x-forwarded-host"] || req.headers["host"]
    : window.location.host;

  if (host.indexOf("localhost") > -1) {

    if (setLocalhost) { 
      host = setLocalhost 
    };
    
    protocol = "http:";

  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + "//" + host,
  };
}



/**
 * Helper method to wait for a middleware to execute before continuing and to throw an error when an error happens in a middleware.
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 * @param {any} fn 
 */
export function runMiddleware(req, res, fn) {

  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {

      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}