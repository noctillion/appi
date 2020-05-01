module.exports = {
  siteMetadata: {
    title: `Gatsby MarketPlace`,
    description: `Generic marketplace`,
    author: `Noctillion`,
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
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `marketplace`,
        collection: `coffeItem`,
        server: { address: `ds331548.mlab.com`, port: 31548 },
        auth: { user: `julian`, password: `Julian12345` },
      },
    },
    // gatsby-source-mongodb se conecta bn con graphql
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
