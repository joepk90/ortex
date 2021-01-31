import React from 'react';
import Navigation from 'src/components/Navigation';
import Logo from 'src/components/Logo';

const Header = () => {
    return (

        <header className="bg-black">
            <div className="container-fluid">
                <div className="d-flex justify-content-between py-3">

                    <a className="d-flex flex-column justify-content-center" href="/">
                        <Logo />
                    </a>

                    <Navigation />

                </div>
            </div>
        </header>
    );
}

export default Header;