import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <ul className="nav flex-column">
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export default Menu;