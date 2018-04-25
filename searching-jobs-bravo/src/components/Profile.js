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
                    <div class="row d-flex justify-content-center ">
                        <div  class="card backColor card-profile" >
                            <img class="card-img-top " src={require('./../images/user.png')} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title text-center">{this.state.name}{this.state.lastname}</h5>
                                <p class="card-text"><strong>Email: </strong>{this.state.email}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>

                    </div>

                )}
            </AuthUserContext.Consumer>
        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ProfilePage);
