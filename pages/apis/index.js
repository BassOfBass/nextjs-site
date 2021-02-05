import Head from "next/head";
import Link from "next/link";

import { Layout, ImageAnchor } from "@components";

// @ts-expect-error
import styles from "./index.module.scss";

export default function ThirdPartyAPIs({randomCat}) {
  const catAPIexample = randomCat[0];
  return (
    <Layout>
      <Head>
        <title>Third Party APIs</title>
      </Head>
      <h1>Third party API examples</h1>
      <section className={styles.apiexamples}>
        <ul className={styles.apilist}>
          <li className={styles.apiitem}>
            <h2>
              <Link href={`apis/cats`}>
                <a>Cat API</a>
              </Link>
            </h2>
            <ImageAnchor 
              url={catAPIexample.url} 
              width={catAPIexample.width} 
              height={catAPIexample.height}
            />
          </li>
          <li className={styles.apiitem}>
            <h2>
              <Link href={`apis/dogs`}>
                <a>Dog API</a>
              </Link>
            </h2>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {}