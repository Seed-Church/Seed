import React, { useState } from "react";

import { Router, Switch, Route , Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

import FormRegisterMember from "../components/FormRegisterMember";
import DashBoard from "../components/DashBoard";
import FormMemorize from "../components/FormMemorize";

import generateComponentWithMainLayout from "../hoc/generateComponentWithMainLayout";

const history = createBrowserHistory();


const FormRegisterMemberWithLayout = generateComponentWithMainLayout(FormRegisterMember);
const DashBoardWithLayout = generateComponentWithMainLayout(DashBoard);
const FormMemorizeWithLayout = generateComponentWithMainLayout(FormMemorize);

export default () => (
    <Router history={history}>
        <Route exact path="/dashboard"  component={DashBoardWithLayout} />
        <Route exact path="/add" component={FormRegisterMemberWithLayout} />
        <Route exact path="/memorize" component={FormMemorizeWithLayout} />
        {/* <Redirect from="/" to="/dashboard" /> */}
    </Router>
);
