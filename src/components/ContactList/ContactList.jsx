import PropTypes from "prop-types";
import { ContactListItem, ContactListButton } from './ContactList.styled';

const ContactList = ({ contacts, ItemDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <ContactListButton
            type="button"
            onClick={() => {
            ItemDelete(id);
            }}
          >
            Delete contact
          </ContactListButton>
        </ContactListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  ItemDelete: PropTypes.func.isRequired,
};

export default ContactList;