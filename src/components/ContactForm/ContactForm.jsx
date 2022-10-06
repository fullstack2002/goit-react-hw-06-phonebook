import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';

const ContactForm = ({ addContact }) => {

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

  const handleSubmit = (event) => {
    event.preventDefault();

    addContact(name, number);

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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}

export default ContactForm;