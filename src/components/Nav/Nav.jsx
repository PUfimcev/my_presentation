import React from 'react';
import { Link } from "react-router-dom";

import './nav.css';
import './nav_media.css';

function Nav(){


    return (
        <main className="nav">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/work-experience'>Work experience</Link>
                </li>
                <li>
                    <Link to='/education'>Education</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
            </ul>
        </main>
    )
}

export default Nav;