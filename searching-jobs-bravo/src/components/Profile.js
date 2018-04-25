import React, { Component } from "react";

import AuthUserContext from "./AuthUserContext";
import withAuthorization from "./withAuthorization";
import { db, firebase } from "../firebase";

const UserForProfile = {
  name: "",
  lastname: "",
  email: "",
  jobs: []
};

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...UserForProfile };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      //console.log(authUser);
      db.getUser(authUser.uid).then(snapshot => {
        this.setState(() => snapshot.val());
        const jobs = Object.values(this.state.jobs);
        this.setState({ jobs: jobs });
      });
    });
  }

  render() {
    const { email, lastname, name } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div class="container card-profile">
            <div class="row d-flex justify-content-center">
              <div class="card backColor ">
                <div class="row">
                  <div class="col-sm">
                    <img
                      class="card-img-top"
                      src={require("./../images/user.png")}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title text-center">
                        {this.state.name}
                        {this.state.lastname}
                      </h5>
                      <p class="card-text text-center">
                        <strong>Email: </strong>
                        {this.state.email}
                      </p>
                    </div>
                  </div>
                  <div class="col-sm ">
                    <h1>Saved Jobs</h1>
                    <ul class="list-group list-group-flush">
                      {this.state.jobs && this.state.jobs.length > 1
                        ? this.state.jobs.map(e => (
                            <li class="list-group-item">
                              <p>
                                <strong>Job title: </strong> {e.job.title}
                              </p>
                              <p>
                                <strong>Company: </strong> {e.job.company}
                              </p>
                              <p>
                                <strong>Posted date: </strong>{" "}
                                {e.job.postedAt &&
                                  new Intl.DateTimeFormat("en-US").format(
                                    new Date(e.job.postedAt)
                                  )}
                              </p>
                              <p dangerouslySetInnerHTML={{ __html: e.job.howToApply }}>    
                              </p>
                            </li>
                          ))
                        : ""}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);
