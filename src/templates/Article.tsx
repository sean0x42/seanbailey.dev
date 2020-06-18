/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import { Article as ArticleModel } from '../app/types'

import ThanksForReading from '../components/ThanksForReading'
import Layout from '../components/Layout'
import Article from '../components/Article'

type Data = {
  mdx: ArticleModel
}

interface ContainerProps {
  data: Data
}

function Container(props: ContainerProps) {
  const article = props.data.mdx

  return (
    <Layout>
      <Article
        coverImage={article.frontmatter.cover}
        title={article.frontmatter.title}
        date={article.frontmatter.date}
        excerpt={article.excerpt}
        body={article.body}
        footerComponent={<ThanksForReading />}
      />
    </Layout>
  )
}

export default Container

export const pageQuery = graphql`
  query ArticlesById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 400, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
