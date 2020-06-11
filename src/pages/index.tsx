/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

function IndexPage(props: PageProps<Data>) {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />

      <ul>
        {posts.map(({ node }) => (
          <li key={node.frontmatter.title}>{node.frontmatter.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
