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
      <div className="row m-4">
        <div className="col-12 col-md-6 p-1">
          <a href="https://zacktmiller92.github.io/pokedex/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={background1}></img>
          </a>
        </div>

        <div className="col-12 col-md-6 p-1">
          <a href="https://github.com/Chasetopher/deep-blue" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={background2}></img>
          </a>
        </div>
      </div>

      <div className="row m-4">
        <div className="col-12 col-md-6 p-1">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={background3}></img>
          </a>
        </div>

        <div className="col-12 col-md-6 p-1">
          <img className="img-fluid" src={background3}></img>
        </div>
      </div>
    </div>

  );
};

export default Project;