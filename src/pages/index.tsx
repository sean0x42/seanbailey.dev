/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ArticleCards from '../components/ArticleCards'
import Wrapper from '../components/Wrapper'

export interface ArticleSummary {
  excerpt: string
  frontmatter: {
    slug: string
    title: string
    date: string
    tags: string[]
  }
}

type Data = {
  allMarkdownRemark: {
    edges: { node: ArticleSummary }[]
  }
}

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
            tags
          }
        }
      }
    }
  }
`

function IndexPage(props: PageProps<Data>) {
  const { edges } = props.data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />

      <Wrapper>
        <h1>Recent Articles</h1>
        <ArticleCards articles={edges.map(edge => edge.node)} />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
