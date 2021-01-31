import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a className="nav-link" href="/">Log In</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;