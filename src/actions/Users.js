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
