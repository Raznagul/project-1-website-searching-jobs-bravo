import React, { Component } from "react";

import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";
import { db, firebase } from "../firebase";

const UserForProfile = {
  name: "",
  lastname: "",
  email:"",
  jobs: []
};


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {...UserForProfile};
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      db.getUser(authUser.uid).then(snapshot => {
        this.setState(() => ( snapshot.val() ));
      });
    });
  }

  render() {
    const { email, lastname, name } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <h1>{name}'s Profile</h1>
            <p>The Home Page is accessible by every signed in user.</p>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);
