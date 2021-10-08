import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class adminaccountinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = event => {
    var name;
    var id;
    var email;
    var contact;
    var catogory;
    var value = this;
    var data = new URLSearchParams();


    fetch('http://localhost:8001/adminlogininfo', {
      method: 'post'
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      // console.log(json[0].count)
      name = json[0].name;
      id = json[0].id;
      email = json[0].email;
      contact = json[0].contact;

      return json;
    }).then(function (json) {
      value.setState({ name: json[0].name })
      value.setState({ id: json[0].id })
      value.setState({ email: json[0].email })
      value.setState({ contact: json[0].contact })


    })


  }

  home = () => {
    window.history.pushState("/adminlogin");
    window.location.reload();
  };
  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }} onLoad={this.submit()}>
        <div
          style={{
            marginLeft: "40%"
          }}
        >
          <h1 style={{ display: "inline" }}>Account Info</h1>
          <h6 style={{ display: "inline" }} className="badge badge-warning">
            admin
          </h6>
        </div>
        <h1>Admin ID : </h1>
        <h2>{this.state.id}</h2>
        <br />
        <h1>Admin Name : </h1>
        <h2>{this.state.name}</h2>
        <br />
        <h1>Admin E-Mail : </h1>
        <h2>{this.state.email}</h2>
        <br />
        <h1>Admin Contact : </h1>
        <h2>{this.state.contact}</h2>

        <br />
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

export default adminaccountinfo;
