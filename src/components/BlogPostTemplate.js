import React from 'react';
import { css } from 'react-emotion';

const BlogPostTemplate = ({
  title,
  date,
  html,
}) => {

  return (
    <div className={css`background: tomato;`}>
      <div>
        <h1 className={css`color: red;`}>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate