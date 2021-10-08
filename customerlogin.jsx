import React, { Component } from "react";
import axios from 'axios';
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";



class customerlogin extends Component {
  state = { customername: "customername", cid: "cid", noofpaintings: null, price: 0 };
  /*  here = event => {
    this.setState({ ownername: event.target.value - date2.getUTCDate() });
  };*/

  home = event => {
    // var value = this;

    fetch('http://localhost:8001/logout', {
      method: 'post',

    })
  }

  accountinfo = event => {
    window.history.pushState("/accountinfocustomer");
    window.location.reload();
  };

  submitpainting = event => {
    window.history.pushState("/HirePainting");
    window.location.reload();
  };

  viewpainting = event => {
    window.history.pushState("/ReturnPainting");
    window.location.reload();
  };

  resubmitpainting = event => {
    window.history.pushState("/HireHistory");
    window.location.reload();
  };

  her = event => {
    var name, id;
    var value = this;

    fetch('http://localhost:8001/customer', {
      method: 'post'
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      // console.log(json[0].count)
      name = json[0].name;
      id = json[0].id;
      return json;
    }).then(function (json) {
      value.setState({ customername: json[0].name })
      value.setState({ price: json[0].price })
      value.setState({ cid: json[0].id })

    })
  }

  render() {
    return (
      <body style={{ backgroundColor: "#d6d6f5" }} >

        <div style={{ backgroundColor: "#d6d6f5" }} onLoad={this.her()}>

          <Container
            style={{
              width: "60%",
              marginLeft: "30%",
              marginTop: "5%",
              height: "100%"
            }}
          >
            <form id="custform">
              <h2 style={{ marginLeft: "10%", display: "inline" }}>
                Welcome, {this.state.customername}
                {"   "}
              </h2>
              <h6 style={{ display: "inline" }} className="badge badge-primary">
                customer
            </h6>

              <p
                style={{
                  marginLeft: "40%"
                }}
              // onLoad={this.here()}
              >
                {this.state.cid}
              </p>
              <br></br>
              <br></br>
              <h2 style={{ marginLeft: "20%", display: "inline" }} className="btn btn-danger btn-lg">
                Balance Due :  {this.state.price}

              </h2>
            </form>

            <Container
              style={{
                marginTop: "20%",
                height: "70%",
                width: "70%",
                marginLeft: "0%",
                backgroundColor: " #004d99"
              }}
            >

              <h3
                style={{ marginTop: "10%", marginLeft: "18%", color: "white" }}
              >
                {" "}
                What's on your mind today?
              </h3>
              <br />
              <br />
              <br />
              <Router>
                <ul class="breadcrumb navbar navbar-inverse">
                  <li>
                    <NavLink
                      to="/accountinfocustomer"
                      onClick={this.accountinfo}
                    >
                      Account info
                    </NavLink>
                  </li>
                  <li class="active">
                    <NavLink to="/HirePainting" onClick={this.submitpainting}>
                      Hire a Painting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ReturnPainting" onClick={this.viewpainting}>
                      Return a Painting{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/HireHistory" onClick={this.resubmitpainting}>
                      Hire History
                    </NavLink>
                  </li>
                </ul>
              </Router>
            </Container>
            <br />
            <br />
            <br />
            <br />
          </Container>
          <NavLink to="/home" onClick={this.home} className="btn btn-primary m-1">
            Logout
        </NavLink>
        </div>
      </body>
    );
  }
}

export default customerlogin;
