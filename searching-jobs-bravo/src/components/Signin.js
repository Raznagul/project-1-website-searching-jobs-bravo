import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { SignUpLink } from "./Signup";
import { ForgettenPasswordLink } from "./ForgottenPassword";

import { auth } from "../firebase";
import * as routes from "../constants/routes";

const SignInPage = ({ history }) => (
  <div>
    <SignInForm history={history} />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const UserForSignIn = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForSignIn };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .signin(email, password)
      .then(() => {
        this.setState(() => ({ ...UserForSignIn }));
        history.push(routes.landing);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <h1>Sign In</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={email}
                onChange={event =>
                  this.setState(byPropKey("email", event.target.value))
                }
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={event =>
                  this.setState(byPropKey("password", event.target.value))
                }
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              disabled={isInvalid}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
            {error && <p>{error.message}</p>}
          </form>
          <ForgettenPasswordLink />
          <SignUpLink />
        </div>
      </div>
    );
  }
}

const SignInLink = () => (
  <p>
    Already have an account? <Link to={routes.signin}>Sign In</Link>
  </p>
);

export default withRouter(SignInPage);

export { SignInForm, SignInLink };
