const USERS = "users";
const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
const EDIT_USERS_SUCCESS = "EDIT_USERS_SUCCESS";
const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    error: error,
  };
};

const editUsersSuccess = (item) => {
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

let obj = {
    error:fetchUsersError,sucess:editUsersSuccess,delete:deleteUsersSuccess
}
console.log(obj.error(`hello`));

