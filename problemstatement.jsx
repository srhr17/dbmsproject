import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
class problemstatement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  home = () => {
    window.history.pushState("/home");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "0%" }}>Problem Statement</h1>
        <h4> TP #16 -Painting Hire Business </h4>
        <p>
          A local business woman has decided to start her own Internet business,
          called Masterpieces Ltd, hiring paintings to private individuals and
          commercial companies. Because of your reputation as a database
          designer she has called upon your services to design and implement a
          database to support her new business. At the initial planning meeting,
          to discuss the design, the following user requirements were requested.
          The system must be able to manage the details of customers, paintings
          and those paintings currently on hire to customers. Customers are
          categorized as B (bronze), S (silver), G (gold) or P (platinum). These
          categories entitle a customer to a discount of 0%, 5%, 10% or 15%
          respectively. Customers often request paintings by a particular artist
          or theme (eg animal, landscape, seascape, naval, still‐life, etc).
          Over time a customer may hire the same painting more than once. Each
          painting is allocated a customer monthly rental price defined by the
          owner. The owner of the painting is then paid 10% of that customer
          rental price. Any paintings that are not hired within six months are
          returned to the owner. However, after three months, an owner may
          resubmit a returned painting. Each painting can only have one artist
          associated with it. Several reports are required from the system.
          Data: Customer_information Category_discount_information
          Painting_information Owner_information Functionality: • Owner
          submitting and resubmitting the paintings. • Customer hiring the
          painting. • Discount process.
        </p>
        <NavLink to="/home" onClick={this.home} className="btn btn-primary m-1">
          Back
        </NavLink>
      </div>
    );
  }
}

export default problemstatement;
