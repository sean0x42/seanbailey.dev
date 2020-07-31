/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import { Article as ArticleModel } from '../app/types'

import Article from '../components/Article'
import Layout from '../components/Layout'
import SubscribeForm from '../components/SubscribeForm'
import Wrapper from '../components/Wrapper'

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
        attribution={article.frontmatter.attribution}
        title={article.frontmatter.title}
        date={article.frontmatter.date}
        excerpt={article.excerpt}
        body={article.body}
      />

      <Wrapper>
        <hr />
        <SubscribeForm />
      </Wrapper>
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
          publicURL
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 450, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        attribution {
          author
          url
        }
      }
    }
  }
`
