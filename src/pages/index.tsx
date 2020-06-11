/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogSummaries from '../components/BlogSummary'

export interface PostSummary {
  excerpt: string
  frontmatter: {
    slug: string
    title: string
    date: string
  }
}

type Data = {
  allMarkdownRemark: {
    edges: { node: PostSummary }[]
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
      <BlogSummaries posts={edges.map(edge => edge.node)} />
    </Layout>
  )
}

export default IndexPage
