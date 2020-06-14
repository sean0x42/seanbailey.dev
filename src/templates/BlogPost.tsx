/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Article from '../components/Article'
import { Article as ArticleModel } from '../app/types'

type Data = {
  markdownRemark: ArticleModel
}

interface ArticleTemplateProps {
  data: Data
}

function ArticleTemplate(props: ArticleTemplateProps) {
  const article = props.data.markdownRemark

  return (
    <Layout>
      <SEO title={article.frontmatter.title} />
      <Article article={article} />
    </Layout>
  )
}

export default ArticleTemplate

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
