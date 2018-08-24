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
  text-align: center;
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
      {
        props.items.map( (item, key) => {
          return (
            <ListItem key={key}>
              <img src={item.itemImage} alt=""/>
              <h3>{item.itemHeading}</h3>
              <p>{item.itemText}</p>
            </ListItem>
          )
        })
      }
      </List>
    </div>
  );
};

export default GridItems;