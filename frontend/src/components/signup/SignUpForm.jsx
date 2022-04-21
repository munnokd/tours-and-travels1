import React, { Component } from "react";
import "./signupStyles.css";
import swal from "sweetalert";
import axios from "axios"
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  conPassword: "",
  unameerror: "",
  uemailerror: "",
  passworderror: "",
  conpassworderror: "",
};

class SignUpForm extends Component {
  state = initialState;

  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let unameerror = "";
    let uemailerror = "";
    let passworderror = "";
    let conpassworderror = "";

    if (!this.state.name) {
      unameerror = "Enter User Name";
    }

    if (!this.state.email.includes("@")) {
      uemailerror = "Invalid Email";
    }

    if (!this.state.password) {
      passworderror = "Enter Password";
    }

    if (!this.state.conPassword && this.state.conPassword!=this.state.password) {
      conpassworderror = "Enter Confirm Password or make sure both are same";
    }

    if (unameerror || uemailerror || passworderror || conpassworderror) {
      this.setState({
        unameerror,
        uemailerror,
        passworderror,
        conpassworderror,
      });
      return false;
    }

    return true;
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(this.state.conPassword);
      //clear form
      this.setState(initialState);
    }

    if (
      this.state.name == null &&
      this.state.email == null &&
      this.state.password == null &&
      this.state.conPassword == null
    ) {
      return alert("Cannot submit empty fields");
    }
    if (this.state.password !== this.state.conPassword) {
      alert("Password Mismatch!");
      return;
    }

    swal("User Details Added Successfully!", "No warnings! ", "success");
    let thisState = this;
    let stateaccess = this.state;
    // alert(JSON.stringify(this.state));
    axios.post("http://localhost:5000/users", {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
       conPassword: this.state.conPassword,
    })
      .then(function (res) {
        const data=res.data;
        console.log(data)
        window.localStorage.setItem('name',data.name);
        window.localStorage.setItem('id',data._id);
        window.location.href='/'

        // alert("Submitted Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
   
    this.setState({
      name: "",
      email: "",
      password: "",
      conPassword: "",
      phone: "",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.formSubmitHandler}>
            <div className="form-group">
              <label>
                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;User Name
              </label>
              <input
                type="text"
                onChange={this.inputChangeHandler}
                name="name"
                className="form-control"
                value={this.state.name}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.unameerror}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;User
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={this.inputChangeHandler}
                className="form-control"
                value={this.state.email}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
              <i className="fa fa-envelope" aria-hidden="true"></i>
                &nbsp;User Phone
              </label>
              <input
                name="phone"
                type="number"
                onChange={this.inputChangeHandler}
                className="form-control"
                value={this.state.phone}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                &nbsp;Password
              </label>
              <input
                type="password"
                name="password"
                onChange={this.inputChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.password}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.passworderror}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Confirm
                Password
              </label>
              <input
                name="conPassword"
                type="password"
                onChange={this.inputChangeHandler}
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.conPassword}
                required
              />
              <div style={{ fontSize: 12, color: "green" }}>
                {this.state.conpassworderror}
              </div>
            </div>
            <br></br>

            <button type="submit" className="btn-submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
