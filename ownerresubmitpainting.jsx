import React, { Component } from "react";

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
class ownerresubmitpainting extends Component {
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
        <Container className="App" style={{ backgroundColor: "#adadeb" }}>
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
            <h2 style={{ color: "#ffffff" }}>Re-Submit Painting</h2>
            <Col>
              <br />
              <br />
              <br />
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Painting Name</Label>
                <Input
                  type="text"
                  onChange={this.emailChange}
                  className="form-control"
                  placeholder="Painting Name"
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
                <Label style={{ color: "#ffffff" }}>Theme</Label>
                <Input
                  type="text"
                  placeholder="Enter a short description"
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
                <Label style={{ color: "#ffffff" }}>Rent</Label>
                <Input
                  type="number"
                  onChange={this.rentChange}
                  className="form-control"
                  placeholder="Painting Rent"
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
          <NavLink
            to="/ownerlogin"
            onClick={this.home}
            className="btn btn-primary "
            style={{ marginLeft: "0%" }}
          >
            Back
          </NavLink>
        </Container>
      </div>
    );
  }
}

export default ownerresubmitpainting;
