import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import HomePageTemplate from '../components/HomePageTemplate'

export default ({data}) => (
  <Layout>
    <HomePageTemplate {...data}/>
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
