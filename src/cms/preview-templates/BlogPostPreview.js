import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    date={entry.getIn(['data', 'date'])}
    title={entry.getIn(['data',  'title'])}
    content={widgetFor('body')}
  />
)

export default BlogPostPreview
