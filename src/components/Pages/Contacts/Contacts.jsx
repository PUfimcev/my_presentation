import React, { useState } from 'react';

import './contacts.css';
import './contacts_media.css';

function Contacts(){


    return (
        <div className="page__contacts">
            <h2 className='page__contacts_title'>Contacts</h2>
            <h4 className='page__contacts_phone'><span>Phone: &nbsp; </span><a className='contacts_phone' href='tel:+375296579256' title='Pavels Phone Number'>+375 (29) 657-92-56</a></h4>
            <h4 className='page__contacts_mail'><span>Mail: &nbsp; </span><a href='mailto: pufimcev8@gmail.com?subject=Responce to CV' title='Pavels Mail'>pufimcev8@gmail.com</a></h4>
            <h4>Place of residence: &nbsp; Minsk</h4>
            <h4 className="page__contacts_linkedIn"><span>LinkedIn: &nbsp; </span><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/pavel-ufimtsau-96120a214/?original_referer=' title='LinkedIn'>Pavel Ufimcev</a></h4>
            <h4 className="page__contacts_telegram"><span>Telegram: &nbsp; </span><a rel="noreferrer" target='_blank' href='https://t.me/upashka' title='Telegram'>@UPashka</a></h4>
        </div>
    )
}

export default Contacts;