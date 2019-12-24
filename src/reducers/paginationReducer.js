import { UPDATE_PAGINATION } from "../actions/types";
const INITIAL_STATE = {
  currentPage: 1,
  contactsPerPage: 4
};

const paginationReducer = (pagination = INITIAL_STATE, action) => {
  if (action.type === UPDATE_PAGINATION)
    return { ...pagination, ...action.payload };
  return pagination;
};

export default paginationReducer;
