import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class owneraccountinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  home = () => {
    window.history.pushState("/ownerlogin");
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
          <h1 style={{ display: "inline" }}>Account Info</h1>
          <h6 style={{ display: "inline" }} className="badge badge-primary">
            owner
          </h6>
        </div>
        <br />
        <NavLink
          to="/ownerlogin"
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

export default owneraccountinfo;
