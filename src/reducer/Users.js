import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../constants/Users";

const initialState = {
  pending: false,
  items: [],
  error: null
}
const Users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
        items: [],
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.items,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        items: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default Users;
