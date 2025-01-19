import React from 'react';

import './portfolio.css';
import './portfolio_media.css';

function Portfolio(){

    function refActive(event){
        let elem = event.target;
        if(!elem) return;
        elem.style.transform=`scale(1.1)`;
        elem.style.boxShadow=`none`;
    }

    function refNotActive(event){
        let elem = event.target;
        if(!elem) return;
        elem.style.transform=``;
        elem.style.boxShadow=`4px 4px 5px 2px rgba(234, 239, 245, 0.3)`;
    }


    const portfolioList = [
        {name: 'nursary primary school', href: 'https://pufimcev.github.io/nursary_primary_school/', title: "nursary_primary_school_project", stakeTech: 'React/JS/HTML/CSS' },
        {name: 'Lang app eng', href: 'https://pufimcev.github.io/Lang_app_eng/', title: 'Lang_app_eng_project', stakeTech: 'React/JS/HTML/CSS' },
        {name: 'Contactlist (phone)', href: 'https://pufimcev.github.io/Contact_list_phone/', title: 'Contact_list_phone_project', stakeTech: 'JS/OOP/HTML/CSS' },
        {name: 'ToDoList', href: 'https://pufimcev.github.io/ToDoList/', title: 'ToDoList_project', stakeTech: 'JS/OOP/HTML/CSS' },
        {name: 'Calculator', href: 'https://pufimcev.github.io/Calculator/', title: 'Calculator_project', stakeTech: 'JS/HTML/CSS' },
        {name: 'Tic-Tac game', href: 'https://pufimcev.github.io/Tic-Tac_game/', title: 'Tic-Tac_game_project', stakeTech: 'JS/HTML/CSS' },
        {name: 'TreeHouse', href: 'https://pufimcev.github.io/TreeHouse/index.html', title: 'TreeHouse_project', stakeTech: 'HTML/CSS' },
    ]


    return (
        <>
            <h5 className="portfolio__link_github">Read code: <a rel="noreferrer" target='_blank' href="http://github.com/PUfimcev" title='My GitHub'>my GitHub</a></h5>
            <ul className="page__portfolio_list">
                { portfolioList.map((item, index) =>{
                return (<li key={index} className={`portfolio__project project-${index+1}`}> 
                    <a onMouseEnter={refActive} onMouseLeave={refNotActive} className={`portfolio__project ${item.title}`} href={item.href} target='_blanket' title={`portfolio__project-${index+1}`} >
                        {/* <iframe className={`portfolio__project_iframe project_iframe-${index+1}`} title={item.title} src={item.href} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} sandbox='allow-same-origin allow-scripts'></iframe> */}
                        {/* <img src="" alt={item.name} /> */}
                    </a> 
                    <h5 className='portfolio__project_title'>{item.name}</h5>
                    <h6 className='portfolio__project_title'>{item.stakeTech}</h6>
                </li> 
                )})}
            </ul>
        </>
    )
}


export default Portfolio;