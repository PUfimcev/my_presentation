import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../App';
import Nav from '../Nav/Nav';

import './header.css';
import './header_media.css';

function Header(){
    const { setHomeActive, setAboutActive, setPortfolioActive, setWorkExperienceActive, setEducationActive, setContactsActive } = useContext(MainContext);

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link onClick={()=>{setAboutActive(false); setHomeActive(true); setPortfolioActive(false); setWorkExperienceActive(false); setEducationActive(false); setContactsActive(false);}} className='header__main_title' to='/' title='main_page'>Pavel</Link>
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header;