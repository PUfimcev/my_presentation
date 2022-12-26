import React from 'react';

import './workExperience.css';
import './workExperience_media.css';

function WorkExperience(){


    return (
        <div className="page__workExperience">
            <h2 className='page__workExperience_title'>Work experience</h2>

            <section className='page__workExperience_place-1'>
                <h3 className='place-1'><a rel="noreferrer" target="_blank" className='place-1_ref' href='https://myitschool.by/kursy-it/individualnye-kursy/' title='Educational center «My-IT-School»'>Educational center «My-IT-School»</a></h3>
                <h5>March 2022 – October 2022</h5>
                <h5>Listener</h5>
                <h5>Development of projects in JS, ReactJS, response layout in HTML5/CSS3</h5>
            </section>

            <section className='page__workExperience_place-2'>
                <h3 className='place-2'>ILLC «RN-West»</h3>
                <h5>December 2013 – till now</h5>
                <h5>Economic security specialist</h5>           
                <h5>Duties – providing for economic security company</h5>           
            </section>
        </div>
    )
}

export default WorkExperience;