const Users = (state = [], action) => {
  console.log(action);

  switch (action.type) {
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
