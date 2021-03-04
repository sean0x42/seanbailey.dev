import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ArticleCards from '../components/ArticleCards'
import ButtonLink from '../components/ButtonLink'
import Copy, { Bold } from '../components/Copy'
import Heading from '../components/Heading'
import ProjectCards from '../components/ProjectCards'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'
import { ArticleSummary, ProjectSummary } from '../app/types'
import { flattenNodes } from '../helpers/graphql'

interface HeadingContainerProps {
  heading: string
}

const HeadingContainer: React.FunctionComponent<HeadingContainerProps> = (
  props,
) => (
  <div className="flex items-start flex-col sm:flex-row sm:flex-end sm:justify-between mt-8 mb-5">
    <Heading level={2}>{props.heading}</Heading>
    {props.children}
  </div>
)

const LandingPage: React.FunctionComponent = () => {
  const data = useStaticQuery(query)

  const articles = flattenNodes<ArticleSummary>(data.articles)
  const projects = flattenNodes<ProjectSummary>(data.projects)

  return (
    <>
      <SEO title="Sean Bailey (Designer and Developer)" />

      <Wrapper>
        <Copy>Hello!</Copy>
        <Copy className="mt-4">
          I am a <Bold>designer and developer</Bold> in Newcastle, Australia.
          <br />
          Welcome to my home on the web.
        </Copy>
      </Wrapper>

      <Wrapper className="my-20">
        <HeadingContainer heading="Recent Articles">
          <ButtonLink to="/articles">View all articles</ButtonLink>
        </HeadingContainer>

        <ArticleCards articles={articles} />

        <ButtonLink to="/articles" className="sm:hidden">
          View all articles
        </ButtonLink>
      </Wrapper>

      <Wrapper className="my-20">
        <HeadingContainer heading="Recent Projects">
          <ButtonLink to="/projects">View all projects</ButtonLink>
        </HeadingContainer>

        <ProjectCards projects={projects} />

        <ButtonLink to="/projects" className="sm:hidden">
          View all projects
        </ButtonLink>
      </Wrapper>
    </>
  )
}

export default LandingPage

const query = graphql`
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
