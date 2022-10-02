import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './App.styled';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsInStorage = localStorage.getItem(KEY);
    if (contactsInStorage !== null) {
      setContacts(JSON.parse(contactsInStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    return contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts(() => [...contacts, newContact]);
  };

  const handleDelete = id => setContacts(() => contacts.filter(contact => contact.id !== id));

  const handleFilter = event => setFilter(event.currentTarget.value);

  const filterContactsOnChange = () => contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );
  
  const sortContactList = () => filterContactsOnChange().sort((firstContactName, secondContactName) =>
    firstContactName.name.localeCompare(secondContactName.name)
  );

  return (
    <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={handleFilter}
        />
        <ContactList contacts={sortContactList()}
          ItemDelete={handleDelete}></ContactList>
      </Container>
  );
};
export default App;