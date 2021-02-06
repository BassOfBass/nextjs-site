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