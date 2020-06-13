/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ArticleCards from '../components/ArticleCards'
import Wrapper from '../components/Wrapper'
import Intro from '../components/Intro'
import ButtonLink from '../components/ButtonLink'
import * as styles from '../index.treat'
import { ArticleSummary } from '../app/types'

type Data = {
  allMarkdownRemark: {
    edges: { node: ArticleSummary }[]
  }
}

function IndexPage(props: PageProps<Data>) {
  const { edges } = props.data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Articles</h2>
          <ButtonLink to="/articles">View all articles</ButtonLink>
        </div>

        <ArticleCards articles={edges.map((edge) => edge.node)} />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Projects</h2>
          <ButtonLink to="/projects">View all projects</ButtonLink>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
