import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/Users";
import axios from "axios";

const initialState = {
  pending: false,
  users: [],
  error: null
}
const Users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.users,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case "ADD_USER":
      return state.concat([action.data]);
    case "EDIT_USER":
      return state;
    case "DELETE_USER":
      return state;
    case "GET_USERS_ALL":
      return state;
    default:
      return state;
  }
};
export default Users;
