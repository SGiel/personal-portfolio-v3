import React from 'react';
import background from "../assets/images/annie-spratt-gSQbip5HHuc-unsplash.jpg";

function Namebar() {
  return (

    <div className="col-2" id="name-bar" >
      <div id="name">
        <p>S</p>
        <p>T</p>
        <p>E</p>
        <p>P</p>
        <p>H</p>
        <p>A</p>
        <p>N</p>
        <p>I</p>
        <p>E</p>
        <p id="bullet">⚫️</p>
        <p>G</p>
        <p>I</p>
        <p>E</p>
        <p>L</p>
        <div id="name-bar-after" style={{ backgroundImage: `url(${background})`, position: 'absolute', backgroundSize: 'cover' }} />
      </div>
    </div>

  );
}

export default Namebar;