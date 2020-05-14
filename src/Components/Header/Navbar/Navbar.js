import React, { Component } from 'react';
import './Navbar.css'
import Collapsebutton from './Collapsebutton/CollapseButton'

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar navbar navbar-expand-md">
                < Collapsebutton />
                <div className="collapse navbar-collapse" id="collapse_target">
                    <ul className="navbar-nav">
                        {this.props.children}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;