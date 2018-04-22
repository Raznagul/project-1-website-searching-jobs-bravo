import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

import * as routes from "../constants/routes";

const ForgettenPasswordPage = () => (
  <div>
    <ForgettenPasswordForm />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const UserForForgottenPassword = {
  email: "",
  error: null,
  success: null
};

class ForgettenPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForForgottenPassword };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;
    auth
      .passwordReset(email)
      .then(() => {
        this.setState(() => ({ ...UserForForgottenPassword }));
        this.setState(byPropKey('success', 'A password recovery email has been sent to your email'));
      })
      .catch(() => 
        this.setState(byPropKey("error", 'We could not find your email.'))
      );
  };

  closeError = event => {
    event.preventDefault();
    this.setState(byPropKey("error", null));
  };

  closeSuccess = event => {
    event.preventDefault();
    this.setState(byPropKey("success", null));
  };

  render() {
    const { email, error, success } = this.state;

    const isInvalid = email === "";

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-8">
          <h1>Password Recovery</h1>
          {error && (
            <div className="alert alert-danger" role="alert">
              Oops, your something has gone wrong with you password recovery! Details:{" "}
              {error}
              <button
                onClick={this.closeError}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          {success && (
            <div className="alert alert-success" role="alert">
              {success}
              <button
                onClick={this.closeSuccess}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
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
            <button
              disabled={isInvalid}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const ForgettenPasswordLink = () => (
  <p>
    <Link to={routes.forgottenpassword}>Forgot Password?</Link>
  </p>
);

export default ForgettenPasswordPage;

export { ForgettenPasswordForm, ForgettenPasswordLink };
