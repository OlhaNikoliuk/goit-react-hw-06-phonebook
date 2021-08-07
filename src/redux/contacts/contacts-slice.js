import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [action.payload, ...state],
    deleteContact: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});



export const {addContact, deleteContact} = contactsSlice.actions
export const {changeFilter} = filterSlice.actions
export default contactsSlice.reducer
