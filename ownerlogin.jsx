import React, { Component } from "react";
import { Container } from "reactstrap";

class ownerlogin extends Component {
  state = { ownername: "ownername", oid: "oid", noofpaintings: null };
  /*  here = event => {
    this.setState({ ownername: event.target.value - date2.getUTCDate() });
  };*/

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
              Welcome, {this.state.ownername}
              {"   "}
            </h2>
            <h6 style={{ display: "inline" }} className="badge badge-primary">
              owner
            </h6>

            <p
              style={{
                marginLeft: "35%"
              }}
            >
              {this.state.oid}
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
              <ul class="breadcrumb navbar navbar-inverse">
                <li>
                  <a href="#" to="/Accountinfoowner">
                    Account info
                  </a>
                </li>
                <li class="active">
                  <a href="#" exact to="/SubmitPainting">
                    Submit Painting
                  </a>
                </li>
                <li>
                  <a href="#" to="/ViewPainting">
                    {" "}
                    View Painting{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="" to="/ResubmitPainting">
                    Resubmit Painting
                  </a>
                </li>
              </ul>
            </Container>
            <br />
            <br />
            <br />
            <br />
          </Container>
        </div>
      </body>
    );
  }
}

export default ownerlogin;
