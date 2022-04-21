import React, { Component } from "react";
import customer from "./customer.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">
              <img src={customer} width="300" height="300"></img>&nbsp;Contact Us
            </h1>
            <br></br>

            <h1>Customer Care</h1>
            <br></br>
            <h5>
            <h3><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;Phone Number</h3>
              <br></br>&nbsp;&nbsp;&nbsp;&nbsp;+91 1234567890 / +91 0987654321
            </h5>
            <br></br>
            <h5>
              <h3><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email</h3>
              <br></br>&nbsp;&nbsp;&nbsp;&nbsp;xyz@nirmauni.ac.in
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
