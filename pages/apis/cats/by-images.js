import Head from "next/head";
import { useState } from "react";

import { Layout, ImageAnchor } from "@components";
import { CatAPIEntry} from "lib/apis/cats";


// @ts-expect-error
import styles from "./cat-api.module.scss";

/**
 * @typedef CatAPIExampleProps
 * @property {CatAPIEntry[]} cats
 */

/**
 * @param {CatAPIExampleProps} props 
 */
function CatAPIImages({ cats }) {
  const [catList, changeCatList] = useState(cats);
  console.log(catList);
  /**
   * @param {import("react").FormEvent<HTMLFormElement>} e 
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <Layout>
      <Head>
        <title>Cat API fetches by images</title>
      </Head>

      <h1>
        <a href="https://thecatapi.com"><span className="fas fa-cat" ></span> Cat API</a>
      </h1>
      
      <section className={styles.catcollection}>
        <div className={styles.searchpanel}>
          <div className={styles.buttons}>
            <button type="button" className="hiddenswitch">
              <label htmlFor="searchoptions" className="hiddenlabel">
                <span className="fas fa-search"></span> Search
              </label>
            </button>
          </div>

          <input type="checkbox" id="searchoptions" className="hiddenswitcher" hidden />
          <div>
            <div className={styles.querytypes}>
              <button type="button" className={`hiddenswitch ${styles.querytype}`}>
                <label htmlFor="" className="hiddenlabel">
                  Breeds
                </label>
              </button>
              <button type="button" className={`hiddenswitch ${styles.querytype}`}>
                <label htmlFor="" className="hiddenlabel">
                  Categories
                </label>
              </button>
              <button type="button" className={`hiddenswitch ${styles.querytype}`}>
                <label htmlFor="" className="hiddenlabel">
                  Votes
                </label>
              </button>
              <button type="button" className={`hiddenswitch ${styles.querytype}`}>
                <label htmlFor="" className="hiddenlabel">
                  Favourites
                </label>
              </button>
              <button type="button" className={`hiddenswitch ${styles.querytype}`}>
                <label htmlFor="imagesform" className="hiddenlabel">
                  Images
                </label>
              </button>
            </div>

            <input id="imagesform" type="radio" className="hiddenswitcher" name="querytype" />
            <form className="catform" onSubmit={handleSubmit} >
              <div>
                <label htmlFor="catsize" >Size:</label>
                <select id="catsize" name="size" defaultValue="med" required>
                  <option value="full">Full</option>
                  <option value="med">Median</option>
                  <option value="small">Small</option>
                  <option value="thumb">Thumbnail</option>
                </select>
              </div>
              <div>
                <label htmlFor="catmimes">MIME types:</label>
                <input type="text" id="catmimes" name="mime_types" />
              </div>
              <div>
                <label htmlFor="catorder" >Order:</label>
                <select id="catorder" name="order" required defaultValue="RANDOM">
                  <option value="RANDOM">Random</option>
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </select>
              </div>
              <div>
                <label htmlFor="imagelimit">Limit:</label>
                <input type="number" id="imagelimit" name="limit" min="1" max="100" defaultValue="18" required />
              </div>
              <div>
                <label htmlFor="catpage">Page:</label>
                <input type="number" id="catpage" name="page" min="0" defaultValue="0"/>
              </div>
              <div>
                <label htmlFor="imagepage">Category IDs:</label>
                <input type="text" id="imagepage" name="category_ids"/>
              </div>
              <div>
                <label htmlFor="imageformat" >Format:</label>
                <select id="imageformat" name="format" required>
                  <option value="json" selected>JSON</option>
                  <option value="src">SRC</option>
                </select>
              </div>
              <div>
                <label htmlFor="imagebreed">Breed ID:</label>
                <input type="text" id="imagebreed" name="breed_id"/>
              </div>
              <div>
                <button type="submit">Search by Image</button>
              </div>
            </form>
          </div>
        </div>
            
        <output className={styles.catlist}>
          {catList.map(
            ({id, url, width, height, breeds}) => (
              <article className={styles.catentry} key={id}>
                <ImageAnchor url={url} width={width} height={height}/>      
              </article>
            )
          )}
        </output>
      </section>
    </Layout>
  )
  

}

export async function getServerSideProps(context) {
  const cats = await getCats();

  if (!cats) {
    return {
      notFound: true
    }
  };

  return {
    props: {
      cats
    }
  };

};

export default CatAPIExample;