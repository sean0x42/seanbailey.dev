import React, { FunctionComponent } from 'react'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import ArticleCards from '../components/ArticleCards'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
}

const ArticlesPage: FunctionComponent<PageProps<Data>> = (props) => {
  const articles = flattenNodes(props.data.articles)

  return (
    <Layout>
      <SEO title="All Articles" />

      <Wrapper>
        <Heading level={1}>All Articles</Heading>
        <ArticleCards articles={articles} />
      </Wrapper>
    </Layout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  {
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
                gatsbyImageData(
                  width: 600
                  height: 300
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
