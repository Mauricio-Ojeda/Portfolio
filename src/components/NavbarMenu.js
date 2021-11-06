import React from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';


const NavbarMenu = () => {
    return (
        <>
            <Navbar className="section"  expand="lg" variant="dark">
                <Container>
                    <div className="navbar-wrapper d-md-flex justify-content-lg-center justify-content-md-between">
                        <Navbar.Brand className="me-5" href="#home">Mauricio Ojeda</Navbar.Brand>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="links-wrapper ms-auto">
                            <Nav.Link className="links" href="#work">Proyectos</Nav.Link>
                            <Nav.Link className="links" href="#about">Acerca de mi</Nav.Link>
                            <Nav.Link className="links" href="#contact">Contactame</Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            
        </>
    )
}

export default NavbarMenu
