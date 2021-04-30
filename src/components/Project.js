import { useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import projectData from './projects.json'

const Project = ({ startId, stopId }) => {


  const [projects] = useState(projectData);

  // filter through projects to find the projects specified ids
  const currentProjects = projects.filter((project) => 
    (parseInt(project.id) >= startId && parseInt(project.id) <= stopId));

  return (
    <Router>
      {currentProjects.map((project, i) => (


        <div className="col-12">
          <div className="text-center" id="project-image-1">
            <div className="project-image-wrapper">
              <img className="img-fluid rounded"
                src={require(`../assets/images/${project.image}`).default}
                // src={require(`${project.image}`).default}
                alt={project.imageAlt} 
                key={project.image}
                />
              <div className="project-text">
                <Link to={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="fa fa-github mx-1 git-link"
                  alt={project.githubLinkAlt}
                  key={project.githubLink}
                >
                </Link>
                <Link to={project.siteLink}
                  target='_blank'
                  className="project-link"
                  alt={project.siteLinkAlt}
                  key={project.siteLink}
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
