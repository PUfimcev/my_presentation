import React, { useState, useContext }  from 'react';
import { MainContext } from '../../../App';

import Certificate from '../../../files/Certificate.pdf';
import CertificateImg from '../../../images/Certificate.png';
import './education.css';
import './education_media.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Education(){

    const { screenWidth } = useContext(MainContext);
    const [popUpCertif, setPopUpCertif] = useState(false);

    function GetPopUp() {
        return (
            <div className="popUp__certificate" onClick={removePopUp}>
                <div className="popUp__certificate_wrapper">
                    <Document file={Certificate} className="pdf-document">
                        <Page pageNumber={1} 
                        //   key={`page_${index + 1}`}
                        //   pageNumber={index + 1}
                        //   width={375}
                        loading="Loading Page..."
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        externalLinkTarget="_blank"/>
                    </Document>
                </div>      
            </div>)
    }

    function removePopUp(event) {
        if (event && event.target.className !== 'popUp__certificate') return;
        setPopUpCertif(false);
    }

    return (
        <div className="page__education">
            <h2 className='page__education_title'>Education</h2>

            <section className='page__education_place-1'>
                <div className='education_place-1'>
                    <h3><a rel="noreferrer" target="_blank" className='place-1_ref' href='https://myitschool.by/kursy-it/individualnye-kursy/' title='Training Center «My IT School»  LLC "AytiDizayn"'>Training Center «My IT School»  LLC "AytiDizayn" </a></h3>
                    <h5>(IT-school «Number one» in 2022, 2023)</h5>
                    <h5>Back-end web development from scratch</h5>
                    <h5>February 2023 – august 2023</h5>
                    <h5>At the course I learned web-developement, gain skills in applying PHP, MySQL, Laravel, ECMAScript, HTML5, CSS. After my internship I went on my study and learned Laravel on my own. And for improving my skills I 'm developing a web e-commerce site, applying  PHP/Laravel/ES(JS)/SCSS/MySQL.</h5>
                </div>
                {/* {screenWidth > 425 ? <div className="education_certificate" onClick={()=>{setPopUpCertif(true)}}>
                    <img src={CertificateImg} alt="Certificate" />
                </div> : <div className="education_certificate">
                    <img src={CertificateImg} alt="Certificate" />
                </div>}
                {popUpCertif && <GetPopUp />} */}
            </section>

            <section className='page__education_place-1'>
                <div className='education_place-1'>
                    <h5>Front-end web development from scratch</h5>
                    <h5>March 2022 – October 2022</h5>
                    <h5>I has successfully completed training in the course program"Front-end web development from scratch", defended the graduation project and got a certificated specialist in the field of web application development '. I learned such directions like React, ES2016(JS), CSS, HTML5, GIT, GITHub, adaptive layout. I keep developing. Additionally I learned Redux, Redux-Thunk, Redux-Toolkit, Bootstrap.</h5>
                </div>
                {screenWidth > 600 ? <div className="education_certificate" onClick={()=>{setPopUpCertif(true)}}>
                    <img src={CertificateImg} alt="Certificate" />
                </div> : <div className="education_certificate">
                    <img src={CertificateImg} alt="Certificate" />
                </div>}
                {popUpCertif && <GetPopUp />}
            </section>

            <section className='page__education_place-2'>
                <h3 className='place-2'>Belarussian state economic university</h3>
                <h5>International economic relations</h5>
                <h5>September 1996 – June 2001</h5>           
            </section>
        </div>
    )
}

export default Education;