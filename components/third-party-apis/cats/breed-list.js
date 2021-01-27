import { CatAPIBreedFull } from "../../../lib/third-party-apis/cat-api"
import ImageAnchor from "../../image-anchor";

// @ts-expect-error
import styles from "./breed-list.module.scss";

/**
 * @typedef BreedListProps
 * @property {CatAPIBreedFull[]} breeds
 * @property {string} [baseURL]
 */

/**
 * @param {BreedListProps} props 
 */
export default function BreedList({ breeds, baseURL }) {

  return (
    <div className={styles.breedlist}>
      {breeds.map(({ 
        id, 
        name, 
        alt_names, 
        wikipedia_url, 
        description, 
        image, 
        temperament, 
        country_code, 
        origin, 
        life_span, 
        adaptability, 
        affection_level,
        child_friendly,
        dog_friendly,
        energy_level,
        grooming,
        health_issues,
        intelligence,
        shedding_level,
        social_needs,
        stranger_friendly,
        vocalisation,
        cfa_url, 
        vetstreet_url, 
        vcahospitals_url
      }) => (
        <article key={id} className={styles.breedentry}>
          <header>
            <h2 className={styles.breedname}>
              <a href={wikipedia_url}><span className="fab fa-wikipedia-w"></span> {name}</a>
            </h2>
            <p>
              {alt_names}
            </p>
            <p>
              Origin: {origin} ({country_code})
            </p>
          </header>
          <section>
            <ImageAnchor url={image.url} width={image.width} height={image.height}/>
            <p>
              {description}
            </p>
            <p>
              Temperament: {temperament}
            </p>
            {/* <p>
              Life span: {life_span}
            </p>
            <p>
              Traits:
            </p>
            <p>
              Trait scales:
            </p>
            <ul className={styles.traitscales}>
              <li>
                <label htmlFor="traitadaptibility">Adaptability:</label>
                <meter id="traitadaptibility" min ="1" max="5" low={2} high={3} optimum={4} value={adaptability} ></meter>
              </li>
              <li>
                <label htmlFor="">Affection level:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={affection_level} ></meter>
              </li>
              <li>
                <label htmlFor="">Child-friedly:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={child_friendly} ></meter>
              </li>
              <li>
                <label htmlFor="">Dog-friendly:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={dog_friendly} ></meter>
              </li>
              <li>
                <label htmlFor="">Stranger-friendly:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={stranger_friendly} ></meter>
              </li>
              <li>
                <label htmlFor="">Energy level:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={energy_level} ></meter>
              </li>
              <li>
                <label htmlFor="traitgrooming">Grooming:</label>
                <meter id="traitgrooming" min ="1" max="5" low={2} high={3} optimum={4} value={grooming} ></meter>
              </li>
              <li>
                <label htmlFor="">Health issues:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={health_issues} ></meter>
              </li>
              <li>
                <label htmlFor="">Intelligence:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={intelligence} ></meter>
              </li>
              <li>
                <label htmlFor="">Shedding level:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={shedding_level} ></meter>
              </li>
              <li>
                <label htmlFor="">Social needs:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={social_needs} ></meter>
              </li>
              <li>
                <label htmlFor="">Vocalisation:</label>
                <meter id="" min ="1" max="5" low={2} high={3} optimum={4} value={vocalisation} ></meter>
              </li>
            </ul> */}
          </section>
          <footer>
            <p>
              Other links:
            </p>
            <ul>
              <li><a href={wikipedia_url}><span className="fab fa-wikipedia-w"></span> wikipedia</a></li>
              <li><a href={cfa_url}>cfa.org</a></li>
              <li><a href={vetstreet_url}>vetstreet.org</a></li>
              <li><a href={vcahospitals_url}>vcahospitals.com</a></li>
            </ul>
          </footer>
        </article>
      ))}
    </div>
  )
}