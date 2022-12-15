import React from 'react';

import './about.css';
import './about_media.css';

function About(){


    return (
        <div className="page__about">
            <section className="about__description">
                <h2 className="about__description_title">About me</h2>
                <h5 className="about__description_intro">I’ve been working as an economic security specialist in ILLC «RN-West» (oil products retailer that has its filling station net). <br/>Due to my desire for learning, developing and gaining new knowledge I paid my attention to information technology sector. To begin with I made my mind to start with a self-study of English. My second step was a study of Front-end development. Further I’m going to learn in back-end development course (PHP/Laravel). <br/>
                I spend loads of time programming independently and self-studying of English. I try to improve my skills constantly and study new technologies.<br/>
                After kicking off my way in IT-sector I’ve directed myself to achieve a Teamlead level.  
                </h5>
            </section>
            
            <section className="myQuality__lang">
                <span className="myQuality__lang_eng">Foreign language</span><span className="myQuality__lang_eng-level">-</span>
                <span className="myQuality__lang_eng-level">English – level А2</span>
            </section>

            <section className='about__description_myQuality'>
                <div className="myQuality__hardSkills">
                    <h3 className="myQuality__hardSkills_title">Hard skills</h3>
                    <ul className="myQuality__hardSkills_items">
                        <li className="myQuality__hardSkills_item">ReactJs</li>
                        <li className="myQuality__hardSkills_item">JavaScript(ES6)</li>
                        <li className="myQuality__hardSkills_item">HTML 5</li>
                        <li className="myQuality__hardSkills_item">CSS3/SCSS/SASS</li>
                        <li className="myQuality__hardSkills_item">Git/GitHub</li>
                        <li className="myQuality__hardSkills_item">Bootstrap</li>
                        <li className="myQuality__hardSkills_item">Webpack</li>
                        <li className="myQuality__hardSkills_item">Redux</li>
                    </ul>
                </div>

                <div className="myQuality__softSkills">
                    <h3 className="myQuality__softSkills_title">Soft skills</h3>
                    <ul className="myQuality__softSkills_items">
                        <li className="myQuality__softSkills_item">Independence</li>
                        <li className="myQuality__softSkills_item">Adaptability</li>
                        <li className="myQuality__softSkills_item">Communication</li>
                        <li className="myQuality__softSkills_item">Teamwork</li>
                        <li className="myQuality__softSkills_item">Critical thinking</li>
                        <li className="myQuality__softSkills_item">Creativity</li>
                        <li className="myQuality__softSkills_item">Openness to criticism</li>
                    </ul>
                </div>

                <div className="myQuality__hobby">
                    <h3 className="myQuality__hobby_title">Leisure/hobby</h3>
                    <ul className="myQuality__hobby_items">
                        <li className="myQuality__hobby_item">jogging/gym</li>
                        <li className="myQuality__hobby_item">reading English literature in the original</li>
                        <li className="myQuality__hobby_item">listening to English podcasts</li>
                        <li className="myQuality__hobby_item">monitoring innovations and improvements in WEB-development in social media</li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default About;