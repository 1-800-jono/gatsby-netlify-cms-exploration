import React from 'react';
import Hero from '../components/features/Hero';
import ImageTextTwoColumn from '../components/features/ImageTextTwoColumn';

const AboutPageTemplate = props => {
  const { hero, imageTextTwoColumn } = props.markdownRemark.frontmatter;
  return (
    <section>
      <Hero {...hero }/>
      <ImageTextTwoColumn data={imageTextTwoColumn}/>
    </section>
  );
};

export default AboutPageTemplate;