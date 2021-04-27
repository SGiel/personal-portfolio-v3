import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;
  
  useEffect(() => {
    document.title = (currentCategory.name);
    }, [currentCategory]);
  return (

    <nav className="navbar sticky-top navbar-expand-md navbar-dark" id="navbar">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`mx-1 nav-item ${aboutSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(true)
              setPortfolioSelected(false)
              setContactSelected(false)
              setResumeSelected(false)
            }}>
              About Me</span>
          </li>
          <li className={`mx-2 nav-item ${portfolioSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false)
              setPortfolioSelected(true)
              setContactSelected(false)
              setResumeSelected(false)
            }}>
              Portfolio</span>
          </li>

          <li className={`mx-2 nav-item ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false)
              setPortfolioSelected(false)
              setContactSelected(true)
              setResumeSelected(false)
            }}>
              Say Hello</span>
          </li>
          <li className={`mx-2 nav-item ${resumeSelected && 'navActive'}`}>
            <span onClick={() => {
              setAboutSelected(false)
              setPortfolioSelected(false)
              setContactSelected(false)
              setResumeSelected(true)
            }}>
              Resume</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
