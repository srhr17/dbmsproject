import React, { Component } from "react";
import Schemadiagram from "./schemadiagram.jpg";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class schema extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "0%" }}>Schema Diagram</h1>
        <img
          src={Schemadiagram}
          alt="Schema Diagram"
          style={{ marginBottom: "10%", marginTop: "3%" }}
        />
        <NavLink to="/home" onClick={this.home} className="btn btn-primary m-1">
          Back
        </NavLink>
      </div>
    );
  }
}

export default schema;
