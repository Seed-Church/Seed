import { API_URL } from "../api/index";
import {
  USERS,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  EDIT_USERS_SUCCESS,
} from "../constants/Users";
export const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  };
};

export const fetchUsersSuccess = (items) => {
  return {
    type: FETCH_USERS_SUCCESS,
    items: items,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    error: error,
  };
};

export const editUsersSuccess = (item) => {
  return {
    type: EDIT_USERS_SUCCESS,
    items: item,
    editing: true,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch(API_URL + USERS)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch(API_URL + USERS, {
      //headers: { "content-type": "multipart/form-data" },
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

export const editUser = (id) => {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch(API_URL + USERS + `/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(editUsersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

export const delUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const getUsers = () => {
  return {
    type: "GET_USERS_ALL",
  };
};
