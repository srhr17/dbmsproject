import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class admincustomerinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  home = () => {
    window.history.pushState("/adminlogin");
    window.location.reload();
  };
  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }}>
        <div
          style={{
            marginLeft: "40%"
          }}
        >
          <h1 style={{ display: "inline" }}>Customer Info</h1>
          <h6 style={{ display: "inline" }} className="badge badge-warning">
            admin
          </h6>
        </div>
        <br />
        <NavLink
          to="/adminlogin"
          onClick={this.home}
          className="btn btn-primary "
          style={{
            marginLeft: "45%"
          }}
        >
          Back
        </NavLink>
      </div>
    );
  }
}

export default admincustomerinfo;
