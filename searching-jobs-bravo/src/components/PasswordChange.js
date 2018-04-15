import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const UserForPasswordChange = {
  password: '',
  passwordConfirmation: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForPasswordChange };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { password } = this.state;

    auth.updatePassword(password)
      .then(() => {
        this.setState(() => ({ ...UserForPasswordChange }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    
  }

  render() {
    const {
      password,
      passwordConfirmation,
      error,
    } = this.state;

    const isInvalid =
      password !== passwordConfirmation ||
      password === '';

    return (
        <form onSubmit={this.onSubmit}>
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

export default PasswordChangeForm;