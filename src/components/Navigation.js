import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/login">Log In</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;