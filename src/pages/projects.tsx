import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'

import { GraphQLNodes, ProjectSummary } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import Layout from '../components/Layout'
import ProjectCards from '../components/ProjectCards'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

type Data = {
  projects: GraphQLNodes<ProjectSummary>
}

const ProjectsPage: FunctionComponent<PageProps<Data>> = (props) => {
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
        fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.mdx$/" }
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
