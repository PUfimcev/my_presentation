import React, { useRef, useState, useEffect, useContext, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import './main.css';
import './main_media.css';

import { MainContext } from '../../App';

const Home = React.lazy(() => import('../Pages/Home/Home'));
const About = React.lazy(() => import('../Pages/About/About'));
const Portfolio = React.lazy(() => import('../Pages/Portfolio/Portfolio'));
const WorkExperience = React.lazy(() => import('../Pages/WorkExperience/WorkExperience'));
const Education = React.lazy(() => import('../Pages/Education/Education'));
const Contacts = React.lazy(() => import('../Pages/Contacts/Contacts'));
const NotFound = React.lazy(() => import('../Pages/NotFound/NotFound'));
const Anchor = React.lazy(() => import('../Elements/anchor/Anchor'));

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
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <Routes>
                            <Route path='/my_presentation' element={<Home />} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/work-experience' element={<WorkExperience />} />
                            <Route path='/education' element={<Education />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Suspense>
                    {scrollY >= 250 && <Anchor  dataMain = { {pageTop, widthMain }}/>}
                </div>
            </div>
        </main>
    )
}

export default Main;