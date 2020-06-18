import generateAction from "../hoc/generateAction";
import getActionGroup from "../utils/getActionGroup";
import {
  USERS,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USERS_SUCCESS,
  EDIT_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
} from "../constants/Users";

const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    error: error,
  };
};

const addUsersSuccess = (item) => {
  return {
    type: ADD_USERS_SUCCESS,
    items: item,
    editing: true,
  };
};

const fetchUsersSuccess = (items) => {
  return {
    type: FETCH_USERS_SUCCESS,
    items: items,
  };
};

export const editUsersSuccess = (item) => {
  return {
    type: EDIT_USERS_SUCCESS,
    items: item,
    editing: true,
  };
};

const deleteUsersSuccess = (item) => {
  return {
    type: DELETE_USERS_SUCCESS,
    items: item,
  };
};

const actionGruop = getActionGroup(fetchUsersPending, fetchUsersError);


export const fetchUsers = () => generateAction(USERS, "GET", fetchUsersSuccess, actionGruop);
export const addUser = (data) => generateAction(USERS, "POST", addUsersSuccess, actionGruop, ``, data);
export const editUser = (id) => generateAction(USERS, "GET", editUsersSuccess, actionGruop, `/` + id);
