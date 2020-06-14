/** @format */

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

interface Project {
  html: string
  frontmatter: {
    title: string
    slug: string
  }
}

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
      }
    }
  }
`
