import Link from "next/link";

import { ImageAnchor } from "@components";
import { CatAPIBreedFull } from "lib/apis/cats"

// @ts-expect-error
import styles from "./breed-list.module.scss";

/**
 * @typedef BreedListProps
 * @property {CatAPIBreedFull[]} breeds
 */

/**
 * TODO: check why `image` properties are undefined
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
              <Link href={`/apis/cats/breeds/${id}`}>
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
              id={image.id} 
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