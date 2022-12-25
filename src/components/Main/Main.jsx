import React, { useRef, useState, useEffect, useContext } from 'react';
import { Routes, Route} from 'react-router-dom';

import './main.css';
import './main_media.css';

import { MainContext } from '../../App';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Portfolio from '../Pages/Portfolio/Portfolio';
import WorkExperience from '../Pages/WorkExperience/WorkExperience';
import Education from '../Pages/Education/Education';
import Contacts from '../Pages/Contacts/Contacts';
import Anchor from '../Elements/anchor/Anchor';

function Main(){

    const { scrollY, setScrollY } = useContext(MainContext);
    const mainContent = useRef();
    const main = useRef();
    const [widthMain, setWidthMain] = useState(0);
    

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            let widthElem = main.current.scrollWidth;
            let offsetLeftElem = main.current.offsetLeft;
            if (!widthElem || !offsetLeftElem) return;
            let width = +offsetLeftElem + +widthElem ;
            setWidthMain(width);
        });
    },[])

    useEffect(()=>{
        let widthElem = main.current.scrollWidth;
        let offsetLeftElem = main.current.offsetLeft;
        if (!widthElem || !offsetLeftElem) return;
        let width = +offsetLeftElem + +widthElem ;
        setWidthMain(width);
    },[])

    useEffect(()=>{
        main.current.addEventListener("scroll", ()=> {
            let scroll = main.current.scrollTop;
            if (!scroll) return;
            setScrollY(scroll);
        });
    },[setScrollY])

    useEffect(()=>{
        let scroll = main.current.scrollTop;
            if (!scroll) return;
            setScrollY(scroll);
    },[setScrollY])

    function pageTop(){
        let mainElemTop = mainContent.current;
        mainElemTop.scrollIntoView({behavior:"smooth", block: "start"});
        setScrollY(0);
    }

    return (
        <main ref={main} className="main">
            <div className="container">
                <div ref={mainContent} className="main__content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/work-experience' element={<WorkExperience />} />
                        <Route path='/education' element={<Education />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                    {scrollY >= 250 && <Anchor  dataMain = { {pageTop, widthMain }}/>}
                </div>
            </div>
        </main>
    )
}

export default Main;