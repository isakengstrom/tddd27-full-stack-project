import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
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
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <RegisterModal />
                                </Nav.Item>
                                <Nav.Item>
                                    <LoginModal />
                                </Nav.Item>
                                <Nav.Item>
                                    <Logout />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
}


export default AppNavbar;