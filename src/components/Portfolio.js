
import { useState } from 'react';
import Project from './Project';
import projectData from './projects.json'

function Portfolio() {

  const [projects] = useState(projectData);

  // filter through projects to find the projects specified ids
  const projectList= (startId, stopId) => {
    return projects.filter((project) =>
    (parseInt(project.id) >= startId && parseInt(project.id) <= stopId));
  };


  return (
    // This column holds 1 column with 1 row and inside 1 column with 1 row and 2 columns with 2 rows
    <section className="col-10" id="projects">
      <h1>Portfolio</h1>
      <div className="row">
        {projectList(1,3).map((project,i) => (

          <div className="col-12 col-md-6" key={i}>
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <div className="project-image-wrapper" >
                    <Project project={project}></Project>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {projectList(4,6).map((project,i) => (

          <div className="col-12 col-md-6" key={i}>
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <div className="project-image-wrapper" >
                  <Project project={project}></Project>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Portfolio;