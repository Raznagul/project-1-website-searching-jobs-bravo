import React from "react";

import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";

const ProfilePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Profile: {authUser.email}</h1>
        <p>The Home Page is accessible by every signed in user.</p>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);
