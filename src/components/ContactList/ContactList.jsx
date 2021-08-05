import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BsTrashFill } from 'react-icons/bs';
import { RiContactsFill } from 'react-icons/ri';
import { List, ListItem, Button } from './ContactList.styled';
import * as contactsActions from '../../redux/contacts/contacts-actions';

function ContactList({ contacts, onDeleteContact }) {
  
  return (
    <List>
    {contacts.map((contact) => {
      return (
        <ListItem key={contact.id}>
          <RiContactsFill size='17' />
          {contact.name}: {contact.number}
          <Button type='button' onClick={() => onDeleteContact(contact.id)}>
            Delete
            <BsTrashFill></BsTrashFill>
          </Button>
        </ListItem>
      );
    })}
  </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};

const getVisibleContacts = (contacts, filter) => {
  if(!contacts)return;
  
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);

  return { contacts: visibleContacts };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(contactsActions.deleteContact(contactId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
