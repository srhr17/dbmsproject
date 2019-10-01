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
class ownersubmitpainting extends Component {
  constructor(props) {
    super(props);
    this.state = { paintingname: "", theme: "", rent: null, submitted: 0 };
  }
  home = () => {
    window.history.pushState("/ownerlogin");
    window.location.reload();
  };
  emailChange = event => {
    this.setState({ paintingname: event.target.value });
  };
  passwordChange = event => {
    this.setState({ theme: event.target.value });
  };
  rentChange = event => {
    this.setState({ rent: event.target.value });
  };

  submit = event => {
    var submitted;
    var value = this;
    var data = new URLSearchParams();
    var formdata = new FormData(document.getElementById('custform'))
    // var pair;
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8001/ownersubmitpainting', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      // console.log(json[0].count)
      submitted = json[0].submitted
      return json;
    }).then(function (json) {
      value.setState({ submitted: json[0].submitted })
      console.log(value.state.submitted)
    })
    alert("Submitted Succesfully !!");
    window.history.pushState(null, "owner", "/ownerlogin");
    window.location.reload();
  }


  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }}>
        <Container className="App" style={{ backgroundColor: "#adadeb" }}>
          <br />

          <Form
            id="custform"
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
            <h2 style={{ color: "#ffffff" }}>Submit Painting</h2>


            <Col>

              <br />
              <br />
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Painting Name</Label>
                <Input
                  type="text"
                  onChange={this.emailChange}
                  className="form-control"
                  placeholder="Painting Name"
                  name="name"
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
                  name="theme"
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
                  name="rent"
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

export default ownersubmitpainting;
