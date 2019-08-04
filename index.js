import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./compnents/home.jsx";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Ownerlogin from "./compnents/ownerlogin.jsx";
import Customerlogin from "./compnents/customerlogin.jsx";
import Adminlogin from "./compnents/adminlogin.jsx";
import Signup from "./compnents/signup.jsx";
ReactDOM.render(<Signup />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
