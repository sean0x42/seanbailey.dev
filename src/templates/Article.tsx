/** @format */

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStyles } from 'react-treat'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Article } from '../app/types'

import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import * as styleRefs from './Article.treat'
import ThanksForReading from '../components/ThanksForReading'
import Layout from '../components/Layout'

interface BodyProps {
  article: Article
}

function Body({ article }: BodyProps) {
  const styles = useStyles(styleRefs)

  return (
    <article>
      <SEO title={article.frontmatter.title} />

      <Wrapper className={styles.article}>
        <Img
          className={styles.image}
          fluid={article.frontmatter.cover.childImageSharp.fluid}
        />
        <h1 className={styles.title}>{article.frontmatter.title}</h1>
        <p className={styles.date}>{article.frontmatter.date}</p>

        <MDXProvider components={{}}>
          <MDXRenderer>{article.body}</MDXRenderer>
        </MDXProvider>

        <ThanksForReading />
      </Wrapper>
    </article>
  )
}

type Data = {
  mdx: Article
}

interface ContainerProps {
  data: Data
}

function Container(props: ContainerProps) {
  const article = props.data.mdx

  return (
    <Layout>
      <Body article={article} />
    </Layout>
  )
}

export default Container

export const pageQuery = graphql`
  query ArticlesById($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
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
