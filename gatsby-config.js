/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Khoa Bui`,
        short_name: `KhoaBui`,
        start_url: `/`,
        background_color: `#3C873A`,
        theme_color: `#68A063`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
  proxy: {
    prefix: "/api",
    url: "https://dug-2020.herokuapp.com",
  },
}
