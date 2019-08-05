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

class home extends Component {
  state = { email: "", password: "" };

  emailChange = event => {
    this.setState({ email: event.target.value });
  };
  passwordChange = event => {
    this.setState({ password: event.target.value });
  };
  submit = event => {
    if (this.state.email === "") {
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
                <Label style={{ color: "#ffffff" }}>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  onChange={this.emailChange}
                  className="form-control"
                  placeholder="myemail@email.com"
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
            <br />
            <Button className="btn btn-primary" onClick={this.submit}>
              Submit
            </Button>
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

export default home;
