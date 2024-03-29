import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import ReactDOM from "react-dom";
import Home from "./home";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
//import Route from "react-router-dom/Route";
import Erdiagram from "./erdiagram";
import Problemstatement from "./problemstatement.jsx";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class signup extends Component {
  state = { name: "", email: "", password: "", contact: "", usertype: 0 };

  nameChange = event => {
    this.setState({ name: event.target.value });
  };
  emailChange = event => {
    this.setState({ email: event.target.value });
  };
  passwordChange = event => {
    this.setState({ password: event.target.value });
  };
  contactChange = event => {
    this.setState({ contact: event.target.value });
  };

  submit = event => {
    var value = this;
    var formdata = new FormData(document.getElementById("custrm"));
    var data = new URLSearchParams();
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8001/signup', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();


    }).then(function (json) {
      console.log(json[0].usertype)
      value.setState({ usertype: json[0].usertype })
      console.log(value.state.usertype)
      if (value.state.usertype == 1) {
        window.history.pushState(null, "admin", "/adminlogin");
        window.location.reload();
      }
      if (value.state.usertype == 2) {
        window.history.pushState(null, "customer", "/customerlogin");
        window.location.reload();
      }
      if (value.state.usertype == 3) {
        window.history.pushState(null, "owner", "/ownerlogin");
        window.location.reload();
      }
    })



  };
  userTypeChanged = event => {
    if (event.target.value === "Admin") {
      this.setState({ usertype: "admin" });
    }
    if (event.target.value === "Customer") {
      this.setState({ usertype: "customer" });
    }
    if (event.target.value === "Owner") {
      this.setState({ usertype: "owner" });
    }
  };

  home = () => {
    window.history.pushState(null, "str", "/home");
    window.location.reload();
  };
  problemstatement = () => {
    window.history.pushState(null, "str", "/Problemstatement");
    window.location.reload();
  };
  erdiagram = () => {
    window.history.pushState(null, "str", "/erdiagram");
    window.location.reload();
  };
  schemadiagram = () => {
    window.history.pushState(null, "str", "/schemadiagram");
    window.location.reload();
  };

  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }}>
        <Container className="App" style={{ backgroundColor: "#adadeb" }}>
          <br />
          <br />
          <br />

          <h2 style={{ color: "#4d4d4d" }}>Hey, Welcome there!</h2>
          <br />

          <Form
            id="custrm"
            className="form"
            style={{
              backgroundColor: " #004d99",
              width: "60%",
              marginLeft: "20%",
              marginTop: "10%"
            }}

          >

            {" "}
            <br />
            <br />
            <br />
            <h2 style={{ color: "#ffffff" }}>Sign Up</h2>
            <Col>
              <br />
              <br />
              <br />
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleName"
                  onChange={this.nameChange}
                  className="form-control"
                  placeholder="Sherlock Holmes"
                  style={{
                    marginLeft: "18%",
                    width: "400px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </FormGroup>
            </Col>
            <Col>
              <br />

              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  onChange={this.emailChange}
                  className="form-control"
                  placeholder="sherlock221B@email.com"
                  style={{
                    marginLeft: "18%",
                    width: "400px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </FormGroup>
            </Col>
            <br />
            <Col>
              <FormGroup>
                <Label for="examplePassword" style={{ color: "#ffffff" }}>
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  onChange={this.passwordChange}
                  style={{
                    marginLeft: "18%",
                    width: "400px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </FormGroup>
            </Col>
            <br />
            <Col>
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Contact</Label>
                <Input
                  type="number"
                  name="contact"
                  id="exampleContact"
                  placeholder="9999999999"
                  onChange={this.contactChange}
                  style={{
                    marginLeft: "18%",
                    width: "400px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </FormGroup>
            </Col>

            <br />
            <Col>
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>User Type</Label>
                <br />
                <select style={{
                  marginLeft: "0%",
                  width: "400px",
                  backgroundColor: "#e6e6e0"
                }} name="usertype">
                  <option value="1">Admin</option>
                  <option value="2">Customer</option>
                  <option value="3">Owner</option>
                </select>
              </FormGroup>
            </Col>
            <br />
            <br />
            <Button className="btn btn-primary" onClick={this.submit}>
              Sign Up
            </Button>
            <br />
            <br />
            <br />
          </Form>
          <br />
          <br />
          <BrowserRouter>
            <div>
              <Route path="/home" exact strict component={Home} />{" "}
              <Route
                path="/problemstatement"
                exact
                strict
                component={Problemstatement}
              />{" "}
              <Route path="/erdiagram" exact strict component={Erdiagram} />{" "}
            </div>
          </BrowserRouter>
          <Router>
            <ul class="breadcrumb navbar navbar-inverse">
              <li>
                <NavLink
                  to="/home"
                  exact
                  activeStyle={{ color: "black" }}
                  onClick={this.home}
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink to="/Problemstatement" onClick={this.problemstatement}>
                  Problem Statement
                </NavLink>
              </li>
              <li>
                <NavLink to="/erdiagram" onClick={this.erdiagram}>
                  E-R Diagram
                </NavLink>
              </li>
              <li>
                <NavLink to="/schemadiagram" onClick={this.schemadiagram}>
                  Schema Diagram
                </NavLink>
              </li>
            </ul>
          </Router>
        </Container>
      </div>
    );
  }
}

export default signup;