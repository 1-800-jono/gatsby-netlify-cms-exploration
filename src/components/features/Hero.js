import React from 'react';
import Header from '../elements/Header';

const Hero = props => {
  const {heading, description } = props;
  return (
    <section>
      <Header headerText={heading}/>
      <p>{description}</p>
    </section>
  );
};

export default Hero;