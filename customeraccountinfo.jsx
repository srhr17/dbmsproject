import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class customeraccountinfo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: " ", id: " ", email: " ", contact: " ", catogory: " " };
  }


  submit = event => {
    var name;
    var id;
    var email;
    var contact;
    var catogory;
    var value = this;
    var data = new URLSearchParams();


    fetch('http://localhost:8001/customerlogininfo', {
      method: 'post'
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      // console.log(json[0].count)
      name = json[0].name;
      id = json[0].id;
      email = json[0].email;
      contact = json[0].contact;
      catogory = json[0].catogory;
      return json;
    }).then(function (json) {
      value.setState({ name: json[0].name })
      value.setState({ id: json[0].id })
      value.setState({ email: json[0].email })
      value.setState({ contact: json[0].contact })
      value.setState({ catogory: json[0].catogory })

    })


  }


  home = () => {
    window.history.pushState("/customerlogin");
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
          <h6 style={{ display: "inline" }} className="badge badge-primary">
            customer
          </h6>
        </div>

        <h1>Customer ID : </h1>
        <h2>{this.state.id}</h2>
        <br />
        <h1>Customer Name : </h1>
        <h2>{this.state.name}</h2>
        <br />
        <h1>Customer E-Mail : </h1>
        <h2>{this.state.email}</h2>
        <br />
        <h1>Customer Contact : </h1>
        <h2>{this.state.contact}</h2>
        <br />
        <h1>Customer Category : </h1>
        <h2>{this.state.catogory}</h2>
        <br />

        <NavLink
          to="/customerlogin"
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

export default customeraccountinfo;
