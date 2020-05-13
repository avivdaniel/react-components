import React from 'react';
import './Sidebar.css';
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem';

export class Sidebar extends React.Component {
    render() {
        return (
            <nav className="Sidebar col-4">
                <Menu >
                    <MenuItem >Item 1</MenuItem>
                    <MenuItem >Item 2</MenuItem>
                    <MenuItem >Item 3</MenuItem>
                </Menu >
            </nav>
        )
    }
}

