// @ts-expect-error
import styles from "./image-anchor.module.scss"

/**
 * @typedef ImageAnchorProps
 * @property {string} url
 * @property {string} [id]
 * @property {string} [srcset]
 * @property {string | number} [width]
 * @property {string | number} [height]
 * @property {string} [alt]
 * @property {{}[]} [sources]
 * @property {{}[]} [tracks]
 */

/**
 * An image which is also an anchor, which allows to open it by right/middle click.
 * @param {ImageAnchorProps} props 
 */
export default function ImageAnchor({ 
  url, 
  id, 
  srcset, 
  width, 
  height, 
  alt, 
  sources 
}) {
  
  return (
    <figure> 
      <a 
        className={styles.imagelink} 
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <picture id={id}>
          {!sources 
            ? null
            : (sources.map(() => {}))
          }
          <img
            src={url}
            srcSet={srcset}
            width={width}
            height={height}
            alt={alt}
          />
        </picture>
      </a>
    </figure>
  )
}
