import React from 'react';
import { List, Item, Button } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => (
  <List className="Contacts">
    {contacts.map(({ id, name, number }) => (
      <Item key={id} className="Contacts__item">
        {name}: {number}
        <Button
          type="button"
          className="buttonDel"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

export default Contacts;
