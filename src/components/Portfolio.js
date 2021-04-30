
import React from 'react';
import Project from './Project';


function Portfolio() {


  return (
    // This column holds 1 column with 1 row and inside 1 column with 1 row and 2 columns with 2 rows
    <section className="col-10" id="projects">
      <h1>Portfolio</h1>
      <div className="row">

        <div className="col-12 col-md-6">
          <div className="row">
            <Project startId={1}
              stopId={3}
            />

          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <Project startId={4}
              stopId={6}
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;