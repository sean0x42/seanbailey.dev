/** @format */

module.exports = {
  siteMetadata: {
    title: `seanbailey.dev`,
    description: `Designer, software engineer, and lover of side projects. Welcome to my home on the web!`,
    author: `@sean0x42`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-treat`,
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
