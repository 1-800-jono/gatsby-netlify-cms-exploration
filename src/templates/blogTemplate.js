import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// export default function Template({
//   data, // prop injected by GraphQL query below
// }) {
//   const { markdownRemark } = data; //data.markdownRemark holds our post
//   const { frontmatter, html } = markdownRemark;
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1></h1>
//         <h2></h2>
//         <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
//       </div>
//     </div>
//   );
// }

export default () => (
  <StaticQuery 
    query={graphql`
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
    `}
    render={ data => (
      <div className="blog-post-container">
      <div className="blog-post">
        <h1>Oh Hi</h1>
        <h2></h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
    )}
  />
)

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `;