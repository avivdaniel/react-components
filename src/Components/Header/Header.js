import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar'
import NavbarItem from './Navbar/NavbarItem/NavbarItem'

export class Header extends React.Component {
    handleClick() {
        console.log('clicked!')
    }
    render() {
        return (
            <header className="Header row">
                < Navbar>

                    <NavbarItem>
                        <a href="#" className="nav-link">Link 1</a>
                    </NavbarItem>

                    <NavbarItem>
                        <a href="#" className="nav-link">Link 2</a>
                    </NavbarItem>

                    <NavbarItem>
                        <a href="#" className="nav-link">Link 3</a>
                    </NavbarItem>

                </Navbar>

            </header >
        )
    }
}