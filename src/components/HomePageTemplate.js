import React from 'react';
import Hero from '../components/features/Hero';
import ImageTextTwoColumn from '../components/features/ImageTextTwoColumn';
import GridItems from '../components/features/GridItems';

const HomePageTemplate = props => {
  const { hero, imageTextTwoColumn, gridItems } = props.markdownRemark.frontmatter;
  return (
    <section>
      {console.log(props)}
      <Hero {...hero } />
      <ImageTextTwoColumn {...imageTextTwoColumn} />
      <GridItems {...gridItems} />
    </section>
  );
};

export default HomePageTemplate;