import React, { Component } from "react";
import ReactDOM from "react-dom";

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
  state = { name: "", email: "", password: "", contact: "", usertype: "" };

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
    if (this.state.email === "") {
    }
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
            <h2 style={{ color: "#ffffff" }}>Sign In</h2>
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
                <select
                  name="carlist"
                  form="carform"
                  onChange={this.userTypeChanged}
                >
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  <option value="owner">Owner</option>
                </select>
              </FormGroup>
            </Col>
            <br />
            <br />
            <Button className="btn btn-primary" onClick={this.signup}>
              Sign Up
            </Button>
            <br />
            <br />
            <br />
          </Form>
          <br />
          <br />
          <ul class="breadcrumb navbar navbar-inverse">
            <li class="active">
              <a href="#" exact to="/">
                Home
              </a>
            </li>
            <li>
              <a href="#" to="/Problemstatement">
                {" "}
                Problem Statement{" "}
              </a>
            </li>
            <li>
              <a href="#" class="" to="/erdiagram">
                E-R diagram
              </a>
            </li>
            <li>
              <a href="#" to="/schema diagram">
                Schema diagram
              </a>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default signup;
