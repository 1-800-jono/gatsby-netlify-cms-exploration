import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import AboutPageTemplate from '../components/AboutPageTemplate';

const About = ({data}) => {
  return (
    <Layout>
     <AboutPageTemplate {...data} />
    </Layout>
  );
};

export default About;

export const AboutPageQuery = graphql`
  query AboutPage($path: String!){
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