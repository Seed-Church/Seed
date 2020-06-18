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

let actionGruop = getActionGroup(fetchUsersPending, fetchUsersError);

export const fetchUsers = () => generateAction("GET", fetchUsersSuccess, actionGruop);
export const addUser = (data) => generateAction("POST", fetchUsersSuccess, actionGruop);
export const editUser = (id) => generateAction("GET", editUsersSuccess, actionGruop, `/` + id);
