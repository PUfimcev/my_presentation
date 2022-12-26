import React, { useContext } from 'react';
import './anchor.css';
import { MainContext } from '../../../App';

function Anchor(props) {
    const { pageTop } = props.dataMain;
	const { screenWidth  } = useContext(MainContext);

	return (
		<div onClick={pageTop} className="anchor" style={{left: `${screenWidth > 1024 ? screenWidth  - 90 : screenWidth - 50}px`}} ></div>
	);
}

export default Anchor;

