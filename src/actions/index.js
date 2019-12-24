import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  CHECK_ALL,
  DELETE_ALL,
  DELETE_ONE_CONTACT,
  UPDATE_PAGINATION
} from "./types";

export const createContact = formValues => ({
  type: CREATE_CONTACT,
  payload: formValues
});

export const updateContact = formValues => ({
  type: UPDATE_CONTACT,
  payload: formValues
});

export const checkAll = () => ({
  type: CHECK_ALL
});

export const deleteAll = () => (dispatch, getState) => {
  const { contacts } = getState();
  if (contacts.length) {
    const sure = prompt("If you are sure, type Ok either type anything");
    if (sure.toLowerCase() === "ok") {
      dispatch({
        type: DELETE_ALL
      });
    }
  }
};

export const deleteOneContact = id => ({
  type: DELETE_ONE_CONTACT,
  payload: id
});

export const updatePagination = paginationVariables => ({
  type: UPDATE_PAGINATION,
  payload: paginationVariables
});
