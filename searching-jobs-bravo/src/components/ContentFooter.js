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
                        <div className="col-md-2">
                            <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
                        </div>

                        <div className="col-md-4 text-center">
                            <a href="#!">Quiénes somos</a>
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

                        <div className="col-md-6">
                            <ul className="list-unstyled text-right">
                                <Link className="mb-2" to={routes.contactus}>Contacto</Link>
                                <li className="mb-2">
                                    <a href="#!">Términos y Condiciones</a>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <img src={require('./../images/flag24.png')} className="icon" alt="Lenguaje" />                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <select className="form-control" id="sel1">
                                                    <option>Español</option>
                                                    <option>Inglés</option>
                                                    <option>Portugues</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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