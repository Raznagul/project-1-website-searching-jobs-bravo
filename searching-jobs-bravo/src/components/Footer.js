import React, { Component } from 'react';
import './../styles/css/style.css';
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select:''
        };

    }
    
    render() {
        return (
            <footer className="footer page-footer font-small pt-5 backColor">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 pt-1">
                            <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
                        </div>

                        <div className="col-sm-12 col-md-5 col-lg-4 text-center">
                            <div className="row">
                                <div className="col-12 pt-1">
                                    <Link to={routes.aboutus}>About Us</Link>
                                </div>
                                <div className="col-12">
                                    <ul className="list-inline text-center mt-3">
                                        <li className="list-inline-item">
                                            <img src={require('./../images/facebook24.png')} className="icon" alt="Facebook" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img src={require('./../images/instagram24.png')} className="icon" alt="Instagram" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img src={require('./../images/twitter24.png')} className="icon" alt="Twitter" />
                                        </li>
                                        <li className="list-inline-item">
                                            <img src={require('./../images/google-plus24.png')} className="icon" alt="Google Plus" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-5 col-lg-6 text-xs-center text-md-right">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <Link className="mb-2" to={routes.contactus}>Contact</Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link to={routes.termsofuse}>Terms and Conditions</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 col-md-6 col-lg-9">
                                    <img src={require('./../images/flag24.png')} className="icon" alt="Lenguaje" />
                                </div>
                                <div className="col-sm-9 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <div id="google_translate_element"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center border-top">
                    © 2018 Copyright BRAVO
                </div>
            </footer>
        );
    }
}

export default Footer;