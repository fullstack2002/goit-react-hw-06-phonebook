import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  inputNameId = nanoid();
  inputTelId = nanoid();

  getInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhoneForm onSubmit={this.handleOnSubmit}>
        <PhoneField>
          <PhoneTitle htmlFor={this.inputNameId}>Name</PhoneTitle>
          <PhoneInput
            id={this.inputNameId}
            type="text"
            name="name"
            onChange={this.getInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            />
        </PhoneField>
        <PhoneField>
          <PhoneTitle>Number</PhoneTitle>
          <PhoneInput
            id={this.inputTelId}
            type="tel"
            name="number"
            onChange={this.getInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required/>
        </PhoneField>
        <PhoneButton type="submit">Add contact</PhoneButton>
      </PhoneForm>
    )
  }
}

ContactForm.propTypes = {
  handleOnSubmit: PropTypes.func,
};

export default ContactForm;