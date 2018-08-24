import React from 'react'
import BlogPostTemplate from '../../components/BlogPostTemplate'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    date={entry.getIn(['data', 'date'])}
    title={entry.getIn(['data',  'title'])}
    html={widgetFor('body')}
  />
)


export default BlogPostPreview