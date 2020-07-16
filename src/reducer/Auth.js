import { AUTH_HUMAN_PENDING, AUTH_HUMAN_ERROR, AUTH_HUMAN_SUCCESS } from "../constants/Auth";
const initialState = {
  auth_pending: false,
  auth_error: null,
  token: null,
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_HUMAN_PENDING:
      return {
        ...state,
        auth_pending: true,
      };
    case AUTH_HUMAN_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.token,
      };
    case AUTH_HUMAN_ERROR:
      return {
        ...state,
        pending: false,
        auth_error: action.error,
      };
    default:
      return state;
  }
};
export default Auth;
