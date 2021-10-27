import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import Project from '../../components/Project';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';

import logo from '../../assets/img/zack-miller-logo.png'

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage
    } = props;

    return (

        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img className="nav-brand" src={logo}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCurrentPage(pages[0])} >About</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCurrentPage(pages[1])} >Project</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCurrentPage(pages[2])} >Contact</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCurrentPage(pages[3])} >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navigation;