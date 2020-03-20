import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "../components/MainLayout";
import FormRegister from "../components/FormRegister";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/add">
        <MainLayout component={FormRegister} />
      </Route>
    </Switch>
  </BrowserRouter>
);
