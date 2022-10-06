import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts, ItemDelete }) => {
  return (
    <ul>
      {contacts.map(item => (
        <ContactListItem
          key={item.id} data={item} ItemDelete={ItemDelete}>
        </ContactListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
    ItemDelete: PropTypes.func.isRequired,
}
export default ContactList;