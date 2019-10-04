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
class customerreturnpainting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  home = () => {
    window.history.pushState("/customerlogin");
    window.location.reload();
  };
  submit = event => {
    var count;
    var value = this;
    var data = new URLSearchParams();
    var formdata = new FormData(document.getElementById('custform'))
    // var pair;
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    console.log(data)

    fetch('http://localhost:8001/customerreturnpainting', {
      method: 'post',
      body: data
    }).then(function (response) {
      alert("Finally you have returned it!!");
      return response.json();

    })

  }

  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }}>
        <h1 style={{ marginLeft: "40%" }}>Return a Painting</h1>
        <br>
        </br>
        <br></br>
        <button

          className="btn btn-primary "
          style={{ marginLeft: "45%" }}
        >
          <a href="http://localhost:8001/hirehistorydisplaynow" style={{ color: "white" }}>Show Paintings to be Returned</a>
        </button>
        <br></br>
        <br></br>
        <Container className="App" style={{ backgroundColor: "#adadeb" }}>
          <br />
          <br />
          <br />

          <h2 style={{ color: "#4d4d4d" }}>Click on the button above to show all hired paintings . . .</h2>
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
            <h2 style={{ color: "#ffffff" }}>Enter Painting ID to return it!!</h2>
            <Col>
              <br />
              <br />
              <br />
              <FormGroup>
                <Label style={{ color: "#ffffff" }}>Painting ID</Label>
                <Input
                  type="number"
                  name="pid"
                  id="examplePid"

                  className="form-control"
                  placeholder="12"
                  style={{
                    marginLeft: "18%",
                    width: "400px",
                    backgroundColor: "#e6e6e6"
                  }}
                />
              </FormGroup>
            </Col>

            <Button className="btn btn-primary" onClick={this.submit}>
              Submit
            </Button>
            <br />
            <br />
            <br />
          </Form>
          <br />
          <br />

        </Container>
        <NavLink
          to="/customerlogin"
          onClick={this.home}
          className="btn btn-primary "
          style={{ marginLeft: "45%" }}
        >
          Back
        </NavLink>
      </div>
    );
  }
}

export default customerreturnpainting;
