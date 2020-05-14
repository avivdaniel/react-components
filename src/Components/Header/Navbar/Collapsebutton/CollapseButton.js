import React, { Component } from 'react';
import './CollapseButton.css'

class CollapseButton extends Component {
    render() {
        return (
            <button className="CollapseButton navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                <span className="fas fa-bars"></span>
            </button>
        );
    }
}

export default CollapseButton;