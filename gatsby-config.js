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
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `EB Garamond`,
            variable: true,
            weights: [`400`, `500`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/*`],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/griffin-me\.herokuapp\.com\/api\/poem/,
            handler: "cacheFirst",
            options: {
              cacheableResponse: {
                statuses: [0, 200],
              },
              cacheName: "dug2020-greeting",
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178235268-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "buidangkhoa.com",
      },
    },
  ],
  proxy: {
    prefix: "/api",
    url: "https://griffin-me.herokuapp.com",
  },
}
