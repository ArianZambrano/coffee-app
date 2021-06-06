import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    background-color: #40EC8E;
    display: flex;
    justify-content: space-between;
`;

const NavbarTitle = styled.h1`
    font-size: 1.5rem;
    margin: .8rem 1.6rem;
    font-family: 'Roboto Mono', monospace;
`

const NavbarList = styled.ul`
    display: flex;
    list-style: none;
`

const NavbarItem = styled.li`
    margin: 0 2rem;
` 

const NavbarLink = styled.a`
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
`

const Navbar = () => {
    return (
        <header>
            <NavbarContainer className="Navbar-Container">
                <NavbarTitle className="Navbar-Title">
                    Coffee Orders
                </NavbarTitle>
                <NavbarList className="Navbar-List">
                    <NavbarItem className="Navbar-Item">
                        <NavbarLink className="Navbar-Item-Link" href="#" target="_blank">
                            Home
                        </NavbarLink>
                    </NavbarItem>
                    <NavbarItem className="Navbar-Item">
                        <NavbarLink className="Navbar-Item-Link" href="https://github.com/ArianZambrano" target="_blank">
                            About Me
                        </NavbarLink>
                    </NavbarItem>
                    <NavbarItem className="Navbar-Item">
                        <NavbarLink className="Navbar-Item-Link" href="https://github.com/ArianZambrano" target="blank">
                            Contact
                        </NavbarLink>
                    </NavbarItem>
                </NavbarList>
            </NavbarContainer>
        </header>
    )
}

export default Navbar;