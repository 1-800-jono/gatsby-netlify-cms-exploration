//import React from 'react';
import CMS from 'netlify-cms';
//import "netlify-cms/dist/cms.css";

import { renderToString } from "react-dom/server"
import { renderStylesToString } from "emotion-server"

import BlogPostPreview from './preview-templates/BlogPostPreview';
import HomePreview from './preview-templates/HomePreview';

// class CSSInjector extends React.Component {
//   render() {
//     return (
//       <div
//         ref={ref => {
//           if (ref && !this.css) {
//             this.css = renderStylesToString(renderToString(this.props.children))
//             ref.ownerDocument.head.innerHTML += this.css
//           }
//         }}>
//         {React.Children.only(this.props.children)}
//       </div>
//     )
//   }
// }



// CMS.registerPreviewTemplate('blog', props => (
//   <CSSInjector>
//     <BlogPostPreview {...props} />
//   </CSSInjector>
// ));
CMS.registerPreviewTemplate('home', HomePreview);
//CMS.registerPreviewTemplate('blog', BlogPostPreview);
