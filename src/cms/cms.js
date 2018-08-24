import CMS from 'netlify-cms';
import "netlify-cms/dist/cms.css";

import BlogPostPreview from './preview-templates/BlogPostPreview';
import HomePreview from './preview-templates/HomePreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('home', HomePreview);
