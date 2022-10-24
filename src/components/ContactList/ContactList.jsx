import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactsRendering = getFilteredContacts()

    return <ul>
        {contactsRendering.map(item =>
            <ContactListItem key={item.id} data={item} />)
        }
    </ul>
}

export default ContactList;