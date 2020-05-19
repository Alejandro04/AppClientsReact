import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid';

class ClientList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Client 1' },
            { id: uuid(), name: 'Client 2' },
            { id: uuid(), name: 'Client 3' },
            { id: uuid(), name: 'Client 4' },
        ]
    }

    handleDelete = (id) => {
        console.log(id)
    };


    render() {
        const { items } = this.state
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Client')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}
                >Add Client</Button>

                <ListGroup>
                    <TransitionGroup className="client-list">
                        {items.map(({id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="mr-4"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.handleDelete(id)}
                                    >
                                        &times;
                                        </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ClientList