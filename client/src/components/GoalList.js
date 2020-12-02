import React, { Component } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, deleteItem } from '../actions/itemActions';

class GoalList extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    }

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
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroup.Item>
                                    { this.props.isAuthenticated ?  
                                        <Button className="remove-btn" variant="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>
                                            &times;
                                        </Button>
                                        :
                                        null
                                    }
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

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(GoalList);