import React, { Component } from "react";
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

class Navigation extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to={routes.landing}>Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to={routes.signin}>Sign In</Link>
            <Link class="nav-item nav-link" to={routes.landing}>Landing</Link>
            <Link class="nav-item nav-link" to={routes.home}>Home</Link>
            <Link class="nav-item nav-link" to={routes.profile}>Profile</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;