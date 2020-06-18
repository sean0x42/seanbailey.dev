/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * @format
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: value.slice(0, -1),
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve('src/templates/Article.tsx')
  const projectTemplate = path.resolve('src/templates/Project.tsx')

  const result = await graphql(`
    {
      articles: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/articles/[a-zA-Z0-9_-]+/index.mdx$/" }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      projects: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/[a-zA-Z0-9_-]+/index.mdx$/" }
        }
        sort: { order: DESC, fields: [frontmatter___startDate] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
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
      path: `/articles${node.fields.slug}`,
      component: articleTemplate,
      context: {
        id: node.id,
      },
    })
  })

  result.data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `/projects${node.fields.slug}`,
      component: projectTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
