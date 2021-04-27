
import React from 'react';
import projectImage1 from '../assets/images/bootcamp-survival-guide-screenshot.png'
import projectImage2 from '../assets/images/visit-america-screenshot.png'
import projectImage3 from '../assets/images/weather-dashboard-screenshot.png'
import projectImage4 from '../assets/images/workday-scheduler-screenshot.png'
import projectImage5 from '../assets/images/camper-van-screenshot.png'


function Portfolio() {
  return (
    // This column holds 1 column with 1 row and inside 1 column with 1 row and 2 columns with 2 rows
    <section className="col-8" id="projects">

    <h1>Portfolio</h1>
    <div className="row">

      <div className="col-12 col-lg-6">
         {/* onClick={() => {
           window.open('https://coding-bootcamp-survival-guide.herokuapp.com/','_blank')
         }>  */}
        
        <div className="text-center" id="project-image-1">
          <img className="img-fluid rounded" src={projectImage1}
            alt='screenshot coding bootcamp survival guide homepage'/>

          <div className="project-text-large">
            <h5>Coding Bootcamp Survival Guide</h5>
            <p>MySql/Sequelize/Handlebars</p>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-12 project-top-img">
            {/* onClick={() => {
              window.open('https://sgiel.github.io/visit-america/','_blank')
            }>      */}
            <div className="text-center" id="project-image-3">
              <img className="img-fluid rounded" src={projectImage2}
                alt='screenshot Visit America home page with search bar and banner of Grand Canyon'/>
              <div className="project-text-large">
                <h5>Visit America</h5>
                <p>JS/Apis/Materialize</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-12 project-bot-img">
          {/* onClick={() => {
            window.open('https://sgiel.github.io/weather-dashboard/','_blank')
          }>      */}
            <div className="text-center" id="project-image-2">
              <img className="img-fluid rounded" src={projectImage3}
                alt="screenshot of Weather Dashboard home page with search bar for Paris filled out, current weather and 5-day forecast"/>
              <div className="project-text">
                <h5>Weather Dashboard</h5>
                <p>JavaScript/APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-12 project-top-img">
            {/* onClick={() => {
              window.open('https://sgiel.github.io/workday-scheduler/','_blank')
            }>      */}
            <div className="text-center" id="project-image-4">
              <img className="img-fluid rounded" src={projectImage4}
                alt='screenshot Workday Scheduler home page with list of workday events filled out'/>
              <div className="project-text">
                <h5>Workday Scheduler</h5>
                <p>JQuery</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-12 project-bot-img">
          {/* onClick={() => {
            window.open('https://sgiel.github.io/camper-van/','_blank')
          }>      */}
          <div className="text-center" id="project-image-3">
              <img className="img-fluid rounded" src={projectImage5}
                alt='screenshot of Camper Van website including brown camper van with orange kayaks on top'/>
              <div className="project-text">
                <h5>Camper Van</h5>
                <p>HTML/CSS</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
  );
}

export default Portfolio;