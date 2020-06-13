/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ArticleCards from '../components/ArticleCards'
import Wrapper from '../components/Wrapper'
import Intro from '../components/Intro'
import ButtonLink from '../components/ButtonLink'
import * as styles from './index.treat'

export interface ArticleSummary {
  excerpt: string
  frontmatter: {
    slug: string
    title: string
    date: string
    cover: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

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

        <ArticleCards articles={edges.map(edge => edge.node)} />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
