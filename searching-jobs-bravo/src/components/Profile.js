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
                const lala =  Object.values(this.state.jobs);
                this.setState({jobs:lala});
                console.log( this.state.jobs);
                for (var i = 0; i < Object.keys(this.state.jobs).length; i++) {
                    console.log(this.state.jobs[i]);
                    console.log(this.state.jobs[i].job.title);
                    //indents.push(<span className='indent' key={i}></span>);
                }
            });
        });
    }


    all_saved_jobs(){
        var all_saved_jobs=[];
        /*for (var i = 0; i < Object.keys(this.state.jobs).length; i++) {
            var current_job=Object.values(this.state.jobs[i][0]);

            all_saved_jobs.push(<li class="list-group-item">{this.state.jobs[i].job.title}</li>);
        }*/

        var x=this.state.jobs;

        Object.keys(x).forEach(function(key) {
            console.log(x[key]);
            //var current_job=x[key][0];
            //current_job=Object.values(current_job);
        });



       /* Object.keys(x).forEach(function(key) {
            console.log(x[key]);
            Object.keys(x[key]).forEach(function (subkey) {

                    console.log("->"+x[key][subkey]);

                }

            )
        });*/

        return all_saved_jobs;
    }

    render() {
        const { email, lastname, name } = this.state;


       var x=this.all_saved_jobs();



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
                                {x}
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
