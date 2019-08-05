import React, { Component } from "react";
import { Container } from "reactstrap";

class adminlogin extends Component {
  state = { adminname: "adminname", aid: "aid", noofpaintings: null };
  /*  here = event => {
    this.setState({ adminname: event.target.value - date2.getUTCDate() });
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
              <ul class="breadcrumb navbar navbar-inverse">
                <li>
                  <a href="#" to="/Accountinfoadmin">
                    Account info
                  </a>
                </li>
                <li class="active">
                  <a href="#" exact to="/Ownerinfo">
                    Owner info
                  </a>
                </li>
                <li>
                  <a href="#" to="/Customerinfo">
                    {" "}
                    Customer info{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="" to="/Transactions">
                    Transactions
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

export default adminlogin;
