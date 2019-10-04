import React, { Component } from "react";
import Erdiagram from "./erdiagram.jpg";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class erdiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "0%" }}>E-R Diagram</h1>
        <img
          src={Erdiagram}
          alt="E-R Diagram"
          style={{ marginBottom: "10%", marginTop: "3%" }}
        />
        <NavLink to="/home" onClick={this.home} className="btn btn-primary m-1">
          Back
        </NavLink>
      </div>
    );
  }
}

export default erdiagram;
