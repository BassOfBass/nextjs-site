import nodeFetch, { RequestInit } from "node-fetch";

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
 * @param {any} middleware 
 */
export function runMiddleware(req, res, middleware) {

  return new Promise((resolve, reject) => {
    middleware(req, res, (result) => {

      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

/**
 * @param {IncomingMessage} req
 * @param {string} endpoint
 * @param {RequestInit} options
 */
export async function fetchAPIServer(
  req, 
  endpoint, 
  options = {}
) {

  try {
    const { origin } = retrieveAbsoluteUrl(req, "localhost:3000");
    const url = new URL(endpoint, origin).toString();
    const response = await nodeFetch(url, options);

    if (!response.ok) {
      const { status, statusText } = response;
      throw Error(`${status}:${statusText}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.log(error);
  }
  
}

/**
 * @param {string} url 
 * @param {RequestInit} options 
 * @param {"json" | "text" | "blob" | "buffer"} type 
 */
export async function fancyFetchServer(url, options = {}, type = "json"){
  try {
    const res = await nodeFetch(url, options);

    if (!res.ok) {
      const { status, statusText } = res;

      throw Error(`${status}: ${statusText}`);
    }

    const data = await res[type]();

    return data;
    
  } catch (error) {
    console.log(error);
  }
} 