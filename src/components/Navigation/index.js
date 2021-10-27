import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import Project from '../../components/Project';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage
    } = props;

    return (
        <>
            <Nav>
                <Nav.Item>
                    <a href="#" onClick={() => setCurrentPage(pages[0])} >About</a>
                </Nav.Item>
                <Nav.Item>
                    <a href="#" onClick={() => setCurrentPage(pages[1])} >Project</a>
                </Nav.Item>
                <Nav.Item>
                    <a href="#" onClick={() => setCurrentPage(pages[2])} >Contact</a>
                </Nav.Item>
                <Nav.Item>
                    <a href="#" onClick={() => setCurrentPage(pages[3])} >Resume</a>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Navigation;