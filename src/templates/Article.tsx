import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

import { Article as ArticleModel } from '../app/types'

import Article from '../components/Article'
import Layout from '../components/Layout'

type Data = {
  mdx: ArticleModel
}

interface ContainerProps {
  data: Data
}

const Container: FunctionComponent<ContainerProps> = (props) => {
  const article = props.data.mdx

  return (
    <Layout>
      <Article
        coverImage={article.frontmatter.cover}
        attribution={article.frontmatter.attribution}
        title={article.frontmatter.title}
        date={article.frontmatter.date}
        excerpt={article.excerpt}
        body={article.body}
      />
    </Layout>
  )
}

export default Container

export const pageQuery = graphql`
  query ArticlesById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 900, layout: FIXED)
          }
        }
        attribution {
          author
          url
        }
      }
    }
  }
`
