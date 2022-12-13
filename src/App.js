import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const MainContext = React.createContext();

function App() {

  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [workExperienceActive, setWorkExperienceActive] = useState(false);
  const [educationActive, setEducationActive] = useState(false);
  const [contactsActive, setContactsActive] = useState(false);

  return (
    <div className="app">
      <MainContext.Provider value={{homeActive, setHomeActive, aboutActive, setAboutActive, portfolioActive, setPortfolioActive, workExperienceActive, setWorkExperienceActive, educationActive, setEducationActive, contactsActive, setContactsActive}}>
          <Router>
              <Header />
              <Main />
          </Router>
        </MainContext.Provider>
    </div>
  );
}

export default App;
