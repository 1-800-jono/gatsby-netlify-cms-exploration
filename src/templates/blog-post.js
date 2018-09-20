import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import Layout from '../components/layout/Layout';
import Content, { HTMLContent } from '../components/elements/Content'

export const BlogPostTemplate = ({ title, date, content, contentComponent }) => {
  const PostContent = contentComponent || Content
  return (
    <section className={css`background: #fff;`}>
      <h1 className={css`margin-bottom: 5px;`}>{title}</h1>
      <h3 className={css`margin-top: 0;`}>{date.toString()}</h3>
      <PostContent content={content}/>
    </section>
  );
}

const BlogPost = ({data}) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
