import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


const Project = ({ project }) => {



  return (
    <Router>
      <img className="img-fluid rounded"
        src={require(`../assets/images/${project.image}`).default}
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
    </Router>

  )
}

export default Project
