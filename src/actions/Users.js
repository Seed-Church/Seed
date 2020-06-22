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
  UPDATE_USERS_SUCCESS,
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

const addUsersSuccess = (status) => {
  return {
    type: ADD_USERS_SUCCESS,
    statusAPI: status,
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

const updateUsersSuccess = (status) => {
  return {
    type: UPDATE_USERS_SUCCESS,
    statusAPI: status,
  };
};

const deleteUsersSuccess = (status) => {
  return {
    type: DELETE_USERS_SUCCESS,
    statusAPI: status,
  };
};

const actionGruop = getActionGroup(fetchUsersPending, fetchUsersError);

export const fetchUsers = () => generateAction(USERS, "GET", fetchUsersSuccess, actionGruop);
export const addUser = (data) => generateAction(USERS, "POST", addUsersSuccess, actionGruop, ``, data);
export const editUser = (id) => generateAction(USERS, "GET", editUsersSuccess, actionGruop, `/` + id);
export const deleteUser = (id) => generateAction(USERS, "DELETE", deleteUsersSuccess, actionGruop, `/` + id);
export const updateUser = (id, data) => generateAction(USERS, "PUT", updateUsersSuccess, actionGruop, `/` + id, data);
