import React from 'react';

const BlogPostTemplate = ({
  title,
  date,
  html,
}) => {

  return (
    <div style={{ background: 'tomato'}}>
      <div>
        <h1 style={{ color: 'red'}}>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate