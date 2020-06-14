/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ArticleCards from '../components/ArticleCards'
import Wrapper from '../components/Wrapper'
import Intro from '../components/Intro'
import ButtonLink from '../components/ButtonLink'
import * as styles from '../index.treat'
import { ArticleSummary, ProjectSummary } from '../app/types'
import ProjectCards from '../components/ProjectCards'

type Data = {
  articles: {
    edges: { node: ArticleSummary }[]
  }
  projects: {
    edges: { node: ProjectSummary }[]
  }
}

function IndexPage(props: PageProps<Data>) {
  const articles = props.data.articles.edges.map(edge => edge.node)
  const projects = props.data.projects.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Home" />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Projects</h2>
          <ButtonLink to="/projects">View all projects</ButtonLink>
        </div>

        <ProjectCards projects={projects} />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Articles</h2>
          <ButtonLink to="/articles">View all articles</ButtonLink>
        </div>

        <ArticleCards articles={articles} />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    articles: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.md$/" }
      }
      sort: { fields: [frontmatter___startDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
