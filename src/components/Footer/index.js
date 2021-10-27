import React from 'react';

function Footer() {


    return (
        <div className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row-reverse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener" href="https://github.com/zacktmiller92">Github</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener" href="https://www.linkedin.com/in/zack-miller/">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener" href="https://twitter.com/zackmiller92">Twitter</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
}

export default Footer;