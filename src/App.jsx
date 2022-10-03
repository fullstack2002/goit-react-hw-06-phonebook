import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './App.styled';
import React, { useState, useEffect } from 'react';

const KEY = "contacts";

const App = () => {
	const inLocalStorage = (key) => {
		try {
			const getData = localStorage.getItem(key);
			const contacts = JSON.parse(getData);
			return contacts.filter(({ id, name, number }) => id && name && number);
		} catch (error) {
			console.log("Error state is: ", error.message);
		}
	};

	const saveToLocalStorage = (key, value) => {
		try {
			const contacts = JSON.stringify(value);
			localStorage.setItem(key, contacts);
		} catch (error) {
			console.log("Error state is: ", error.message);
		}
	};

	const [phonebook, setPhonebook] = useState(() => {
		return { contacts: inLocalStorage(KEY), filter: "" };
	});

	useEffect(() => {
		saveToLocalStorage(KEY, phonebook.contacts);
	}, [phonebook]);

	const addContact = ({ newContact }) => {
		if (phonebook.contacts.find((item) => item.name === newContact.name)) {
			alert(`${newContact.name} is already in contacts!`);
			return;
		}
		setPhonebook((prev) => ({
			contacts: [...prev.contacts, newContact],
			filter: prev.filter,
		}));
	};

	const handleFilter = (e) => {
		setPhonebook({ ...phonebook, filter: e.target.value });
	};

	const handleDelete = (id) => {
		setPhonebook((prev) => ({
			contacts: prev.contacts.filter((el) => el.id !== id),
			filter: prev.filter,
		}));
	};

  return (
      <Container>
        <h1>Phonebook</h1>
         <ContactForm onSubmit={addContact}></ContactForm>
         <h2>Contacts</h2>
         <Filter handleFilter={handleFilter}/>
        <ContactList
          contacts={phonebook.contacts}
          seek={phonebook.filter}
        ItemDelete={handleDelete}>
        </ContactList>
      </Container>
	);
};

export default App;