import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <HeaderMenu />
                </header>
            </div>
        );
    }
}

export default Header;