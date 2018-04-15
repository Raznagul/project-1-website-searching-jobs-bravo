import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const UserForPasswordChange = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForPasswordChange };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...UserForPasswordChange }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

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