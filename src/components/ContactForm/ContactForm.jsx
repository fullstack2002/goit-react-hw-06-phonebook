import { useState } from "react";
import { nanoid } from "nanoid";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                setName('')
                setNumber('')
        }
  }
  
   const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const alreadyInContacts = (name, number) => {
        return contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase() || item.number === number);
    }

    const addNewContact = (name, number) => {
        if (alreadyInContacts(name, number)) {
            return alert(`${name} ${number} is already in Phonebook`);
        }

        dispatch(addContact({name, number}))
    }

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewContact(name, number);

    setName('')
    setNumber('')
  }

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <PhoneForm onSubmit={handleSubmit}>
      <PhoneField>
        <PhoneTitle htmlFor={nameId}>Name</PhoneTitle>
        <PhoneInput type="text"
          id={nameId}
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required />
      </PhoneField>
      <PhoneField>
        <PhoneTitle htmlFor={numberId}>Number</PhoneTitle>
        <PhoneInput type="tel"
          id={numberId}
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required />
      </PhoneField>

      <PhoneButton type="submit">Add contact</PhoneButton>
    </PhoneForm>
    );
  };

export default ContactForm;