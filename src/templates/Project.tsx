import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Project as ProjectModel } from '../app/types'

import Project from '../components/Project'
import Layout from '../components/Layout'

type Data = {
  mdx: ProjectModel
}

interface ContainerProps {
  data: Data
}

const Container: FunctionComponent<ContainerProps> = (props) => {
  const project = props.data.mdx
  const { startDate } = project.frontmatter
  const endDate = project.frontmatter.endDate || 'Present'

  return (
    <Layout>
      <Project
        coverImage={project.frontmatter.cover}
        title={project.frontmatter.title}
        date={`${startDate}—${endDate}`}
        excerpt={project.excerpt}
        body={project.body}
      />
    </Layout>
  )
}

export default Container

export const pageQuery = graphql`
  query ProjectById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        startDate(formatString: "MMMM YYYY")
        endDate(formatString: "MMMM YYYY")
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 400, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
