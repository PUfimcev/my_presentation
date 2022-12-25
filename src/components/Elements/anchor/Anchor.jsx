import React, { useContext } from 'react';
import './anchor.css';
import { MainContext } from '../../../App';

function Anchor(props) {
    const { pageTop, widthMain } = props.dataMain;
	const { screenWidth  } = useContext(MainContext);


	return (
		<div onClick={pageTop} className="anchor" style={{left: `${screenWidth > 1024 ? widthMain +20 : screenWidth - 60}px`}} ></div>
	);
}

export default Anchor;

