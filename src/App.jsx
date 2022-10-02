import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './App.styled';
import React, { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsInStorage = localStorage.getItem('contacts');
    if (contactsInStorage) {
            const parsedContacts = JSON.parse(contactsInStorage);
            this.setState(
                { contacts: parsedContacts }
            )
        }
    }

  componentDidUpdate(prevProps, prevState) {
     if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    
  };
  handleDelete = id => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter(contact => contact.id !== id),
		}));
  };
  handleFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactsOnChange = () => {
    const { contacts, filter } = this.state;
    const capitalFilter = filter.toUpperCase();
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(capitalFilter)
    );
  };
  sortContactList = () => {
    return this.filterContactsOnChange().sort(
      (firstContactName, secondContactName) =>
        firstContactName.name.localeCompare(secondContactName.name)
    );
  };
  render() {
    const filteredList = this.sortContactList();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter
              value={this.state.filter}
              onChange={this.handleFilter}
            />
        <ContactList contacts={filteredList}
					ItemDelete={this.handleDelete}></ContactList>
      </Container>
    )
  }
}
export default App;