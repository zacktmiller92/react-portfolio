import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';


function Footer() {


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col">

                    <nav className="navbar navbar-expand d-flex flex-row-reverse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">footer 1</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#">footer 2</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#">footer 3</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Footer;