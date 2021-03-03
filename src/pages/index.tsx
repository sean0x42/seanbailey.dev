import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { PageProps, graphql } from 'gatsby'

import { ArticleSummary, ProjectSummary, GraphQLNodes } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

import * as stylesRefs from '../index.treat'
import ArticleCards from '../components/ArticleCards'
import ButtonLink from '../components/ButtonLink'
import Intro from '../components/Intro'
import ProjectCards from '../components/ProjectCards'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import { ArticleIcon, ProjectIcon } from '../components/Icons'
import withLayout from '../app/withLayout'
import Heading from '../components/Heading'

type Data = {
  articles: GraphQLNodes<ArticleSummary>
  projects: GraphQLNodes<ProjectSummary>
}

const IndexPage: FunctionComponent<PageProps<Data>> = (props) => {
  const styles = useStyles(stylesRefs)

  const articles = flattenNodes(props.data.articles)
  const projects = flattenNodes(props.data.projects)

  return (
    <>
      <SEO title="Sean Bailey (Designer and Developer)" />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <Heading level={2} className={styles.heading}>
            <ArticleIcon className={styles.headingIcon} />
            Recent Articles
          </Heading>
          <ButtonLink to="/articles">View all articles</ButtonLink>
        </div>

        <ArticleCards articles={articles} />
        <ButtonLink to="/articles" className={styles.mobileButton}>
          View all articles
        </ButtonLink>
      </Wrapper>

      <Wrapper>
        <div className={styles.headingWrapper}>
          <Heading level={2} className={styles.heading}>
            <ProjectIcon className={styles.headingIcon} />
            Recent Projects
          </Heading>
          <ButtonLink to="/projects">View all projects</ButtonLink>
        </div>

        <ProjectCards projects={projects} />
        <ButtonLink to="/projects" className={styles.mobileButton}>
          View all projects
        </ButtonLink>
      </Wrapper>
    </>
  )
}

export default withLayout(IndexPage)

export const pageQuery = graphql`
  {
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
            rawDate: date
            date(formatString: "MMMM DD, YYYY")
            cover {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 300
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
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
              publicURL
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 300
                  transformOptions: { cropFocus: CENTER }
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
