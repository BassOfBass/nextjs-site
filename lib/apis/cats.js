/**
 * @typedef CatAPIBreedFull
 * @property {{imperial: string, metric: string}} weight
 * @property {string} id
 * @property {string} name
 * @property {string} cfa_url
 * @property {string} vetstreet_url
 * @property {string} vcahospitals_url
 * @property {string} temperament
 * @property {string} origin
 * @property {string} country_codes
 * @property {string} country_code
 * @property {string} description
 * @property {string} life_span
 * @property {number} indoor
 * @property {number} lap
 * @property {string} alt_names
 * @property {number} adaptability
 * @property {number} affection_level
 * @property {number} child_friendly
 * @property {number} dog_friendly
 * @property {number} energy_level
 * @property {number} grooming
 * @property {number} health_issues
 * @property {number} intelligence
 * @property {number} shedding_level
 * @property {number} social_needs
 * @property {number} stranger_friendly
 * @property {number} vocalisation
 * @property {number} experimental
 * @property {number} hairless
 * @property {number} natural
 * @property {number} rare
 * @property {number} rex
 * @property {number} suppressed_tail
 * @property {number} short_legs
 * @property {string} wikipedia_url
 * @property {number} hypoallergenic
 * @property {string} reference_image_id
 * @property {{ id:string, width: number, height: number, url: string }} image
 */

/**
 * @typedef CatAPIBreedShort
 * @property {string} id
 * @property {string} name
 * @property {string} temperament
 * @property {string} life_span 
 * @property {string} alt_names
 * @property {string} wikipedia_url
 * @property {string} origin
 * @property {string} weight_imperial
 * @property {number} experimental
 * @property {number} hairless
 * @property {number} natural
 * @property {number} rare
 * @property {number} rex
 * @property {number} supress_tail
 * @property {number} short_legs
 * @property {number} hypoallergenic
 * @property {number} adaptability
 * @property {number} affection_level
 * @property {string} country_code
 * @property {number} child_friendly
 * @property {number} dog_friendly
 * @property {number} energy_level
 * @property {number} grooming
 * @property {number} health_issues
 * @property {number} intelligence
 * @property {number} shedding_level
 * @property {number} social_needs
 * @property {number} stranger_friendly
 * @property {number} vocalisation
 */

/**
 * @typedef CatAPIObject
 * @property {string} id
 * @property {string} url
 * @property {string} sub_id
 * @property {string} created_at
 * @property {string} original_filename
 * @property {{ id: number, name: string }[]} categories
 * @property {CatAPIBreedShort[]} breeds
 */


/**
 * @typedef CatAPIEntry
 * @property {string} id
 * @property {string} url
 * @property {string} width
 * @property {string} height
 * @property {string[]} breeds
 */

/**
 * @type string
 */
// @ts-expect-error
export const catKey = process.env.CATAPI_KEY;
export const defaultEndPoint = "https://api.thecatapi.com/v1/images/search";
export const breedEndPoint = "https://api.thecatapi.com/v1/breeds";
