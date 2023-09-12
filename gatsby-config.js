/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `UnderRound lyrics`,
    description: `Find all your favourite underground and alternative songs lyrics.`,
    author: `@markoS`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/example.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyDc5puTkOnhcRFVXxM8a0wCI4bO7g6mP4o',
          authDomain: 'underround-lyrics.firebaseapp.com',
          projectId: 'underround-lyrics',
          storageBucket: 'underround-lyrics.appspot.com',
          messagingSenderId: '686382920070',
          appId: '1:686382920070:web:2e53e383ba029c9312fc07',
        },
      },
    },
  ],
}
