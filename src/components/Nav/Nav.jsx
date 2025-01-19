import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

import { MainContext } from '../../App';

import './nav.css';
import './nav_media.css';

function Nav(){

    const { top } = useContext(MainContext);

    return (
        <nav className="nav">
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}} className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/my_presentation/'>Main page</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}}  className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/about'>About me</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}}  className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/portfolio'>Portfolio</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}} className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/work-experience'>Work experience</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}}  className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/education'>Education</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={()=>{top();}}  className={({isActive}) => (isActive ? 'nav__item_link selected' : 'nav__item_link')} to='/contacts'>Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )

    // import React, { useContext, useRef, useEffect } from 'react';
    // import { Link } from "react-router-dom";
    // import { MainContext } from '../../App';

    // const {homeActive, setHomeActive, aboutActive, setAboutActive, portfolioActive, setPortfolioActive, workExperienceActive, setWorkExperienceActive, educationActive, setEducationActive, contactsActive, setContactsActive} = useContext(MainContext);

    // const home = useRef();
    // const about = useRef();
    // const portfolio = useRef();
    // const workExperience = useRef();
    // const education = useRef();
    // const contacts = useRef();

        // useEffect(() => {
    //     let pathBrows = window.location.pathname.split(/\/*\//)[1];
    //     switch(pathBrows){
    //         case '':
    //             setHomeActive(true);
    //         break;
    //         case 'about':
    //             setAboutActive(true);
    //         break;
    //         case 'portfolio':
    //             setPortfolioActive(true);
    //         break;
    //         case 'work-experience':
    //             setWorkExperienceActive(true);
    //         break;
    //         case 'education':
    //             setEducationActive(true);
    //         break;
    //         case 'contacts':
    //             setContactsActive(true);
    //         break;
    //         default:
    //         break;
    //     }
    // });

    // function linkActive(event) {
    //     let elem = event.target.innerHTML;
    //     switch(elem){
    //         case 'Home':
    //             setHomeActive(true);
    //             setAboutActive(false);
    //             setPortfolioActive(false);
    //             setWorkExperienceActive(false);
    //             setEducationActive(false);
    //             setContactsActive(false);
    //         break;
    //         case 'About':
    //             setAboutActive(true);
    //             setHomeActive(false);
    //             setPortfolioActive(false);
    //             setWorkExperienceActive(false);
    //             setEducationActive(false);
    //             setContactsActive(false);

    //         break;
    //         case 'Portfolio':
    //             setPortfolioActive(true);
    //             setHomeActive(false);
    //             setAboutActive(false);
    //             setWorkExperienceActive(false);
    //             setEducationActive(false);
    //             setContactsActive(false);
    //         break;
    //         case 'Work experience':
    //             setWorkExperienceActive(true);
    //             setHomeActive(false);
    //             setAboutActive(false);
    //             setPortfolioActive(false);
    //             setEducationActive(false);
    //             setContactsActive(false);

    //         break;
    //         case 'Education':
    //             setEducationActive(true);
    //             setHomeActive(false);
    //             setAboutActive(false);
    //             setPortfolioActive(false);
    //             setWorkExperienceActive(false);
    //             setContactsActive(false);
    //         break;
    //         case 'Contacts':
    //             setContactsActive(true);
    //             setHomeActive(false);
    //             setAboutActive(false);
    //             setPortfolioActive(false);
    //             setWorkExperienceActive(false);
    //             setEducationActive(false);
    //         break;
    //         default:
    //         break;
    //     }
    // }

    // return (
    //     <nav className="nav">
    //         <ul className='nav__list'>
    //             <li className='nav__item'>
    //                 <Link ref={home} onClick={linkActive} className={homeActive ? 'nav__item_link selected' : 'nav__item_link'} to='/'>Home</Link>
    //             </li>
    //             <li className='nav__item'>
    //                 <Link ref={about} onClick={linkActive}  className={aboutActive ? 'nav__item_link selected' : 'nav__item_link'} to='/about'>About</Link>
    //             </li>
    //             <li className='nav__item'>
    //                 <Link ref={portfolio } onClick={linkActive}  className={portfolioActive ? 'nav__item_link selected' : 'nav__item_link'} to='/portfolio'>Portfolio</Link>
    //             </li>
    //             <li className='nav__item'>
    //                 <Link ref={workExperience} onClick={linkActive}  className={workExperienceActive ? 'nav__item_link selected' : 'nav__item_link'} to='/work-experience'>Work experience</Link>
    //             </li>
    //             <li className='nav__item'>
    //                 <Link ref={education} onClick={linkActive}  className={educationActive ? 'nav__item_link selected' : 'nav__item_link'} to='/education'>Education</Link>
    //             </li>
    //             <li className='nav__item'>
    //                 <Link ref={contacts} onClick={linkActive}  className={contactsActive ? 'nav__item_link selected' : 'nav__item_link'} to='/contacts'>Contacts</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // )
}

export default Nav;