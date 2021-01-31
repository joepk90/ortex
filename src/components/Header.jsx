import React from 'react';
import Navigation from 'src/components/Navigation';
import Logo from 'src/components/Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <header className="bg-black">
            <div className="container-fluid">
                <div className="d-flex justify-content-between py-3">

                    <NavLink className="d-flex flex-column justify-content-center" to="/">
                        <Logo />
                    </NavLink>

                    <Navigation />

                </div>
            </div>
        </header>
    );
}

export default Header;