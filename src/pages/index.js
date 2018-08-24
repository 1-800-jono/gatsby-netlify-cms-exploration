import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Home from  '../templates/home-page';

export default ({data}) => (
  <Layout>
    <Home {...data}/>
  </Layout>
)

export const homePageQuery = graphql`
  query HomePage($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        templateKey
        title
        hero {
          heading
          description
        }
        imageTextTwoColumn {
          image {
            imagePath
            imageAlt
          }
          text
          reverseLayout
        }
      }
    }
  }
`;
