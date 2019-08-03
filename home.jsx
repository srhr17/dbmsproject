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
  state = {};

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
            <Button className="btn btn-primary">Submit</Button>
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
