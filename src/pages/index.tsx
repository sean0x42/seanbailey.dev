/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, ProjectSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ArticleCards from '../components/ArticleCards'
import Wrapper from '../components/Wrapper'
import Intro from '../components/Intro'
import ButtonLink from '../components/ButtonLink'
import * as styles from '../index.treat'
import ProjectCards from '../components/ProjectCards'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
  projects: GraphQLNodes<ProjectSummary>
}

function IndexPage(props: PageProps<Data>) {
  const articles = flattenNodes(props.data.articles)
  const projects = flattenNodes(props.data.projects)

  return (
    <Layout>
      <SEO title="Sean Bailey" />

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
    articles: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.mdx$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
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
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.mdx$/" }
      }
      sort: { fields: [frontmatter___startDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
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
