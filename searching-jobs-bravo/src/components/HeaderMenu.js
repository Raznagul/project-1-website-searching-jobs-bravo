import React, { Component } from 'react';
//import './../styles/style.css';

class HeaderMenu extends Component {

    render() {
        return (
            <div className="row backColor">
                <div className="col-12">
                    <nav className="navbar navbar-expand-sm navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <img src={require('./../images/BravoLogo.png')} className="logo" alt="logo" />
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <a className="nav-link handCursor">Sign in</a>
                                </li>
                                <li>
                                    <a className="nav-link handCursor">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}

export default HeaderMenu;