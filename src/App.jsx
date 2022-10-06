import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './App.styled';
import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? []});
	const [filter, setFilter] = useState('');
		
	 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
	 }, [contacts])
	
	const handleFilter = (event) => {
    setFilter(event.target.value)
	}
		
	const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
        
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
	}
	
	const handleDelete = (itemId) => {
        setContacts(prev => prev.filter(item => item.id !== itemId))
    }
	
		const isInContacts = (name, number) => {
    return contacts.find((item) => item.name.toLowerCase() === name.toLowerCase() || item.number === number);
		}
		
		 const addContact = (name, number) => {
        if (isInContacts(name, number)) {
        return alert(`${name} ${number} is already in contacts!`);
        }

        setContacts(prev => [{ id: nanoid(), name, number }, ...prev])
    }

  return (
      <Container>
        <h1>Phonebook</h1>
         <ContactForm addContact={addContact}></ContactForm>
         <h2>Contacts</h2>
         <Filter value={filter} onChange={handleFilter}/>
        <ContactList
          contacts={getFilteredContacts()}
        	ItemDelete={handleDelete}>
        </ContactList>
		</Container>
	);
};

export default App;