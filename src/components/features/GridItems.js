import React from 'react';
import styled, { css } from 'react-emotion';

const List = styled('ul')`
  list-style: none;
  overflow: hidden;
  margin-top: 55px;
  margin-bottom: 8px;
  margin-left: 0;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ListItem = styled('li')`
  max-width: 18rem;
  width: 100%;
  justify-content: flex-end;
    img {
      margin-bottom: .4rem;
    }
    h3 {
      margin-top: 0;
      margin-bottom: .8rem;
    }
`;

const GridItems = props => {
  return (
    <div>
      <h2 className={css`text-align: center;`}>Lorem ipsum dolor sit amet</h2>
      <List>
        <ListItem>
          <img src="https://picsum.photos/200" alt=""/>
          <h3>Heading</h3>
          <p>A small descriptive paragraph consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </ListItem>
        <ListItem>
          <img src="https://picsum.photos/200" alt=""/>
          <h3>Heading</h3>
          <p>A small descriptive paragraph  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </ListItem>
        <ListItem>
          <img src="https://picsum.photos/200" alt=""/>
          <h3>Heading</h3>
          <p>A small descriptive paragraph ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </ListItem>
      </List>
    </div>
  );
};

export default GridItems;