/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * @format
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/BlogPost.tsx')
  const projectTemplate = path.resolve('src/templates/Project.tsx')

  const result = await graphql(`
    {
      articles: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.md$/" }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.md$/" }
        }
        sort: { order: DESC, fields: [frontmatter___startDate] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: `articles/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
