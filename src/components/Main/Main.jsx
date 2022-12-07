import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './main.css';
import './main_media.css';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Portfolio from '../Pages/Portfolio/Portfolio';
import WorkExperience from '../Pages/WorkExperience/WorkExperience';
import Education from '../Pages/Education/Education';
import Contacts from '../Pages/Contacts/Contacts';

function Main(){


    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/work-experience' element={<WorkExperience />} />
                        <Route path='/education' element={<Education />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main;