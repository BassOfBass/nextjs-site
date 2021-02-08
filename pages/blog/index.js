import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "@components";

import { GetStaticProps } from "next";
import { BlogArticle } from "./[article]"
import { isProduction } from "configs/vars";

/**
 * @typedef BlogListProps
 * @property { BlogArticle[] } articles
 */
/**
 * @param { BlogListProps } props
 */
function BlogList({ articles }) {
  return (
    <Layout>
      <Head>
        <title>BoB's Blog</title>
      </Head>

      <h1>My blog</h1>
      <section>
        {/* {articles.map(({ title, id, author}) => (
          <article key={id}>
            <header>
              <h2>
                <Link href={`/blog/${id}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <div>
                <Image 
                  src="/media/images/profile.jpg" 
                  width={144} 
                  height={144} 
                />
              </div>
              <p>By {author}</p>
            </header>
            <section></section>
            <footer></footer>
          </article>
        ))} */}
      </section>
    </Layout>
  )
}

/**
 * @type GetStaticProps
 */
export async function getStaticProps({}) {

  if (isProduction) {
    return {
      notFound: true
    }
  }
  
  const blogs = [];

  return {
    props: {
      blogs
    }
  }
}

export default BlogList;