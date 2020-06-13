/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { ArticleSummary } from '../app/types'
import Wrapper from '../components/Wrapper'
import ArticleCards from '../components/ArticleCards'

type Data = {
  allMarkdownRemark: {
    edges: { node: ArticleSummary }[]
  }
}

function ArticlesPage(props: PageProps<Data>) {
  const articles = props.data.allMarkdownRemark.edges.map((edge) => edge.node)

  return (
    <Layout>
      <SEO title="Blog" />

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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: {
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.md$/" }
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
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
