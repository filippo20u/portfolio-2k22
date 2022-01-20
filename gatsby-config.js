module.exports = {
    siteMetadata: {
      title: `portfolio-2k22`,
        // siteUrl: `https://www.yourdomain.tld`,
    },
    
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",


      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ]
}