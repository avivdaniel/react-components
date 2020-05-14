import React, { Component } from 'react';
import './NavbarItem.css'

class NavbarItem extends Component {
    render() {
        return (
            <li className="NavbarItem nav-item dropdown">
                {this.props.children}
            </li>
        );
    }
}

export default NavbarItem;