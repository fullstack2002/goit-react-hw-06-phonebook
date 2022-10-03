import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {

  const [state, setState] = useState({ name: '', number: '' });

  const getInput = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      ...state,
      id: nanoid(),
    }
    onSubmit({ newContact });
    setState({ name: "", number: "" });
  }
  return (
    <PhoneForm onSubmit={handleOnSubmit}>
      <PhoneField>
        <PhoneTitle>Name</PhoneTitle>
        <PhoneInput type="text"
          name="name"
          onChange={getInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          required />
      </PhoneField>
      <PhoneField>
        <PhoneTitle>Number</PhoneTitle>
        <PhoneInput type="tel"
          name="number"
          onChange={getInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          required />
      </PhoneField>

      <PhoneButton type="submit">Add contact</PhoneButton>
    </PhoneForm>
    );
  };

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;