import React, { Component } from 'react';
import  { Button, Modal, Form, NavLink, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
//import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class SignInModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null,
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    };


    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;

        if(error !== prevProps.error) {
            // Check for register error
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, close modal
        if(this.state.modal) {
            if(isAuthenticated) {
                this.toggle();
            }
        }
    };

    toggle = () => {
        // Clear errors
        this.props.clearErrors();

        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password,
        }

        // Attempt login
        this.props.login(user);
    }

    render() {
        return(
            <div>
                <Button onClick={this.toggle} variant="outline-light" href="#">
                    Sign in
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header toggle={this.toggle} closeButton>
                        Sign in
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.msg ? (<Alert variant="danger">{ this.state.msg }</Alert>) : null }
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label for="email">Email</Form.Label>
                                <Form.Control 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Form.Label for="password">Password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button variant="dark" style={{ marginTop: '2rem' }} type="submit" block>
                                    Sign in
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(SignInModal);