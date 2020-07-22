import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USERS_SUCCESS,
  EDIT_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  SEARCH_USERS_SUCCESS,
  FETCH_ONE_USERS_SUCCESS,
} from "../constants/Users";

const initialState = {
  pending: false,
  items: [],
  error: `no error`,
  editing: false,
};
const Users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
        items: [],
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        items: [],
        error: action.error,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    case ADD_USERS_SUCCESS:
      return {
        ...state,
      };
    case EDIT_USERS_SUCCESS:
      return {
        ...state,
        items: action.items,
        editing: action.editing,
      };
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    case FETCH_ONE_USERS_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};
export default Users;
