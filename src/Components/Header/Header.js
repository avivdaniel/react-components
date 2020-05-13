import React from 'react';
import './Header.css';

export class Header extends React.Component {
    handleClick() {
        console.log('clicked!')
    }
    render() {
        return (
            <header className="Header row">
                <nav>
                    <ul className="nav navbar-light bg-light">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </nav>
            </header >
        )
    }
}