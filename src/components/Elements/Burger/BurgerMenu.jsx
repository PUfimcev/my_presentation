import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import './burgerMenu.css';
import './burgerMenu_media.css';

function BurgerMenu(props) {

    const { setBurgerMenu, setShowBurgerBtn, top } = props.burgerBtn;
    const burgerForm = useRef();
    
    const removeBurgerMenu = (async () => {
        let promise = new Promise((resolve, reject) => {
            const burgerFormRemove = burgerForm.current;
            resolve(burgerFormRemove.style.animation = '0.6s ease-in-out 0s 1 forwards toright');
            reject(new Error('Execution error'))
        })

        await promise.then(()=>{
            setTimeout(()=>{setShowBurgerBtn(true);}, 300);
        }).then(()=>{
            setTimeout(()=>{setBurgerMenu(false);}, 500);
        }).catch((e)=>{console.log('Error is',e)})        
    })

    // function removeBurgerMenu() {
    //     const burgerFormRemove = burgerForm.current;
    //     burgerFormRemove.style.animation = '0.6s ease-in-out 0s 1 forwards toright';
    //     setTimeout(()=>{setShowBurgerBtn(true);}, 300);
    //     setTimeout(()=>{setBurgerMenu(false);}, 1200);
    //     return;
    // }

    return (
        <div  ref={burgerForm} className="burgerform">
            <button className="burgerform__btn__remove" onClick={removeBurgerMenu}></button>
            <ul className='burgerform__nav__list'>
                <li className='burgerform__nav__item'>
                    <Link onClick={()=>{ removeBurgerMenu(); top();}} to='/my_presentation/'>Main page</Link>
                </li>
                <li className='burgerform__nav__item'>
                    <Link  onClick={()=>{ removeBurgerMenu(); top();}} to='/about'>About me</Link>
                </li>
                <li className='burgerform__nav__item'>
                    <Link  onClick={()=>{ removeBurgerMenu(); top();}} to='/portfolio'>Portfolio</Link>
                </li>
                <li className='burgerform__nav__item'>
                    <Link onClick={()=>{ removeBurgerMenu(); top();}} to='/work-experience'>Work experience</Link>
                </li>
                <li className='burgerform__nav__item'>
                    <Link  onClick={()=>{ removeBurgerMenu(); top();}} to='/education'>Education</Link>
                </li>
                <li className='burgerform__nav__item'>
                    <Link  onClick={()=>{ removeBurgerMenu(); top();}} to='/contacts'>Contacts</Link>
                </li>
            </ul>
            <div className="burgerform__contacts">
                <h5 className='burgerform__contacts_phone'><a className='contacts_phone' href='tel:+375296579256' title='Pavels Phone Number'>+375 (29) 657-92-56</a></h5>
                <h5 className='burgerform__contacts_mail'><a href='mailto: pufimcev8@gmail.com?subject=Responce to CV' title='Pavels Mail'>pufimcev8@gmail.com</a></h5>
            </div>
    </div>
    )
} 

export default BurgerMenu;


