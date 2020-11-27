module.exports = {
  siteMetadata: {
    title: `seanbailey.dev`,
    description: `Designer, software engineer, and lover of side projects. Welcome to my home on the web!`,
    author: `@sean0x42`,
    siteUrl: `https://www.seanbailey.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        exclude: [`/thanks`, `/subscribed`],
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.ts$|\.tsx$/,
      },
    },
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: '1350px',
            },
          },
          `gatsby-remark-prismjs`,
        ],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sean Bailey',
        short_name: 'seanbailey',
        start_url: '/',
        display: 'standalone',
        background_color: '#663399',
        theme_color: '#101114',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-catch-links',
  ],
}
