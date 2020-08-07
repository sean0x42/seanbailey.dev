/** @format */

import React from 'react'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, ProjectSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import ArticleCards from '../components/ArticleCards'
import ButtonLink from '../components/ButtonLink'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import ProjectCards from '../components/ProjectCards'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import * as styles from '../index.treat'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
  projects: GraphQLNodes<ProjectSummary>
}

function IndexPage(props: PageProps<Data>) {
  const articles = flattenNodes(props.data.articles)
  const projects = flattenNodes(props.data.projects)

  return (
    <Layout>
      <SEO title="Sean Bailey (Designer and Developer)" />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Articles</h2>
          <ButtonLink to="/articles">View all articles</ButtonLink>
        </div>

        <ArticleCards articles={articles} />
        <ButtonLink to="/articles" className={styles.mobileButton}>
          View all articles
        </ButtonLink>
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Recent Projects</h2>
          <ButtonLink to="/projects">View all projects</ButtonLink>
        </div>

        <ProjectCards projects={projects} />
        <ButtonLink to="/projects" className={styles.mobileButton}>
          View all projects
        </ButtonLink>
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
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
        frontmatter: { hidden: { ne: true } }
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
