import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class ownerviewpainting extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, paintingname: "", ptheme: "", rent: "" };
  }
  home = () => {
    window.history.pushState("/ownerlogin");
    window.location.reload();
  };

  her = event => {
    var name;
    var id;
    var ptheme;
    var rent;

    var value = this;
    var data = new URLSearchParams();


    fetch('http://localhost:8001/ownerviewpainting', {
      method: 'post'
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      // console.log(json[0].count)
      name = json[0].name;
      id = json[0].id;
      ptheme = json[0].ptheme;
      rent = json[0].rent;

      return json;
    }).then(function (json) {

      value.setState({ id: json[0].id })
      value.setState({ paintingname: json[0].name })
      value.setState({ ptheme: json[0].ptheme })
      value.setState({ rent: json[0].rent })


    })


  }


  render() {
    return (
      <div style={{ backgroundColor: "#d6d6f5" }} onLoad={this.her()}>
        <h1 style={{ marginLeft: "40%" }}>View Painting</h1>
        <h1>Painting ID : </h1>
        <h2>{this.state.id}</h2>
        <br />
        <h1>Painting Name : </h1>
        <h2>{this.state.paintingname}</h2>
        <br />
        <h1>Painting Theme : </h1>
        <h2>{this.state.ptheme}</h2>
        <br />
        <h1>Painting Rent : </h1>
        <h2>{this.state.rent}</h2>
        <br />


        <NavLink
          to="/ownerlogin"
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

export default ownerviewpainting;
