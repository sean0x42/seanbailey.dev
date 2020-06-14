/** @format */

import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import { ProjectSummary } from '../app/types'
import ProjectCards from '../components/ProjectCards'

type Data = {
  allMarkdownRemark: {
    edges: { node: ProjectSummary }[]
  }
}

function PortfolioPage(props: PageProps<Data>) {
  const projects = props.data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Portfolio" />

      <Wrapper>
        <h2>Portfolio</h2>
        <ProjectCards projects={projects} />
      </Wrapper>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.md$/" }
      }
      sort: { fields: [frontmatter___startDate], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
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
