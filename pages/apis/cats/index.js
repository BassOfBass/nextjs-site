import Head from "next/head";
import Link from "next/link";

import { Layout, ImageAnchor } from "@components"

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
              <Link href={`/apis/cats/breeds`}>
                <a>The list of breeds</a>
              </Link>
            </h2>
            <ImageAnchor url="" />
          </li>
          {/* <li>
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
          </li> */}
        </ul>
        
      </section>
    </Layout>
  )
}