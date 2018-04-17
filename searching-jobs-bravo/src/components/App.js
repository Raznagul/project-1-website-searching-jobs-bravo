import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import SignInPage from "./Signin";
import SignUpPage from "./Signup";
<<<<<<< edadf1ac4a57582027dad69638958f1f1e959668
=======
import ContactUsPage from './ContactUs';
/*
import SignInPage from "./SignIn";
>>>>>>> Validate ContactUs form
import ForgottenPasswordPage from "./ForgottenPassword";
import ProfilePage from "./Profile";
import ContactUsPage from './ContactUs';
import Header from './HeaderMenu';
import ContentLandPage from './ContentLandPage';
import Footer from './Footer';
/*
import HomePage from "./Home";
*/
import * as routes from "../constants/routes";
import { firebase } from "../firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

<<<<<<< edadf1ac4a57582027dad69638958f1f1e959668
import withAuthentication from './withAuthentication';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path={routes.landing} component={() => <ContentLandPage />} />
        <Route exact path={routes.signin} component={() => <SignInPage />} />
        <Route exact path={routes.signup} component={() => <SignUpPage />} />
        <Route exact path={routes.forgottenpassword} component={() => <ForgottenPasswordPage />} />
        <Route exact path={routes.profile} component={() => <ProfilePage />} />
        <Route exact path={routes.contactus} component={() => <ContactUsPage/>} />
      </main>
      <Footer/>
    </div>
  </Router>
);

export default withAuthentication(App);
=======

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
>>>>>>> Validate ContactUs form
