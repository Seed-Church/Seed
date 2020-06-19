import { GROUPS, FETCH_GROUPS_PENDING, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_ERROR } from "../constants/Groups";
const initialState = {
  pending: false,
  groups: [],
  error: null,
};
const Groups = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_PENDING:
      return {
        ...state,
        pending: true,
        groups: [],
      };
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        pending: false,
        groups: action.groups,
      };
    case FETCH_GROUPS_ERROR:
      return {
        ...state,
        pending: false,
        groups: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default Groups;
