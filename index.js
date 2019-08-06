import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Problemstatement from "./compnents/problemstatement.jsx";
import App from "./App";

import Home from "./compnents/home.jsx";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Ownerlogin from "./compnents/ownerlogin.jsx";
import Owneraccountinfo from "./compnents/owneraccountinfo";
import Customerlogin from "./compnents/customerlogin.jsx";
import Adminlogin from "./compnents/adminlogin.jsx";
import Signup from "./compnents/signup.jsx";

import Erdiagram from "./compnents/erdiagram";
import Schema from "./compnents/schema.jsx";
ReactDOM.render(
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/Problemstatement" component={Problemstatement} />
        <Route exact path="/erdiagram" component={Erdiagram} />
        <Route exact path="/schemadiagram" component={Schema} />
        <Route exact path="/owneraccountinfo" component={Owneraccountinfo} />
        <Route component={Home} />
      </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
