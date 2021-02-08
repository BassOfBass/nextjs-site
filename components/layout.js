import Link from "next/link"
import Head from "next/head"
import { authorGitHubPage } from "configs/env-vars"

// @ts-expect-error
import styles from "./layout.module.scss"

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta 
          name="description" 
          content="This is BoB's website built with Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "BoB's site"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="BoB's site" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
