import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="sm">
                    <Container>
                        <Navbar.Brand href="/">COAL</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Item className="ml-auto">
                                <RegisterModal />
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
}


export default AppNavbar;