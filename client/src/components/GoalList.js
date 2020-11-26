import React, { Component } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, deleteItem } from '../actions/itemActions';

class GoalList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        
        const { items } = this.props.item;        

        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="goal-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroup.Item>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroup.Item>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

GoalList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(GoalList);