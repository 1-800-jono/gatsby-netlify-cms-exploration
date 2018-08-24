import React from 'react';
import Layout from '../components/layout/Layout';
import AboutPageTemplate from '../components/AboutPageTemplate';

const About = props => {
  return (
    <Layout>
     <AboutPageTemplate {...props} />
    </Layout>
  );
};

export default About;
