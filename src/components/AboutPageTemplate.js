import React from 'react';
import Hero from './features/Hero';
import ImageTextTwoColumn from './features/ImageTextTwoColumn';
import TextContent from './features/TextContent';

const AboutPageTemplate = ({hero, imageTextTwoColumn, textContent}) => {
  
  return (
    <section>
      <Hero {...hero }/>
      <ImageTextTwoColumn {...imageTextTwoColumn}/>
      <TextContent {...textContent}/>
    </section>
  );
};

export default AboutPageTemplate;