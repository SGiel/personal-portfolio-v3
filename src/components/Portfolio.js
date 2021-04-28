
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import projectImage1 from '../assets/images/bootcamp-survival-guide-screenshot.png'
import projectImage2 from '../assets/images/visit-america-screenshot.png'
import projectImage3 from '../assets/images/weather-dashboard-screenshot.png'
import projectImage4 from '../assets/images/workday-scheduler-screenshot.png'
import projectImage5 from '../assets/images/run-buddy-screenshot.png'
import projectImage6 from '../assets/images/camper-van-screenshot.png'


function Portfolio() {


  return (
    // This column holds 1 column with 1 row and inside 1 column with 1 row and 2 columns with 2 rows
    <section className="col-10" id="projects">
      <Router>
        <h1>Portfolio</h1>
        <div className="row">

          <div className="col-12 col-md-6">
            <div className="row">
              <Link to={'//coding-bootcamp-survival-guide.herokuapp.com/'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-1">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage1}
                      alt='screenshot coding bootcamp survival guide homepage' />
                    <div className="project-text">
                      <h3>Coding Bootcamp Survival Guide</h3>
                      <h4>MySql/Sequelize/Handlebars</h4>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'//sgiel.github.io/weather-dashboard/'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-3">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage3}
                      alt="screenshot of Weather Dashboard home page with search bar for Paris filled out, current weather and 5-day forecast" />
                    <div className="project-text">
                      <h3>Weather Dashboard</h3>
                      <h4>JavaScript/APIs</h4>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'//sgiel.github.io/run-buddy'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-5">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage5}
                      alt='screenshot of Run-Buddy home page with tennis shoe being tied' />
                    <div className="project-text">
                      <h3>Run Buddy</h3>
                      <h4>HTML/CSS</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row">
              <Link to={'//sgiel.github.io/visit-america/'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-2">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage2}
                      alt='screenshot Visit America home page with search bar and banner of Grand Canyon' />
                    <div className="project-text">
                      <h3>Visit America</h3>
                      <h4>JS/Apis/Materialize</h4>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'//sgiel.github.io/workday-scheduler/'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-4">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage4}
                      alt='screenshot Workday Scheduler home page with list of workday events filled out' />
                    <div className="project-text">
                      <h3>Workday Scheduler</h3>
                      <h4>JQuery</h4>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'//sgiel.github.io/camper-van/'} target='_blank' className="col-12">
                <div className="text-center" id="project-image-6">
                  <div className="project-image-wrapper">
                    <img className="img-fluid rounded" src={projectImage6}
                      alt='screenshot of Camper Van website including brown camper van with orange kayaks on top' />
                    <div className="project-text">
                      <h3>Camper Van</h3>
                      <h4>HTML/CSS/Javascript</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </Router>
    </section>
  );
}

export default Portfolio;