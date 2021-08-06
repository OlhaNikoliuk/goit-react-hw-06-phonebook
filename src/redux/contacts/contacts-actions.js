import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: { id: uuidv4(), name, number },
  };
});
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');




// ===== VANILLA REDUX ===//

//import types from './contacts-types';

// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CANGE_FILTER,
//   payload: value,

// });

// export default { addContact, deleteContact, changeFilter };
