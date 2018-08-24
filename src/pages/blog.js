import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';
import Layout from '../components/layout/Layout';

const blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Latest Blog Posts</h1>
        {
          data.allMarkdownRemark.edges.map( ({ node }) => (
            <a href={node.frontmatter.path} key={node.id}>
              <div className={css` display: flex; `}>   
                  <img src={node.frontmatter.tumbnail} alt="" className={css`
                      max-width: 200px;
                      max-height: 200px;
                      margin-right: 1.5em;
                      object-fit: contain;
                      width: 100%;
                  `}/>
                  <div className={css`max-width: 600px;`}>
                    <h3 className={css`margin-bottom: 0;`}>{node.frontmatter.title}</h3>
                    <p className={css`
                        color: #bbb;
                        margin-bottom: 1.2em;
                      `}>
                      {node.frontmatter.date}
                      </p>
                    <p>{node.excerpt}</p>
                  </div>
              </div>
            </a>
          ))
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tumbnail
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default blog;