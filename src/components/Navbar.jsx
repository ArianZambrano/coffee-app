import React from 'react';

const Navbar = () => {
    return(
        <nav className="Navbar-Container">
        <h1 className="Navbar-Title">Coffee Orders</h1>
        <ul className="Navbar-List">
            <li className="Navbar-Item">
                <a className="Navbar-Item-Link" href="#" target="_blank">
                    Home
                </a>
            </li>
            <li className="Navbar-Item">
                <a className="Navbar-Item-Link" href="https://github.com/ArianZambrano" target="_blank">
                    About Me
                </a>
            </li>
            <li className="Navbar-Item">
                <a className="Navbar-Item-Link" href="https://github.com/ArianZambrano" target="blank">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;