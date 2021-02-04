import Head from "next/head";
import { useState } from "react";

import Layout from "../../../../components/layout";
import BreedList from "../../../../components/third-party-apis/cats/breed-list";
import { retrieveAbsoluteUrl } from "../../../../lib/server";

// @ts-expect-error
import styles from "./index.module.scss";

import { GetServerSidePropsContext } from "next";
import { CatAPIBreedFull } from "../../../../lib/third-party-apis/cat-api";

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
  console.log(breeds[0].image);

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

        {/* <CatPagination /> */}

        <BreedList breeds={breedList}/>
        
      </section>
    </Layout>
  );
}

/**
 * @param {GetServerSidePropsContext} context
 */
export async function getServerSideProps({req}) {
  const { origin } = retrieveAbsoluteUrl(req, "localhost:3000")
  const url = new URL("/api/cat-api/breeds", origin).toString();
  const response = await fetch(url, {
    method: "GET"
  });

  const breeds = await response.json();

  return {
    props: {
      breeds
    }
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