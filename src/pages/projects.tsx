/** @format */

import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { GraphQLNodes, ProjectSummary } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import ProjectCards from '../components/ProjectCards'

type Data = {
  projects: GraphQLNodes<ProjectSummary>
}

function ProjectsPage(props: PageProps<Data>) {
  const projects = flattenNodes(props.data.projects)

  return (
    <Layout>
      <SEO title="Projects" />

      <Wrapper>
        <h1>Projects</h1>
        <ProjectCards projects={projects} />
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.mdx$/" },
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: [frontmatter___startDate], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
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
