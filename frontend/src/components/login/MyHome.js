import React, { Component } from "react";
import Login from "./Login";
import SignUp from "../signup/SignUp";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import ViewTours from "../ViewTours/ViewTours";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ViewTravels from "../ViewTravels/ViewTravels";
import Profile from "../profile/Profile";

export default class MyHome extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            <Route path="/home" exact component={HomePage}></Route>

            <Route path="/contact" exact component={Contact}></Route>

            <Route path="/login" exact component={LoginPage}></Route>

            <Route path="/signup" exact component={SignUp}></Route>

            <Route path="/viewtour" exact component={ViewTours}></Route>

            <Route path="/profile" exact component={Profile}></Route>

            <Route path="/viewtravel" exact component={ViewTravels}></Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

//Authentication of Login
export const fakeAuth = {
  isAuthenticated: false,
  
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/tours" } };

  //here login is a callback function
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Login loginFunc={login} />
    </div>
  );
}
