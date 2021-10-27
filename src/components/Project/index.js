import React from 'react';

import background1 from '../../assets/img/project-1-screenshot.png'
import background2 from '../../assets/img/project-2-screenshot.png'
import background3 from '../../assets/img/milkyway.jpg'

function Project() {

  const imgStyles = {
    width: '600px'
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col">
          <a href="https://zacktmiller92.github.io/pokedex/" target="_blank" rel="noopener noreferrer">
            <img src={background1} style={imgStyles}></img>
          </a>
        </div>

        <div className="col">
          <a href="https://github.com/Chasetopher/deep-blue" target="_blank" rel="noopener noreferrer">
            <img src={background2} style={imgStyles}></img>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={background3} style={imgStyles}></img>
          </a>
        </div>

        <div className="col">
          <img src={background3} style={imgStyles}></img>
        </div>
      </div>
    </div>

  );
};

export default Project;