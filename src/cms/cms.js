import { renderToString } from "react-dom/server"
import { renderStylesToString } from "emotion-server"
import CMS from 'netlify-cms';

import BlogPostPreview from './preview-templates/BlogPostPreview';
//import HomePreview from './preview-templates/HomePreview';

//////
// Tried this solution: https://github.com/netlify/netlify-cms/issues/793#issuecomment-371982600
///

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
// CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
