import Link from "next/link"
import { authorGitHubPage } from "configs/env-vars"

// @ts-expect-error
import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.gheader}>
        <ul className={styles.gtop}>
          <li>
            <Link href="/">
              <a className={styles.glogo}>Logo TBD</a>
            </Link>
          </li>
        </ul>
        <nav className={styles.gnav}>
          {/* <div>
            <Link href="/authorization">
              <a className={styles.gnavlink}><span className="fas fa-user-plus"></span> Register</a>
            </Link>
          </div> */}
          <div>
            <Link href="/apis">
              <a className={styles.gnavlink}><span className="fas fa-database"></span> APIs</a>
            </Link>
          </div>
        </nav>
      </header>
      
      <main id="maincontent">
        {children}
      </main>

      <footer className={styles.gfooter}>
        <address>
          <a href={authorGitHubPage}><span className="fab fa-github"></span> My github</a>
        </address>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo"/>
        </a> */}
      </footer>
    </>
  )
}
