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
            if (!authUser) {
                this.props.history.push(routes.signin);
            }
            else {
                db.updateSavedJobs(authUser.uid, {
                    id: this.props.jobContent.id,
                    title: this.props.jobContent.title,
                    postedAt: this.props.jobContent.created_at,
                    company: this.props.jobContent.company
                })
                    .then(() => console.log('Saved!'))
                    .catch(() => console.log('ERROR!!!'));
            }
        });
    }

    render() {
        if (Object.keys(this.props.jobContent) && Object.keys(this.props.jobContent).length > 0) {
            return (
                <div>
                    <div>
                        <div className="row">
                            <div className="col-sm-6">
                                <img style={{ maxHeight: 250, maxWidth: 250 }} src={this.props.jobContent && this.props.jobContent.company_logo} className="icon" alt="logo" />
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <p><b>Company name:</b> {this.props.jobContent && this.props.jobContent.company}</p>
                                    <p><b>Direccion:</b> {this.props.jobContent && this.props.jobContent.location} </p>
                                    <p><b>Company url:</b> <a href={this.props.jobContent && this.props.jobContent.company_url}>{this.props.jobContent && this.props.jobContent.company_url}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-2 col-md-3">
                            <input type="image" onClick={this.show} className="float-right d-md-none d-lg-none d-xl-none" alt="" src={require('./../images/heart-empty24.png')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-md-9">
                            <p><b>Job tittle:</b> {this.props.jobContent && this.props.jobContent.title} </p>
                        </div>
                        <div className="col-sm-2 col-md-3">
                            <input type="image" onClick={this.show} className="float-right d-none d-md-block" alt="" src={require('./../images/heart-empty24.png')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>Date posted:</b> {this.props.jobContent && this.props.jobContent.created_at} </p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.description }} ></p>
                        <p dangerouslySetInnerHTML={{ __html: this.props.jobContent && this.props.jobContent.how_to_apply }}></p>
                    </div>
                </div>
            );
        } else {
            return (<h1 className="display-4 pt-2 pb-2 pl-2 pr-2 text-center">Your search <br />does not match any jobs.</h1>);
        }

    }
}

export default withRouter(JobSearchContent);