
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class AppNavbar extends Component {
    
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="sm">
                    <Container>
                        <Navbar.Brand href="/">COAL</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="https://www.ida.liu.se/~TDDD27/">Course Website</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
}


export default AppNavbar;