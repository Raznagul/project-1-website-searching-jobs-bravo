import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { auth, db } from "../firebase";
import { SignInLink } from "./Signin";
import * as routes from "../constants/routes";

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
    <SignInLink />
  </div>
);

const UserForSignup = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForSignup };
  }

  onSubmit = event => {
    event.preventDefault();
    const { name, lastname, email, password } = this.state;
    const { history } = this.props;

    auth
      .signup(email, password)
      .then(authUser => {
        db.createUser(authUser.uid, name, lastname, email).then(() => {
          this.setState(() => ({ ...UserForSignup }));
          history.push(routes.home);
        });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    const {
      name,
      lastname,
      email,
      password,
      passwordConfirmation,
      error
    } = this.state;

    const isInvalid =
      password !== passwordConfirmation ||
      password === "" ||
      email === "" ||
      name === "" ||
      lastname === "";

    /* https://reactjs.org/docs/forms.html#controlled-components */
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={event =>
              this.setState(byPropKey("name", event.target.value))
            }
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            value={lastname}
            onChange={event =>
              this.setState(byPropKey("lastname", event.target.value))
            }
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Last Name"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            value={passwordConfirmation}
            onChange={event =>
              this.setState(
                byPropKey("passwordConfirmation", event.target.value)
              )
            }
            type="password"
            className="form-control"
            id="passwordConfirmation"
            placeholder="Confirm Password"
          />
        </div>
        <button disabled={isInvalid} type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.signup}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
