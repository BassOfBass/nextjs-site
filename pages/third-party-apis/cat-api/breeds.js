import Head from "next/head";
import { useState } from "react";

import Layout from "../../../components/layout";
import { getBreedList, CatAPIBreedFull } from "../../../lib/third-party-apis/cat-api";

// @ts-expect-error
import styles from "./breeds.module.scss";
import BreedList from "../../../components/third-party-apis/cats/breed-list";

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
function CatBreeds({ breeds, searchParams }) {
  const [breedList, changeBreedList] = useState(breeds);

  /**
   * @param {import("react").FormEvent<HTMLFormElement>} e 
   */
  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <Layout>
      <Head>
        <title>Cat API by breed</title>
      </Head>
      <h1>Search by breed</h1>
      <section className={styles.catbreeds}>
        <div className={styles.searchform}>
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
            
            {/* <fieldset className="radioset">
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
            </fieldset> */}
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={styles.pagecontrol}>
          <button type="submit" title="Previous page">
            <span className="fas fa-angle-left"></span>
          </button>
          <input type="number" name="page" id="breedpage" min="0" title= "Current page" defaultValue="0" form="breedsearch"/>
          <button type="submit" title="Next page">
            <span className="fas fa-angle-right"></span>
          </button>
        </div>
        <BreedList breeds={breedList} baseURL={null} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  try {
    const breeds = await getBreedList();

    return {
      props: {
        breeds
      }
    }

  } catch (error) {
    console.error(error);
  }

}

/**
 * 
 * @param {CatBreedsState} state 
 * @param {*} action 
 */
function breedSearchReducer(state, action) {
  switch (action.type) {

    case "pageup":
      return {
        ...state,
        page: state.page + 1 
      };

    case "pagedown":
      if (state.page !== 0) {

        return {
          ...state,
          page: state.page - 1
        };
      } else {
        return;
      };
      
    default:
      throw new Error("Unknown value");
  }
}

export default CatBreeds;