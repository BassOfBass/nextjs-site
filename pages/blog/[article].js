import Head from "next/head";

import { Layout } from "@components";

import { GetServerSideProps } from "next";

/**
 * @typedef BlogArticle
 * @property {string} title
 * @property {string} author
 * @property {string} id
 * @property {string} slug
 * @property {string} body
 */
/**
 * @typedef ArticleProps
 * @property { BlogArticle } article  
 */
/**
 * @param { ArticleProps } props
 */
function BlogArticlePage({ article }) {
  const { title, id, body, author } = article;

  return (
    <Layout>
      <Head>
        <title>{title} by {author}</title>
      </Head>
      <h1>{title}</h1>
      <section id={id}>
        {body}
      </section>
    </Layout>
  )
}

/**
 * @type GetServerSideProps
 */
export async function getServerSideProps({  }) {

  if (productionMode === prod) {
    return {
      notFound: true
    }
  }

  return {
    props: { article }
  }
}

export default BlogArticlePage;