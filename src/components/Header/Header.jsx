import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../App';
import Nav from '../Nav/Nav';

import './header.css';
import './header_media.css';

function Header(){
    const { screenWidth, top, setBurgerMenu, showBurgerBtn, setShowBurgerBtn } = useContext(MainContext);

    const [burgerArrow, setBurgerArrow] = useState(false);

    const burgerBtn = useRef();
    
    function alterBurgerBtn() {
        const burgerForm = burgerBtn.current;
        burgerForm.style.transform = 'rotate(180deg)';
        setTimeout(()=>{setBurgerArrow(true);}, 500);
        setTimeout(()=>{setBurgerArrow(false); setShowBurgerBtn(false); setBurgerMenu(true);}, 1300);
        return;
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link onClick={top} className='header__main_title' to='/my_presentation/' title='main_page'>Pavel</Link>
                    {screenWidth > 1024 && <Nav />}
                    {screenWidth < 1025 && showBurgerBtn === true && <><button ref={burgerBtn} onClick={alterBurgerBtn} className={burgerArrow === true ? 'burger arrow' : 'burger'}></button></>}
                </div>
            </div>
        </header>
    )
}

export default Header;