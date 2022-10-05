import PropTypes from "prop-types";
import { ContactListItem, ContactListButton } from './ContactList.styled';

const ContactList = ({ contacts, seek, ItemDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.filter((contacts) => {
        return contacts.name.toLowerCase().indexOf(seek.toLowerCase()) > -1
      })
        .map(contact => (
          <ContactListItem key={contact.id}>
            <span>{contact.name} :{contact.number}</span>
            <ContactListButton
            type="button"
            onClick={() => {
            ItemDelete(contact.id);
            }}
          >
            Delete contact
      </ContactListButton>
        </ContactListItem>
      ))
      }
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
  seek: PropTypes.string,
  ItemDelete: PropTypes.func.isRequired,
};

export default ContactList;