import Head from "next/head";

import { Layout } from "@components";
import { connectToDatabase } from "lib/server/mongodb";

import { GetServerSideProps } from "next";

function Movies({ movies }) {

  return (
    <Layout>
      <Head>
        <title>
          Top 20 movies
        </title>
      </Head>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <section>
        <ul>
          {movies.map(({ title, metacritic, plot }) => (
            <li>
              <h2>{title}</h2>
              <h3>{metacritic}</h3>
              <p>{plot}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };

}

export default Movies;