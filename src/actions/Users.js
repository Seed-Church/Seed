import { api } from "../api/index";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

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

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch(api + `users`)
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
    fetch(api + `users`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.status)
      .then((res) => {
        console.log(`res=`, res);
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

// export const addUser = (data) => {
//   return {
//     type: "ADD_USER",
//     data,
//   };
// };

export const editUser = (id) => {
  return {
    type: "EDIT_USER",
    id,
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
