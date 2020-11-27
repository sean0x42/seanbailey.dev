import React, { FunctionComponent } from 'react'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import ArticleCards from '../components/ArticleCards'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
}

const ArticlesPage: FunctionComponent<PageProps<Data>> = (props) => {
  const articles = flattenNodes(props.data.articles)

  return (
    <Layout>
      <SEO title="Articles" />

      <Wrapper>
        <h1>Articles</h1>
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
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.mdx$/" }
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            rawDate: date
            date(formatString: "MMMM DD, YYYY")
            cover {
              publicURL
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
