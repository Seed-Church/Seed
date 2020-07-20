import React, { useEffect } from "react";
import { connect } from "react-redux";
// import {pushState} from 'redux-router';
import { getData } from "../actions/Auth";
export const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    useEffect(() => {
      props.dispatchGetData();
    }, []);
    console.log(`propsAuthenticatedComponent`,props);
    
    return <div>{props.isAuthenticated === true ? <Component {...props} /> : null}</div>;
  };

  const mapStateToProps = (state) => ({
    auth_error: state.Auth.auth_error,
    token: state.Auth.token,
    auth_pending: state.Auth.auth_pending,
    isAuthenticated: state.Auth.isAuthenticated,
    user:state.Auth.user
  });

  const mapDispatchToProps = (dispatch) => ({
    dispatchGetData: () => {
      dispatch(getData());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
};
