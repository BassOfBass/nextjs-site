import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <section>
        <ul>
          <li>
            <h2>
              <a href="https://nextjs.org/docs">Documentation &rarr;</a>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </li>
          <li>
            <h2>
              <a href="https://nextjs.org/learn">Learn &rarr;</a>
            </h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </li>
          <li>
            <h2>
              <a href="https://github.com/vercel/next.js/tree/master/examples">Examples &rarr;</a>
            </h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </li>
          <li>
            <h2>
              <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Deploy &rarr;</a>
            </h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </li>
        </ul>
      </section>  
    </Layout>
  )
}
