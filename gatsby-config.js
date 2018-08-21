module.exports = {
  siteMetadata: {
    title: 'Marketing Test Site'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages",
      }
    },
    `gatsby-transformer-remark`,
    ],
};