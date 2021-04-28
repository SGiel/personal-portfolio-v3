import React from 'react';


function Footer() {
  return (

    <footer className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10 justify-content-center" id="footer-col">
          <p>Get in Touch &nbsp; &nbsp; ➖ &nbsp; &nbsp; </p>
          <div id="links">
            <a href="https://github.com/SGiel/" 
              target="_blank" 
              rel="noreferrer" 
              className="fa fa-github mx-1" 
              style={{color:'black'}}
              alt="personal link to Github"
              >
            </a>
            <a href="https://www.facebook.com/stephanie.giel" 
              target="_blank" rel="noreferrer" 
              className="fa fa-facebook mx-1"
              alt="personal link to Facebook"
              >
            </a>
            <a href="https://www.instagram.com/sgiel/" 
              target="_blank" rel="noreferrer" 
              className="fa fa-instagram mx-1"
              alt="personal link to Instagram"
              >
            </a>
            <a href="https://www.linkedin.com/in/stephanie-giel-5a3ab61ba/" 
              target="_blank" 
              rel="noreferrer" 
              className="fa fa-linkedin mx-1"
              alt="personal link to Linkedin"
              >
            </a>
          </div>
        </div>

      </div>
    </footer>

  );
}

export default Footer;