import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { ContactListElement, ContactListButton } from './ContactListItem.styled';

export const ContactListItem = ({ data }) => {
    const dispatch = useDispatch();

    const { id, name, number } = data;
    return <ContactListElement>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <ContactListButton type='button' onClick={() => dispatch(removeContact(id))}>Delete contact</ContactListButton>
    </ContactListElement>
}

ContactListItem.propTypes = {
    data: PropTypes.objectOf(PropTypes.string.isRequired,),
}

export default ContactListItem;