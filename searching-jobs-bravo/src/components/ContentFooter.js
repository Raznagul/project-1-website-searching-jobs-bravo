import React, { Component } from 'react';
import './../styles/css/style.css';
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

class ContentFooter extends Component {
    render() {
        return (
            <div className="page-footer font-small pt-5 backColor">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 pt-1">
                            <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
                        </div>

                        <div className="col-sm-12 col-md-5 col-lg-4 text-center">
                            <div className="row">
                                <div className="col-12 pt-1">
                                    <a href="#!">Quiénes somos</a>
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
                                            <Link className="mb-2" to={routes.contactus}>Contacto</Link>
                                        </li>
                                        <li className="mb-2">
                                            <a href="#!">Términos y Condiciones</a>
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
                                        <select className="form-control" id="sel1">
                                            <option>Español</option>
                                            <option>Inglés</option>
                                            <option>Portugues</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center border-top">
                    © 2018 Copyright BRAVO
                </div>
            </div>
        );
    }
}

export default ContentFooter;