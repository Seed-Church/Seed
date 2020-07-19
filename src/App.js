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
const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const ModalWithLayout = generateMain(Modal);
const BoardWithLayout = generateMain(UsersContainner.BoardWithLogic);
const FormsWithLayout = generateMain(UsersContainner.FormsWithLogic);
const UsersCardWithLayout = generateMain(UsersContainner.UsersCardWithLogic);
const CardBlogsWithLayout = generateMain(CardBlogs);
const MaintenanceWithLayout = generateMain(Maintenance);

function App() {
  return (
    <React.Fragment>
        <Router history={history}>
          <Route exact path="/login" component={LoginWithLogic} />
          <Route exact path="/" component={Main} />
          <Route exact path="/form" component={FormsWithLayout} />
          <Route exact path="/form/:id/edit" component={FormsWithLayout} />
          <Route exact path="/card" component={CardWithLayout} />
          <Route exact path="/board" component={BoardWithLayout} />
          <Route exact path="/profile" component={MaintenanceWithLayout} />
          <Route exact path="/settings" component={MaintenanceWithLayout} />
          <Route exact path="/logout" component={MaintenanceWithLayout} />
          <Route exact path="/blog" component={CardBlogsWithLayout} />
          <Route exact path="/modal" component={ModalWithLayout} />
          <Route exact path="/usercard" component={UsersCardWithLayout} />
          {/* <PrivateRoute path="/admin" component={Main} /> */}
          {/* <Route exact path="/upload" component={} /> */}
        </Router>
    </React.Fragment>
  );
}

export default App;
