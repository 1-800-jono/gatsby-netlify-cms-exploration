import React from 'react';
import Hero from '../components/features/Hero';
import ImageTextTwoColumn from '../components/features/ImageTextTwoColumn';
import HomePageTemplate from '../components/HomePageTemplate';

// export const Home = props =>  {
//   const { hero, imageTextTwoColumn } = props.markdownRemark.frontmatter;
//   return (
//     <section>
//       {console.log(props)}
//       <Hero {...hero }/>
//       <ImageTextTwoColumn data={imageTextTwoColumn}/>
//     </section>
//   );
// };

export const Home = props =>  {
  
  return (
    <HomePageTemplate {...props}/>
  );
};


export default Home;
