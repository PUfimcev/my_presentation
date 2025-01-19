import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BurgerMenu from './components/Elements/Burger/BurgerMenu';

export const MainContext = React.createContext();

function App() {

  // const [homeActive, setHomeActive] = useState(false);
  // const [aboutActive, setAboutActive] = useState(false);
  // const [portfolioActive, setPortfolioActive] = useState(false);
  // const [workExperienceActive, setWorkExperienceActive] = useState(false);
  // const [educationActive, setEducationActive] = useState(false);
  // const [contactsActive, setContactsActive] = useState(false);

  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [showBurgerBtn, setShowBurgerBtn] = useState(true);


  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      const screenWidth = window.screen.width;
      if (!screenWidth) return;
      setScreenWidth(screenWidth);
    });
  },[])

  useMemo(()=>{
    const screenWidth = window.screen.width;
    if (!screenWidth) return;
    setScreenWidth(screenWidth);
  },[])

  function top() {
    let mainElem = document.querySelector('.main');
    mainElem.scrollTop = 0;
    setScrollY(0);
}

  return (
    <div className="app">
      <MainContext.Provider value={{screenWidth, top, scrollY, setScrollY, burgerMenu, setBurgerMenu, showBurgerBtn, setShowBurgerBtn}}>
          <Router>
              <Header />
              <Main />
              {burgerMenu === true && <BurgerMenu burgerBtn={{ setBurgerMenu, setShowBurgerBtn, top}}/>}
          </Router>
        </MainContext.Provider>
    </div>
  );
}

export default App;
