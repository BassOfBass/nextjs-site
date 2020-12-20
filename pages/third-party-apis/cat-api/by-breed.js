import Head from "next/head";
import Layout from "../../../components/layout";
import { getCatsByBreed, CatAPIBreedShort, getBreedList} from "../../../lib/third-party-apis/cat-api";

// @ts-expect-error
import styles from "./by-breed.module.scss";

/**
 * @typedef CatBreedSearchProps
 * @property {{id: string, name:string}[]} breeds
 * @property {CatAPIBreedShort[]} cats
 * @property {string} defaultParama 
 */

/**
 * 
 * @param {CatBreedSearchProps} props 
 */
function CatBreedSearch({cats, breeds, defaultParams}) {

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
            <button className="hiddenswitch" type="button">
              <label htmlFor="searchoptions" className="hiddenlabel">
                <span className="fas fa-search"></span> Search
              </label>
            </button>
          </div>

          <input type="checkbox" id="searchoptions" className="hiddenswitcher" hidden/>
          <form onSubmit={handleSearch}>
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
        </div>
        <ul className={styles.breedlist}>
        <div className={styles.pagecontrol}>
          <button type="button">
            Previous page
          </button>
          <div>
            <label htmlFor="breedpage">Page:</label>
            <input type="number" name="page" id="breedpage" min="0" defaultValue="0" />
          </div>
          <button type="button">
            Next page
          </button>
        </div>
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    // const cats = await getCatsByBreed();
    const breeds = await getBreedList();

    return {
      props: {
        // cats
        breeds
      }
    }

  } catch (error) {
    console.error(error);
  }
}

export default CatBreedSearch;