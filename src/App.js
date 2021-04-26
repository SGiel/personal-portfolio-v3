import React, {useState} from 'react';

// import Nav from './components/Nav';
import background from "./assets/images/annie-spratt-gSQbip5HHuc-unsplash.jpg";
import './App.css';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Say Hello' },
    { name: 'Resume' }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <body style={{backgroundColor: 'rgba(247, 242, 242, 0.829)'}}>
    {/* <body> */}
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={aboutSelected}
        setContactSelected={setAboutSelected}
        contactSelected={portfolioSelected}
        setContactSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        contactSelected={resumeSelected}
        setContactSelected={setResumeSelected}
      ></Nav> */}
      <main>
        <div class="container-fluid">
          <div class="row" id="main-row">
            <div class="col-2" id="name-bar" >
              <div id="name">
                <p>S</p>
                <p>T</p>
                <p>E</p>
                <p>P</p>
                <p>H</p>
                <p>A</p>
                <p>N</p>
                <p>I</p>
                <p>E</p>
                <p id="bullet">⚫️</p>
                <p>G</p>
                <p>I</p>
                <p>E</p>
                <p>L</p>
                <div id="name-bar-after" style={{backgroundImage: `url(${background})`, position: 'absolute', backgroundSize: 'cover'}}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
