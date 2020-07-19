import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Main from "./views/layout/Main";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import CardBlogs from "./components/CardBlogs";
import UsersContainner from "./container/UsersContainner";
import LoginWithLogic from "./container/AuthContainer";
import generateMain from "./hoc/generateMain";
import Maintenance from "./components/Maintenance";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./context/PrivateRoute";
import validateValue from "./utils/validateValue";
const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const ModalWithLayout = generateMain(Modal);
const BoardWithLayout = generateMain(UsersContainner.BoardWithLogic);
const FormsWithLayout = generateMain(UsersContainner.FormsWithLogic);
const UsersCardWithLayout = generateMain(UsersContainner.UsersCardWithLogic);
const CardBlogsWithLayout = generateMain(CardBlogs);
const MaintenanceWithLayout = generateMain(Maintenance);

function App() {
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    console.log(`token fuck u=`, localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      console.log(`fuck u`);
      
      setAuth(false);
      console.log(`isAuth1=${isAuth}`)
    }
  }, [isAuth]);
  console.log(`isAuth2=${isAuth}`)
  return (
    <React.Fragment>
      <AuthContext.Provider value={isAuth}>
        <Router history={history}>
          <Route exact path="/login" component={LoginWithLogic} />
          <PrivateRoute exact path="/" component={Main} />
          <PrivateRoute exact path="/form" component={FormsWithLayout} />
          <PrivateRoute exact path="/form/:id/edit" component={FormsWithLayout} />
          <PrivateRoute exact path="/card" component={CardWithLayout} />
          <PrivateRoute exact path="/board" component={BoardWithLayout} />
          <PrivateRoute exact path="/profile" component={MaintenanceWithLayout} />
          <PrivateRoute exact path="/settings" component={MaintenanceWithLayout} />
          <PrivateRoute exact path="/logout" component={MaintenanceWithLayout} />
          <PrivateRoute exact path="/blog" component={CardBlogsWithLayout} />
          <PrivateRoute exact path="/modal" component={ModalWithLayout} />
          <PrivateRoute exact path="/usercard" component={UsersCardWithLayout} />
          {/* <PrivateRoute path="/admin" component={Main} /> */}
          {/* <Route exact path="/upload" component={} /> */}
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
