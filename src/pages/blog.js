import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout/Layout';

const blog = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>Blog List</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map( ({ node }) => (
            <div key={node.id}>
              <h3 >
                {node.frontmatter.title}{' '}
                <span className={css`
                  color: #bbb;
                `}>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default blog;