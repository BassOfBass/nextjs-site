import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import ImageAnchor from "../../components/image-anchor";
import { getRandomCat } from "../../lib/third-party-apis/cat-api";

// @ts-expect-error
import styles from "./index.module.scss";

const urlBase = "/third-party-apis";

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
              <Link href={`${urlBase}/cat-api`}>
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
              <Link href={`${urlBase}/dog-api`}>
                <a>Dog API</a>
              </Link>
            </h2>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const randomCat = await getRandomCat();
  
  if (!randomCat) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      randomCat
    }
  }
}