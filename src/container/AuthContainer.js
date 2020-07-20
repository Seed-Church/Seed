import { connect } from "react-redux";
import { getToken,getData } from "../actions/Auth";
import Login from "../views/Login";

const mapStateToProps = (state) => {
  return {
    auth_error: state.Auth.auth_error,
    token: state.Auth.token,
    auth_pending: state.Auth.auth_pending,
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetToken: (data) => {
      dispatch(getToken(data));
    },
    dispatchGetData: () => {
      dispatch(getData());
    },
  };
};

const LoginWithLogic = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWithLogic;
