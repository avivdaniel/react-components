import React, { Component } from 'react';
import './MenuItem.css'

class MenuItem extends Component {
    render() {
        return (
            <li>
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;