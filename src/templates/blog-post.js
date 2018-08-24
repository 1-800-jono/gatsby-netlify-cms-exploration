import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import BlogPostTemplate from '../components/BlogPostTemplate';

const BlogSingle = ({ data }) => {
  const { markdownRemark } = data; //data.markdownRemark holds our post
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BlogPostTemplate title={frontmatter.title} date={frontmatter.date} html={html}/>
    </Layout>
  );
}

export default BlogSingle

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;