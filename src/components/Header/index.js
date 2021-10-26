import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation';


function Header() {


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Zack Miller</h1>
                </Col>
                <Col>
                <Navigation></Navigation>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;