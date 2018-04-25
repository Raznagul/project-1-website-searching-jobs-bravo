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
                const jobs =  Object.values(this.state.jobs);
                this.setState({jobs:jobs});
                console.log( this.state.jobs);
                /*
                for (var i = 0; i < Object.keys(this.state.jobs).length; i++) {
                    console.log(this.state.jobs[i]);
                    console.log(this.state.jobs[i].job.title);
                    //indents.push(<span className='indent' key={i}></span>);
                }*/
            });
        });
    }


    all_saved_jobs= () => {
        var all_saved_jobs=[];
        /*for (var i = 0; i < Object.keys(this.state.jobs).length; i++) {
            var current_job=Object.values(this.state.jobs[i][0]);

            all_saved_jobs.push(<li class="list-group-item">{this.state.jobs[i].job.title}</li>);
        }*/

        var x=this.state.jobs;

        Object.keys(this.state.jobs).forEach(function(key) {
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

        return this.state.jobs;
    }

    render() {
        const { email, lastname, name } = this.state;


       var x=this.all_saved_jobs();
        console.log({render:'render method', jobs:this.state.jobs});



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
                                {this.state.jobs  && this.state.jobs.length > 1 ? 
                                    this.state.jobs.map(e => 
                                        <li class="list-group-item">
                                            <p>Job title: {e.job.title}</p>
                                            <p>job id: {e.job.id}</p>
                                            <p>company: {e.job.company}</p>
                                            <p>Posted date: {e.job.postedAt}</p>
                                        </li>) : ""}
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
