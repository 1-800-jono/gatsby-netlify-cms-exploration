import CMS from 'netlify-cms';
import typography from '../utils/typography'
import './cms.css'
import React from 'react'
import { renderToString } from "react-dom/server"
import { renderStylesToString } from "emotion-server"

import BlogPostPreview from './preview-templates/BlogPostPreview';

class CSSInjector extends React.Component {
  render() {
    return (
      <div
        ref={ref => {
          if (ref && !this.css) {
            this.css = renderStylesToString(renderToString(this.props.children))
            ref.ownerDocument.head.innerHTML += this.css
          }
        }}>
        {React.Children.only(this.props.children)}
      </div>
    )
  }
}

CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
));

