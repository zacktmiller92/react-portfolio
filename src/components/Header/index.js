import React from 'react';
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