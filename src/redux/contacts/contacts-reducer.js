import { combineReducers } from 'redux';
import types from './contacts-types';
import toast from 'react-hot-toast';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const findContact = (allContacts, newContact) => {

  const includedContact = allContacts
    ? allContacts.find((contact) => contact.name === newContact)
    : '';

  if (!includedContact) {
    toast.success(`Contact ${newContact} added to Phonebook`, {
      duration: 4000,
      position: 'top-right',
    });
    return includedContact;
  } else {
    toast.error(`${newContact} is already in contacts.`, {
      duration: 4000,
      position: 'top-right',
    });
    return includedContact;
  }
};


const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const findName = findContact(state, payload.name);

      if (findName) return state;
      localStorage.setItem('contacts', JSON.stringify([payload, ...state]));
      return [payload, ...state];

    case types.DELETE:
      const contacts = state.filter((contact) => {
        return contact.id !== payload;
      });
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
