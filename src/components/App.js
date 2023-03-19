import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import Modal from './Modal/Modal';
import Section from './Section/Section';
// import Form from './Form/Form';
import ContactForm from './Form/FormFormik';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле Contacts, записываю Contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    if (
      nextContacts.length > prevContacts.length &&
      prevContacts.length !== 0
    ) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHandler = data => {
    const dataWithId = {
      ...data,
      id: nanoid(5),
    };

    if (this.state.contacts.some(contact => contact.name === dataWithId.name)) {
      Notify.failure(`${dataWithId.name} is already in contacts.`);
      // alert(`${dataWithId.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, dataWithId],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, showModal } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section
          text="Add Contact"
          childComponent={
            <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
              <AddIcon width="40" height="40" fill="#3f6884" />
            </IconButton>
          }
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Section
              text="Phonebook"
              // childComponent={<Form onSubmit={this.formSubmitHandler} />}
              childComponent={<ContactForm onSubmit={this.formSubmitHandler} />}
            />
          </Modal>
        )}

        <Section
          text="Contacts"
          childComponentFilter={
            <Filter value={filter} onChange={this.changeFilter} />
          }
          childComponent={
            <Contacts
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          }
        />
      </>
    );
  }
}

export default App;

// disabled={!this.state.licence}
