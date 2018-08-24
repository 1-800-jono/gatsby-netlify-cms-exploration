import React from 'react';
import Hero from '../components/features/Hero';
import ImageTextTwoColumn from '../components/features/ImageTextTwoColumn';

const HomePageTemplate = props => {
  const { hero, imageTextTwoColumn } = props.markdownRemark.frontmatter;
  return (
    <section>
      {console.log(props)}
      <Hero {...hero }/>
      <ImageTextTwoColumn data={imageTextTwoColumn}/>
    </section>
  );
};

export default HomePageTemplate;