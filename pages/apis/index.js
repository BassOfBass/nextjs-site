import Head from "next/head";
import Link from "next/link";

import { Layout, ImageAnchor } from "@components";
import { CatAPIEntry } from "lib/apis/cats"
import { fetchAPIServer } from "lib/server";

import { GetServerSideProps } from "next";

// @ts-expect-error
import styles from "./index.module.scss";


/**
 * @typedef ThirdPartyAPIsProps
 * @property {{ cat: CatAPIEntry }} apis
 */
/**
 * 
 * @param {ThirdPartyAPIsProps} props
 */
export default function ThirdPartyAPIs({ apis }) {
  const { cat } = apis;

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
              <Link href={`/apis/cats`}>
                <a>Cat API</a>
              </Link>
            </h2>
            <ImageAnchor 
              url={cat[0].url} 
              width={cat[0].width} 
              height={cat[0].height}
            />
          </li>
          {/* <li className={styles.apiitem}>
            <h2>
              <Link href={`apis/dogs`}>
                <a>Dog API</a>
              </Link>
            </h2>
          </li> */}
        </ul>
      </section>
    </Layout>
  )
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps({ req }) {

  const data = await fetchAPIServer(req, "/api/side", {
    method: "GET"
  });

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      apis: data
    }
  }
}