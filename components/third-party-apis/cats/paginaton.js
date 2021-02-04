// @ts-expect-error
import styles from "./pagination.module.scss"
/**
 * @typedef CatPaginationProps
 * @property {string} url
 */
/**
 * @param {CatPaginationProps} props 
 */
export function CatPaginaton({ url }) {

  return (
    <div className={styles.pagecontrol}>
      <button type="submit" title="First page">
        <span className="fas fa-angle-left"></span>
      </button>
      <button type="submit" title="Previous page">
        <span className="fas fa-angle-left"></span>
      </button>
      <input 
        type="text" 
        name="page" 
        id="breedpage" 
        min="0" 
        title= "Current page" 
        defaultValue="0" 
        form="breedsearch"
      />
      <button type="submit" title="Next page">
        <span className="fas fa-angle-right"></span>
      </button>
      <button type="submit" title="Lat page">
        <span className="fas fa-angle-right"></span>
      </button>
    </div>
  )
}