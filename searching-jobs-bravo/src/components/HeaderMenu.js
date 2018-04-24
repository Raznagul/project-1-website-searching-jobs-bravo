import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import AuthUserContext from "./AuthUserContext";
import * as routes from "../constants/routes";

class HeaderMenu extends Component {

  render() {
    return (
      <div className="backcolor">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <Link to={routes.landing}>
              <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
            </Link>

          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
  <ul className="nav navbar-nav ml-auto">
    <li>
      <Link className="nav-item nav-link" to={routes.landing}>Landing</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.profile}>Profile</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.contactus}>Contact Us</Link>
    </li>
	  <li>
      <Link className="nav-item nav-link" to={routes.aboutus}>About Us</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.termsofuse}>Terms Of Use</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.landing} onClick={auth.signOut}>Sign Out</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="nav navbar-nav ml-auto">
    <li>
      <Link className="nav-item nav-link" to={routes.landing}>Landing</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.contactus}>Contact Us</Link>
    </li>
	  <li>
      <Link className="nav-item nav-link" to={routes.aboutus}>About Us</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.termsofuse}>Terms Of Use</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.signup}>Sign Up</Link>
    </li>
    <li>
      <Link className="nav-item nav-link" to={routes.signin}>Sign In</Link>
    </li>
  </ul>
);

export default HeaderMenu;