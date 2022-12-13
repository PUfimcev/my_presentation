import React, { useState } from 'react';

import './contacts.css';
import './contacts_media.css';

function Contacts(){

    const [toolTipPhone, setToolTipPhone] = useState(false);
    const [toolTipMail, setToolTipMail] = useState(false);
    const [toolTipLn, setToolTipLn] = useState(false);

    function getToolTip(event) {
        let elem = event.target.title;

        switch(elem){
            case 'Pavels Phone Number':
                setToolTipPhone(true);
            break;
            case 'Pavels Mail':
                setToolTipMail(true);
            break;
            case 'LinkedIn':
                setToolTipLn(true);
            break;
            default:
            break;
        }
    }

    function removeToolTip(){
        setToolTipPhone(false);
        setToolTipMail(false);
        setToolTipLn(false);
    }

    return (
        <div className="page__contacts">
            <h2 className='page__contacts_title'>Contacts</h2>
            <h3 className='page__contacts_phone'><span>Phone: &nbsp; </span><a onMouseOver={getToolTip} onMouseLeave={removeToolTip} className='contacts_phone' href='tel:+375296579256' title='Pavels Phone Number'>+375 (29) 657-92-56
            {toolTipPhone && <div className='contacts__toolTip'>Call me</div>}</a></h3>
            <h3 className='page__contacts_mail'><span>Mail: &nbsp; </span><a onMouseOver={getToolTip} onMouseLeave={removeToolTip} href='mailto: pufimcev8@gmail.com?subject=Responce to CV' title='Pavels Mail'>pufimcev8@gmail.com
            {toolTipMail && <div className='contacts__toolTip'>Mail me</div>}</a></h3>
            <h3>Place of residence: &nbsp; Minsk</h3>
            <h3 className="page__contacts_linkedIn"><span>LinkedIn: &nbsp; </span><a onMouseOver={getToolTip} onMouseLeave={removeToolTip} rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/pavel-ufimtsau-96120a214/?original_referer=' title='LinkedIn'>Pavel Ufimtsau
            {toolTipLn && <div className='contacts__toolTip'>Examine me</div>}</a></h3>
        </div>
    )
}

export default Contacts;