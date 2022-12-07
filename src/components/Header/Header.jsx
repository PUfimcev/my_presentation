import React from 'react';

import Nav from '../Nav/Nav';

import './header.css';
import './header_media.css';

function Header(){


    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    Header
                    <Nav />

                </div>
            </div>
        </header>
    )
}

export default Header;