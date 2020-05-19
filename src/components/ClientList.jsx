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

    render() {
        const { items } = this.state
        return (
            <Container>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={() =>{
                    const name = prompt('Enter Client')
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }))
                    }
                }}
                >Add Client</Button>
            </Container>
        )
    }
}

export default ClientList