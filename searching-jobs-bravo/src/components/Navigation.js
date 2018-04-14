import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";
import { auth } from "../firebase";

const Navigation = ({ authUser }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to={routes.landing}>
      Navbar
    </Link>
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
      {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </div>
  </nav>
);

const NavigationAuth = () => (
  <div className="navbar-nav">
    <Link className="nav-item nav-link" to={routes.landing}>
      Landing
    </Link>
    <Link className="nav-item nav-link" to={routes.home}>
      Home
    </Link>
    <Link className="nav-item nav-link" to={routes.profile}>
      Profile
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
  <div className="navbar-nav">
    <Link className="nav-item nav-link" to={routes.landing}>
      Landing
    </Link>
    <Link className="nav-item nav-link" to={routes.signin}>
      Sign In
    </Link>
  </div>
);

export default Navigation;
