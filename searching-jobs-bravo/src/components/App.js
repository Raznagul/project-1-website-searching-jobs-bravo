import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import SignUpPage from "./Signup";
import ContactUsPage from './ContactUs';
/*
import SignInPage from "./SignIn";
import ForgottenPasswordPage from "./ForgottenPassword";
import HomePage from "./Home";
import ProfilePage from "./Profile";
*/
import "./App.css";
import * as routes from "../constants/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <main>
                        <Route
                            exact
                            path={routes.landing}
                            component={() => <LandingPage/>}
                        />
                        <Route
                            exact
                            path={routes.signup}
                            component={() => <SignUpPage/>}
                        />
                        <Route
                            exact
                            path={routes.contactus}
                            component={() => <ContactUsPage/>}
                        />
                    </main>


                </div>

            </Router>

        );
    }
}

export default App;
