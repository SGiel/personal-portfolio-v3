import { useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

// import projectImage1 from '../assets/images/bootcamp-survival-guide-screenshot.png'
// import projectImage2 from '../assets/images/weather-dashboard-screenshot.png'
// import projectImage3 from '../assets/images/run-buddy-screenshot.png'

// import projectImage4 from '../assets/images/visit-america-screenshot.png'
// import projectImage5 from '../assets/images/workday-scheduler-screenshot.png'
// import projectImage6 from '../assets/images/camper-van-screenshot.png'

const Project = ({ startId, stopId }) => {


  const [projects] = useState([
    {
      name: 'Coding Bootcamp Survival Guide',
      image: 'bootcamp-survival-guide-screenshot.png',
      imageAlt: 'screenshot coding bootcamp survival guide homepage',
      githubLink: '//github.com/Coding-Bootcamp-Survival-Guide',
      githubLinkAlt: 'Coding Bootcamp Survival Guide github repository',
      siteLink: '//coding-bootcamp-survival-guide.herokuapp.com/',
      siteLinkAlt: 'Coding Bootcamp Survival Guide live application',
      skills: 'MySql/Sequelize/Handlebars',
      id: '1'
    },
    {
      name: 'Weather Dashboard',
      image: 'weather-dashboard-screenshot.png',
      imageAlt: 'screenshot of Weather Dashboard home page with search bar for Paris filled out, current weather and 5-day forecast',
      githubLink: '//github.com/SGiel/weather-dashboard',
      githubLinkAlt: 'Weather Dashboard github repository',
      siteLink: '//sgiel.github.io/weather-dashboard/',
      siteLinkAlt: 'Weather Dashboard live application',
      skills: 'JavaScript/APIs',
      id: 2

    },
    {
      name: 'Run Buddy',
      image: 'run-buddy-screenshot.png',
      imageAlt: 'screenshot of Run-Buddy home page with tennis shoe being tied',
      githubLink: '//github.com/SGiel/run-buddy',
      githubLinkAlt: 'Run Buddy github repository',
      siteLink: '//sgiel.github.io/run-buddy/',
      siteLinkAlt: 'Run Buddy live application',
      skills: 'HTML/CSS',
      id: 3
    },
    {
      name: 'Visit America',
      image: 'visit-america-screenshot.png',
      imageAlt: 'screenshot Visit America home page with search bar and banner of Grand Canyon',
      githubLink: '//github.com/SGiel/visit-america',
      githubLinkAlt: 'Visit America github repository',
      siteLink: '//sgiel.github.io/visit-america/',
      siteLinkAlt: 'Visit America live application',
      skills: 'JS/Apis/Materialize',
      id: 4
    },
    {
      name: 'Workday Scheduler',
      image: 'workday-scheduler-screenshot.png',
      imageAlt: 'screenshot Workday Scheduler home page with list of workday events filled out',
      githubLink: '//github.com/SGiel/workday-scheduler',
      githubLinkAlt: 'Workday Scheduler github repository',
      siteLink: '//sgiel.github.io/workday-scheduler/',
      siteLinkAlt: 'Workday Scheduler live application',
      skills: 'JQuery',
      id: 5
    },
    {
      name: 'Camper Van',
      image: 'camper-van-screenshot.png',
      imageAlt: 'screenshot of Camper Van website including brown camper van with orange kayaks on top',
      githubLink: '//github.com/SGiel/camper-van',
      githubLinkAlt: 'Camper Van github repository',
      siteLink: '//sgiel.github.io/camper-van/',
      siteLinkAlt: 'Camper Van live application',
      skills: 'HTML/CSS/Javascript',
      id: 6
    },
  ]);

  // filter through projects to find the projects specified ids
  const currentProjects = projects.filter((project) => 
    (project.id >= startId && project.id <= stopId));

  return (
    <Router>
      {currentProjects.map((project, i) => (


        <div className="col-12">
          <div className="text-center" id="project-image-1">
            <div className="project-image-wrapper">
              <img className="img-fluid rounded"
                src={require(`../assets/images/${project.image}`).default}
                // src={require(`${project.image}`).default}
                alt={project.imageAlt} />
              <div className="project-text">
                <Link to={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="fa fa-github mx-1 git-link"
                  alt={project.githubLinkAlt}
                >
                </Link>
                <Link to={project.siteLink}
                  target='_blank'
                  className="project-link"
                  alt={project.siteLinkAlt}
                >
                  <h3>{project.name}</h3>
                </Link>
                <h4>{project.skills}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Router>

  )
}

export default Project
