/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Article from '../components/Article'
import { FluidObject } from 'gatsby-image'

type Data = {
  markdownRemark: Article
}

export interface Article {
  html: string
  frontmatter: {
    slug: string
    title: string
    date: string
    cover: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

interface TemplateProps {
  data: Data
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
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

function BlogPost(props: TemplateProps) {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Article article={post} />
    </Layout>
  )
}

export default BlogPost
