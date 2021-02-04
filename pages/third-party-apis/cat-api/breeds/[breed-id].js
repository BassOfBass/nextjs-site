import Head from "next/head";
import fetch from "node-fetch";
import { GetServerSideProps } from "next";

import Layout from "../../../../components/layout";
import { CatAPIBreedFull } from "../../../../lib/third-party-apis/cat-api";
import ImageAnchor from "../../../../components/image-anchor";

// @ts-expect-error
import styles from "./[breed-id].module.scss";

import { retrieveAbsoluteUrl } from "../../../../lib/server";

/**
 * @typedef BreedDetailsProps
 * @property {CatAPIBreedFull} breed  
 */

/**
 * @param {BreedDetailsProps} props
 */
function BreedDetails({ breed }) {
  const {  
    name,
    alt_names,
    origin,
    country_code,
    description,
    image,
    weight,
    temperament,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    stranger_friendly,
    energy_level,
    grooming,
    health_issues,
    intelligence,
    shedding_level,
    social_needs,
    vocalisation,
    wikipedia_url,
    cfa_url,
    vetstreet_url,
    vcahospitals_url
  } = breed;

  return (
    <Layout>
      <Head>
        <title>{name} information</title>
      </Head>
      
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{name}</h1>
          <p>
            {alt_names}
          </p>
          <p>
            Origin: {origin} ({country_code})
          </p>
        </header>
        <section className={styles.details}>
          <ImageAnchor 
            url={image.url} 
            width={image.width} 
            height={image.height}
          />

          <div className={styles.info}>
            <h2>
              Information
            </h2>
            <p>
              {description}
            </p>
            <p>
              Temperament: {temperament}
            </p>
            <p>
              Weight: {weight.metric}
            </p>
            <p>
              Life span: {life_span}
            </p>
            <p>
              Traits:
            </p>
          </div>

          <div className={styles.traits}>
            <h2>
              Trait scales:
            </h2>
            <ul className={styles.traitscales}>
              <li className={styles.trait}>
                <label htmlFor="traitadaptibility">
                  Adaptability:
                </label>
                <meter 
                  id="traitadaptibility" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={adaptability} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitaffection">
                  Affection level:
                </label>
                <meter 
                  id="traitaffection" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={affection_level} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitchild">
                  Child-friedly:
                </label>
                <meter 
                  id="traitchild" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={child_friendly} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitdog">
                  Dog-friendly:
                </label>
                <meter 
                  id="traitdog" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={dog_friendly} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitstranger">
                  Stranger-friendly:
                </label>
                <meter 
                  id="traitstranger" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={stranger_friendly} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitenergy">
                  Energy level:
                </label>
                <meter 
                  id="traitenergy" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={energy_level} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitgrooming">
                  Grooming:
                </label>
                <meter 
                  id="traitgrooming" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={grooming} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traithealth">
                  Health issues:
                </label>
                <meter 
                  id="traithealth" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={health_issues} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitintelligence">
                  Intelligence:
                </label>
                <meter 
                  id="traitintelligence" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={intelligence} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitshedding">
                  Shedding level:
                </label>
                <meter 
                  id="traitshedding" 
                  max={5} 
                  low={2.1} 
                  high={4.1} 
                  optimum={5} 
                  value={shedding_level} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitsocial">
                  Social needs:
                </label>
                <meter 
                  id="traitsocial" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={social_needs} 
                ></meter>
              </li>
              <li className={styles.trait}>
                <label htmlFor="traitvocal">
                  Vocalisation:
                </label>
                <meter 
                  id="traitvocal" 
                  max={5} 
                  low={2.1} 
                  high={4.1}  
                  optimum={5} 
                  value={vocalisation} 
                ></meter>
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <p>
            Other links:
          </p>
          <ul>
            {
              !wikipedia_url 
                ? null
                : <li><a href={wikipedia_url}><span className="fab fa-wikipedia-w"></span> wikipedia</a></li>
            }
            {
              !cfa_url
                ? null
                : <li><a href={cfa_url}>cfa.org</a></li>
            }
            {
              !vetstreet_url
                ? null 
                : <li><a href={vetstreet_url}>vetstreet.org</a></li>
            }
            {
              !vcahospitals_url
                ? null
                : <li><a href={vcahospitals_url}>vcahospitals.com</a></li>
            }
          </ul>
        </footer>
      </article>
    </Layout>
  )
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps({ req, params }) {
  const breedID = params["breed-id"];
  const { origin } = retrieveAbsoluteUrl(req, "localhost:3000");
  const url = new URL(`/api/cat-api/breeds/${breedID}`, origin).toString();
  const response = await fetch(url, {
    method: "GET"
  });
  const breed = await response.json();

;  return {
    props: {
      breed
    }
  }
}

export default BreedDetails;