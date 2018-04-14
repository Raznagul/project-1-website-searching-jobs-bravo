import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

import * as routes from "../constants/routes";

const ForgettenPasswordPage = () => (
  <div>
    <h1>ForgettenPassword</h1>
    <ForgettenPasswordForm />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const UserForForgottenPassword = {
  email: "",
  error: null
};

class ForgettenPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForForgottenPassword };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;
    auth.passwordReset(email)
      .then(() => {
        this.setState(() => ({ ...UserForForgottenPassword }));
      })
      .catch(error => {
        this.setState(byPropKey("error", UserForForgottenPassword));
      });    
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
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
        <button disabled={isInvalid} type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
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
