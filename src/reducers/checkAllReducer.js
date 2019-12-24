import { CHECK_ALL } from "../actions/types";
const INITIAL_STATE = false;

const checkAllReducer = (flag = INITIAL_STATE, action) => {
  if (action.type === CHECK_ALL) return !flag;
  return flag;
};

export default checkAllReducer;
