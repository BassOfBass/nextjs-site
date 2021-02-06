import Head from "next/head";

import { Layout, BreedList } from "@components";
import { fetchAPIServer } from "lib/server";

// @ts-expect-error
import styles from "./index.module.scss";

import { GetServerSideProps } from "next";
import { CatAPIBreedFull } from "lib/apis/cats";

/**
 * @typedef CatBreedsState
 * @property {CatAPIBreedFull[]} breedList
 * @property {number} page
 * @property {number} limit
 * @property {URLSearchParams} searchParams 
 */

/**
 * @typedef CatBreedsProps
 * @property {CatAPIBreedFull[]} breeds
 * @property {string} searchParams 
 */

/**
 * @param {CatBreedsProps} props 
 */
function CatBreeds({ breeds }) {
  // /**
  //  * @param {import("react").FormEvent<HTMLFormElement>} e 
  //  */
  // function handleSearch(e) {
  //   e.preventDefault();
  // }

  return (
    <Layout>
      <Head>
        <title>Cat API by breed</title>
      </Head>
      <h1>Search by breed</h1>
      <section className={styles.catbreeds}>
        {/* <div className={styles.searchform}>
          <div className={styles.buttonpanel}>
            <button className="hiddenswitch" type="button" title="Search options">
              <label htmlFor="searchoptions" className="hiddenlabel">
                <span className="fas fa-search" aria-hidden></span>
              </label>
            </button>
          </div>

          <input type="checkbox" id="searchoptions" className="hiddenswitcher" hidden/>
          <form id="breedsearch" className={styles.breedsearch} onSubmit={handleSearch}>
            <div>
              <label htmlFor="catbreed">Breed:</label>
              <select name="" id="catbreed" defaultValue={breeds[0].id}>
                {breeds.map(({id, name}) => (
                  <option key={id} value={id}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="breedlimit">Limit:</label>
              <input type="number" name="limit" id="breedlimit" min="1" max="100" defaultValue="18" />
            </div>
            
            <fieldset className="radioset">
              <legend>Order</legend>
              <div className="radiowrapper">
                <input type="radio" className="radiopoint" name="order" id="breedrandom" value="RANDOM" defaultChecked/>
                <label htmlFor="breedrandom" className="radiolabel">
                  <span className="fas fa-random"></span>  Random
                </label>
              </div>
              <div className="radiowrapper">
                <input type="radio" className="radiopoint" name="order" id="breedasc" value="ASC"/>
                <label htmlFor="breedasc" className="radiolabel">
                  <span className="fas fa-sort-up"></span>  Ascending
                </label>
              </div>
              <div className="radiowrapper">
                <input type="radio" className="radiopoint" name="order" id="breeddesc" value="DESC"/>
                <label htmlFor="breeddesc" className="radiolabel">
                  <span className="fas fa-sort-down"></span>  Descending
                </label>
              </div>
            </fieldset>
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div> */}

        {/* <CatPagination /> */}

        <BreedList breeds={breeds}/>
        
      </section>
    </Layout>
  );
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps({ req }) {
  const breeds = await fetchAPIServer(req, "/api/side/cats/breeds", {
    method: "GET"
  });

  return {
    props: {
      breeds
    }
  }

}

export default CatBreeds;