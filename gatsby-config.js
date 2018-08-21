module.exports = {
  siteMetadata: {
    title: 'Red Guava'
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
    `gatsby-transformer-remark`,
    ],
};