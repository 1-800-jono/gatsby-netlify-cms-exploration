import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <Header headerText="Homepage awesome heading"/>
    <p>
      Star Maker is a science fiction novel by Olaf Stapledon, published in 1937. 
      The book describes a history of life in the universe, dwarfing in scale Stapledon's 
      previous book, Last and First Men (1930), a history of the human species over two billion years. 
    </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
