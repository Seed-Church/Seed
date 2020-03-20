import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import FormRegister from "../components/FormRegister";
import DashBoard from "../components/DashBoard"
import FormMemorize from '../components/FormMemorize'

import generateComponentWithMainLayout from '../hoc/generateComponentWithMainLayout';

const FormRegisterWithLayout = generateComponentWithMainLayout(FormRegister);
const DashBoardWithLayout = generateComponentWithMainLayout(DashBoard);
const FormMemorizeWithLayout = generateComponentWithMainLayout(FormMemorize);

export default () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard">
          <DashBoardWithLayout />
        </Route>
        <Route exact path="/add">
          <FormRegisterWithLayout />
        </Route>
        <Route exact path="/memorize">
          <FormMemorizeWithLayout />
        </Route>
      </Switch>
    </BrowserRouter>
);
