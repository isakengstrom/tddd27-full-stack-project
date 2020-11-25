import React, { Component } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

class TempList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'item1'},
            {id: uuid(), name: 'item2'},
            {id: uuid(), name: 'item3'},
            {id: uuid(), name: 'item4'},
        ]
    }

    render() {
        const { items } = this.state;
        
        const addItem = () => {
            const name = prompt('Enter Item');
            if(name) {
                this.setState(state => ({
                    items: [...state.items, {id: uuid(), name }]
                }));
            }
        }

        const removeItem = (id) => {
            this.setState(state => ({
                items: state.items.filter(item => item.id !== id)
            }));
        }

        return(
            <Container>
                <Button
                    variant="dark"
                    style={{ marginTop: '2rem', marginBottom: '2rem'}}
                    onClick={() => addItem()}
                >
                    Add item
                </Button>
                <ListGroup>
                    <TransitionGroup className="temp-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroup.Item>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="sm"
                                        onClick={() => removeItem(id)}
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

export default TempList;