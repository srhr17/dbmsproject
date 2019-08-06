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
import Customeraccountinfo from "./compnents/customeraccountinfo";
import Home from "./compnents/home.jsx";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Ownerlogin from "./compnents/ownerlogin.jsx";
import Owneraccountinfo from "./compnents/owneraccountinfo";
import Customerlogin from "./compnents/customerlogin.jsx";
import Adminlogin from "./compnents/adminlogin.jsx";
import Signup from "./compnents/signup.jsx";
import Ownersubmitpainting from "./compnents/ownersubmitpainting";
import Ownerviewpainting from "./compnents/ownerviewpainting";
import Ownerresubmitpainting from "./compnents/ownerresubmitpainting";
import Hirepainting from "./compnents/customerhirepainting";
import Returnpainting from "./compnents/customerreturnpainting";
import Hirehistory from "./compnents/customerhirehistory";
import Adminaccountinfo from "./compnents/adminaccountinfo";
import Adminownerinfo from "./compnents/adminownerinfo";
import Admincustomerinfo from "./compnents/admincustomerinfo";
import Adminpaintinginfo from "./compnents/adminpaintinginfo";
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
        <Route exact path="/ownerlogin" component={Ownerlogin} />
        <Route exact path="/customerlogin" component={Customerlogin} />
        <Route exact path="/adminlogin" component={Adminlogin} />
        <Route exact path="/owneraccountinfo" component={Owneraccountinfo} />
        <Route exact path="/SubmitPainting" component={Ownersubmitpainting} />
        <Route exact path="/ViewPainting" component={Ownerviewpainting} />
        <Route
          exact
          path="/ResubmitPainting"
          component={Ownerresubmitpainting}
        />
        <Route
          exact
          path="/accountinfocustomer"
          component={Customeraccountinfo}
        />
        <Route exact path="/HirePainting" component={Hirepainting} />
        <Route exact path="/ReturnPainting" component={Returnpainting} />
        <Route exact path="/HireHistory" component={Hirehistory} />
        <Route exact path="/accountinfoadmin" component={Adminaccountinfo} />
        <Route exact path="/ownerinfo" component={Adminownerinfo} />
        <Route exact path="/customerinfo" component={Admincustomerinfo} />
        <Route exact path="/paintinginfo" component={Adminpaintinginfo} />
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
