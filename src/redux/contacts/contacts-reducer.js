import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

    case types.DELETE:
        return state.filter((contact) => {
          return contact.id !== payload;
        })

    default:
      return state;
  }
};
const filter = (state = '', {type, payload}) => {
  switch(type){
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

