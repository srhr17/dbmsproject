import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class adminlogin extends Component {
  state = { adminname: "adminname", aid: "aid", noofpaintings: null };
  /*  here = event => {
    this.setState({ adminname: event.target.value - date2.getUTCDate() });
  };*/

  accountinfo = event => {
    window.history.pushState("/accountinfoadmin");
    window.location.reload();
  };

  submitpainting = event => {
    window.history.pushState("/ownerinfo");
    window.location.reload();
  };

  viewpainting = event => {
    window.history.pushState("/customerinfo");
    window.location.reload();
  };

  resubmitpainting = event => {
    window.history.pushState("/paintinginfo");
    window.location.reload();
  };

  render() {
    return (
      <body style={{ backgroundColor: "#d6d6f5" }}>
        <div style={{ backgroundColor: "#d6d6f5" }}>
          <Container
            style={{
              width: "60%",
              marginLeft: "30%",
              marginTop: "5%",
              height: "100%"
            }}
          >
            <h2 style={{ marginLeft: "10%", display: "inline" }}>
              Welcome, {this.state.adminname}
              {"   "}
            </h2>
            <h6 style={{ display: "inline" }} className="badge badge-warning">
              admin
            </h6>

            <p
              style={{
                marginLeft: "35%"
              }}
            >
              {this.state.aid}
            </p>
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
                    <NavLink to="/accountinfoadmin" onClick={this.accountinfo}>
                      Account info
                    </NavLink>
                  </li>
                  <li class="active">
                    <NavLink to="/ownerinfo" onClick={this.submitpainting}>
                      Owner Info
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customerinfo" onClick={this.viewpainting}>
                      Customer Info{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/paintinginfo" onClick={this.resubmitpainting}>
                      Painting Info
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

export default adminlogin;
