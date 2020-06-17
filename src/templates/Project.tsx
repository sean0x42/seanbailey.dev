/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import { Project } from '../app/types'
import Gallery from '../components/Gallery'

type Data = {
  markdownRemark: Project
}

interface ProjectTemplateProps {
  data: Data
}

function ProjectTemplate(props: ProjectTemplateProps) {
  const project = props.data.markdownRemark

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />

      <Wrapper>
        <Gallery images={project.frontmatter.images} />
        <h1>{project.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Wrapper>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        images {
          childImageSharp {
            fixed(height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
