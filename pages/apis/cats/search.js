import Head from "next/head";

import { Layout } from "@components";
import { GetServerSideProps, NextPage } from "next";

/**
 * @typedef CatSearchProps
 * @property {{}} [result]
 */
/**
 * @type NextPage<CatSearchProps>
 */
function CatSearch({ result }) {
  return (
    <Layout>
      <Head>
        <title>Cat API Search</title>
      </Head>

      <h1>Search cats</h1>
      <section></section>
    </Layout>
  )
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps({}){
  return {
    props: {
      result
    }
  }
}

export default CatSearch;