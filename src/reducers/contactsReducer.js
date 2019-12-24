import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_ALL,
  DELETE_ONE_CONTACT
} from "../actions/types";
const INITIAL_STATE = [];

const contactsReducer = (contacts = INITIAL_STATE, action) => {
  switch (action.type) {
    //
    case CREATE_CONTACT:
      return [...contacts, action.payload];

    case UPDATE_CONTACT: {
      const id = action.payload.id;
      const restArray = contacts.filter(contact => contact.id !== id);
      return [...restArray, action.payload];
    }
    //
    case DELETE_ALL:
      return [];

    case DELETE_ONE_CONTACT: {
      return [...contacts.filter(contact => contact.id !== action.payload)];
    }

    default:
      return contacts;
  }
};

export default contactsReducer;
