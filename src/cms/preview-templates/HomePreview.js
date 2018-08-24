import React from 'react';
import HomePageTemplate from '../../components/HomePageTemplate';

const HomePreview = ({ entry, widgetFor }) => {
  return (
    <HomePageTemplate {...entry.getIn(['data', 'hero'])}/>
  )
}

export default HomePreview