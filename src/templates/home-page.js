import React from 'react';
import Hero from '../components/features/Hero';

export const Home = props =>  {
  const { hero } = props.markdownRemark.frontmatter;
  return (
    <section>
      {console.log(props)}
      <Hero {...hero }/>

    </section>
  );
};


export default Home;
