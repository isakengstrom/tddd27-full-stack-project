import React, { Component } from 'react';
import  {
    Button,
    Modal,
    Form,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
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
            id: uuid(),
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
                <Button
                    variant="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >
                    Add Goal
                </Button>
                <Modal
                    show={this.state.modal}
                    toggle={this.toggle}
                >
                    <Modal.Header toggle={this.toggle}>
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
                                <Button
                                    variant="dark"
                                    style={{ marginTop: '2rem' }}
                                    type="submit"
                                    block
                                >
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
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);