/*
  In order to keep server-only secrets safe, Next.js replaces `process.env.*` with the correct values at build time. This means that `process.env` is not a standard JavaScript object, so you’re not able to use object destructuring. Environment variables must be referenced as e.g. `process.env.NEXT_PUBLIC_PUBLISHABLE_KEY`, not `const { NEXT_PUBLIC_PUBLISHABLE_KEY } = process.env.`
*/

/**
 * Cat API
 * 
 * Use it as the `x-api-key` header when making any request to the API, 
 * or by adding as a query string parameter 
 * e.g. `api_key=80c93a02-0e8b-422a-b326-f0f4a96e59af`.
 * 
 * Details on authentication: https://docs.thecatapi.com/authentication
 */
export const catAPIKey = process.env.CATAPI_KEY;

/**
 * Dog API
 * 
 * Use it as the `x-api-key` header when making any request to the API, 
 * or by adding as a query string parameter 
 * e.g. 'api_key=7f9a6d7d-34f1-41ff-af54-e1ee8e1ba57a'
 * 
 * Details on authentication: https://docs.thedogapi.com/authentication
 */
export const dogAPIKey = process.env.DOGAPI_KEY;

export const authorGitHubPage = process.env.MY_GITHUB;
export const authorEmail = process.env.MY_EMAIL;
export const mongoURL = process.env.MONGODB_URI;
export const mongoDBName = process.env.MONGODB_DB;
/**
 * "dev" or "prod".
 */
export const productionMode = process.env.PRODUCTION_MODE || "prod";
