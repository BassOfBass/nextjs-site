import Head from 'next/head';
import Link from 'next/link';

import { Layout } from "@components";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>BoB's site</title>
      </Head>
      <h1>
        Welcome to BoB's site!
      </h1>
      <section>
        <ul>
          <li>
            Check out <Link href="/apis"><a>third-party APIs.</a></Link>
          </li>
        </ul>
      </section>  
    </Layout>
  )
}
