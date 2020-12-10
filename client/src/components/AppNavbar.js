import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpModal from './auth/SignUpModal';
import SignInModal from './auth/SignInModal';
import SignOut from './auth/SignOut';

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
            <strong>{ user ?  `${user.name}` : '' }</strong>
          </span>
        </Nav.Item>
        <Nav.Item>
          <SignOut />
        </Nav.Item>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Nav.Item>
          <SignUpModal />
        </Nav.Item>
        <Nav.Item>
            <SignInModal />
        </Nav.Item>
      </Fragment>
    )

    return(
      <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/logo_b_g.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Coalendar
            </Navbar.Brand>
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