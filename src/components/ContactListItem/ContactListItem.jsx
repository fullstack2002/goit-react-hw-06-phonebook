import PropTypes from "prop-types";
import { ContactListElement, ContactListButton } from './ContactListItem.styled';

  const ContactListItem = ({ data, ItemDelete }) => {
    const { id, name, number } = data;
    return <ContactListElement>
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
    </ContactListElement>
}

ContactListItem.propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired,),
    onClick: PropTypes.func.isRequired,
}

export default ContactListItem;