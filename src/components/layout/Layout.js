import React from 'react';
import { css } from 'emotion';
import TopNavigation from '../global/TopNavigation';

const layoutCSS = css`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 1rem;
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <TopNavigation />
      <div className={layoutCSS}>
        { children }
      </div>
    </React.Fragment>
  );
};

export default Layout;