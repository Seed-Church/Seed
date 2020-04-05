const MemberReducers = (state = [], action) => {
  switch (action.type) {
    case `EDIT_MEMBER  `:
      return state.map((member) => member.id === action.id);
    default:
      break;
  }
};
