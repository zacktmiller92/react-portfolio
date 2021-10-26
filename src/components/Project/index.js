import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import background1 from '../../assets/img/project-1-screenshot.png'
import background2 from '../../assets/img/project-2-screenshot.png'
import background3 from '../../assets/img/milkyway.jpg'

function Project() {

  const imgStyles = {
    width: '600px'
  };

  return (

    <Container>
      <Row>
        <Col>
          <a href="https://zacktmiller92.github.io/pokedex/" target="_blank">
          <img src={background1} style={imgStyles}></img>
          </a>
        </Col>

        <Col>
        <a href="https://github.com/Chasetopher/deep-blue" target="_blank">
        <img src={background2} style={imgStyles}></img>
        </a>
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="https://www.google.com" target="_blank">
          <img src={background3} style={imgStyles}></img>
          </a>
        </Col>

        <Col>
        <img src={background3} style={imgStyles}></img>
        </Col>
      </Row>
    </Container>

  );
};

export default Project;