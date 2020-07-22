import React from "react";
import { Router, Route,Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./views/layout/Main";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import CardBlogs from "./components/CardBlogs";
import UsersContainner from "./container/UsersContainner";
import LoginWithLogic from "./container/AuthContainer";
import generateMain from "./hoc/generateMain";
import Maintenance from "./components/Maintenance";
import requireAuth from "./hoc/requireAuth";
import "./App.css";

const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const BoardWithLayout = generateMain(UsersContainner.BoardWithLogic);
const FormsWithLayout = generateMain(UsersContainner.FormsWithLogic);
const UsersCardWithLayout = generateMain(UsersContainner.UsersCardWithLogic);
const CardBlogsWithLayout = generateMain(CardBlogs);
const MaintenanceWithLayout = generateMain(Maintenance);

const FormWithAuth = requireAuth(FormsWithLayout);
const BoardWithAuth = requireAuth(BoardWithLayout);
const CardWithAuth = requireAuth(CardWithLayout);
const CardBlogWithAuth = requireAuth(CardBlogsWithLayout);
const MaintenanceBlogWithAuth = requireAuth(MaintenanceWithLayout);
const UserCardWithAuth = requireAuth(UsersCardWithLayout);

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Route exact path="/" component={requireAuth(Main)} />
        {/* <Redirect to="/login" /> */}
        <Route exact path="/login" component={LoginWithLogic} />

        <Route exact path="/form" component={FormWithAuth} />
        <Route exact path="/form/:id/edit" component={FormWithAuth} />

        <Route exact path="/card" component={CardWithAuth} />
        <Route exact path="/board" component={BoardWithAuth} />
        <Route exact path="/blog" component={CardBlogWithAuth} />
        <Route exact path="/usercard" component={UserCardWithAuth} />

        <Route exact path="/profile" component={MaintenanceBlogWithAuth} />
        <Route exact path="/settings" component={MaintenanceBlogWithAuth} />
        <Route exact path="/logout" component={MaintenanceBlogWithAuth} />
      </Router>
    </React.Fragment>
  );
}

export default App;
