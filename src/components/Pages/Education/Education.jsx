import React, { useState, useContext }  from 'react';
import { MainContext } from '../../../App';

import Certificate from '../../../files/Certificate.pdf';
import CertificateImg from '../../../images/Certificate.jpg';
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
                    <h3><a rel="noreferrer" target="_blank" className='place-1_ref' href='https://myitschool.by/kursy-it/individualnye-kursy/' title='Educational center «My-IT-School»'>Educational center «My-IT-School»</a></h3>
                    <h5>(IT-school «The number one» in 2022)</h5>
                    <h5>Front-end development Course</h5>
                    <h5>March 2022 – October 2022</h5>
                </div>
                {screenWidth > 425 ? <div className="education_certificate" onClick={()=>{setPopUpCertif(true)}}>
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