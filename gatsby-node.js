const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');



exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //const slug = createFilePath({ node, getNode, basePath: `pages` })
    //const slug = createFilePath({ node, getNode })
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                path
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const id = node.id;
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`./src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            id,
          },
        })
      })
      resolve()
    })
  })
}