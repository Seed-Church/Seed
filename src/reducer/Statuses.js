import {
  FETCH_STATUSES_PENDING,
  FETCH_STATUSES_SUCCESS,
  FETCH_STATUSES_ERROR,
} from "../constants/Statuses";

const initialState = {
  pending: false,
  statuses: [],
  error: null,
};
const Statuses = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUSES_PENDING:
      return {
        ...state,
        pending: true,
        statuses: [],
      };
    case FETCH_STATUSES_SUCCESS:
      return {
        ...state,
        pending: false,
        statuses: action.statuses,
      };
    case FETCH_STATUSES_ERROR:
      return {
        ...state,
        pending: false,
        statuses: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default Statuses;
