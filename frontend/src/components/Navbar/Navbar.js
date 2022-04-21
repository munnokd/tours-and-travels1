import React, { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import loyal from "./loyal.png";
import swal from "sweetalert";
import Avatar from 'react-avatar';


class Navbar extends Component {
  constructor(props) {
    super(props);
    if (!window.localStorage.getItem('name') 
        && !window.location.href.includes('/login')
        && !window.location.href.includes('/signup')
        ){
      window.location.href = '/login'
  
    }
    this.state = {};
  }

  logout() {
    if (localStorage.getItem("name")) {
      localStorage.clear();
      window.location.href = "/login";
      swal("Logged Out!", "Successfully Logged Out", "success");
    } else {
      swal("Not Logged In!", "Please Login first", "warning");
    }
  }

  render() {
    return (
      <nav className="navbar p-3 mb-2 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mr-3">
          <img width="70" height="50" src={loyal}></img>&nbsp; Gumo firo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="r"></div>
          <div className="navbar-buttons ml-auto">
            <Link to="/home">
              <button className="btn btn-success mr-2" type="submit">
                <i className="fa fa-home" aria-hidden="true"></i>&nbsp; Home
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-light mr-2" type="submit">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; Customer
                Support
              </button>
            </Link>
            <Link to="/viewtour">
              <button className="btn btn-primary mr-2" type="submit">
                <i className="fa fa-car" aria-hidden="true"></i>&nbsp; TourPackages
              </button>
            </Link>
            <Link to="/viewtravel">
              <button className="btn btn-info mr-2" type="submit">
                <i className="fa fa-car" aria-hidden="true"></i>&nbsp; Travels
              </button>
            </Link>
            {localStorage.getItem("name") ?<Link to="/profile">
              <button className="btn" type="submit">
              <Avatar name={localStorage.getItem("name")} round={true} size="35" />
              </button>
            </Link>:null}

            {localStorage.getItem("name") ? (
              <button
                className="btn btn-warning "
                // className="btn "
                type="submit"
                onClick={() => this.logout()}
              >
                <i className="fa fa-send" aria-hidden="true"></i>&nbsp; Logout&nbsp;
                {/* <Avatar name={localStorage.getItem("name")} round={true} size="35" /> */}
              </button>
            ) : (
              <>
                <Link to="/signup">
                  <button className="btn btn-danger mr-2" type="submit">
                    <i className="fa fa-user" aria-hidden="true"></i>&nbsp; Sigup
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-danger mr-2" type="submit">
                    <i className="fa fa-user" aria-hidden="true"></i>&nbsp; Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
