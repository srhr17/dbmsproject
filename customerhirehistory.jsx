import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class customerhirehistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  home = () => {
    window.history.pushState("/customerlogin");
    window.location.reload();
  };
  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }}>
        <h1 style={{ marginLeft: "40%" }}>Hire History</h1>
        <NavLink
          to="/customerlogin"
          onClick={this.home}
          className="btn btn-primary "
          style={{ marginLeft: "45%" }}
        >
          Back
        </NavLink>
      </div>
    );
  }
}

export default customerhirehistory;
