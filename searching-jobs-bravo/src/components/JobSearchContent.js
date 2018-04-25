import React, { Component } from 'react';
import LocationSearchInput from './LocationSearchInput';
import './../styles/css/style.css';
import { db, firebase } from "../firebase";
import * as routes from '../constants/routes';

import { Link, withRouter } from "react-router-dom";

import axios from 'axios';

class JobSearchContent extends Component {

    constructor(props) {
        super(props);
    }

    show = () => {

        firebase.auth.onAuthStateChanged(authUser => {
          if(!authUser){
            this.props.history.push(routes.signin);
          }
            alert(this.props.jobContent.id);
          });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img style={{ maxHeight: 250, maxWidth: 250 }} src={this.props.jobContent && this.props.jobContent.company_logo} className="icon" alt="Instagram" />
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <p>Company name: {this.props.jobContent && this.props.jobContent.company}</p>
                                <p>Direccion: {this.props.jobContent && this.props.jobContent.location} </p>
                                <p>Company url: <a href={this.props.jobContent && this.props.jobContent.company_url}>{this.props.jobContent && this.props.jobContent.company_url}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p>Job tittle: {this.props.jobContent && this.props.jobContent.title} </p>
                    <p>Date posted: {this.props.jobContent && this.props.jobContent.created_at} </p>
                    <button onClick={this.show} type="button">save</button>
                </div>
                <hr />
                <div>
                    <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.description }} ></p>
                    <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.how_to_apply }}></p>
                </div>
            </div>
        );
    }
}

export default withRouter(JobSearchContent);