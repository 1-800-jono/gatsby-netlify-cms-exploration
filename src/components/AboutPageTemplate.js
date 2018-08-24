import React from 'react';
import Hero from '../components/features/Hero';
import ImageTextTwoColumn from '../components/features/ImageTextTwoColumn';

const AboutPageTemplate = ({hero, imageTextTwoColumn}) => {
  
  return (
    <section>
      <Hero {...hero }/>
      <ImageTextTwoColumn {...imageTextTwoColumn}/>
    </section>
  );
};

export default AboutPageTemplate;