import React from 'react';

import IconButton from '../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/delete.svg';

import { List, Item, Button } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => (
  <List className="Contacts">
    {contacts.map(({ id, name, number }) => (
      <Item key={id} className="Contacts__item">
        {name}: {number}
        {/* <Button
          type="button"
          className="buttonDel"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button> */}
        <IconButton
          type="button"
          onClick={() => onDeleteContact(id)}
          aria-label="Добавить todo"
        >
          <AddIcon width="30" height="30" fill="#3f6884" />
        </IconButton>
      </Item>
    ))}
  </List>
);

export default Contacts;
