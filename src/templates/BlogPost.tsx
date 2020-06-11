/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper'

type Data = {
  markdownRemark: Blog
}

interface Blog {
  html: string
  frontmatter: {
    slug: string
    title: string
    date: string
  }
}

interface TemplateProps {
  data: Data
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }}) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

function BlogPost(props: TemplateProps) {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <Wrapper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  )
}

export default BlogPost
