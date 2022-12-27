import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../App';
import Me from '../../../images/me.png';
import CV from '../../../files/CV.pdf';

import './home.css';
import './home_media.css';

function Home(){
    const { top } = useContext(MainContext);

    return (
        <div className="page__home">
            <div className="page__home__picture">
                <img src={Me} alt='Me'/>
            </div>
            <div className="page__home__greeting">
                <h1>Hello!</h1>
                <h3>I’m Pavel Ufimtsau</h3>
                <h5>I’m a Front-End Developer, striving for expending, improving, upgrading of my knowledge, skills, experience of Webdevelopment.<br/>
                I’m full of energy to create.</h5>
                <div className="greeting__direction"><Link onClick={()=>{top();}}  className='direction_toAbout' to='/about'><span className='direction_toAbout-title'>Learn more</span><span className='direction_toAbout-arrow'></span><span className='direction_toAbout-circle'></span></Link></div>
                <div className="greeting__links">
                    <div className="greeting__link_in"><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/pavel-ufimtsau-96120a214/?original_referer=' title='LinkedIn'>{/*empty a*/}</a></div>
                    <div className="greeting__link_mail"><a href='mailto: pufimcev8@gmail.com?subject=Responce to CV' title='Pavels Mail'>{/*empty a*/}</a></div>
                    <div className="greeting__link_cv"><a rel="noreferrer"target='_blank' href={CV} title='My CV'>{/*empty a*/}</a></div>
                </div>
            </div>
        </div>
    )
}

export default Home;