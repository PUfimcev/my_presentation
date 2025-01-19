import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../App';


import './notfound.css';
import './notfound_media.css';

function NotFound(){

    const { top } = useContext(MainContext);

    return (
        <>
            <div className='page_notfound'>
                <h1>404</h1>
                <h3>Page is not found</h3>
                <Link onClick={top} className='page_notfound__toMainPage' to='/my_presentation/' title='to_main_page'>Main page</Link>
            </div>
            
        </>
    )
}

export default NotFound;