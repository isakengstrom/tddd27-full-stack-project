import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    state = {
        isOpen: false,
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <Nav.Item>
                    <span className="navbar-text mr-3">
                        <strong>{ user ?  `Welcome ${user.name}` : '' }</strong>
                    </span>
                </Nav.Item>
                <Nav.Item>
                    <Logout />
                </Nav.Item>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <Nav.Item>
                    <RegisterModal />
                </Nav.Item>
                <Nav.Item>
                    <LoginModal />
                </Nav.Item>
            </Fragment>
        )

        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="sm">
                    <Container>
                        <Navbar.Brand href="/">COAL</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);