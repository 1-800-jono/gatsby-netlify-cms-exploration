import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

const ListLinkCSS = css`
  display: inline-block;
  margin-right: 1em;
`;

const TopNavigationWrapper = css`
  margin: 0 auto;
  max-width: 900px;
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ListLink = props => (
  <li className={ListLinkCSS}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const TopNavigation = () => {
  return (
    <nav>
      <div className={TopNavigationWrapper}>
        <Link to="/"><h3 style={{ display: `inline` }}>Home</h3></Link>
        <ul>
          <ListLink to="/">Home</ListLink>      
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;