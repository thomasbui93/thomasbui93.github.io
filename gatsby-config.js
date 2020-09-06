/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  proxy: {
    prefix: "/api",
    url: "https://dug-2020.herokuapp.com",
  },
}
