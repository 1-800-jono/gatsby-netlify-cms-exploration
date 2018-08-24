import React from 'react';
import { css, injectGlobal } from 'emotion';
import TopNavigation from '../global/TopNavigation';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, p, li, span {
    color: #6D626A;
  }
  a {
    color: #1B7E9F;
  }
`

const layoutCSS = css`
  margin: 0 auto 18rem;
  max-width: 1000px;
  padding: 0 1rem;
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      
      <div className={layoutCSS}>
      <TopNavigation />
        { children }
      </div>
    </React.Fragment>
  );
};

export default Layout;