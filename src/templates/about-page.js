import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import AboutPageTemplate from '../components/AboutPageTemplate';

const AboutPage = ({ data }) => {
  const { hero, imageTextTwoColumn, textContent } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <AboutPageTemplate 
        hero={hero} 
        imageTextTwoColumn={imageTextTwoColumn} 
        textContent={textContent}
      />
    </Layout>
  );
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage($id: String!){
    markdownRemark(id: { eq: $id }) {
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
        textContent {
          centerAlign
          text
        }
      }
    }
  }
`;