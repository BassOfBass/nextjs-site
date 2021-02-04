import Link from "next/link";

import ImageAnchor from "../../image-anchor";
import { CatAPIBreedFull } from "../../../lib/third-party-apis/cat-api"

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
export default function BreedList({ breeds }) {

  return (
    <div className={styles.breedlist}>
      {breeds.map(({ 
        id, 
        name, 
        alt_names, 
        description, 
        image, 
        country_code, 
        origin,
      }) => (
        <article key={id} className={styles.breedentry}>
          <header>
            <h2 className={styles.breedname}>
              <Link href={`/third-party-apis/cat-api/breeds/${id}`}>
                <a>{name}</a>
              </Link>
            </h2>
            <p>
              {alt_names}
            </p>
            <p>
              Origin: {origin} ({country_code})
            </p>
          </header>
          <section>
            {/* <ImageAnchor 
              url={image.url} 
              width={image.width} 
              height={image.height}
            /> */}
            <p>
              {description}
            </p>
          </section>
        </article>
      ))}
    </div>
  )
}