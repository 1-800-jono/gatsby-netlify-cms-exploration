import React from 'react';
import { css } from 'react-emotion';

const BlogPostTemplate = ({
  title,
  date,
  html,
}) => {

  return (
    <div>
      <div>
        <h1 className={css`margin-bottom: 5px;`}>{title}</h1>
        <h3 className={css`margin-top: 0;`}>{date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate