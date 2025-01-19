import React from 'react';

import './about.css';
import './about_media.css';

function About(){


    return (
        <div className="page__about">
            <section className="about__description">
                <h2 className="about__description_title">About me</h2>
                <h5 className="about__description_intro">For the time being I'm developing my Pet-project - web e-commerce site (PHP/Laravel/EC6(JS)/SCSS/Bootstrap). 
 I’m experienced in developing in such areas as front-end and back-end.<br/>
My English level is B1 (Intermediate).<br/>
I develop websites from scratch using a responsive layout, applications using an object-oriented programming approach. I try to keep up with the rapidly changing requirements in the IT 
sector. I’m constantly improving my English, technical skills and study new technologies.
                </h5>
            </section>
            
            <section className="myQuality__lang">
                <span className="myQuality__lang_eng">Foreign language</span><span className="myQuality__lang_eng-level">-</span>
                <span className="myQuality__lang_eng-level">English – level B1</span>
            </section>

            <section className='about__description_myQuality'>
                <div className="myQuality__hardSkills">
                    <h3 className="myQuality__hardSkills_title">Hard skills</h3>
                    <ul className="myQuality__hardSkills_items">
                        <li className="myQuality__hardSkills_item">PHP/Laravel/MySQL</li>
                        <li className="myQuality__hardSkills_item">JavaScript(ES6)</li>
                        <li className="myQuality__hardSkills_item">HTML 5</li>
                        <li className="myQuality__hardSkills_item">CSS3/SCSS/SASS</li>
                        <li className="myQuality__hardSkills_item">Git/GitHub</li>
                        <li className="myQuality__hardSkills_item">Bootstrap</li>
                        <li className="myQuality__hardSkills_item">Webpack/Vite</li>
                        <li className="myQuality__hardSkills_item">Docker</li>
                        <li className="myQuality__hardSkills_item">Redux/Redux-thunk/Redux ToolKit</li>
                        <li className="myQuality__hardSkills_item">Reading somebody else code</li>
                    </ul>
                </div>

                <div className="myQuality__softSkills">
                    <h3 className="myQuality__softSkills_title">Soft skills</h3>
                    <ul className="myQuality__softSkills_items">
                        <li className="myQuality__softSkills_item">I take responsibility for project</li>
                        <li className="myQuality__softSkills_item">I resolve conflicts</li>
                        <li className="myQuality__softSkills_item">Teamwork</li>
                        <li className="myQuality__softSkills_item">Critical thinking</li>
                    </ul>
                </div>

                <div className="myQuality__hobby">
                    <h3 className="myQuality__hobby_title">Leisure/hobby</h3>
                    <ul className="myQuality__hobby_items">
                        <li className="myQuality__hobby_item">swimming</li>
                        <li className="myQuality__hobby_item">reading English literature in the original</li>
                        <li className="myQuality__hobby_item">listening to English podcasts</li>
                        <li className="myQuality__hobby_item">monitoring innovations and improvements in WEB-development on social media</li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default About;