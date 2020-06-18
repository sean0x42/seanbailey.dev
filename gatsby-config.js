/** @format */

module.exports = {
  siteMetadata: {
    title: `seanbailey.dev`,
    description: `Designer, software engineer, and lover of side projects. Welcome to my home on the web!`,
    author: `@sean0x42`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-treat`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          articles: require.resolve('./src/templates/Article.tsx'),
          projects: require.resolve('./src/templates/Project.tsx'),
          default: require.resolve('./src/components/Layout.tsx'),
        },
        gatsbyRemarkPlugins: [`gatsby-remark-images`, `gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
