import Head from 'next/head';

import { Layout } from '@components';
import { connectToDatabase } from 'lib/server/mongodb';
import { isProduction } from 'configs/vars';

import { GetServerSideProps } from "next";

export default function Home({ isConnected }) {
  return (
    <Layout>
      <Head>
        <title>Mongo</title>
      </Head>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected 
          ? (
              <p>
                You are connected to MongoDB
              </p>
            ) 
          : (
              <p>
                You are NOT connected to MongoDB. Check the <code>README.md</code> for instructions.
              </p>
            )
        }
    </Layout>
  )
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps() {

  if (isProduction) {
    return { notFound: true }

  } else {
    const { client } = await connectToDatabase();
    const isConnected = await client.isConnected();

    return {
      props: { isConnected }
    }
  }
  
}
