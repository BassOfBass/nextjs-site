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
 * @property {CatAPIBreed[]} breeds
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
const catKey = process.env.CATAPI_KEY;
const defaultParams = {
  "size": "med",
  "order": "RANDOM",
  "limit": "20",
  "format": "json"
}

export async function getRandomCat() {
  try {
    const headers = new Headers({"x-api-key": catKey});
    const req = new Request("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: headers
    });

    const res = await fetch(req);
    /**
     * @type CatAPIEntry[]
     */
    const randomCat = await res.json();

    if (!randomCat) {
      throw new Error("No cat found");
    }

    return randomCat;

  } catch (error) {
    console.error(error);
  }
}

/**
 * @param {URLSearchParams | {}} [params] 
 */
export async function getCats( params = defaultParams) {
  try {
    const headers = new Headers({"x-api-key": catKey});
    const searchParams = new URLSearchParams(params).toString();
    const url = new URL("https://api.thecatapi.com/v1/images/search");

    url.search = searchParams;

    const req = new Request(url.toString(), {
      method: "GET",
      headers: headers,
    });
    

    const res = await fetch(req);
    /**
     * @type CatAPIEntry[]
     */
    const cats = await res.json();

    return cats;

  } catch (error) {
    console.error(error);
  }
}

/**
 * @param {{}} [params] 
 */
export async function getCatsByBreed(params = {
  "size": "med",
  "order": "RANDOM",
  "limit": "20",
}) {

  try {
    const endpoint = "https://api.thecatapi.com/images/search";
    const headers = new Headers({"x-api-key": catKey});
    const searchParams = new URLSearchParams(params).toString();
    const url = new URL(endpoint);

    const req = await fetch(url.toString(), {
      method: "GET",
      headers: headers
    })

    url.search = searchParams;

    return;

  } catch (error) {
    console.error(error);
  }

}

export async function getBreedList() {

  try {
    const endpoint = "https://api.thecatapi.com/v1/breeds";
    const headers = new Headers({"x-api-key": catKey});

    const req = await fetch(endpoint, {
      method: "GET",
      headers
    });
    /**
     * @type CatAPIBreedFull[]
     */
    const data = await req.json();
    const breedList = data.map(({id, name}) => {
      return {
        id, name
      }
    });

    return breedList;
    
  } catch (error) {
    console.error(error);
  }
}