import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
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
  home = () => {
    window.history.pushState("/");
    window.location.reload();
  };
  problemstatement = () => {
    window.history.pushState("/Problemstatement");
    window.location.reload();
  };
  erdiagram = () => {
    window.history.pushState("/erdiagram");
    window.location.reload();
  };
  schemadiagram = () => {
    window.history.pushState("/schemadiagram");
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
            <br />
          </Form>
          <br />
          <br />
          <ul class="breadcrumb navbar navbar-inverse">
            <li class="active">
              <NavLink to="/" onClick={this.home}>
                Sign Up
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
        </Container>
      </div>
    );
  }
}

export default home;
