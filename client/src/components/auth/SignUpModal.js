import React, { Component } from 'react';
import  { Button, Modal, Form, NavLink, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
//import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class SignUpModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null,
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    };


    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;

        if(error !== prevProps.error) {
            // Check for register error
            if(error.id === 'REGISTER_FAIL') {
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

        const { name, email, password } = this.state;

        // Create user object
        const newUser = {
            name,
            email,
            password,
        };

        // Attempt to register
        this.props.register(newUser);

    }

    render() {
        return(
            <div>
                <Button className="mr-2" onClick={this.toggle} variant="outline-light" href="#">
                    Sign up
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header toggle={this.toggle} closeButton>
                        Sign up
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.msg ? (<Alert variant="danger">{ this.state.msg }</Alert>) : null }
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label for="name">Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
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
                                    Sign up
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

export default connect(mapStateToProps, { register, clearErrors })(SignUpModal);