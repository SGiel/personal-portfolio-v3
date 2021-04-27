import React from 'react';


function Resume() {
  return (

    <section className='col-8' id='skills'>
      <h1>Skills</h1>
      <div className='row'>
        <div className='col-6' id='front-end'>
          <h3>Front-End Developer</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
          </ul>
        </div>
        <div className='col-6' id='back-end'>
          <h3>Back-End Developer</h3>
          <ul>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Handlebars.js</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>IndexDB</li>
          </ul>
        </div>
      </div>
      <div className='resume-btn-wrapper'>
        <button type='button' className='resume-btn'>Download Resume Here</button>
      </div>
    </section>
  );
}

export default Resume;