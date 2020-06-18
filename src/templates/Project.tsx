/** @format */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStyles } from 'react-treat'

import { Project } from '../app/types'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import * as styleRefs from './Project.treat'
import {graphql} from 'gatsby'

interface BodyProps {
  project: Project
}

function Body({ project }: BodyProps) {
  const styles = useStyles(styleRefs)

  return (
    <article>
      <SEO title={project.frontmatter.title} />

      <Wrapper>
        <h1>{project.frontmatter.title}</h1>

        <MDXProvider components={{}}>
          <MDXRenderer>{project.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </article>
  )
}

type Data = {
  mdx: Project
}

interface ContainerProps {
  data: Data
}

function Container(props: ContainerProps) {
  const project = props.data.mdx

  return (
    <Layout>
      <Body project={project} />
    </Layout>
  )
}

export default Container

export const pageQuery = graphql`
  query ProjectById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        startDate(formatString: "MMMM DD, YYYY")
        endDate(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
