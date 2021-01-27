import Head from "next/head";
import Link from "next/link";
import ImageAnchor from "../../../components/image-anchor";

import Layout from "../../../components/layout";

const baseURL = "/third-party-apis/cat-api";

export default function CatAPICategories() {

  return (
    <Layout>
      <Head>
        <title>Cat API fetch categories</title>
      </Head>
      <h1>Cat API examples</h1>
      <section>
        <ul>
          <li>
            <h2>
              <Link href={`${baseURL}/breeds`}>
                <a>The list of breeds</a>
              </Link>
            </h2>
            <ImageAnchor url="" />
          </li>
          <li>
            <h2>
              <Link href="">
                <a>Search by category</a>
              </Link>
            </h2>
            <ImageAnchor url="" />
          </li>
          <li>
            <h2>
              <Link href="">
                <a>Search by file type</a>
              </Link>
            </h2>
            <ImageAnchor url="" />
          </li>
        </ul>
        
      </section>
    </Layout>
  )
}