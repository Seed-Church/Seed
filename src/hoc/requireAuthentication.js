import React from "react";
import { connect } from "react-redux";
// import {pushState} from 'redux-router';

export function requireAuthentication(Component) {
    
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
        console.log(`this.props`,this.props);
        console.log(`this.props.location.pathname`,this.props.location.pathname);
        
    //   if (!this.props.isAuthenticated) {
    //     let redirectAfterLogin = this.props.location.pathname;
    //     this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
    //   }
    }
 
    render() {
      return <div>{this.props.isAuthenticated === true ? <Component {...this.props} /> : null}</div>;
    }
  }

  const mapStateToProps = (state) => ({
    auth_error: state.Auth.auth_error,
    token: state.Auth.token,
    auth_pending: state.Auth.auth_pending,
    isAuthenticated : state.Auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
