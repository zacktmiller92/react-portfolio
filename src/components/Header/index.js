import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation';


function Header(props) {

    const {
        pages = [],
        setCurrentPage
    } = props;

    return (
        <div className="bg-light">
        <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
        >
        </Navigation>
        </div>
    )
}

export default Header;