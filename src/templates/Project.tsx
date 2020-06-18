/** @format */

import React from 'react'
import { graphql } from 'gatsby'
import { Project } from '../app/types'

import Layout from '../components/Layout'
import Article from '../components/Article'

type Data = {
  mdx: Project
}

interface ContainerProps {
  data: Data
}

function Container(props: ContainerProps) {
  const project = props.data.mdx
  const { startDate, endDate } = project.frontmatter

  return (
    <Layout>
      <Article
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
        startDate(formatString: "MMMM DD, YYYY")
        endDate(formatString: "MMMM DD, YYYY")
        cover {
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
