export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const fetchProductsPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_USERS_SUCCESS,
    products: products,
  };
};

export const fetchProductsError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    error: error,
  };
};

export const addUser = (data) => {
  return {
    type: "ADD_USER",
    data,
  };
};

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
