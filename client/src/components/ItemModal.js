import React, { Component } from 'react';
import  { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
//import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types'; 

import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close Modal
        this.toggle();
    }

    render() {
        return(
            <div>
                { this.props.isAuthenticated ? 
                    <Button variant="dark" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                    Add Goal
                    </Button>
                    :
                    <h4 className="mb-3 ml-4">Sign in to manage goals</h4>
                }
                
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header toggle={this.toggle} closeButton>
                        Add To Goals
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label for="goal">Goal</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="name"
                                    id="goal"
                                    placeholder="Add a goal"
                                    onChange={this.onChange}
                                />
                                <Button variant="dark" style={{ marginTop: '2rem' }} type="submit" block>
                                    Add Goal
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
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(ItemModal);