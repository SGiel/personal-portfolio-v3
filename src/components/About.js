import React from 'react';
import personalImage from "../assets/images/stephanie-porfolio-pic.jpeg";

function About() {
  return (

    <section className="col-8" id="about-me">
    <h1>About Me</h1>

    <div className="row justify-content-center" id="about-me-image">
      <img src={personalImage} 
      alt="Stephanie kneeling down with her dog by her side" />
    </div>
    <div className="row justify-content-center" id="about-me-text">
      <div className="col-sm-12 col-lg-2"></div>
      <div className="col-sm-12 col-lg-8">
        <p>
          My name is Stephanie Giel. I currently live in Phoenix, Arizona, and I am working
          hard at becoming full-stack web developer through the University of Arizona's
          coding bootcamp. 
        </p>
        <p> I graduated from Arizona State University with a Bachelor in Mathematics and a Masters in
          Information Systems with an emphasis in Statistical Data Analysis. 
        </p>
        <p> I worked for 22 years for the Clinical Pharmacokinetics group of a pharmaceutical company
          doing statistical programming and pharmacokinetic data analysis in SAS (a statistical programming
          language) and writing scientific reports to be submitted to the FDA. 
        </p>
        <p>
          My life took me in a different direction, though. I am currently working at a job with a
          wonderful atmosphere and philosophy surrounded by people I enjoy, but I have found that I
          miss coding.
        </p>
        <p>
          My goal is to seek freelance work in website design and development.
        </p>
      </div>
      <div className="col-sm-12 col-lg-2">

      </div> 
    </div>
  </section>


  );
}

export default About;