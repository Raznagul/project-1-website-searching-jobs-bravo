import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import AuthUserContext from "./AuthUserContext";
import * as routes from "../constants/routes";

class HeaderMenu extends Component {

  render() {
    return (
      <div className="backColor">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
            <AuthUserContext.Consumer>
              {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
            </AuthUserContext.Consumer>
          </div>
        </nav>
      </div>
    );
  }

}

const NavigationAuth = () => (
  <div className="navbar-nav ml-auto">
    <Link className="nav-item nav-link" to={routes.landing}>
      Landing
    </Link>
    <Link className="nav-item nav-link" to={routes.home}>
      Home
    </Link>
    <Link className="nav-item nav-link" to={routes.profile}>
      Profile
    </Link>
    <Link className="nav-item nav-link" to={routes.contactus}>
      ContactUs
    </Link>
    <Link
      className="nav-item nav-link"
      to={routes.landing}
      onClick={auth.signOut}
    >
      Sign Out
    </Link>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navbar-nav ml-auto">
    <Link className="nav-item nav-link" to={routes.landing}>
      Landing
    </Link>
    <Link className="nav-item nav-link" to={routes.contactus}>
      ContactUs
    </Link>
    <Link className="nav-item nav-link" to={routes.signup}>
      Sign Up
    </Link>
    <Link className="nav-item nav-link" to={routes.signin}>
      Sign In
    </Link>
  </div>
);

export default HeaderMenu;