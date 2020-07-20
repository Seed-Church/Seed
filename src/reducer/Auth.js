import { AUTH_HUMAN_PENDING, AUTH_HUMAN_ERROR, AUTH_GETTOKEN_HUMAN } from "../constants/Auth";
const initialState = {
  auth_pending: false,
  auth_error: null,
  token: null,
  userName:null,
  isAuthenticated:false
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_HUMAN_PENDING:
      return {
        ...state,
        auth_pending: true,
      };
    case AUTH_GETTOKEN_HUMAN:
      return {
        ...state,
        pending: false,
        token: action.token,
        isAuthenticated:true
      };
    case AUTH_HUMAN_ERROR:
      return {
        ...state,
        pending: false,
        auth_error: action.auth_error,
      };
    default:
      return state;
  }
};
export default Auth;
