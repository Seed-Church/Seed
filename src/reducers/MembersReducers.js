const MemberReducers = (state = [], action) => {
  switch (action.type) {
    case `EDIT_MEMBER  `:
        state.map(member => member)
      break;
    default:
      break;
  }
};
