import { connect } from "react-redux";
import { authHuman } from "../actions/Auth";
import Login from "../views/Login";

const mapStateToProps = (state) => {
  return {
    auth_error: state.Auth.error,
    auth_items: state.Auth.items,
    auth_pending: state.Auth.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchOneUsers: (data) => {
      dispatch(authHuman(data));
    },
  };
};

const LoginWithLogic = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWithLogic;
