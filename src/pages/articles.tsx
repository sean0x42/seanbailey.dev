/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import ArticleCards from '../components/ArticleCards'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
}

function ArticlesPage(props: PageProps<Data>) {
  const articles = flattenNodes(props.data.articles)

  return (
    <Layout>
      <SEO title="Articles" />

      <Wrapper>
        <h2>Articles</h2>
        <ArticleCards articles={articles} />
      </Wrapper>
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    articles: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.mdx$/" },
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
