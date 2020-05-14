import React, { Component } from 'react';
import './MenuItem.css'

class MenuItem extends Component {
    render() {
        return (
            <li className="MenuItem nav-item">
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;