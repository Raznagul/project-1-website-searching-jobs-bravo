import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import SignInPage from "./Signin";
import SignUpPage from "./Signup";
import ForgottenPasswordPage from "./ForgottenPassword";
import ProfilePage from "./Profile";
import ContactUs from './ContactUs';
/*
import HomePage from "./Home";
*/
import * as routes from "../constants/routes";
import { firebase } from "../firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

import withAuthentication from './withAuthentication';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <main>
        <Route exact path={routes.landing} component={() => <LandingPage />} />
        <Route exact path={routes.signin} component={() => <SignInPage />} />
        <Route exact path={routes.signup} component={() => <SignUpPage />} />
        <Route exact path={routes.forgottenpassword} component={() => <ForgottenPasswordPage />} />
        <Route exact path={routes.profile} component={() => <ProfilePage />} />
        <Route exact path={routes.contactus} component={() => <ContactUs/>} />
      </main>
    </div>
  </Router>
);

export default withAuthentication(App);
