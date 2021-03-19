import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ArticleCards from '../components/ArticleCards'
import Copy from '../components/Copy'
import Seo from '../components/Seo'
import Stack from '../components/layout/Stack'
import Wrapper from '../components/Wrapper'
import { ArticleSummary } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

const LandingPage: React.FunctionComponent = () => {
  const data = useStaticQuery(query)

  const articles = flattenNodes<ArticleSummary>(data.articles)

  return (
    <Stack space="mt-24">
      <Wrapper>
        <Seo title="Sean Bailey (Designer and Developer)" />

        <Stack space="mt-4">
          <Copy variant="large">Hello!</Copy>
          <Copy variant="large">
            I am a{' '}
            <span className="text-grey-900 dark:text-white font-medium underline underline-teal-800 dark:underline-teal-500">
              designer and developer
            </span>{' '}
            in Newcastle, Australia.
            <br />
            Welcome to my home on the web.
          </Copy>
        </Stack>
      </Wrapper>

      <Wrapper>
        <ArticleCards articles={articles} />
      </Wrapper>
    </Stack>
  )
}

export default LandingPage

const query = graphql`
  {
    articles: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.mdx$/" }
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
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
