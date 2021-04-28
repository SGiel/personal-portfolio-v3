import React, { useState } from 'react';
import Nav from './components/Nav';
import Namebar from './components/Namebar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Say Hello' },
    { name: 'Resume' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div style={{ backgroundColor: 'rgba(247, 242, 242, 0.829)' }}>
      {/* <body> */}
      <main>
        <div className="container-fluid">
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Nav>
          <div className="row" id="main-row">
            <Namebar></Namebar>
            {aboutSelected && (<About></About>)}
            {portfolioSelected && <Portfolio></Portfolio>}
            {contactSelected && <ContactForm></ContactForm>}
            {resumeSelected && <Resume></Resume>}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
