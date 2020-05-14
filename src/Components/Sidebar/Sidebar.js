import React from 'react';
import './Sidebar.css';
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem';

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar col-12 col-md-2 d-none d-md-block">
                <Menu >
                    <MenuItem >
                        <a href="#" className="nav-link">link 1</a>
                    </MenuItem>

                    <MenuItem >
                        <a href="#" className="nav-link">link 2</a>
                    </MenuItem>

                    <MenuItem >
                        <a href="#" className="nav-link">link 3</a>
                    </MenuItem>
                </Menu >
            </div>
        )
    }
}

