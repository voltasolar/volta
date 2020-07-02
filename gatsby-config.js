module.exports = {
  siteMetadata: {
    title: `Volta Solar Energy Solutions`,
    description: `Somos una empresa encargada de generar impactos económicos y ambientales a través de energías renovables e innovación tecnológica mediante la instalación de paneles solares.`,
    author: `@oswaldo_zc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {},
    },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `volta`,
        accessToken: `MC5YdWZKUHhJQUFDUUFmQ3FC.Qe-_vXvvv73vv70RGO-_ve-_ve-_vUBw77-9Iu-_vXrvv70oDO-_vXIz77-9IGsjJu-_ve-_vTfvv70O`,
        path: `/preview`,
        preview: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
