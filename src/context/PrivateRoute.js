import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./auth";

function PrivateRoute({ component: Component, ...rest }) {
  //const isAuthenticated = useAuth(false);
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    console.log(`token fuck u=`, localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      setAuth(true);
      console.log(`isAuth1=${isAuth}`);
    }
  }, []);
  console.log(`isAuth2=${isAuth}`);
  return <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default PrivateRoute;
