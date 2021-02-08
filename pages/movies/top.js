import { Layout } from "@components";
import { connectToDatabase } from "lib/server/mongodb";

import { GetStaticProps } from "next"
import Head from "next/head";

function TopMovies({ movies }) {

  return (
    <Layout>
      <Head>
        <title>Top 1000 Movies</title>
      </Head>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <section>
        <ul>
          {movies.map((movie) => (
            <li>
              <h2>{movie.title}</h2>
              <h3>{movie.metacritic}</h3>
              <p>{movie.plot}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/**
 * @type GetStaticProps
 */
export async function getStaticProps() {

  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };

}

export default TopMovies;